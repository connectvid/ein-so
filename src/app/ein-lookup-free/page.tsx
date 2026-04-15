import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinLookupFreeClient from "./EinLookupFreeClient";

export const metadata: Metadata = {
  title: "Free EIN Lookup: 5 Ways to Find an EIN Number (2026)",
  description:
    "Find any EIN for free using IRS Tax Exempt Search, SEC EDGAR, state business registries, or by calling the IRS directly.",
  alternates: { canonical: "/ein-lookup-free/" },
};

const faqs = [
  {
    q: "Can I look up any company's EIN for free?",
    a: "You can look up EINs for free for nonprofits (using IRS Tax Exempt Organization Search), publicly traded companies (using SEC EDGAR), and businesses registered in states that publish EINs in their business registries. However, private companies are not required to disclose their EINs publicly, so not every EIN is freely available online.",
  },
  {
    q: "How do I find my own EIN if I lost it?",
    a: "Check your original IRS confirmation letter (CP 575), previously filed tax returns, bank account opening documents, or any IRS correspondence. If you cannot find it in your records, call the IRS Business and Specialty Tax Line at (800) 829-4933. The IRS will verify your identity and provide your EIN over the phone.",
  },
  {
    q: "Is the IRS Tax Exempt Organization Search really free?",
    a: "Yes, completely free. The IRS Tax Exempt Organization Search at apps.irs.gov/app/eos is a public database maintained by the IRS. It contains EINs, filing status, and Form 990 data for all tax-exempt organizations including nonprofits, charities, and religious organizations. No registration or payment is required to search.",
  },
  {
    q: "Can I find an EIN on SEC EDGAR?",
    a: "Yes, but only for companies that file with the Securities and Exchange Commission. This includes publicly traded companies and certain private companies that have issued public securities. Search at sec.gov/cgi-bin/browse-edgar and the company's CIK page will display its EIN (listed as IRS Number).",
  },
  {
    q: "Do state business registries show EIN numbers?",
    a: "Some states display EINs in their online business registries, but most do not. States like California, New York, and Texas do not publish EINs. You are more likely to find state tax identification numbers rather than federal EINs. Check your specific state's Secretary of State website to see what information they make public.",
  },
  {
    q: "Can I call the IRS to look up another company's EIN?",
    a: "No. The IRS will only provide EIN information to authorized representatives of the business entity. You cannot call the IRS to look up someone else's EIN. However, you can ask the business directly, check public records, or use the free lookup methods described in this guide for nonprofits and public companies.",
  },
  {
    q: "What is the difference between an EIN lookup and an EIN verification?",
    a: "An EIN lookup means finding an EIN number you do not already have. An EIN verification means confirming that a specific EIN is valid and belongs to a particular business. The IRS does not offer a public EIN verification tool. You can verify EINs for nonprofits through the Tax Exempt Organization Search or ask the business for their IRS confirmation letter.",
  },
];

export default function EinLookupFreePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN Lookup", url: "/ein-lookup/" },
          { name: "Free EIN Lookup", url: "/ein-lookup-free/" },
        ]}
      />
      <ArticleSchema
        headline="Free EIN Lookup: 5 Ways to Find an EIN Number (2026)"
        description="Find any EIN for free using IRS Tax Exempt Search, SEC EDGAR, state business registries, or by calling the IRS directly."
        url="/ein-lookup-free/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinLookupFreeClient faqs={faqs} />
    </>
  );
}
