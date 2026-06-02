import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PAGES } from "@/lib/page-data";

const CONTENT_PATH = path.join(process.cwd(), "src/content");

// Read the real dateModified from each page's content frontmatter so the
// sitemap lastmod matches the schema dateModified (single source of truth).
// Falls back to datePublished, then to the page-data date.
function contentDateModified(slug: string): string | null {
  const folder = slug === "/" ? "homepage" : slug.replace(/^\/|\/$/g, "");
  try {
    const file = path.join(CONTENT_PATH, folder, "_index.md");
    const { data } = matter(fs.readFileSync(file, "utf-8"));
    return data?.schema?.dateModified || data?.schema?.datePublished || null;
  } catch {
    return null;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ein.so";

  return PAGES.map((page) => ({
    url: `${baseUrl}${page.slug}`,
    lastModified: new Date(contentDateModified(page.slug) || page.dateModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
