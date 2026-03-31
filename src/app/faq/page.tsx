import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema } from "../schema";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "EIN FAQ 2026 | All EIN Questions Answered | ein.so",
  description:
    "Comprehensive FAQ about EIN numbers for non-US residents. Learn about the application process, requirements, costs, and what to do after receiving your EIN.",
};

const faqs: { q: string; a: string; category: string }[] = [
  // General EIN Questions
  {
    category: "General EIN Questions",
    q: "What is an EIN (Employer Identification Number)?",
    a: "An EIN is a unique 9-digit number assigned by the IRS to identify a business entity for tax purposes. It works like a Social Security Number but for businesses. It is also called a Federal Tax Identification Number.",
  },
  {
    category: "General EIN Questions",
    q: "Who needs an EIN?",
    a: "Anyone starting a business in the US, opening a US business bank account, hiring employees, or filing US tax returns for a business entity needs an EIN. This applies to both US residents and non-residents.",
  },
  {
    category: "General EIN Questions",
    q: "Is an EIN the same as a Tax ID?",
    a: "Yes. An EIN is one type of Tax Identification Number (TIN). It is specifically used for business entities, while individuals use a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN).",
  },
  {
    category: "General EIN Questions",
    q: "Does an EIN expire?",
    a: "No. Once the IRS assigns an EIN to your business, it never expires. Even if you close your business, the EIN remains associated with that entity permanently and cannot be reused.",
  },
  {
    category: "General EIN Questions",
    q: "Is there a fee from the IRS to get an EIN?",
    a: "No. The IRS does not charge a fee to assign an EIN. Our service fee of $49 (Standard) or $97 (Express) covers the preparation of Form SS-4, fax submission to the IRS, and delivery of your EIN by email.",
  },
  {
    category: "General EIN Questions",
    q: "What is the difference between an EIN and an ITIN?",
    a: "An EIN identifies a business entity, while an ITIN is for individuals who need a US tax ID but are not eligible for an SSN. You may need both — an EIN for your business and an ITIN for your personal US tax obligations.",
  },

  // Non-Resident Specific
  {
    category: "Non-Resident Specific",
    q: "Can non-US residents get an EIN?",
    a: "Yes. Non-US residents can absolutely get an EIN from the IRS. You do not need to be a US citizen, permanent resident, or have any US visa. You just need a valid reason, such as forming a US business entity.",
  },
  {
    category: "Non-Resident Specific",
    q: "Do I need a Social Security Number (SSN) to get an EIN?",
    a: "No. Non-US residents can obtain an EIN without an SSN or ITIN. The SS-4 form has a specific field for the responsible party's foreign identification, which can be a passport or national ID number.",
  },
  {
    category: "Non-Resident Specific",
    q: "Do I need a US address to apply for an EIN?",
    a: "No. You can use your foreign address on Form SS-4. The IRS accepts international addresses for non-resident applicants. Your EIN will be delivered to your email, not by postal mail.",
  },
  {
    category: "Non-Resident Specific",
    q: "Why can't non-residents apply for an EIN online?",
    a: "The IRS online EIN application requires a Social Security Number (SSN) or ITIN. Since most non-residents don't have either, you must submit Form SS-4 by fax to the IRS international fax line (855-215-1627). That is exactly what our service handles for you.",
  },
  {
    category: "Non-Resident Specific",
    q: "Can I get an EIN for an LLC formed in the US as a foreigner?",
    a: "Yes. Many non-residents form LLCs in states like Wyoming, Delaware, or New Mexico and then apply for an EIN. The EIN is required to open a US bank account and file taxes for the LLC.",
  },
  {
    category: "Non-Resident Specific",
    q: "Which countries can apply for an EIN through ein.so?",
    a: "We serve clients from every country. Whether you are in Bangladesh, India, the UK, Canada, Australia, or anywhere else, we can help you obtain an EIN from the IRS.",
  },

  // Application Process
  {
    category: "Application Process",
    q: "What information do I need to apply for an EIN?",
    a: "You need your full legal name (as shown on your passport), date of birth, country of citizenship, mailing address, and business details including business name, entity type (LLC, Corporation, etc.), and reason for applying.",
  },
  {
    category: "Application Process",
    q: "How long does it take to get an EIN?",
    a: "With our Standard service ($49), the IRS typically processes faxed SS-4 forms in 5-7 business days. Our Express service ($97) includes priority filing and IRS follow-up, reducing the timeline to 2-3 business days.",
  },
  {
    category: "Application Process",
    q: "What is Form SS-4?",
    a: "Form SS-4 is the IRS form used to apply for an Employer Identification Number. It collects information about the business entity and its responsible party. We complete this form for you based on the information you provide.",
  },
  {
    category: "Application Process",
    q: "How does the application process work with ein.so?",
    a: "It is simple: (1) You provide your information through our secure form, (2) We prepare and fax your SS-4 to the IRS, (3) We monitor for your EIN, and (4) We email you your EIN as soon as it is assigned.",
  },
  {
    category: "Application Process",
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, American Express) through Stripe. All payments are encrypted and secure.",
  },
  {
    category: "Application Process",
    q: "Can I apply for multiple EINs?",
    a: "Yes. Each separate business entity needs its own EIN. If you have multiple LLCs or corporations, you will need a separate EIN application for each one. We offer the same service for each application.",
  },

  // After Getting Your EIN
  {
    category: "After Getting Your EIN",
    q: "How will I receive my EIN?",
    a: "Your EIN will be delivered via email. We send you a copy of your IRS EIN confirmation letter (CP 575) as soon as the IRS processes your application.",
  },
  {
    category: "After Getting Your EIN",
    q: "What can I do with my EIN once I have it?",
    a: "You can open a US business bank account, register on payment platforms (Stripe, PayPal), file US tax returns, hire employees, apply for business licenses, and establish your business identity in the US.",
  },
  {
    category: "After Getting Your EIN",
    q: "Can I open a US bank account with just an EIN?",
    a: "An EIN is required to open a business bank account, but banks may also require additional documents such as your Articles of Organization, Operating Agreement, and a valid passport or ID.",
  },
  {
    category: "After Getting Your EIN",
    q: "What if my EIN application is rejected by the IRS?",
    a: "IRS rejections are rare when the form is completed correctly. If your application is rejected for any reason we caused, we will refile at no additional cost or provide a full refund — no questions asked.",
  },
  {
    category: "After Getting Your EIN",
    q: "I lost my EIN. Can I recover it?",
    a: "Yes. If you previously received an EIN but lost the number, the IRS can look it up. You can call the IRS Business & Specialty Tax Line at 267-941-1099 (for international callers). We can also assist with EIN recovery.",
  },
  {
    category: "After Getting Your EIN",
    q: "Do I need to file taxes after getting an EIN?",
    a: "It depends on your business activity. If your US entity earns income, you will likely need to file tax returns. We recommend consulting a tax professional for guidance specific to your situation.",
  },
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq/" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <FAQPageClient faqs={faqs} />
    </>
  );
}
