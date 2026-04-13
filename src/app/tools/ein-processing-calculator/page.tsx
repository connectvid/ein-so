import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "../../schema";
import EinProcessingCalculatorClient from "./EinProcessingCalculatorClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "EIN Processing Time Calculator: When Will You Get Your EIN?",
  description:
    "Calculate your EIN processing time based on application method. Compare Standard vs Express timelines.",
  alternates: { canonical: "/tools/ein-processing-calculator/" },
};

const faqs = [
  {
    q: "How long does it take to get an EIN online?",
    a: "If you apply online through the IRS website, you receive your EIN immediately at the end of the application. However, the online application is only available to applicants who have a valid SSN or ITIN. Non-residents without these documents cannot use the online method.",
  },
  {
    q: "How long does it take to get an EIN by fax?",
    a: "Standard fax processing takes approximately 4-7 business days. The IRS processes faxed Form SS-4 applications in the order received. Processing times can vary depending on IRS workload and staffing levels. ein.so offers Express fax processing with priority handling that delivers your EIN in 2-3 business days for $97.",
  },
  {
    q: "Why is the phone method not available to everyone?",
    a: "The IRS international phone line (267-941-1099) is available to non-residents, but it has very limited operating hours (6:00 AM to 11:00 PM Eastern Time, Monday through Friday) and extremely long hold times that can exceed two hours. Many callers are disconnected before reaching an agent. The phone method technically works but is unreliable in practice.",
  },
  {
    q: "How long does it take to get an EIN by mail?",
    a: "Mail applications take 4-6 weeks for processing. The IRS receives your Form SS-4 by mail, processes it manually, and mails your EIN confirmation letter (CP 575) back to you. This is the slowest method and is not recommended unless other options are unavailable. International mail can add additional time in both directions.",
  },
  {
    q: "What is the fastest way for a non-resident to get an EIN?",
    a: "The fastest method for a non-resident is Express fax filing through ein.so, which delivers your EIN in 2-3 business days for $97. Standard fax filing through ein.so takes 5-7 business days for $49. Both options are significantly faster and more reliable than trying to call the IRS or mailing your application.",
  },
  {
    q: "Does the EIN processing time calculator account for weekends and holidays?",
    a: "Yes. The calculator counts only business days (Monday through Friday) and excludes weekends. Note that it does not account for federal holidays when the IRS is closed, so actual delivery may be one or two days later if a federal holiday falls within your processing window.",
  },
];

export default function EinProcessingCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EIN Processing Time", url: "/ein-processing-time/" },
          { name: "EIN Processing Calculator", url: "/tools/ein-processing-calculator/" },
        ]}
      />
      <SoftwareApplicationSchema
        name="EIN Processing Time Calculator"
        description="Free calculator to estimate when you will receive your EIN based on application method and submission date."
        url="/tools/ein-processing-calculator/"
      />
      <FAQSchema faqs={faqs} />
      <EinProcessingCalculatorClient faqs={faqs} />
    </>
  );
}
