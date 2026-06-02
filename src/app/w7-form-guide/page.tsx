import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";
import { MDXPage } from "@/lib/mdx";

const { frontmatter: fm, content } = getListPage("w7-form-guide/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function W7FormGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema headline={fm.schema.headline} description={fm.schema.description} url={fm.canonical} />
      <FAQSchema faqs={fm.faqs} />
      <MDXPage frontmatter={fm} content={content} />
    </>
  );
}
