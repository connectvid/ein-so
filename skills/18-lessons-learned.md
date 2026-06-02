---
skill: 18-lessons-learned
description: Hard-won lessons from 6 months building wyomingllc.co. Load for every new project to prevent repeating costly mistakes.
version: 1.0.0
last-verified: 2026-04
source: wyomingllc.co project — 6 months real data, real customers, real failures
load: on-demand
triggers: lessons, mistakes, wyoming, rework, checklist, anti-pattern, pre-launch, launch, new project, new site, avoid
---

# Skill 18: Lessons Learned — The Definitive Record

> Every rule here cost weeks of rework, lost customers, or stalled rankings. Read this file before building anything new.

This file documents the 15 mistakes made during 6 months building wyomingllc.co, what each mistake cost in concrete terms, the exact rule that prevents it, and how to verify the rule is being followed. At the end is a Pre-Launch Anti-Pattern Checklist that must be completed before any new site goes live.

---

## The 15 Mistakes — Never Repeat

---

### Mistake 1: Thin Pages Published, "Expand Later"

**What happened:** 50+ country pages were launched at 66-168 words each. The plan was to "come back and expand them later."

**What it cost:**
- 2 full rework phases (Phase A + Phase B)
- 78 pages had to be rewritten
- 47,000 lines of content added
- Weeks of effort that should have been spent on new content
- Google flagged the domain for thin content, slowing indexing of ALL pages

**The rule that prevents it:**
> NEVER publish a page under 1,500 words. If the topic cannot fill 1,500 words of genuinely useful content, merge it into a parent page or do not create it. Expand BEFORE publishing, not after.

**Minimum word counts by page type:**

| Page Type | Minimum | Ideal |
|-----------|---------|-------|
| Hub/Pillar | 3,000 | 3,500+ |
| Spoke/Cluster | 1,500 | 2,000+ |
| Comparison | 2,500 | 3,000+ |
| Country/Region | 2,000 | 2,500+ |
| Tool page | 1,000 | 1,500+ |
| Blog post | 1,000 | 1,200+ |

**How to verify:** Before publishing, run `wc -w` on the content. If under the minimum, do not publish.

---

### Mistake 2: Cannibalization Clusters

**What happened:** 20 separate pages were created all targeting variations of "bank account for Wyoming LLC." No keyword-to-URL map existed, so nobody checked whether the keyword was already assigned.

**What it cost:**
- 7 major cannibalization clusters identified
- Google could not determine which page to rank for any of these terms
- Net result: zero rankings for a high-value commercial keyword
- Required consolidating pages, setting up redirects, and rebuilding internal links

**The rule that prevents it:**
> Before creating ANY new page, check the keyword-to-URL map. One keyword = one URL. No exceptions. Map EVERYTHING before writing a single word.

**How to verify:** Maintain a keyword-to-URL CSV. Before creating any page, search the CSV for the target keyword. If it already has a URL assigned, do not create a new page.

---

### Mistake 3: 0% Conversion Rate Despite Traffic

**What happened:** A real customer (JPCheng) spent 2+ hours on the site, asked 25 questions via WhatsApp, and still did not buy. The site was built as an information resource, not a sales funnel.

**What it cost:**
- Lost sale from a highly engaged, ready-to-buy customer
- Revealed that traffic without conversion optimization is worthless
- Required redesigning every page template to include conversion elements

**Root causes identified:**
- No sticky CTA — customer had to scroll back up to find the action button
- CTA below fold on mobile — 70%+ of traffic never saw the CTA
- Pricing discrepancy ($60 on one page, $100 on another) destroyed trust instantly
- No "What's Included" breakdown — customer could not understand what they were paying for

**The rule that prevents it:**
> Design the conversion funnel BEFORE writing content. Every page needs: above-fold CTA + sticky CTA on scroll + transparent pricing with exact breakdown + WhatsApp within 1 tap on mobile.

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

**How to verify:** Load every page on a mobile device. Can you see the CTA without scrolling? Is WhatsApp one tap away? Does every pricing mention match every other pricing mention on the site?

---

### Mistake 4: 236 Orphaned Pages

**What happened:** 236 pages were created but never linked from any hub page, never added to the sitemap, and had no inbound internal links. Google could not discover them.

**What it cost:**
- 236 pages completely invisible to Google
- Had to manually audit every page and add missing hub links
- An entire rework phase dedicated to fixing internal linking
- Months of potential indexing and ranking time lost

**The rule that prevents it:**
> When you create a page, SIMULTANEOUSLY: (1) add it to its hub page, (2) add it to the sitemap, (3) add internal links from 2-3 related pages pointing to it, (4) add internal links from it to 2-3 related pages + its hub.

**Minimum internal links per page type:**

| Page Type | Outbound Links | Inbound Links |
|-----------|---------------|---------------|
| Hub/Pillar | 15+ | 5+ |
| Spoke/Cluster | 8+ | 3+ |
| Blog post | 5+ | 3+ |
| Service page | 5+ | 3+ |

**How to verify:** After creating any page, immediately check: (1) Does the hub page link to it? (2) Do 3+ pages link to it? (3) Does it link to 3+ pages? If any answer is no, fix it before moving on.

---

### Mistake 5: Client-Side Only Homepage Links

**What happened:** The homepage used client-side JavaScript to render navigation links. Google's crawler (and all LLMs) saw zero links from the homepage because they do not reliably execute JavaScript.

**What it cost:**
- All content pages were invisible to Google via the homepage
- Google had to discover pages only through the sitemap, which was also broken (see Mistake 7)
- Dramatically slowed crawling and indexing of the entire site

**The rule that prevents it:**
> ALL internal links must be server-rendered HTML. Navbar and Footer must be server components. Test with: `curl -s https://yourdomain.com/ | grep 'href="/'` — every important page must appear in this output.

**How to verify:** Run the curl command above. If key pages do not appear in the output, the links are client-side only. Fix by making the component a server component or using server-side rendering.

---

### Mistake 6: Trailing Slash Chaos

**What happened:** The `trailingSlash` setting was not configured on Day 1. Some URLs had trailing slashes, others did not. After launch, changing the setting required fixing every URL reference.

**What it cost:**
- Mixed URL formats across the entire site
- Fixing 21 URL patterns across 200+ files
- Potential duplicate content issues (Google treating `/page` and `/page/` as different URLs)

**The rule that prevents it:**
> Set `trailingSlash: true` in next.config.mjs on Day 1 of the project. Never change it after launch. Every internal link must use the consistent format from the start.

**How to verify:** Check next.config.mjs for `trailingSlash: true`. Grep all internal links to ensure they use consistent formatting.

---

### Mistake 7: Conflicting Static + Dynamic Sitemaps

**What happened:** A static XML sitemap existed in the /public/ directory AND a dynamic `app/sitemap.ts` was generating a sitemap. Both were being served, creating conflicts.

**What it cost:**
- 521 phantom URLs blocking real pages from being crawled
- Wasted crawl budget on non-existent pages
- Google confused about which URLs were canonical

**The rule that prevents it:**
> ONE sitemap source only — `app/sitemap.ts`. Delete any static XML sitemap files in /public/. Never use `new Date()` for lastmod — use actual file modification times.

**How to verify:** Check for static XML files: `ls public/*.xml`. If any sitemap files exist, delete them. Verify `app/sitemap.ts` exists and is the sole source.

---

### Mistake 8: No Backlinks Until Too Late

**What happened:** The entire focus was on content creation. Link building was planned "after content is done." After months of publishing, the domain had DR=0.

**What it cost:**
- DR=0 after months of work
- Rankings stalled because Google did not trust the domain
- Competitors with worse content but higher DR outranked the site
- Even 5 backlinks from DA30+ sites would have changed the trajectory

**The rule that prevents it:**
> Start link building in Week 1. Topical authority is the foundation; backlinks are the accelerant. You need both. Target 5+ DA30+ backlinks in the first month.

**How to verify:** Check DR in Ahrefs weekly. If DR=0 after Week 4, link building has been neglected.

---

### Mistake 9: Off-Topic Content on Niche Domain

**What happened:** 8 pages about ITIN applications and cryptocurrency were published on wyomingllc.co, a site whose topical authority was about Wyoming LLC formation.

**What it cost:**
- Diluted the site's topical authority signal
- Google's understanding of "what this site is about" became fuzzy
- Had to noindex all 8 off-topic pages
- The content effort was wasted — those pages should have been on a different domain

**The rule that prevents it:**
> Every page must serve the site's primary topical authority. If content does not belong to the site's core topic, publish it on the correct domain instead. Off-topic content on a niche domain actively hurts rankings for ON-topic content.

**How to verify:** For every new page, ask: "Does this page strengthen or dilute this domain's topical authority?" If the answer is "dilute," do not publish it here.

---

### Mistake 10: Formation Synonym Explosion

**What happened:** Users search for LLC formation using many different verbs: form, create, open, start, register, set up, establish, file. No redirects were planned for these synonyms before launch.

**What it cost:**
- 60+ redirects needed post-launch
- Users landing on 404 pages for common search variations
- Lost traffic from synonym queries during the period before redirects were set up

**The rule that prevents it:**
> Brainstorm ALL synonyms for primary actions BEFORE launch. Set up redirects in next.config.mjs from Day 1. For any primary action verb, list every possible synonym a user might search with.

**Common synonym groups to plan for:**
```
FORMATION: form, create, open, start, register, set up, establish, file, incorporate
COST: cost, price, fee, pricing, how much, expense, rate, charge
GUIDE: guide, tutorial, how to, steps, process, walkthrough, instructions
```

**How to verify:** For each primary keyword, brainstorm 5-10 synonym variations. Verify each has a redirect in next.config.mjs.

---

### Mistake 11: Generic Schema Markup

**What happened:** All pages used the same schema markup with `headline: "Wyoming LLC Guide"`. Google could not differentiate pages from each other based on structured data.

**What it cost:**
- Google saw hundreds of pages all claiming to be about the same thing
- Lost structured data signals that help with both Google rankings and AI citations
- Required updating schema on every single page

**The rule that prevents it:**
> Every page gets unique schema. Schema headline must match H1 exactly. No copy-paste between pages. Schema must include: unique headline, unique description, correct page type, correct breadcrumb path.

**How to verify:** Grep for `headline` in schema markup across all pages. Every value must be unique and must match the page's H1.

---

### Mistake 12: Customer Questions Not on Website

**What happened:** 25+ real customer questions were answered only via WhatsApp. These questions represented the exact phrases potential customers search for, but none of this content existed on the website.

**What it cost:**
- Wasted the highest-value SEO content source: real customer language
- Missed ranking opportunities for long-tail, high-intent queries
- Competitors who had this content ranked instead

**The rule that prevents it:**
> Every customer question becomes website content within 48 hours. Pipeline: WhatsApp question --> FAQ entry on the most relevant existing page --> standalone page if search volume > 200/month.

**How to verify:** Maintain a log of all customer questions (WhatsApp, email, chat). Weekly review: has each question been added to the website? If not, add it.

---

### Mistake 13: Links to Non-Existent Pages

**What happened:** Internal links pointed to pages that did not exist yet. 8 URLs returned 404 errors, with 26 links pointing to them across the site.

**What it cost:**
- 8 broken pages wasting crawl budget
- 26 internal links passing zero value (and potentially signaling poor site quality)
- Users hitting dead ends

**The rule that prevents it:**
> Before launch, audit ALL href= values. Every link target must exist. Run: `grep -r 'href="/' app/` and verify every target page.tsx exists.

**How to verify:** Run the grep command above. For every unique href target, verify the corresponding page file exists. Automate this as a pre-deploy check.

---

### Mistake 14: Pricing Transparency Failure

**What happened:** One page showed the service cost as $60, another showed $100. A real customer (JPCheng) caught the discrepancy and lost trust immediately.

**What it cost:**
- Lost a ready-to-buy customer
- Destroyed trust signal — once a customer sees inconsistent pricing, they question everything
- Required auditing every mention of pricing across the entire site

**The rule that prevents it:**
> Radical pricing transparency. Show exact breakdown: Year 1 cost, Year 2+ cost, what each component costs, what's included vs not included. Zero conflicting numbers anywhere on the site. Maintain a single pricing source of truth and reference it from every page.

**How to verify:** Search the entire codebase for every price mention. Verify all amounts are consistent. Use a shared pricing component or constants file to prevent drift.

---

### Mistake 15: Overly Ambitious Timeline

**What happened:** Phase plans assumed content could be produced faster than reality allowed. Every phase took 2-3x longer than planned, leading to burnout risk and incomplete execution.

**What it cost:**
- Burnout risk for the team
- Incomplete execution — pages shipped without full optimization
- Quality sacrificed for speed, creating more rework later
- Morale damage when deadlines were consistently missed

**The rule that prevents it:**
> Plan for 2x the time. Execute 5 pages perfectly rather than 50 pages poorly. The top 3 highest-impact items before anything else.

**Realistic Month 1-3 roadmap:**

| Period | Target | Gate |
|--------|--------|------|
| Month 1, Week 1-2 | 5-10 hub/pillar pages (3,000+ words each) | 0 thin pages, 0 orphaned pages |
| Month 1, Week 3-4 | 15-20 spoke pages (1,500+ words each) | 5+ backlinks started |
| Month 2 | 20-30 more spoke pages + 10 comparison pages | 10+ backlinks, first keywords in GSC |
| Month 3 | Refresh Month 1 content with GSC data, prune zero-impression pages | 5-10 keywords in top 20, first organic conversions |

**How to verify:** At the end of each week, check: did we hit the quality gate? If not, do not move to the next phase.

---

## What Actually Worked

Not everything was a mistake. These strategies produced real results:

### Koray's Semantic SEO Framework
- Question-format H2s rank for featured snippets
- 40-word extractive answers in the first sentence of each H2
- Entity-Attribute-Value (EAV) coverage for topical authority
- No hedging language ("costs $100" not "typically costs around $100")
- Tables for comparisons (not prose)
- Numbered lists for processes, bullet lists for attributes

### Programmatic Content at Scale
- Next.js dynamic routes for pattern pages (country pages, state pages)
- Claude API + DataForSEO pipeline for keyword gap identification
- Agent-generated content with human review as a quality gate

### Dual Google + AI Ranking
- 53% of wyomingllc.co traffic came from AI systems
- FAQPage schema on every page contributed to AI citations
- Meta descriptions written for AI citation selection
- Server-rendered HTML ensured LLMs could read all content

---

## Content Standards (From Real Experience)

### H2 Writing Rules
- Every H2 must be a question
- Must include the target entity: "How much does a Wyoming LLC cost?" NOT "How much does it cost?"
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

---

## Internal Link Audit Commands (Run Monthly)

```bash
# Find all internal links
grep -r 'href="/' app/ --include="*.tsx" | grep -v node_modules

# Find all pages that exist
find app/ -name "page.tsx" -not -path "*/components/*"

# Find all links to non-existent pages
# (compare output of both commands — every link target needs a page.tsx)

# Find duplicate schema headlines
grep -r '"headline"' app/ --include="*.tsx" | sort

# Find all price mentions (check for consistency)
grep -rn '\$[0-9]' app/ --include="*.tsx"
```

---

## Pre-Launch Anti-Pattern Checklist

This checklist must be completed before any new site goes live. Every item maps to a specific mistake above. Do not launch until every box is checked.

### Phase 1: Before Any Code (Prevents Mistakes 1, 2, 3, 9, 10, 15)

- [ ] **Complete keyword-to-URL map exists** — every page planned before writing (Mistake 2)
- [ ] **Cannibalization check passed** — no two URLs target the same primary keyword (Mistake 2)
- [ ] **Full topical map drawn** — hub-and-spoke diagram with every entity, attribute, audience (Mistake 1, 9)
- [ ] **Every planned page can fill 1,500+ words** — if not, merge or skip (Mistake 1)
- [ ] **Conversion funnel designed** — Landing -> Learn -> Trust -> Buy (Mistake 3)
- [ ] **Pricing documented with full transparency** — Year 1, Year 2+, what's included, what's not (Mistake 14)
- [ ] **All synonym redirects planned** — every verb variation for primary actions (Mistake 10)
- [ ] **Off-topic content identified and excluded** — every page serves core topical authority (Mistake 9)
- [ ] **Timeline uses 2x multiplier** — realistic deadlines, quality gates at each phase (Mistake 15)

### Phase 2: Day 1 Technical Setup (Prevents Mistakes 5, 6, 7, 8, 11)

- [ ] **`trailingSlash: true` set in next.config.mjs** (Mistake 6)
- [ ] **All synonym redirects configured in next.config.mjs** (Mistake 10)
- [ ] **Dynamic `app/sitemap.ts` created** — no static XML sitemaps (Mistake 7)
- [ ] **No static sitemap XML files exist in /public/** (Mistake 7)
- [ ] **`app/robots.ts` configured** — blocks /components/, /lib/, /api/ (Mistake 5)
- [ ] **Custom 404 page at `app/not-found.tsx`** with popular links (Mistake 13)
- [ ] **GA4 + Plausible + Microsoft Clarity installed** (Mistake 15 — need data to evaluate)
- [ ] **GSC verification with real code** — not placeholder (Mistake 5)
- [ ] **All security headers configured** (general hygiene)
- [ ] **Link building plan started** — target 5+ DA30+ backlinks in Month 1 (Mistake 8)

### Phase 3: Before Publishing First Page (Prevents Mistakes 3, 5, 14)

- [ ] **Navbar with server-rendered links to all hubs** — test with curl (Mistake 5)
- [ ] **Footer with server-rendered links to all hubs + legal + contact** (Mistake 5)
- [ ] **StickyCTA component built and tested on mobile** (Mistake 3)
- [ ] **WhatsApp floating button built and tested** — 1 tap on mobile (Mistake 3)
- [ ] **FAQ component with auto FAQPage schema** (Mistake 11)
- [ ] **Breadcrumbs with auto BreadcrumbList schema** (Mistake 11)
- [ ] **ValueStack / pricing breakdown component built** (Mistake 14)
- [ ] **Pricing constants file created** — single source of truth for all prices (Mistake 14)

### Phase 4: Before Publishing Any Individual Page (Prevents Mistakes 1, 2, 4, 11, 13, 14)

- [ ] **Page is at or above minimum word count for its type** (Mistake 1)
- [ ] **Primary keyword verified unique** — not assigned to any other URL (Mistake 2)
- [ ] **Hub page already links to this page** (Mistake 4)
- [ ] **This page links to hub + 2-3 siblings** (Mistake 4)
- [ ] **3+ existing pages link to this page** (Mistake 4)
- [ ] **Schema headline matches H1 exactly** (Mistake 11)
- [ ] **Schema is unique to this page** — not copy-pasted from another (Mistake 11)
- [ ] **All href= values point to pages that exist** (Mistake 13)
- [ ] **No pricing discrepancies with any other page on the site** (Mistake 14)
- [ ] **Above-fold CTA visible on mobile** (Mistake 3)
- [ ] **Meta description written for both humans and AI** (AI visibility)

### Phase 5: Weekly Ongoing (Prevents Mistakes 4, 8, 12)

- [ ] **Hub completeness check** — every spoke is linked from its hub (Mistake 4)
- [ ] **Orphan page audit** — no pages with zero inbound links (Mistake 4)
- [ ] **Customer question log reviewed** — new questions added to website within 48 hours (Mistake 12)
- [ ] **Link building progress check** — DR tracking, new backlinks acquired (Mistake 8)
- [ ] **Broken link scan** — no 404s from internal links (Mistake 13)

### Phase 6: Monthly Audit (Prevents All Mistakes)

- [ ] **Full internal link audit** — run commands from audit section above
- [ ] **Price consistency audit** — grep all price mentions, verify consistency (Mistake 14)
- [ ] **Schema uniqueness audit** — grep all headlines, verify uniqueness (Mistake 11)
- [ ] **Thin content audit** — identify any pages below minimum word count (Mistake 1)
- [ ] **Topical authority check** — any off-topic pages published? (Mistake 9)
- [ ] **GSC review** — identify zero-impression pages after 90 days for pruning or improvement

---

## LLM-Specific Lessons from WyomingLLC.co

WyomingLLC.co gets 53%+ of daily traffic from AI systems (ChatGPT, Claude, Perplexity, Gemini) with DR=0. These are the LLM-specific lessons that made that possible:

### What Worked for AI Traffic

1. **Question-format H2s + 40-word answers.** This single pattern made content extractable by both Google featured snippets and LLM citation systems. Every page follows: H2 = question, first sentence = complete answer in 40 words or fewer, no hedging.

2. **FAQPage schema on every page.** 8-10 Q&A pairs per page with 40-80 word answers. Ahrefs data: 3.2x AI citation rate uplift. This alone likely accounts for a significant portion of AI traffic.

3. **Radical data specificity.** "$100 filing fee" not "low fees." "1-3 business days" not "a few days." AI systems extract and cite specific numbers. Vague content gets ignored.

4. **Server-rendered everything.** Client-side only homepage links (Mistake 5) meant AI crawlers saw zero navigation. When fixed to server-rendered, AI crawlers could traverse the full site and index content for training data.

5. **Topical authority = AI authority.** The comprehensive topical map (480+ pages covering every entity-attribute of Wyoming LLC formation) made the site the most comprehensive source. LLMs default to the most comprehensive source when answering questions.

6. **Transparent pricing.** AI systems frequently answer "how much does [service] cost?" When WyomingLLC.co has the most transparent, specific pricing data, AI cites it over competitors who hide pricing behind forms.

### What Hurt AI Traffic (Anti-Patterns)

1. **Thin pages (Mistake 1) were invisible to AI.** 66-168 word pages had nothing for LLMs to extract. Zero AI citations until expanded to 1,500+ words with specific data.

2. **Cannibalization (Mistake 2) confused AI.** 20 pages targeting the same topic meant LLMs couldn't determine which page to cite. They cited neither.

3. **Client-side rendering (Mistake 5) blocked AI crawlers.** GPTBot, ClaudeBot, and PerplexityBot cannot execute JavaScript. If content requires JS hydration, AI systems never see it.

4. **Off-topic content (Mistake 9) diluted AI topic association.** ITIN and crypto pages made the site look less authoritative on Wyoming LLC formation to AI systems.

5. **Generic schema (Mistake 11) wasted AI signals.** FAQPage schema with generic content provided no unique extractable answers for AI systems. Unique schema per page = unique AI citation opportunities.

---

## Summary: The 15 Rules in One Line Each

| # | Mistake | Rule |
|---|---------|------|
| 1 | Thin pages | Never publish under 1,500 words |
| 2 | Cannibalization | One keyword = one URL, map everything first |
| 3 | No conversions | Design conversion funnel before writing content |
| 4 | Orphaned pages | Every page gets 3+ inbound links simultaneously with creation |
| 5 | Client-side links | All navigation must be server-rendered HTML |
| 6 | Trailing slash chaos | Set trailingSlash on Day 1, never change |
| 7 | Sitemap conflicts | One dynamic sitemap only, no static XML |
| 8 | No backlinks | Start link building Week 1, not after content |
| 9 | Off-topic content | Every page serves core topical authority |
| 10 | Synonym explosion | Brainstorm and redirect all synonyms before launch |
| 11 | Generic schema | Every page gets unique schema matching its H1 |
| 12 | Wasted customer questions | Customer questions become content within 48 hours |
| 13 | Broken links | Audit all href values, every target must exist |
| 14 | Pricing inconsistency | Single pricing source of truth, zero conflicting numbers |
| 15 | Unrealistic timelines | Plan for 2x time, execute fewer pages perfectly |
