import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForHiringEmployeesClient from "./EinForHiringEmployeesClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("ein-for-hiring-employees/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function EinForHiringEmployeesPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema
        headline={fm.schema.headline}
        description={fm.schema.description}
        url={fm.canonical}
        datePublished={fm.schema.datePublished}
      />
      <FAQSchema faqs={fm.faqs} />
      <EinForHiringEmployeesClient faqs={fm.faqs} />
    </>
  );
}
