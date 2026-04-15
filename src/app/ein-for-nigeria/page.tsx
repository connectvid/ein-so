import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForNigeriaClient from "./EinForNigeriaClient";

export const metadata: Metadata = {
  title: "EIN for Nigerian Entrepreneurs: Apply From Nigeria (2026)",
  description:
    "Nigerian entrepreneurs can get a US EIN without an SSN. Learn how tech founders, freelancers, and e-commerce sellers from Nigeria apply for an EIN. ein.so handles it for $49.",
  alternates: { canonical: "/ein-for-nigeria/" },
};

const faqs = [
  {
    q: "Can Nigerian citizens get a US EIN?",
    a: "Yes. Nigerian citizens can get a US EIN by submitting Form SS-4 by fax to the IRS. No SSN or ITIN is required. Your Nigerian passport number serves as your identification. ein.so handles the entire process for $49 (Standard, 4-7 business days) or $97 (Express, 7 business days).",
  },
  {
    q: "Do Nigerian entrepreneurs need an SSN to get a US EIN?",
    a: "No. Nigerian applicants do not need a Social Security Number or ITIN. Your Nigerian passport number is used on Form SS-4 as your identifying number. The IRS online EIN tool requires an SSN, so Nigerian applicants must use the fax method. ein.so handles this fax filing for you.",
  },
  {
    q: "How long does it take for a Nigerian to receive a US EIN?",
    a: "Through ein.so, Standard processing takes 4-7 business days ($49) and Express takes 7 business days ($97). The IRS phone method is impractical from Nigeria due to expensive international calls and time zone differences. The fax method through ein.so is the most reliable option.",
  },
  {
    q: "Can I use my EIN with Paystack or Flutterwave?",
    a: "Paystack and Flutterwave are Nigerian payment processors primarily for local transactions. Your US EIN enables you to set up US payment processors like Stripe, which handle international and US-based payments. You can use your Nigerian payment processors for local sales and Stripe for US/international sales.",
  },
  {
    q: "Can Nigerian tech startups use a US EIN?",
    a: "Yes. Many Nigerian tech startups form US LLCs (often in Delaware) to access US venture capital, payment processing, and banking infrastructure. Your EIN is required to open a US business bank account, set up Stripe, register with US app stores, and comply with US tax requirements.",
  },
  {
    q: "What is the difference between a Nigerian TIN and a US EIN?",
    a: "A Nigerian Tax Identification Number (TIN) is issued by the Federal Inland Revenue Service (FIRS) for Nigerian tax purposes. A US EIN is issued by the IRS for US tax purposes. They serve different countries. If you operate in both Nigeria and the US, you need both numbers.",
  },
  {
    q: "Can I sell on Amazon.com from Nigeria with a US EIN?",
    a: "Yes. Your US EIN and LLC let you register as a US seller on Amazon.com. You complete the tax interview with your EIN, list products, and use FBA for fulfillment. Combined with a US bank account, you can receive Amazon payments directly without routing through Nigerian banking.",
  },
];

export default function EinForNigeriaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Non-Residents", url: "/ein-for-non-residents/" },
          { name: "EIN for Nigeria", url: "/ein-for-nigeria/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Nigerian Entrepreneurs: Apply From Nigeria (2026)"
        description="Complete guide for Nigerian entrepreneurs applying for a US EIN. Tech startups, freelancing, e-commerce, and Paystack/Flutterwave integration."
        url="/ein-for-nigeria/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForNigeriaClient faqs={faqs} />
    </>
  );
}
