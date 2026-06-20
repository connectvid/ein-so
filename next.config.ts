import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Canonical host enforcement. The GSC property is a Domain property
      // (sc-domain:ein.so), so Google crawls both the apex (ein.so) and www
      // hosts. The whole site canonicalizes to www.ein.so (sitemap, schema,
      // canonical tags, hreflang, IndexNow), so the apex must redirect to www.
      // This makes the apex -> www redirect a permanent (308) part of the app
      // instead of relying solely on host config, letting Google consolidate
      // the apex "Page with redirect" duplicates onto the www canonical. The
      // host pattern matches the apex only (path-to-regexp anchors the value),
      // so www never matches itself — no redirect loop.
      {
        source: "/:path*",
        has: [{ type: "host", value: "ein.so" }],
        destination: "https://www.ein.so/:path*",
        permanent: true,
      },
      // Synonym slug consolidation. "non-US residents" and "non-residents" are
      // the same macro context (one keyword = one URL). The canonical hub lives
      // at /ein-for-non-residents/; the /ein-for-non-us-residents/ variant 301s
      // to it so the two never compete for the same query (no cannibalization).
      {
        source: "/ein-for-non-us-residents",
        destination: "/ein-for-non-residents/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
