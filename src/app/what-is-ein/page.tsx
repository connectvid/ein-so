import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import WhatIsEinClient from "./WhatIsEinClient";

export const metadata: Metadata = {
  title: "What Is an EIN Number? Complete Guide 2026",
  description:
    "An EIN (Employer Identification Number) is a 9-digit tax ID issued by the IRS. Learn what an EIN is, who needs one, and how to apply in our 2026 guide.",
  alternates: { canonical: "/what-is-ein/" },
};

const faqs = [
  {
    q: "Is an EIN the same as a Tax ID number?",
    a: "An EIN is one type of Tax Identification Number (TIN). The term 'Tax ID' is a broad category that also includes Social Security Numbers (SSNs) and Individual Taxpayer Identification Numbers (ITINs). When people refer to a 'business Tax ID,' they almost always mean an EIN.",
  },
  {
    q: "How much does it cost to get an EIN?",
    a: "Applying for an EIN directly through the IRS is completely free. However, the IRS online application requires a US-based SSN or ITIN. Non-US residents who cannot use the online system often use a third-party service like ein.so to handle the SS-4 fax filing process.",
  },
  {
    q: "Can a non-US resident get an EIN?",
    a: "Yes. Non-US residents can obtain an EIN by submitting Form SS-4 to the IRS by fax (855-215-1627) or by calling the IRS at 267-941-1099. The IRS online EIN application is not available to applicants without an SSN or ITIN. ein.so handles this process for $49.",
  },
  {
    q: "Do EIN numbers expire?",
    a: "EINs do not technically expire. Once issued, your EIN is permanently assigned to your entity. However, the IRS may deactivate an EIN if it has not been used on any federal tax return or other IRS filing for three or more consecutive years. A deactivated EIN can sometimes be reactivated by contacting the IRS.",
  },
  {
    q: "How long does it take to get an EIN?",
    a: "If you apply online through the IRS (US residents with an SSN/ITIN only), you receive your EIN immediately. For fax applications using Form SS-4, the IRS processes and returns your EIN within 4-7 business days. Phone applications through the IRS international line may be processed during the call itself.",
  },
  {
    q: "Can I apply for an EIN online without an SSN?",
    a: "No. The IRS online EIN application (the EIN Assistant) requires a valid SSN or ITIN. If you do not have either, you must apply using Form SS-4 submitted by fax or mail, or by calling the IRS international line at 267-941-1099.",
  },
  {
    q: "What is the difference between an EIN and an SSN?",
    a: "An SSN (Social Security Number) is a 9-digit number assigned to US citizens and authorized residents for personal tax and social security purposes. An EIN (Employer Identification Number) is a 9-digit number assigned to businesses and other entities for federal tax identification. An SSN identifies individuals; an EIN identifies businesses.",
  },
];

export default function WhatIsEinPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "What Is an EIN?", url: "/what-is-ein/" },
        ]}
      />
      <ArticleSchema
        headline="What Is an EIN Number? Complete Guide (2026)"
        description="An EIN (Employer Identification Number) is a 9-digit tax ID issued by the IRS. Learn what an EIN is, who needs one, how to apply, EIN format, and more."
        url="/what-is-ein/"
      />
      <FAQSchema faqs={faqs} />
      <WhatIsEinClient faqs={faqs} />
    </>
  );
}
