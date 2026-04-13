import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import BoiFilingClient from "./BoiFilingClient";

export const metadata: Metadata = {
  title: "BOI Filing: Beneficial Ownership Information Report (2026)",
  description:
    "BOI filing is mandatory for most US LLCs and corporations. Learn who must file, what information is required, deadlines, and the $500/day penalty for non-compliance.",
  alternates: { canonical: "/boi-filing/" },
};

const faqs = [
  {
    q: "What is a BOI filing?",
    a: "A BOI (Beneficial Ownership Information) filing is a report submitted to FinCEN (Financial Crimes Enforcement Network) that discloses the individuals who own or control a company. The Corporate Transparency Act requires most US LLCs, corporations, and similar entities to file this report. It includes the full legal name, date of birth, residential address, and government-issued ID of each beneficial owner.",
  },
  {
    q: "Who must file a BOI report with FinCEN?",
    a: "Most US LLCs, corporations, limited partnerships, and other entities created by filing with a state secretary of state must file a BOI report. Foreign companies registered to do business in the US must also file. There are 23 exemptions, primarily for large operating companies with 20+ employees and $5M+ revenue, banks, insurance companies, and other heavily regulated entities. If your LLC has fewer than 20 employees, you almost certainly need to file.",
  },
  {
    q: "What is the penalty for not filing a BOI report?",
    a: "Willful failure to file a BOI report carries civil penalties of up to $500 per day for each day the violation continues. Criminal penalties include fines up to $10,000 and imprisonment for up to 2 years. These penalties apply to both the company and any individual who causes the failure to file or files false information.",
  },
  {
    q: "What information is required in a BOI filing?",
    a: "For each beneficial owner (anyone who owns 25% or more of the company or exercises substantial control), you must report: full legal name, date of birth, current residential address, and a unique identifying number from a government-issued ID (passport, driver's license, or state ID) along with an image of that document. The company must also report its legal name, any trade names/DBAs, address, state of formation, and EIN.",
  },
  {
    q: "When is the BOI filing deadline?",
    a: "Companies formed before January 1, 2024 had a deadline of January 1, 2025. Companies formed in 2024 must file within 90 days of formation. Companies formed on or after January 1, 2025 must file within 30 days of formation. Check our BOI filing deadline guide for the latest updates on any extensions.",
  },
  {
    q: "Can ein.so help with BOI filing?",
    a: "Yes. ein.so offers BOI filing assistance for $49 via WhatsApp. We collect the required information from you, prepare your BOI report, and file it with FinCEN on your behalf. The process is simple: message us on WhatsApp, provide your company and beneficial owner details, and we handle the filing.",
  },
  {
    q: "Do I need to file a BOI report if I am a non-US resident with a US LLC?",
    a: "Yes. The BOI filing requirement applies to all US-formed entities regardless of where the owners live. If you are a non-US resident who formed a US LLC, you must file a BOI report with FinCEN disclosing your ownership information. Your foreign passport is an acceptable form of identification for the report.",
  },
  {
    q: "Do I need to update my BOI filing if my information changes?",
    a: "Yes. If any information in your BOI report changes (new owner, change of address, new ID document), you must file an updated report with FinCEN within 30 days of the change. Failure to update carries the same penalties as failure to file the initial report.",
  },
];

export default function BoiFilingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
          { name: "BOI Filing", url: "/boi-filing/" },
        ]}
      />
      <ArticleSchema
        headline="BOI Filing: Beneficial Ownership Information Report (2026)"
        description="Complete guide to BOI filing with FinCEN. Who must file, deadlines, required information, $500/day penalties, and how to file your BOI report."
        url="/boi-filing/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <BoiFilingClient faqs={faqs} />
    </>
  );
}
