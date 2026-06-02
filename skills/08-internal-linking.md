---
skill: internal-linking
description: Apply when adding, auditing, or planning internal links — contextual body links, footer links, breadcrumbs, sibling navigation, anchor text decisions, orphan page fixes, hub-and-spoke architecture, or verifying server-rendered links. Triggers on internal link, footer, breadcrumb, anchor text, orphan page, hub-and-spoke, sibling link, link audit, Related Tools, curl grep href.
version: 1.0.0
last-verified: 2026-04
source: seo-master/06-internal-linking.md + skills/08-internal-linking.md (Ahrefs "Internal Links for SEO" Aug 2023, IstanbulBogaziciEnstitu case study, wyomingllc.co real deployment lessons)
load: always
triggers: internal link, footer link, breadcrumb, anchor text, orphan page, hub-and-spoke, link audit, sibling link, Related Tools, server-rendered link, curl grep href, link density, PageRank
---

# Internal Linking Architecture

Internal linking is the second most important ranking factor after content quality in the semantic SEO framework. It is also a primary signal for AI/LLM crawlers building knowledge graphs.

John Mueller, Google: "Internal linking is super critical for SEO. It's one of the biggest things you can do on a website to guide Google and visitors to the pages that you think are important."

Ahrefs data: **Pages with at least one exact-match anchor text internal link had at least 5x more traffic than pages without.**

Gary Illyes, Google: "Google still uses PageRank as a signal after 18+ years."

Internal links serve three functions:
1. **Help Google find new pages** -- if a page has no internal links pointing to it, Google may never find it
2. **Pass PageRank** -- the more internal links a page has, the higher its PageRank
3. **Tell Google what a page is about** -- through anchor text context

---

## The Hub-and-Spoke Model (The Only Model)

This is the only internal linking model to use. No exceptions.

```
                    PILLAR PAGE (Hub)
                   /    |    |    \
                  /     |    |     \
          Cluster 1  Cluster 2  Cluster 3  Cluster 4
            /  \       |   \       |         |  \
         S1    S2     S3    S4    S5        S6   S7
```

### Link Flow Rules

- **Pillar** links to ALL cluster pages (outbound hub links)
- **Clusters** link BACK to pillar (return spoke links)
- **Clusters** link to 3-5 RELATED clusters (cross-spoke links)
- **Support pages** link UP to parent cluster
- **Parent cluster** links DOWN to support pages
- **Every page reachable within 3 clicks from homepage** -- this is a hard rule, not a guideline

### Why 3 Clicks Maximum

Google's crawl budget is finite. Pages buried 4+ clicks deep get crawled less frequently, index slower, and rank worse. For AI crawlers (GPTBot, ClaudeBot, PerplexityBot), shallow link depth means faster discovery and more accurate knowledge graph construction.

---

## The Critical Rule: Server-Rendered Links Only

**Every internal link that Google needs to follow MUST appear in the initial server-rendered HTML.**

[WYOMINGLLC.CO LESSON] The wyomingllc.co homepage had ZERO crawlable internal links because they were rendered with JavaScript only. Googlebot could not follow them. Pages were published but never indexed.

Verify after every deployment:
```bash
curl -s https://yourdomain.com/ | grep 'href="/'
```

Every important page URL must appear in this output. If a URL is missing, Google cannot crawl to it.

**In Next.js App Router:**
- Server components render links server-side -- crawlable
- `"use client"` components render links client-side only -- NOT crawlable

Navigation, footer, and category hub links: always in server components.
Tool widget interactions: fine in client components -- these do not need to be crawled.

---

## Anchor Text Rules

### Rule 1: Match the Target Page's H1

The anchor text must describe what the target page is about, using the same language as the target page's H1.

```
TARGET PAGE H1: "How to Form a Wyoming LLC as a Non-Resident"

GOOD ANCHOR: "form a Wyoming LLC as a non-resident"
BAD ANCHOR:  "click here"
BAD ANCHOR:  "learn more"
BAD ANCHOR:  "this guide"
BAD ANCHOR:  "read this"
BAD ANCHOR:  "here"
BAD ANCHOR:  "this"
```

### Rule 2: Consistency Across the Entire Site

Use the SAME anchor text for the same target page everywhere it is linked. Varying anchors confuse Google's semantic signal.

```
Page A links to /pricing/ with anchor "Wyoming LLC pricing"
Page B links to /pricing/ with anchor "Wyoming LLC pricing"
Page C links to /pricing/ with anchor "Wyoming LLC pricing"

NOT:
Page A: "our pricing"
Page B: "see costs"
Page C: "pricing page"
```

One canonical anchor per target URL. Standardize it and never deviate.

### Rule 3: Place Links in Content Body

Links in context carry more semantic weight than navigation links. The surrounding sentence should explain WHY you are linking.

```
GOOD: "The Wyoming Secretary of State charges $100 for filing. See the complete
       Wyoming LLC cost breakdown for all first-year and ongoing expenses."

BAD:  "Related: Wyoming LLC Cost | Wyoming LLC Guide | Pricing"
```

Contextual links in body content are the highest-value internal links. Sidebar, footer, and nav links still matter but carry weaker contextual signal.

### Rule 4: No Orphan Pages

Every page must receive at least 2 internal links from other pages. The topical map defines which pages link to which. Check for orphans monthly. An orphan page is invisible to Google and invisible to AI crawlers.

### Rule 5: Link from High-Authority Pages to New Pages

Pages linked from high-authority hub pages index faster and rank faster (proven in the IstanbulBogaziciEnstitu case study). When publishing a new page, immediately add links to it from relevant pillar and cluster pages. This is not optional -- it is part of the publishing protocol.

### Rule 6: Only Link Relevant Pages

Do not link to unrelated topics. Irrelevant outgoing links dilute the page's semantic focus and confuse the topical signal you are building.

```
PAGE ABOUT: Wyoming LLC Costs

GOOD LINKS: pricing, annual fees, formation guide, competitor comparison
BAD LINKS:  blog post about office furniture, unrelated country guide
```

---

## Link Density Targets

| Page Type | Internal Links Per Page | Outbound to Other Domains |
|-----------|------------------------|--------------------------|
| Pillar | 15-25 | 3-5 (.gov authority sources) |
| Cluster | 10-15 | 2-3 (.gov authority sources) |
| Support | 8-12 | 1-2 (.gov authority sources) |
| Pricing | 10-15 | 1-2 |
| FAQ | 12-18 (each answer links somewhere) | 2-3 |

### Links Per 1,000 Words

Target: **10+ internal links per 1,000 words** of content.

### Maximum Links Per Page

Hard cap: **25 internal links per page**. Beyond 25, PageRank dilution outweighs the benefit. If a page needs more than 25, it is trying to do too much -- split it.

---

## Link Placement Priority

| Placement | Priority | Why |
|-----------|----------|-----|
| First paragraph | **Highest** | Establishes context early, crawled first by both Google and AI bots |
| Within H2 answer sections | **High** | Contextually relevant, high semantic weight |
| In comparison tables | **High** | Natural reference points, data-rich context |
| In FAQ answers | **Medium** | Each answer is a linking opportunity |
| In CTA sections | **Medium** | Supports conversion path |
| In "Related" footer | **Lowest** | Weak contextual signal, last resort only |

### Natural Link Insertion Pattern

```
PARAGRAPH ABOUT COSTS:
"A Wyoming LLC costs $297 for the complete formation package. This includes the
$100 state filing fee, first-year registered agent service, and EIN application.
For a detailed breakdown, see the complete Wyoming LLC cost guide. Non-residents
can learn about the full formation process in our step-by-step formation guide."

LINKS PLACED:
- "Wyoming LLC cost guide" -> /wyoming-llc-cost/
- "step-by-step formation guide" -> /how-to-form-wyoming-llc-non-resident/
```

The first paragraph of every page should contain at least 1 internal link. This is the highest-priority placement because crawlers process it first.

---

## Types of Internal Links

### 1. Navigational Links (Header/Menu)
Always server-rendered. Links to homepage, main category pages, key pages. These are some of the most important internal links on the site.

### 2. Contextual Links (Body Content)
Links in the main body of content used to expand on ideas, refer to resources, or direct readers to relevant content. These carry the strongest semantic signal.

### 3. Breadcrumb Links
Gary Illyes, Google: "Google treats them as normal links in PageRank computation."

Implement breadcrumbs on every page:
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/formation/">Formation</a></li>
    <li>Wyoming LLC for UK Residents</li>
  </ol>
</nav>
```

### 4. Footer Links
Footer is ALWAYS server-rendered. Use it for comprehensive link coverage:
- Links to all pillar/category hub pages
- Links to About, Contact, Privacy Policy
- Site name/logo linked to homepage

### 5. Sibling Links
Navigation between related pages in a series (country guides, state comparisons, tool categories).

---

## Sibling Links / Navigation Component

For pages that are part of a series (state comparisons, country guides, niche pages), implement sibling navigation:

```html
<nav class="sibling-links">
  <a href="/wyoming-llc-uk/">Wyoming LLC for UK Residents</a>
  <a href="/wyoming-llc-canada/">Wyoming LLC for Canadians</a>
  <a href="/wyoming-llc-australia/">Wyoming LLC for Australians</a>
</nav>
```

### Sibling Link Rules

1. Show **3-6 related sibling pages** maximum -- not all siblings, just the most relevant
2. Place at **bottom of content, above FAQ** section
3. Use **descriptive anchor text** (not just country names or state abbreviations)
4. **Rotate/vary siblings** so all pages eventually link to each other over time
5. Group siblings by relevance (same region, same category, same use case)

---

## Internal Link Mapping Table

Use this format to plan links for every new page BEFORE writing content:

### Links FROM This Page (outbound)
| Target Page | Anchor Text | Section Placed In |
|------------|-------------|-------------------|
| /pricing/ | Wyoming LLC pricing | Hero/CTA |
| /wyoming-llc-cost/ | complete cost breakdown | Costs section |
| /reviews/ | client reviews | Social proof |

### Links TO This Page (inbound from other pages)
| Source Page | Anchor Text | Where to Add |
|------------|-------------|-------------|
| / (homepage) | [page topic] | relevant section |
| /pillar-page/ | [exact H1 anchor] | body content |
| /related-cluster/ | [descriptive anchor] | relevant paragraph |

Plan both directions before publishing. This prevents orphan pages and ensures immediate link equity.

---

## What to Do When Publishing a New Page (Immediate Linking Protocol)

This is mandatory. Execute within 24 hours of publishing:

1. **Add the new page to the site footer** (server-rendered)
2. **Add the new page to its category hub / pillar page**
3. **Find 2-3 existing high-authority pages** where this topic is mentioned or relevant
4. **Add contextual links from those pages to the new page** using the new page's H1 as anchor text
5. **Add breadcrumb navigation** on the new page
6. **Add 8+ outbound internal links** from the new page to relevant existing pages
7. **Add sibling navigation** if the page is part of a series
8. **Verify the new page appears in server-rendered HTML:**
   ```bash
   curl -s https://yourdomain.com/ | grep 'href="/new-page-slug"'
   ```
9. **Submit the URL to Google Search Console**
10. **Add the page to the sitemap**

If any of these steps are skipped, the page will index slower and rank worse.

---

## Common Linking Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| "Click here" or "learn more" anchors | Zero semantic signal to Google and AI crawlers | Use descriptive anchors matching target page H1 |
| Links only in nav/sidebar | Weak context signal, minimal semantic value | Add links within body content paragraphs |
| 50+ links on one page | Dilutes PageRank across too many targets | Cap at 25 internal links per page |
| No links to new pages | Slow/no indexing, orphan page | Add 2-3 links from existing high-authority pages immediately |
| Linking to 404s | Wasted link equity, bad UX, crawl budget waste | Audit monthly, fix or redirect broken links |
| Random anchor text variation | Confuses ranking signal, weakens semantic clarity | Standardize one anchor per target URL across entire site |
| Linking unrelated pages | Dilutes semantic focus, confuses topical signal | Only link contextually relevant pages |
| JavaScript-only links | Googlebot cannot follow, pages never indexed | Server-render all navigation and contextual links |
| Orphan pages (0 incoming links) | Invisible to Google and AI crawlers | Every page needs minimum 2 incoming internal links |
| Too few links per page | Missed PageRank distribution, weak connectivity | Meet density targets: 10+ links per 1,000 words |

---

## How Internal Links Affect AI Crawling and Citation

AI/LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Google AI) use internal link structure to:

1. **Discover content** -- AI crawlers follow internal links just like Googlebot. No links = no discovery.
2. **Understand content hierarchy** -- hub-and-spoke structure tells AI systems which pages are authoritative (hubs) vs. supporting (spokes). AI systems weight authoritative pages more heavily in training data.
3. **Build entity relationships** -- anchor text tells AI systems how concepts relate. "Wyoming LLC cost breakdown" linking to /cost/ teaches the AI that your cost page is the authority on that entity.
4. **Determine citation candidates** -- when AI systems generate answers, they cite pages they can confidently attribute information to. Pages with strong internal link signals (many incoming links, consistent anchor text) are more likely to be cited.
5. **Assess topical completeness** -- AI systems evaluate whether a site comprehensively covers a topic by traversing its internal link graph. Complete hub-and-spoke networks signal topical authority.

**Key insight:** The same internal linking practices that help Google also help AI systems. There is no separate "AI linking strategy." Good internal linking is good AI optimization.

---

## Monthly Link Audit Checklist

Run this audit on the first of every month:

- [ ] **No orphan pages** -- every page has 2+ incoming internal links
- [ ] **No broken internal links** -- zero 404s in internal link targets
- [ ] **Pillar pages link to all their cluster pages** -- no missing spokes
- [ ] **All cluster pages link back to their pillar** -- return links intact
- [ ] **New pages published this month have incoming links** from existing pages
- [ ] **Anchor text consistency** -- same anchor for same target across entire site
- [ ] **No pages with 0 outgoing internal links** -- every page links out
- [ ] **Link density meets target** -- 10+ internal links per 1,000 words
- [ ] **Sibling navigation present** on all series pages (country guides, state comparisons)
- [ ] **Homepage links to all pillar pages** -- direct path to every hub
- [ ] **Footer links are server-rendered** -- verify with curl
- [ ] **Breadcrumbs present on every non-homepage page**
- [ ] **No page exceeds 25 internal links** -- check for over-linked pages
- [ ] **All links verified crawlable** -- run `curl -s [URL] | grep 'href="/'` on key pages

### Monthly Audit Process

```bash
# Step 1: Check homepage links are server-rendered
curl -s https://yourdomain.com/ | grep 'href="/'

# Step 2: Check key pillar pages for outbound links
curl -s https://yourdomain.com/pillar-page/ | grep 'href="/' | wc -l

# Step 3: Look for orphan pages in sitemap not linked from any page
# Compare sitemap URLs against internal link targets
```

Use Ahrefs Site Audit or Screaming Frog monthly to automate orphan page detection and broken link discovery at scale.

---

## Quick Reference: Link Targets by Page Type

| Page Type | Links OUT | Links IN (minimum) | Sibling Links | Breadcrumb |
|-----------|-----------|--------------------|----|-----|
| Pillar | 15-25 (to all clusters) | 5+ (from clusters + homepage) | No | Yes |
| Cluster | 10-15 (to pillar + siblings + support) | 3+ (from pillar + related clusters) | 3-5 cross-spoke | Yes |
| Support | 8-12 (to parent cluster + siblings) | 2+ (from parent cluster + 1 other) | 3-6 sibling support pages | Yes |
| FAQ | 12-18 (each answer links out) | 2+ | No | Yes |
| Pricing | 10-15 | 3+ (from pillar + clusters) | No | Yes |
| Programmatic | 8-12 (to parent + siblings) | 2+ (from parent + 1 other) | 3-6 sibling pages | Yes |
