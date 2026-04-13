import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import BoiPenaltiesClient from "./BoiPenaltiesClient";

export const metadata: Metadata = {
  title: "BOI Filing Penalties: $500/Day Fine for Non-Compliance (2026)",
  description:
    "Failing to file your BOI report results in $500/day civil penalties and up to $10,000 in criminal fines. Learn how to avoid penalties.",
  alternates: { canonical: "/boi-penalties/" },
};

const faqs = [
  {
    q: "What is the penalty for not filing a BOI report?",
    a: "The penalty for not filing a Beneficial Ownership Information (BOI) report is $500 per day in civil fines, with no maximum cap. Criminal penalties include fines up to $10,000 and up to 2 years in prison. These penalties apply to willful failure to file, filing false information, or filing incomplete reports.",
  },
  {
    q: "When does the $500/day BOI penalty start accruing?",
    a: "The $500/day civil penalty starts accruing from the date your BOI report was due. For companies formed before January 1, 2024, the original deadline was January 1, 2025. For companies formed on or after January 1, 2024, the deadline is 90 days after formation. Check the latest FinCEN guidance for any deadline extensions.",
  },
  {
    q: "Can I go to jail for not filing a BOI report?",
    a: "Yes. Willful failure to file a BOI report, or willfully providing false or fraudulent beneficial ownership information, is a criminal offense. The criminal penalties include fines up to $10,000 and imprisonment for up to 2 years. These criminal penalties apply to individuals who knowingly violate the reporting requirements.",
  },
  {
    q: "Who is personally liable for BOI penalties?",
    a: "Any individual who willfully provides false information, fails to file a required report, or causes a company to fail to file can be held personally liable. This includes company officers, directors, managers, and anyone else who has authority over the filing. The penalties attach to individuals, not just the company entity.",
  },
  {
    q: "Can I cure a late BOI filing to avoid penalties?",
    a: "FinCEN has indicated that voluntary correction of inaccurate information within 90 days of the original filing may serve as a safe harbor against certain penalties. However, this safe harbor applies to corrections of filed reports, not to reports that were never filed. File your BOI report as soon as possible to minimize penalty exposure.",
  },
  {
    q: "Does ein.so help with BOI filings?",
    a: "Yes. ein.so provides BOI filing services to help you meet your reporting obligations. We collect the required beneficial ownership information, prepare the report, and file it with FinCEN on your behalf. This ensures your report is accurate and filed on time, protecting you from the $500/day civil penalties and potential criminal liability.",
  },
  {
    q: "Are there any exemptions from BOI reporting?",
    a: "Yes. FinCEN exempts 23 types of entities from BOI reporting, including publicly traded companies, banks, credit unions, insurance companies, tax-exempt organizations, and large operating companies with more than 20 full-time employees, over $5 million in gross revenue, and a physical US office. Most small LLCs and corporations do not qualify for any exemption.",
  },
  {
    q: "What information does a BOI report require?",
    a: "A BOI report requires the company's legal name, trade names, address, state of formation, and EIN. For each beneficial owner (anyone who owns 25% or more or exercises substantial control), you must provide their full legal name, date of birth, residential address, and a copy of an identifying document such as a passport or driver's license.",
  },
];

export default function BoiPenaltiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "BOI Filing", url: "/boi-filing/" },
          { name: "BOI Penalties", url: "/boi-penalties/" },
        ]}
      />
      <ArticleSchema
        headline="BOI Filing Penalties: $500/Day Fine for Non-Compliance (2026)"
        description="Failing to file your BOI report results in $500/day civil penalties and up to $10,000 in criminal fines. Learn how to avoid penalties."
        url="/boi-penalties/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <BoiPenaltiesClient faqs={faqs} />
    </>
  );
}
