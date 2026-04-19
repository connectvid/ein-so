import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema, HowToSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";
import { MDXPage } from "@/lib/mdx";

const { frontmatter: fm, content } = getListPage("ss4-form-guide/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function SS4FormGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema
        headline={fm.schema.headline}
        description={fm.schema.description}
        url={fm.canonical}
        datePublished={fm.schema.datePublished}
      />
      <HowToSchema steps={fm.howto.steps} />
      <FAQSchema faqs={fm.faqs} />
      <MDXPage frontmatter={fm} content={content} />
    </>
  );
}
