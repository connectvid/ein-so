import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForBrazilClient from "./EinForBrazilClient";

export const metadata: Metadata = {
  title: "EIN for Brazilian Entrepreneurs: US Business Guide (2026)",
  description:
    "Brazilian entrepreneurs can get a US EIN without an SSN. Learn how Amazon sellers, e-commerce businesses, and real estate investors from Brazil apply for an EIN. ein.so handles it for $49.",
  alternates: { canonical: "/ein-for-brazil/" },
};

const faqs = [
  {
    q: "Can Brazilian citizens get a US EIN?",
    a: "Yes. Brazilian citizens can get a US EIN by submitting Form SS-4 by fax to the IRS. No SSN or ITIN is required. Your Brazilian passport number serves as identification. ein.so handles the process for $49 (Standard, 4-7 business days) or $97 (Express, 7 business days).",
  },
  {
    q: "Do Brazilian entrepreneurs need an SSN to get a US EIN?",
    a: "No. Brazilian applicants do not need a Social Security Number or ITIN. Your Brazilian passport number is used on Form SS-4. The IRS online tool requires an SSN, so Brazilians use the fax method. ein.so handles the fax filing for you.",
  },
  {
    q: "What is the difference between a CNPJ and a US EIN?",
    a: "Your CNPJ (Cadastro Nacional da Pessoa Juridica) is issued by the Receita Federal for Brazilian business tax purposes. Your CPF is your individual Brazilian tax ID. A US EIN is issued by the IRS for US tax purposes. They serve different countries. Your CNPJ/CPF cannot be used for US banking or tax compliance.",
  },
  {
    q: "Can I sell on Amazon.com from Brazil with a US EIN?",
    a: "Yes. Your US EIN and LLC let you register as a US seller on Amazon.com. You complete the tax interview with your EIN and gain access to Amazon's US marketplace and FBA warehouses. This is separate from any Brazilian marketplace presence.",
  },
  {
    q: "Can Brazilian real estate investors use a US EIN?",
    a: "Yes. Brazilian nationals investing in US real estate commonly form US LLCs to hold property. Your EIN is required for the LLC's tax filing, rental income reporting, and banking. Many Brazilian investors in Florida, New York, and other states use this structure.",
  },
  {
    q: "How do I transfer funds between Brazil and my US account?",
    a: "Use Wise, Remessa Online, or your Brazilian bank's international transfer service (DOC/TED internacional) to move funds between your US bank account (opened with your EIN) and your Brazilian bank account. Wise typically offers the best BRL/USD exchange rates.",
  },
  {
    q: "How long does it take for a Brazilian to receive a US EIN?",
    a: "Through ein.so, Standard processing takes 4-7 business days ($49) and Express takes 7 business days ($97). Calling the IRS from Brazil is impractical due to the time difference and expensive international calling rates.",
  },
];

export default function EinForBrazilPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN for Non-Residents", url: "/ein-for-non-residents/" },
          { name: "EIN for Brazil", url: "/ein-for-brazil/" },
        ]}
      />
      <ArticleSchema
        headline="EIN for Brazilian Entrepreneurs: US Business Guide (2026)"
        description="Complete guide for Brazilian entrepreneurs applying for a US EIN. Amazon FBA, e-commerce, CNPJ vs EIN, and Brazilian real estate investors."
        url="/ein-for-brazil/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinForBrazilClient faqs={faqs} />
    </>
  );
}
