import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/mdx/FAQSection";

interface MDXPageProps {
  frontmatter: {
    heroLabel?: string;
    heroTitle?: string;
    heroAccent?: string;
    heroDescription?: string;
    faqs?: { q: string; a: string }[];
    ctaTitle?: string;
    ctaSubtitle?: string;
    [key: string]: unknown;
  };
  content: string;
}

export function MDXPage({ frontmatter: fm, content }: MDXPageProps) {
  return (
    <>
      {fm.heroLabel && fm.heroTitle && fm.heroAccent && fm.heroDescription && (
        <PageHero
          label={fm.heroLabel}
          title={fm.heroTitle}
          titleAccent={fm.heroAccent}
          description={fm.heroDescription}
        />
      )}

      <MDXRemote source={content} components={mdxComponents} />

      {fm.faqs && fm.faqs.length > 0 && <FAQSection faqs={fm.faqs} />}

      <CTASection title={fm.ctaTitle} subtitle={fm.ctaSubtitle} />
    </>
  );
}
