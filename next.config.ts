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
      // Cannibalization fix. /blog/ein-for-etsy-sellers/ was a thin auto-generated
      // stub competing for the same "EIN for Etsy sellers" keyword as the full
      // guide at /ein-for-etsy-sellers/. The stub self-canonicalized to itself,
      // splitting equity. It 301s to the canonical guide and the stub is removed
      // from page-data (sitemap + blog index) and deleted.
      {
        source: "/blog/ein-for-etsy-sellers",
        destination: "/ein-for-etsy-sellers/",
        permanent: true,
      },
      // Cannibalization cleanup (batch). These /blog/ entries were thin
      // auto-generated stubs (placeholder "590/mo." content) duplicating a
      // stronger top-level page on the same keyword. Each 301s to its canonical
      // page; the stub route, content, and page-data entry were deleted.
      { source: "/blog/ein-for-bangladesh-guide", destination: "/ein-for-bangladesh/", permanent: true },
      { source: "/blog/ein-for-brazil-guide", destination: "/ein-for-brazil/", permanent: true },
      { source: "/blog/ein-for-canada-guide", destination: "/ein-for-canada/", permanent: true },
      { source: "/blog/ein-for-china-guide", destination: "/ein-for-china/", permanent: true },
      { source: "/blog/ein-for-germany-guide", destination: "/ein-for-germany/", permanent: true },
      { source: "/blog/ein-for-india-guide", destination: "/ein-for-india/", permanent: true },
      { source: "/blog/ein-for-mexico-guide", destination: "/ein-for-mexico/", permanent: true },
      { source: "/blog/ein-for-nigeria-guide", destination: "/ein-for-nigeria/", permanent: true },
      { source: "/blog/ein-for-pakistan-guide", destination: "/ein-for-pakistan/", permanent: true },
      { source: "/blog/ein-for-philippines-guide", destination: "/ein-for-philippines/", permanent: true },
      { source: "/blog/ein-for-uk-citizens", destination: "/ein-for-uk/", permanent: true },
      { source: "/blog/ein-for-llc-complete-guide", destination: "/ein-for-llc/", permanent: true },
      { source: "/blog/ein-for-nonprofit-guide", destination: "/ein-for-nonprofit/", permanent: true },
      { source: "/blog/ein-for-partnership-guide", destination: "/ein-for-partnership/", permanent: true },
      { source: "/blog/ein-for-sole-proprietor-guide", destination: "/ein-for-sole-proprietor/", permanent: true },
      { source: "/blog/ein-for-freelancers-guide", destination: "/ein-for-freelancers/", permanent: true },
      { source: "/blog/ein-for-shopify-sellers", destination: "/ein-for-shopify-sellers/", permanent: true },
      { source: "/blog/ein-for-real-estate-investors", destination: "/ein-for-real-estate-investors/", permanent: true },
      { source: "/blog/ein-for-hiring-employees", destination: "/ein-for-hiring-employees/", permanent: true },
      { source: "/blog/ein-for-payoneer", destination: "/ein-for-payoneer/", permanent: true },
      { source: "/blog/ein-for-dropshipping-business", destination: "/ein-for-dropshipping/", permanent: true },
      { source: "/blog/ein-for-cryptocurrency-business", destination: "/ein-for-crypto/", permanent: true },
      { source: "/blog/ein-for-amazon-fba-sellers-guide", destination: "/ein-for-amazon-sellers/", permanent: true },
      { source: "/blog/ein-for-non-residents-guide", destination: "/ein-for-non-residents/", permanent: true },
      { source: "/blog/ein-for-bank-account-guide", destination: "/ein-for-bank-account/", permanent: true },
      { source: "/blog/ein-for-youtube-creators", destination: "/ein-for-youtube-creators/", permanent: true },
      { source: "/blog/ein-for-trust-irrevocable", destination: "/ein-for-trust/", permanent: true },
      { source: "/blog/ein-for-trust-estate-guide", destination: "/ein-for-trust/", permanent: true },
      { source: "/blog/ein-for-paypal-stripe-guide", destination: "/ein-for-stripe/", permanent: true },
      { source: "/blog/ein-vs-itin-which-do-you-need", destination: "/ein-vs-itin/", permanent: true },
      { source: "/blog/ein-vs-ssn-differences", destination: "/ein-vs-ssn/", permanent: true },
      { source: "/blog/ein-vs-tax-id-same-thing", destination: "/ein-vs-tax-id/", permanent: true },
      { source: "/blog/do-i-need-ein-or-itin", destination: "/ein-vs-itin/", permanent: true },
      { source: "/blog/what-is-ein-number-explained", destination: "/what-is-ein/", permanent: true },
      { source: "/blog/ein-number-format-explained", destination: "/ein-number-format/", permanent: true },
      { source: "/blog/ein-processing-time-how-long", destination: "/ein-processing-time/", permanent: true },
      { source: "/blog/how-long-to-get-ein-by-fax", destination: "/ein-by-fax/", permanent: true },
      { source: "/blog/ein-without-ssn-non-resident-guide", destination: "/ein-without-ssn/", permanent: true },
      { source: "/blog/how-to-get-ein-online-non-resident", destination: "/how-to-get-ein/", permanent: true },
      { source: "/blog/ein-so-review-best-ein-service", destination: "/best-ein-service/", permanent: true },
      { source: "/blog/ss4-form-how-to-fill-out", destination: "/ss4-form-guide/", permanent: true },
      { source: "/blog/ein-ss4-fax-number", destination: "/irs-fax-number-for-ein/", permanent: true },
      { source: "/blog/s-corp-election-guide-2026", destination: "/s-corp-election/", permanent: true },
      { source: "/blog/ein-rejection-how-to-fix", destination: "/ein-rejection-guide/", permanent: true },
      { source: "/blog/ein-number-lookup-guide", destination: "/ein-lookup/", permanent: true },
      { source: "/blog/how-to-verify-ein-number", destination: "/ein-verification/", permanent: true },
      { source: "/blog/lost-ein-how-to-find-it", destination: "/lost-ein-number/", permanent: true },
      { source: "/blog/business-credit-with-ein", destination: "/ein-for-credit/", permanent: true },
      { source: "/blog/boi-filing-what-is-it", destination: "/boi-filing/", permanent: true },
      { source: "/blog/boi-who-needs-to-file", destination: "/boi-filing-requirements/", permanent: true },
      { source: "/blog/boi-filing-deadline-penalties", destination: "/boi-filing-deadline/", permanent: true },
    ];
  },
};

export default nextConfig;
