---
skill: content-audit
description: Load when auditing existing content, detecting cannibalization, checking freshness, or responding to traffic drops. The complete maintenance playbook.
version: 1.0.0
last-verified: 2026-04
source: Koray content configuration + Ahrefs audit methodology + WyomingLLC.co rework lessons
load: on-demand
triggers: audit, cannibalization, thin content, traffic drop, freshness, broken link, core update, performance, content review
---

# Content Audit — The Complete Maintenance Playbook

Content decay is silent. Pages lose rankings not because competitors get better overnight, but because your content drifts away from what users and search engines need. This skill is the single source of truth for every audit, every check, every recovery action.

---

## 1. Audit Schedule

Every page on the site must be audited on a recurring schedule. No exceptions.

| Page Category | Audit Frequency | Examples |
|---------------|----------------|----------|
| High-traffic pages (top 20 by clicks) | **Monthly** | Homepage, primary service pages, top pillar content |
| Pillar / hub pages | **Quarterly** | Topic hubs, comparison hubs, geo landing hubs |
| All other indexed pages | **Every 6 months** | Cluster pages, blog posts, supporting content |
| Programmatic / template pages | **Every 6 months** (batch audit) | Country pages, state pages, tool-generated pages |
| Noindexed pages | **Annually** | Utility pages, thin redirects, staging artifacts |

### How to Track Audit Dates

Maintain a spreadsheet or database with columns:

```
URL | Last Audit Date | Next Audit Date | Category | Audit Owner | Status
```

Update this after every audit. Pages that miss their audit window get flagged in the next weekly review.

---

## 2. Audit Triggers — When to Audit Immediately

Scheduled audits catch slow decay. These triggers catch acute problems.

### Immediate Audit Required

| Trigger | Why It Matters | Scope |
|---------|---------------|-------|
| Google Core Algorithm Update rolls out | Core updates reshuffle rankings based on quality signals | All pages that lost position or traffic |
| Page traffic drops 20%+ month-over-month | Something changed — content, competition, or algorithm | The affected page + its cluster siblings |
| Impressions drop without traffic drop | Ranking slippage on low-CTR queries — early warning | The affected page |
| New competitor pages appear for your queries | Competitive landscape shifted | All pages targeting overlapping queries |
| Page ranks for unintended queries (topical drift) | Google is misinterpreting your page's topic | The drifting page + potential cannibalization targets |
| Users report outdated information | Credibility damage compounds fast | The reported page immediately |
| Page returns 404 or 5xx errors | Broken page = lost rankings within days | The broken page + all pages linking to it |
| Schema validation fails | Rich results disappear, CTR drops | The affected page |
| Sitemap errors in GSC | Pages may drop from index | All pages in the affected sitemap |

### Near-Term Audit (Within 1 Week)

- New legislation or regulation affects your content topic
- Pricing changes from vendors or partners you reference
- A page's bounce rate spikes above 70% for 7+ consecutive days
- A competitor publishes a definitive piece on your target keyword
- Google Search Console shows a manual action

---

## 3. The 6-Point Audit Checklist

Run these six checks on every page during every audit. In order. Skip nothing.

### 3.1 Query Gap Analysis (GSC Data Interpretation)

Pull Google Search Console data for the page. Filter to last 28 days and last 3 months.

| Signal | What It Means | Action |
|--------|--------------|--------|
| High impressions, low clicks (CTR < 2%) | Title/meta mismatch or weak snippet | Rewrite title + meta description to match the dominant user intent behind those queries |
| Queries with impressions you didn't target | Google associates these queries with your page organically | Add H2/H3 sections explicitly answering these queries — Google is telling you what it thinks this page is about |
| Queries competitors rank for that you don't appear for | Content gap — your page is missing coverage | Add sections covering those query patterns with full EAV treatment |
| Declining impressions over 3 months | Content aging or competitor overtook | Update content, add fresh data, update `dateModified`, add current-year references |
| Position 6-15 for high-volume queries | Almost page 1 — high-impact optimization target | Strengthen the section answering that query, add internal links with matching anchor text |
| Position 15-30 for target keyword | Possible cannibalization limiting rank | Check if another page on your site also targets this query |

**How to pull this data:**

1. GSC > Performance > Pages > Filter to the specific URL
2. Click "Queries" tab to see all queries this page appears for
3. Export to spreadsheet
4. Sort by impressions descending
5. Flag any query where CTR < 2% and impressions > 100
6. Flag any query you did not intentionally target
7. Cross-reference with your keyword map — is another page assigned this query?

### 3.2 EAV Completeness Check

Review the page's entity-attribute-value coverage against current reality.

**Check each of these:**

- [ ] Has the entity gained new attributes since last audit? (new regulations, new pricing tiers, new processes, new requirements)
- [ ] Are there attributes your competitors cover that you don't? (run a gap analysis against top 3 ranking pages)
- [ ] Are all values (numbers, dates, prices, statistics) still accurate as of today?
- [ ] Have related entities changed? (new competitors entered the market, new tools launched, new laws enacted)
- [ ] Are entity relationships still accurate? (partnerships, integrations, dependencies)
- [ ] Does the page cite sources, and are those sources still valid and current?

**Red flags:**

- Any price, fee, or cost that hasn't been verified in 3+ months
- Any legal or regulatory statement older than 6 months
- Any statistic without a date stamp ("X% of businesses..." — when was this measured?)
- Any "as of [year]" reference where the year is not the current year

### 3.3 Heading Drift Check

Headings should match how real users phrase their queries today, not how they phrased them when the page was written.

- [ ] Do H2 questions still match how users phrase their queries in GSC?
- [ ] Check People Also Ask for the primary keyword — are there new questions not covered?
- [ ] Check AI systems (ChatGPT, Perplexity, Google AI Overviews) — what questions are users asking about this topic?
- [ ] Do H2s include the target entity name? ("How Long Does ITIN Processing Take?" not "Processing Time")
- [ ] Is the H1 still the best possible match for the primary keyword?
- [ ] Are there H2s that no longer match any query pattern? (remove or rewrite)

**Action protocol:**

1. List all current H2s
2. List all GSC queries with 50+ impressions
3. List all current PAA questions
4. Map H2s to queries — any unmatched queries need new H2s
5. Any H2 with zero matching queries should be evaluated for removal

### 3.4 Internal Link Check

Internal links are the circulatory system of your site. Broken or missing links starve pages of authority.

- [ ] Are there new pages published since last audit that should link to/from this page?
- [ ] Are all existing internal links still working (no 404s, no redirect chains)?
- [ ] Does this page link to its parent hub/pillar page?
- [ ] Does the parent hub/pillar page link to this page?
- [ ] Does this page have the minimum required internal links?

**Minimum internal link thresholds:**

| Page Type | Min Links IN (from other pages) | Min Links OUT (to other pages) |
|-----------|-------------------------------|-------------------------------|
| Homepage | All hub pages | 5+ pillar pages |
| Hub/Pillar | 5+ | All cluster pages |
| Cluster/Spoke | 3+ | 3+ (including back to hub) |
| Blog post | 3+ | 3+ |
| Service page | 5+ | 5+ |

- [ ] Cross-reference with `02-internal-links.csv` — are all mandatory links present?
- [ ] Check for orphan pages in the cluster — pages with 0 internal links pointing to them

### 3.5 Schema Markup Update

Schema tells search engines what your page is. Stale schema = stale signals.

- [ ] Is `dateModified` updated to reflect the latest actual content change? (not build date)
- [ ] Is `datePublished` accurate?
- [ ] Are FAQ schema items still accurate and matching visible FAQ text exactly?
- [ ] Are there new entity attributes to add to structured data?
- [ ] Does `headline` in schema match the H1 exactly?
- [ ] Does `description` in schema match the meta description exactly?
- [ ] Does schema validate cleanly at `search.google.com/test/rich-results`?
- [ ] Does schema validate at `validator.schema.org`?
- [ ] Are all required schema types present for this page type?

**Required schema by page type:**

| Page Type | Required Schema Types |
|-----------|----------------------|
| Homepage | Organization + WebSite + Service + FAQPage |
| Service page | Service + Offer + FAQPage + Organization |
| Hub/Pillar | Article + FAQPage + BreadcrumbList |
| Cluster/Spoke | Article + FAQPage + BreadcrumbList |
| Comparison | Article + FAQPage + BreadcrumbList |
| Blog post | BlogPosting + FAQPage |
| How-to page | HowTo + FAQPage + BreadcrumbList |
| Tool page | SoftwareApplication + FAQPage |

**Common schema errors to catch:**

- Schema headline does not match H1 (must be identical)
- FAQPage question text does not match visible FAQ text on page
- Missing required fields (`author`, `datePublished`, `dateModified`)
- Duplicate schema blocks on the same page
- JSON-LD syntax errors (missing commas, unclosed brackets)
- `dateModified` older than last actual content update

### 3.6 Anchor Text Alignment

Anchor text from other pages tells Google what your page is about. Inconsistent anchors send mixed signals.

- [ ] Are other pages on the site linking to this page with consistent, keyword-relevant anchor text?
- [ ] Has the page's macro context shifted, requiring anchor text updates on linking pages?
- [ ] Are any internal links using generic anchor text ("click here", "learn more", "read more", "this page")?
- [ ] Does anchor text across linking pages reinforce the target keyword without being identical (natural variation)?

**Anchor text rules:**

- Primary anchor text should contain the target keyword or a close variant
- No two linking pages should use identical anchor text (varies naturally)
- Never use "click here", "learn more", or "read more" as anchor text
- Anchor text must describe the destination page, not the linking page's context

---

## 4. Cannibalization Detection & Resolution

Cannibalization is the silent killer. Two pages competing for the same query means neither ranks as well as one strong page would.

### 4.1 How to Detect Cannibalization

**Detection method 1: GSC query overlap**

1. Go to Search Console > Performance > Queries
2. Click any query where your site appears
3. Check the "Pages" tab — if 2+ URLs appear for the same query, they are cannibalizing

**Detection method 2: Position bouncing**

- If a page's position for a query fluctuates 5+ spots week-over-week, Google may be alternating between two of your pages
- Export position data weekly and look for oscillation patterns

**Detection method 3: Similar H1s**

- If two pages' H1s could both answer the same search query, they compete
- Run a manual H1 audit across all pages in a topic cluster
- If you have to think about which page a query belongs to, there is a problem

**Detection method 4: Intent overlap**

- Two pages targeting the same People Also Ask questions = same intent
- A meta description that could apply to another page = too generic, signals overlap
- Content sections that repeat across pages = merge or differentiate

**Detection method 5: Position 15-30 with a target keyword**

- If your target keyword ranks position 15-30 and you have another page in the same topic area, cannibalization is likely limiting both pages

### 4.2 The 5 Cannibalization Red Flags

Check before publishing any new page:

1. **Two pages with similar H1 titles** — if H1s could be confused, they compete
2. **Two pages targeting the same PAA questions** — same PAA = same intent
3. **A page's meta description that could apply to another page** — too generic
4. **Content sections that repeat across pages** — merge or differentiate
5. **Multiple pages appearing for same query in Search Console** — check monthly

### 4.3 Prevention: The Keyword-to-URL Registry

The single most effective prevention tool is a keyword registry.

```
Primary Keyword | Assigned URL | Secondary Keywords | Status
```

**Before creating any page:**

1. Search the registry for the keyword
2. Search the registry for similar keywords
3. Search the registry for same-intent keywords
4. If any match exists: do NOT create a new page — add content to the existing page

### 4.4 Expand vs Create Decision Tree

Before creating any new page, walk through this:

```
Is this topic a subtopic of an existing page?
  YES → Add as H2 section to existing page, not new page

Does it have <200/month search volume?
  YES → Add to most relevant existing page

Is it a long-tail variant of existing keyword?
  YES → Add to existing page targeting the parent keyword

Can I write 1,500+ unique words on this topic alone?
  NO → Merge into parent page

Does it cannibalize any existing page?
  YES → Do NOT create. Redirect the intent to existing page.

PASSES ALL CHECKS → Create new page
```

### 4.5 Resolution Options

| Situation | Solution | When to Choose |
|-----------|----------|---------------|
| Two pages with substantially similar content | **Merge** the weaker page into the stronger. 301 redirect the deleted URL. | Content overlap > 60%. One page has clearly better metrics. |
| Two pages with different angles on same query | **Differentiate** the macro contexts. Update H1s to target distinct queries. Ensure 60%+ unique content per page. | Both pages have unique value. Different sub-intents exist. |
| Old page + new page overlap | **Consolidate** into the newer page. Redirect old URL. | The newer page is better structured and more current. |
| Programmatic pages overlap | **Delete** the less specific one. One macro context per page. | Template-generated pages with near-identical content. |
| Synonym pages (form vs create vs start vs register) | **Redirect** all synonyms to one canonical URL. | Multiple URLs targeting action synonyms for the same service. |

### 4.6 Content Differentiation Rules

When two pages are on related topics and cannot be merged:

- Page A and Page B must target DIFFERENT primary keywords
- Page A must NOT answer the central question of Page B
- Page A and Page B link to each other contextually (not competitively)
- Each page has at least 60% unique content not found on the other
- H1s must be clearly distinguishable at a glance

### 4.7 Post-Resolution Checklist

After merging, consolidating, or deleting a cannibalizing page:

- [ ] 301 redirect from deleted/merged URL to surviving URL
- [ ] Update ALL internal links pointing to the deleted URL (grep codebase)
- [ ] Update sitemap to remove the deleted URL
- [ ] Update `llms.txt` if the deleted page was listed
- [ ] Update the keyword-to-URL registry
- [ ] Update `02-internal-links.csv`
- [ ] Monitor GSC for 2 weeks to confirm the surviving page picks up the deleted page's queries
- [ ] Check that no redirect chains were created (deleted URL should go directly to final URL)
- [ ] Verify the surviving page's content now covers everything the deleted page covered

### 4.8 Real-World Cannibalization Example

From wyomingllc.co — 7 major cannibalization clusters discovered:

| Cluster | Problem | Pages Competing | Resolution |
|---------|---------|----------------|------------|
| Banking | 20 pages competing for "bank account for Wyoming LLC" | 9 hub-level pages against each other | Merge into single definitive hub, redirect all others |
| Cost | 3 pages (cost, cost-breakdown, pricing) all targeting "Wyoming LLC cost" | 3 near-identical pages | `cost-breakdown` → `cost` (301), `annual-fee` → `cost` (301) |
| Tax | 8 overlapping pages on Wyoming LLC taxes | 8 pages with shared content | Merge into topic cluster with differentiated sub-intents |
| EIN | 4 pages, 2 very thin | 4 competing pages | Delete thin pages, consolidate into 2 differentiated pages |
| Annual Report | 3 near-identical pages | `annual-report-due-date` competing with `annual-report` | Redirect due-date variant → main annual-report page |
| Stripe | 3 pages, 2 on same topic | 3 pages | Merge 2 identical-topic pages, keep 1 differentiated |
| State Comparisons | 3 dangerously thin competing pages | 3 pages under 800 words each | Consolidate into 1 comprehensive comparison |

**Lesson:** Prevention is 10x easier than cleanup. Map everything first. Use the keyword registry.

---

## 5. Thin Content Detection & Fixes

### 5.1 What Makes a Page "Thin"

A page is thin if ANY of the following are true:

| Indicator | Threshold | Why It Matters |
|-----------|----------|---------------|
| Word count | Under 1,500 words of unique content | Insufficient depth to satisfy informational intent |
| Shared content ratio | 80%+ content shared with other pages (template bloat) | Google sees it as near-duplicate |
| No unique data points | Zero original statistics, numbers, or facts | No reason to rank this page over any other |
| No FAQ section | Missing FAQ schema + visible FAQ | Missed snippet opportunity, signals shallow coverage |
| Generic advice | Hedging language without specific numbers or steps | Provides no unique value |
| Low engagement | Time on page < 30 seconds in analytics | Users don't find the content useful |
| No images | Zero visual content | Signals low-effort page |
| No internal links in | Zero other pages link to this page (orphan) | Google may not even crawl it regularly |

### 5.2 Fix Options Table

| Issue | Fix | Expected Timeline |
|-------|-----|-------------------|
| Under 1,500 words | Add sections covering missing entity attributes. Target 2,000+ words. | 1-2 days |
| 80%+ shared content | Add 60%+ unique content specific to this page's macro context | 1-2 days |
| No unique data | Research and add 5+ specific data points with sources and dates | 2-4 hours |
| Generic advice | Replace hedging with specific facts, numbers, citations. Remove "might", "could", "possibly". | 2-4 hours |
| Missing schema | Add the full required schema stack for this page type (Article + FAQ + Breadcrumb minimum) | 1-2 hours |
| Low engagement | Improve structure: add tables, lists, visual breaks, jump links, comparison charts | 4-8 hours |
| No images | Add minimum 1 hero image + 1 in-content image with keyword-relevant alt text | 1-2 hours |
| Orphan page | Add 3+ internal links from relevant pages. Update hub page. | 1-2 hours |

### 5.3 When to Delete vs Fix — Decision Tree

```
Does this page target a valid, unique macro context?
  NO → DELETE. 301 redirect to the most relevant existing page.

Does another page already cover this macro context better?
  YES → DELETE. 301 redirect to the better page. Merge any unique content first.

Can this page reach 1,500+ words of unique, valuable content?
  NO → DELETE or MERGE into a parent page as an H2 section.

Does this page have any backlinks?
  YES → PRESERVE the URL. Fix the content. Do not delete pages with backlinks
         unless you 301 redirect to a topically relevant page.

Does this page get any organic traffic (even small)?
  YES → FIX the content. Any traffic means Google values this URL somewhat.

NONE OF THE ABOVE → DELETE. 301 redirect. Remove from sitemap.
```

### 5.4 The wyomingllc.co Thin Content Audit Results

Real numbers from the audit:

- 20 `can-form-llc-[country]` pages: thin, repetitive → redirected to main country pages
- 10 `best-bank-[country]` pages: 64-71% duplicate content → noindexed
- 8 off-topic pages (ITIN, crypto, DeFi): wrong domain entirely → noindexed
- 60+ formation synonym URLs: all pointing to same intent → single canonical URL with 301 redirects

---

## 6. Freshness Maintenance

### 6.1 What to Update and When

| Element | Update Frequency | What to Change | How to Verify |
|---------|-----------------|---------------|---------------|
| `dateModified` in schema | Every content update | Set to actual modification date (ISO 8601) | Check JSON-LD in page source |
| "Updated [Month Year]" visible text | Every content update | Current month and year | Visual check on page |
| Year in title tag | Annually (January) | Replace previous year with current year | Title tag audit in January |
| Pricing / costs | When prices change, or quarterly verification | Exact new amounts with effective date | Cross-reference with official source |
| Laws / regulations | When regulations change | New statute references, effective dates | Check official government sources |
| Competitor data | Quarterly | Current competitor pricing, features, status | Visit competitor sites directly |
| FAQ answers | Every 6 months | Verify accuracy, add new questions from GSC/PAA | Cross-reference with GSC query data |
| Statistics and data points | Every 6 months | Update to latest available data with new source dates | Check original data sources |
| Screenshots and images | Every 6 months or when UI changes | Current interface screenshots | Visual comparison |
| External links | Every 3 months | Replace broken links, update URLs | Run link checker |
| "As of [Year]" references in body | Annually (January) | Update to current year | Search-and-replace across content |

### 6.2 Freshness Signals That Matter

These are the signals search engines and users check to determine if content is current:

1. **`dateModified` in Article schema** — search engines parse this to assess recency
2. **Visible "Updated" date on the page** — users check this before trusting content
3. **Current year in title tags** — signals relevance in SERPs ("Best X in 2026")
4. **Current-year references in body content** — "As of 2026, the fee is $100"
5. **Updated comparison data** — stale competitor data destroys credibility
6. **Working external links** — broken outbound links signal neglect
7. **Current screenshots** — outdated UI screenshots signal stale content
8. **Recent FAQ additions** — new questions signal active maintenance

### 6.3 Freshness Anti-Patterns (Do NOT Do These)

- Do NOT update `dateModified` without actually changing content (Google detects this)
- Do NOT change only the visible date without updating substance
- Do NOT use automated "last built" dates as `dateModified`
- Do NOT batch-update all pages' dates on the same day (looks artificial)

---

## 7. Broken Link Audit Protocol

### 7.1 Monthly Internal Link Check

```bash
# Find all internal links in the codebase
grep -r 'href="/' app/ --include="*.tsx" | grep -oP 'href="[^"]*"' | sort | uniq

# Compare against existing pages
find app/ -name "page.tsx" -not -path "*/components/*"

# Every href target must have a corresponding page.tsx
```

### 7.2 Quarterly External Link Check

- Run all external links through a link checker tool
- Check HTTP status codes: flag any 301, 302, 404, 410, 500
- Replace broken external links with current alternatives
- If no alternative exists, remove the link and rewrite the sentence

### 7.3 Fix Protocol

| Scenario | Action | Priority |
|----------|--------|----------|
| Internal 404 — page exists and should exist | Create the page or redirect to the most relevant existing page | High — fix within 24 hours |
| Internal 404 — page was renamed | 301 redirect old URL to new URL. Update all internal links. | High — fix within 24 hours |
| Internal 404 — page was deleted intentionally | Remove all internal links pointing to it. Redirect to parent cluster page. | Medium — fix within 1 week |
| External 404 — source page gone | Find archived version or alternative source. Update or remove the link. | Medium — fix within 1 week |
| External 301 — source page redirected | Update link to point to final destination URL directly | Low — fix within 1 month |
| Redirect chain (A → B → C) | Update link to point directly to C | Medium — fix within 1 week |

### 7.4 Orphan Page Detection

An orphan page has zero internal links pointing to it. Google may not crawl it, and it bleeds authority.

**Detection:**

```bash
# List all pages
find app/ -name "page.tsx" -not -path "*/components/*" | sort > /tmp/all_pages.txt

# List all internal link targets
grep -r 'href="/' app/ --include="*.tsx" | grep -oP 'href="[^"]*"' | sort | uniq > /tmp/linked_pages.txt

# Compare — pages not in linked list are orphans
comm -23 /tmp/all_pages.txt /tmp/linked_pages.txt
```

**Fix:** Every page must have at least 3 internal links pointing to it. Add links from the parent hub page and 2+ sibling pages.

---

## 8. Performance Monitoring Signals

### 8.1 Healthy Page Signals

A page is performing well if ALL of the following are true:

| Metric | Healthy Threshold | Where to Check |
|--------|------------------|----------------|
| Impressions | Growing or stable month-over-month | GSC Performance > Pages |
| Clicks | Growing or stable month-over-month | GSC Performance > Pages |
| Average position | Improving or stable (lower number = better) | GSC Performance > Pages |
| Click-through rate | > 3% for page 1 positions | GSC Performance > Pages |
| Time on page | > 2 minutes | Google Analytics / analytics tool |
| Bounce rate | < 50% | Google Analytics / analytics tool |
| Internal links IN | Receiving 3+ from other pages | Internal link audit |
| Internal links OUT | Sending 8+ to other pages | Internal link audit |
| Core Web Vitals | All "Good" (LCP < 2.5s, INP < 200ms, CLS < 0.1) | GSC Core Web Vitals report |
| Mobile usability | No issues flagged | GSC Mobile Usability report |
| Schema validation | No errors | Google Rich Results Test |

### 8.2 Warning Signals — Audit Immediately

| Signal | Likely Cause | First Action |
|--------|-------------|-------------|
| Impressions dropping, clicks stable | Losing positions on low-CTR queries | Expand content for the queries losing impressions |
| Impressions stable, clicks dropping | CTR declining — title/snippet issue | Rewrite title tag + meta description |
| Both impressions and clicks dropping | Lost rankings broadly or algorithm penalty | Full audit: content quality + technical SEO + backlink profile |
| Position fluctuating 5+ spots weekly | Cannibalization or authority instability | Check for competing pages on your own site |
| New unintended queries appearing | Google is reinterpreting your page's topic | Either embrace (add content for those queries) or clarify (tighten topical focus) |
| Bounce rate spikes above 70% | Content mismatch with search intent, slow load, or broken layout | Check page speed, mobile rendering, and content-to-query alignment |
| Time on page drops below 30 seconds | Users not finding what they need | Review content structure, add jump links, improve above-fold content |
| CTR drops below 1.5% for page 1 position | Competitors have better titles/snippets or rich results | Rewrite title, add FAQ schema, optimize for featured snippets |
| Pages dropping out of index | Technical issue (noindex tag, robots.txt block, canonical error) | Check page source for noindex, check robots.txt, verify canonical |
| Core Web Vitals regression | Code change, new images, third-party scripts | Run Lighthouse audit, check for unoptimized images or render-blocking scripts |

---

## 9. Post-Google-Core-Update Protocol

When Google announces a Core Algorithm Update, follow this exact timeline. Do not skip phases.

### Week 1: Observe (Days 1-7)

**Do NOT make changes during rollout.** Core updates typically take 10-14 days to fully roll out. Changes during rollout make it impossible to attribute results.

- [ ] Document current positions for all target keywords (snapshot)
- [ ] Note the rollout start date
- [ ] Set up daily position tracking for top 50 pages
- [ ] Monitor GSC daily — note which pages gain and lose positions
- [ ] Monitor which queries are affected (gaining vs losing impressions)
- [ ] Do NOT publish new content targeting affected queries during this period
- [ ] Do NOT make content changes to affected pages during this period

### Week 2-3: Analyze (Days 8-21)

Once rollout completes (Google usually confirms), begin analysis.

- [ ] Export GSC data: compare 14 days before update vs 14 days after
- [ ] Categorize every affected page: gained, lost, or unchanged
- [ ] For pages that lost rankings:
  - [ ] Identify the specific queries that declined
  - [ ] Find the competing pages that now rank above you
  - [ ] Compare your content to theirs: what do they have that you don't?
  - [ ] Check for EAV coverage gaps
  - [ ] Check for thin content or cannibalization
  - [ ] Check content freshness (stale dates, old data)
  - [ ] Check EEAT signals (authorship, expertise indicators, citations)
- [ ] For pages that gained rankings:
  - [ ] Note what these pages have in common (structure, depth, freshness)
  - [ ] Use these as a template for fixing declining pages
- [ ] Create a prioritized action list sorted by traffic impact (highest traffic loss first)

### Week 3-4: Act (Days 15-28)

Implement changes based on analysis. Work from highest-impact pages down.

- [ ] Expand thin pages with additional EAV coverage — add the sections competitors have that you lack
- [ ] Merge cannibalizing pages — follow the cannibalization resolution protocol in section 4
- [ ] Update stale content: prices, dates, regulations, statistics
- [ ] Add missing schema markup for affected pages
- [ ] Strengthen internal linking for affected pages — add links from strong pages
- [ ] Improve EEAT signals: add author bios, update dates, add citations to authoritative sources
- [ ] Fix any technical issues discovered during analysis (Core Web Vitals, mobile usability)
- [ ] Do NOT make changes to pages that gained rankings — leave them alone

### Week 5-8: Monitor (Days 29-56)

- [ ] Track recovery weekly — compare positions to pre-update baseline
- [ ] Document what worked and what didn't
- [ ] Pages that haven't recovered by week 6: escalate to deeper content overhaul
- [ ] Pages that recovered: note the specific changes that helped, add to playbook
- [ ] Create a "core update response" document for this specific update
- [ ] Share learnings across the team

### Post-Update Debrief Template

```
CORE UPDATE RESPONSE: [Update Name / Date]
Rollout Period: [Start] to [End]

IMPACT SUMMARY:
- Pages gained: [count] — avg position change: [+X]
- Pages lost: [count] — avg position change: [-X]
- Pages unchanged: [count]
- Estimated monthly traffic impact: [+/- clicks]

TOP 5 PAGES LOST:
1. /url/ — lost [X] positions for "[query]" — cause: [analysis]
2. ...

ACTIONS TAKEN:
1. [Action] on [URL] — result: [recovered/no change/further decline]
2. ...

KEY LEARNINGS:
- [What this update seemed to prioritize]
- [What pattern the winning pages shared]
- [What pattern the losing pages shared]

PREVENTIVE MEASURES FOR NEXT UPDATE:
- [Specific action to take proactively]
```

---

## 10. Content Completeness Checklist

Use this checklist before deploying any page to production and during every audit to verify no element has regressed.

### Hard Requirements — Page Fails Validation If Any Is Missing

**Identity & SEO:**
- [ ] H1 tag: present, exactly one per page, contains primary keyword
- [ ] Title tag: 60 characters or fewer, unique across the entire site, contains primary keyword
- [ ] Meta description: 155 characters or fewer, unique across the site, expands on title
- [ ] Canonical tag: points to the page's own URL exactly (no trailing slash mismatches)
- [ ] URL slug: lowercase, hyphens only, no dates, matches target keyword

**Open Graph (AI Citation + Social):**
- [ ] `og:title` present
- [ ] `og:description` present (155 characters or fewer)
- [ ] `og:image` present — 1200x630px, readable at thumbnail size
- [ ] `og:url` present (matches canonical URL)
- [ ] `twitter:card` present

**Images:**
- [ ] Minimum 1 image on the page (hero image)
- [ ] Every image has alt text (minimum 10 characters)
- [ ] At least one image alt text contains the primary keyword
- [ ] No images with filename-only alt text (e.g., "image-1.png" is not valid alt text)

**Content Structure:**
- [ ] Exactly 1 H1 tag
- [ ] Minimum 3 H2 tags
- [ ] Every H2 is phrased as a question and includes the entity name
- [ ] Answer capsule in first 100 words (40-80 words, direct answer to the page's central question)
- [ ] FAQ section present with minimum 5 question-answer pairs
- [ ] Word count meets minimum for page type (see table below)
- [ ] Table of Contents present for pages over 1,500 words
- [ ] No placeholder text ("Lorem ipsum", "Coming soon", "TBD", "[TODO]")

**Schema:**
- [ ] At minimum 1 JSON-LD schema block present
- [ ] FAQPage schema present if FAQ section exists on the page
- [ ] Schema `headline` matches H1 exactly (character for character)
- [ ] Schema `description` matches meta description exactly
- [ ] `datePublished` present in ISO 8601 format
- [ ] `dateModified` present in ISO 8601 format (actual update date, not build date)
- [ ] All required schema types present for this page type

**Internal Links:**
- [ ] Minimum 3 internal links pointing TO this page
- [ ] All mandatory links from `02-internal-links.csv` included
- [ ] Descriptive anchor text on every link (never "click here" or "learn more")
- [ ] No links to pages that do not exist (run href audit)
- [ ] CTA link to service/conversion page present
- [ ] Link back to parent hub page present

**Conversion:**
- [ ] Above-fold CTA visible without scrolling on mobile
- [ ] CTA is a button (not just a text link)
- [ ] If pricing is mentioned: full breakdown visible (not just a total)

**EEAT (for YMYL pages — financial, legal, tax, health):**
- [ ] Author field present or organization attribution
- [ ] Last updated date visible on page
- [ ] Disclaimer present where legally required
- [ ] Verification links to official sources present

### Minimum Content Standards by Page Type

| Page Type | Min Words | Min H2s | Min Links In | Min Links Out | Required Schema |
|-----------|----------|---------|-------------|--------------|-----------------|
| Homepage | 800 | 4+ | All hub pages | 5+ pillar pages | Org + WebSite + Service + FAQPage |
| Service page | 1,000 | 6+ | 5+ | 5+ | Service + Offer + FAQPage + Org |
| Hub / Pillar | 2,500 | 8+ | 5+ | All cluster pages | Article + FAQPage + BreadcrumbList |
| Cluster / Spoke | 1,500 | 6+ | 3+ | 3+ | Article + FAQPage + BreadcrumbList |
| Comparison | 2,000 | 6+ | 3+ | 3+ | Article + FAQPage + BreadcrumbList |
| Blog post | 1,000 | 5+ | 3+ | 3+ | BlogPosting + FAQPage |
| Tool page | 800 | 4+ | 3+ | 3+ | SoftwareApplication + FAQPage |
| How-to page | 1,500 | 6+ | 3+ | 3+ | HowTo + FAQPage + BreadcrumbList |

### Soft Requirements — Flag for Review, Not Hard Block

- Word count between 800 and 1,500 (below minimum but not critically thin) — flag for review
- Only 3 internal links in (minimum met but low coverage) — flag for review
- No comparison table on a comparison page — flag for review
- FAQ has fewer than 5 Q&As — flag for review
- No above-fold image — flag for review

---

## 11. Audit Reporting Template

Use this template for every page audit. Fill in every field. Store completed reports for historical comparison.

```
═══════════════════════════════════════════════════════════════
PAGE AUDIT REPORT
═══════════════════════════════════════════════════════════════

URL: /page-slug/
Audit Date: [YYYY-MM-DD]
Auditor: [Name or system]
Previous Audit Date: [YYYY-MM-DD or "First audit"]
Audit Type: [Scheduled / Reactive — triggered by: ___]
Page Category: [Homepage / Hub / Cluster / Blog / Service / Tool / Comparison]

───────────────────────────────────────────────────────────────
PERFORMANCE METRICS (last 28 days vs previous 28 days)
───────────────────────────────────────────────────────────────

Monthly impressions:    [number] (trend: ↑ up / ↓ down / → stable) ([+/-X%])
Monthly clicks:         [number] (trend: ↑/↓/→) ([+/-X%])
Average position:       [number] (trend: ↑/↓/→) ([+/-X])
Click-through rate:     [X.X%] (trend: ↑/↓/→)
Time on page:           [X:XX] (threshold: >2:00)
Bounce rate:            [X%] (threshold: <50%)
Core Web Vitals:        [Good / Needs Improvement / Poor]

Top 5 queries (by impressions):
1. "[query]" — pos: [X], clicks: [X], CTR: [X%]
2. "[query]" — pos: [X], clicks: [X], CTR: [X%]
3. "[query]" — pos: [X], clicks: [X], CTR: [X%]
4. "[query]" — pos: [X], clicks: [X], CTR: [X%]
5. "[query]" — pos: [X], clicks: [X], CTR: [X%]

───────────────────────────────────────────────────────────────
6-POINT CHECKLIST RESULTS
───────────────────────────────────────────────────────────────

1. Query Gap Analysis:       [PASS / ISSUES FOUND]
   Notes: [details]

2. EAV Completeness:         [PASS / ISSUES FOUND]
   Notes: [details]

3. Heading Drift:            [PASS / ISSUES FOUND]
   Notes: [details]

4. Internal Links:           [PASS / ISSUES FOUND]
   Links IN: [count] (min: [threshold])
   Links OUT: [count] (min: [threshold])
   Broken links found: [count]
   Notes: [details]

5. Schema Markup:            [PASS / ISSUES FOUND]
   Schema types present: [list]
   Schema types missing: [list]
   Validation errors: [count]
   Notes: [details]

6. Anchor Text Alignment:    [PASS / ISSUES FOUND]
   Notes: [details]

───────────────────────────────────────────────────────────────
CONTENT COMPLETENESS CHECK
───────────────────────────────────────────────────────────────

Word count:              [number] (min: [threshold for page type])
H2 count:                [number] (min: [threshold])
FAQ items:               [number] (min: 5)
Images:                  [number] (min: 1)
All images have alt:     [YES / NO]
Schema validates:        [YES / NO]
Canonical correct:       [YES / NO]
OG tags complete:        [YES / NO]
CTA present:             [YES / NO]
Updated date visible:    [YES / NO]

───────────────────────────────────────────────────────────────
CANNIBALIZATION CHECK
───────────────────────────────────────────────────────────────

Cannibalizing pages found: [YES — list URLs / NO]
Overlapping queries: [list]
Resolution: [Merge / Differentiate / Consolidate / Delete / N/A]

───────────────────────────────────────────────────────────────
THIN CONTENT CHECK
───────────────────────────────────────────────────────────────

Page classified as thin: [YES / NO]
Reason: [Under word count / High shared content / No unique data / etc.]
Decision: [Fix / Delete / Merge / N/A]

───────────────────────────────────────────────────────────────
FRESHNESS CHECK
───────────────────────────────────────────────────────────────

dateModified in schema:  [date] — accurate: [YES / NO]
Visible updated date:    [date] — accurate: [YES / NO]
Year in title:           [YYYY] — current: [YES / NO / N/A]
Stale data found:        [YES — list items / NO]
Broken external links:   [count]

───────────────────────────────────────────────────────────────
ISSUES FOUND (prioritized)
───────────────────────────────────────────────────────────────

1. [Issue description] → Severity: [Critical / High / Medium / Low]
   Impact: [Estimated traffic/ranking impact]
   Fix: [Specific action to take]

2. [Issue description] → Severity: [Critical / High / Medium / Low]
   Impact: [Estimated impact]
   Fix: [Specific action]

3. ...

───────────────────────────────────────────────────────────────
ACTIONS TAKEN
───────────────────────────────────────────────────────────────

1. [Action taken] → Expected impact: [what should improve]
2. [Action taken] → Expected impact: [what should improve]
3. ...

───────────────────────────────────────────────────────────────
FOLLOW-UP
───────────────────────────────────────────────────────────────

Re-check date: [YYYY-MM-DD]
Specific items to verify on re-check:
- [ ] [item]
- [ ] [item]
- [ ] [item]

═══════════════════════════════════════════════════════════════
```

---

## 12. Annual Content Calendar

Month-by-month audit focus areas. These are in addition to the regular scheduled audits per page category.

| Month | Primary Audit Focus | Secondary Focus | Key Actions |
|-------|--------------------|----------------|-------------|
| **January** | Title tag year update | Full pillar page audit | Update all title tags with new year. Audit every pillar page. Update all "As of [Year]" references in body content. |
| **February** | Pricing and cost pages | EEAT signals | Verify all pricing is accurate against official sources. Check author attributions, disclaimers, and verification links. |
| **March** | Q1 performance review | Cannibalization scan | Review all pages that declined in Q1. Run full cannibalization detection across all topic clusters. Fix merges/redirects. |
| **April** | Geo and regulatory content | Schema validation | Audit all country/state/geo guides for regulation changes. Validate all schema across the site. |
| **May** | Internal link audit | Orphan page detection | Run full internal link audit. Find and fix orphan pages (zero inbound links). Fix all 404s and redirect chains. |
| **June** | Mid-year top-page audit | Competitor content gap analysis | Full 6-point audit of top 20 traffic pages. Compare against competitors' top pages for content gaps. |
| **July** | Comparison and competitor pages | External link audit | Update all competitor data (pricing, features, status). Check all external links for 404s. |
| **August** | Schema and structured data | Core Web Vitals | Validate all schema markup across every page. Run CWV audit and fix any regressions. |
| **September** | Programmatic / template pages | Thin content sweep | Audit all programmatic pages for thin content. Check shared content ratios. Delete or bulk-fix thin pages. |
| **October** | Seasonal content preparation | Content freshness sweep | Prepare Q4 seasonal content (tax planning, year-end guides). Update stale FAQ sections across the site. |
| **November** | FAQ section audit | PAA and AI query review | Add new FAQ questions from GSC data and People Also Ask. Check AI systems for new questions users are asking. |
| **December** | Year-end comprehensive audit | Q1 planning | Full site audit. Document all changes made during the year. Plan Q1 content calendar. Set audit schedule for next year. |

### Ongoing (Every Month, Regardless of Focus Area)

- [ ] Run broken internal link check
- [ ] Check GSC for new manual actions
- [ ] Review top 10 pages for position changes
- [ ] Check for new cannibalization (queries with 2+ URLs in GSC)
- [ ] Verify Core Web Vitals status
- [ ] Review and respond to any user-reported content issues

---

## Quick Reference: Content Writing Standards

These standards apply during creation and during every audit. If content violates these during audit, flag and fix.

### Language Rules
- Active voice always: Subject > Verb > Object
- Maximum 15-20 words per sentence
- No hedging: eliminate "might", "could", "possibly", "perhaps", "generally", "typically", "usually"
- State facts as facts: "ITIN processing takes 6-11 weeks" NOT "typically takes around 6-11 weeks"
- Use specific numbers: "3 requirements" NOT "several requirements"
- Date-stamp changing facts: "As of 2026, the IRS processing time is 6-11 weeks"

### AI/LLM Audit Items (Add to Every Audit)

When auditing any page, also check these LLM-specific signals:

- [ ] **H2s are questions** (not statements). Convert "Pricing" to "How Much Does [Product] Cost?"
- [ ] **40-word extractive answer** after each H2 (no hedging, specific numbers)
- [ ] **FAQPage schema present** with 8-10 Q&A pairs (40-80 word answers)
- [ ] **BLUF at top of content** (2-3 sentence bottom-line-up-front summary)
- [ ] **Data density: 40+ specific numbers** on the page (dollars, percentages, timeframes, quantities)
- [ ] **Zero hedging language** ("might", "could", "typically", "it depends" -- replace with specifics)
- [ ] **Comparison tables in HTML** (not images, not prose comparisons)
- [ ] **Self-contained H3 sections** (200-400 words each, answerable without context)
- [ ] **dateModified in schema** matches actual content update date
- [ ] **"Updated [Month Year]" visible** on the page
- [ ] **All content server-rendered** (no critical info behind JavaScript)
- [ ] **Page listed in llms.txt** (if it's a top-priority page)
- [ ] **Meta description written for AI** (entity-rich, specific, tells AI exactly what the page covers)

**AI citation gap analysis:** Prompt ChatGPT, Claude, and Perplexity with queries your page should answer. If they don't cite your page:
1. Check if your page ranks in Google for that query (if not, the AI won't find it either)
2. Check if competitors are cited instead (read their page -- what do they have that you don't?)
3. Check if your answer is extractable (question H2 + 40-word answer + FAQ schema)
4. Check freshness (is your dateModified recent? Is the visible "Updated" date current?)

### Forbidden Phrases (Flag During Audit)
- "In this comprehensive guide we will cover..."
- "Click here to learn more"
- "Read more" as anchor text
- "In conclusion..."
- "It goes without saying..."
- Passive voice when active voice is possible
- "Various", "numerous", "many" (replace with specific counts)

### Format Rules
- Tables for ALL comparisons (never prose comparisons)
- Numbered lists for processes and steps
- Bullet lists for features and attributes
- One macro topic per page (if a page covers two distinct topics, split into two pages)
