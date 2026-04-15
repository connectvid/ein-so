import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForCanadaClient from "./EinForCanadaClient";

export const metadata: Metadata = {
  title: "EIN for Canadians: Cross-Border Business Guide (2026)",
  description:
    "Canadian entrepreneurs can get a US EIN without an SSN. Learn how to apply from Canada for cross-border e-commerce, Amazon.com selling, and US banking. ein.so handles it for $49.",
  alternates: { canonical: "/ein-for-canada/" },
};

const faqs = [
  {
    q: "Can Canadian citizens get a US EIN?",
    a: "Yes. Canadian citizens and residents can get a US EIN by submitting Form SS-4 by fax or phone. You do not need a US Social Security Number. Your Canadian passport number serves as your identifying number on the SS-4. ein.so handles the entire process for $49 (Standard, 4-7 business days) or $97 (Express, 7 business days).",
  },
  {
    q: "Do Canadians need an SSN or ITIN to get a US EIN?",
    a: "No. Canadian applicants do not need an SSN or ITIN. The IRS online EIN tool requires an SSN, which locks out Canadian applicants. The fax method accepts your Canadian passport number as identification. ein.so uses the fax method to file your Form SS-4 with the IRS.",
  },
  {
    q: "Can I call the IRS from Canada to get an EIN?",
    a: "Yes, Canadians can call the IRS at 267-941-1099 to apply by phone. Since Canada shares a similar time zone and has no international calling barriers, this is technically possible. However, hold times often exceed 60 minutes, and you must call during IRS business hours (6 AM - 11 PM ET, Monday-Friday). The fax method through ein.so is faster and more reliable.",
  },
  {
    q: "How long does it take for a Canadian to receive a US EIN?",
    a: "Through ein.so, Standard processing takes 4-7 business days ($49) and Express takes 7 business days ($97). By phone, you may receive your EIN the same day if you reach an agent. The DIY fax method takes 4-7 business days if your form is error-free.",
  },
  {
    q: "Do I need a US LLC to get an EIN as a Canadian?",
    a: "Not necessarily. You can apply for an EIN as a foreign individual if you have US tax obligations. However, most Canadians apply for an EIN through a US LLC because it provides liability protection, US banking access, and a professional US business presence. The LLC is the most common structure for Canadian cross-border entrepreneurs.",
  },
  {
    q: "Can I sell on Amazon.com from Canada with a US EIN?",
    a: "Yes. Many Canadian sellers operate on both Amazon.ca and Amazon.com. Your US EIN allows you to complete the Amazon tax interview and register as a US-based seller through your LLC. This gives you access to Amazon's US FBA warehouses and the much larger US customer base.",
  },
  {
    q: "What is the difference between a Canadian BN and a US EIN?",
    a: "A Canadian Business Number (BN) is issued by the CRA for Canadian tax purposes. A US EIN is issued by the IRS for US tax purposes. They serve different jurisdictions. If you operate a business in both countries, you need both numbers. Your BN is not accepted for US tax or banking purposes.",
  },
];

export default function EinForCanadaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Non-Residents", url: "/ein-for-non-residents/" },
          { name: "EIN for Canada", url: "/ein-for-canada/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Canadians: Cross-Border Business Guide (2026)"
        description="Complete guide for Canadian entrepreneurs applying for a US EIN. Cross-border e-commerce, Amazon.com vs Amazon.ca, Shopify integration, and US banking from Canada."
        url="/ein-for-canada/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForCanadaClient faqs={faqs} />
    </>
  );
}
