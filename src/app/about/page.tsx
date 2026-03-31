import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { BreadcrumbSchema } from "../schema";

export const metadata: Metadata = {
  title: "About ein.so | EIN Service for Non-US Residents",
  description:
    "Learn about ein.so — the most affordable EIN service for non-US residents. We handle the SS-4 fax process so you don't have to. Just $49.",
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about/" }]} />
      <AboutPageClient />
    </>
  );
}
