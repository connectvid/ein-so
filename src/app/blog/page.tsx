import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "../schema";
import { getListPage } from "@/lib/contentParser";
import { mdxComponents } from "@/components/mdx";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/mdx/FAQSection";
import BlogIndex from "@/components/BlogIndex";

const { frontmatter: fm, content } = getListPage("blog/_index.md");

export const metadata: Metadata = {
  title: fm.title,
  description: fm.description,
  alternates: { canonical: fm.canonical },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={fm.breadcrumbs} />
      <ArticleSchema headline={fm.schema.headline} description={fm.schema.description} url={fm.canonical} datePublished={fm.schema.datePublished} dateModified={fm.schema.dateModified} />
      <FAQSchema faqs={fm.faqs} />

      {fm.heroLabel && fm.heroTitle && fm.heroAccent && fm.heroDescription && (
        <PageHero label={fm.heroLabel} title={fm.heroTitle} titleAccent={fm.heroAccent} description={fm.heroDescription} />
      )}

      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />

      <BlogIndex />

      {fm.faqs && fm.faqs.length > 0 && <FAQSection faqs={fm.faqs} />}

      <CTASection title={fm.ctaTitle} subtitle={fm.ctaSubtitle} />
    </>
  );
}
