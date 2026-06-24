import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { getDb, isMongoConfigured } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// EIN filing prices by plan, in cents. Standard $49, Express $97 — matches the
// pricing shown in the embedded checkout's plan picker.
const PLAN_AMOUNTS: Record<string, number> = {
  standard: 4900,
  express: 9700,
};
const DEFAULT_PLAN = "express";
// Stripe's minimum chargeable amount for USD.
const MIN_AMOUNT_CENTS = 50;

// Live-test override: a `coupon` matching the STRIPE_TEST_COUPON secret drops
// the charge to $1 without touching Stripe (handy when there's no real coupon).
const TEST_AMOUNT_CENTS = 100;
const TEST_COUPON = process.env.STRIPE_TEST_COUPON;

/**
 * Resolve a Stripe promotion code (e.g. "pay-one-usd") to the discounted amount.
 * PaymentIntents can't take a promo code directly, so we look the code up, read
 * its coupon, and compute the new amount ourselves. Falls back to the base
 * amount if the code is empty / invalid / inactive.
 */
async function resolveAmount(
  stripe: Stripe,
  code: string,
  baseAmount: number,
): Promise<{ amount: number; couponApplied: string | null }> {
  if (!code) return { amount: baseAmount, couponApplied: null };

  // Hardcoded test secret → flat $1 (no Stripe lookup needed).
  if (TEST_COUPON && code === TEST_COUPON) {
    return { amount: TEST_AMOUNT_CENTS, couponApplied: code };
  }

  try {
    const { data } = await stripe.promotionCodes.list({ code, active: true, limit: 1 });
    // The coupon may live at `coupon` (older API) or `promotion.coupon` (newer).
    const pc = data[0] as unknown as
      | {
          coupon?: string | { id?: string };
          promotion?: { coupon?: string | { id?: string } };
        }
      | undefined;
    if (!pc) return { amount: baseAmount, couponApplied: null };

    const couponRef = pc.coupon ?? pc.promotion?.coupon;
    const couponId = typeof couponRef === "string" ? couponRef : couponRef?.id;
    if (!couponId) return { amount: baseAmount, couponApplied: null };

    const coupon = await stripe.coupons.retrieve(couponId);
    if (!coupon.valid) return { amount: baseAmount, couponApplied: null };

    let amount = baseAmount;
    if (coupon.percent_off) amount = Math.round(baseAmount * (1 - coupon.percent_off / 100));
    else if (coupon.amount_off) amount = baseAmount - coupon.amount_off;

    amount = Math.max(amount, MIN_AMOUNT_CENTS);
    return { amount, couponApplied: code };
  } catch (err) {
    console.error("[payment-intent] coupon lookup failed:", err);
    return { amount: baseAmount, couponApplied: null };
  }
}

/**
 * Create a Stripe PaymentIntent for the embedded EIN checkout and persist a
 * pending order to MongoDB. The amount derives from the chosen plan
 * (standard/express), minus any applied coupon. Returns { clientSecret, amount,
 * couponApplied } for the React Stripe Elements provider on the client.
 *
 * Responds 503 if Stripe isn't configured so the client can show a graceful
 * "payment unavailable" state instead of breaking.
 */
export async function POST(req: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json({ error: "stripe_not_configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const plan = String(body.plan ?? DEFAULT_PLAN).trim();
  const email = String(body.email ?? "").trim();
  const businessName = String(body.businessName ?? "").trim();
  const entity = String(body.entity ?? "").trim();
  // Accept a real coupon field, or the legacy `testCoupon` (localStorage) value.
  const coupon = String(body.coupon ?? body.testCoupon ?? "").trim();

  const planAmount = PLAN_AMOUNTS[plan] ?? PLAN_AMOUNTS[DEFAULT_PLAN];

  try {
    const stripe = getStripe();
    const { amount, couponApplied } = await resolveAmount(stripe, coupon, planAmount);

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      // Card + wallets (Apple Pay / Google Pay / Link); no redirect-based methods.
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
      description: `EIN filing — ${plan} plan (Form SS-4 prep + IRS submission).`,
      ...(email ? { receipt_email: email } : {}),
      metadata: { plan, email, businessName, entity, product: "ein.so", coupon: couponApplied ?? "" },
    });

    // Best-effort: store a pending order. Never block checkout on the DB.
    if (isMongoConfigured()) {
      try {
        const db = await getDb();
        await db.collection("orders").insertOne({
          status: "pending",
          plan,
          amount,
          coupon: couponApplied,
          currency: "usd",
          email,
          businessName,
          entity,
          stripePaymentIntentId: intent.id,
          createdAt: new Date(),
        });
      } catch (err) {
        console.error("[payment-intent] failed to persist order:", err);
      }
    }

    return NextResponse.json({ clientSecret: intent.client_secret, amount, couponApplied });
  } catch (err) {
    console.error("[payment-intent] Stripe error:", err);
    return NextResponse.json({ error: "payment_intent_failed" }, { status: 500 });
  }
}
