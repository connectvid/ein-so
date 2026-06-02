---
skill: technical-seo
description: Load when building any page in Next.js, configuring robots.txt, sitemap, canonical tags, metadata, schema, images, Core Web Vitals, server rendering, SSL, redirects, 404 handling, or diagnosing crawling/indexing problems. The foundation that makes everything else possible.
version: 1.0.0
last-verified: 2026-04
source: seo-master/05-technical-seo-nextjs.md + skills/01-technical-seo.md + skills/10-core-web-vitals.md + skills/17-technical-nextjs.md + skills/07-images-media.md + skills/19-site-launch-sequence.md
load: always
triggers: robots, sitemap, canonical, crawl, index, noindex, GSC, server render, metadata, schema, OG image, Core Web Vitals, LCP, CLS, INP, page speed, image optimization, alt text, WebP, AVIF, next/image, sitemap.ts, robots.ts, trailing slash, redirect, 404, SSL, HTTPS, launch, deploy
---

# Technical SEO -- Next.js Implementation

## Core Principle

"Technical SEO is the most important part of SEO until it isn't. Pages need to be crawlable and indexable to even have a chance at ranking, but many other activities will have minimal impact compared to content and links." -- Patrick Stox, Ahrefs

Priority order: **Crawlable -> Indexable -> Content -> Links.**
If a page cannot be crawled and indexed, nothing else matters.

---

## The Most Expensive Technical Mistakes (Real Project Lessons)

[WYOMING LESSON 1] **Trailing slash inconsistency** -- required fixing 21 URL patterns across 200+ files. Set `trailingSlash: true` in next.config.mjs on Day 1, never change.

[WYOMING LESSON 2] **Client-side only links on homepage** -- Google crawler saw zero links to content pages. ALL navigation must be server-rendered. Test with curl.

[WYOMING LESSON 3] **Static sitemaps conflicting with dynamic** -- 521 phantom URLs blocking real pages. Use ONLY `app/sitemap.ts`. Delete all static XML files.

[WYOMING LESSON 4] **Generic schema across all pages** -- all had `headline: "Wyoming LLC Guide"`. Every page needs unique schema. Schema headline must match H1 exactly.

[WYOMING LESSON 5] **No custom 404 page** -- 8 broken pages with 26 links pointing to them. Always build `app/not-found.tsx` before launch.

[WYOMING LESSON 6] **480 pages published before establishing 3-5 indexed pages** -- 236 orphaned pages, months of rework. Follow the phased launch sequence.

---

## Server Components Rule (Critical)

**All content pages MUST be server components.** Never add `"use client"` to a page.tsx that exports metadata. Client components cannot export metadata -- the build will fail.

### Rules
- Page content = server component (default in App Router)
- Interactive elements (accordions, calculators, modals) = separate client components imported into the server page
- Never put critical SEO content inside client-only components
- Search engines and AI crawlers render server HTML; client-hydrated content may not be indexed

### JavaScript Critical Warning (Ahrefs Jan 2026)
"Most LLMs don't render JavaScript. If key content or navigation only appears after JavaScript loads, there's a risk some AI crawlers won't see it."

Rule: ALL navigation links, footer links, and key internal links MUST be present in server-rendered HTML.

```typescript
// page.tsx - Server Component (CORRECT)
import type { Metadata } from "next";
import InteractiveFAQ from "../components/InteractiveFAQ"; // client component

export const metadata: Metadata = { /* ... */ };

export default function GuidePage() {
  return (
    <main>
      <h1>Wyoming LLC Guide</h1>
      <p>Static content here - always rendered server-side</p>
      <InteractiveFAQ /> {/* Interactive parts imported */}
    </main>
  );
}
```

### Server Rendering Verification

After every deployment:
```bash
curl -s https://yourdomain.com/ | grep 'href="/'
```
Every important page must appear in this output. If not: critical bug -- fix before anything else.

---

## Metadata Patterns

Every page.tsx must export a `metadata` object with these exact constraints:

```typescript
export const metadata: Metadata = {
  title: "Primary Keyword - Secondary Info (Year) | Brand",  // 50-60 chars
  description: "Direct answer with numbers. Include CTA. 150-160 chars max.",

  alternates: {
    canonical: "https://yoursite.com/page-slug/",  // trailing slash, absolute URL, ALWAYS
    languages: {
      'en': 'https://yoursite.com/page-slug/',
      'es': 'https://yoursite.com/es/page-slug/',  // if multilingual
    }
  },

  openGraph: {
    title: "Same or slightly different from title",
    description: "Same description works",
    url: "https://yoursite.com/page-slug/",
    siteName: "YourSite.com",
    type: "article",
    images: [
      {
        url: "https://yoursite.com/og/page-slug",  // LOCAL URL -- never external
        width: 1200,
        height: 630,
        alt: "Descriptive alt text with keyword",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Same title",
    description: "Same description",
    images: ["https://yoursite.com/og/page-slug"],  // LOCAL URL
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },

  verification: {
    google: 'ACTUAL_CODE_HERE',  // NEVER leave placeholder text
  },
};
```

### Metadata Rules
- **Title:** 50-60 characters. Primary keyword first. Include year if relevant. Brand at end after pipe.
- **Description:** 150-160 characters. Direct answer format. Include a number. End with CTA.
- **Canonical:** Always absolute URL with trailing slash. Every page needs one. Self-referencing.
- **OG/Twitter images:** Always LOCAL URLs (your domain). Never external image services. 1200x630px.
- **Verification:** Use real GSC verification code. Never leave placeholder text `your-google-verification-code`.
- **Every page unique:** Never copy metadata between pages. Title, description, and OG must be unique per page.

---

## OG / Twitter Image Rules

### Requirements
- Dimensions: 1200x630px for all social platforms
- Format: PNG (generated) or optimized JPEG
- URL: Always local (your domain) -- never external CDN or image service
- Brand colors and logo included
- Page title readable at small sizes (when thumbnail-sized in social feeds)
- Test with social media debuggers (Facebook Sharing Debugger, Twitter Card Validator)

### Dynamic OG Image Generation (Next.js)

```typescript
// app/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Page Title -- Brand'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: '#0F172A',
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: 'sans-serif', padding: '80px',
      }}>
        <div style={{ fontSize: 24, color: '#60A5FA', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Brand Name
        </div>
        <div style={{ fontSize: 80, fontWeight: 800, color: 'white', textAlign: 'center', lineHeight: 1.1 }}>
          Page Title Here
        </div>
      </div>
    ),
    { ...size }
  )
}
```

Alternative: Route handler approach at `app/og/[slug]/route.tsx` using `ImageResponse`.

Create one OG image per page. Next.js auto-uses `opengraph-image.tsx` files.

---

## Core Web Vitals Targets

Three metrics Google uses to measure user experience. Used as ranking signals since 2021. In 2025, Google increased the weight of these signals.

| Metric | What It Measures | Good | Needs Work | Poor |
|--------|-----------------|------|------------|------|
| LCP | Largest visible element loads | <=2.5s | 2.5-4s | >4s |
| INP | Response to user interactions | <=200ms | 200-500ms | >500ms |
| CLS | Layout stability during load | <=0.1 | 0.1-0.25 | >0.25 |

**INP replaced FID on March 12, 2024.** Any reference to FID is outdated.

Global pass rates as of early 2026: 68% pass LCP, 87% pass INP, 81% pass CLS. Only 56% pass all three.

### LCP -- Largest Contentful Paint (Target: < 2.5s)

The LCP element is usually the hero image or H1 tag.

Fixes:
- Use `priority={true}` on any above-fold `<Image>` component (tells Next.js to preload)
- Use `export const dynamic = 'force-static'` on tool pages -- static = fast TTFB = fast LCP
- Use `next/font` for zero-layout-shift font loading
- No render-blocking resources
- Never fetch external data server-side on tool pages -- pre-render everything

### CLS -- Cumulative Layout Shift (Target: < 0.1)

The #1 cause: images without explicit dimensions.

Fixes:
- **Always** set explicit `width` and `height` on every `<Image>` component
- Reserve space for dynamic content (ads, embeds, iframes)
- Use `next/font` to prevent font swap shifts
- Use `font-display: swap` in CSS for any custom fonts
- Never inject content with JavaScript after page load without reserving space

### INP -- Interaction to Next Paint (Target: < 200ms)

Measures ALL user interactions throughout the page lifetime, not just the first one.

Fixes:
- Minimize client-side JavaScript
- Use server components for all content
- Lazy-load non-critical interactive components
- For tool widgets: calculate results client-side using plain JS, no API calls for simple math
- Use `debounce` on input handlers (wait 150ms after user stops typing)
- Keep tool widget JS bundle small -- code-split from the rest of the page

### CWV and AI Visibility (2026)

97% of sources cited in AI Overviews come from the top 20 organic results. The pipeline: Good CWV -> better Google ranking -> higher AI citation probability.

---

## Image Optimization

### Always Use Next.js Image Component

Never use plain `<img>` tags. The `<Image>` component provides:
- Automatic WebP/AVIF conversion
- Layout shift prevention (when width/height set)
- Lazy loading by default
- Responsive sizing

```typescript
import Image from "next/image";

// Standard image (lazy-loaded by default)
<Image
  src="/images/hero.webp"
  alt="Wyoming LLC formation cost breakdown table showing $297 total first year"
  width={800}
  height={450}
/>

// Above-fold image (preloaded for faster LCP)
<Image
  src="/images/hero.webp"
  alt="Descriptive alt text with keyword"
  width={800}
  height={450}
  priority={true}  // ONLY on first visible image
/>
```

### Image Storage Rules
- All images stored locally in `/public/images/` -- never hotlink external URLs
- Use WebP format for source images (or PNG/JPEG and let Next.js convert)
- Enable AVIF/WebP in next.config.js:

```javascript
// next.config.js
module.exports = {
  images: { formats: ['image/avif', 'image/webp'] }
}
```

### File Naming
- Use descriptive names: `markup-calculator-example.png` not `IMG00023.jpg`
- Format: `{subject}-{description}.{ext}`
- Google uses filenames as clues about image content

### Alt Text Rules (from Ahrefs + Google)

"Google uses alt text along with computer vision algorithms and the contents of the page to understand the subject matter of the image." -- Google

**Formula:** Finish the sentence "This is a screenshot/photo of ___" and use the blank as alt text.

```
BAD:  alt="image1"
BAD:  alt=""  (on meaningful images)
BAD:  alt="markup calculator free markup tool percentage calculator"  (keyword stuffing)
GOOD: alt="Wyoming LLC formation cost breakdown table showing $297 total first year"
GOOD: alt="Markup calculator showing 50% markup on a $10 cost price resulting in $15 selling price"
```

Rules:
- Include primary keyword naturally -- not keyword stuffed
- Maximum 125 characters
- Do NOT use "image of" or "photo of" as prefixes
- Use empty `alt=""` ONLY for purely decorative images
- Every tool page must have at least one image

### Image Sizing
- Content width is typically 680-720px; no need for images wider than 800px display
- Store at 1600px for retina, display at 800px
- Crop screenshots to just the relevant content (no browser chrome)

---

## Internal Link Component Rules

```typescript
// Use Next.js Link for ALL internal links
import Link from "next/link";

// CORRECT:
<Link href="/wyoming-llc-cost/">Wyoming LLC cost breakdown</Link>

// WRONG:
<a href="/wyoming-llc-cost/">  // Loses client-side navigation
<Link href="wyoming-llc-cost">  // Missing leading slash
<Link href="/wyoming-llc-cost">  // Missing trailing slash (if canonicals use trailing slash)
```

### Link Rules
- Use `Link` component for all internal navigation
- Match trailing slash pattern with canonicals -- always
- Always use descriptive anchor text (never "click here" or "read more")
- Place links in content body, not just nav menus
- Every spoke page links UP to parent hub, SIDEWAYS to 2-3 siblings, DOWN to service/apply page

---

## Sitemap Rules

Next.js App Router generates sitemaps via `app/sitemap.ts`:

```typescript
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yoursite.com";
  const appDir = path.join(process.cwd(), "app");

  const pages = [
    { slug: "", priority: 1.0, changeFrequency: "weekly" as const },
    { slug: "pricing", priority: 0.9, changeFrequency: "monthly" as const },
    // ... all pages
  ];

  return pages.map((page) => {
    // Use REAL file modification times, never new Date()
    const pagePath = path.join(appDir, page.slug || "", "page.tsx");
    const stat = fs.existsSync(pagePath) ? fs.statSync(pagePath) : null;

    return {
      url: `${baseUrl}/${page.slug}${page.slug ? "/" : ""}`,
      lastModified: stat ? stat.mtime : new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
  });
}
```

### Sitemap Rules
- Every public page must be in the sitemap
- Include ONLY indexable pages (exclude /api/, /admin/, /thank-you/, etc.)
- **Priority scale:** Homepage 1.0, Pillar pages 0.9, Cluster pages 0.8, Support pages 0.7
- **`lastModified`** must reflect actual content update date -- never use `new Date()` which changes every build
- **Trailing slashes must match canonical URLs** -- if canonicals use trailing slash, sitemap URLs must too
- **Maximum 50,000 URLs** per sitemap (split into multiple sitemaps if needed)
- **ONE sitemap source only** -- use `app/sitemap.ts`, delete any static XML files in `/public/`
- Submit to GSC on Day 1
- Verify: `curl -s https://yourdomain.com/sitemap.xml | grep -c "<loc>"`

---

## robots.txt Rules

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/components/", "/lib/", "/lp-google/"],
      },
    ],
    sitemap: "https://yoursite.com/sitemap.xml",
  };
}
```

### robots.txt Rules
- Every site needs a robots.txt at `/robots.txt`
- Must include `Sitemap:` directive pointing to sitemap.xml
- Default: `User-agent: * Allow: /`
- Disallow: `/api/`, `/_next/`, `/admin/`, `/components/`, `/lib/`
- Do NOT block Googlebot or any search engine crawler
- Use `app/robots.ts` (dynamic), never a static `robots.txt` file in `/public/`

---

## AI Crawler Management

**NEVER block AI crawlers.** Allow all of them in robots.txt.

Ahrefs (Jan 2026): "If you block search engines and LLMs from using your website, you limit your chances of becoming visible in their responses."

### OpenAI Has 4 Separate Bots (Most SEOs Don't Know This)

Source: `platform.openai.com/docs/bots` (official OpenAI documentation)

| Bot | User Agent | Purpose | What Blocking Does |
|-----|-----------|---------|-------------------|
| **OAI-SearchBot** | `OAI-SearchBot` | Crawls for ChatGPT Search results | **Blocks ChatGPT search citations** |
| **GPTBot** | `GPTBot` | Collects AI model training data | Blocks training only. **Does NOT block ChatGPT Search** |
| **ChatGPT-User** | `ChatGPT-User` | User-initiated URL visits | robots.txt may not apply |
| **OAI-AdsBot** | `OAI-AdsBot` | ChatGPT ad validation | Not used for training or search |

**CRITICAL:** Blocking `GPTBot` does NOT opt you out of ChatGPT. Your content still appears in ChatGPT Search unless you also block `OAI-SearchBot`. For our sites, allow BOTH.

### All AI Bots to Allow in robots.txt

```
# OpenAI (ChatGPT)
User-agent: OAI-SearchBot
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /

# Anthropic (Claude)
User-agent: ClaudeBot
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

# Apple Intelligence
User-agent: Applebot-Extended
Allow: /

# Meta AI
User-agent: Meta-ExternalAgent
Allow: /
```

### What This Means
- `OAI-SearchBot` is the most important bot for ChatGPT visibility -- make sure it's allowed
- Keep navigation and key content in server-rendered HTML (AI crawlers cannot render JS)
- AI crawlers follow sitemaps directly -- a clean dynamic sitemap is a discovery aid
- Fast, well-structured, crawlable pages = visible in both Google and AI

### llms.txt

Ahrefs assessment: "not especially effective and likely not worth the effort" for Google. However, WyomingLLC.co (53% AI traffic) has llms.txt in place and saw it referenced in AI crawler logs. Optional but recommended for sites prioritizing AI traffic. Place in `/public/llms.txt`.

---

## Trailing Slash Convention

**Decide on Day 1. Enforce everywhere. Never change after launch.**

[WYOMING LESSON] Inconsistency required fixing 21 URL patterns across 200+ files.

```javascript
// next.config.mjs -- Set on Day 1
const nextConfig = {
  trailingSlash: true,  // or false -- PICK ONE AND LOCK IT
};
```

### Where Trailing Slash Must Be Consistent
- `next.config.mjs` `trailingSlash` setting
- All canonical URLs in metadata
- All sitemap URLs
- All internal `<Link href>` values
- All schema markup URLs
- All OG/Twitter URLs
- All redirect destinations

---

## Next.js App Router Specifics

### Day 1 Configuration -- next.config.mjs

Set ALL of this before writing any content:

```javascript
const nextConfig = {
  trailingSlash: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    remotePatterns: [],
  },

  compress: true,

  async redirects() {
    return [
      // Set up ALL synonym redirects on Day 1
      { source: '/get-itin', destination: '/apply/', permanent: true },
      { source: '/obtain-itin', destination: '/apply/', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/(.*)\\.(js|css|png|jpg|gif|svg|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### generateMetadata for Dynamic Routes

```typescript
// app/[slug]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pageData = getPageData(params.slug);

  return {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://yoursite.com/${params.slug}/` },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `https://yoursite.com/${params.slug}/`,
      images: [{ url: `/og-${params.slug}.png`, width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'amazon-sellers' },
    { slug: 'freelancers' },
    { slug: 'real-estate-investors' },
  ];
}
```

### Required Components -- Build Before Any Content Page

[WYOMING LESSON] Content was built first, components later. This is backwards.

Build these FIRST:
1. **Navbar** -- server-rendered `<Link>` components to all hub pages
2. **Footer** -- server-rendered links to hubs + legal + contact
3. **StickyCTA** -- floating button with WhatsApp + primary CTA
4. **FloatingWhatsApp** -- always-visible bottom-right button
5. **FAQSection** -- renders FAQ visually + generates FAQPage JSON-LD automatically
6. **Breadcrumbs** -- renders visual + generates BreadcrumbList JSON-LD automatically
7. **PricingTable** -- transparent breakdown component
8. **TrustBar** -- client count, rating, guarantee
9. **LastUpdated** -- shows content freshness date
10. **TableOfContents** -- auto-generated from H2s

---

## Schema Markup (Triple Stack)

Every content page needs 3 JSON-LD schemas minimum:

```typescript
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Page Title Here",  // MUST match H1 exactly
  description: "Meta description here",
  datePublished: "2026-01-15",
  dateModified: "2026-04-20",  // UPDATE when content changes
  author: {
    "@type": "Person",
    name: "Author Name",
    url: "https://yoursite.com/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "YourSite.com",
    url: "https://yoursite.com/",
    logo: { "@type": "ImageObject", url: "https://yoursite.com/images/logo.png" },
  },
  mainEntityOfPage: "https://yoursite.com/page-slug/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Question text matching an H2 or H3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "40-80 word answer with specific numbers. No hedging.",
      },
    },
    // 8-10 Q&A pairs per page
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yoursite.com/" },
    { "@type": "ListItem", position: 2, name: "Category", item: "https://yoursite.com/category/" },
    { "@type": "ListItem", position: 3, name: "Page Title" },
  ],
};

// In JSX:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
```

### Additional Schema Types by Page

| Page Type | Additional Schema |
|-----------|------------------|
| Step guides | HowTo schema |
| Pricing pages | Product + Offer schema |
| Review pages | Review + AggregateRating schema |
| Tool/calculator pages | SoftwareApplication schema |
| Comparison pages | ItemList schema |

---

## SSL, Redirects, 404 Handling

### SSL / HTTPS
- Every site must use HTTPS
- Vercel handles SSL automatically -- nothing to configure
- HSTS header should be set in next.config.mjs headers (see config section above)

### Redirects
- 301 redirect every deleted or moved page to the correct current URL
- Never delete a page without adding a redirect
- Never change a URL without adding a redirect from the old URL
- Check for 404 pages regularly -- each one is a lost link and lost ranking signal
- Ahrefs: "Reclaiming lost links via redirects is the fastest link building you will ever do."

```javascript
// next.config.mjs
async redirects() {
  return [
    { source: '/old-page/', destination: '/new-page/', permanent: true },
    { source: '/get-itin', destination: '/apply/', permanent: true },
  ];
}
```

### 404 Handling
- Always build `app/not-found.tsx` BEFORE launch
- Custom 404 page must include: popular page links, search functionality, CTA
- Audit broken links regularly: check all `href=` values against existing pages
- [WYOMING LESSON] 8 broken pages with 26 links pointing to them -- every one lost ranking signal

---

## Performance Optimization

### Fonts -- next/font
```typescript
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });
```
- Use `next/font` for ALL web fonts -- zero layout shift
- Always set `display: "swap"` to prevent invisible text during load
- Load only needed subsets

### Lazy Loading
```typescript
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./HeavyComponent"), { ssr: true });
```
- Lazy-load non-critical interactive components
- Keep `ssr: true` for SEO-critical content
- Use `ssr: false` only for purely client-side widgets (calculators, etc.)

### Above-Fold Priority
- Set `priority={true}` on the FIRST image visible on page load only
- All other images use default lazy loading
- H1 should often be the LCP element on tool pages (no large hero image needed)

### Static Generation
```typescript
// For tool pages -- maximum performance
export const dynamic = 'force-static';
```

### Caching
- Static assets (JS, CSS, images, fonts): `Cache-Control: public, max-age=31536000, immutable`
- Configure in next.config.mjs headers (see config section)

---

## URL Structure

Ahrefs recommends: short, descriptive, keyword-matching URLs.

### Rules
- Use target keyword as URL slug
- Lowercase only, hyphens between words
- No dates in URLs (`/2024/markup-calculator/` -> `/markup-calculator/`)
- No IDs or random strings
- No word repetition (`/tools/markup-calculator-tool/` -> `/markup-calculator/`)
- Consistent trailing slash
- Ahrefs (2026): "There are theories that keeping URLs short and clean can positively impact visibility in AI too"

---

## Crawling and Indexing

### Crawl Budget
- More popular and frequently updated pages get crawled more often
- Thin, duplicate, or unlinked pages waste crawl budget
- Never publish 50+ pages before establishing 3-5 quality indexed pages
- If "Crawled not indexed" grows faster than "Indexed" in GSC -- STOP and diagnose

### Robots Meta Tag
Default for all public pages:
```typescript
robots: {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
}
```
Only noindex: admin pages, thank-you pages, exact duplicates, landing pages (e.g., `/lp-google/`).

### Search Console Setup (Day 1 -- Both Google AND Bing)

**Google Search Console:**
- Set up on Day 1
- Use HTML tag method: `metadata.verification.google = 'ACTUAL_CODE'`
- Submit sitemap immediately after verification

**Bing Webmaster Tools (Important for AI Traffic):**
- Set up on Day 1
- Submit sitemap to Bing immediately
- Set up IndexNow API key for faster Bing indexing
- Bing is a confirmed search provider for ChatGPT, Copilot, Meta AI, and Perplexity
- [WYOMING LESSON] WyomingLLC.co: Google indexed 30/480 pages, Bing showed 370 impressions, ChatGPT delivered 400+ visitors. Multiple discovery paths contributed (OAI-SearchBot direct crawl + Bing + possibly Google).
- Monitor Bing indexing weekly alongside Google
- **Note:** IndexNow submits to Bing, NOT directly to OpenAI/ChatGPT. But Bing indexing is one pathway into ChatGPT citations.

**AI Crawler Access (Equally Important):**
- Ensure robots.txt allows `OAI-SearchBot` (ChatGPT search -- this is the DIRECT path)
- Also allow `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Meta-ExternalAgent`
- Blocking GPTBot does NOT block ChatGPT Search -- you must also block OAI-SearchBot
- AI crawlers follow sitemaps independently of Google/Bing indexing

---

## Site Launch Sequence

### The Anti-Pattern (wyomingllc.co)
Wrong: Register domain -> build 480 pages -> publish everything -> wonder why nothing is indexed -> discover 236 orphaned pages -> spend months on rework.

### The Correct Sequence
**Phase 0 -> Phase 1 -> INDEX GATE -> Phase 2 -> INDEX GATE -> Phase 3+**

Never skip the index gates.

### Phase 0: Infrastructure (Day 0 -- Before Any Content)

- [ ] Domain purchased and pointed to Vercel
- [ ] SSL certificate active (Vercel auto-configures)
- [ ] `trailingSlash: true` in next.config.mjs -- LOCKED
- [ ] All synonym redirects defined
- [ ] Security headers configured
- [ ] Image optimization configured (AVIF/WebP)
- [ ] `app/sitemap.ts` dynamic (real mtime, NOT `new Date()`)
- [ ] `app/robots.ts` (blocks /api/, /_next/, /admin/, /components/, /lib/)
- [ ] No static XML sitemaps in /public/
- [ ] `app/not-found.tsx` custom 404 page with popular links
- [ ] GSC verification code in layout.tsx metadata (real code)
- [ ] GA4 + Plausible + Microsoft Clarity scripts in layout.tsx
- [ ] All 10 required components built (Navbar, Footer, StickyCTA, FloatingWhatsApp, FAQSection, Breadcrumbs, PricingTable, TrustBar, LastUpdated, TableOfContents)
- [ ] Server rendering verified: `curl -s https://domain.com/ | grep 'href="/'`

### Phase 1: Foundation (Days 1-3 -- 3 Quality Pages)

Build exactly 3 high-quality pages:
1. Homepage -- clear value proposition, links to all hub pages, above-fold CTA
2. First pillar page -- fully complete (2,500+ words, schema, FAQ, OG image, 3+ internal links)
3. About/Contact page -- real entity information, credentials, contact methods

Day 1 verification:
- [ ] HTTPS working and redirecting correctly
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] GSC sitemap submitted
- [ ] Bing Webmaster Tools sitemap submitted
- [ ] All 3 pages submitted via GSC URL Inspection
- [ ] Schema validated with Google Rich Results Test
- [ ] Lighthouse score 90+ on homepage
- [ ] Social profiles created with site links (Twitter/X, LinkedIn)

### INDEX GATE 1 -- Wait for Phase 1 Indexing

DO NOT build Phase 2 until Phase 1 pages show "URL is on Google" in GSC. Typically 3-10 days.

If not indexed after 14 days:
1. Verify links are server-rendered (curl test)
2. Check robots.txt for accidental blocks
3. Check for accidental noindex tags
4. Check GSC for crawl errors
5. Build 2-3 foundational backlinks

### Phase 2: Hub Pages (Weeks 3-5)

Build all pillar pages. Publish in batches of 3-5, not all at once.
Submit each new URL via GSC URL Inspection.
Monitor: if "Crawled not indexed" grows faster than "Indexed" -- STOP.

### INDEX GATE 2 -- Wait for Hub Indexing

DO NOT build spoke pages until hub pages are indexed.

### Phase 3+: Spoke Pages, Tools, Multilingual, Blog

Build in order of commercial priority (highest CPC keywords first).
Scale only after core pages are indexed and showing traffic signals.

---

## Technical Checklist (20+ items)

### Page-Level Technical Requirements
- [ ] Page is a server component (no `"use client"` on page.tsx)
- [ ] Metadata exported: title (50-60 chars), description (150-160 chars), canonical (absolute URL, trailing slash)
- [ ] OG + Twitter card images set to LOCAL URLs (1200x630px)
- [ ] Article + FAQ + Breadcrumb JSON-LD schema on every content page
- [ ] Schema `headline` matches page H1 exactly
- [ ] `dateModified` in schema matches actual update date
- [ ] All images use `next/image` with explicit `width` and `height`
- [ ] All images have descriptive alt text (keyword included naturally, max 125 chars)
- [ ] Above-fold image has `priority={true}`, all others lazy-load
- [ ] All images stored locally in `/public/images/`, WebP format
- [ ] Internal links use Next.js `<Link>` component with trailing slash
- [ ] At least 3 internal links per page (to hubs, siblings, service page)
- [ ] No `"use client"` + metadata export conflicts

### Site-Level Technical Requirements
- [ ] `trailingSlash` set in next.config.mjs -- consistent everywhere
- [ ] Sitemap includes all public pages with correct priorities and real lastModified dates
- [ ] robots.txt allows crawling, blocks /api/, /_next/, /admin/
- [ ] AI crawlers NOT blocked (OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot, Meta-ExternalAgent allowed)
- [ ] Custom 404 page exists (`app/not-found.tsx`)
- [ ] All synonym redirects configured (301 permanent)
- [ ] No broken internal links (audit regularly)
- [ ] `next/font` used for all web fonts
- [ ] Security headers configured (HSTS, X-Content-Type-Options, X-Frame-Options)
- [ ] Static assets have immutable cache headers
- [ ] GSC property set up with real verification code
- [ ] Build passes with zero errors
- [ ] Lighthouse score 90+ on homepage and key pages
- [ ] `curl -s https://domain.com/ | grep 'href="/'` returns all hub page links

---

## How to Check Core Web Vitals

1. **PageSpeed Insights** (free) -- pagespeed.web.dev -- individual page checks
   - Lab data (Lighthouse): immediate feedback for testing fixes
   - Field data (real Chrome users): what Google actually uses for ranking -- 28-day rolling average

2. **Google Search Console** -- Core Web Vitals report
   - Groups pages by issue type -- fix the template to fix all pages in the group

3. **Ahrefs Webmaster Tools** (free) -- shows CWV data at scale across all pages

Target scores: Mobile 70+, Desktop 85+ before launch. Aim for 90+ after optimization.

---

## Annual Technical Maintenance Calendar

### Monthly
- [ ] Audit all pricing mentions for consistency (zero discrepancies)
- [ ] Check GSC for new crawl errors and 404s
- [ ] Review "Crawled not indexed" vs "Indexed" ratio
- [ ] Verify sitemap is complete and accurate
- [ ] Run Lighthouse on 3 key pages

### Quarterly
- [ ] Full broken link audit across the site
- [ ] Update `dateModified` on all schemas for pages that changed
- [ ] Review and update redirect rules
- [ ] Test all forms and conversion paths on real mobile device
- [ ] Rotate announcement bar with fresh messaging
- [ ] Check security headers are still correct

### Bi-Annually
- [ ] Full Core Web Vitals audit on all page templates
- [ ] Review Next.js version -- upgrade if stable release available
- [ ] Audit image sizes and formats (are new pages following the rules?)
- [ ] Review robots.txt and sitemap for accuracy
- [ ] Test server rendering with curl on all hub pages

### Annually
- [ ] Full technical SEO audit (crawlability, indexing, schema, speed)
- [ ] Review URL structure for any needed consolidation
- [ ] Update year references in titles and content
- [ ] Review and clean up unused redirects
- [ ] Benchmark CWV against competitors
- [ ] Review AI crawler landscape (new bots to allow?)

---

## Weekly Monitoring (Every Monday)

Track these 5 numbers per site:
1. Ahrefs DR (Domain Rating)
2. Ahrefs organic traffic estimate
3. GSC impressions (last 28 days)
4. GSC clicks (last 28 days)
5. Pages published count vs. pages indexed count

**Red flag:** "Crawled not indexed" count growing faster than "Indexed"
Action: STOP all publishing on that site until diagnosed.
