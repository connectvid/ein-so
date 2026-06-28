import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema, HowToSchema } from "../../schema";
import SS4FormHelperClient from "./SS4FormHelperClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("tools/ss4-form-helper/_index.md");

// Steps mirror the 6 grouped sections of the on-page line-by-line tool so the
// HowTo schema matches the visible content.
const ss4Steps = [
  {
    name: "Enter your entity information (Lines 1-3)",
    text: "Enter the exact legal name of your business from your formation documents on Line 1, your trade name or DBA on Line 2 if different, and any executor or trustee name on Line 3 (left blank for most LLCs and corporations).",
  },
  {
    name: "Add your address (Lines 4a-5b)",
    text: "Enter the mailing address where the IRS sends correspondence on Lines 4a-4b; non-residents use a foreign address including the country name. Add a separate physical or registered-agent address on Lines 5a-5b only if it differs.",
  },
  {
    name: "Name the responsible party (Lines 6-7b)",
    text: "Enter the county and state of your principal office on Line 6, the full legal name of the individual who controls the entity on Line 7a, and that person's SSN, ITIN, or EIN on Line 7b. Non-residents without a US tax ID leave Line 7b blank or write 'Foreign'.",
  },
  {
    name: "Select entity type and reason (Lines 8a-10)",
    text: "Check your entity type on Line 8a (check 'LLC' and the member count for an LLC), choose the reason for applying on Line 9a such as 'Started new business', and enter your formation date on Line 10.",
  },
  {
    name: "Complete employment and tax details (Lines 11-16)",
    text: "Enter your accounting year-end month on Line 11 (usually 12), expected employees on Line 12 (0 if none), the first wage date on Line 13 (N/A if no employees), and your principal activity and product or service on Lines 14-16.",
  },
  {
    name: "Sign and submit (Lines 17-18)",
    text: "Authorize a third-party designee on Line 17 if a service files for you, then sign and date Line 18 with the responsible party's name and title. File by fax to the IRS at 855-641-6935 (US) or 855-215-1627 (international) and receive your EIN in 4-7 business days.",
  },
];

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function SS4FormHelperPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <SoftwareApplicationSchema
        name={fm.schema.name}
        description={fm.schema.description}
        url={fm.canonical}
      />
      <FAQSchema faqs={fm.faqs} />
      <HowToSchema
        steps={ss4Steps}
        name="How to Complete IRS Form SS-4"
        description="Step-by-step guide to filling out IRS Form SS-4 line by line to apply for an EIN, including guidance for non-US residents without an SSN."
      />
      <SS4FormHelperClient faqs={fm.faqs} />
    </>
  );
}
