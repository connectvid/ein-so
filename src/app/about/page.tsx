import type { Metadata } from "next";
import { BreadcrumbSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";
import { MDXPage } from "@/lib/mdx";

const { frontmatter: fm, content } = getListPage("about/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <MDXPage frontmatter={fm} content={content} />
    </>
  );
}
