---
skill: topical-map
description: Load when planning site architecture, creating topical maps, defining content strategy, building topic clusters, assigning publishing order, or auditing topical coverage. This is the foundational skill — all other SEO skills depend on the topical map being correct.
version: 1.0.0
last-verified: 2026-04
source: seo-master/01-semantic-seo-framework.md + skills/12-topical-authority-koray.md + skills/15-cannibalization-prevention.md
load: always
triggers: topical map, topic cluster, site architecture, pillar page, content strategy, topical authority, topical boundary, site structure, content planning, content hierarchy, publishing order, content gap
---

# Topical Map Creation — The Definitive Guide

## Core Thesis

**Topical authority — not backlinks — is the primary ranking determinant in modern search.** A site that comprehensively covers every angle of a topic, with semantically precise interlinked content, forces both Google and LLMs to recognize it as the authority source — regardless of domain age, backlinks, or technical perfection.

### Proven Results (Real Case Studies)

| Site | Result | Method |
|------|--------|--------|
| Getwordly.com | 0 to 128,000 organic traffic in 123 days | Zero backlinks. Zero technical SEO. Pure semantic content network. |
| Interingilizce.com | 200,000+ organic traffic/month in 6 months | Full topical coverage strategy. |
| Sunnyvalley.io (SaaS) | 637.5% YoY growth, 1,000+ organic clicks/day | Two topical maps — broad + deep-dive. |
| Heavy Metallurgy B2B (NASDAQ) | 115% organic click increase + 97.6% impression increase in 3 months YoY | B2B semantic content. |
| ForexSuggest.com | 425% organic growth in 6 months across 41 languages | Multilingual topical symmetry. |
| IstanbulBogaziciEnstitu.com | 450% increase in 3 months | Content network indexing cascade. |
| WyomingLLC.co | DR=0, ranking on Google + 53% traffic from AI systems | Near-zero backlinks. Topical map + semantic network. |

---

## Step 1: Define the Source Context

The source context is the single overarching topic identity that Google and LLMs assign to your domain. Everything flows from this.

### How to Define It

Ask: **What is the single overarching topic this website owns?**

Requirements:
- Specific enough to own (you can realistically become THE authority)
- Broad enough to generate 50-200+ pages of content
- Stated as an identity, not a keyword

### Format

```
"The definitive resource for [specific topic] for [specific audience]"
```

### Examples

| Site | Source Context |
|------|---------------|
| wyomingllc.co | "The definitive resource for Wyoming LLC formation for non-US residents" |
| itin.so | "The definitive resource for ITIN applications for non-US tax filers" |
| supatax.ai | "The definitive resource for tax calculators and payroll tools" |
| ecomstudio.ai | "The definitive resource for ecommerce calculators and business tools" |

### Why This Matters

- Google uses source context to decide what queries your domain is eligible to rank for.
- LLMs use source context to decide whether to cite your site in AI-generated answers.
- Every page you publish either reinforces or dilutes this identity.
- If a page does not fit the source context, it does NOT belong on this domain.

---

## Step 2: Identify All Contextual Domains

List every major sub-area of your macro topic. These are the categories of user intent you must cover.

### The 8 Contextual Domain Types

| Domain Type | Description | Example (Wyoming LLC niche) | Example (SaaS niche) |
|------------|-------------|----------------------------|----------------------|
| **Product/Service** | What you sell or offer | LLC formation packages | Firewall product features |
| **Comparison** | vs competitors, vs alternatives | Doola vs our service, Wyoming vs Delaware | Product A vs Product B |
| **How-to** | How users accomplish tasks | How to form an LLC, how to get an EIN | How to configure a firewall |
| **Cost/Pricing** | What it costs, price factors, breakdowns | LLC formation cost breakdown, annual fees | Enterprise pricing tiers |
| **Geographic** | Location-specific variations | Wyoming LLC for UK residents, for Canadians | Compliance by country |
| **Industry/Persona** | Use cases by vertical or buyer type | LLC for SaaS founders, LLC for Amazon sellers | Firewall for healthcare, for fintech |
| **FAQ/Definition** | What terms mean, conceptual explainers | What is a registered agent? What is an EIN? | What is a next-gen firewall? |
| **Problem/Solution** | What goes wrong and how to fix it | EIN application rejected, LLC dissolved by state | Firewall blocking legitimate traffic |

### How to Use These

1. Create a row for each domain type.
2. Under each, list every specific topic you can identify.
3. Each specific topic becomes a candidate page in your topical map.
4. If a domain type has zero topics, investigate — it may be a gap or it may not apply to your niche.

---

## Step 3: Map Entities, Attributes, and Values (EAV Framework)

The EAV framework is the atomic unit of semantic SEO. Every page covers one entity-attribute cluster.

### What EAV Means

| Component | What It Is | Definition |
|-----------|-----------|------------|
| **Entity** | The thing | The primary noun or concept the page is about |
| **Attribute** | Properties users ask about | The dimensions, characteristics, or facets of the entity |
| **Value** | The actual answers | The specific data, facts, or information for each attribute |

### EAV Examples

#### Example 1: Wyoming LLC

| Entity | Attribute | Value |
|--------|-----------|-------|
| Wyoming LLC | filing fee | $100 state fee + $52 registered agent |
| Wyoming LLC | formation timeline | 1-3 business days (standard), same-day (expedited) |
| Wyoming LLC | requirements | Articles of Organization, registered agent, $100 filing fee |
| Wyoming LLC | annual cost | $60 annual report fee |
| Wyoming LLC | tax benefits | No state income tax, no franchise tax |
| Wyoming LLC | privacy | Does not require member names on public filings |

#### Example 2: ITIN Application

| Entity | Attribute | Value |
|--------|-----------|-------|
| ITIN | processing time | 7-11 weeks by mail, 4-6 weeks via CAA |
| ITIN | required documents | W-7 form, tax return, identity documents |
| ITIN | cost | Free from IRS; $150-$350 via CAA |
| ITIN | renewal | Required if not used on tax return for 3 consecutive years |
| ITIN | eligibility | Non-US residents who need a US tax ID |

#### Example 3: SaaS Product (Firewall)

| Entity | Attribute | Value |
|--------|-----------|-------|
| Next-gen firewall | throughput | 10 Gbps |
| Next-gen firewall | deployment options | Cloud, on-prem, hybrid |
| Next-gen firewall | compliance certifications | SOC 2, HIPAA, PCI-DSS |
| Next-gen firewall | pricing model | Per-seat annual license |

### The Rule

**Every page covers ONE entity-attribute cluster.** If a page tries to cover two entities, split it. If a page covers an entity but misses key attributes, it is incomplete and will underperform.

---

## Step 4: Build the 3-Tier Structure

### The Tiers

```
TIER 1 — PILLAR PAGES (1-5 pages per site)
  Broad, comprehensive hub pages.
  Link OUT to ALL cluster pages in their topic.
  Receive links FROM all cluster pages.
  Word count: 3,000-5,000+ words.
  These establish your source context.

TIER 2 — CLUSTER PAGES (10-50 pages per site)
  Each covers ONE specific subtopic with full EAV coverage.
  Link TO parent pillar page.
  Link TO 3-5 related cluster pages.
  Word count: 1,500-3,000 words.
  These build topical depth.

TIER 3 — SUPPORT / PROGRAMMATIC PAGES (50-500+ pages per site)
  Ultra-specific. One question, one answer.
  Comparison pages, country/location pages, niche use-case pages.
  Link UP to parent cluster page.
  Word count: 800-1,500 words.
  These scale topical authority.
```

### Link Count Rules

| Tier | Links OUT to children | Links OUT to siblings | Links UP to parent | Total contextual body links |
|------|----------------------|----------------------|-------------------|---------------------------|
| Pillar | ALL cluster pages (10-50 links) | N/A (only 1-5 pillars) | Homepage | 3-5 contextual body links + navigation links |
| Cluster | 3-10 support pages | 3-5 related clusters | 1 pillar page | 3-5 contextual body links |
| Support | 0-3 | 1-2 related support | 1 cluster page | 3-5 contextual body links |

**Maximum 3-5 contextual links in the body content of any single page.** More than this dilutes the signal. Footer and navigation links do not count toward this limit.

### Pyramid Visualization

```
Homepage
├── Pillar: Wyoming LLC Formation (hub)
│   ├── Cluster: How to Form a Wyoming LLC
│   │   ├── Support: Articles of Organization Requirements
│   │   ├── Support: Wyoming LLC Operating Agreement
│   │   └── Support: Choosing a Registered Agent
│   ├── Cluster: Wyoming LLC Cost
│   │   ├── Support: Wyoming LLC Annual Report Fee
│   │   ├── Support: Wyoming LLC Registered Agent Cost
│   │   └── Support: Hidden Costs of Wyoming LLC
│   ├── Cluster: Wyoming LLC for Non-US Residents
│   │   ├── Support: Wyoming LLC for UK Residents
│   │   ├── Support: Wyoming LLC for Canadian Residents
│   │   └── Support: Wyoming LLC for Indian Residents
│   └── Cluster: Wyoming LLC Taxes
│       ├── Support: Wyoming LLC Federal Tax Obligations
│       ├── Support: Wyoming LLC Sales Tax Rules
│       └── Support: Wyoming LLC Tax for Non-Residents
└── Pillar: EIN for LLCs (hub)
    ├── Cluster: How to Get an EIN
    ├── Cluster: EIN Application Without SSN
    └── Cluster: EIN vs ITIN
```

### When to Create Category Hubs

- **6+ pages in the same cluster:** Create a dedicated hub/pillar page for that cluster.
- **2-3 pages:** Link directly from parent pillar. No dedicated hub needed yet.
- **Hub page format:** H1 with broad topic, brief intro, grid/list of all pages in the cluster with descriptions and descriptive anchor text.

---

## Step 5: Identify Content Gaps

Content gaps are topics your audience searches for that NO page on your site currently answers.

### How to Find Gaps

1. **Entity-attribute audit:** For every entity in your topical map, list ALL attributes users could ask about. Any attribute without a page = gap.
2. **Competitor coverage audit:** What does the competitor rank for that you have no page about? Every such query = a gap.
3. **People Also Ask mining:** Search your primary keywords, collect all PAA questions. Any unanswered PAA = gap.
4. **Search Console query audit:** Queries appearing in impressions but with no dedicated page = gap.
5. **User journey mapping:** Walk through the entire user decision process. Any step with no content = gap.
6. **Contextual domain check:** Revisit all 8 domain types. Any type with zero or thin coverage = gap.

### The Rule

**Every gap = a page to create.** Add it to the topical map immediately with the correct tier, priority, and parent assignment.

---

## Step 6: Assign Priority

### Priority Assignment Matrix

| Priority | Page Type | Why This Order | Timeline |
|----------|----------|---------------|----------|
| **P1** | Pillar pages + highest-volume cluster pages | Establish source context. Google needs to understand what your site IS before it can rank anything. | Week 1-2 |
| **P2** | Competitor comparison pages | High commercial intent, fast conversions. Users searching "[X] vs [Y]" are ready to buy. | Week 2-4 |
| **P3** | Long-tail cluster pages | Build topical completeness. Fill in the entity-attribute gaps. | Week 3-8 |
| **P4** | Programmatic / support pages | Scale authority. Country pages, use-case pages, edge-case FAQs. | Week 4-12+ |

### Priority Modifiers

Increase priority by 1 level if:
- The keyword has commercial/transactional intent (user is ready to buy)
- A competitor ranks with a weak page (opportunity to outrank)
- The topic is seasonal and peak is approaching (publish 2-3 months before peak)
- The topic supports a high-converting page (passes link equity to money page)

Decrease priority by 1 level if:
- The keyword has <100 monthly searches AND is not transactionally critical
- Full coverage of the parent cluster is not yet complete (finish clusters before expanding)
- The topic is highly seasonal and peak just passed

---

## Step 7: Topical Map Output Format

The topical map is a structured spreadsheet. Every page on the site has exactly one row.

### The Template

```
| Page ID | Title | URL Slug | Tier | Type | Primary Entity | Primary Attribute | Target Query | Search Intent | Priority | Word Count Target | Parent Page | Internal Links To | Schema Required | Status | Notes |
|---------|-------|----------|------|------|---------------|-------------------|-------------|--------------|----------|------------------|-------------|-------------------|----------------|--------|-------|
| WY-001 | How to Form a Wyoming LLC | /form/ | T1 | Pillar | Wyoming LLC | formation process | how to form a wyoming llc | Informational/Commercial | P1 | 4000 | / | WY-002, WY-003, WY-004 | Article, HowTo, FAQ, Breadcrumb | Published | Hub page |
| WY-002 | Wyoming LLC Cost | /cost/ | T2 | Cluster | Wyoming LLC | cost | wyoming llc cost | Commercial | P1 | 2500 | /form/ | WY-005, WY-006 | Article, FAQ, Breadcrumb | Draft | Merge cost-breakdown into this |
| WY-010 | Wyoming LLC for UK Residents | /uk/ | T3 | Support | Wyoming LLC | geographic eligibility (UK) | wyoming llc for uk residents | Informational | P3 | 1200 | /non-us-residents/ | WY-001 | Article, FAQ, Breadcrumb | Planned | |
```

### Column Definitions

| Column | Description | Required |
|--------|-------------|----------|
| Page ID | Unique identifier (SITE-###) | Yes |
| Title | Exact H1 text | Yes |
| URL Slug | The URL path (no domain) | Yes |
| Tier | T1 (Pillar), T2 (Cluster), T3 (Support) | Yes |
| Type | Pillar, Cluster, Support, Comparison, Programmatic | Yes |
| Primary Entity | The main noun/concept | Yes |
| Primary Attribute | The main facet being covered | Yes |
| Target Query | The exact search query this page targets | Yes |
| Search Intent | Informational, Commercial, Transactional, Navigational | Yes |
| Priority | P1, P2, P3, P4 | Yes |
| Word Count Target | Minimum word count | Yes |
| Parent Page | URL of the pillar or cluster this page belongs to | Yes |
| Internal Links To | Page IDs this page should link to | Yes |
| Schema Required | Which schema types to implement | Yes |
| Status | Planned, Draft, Published, Needs Update, Redirected | Yes |
| Notes | Cannibalization warnings, merge notes, seasonal notes | Optional |

---

## Predicate-Based Content Networks

Search engines understand predicates (verbs) and the semantic contexts they imply. Mapping your niche by verb groups reveals content clusters you would otherwise miss.

### How It Works

Every verb implies a set of semantic questions: who can, how to, where to, when to, cost to, requirements for.

### Verb Group Mapping

#### Example: LLC Formation Niche

```
FORMATION VERBS: form, register, file, submit, create, establish, incorporate, set up, start, open
  -> Each implies: who can [verb], how to [verb], where to [verb], when to [verb], cost to [verb]
  -> Page candidates: "How to Form a Wyoming LLC", "Where to File LLC Documents", "Who Can Register a Wyoming LLC"

MANAGEMENT VERBS: maintain, renew, update, dissolve, transfer, sell, amend, convert, merge
  -> Each implies: annual fees, deadlines, compliance steps, required documents
  -> Page candidates: "How to Dissolve a Wyoming LLC", "LLC Annual Report Renewal", "How to Transfer LLC Ownership"

BENEFIT VERBS: protect, save, access, enable, allow, qualify, shield, unlock
  -> Each implies: asset protection, banking access, tax savings, liability shield
  -> Page candidates: "How a Wyoming LLC Protects Your Assets", "Tax Savings with a Wyoming LLC"

COMPLIANCE VERBS: report, file, pay, submit, disclose, register, notify
  -> Each implies: deadlines, forms, penalties, requirements
  -> Page candidates: "Wyoming LLC Annual Report Filing", "How to Pay Wyoming LLC Fees"
```

#### Example: SaaS Product Niche

```
DEPLOYMENT VERBS: install, configure, deploy, integrate, set up, migrate
SECURITY VERBS: protect, detect, block, monitor, scan, alert
MANAGEMENT VERBS: manage, update, scale, optimize, troubleshoot
```

### The Pattern

Every predicate group = a content cluster. Every predicate = a page or section. The "rising waves" traffic pattern (where traffic grows in stepwise jumps) corresponds to predicate groups being indexed sequentially by Google.

---

## Publishing Order Strategy

### The Sequence

1. **Publish pillar pages FIRST.** These establish your source context with Google and LLMs.
2. **Publish cluster pages SECOND.** Link each cluster page back to its pillar immediately upon publishing.
3. **Publish support pages THIRD.** Link each support page up to its parent cluster.
4. **Every new page gets at least one internal link pointing to it within 48 hours of publishing.** No orphan pages. Google cannot find pages it cannot crawl to.

### Why Order Matters (Case Study Evidence)

From IstanbulBogaziciEnstitu.com:
- Pages linked earlier in the network indexed faster.
- Pages with stronger local interconnectivity ranked faster.
- First indexed pages triggered re-ranking for the entire network.

From Getwordly.com:
- Traffic grew with ZERO technical SEO, no backlinks, no internal navigation menu. Content network quality alone drove topical authority.

### Cadence Rules

- **Maintain consistent publishing cadence.** Google indexes in patterns. If you publish 5 pages/week for 3 weeks then stop for 2 weeks, you lose indexing momentum.
- **Predictable cadence, not random bursts.** 2-3 pages per week consistently beats 10 pages in one week then nothing for a month.
- **Link from high-traffic pages to new pages.** Pages with more traffic have more PageRank. Link from your best-performing page to your newest page.

---

## Seasonal Timing Strategy

**Publish seasonal content 2-3 months BEFORE peak** so it is indexed and ranking when demand hits.

### General Seasonal Calendar

| Season | Search Behavior | Action |
|--------|----------------|--------|
| Jan-Apr | Tax season, new year formation spike | Tax/EIN/compliance content must be live and indexed |
| May-Jun | Mid-year research begins | Comparison and review content should be live |
| Jul-Aug | Back-to-school, Q3 planning | Industry-specific and persona content |
| Sep-Oct | Q4 prep, year-end planning starts | Formation/deadline content should be live |
| Nov-Dec | Year-end tax planning, Black Friday (e-commerce) | Pricing, cost, deal content must be live |

### How to Apply

1. Identify which of your topics have seasonal demand (use Google Trends).
2. For each seasonal topic, note the peak month.
3. Subtract 2-3 months. That is your publish-by deadline.
4. Mark the publish-by date in your topical map's Notes column.
5. Prioritize seasonal content that is approaching its publish-by deadline.

---

## Cannibalization Prevention Rules

Cannibalization is the single most destructive mistake in topical map execution. It happens when two or more pages on the same site compete for the same keyword or search intent.

### The Real Cost

From wyomingllc.co:
- **Banking:** 20 pages competing for "bank account for Wyoming LLC" — 9 hub-level pages competing with each other.
- **Cost:** 3 pages (cost, cost-breakdown, pricing) all targeting "Wyoming LLC cost."
- **Tax:** 8 overlapping pages.
- **EIN:** 4 pages, 2 very thin.
- **Annual Report:** 3 near-identical pages.
- **Stripe:** 3 pages, 2 on same topic.
- **State Comparisons:** 3 dangerously thin competing pages.

Fixing required: merging pages, 301 redirects, noindexing duplicates. Weeks of rework. **Prevention is 10x easier than cleanup.**

### The One Rule

**Before creating any page, check: does another page on this site already target this keyword or intent?**

### The Keyword-to-URL Registry

Maintain a registry file as the single source of truth:

```
Primary Keyword | Assigned URL | Secondary Keywords | Status
wyoming llc cost | /cost/ | llc cost breakdown, wyoming llc pricing, how much does a wyoming llc cost | Published
wyoming llc annual report | /annual-report/ | annual report due date, annual report fee | Published
```

Before creating any page:
1. Search the registry for the exact keyword.
2. Search the registry for similar keywords.
3. Search the registry for same-intent keywords.
4. If any match exists: do NOT create a new page — add content to the existing page.

### The 5 Cannibalization Red Flags

Check before publishing any page:

1. **Two pages with similar H1 titles.** If the H1s could be confused, the pages are competing.
2. **Two pages targeting the same People Also Ask questions.** Same PAA = same intent.
3. **A page's meta description that could apply to another page.** Too generic = signal confusion.
4. **Content sections that repeat across pages.** Merge or differentiate.
5. **Multiple pages appearing for the same query in Search Console.** Check monthly.

### The Expand vs Create Decision Tree

Before creating any new page, run through this:

```
Is this topic a subtopic of an existing page?
  YES -> Add as H2 section to existing page. Do NOT create a new page.

Does it have <200/month search volume?
  YES -> Add to the most relevant existing page.

Is it a long-tail variant of an existing keyword?
  YES -> Add to existing page targeting the parent keyword.

Can I write 1,500+ unique words on this topic alone?
  NO -> Merge into parent page.

Does it cannibalize any existing page?
  YES -> Do NOT create. Redirect the intent to the existing page.

PASSES ALL CHECKS -> Create new page. Add to keyword registry immediately.
```

### Content Differentiation Rules

When two pages are on related topics and cannot be merged:
- Page A and Page B must target DIFFERENT primary keywords.
- Page A must NOT answer the central question of Page B.
- Page A and Page B link to each other contextually (not competitively).
- Each page has at least 60% unique content not found on the other.

### Synonym Redirect Planning

BEFORE launch, brainstorm all action synonyms and set up 301 redirects:

```
/form-wyoming-llc   -> /form/   (301)
/create-wyoming-llc  -> /form/   (301)
/open-wyoming-llc    -> /form/   (301)
/start-wyoming-llc   -> /form/   (301)
/register-wyoming-llc -> /form/  (301)
```

Every synonym that a user might type or Google might index must redirect to the canonical URL.

### Monthly Cannibalization Audit

Run this in Google Search Console every month:
1. Go to Performance.
2. Look for queries where 2+ URLs are appearing.
3. Look for queries ranking position 15-30 where you have a page targeting it — often means cannibalization is limiting the ranking.
4. For any issue found: decide merge or redirect.

---

## Signs of Full Topical Authority

### Leading Indicators (appear first, within weeks)
- Impressions growth in Google Search Console
- Index coverage increase (more pages being indexed)
- Query count growth (ranking for queries you did not specifically target)

### Lagging Indicators (follow 4-8 weeks after leading indicators)
- Organic click growth
- Average position improvement across the board
- Direct traffic growth (branded search increases)
- AI systems (ChatGPT, Perplexity, Gemini) citing your content

### Full Authority Signals
- New pages rank within days of publication (not weeks)
- Rankings resist Google Core Algorithm Updates
- Long-tail queries rank without specific targeting
- Competitors' traffic drops when yours grows
- AI systems consistently cite your domain for niche queries

---

## Anti-Patterns (Never Do These)

1. **Publishing two pages on the same macro context.** This is cannibalization. Consolidate or redirect.
2. **Thin support pages with no EAV coverage.** A 200-word page with no entity-attribute depth dilutes authority.
3. **Random anchor text variation.** Anchor text must match the target page's macro context exactly. Do not vary for "naturalness."
4. **Breaking the topical map for monetization.** Do not publish off-topic sponsored content or affiliate pages that violate your source context.
5. **Inconsistent publishing.** Irregular cadence delays indexing and confuses Google's crawl patterns.
6. **Treating all pages equally in link flow.** Pillar pages should receive more internal links than support pages. Distribute PageRank intentionally.
7. **Missing schema markup.** Every page needs appropriate structured data. Lost schema = lost structured data signals.
8. **Ignoring re-ranking signals.** When Google re-ranks your content (positively or negatively), investigate why. Missed signals = missed expansion opportunities.
9. **Publishing pages outside your source context.** Off-topic pages (e.g., crypto content on an LLC site) actively harm topical authority.
10. **Creating pages with <200/month search volume as standalone pages.** Merge into parent pages instead.

---

## Vertical-Specific Adaptations

### SaaS Products

- **Build TWO topical maps:** one for the broad problem space (e.g., "network security"), one for deep-dive on the product's core function (e.g., "firewall types and configurations").
- **Connect all topical map nodes to conversion landing pages** to pass link flow from informational content to commercial pages.
- **Build "[product] vs [competitor]" pages early.** These are P2 priority — high commercial intent.
- **Use product documentation as support-tier content.** Docs pages count toward topical authority.

### B2B Businesses

- **Low keyword volume is normal.** B2B niches have 10-100x less search volume than B2C. Compensate with thought leadership and depth.
- **Include named domain experts as authors.** Author entities with verifiable credentials boost E-E-A-T.
- **Build content around buyer personas:** CEO (ROI, strategy), CMO (brand, growth), CFO (cost, compliance), CTO (technical, integration).
- **Case studies and whitepapers are support-tier content.** They build authority even with low search volume.

### E-commerce / Lead Gen

- **Technical SEO must accompany semantic work.** Semantic content on a slow, poorly-rendered site will underperform.
- **Semantic HTML tags throughout.** Use proper heading hierarchy, lists, tables — not just divs.
- **Page speed + image optimization compound semantic gains.** A semantically perfect page that loads in 5 seconds loses to a good page that loads in 1 second.
- **Product pages are pillar-tier content.** Category pages are cluster-tier. Individual product variations are support-tier.

### Multilingual Sites

- **Symmetry gaps kill multilingual authority.** If a topic exists in English but not in German, both language versions suffer.
- **Every topic must exist in every target language.** The topical map applies to ALL languages simultaneously.
- **Content in less-competitive languages ranks faster — start there.** Publish in low-competition languages first to build indexing momentum, then expand to English.
- **Use hreflang correctly.** Every page must point to its equivalent in every other language.

### Lead Generation / Service Businesses

- **Geographic pages are support-tier content at scale.** "[Service] in [City]" pages can generate hundreds of support pages.
- **Testimonial and case study pages build E-E-A-T.** Include them in the topical map.
- **FAQ pages should be cluster-tier, not standalone.** Group related FAQs into comprehensive cluster pages.

---

## New Site: First 30 Days Strategy

### Week 1: Foundation

1. Define your source context (Step 1).
2. Complete the full topical map (Steps 2-6).
3. Set up the keyword-to-URL registry.
4. Plan synonym redirects.
5. Publish 1-2 pillar pages.

### Week 2: Core Clusters

6. Publish 5-10 core cluster pages (P1 and P2 priority).
7. Internal link every cluster page to its pillar immediately.
8. Internal link the pillar page to every new cluster page.
9. Submit sitemap to Google Search Console.

### Week 3: Depth

10. Publish 5-10 more cluster pages (P2 and P3 priority).
11. Add internal links between related cluster pages (3-5 per page).
12. Begin monitoring Search Console for impressions and indexing.

### Week 4: Scale

13. Begin publishing support pages (P3 and P4 priority).
14. Run first cannibalization check.
15. Identify content gaps from Search Console query data.
16. Adjust topical map based on real indexing and impression data.

### Key Principles for New Sites

- **Internal links from pillar to new pages are the most important early.** They are the primary way Google discovers your content.
- **Predictable cadence, not random bursts.** 2-3 pages per week consistently.
- **Do not publish off-topic content in the first 90 days.** Establish your source context before expanding.
- **Every page must have at least one internal link within 48 hours.** No orphan pages.
- **Do not expect traffic for 4-8 weeks.** Topical authority takes time to build. Impressions come first, then clicks.

---

## Using Wikipedia for Topical Map Planning

Wikipedia is the ultimate topic cluster. Every article fully covers a topic and interlinks between supporting subtopics.

### How to Use It

1. Search Wikipedia for your niche's main topic.
2. Find all internal links on the main article — these are subtopics to consider.
3. Look at the page structure (sections, subsections) — these are natural cluster pieces.
4. Use the "See also" / Related Articles section — these are adjacent clusters to potentially build later.
5. Check the "References" section — these are authoritative sources to study and potentially cite.

---

## Quick Reference: Topical Map Checklist

Before considering the topical map complete, verify:

- [ ] Source context is defined (one sentence, specific audience)
- [ ] All 8 contextual domain types are covered (or explicitly marked N/A)
- [ ] EAV triples are defined for every major entity
- [ ] 3-tier structure is built (Pillar -> Cluster -> Support)
- [ ] Every page has a unique primary keyword (no overlaps)
- [ ] Keyword-to-URL registry is populated
- [ ] Content gaps are identified and added to the map
- [ ] Priorities are assigned (P1 through P4)
- [ ] Publishing order is determined (pillars first, then clusters, then support)
- [ ] Seasonal content has publish-by dates noted
- [ ] Synonym redirects are planned
- [ ] Cannibalization check is complete (no two pages share intent)
- [ ] Internal link plan is drafted (which pages link to which)
- [ ] Schema requirements are noted per page
- [ ] Topical map spreadsheet is populated with all columns filled
