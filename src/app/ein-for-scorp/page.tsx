import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinForScorpClient from "./EinForScorpClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("ein-for-scorp/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function EinForScorpPage() {
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
      <EinForScorpClient faqs={fm.faqs} />
    </>
  );
}
