import type { Metadata } from "next";
import ApplyPageClient from "./ApplyPageClient";
import { FAQSchema, BreadcrumbSchema } from "../schema";

export const metadata: Metadata = {
  title: "Apply for EIN | Non-Resident Service | $49 Standard $97 Express",
  description: "Apply for your EIN as a non-US resident. We complete and file your SS-4 form. Standard $49 (5-7 days) or Express $97 (2-3 days). No SSN required.",
};

const faqs = [
  { q: "What information do I need to apply?", a: "You need your full legal name, date of birth, country of citizenship, mailing address, and business details (name, type, reason for applying). No SSN is required for non-US residents." },
  { q: "How will I receive my EIN?", a: "Your EIN will be delivered via email as soon as the IRS processes your application. Standard: 5-7 business days. Express: 2-3 business days." },
  { q: "Can I apply without a US address?", a: "Yes. Non-US residents can use their foreign address on the SS-4 form. You do not need a US address to get an EIN." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards through Stripe. Payment is secure and encrypted." },
  { q: "What if my application is rejected?", a: "If the IRS rejects your application for any reason we caused, we will refile at no additional cost or provide a full refund." },
];

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Apply", url: "/apply/" }]} />
      <FAQSchema faqs={faqs} />
      <ApplyPageClient faqs={faqs} />
    </>
  );
}
