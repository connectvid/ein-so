import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForPartnershipClient from "./EinForPartnershipClient";

export const metadata: Metadata = {
  title: "EIN for Partnership: Required for All Partnerships (2026)",
  description:
    "Every partnership needs an EIN. Required for Form 1065 filing, opening bank accounts, and issuing K-1s to partners.",
  alternates: { canonical: "/ein-for-partnership/" },
};

const faqs = [
  {
    q: "Does every partnership need an EIN?",
    a: "Yes. The IRS requires every partnership to have an EIN. Partnerships file Form 1065 (US Return of Partnership Income) annually, which requires an EIN. There are no exceptions -- general partnerships, limited partnerships, and LLPs all need an EIN.",
  },
  {
    q: "Can a partnership use a partner's SSN instead of an EIN?",
    a: "No. Unlike sole proprietors, partnerships cannot use a partner's SSN for business tax purposes. The partnership is a separate entity for tax filing purposes and must have its own EIN. Each partner receives a Schedule K-1 from the partnership, which they report on their personal return.",
  },
  {
    q: "How much does it cost to get an EIN for a partnership?",
    a: "Getting an EIN from the IRS is free. US residents with an SSN or ITIN apply online at irs.gov and receive the EIN instantly. Non-US resident partners can use ein.so to handle the fax application for $49 (Standard) or $97 (Express).",
  },
  {
    q: "Who is the responsible party for a partnership EIN?",
    a: "The responsible party is a general partner who controls the partnership's funds and assets. This must be an individual person, not another entity. If the partnership has multiple general partners, any one of them can serve as the responsible party on the EIN application.",
  },
  {
    q: "Do limited partnerships (LPs) need an EIN?",
    a: "Yes. Limited partnerships need an EIN just like general partnerships. The LP files Form 1065 and issues K-1s to both general and limited partners. The general partner who manages the LP typically serves as the responsible party on the EIN application.",
  },
  {
    q: "Do limited liability partnerships (LLPs) need an EIN?",
    a: "Yes. LLPs are treated as partnerships by the IRS and must have an EIN. The LLP files Form 1065 and issues K-1s to all partners. The EIN application process is identical to that of a general partnership.",
  },
  {
    q: "Does a two-member LLC need a partnership EIN?",
    a: "A multi-member LLC is taxed as a partnership by default. It needs an EIN and files Form 1065 just like a traditional partnership. On the EIN application, you select 'LLC' as the entity type, not 'Partnership,' but the tax treatment is the same.",
  },
  {
    q: "What happens if a partner leaves the partnership?",
    a: "If a partner leaves but the partnership continues operating, you generally do not need a new EIN. However, if the partnership dissolves and a new partnership forms, the new partnership needs its own EIN. Also update the responsible party with the IRS by filing Form 8822-B if the departing partner was the responsible party.",
  },
];

export default function EinForPartnershipPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
          { name: "EIN for Partnership", url: "/ein-for-partnership/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Partnership: Required for All Partnerships (2026)"
        description="Complete guide to EIN requirements for partnerships. Covers general partnerships, limited partnerships, LLPs, and how to apply in 2026."
        url="/ein-for-partnership/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForPartnershipClient faqs={faqs} />
    </>
  );
}
