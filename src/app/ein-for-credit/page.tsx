import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForCreditClient from "./EinForCreditClient";

export const metadata: Metadata = {
  title: "EIN for Business Credit: Build Credit Without SSN (2026)",
  description:
    "Use your EIN to build business credit separate from personal credit. Open business credit cards and establish a Dun & Bradstreet profile.",
  alternates: { canonical: "/ein-for-credit/" },
};

const faqs = [
  {
    q: "Can I build business credit with just an EIN?",
    a: "Yes. You can establish a business credit profile using your EIN without relying on your personal SSN. Register with Dun & Bradstreet to get a D-U-N-S number, open trade accounts with vendors that report to business credit bureaus, and pay on time. Over time, this builds a business credit score independent of your personal credit.",
  },
  {
    q: "What is a D-U-N-S number and how does it relate to my EIN?",
    a: "A D-U-N-S number is a unique 9-digit identifier issued by Dun & Bradstreet to your business. It is linked to your EIN and used to track your business credit history. You need a D-U-N-S number to build a business credit profile. Registration is free at dnb.com and requires your EIN.",
  },
  {
    q: "Can I get a business credit card with only an EIN?",
    a: "Some business credit cards, called EIN-only cards, do not require a personal credit check or SSN. These are typically secured cards or store credit cards from vendors like Uline, Grainger, or Quill. Most major bank business credit cards still require a personal guarantee and SSN, but your business credit history can improve your approval odds and terms.",
  },
  {
    q: "How long does it take to build business credit?",
    a: "Building a strong business credit profile typically takes 6-12 months of consistent payment history. Start with net-30 vendor accounts that report to business credit bureaus, pay every invoice early or on time, and gradually apply for larger credit lines. Your EIN is the foundation that makes this process possible.",
  },
  {
    q: "Does business credit affect personal credit?",
    a: "Business credit and personal credit are separate systems tracked by different bureaus. Business credit uses your EIN; personal credit uses your SSN. However, if you personally guarantee a business loan or credit card and default, that can affect your personal credit. EIN-only accounts without personal guarantees do not impact personal credit.",
  },
  {
    q: "What are the three business credit bureaus?",
    a: "The three major business credit bureaus are Dun & Bradstreet (D&B), Experian Business, and Equifax Business. Each maintains a separate business credit profile tied to your EIN. D&B uses the Paydex score (0-100), Experian uses Intelliscore (1-100), and Equifax uses a Business Credit Risk Score. You should monitor all three.",
  },
  {
    q: "Can non-US residents build US business credit?",
    a: "Yes. Non-US residents who form a US LLC and obtain an EIN can build US business credit. Register for a D-U-N-S number, open vendor accounts that report to business credit bureaus, and maintain a US business bank account. ein.so helps non-residents get their EIN for $49 or $97 (Express) to start this process.",
  },
  {
    q: "Do I need an LLC to build business credit?",
    a: "An LLC is not strictly required, but it is strongly recommended. Sole proprietors can build some business credit with an EIN, but lenders and vendors prefer working with formal business entities. An LLC also provides liability protection and makes your business appear more established to credit bureaus.",
  },
];

export default function EinForCreditPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "What Can You Do With an EIN?", url: "/what-can-you-do-with-ein/" },
          { name: "EIN for Business Credit", url: "/ein-for-credit/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Business Credit: Build Credit Without SSN (2026)"
        description="Complete guide to building business credit with an EIN. Covers D-U-N-S registration, EIN-only credit cards, business credit bureaus, and credit building strategies."
        url="/ein-for-credit/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForCreditClient faqs={faqs} />
    </>
  );
}
