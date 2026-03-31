import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinVsItinClient from "./EinVsItinClient";

export const metadata: Metadata = {
  title: "EIN vs ITIN: What's the Difference? 2026 Guide | ein.so",
  description:
    "EIN vs ITIN — what's the difference? An EIN identifies your business; an ITIN identifies you as a taxpayer without an SSN. Learn which you need, how to apply, and whether you need both.",
  alternates: { canonical: "/ein-vs-itin/" },
};

const faqs = [
  {
    q: "Can I use an ITIN instead of an EIN for my business?",
    a: "No. An ITIN is a personal tax identification number for individuals who cannot get an SSN. It cannot replace an EIN. If you have a business entity — such as an LLC, corporation, or partnership — you need an EIN to file business taxes, open a business bank account, and hire employees. You may need both an ITIN (for yourself) and an EIN (for your business).",
  },
  {
    q: "Do I need an SSN to get an EIN?",
    a: "No. Non-US residents without an SSN or ITIN can still obtain an EIN by filing Form SS-4 by fax with the IRS. This is the process ein.so handles for you — we complete and fax the form so you can get your EIN without any US tax identification number.",
  },
  {
    q: "How long does it take to get an EIN vs an ITIN?",
    a: "An EIN can be obtained online in minutes if you have an SSN, or in 4-7 business days via fax for non-residents. An ITIN takes significantly longer — typically 6 to 11 weeks after mailing Form W-7 and supporting documents to the IRS.",
  },
  {
    q: "Can a non-US resident get both an EIN and an ITIN?",
    a: "Yes, and many non-residents need both. You would get an ITIN to report personal US income (such as freelance earnings or investment income) and an EIN for your business entity. The EIN application does not require you to have an ITIN first.",
  },
  {
    q: "Is an EIN the same as a tax ID number?",
    a: "An EIN is one type of tax identification number (TIN). The IRS issues several types of TINs: SSNs for US citizens and residents, ITINs for individuals without SSN eligibility, and EINs for businesses. All are 9-digit numbers, but they serve different purposes and have different formats.",
  },
  {
    q: "What does an EIN number look like compared to an ITIN?",
    a: "An EIN is formatted as XX-XXXXXXX (two digits, a hyphen, then seven digits). An ITIN is formatted like an SSN — 9XX-XX-XXXX — but always begins with the digit 9. Despite both being 9-digit numbers, their formats are distinct and they serve completely different purposes.",
  },
];

export default function EinVsItinPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN vs ITIN", url: "/ein-vs-itin/" },
        ]}
      />
      <ArticleSchema
        headline="EIN vs ITIN: What's the Difference? 2026 Guide"
        description="A comprehensive comparison of EIN and ITIN — who needs each, how to apply, and whether you need both."
        url="/ein-vs-itin/"
      />
      <FAQSchema faqs={faqs} />
      <EinVsItinClient faqs={faqs} />
    </>
  );
}
