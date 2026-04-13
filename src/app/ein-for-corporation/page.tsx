import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForCorporationClient from "./EinForCorporationClient";

export const metadata: Metadata = {
  title: "EIN for Corporation: How to Apply (2026 Guide)",
  description:
    "Every corporation needs an EIN for tax filing, payroll, and banking. Apply online (US) or by fax (non-residents) using Form SS-4.",
  alternates: { canonical: "/ein-for-corporation/" },
};

const faqs = [
  {
    q: "Does every corporation need an EIN?",
    a: "Yes. Every corporation -- whether a C-Corp or S-Corp -- must have an EIN. The IRS requires it for filing corporate tax returns (Form 1120 or 1120-S), withholding payroll taxes, and reporting dividends. There are no exceptions.",
  },
  {
    q: "How much does it cost to get an EIN for a corporation?",
    a: "Getting an EIN from the IRS is free. US residents with an SSN or ITIN can apply online and receive the EIN instantly. Non-US residents who must apply by fax can use ein.so for $49 (Standard) or $97 (Express). Never pay hundreds of dollars for an EIN.",
  },
  {
    q: "Can I apply for a corporate EIN online?",
    a: "Yes, if the responsible party has a valid SSN or ITIN. The IRS EIN Assistant at irs.gov processes corporate EIN applications in real time. You receive your EIN immediately upon completion. Non-US residents without an SSN or ITIN must use the fax method with Form SS-4.",
  },
  {
    q: "Who is the responsible party on a corporate EIN application?",
    a: "The responsible party is the individual who controls or manages the corporation and directs the disposition of its funds and assets. This is typically the president, CEO, or another principal officer. The responsible party must be an individual -- not another entity.",
  },
  {
    q: "Do I need a new EIN if I change my corporation's name?",
    a: "No. Changing your corporation's name does not require a new EIN. You notify the IRS of the name change by filing your next tax return with the new name, or by writing to the IRS. The EIN stays the same for the life of the corporation.",
  },
  {
    q: "Do I need a new EIN if my corporation changes from C-Corp to S-Corp?",
    a: "No. Filing Form 2553 to elect S-Corp status does not require a new EIN. The corporation keeps its existing EIN. The only change is the tax return form: you file Form 1120-S instead of Form 1120. See our S-Corp election guide for details.",
  },
  {
    q: "Can a non-US resident form a US corporation and get an EIN?",
    a: "Yes. Non-US residents can incorporate in any US state and obtain an EIN. Since they cannot use the IRS online system, they apply by fax using Form SS-4. ein.so specializes in this process, handling the entire SS-4 filing for $49 (Standard) or $97 (Express).",
  },
  {
    q: "How long does it take to get an EIN for a corporation?",
    a: "Online applications receive the EIN instantly. Fax applications take 4-7 business days. ein.so's Express service ($97) reduces fax processing to 2-3 business days. Mail applications take 4-6 weeks and are not recommended for corporations.",
  },
];

export default function EinForCorporationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
          { name: "EIN for Corporation", url: "/ein-for-corporation/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Corporation: How to Apply (2026 Guide)"
        description="Complete guide to getting an EIN for your corporation in 2026. Covers C-Corps, S-Corps, application methods, and non-resident requirements."
        url="/ein-for-corporation/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForCorporationClient faqs={faqs} />
    </>
  );
}
