import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForAmazonSellersClient from "./EinForAmazonSellersClient";

export const metadata: Metadata = {
  title: "EIN for Amazon Sellers: Required for FBA & Seller Central (2026)",
  description:
    "Amazon Seller Central requires an EIN for the tax interview. Learn how to get an EIN for Amazon FBA, complete the tax interview, and start selling. Non-US sellers welcome.",
  alternates: { canonical: "/ein-for-amazon-sellers/" },
};

const faqs = [
  {
    q: "Does Amazon require an EIN to sell?",
    a: "Amazon requires a Tax Identification Number (TIN) to complete the tax interview during Seller Central registration. US residents can use their SSN, but non-US residents need an EIN. Even US sellers benefit from using an EIN instead of an SSN to protect their personal information on tax documents.",
  },
  {
    q: "Can I sell on Amazon without an EIN?",
    a: "US residents can technically use their SSN to register on Amazon Seller Central. Non-US residents cannot -- they must have an EIN or ITIN. However, using an SSN exposes your personal information. An EIN is strongly recommended for all sellers, and it is mandatory for non-US residents and any seller operating through an LLC or corporation.",
  },
  {
    q: "How do I complete the Amazon tax interview with my EIN?",
    a: "In Seller Central, go to Settings > Account Info > Tax Information. Click 'Tax Interview.' Select your entity type (individual or business), enter your EIN when prompted for a TIN, provide your business name and address, and submit. Amazon validates your EIN with the IRS, which may take 24-48 hours.",
  },
  {
    q: "Do non-US Amazon sellers need an EIN?",
    a: "Yes. Non-US residents who want to sell on Amazon.com (the US marketplace) need an EIN to complete the tax interview. Without an EIN, you cannot complete your Seller Central registration and cannot list products for sale. ein.so handles EIN applications for non-US Amazon sellers for $49.",
  },
  {
    q: "How long does it take to get an EIN for Amazon selling?",
    a: "If you apply online with an SSN or ITIN, you receive your EIN instantly. For non-US sellers using the fax method, processing takes 4-7 business days. ein.so's Express service ($97) can deliver your EIN in 2-3 business days so you can start your Amazon business sooner.",
  },
  {
    q: "Do I need an EIN for Amazon FBA specifically?",
    a: "Yes. Amazon FBA (Fulfillment by Amazon) sellers must complete the same tax interview as all other Amazon sellers. The EIN is required during this registration step. Additionally, if you are selling through an LLC (which is recommended for liability protection), the LLC requires its own EIN.",
  },
  {
    q: "Can I use the same EIN for Amazon and my bank account?",
    a: "Yes. Your EIN is assigned to your business entity and can be used for all business purposes, including Amazon Seller Central registration, bank account opening, tax filing, and payment processor setup. You do not need separate EINs for different purposes.",
  },
  {
    q: "What happens if Amazon can't validate my EIN?",
    a: "Amazon validates EINs with the IRS database. If validation fails, it is usually because the EIN was recently issued and has not propagated through IRS systems (wait 2 weeks after issuance). Other causes include entering the EIN incorrectly or a mismatch between the business name on your EIN and the name in Seller Central.",
  },
];

export default function EinForAmazonSellersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
          { name: "EIN for Amazon Sellers", url: "/ein-for-amazon-sellers/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Amazon Sellers: Required for FBA & Seller Central (2026)"
        description="Complete guide to getting an EIN for Amazon selling. Covers Seller Central tax interview, FBA requirements, non-US seller registration, and step-by-step instructions."
        url="/ein-for-amazon-sellers/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForAmazonSellersClient faqs={faqs} />
    </>
  );
}
