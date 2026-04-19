import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema, HowToSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";
import { MDXPage } from "@/lib/mdx";

const { frontmatter: fm, content } = getListPage("how-to-get-ein/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function HowToGetEinPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema
        headline={fm.schema.headline}
        description={fm.schema.description}
        url={fm.canonical}
      />
      <HowToSchema steps={fm.howToSteps} />
      <FAQSchema faqs={fm.faqs} />
      <MDXPage frontmatter={fm} content={content} />
    </>
  );
}
