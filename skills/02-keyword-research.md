---
skill: keyword-research
description: Load when selecting target keywords, evaluating difficulty, clustering keywords, analyzing search intent, mapping keywords to URLs, or deciding what to build next.
version: 1.0.0
last-verified: 2026-04
source: skills/04-keyword-research.md, skills/13-search-intent.md, seo-master/01-semantic-seo-framework.md, seo-council/transcripts/ahrefs/2026-03-18
load: always
triggers: keyword, KD, search volume, opportunity score, DataForSEO, keyword cluster, search intent, SERP analysis, content type, long-tail, traffic potential, query pattern, what to build
---

# Keyword Research

The definitive guide to finding, evaluating, clustering, and mapping keywords for both Google and AI/LLM search. Every decision about what to build or write starts here.

---

## Core Principle

**90.63% of pages on the internet get zero traffic from Google** because they target topics nobody searches for.

Every page must target a keyword with verified search volume. No exceptions. Publishing without keyword research is joining the 90% that get zero traffic.

This stat comes from Ahrefs' analysis of their entire database. It is not hyperbole. It is the default outcome for any page published without research.

---

## How Keyword Difficulty (KD) Works

### Ahrefs Methodology

Ahrefs KD is based on ONE thing: how many referring domains (unique linking websites) point to the top-10 ranking pages for that keyword.

| KD Score | What It Means |
|----------|--------------|
| 0-5 | Top-ranking pages have almost no backlinks |
| 6-10 | Top-ranking pages have a handful of backlinks |
| 11-20 | Top-ranking pages have tens of backlinks |
| 21-30 | Top-ranking pages have dozens to low hundreds of backlinks |
| 31-50 | Top-ranking pages have a few hundred backlinks |
| 51-70 | Top-ranking pages have hundreds of backlinks |
| 71-90 | Top-ranking pages have many hundreds to thousands of backlinks |
| 90+ | Top-ranking pages have thousands of backlinks |

### KD Is Absolute, Not Relative

Ahrefs (Dec 2025): "Think of KD like a speed limit sign. The sign says 70 MPH, but your personal difficulty depends on the car you're driving. In a Formula 1 car (high authority, strong topical relevance), 70 MPH is effortless. On a bike (new domain), even 30 MPH is impossible."

KD tells you the average competition level. Your actual difficulty depends on your DR, topical authority, existing rankings, and backlink profile.

### KD Interpretation for New Sites (DR 0-15)

| Timeline | Target KD | Why |
|----------|----------|-----|
| First 3-6 months | KD 0-15 only | You have no authority, no topical signals, no backlinks |
| 6-12 months (with 3+ indexed pages, growing DR) | KD 15-30 becomes achievable | Early topical authority forming |
| 12+ months (with real domain authority) | KD 30+ becomes possible | Requires sustained effort and link acquisition |

### KD Interpretation for Established Sites (DR 20+)

| Situation | Target KD |
|-----------|----------|
| DR 20+ with topical authority in the niche | KD up to 30-35 is achievable |
| DR 30+ with strong topical authority | KD up to 40-50 depending on niche |
| DR 50+ established brand | Higher KD achievable but still check SERP |

**Topical authority reduces effective difficulty.** If you already rank for 10 markup-related keywords, the 11th is easier. Google already trusts you on that topic.

### Beyond KD: The Full Difficulty Check (Ahrefs 2026)

KD alone is insufficient. There is no way a single number captures a billion-dollar algorithm. Dig deeper:

1. **Referring domains column** in the SERP results. How many websites link to each ranking page? More domains = stronger page.
2. **DR (Domain Rating) of top-ranking pages.** Higher DR = more authoritative site = tougher competition. Look for low DRs in the top 10 as a positive signal.
3. **Content type match.** If top results are all tools and you are writing a blog post, KD is irrelevant because you will not rank regardless.

For Ahrefs users: set a max KD of 20, add a lowest DR filter around the same range, and filter for commercial intent. This surfaces keywords passing all three tests.

---

## Seed Keyword Method

### Step 1: Brainstorm Seeds

Think about what your target audience types to find what you offer. Seeds are broad, 1-2 word terms related to your niche.

Good seeds for tool sites:
- `markup calculator`
- `yes or no wheel`
- `gamertag generator`
- `bonus tax calculator`

Good seeds for SaaS:
- `cold email tool`
- `time tracking software`
- `LLC formation`

### Step 2: Use AI for Brainstorming (Not Validation)

Ahrefs (2026): "ChatGPT can be useful for brainstorming seeds. But it won't give you real search volumes. Use it for ideas, then validate with DataForSEO."

The 10-second hero prompt (from Ahrefs 2026 tutorial):

> "I'm doing keyword research for my [type of site], which makes money through [revenue model]. My target audience is [audience description]. Give me 10 seed keywords that are 1 to 2 words max, and 5+ modifiers that will help me surface appropriate content formats I can use in my keyword research. The seeds and modifiers should not share the same words."

This gives you seeds AND modifiers (like "best," "how to," "free," "calculator," "vs," "alternative") to combine.

### Step 3: Expand with Tools

Take seeds and paste them into DataForSEO Keywords Explorer or Ahrefs Keywords Explorer.

- Use "Matching Terms" report for direct variations
- Use "Related Terms" report for semantically connected keywords
- Add modifiers using the Include filter to surface hundreds or thousands of real keyword ideas

### Step 4: Apply Modifiers as Multipliers

Combine seeds with modifiers systematically:

| Seed | + Modifier | = Keyword Ideas |
|------|-----------|----------------|
| markup calculator | free | free markup calculator |
| markup calculator | how to | how to calculate markup |
| markup calculator | vs | markup vs margin calculator |
| LLC formation | best | best LLC formation service |
| LLC formation | cost | LLC formation cost |

This is the "keyword multiplier" technique. A handful of seeds with good modifiers produces hundreds of real search queries.

### Step 5: Validate with Real Data

Never trust brainstormed keywords without validation. Check every keyword in DataForSEO or Ahrefs for:
- Actual monthly search volume
- Keyword difficulty score
- Traffic potential of the top-ranking page
- SERP composition (tools vs blogs vs products)

---

## Keyword Clustering

### What It Is

Keyword clustering = grouping keywords that share the same search intent and should be targeted by ONE page.

You do not create separate pages for every keyword variation. One page targets an entire cluster.

### How to Identify a Cluster

If all keywords in a group would be equally satisfied by the same page, they belong in one cluster.

### Example: Markup Calculator Cluster

| Keyword | Role | Action |
|---------|------|--------|
| markup calculator | PRIMARY keyword | Target in H1, title tag, URL |
| markup percentage calculator | SAME PAGE | Naturally covered by the tool |
| markup formula | SAME PAGE | Cover in FAQ or supporting content section |
| markup vs margin calculator | SAME PAGE | Add as a secondary feature or FAQ |
| free markup calculator | SAME PAGE | Use in meta description as the angle |

### Example: LLC Formation Cluster

| Keyword | Role | Action |
|---------|------|--------|
| Wyoming LLC formation | PRIMARY keyword | H1, title, URL |
| how to form a Wyoming LLC | SAME PAGE | H2 section with step-by-step |
| Wyoming LLC cost | SAME PAGE | H2 with pricing breakdown |
| Wyoming LLC requirements | SAME PAGE | H2 with requirements list |
| form LLC in Wyoming online | SAME PAGE | Covered by CTA and process section |

### Clustering Rules

1. One page per cluster. Never split a cluster across multiple pages.
2. If Google shows the same pages ranking for two keywords, those keywords are one cluster.
3. If Google shows different pages for two keywords, they are separate clusters requiring separate pages.
4. The primary keyword gets the H1, title tag, and URL slug. Secondary keywords become H2s, FAQs, or natural mentions.
5. Do not create keyword cannibalization by building two pages targeting the same cluster.

---

## Traffic Potential vs Search Volume

### Why Traffic Potential Matters More

Search volume tells you how many people search for ONE keyword. Traffic potential tells you how much traffic the top-ranking page actually gets from ALL keywords it ranks for.

A page ranking for `markup calculator` (22,200 monthly searches) probably also ranks for:
- markup percentage calculator (8,100)
- how to calculate markup (4,400)
- markup formula (3,600)
- plus dozens of long-tail variations

**Total traffic potential: 40,000+/month** -- far more than the head term alone.

### How to Check Traffic Potential

1. Search for your target keyword in Ahrefs or DataForSEO
2. Look at the #1 ranking page
3. Check how many total keywords that page ranks for
4. Check that page's total estimated organic traffic
5. That number is your real traffic ceiling for this cluster

### When Volume and TP Diverge

- High volume, low TP: The keyword is a "trap." AI Overviews or featured snippets may eat all the clicks. People get their answer without clicking.
- Low volume, high TP: The head term is niche but the page ranks for many long-tail variations. Often better opportunities.

---

## Opportunity Score Formula

### The Formula

**Opportunity Score = Search Volume / (KD + 1)**

Higher score = better opportunity. The +1 prevents division by zero for KD 0 keywords.

### How to Use It

Calculate the score for every keyword candidate, then rank them. Build the highest-scoring opportunities first.

### Examples

| Keyword | Volume | KD | Opportunity Score |
|---------|--------|----|--------------------|
| Yes/No wheel | 201,000 | 8 | 22,333 |
| No tax on overtime calculator | 201,000 | 16 | 11,824 |
| Markup calculator | 22,200 | 1 | 11,100 |
| Gamertag generator | 14,800 | 0 | 14,800 |
| MX record checker | 3,600 | 25 | 138 |

The Yes/No wheel has the highest opportunity score in the network. Build it first.

### Limitations

Opportunity Score does not account for:
- Monetization potential (a high-volume keyword with no monetization path is worthless)
- AI Overview cannibalization (high volume means nothing if Google answers the query directly)
- Business alignment (the keyword must fit your site's topical map)

Always cross-reference Opportunity Score with business potential and AI Overview presence before committing.

---

## SERP Analysis Before Building

Before spending time building any page, check the actual SERP. Four checks:

### Check 1: Content Type

What type of content dominates the top 10?

| If SERP Shows | You Must Build |
|---------------|---------------|
| Interactive tools/calculators | A tool. Blog posts will not rank. |
| Blog posts/articles | A blog post. A standalone tool may not rank. |
| Product/category pages | A product or category page. |
| Video results | A page with embedded video, or a YouTube video. |

If the top 5 results are all tools, you MUST build a tool. Ahrefs proved this directly: they got 516% more traffic by adding a free tool to a landing page that previously had no tool.

### Check 2: Competitor Authority

What are the DR/backlink profiles of competing pages?

- All top results are DR 70+ with hundreds of backlinks? Extremely hard to compete.
- Mix of high and low DR? Opportunity exists.
- Top results from small independent sites? Very beatable.

For KD 0 keywords: the SERP is often dominated by low-quality or old pages. This is your opportunity. Replace them with something better.

### Check 3: Site Types

Are top results from:
- Large brands (Wikipedia, Forbes, major SaaS)? Hard to displace without significant authority.
- Niche/independent sites? Easier to outperform with better content.
- UGC platforms (Reddit, Quora)? Major opportunity. These rank because nothing better exists.

### Check 4: SERP Features

- **Featured snippet present?** Win it with structured FAQ content and 40-word extractive answers.
- **People Also Ask (PAA) box?** Add H2s answering every PAA question.
- **AI Overview present?** Assess whether the AI Overview fully answers the query. If yes, click-through will be low even if you rank #1. Ahrefs 2026: "If the AI overview nails it, that keyword might be a trap."
- **Tool carousel?** Your tool needs to be best-in-class to appear here.

### AI Overview Assessment (Critical for 2026)

Ahrefs (2026): Even ranking #1 loses ~35% of clicks when an AI Overview appears. Before committing to any keyword:

1. Google the keyword
2. Look at the AI Overview
3. Ask yourself: "Am I satisfied with this answer, or do I need to click to learn more?"
4. If the AI Overview fully answers the query, that keyword is a trap for informational content

**Tool keywords are currently AI-proof.** Search "backlink checker" -- no AI Overview. "Mortgage calculator" -- nothing. "Random name generator" -- nothing. AI cannot replace interactive tools (yet). This is why tool-first strategies are dominant in 2026.

---

## Search Intent Types

### The Four Types

| Intent Type | What the User Wants | Example Query | Content to Build |
|-------------|-------------------|--------------|-----------------|
| Informational | Learn something | "what is markup" | Blog post, definition, guide |
| Commercial | Compare before buying | "best markup calculator" | Comparison/list page |
| Transactional | Use or buy immediately | "markup calculator" | Interactive tool, product page |
| Navigational | Find a specific site | "ecomstudio markup calculator" | Your branded tool page |

### For Tool Sites

The primary intent for calculator/generator/checker queries is TRANSACTIONAL. Users want to USE the tool immediately. They are not reading about it.

### The Three Cs of Search Intent

For every keyword you target, analyze three dimensions from the top-ranking SERP:

#### C1: Content Type

What is the dominant format in the SERP?

| Dominant Result Type | You Must Build |
|---------------------|---------------|
| Interactive tool/application | A working tool |
| Blog post/article | A written article |
| Product page | A product page |
| Video | Video content (or page with video) |

#### C2: Content Format

Within the content type, what specific format do top results use?

- For informational keywords: how-to guide, listicle, definition page, comparison table
- For tool keywords: the format IS the tool. Interactive, instant, no signup required
- For commercial keywords: "best X" listicle, comparison table, review roundup

**For tool pages:** The tool must be the FIRST thing visible on the page. Not an explanation, not a signup form. The tool itself, working immediately on page load.

#### C3: Content Angle

What specific approach or hook do top results emphasize?

| Common Angles | When to Use |
|--------------|------------|
| "Free" | Most common angle for tool queries |
| "Instant" | Emphasize no loading, no waiting |
| "No signup required" | Friction reduction |
| "2026" / current year | Freshness-sensitive queries |
| "AI-powered" | Generator and creative tool queries |
| "Real-time" | Checker and monitoring tool queries |

Every tool page should include at minimum two angle signals in the title tag and intro paragraph.

### How to Identify Intent from the SERP

1. Search the keyword in Google (or check DataForSEO SERP data)
2. Look at the top 5-10 results
3. Answer: What content type dominates? What format? What angle?
4. Match ALL THREE Cs exactly

If you match two out of three, you will underperform. All three must align.

### Multi-Intent Keywords

Many keywords have mixed intent. Example: "no tax on overtime" has both informational (what is this policy?) and transactional (show me a calculator) intent.

**Solution:** Build the tool AND include comprehensive informational content around it. One page satisfies both intents. This is why tool pages need 800+ words of supporting content. Informational searchers get answers; transactional searchers get the tool.

### SERP Volatility as Intent Signal

Keywords with stable rankings over time have clear, reliable intent. Keywords with fluctuating rankings have ambiguous or evolving intent.

- Stable intent keywords (e.g., "markup calculator"): Safe to build. Intent is clear and consistent.
- Volatile intent keywords (e.g., trending policy-related queries): Monitor SERP before investing heavily. Intent may shift.

### Search Intent by Tool Type

| Tool Type | Primary Intent | Content Type | Key Angle |
|-----------|---------------|-------------|-----------|
| Calculators | Transactional | Interactive tool | Free, instant, no signup |
| Generators | Transactional | Interactive tool | Free, AI-powered, instant |
| Checkers | Transactional | Interactive tool | Free, real-time results |
| Spinners/Random tools | Transactional | Interactive game/tool | Free, instant, shareable |
| Explainers around tools | Informational | Blog post/definition | Comprehensive, clear |

---

## BID Method: The 3-Test Filter (Ahrefs 2026)

Before committing to any keyword, it must pass all three tests:

### Test 1: Business Potential

"If I rank #1 for this keyword, does it actually help my business?"

- A keyword like "what is espresso" has volume but zero purchase intent. The searcher is not buying anything.
- A keyword like "best espresso machine under $500" has less volume but the searcher has set a budget and is ready to buy.
- Always choose keywords that move the needle for revenue, not just traffic.

### Test 2: Intent Match

Can you match the searcher's intent with the content type you can build?

- If the SERP shows all product/category pages and you can only write blog posts, skip it.
- If the SERP shows tools and you can build a tool, proceed.
- The SERP tells you what searchers want. Match it or move on.

### Test 3: Difficulty Check

Can you realistically rank for this keyword given your current DR, backlinks, and topical authority?

- Check KD score as a starting point
- Check referring domains of top-ranking pages
- Check DR of top-ranking sites
- If you see low-DR sites in the top 10, that is a green light

If a keyword passes all three tests (Business potential + Intent match + Difficulty), target it. Unless the AI Overview is so good there is no reason for anyone to click through.

---

## Keyword-to-URL Mapping

### One Keyword Cluster = One URL

Every keyword cluster maps to exactly ONE URL. Never target the same cluster with multiple pages.

### Mapping Rules

1. **Primary keyword becomes the URL slug.** `/markup-calculator/` not `/tools/calc/markup-v2/`
2. **Primary keyword appears in H1, title tag, and meta description.**
3. **Secondary keywords become H2 sections, FAQ questions, or natural body text.**
4. **Track the mapping in a spreadsheet.** Before creating any new page, check the map for conflicts.

### Mapping Format

```
| Keyword Cluster | Primary Keyword | URL | Page Type | Status |
|----------------|----------------|-----|-----------|--------|
| Markup calculation | markup calculator | /markup-calculator/ | Tool | Live |
| Markup definition | what is markup | /what-is-markup/ | Blog | Planned |
| Markup vs margin | markup vs margin | /markup-vs-margin/ | Blog | Planned |
```

### Cannibalization Prevention

Before building any page:
1. Search your own site for the target keyword cluster
2. Check GSC for any existing pages getting impressions for these keywords
3. If an existing page already targets this cluster, update that page instead of creating a new one
4. If two pages are cannibalizing, merge the weaker into the stronger and 301 redirect

---

## Long-Tail Keyword Strategy for New Sites

### Why Long-Tail First

New sites (DR 0-15) cannot compete on head terms. Long-tail keywords (3-5+ words, low volume, low KD) are the entry point.

### Characteristics of Good Long-Tail Keywords

- 3-5+ words in the query
- KD 0-10
- Monthly volume 50-2,000
- Clear, specific intent (easy to match with content)
- Head term in the cluster has high traffic potential (so the long-tail page eventually ranks for the head term too)

### Long-Tail Discovery Methods

1. **Ahrefs/DataForSEO "Questions" filter:** Shows question-format keywords (how, what, why, when)
2. **Google People Also Ask:** Expand all PAA boxes for your seed keyword. These are real questions real users ask.
3. **Google Autocomplete:** Type your seed and note every suggestion
4. **ChatGPT brainstorming:** "What questions would a [persona] ask about [topic]?" Then validate every suggestion with real search data.
5. **Reddit/Quora mining:** Search your topic on these platforms. The exact phrasing people use becomes keyword candidates.
6. **Google Search Console "Queries" tab:** If you have an existing site, find queries you get impressions for but do not rank well. These are long-tail opportunities.

### Long-Tail to Head Term Pipeline

The strategy is not to stay on long-tail forever. The path:

1. Publish 5-10 long-tail pages in a cluster (KD 0-10)
2. Build topical authority through comprehensive coverage
3. Internal link all long-tail pages to a pillar page targeting the head term
4. As authority grows, the pillar page begins ranking for the head term
5. Graduate to medium-difficulty keywords (KD 15-30)

---

## Query Pattern Research for LLM Optimization

### How Users Phrase Questions Differently in ChatGPT vs Google

| Google Query Style | ChatGPT/LLM Query Style |
|-------------------|------------------------|
| "markup calculator" | "calculate the markup percentage on a product that costs $50 and sells for $75" |
| "best LLC formation service" | "what's the best way to form an LLC in Wyoming if I'm a non-US resident?" |
| "no tax on overtime" | "explain the no tax on overtime policy and how much I'd save making $60k" |
| Short, keyword-based | Conversational, context-rich, natural language |

### Why This Matters

AI search (ChatGPT, Google AI Overviews, Perplexity) uses conversational queries. If your content only targets Google-style keyword phrases, you miss AI search entirely.

### How to Research LLM Query Patterns

1. **Ask ChatGPT directly:** "What questions do people ask you about [your topic]?" Note the phrasing patterns.
2. **Use Ahrefs Brand Radar:** Enter your brand and competitors. See which AI queries mention competitors but not you. These are your LLM keyword gaps.
3. **Monitor AI search manually:** Search your primary queries in ChatGPT, Perplexity, and Google AI Mode. Note who gets cited and what content they pull from.
4. **Write conversationally:** Structure content with H2s as natural-language questions, not keyword-stuffed headers. AI systems parse conversational headings better.
5. **Add TL;DR summaries:** AI overviews and LLMs love pulling from concise summary sections at the top of articles.
6. **Include tables and structured data:** LLMs preferentially pull from tables, lists, and structured comparisons over prose paragraphs.

### Content Structure for Dual Optimization (Google + LLM)

- H1: Primary keyword (Google-optimized)
- TL;DR section immediately after H1 (LLM-optimized)
- H2s: Natural-language questions (dual-optimized)
- Tables and comparison charts (LLM-optimized)
- 40-word extractive answers after each H2 (featured snippet + LLM)
- FAQ section at bottom with schema (dual-optimized)

---

## Keyword Research for Programmatic Pages

### What Programmatic Pages Are

Templatized pages generated at scale. Each page targets a specific keyword variation using the same template with different data.

Examples:
- `/llc-formation-[state]/` (50 state pages)
- `/[tool]-alternative/` (competitor alternative pages)
- `/[integration]-integration/` (SaaS integration pages)
- `/[city]-[service]/` (local service pages)

### Keyword Research Process for Programmatic Pages

1. **Identify the template pattern.** What is the repeatable keyword structure? `[modifier] + [core term]` or `[core term] + [location]`
2. **Validate the pattern has volume.** Check 5-10 variations to confirm real search demand exists across the pattern.
3. **Check KD across the pattern.** Programmatic pages work best when the entire pattern is low KD (0-15).
4. **Verify intent is consistent.** All variations in the pattern should have the same intent type. If some are informational and others transactional, the template will not satisfy both.
5. **Assess thin content risk.** Every programmatic page needs 60%+ unique content. If the template produces near-identical pages, Google will classify them as thin/duplicate.

### Programmatic Keyword Patterns That Work

| Pattern | Example | Why It Works |
|---------|---------|-------------|
| [competitor] alternatives | "HubSpot alternatives" | High buying intent, low competition, listicle format |
| [competitor] vs [you] | "Hubstaff vs [your tool]" | Bottom-of-funnel, comparison intent |
| [tool] for [use case] | "time tracking for remote teams" | Specific audience targeting |
| [service] in [location] | "LLC formation in Wyoming" | Local/geographic intent |
| [integration] integration | "Salesforce HubSpot integration" | Jobs-to-be-done, painkiller positioning |

### Competitor Alternative Pages (Special Case)

These deserve special attention because they rank fast (often within days) and drive high-intent signups.

Kevin Indig's framework:
- URL: `/[competitor]-alternatives/`
- H1: "Best [Competitor] Alternatives in [Year]"
- Quick summary table at top (LLM-friendly)
- Position your product as #1 with honest pros/cons
- Show product in action with screenshots
- Include G2/Capterra ratings and pricing
- Fair comparison of competitors (not trash-talking)
- Back everything with customer research

These pages often have low search volume (10-50/month) but extremely high conversion rates because the searcher is actively evaluating alternatives.

---

## Monthly Keyword Monitoring Process

### Weekly Quick Check

- Review GSC "Queries" report for new impressions on untargeted keywords
- Check if any existing pages are losing position (early warning)
- Note new PAA questions appearing for primary keywords

### Monthly Full Review

1. **New keyword discovery:** Run seed keywords through DataForSEO/Ahrefs. Look for new keyword opportunities that did not exist last month.
2. **Position tracking:** Check rank tracking for all target keywords. Flag any that dropped 5+ positions.
3. **Competitor movement:** Check if new competitors entered the SERP for your primary keywords.
4. **AI Overview changes:** Search your top 10 keywords in Google. Note which now have AI Overviews that did not before (or vice versa).
5. **LLM citation check:** Search your top 5 queries in ChatGPT. Note whether you are cited, competitors are cited, or no one is cited.
6. **Keyword map update:** Add newly discovered keywords to the master keyword-to-URL map. Identify gaps.
7. **Opportunity Score recalculation:** Recalculate for any keywords where volume or KD changed significantly.

### Quarterly Deep Dive

- Full re-pull of keyword data for all target clusters
- Competitor content gap analysis (see 03-competitive-analysis skill)
- Topical map expansion based on new keyword discoveries
- Strategic reassessment: are we targeting the right topics given market changes?

---

## Tools

### Primary Research Tools

| Tool | Use For | Notes |
|------|---------|-------|
| DataForSEO | Bulk keyword data, SERP data, programmatic research | API-first, great for automation and custom scripts |
| Ahrefs Keywords Explorer | Seed expansion, KD scores, traffic potential, SERP analysis | Gold standard for keyword research UI |
| Ahrefs Brand Radar | AI/LLM keyword gaps, competitor AI mentions | New tool for AI search optimization |
| Google Search Console | Existing keyword performance, impression data, untargeted query discovery | Free, essential for monitoring |
| Google Keyword Planner | Volume validation, seasonal trends | Free, but volumes are ranges not exact |
| ChatGPT | Seed brainstorming, query pattern research, persona-based question generation | Never trust for search volumes. Ideas only. |

### Validation Tools

| Tool | Use For |
|------|---------|
| Google SERP (manual search) | Intent verification, AI Overview check, SERP feature check |
| Ahrefs Free KD Checker | Quick difficulty assessment without full subscription |
| Google Trends | Seasonal patterns, trending topics, geographic interest |

### Monitoring Tools

| Tool | Use For |
|------|---------|
| Google Search Console | Position tracking, impression monitoring, new query detection |
| Ahrefs Rank Tracker | Automated position tracking at scale |
| DataForSEO SERP Tracking | Programmatic SERP monitoring |

---

## Quick Reference: Keyword Research Checklist

Before targeting any keyword:

- [ ] Verified search volume exists (DataForSEO or Ahrefs)
- [ ] KD is within your site's achievable range
- [ ] Traffic potential checked (not just head term volume)
- [ ] Opportunity Score calculated and compared to alternatives
- [ ] SERP analyzed: content type, competitor authority, site types, SERP features
- [ ] AI Overview assessed: does it fully answer the query?
- [ ] Search intent identified (informational/commercial/transactional/navigational)
- [ ] 3 Cs analyzed (content type, content format, content angle)
- [ ] BID test passed (business potential, intent match, difficulty)
- [ ] Keyword cluster defined (primary + secondary keywords)
- [ ] URL mapped (no conflicts with existing pages)
- [ ] Added to master keyword-to-URL map
- [ ] LLM query patterns considered for content structure
