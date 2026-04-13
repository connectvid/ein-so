import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForChinaClient from "./EinForChinaClient";

export const metadata: Metadata = {
  title: "EIN for Chinese Entrepreneurs: US Business Guide (2026)",
  description:
    "Chinese entrepreneurs can get a US EIN without an SSN. Learn how Amazon sellers, manufacturers, and exporters from China apply for an EIN. ein.so handles it for $49.",
  alternates: { canonical: "/ein-for-china/" },
};

const faqs = [
  {
    q: "Can Chinese citizens get a US EIN?",
    a: "Yes. Chinese citizens can get a US EIN by submitting Form SS-4 by fax to the IRS. No SSN or ITIN is required. Your Chinese passport number serves as identification. ein.so handles the process for $49 (Standard, 4-7 business days) or $97 (Express, 2-3 business days).",
  },
  {
    q: "Do Chinese entrepreneurs need an SSN to get a US EIN?",
    a: "No. Chinese applicants do not need a US Social Security Number or ITIN. Your Chinese passport number (starting with E or G) is used on Form SS-4. The IRS online tool requires an SSN, so Chinese applicants must use the fax method. ein.so handles the fax filing for you.",
  },
  {
    q: "How long does it take for a Chinese applicant to get an EIN?",
    a: "Through ein.so, Standard processing takes 4-7 business days ($49) and Express takes 2-3 business days ($97). Calling the IRS from China is extremely difficult due to the 12-13 hour time difference and international calling restrictions. The fax method through ein.so is the standard approach.",
  },
  {
    q: "Can I sell on Amazon.com from China with a US EIN?",
    a: "Yes. Chinese sellers are the largest group of international sellers on Amazon.com. A US EIN through a US LLC lets you register as a US-based seller, which may provide advantages in account stability and customer trust compared to selling directly from a Chinese entity.",
  },
  {
    q: "Can I open a US bank account from China with my EIN?",
    a: "Yes, though Chinese applicants may face additional banking challenges due to compliance requirements. Banks like Mercury accept applications from Chinese LLC owners with an EIN. Some banks may require additional documentation. Your EIN is the first requirement for any US bank account.",
  },
  {
    q: "What is the difference between a Chinese tax ID and a US EIN?",
    a: "Your Chinese tax registration number (Taxpayer Identification Number issued by the SAT) is for Chinese tax purposes. A US EIN is for US tax purposes. They serve different jurisdictions. If you operate in both countries, you need tax identification in both. Your Chinese tax ID is not accepted for US banking or tax filing.",
  },
  {
    q: "Do I need to register with SAFE or MOFCOM to form a US LLC?",
    a: "Chinese regulations regarding overseas direct investment (ODI) may require registration with SAFE (State Administration of Foreign Exchange) and/or MOFCOM (Ministry of Commerce). Requirements depend on the investment amount and your specific situation. Consult a Chinese legal professional familiar with ODI regulations before forming your US LLC.",
  },
];

export default function EinForChinaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Non-Residents", url: "/ein-for-non-residents/" },
          { name: "EIN for China", url: "/ein-for-china/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Chinese Entrepreneurs: US Business Guide (2026)"
        description="Complete guide for Chinese entrepreneurs applying for a US EIN. Amazon US selling, manufacturing exports, banking challenges, and compliance considerations."
        url="/ein-for-china/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForChinaClient faqs={faqs} />
    </>
  );
}
