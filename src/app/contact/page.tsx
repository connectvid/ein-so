import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { BreadcrumbSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("contact/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ContactPageClient />
    </>
  );
}
