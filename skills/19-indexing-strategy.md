---
skill: indexing-strategy
description: Load when launching a new site, diagnosing indexing problems, planning content publishing cadence, or recovering from mass non-indexing. The complete guide to getting and keeping pages indexed.
version: 1.0.0
last-verified: 2026-04
source: WyomingLLC.co indexing failure (30/480 pages indexed) + Ahrefs technical SEO + Google Search Central + SEO Council transcripts + Koray publishing cadence framework
load: on-demand
triggers: indexing, crawl budget, sitemap, not indexed, crawling, URL inspection, orphan pages, index bloat, publishing cadence, how many pages, content velocity
---

# Indexing Strategy -- The Complete Guide

## Core Truth

A page that is not indexed does not exist. It cannot rank, cannot generate traffic, cannot earn links, and cannot convert customers. Indexing is not a passive outcome of publishing -- it is an active process that must be engineered from Day 1.

"Technical SEO is the most important part of SEO until it isn't. Pages need to be crawlable and indexable to even have a chance at ranking." -- Patrick Stox, Ahrefs

---

## 1. Why Indexing Fails -- The WyomingLLC.co Post-Mortem

### The Disaster Timeline (Real Dates)

```
Feb 28, 2026:  ~114 pages live. Indexing working normally.
Mar 3, 2026:   Bulk published 185 new pages in 3 commits (114 -> 299 pages)
Mar 3, 2026:   Published another 80 pages same day (299 -> 379)
Mar 4, 2026:   Added 102 more pages + multi-sitemap system (379 -> 481)
Mar 4, 2026:   Submitted all 481 pages to IndexNow (Bing/Yandex)
Mar 4, 2026:   Google discovers 521 phantom URLs from DUPLICATE sitemaps
Mar 8-10:      Emergency fixes: trailing slashes, canonicals, sitemap dedup
Mar 21:        Discovered 236 pages were ORPHANED (no internal links to them)
Mar 23:        Expanded 78 thin pages (47K lines added)
Apr 20:        Still only ~30 pages indexed after 7 weeks
```

**Result:** 7+ weeks of lost indexing time. 450 pages stuck in limbo. 367 pages published in 48 hours -- the single biggest mistake.

### The Numbers

- **480 pages published**
- **30 pages indexed** (6% index rate)
- **367 pages published in 48 hours** (March 3-4 -- triggered the disaster)
- **236 orphaned pages** (no internal links pointing to them)
- **521 phantom URLs** from duplicate sitemaps blocking real pages
- **78 thin pages** expanded (47K lines of new content added)
- **DR 0** for months (Google had zero incentive to crawl deeply)
- **8 broken 404 pages** with 26 links pointing to them

### The 7 Root Causes (The "7 Deadly Sins of Indexing")

**SIN 1: Duplicate Sitemap Catastrophe**
The site had TWO sitemap sources running simultaneously: static XML sitemaps in `/public/` directory AND a dynamic `app/sitemap.ts`. Both served URLs at `/sitemap.xml`. Google crawled both and discovered ~521 URLs, many duplicated. Google saw this as a structural quality problem, marked most pages "Discovered - currently not indexed," and throttled crawl rate. Even after fixing, "discovered not indexed" status is sticky -- takes weeks to clear.

```
THE RULE: ONE sitemap source per site. Always dynamic. Never static + dynamic together.
In Next.js: use app/sitemap.ts ONLY. Delete any .xml files in public/.
Verify: curl -s https://yoursite.com/sitemap.xml (should show ONE clean sitemap)
```

**SIN 2: Bulk Publication Overload (367 Pages in 48 Hours)**
Published 367 new pages in 2 days (March 3-4). A DR=0 site with 114 pages suddenly claiming 481 pages looks suspicious. Google allocates crawl budget based on site authority and size history. Mass publication pattern resembles spam/content farms. Crawl budget was exhausted on the first 30-50 pages; the rest queued indefinitely.

```
THE RULE:
  MAXIMUM 5-8 new pages per week for brand new sites (DR = 0)
  MAXIMUM 10-15 new pages per week for sites with DR < 20
  
  Week 1: Pillar pages (3-5 pages)
  Week 2-3: Highest-value cluster pages (10-15 pages)
  Week 4-6: Secondary cluster pages (15-20 pages)
  Week 7+: Support/programmatic pages (5-10 per week)
  
  TOTAL RAMP: 50 pages in first month, 100 by month 2, scale from there.
```

**SIN 3: Orphaned Pages (236 Pages with Zero Internal Links)**
236 out of 481 pages had ZERO internal links pointing to them. They existed in the sitemap but no other page linked to them. Google uses internal links as a primary signal for page importance. Orphaned pages get lowest crawl priority and almost never get indexed on low-authority sites.

The fix (applied 18 days too late): Created 4 hub pages (/countries/, /state-comparisons/, /industries/, /banking-guides/). Each hub links to ALL child pages. Added SiblingLinks component showing 6 related pages per article.

```
THE RULE:
  BEFORE publishing any page, it MUST have:
    1. At least 2 incoming internal links from existing pages
    2. A parent hub/pillar page that links to it
    3. Sibling links to/from related pages
    4. A link from a high-authority page (homepage, pillar, or top cluster)
  
  Hub pages MUST exist BEFORE their child pages are published.
  Never publish a page and "add links later" -- do it simultaneously.
```

**SIN 4: Thin Content at Launch**
Many programmatic pages launched with 300-800 words of mostly templated content. 80%+ shared across pages. Google's Helpful Content System evaluates quality site-wide. Thin pages drag down the entire domain's quality score. Even good pages get penalized sharing a domain with thin content.

The fix: Expanded 78 thin pages (47K lines of new content added). Each got unique scenarios, data points, and FAQ questions.

```
THE RULE:
  Pillar pages: 3,000+ words, 100% unique
  Cluster pages: 2,000+ words, 80%+ unique
  Support/programmatic pages: 1,500+ words, 60%+ unique
  Every page: 5+ unique data points, 3+ unique FAQ items
  
  NEVER launch a page with < 1,500 words.
  NEVER launch pages where > 40% of content is shared with other pages.
```

**SIN 5: Canonical URL Chaos**
Mixed trailing slash usage: some canonicals `/pricing`, others `/pricing/`. Sitemap URLs inconsistent. Internal links inconsistent. Google treats these as two different URLs. When canonical says one thing and sitemap says another, Google ignores both.

```
THE RULE:
  Pick ONE URL format and enforce it everywhere:
    - next.config: trailingSlash: true (or false -- pick ONE)
    - All canonical URLs match the chosen format
    - All sitemap URLs match the chosen format
    - All internal Link hrefs match the chosen format
  
  VERIFY: grep the entire codebase for href patterns.
```

**SIN 6: No Crawl Priority Strategy**
All 481 pages submitted at once with no differentiation. IndexNow pinged for all simultaneously. Sitemap had most pages at same priority. Google had to decide which of 481 pages to crawl first, and without clear signals, important pages competed with low-value pages for crawl budget.

```
THE RULE:
  SITEMAP PRIORITY TIERS:
    1.0  Homepage (1 page)
    0.9  Pillar pages + pricing + key landing pages (5-10 pages)
    0.8  Primary cluster pages (20-30 pages)
    0.7  Secondary cluster pages (30-50 pages)
    0.6  Support/programmatic pages (everything else)

  INDEXNOW / GSC SUBMISSION ORDER:
    Day 1: Submit homepage + pillar pages only
    Day 3: Submit primary clusters
    Day 7: Submit secondary clusters
    Day 14+: Submit support pages in batches of 20
  
  NEVER submit all pages at once. Stagger over 2-4 weeks.
```

**SIN 7: Missing Crawl Path Depth**
Many programmatic pages were 4+ clicks from homepage. Most support pages had no path shorter than 3-4 clicks, and many had NO path at all (orphaned).

```
THE RULE:
  EVERY page must be reachable in 3 clicks or fewer from homepage:
    Click 1: Homepage -> Hub/Pillar page
    Click 2: Hub/Pillar -> Cluster page
    Click 3: Cluster -> Support page
  
  Homepage must link to ALL hub/pillar pages directly.
  Hub pages must link to ALL their child pages.
```

### The Cascade of Failure

```
Bulk publish 367 pages in 48 hours
  -> Google sees spam-like pattern, throttles crawl budget
    -> Duplicate sitemaps create 521 phantom URLs
      -> Real pages compete with phantom URLs for crawl budget
        -> 236 pages have zero internal links (orphaned)
          -> Google can't reach them even with crawl budget
            -> Thin content on discovered pages -> "Crawled - not indexed"
              -> No indexed pages -> No traffic -> No links -> DR stays 0
                -> Crawl budget stays minimal -> Cycle compounds
```

This is the death spiral. WyomingLLC.co was in it for 7+ weeks. Breaking it required fixing ALL root causes simultaneously -- there is no single fix.

---

## 2. Publishing Cadence Strategy

### The Principle

Google learns your publishing pattern and allocates crawl budget accordingly. If you publish 3 pages per week consistently, Googlebot adjusts its crawl schedule to match. If you publish 50 pages on Monday and nothing for 3 weeks, Google does not know when to come back.

Consistent cadence trains Googlebot. Erratic publishing confuses it.

### The Cardinal Rule

**Never publish faster than you can properly interlink.** 10 fully interlinked pages indexed at 100% is infinitely better than 50 orphaned pages indexed at 6%.

[WYOMING LESSON] 480 pages published rapidly with no interlinking strategy = 6% index rate. The speed of publishing was the enemy.

### Cadence by Site Authority

**Brand New Sites (DR 0-5) -- Month 1**
- Publish 2-3 pages per week maximum
- Focus exclusively on pillar/hub pages
- Every page must be fully complete (1,500+ words, schema, internal links, FAQ)
- Wait for INDEX GATE confirmation before adding more
- Total target: 5-10 pages in first month

**Growing Sites (DR 5-20) -- Month 2-4**
- Publish 3-5 pages per week
- Alternate between hub completion and cluster/spoke pages
- Every page published must link to AND from 2-3 existing indexed pages
- Monitor "Crawled not indexed" ratio weekly
- Total target: 20-50 pages by end of month 3

**Established Sites (DR 20+) -- Month 5+**
- Publish 5-10 pages per week (can increase to 10-20 with programmatic)
- Programmatic pages can be published in larger batches IF template ensures interlinking
- Blog content can drip at 1/day
- Total target: Scale as fast as interlinking allows

### Batch Publishing vs Consistent Drip

**Consistent drip wins.** Here is why:

- Google learns to crawl your site on a schedule matching your publish cadence
- 3 pages every Monday/Wednesday/Friday is better than 9 pages every other Monday
- Drip publishing forces you to interlink each page as it goes live
- Batch publishing tempts you to "come back and add links later" (you never do)

**Exception:** Programmatic pages with automated interlinking templates can be batch-published because the template handles internal links automatically. But verify after each batch:
```bash
# Check that programmatic pages have internal links
curl -s https://yoursite.com/programmatic-page/ | grep -c 'href="/'
# Should return 5+ (nav + footer + content links)
```

---

## 3. Pre-Publishing Indexing Checklist

**Run this checklist for EVERY page before it goes live. No exceptions.**

### Content Requirements
- [ ] Page has 1,500+ words minimum (WyomingLLC had 50+ pages under 200 words -- all failed to index)
- [ ] Content is unique -- not duplicated from another page on the site
- [ ] H1 is present and contains primary keyword
- [ ] FAQ section with 5+ real questions
- [ ] Content provides genuine value (not thin stub waiting for expansion)

### Technical Requirements
- [ ] Page is a server component (no `"use client"` on page.tsx)
- [ ] Canonical URL set correctly with consistent trailing slash
- [ ] No accidental `noindex` tag (check robots meta -- common silent killer)
- [ ] Schema markup present (Article + FAQ + Breadcrumb minimum)
- [ ] Schema `headline` matches H1 exactly
- [ ] OG image configured (local URL, 1200x630)
- [ ] `datePublished` and `dateModified` set in schema

### Internal Link Requirements (CRITICAL)
- [ ] 2-3 existing pages updated with links TO this new page BEFORE or simultaneously with publish
- [ ] Parent hub/pillar page updated with link to new page
- [ ] New page links UP to parent hub
- [ ] New page links SIDEWAYS to 2-3 sibling pages
- [ ] New page links DOWN to service/conversion page

### Sitemap Requirements
- [ ] Page is included in `app/sitemap.ts`
- [ ] Sitemap URL uses correct trailing slash format
- [ ] `lastModified` reflects actual content date (not build date)
- [ ] No static XML sitemap conflicts in `/public/`

### Server Rendering Verification
```bash
# Verify the page content is server-rendered
curl -s https://yoursite.com/new-page/ | grep '<h1'
# Must return the H1 tag with content

# Verify internal links are server-rendered
curl -s https://yoursite.com/new-page/ | grep -c 'href="/'
# Must return 5+ (nav + footer + content body links)

# Verify no accidental noindex
curl -s https://yoursite.com/new-page/ | grep -i 'noindex'
# Must return EMPTY -- any result here means the page will not be indexed

# Verify canonical is correct
curl -s https://yoursite.com/new-page/ | grep 'canonical'
# Must show the correct canonical URL with proper trailing slash
```

### Final Gate
If ANY checkbox above is not met, DO NOT publish. Fix first, then publish. Publishing incomplete pages creates a negative quality signal that is harder to reverse than to prevent.

---

## 4. Indexing Acceleration Tactics

### Tier 1: Immediate Actions (Do Within 1 Hour of Publishing)

**Google Search Console URL Inspection**
1. Open GSC -> URL Inspection
2. Enter the exact URL of the new page
3. Click "Request Indexing"
4. Note: Limited to ~10 requests per day per property
5. Prioritize highest-value pages if publishing more than 10/day

**Sitemap Ping**
```bash
# Notify Google that your sitemap has been updated
curl "https://www.google.com/ping?sitemap=https://yoursite.com/sitemap.xml"
```

**IndexNow (Bing, Yandex, Seznam) -- ONE PATH TO AI TRAFFIC**

[WYOMING LESSON] WyomingLLC.co had 480 pages, Google indexed only 30 (6%). Bing showed 370 impressions. Yet ChatGPT delivered 400+ visitors. AI traffic came through multiple paths: OAI-SearchBot direct crawling, Bing search results, and possibly Google's 30 indexed pages.

IndexNow pings Bing for faster indexing. Bing is ONE of ChatGPT's search providers (confirmed). But ChatGPT also uses OAI-SearchBot (its own crawler) and likely Google results. IndexNow does NOT directly submit to OpenAI.

```bash
# Submit URL to IndexNow-supporting engines (Bing, Yandex)
curl -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "yoursite.com",
    "key": "YOUR_INDEXNOW_KEY",
    "urlList": ["https://yoursite.com/new-page/"]
  }'
```

**Submit to Bing Webmaster Tools (Day 1):**
1. Verify site in Bing Webmaster Tools
2. Submit sitemap in Bing Webmaster Tools
3. Use Bing URL Submission API for priority pages
4. Check Bing indexing weekly

**Why this matters for AI traffic:**

| Search Engine | AI Systems That Use It (Confirmed) | Index Difficulty |
|--------------|-----------------------------------|-----------------|
| **Bing** | ChatGPT, Copilot, Meta AI, Perplexity | Easier via IndexNow |
| **Google** | Gemini, likely ChatGPT, Meta AI, Perplexity | Harder (crawl budget, quality gates) |
| **Brave** | Claude | Moderate |
| **Own crawlers** | ChatGPT (OAI-SearchBot), Perplexity (PerplexityBot) | Follow sitemaps directly |

**Key insight:** AI traffic doesn't depend on any single search engine. AI systems use multiple discovery paths (their own crawlers + search APIs). This is why WyomingLLC.co got 400+ AI visitors despite Google's 6% index rate -- OAI-SearchBot and Bing provided alternative paths.

### Tier 2: Within 24 Hours

**Internal Links from High-Authority Pages**
Link to the new page from your most powerful existing pages -- the ones already indexed, already ranking, already receiving traffic. These pages get crawled most frequently, so links from them are discovered fastest.

Check which pages Google crawls most:
- GSC -> Settings -> Crawl stats -> Most crawled URLs
- Add internal links from those pages to your new content

**Social Sharing**
Share the URL on Twitter/X, LinkedIn, and relevant communities. This creates external signals that can trigger crawl discovery. Not for link value -- purely for crawl triggering.

### Tier 3: Within 1 Week

**Google Indexing API (Eligible Page Types Only)**
The Indexing API is officially supported only for:
- JobPosting pages
- BroadcastEvent with VideoObject pages

However, some SEOs report success using it for other page types. Use with caution.

```python
# Python example using google-auth
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/indexing"]
credentials = service_account.Credentials.from_service_account_file(
    'service-account.json', scopes=SCOPES)
service = build('indexing', 'v3', credentials=credentials)

def request_indexing(url):
    body = {"url": url, "type": "URL_UPDATED"}
    response = service.urlNotifications().publish(body=body).execute()
    return response
```

**Backlink Outreach**
A single backlink from an indexed external page can trigger Googlebot to discover and crawl the linked page. For new sites, even 1-2 DR 20+ backlinks dramatically increase crawl budget allocation.

[WYOMING LESSON] DR 0 for months. No backlinks meant no crawl budget. Start link building in Week 1, not Month 3.

### Tier 4: Ongoing

**Consistent Publishing Cadence**
Google allocates crawl budget partly based on how frequently a site publishes new content. Publishing 3x/week consistently signals to Google that the site is actively maintained and worth frequent crawling.

**Content Freshness Updates**
Update existing indexed pages with new information. This triggers recrawling of those pages, and during recrawl Google discovers any new internal links you have added since the last crawl.

---

## 5. Sitemap Strategy

### The WyomingLLC.co Sitemap Disaster

WyomingLLC.co had TWO sitemaps:
1. A static `public/sitemap.xml` with 521 phantom URLs (pages that did not exist)
2. A dynamic `app/sitemap.ts` with the actual pages

Google found both, attempted to crawl all 521 phantom URLs, received errors, and deprioritized the entire domain's crawl queue. Real pages got buried behind phantom URLs.

### Sitemap Rules (Non-Negotiable)

**Rule 1: ONE Sitemap Source Only**
Use `app/sitemap.ts` in Next.js. Delete any static XML files:
```bash
# Check for static sitemaps that should not exist
ls -la public/sitemap*.xml 2>/dev/null
# If any files found: DELETE THEM IMMEDIATELY
rm -f public/sitemap*.xml
```

**Rule 2: Dynamic Generation Only**
```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yoursite.com";
  const appDir = path.join(process.cwd(), "app");

  const pages = [
    { slug: "", priority: 1.0, changeFrequency: "weekly" as const },
    { slug: "pricing", priority: 0.9, changeFrequency: "monthly" as const },
    // ... all pages listed explicitly
  ];

  return pages.map((page) => {
    // Use REAL file modification times -- never new Date()
    const pagePath = path.join(appDir, page.slug || "", "page.tsx");
    const stat = fs.existsSync(pagePath) ? fs.statSync(pagePath) : null;

    return {
      url: `${baseUrl}/${page.slug}${page.slug ? "/" : ""}`,
      lastModified: stat ? stat.mtime : new Date("2026-01-01"),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
  });
}
```

**Rule 3: lastModified Must Reflect ACTUAL Content Updates**
```typescript
// WRONG -- changes every build, Google learns to ignore it
lastModified: new Date(),

// WRONG -- hardcoded date that never changes
lastModified: new Date("2026-01-01"),

// CORRECT -- actual file modification time
const stat = fs.statSync(pagePath);
lastModified: stat.mtime,
```

When `lastModified` changes on every build, Google learns that your sitemap timestamps are unreliable and ignores them entirely. When `lastModified` accurately reflects content changes, Google uses it to prioritize which pages to recrawl.

**Rule 4: Priority Scale**

| Page Type | Priority | Rationale |
|-----------|----------|-----------|
| Homepage | 1.0 | Most important page, hub of all hubs |
| Pillar/Hub pages | 0.9 | Core topical authority pages |
| Cluster/Spoke pages | 0.8 | Supporting content around pillars |
| Support pages (about, contact) | 0.7 | Important but not keyword-targeted |
| Blog posts | 0.6 | Fresh content, lower commercial value |
| Legal pages (privacy, terms) | 0.5 | Required but not ranking targets |

**Rule 5: Only Canonical URLs**
Never include in the sitemap:
- URLs that redirect to another URL
- URLs with a canonical pointing to a different URL
- URLs with `noindex`
- Parameter URLs (`?sort=price&page=2`)
- Admin, API, or internal routes

**Rule 6: Maximum 50,000 URLs Per Sitemap**
If your site exceeds 50,000 URLs, split into multiple sitemaps and use a sitemap index:

```typescript
// app/sitemap.ts -- sitemap index for large sites
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // For sites with 50,000+ URLs, generate sitemap index
  const sitemaps = [];
  const totalPages = getAllPages().length;
  const perSitemap = 45000; // Leave buffer below 50K limit

  for (let i = 0; i < Math.ceil(totalPages / perSitemap); i++) {
    sitemaps.push({
      url: `https://yoursite.com/sitemap-${i}.xml`,
      lastModified: new Date(),
    });
  }
  return sitemaps;
}
```

**Rule 7: Verify Sitemap in GSC**
After every deployment:
```bash
# Check sitemap is accessible
curl -s -o /dev/null -w "%{http_code}" https://yoursite.com/sitemap.xml
# Must return 200

# Count URLs in sitemap
curl -s https://yoursite.com/sitemap.xml | grep -c "<loc>"
# Must match your expected page count

# Verify no phantom URLs (URLs in sitemap that 404)
curl -s https://yoursite.com/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' | while read url; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$STATUS" != "200" ]; then
    echo "PHANTOM URL: $STATUS $url"
  fi
done
```

Submit sitemap in GSC -> Sitemaps -> Add a new sitemap -> Enter `sitemap.xml` -> Submit.

---

## 6. Crawl Budget Management

### What Is Crawl Budget

Crawl budget is the number of pages Googlebot will crawl on your site within a given timeframe. It is determined by:

1. **Crawl rate limit** -- how fast Google can crawl without overloading your server
2. **Crawl demand** -- how much Google "wants" to crawl based on popularity and freshness

For small sites (under 1,000 pages), crawl budget is rarely a bottleneck. For sites with 10,000+ pages or sites with low authority, crawl budget becomes the primary constraint on indexing.

[WYOMING LESSON] At DR 0, WyomingLLC.co's crawl budget was approximately 30-50 pages per crawl session. Publishing 480 pages meant Google would need 10-16 crawl sessions just to discover all pages -- assuming no wasted crawl budget. With 521 phantom URLs in the sitemap, Google wasted half its crawl budget on non-existent pages.

### How to Prioritize Crawl Budget

**1. Block Crawling of Low-Value Pages**

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           // API routes -- no content for users
          "/_next/",         // Next.js internal assets
          "/admin/",         // Admin pages
          "/components/",    // Component files
          "/lib/",           // Library files
          "/lp-google/",     // PPC landing pages (if noindexed)
          "/thank-you/",     // Thank you pages
          "/*?*sort=",       // Parameter URLs -- sorting
          "/*?*filter=",     // Parameter URLs -- filtering
          "/*?*page=",       // Parameter URLs -- pagination (if not needed)
        ],
      },
    ],
    sitemap: "https://yoursite.com/sitemap.xml",
  };
}
```

**2. Server Response Time**
Googlebot adjusts crawl rate based on server response time:
- Under 200ms response: Google crawls aggressively
- 200ms-1s: Normal crawl rate
- Over 1s: Google throttles crawling to avoid overloading your server
- Over 2s: Significant crawl rate reduction

Target: Every page should respond in under 500ms. Use `force-static` on content pages:
```typescript
export const dynamic = 'force-static';
```

**3. Avoid Soft 404s**
A soft 404 is a page that returns HTTP 200 but has no meaningful content. Google detects these and marks them as "Soft 404" in GSC Coverage report. They waste crawl budget and signal low quality.

Common causes:
- Empty search results pages
- Category pages with zero products
- Template pages with placeholder content
- Pages that display "No results found" but return 200

Fix: Return actual 404 status code for pages with no content:
```typescript
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const data = getData(params.slug);
  if (!data || data.items.length === 0) {
    notFound(); // Returns proper 404, not soft 404
  }
  return <PageContent data={data} />;
}
```

**4. Internal Link Structure Signals Priority**
Pages with more internal links pointing to them get crawled more frequently. This is why hub/pillar pages (which should have the most internal links) get crawled first and most often.

The crawl priority hierarchy:
1. Homepage (linked from every page via nav)
2. Hub pages (linked from nav + footer + all child pages)
3. Spoke pages (linked from hub + siblings)
4. Deep content (linked from 1-2 pages)

If a page has zero internal links, Google may never discover it regardless of sitemap inclusion.

---

## 7. Index Bloat Prevention

### What Is Index Bloat

Index bloat occurs when Google indexes low-quality, duplicate, or irrelevant pages that dilute your site's overall quality signals and waste crawl budget. A site with 500 indexed pages where 300 are thin/duplicate is worse off than a site with 200 high-quality indexed pages.

[GOTCH SEO AUDIT FRAMEWORK] Nathan Gotch recommends flagging any page below 500 words for investigation, and any page without positive KPIs (traffic, impressions, clicks) as a candidate for deletion, consolidation, or noindexing.

### Common Causes

**Parameter URLs**
`/products/?sort=price&color=red&page=3` -- each parameter combination creates a "new" URL that Google may index separately.

Fix: Block parameter URLs in robots.txt + use canonical tags:
```typescript
// On paginated/filtered pages, canonical always points to the base URL
alternates: {
  canonical: "https://yoursite.com/products/",  // NOT the parameterized version
}
```

**Thin Pages**
Pages with minimal content that do not provide standalone value.

[WYOMING LESSON] 50+ pages with 66-168 words. Every single one was classified as "Crawled -- currently not indexed." Fix: minimum 1,500 words per page. If a topic cannot sustain 1,500 words, merge it into a parent page as a section.

**Duplicate Content**
Multiple pages with the same or near-identical content.

Fix: Self-referencing canonicals on every page + Screaming Frog duplicate detection (enable near-duplicates in crawl settings, flag anything above 30% similarity).

**Tag and Category Pages**
Auto-generated pages that often have minimal unique content.

Fix: Either add unique introductory content to each tag/category page (200+ words) or noindex them:
```typescript
robots: { index: false, follow: true }  // follow: true so link equity flows through
```

### How to Audit for Index Bloat

**Method 1: site: Search**
```
site:yoursite.com
```
Count the results. Compare to your actual page count. If Google shows significantly more pages than you have, you have bloat.

**Method 2: GSC Coverage Report**
GSC -> Indexing -> Pages -> check "Indexed" count vs your expected page count.

Look for:
- "Indexed, not submitted in sitemap" -- pages Google found and indexed that you did not intend
- Indexed count higher than sitemap URL count -- bloat from parameter URLs or duplicates

**Method 3: Screaming Frog Crawl**
Run a full crawl, check for:
- Pages returning 200 with under 200 words
- Pages with near-duplicate content (30%+ similarity)
- Pages with no internal links pointing to them
- Pages with no organic impressions in GSC (past 16 months)

### Prevention Checklist
- [ ] All parameter URLs blocked in robots.txt
- [ ] Every page has self-referencing canonical
- [ ] No pages under 1,500 words (or merged into parent)
- [ ] Tag/category pages either have unique content or are noindexed
- [ ] Thank-you, admin, and utility pages are noindexed
- [ ] Monthly audit: compare indexed count to intended count

---

## 8. Orphan Page Prevention and Detection

### Why Orphan Pages Are the Number One Indexing Killer

An orphan page is a page with zero internal links pointing to it. Google discovers pages by following links. If no link leads to a page, Google cannot find it -- even if it is in the sitemap.

[WYOMING LESSON] 236 out of 480 pages were orphaned. Nearly half the site was invisible to Google. This single issue was the primary cause of the 6% index rate.

### The Rule

**Every page needs a minimum of 2 internal links pointing to it.** Not from the nav or footer (though those help). Two contextual body links from related pages.

### Prevention: The Simultaneous Link Protocol

When creating a new page, you MUST simultaneously:

1. **Update parent hub page** with a link to the new page in the hub's content body
2. **Add link from sibling page 1** -- a related page in the same cluster
3. **Add link from sibling page 2** -- another related page
4. **Add the new page to the sitemap** (should happen automatically with dynamic sitemap)
5. **From the new page, link to** parent hub + 2-3 siblings + conversion page

This is not optional. This is not "do it later." This happens BEFORE or AT THE SAME TIME as the page goes live.

### Monthly Orphan Audit Process

**Step 1: Crawl with Screaming Frog**
Run a full site crawl. Export the crawl data. Sort by "Unique Inlinks" column ascending. Any page with 0-1 unique inlinks is an orphan or near-orphan.

**Step 2: Cross-reference with sitemap**
```bash
# Get all URLs from sitemap
curl -s https://yoursite.com/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' | sort > /tmp/sitemap_urls.txt

# Get all URLs from crawl (internal pages returning 200)
# Export from Screaming Frog, or use a recursive curl:
curl -s https://yoursite.com/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' | while read url; do
  LINKS=$(curl -s "$url" | grep -oP 'href="(/[^"]*)"' | sed 's/href="//;s/"//' | sort -u)
  echo "$LINKS"
done | sort -u > /tmp/linked_urls.txt

# Find orphans: pages in sitemap but never linked to
comm -23 /tmp/sitemap_urls.txt /tmp/linked_urls.txt
```

**Step 3: Screaming Frog Visualization**
In Screaming Frog: Visualisations -> Crawl Tree Graph. Orphan pages appear as disconnected nodes. Any disconnected node is a page Google cannot reach through links.

**Step 4: Fix Immediately**
For each discovered orphan:
1. Identify the parent hub page -- add a link
2. Identify 2 related spoke pages -- add links from each
3. Verify the orphan page itself links to the hub and siblings
4. Re-submit the orphan URL via GSC URL Inspection

### Automated Orphan Detection Script

```bash
#!/bin/bash
# orphan-check.sh -- Find pages with insufficient internal links
# Usage: bash orphan-check.sh https://yoursite.com

DOMAIN="${1:-https://yoursite.com}"
echo "=== Orphan Page Detection: $DOMAIN ==="
echo ""

# Get all pages from sitemap
URLS=$(curl -s "$DOMAIN/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+')
TOTAL=$(echo "$URLS" | wc -l | tr -d ' ')
echo "Total pages in sitemap: $TOTAL"
echo ""

ORPHANS=0
LOW_LINKS=0

while IFS= read -r url; do
  # Count how many other sitemap pages link to this URL
  SLUG=$(echo "$url" | sed "s|$DOMAIN||")
  INLINKS=0

  while IFS= read -r check_url; do
    if [ "$check_url" != "$url" ]; then
      HAS_LINK=$(curl -s "$check_url" | grep -c "href=\"$SLUG\"")
      if [ "$HAS_LINK" -gt "0" ]; then
        INLINKS=$((INLINKS + 1))
      fi
    fi
  done <<< "$URLS"

  if [ "$INLINKS" -eq "0" ]; then
    echo "  ORPHAN (0 links): $url"
    ORPHANS=$((ORPHANS + 1))
  elif [ "$INLINKS" -lt "2" ]; then
    echo "  LOW (${INLINKS} link): $url"
    LOW_LINKS=$((LOW_LINKS + 1))
  fi
done <<< "$URLS"

echo ""
echo "=== RESULTS ==="
echo "  Orphan pages (0 internal links): $ORPHANS"
echo "  Low-link pages (1 internal link): $LOW_LINKS"
echo "  Well-linked pages: $((TOTAL - ORPHANS - LOW_LINKS))"
echo ""

if [ "$ORPHANS" -gt "0" ]; then
  echo "  CRITICAL: Fix orphan pages before publishing any new content."
  exit 1
fi
```

Note: This script is slow for large sites because it checks each page individually. For sites with 100+ pages, use Screaming Frog instead.

---

## 9. Monitoring Indexing Health

### Weekly GSC Check (Every Monday)

**Step 1: Coverage Report**
GSC -> Indexing -> Pages

Record these numbers weekly:

| Metric | What It Means | Alert Threshold |
|--------|--------------|-----------------|
| Valid (Indexed) | Pages Google has indexed | Should grow proportionally with publishing |
| Excluded | Pages Google chose not to index | Should not grow faster than Valid |
| Error | Pages Google could not process | Any increase needs immediate investigation |

**Step 2: Index Rate Calculation**
```
Index Rate = (Indexed Pages / Total Pages in Sitemap) x 100
```

| Index Rate | Status | Action |
|-----------|--------|--------|
| 90-100% | Healthy | Continue current strategy |
| 70-89% | Warning | Investigate excluded pages, fix top issues |
| 50-69% | Problem | Stop publishing, diagnose and fix before continuing |
| Below 50% | Critical | Emergency playbook (Section 11) |

[WYOMING ANTI-PATTERN] 6% index rate = catastrophic failure requiring months of recovery.

**Step 3: "Crawled Not Indexed" Trend**
This is the most important early warning signal. If "Crawled -- currently not indexed" count is growing faster than "Indexed" count:

**STOP ALL PUBLISHING IMMEDIATELY.**

This means Google is visiting your pages and deciding they are not worth indexing. Adding more pages makes the problem worse, not better. Diagnose the cause:
- Thin content (most common)
- Duplicate content
- Low site authority (need more backlinks)
- Poor internal link structure
- Soft 404s

**Step 4: Track 5 Numbers Weekly**

1. Ahrefs DR (Domain Rating)
2. Ahrefs organic traffic estimate
3. GSC impressions (last 28 days)
4. GSC clicks (last 28 days)
5. Pages published count vs pages indexed count

### Alert Thresholds

| Signal | Threshold | Action |
|--------|-----------|--------|
| Index rate drops 10%+ in one week | Critical | Investigate immediately -- possible deindexing |
| "Crawled not indexed" > 20% of total pages | Warning | Diagnose content quality and link structure |
| "Crawled not indexed" growing while "Indexed" flat | Stop publishing | Fix quality issues before adding content |
| New pages not indexed after 14 days | Warning | Check server rendering, internal links, submit via GSC |
| New pages not indexed after 30 days | Critical | Likely a technical or authority problem |

### Log File Analysis for Crawl Patterns

If you have access to server logs (Vercel provides function logs, not raw access logs -- consider CloudFlare or a log aggregation service):

```bash
# Parse access logs for Googlebot activity
grep "Googlebot" /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn | head -20
# Shows which pages Googlebot crawls most frequently

# Check crawl frequency over time
grep "Googlebot" /var/log/nginx/access.log | awk '{print $4}' | cut -d: -f1 | sort | uniq -c
# Shows crawl activity by day

# Identify pages Googlebot never visits
# Compare crawled URLs to sitemap URLs to find pages Googlebot ignores
```

### Detecting Deindexing Early

Deindexing can happen gradually (pages dropping one by one) or suddenly (entire site removed).

**Gradual deindexing signals:**
- Index count in GSC slowly declining week over week
- "Excluded" count growing while "Indexed" shrinks
- Specific pages moving from "Indexed" to "Crawled not indexed"
- Traffic dropping on pages that previously ranked

**Sudden deindexing signals:**
- `site:yourdomain.com` returns zero results
- GSC shows manual action notification
- All traffic drops to zero overnight
- [SEO FIGHT CLUB / GLEN GABE] Check ALL GSC properties (including www version) -- the deindexing may be caused by a hacked subdomain, not your main content

**Monthly deindex check:**
```bash
# Quick check: is the site still indexed?
curl -s "https://www.google.com/search?q=site:yoursite.com" | grep -c "yoursite.com"
# Should return multiple matches. Zero = possible deindexing.
```

---

## 10. Indexing for AI Crawlers

### The Landscape

AI systems discover content through TWO independent layers:
1. **Their own crawlers** (OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot) -- crawl your site directly
2. **Search engine APIs** at query time (Bing, Google, Brave) -- retrieve results from search indexes

Both layers matter. A page that is crawled by OAI-SearchBot AND indexed by Bing has TWO paths into ChatGPT answers.

### OpenAI's 4 Bots (Critical Distinction)

Source: `platform.openai.com/docs/bots`

| Bot | Purpose | Blocking Effect |
|-----|---------|----------------|
| **OAI-SearchBot** | ChatGPT Search results | **Blocks ChatGPT search citations** |
| **GPTBot** | AI model training | Blocks training only. Does NOT block ChatGPT Search |
| **ChatGPT-User** | User-initiated visits | robots.txt may not apply |
| **OAI-AdsBot** | Ad validation | Not used for search or training |

**Most SEOs block GPTBot thinking they've opted out of ChatGPT. They haven't.** OAI-SearchBot is the bot that controls ChatGPT Search visibility. For our sites: allow BOTH.

### Critical Differences from Googlebot

**1. AI Crawlers Do NOT Render JavaScript**
Ahrefs (Jan 2026): "Most LLMs don't render JavaScript. If key content or navigation only appears after JavaScript loads, there's a risk some AI crawlers won't see it."

While Googlebot renders JavaScript (with delays), AI crawlers do not. All content must be in the initial server-rendered HTML.

```bash
# This test is critical for AI crawler accessibility
curl -s https://yoursite.com/ | grep 'href="/'
# Every important page link must appear in this output
# If navigation is JavaScript-only, AI crawlers see an empty page
```

**2. AI Crawl Frequency Is Lower**
AI crawlers visit less frequently than Googlebot. This means:
- Your internal link structure determines what they find during infrequent visits
- Pages deeply buried in the architecture may never be discovered by AI crawlers
- Hub pages with comprehensive internal links are more likely to be found

**3. AI Crawlers Follow Both Links AND Sitemaps**
OAI-SearchBot and PerplexityBot follow sitemaps directly to discover content. Your sitemap is a critical discovery aid for AI crawlers, not just Google.

### robots.txt for AI Crawlers

**NEVER block AI crawlers.** Explicitly allow all of them:

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: [
      // Allow all crawlers by default
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Explicitly allow OpenAI bots
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Explicitly allow other AI bots
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
    ],
  }
}
```

### Verification

```bash
# Verify AI crawlers are NOT blocked
curl -s https://yoursite.com/robots.txt | grep -iE "OAI-SearchBot|GPTBot|ClaudeBot|PerplexityBot"
# Should return "Allow: /" for each, or nothing (not mentioned = allowed by default wildcard)

# Check server logs for AI crawler activity
grep -E "OAI-SearchBot|GPTBot|ClaudeBot|PerplexityBot|Meta-ExternalAgent" access.log | wc -l
```

### llms.txt

An optional file at `/llms.txt` or `/llms-full.txt` that provides AI crawlers with a structured overview of your site's content. Place in `/public/llms.txt`.

Ahrefs assessment: "Not especially effective and likely not worth the effort."

If you include one, format:

```
# YourSite.com

> Brief description of what this site is about.

## Main Sections

- [Topic Hub 1](https://yoursite.com/topic-1/): Description of this section
- [Topic Hub 2](https://yoursite.com/topic-2/): Description of this section

## Key Pages

- [Pricing](https://yoursite.com/pricing/): Pricing and plans
- [About](https://yoursite.com/about/): Company information
```

Do not rely on llms.txt for AI visibility. Server-rendered content + strong internal links are what matter.

### Log File Analysis for AI Bot Activity

```bash
# Track AI crawler activity
grep -E "(GPTBot|ClaudeBot|PerplexityBot|Applebot|anthropic)" /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn | head -20

# Compare AI crawler coverage vs Googlebot coverage
grep "Googlebot" /var/log/nginx/access.log | awk '{print $7}' | sort -u > /tmp/google_pages.txt
grep -E "(GPTBot|ClaudeBot|PerplexityBot)" /var/log/nginx/access.log | awk '{print $7}' | sort -u > /tmp/ai_pages.txt
echo "Pages Googlebot crawled: $(wc -l < /tmp/google_pages.txt)"
echo "Pages AI bots crawled: $(wc -l < /tmp/ai_pages.txt)"
```

---

## 11. Emergency Indexing Playbook

### When to Use This

Use this playbook when you discover mass non-indexing: index rate below 50%, or a significant number of pages in "Crawled -- currently not indexed" status.

[WYOMING ANTI-PATTERN] This playbook exists because of the WyomingLLC.co failure. 30/480 pages indexed. The recovery took months. Prevent this by following the Pre-Publishing Checklist (Section 3) from the start.

### Step 1: Stop Publishing (Day 0)

Do not publish any new content until the diagnosis is complete and the root cause is fixed. Publishing more content while the indexing pipeline is broken makes everything worse.

### Step 2: Diagnose Root Causes (Day 0-1)

Run these checks in order:

**Check 1: Server Rendering**
```bash
curl -s https://yoursite.com/ | grep 'href="/'
# If EMPTY or returns very few links: homepage links are client-side only
# FIX: Rebuild navigation as server-rendered components
```

**Check 2: Sitemap Conflicts**
```bash
# Check for static sitemaps
ls -la public/sitemap*.xml 2>/dev/null

# Check dynamic sitemap
curl -s https://yoursite.com/sitemap.xml | head -20

# Count sitemap URLs
curl -s https://yoursite.com/sitemap.xml | grep -c "<loc>"

# Check for phantom URLs (sitemap URLs that 404)
curl -s https://yoursite.com/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' | while read url; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$STATUS" != "200" ]; then
    echo "PHANTOM: $STATUS $url"
  fi
done
```

**Check 3: Accidental noindex**
```bash
# Check for noindex on key pages
for page in "" "pricing/" "about/" "your-pillar-page/"; do
  NOINDEX=$(curl -s "https://yoursite.com/$page" | grep -ci 'noindex')
  if [ "$NOINDEX" -gt "0" ]; then
    echo "NOINDEX FOUND: https://yoursite.com/$page"
  fi
done
```

**Check 4: robots.txt**
```bash
curl -s https://yoursite.com/robots.txt
# Verify: no blocks on Googlebot, Sitemap directive present, /api/ and /_next/ blocked
```

**Check 5: Orphan Pages**
Use Screaming Frog to crawl the site. Sort by "Unique Inlinks." Count pages with 0-1 inlinks.

**Check 6: Thin Content**
Use Screaming Frog "Word Count" column. Flag all pages under 500 words.

**Check 7: Trailing Slash Consistency**
```bash
# Check if trailing slash behavior is consistent
curl -s -o /dev/null -w "%{http_code} %{redirect_url}" https://yoursite.com/your-page
curl -s -o /dev/null -w "%{http_code} %{redirect_url}" https://yoursite.com/your-page/
# One should 301 redirect to the other. If both return 200: duplicate URL problem.
```

### Step 3: Priority Triage (Day 1-2)

Not all pages are equal. Fix in this order:

**Priority 1: Homepage + Navigation (Fix First)**
- Ensure homepage has server-rendered links to all hub pages
- Ensure nav and footer render server-side
- Verify with curl

**Priority 2: Pillar/Hub Pages (Fix Second)**
- Ensure each hub page has 1,500+ words
- Add internal links between hubs
- Submit each hub via GSC URL Inspection

**Priority 3: Highest-Value Spoke Pages (Fix Third)**
- Pages targeting highest-CPC keywords
- Ensure each links to and from its parent hub
- Ensure each has 1,500+ words

**Priority 4: Remaining Spoke Pages (Fix Last)**
- Work through remaining pages in order of keyword value
- Fix internal links, content depth, and technical issues

### Step 4: Fix and Resubmit (Day 2-7)

1. Fix all technical issues (server rendering, sitemap, robots.txt, trailing slashes)
2. Delete or merge all thin pages (under 500 words)
3. Add internal links to all orphaned pages (minimum 2 per page)
4. Resubmit sitemap in GSC
5. Submit top 10 priority pages via GSC URL Inspection (max ~10/day)
6. Continue submitting 10 pages per day until all priority pages are submitted

### Step 5: Build Emergency Backlinks (Day 3-14)

For a DR 0 site, Google has no external signal that the site is worth crawling deeply. Get backlinks fast:

1. Submit to 5-10 relevant directories (Toolify.ai, AlternativeTo, Product Hunt, etc.)
2. Create social profiles linking to site (Twitter/X, LinkedIn, GitHub)
3. Answer 5-10 relevant Quora/Reddit questions with genuine answers linking to specific pages
4. Send broken link outreach emails (10-20 targets)
5. Target: 5+ DR 20+ backlinks within 2 weeks

### Step 6: Monitor Recovery (Week 2+)

Check GSC daily:
- Is "Indexed" count growing?
- Are priority pages showing "URL is on Google" in URL Inspection?
- Is "Crawled not indexed" count shrinking or stable (not growing)?

### Recovery Timeline

| Scenario | Expected Recovery |
|----------|------------------|
| Technical fix only (robots.txt, noindex, sitemap) | 3-7 days |
| Technical + content fixes | 2-4 weeks |
| Technical + content + authority (backlinks) | 4-8 weeks |
| Full recovery from WyomingLLC-level failure | 2-4 months |

### Preventing Recurrence

After recovery, implement these permanent safeguards:

1. **Pre-publish checklist** (Section 3) enforced for every page
2. **Weekly monitoring** (Section 9) every Monday without fail
3. **Monthly orphan audit** (Section 8) to catch pages losing internal links
4. **INDEX GATES** between launch phases -- never skip them
5. **Automated verification** (Section 13) in CI/CD pipeline

---

## 12. Content Volume Guidelines by Site Stage

### The Master Cadence Table

| Site Stage | DR | Total Pages | Weekly Cadence | Focus | Index Gate |
|-----------|-----|-------------|----------------|-------|------------|
| Launch (Month 1) | 0-5 | 5-10 pillar + core clusters | 2-3/week | Get pillars indexed first | Wait for 100% pillar indexing |
| Foundation (Month 2-3) | 5-10 | 20-50 cluster pages | 3-5/week | Build topical authority | Monitor index rate weekly |
| Growth (Month 4-6) | 10-20 | 50-200 pages | 5-10/week | Add programmatic pages | Stop if index rate < 70% |
| Scale (Month 7+) | 20+ | 200-500+ pages | 10-20/week | Full programmatic scale | Monthly orphan audit |

### Month 1 Breakdown (The Critical Foundation)

**Week 1: Infrastructure Only**
- Day 0: All technical setup (robots.ts, sitemap.ts, trailing slash, components)
- Day 1-2: Homepage + first pillar page + About/Contact
- Day 3: Deploy, verify server rendering, submit sitemap to GSC
- Day 4-5: Submit URLs via GSC, start social profiles, first directory submissions

**Week 2: INDEX GATE 1**
- Wait for Phase 1 pages (homepage + pillar + about) to show indexed in GSC
- If not indexed by Day 10: diagnose (see Section 4 troubleshooting)
- Do NOT build more pages until INDEX GATE 1 passes

**Week 3-4: Second Wave (Only After INDEX GATE 1)**
- Build remaining pillar pages (3-4 more)
- Each pillar page fully complete: 2,500+ words, schema, FAQ, interlinked
- Publish 2-3 per week, submit each via GSC

### The Golden Ratio

**10 fully interlinked pages > 50 orphaned pages.**

This is not a suggestion. WyomingLLC.co proved this with real data. 480 pages with poor interlinking produced a 6% index rate. 10 pages with proper interlinking would have produced 100% index rate.

### When to Scale

You are ready to increase publishing cadence when ALL of these are true:

- [ ] Index rate is above 85%
- [ ] "Crawled not indexed" is not growing
- [ ] All pillar pages are indexed and showing impressions in GSC
- [ ] DR is above 5 (some external links exist)
- [ ] Internal link structure is verified (no orphans)

If any of these fail, do NOT increase cadence. Fix the bottleneck first.

### Programmatic Page Publishing

Programmatic pages (generated from data templates) can be published in larger batches because:
1. Templates should automatically handle internal linking
2. Content structure is consistent
3. Technical requirements are built into the template

BUT: Still verify after each batch:
```bash
# After publishing a batch of programmatic pages, verify:

# 1. All pages return 200
curl -s https://yoursite.com/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' | \
  tail -20 | while read url; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    echo "$STATUS $url"
  done

# 2. Each page has internal links
curl -s https://yoursite.com/new-programmatic-page/ | grep -c 'href="/'

# 3. Each page has minimum content
curl -s https://yoursite.com/new-programmatic-page/ | wc -w
# Should be 1,500+ words rendered
```

---

## 13. Index Verification Scripts

### Quick Index Status Check (Single URL)

```bash
#!/bin/bash
# check-indexed.sh -- Check if a URL is indexed by Google
# Usage: bash check-indexed.sh https://yoursite.com/page/

URL="$1"
if [ -z "$URL" ]; then
  echo "Usage: bash check-indexed.sh <url>"
  exit 1
fi

echo "Checking index status for: $URL"
echo ""

# Method 1: GSC URL Inspection (manual -- cannot be automated)
echo "1. Manual check: Go to GSC -> URL Inspection -> paste URL"
echo "   Look for: 'URL is on Google' (indexed) vs 'URL is not on Google' (not indexed)"
echo ""

# Method 2: Check page is accessible and properly configured
echo "2. Technical verification:"

STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
echo "   HTTP Status: $STATUS"
if [ "$STATUS" != "200" ]; then
  echo "   PROBLEM: Page does not return 200. Cannot be indexed."
fi

NOINDEX=$(curl -s "$URL" | grep -ci 'noindex')
echo "   Noindex tags: $NOINDEX"
if [ "$NOINDEX" -gt "0" ]; then
  echo "   PROBLEM: Page has noindex tag. Will not be indexed."
fi

CANONICAL=$(curl -s "$URL" | grep -oP 'rel="canonical"[^>]*href="[^"]*"' | head -1)
echo "   Canonical: $CANONICAL"

INLINKS=$(curl -s "$URL" | grep -c 'href="/')
echo "   Internal links on page: $INLINKS"

H1=$(curl -s "$URL" | grep -oP '(?<=<h1[^>]*>)[^<]+' | head -1)
echo "   H1: $H1"

WORDCOUNT=$(curl -s "$URL" | sed 's/<[^>]*>//g' | wc -w | tr -d ' ')
echo "   Approximate word count: $WORDCOUNT"
if [ "$WORDCOUNT" -lt "500" ]; then
  echo "   WARNING: Low word count. May be classified as thin content."
fi

echo ""
echo "3. Sitemap inclusion:"
DOMAIN=$(echo "$URL" | grep -oP 'https?://[^/]+')
IN_SITEMAP=$(curl -s "$DOMAIN/sitemap.xml" | grep -c "$URL")
echo "   In sitemap: $([ $IN_SITEMAP -gt 0 ] && echo 'YES' || echo 'NO')"

echo ""
```

### Bulk Index Status Check

```bash
#!/bin/bash
# bulk-index-check.sh -- Check indexing readiness for all sitemap URLs
# Usage: bash bulk-index-check.sh https://yoursite.com

DOMAIN="${1:-https://yoursite.com}"
echo "=== Bulk Indexing Status Check: $DOMAIN ==="
echo "Date: $(date)"
echo ""

# Get all URLs from sitemap
URLS=$(curl -s "$DOMAIN/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+')
TOTAL=$(echo "$URLS" | wc -l | tr -d ' ')

PASS=0
FAIL=0
ERRORS=""

echo "Checking $TOTAL pages..."
echo ""

while IFS= read -r url; do
  ISSUES=""

  # Check HTTP status
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$STATUS" != "200" ]; then
    ISSUES="$ISSUES [HTTP $STATUS]"
  fi

  # Check for noindex
  NOINDEX=$(curl -s "$url" | grep -ci 'noindex')
  if [ "$NOINDEX" -gt "0" ]; then
    ISSUES="$ISSUES [NOINDEX]"
  fi

  # Check for H1
  H1=$(curl -s "$url" | grep -c '<h1')
  if [ "$H1" -eq "0" ]; then
    ISSUES="$ISSUES [NO H1]"
  fi

  # Check for internal links in body
  LINKS=$(curl -s "$url" | grep -c 'href="/')
  if [ "$LINKS" -lt "3" ]; then
    ISSUES="$ISSUES [LOW LINKS: $LINKS]"
  fi

  if [ -z "$ISSUES" ]; then
    PASS=$((PASS + 1))
  else
    FAIL=$((FAIL + 1))
    ERRORS="$ERRORS\n  FAIL: $url $ISSUES"
  fi

done <<< "$URLS"

echo ""
echo "=== RESULTS ==="
echo "  Total pages: $TOTAL"
echo "  Ready for indexing: $PASS"
echo "  Issues found: $FAIL"

if [ -n "$ERRORS" ]; then
  echo ""
  echo "=== PAGES WITH ISSUES ==="
  echo -e "$ERRORS"
fi

echo ""
INDEX_RATE=$((PASS * 100 / TOTAL))
echo "  Indexing readiness rate: ${INDEX_RATE}%"

if [ "$INDEX_RATE" -lt "90" ]; then
  echo ""
  echo "  WARNING: Readiness rate below 90%. Fix issues before requesting indexing."
  exit 1
else
  echo ""
  echo "  All clear. Pages are ready for indexing."
  exit 0
fi
```

### Post-Deploy SEO Verification (From skills/23-verification-scripts.md)

```bash
#!/bin/bash
# verify-seo.sh -- Run after every deployment
# Usage: bash scripts/verify-seo.sh https://yourdomain.com

DOMAIN="${1:-https://yourdomain.com}"
PASS=0
FAIL=0

echo ""
echo "=== SEO Verification: $DOMAIN ==="
echo ""

check() {
  local name="$1"
  local result="$2"
  local expected="$3"
  if [ "$result" -ge "$expected" ] 2>/dev/null || [ "$result" = "$expected" ] 2>/dev/null; then
    echo "  PASS -- $name ($result)"
    PASS=$((PASS+1))
  else
    echo "  FAIL -- $name (got: $result, expected: $expected)"
    FAIL=$((FAIL+1))
  fi
}

# 1. Homepage returns 200
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/")
check "Homepage HTTP status" "$STATUS" "200"

# 2. robots.txt accessible
ROBOTS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/robots.txt")
check "robots.txt accessible" "$ROBOTS" "200"

# 3. robots.txt has Allow directive
ROBOTS_ALLOW=$(curl -s "$DOMAIN/robots.txt" | grep -c "Allow")
check "robots.txt has Allow directive" "$ROBOTS_ALLOW" "1"

# 4. Sitemap accessible
SITEMAP=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/sitemap.xml")
check "sitemap.xml accessible" "$SITEMAP" "200"

# 5. Sitemap has pages
SITEMAP_PAGES=$(curl -s "$DOMAIN/sitemap.xml" | grep -c "<loc>")
check "sitemap.xml has pages" "$SITEMAP_PAGES" "1"

# 6. Homepage has server-rendered internal links
INTERNAL_LINKS=$(curl -s "$DOMAIN/" | grep -c 'href="/')
check "Homepage server-rendered links" "$INTERNAL_LINKS" "5"

# 7. Homepage has H1
HAS_H1=$(curl -s "$DOMAIN/" | grep -c '<h1')
check "Homepage has H1" "$HAS_H1" "1"

# 8. No noindex on homepage
NOINDEX=$(curl -s "$DOMAIN/" | grep -c 'noindex')
if [ "$NOINDEX" -eq "0" ]; then
  echo "  PASS -- Homepage not noindexed"
  PASS=$((PASS+1))
else
  echo "  FAIL -- Homepage has noindex tag (CRITICAL)"
  FAIL=$((FAIL+1))
fi

# 9. No static sitemap conflicts
STATIC_SITEMAP=$(ls public/sitemap*.xml 2>/dev/null | wc -l | tr -d ' ')
if [ "$STATIC_SITEMAP" -eq "0" ]; then
  echo "  PASS -- No static sitemap conflicts"
  PASS=$((PASS+1))
else
  echo "  FAIL -- Static sitemap file found in /public/ (will conflict with dynamic sitemap)"
  FAIL=$((FAIL+1))
fi

# 10. Sitemap URLs match trailing slash convention
SLASH_MISMATCH=$(curl -s "$DOMAIN/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+' | grep -cvE '/$|\.xml$')
if [ "$SLASH_MISMATCH" -eq "0" ]; then
  echo "  PASS -- All sitemap URLs have trailing slashes"
  PASS=$((PASS+1))
else
  echo "  WARN -- $SLASH_MISMATCH sitemap URLs missing trailing slash"
  FAIL=$((FAIL+1))
fi

echo ""
echo "=== RESULTS: $PASS passed, $FAIL failed ==="
echo ""
```

---

## 14. Red Flags -- Stop Publishing Immediately

These signals from Google Search Console mean something is fundamentally broken. **STOP publishing new content and fix the underlying issue first.**

| Signal | What It Means | Action |
|--------|-------------|--------|
| "Discovered - not indexed" growing | Google sees pages but won't index them | Fix technical issues, improve content quality, add internal links |
| "Crawled - not indexed" growing | Google crawled but judged content not worth indexing | Content quality issue -- expand thin pages, add unique value |
| Crawl rate dropping in GSC | Google reducing crawl budget for your site | Site quality signal problem -- audit all content |
| Index coverage declining | Google removing previously indexed pages | Serious quality issue -- stop everything, full audit |
| Redirect chains in GSC | Multiple hops between URLs | Fix redirects to single-hop 301s |
| Duplicate content warnings | Two URLs with same content | Fix canonicals, merge duplicate pages |
| "Not indexed" > 20% of total pages | Systemic indexing failure | FULL STOP -- run the Recovery Protocol (Section 11) |

### The STOP Protocol

When "discovered not indexed" count exceeds 20% of total pages:

1. **STOP publishing immediately.** Not one more page until the ratio improves.
2. **Run the post-deploy verification script** (Section 13) to identify technical issues.
3. **Check the 7 Deadly Sins** (Section 1) -- which ones are you committing?
4. **Fix in priority order:** sitemaps -> canonicals -> orphans -> thin content -> crawl paths.
5. **Monitor weekly.** Only resume publishing when "not indexed" ratio drops below 15%.
6. **Resume at 50% of previous cadence.** If you were doing 10/week, restart at 5/week.

---

## 15. The Correct Launch Protocol (Use for Every New Site)

This protocol encodes every lesson from WyomingLLC.co. Follow it exactly.

### Phase 1: Foundation (Week 1-2)
```
- Publish 5-10 pages: homepage + pillar pages + pricing
- Verify: single dynamic sitemap, correct robots.txt, consistent canonicals
- Submit sitemap to GSC
- Submit homepage + pillars to IndexNow
- Wait for initial crawl and indexing (3-7 days)
- CHECKPOINT: Are pillar pages indexed? If not, fix technical issues first.
  DO NOT proceed until pillars are indexed.
```

### Phase 2: Core Content (Week 3-6)
```
- Publish 8-10 pages per week: primary cluster pages
- Each new page MUST have 2+ internal links from existing indexed pages
- Submit each batch to IndexNow after publishing
- Monitor GSC weekly: check "discovered not indexed" count
- CHECKPOINT: Are cluster pages indexing within 7 days? If not, investigate.
```

### Phase 3: Hub Pages (Week 4-5, concurrent with Phase 2)
```
- Create hub/index pages for each content category
- Hub pages link to ALL existing child pages
- Add hub pages to navbar/main navigation
- Submit hub pages to IndexNow
- CHECKPOINT: Hub pages must be indexed before proceeding to Phase 4.
```

### Phase 4: Scale (Week 7+)
```
- Publish 10-15 support/programmatic pages per week
- Every page published must already be linked from its hub page
- Add sibling links between related pages
- Submit in batches of 10-15 to IndexNow
- Monitor: if "discovered not indexed" grows, STOP and fix before continuing
```

### Phase 5: Ongoing Monitoring
```
- Weekly: Check GSC coverage report
- If "discovered not indexed" > 20% of total pages: STOP publishing, fix issues
- Monthly: Verify no orphaned pages (every page has 2+ incoming links)
- Monthly: Verify sitemap URL count matches actual page count
- Monthly: Verify no canonical URL mismatches
```

---

## Summary: The 7 Deadly Sins of Indexing

Never commit any of these. Each one cost WyomingLLC.co weeks of lost indexing time.

1. **Duplicate sitemaps** -- Never run static + dynamic sitemaps together
2. **Bulk publishing** -- Never publish 100+ pages in a week on a new site
3. **Orphaned pages** -- Never publish a page without internal links TO it
4. **Thin content** -- Never publish under 1,500 words
5. **Canonical chaos** -- Never mix trailing slash / no trailing slash
6. **No priority strategy** -- Never submit all pages at equal priority
7. **No hub pages** -- Never publish child pages before their parent hub exists

if [ "$FAIL" -gt "0" ]; then
  echo "  ACTION REQUIRED: Fix all failures before requesting GSC indexing."
  exit 1
else
  echo "  All checks passed. Safe to request indexing in GSC."
  exit 0
fi
```

### Automated Monitoring Setup

For ongoing monitoring, create a cron job that runs weekly:

```bash
# Add to crontab: crontab -e
# Run every Monday at 9am
0 9 * * 1 /path/to/scripts/weekly-check.sh https://yoursite.com >> /var/log/seo-check.log 2>&1
```

Weekly check script:
```bash
#!/bin/bash
# weekly-check.sh -- Monitor indexing health weekly
# Usage: bash scripts/weekly-check.sh https://yourdomain.com

DOMAIN="${1:-https://yourdomain.com}"
echo ""
echo "=== Weekly Indexing Health Check: $DOMAIN ==="
echo "Run date: $(date)"
echo ""

# Check all sitemap pages return 200
echo "Checking sitemap pages..."
URLS=$(curl -s "$DOMAIN/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+')
TOTAL=$(echo "$URLS" | wc -l | tr -d ' ')
FAIL_COUNT=0
NOINDEX_COUNT=0

while IFS= read -r url; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$STATUS" != "200" ]; then
    echo "  HTTP $STATUS -- $url"
    FAIL_COUNT=$((FAIL_COUNT+1))
  fi

  # Check for accidental noindex
  NOINDEX=$(curl -s "$url" | grep -ci 'noindex')
  if [ "$NOINDEX" -gt "0" ]; then
    echo "  NOINDEX -- $url"
    NOINDEX_COUNT=$((NOINDEX_COUNT+1))
  fi
done <<< "$URLS"

echo ""
echo "  Total pages in sitemap: $TOTAL"

if [ "$FAIL_COUNT" -eq "0" ]; then
  echo "  All pages return 200"
else
  echo "  $FAIL_COUNT pages have HTTP errors -- FIX BEFORE ADDING NEW CONTENT"
fi

if [ "$NOINDEX_COUNT" -gt "0" ]; then
  echo "  WARNING: $NOINDEX_COUNT pages have noindex tags but are in sitemap"
fi

echo ""
echo "=== Manual GSC Checks Required ==="
echo "  1. Indexing > Pages > Indexed count (should be growing or stable)"
echo "  2. Indexing > Pages > 'Crawled not indexed' (must NOT be growing)"
echo "  3. Calculate index rate: Indexed / Total sitemap pages"
echo "  4. Core Web Vitals > any new issues?"
echo "  5. Manual Actions > any penalties? (must be zero)"
echo "  6. Security Issues > any problems? (must be zero)"
echo ""
echo "  Record these numbers in your weekly tracking spreadsheet."
echo ""
```

---

## Quick Reference: The 10 Indexing Commandments

1. **Never publish a page without 2+ internal links pointing to it.** (WyomingLLC: 236 orphans)
2. **All navigation must be server-rendered.** Test with curl. (WyomingLLC: client-side only links)
3. **One dynamic sitemap only.** Delete all static XML files. (WyomingLLC: 521 phantom URLs)
4. **Minimum 1,500 words per page.** Thin pages get classified as low-quality. (WyomingLLC: 66-word pages)
5. **Start backlink building in Week 1.** DR 0 = minimal crawl budget. (WyomingLLC: no backlinks for months)
6. **Lock trailing slash convention on Day 1.** Never change. (WyomingLLC: mixed formats)
7. **Use INDEX GATES between launch phases.** Never skip. Wait for indexing confirmation before scaling.
8. **Monitor weekly.** If "Crawled not indexed" grows faster than "Indexed" -- STOP publishing.
9. **Never block AI crawlers.** GPTBot, ClaudeBot, PerplexityBot must all be allowed.
10. **10 interlinked pages > 50 orphaned pages.** Quality and connectivity beat quantity every time.

---

## Relationship to Other Skills

- **12-technical-seo.md** -- Covers the technical implementation details (server components, metadata, schema, robots.ts, sitemap.ts). This file covers the strategy and monitoring.
- **08-internal-linking.md** -- Covers internal link strategy. This file covers how internal links affect indexing specifically.
- **16-content-audit.md** -- Covers auditing existing content. This file covers auditing specifically for indexing health.
- **18-lessons-learned.md** -- Covers all WyomingLLC.co failures. This file focuses specifically on indexing failures and prevention.
