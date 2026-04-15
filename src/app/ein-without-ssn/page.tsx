import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinWithoutSsnClient from "./EinWithoutSsnClient";

export const metadata: Metadata = {
  title: "How to Get an EIN Without an SSN (2026) | Non-Resident Guide",
  description:
    "Non-US residents can get an EIN without an SSN by faxing Form SS-4 to the IRS. Learn the step-by-step process, required documents, and why the online method does not work.",
  alternates: { canonical: "/ein-without-ssn/" },
};

const faqs = [
  {
    q: "Can I apply for an EIN online without an SSN?",
    a: "No. The IRS online EIN application (the EIN Assistant at irs.gov) requires a valid SSN or ITIN on the first screen. If you do not have either number, the system will not let you proceed. Non-residents must use the fax method (Form SS-4) or call the IRS international line at 267-941-1099.",
  },
  {
    q: "What documents do I need to get an EIN without an SSN?",
    a: "You need a completed IRS Form SS-4, a copy of your passport (or other government-issued ID), and your business formation documents (Articles of Organization for LLCs, Articles of Incorporation for corporations). The passport helps verify your identity since you do not have an SSN or ITIN.",
  },
  {
    q: "How long does it take to get an EIN without an SSN?",
    a: "Faxing Form SS-4 to the IRS results in an EIN within 4-7 business days. The IRS returns your EIN by fax. Calling the IRS international line at 267-941-1099 can result in an immediate EIN, but hold times often exceed 1-2 hours and the line is only available Monday through Friday, 6 AM to 11 PM Eastern Time.",
  },
  {
    q: "What fax number do I use to send Form SS-4?",
    a: "Fax your completed Form SS-4 to the IRS at 855-215-1627. This is the dedicated fax line for EIN applications. Make sure you include a fax number where the IRS can send your EIN confirmation back to you (or your designee's fax number if using a service like ein.so).",
  },
  {
    q: "Do I need an ITIN to get an EIN?",
    a: "No. An ITIN (Individual Taxpayer Identification Number) is not required to get an EIN. The fax method allows you to apply with 'N/A' on the SSN/ITIN line of Form SS-4. An ITIN is a separate number used for personal tax filing by individuals who cannot get an SSN. An EIN is a business tax ID -- they serve different purposes.",
  },
  {
    q: "Can ein.so get me an EIN without an SSN?",
    a: "Yes. ein.so specializes in helping non-residents obtain EINs without an SSN or ITIN. We complete Form SS-4, fax it to the IRS, and deliver your EIN by email. Standard service costs $49 with 14 business day turnaround. Express service costs $97 with 7 business day turnaround. No SSN, ITIN, or US address required.",
  },
  {
    q: "Will the IRS reject my SS-4 if I do not have an SSN?",
    a: "No. The IRS routinely processes SS-4 applications from non-residents who do not have an SSN or ITIN. Write 'N/A' or 'Foreign' on Line 7b of the form. Including a copy of your passport with the fax helps verify your identity and reduces the chance of delays. The IRS has a dedicated process for handling these applications.",
  },
  {
    q: "Can I get an EIN with just a passport?",
    a: "Yes. A passport is the primary identification document for non-residents applying for an EIN. You include a copy of your passport with your Form SS-4 when faxing it to the IRS. The passport verifies the responsible party's identity and is accepted from any country. No US-issued ID is required.",
  },
];

export default function EinWithoutSsnPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "How to Get EIN", url: "/how-to-get-ein/" },
          { name: "EIN Without SSN", url: "/ein-without-ssn/" },
        ]}
      />
      <ArticleSchema
        headline="How to Get an EIN Without an SSN (2026)"
        description="Complete guide for non-US residents to get an EIN without a Social Security Number. Covers the Form SS-4 fax method, required documents, and step-by-step instructions."
        url="/ein-without-ssn/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinWithoutSsnClient faqs={faqs} />
    </>
  );
}
