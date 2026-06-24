import { NextResponse } from "next/server";
import { getStripe, isStripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// EIN filing prices by plan, in cents. Standard $49, Express $97 — matches the
// pricing shown in the embedded checkout's plan picker.
const PLAN_AMOUNTS: Record<string, number> = {
  standard: 4900,
  express: 9700,
};
const DEFAULT_PLAN = "express";

// Live-test override: when the client sends a `testCoupon` matching the
// STRIPE_TEST_COUPON secret, charge $1 so a real (refundable) payment can be
// tested cheaply. Never triggers without the secret set.
const TEST_AMOUNT_CENTS = 100;
const TEST_COUPON = process.env.STRIPE_TEST_COUPON;

/**
 * Create a Stripe PaymentIntent for the embedded EIN checkout. The amount is
 * derived from the chosen plan (standard/express). Returns { clientSecret } for
 * the React Stripe Elements provider on the client.
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
  const testCoupon = String(body.testCoupon ?? "").trim();

  const planAmount = PLAN_AMOUNTS[plan] ?? PLAN_AMOUNTS[DEFAULT_PLAN];
  const isTest = Boolean(TEST_COUPON) && testCoupon === TEST_COUPON;
  const amount = isTest ? TEST_AMOUNT_CENTS : planAmount;

  try {
    const stripe = getStripe();

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      // Card + wallets (Apple Pay / Google Pay / Link); no redirect-based methods.
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
      description: `EIN filing — ${plan} plan (Form SS-4 prep + IRS submission).`,
      ...(email ? { receipt_email: email } : {}),
      metadata: { plan, email, businessName, entity, product: "ein.so" },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (err) {
    console.error("[payment-intent] Stripe error:", err);
    return NextResponse.json({ error: "payment_intent_failed" }, { status: 500 });
  }
}
