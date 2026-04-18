import type { Metadata } from "next";
import { BreadcrumbSchema } from "../schema";
import TermsClient from "./TermsClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("terms/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
  robots: fm.robots,
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <TermsClient />
    </>
  );
}
