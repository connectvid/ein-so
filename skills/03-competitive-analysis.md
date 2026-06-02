---
skill: competitive-analysis
description: Load when analyzing competitors, finding content gaps, evaluating competitor backlinks, assessing who ranks for your target keywords, or planning competitive content strategy.
version: 1.0.0
last-verified: 2026-04
source: skills/04-keyword-research.md (SERP analysis), seo-master/01-semantic-seo-framework.md (content gaps, topical maps), seo-master/09-content-audit.md (competitor monitoring), seo-council transcripts (Indig, Diggity, Ahrefs)
load: on-demand
triggers: competitor, competition, content gap, SERP competitor, backlink profile, competitor analysis, who ranks, competitive, alternative page, comparison page, competitor schema, market analysis
---

# Competitive Analysis

The definitive guide to identifying, analyzing, and outperforming your SERP competitors across both Google and AI/LLM search. This skill turns competitor research into prioritized content decisions.

---

## Foundational Principle: SERP Competitors, Not Business Competitors

Your real competitors are the sites that rank for your target keywords. These are often NOT the same as your business competitors.

### Why This Distinction Matters

- A business competitor is someone selling the same product/service to the same audience
- A SERP competitor is whoever occupies the top 10 positions for your target keywords
- Reddit, Quora, Wikipedia, niche blogs, and tool aggregators are often your biggest SERP competitors despite not being business competitors at all
- You must analyze and beat SERP competitors, not just business competitors

### How to Identify Your Real SERP Competitors

#### Method 1: Manual SERP Review

1. List your top 20 target keywords
2. Search each keyword in Google (use incognito mode, target country VPN if needed)
3. Record every domain that appears in the top 10 for each keyword
4. Count frequency: which domains appear most often across your keywords?
5. The domains appearing 5+ times across your keyword set are your primary SERP competitors

#### Method 2: Ahrefs Competing Domains

1. Enter your domain in Ahrefs Site Explorer
2. Go to "Competing Domains" report
3. This shows domains that rank for the same keywords you rank for (or want to rank for)
4. Sort by "Common Keywords" to find the most overlapping competitors

#### Method 3: DataForSEO SERP Analysis

1. Pull SERP data for all your target keywords via API
2. Extract all ranking domains
3. Aggregate by domain and count appearances
4. Filter to domains appearing in 20%+ of your target SERPs

#### Method 4: Category-Level Identification

For each keyword cluster/topical area, identify the top 3 SERP competitors separately. Different clusters may have different competitors:

| Keyword Cluster | SERP Competitor 1 | SERP Competitor 2 | SERP Competitor 3 |
|----------------|-------------------|-------------------|-------------------|
| Markup calculators | omnicalculator.com | calculatorsoup.com | shopify.com |
| LLC formation | zenbusiness.com | legalzoom.com | nolo.com |
| Cold email tools | hunter.io | lemlist.com | reply.io |

---

## Competitor Content Gap Analysis

### What It Is

Content gap analysis reveals what your competitors rank for that you do not. Every gap is a potential page to create.

### Step-by-Step Process

#### Step 1: Pull Competitor Keywords

Using Ahrefs:
1. Go to Site Explorer > enter competitor domain
2. Go to "Organic Keywords" report
3. Export the full keyword list
4. Repeat for your top 3-5 SERP competitors

Using DataForSEO:
1. Pull organic keywords for each competitor domain via API
2. Export all keywords with position, volume, and traffic estimates

#### Step 2: Find Keywords They Have, You Do Not

Using Ahrefs Content Gap tool:
1. Enter your domain as the target
2. Enter 3-5 competitor domains
3. Filter to keywords where at least 2 competitors rank but you do not
4. Sort by volume or traffic potential

Manually:
1. Combine all competitor keyword lists
2. Cross-reference against your own ranking keywords
3. Keywords that appear in competitor lists but not yours = content gaps

#### Step 3: Prioritize the Gaps

Not all gaps are worth filling. Score each gap:

| Factor | Weight | How to Assess |
|--------|--------|--------------|
| Search volume | High | DataForSEO/Ahrefs volume data |
| KD feasibility | High | Is the KD within your achievable range? |
| Business relevance | Critical | Does this keyword serve your business goals? |
| Intent match | High | Can you build the content type the SERP demands? |
| Topical map fit | Medium | Does this keyword belong in your topical map? |
| AI Overview status | Medium | Is the query being answered by AI without clicks? |

#### Step 4: Map Gaps to Content Actions

| Gap Type | Action |
|----------|--------|
| Competitor has a page, you have nothing | Create a new page targeting this cluster |
| Competitor page is thin, yours is missing | Create a better page (easy win) |
| Competitor page is strong, yours is missing | Create a page + plan backlink acquisition |
| Competitor ranks for related queries you already cover | Update existing page to include these queries |

---

## Competitor Backlink Profile Analysis

### Why It Matters

Backlinks remain one of Google's strongest ranking signals. Understanding where competitors get their links reveals both the difficulty of competing and specific link opportunities for you.

### What to Analyze

#### Total Referring Domains

| Metric | What It Tells You |
|--------|------------------|
| Total referring domains to the domain | Overall site authority level |
| Total referring domains to the specific ranking page | Page-level competition |
| Rate of new referring domains per month | Growth velocity (are they actively building?) |

#### Link Quality Assessment

For each competitor's top backlinks:

1. **DR of linking domains.** Are they getting DR 50+ links or DR 10 links?
2. **Relevance of linking domains.** Are links from topically relevant sites or random directories?
3. **Link type.** Editorial mentions, guest posts, resource pages, or paid/PBN links?
4. **Anchor text distribution.** What anchor text ratios are they using? (Exact match, brand, generic, URL)
5. **Do-follow vs no-follow ratio.** Natural profiles have a mix.

#### Actionable Link Opportunities

Extract competitor backlinks that you can also get:

| Link Source Type | How to Replicate |
|-----------------|-----------------|
| Resource page links | Find the resource page, submit your tool/content |
| Guest post links | Pitch the same publication with a unique angle |
| Directory/listing links | Submit to the same directories |
| Broken link targets | If the competitor's linked page is dead, pitch yours as a replacement |
| Podcast/interview links | Get on the same podcasts (Indig's strategy: personalized Loom video pitch) |
| Listicle placements | Get placed in the same "best X" articles |

#### Link Gap Analysis

1. Export competitor backlinks from Ahrefs
2. Export your backlinks
3. Find domains linking to competitors but not to you
4. Filter by DR 30+ and topical relevance
5. These are your priority outreach targets

---

## Competitor Content Structure Analysis

### What to Look For

How competitors organize their pages and sites reveals what Google rewards in your niche.

#### Page-Level Structure

For each top-ranking competitor page, document:

| Element | What to Record |
|---------|---------------|
| H1 | Exact heading text and keyword placement |
| H2s | All section headings (this shows their content outline) |
| Word count | Total content length |
| Content type | Tool, blog post, comparison, guide, product page |
| Above-the-fold | What appears first: tool, text, image, video? |
| FAQ section | Present? How many questions? What questions? |
| Tables/charts | Are they using structured data presentation? |
| Images/video | Count and type of visual content |
| CTAs | Placement, type, and messaging of calls to action |
| Internal links | How many, where they link to, anchor text used |
| External links | How many, what sources they cite |

#### Site-Level Architecture

| Element | What to Record |
|---------|---------------|
| Total indexed pages | How large is their content footprint? |
| Topical map structure | How do they organize their content clusters? |
| Pillar-cluster model | Do they use hub pages with supporting content? |
| URL structure | Flat vs nested, keyword in URL patterns |
| Navigation | How do they expose content to users and crawlers? |
| Programmatic pages | Do they use templatized pages? What patterns? |
| Blog vs tools split | Ratio of informational to transactional content |

### How to Use This Intelligence

1. **Match the minimum.** If all top competitors have 2,000+ word pages with FAQ sections and embedded tools, you need at least that.
2. **Beat the structure.** Find structural elements competitors miss (no FAQ schema, no video, poor mobile experience) and include them.
3. **Identify the template.** If competitors use a consistent page template that ranks well, understand why and build your own version.

---

## Competitor Schema Analysis

### Why Schema Matters Competitively

Schema markup directly influences rich results (stars, FAQs, breadcrumbs, product info). If competitors have rich results and you do not, they will get higher CTR even at the same position.

### What to Check

For each top-ranking competitor page:

1. **Run Google's Rich Results Test** on the URL
2. **Check Schema Markup Validator** for the full structured data
3. Document which schema types they use:

| Schema Type | Competitive Impact |
|------------|-------------------|
| Article | Basic but required for blog content |
| FAQPage | Expands SERP listing with FAQ dropdowns |
| HowTo | Step-by-step rich results |
| Product + AggregateRating | Star ratings in SERP |
| BreadcrumbList | Navigation path in SERP |
| SoftwareApplication | For tool/SaaS pages |
| ItemList | For listicle/comparison pages |
| Organization + sameAs | Entity disambiguation, Knowledge Panel |

### Finding Schema Gaps

1. Check if competitors have schema you lack (they get rich results, you do not)
2. Check if competitors are MISSING schema you could add (your opportunity to stand out)
3. Pay special attention to FAQPage and ItemList schema, as these are the most impactful for SERP real estate

---

## Competitor Topical Authority Assessment

### How to Gauge a Competitor's Topical Authority

Topical authority is the single most important ranking factor in modern SEO (per the Semantic SEO Framework). Assessing a competitor's topical authority tells you how hard it will be to overtake them.

#### Indicators of Strong Topical Authority

| Signal | How to Check |
|--------|-------------|
| Ranks for many keywords in the topic cluster | Ahrefs: check total organic keywords filtered by your topic |
| New pages rank quickly (within days) | Monitor when they publish new content and when it appears in SERP |
| Ranks for long-tail queries without specific targeting | Search obscure related queries -- do they appear? |
| Survives Core Algorithm Updates without drops | Check historical position data across update dates |
| Covers every sub-entity in the topic | Review their sitemap or use Ahrefs site audit to see all pages |

#### Topical Coverage Comparison

Map your content coverage against theirs:

```
YOUR COVERAGE                    COMPETITOR COVERAGE
[x] What is markup               [x] What is markup
[x] Markup calculator            [x] Markup calculator
[ ] Markup vs margin             [x] Markup vs margin        <-- GAP
[ ] Markup formula               [x] Markup formula          <-- GAP
[x] Markup examples              [ ] Markup examples         <-- YOUR ADVANTAGE
[ ] Markup for restaurants       [x] Markup for restaurants  <-- GAP
```

Every "GAP" entry is a page you should create to close the topical authority deficit.

#### EAV Coverage Comparison

Using the Entity-Attribute-Value framework from the Semantic SEO skill:

1. List every entity in your niche
2. List every attribute users ask about for each entity
3. Check which entity-attribute pairs competitors cover that you do not
4. Each missing pair = a content gap that weakens your topical authority

---

## Content Quality Comparison Framework

### The 7-Point Quality Comparison

For your target keyword, compare your page (or planned page) against the top 3 ranking pages:

| Quality Factor | Your Page | Competitor 1 | Competitor 2 | Competitor 3 |
|---------------|-----------|-------------|-------------|-------------|
| **Depth** (word count, EAV coverage) | | | | |
| **Accuracy** (current data, verified facts) | | | | |
| **Unique value** (original data, tools, insights) | | | | |
| **Visual quality** (images, charts, screenshots) | | | | |
| **Structure** (clear headings, scannable, tables) | | | | |
| **Freshness** (last updated date, current year refs) | | | | |
| **Experience signals** (author bio, case studies, first-hand data) | | | | |

### Scoring

Rate each factor 1-5 for every page. Sum the scores. If your total is not at least 10% higher than every competitor's total, you are unlikely to outrank them on content quality alone.

### The "10x Content" Test

For each competitor page, ask: "What would make my page so much better that a user who sees both would never go back to the competitor's page?"

Possible 10x advantages:
- Interactive tool vs static content
- Original data/research vs rehashed information
- Expert quotes and real-world examples vs generic advice
- Video walkthrough vs text-only explanation
- Real-time results vs outdated static data
- Comparison tables vs paragraph-form comparisons

---

## Finding Competitor Weaknesses to Exploit

### Common Weaknesses

| Weakness | How to Detect | How to Exploit |
|----------|--------------|---------------|
| Outdated content | Check "last updated" dates, look for old year references, outdated pricing | Publish current, accurate version |
| Missing FAQ section | View page source, no FAQPage schema | Add comprehensive FAQ with schema |
| No interactive element | Page is pure text for a transactional query | Build an interactive tool |
| Thin content | Under 1,500 words, generic advice, no specific data | Create deep, data-rich content |
| Poor mobile experience | Test on mobile, check Core Web Vitals | Optimize for mobile-first |
| No video content | No embedded video on the page | Add explainer video or walkthrough |
| Weak internal linking | Check for orphan pages, few links to/from the page | Build strong internal link network |
| No schema markup | Rich Results Test shows nothing | Add full schema stack |
| Generic author/no E-E-A-T | No author bio, no credentials, no experience signals | Add named expert author with verifiable credentials |
| Missing entity coverage | Key entity attributes not addressed | Cover every EAV triple in the niche |
| Slow page speed | PageSpeed Insights score below 80 | Build a faster page |
| No social proof | No reviews, testimonials, case studies | Add customer evidence |

### The "Reddit Test"

If Reddit ranks in the top 5 for your target keyword, that is the ultimate weakness signal. It means no one has built content good enough to beat a forum thread. This is your easiest opportunity.

### The "Low DR" Test

If any page in the top 5 has a DR below 20, that position is vulnerable. A well-built page on a site with comparable or higher DR should be able to claim that spot.

---

## Competitive SERP Features Analysis

### Who Owns What in the SERP

For each target keyword, map which competitors own which SERP features:

| SERP Feature | Who Owns It | Can You Win It? |
|-------------|------------|----------------|
| Featured Snippet (position 0) | [competitor] | Yes: match format, provide 40-word extractive answer |
| People Also Ask (PAA) | [various] | Yes: add H2s matching PAA questions with concise answers |
| Image Pack | [competitor] | Yes: optimize images with descriptive alt text, proper filenames |
| Video Carousel | [competitor] | Yes: create YouTube video, embed on page |
| Knowledge Panel | [brand] | Build entity identity through sameAs schema, Wikipedia, Wikidata |
| Local Pack | [local businesses] | If applicable: Google Business Profile optimization |
| AI Overview | [various sources] | Write concisely, use tables, add TL;DR sections |
| Site Links | [competitor] | Build strong internal linking architecture |

### Featured Snippet Strategy

1. Identify which competitor currently holds the featured snippet
2. Analyze the format (paragraph, list, table, video)
3. Match the exact format on your page
4. Provide a better, more concise answer (40 words maximum for paragraph snippets)
5. Place the answer immediately after the H2 question heading

### PAA Box Strategy

1. Expand all PAA questions for your target keyword
2. Click each to reveal more (PAA boxes expand infinitely)
3. Collect all unique questions
4. Add each as an H2 on your page with a concise, direct answer
5. Add FAQPage schema for all Q&A pairs

---

## AI/LLM Competitor Analysis

### Why This Is Critical in 2026

AI search (ChatGPT, Google AI Overviews, Perplexity, Claude) is deciding who gets recommended and cited for user queries. If competitors are being cited by AI and you are not, you are losing a growing channel.

### How to Assess AI/LLM Competitor Presence

#### Method 1: Manual Prompt Testing

1. Take your top 10 target queries
2. Search each in ChatGPT, Perplexity, and Google AI Mode
3. Record which brands/sites are mentioned in the response
4. Record which sources are cited (linked)
5. Note the exact phrasing the AI uses to describe each brand

| Query | ChatGPT Mentions | Perplexity Mentions | AI Overview Cites |
|-------|-----------------|--------------------|--------------------|
| "best markup calculator" | [brands] | [brands] | [brands] |
| "how to form Wyoming LLC" | [brands] | [brands] | [brands] |

#### Method 2: Ahrefs Brand Radar

1. Enter your brand name
2. Add competitor brand names
3. Add your niche keywords
4. View which AI queries mention competitors but not you
5. Filter to "Others Only" to see pure competitor-only AI mentions
6. Each competitor-only mention is an AI content gap for you to close

#### Method 3: Monitor Over Time

AI citations change faster than Google rankings. Check monthly:
- Are you gaining or losing AI mentions?
- Are competitors gaining AI mentions you do not have?
- What content format is being cited? (listicles, data pages, definitions)

### What Gets Cited by AI

Based on analysis of AI search behavior:

| Content Type | AI Citation Likelihood |
|-------------|----------------------|
| Listicle/comparison articles | Very high -- LLMs pull from these constantly |
| Pages with tables and structured data | High -- easy for AI to parse and present |
| Pages with TL;DR summaries | High -- AI extracts the summary |
| Pages with specific data/pricing | High -- factual, citable content |
| Expert quotes and named sources | Medium-high -- adds credibility to AI response |
| Tool pages without textual content | Low -- AI cannot extract from interactive elements |
| Walls of text without structure | Low -- hard for AI to parse |

### How to Win AI Citations

1. **Build listicle/comparison pages** for commercial queries (Indig's "cheat code" for AI search)
2. **Add summary tables** at the top of every page
3. **Include your brand name** naturally in content that answers common queries
4. **Maintain high review scores** on G2, Capterra, TrustPilot (AI pulls from these)
5. **Get brand mentions on other sites** -- Reddit, industry publications, podcasts (this is AI training data)
6. **Write conversationally** -- AI search uses natural language, not keywords
7. **Cite credible sources** -- pages that cite sources are more likely to be cited themselves

---

## Competitor Pricing/CTA Analysis

### Why Pricing Transparency Matters

Indig (2026): If you hide your pricing, when someone searches "[your brand] pricing" in ChatGPT, they might get information from a Reddit thread with outdated or incorrect pricing from a disgruntled user. You lose control of the narrative.

### What to Analyze

| Element | Record for Each Competitor |
|---------|--------------------------|
| Pricing visibility | Is pricing publicly shown on their site? |
| Pricing model | Freemium, free trial, subscription, one-time, usage-based |
| CTA placement | Where on the page? Fixed/sticky? How prominent? |
| CTA messaging | What does the button say? What value does it promise? |
| Friction level | How many steps to convert? Signup required? |
| Trust signals near CTA | Reviews, guarantees, security badges near the conversion point |
| Free tool/trial strategy | Do they offer a free tool as a lead magnet? |

### How to Use This Intelligence

1. **Match the transparency baseline.** If competitors show pricing openly and you do not, you lose to them in AI search and comparison queries.
2. **Beat the CTA.** If competitors have generic "Sign Up" buttons, use specific value-driven CTAs ("Calculate Your Markup Free" or "Form Your LLC in 10 Minutes").
3. **Reduce friction below competitors.** If they require signup to use a tool, offer yours without signup.
4. **Add social proof competitors lack.** If their CTA has no reviews/testimonials nearby, add yours.

---

## Monitoring Competitor Changes Over Time

### What to Track Monthly

| Signal | Tool | Action When Detected |
|--------|------|---------------------|
| New pages published | Ahrefs "New Pages" report, or site: search in Google | Analyze the keyword target, assess if you need to respond |
| Ranking changes | Ahrefs Rank Tracker, manual SERP checks | If they gained positions you lost, audit your page vs theirs |
| New backlinks acquired | Ahrefs "New Referring Domains" report | Identify link sources you could also target |
| Content updates | Check for "updated" dates, Wayback Machine comparison | If they refreshed content and overtook you, refresh yours |
| Schema changes | Rich Results Test comparison | If they added schema and got rich results, add yours |
| New SERP features captured | Manual SERP review | Implement the format needed to recapture the feature |
| AI search citation changes | Monthly ChatGPT/Perplexity checks | If they gained AI citations, analyze what content is being cited |
| New product/feature launches | Monitor their blog, changelog, social | Assess if this creates new keyword opportunities for you |

### When to Respond vs Ignore

| Competitor Action | Respond | Ignore |
|------------------|---------|--------|
| They publish content targeting YOUR primary keyword | Always respond -- audit and improve your page | Never ignore |
| They publish content for a keyword you do not target | Assess: does it fit your topical map? If yes, create content. If no, skip. | If outside your topical map |
| They acquire backlinks from a source you could also get | Pursue the same link source | If the source is irrelevant to your niche |
| They update old content and regain rankings | Update your corresponding content immediately | Never ignore if you compete on that keyword |
| They launch a new free tool | Assess the tool's keyword target and traffic potential | If it is in a niche you do not serve |

### Competitor Monitoring Schedule

| Frequency | Action |
|-----------|--------|
| Weekly | Quick SERP check for your top 5 keywords. Anyone new in the top 5? |
| Monthly | Full competitor content gap analysis for your primary topic cluster |
| Monthly | AI/LLM citation check for top 10 queries |
| Quarterly | Deep-dive competitor audit: backlinks, content structure, schema, topical coverage |
| After Google Core Updates | Immediate: which competitors gained/lost? What changed about their pages? |
| After AI system updates | Check if AI citation patterns shifted for your queries |

---

## How Often to Run Competitive Analysis

| Analysis Type | Frequency | Time Investment |
|--------------|-----------|----------------|
| SERP competitor identification | Quarterly (competitors change) | 2-3 hours |
| Content gap analysis | Monthly | 3-4 hours |
| Backlink gap analysis | Quarterly | 2-3 hours |
| Content structure analysis | When entering a new keyword cluster | 1-2 hours per cluster |
| Schema analysis | Quarterly | 1 hour |
| Topical authority assessment | Quarterly | 2-3 hours |
| Content quality comparison | Before building each major page | 1 hour per page |
| SERP features analysis | Monthly | 1-2 hours |
| AI/LLM competitor analysis | Monthly | 1-2 hours |
| Competitor monitoring (ongoing) | Weekly (quick) + Monthly (full) | 30 min weekly, 2 hours monthly |
| Full competitive audit | Every 6 months | Full day |

---

## Action Plan Template: Turning Analysis into Content Priorities

After completing a competitive analysis, use this template to convert findings into an actionable plan:

```
COMPETITIVE ANALYSIS ACTION PLAN
Date: [date]
Primary Competitors Analyzed: [list]
Keywords Analyzed: [count]

CONTENT GAPS FOUND: [count]
=========================================

PRIORITY 1 -- BUILD IMMEDIATELY (High volume, low KD, clear intent match)
| Keyword Cluster | Volume | KD | Competitor Ranking | Page Type to Build | Deadline |
|----------------|--------|-----|-------------------|-------------------|----------|
| | | | | | |

PRIORITY 2 -- BUILD NEXT (Medium volume, medium KD, requires content + links)
| Keyword Cluster | Volume | KD | Competitor Ranking | Page Type to Build | Deadline |
|----------------|--------|-----|-------------------|-------------------|----------|
| | | | | | |

PRIORITY 3 -- BUILD LATER (Lower volume, higher KD, or secondary clusters)
| Keyword Cluster | Volume | KD | Competitor Ranking | Page Type to Build | Deadline |
|----------------|--------|-----|-------------------|-------------------|----------|
| | | | | | |

EXISTING PAGES TO UPDATE
| Page URL | Issue Found | Competitor Advantage | Update Needed | Deadline |
|----------|------------|---------------------|--------------|----------|
| | | | | |

BACKLINK TARGETS IDENTIFIED
| Link Source | Competitor Has It | DR | Relevance | Outreach Method |
|------------|-------------------|-----|-----------|----------------|
| | | | | |

AI/LLM GAPS TO CLOSE
| Query/Prompt | Competitor Cited | Our Status | Content Needed |
|-------------|-----------------|-----------|---------------|
| | | | |

SCHEMA IMPROVEMENTS
| Page | Missing Schema | Expected Impact |
|------|---------------|----------------|
| | | |

SERP FEATURES TO CAPTURE
| Keyword | Feature | Current Owner | Strategy to Win |
|---------|---------|--------------|----------------|
| | | | |
```

### Prioritization Rules

1. **Revenue-driving gaps first.** Content gaps on bottom-of-funnel keywords (alternatives, comparisons, pricing) get Priority 1. These drive signups and demos within days, not months.
2. **Existing page updates second.** Updating a page that already has some rankings is faster ROI than building from scratch.
3. **Topical authority gaps third.** Missing topic coverage weakens your entire cluster. Fill these to strengthen all pages in the cluster.
4. **AI citation gaps fourth.** Build listicle/comparison content that LLMs will cite.
5. **Backlink acquisition runs parallel.** Link building is ongoing and should not block content creation.

### The Competitor Response Decision Framework

When a competitor makes a move, use this to decide your response:

```
COMPETITOR ACTION DETECTED
  |
  v
Does it affect a keyword I currently rank for?
  |               |
  YES             NO
  |               |
  v               v
Is my ranking     Does the keyword fit
dropping?         my topical map?
  |       |         |         |
  YES     NO        YES       NO
  |       |         |         |
  v       v         v         v
URGENT:   MONITOR:  PLAN:     IGNORE:
Update    Track     Add to    Not your
page now  weekly    content   fight
                    calendar
```

---

## Quick Reference: Competitive Analysis Checklist

Before building any major page:

- [ ] Identified top 3-5 SERP competitors for the target keyword cluster
- [ ] Analyzed competitor content structure (H1, H2s, word count, format, visuals)
- [ ] Checked competitor backlink profiles (referring domains, DR of linkers)
- [ ] Assessed competitor topical authority (how deeply do they cover this topic?)
- [ ] Checked competitor schema markup (what rich results do they have?)
- [ ] Analyzed SERP features (who owns featured snippet, PAA, image pack?)
- [ ] Checked AI/LLM citations (who gets mentioned by ChatGPT/Perplexity?)
- [ ] Compared content quality (depth, accuracy, unique value, freshness)
- [ ] Identified specific weaknesses to exploit
- [ ] Documented content gaps with prioritized action plan
- [ ] Identified backlink opportunities from competitor link profiles
- [ ] Set up ongoing monitoring for competitor changes
