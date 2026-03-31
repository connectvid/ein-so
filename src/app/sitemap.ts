import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ein.so";

  // Phase 1 pages only - expand as pages are built
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/apply/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about/", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/faq/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact/", priority: 0.4, changeFrequency: "monthly" as const },
    { url: "/what-is-ein/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/how-to-get-ein/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/ein-vs-itin/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ein-lookup/", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
