import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinLookupClient from "./EinLookupClient";

export const metadata: Metadata = {
  title: "EIN Lookup 2026 | How to Find an EIN Number | ein.so",
  description:
    "Look up any EIN number in 2026. Free and paid methods: IRS Tax Exempt Org Search, SEC EDGAR, state registries, and how to recover a lost EIN.",
  alternates: { canonical: "/ein-lookup/" },
};

const faqs = [
  {
    q: "Can I look up any company's EIN for free?",
    a: "There is no single free database that lets you look up any company's EIN. The IRS does not provide a public EIN lookup tool. However, you can find non-profit EINs using the IRS Tax Exempt Organization Search and public company EINs through SEC EDGAR filings. For other businesses, you may need to check state business registries or ask the company directly.",
  },
  {
    q: "How do I find my own EIN if I lost it?",
    a: "If you lost your own EIN, you have several options: check your original IRS confirmation letter (CP 575), look at previously filed tax returns, check your bank account records (your bank required your EIN to open a business account), or call the IRS Business & Specialty Tax Line at 800-829-4933 (Monday through Friday, 7 a.m. to 7 p.m. local time).",
  },
  {
    q: "What is an EIN verification letter (Letter 147C)?",
    a: "IRS Letter 147C is an official EIN verification letter. It confirms that a specific EIN has been assigned to a specific entity. You can request a 147C letter by calling the IRS at 800-829-4933. The IRS can fax the letter to you the same day or mail it within 4-6 weeks. Many banks and financial institutions accept Letter 147C as proof of your EIN.",
  },
  {
    q: "Is there an official IRS EIN lookup tool?",
    a: "No. The IRS does not offer a universal public EIN lookup tool. The closest thing is the IRS Tax Exempt Organization Search, which only covers organizations with tax-exempt status under section 501(c). There is no IRS tool to look up EINs for for-profit businesses, LLCs, or sole proprietorships.",
  },
  {
    q: "Can I look up an EIN on the IRS website?",
    a: "Only for non-profit organizations. The IRS Tax Exempt Organization Search at apps.irs.gov lets you search for 501(c) organizations and view their EIN, filing status, and Form 990 data. For all other entity types, the IRS website does not provide EIN lookup capabilities.",
  },
  {
    q: "How long does it take to get an EIN verification letter?",
    a: "If you call the IRS at 800-829-4933 and request a 147C letter, they can fax it to you the same business day. If you request it by mail, delivery typically takes 4-6 weeks. You must be an authorized person on the EIN account to request a verification letter.",
  },
];

export default function EinLookupPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN Lookup", url: "/ein-lookup/" },
        ]}
      />
      <ArticleSchema
        headline="EIN Lookup: How to Find Any EIN Number"
        description="A comprehensive guide to looking up EIN numbers. Covers every free and paid method including IRS Tax Exempt Org Search, SEC EDGAR, state registries, and how to recover a lost EIN."
        url="/ein-lookup/"
      />
      <FAQSchema faqs={faqs} />
      <EinLookupClient faqs={faqs} />
    </>
  );
}
