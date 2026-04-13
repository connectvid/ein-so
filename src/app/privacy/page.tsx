import type { Metadata } from "next";
import { BreadcrumbSchema } from "../schema";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ein.so privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Privacy Policy", url: "/privacy/" }]} />
      <PrivacyClient />
    </>
  );
}
