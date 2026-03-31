import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { BreadcrumbSchema } from "../schema";

export const metadata: Metadata = {
  title: "Contact ein.so | EIN Help & Support",
  description:
    "Get in touch with ein.so for help with your EIN application. Reach us on WhatsApp or email. We respond within hours, not days.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact/" }]} />
      <ContactPageClient />
    </>
  );
}
