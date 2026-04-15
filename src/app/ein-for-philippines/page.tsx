import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForPhilippinesClient from "./EinForPhilippinesClient";

export const metadata: Metadata = {
  title: "EIN for Filipino Entrepreneurs: Apply From Philippines (2026)",
  description:
    "Filipino entrepreneurs can get a US EIN without an SSN. Learn how freelancers, virtual assistants, and BPO professionals from the Philippines apply for an EIN. ein.so handles it for $49.",
  alternates: { canonical: "/ein-for-philippines/" },
};

const faqs = [
  {
    q: "Can Filipino citizens get a US EIN?",
    a: "Yes. Filipino citizens can get a US EIN by submitting Form SS-4 by fax to the IRS. No SSN or ITIN is required. Your Philippine passport number serves as identification. ein.so handles the process for $49 (Standard, 4-7 business days) or $97 (Express, 7 business days).",
  },
  {
    q: "Do Filipino entrepreneurs need an SSN to get a US EIN?",
    a: "No. Filipino applicants do not need a Social Security Number or ITIN. Your Philippine passport number is used on Form SS-4. The IRS online EIN tool requires an SSN, so Filipino applicants use the fax method. ein.so handles the fax filing for you.",
  },
  {
    q: "How long does it take for a Filipino to receive a US EIN?",
    a: "Through ein.so, Standard processing takes 4-7 business days ($49) and Express takes 7 business days ($97). The IRS phone method is impractical from the Philippines due to the 12-13 hour time difference with US Eastern Time.",
  },
  {
    q: "Do Filipino freelancers and virtual assistants need a US EIN?",
    a: "If you form a US LLC for your freelancing or VA business, you need an EIN to open a US bank account, accept payments through US platforms, and file US taxes. A US entity gives you credibility with US clients and access to better payment processing. Many top Filipino VAs operate through US LLCs.",
  },
  {
    q: "Can I use my EIN with PayPal and Payoneer?",
    a: "Yes. Your US EIN enables a US PayPal Business account and works with Payoneer for receiving marketplace payments. A US bank account (opened with your EIN) lets you hold USD and transfer to your Philippine bank account through Wise or direct wire transfer.",
  },
  {
    q: "What is the difference between a Philippine TIN and a US EIN?",
    a: "Your Philippine TIN (Tax Identification Number) is issued by the BIR (Bureau of Internal Revenue) for Philippine tax purposes. A US EIN is issued by the IRS for US tax purposes. They serve different countries. You need both if you operate in both jurisdictions.",
  },
  {
    q: "Can I send remittances from my US bank account to the Philippines?",
    a: "Yes. Once you have a US bank account (opened with your EIN), you can transfer funds to the Philippines through Wise, Remitly, or bank wire transfers. Many Filipino entrepreneurs find that holding earnings in USD and converting to PHP when rates are favorable maximizes their income.",
  },
];

export default function EinForPhilippinesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Non-Residents", url: "/ein-for-non-residents/" },
          { name: "EIN for Philippines", url: "/ein-for-philippines/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Filipino Entrepreneurs: Apply From Philippines (2026)"
        description="Complete guide for Filipino entrepreneurs applying for a US EIN. BPO, freelancing, virtual assistants, and remittance considerations."
        url="/ein-for-philippines/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForPhilippinesClient faqs={faqs} />
    </>
  );
}
