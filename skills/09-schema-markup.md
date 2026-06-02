---
skill: schema-markup
description: Apply when implementing any structured data, JSON-LD, schema types, rich results, or optimizing for AI citation. This is the single source of truth for all schema markup across all sites. Covers the Triple Schema Stack, every schema type, validation, and Next.js implementation.
version: 1.0.0
last-verified: 2026-04
source: skills/06-schema-markup.md + seo-master/05-technical-seo-nextjs.md + seo-master/02-llm-optimization.md
load: always
triggers: schema, JSON-LD, structured data, rich results, FAQPage, BreadcrumbList, Article, HowTo, Product, Organization, Person, author schema, schema validation, rich snippets, AI citation, triple schema stack
---

# Schema Markup — The Definitive Guide

> **Core Rule:** Every content page gets the Triple Schema Stack: Article + FAQPage + BreadcrumbList. No exceptions. Schema must match visible content exactly. Always use JSON-LD format.

---

## Why Schema Matters

Schema markup serves two audiences in 2026:

1. **Google:** Schema enables rich results (rich snippets) in SERPs. Google can show FAQ dropdowns, how-to steps, breadcrumb trails, pricing, and review stars directly in search results.

2. **AI Systems (ChatGPT, Claude, Perplexity, Gemini):** AI systems ingest JSON-LD directly without parsing HTML. Your schema is a pre-packaged knowledge base that AI systems can extract and cite. FAQPage schema delivers a **3.2x AI citation uplift** (per Ahrefs 2026 data) because it gives AI systems clean Q&A pairs to extract.

John Mueller, Google: "We currently prefer JSON-LD markup. Most new structured data comes out for JSON-LD first. So that's what we prefer."

### FAQPage Rich Results Update (August 2023)

Google reduced visibility for HowTo and FAQ rich results in SERPs on August 8, 2023. FAQ rich results now only display for well-known, authoritative government and health sites. However, FAQPage schema still:
- Helps Google understand page structure
- Helps LLMs parse and cite your content (3.2x uplift)
- Provides structured Q&A data for AI extraction

**Still include FAQPage schema on every content page.** The AI citation benefit alone justifies it.

---

## The Triple Schema Stack

Every content page needs these 3 JSON-LD schemas minimum. This is non-negotiable.

| Schema Type | Purpose | AI Benefit |
|-------------|---------|------------|
| Article | Identifies the page as content with author, dates, publisher | Establishes authority, E-E-A-T signals |
| FAQPage | Provides 8-10 extractable Q&A pairs | 3.2x AI citation uplift (Ahrefs 2026) |
| BreadcrumbList | Shows navigation hierarchy | Helps AI understand site structure and page relationships |

### Implementation Pattern (Next.js)

Each schema is a separate `<script type="application/ld+json">` tag. Do NOT combine them into one script tag.

```tsx
// In your page.tsx (Server Component)
export default function GuidePage() {
  return (
    <main>
      {/* Page content */}
      <h1>Wyoming LLC for Non-Residents (2026 Guide)</h1>
      {/* ... */}

      {/* Triple Schema Stack — each in its own script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
```

**Placement Rule:** Place schema in the page component (`page.tsx`), NOT in `layout.tsx`. This allows different schema per page. Google confirmed: schema can go in either `<head>` or `<body>`.

---

## Schema Type 1: Article

Use on every content page (guides, blog posts, pillar pages, cluster pages, comparison pages).

### Complete Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wyoming LLC for Non-Residents (2026 Guide)",
  "description": "Form a Wyoming LLC as a non-resident in 3-5 days. $297 total cost includes filing, registered agent, and EIN. Step-by-step guide.",
  "datePublished": "2025-06-15T00:00:00Z",
  "dateModified": "2026-04-20T00:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://yoursite.com/about/",
    "jobTitle": "LLC Formation Specialist",
    "sameAs": [
      "https://linkedin.com/in/authorname",
      "https://twitter.com/authorname"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "YourSite.com",
    "url": "https://yoursite.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/images/logo.png",
      "width": 600,
      "height": 60
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yoursite.com/wyoming-llc-non-residents/"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://yoursite.com/images/wyoming-llc-guide.webp",
    "width": 1200,
    "height": 630
  },
  "wordCount": 3500,
  "inLanguage": "en"
}
```

### Article Schema Required Fields

| Field | Rule | Example |
|-------|------|---------|
| `headline` | Must match the H1 tag EXACTLY | `"Wyoming LLC for Non-Residents (2026 Guide)"` |
| `description` | Must match meta description EXACTLY | Same text as `<meta name="description">` |
| `datePublished` | ISO 8601 format, the date the page first went live | `"2025-06-15T00:00:00Z"` |
| `dateModified` | ISO 8601 format, the REAL date content was last updated | `"2026-04-20T00:00:00Z"` |
| `author` | Person or Organization with name and URL | See author schema section below |
| `publisher` | Organization with name, URL, and logo | Your site's organization |
| `mainEntityOfPage` | Canonical URL of the page | `"https://yoursite.com/page-slug/"` |

### dateModified Rules (Critical)

- `dateModified` must reflect the actual date you updated the content — NOT the build date
- If you rebuild the site without changing content, do NOT update `dateModified`
- Update `dateModified` only when you make substantive content changes (new information, updated numbers, revised sections)
- Google uses `dateModified` to determine freshness; false updates erode trust
- Format: ISO 8601 with timezone: `"2026-04-20T00:00:00Z"`
- Never set `dateModified` to a future date

### BlogPosting vs Article

Use `BlogPosting` (a subtype of `Article`) for blog posts. Use `Article` for guides, pillar pages, and evergreen content. The fields are identical.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Blog Post Title",
  ...
}
```

---

## Schema Type 2: FAQPage

Use on EVERY content page — not just pages with "FAQ" in the title. The FAQ section on every page must have matching schema.

### Complete FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a Wyoming LLC cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Wyoming LLC costs $100 for the state filing fee plus $60 per year for the annual report. Total first-year cost with a formation service ranges from $185 (DIY) to $297 (done-for-you). Year 2 and beyond costs $110 per year for the annual report and registered agent."
      }
    },
    {
      "@type": "Question",
      "name": "Can non-residents form a Wyoming LLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Non-residents from over 150 countries can form a Wyoming LLC without a US visa, SSN, or ITIN. You need a valid passport and a Wyoming registered agent with a physical address in the state. The entire formation process takes 3-5 business days."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an SSN to form a Wyoming LLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Non-residents do not need a Social Security Number to form a Wyoming LLC. You can obtain an EIN (Employer Identification Number) from the IRS using Form SS-4 without an SSN. The EIN serves as your LLC's tax identification number for banking and tax filing."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to form a Wyoming LLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wyoming LLC formation takes 3-5 business days for standard processing. Expedited filing (1 business day) costs an additional $100. After formation, obtaining an EIN takes 1-2 weeks for non-residents who apply by fax using Form SS-4."
      }
    },
    {
      "@type": "Question",
      "name": "What is the annual cost of maintaining a Wyoming LLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The annual cost to maintain a Wyoming LLC is $60 for the annual report filed with the Secretary of State, plus $50-100 for a registered agent. Total annual maintenance runs $110-160 per year. There is no state income tax, franchise tax, or inventory tax in Wyoming."
      }
    },
    {
      "@type": "Question",
      "name": "Does a Wyoming LLC pay state income tax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Wyoming has zero state income tax for individuals and businesses. Wyoming LLCs do not pay state income tax, franchise tax, or inventory tax. Federal tax obligations depend on ownership structure and the member's country of residence."
      }
    },
    {
      "@type": "Question",
      "name": "What forms does a foreign-owned Wyoming LLC need to file?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Foreign-owned single-member LLCs must file IRS Form 5472 (information return) and a pro-forma Form 1120 annually. The LLC must also file a Beneficial Ownership Information report with FinCEN within 90 days of formation. Wyoming requires an annual report by the anniversary month."
      }
    },
    {
      "@type": "Question",
      "name": "Can I open a US bank account with a Wyoming LLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Non-residents can open a US business bank account with a Wyoming LLC using the Articles of Organization, EIN letter, Operating Agreement, and a valid passport. Mercury, Relay, and traditional banks like Chase accept non-resident LLC owners with proper documentation."
      }
    }
  ]
}
```

### FAQPage Schema Rules

| Rule | Detail |
|------|--------|
| Number of Q&As | 8-10 per page minimum |
| Answer length | 40-80 words each (AI extraction sweet spot) |
| Questions match visible text | Schema question text must match the `<summary>` or heading text EXACTLY |
| Answers match visible text | Schema answer text must match the visible answer on the page |
| Numbers in every answer | Include at least one specific number, dollar amount, or timeframe |
| No hedging | Never use "it depends", "typically", "it's possible", "might" |
| Question format | Match how someone would type the question into Google or ChatGPT |
| Internal links in visible answers | Link to relevant pages in the HTML, but schema `text` is plain text (no HTML) |

### Why 40-80 Word Answers

- Under 40 words: not enough information for AI systems to cite confidently
- Over 80 words: AI systems truncate or skip overly long answers
- 40-80 words: the sweet spot where AI systems extract the full answer and cite the source

---

## Schema Type 3: BreadcrumbList

Use on every page except the homepage. Shows navigation hierarchy for both Google and AI systems.

### Complete BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yoursite.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Wyoming LLC",
      "item": "https://yoursite.com/wyoming-llc/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Wyoming LLC for Non-Residents"
    }
  ]
}
```

### BreadcrumbList Rules

- The last item (current page) does NOT include the `item` property — only `name` and `position`
- All other items include `name`, `position`, and `item` (the full absolute URL)
- Positions are sequential starting at 1
- URLs must be absolute (start with `https://`)
- Breadcrumb hierarchy must match your actual site architecture
- Maximum 4-5 levels deep. If deeper, simplify your URL structure.

### Breadcrumb Depth Examples

```
Homepage -> Category -> Page
Position 1: Home (https://yoursite.com/)
Position 2: Wyoming LLC (https://yoursite.com/wyoming-llc/)
Position 3: Wyoming LLC Cost (current page, no URL)

Homepage -> Category -> Subcategory -> Page
Position 1: Home (https://yoursite.com/)
Position 2: Guides (https://yoursite.com/guides/)
Position 3: Wyoming LLC (https://yoursite.com/wyoming-llc/)
Position 4: Wyoming LLC Banking (current page, no URL)
```

---

## Schema Type 4: HowTo

Use on any page with step-by-step instructions. This is IN ADDITION to the Triple Schema Stack.

### When to Use HowTo Schema

- Pages with "How to" in the H1 or URL
- Pages with numbered step-by-step processes
- Formation guides, setup guides, application walkthroughs
- Do NOT use on pages that merely mention steps in passing

### Complete HowTo Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Form a Wyoming LLC as a Non-Resident",
  "description": "Step-by-step guide to forming a Wyoming LLC from outside the United States. Takes 3-5 business days and costs $297 total.",
  "totalTime": "P5D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "297"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Valid passport (any country)"
    },
    {
      "@type": "HowToSupply",
      "name": "Email address"
    },
    {
      "@type": "HowToSupply",
      "name": "Payment method (credit card or PayPal)"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Wyoming Secretary of State website"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Choose Your LLC Name",
      "text": "Search the Wyoming Secretary of State business database to confirm your desired LLC name is available. The name must include 'LLC' or 'Limited Liability Company' per Wyoming statute 17-29-108.",
      "url": "https://yoursite.com/wyoming-llc-name/",
      "image": "https://yoursite.com/images/step-1-llc-name.webp"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Appoint a Registered Agent",
      "text": "Designate a Wyoming registered agent with a physical address in the state. Wyoming law requires every LLC to maintain a registered agent. Cost ranges from $25 to $100 per year.",
      "url": "https://yoursite.com/registered-agent/"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "File Articles of Organization",
      "text": "File your Articles of Organization with the Wyoming Secretary of State. The state filing fee is $100. Standard processing takes 3-5 business days. Expedited processing (1 day) costs an additional $100.",
      "url": "https://yoursite.com/articles-of-organization/"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Obtain an EIN from the IRS",
      "text": "Apply for an Employer Identification Number using IRS Form SS-4. Non-residents fax the form to (855) 641-6935. Processing takes 1-2 weeks. The EIN is free.",
      "url": "https://yoursite.com/ein-application/"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Open a US Business Bank Account",
      "text": "Open a US business bank account using your Articles of Organization, EIN letter, Operating Agreement, and passport. Mercury and Relay accept non-resident LLC owners remotely.",
      "url": "https://yoursite.com/us-bank-account/"
    }
  ]
}
```

### HowTo Schema Rules

- `totalTime` uses ISO 8601 duration format: `P5D` = 5 days, `PT30M` = 30 minutes, `PT2H` = 2 hours
- Each step must have `position`, `name`, and `text`
- Step `text` must match the visible content on the page
- `url` per step is optional but recommended — link to the detailed page for that step
- Include `estimatedCost` when applicable
- Include `supply` for required materials/documents
- Steps must be in sequential order

---

## Schema Type 5: Product (for Pricing/Service Pages)

Use on pricing pages, service pages, and product pages. This is IN ADDITION to the Triple Schema Stack (use FAQPage instead of Article if the page is primarily a pricing page, or include both).

### Complete Product Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Wyoming LLC Formation Service",
  "description": "Complete Wyoming LLC formation for non-residents. Includes state filing, registered agent, EIN, and all documents. Done in 3-5 business days.",
  "brand": {
    "@type": "Brand",
    "name": "YourSite.com"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://yoursite.com/pricing/",
    "priceCurrency": "USD",
    "price": "297",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "YourSite.com"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### Product Schema Rules

- `price` must match the actual price shown on the page
- `priceValidUntil` should be set to a reasonable future date (end of year) and updated when prices change
- Only include `aggregateRating` if you have real, verifiable reviews
- `availability` uses schema.org URL values: `InStock`, `OutOfStock`, `PreOrder`
- For free tools, use `price: "0"` with `priceCurrency: "USD"`

---

## Schema Type 6: Organization (Site-Wide)

Add to root `layout.tsx` — applies to the entire site. Only implement ONCE.

### Complete Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "YourSite.com",
  "url": "https://yoursite.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yoursite.com/images/logo.png",
    "width": 600,
    "height": 60
  },
  "description": "Wyoming LLC formation service for non-residents. $297 total. 3-5 business days. Serving clients from 150+ countries.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Founder Name"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish"],
    "url": "https://yoursite.com/contact/"
  },
  "sameAs": [
    "https://twitter.com/yoursite",
    "https://linkedin.com/company/yoursite",
    "https://youtube.com/@yoursite"
  ]
}
```

### WebSite Schema (Also Site-Wide)

Add alongside Organization schema in root `layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "YourSite.com",
  "url": "https://yoursite.com/",
  "description": "Wyoming LLC formation for non-residents. Guides, tools, and services.",
  "publisher": {
    "@type": "Organization",
    "name": "YourSite.com"
  }
}
```

---

## Schema Type 7: Person / Author (for E-E-A-T)

Use within Article schema's `author` field. Critical for YMYL (Your Money, Your Life) topics where Google evaluates expertise.

### Complete Person Schema

```json
{
  "@type": "Person",
  "name": "Author Name",
  "url": "https://yoursite.com/about/",
  "jobTitle": "LLC Formation Specialist",
  "description": "Author Name has helped 500+ non-residents form US LLCs since 2020. Specializes in Wyoming and Delaware formations for international entrepreneurs.",
  "sameAs": [
    "https://linkedin.com/in/authorname",
    "https://twitter.com/authorname"
  ],
  "knowsAbout": [
    "LLC Formation",
    "Wyoming Business Law",
    "International Tax Compliance",
    "EIN Application Process"
  ]
}
```

### Author Schema Rules

- Every Article schema must have an `author` — either Person or Organization
- `url` should point to an about/author page on your site
- `sameAs` links to social profiles verify identity across platforms
- `jobTitle` and `description` establish expertise for E-E-A-T
- `knowsAbout` helps AI systems understand the author's expertise domains
- For multi-author sites, use different Person schemas per article

---

## Schema Type 8: SoftwareApplication (for Tool/Calculator Pages)

Use on calculator pages, tool pages, and interactive widgets.

### Complete SoftwareApplication Schema

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Markup Calculator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free markup calculator. Enter cost price and markup percentage to calculate selling price instantly. Supports bulk calculations.",
  "url": "https://yoursite.com/markup-calculator/",
  "screenshot": "https://yoursite.com/images/markup-calculator-screenshot.webp",
  "featureList": "Markup calculation, Margin calculation, Bulk pricing, Export to CSV"
}
```

### SoftwareApplication Rules

- `price: "0"` for free tools — this enables "Free" label in rich results
- `applicationCategory` values: `BusinessApplication`, `FinanceApplication`, `UtilitiesApplication`
- `operatingSystem: "Web Browser"` for all web-based tools
- Include `screenshot` when available
- `description` must match the meta description

---

## Schema for Programmatic Pages (Dynamic Generation)

For sites with many similar pages (country pages, state pages, city pages), generate schema dynamically.

### Dynamic Schema Pattern (Next.js)

```tsx
// lib/schema.ts — Reusable schema generators

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl: string;
  imageUrl?: string;
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  imageUrl,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "YourSite.com",
      url: "https://yoursite.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://yoursite.com/images/logo.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(imageUrl && {
      image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    }),
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}
```

### Using Dynamic Schema in a Page

```tsx
// app/[country]/page.tsx
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export default function CountryPage({ params }: { params: { country: string } }) {
  const countryData = getCountryData(params.country);

  const articleSchema = generateArticleSchema({
    title: countryData.h1,
    description: countryData.metaDescription,
    url: `https://yoursite.com/${params.country}/`,
    datePublished: countryData.publishDate,
    dateModified: countryData.lastModified,
    authorName: "Author Name",
    authorUrl: "https://yoursite.com/about/",
  });

  const faqSchema = generateFAQSchema(countryData.faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://yoursite.com/" },
    { name: "Countries", url: "https://yoursite.com/countries/" },
    { name: countryData.countryName },
  ]);

  return (
    <main>
      <h1>{countryData.h1}</h1>
      {/* page content */}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
```

### Programmatic Schema Rules

- Schema `headline` must be generated from the same data source as the H1 — they must match exactly
- `dateModified` must reflect actual content updates, NOT build time — store real dates per page
- FAQ answers must be generated from the same data as visible FAQ text
- Validate a sample of 5-10 programmatic pages with Rich Results Test after deployment
- Never hardcode schema values that should be dynamic (dates, titles, URLs)

---

## Next.js Implementation Patterns

### Reusable JsonLd Component

```tsx
// components/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Usage:

```tsx
import { JsonLd } from "@/components/JsonLd";

export default function Page() {
  return (
    <main>
      {/* content */}
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}
```

### generateMetadata Pattern

```tsx
// app/[slug]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pageData = await getPageData(params.slug);

  return {
    title: pageData.title,          // 50-60 chars
    description: pageData.description, // 150-160 chars
    alternates: {
      canonical: `https://yoursite.com/${params.slug}/`,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `https://yoursite.com/${params.slug}/`,
      siteName: "YourSite.com",
      type: "article",
      images: [{
        url: `https://yoursite.com/og/${params.slug}`,
        width: 1200,
        height: 630,
        alt: pageData.ogAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [`https://yoursite.com/og/${params.slug}`],
    },
  };
}
```

### Server Component Requirement

All content pages MUST be server components. Never add `"use client"` to a `page.tsx` that exports metadata. Client components cannot export metadata.

```tsx
// CORRECT: Server component page with client component import
import type { Metadata } from "next";
import InteractiveFAQ from "@/components/InteractiveFAQ"; // client component

export const metadata: Metadata = { /* ... */ };

export default function GuidePage() {
  return (
    <main>
      <h1>Page Title</h1>
      <p>Static content — always server-rendered</p>
      <InteractiveFAQ />
      {/* Schema scripts here */}
    </main>
  );
}
```

---

## Schema Must Match Visible Content

This is the most common schema mistake. Google can penalize pages where schema content does not match visible page content.

### What Must Match Exactly

| Schema Field | Must Match |
|-------------|-----------|
| `headline` (Article) | The H1 tag text — character for character |
| `description` (Article) | The meta description — character for character |
| `name` (FAQPage Question) | The visible FAQ question text on the page |
| `text` (FAQPage Answer) | The visible FAQ answer text on the page |
| `name` (HowTo Step) | The visible step heading text on the page |
| `text` (HowTo Step) | The visible step description text on the page |
| `price` (Product/Offer) | The actual price displayed on the page |
| `name` (BreadcrumbList) | The actual breadcrumb navigation text |

### Common Mismatch Errors

```
BAD:  Schema headline: "YourSite.com - Wyoming LLC Guide"
      H1 on page: "Wyoming LLC for Non-Residents (2026 Guide)"
      These do not match. Schema will fail validation.

GOOD: Schema headline: "Wyoming LLC for Non-Residents (2026 Guide)"
      H1 on page: "Wyoming LLC for Non-Residents (2026 Guide)"
      Exact match.
```

---

## How Schema Affects AI Citation

AI systems (ChatGPT, Claude, Perplexity, Gemini) use schema in their retrieval and citation pipeline:

### AI Citation Priority (from Ahrefs 2026)

```
URL -> Title -> Snippet (meta description) -> Ranking position -> Metadata (schema)
```

ChatGPT selects the best source to cite based on this hierarchy. Schema is the metadata layer that AI reads after title and snippet.

### FAQPage = 3.2x AI Citation Uplift

Per Ahrefs 2026 data, pages with FAQPage schema receive 3.2x more AI citations than equivalent pages without FAQ schema. This is because:

1. AI systems can ingest JSON-LD directly without parsing HTML
2. FAQ schema provides pre-structured Q&A pairs — exactly the format AI uses for answers
3. Each Q&A pair is an independently extractable fact
4. 8-10 FAQ items = 8-10 potential AI citation opportunities per page

### Schema Design for AI Systems

- Write FAQ answers as complete, standalone statements (not "see above" or "as mentioned")
- Include specific numbers in every answer — AI systems treat numbers as knowledge anchors
- Use declarative sentences — "X costs $297" not "X might cost around $297"
- Each FAQ answer should be useful even if extracted without any surrounding context

---

## Schema Required Per Page Type

| Page Type | Required Schema | Optional Schema |
|-----------|----------------|-----------------|
| Homepage | Organization + WebSite + FAQPage | Service |
| Service page | Article + FAQPage + BreadcrumbList | Service + Offer |
| Hub/Pillar page | Article + FAQPage + BreadcrumbList | HowTo |
| Cluster page | Article + FAQPage + BreadcrumbList | HowTo |
| Comparison page | Article + FAQPage + BreadcrumbList | ItemList |
| Blog post | BlogPosting + FAQPage + BreadcrumbList | |
| Tool/Calculator | SoftwareApplication + FAQPage + BreadcrumbList | |
| Pricing page | Product + Offer + FAQPage + BreadcrumbList | AggregateRating |
| Review page | Article + FAQPage + BreadcrumbList | Review + AggregateRating |
| Spanish page | Same as English equivalent + `inLanguage: "es"` | |

---

## Common Schema Mistakes

| Mistake | Why It's Bad | Fix |
|---------|-------------|-----|
| Schema `headline` does not match H1 | Google ignores mismatched schema | Copy H1 text exactly into `headline` |
| FAQ schema questions don't match visible FAQ | Violates Google's structured data guidelines | Generate both from the same data source |
| `dateModified` set to build date | Triggers false freshness signals, erodes trust | Store real content update dates per page |
| Missing `author` on Article schema | Weak E-E-A-T signal, especially for YMYL content | Add Person schema with credentials |
| Combining all schema into one script tag | Makes debugging harder, can cause parse errors | One `<script type="application/ld+json">` per schema type |
| Using microdata or RDFa instead of JSON-LD | Google prefers JSON-LD, processes it first | Always use JSON-LD format |
| Duplicate schema on same page | Confuses crawlers, may cause validation errors | One instance of each schema type per page |
| Schema on pages with no visible content match | Google can issue manual action | Schema must reflect visible content |
| Empty required fields | Validation fails, schema ignored | Fill all required fields or remove the schema type |
| Nested JSON syntax errors | Entire schema block ignored | Validate with JSON linter before deploying |
| `"use client"` on page with schema | Schema may not be server-rendered | Keep pages as server components |
| Schema in `layout.tsx` for page-specific data | Same schema applied to all child pages | Put page-specific schema in `page.tsx` |

---

## Schema Validation Checklist

Run this on EVERY page before deploying to production.

### Structure

- [ ] Triple Schema Stack present: Article + FAQPage + BreadcrumbList
- [ ] Each schema type in its own `<script type="application/ld+json">` tag
- [ ] JSON-LD format used (not microdata, not RDFa)
- [ ] Valid JSON syntax (no trailing commas, proper escaping)

### Article Schema

- [ ] `headline` matches H1 exactly
- [ ] `description` matches meta description exactly
- [ ] `datePublished` in ISO 8601 format
- [ ] `dateModified` reflects real content update date (not build date)
- [ ] `author` present with `name` and `url`
- [ ] `publisher` present with `name`, `url`, and `logo`
- [ ] `mainEntityOfPage` set to canonical URL

### FAQPage Schema

- [ ] 8-10 Q&A pairs present
- [ ] Each question matches visible FAQ text exactly
- [ ] Each answer matches visible FAQ text exactly
- [ ] Answers are 40-80 words each
- [ ] Every answer includes at least one specific number
- [ ] No hedging language in answers
- [ ] FAQ section is visible on the page as HTML (not schema-only)

### BreadcrumbList Schema

- [ ] Positions are sequential starting at 1
- [ ] All URLs are absolute (start with https://)
- [ ] Last item has no `item` property (current page)
- [ ] Hierarchy matches actual site structure

### Additional Schema (if applicable)

- [ ] HowTo: steps match visible content, `totalTime` set
- [ ] Product: `price` matches displayed price, `priceValidUntil` set
- [ ] SoftwareApplication: `price: "0"` for free tools
- [ ] Organization + WebSite: present in root `layout.tsx` (one time)

### Testing

- [ ] Validated with Google Rich Results Test: `search.google.com/test/rich-results` — zero errors
- [ ] Validated with Schema.org validator: `validator.schema.org` — zero errors
- [ ] Tested on 5-10 sample pages if using programmatic generation
- [ ] No warnings about missing recommended fields

---

## Testing Tools

### Google Rich Results Test

URL: `https://search.google.com/test/rich-results`

- Paste your page URL or code snippet
- Shows which rich results your schema qualifies for
- Reports errors (must fix) and warnings (should fix)
- Standard: zero errors on every page

### Schema.org Validator

URL: `https://validator.schema.org/`

- More comprehensive validation than Google's tool
- Checks against the full schema.org specification
- Use for debugging complex nested schemas

### Browser DevTools

Quick check in any browser:

```javascript
// Paste in browser console on your page
document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
  try {
    const data = JSON.parse(el.textContent);
    console.log(data["@type"], data);
  } catch (e) {
    console.error("Invalid JSON-LD:", e);
  }
});
```

### Automated Validation in CI/CD

```typescript
// In your build or test pipeline
import { readFileSync } from "fs";

function validateSchema(html: string): string[] {
  const errors: string[] = [];
  const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;

  while ((match = schemaRegex.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      if (!data["@context"]) errors.push("Missing @context");
      if (!data["@type"]) errors.push("Missing @type");

      if (data["@type"] === "Article") {
        if (!data.headline) errors.push("Article missing headline");
        if (!data.dateModified) errors.push("Article missing dateModified");
        if (!data.author) errors.push("Article missing author");
      }

      if (data["@type"] === "FAQPage") {
        if (!data.mainEntity || data.mainEntity.length < 8) {
          errors.push("FAQPage needs 8+ Q&A pairs, found " + (data.mainEntity?.length || 0));
        }
      }
    } catch (e) {
      errors.push("Invalid JSON-LD syntax: " + (e as Error).message);
    }
  }

  return errors;
}
```
