import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForIndiaClient from "./EinForIndiaClient";

export const metadata: Metadata = {
  title: "EIN for Indian Entrepreneurs: Apply From India (2026)",
  description:
    "Indian entrepreneurs can get a US EIN without an SSN or ITIN. Learn how freelancers, Amazon sellers, and IT firms from India apply for an EIN using Form SS-4. ein.so handles it for $49.",
  alternates: { canonical: "/ein-for-india/" },
};

const faqs = [
  {
    q: "Can Indian citizens get a US EIN without visiting America?",
    a: "Yes. Indian citizens can apply for a US EIN entirely from India. The IRS does not require you to be physically present in the United States. You submit Form SS-4 by fax using your Indian passport number as your identifying number. ein.so handles the entire process remotely for $49 (Standard) or $97 (Express).",
  },
  {
    q: "Do I need an SSN or ITIN to get an EIN from India?",
    a: "No. Indian applicants do not need a Social Security Number or Individual Taxpayer Identification Number. Your Indian passport number serves as your identifying number on Form SS-4. The IRS online EIN tool requires an SSN, which is why Indian applicants must use the fax method -- and that is exactly what ein.so handles for you.",
  },
  {
    q: "How long does it take for an Indian applicant to receive an EIN?",
    a: "Through ein.so, Standard processing takes 4-7 business days ($49) and Express processing takes 7 business days ($97). If you try the DIY fax method, expect 4-7 business days if your form has no errors. The IRS phone method (267-941-1099) can issue same-day EINs, but calling from India means expensive international calls and long hold times.",
  },
  {
    q: "Can I use my EIN to open a US bank account from India?",
    a: "Yes. Your EIN is required to open a US business bank account for your LLC. Banks like Mercury and Relay accept applications from Indian LLC owners with an EIN. Some banks require you to visit the US in person, while others allow fully remote account opening. Your EIN is the first step regardless.",
  },
  {
    q: "Do Indian freelancers on Upwork need a US EIN?",
    a: "If you formed a US LLC for your freelancing business, you need an EIN to open a US bank account, accept payments through US platforms, and file US taxes. Many Indian freelancers on Upwork and Fiverr form US LLCs to access better payment processing, build credibility with US clients, and receive payments in USD without high conversion fees.",
  },
  {
    q: "Can I sell on Amazon.com from India with an EIN?",
    a: "Yes. Amazon requires a tax identification number to complete their tax interview during seller registration. Indian sellers expanding from Amazon.in to Amazon.com use their EIN to register as a US-based seller through their LLC. This gives you access to the US marketplace, FBA warehouses, and US-based customer trust.",
  },
  {
    q: "What is the difference between PAN, Aadhaar, and a US EIN?",
    a: "PAN (Permanent Account Number) is your Indian income tax ID. Aadhaar is your Indian biometric identity number. A US EIN (Employer Identification Number) is a US federal tax ID for your US business entity. They serve different jurisdictions. Your PAN and Aadhaar are for Indian taxes; your EIN is for US taxes. You need all of them if you operate in both countries.",
  },
  {
    q: "Does ein.so provide support in Hindi?",
    a: "Yes. ein.so provides customer support in Hindi and English. Our team understands the specific challenges Indian entrepreneurs face when setting up US businesses, including address formatting for Indian addresses on Form SS-4, payment processing through Indian banks, and integration with platforms like Razorpay and PayPal India.",
  },
];

export default function EinForIndiaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Non-Residents", url: "/ein-for-non-residents/" },
          { name: "EIN for India", url: "/ein-for-india/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Indian Entrepreneurs: Apply From India (2026)"
        description="Complete guide for Indian entrepreneurs applying for a US EIN. No SSN required. Cover freelancers, Amazon sellers, IT consulting firms, and payment integration."
        url="/ein-for-india/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForIndiaClient faqs={faqs} />
    </>
  );
}
