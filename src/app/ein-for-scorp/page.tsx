import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForScorpClient from "./EinForScorpClient";

export const metadata: Metadata = {
  title: "EIN for S-Corp: How to Apply After S-Corp Election (2026)",
  description:
    "S-Corps use the same EIN as the original entity. You do not need a new EIN after filing Form 2553 for S-Corp election.",
  alternates: { canonical: "/ein-for-scorp/" },
};

const faqs = [
  {
    q: "Do I need a new EIN after electing S-Corp status?",
    a: "No. Filing Form 2553 for S-Corp election does not require a new EIN. Your corporation or LLC keeps its existing EIN. The only change is the tax return form you file: Form 1120-S instead of Form 1120 (for corporations) or Form 1065 (for LLCs).",
  },
  {
    q: "Does every S-Corp need an EIN?",
    a: "Yes. Every S-Corp needs an EIN for filing Form 1120-S, issuing W-2s to shareholder-employees, and distributing Schedule K-1s. The entity obtains the EIN when it is first formed (as a corporation or LLC), not when it elects S-Corp status.",
  },
  {
    q: "When do I need a new EIN for an S-Corp?",
    a: "You need a new EIN only if the S-Corp undergoes a structural change: a new corporation is formed, the entity converts to a different entity type (like a partnership), or the S-Corp incorporates in a new state as a new entity. Name changes and address changes do not require a new EIN.",
  },
  {
    q: "How do I apply for an EIN for a new corporation that will elect S-Corp?",
    a: "Apply for the EIN as a corporation first. On Form SS-4, select 'Corporation' as the entity type. After receiving the EIN, file Form 2553 to elect S-Corp status. The IRS processes the S-Corp election separately from the EIN assignment.",
  },
  {
    q: "Can an LLC elect S-Corp status and keep its EIN?",
    a: "Yes. An LLC can elect S-Corp taxation by filing Form 2553. The LLC keeps its existing EIN. The LLC remains an LLC for legal purposes but is taxed as an S-Corp. It files Form 1120-S instead of Form 1065.",
  },
  {
    q: "What is the deadline to file Form 2553 for S-Corp election?",
    a: "Form 2553 must be filed no later than 2 months and 15 days after the beginning of the tax year the election is to take effect. For a calendar-year entity, this means filing by March 15. You can also file at any time during the preceding tax year.",
  },
  {
    q: "Can a non-US resident own an S-Corp?",
    a: "No. S-Corp shareholders must be US citizens or US residents (green card holders or individuals who meet the substantial presence test). Non-resident aliens cannot be S-Corp shareholders. If you are a non-US resident, consider a C-Corp or LLC instead.",
  },
  {
    q: "What happens if I lose S-Corp status?",
    a: "If the IRS revokes S-Corp status (for example, because an ineligible shareholder is added), the entity reverts to C-Corp taxation. The EIN stays the same. The entity files Form 1120 instead of Form 1120-S going forward. The EIN does not change when tax classification changes.",
  },
];

export default function EinForScorpPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
          { name: "EIN for S-Corp", url: "/ein-for-scorp/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for S-Corp: How to Apply After S-Corp Election (2026)"
        description="Complete guide to EIN requirements for S-Corps. Learn why you do not need a new EIN after filing Form 2553, how to apply for a new entity, and S-Corp eligibility rules."
        url="/ein-for-scorp/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForScorpClient faqs={faqs} />
    </>
  );
}
