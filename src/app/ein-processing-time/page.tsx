import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinProcessingTimeClient from "./EinProcessingTimeClient";

export const metadata: Metadata = {
  title: "EIN Processing Time: How Long Does It Take? (2026)",
  description:
    "Learn how long it takes to get an EIN in 2026. Compare processing times by method: online (instant), fax (4-7 days), phone (same day), and mail (4-6 weeks). Express option available.",
  alternates: { canonical: "/ein-processing-time/" },
};

const faqs = [
  {
    q: "How long does it take to get an EIN online?",
    a: "If you apply through the IRS EIN Assistant online and have a valid SSN or ITIN, you receive your EIN immediately upon completing the application. The online system is available Monday through Friday, 7:00 AM to 10:00 PM Eastern Time. This is the fastest method but is only available to US residents with an SSN or ITIN.",
  },
  {
    q: "How long does EIN processing take by fax?",
    a: "When you submit Form SS-4 by fax to the IRS, EIN processing typically takes 7 to 14 business days. The IRS faxes your EIN assignment letter back to the number you provide on the form. During peak filing periods (January through April), processing may take slightly longer due to higher volume.",
  },
  {
    q: "Can I speed up my EIN processing time?",
    a: "Yes. ein.so offers an Express service for $97 that prioritizes your SS-4 filing and includes same-day fax submission, real-time tracking, and expedited follow-up with the IRS. Express applications are typically processed within 7 business days. The Standard service at $49 follows the normal 4-7 business day IRS timeline.",
  },
  {
    q: "Why is my EIN application taking so long?",
    a: "Common reasons for EIN processing delays include errors on Form SS-4 (wrong entity type, missing fields, incorrect address format), IRS processing backlogs during tax season, illegible fax transmissions, or incomplete responsible party information. If your application has been pending for more than 10 business days, contact the IRS at 267-941-1099 or let ein.so follow up on your behalf.",
  },
  {
    q: "How long does it take to get an EIN by mail?",
    a: "Mailing Form SS-4 to the IRS takes approximately 4 to 6 weeks for processing. This is the slowest method available and is generally not recommended unless you have no access to fax or phone. The IRS mails your EIN assignment letter back to the address on your application.",
  },
  {
    q: "Does IRS processing time for EIN vary by entity type?",
    a: "No. The IRS processes all EIN applications using the same timeline regardless of whether you are an LLC, corporation, partnership, sole proprietor, nonprofit, or trust. The processing time depends entirely on the submission method (online, fax, phone, or mail), not the entity type.",
  },
  {
    q: "What is the EIN processing time for non-US residents?",
    a: "Non-US residents cannot use the IRS online system, so the fastest option is fax (4-7 business days) or phone (same day if you reach an agent). ein.so handles the fax filing process for non-residents, with Standard processing ($49) taking 4-7 business days and Express processing ($97) taking 7 business days.",
  },
  {
    q: "Can I use my EIN immediately after receiving it?",
    a: "The IRS recommends waiting approximately 2 weeks after receiving your EIN before using it to file tax returns electronically, as it takes time for the EIN to propagate through all IRS systems. However, you can use your EIN immediately for opening bank accounts, applying for business licenses, and completing vendor registrations.",
  },
];

export default function EinProcessingTimePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "How to Get EIN", url: "/how-to-get-ein/" },
          { name: "EIN Processing Time", url: "/ein-processing-time/" },
        ]}
      />
      <ArticleSchema
        headline="EIN Processing Time: How Long Does It Take? (2026)"
        description="Complete guide to EIN processing times in 2026. Compare online, fax, phone, and mail methods. Learn how to speed up your EIN application with Express processing."
        url="/ein-processing-time/"
        datePublished="2026-04-13"
      />
      <FAQSchema faqs={faqs} />
      <EinProcessingTimeClient faqs={faqs} />
    </>
  );
}
