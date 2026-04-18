import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import WhatIsEinClient from "./WhatIsEinClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("what-is-ein/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function WhatIsEinPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema
        headline={fm.schema.headline}
        description={fm.schema.description}
        url={fm.canonical}
      />
      <FAQSchema faqs={fm.faqs} />
      <WhatIsEinClient faqs={fm.faqs} />
    </>
  );
}
