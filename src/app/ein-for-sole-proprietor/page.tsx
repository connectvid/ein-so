import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForSoleProprietorClient from "./EinForSoleProprietorClient";

export const metadata: Metadata = {
  title: "EIN for Sole Proprietor: Do You Need One? (2026)",
  description:
    "Sole proprietors need an EIN if they hire employees, file excise tax returns, or have a Keogh plan. Learn when and how to apply.",
  alternates: { canonical: "/ein-for-sole-proprietor/" },
};

const faqs = [
  {
    q: "Does a sole proprietor need an EIN?",
    a: "Not always. The IRS requires sole proprietors to have an EIN only if they hire employees, file excise tax returns, or have a Keogh or Solo 401(k) retirement plan. However, many sole proprietors get an EIN voluntarily to protect their SSN and open a business bank account.",
  },
  {
    q: "Can a sole proprietor use their SSN instead of an EIN?",
    a: "Yes, a sole proprietor without employees can use their SSN for tax filing. However, this means your SSN appears on every W-9 you give to clients, increasing identity theft risk. Getting an EIN allows you to use the EIN on W-9 forms instead of your SSN.",
  },
  {
    q: "How much does an EIN cost for a sole proprietor?",
    a: "Getting an EIN from the IRS is completely free. If you have an SSN or ITIN, you can apply online at irs.gov and receive your EIN instantly. Non-US residents without an SSN can use ein.so to apply by fax for $49 (Standard) or $97 (Express).",
  },
  {
    q: "How long does it take to get an EIN as a sole proprietor?",
    a: "If you apply online with an SSN or ITIN, you receive your EIN instantly. Fax applications take 4-7 business days. ein.so's Express service reduces fax processing to 7 business days. Mail applications take 4-6 weeks and are not recommended.",
  },
  {
    q: "Can a non-US resident get an EIN as a sole proprietor?",
    a: "Yes. Non-US residents who operate as sole proprietors in the United States can obtain an EIN. Since they cannot use the IRS online system, they must apply by fax using Form SS-4. ein.so handles this process for $49 (Standard) or $97 (Express).",
  },
  {
    q: "Do I need an EIN if I am a freelancer?",
    a: "Freelancers are sole proprietors by default. You need an EIN if you hire subcontractors (to issue 1099 forms), have employees, or want to open a business bank account. Even without these requirements, getting an EIN protects your SSN on client W-9 forms.",
  },
  {
    q: "What form do I use to apply for an EIN as a sole proprietor?",
    a: "You use IRS Form SS-4. On the form, select 'Sole proprietor' as the entity type. The responsible party is you, the sole proprietor. If you apply online, the IRS website walks you through SS-4 questions without requiring you to fill out the paper form.",
  },
  {
    q: "Does getting an EIN change how my sole proprietorship is taxed?",
    a: "No. Getting an EIN does not change your tax classification. As a sole proprietor, you still report business income on Schedule C of your personal tax return (Form 1040). The EIN is simply an identification number -- it does not create a separate tax entity.",
  },
];

export default function EinForSoleProprietorPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Who Needs an EIN?", url: "/who-needs-ein/" },
          { name: "EIN for Sole Proprietor", url: "/ein-for-sole-proprietor/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Sole Proprietor: Do You Need One? (2026)"
        description="Complete guide to EIN requirements for sole proprietors. Learn when an EIN is required, when it is optional, and how to apply in 2026."
        url="/ein-for-sole-proprietor/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForSoleProprietorClient faqs={faqs} />
    </>
  );
}
