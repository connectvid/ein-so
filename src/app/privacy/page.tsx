import type { Metadata } from "next";
import { BreadcrumbSchema } from "../schema";
import PrivacyClient from "./PrivacyClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("privacy/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
  robots: fm.robots,
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <PrivacyClient />
    </>
  );
}
