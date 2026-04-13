import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import WhoNeedsEinClient from "./WhoNeedsEinClient";

export const metadata: Metadata = {
  title: "Who Needs an EIN? Complete List of Entities (2026)",
  description:
    "Find out who needs an EIN in 2026. LLCs, corporations, nonprofits, partnerships, trusts, estates, sole proprietors, non-residents, Amazon sellers, and freelancers.",
  alternates: { canonical: "/who-needs-ein/" },
};

const faqs = [
  {
    q: "Does a single-member LLC need an EIN?",
    a: "Yes. While a single-member LLC with no employees is not strictly required by the IRS to have an EIN, you will need one to open a business bank account, build business credit, or hire employees in the future. Most banks and payment processors require an EIN before they will open an account for your LLC.",
  },
  {
    q: "Do I need an EIN if I am a sole proprietor with no employees?",
    a: "A sole proprietor with no employees is not required to have an EIN and can use their SSN for tax filing. However, getting an EIN protects your SSN from exposure on invoices, contracts, and tax forms. Many sole proprietors obtain an EIN voluntarily for identity protection and to appear more professional.",
  },
  {
    q: "Can a non-US resident get an EIN?",
    a: "Yes. Non-US residents can obtain an EIN by submitting Form SS-4 to the IRS by fax or by calling the IRS international line at 267-941-1099. The online EIN application is not available to applicants without an SSN or ITIN. ein.so handles this fax filing process for $49 (Standard) or $97 (Express).",
  },
  {
    q: "Does a nonprofit organization need an EIN?",
    a: "Yes, every nonprofit organization needs an EIN. It is required before you can apply for 501(c)(3) tax-exempt status with the IRS. You also need an EIN to open a bank account for the nonprofit, accept donations, file annual Form 990 returns, and hire employees or volunteers who receive stipends.",
  },
  {
    q: "Do I need a separate EIN for each business I own?",
    a: "Each legally separate entity needs its own EIN. If you operate two LLCs, each LLC needs its own EIN. If you run multiple businesses under one sole proprietorship, you use a single EIN. The rule is one EIN per legal entity, not per business activity.",
  },
  {
    q: "Does an Amazon seller need an EIN?",
    a: "Amazon requires a Tax Identification Number to register as a seller. US residents can use their SSN, but non-US residents need an EIN. Even US-based sellers benefit from using an EIN instead of an SSN to protect their personal information. An EIN is strongly recommended for all Amazon sellers.",
  },
  {
    q: "When do I need to get an EIN after forming my business?",
    a: "You should apply for an EIN immediately after forming your business entity. You will need it to open a bank account, file taxes, and start operations. There is no waiting period -- you can apply for an EIN the same day you register your LLC, corporation, or other entity with the state.",
  },
  {
    q: "Does a trust or estate need an EIN?",
    a: "Irrevocable trusts always need their own EIN because they are separate tax entities. Revocable living trusts use the grantor's SSN while the grantor is alive but need an EIN after the grantor dies. Estates of deceased persons always need an EIN to file estate tax returns and manage the estate's financial affairs.",
  },
];

export default function WhoNeedsEinPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
        ]}
      />
      <ArticleSchema
        headline="Who Needs an EIN? Complete List of Entities (2026)"
        description="Comprehensive guide to who needs an EIN in 2026. Covers LLCs, corporations, nonprofits, partnerships, trusts, estates, sole proprietors, non-residents, Amazon sellers, and freelancers."
        url="/who-needs-ein/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <WhoNeedsEinClient faqs={faqs} />
    </>
  );
}
