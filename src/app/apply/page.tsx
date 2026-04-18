import type { Metadata } from "next";
import ApplyPageClient from "./ApplyPageClient";
import { FAQSchema, BreadcrumbSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("apply/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <FAQSchema faqs={fm.faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fm.serviceSchema) }} />
      <ApplyPageClient faqs={fm.faqs} />
    </>
  );
}
