// Server-only Stripe client. Never import this from a client component —
// it reads the secret key from the environment.
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

/** Whether a Stripe secret key is present (so we can degrade gracefully). */
export function isStripeConfigured(): boolean {
  return Boolean(key);
}

let client: Stripe | null = null;

/** Lazily create and reuse a single Stripe client. */
export function getStripe(): Stripe {
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  if (!client) client = new Stripe(key);
  return client;
}
