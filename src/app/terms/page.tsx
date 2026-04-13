import type { Metadata } from "next";
import { BreadcrumbSchema } from "../schema";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ein.so terms of service. Service terms, disclaimers, and refund policy for our EIN application service.",
  alternates: { canonical: "/terms/" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Terms of Service", url: "/terms/" }]} />
      <TermsClient />
    </>
  );
}
