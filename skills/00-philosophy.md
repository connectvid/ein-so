---
skill: 00-philosophy
description: Core SEO philosophy, unbreakable rules, and hard-won lessons. Load FIRST in every session — all other skills depend on this.
version: 1.0.0
last-verified: 2026-04
source: Ahrefs (Jan 2026) + Koray Tugberk Gubur Semantic SEO + wyomingllc.co (6 months real data, real failures) + 01-semantic-seo-framework.md
load: always
triggers: philosophy, rules, commandments, principles, priority, truth stack, non-negotiable, mindset, conflict, hierarchy
---

# Skill 00: Philosophy & Unbreakable Rules

## Why This File Exists

This is the single source of truth for how we build websites that rank on both Google and LLMs. Every rule here was either:

1. **Validated by Ahrefs research** (data, not opinion)
2. **Proven by Koray Tugberk Gubur's topical authority framework** (real case studies: 0 to 128k traffic with zero backlinks)
3. **Learned the hard way** from 6 months building wyomingllc.co — marked with [WYOMING LESSON]

The [WYOMING LESSON] tags exist because those mistakes cost weeks of rework, lost customers, and stalled rankings. They are not theoretical warnings. They are scars.

---

## The Core Thesis

**Topical authority — not backlinks — is the primary ranking determinant in modern search.**

A site that comprehensively covers every angle of a topic, with semantically precise interlinked content, forces Google to recognize it as the authority source — regardless of domain age, backlinks, or technical perfection.

### What "Comprehensively" Means

Every entity, every attribute, every audience segment, every comparison, every use case, every process step — each on its own URL if search volume exists. One page per macro context. No gaps. No thin stubs. No "we'll expand later."

### Proof This Works (Real Case Studies)

| Site | Result | Method |
|------|--------|--------|
| Getwordly.com | 0 to 128,000 organic traffic in 123 days | Zero backlinks. Zero technical SEO. Pure semantic content network. |
| Interingilizce.com | 200,000+ organic traffic/month in 6 months | Topical authority framework |
| Sunnyvalley.io (SaaS) | 637.5% YoY growth, 1,000+ organic clicks/day | Two topical maps connected to conversion pages |
| Heavy Metallurgy B2B (NASDAQ) | 115% organic click increase + 97.6% impression increase in 3 months YoY | Semantic content network |
| ForexSuggest.com | 425% organic growth in 6 months across 41 languages | Synchronized multilingual content |
| IstanbulBogaziciEnstitu.com | 450% increase in 3 months | Semantic content network |
| WyomingLLC.co | DR=0, ranking on Google + 53% traffic from AI systems | Near-zero backlinks, topical authority + AEO |

### What This Means for Every Decision

When you face a choice between "more backlinks" and "more topical coverage," choose topical coverage. When you face a choice between "publish fast" and "publish complete," choose complete. Backlinks accelerate what topical authority builds — they do not replace it.

---

## The 10 Commandments

These are non-negotiable. Break any of them and you are setting up future rework. Every one has been validated by either data or painful experience.

### 1. Map everything before writing anything.

Create the full topical map + keyword-to-URL spreadsheet + content briefs BEFORE writing one word.

[WYOMING LESSON] The wyomingllc.co project created 7 cannibalization clusters and 236 orphaned pages because we skipped this step. Fixing it required two full rework phases, touching every page on the site.

**The map includes:** every entity, every attribute, every audience segment, every comparison, every use case, every process step. Each gets its own URL if search volume exists. The map IS the site architecture.

### 2. No page under 1,500 words.

If you cannot write 1,500 words on a topic, merge it into a parent page or do not create it.

[WYOMING LESSON] We launched 50+ country pages at 66-168 words. Google saw thin content. We had to expand ALL of them across two full rework phases — Phase A and Phase B — adding 47K lines across 78 pages. This was the single most expensive mistake in the project.

**Minimum word counts by page type:**

| Page Type | Minimum | Ideal |
|-----------|---------|-------|
| Hub/Pillar | 3,000 | 3,500+ |
| Spoke/Cluster | 1,500 | 2,000+ |
| Comparison | 2,500 | 3,000+ |
| Country/Region | 2,000 | 2,500+ |
| Tool page | 1,000 | 1,500+ |
| Blog post | 1,000 | 1,200+ |

### 3. One keyword = one URL. No exceptions.

Before creating any page, check: does another page on this site already target this keyword? Use the keyword-to-URL map as the single source of truth.

[WYOMING LESSON] We created 20 pages all targeting "bank account for Wyoming LLC." This destroyed topical clarity and created 7 major cannibalization clusters. Google could not determine which page to rank, so it ranked none of them.

**Anti-pattern from Koray framework:** Publishing pages on the same macro context = cannibalization. This is Anti-Pattern #1 in semantic SEO.

### 4. Every page links to 3+ other pages AND has 3+ pages linking to it.

When you create a page, SIMULTANEOUSLY add it to its hub page, add it to the sitemap, and link from 2-3 related pages.

[WYOMING LESSON] 236 pages were orphaned — Google could not discover them. We had to manually audit and add every missing hub link. This took an entire rework phase.

**Minimum internal links per page type:**

| Page Type | Outbound Links Minimum | Inbound Links Minimum |
|-----------|----------------------|---------------------|
| Hub/Pillar | 15+ (to all spokes) | 5+ |
| Spoke/Cluster | 8+ | 3+ |
| Blog post | 5+ | 3+ |
| Service page | 5+ | 3+ |

### 5. Hub pages link to ALL their spokes. Check weekly.

Hub completeness is not optional. Every time a spoke is created, the hub must be updated in that same session.

[WYOMING LESSON] Our hub pages were missing links to 236 spoke pages. Pages linked earlier in a content network index faster and rank faster (proven by IstanbulBogaziciEnstitu.com case study). Pages the hub does not link to may never get crawled.

**Network design rule:** Every page reachable within 3 clicks from homepage. Pillar pages link to ALL their cluster pages. Cluster pages link back to pillar AND to 3-5 related clusters.

### 6. Design the conversion funnel before writing content.

Every page needs: above-fold CTA, sticky CTA on scroll, transparent pricing, WhatsApp within 1 tap on mobile.

[WYOMING LESSON] A real user (JPCheng) spent 2+ hours on site, asked 25 WhatsApp questions, and did not buy. The site was built for reading, not buying. Root causes: no sticky CTA, CTA below fold on mobile, pricing discrepancy ($60 vs $100) destroyed trust, no "What's Included" breakdown.

**The conversion template (every page):**

```
1. Hero: H1 + 1-sentence value prop + PRIMARY CTA (above fold, mobile-visible)
2. Quick Answer: 40-word answer to main question
3. Table of Contents (auto-generated)
4. Core Sections with question H2s
5. Pricing section with FULL TRANSPARENCY breakdown:
   - What you pay (Year 1)
   - What each component costs
   - What's included vs not included
   - Year 2+ cost (never hide this)
6. FAQ: 8+ real customer questions
7. Trust signals: reviews, credentials, guarantees
8. Final CTA + WhatsApp option
```

### 7. Start link building in Week 1. Not after content is done.

Content quality alone does not rank on a DR=0 domain. Backlinks accelerate topical authority — they do not replace it, but a DR=0 domain needs them to get crawled and trusted.

[WYOMING LESSON] DR=0 after months of content. Rankings stalled. Even 5 backlinks from DA30+ sites would have changed the trajectory entirely. Topical authority is the foundation; backlinks are the accelerant. You need both.

### 8. Trailing slash, redirects, sitemap, schema — configure on Day 1.

Set these once. Never change them after launch.

[WYOMING LESSON] Changing `trailingSlash` after launch required fixing 21 URL patterns across 200+ files. Conflicting static + dynamic sitemaps created 521 phantom URLs blocking real pages from being crawled.

**Day 1 technical setup:**
- `trailingSlash: true` in next.config.mjs
- All synonym redirects in next.config.mjs (brainstorm ALL synonyms: form/create/open/start/register/set up)
- Dynamic `app/sitemap.ts` only (no static XML files)
- `app/robots.ts` — block /components/, /lib/, /api/
- GA4 + Plausible + Microsoft Clarity
- GSC verification (real code, not placeholder)

### 9. Customer questions become website content within 48 hours.

Every customer question is SEO gold. The exact words customers use are the exact phrases people search for.

[WYOMING LESSON] 25+ real customer questions were answered only on WhatsApp. These are the highest-value SEO content because they represent real search intent from real users. Pipeline: customer question --> FAQ entry on relevant page --> standalone page if search volume > 200/month.

### 10. Plan for 2x the time. Execute 10 pages perfectly, not 100 poorly.

Prioritize ruthlessly. The top 3 highest-impact items before anything else.

[WYOMING LESSON] Every phase took longer than planned. Burnout risk, incomplete execution, phases taking 2-3x longer than expected. 5 pages at 3,000+ words with full internal linking, schema, and conversion optimization will outrank 50 thin pages every time.

---

## The SEO Truth Stack (Priority Hierarchy)

When rules conflict, this hierarchy decides. Higher levels override lower levels. Always.

```
PRIORITY 1 (highest): Crawlable + Indexable
  Nothing else matters if Google can't see the page.
  ALL internal links must be server-rendered.
  Test: curl -s https://yourdomain.com/ | grep 'href="/' — every important page must appear.

PRIORITY 2: Correct Search Intent Match
  Wrong content type = zero ranking regardless of quality.
  Informational query needs a guide, not a product page.
  Commercial query needs pricing and comparison, not a definition.

PRIORITY 3: Topical Authority (Koray Framework)
  Cover the topic completely before scaling to new topics.
  Every entity, every attribute, every audience segment.
  This is the FOUNDATION — more important than any individual optimization.

PRIORITY 4: EEAT Signals
  Trust signals for YMYL topics.
  Author credentials, entity establishment, corroboration across documents.
  Named authors with verifiable credentials.

PRIORITY 5: On-Page Optimization
  Title, meta description, schema, internal links, breadcrumbs.
  Schema headline must match H1 exactly.
  FAQPage schema on every page with FAQ content.

PRIORITY 6: Content Quality
  Depth, accuracy, answer capsules, FAQs.
  Question-format H2s. 40-word extractive answers.
  No hedging language. Tables for comparisons, not prose.

PRIORITY 7 (lowest): AI Visibility (GEO/AEO)
  Generative Engine Optimization / Answer Engine Optimization.
  Pages that rank in Google first = appear in AI systems.
  Meta descriptions influence ChatGPT citation selection.
  FAQPage schema = 3.2x AI citation rate uplift.
```

### How to Use the Truth Stack

**Scenario:** You have a page that ranks well but has no CTA.
- Adding a CTA is Priority 6 (conversion = content quality). Do not sacrifice Priority 1-3 to add it.

**Scenario:** A page needs JavaScript to render its navigation links.
- This violates Priority 1 (crawlability). Fix immediately. Everything else waits.

**Scenario:** You want to add a page on a topic outside your niche because it has high volume.
- This violates Priority 3 (topical authority). Do not publish. Off-topic content dilutes authority.

---

## Ahrefs' 8 Non-Negotiable Facts (Jan 2026)

These come directly from Ahrefs research. They are data, not opinion. Build every decision on top of these.

### 1. 90.63% of pages get zero traffic from Google.

Because they target what nobody searches. **Every page needs real keyword volume.** No exceptions. No "we'll see if it ranks." Check volume before creating the page.

### 2. Pages need to be crawlable and indexable before anything else matters.

This is Truth Stack Priority 1. Server-rendered HTML. Correct robots.txt. Working sitemap. No accidental noindex tags.

### 3. Most LLMs don't render JavaScript.

Navigation and key content must be in server-rendered HTML. If your internal links are client-side only, LLMs (and often Googlebot) see zero links from your homepage.

[WYOMING LESSON] Client-side only homepage links meant Google crawler saw zero links from homepage. Content pages were invisible.

### 4. AI-generated content can and does rank well.

Quality and intent match matter more than content origin. The question is not "who wrote it?" but "does it completely answer the query with accurate, specific information?"

### 5. Google gets 373x more searches/day than ChatGPT.

Build for Google first. AI visibility follows. A page that ranks #1 on Google will appear in AI overviews. A page optimized only for AI with no Google ranking will get near-zero traffic.

### 6. LLMs.txt is not worth the effort.

Skip it. Focus on what actually moves rankings: topical authority, content quality, schema markup.

### 7. Meta descriptions influence ChatGPT citation selection.

Write meta descriptions as if AI is reading them to decide relevance. Clear, specific, entity-rich. Not marketing fluff.

### 8. FAQPage schema = 3.2x AI citation rate uplift.

This is not for SERP rich results (Google has mostly removed FAQ rich results). This is for AI Overviews and LLM citations. Every page with FAQ content must have FAQPage schema.

---

## The Mindset: Ranking on BOTH Google and LLMs

### The Critical Distinction: Google Indexing != LLM Discovery

WyomingLLC.co proof: 480 pages published, only 30 indexed by Google, yet 400+ visitors from ChatGPT. AI systems discover content through multiple independent paths: OAI-SearchBot (OpenAI's own search crawler) follows sitemaps directly; Bing (confirmed ChatGPT search provider) showed 370 impressions; Google's 30 indexed pages were still queryable. A page Google refuses to index can still be discovered by AI through these alternative paths.

**What this means:**
- Publishing cadence rules (5-8/week for DR=0) exist for Google. AI crawlers don't have the same constraints.
- Google needs backlinks/DR to prioritize crawling. AI crawlers follow sitemaps directly.
- Submit to BOTH Google Search Console AND Bing Webmaster Tools on Day 1.
- Allow ALL AI crawlers in robots.txt -- especially `OAI-SearchBot` (blocking `GPTBot` alone does NOT block ChatGPT Search).
- For sites prioritizing LLM traffic: publish high-quality content as fast as you can create it.

**The dual-track strategy:** Optimize for LLMs first (faster results, fewer constraints), then layer in Google-specific rules (cadence, backlinks) for long-term organic.

### The Convergence Principle

Where Google and LLM optimization DO converge -- the same fundamentals drive both:

1. **Comprehensiveness wins.** Google rewards topical authority. LLMs cite comprehensive sources. Same strategy.
2. **Structured content wins.** Google extracts featured snippets from question H2s with 40-word answers. LLMs extract the same patterns for citations.
3. **Schema markup wins.** FAQPage schema drives 3.2x AI citation uplift AND helps Google understand page structure.
4. **Specificity wins.** "Costs $100" ranks better than "typically costs around $100" on both Google and LLMs. No hedging.
5. **Server-rendered HTML wins.** Google can render JS (sometimes). LLMs mostly cannot. Server-render everything and both are served.

### The Dual-Optimization Checklist

For every page, ask:
- Can Google crawl and index this? (server-rendered links, sitemap, no accidental noindex)
- Can an LLM extract a clean answer? (question H2, 40-word answer capsule, no hedging)
- Does the meta description tell an AI exactly what this page covers? (entity-rich, specific)
- Does the page have FAQPage schema? (3.2x AI citation uplift)
- Is the content specific enough to be cited? ("$100 filing fee" not "varies by state")

### What Google Rewards vs. What LLMs Reward

| Signal | Google | LLMs | Strategy |
|--------|--------|------|----------|
| Topical authority | Core ranking factor | Determines citation source selection | Build complete topical maps |
| Backlinks | Still important for trust | Not directly used | Build for Google, LLMs benefit indirectly |
| Schema markup | Structured data for rich results | 3.2x citation uplift (FAQPage) | Add to every page |
| Meta descriptions | Influences CTR | Influences citation selection | Write for both humans and AI |
| Content depth | Ranks longer content for complex queries | Prefers comprehensive sources | 1,500+ words minimum |
| Answer format | Featured snippets from 40-word answers | Direct extraction for citations | Question H2 + 40-word answer |
| Freshness | Ranks recent content higher | Prefers recent training data | Update content quarterly |

---

## Semantic SEO Anti-Patterns (Never Do These)

These come from both Koray's framework and wyomingllc.co real failures:

1. **Publishing pages on the same macro context** = cannibalization. One keyword, one URL.
2. **Thin support pages with no EAV coverage** = dilutes authority. 1,500 words minimum.
3. **Random anchor text variation** = confuses Google. Anchor text must match target page's macro context exactly.
4. **Breaking topical map for monetization** = destroys semantic signal. Every page serves the topical map.
5. **Inconsistent publishing** = delays indexing. Google indexes in patterns; maintain consistent cadence.
6. **Treating all pages equally in link flow** = waste of PageRank. Pillar pages get more links.
7. **Missing schema markup** = lost structured data signals AND lost AI citation opportunities.
8. **Ignoring re-ranking signals** = missed expansion opportunities. When one page ranks, its siblings can too.
9. **Publishing off-topic content** = dilutes domain topical authority. Every page must serve the site's primary topic.
10. **"Expand later" publishing** = thin content penalty. Expand BEFORE publishing, always.

---

## What NEVER to Do (Quick Reference)

From wyomingllc.co real mistakes — every one of these cost weeks:

- Never publish a page and "expand it later" — expand it before publishing
- Never create a new page without first checking the keyword-to-URL map
- Never launch without building all components: Navbar (server-rendered), Footer (server-rendered), StickyCTA, WhatsApp button, FAQ component, Breadcrumbs
- Never have inconsistent pricing anywhere on the site — one wrong number destroys trust
- Never publish off-topic content on a niche domain (ITIN content on wyomingllc.co diluted topical authority — had to noindex all 8 pages)
- Never use `new Date()` in sitemap — use actual file modification times
- Never create static XML sitemaps alongside dynamic `app/sitemap.ts`
- Never have trailing slash inconsistency — set in next.config.mjs on Day 1, never change
- Never link to pages that don't exist — audit all href values before launch
- Never use generic schema markup ("Wyoming LLC Guide" as headline on every page) — schema headline must match H1 exactly
- Never use hedging language ("might," "could," "possibly," "perhaps," "generally," "typically," "usually")
- Never use "click here," "learn more," "read more" as anchor text
- Never write "In this guide, we will cover..." or "In conclusion..."

---

## When Rules Conflict

Rules will sometimes pull in opposite directions. Here is how to resolve conflicts:

### Truth Stack Always Wins

If any rule conflicts with the Truth Stack priority hierarchy, the Truth Stack wins. A page that is crawlable but has weak content (Priority 1 > Priority 6) is better than a beautifully written page that Google cannot find.

### Commandments Over Guidelines

The 10 Commandments are non-negotiable. Content standards, word count guidelines, and formatting preferences are strong defaults that can be adjusted with good reason. The Commandments cannot.

### Specific Over General

Ahrefs facts are data. Koray principles are proven frameworks. Wyoming lessons are hard experience. When a general SEO "best practice" conflicts with any of these three, defer to data > framework > experience > general advice.

### Speed vs. Quality

When time pressure forces a choice: fewer pages done right beats more pages done poorly. This is Commandment 10. There are no exceptions. A site with 10 comprehensive, interlinked, conversion-optimized pages will outrank a site with 100 thin stubs.

### Google vs. LLM Optimization

When a Google optimization conflicts with an LLM optimization (rare, but possible): optimize for Google first (Ahrefs Fact #5: Google gets 373x more searches/day). Pages that rank on Google appear in AI systems. The reverse is not reliably true.

---

## Content Writing Rules (Quick Reference)

### H2 Writing Rules
- Every H2 must be a question
- Must include the target entity in the question: "How much does a Wyoming LLC cost?" NOT "How much does it cost?"
- Answer in FIRST sentence after H2
- First answer must be 40 words or fewer (featured snippet extraction length)
- Expand with full detail after the 40-word answer

### Forbidden Language
Never write:
- "might," "could," "possibly," "perhaps," "generally," "typically," "usually"
- "click here," "learn more," "read more" as anchor text
- "In this guide, we will cover..."
- "In conclusion..."
- "It goes without saying..."
- Passive voice when active is possible

### Lexical Semantics (Word-Level Optimization)

| Relation | What to Do | Example |
|----------|-----------|---------|
| Synonyms | Use primary name consistently, introduce variations explicitly | "Wyoming LLC" primary, "WY LLC" introduced once |
| Hypernyms | Include broader terms | "business structure," "legal entity" |
| Hyponyms | Include narrower terms | "single-member Wyoming LLC" |
| Meronyms | State part-of relationships | LLC has Articles of Organization |
| Co-occurrence | Include standard co-occurring terms | "Wyoming LLC" + "no state income tax" + "registered agent" |

---

## Topical Authority Measurement

### Leading Indicators (appear first)
- Impressions growth in GSC
- Index coverage increase
- Query count growth

### Lagging Indicators (follow 4-8 weeks after)
- Organic click growth
- Average position improvement
- Direct traffic growth (branded search)

### Signs of Full Topical Authority
- New pages rank within days of publication
- Rankings resist Core Algorithm Updates
- Long-tail queries rank without specific targeting
- Competitors' traffic drops when yours grows
