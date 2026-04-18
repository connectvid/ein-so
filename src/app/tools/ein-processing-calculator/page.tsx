import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "../../schema";
import EinProcessingCalculatorClient from "./EinProcessingCalculatorClient";
import { getListPage } from "@/lib/contentParser";

const { frontmatter: fm } = getListPage("tools/ein-processing-calculator/_index.md");

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function EinProcessingCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <SoftwareApplicationSchema
        name={fm.schema.name}
        description={fm.schema.description}
        url={fm.canonical}
      />
      <FAQSchema faqs={fm.faqs} />
      <EinProcessingCalculatorClient faqs={fm.faqs} />
    </>
  );
}
