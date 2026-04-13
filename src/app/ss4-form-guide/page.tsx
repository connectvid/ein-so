import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema, HowToSchema } from "../schema";
import SS4FormGuideClient from "./SS4FormGuideClient";

export const metadata: Metadata = {
  title: "IRS Form SS-4 Guide: Line-by-Line Instructions (2026)",
  description:
    "Complete line-by-line guide to filling out IRS Form SS-4 (Application for EIN). Special instructions for non-residents, LLCs, corporations, and all entity types.",
  alternates: { canonical: "/ss4-form-guide/" },
};

const faqs = [
  {
    q: "Where do I download IRS Form SS-4?",
    a: "You can download Form SS-4 for free from the IRS website at irs.gov/forms-pubs/about-form-ss-4. The form is a single page (with two pages of instructions). Make sure you are using the most current version of the form -- the IRS updates it periodically.",
  },
  {
    q: "Can I fill out Form SS-4 electronically or do I need to print it?",
    a: "You can fill out the PDF version of Form SS-4 on your computer using any PDF reader, then print it for faxing. The IRS also accepts handwritten forms, but typed forms are less likely to have errors or be misread by IRS staff. Do not submit the form by email -- the IRS only accepts fax or mail submissions for SS-4.",
  },
  {
    q: "What do I put on Line 7b if I do not have an SSN or ITIN?",
    a: "If you are a non-resident without an SSN or ITIN, write 'N/A' or 'Foreign' on Line 7b. The IRS accepts SS-4 applications from individuals who do not have a US tax identification number. This is one of the main reasons the fax method exists -- the online application requires an SSN or ITIN, but the paper form does not.",
  },
  {
    q: "What fax number do I send Form SS-4 to?",
    a: "Fax your completed Form SS-4 to the IRS at 855-215-1627. This is the dedicated fax line for EIN applications. The IRS processes faxed SS-4 forms within 4-7 business days and returns your EIN by fax to the number you provide on the form.",
  },
  {
    q: "What happens if I make a mistake on Form SS-4?",
    a: "If the IRS finds an error on your Form SS-4, they will either reject the application and send a notice explaining the issue, or they may attempt to contact you for clarification. Common errors include mismatched names, incorrect entity types, and missing information. If your application is rejected, correct the errors and resubmit by fax.",
  },
  {
    q: "Do I need to attach any documents to Form SS-4?",
    a: "For most applicants, no additional documents are required with Form SS-4. However, non-residents who do not have an SSN or ITIN should include a copy of their passport or other government-issued ID to help verify their identity. Third-party designees should include a signed authorization from the applicant.",
  },
  {
    q: "Can a third party file Form SS-4 on my behalf?",
    a: "Yes. You can authorize a third-party designee to receive your EIN by completing Line 18 of Form SS-4. The designee's name, address, phone number, and fax number go on this line. Services like ein.so act as your third-party designee, filing the form and receiving the EIN on your behalf for $49 (Standard) or $97 (Express).",
  },
  {
    q: "How long does it take to get an EIN after faxing Form SS-4?",
    a: "The IRS typically processes faxed SS-4 forms within 4-7 business days. During peak periods (January through April), processing may take slightly longer. The IRS returns your EIN by fax to the number provided on the form. ein.so's Express service ($97) includes priority handling with 2-3 business day turnaround.",
  },
];

export default function SS4FormGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "How to Get EIN", url: "/how-to-get-ein/" },
          { name: "SS-4 Form Guide", url: "/ss4-form-guide/" },
        ]}
      />
      <ArticleSchema
        headline="IRS Form SS-4 Guide: Line-by-Line Instructions (2026)"
        description="Complete line-by-line guide to filling out IRS Form SS-4 for an EIN. Covers every field with special instructions for non-residents and all entity types."
        url="/ss4-form-guide/"
        datePublished="2026-04-13"
      />
      <HowToSchema
        steps={[
          { name: "Download Form SS-4", text: "Get the latest version of IRS Form SS-4 from irs.gov. Open the PDF in a reader that allows you to type directly into the fields." },
          { name: "Complete Lines 1-6 (Entity Information)", text: "Enter your legal name, trade name (if any), mailing address, and street address. Use your business name exactly as registered with your state." },
          { name: "Complete Lines 7a-7b (Responsible Party)", text: "Enter the name and SSN/ITIN of the responsible party. Non-residents without an SSN write 'N/A' on Line 7b." },
          { name: "Complete Lines 8a-8c (Entity Type)", text: "Check the box that matches your entity type: LLC, corporation, partnership, sole proprietor, trust, estate, or other. For LLCs, also indicate the number of members." },
          { name: "Complete Lines 9a-9b (State and Reason)", text: "Enter the state where your entity is organized and select the reason for applying (started new business, hired employees, banking purposes, etc.)." },
          { name: "Complete Lines 10-17 (Business Details)", text: "Enter your business start date, closing month of accounting year, number of employees expected, principal business activity, and other operational details." },
          { name: "Complete Line 18 (Third-Party Designee)", text: "If you want someone else to receive your EIN, enter their name, address, phone number, and fax number on Line 18." },
          { name: "Sign and Fax to the IRS", text: "Sign the form, date it, and fax it to the IRS at 855-215-1627. Keep a copy for your records. The IRS returns your EIN by fax within 4-7 business days." },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <SS4FormGuideClient faqs={faqs} />
    </>
  );
}
