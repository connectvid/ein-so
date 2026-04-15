import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForPaypalClient from "./EinForPaypalClient";

export const metadata: Metadata = {
  title: "EIN for PayPal Business Account: Setup Guide (2026)",
  description:
    "PayPal requires an EIN for business accounts. Non-residents need an EIN to receive US payments through PayPal.",
  alternates: { canonical: "/ein-for-paypal/" },
};

const faqs = [
  {
    q: "Does PayPal require an EIN for a business account?",
    a: "Yes. PayPal requires a Tax Identification Number to set up a business account. US residents can use their SSN, but a business account linked to an LLC or corporation must use an EIN. Non-US residents need an EIN because they do not have an SSN. Personal PayPal accounts do not require an EIN.",
  },
  {
    q: "Can I use PayPal without an EIN?",
    a: "You can use a personal PayPal account without an EIN if you are a US resident. However, personal accounts have lower transaction limits, no business branding, and your SSN is used for tax reporting. Non-US residents who want to receive US business payments need a business account, which requires an EIN.",
  },
  {
    q: "How do I add my EIN to PayPal?",
    a: "Log in to PayPal, go to Settings > Account Settings > Business Information. Click Edit next to the EIN/TIN field and enter your 9-digit EIN. PayPal validates your EIN with the IRS, which may take 24-48 hours. Ensure the business name matches your EIN confirmation letter exactly.",
  },
  {
    q: "Does PayPal report income to the IRS?",
    a: "Yes. PayPal is required to send Form 1099-K to the IRS for US accounts that receive over $600 in goods and services payments in a calendar year. Your EIN appears on this form. This is why PayPal requires a TIN -- they cannot generate 1099-K forms without one.",
  },
  {
    q: "Can non-US residents open a PayPal US business account?",
    a: "Non-US residents can open a PayPal business account if they have a US-registered LLC and an EIN. You also need a US bank account linked to the PayPal account. ein.so helps non-residents get their EIN for $49 (Standard) or $97 (Express) so they can set up PayPal business accounts.",
  },
  {
    q: "How long does it take to get an EIN for PayPal?",
    a: "US residents with an SSN receive an EIN instantly from the IRS website. Non-US residents must apply by fax, which takes 4-7 business days. ein.so's Express service ($97) delivers in 7 business days. Once you have your EIN, adding it to PayPal takes minutes.",
  },
  {
    q: "Can I use the same EIN for PayPal and Stripe?",
    a: "Yes. Your EIN is assigned to your business entity and works across all payment processors. You can use the same EIN for PayPal, Stripe, Square, and any other platform that requires a TIN. You do not need separate EINs for different payment processors.",
  },
  {
    q: "What happens if PayPal cannot validate my EIN?",
    a: "If PayPal cannot validate your EIN, it is usually because the EIN was recently issued (wait 2 weeks for IRS database propagation) or there is a name mismatch between PayPal and your IRS records. Double-check that your business name matches your EIN confirmation letter exactly, including punctuation and spacing.",
  },
];

export default function EinForPaypalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "What Can You Do With an EIN?", url: "/what-can-you-do-with-ein/" },
          { name: "EIN for PayPal", url: "/ein-for-paypal/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for PayPal Business Account: Setup Guide (2026)"
        description="Complete guide to setting up a PayPal business account with an EIN. Covers tax reporting, non-resident requirements, and step-by-step setup instructions."
        url="/ein-for-paypal/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForPaypalClient faqs={faqs} />
    </>
  );
}
