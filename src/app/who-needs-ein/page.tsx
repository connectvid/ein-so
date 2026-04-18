import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import WhoNeedsEinClient from "./WhoNeedsEinClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("who-needs-ein/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function WhoNeedsEinPage() {
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
      <WhoNeedsEinClient faqs={fm.faqs} />
    </>
  );
}
