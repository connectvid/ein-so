import type Stripe from "stripe";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { getDb, isMongoConfigured } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe webhook. Verifies the signature, then on `payment_intent.succeeded`
 * (the embedded EIN checkout confirms a PaymentIntent) marks the matching order
 * as paid in MongoDB.
 *
 * Configure the endpoint in Stripe as:
 *   https://www.ein.so/api/stripe-webhook/   (note the trailing slash)
 * and set STRIPE_WEBHOOK_SECRET to the signing secret it gives you.
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!isStripeConfigured() || !secret) {
    return new Response("Webhook not configured", { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  // Signature verification requires the raw, unparsed request body.
  const rawBody = await req.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    console.error("[webhook] signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const intent = event.data.object as Stripe.PaymentIntent;
    if (isMongoConfigured()) {
      try {
        const db = await getDb();
        await db.collection("orders").updateOne(
          { stripePaymentIntentId: intent.id },
          {
            $set: {
              status: "paid",
              paidAt: new Date(),
              amountPaid: intent.amount_received,
              customerEmail:
                intent.receipt_email ??
                (typeof intent.metadata?.email === "string" ? intent.metadata.email : null),
            },
          },
        );
      } catch (err) {
        console.error("[webhook] failed to mark order paid:", err);
        // Return 500 so Stripe retries delivery.
        return new Response("Database error", { status: 500 });
      }
    }
  }

  return new Response("ok", { status: 200 });
}
