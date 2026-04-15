import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForMexicoClient from "./EinForMexicoClient";

export const metadata: Metadata = {
  title: "EIN for Mexican Entrepreneurs: Cross-Border Guide (2026)",
  description:
    "Mexican entrepreneurs can get a US EIN without an SSN. Learn how to apply from Mexico for USMCA trade, cross-border commerce, and Amazon expansion. ein.so handles it for $49.",
  alternates: { canonical: "/ein-for-mexico/" },
};

const faqs = [
  {
    q: "Can Mexican citizens get a US EIN?",
    a: "Yes. Mexican citizens can get a US EIN by submitting Form SS-4 by fax to the IRS. No SSN or ITIN is required. Your Mexican passport number serves as identification. ein.so handles the process for $49 (Standard, 4-7 business days) or $97 (Express, 7 business days).",
  },
  {
    q: "Do Mexican entrepreneurs need an SSN to get a US EIN?",
    a: "No. Mexican applicants do not need a Social Security Number or ITIN. Your Mexican passport number is used on Form SS-4. The IRS online tool requires an SSN, so Mexican applicants use the fax method. ein.so handles the fax filing for you.",
  },
  {
    q: "Can I call the IRS from Mexico to get an EIN?",
    a: "Yes, Mexicans can call the IRS at 267-941-1099. Mexico shares similar time zones with the US, making phone calls feasible. However, hold times often exceed 60 minutes, and you may need multiple attempts. The fax method through ein.so is faster and more reliable for $49.",
  },
  {
    q: "What is the difference between an RFC and a US EIN?",
    a: "Your RFC (Registro Federal de Contribuyentes) is issued by the SAT (Servicio de Administracion Tributaria) for Mexican tax purposes. A US EIN is issued by the IRS for US tax purposes. They serve different countries. Your RFC cannot be used for US banking, tax filing, or marketplace registration.",
  },
  {
    q: "Does USMCA affect my need for a US EIN?",
    a: "USMCA (United States-Mexico-Canada Agreement) facilitates trade between the three countries but does not eliminate the need for a US EIN. If you sell into the US market, have a US entity, or have US tax obligations, you need an EIN regardless of USMCA benefits.",
  },
  {
    q: "Can I sell on Amazon.com from Mexico with a US EIN?",
    a: "Yes. Many Mexican sellers expand from Amazon.com.mx to Amazon.com. Your US EIN completes the Amazon tax interview, letting you register as a US-based seller through your LLC. This gives you access to Amazon's US marketplace, FBA warehouses, and the much larger US customer base.",
  },
  {
    q: "How do I manage MXN and USD with my US EIN?",
    a: "Open a US bank account using your EIN to hold USD. Use Wise or your Mexican bank's international transfer service to move funds between your US and Mexican accounts. Many Mexican entrepreneurs hold USD earnings and convert to MXN when exchange rates are favorable.",
  },
];

export default function EinForMexicoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Non-Residents", url: "/ein-for-non-residents/" },
          { name: "EIN for Mexico", url: "/ein-for-mexico/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Mexican Entrepreneurs: Cross-Border Guide (2026)"
        description="Complete guide for Mexican entrepreneurs applying for a US EIN. USMCA trade, Amazon expansion, RFC vs EIN, and cross-border commerce."
        url="/ein-for-mexico/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForMexicoClient faqs={faqs} />
    </>
  );
}
