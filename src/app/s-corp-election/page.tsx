import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import SCorpElectionClient from "./SCorpElectionClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("s-corp-election/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function SCorpElectionPage() {
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
      <SCorpElectionClient faqs={fm.faqs} />
    </>
  );
}
