import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import SCorpElectionClient from "./SCorpElectionClient";

export const metadata: Metadata = {
  title: "S-Corp Election: Form 2553 Filing Guide (2026)",
  description:
    "File Form 2553 to elect S-Corp status. Must file within 75 days of formation or by March 15 for existing corps. Reduces self-employment tax.",
  alternates: { canonical: "/s-corp-election/" },
};

const faqs = [
  {
    q: "What is an S-Corp election?",
    a: "An S-Corp election is a tax classification choice you make by filing Form 2553 with the IRS. It allows your corporation or LLC to be taxed as an S-Corporation, which passes income through to shareholders and avoids double taxation. The election changes how you are taxed but does not change your legal entity structure.",
  },
  {
    q: "When is the deadline to file Form 2553?",
    a: "For new entities, you must file Form 2553 within 75 days of formation (or within 75 days of the start of the tax year you want the election to take effect). For existing corporations that want to elect S-Corp status for the next tax year, the deadline is March 15 of the year before the election takes effect. Late elections are possible with reasonable cause.",
  },
  {
    q: "Can an LLC elect S-Corp status?",
    a: "Yes. An LLC can elect S-Corp tax treatment by filing Form 2553 with the IRS. The LLC remains a limited liability company under state law, but it is taxed as an S-Corporation for federal income tax purposes. This is one of the most popular tax strategies for profitable LLCs because it reduces self-employment tax.",
  },
  {
    q: "Do I need an EIN to file Form 2553?",
    a: "Yes. Form 2553 requires your entity's EIN (Employer Identification Number). You must obtain your EIN before filing the S-Corp election. If you do not have an EIN yet, ein.so can help you get one for $49 (Standard, 5-7 business days) or $97 (Express, 2-3 business days).",
  },
  {
    q: "How does S-Corp election save on taxes?",
    a: "S-Corp election saves money by splitting your income into salary and distributions. You pay self-employment tax (15.3%) only on your salary, not on distributions. For example, if your business earns $150,000 and you pay yourself a $70,000 salary, you save self-employment tax on the $80,000 in distributions. The savings can be $10,000 or more per year.",
  },
  {
    q: "What are the requirements to qualify for S-Corp status?",
    a: "To qualify for S-Corp status, your entity must be a domestic corporation or LLC, have no more than 100 shareholders, have only allowable shareholders (individuals, certain trusts, and estates — no partnerships, corporations, or non-resident aliens), have only one class of stock, and not be an ineligible corporation (certain financial institutions, insurance companies, etc.).",
  },
  {
    q: "Can a non-resident elect S-Corp status?",
    a: "No. S-Corp shareholders must be US citizens or US resident aliens. Non-resident aliens cannot be shareholders in an S-Corporation. If your LLC or corporation has any non-resident alien shareholders, you cannot make the S-Corp election. You would instead be taxed as a C-Corporation or a partnership (for multi-member LLCs).",
  },
  {
    q: "What happens if I miss the Form 2553 deadline?",
    a: "If you miss the 75-day or March 15 deadline, you can still file Form 2553 with a reasonable cause statement explaining why you filed late. The IRS frequently grants late election relief under Revenue Procedure 2013-30 if you file within 3 years and 75 days of the intended effective date. Attach a statement explaining the reasonable cause to your Form 2553.",
  },
];

export default function SCorpElectionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Corporation", url: "/ein-for-corporation/" },
          { name: "S-Corp Election", url: "/s-corp-election/" },
        ]}
      />
      <ArticleSchema
        headline="S-Corp Election: Form 2553 Filing Guide (2026)"
        description="File Form 2553 to elect S-Corp status. Must file within 75 days of formation or by March 15 for existing corps. Reduces self-employment tax."
        url="/s-corp-election/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <SCorpElectionClient faqs={faqs} />
    </>
  );
}
