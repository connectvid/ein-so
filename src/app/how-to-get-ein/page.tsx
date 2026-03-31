import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import HowToGetEinClient from "./HowToGetEinClient";

export const metadata: Metadata = {
  title: "How to Get an EIN Number (2026) | Step-by-Step Guide | ein.so",
  description:
    "Learn how to get an EIN number in 2026. Three methods explained: online, fax (Form SS-4), and phone. Step-by-step guide for US residents and non-residents.",
};

const faqs = [
  {
    q: "Can I get an EIN without a Social Security Number (SSN)?",
    a: "Yes. Non-US residents who do not have an SSN or ITIN can still obtain an EIN by submitting Form SS-4 to the IRS by fax or by calling the IRS international line. The online application is not available without an SSN or ITIN.",
  },
  {
    q: "How long does it take to get an EIN?",
    a: "It depends on the method. The online application issues an EIN instantly. Faxing Form SS-4 takes approximately 4 business days. Calling the IRS international phone line can result in an immediate EIN, but hold times are often very long.",
  },
  {
    q: "Is there a fee for getting an EIN from the IRS?",
    a: "No. The IRS does not charge any fee for issuing an EIN. It is completely free whether you apply online, by fax, or by phone. Third-party services like ein.so charge a service fee for handling the application process on your behalf.",
  },
  {
    q: "Can a non-US resident apply for an EIN online?",
    a: "No. The IRS online EIN application requires a valid SSN or ITIN, which most non-US residents do not have. Non-residents must use either the fax method (Form SS-4) or the international phone line to obtain an EIN.",
  },
  {
    q: "What is Form SS-4 and where do I get it?",
    a: "Form SS-4 is the official IRS Application for Employer Identification Number. You can download it for free from the IRS website (irs.gov). The form asks for your legal name, business details, entity type, and reason for applying.",
  },
  {
    q: "What happens if my EIN application is rejected?",
    a: "Common reasons for rejection include incomplete information, duplicate applications, or incorrect entity classification. If rejected, you will need to correct the errors and resubmit. The IRS will typically send a notice explaining the reason for the rejection.",
  },
  {
    q: "Do I need a US address to get an EIN?",
    a: "No. You can use a foreign address on your Form SS-4 application. However, having a US mailing address can simplify future IRS correspondence. Many non-residents use a registered agent address in the US.",
  },
];

export default function HowToGetEinPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "How to Get an EIN", url: "/how-to-get-ein/" },
        ]}
      />
      <ArticleSchema
        headline="How to Get an EIN Number (2026) — Step-by-Step Guide"
        description="Complete guide to getting an EIN number in 2026. Three methods explained: online, fax, and phone. Includes steps for non-US residents."
        url="/how-to-get-ein/"
      />
      <FAQSchema faqs={faqs} />
      <HowToGetEinClient faqs={faqs} />
    </>
  );
}
