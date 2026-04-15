import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForNonprofitClient from "./EinForNonprofitClient";

export const metadata: Metadata = {
  title: "EIN for Nonprofit Organization: How to Apply (2026)",
  description:
    "Every nonprofit needs an EIN before applying for 501(c)(3) tax-exempt status. Apply with Form SS-4 selecting 'Other nonprofit organization.'",
  alternates: { canonical: "/ein-for-nonprofit/" },
};

const faqs = [
  {
    q: "Does every nonprofit need an EIN?",
    a: "Yes. Every nonprofit organization needs an EIN regardless of size, revenue, or number of employees. The IRS requires an EIN to apply for 501(c)(3) tax-exempt status, file Form 990, and open a bank account. You cannot operate a nonprofit without one.",
  },
  {
    q: "Do I need an EIN before applying for 501(c)(3) status?",
    a: "Yes. You must have an EIN before filing Form 1023 or Form 1023-EZ for 501(c)(3) tax-exempt recognition. The IRS requires the EIN on the application. Get your EIN first, then apply for tax-exempt status.",
  },
  {
    q: "How much does it cost to get an EIN for a nonprofit?",
    a: "Getting an EIN from the IRS is free. If a responsible party has an SSN or ITIN, apply online at irs.gov and receive the EIN instantly. For nonprofits with non-US responsible parties, ein.so handles the fax application for $49 (Standard) or $97 (Express).",
  },
  {
    q: "What entity type do I select on Form SS-4 for a nonprofit?",
    a: "Select 'Other nonprofit organization' on line 9a of Form SS-4. Do not select 'Church or church-controlled organization' unless your nonprofit is specifically a church. Selecting the wrong entity type can delay processing or cause complications with your 501(c)(3) application.",
  },
  {
    q: "Can a nonprofit use a board member's SSN instead of an EIN?",
    a: "No. Nonprofits are separate legal entities and must have their own EIN. A board member's SSN cannot substitute for the organization's EIN on tax forms, bank accounts, or grant applications. The board member's SSN is only used as the responsible party identifier on the EIN application itself.",
  },
  {
    q: "Who is the responsible party for a nonprofit EIN application?",
    a: "The responsible party is a principal officer who controls the nonprofit's funds and assets. This is the board president, executive director, or treasurer. The responsible party must be an individual person, not the organization itself.",
  },
  {
    q: "How long does it take to get an EIN for a nonprofit?",
    a: "Online applications receive the EIN instantly. Fax applications take 4-7 business days. ein.so's Express service ($97) reduces fax processing to 7 business days. Plan to get your EIN well before you need to file Form 1023 for tax-exempt status.",
  },
  {
    q: "Does a nonprofit need an EIN even if it has no employees?",
    a: "Yes. Nonprofits need an EIN regardless of whether they have employees. The EIN is required for Form 990 filing, applying for tax-exempt status, opening bank accounts, and receiving grants. Employee status has no bearing on the EIN requirement for nonprofits.",
  },
];

export default function EinForNonprofitPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
          { name: "EIN for Nonprofit", url: "/ein-for-nonprofit/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Nonprofit Organization: How to Apply (2026)"
        description="Complete guide to getting an EIN for your nonprofit organization in 2026. Covers 501(c)(3) requirements, Form SS-4 instructions, and the application process."
        url="/ein-for-nonprofit/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForNonprofitClient faqs={faqs} />
    </>
  );
}
