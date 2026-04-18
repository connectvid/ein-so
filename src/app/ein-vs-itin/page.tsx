import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import EinVsItinClient from "./EinVsItinClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("ein-vs-itin/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function EinVsItinPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema
        headline={fm.schema.headline}
        description={fm.schema.description}
        url={fm.canonical}
      />
      <FAQSchema faqs={fm.faqs} />
      <EinVsItinClient faqs={fm.faqs} />
    </>
  );
}
