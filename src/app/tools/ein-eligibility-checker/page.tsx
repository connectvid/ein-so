import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "../../schema";
import EinEligibilityCheckerClient from "./EinEligibilityCheckerClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("tools/ein-eligibility-checker/_index.md");

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function EinEligibilityCheckerPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <SoftwareApplicationSchema
        name={fm.schema.name}
        description={fm.schema.description}
        url={fm.canonical}
      />
      <FAQSchema faqs={fm.faqs} />
      <EinEligibilityCheckerClient faqs={fm.faqs} />
    </>
  );
}
