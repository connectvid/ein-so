import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/page-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ein.so";

  return PAGES.map((page) => ({
    url: `${baseUrl}${page.slug}`,
    lastModified: new Date(page.dateModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
