import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "../../schema";
import SS4FormHelperClient from "./SS4FormHelperClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("tools/ss4-form-helper/_index.md");

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function SS4FormHelperPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <SoftwareApplicationSchema
        name={fm.schema.name}
        description={fm.schema.description}
        url={fm.canonical}
      />
      <FAQSchema faqs={fm.faqs} />
      <SS4FormHelperClient faqs={fm.faqs} />
    </>
  );
}
