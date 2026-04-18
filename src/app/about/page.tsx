import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { BreadcrumbSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("about/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <AboutPageClient />
    </>
  );
}
