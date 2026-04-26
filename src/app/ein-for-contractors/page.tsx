import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";
import { MDXPage } from "@/lib/mdx";

const { frontmatter: fm, content } = getListPage("ein-for-contractors/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function EinForContractorsPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema headline={fm.schema.headline} description={fm.schema.description} url={fm.canonical} />
      <FAQSchema faqs={fm.faqs} />
      <MDXPage frontmatter={fm} content={content} />
    </>
  );
}
