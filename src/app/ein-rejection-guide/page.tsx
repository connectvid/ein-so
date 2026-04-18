import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinRejectionGuideClient from "./EinRejectionGuideClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("ein-rejection-guide/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function EinRejectionGuidePage() {
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
      <EinRejectionGuideClient faqs={fm.faqs} />
    </>
  );
}
