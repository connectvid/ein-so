import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import BoiFilingDeadlineClient from "./BoiFilingDeadlineClient";

export const metadata: Metadata = {
  title: "BOI Filing Deadline 2026: When Is Your Report Due?",
  description:
    "BOI filing deadlines depend on when your company was formed. Pre-2024 companies: Jan 1, 2025. 2024 companies: 90 days. 2025+ companies: 30 days. $500/day penalty for missing your deadline.",
  alternates: { canonical: "/boi-filing-deadline/" },
};

const faqs = [
  {
    q: "What is the BOI filing deadline for companies formed before 2024?",
    a: "Companies formed before January 1, 2024 had a deadline of January 1, 2025 to file their initial BOI report with FinCEN. If you formed your LLC or corporation before 2024 and have not yet filed, you are already past the deadline and accruing $500/day in civil penalties. File immediately to stop the penalty accumulation.",
  },
  {
    q: "What is the BOI filing deadline for companies formed in 2024?",
    a: "Companies formed in 2024 (between January 1, 2024 and December 31, 2024) must file their initial BOI report within 90 calendar days of their formation date. The 90-day clock starts from the date your formation documents become effective with the state, not the date you submitted the filing.",
  },
  {
    q: "What is the BOI filing deadline for companies formed in 2025 or 2026?",
    a: "Companies formed on or after January 1, 2025 must file their initial BOI report within 30 calendar days of receiving notice that their formation or registration is effective. This is a significantly shorter window than the 90-day period given to 2024 companies, so you must act fast after forming your entity.",
  },
  {
    q: "What happens if I miss the BOI filing deadline?",
    a: "Missing the BOI filing deadline triggers civil penalties of $500 per day for each day the violation continues. This means $3,500 per week or about $15,000 per month in penalties. Criminal penalties can include fines up to $10,000 and up to 2 years of imprisonment for willful non-compliance.",
  },
  {
    q: "Has the BOI filing deadline been extended?",
    a: "The BOI filing requirement has faced legal challenges, and there have been temporary injunctions and deadline extensions at multiple points. As of 2026, the requirement is in effect and FinCEN is actively accepting filings. Check FinCEN's official website or contact ein.so on WhatsApp for the latest deadline updates specific to your situation.",
  },
  {
    q: "How do I know if I need to file a BOI report?",
    a: "If your company was formed by filing documents with a US state secretary of state (LLC, corporation, LP, LLP), you likely need to file unless you qualify for one of 23 exemptions. The most common exemption is for large operating companies with 20+ full-time US employees, $5M+ in gross receipts, and a physical US office. Most small businesses and newly formed LLCs must file.",
  },
  {
    q: "Can I file my BOI report early?",
    a: "Yes. FinCEN began accepting BOI reports on January 1, 2024. You can file your report as soon as your company is formed and you have your EIN. Filing early is strongly recommended because it eliminates deadline stress and ensures you never face penalties. There is no benefit to waiting.",
  },
  {
    q: "Do I need to file a new BOI report every year?",
    a: "No. The BOI report is not an annual filing. You file an initial report once, and then only file updated reports if any previously reported information changes (new owner, address change, new ID, etc.). Updates must be filed within 30 days of the change. There is no annual renewal or recurring filing obligation.",
  },
];

export default function BoiFilingDeadlinePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "BOI Filing", url: "/boi-filing/" },
          { name: "BOI Filing Deadline", url: "/boi-filing-deadline/" },
        ]}
      />
      <ArticleSchema
        headline="BOI Filing Deadline 2026: When Is Your Report Due?"
        description="Complete guide to BOI filing deadlines based on company formation date. Pre-2024, 2024, and 2025+ deadlines explained, plus $500/day penalty consequences."
        url="/boi-filing-deadline/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <BoiFilingDeadlineClient faqs={faqs} />
    </>
  );
}
