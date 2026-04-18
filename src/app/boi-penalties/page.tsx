import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import BoiPenaltiesClient from "./BoiPenaltiesClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("boi-penalties/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function BoiPenaltiesPage() {
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
      <BoiPenaltiesClient faqs={fm.faqs} />
    </>
  );
}
