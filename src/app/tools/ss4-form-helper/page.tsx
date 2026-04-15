import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "../../schema";
import SS4FormHelperClient from "./SS4FormHelperClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free SS-4 Form Helper: Line-by-Line Guide (2026)",
  description:
    "Fill out IRS Form SS-4 correctly with our free line-by-line helper. Designed for non-residents applying for an EIN.",
  alternates: { canonical: "/tools/ss4-form-helper/" },
};

const faqs = [
  {
    q: "What is IRS Form SS-4?",
    a: "Form SS-4 is the official IRS application for an Employer Identification Number (EIN). It collects information about your business entity, including the legal name, address, entity type, reason for applying, and the responsible party. You can submit Form SS-4 online (if you have an SSN/ITIN), by fax, by phone, or by mail.",
  },
  {
    q: "Can non-residents fill out Form SS-4 without an SSN or ITIN?",
    a: "Yes. Non-residents who do not have an SSN or ITIN should leave line 7b blank and write 'Foreign' or 'N/A' in that field. The IRS accepts SS-4 applications from foreign nationals without a US tax identification number when submitted by fax or phone. The online application, however, requires an SSN or ITIN.",
  },
  {
    q: "What address should a non-resident use on Form SS-4?",
    a: "Non-residents should use their foreign home or business address on lines 4a-4b and lines 5a-5b. The IRS accepts international addresses. Make sure to include your country name on line 4b or 5b. If you have a US mailing address (such as a registered agent), you can use that on lines 5a-5b for correspondence.",
  },
  {
    q: "What are the most common mistakes on Form SS-4?",
    a: "The most common mistakes include selecting the wrong entity type on line 9a, leaving the responsible party name blank on line 1, entering the wrong reason for applying on line 10, providing an incomplete foreign address, and forgetting to sign and date the form. Each of these errors can cause the IRS to reject your application or delay processing.",
  },
  {
    q: "How long does it take to get an EIN after submitting Form SS-4?",
    a: "Processing times depend on the method of submission. Online applications receive an EIN immediately. Fax submissions typically take 4-7 business days for standard processing. Phone applications can receive an EIN during the call. Mail submissions take 4-6 weeks. ein.so offers Express fax processing in 7 business days for $97.",
  },
  {
    q: "Can I use this SS-4 helper if I already started filling out the form?",
    a: "Yes. This line-by-line helper is designed to be used at any point during the process. You can use it to verify information you have already entered, fill in fields you were unsure about, or start from scratch. Each section is expandable so you can jump directly to the line you need help with.",
  },
];

export default function SS4FormHelperPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "SS-4 Form Guide", url: "/ss4-form-guide/" },
          { name: "SS-4 Form Helper", url: "/tools/ss4-form-helper/" },
        ]}
      />
      <SoftwareApplicationSchema
        name="SS-4 Form Helper"
        description="Free line-by-line guide for filling out IRS Form SS-4. Designed for non-residents applying for an EIN without an SSN."
        url="/tools/ss4-form-helper/"
      />
      <FAQSchema faqs={faqs} />
      <SS4FormHelperClient faqs={faqs} />
    </>
  );
}
