import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForStripeClient from "./EinForStripeClient";

export const metadata: Metadata = {
  title: "EIN for Stripe: Accept US Payments as Non-Resident (2026)",
  description:
    "Stripe requires an EIN for US-based payment processing. Non-residents can use Atlas or provide an EIN directly.",
  alternates: { canonical: "/ein-for-stripe/" },
};

const faqs = [
  {
    q: "Does Stripe require an EIN?",
    a: "Stripe requires a Tax Identification Number for US-based accounts. If you operate as a business entity (LLC or corporation), you must provide an EIN. Sole proprietors can use an SSN, but an EIN is recommended for identity protection. Non-US residents must provide an EIN to process US payments.",
  },
  {
    q: "Can non-US residents use Stripe?",
    a: "Yes. Non-US residents can use Stripe through two paths: form a US LLC and provide an EIN directly, or use Stripe Atlas to incorporate and get set up. Either way, you need an EIN. ein.so provides EINs for non-residents for $49 (Standard) or $97 (Express).",
  },
  {
    q: "What is Stripe Atlas and do I still need an EIN?",
    a: "Stripe Atlas is an incorporation service that helps non-US entrepreneurs form a US company, get an EIN, and open a bank account. Atlas charges $500 and includes EIN processing. If you already have a US LLC, you do not need Atlas -- you just need an EIN, which ein.so provides for $49.",
  },
  {
    q: "How do I add my EIN to Stripe?",
    a: "During Stripe account activation, you will be prompted to enter your business details including your EIN. Go to Settings > Business Details in your Stripe dashboard. Enter your 9-digit EIN and ensure the legal business name matches your EIN confirmation letter. Stripe validates your information with the IRS.",
  },
  {
    q: "Does Stripe report income to the IRS?",
    a: "Yes. Stripe issues Form 1099-K to the IRS for US accounts that process more than $600 in payments during a calendar year. Your EIN appears on this form. Stripe cannot generate these tax forms without a valid TIN, which is why they require one during setup.",
  },
  {
    q: "Can I use the same EIN for Stripe and PayPal?",
    a: "Yes. Your EIN is tied to your business entity, not to a specific payment processor. You can use the same EIN across Stripe, PayPal, Square, Shopify Payments, and any other platform. There is no need for separate EINs for different payment processors.",
  },
  {
    q: "How long does it take to get an EIN for Stripe?",
    a: "US residents with an SSN can get an EIN instantly online. Non-US residents who apply by fax receive their EIN in 4-7 business days. ein.so's Express service ($97) delivers in 2-3 business days. Once you have your EIN, adding it to Stripe takes just a few minutes.",
  },
  {
    q: "What if Stripe cannot verify my EIN?",
    a: "Stripe validates EINs with the IRS database. Verification failures usually happen because the EIN was recently issued (wait 2 weeks for IRS propagation), the business name does not match exactly, or the EIN was entered incorrectly. Check your EIN confirmation letter and try again after 2 weeks if your EIN is new.",
  },
];

export default function EinForStripePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "What Can You Do With an EIN?", url: "/what-can-you-do-with-ein/" },
          { name: "EIN for Stripe", url: "/ein-for-stripe/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Stripe: Accept US Payments as Non-Resident (2026)"
        description="Complete guide to using an EIN with Stripe. Covers Stripe Atlas comparison, non-resident payment processing, and step-by-step account setup."
        url="/ein-for-stripe/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForStripeClient faqs={faqs} />
    </>
  );
}
