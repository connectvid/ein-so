---
skill: content-brief
description: Load when creating a content brief for any page, preparing to write content, assigning content to a writer, or reviewing a brief before writing begins. Every page must have a completed brief before writing starts.
version: 1.0.0
last-verified: 2026-04
source: seo-master/01-semantic-seo-framework.md (Pillar 3: Content Briefs)
load: on-demand
triggers: content brief, page brief, writing brief, brief template, content plan, page plan, write brief, create brief, brief checklist
---

# Content Brief Creation — The Definitive Guide

## Why Every Page Needs a Brief

A content brief is the blueprint for a page. It defines exactly what the page must cover, how it links to the rest of the site, what schema to use, and what snippet to target — BEFORE a single word is written.

**No brief = no writing.** Pages written without briefs consistently suffer from:
- Missing entity-attribute coverage (incomplete content)
- Cannibalization with existing pages (no keyword check)
- Orphan status (no internal link plan)
- Missing schema (lost structured data signals)
- Vague intent (page tries to do too many things)

---

## The Complete Content Brief Template

```
=====================================
PAGE BRIEF
=====================================

PAGE IDENTIFICATION
-------------------
Page Title (H1):        [Exact H1 text — this is what appears on the page]
Meta Title:             [60 chars max — what appears in Google SERPs]
Meta Description:       [155 chars max — must be unique, must not apply to any other page]
Target URL:             /slug-here/
Page ID:                [From topical map, e.g., WY-002]
Page Type:              [Pillar / Cluster / Support / Comparison / Programmatic]
Tier:                   [T1 / T2 / T3]
Parent Page:            [URL of the pillar or cluster this belongs to]
Word Count Target:      [number]

MACRO CONTEXT (ONE SENTENCE)
-----------------------------
-> [What Google and LLMs must understand this page is about. One sentence only.]

PRIMARY ENTITY
--------------
-> [Main noun/concept this page covers]

KEY ATTRIBUTES TO COVER
-----------------------
-> [Comma-separated list: cost, requirements, timeline, benefits, restrictions, process, alternatives, risks, eligibility, comparison, etc.]

EAV TRIPLES
-----------
| Entity | Attribute | Value |
|--------|-----------|-------|
| [entity] | [attribute 1] | [specific value/answer] |
| [entity] | [attribute 2] | [specific value/answer] |
| [entity] | [attribute 3] | [specific value/answer] |
| [entity] | [attribute 4] | [specific value/answer] |
| [entity] | [attribute 5] | [specific value/answer] |

REQUIRED H2 SECTIONS
---------------------
Each H2 must have a 40-word extractive answer immediately after it (for featured snippets and AI extraction).

H2-1: [Question or topic — e.g., "What is [entity]?"]
H2-2: [Question or topic — e.g., "How does [process] work?"]
H2-3: [Question or topic — e.g., "What are the [costs/requirements/benefits]?"]
H2-4: [Question or topic — e.g., "Who [uses/needs] [entity]?"]
H2-5: [Question or topic — e.g., "What are the [risks/alternatives]?"]
H2-6: [Additional section as needed]
H2-7: [Additional section as needed]

FEATURED SNIPPET TARGET
------------------------
Target H2:      [Which H2 question to optimize for snippet]
40-Word Answer: [The exact extractive answer Google/AI should pull. Must be factual,
                 self-contained, and answerable without reading the rest of the page.
                 This is the paragraph that appears in position 0.]
Snippet Type:   [Paragraph / List / Table / Steps]

INTERNAL LINKS FROM THIS PAGE
------------------------------
| # | Target Page URL | Target Page Title | Anchor Text | Placement (which H2 section) |
|---|----------------|-------------------|-------------|------------------------------|
| 1 | /target-slug/ | Target Page Title | [exact anchor text] | H2-2 body |
| 2 | /target-slug/ | Target Page Title | [exact anchor text] | H2-4 body |
| 3 | /target-slug/ | Target Page Title | [exact anchor text] | H2-5 body |

INTERNAL LINKS TO THIS PAGE (from other pages)
-----------------------------------------------
| # | Source Page URL | Source Page Title | Anchor Text | Status |
|---|---------------|-------------------|-------------|--------|
| 1 | /source-slug/ | Source Page Title | [exact anchor text] | Added / Pending |
| 2 | /source-slug/ | Source Page Title | [exact anchor text] | Added / Pending |

SCHEMA REQUIRED
---------------
[ ] Article (BlogPosting or Article — required for all content pages)
[ ] FAQPage (required if page has 3+ question-answer pairs)
[ ] BreadcrumbList (required for ALL pages)
[ ] HowTo (required if page describes a step-by-step process)
[ ] Product (required for product/service pages with pricing)
[ ] LocalBusiness (required for location-specific service pages)
[ ] Review (required for comparison/review pages)
[ ] VideoObject (required if page contains embedded video)

PRIMARY KEYWORD
---------------
-> [Exact phrase — must match keyword-to-URL registry]

SECONDARY QUERIES
-----------------
-> [Related queries this page should also rank for — 3-8 queries]
-> [These are NOT separate pages. They are variations the same page covers.]

PEOPLE ALSO ASK TARGETS
------------------------
-> [List 3-5 PAA questions this page should answer]
-> [Each PAA answer should appear under the most relevant H2]

CTA (Call to Action)
--------------------
Primary CTA:    [What action the user should take — e.g., "Start your LLC formation"]
CTA Placement:  [After which H2 section(s) — e.g., "After H2-3 and end of page"]
CTA Type:       [Button / Inline text link / Banner / Form]
CTA URL:        [Where the CTA links to]

CANNIBALIZATION CHECK
---------------------
Keyword registry checked:  [ ] Yes
Similar pages reviewed:    [ ] Yes
Differentiation confirmed: [ ] Yes
Notes: [Any cannibalization concerns and how they were resolved]

ADDITIONAL NOTES
----------------
-> [Seasonal timing, competitor pages to outrank, specific data sources, tone guidance]

=====================================
END BRIEF
=====================================
```

---

## How to Fill In Each Field

### Page Identification Fields

**Page Title (H1):** The exact text that will appear as the H1 heading on the page. Must be unique across the entire site. Must contain the primary keyword naturally. Keep under 70 characters.

**Meta Title:** The text that appears in Google search results. Maximum 60 characters. Format: `[Primary Keyword] — [Brand]` or `[Primary Keyword]: [Value Proposition]`. Must be different from the H1 if the H1 is longer than 60 characters.

**Meta Description:** The text that appears below the meta title in search results. Maximum 155 characters. Must be unique — if this description could apply to any other page on the site, it is too generic. Include the primary keyword and a reason to click.

**Target URL:** The URL path without the domain. Use lowercase, hyphens for spaces, no trailing characters except a trailing slash. Keep it short and keyword-rich. Example: `/wyoming-llc-cost/`.

**Page ID:** The unique identifier from the topical map spreadsheet. Format: `SITE-###` (e.g., WY-002, ITIN-015).

**Page Type:** One of: Pillar, Cluster, Support, Comparison, Programmatic. Must match the topical map.

**Tier:** T1 (Pillar), T2 (Cluster), or T3 (Support). Determines word count expectations and link structure.

**Parent Page:** The URL of the pillar or cluster page this page belongs to. Every T2 page has a T1 parent. Every T3 page has a T2 parent (or sometimes a T1 parent).

**Word Count Target:**
- T1 Pillar: 3,000-5,000+ words
- T2 Cluster: 1,500-3,000 words
- T3 Support: 800-1,500 words
- Comparison: 2,000-3,000 words

### Macro Context

Write ONE sentence that captures exactly what Google and LLMs must understand this page is about. This is not the meta description — it is the internal semantic definition.

Good: "This page is the comprehensive guide to how much it costs to form and maintain a Wyoming LLC, covering all filing fees, annual fees, registered agent costs, and hidden costs."

Bad: "This page is about Wyoming LLC costs." (Too vague — could be any cost page.)

### Primary Entity

The main noun or concept. This is the subject of the page. Examples:
- "Wyoming LLC" (for a formation page)
- "ITIN Application" (for an application guide)
- "Markup Calculator" (for a tool page)

### Key Attributes to Cover

List every attribute of the primary entity that this page must address. Pull these from the EAV framework in the topical map.

Common attribute categories:
- **Cost attributes:** filing fee, annual fee, registered agent fee, expedited fee, hidden costs, total cost
- **Process attributes:** steps, timeline, requirements, documents needed, where to file
- **Benefit attributes:** tax savings, privacy, asset protection, liability shield
- **Risk attributes:** penalties, compliance failures, dissolution risk, common mistakes
- **Eligibility attributes:** who qualifies, restrictions, requirements, age limits
- **Comparison attributes:** vs alternatives, pros/cons, differences, similarities

### EAV Triples Section

This is the most important section of the brief. It defines exactly what factual claims the page must contain.

**How to fill it in:**

1. Take the primary entity.
2. For each key attribute, determine the specific value (the factual answer).
3. Write one row per entity-attribute-value triple.
4. Every triple becomes a statement the page must contain.
5. If you do not know the value, research it. Do not leave values blank.

**Rules:**
- Values must be specific and factual, not vague. "Varies" is not a value.
- Include dollar amounts, timelines, counts, and named requirements.
- If a value has changed recently, note the date of the information.
- Each triple should be verifiable — cite the source if needed.

### Required H2 Sections

Each H2 defines a major section of the page. Each H2 must:

1. Be phrased as a question OR a clear topical heading.
2. Have a 40-word extractive answer immediately following it.
3. Cover one coherent aspect of the topic (do not combine unrelated ideas).
4. Be ordered logically (definition -> process -> cost -> risks -> alternatives).

**The 40-word extractive answer rule:** The first paragraph after every H2 must be a self-contained, factual, 40-word answer to the H2 question. This is what Google pulls for featured snippets and what LLMs extract for AI answers. It must make sense without reading the rest of the section.

**How to determine H2s:**
1. Start with the standard pattern: What, How, Cost/Requirements, Who, Risks/Alternatives.
2. Add H2s for any entity attributes not covered by the standard pattern.
3. Add H2s for People Also Ask questions that fit this page.
4. Remove any H2 that would create cannibalization with another page.

### Featured Snippet Target

Choose ONE H2 as the featured snippet target — the one most likely to win position 0 in Google.

**How to choose:**
- Look at the current SERP for your target query. Is there already a featured snippet? What format?
- Prefer questions with clear, definitive answers (not "it depends").
- Prefer questions with high search volume.

**The 40-word answer:**
- Must be factual and self-contained.
- Must directly answer the question without preamble.
- Must not start with "Yes" or "No" unless the question is yes/no.
- Must include the primary entity name.

**Snippet types:**
- **Paragraph:** Best for "What is" and "Why" questions. Write a 40-50 word paragraph.
- **List:** Best for "How to" and "Types of" questions. Write a numbered or bulleted list.
- **Table:** Best for comparison and cost questions. Write a 2-3 column table.
- **Steps:** Best for process questions. Write numbered steps with brief descriptions.

### Internal Links FROM This Page

Plan exactly which pages this page links to in the body content.

**Rules:**
- Maximum 3-5 contextual links in the body (footer/nav links do not count).
- Anchor text must match the target page's macro context exactly.
- Place links where they are contextually relevant (under the H2 where the linked topic is mentioned).
- Never use "click here" or "learn more" as anchor text.
- Every link must add value for the reader, not just for SEO.

**How to fill it in:**
1. Look at the topical map. Which pages are siblings, parents, or related?
2. For each H2 section, identify which other page(s) are naturally referenced.
3. Write the exact anchor text (must match target page's primary keyword or macro context).
4. Note the placement (which H2 section the link appears in).

### Internal Links TO This Page

Plan which existing pages should link TO this new page.

**Rules:**
- Every new page needs at least 1 internal link pointing to it within 48 hours of publishing.
- Link from high-traffic pages to new pages (passes more PageRank).
- The parent page (pillar or cluster) must link to this page.
- 2-3 sibling pages should link to this page.

**How to fill it in:**
1. The parent page is always a source. Add it first.
2. Check the topical map for sibling pages that mention this topic.
3. Check existing published pages for sections where this topic is referenced but not linked.
4. Note the anchor text (must match this page's primary keyword or macro context).
5. Mark status as "Pending" — update to "Added" after publishing.

### Schema Requirements Checklist

Check every applicable schema type. Most pages need at minimum: Article + BreadcrumbList.

| Schema Type | When Required | Key Fields |
|-------------|--------------|------------|
| **Article / BlogPosting** | All content pages | headline, datePublished, dateModified, author, image |
| **FAQPage** | Pages with 3+ Q&A pairs | mainEntity (array of Question + acceptedAnswer) |
| **BreadcrumbList** | ALL pages, no exceptions | itemListElement with position, name, item |
| **HowTo** | Step-by-step process pages | name, step (array with name + text), totalTime |
| **Product** | Product/service pages with pricing | name, offers (price, priceCurrency, availability) |
| **LocalBusiness** | Location-specific pages | name, address, telephone, openingHours |
| **Review** | Comparison/review pages | itemReviewed, reviewRating, author |
| **VideoObject** | Pages with embedded video | name, description, thumbnailUrl, uploadDate, contentUrl |

### Primary Keyword and Secondary Queries

**Primary keyword:** The single exact search query this page is built to rank for. Must be unique across the entire site (check the keyword-to-URL registry). Only one primary keyword per page.

**Secondary queries:** 3-8 related search queries that this page should ALSO rank for. These are NOT separate pages. They are variations, long-tail versions, or closely related queries that the same page naturally covers.

**How to find secondary queries:**
1. Search the primary keyword in Google. Note the PAA questions and related searches.
2. Use keyword research tools to find variations with 50+ monthly searches.
3. Check competitor pages ranking for this keyword — what other queries do they rank for?
4. Include common misspellings or alternative phrasings if they have volume.

### CTA Planning

Every page must have a call to action. Even informational pages.

**CTA placement rules:**
- Place the primary CTA after the most commercially relevant H2 section.
- Place a secondary CTA at the end of the page.
- For long pages (3,000+ words), add a mid-page CTA as well.
- CTAs should feel natural, not forced. They should follow logically from the content.

**CTA types by page type:**
| Page Type | Typical CTA |
|-----------|-------------|
| Pillar | "Start your [process] today" (button) |
| Cluster | "Get a free quote" or "See pricing" (inline link or button) |
| Support | "Read our full guide to [parent topic]" (inline text link) |
| Comparison | "Try [product] free" or "See how we compare" (button) |

---

## Brief Validation Checklist

Before the brief is considered complete and writing can begin, verify ALL of the following:

### Content Checks
- [ ] Page Title (H1) is unique — no other page has a similar H1
- [ ] Meta title is under 60 characters and contains primary keyword
- [ ] Meta description is under 155 characters, unique, and could NOT apply to any other page
- [ ] Target URL follows slug conventions (lowercase, hyphens, short)
- [ ] Macro context is one clear sentence
- [ ] Primary entity is identified
- [ ] All key attributes are listed (cross-check with EAV framework)
- [ ] EAV triples have specific values (no "varies" or blanks)
- [ ] At least 5 H2 sections are defined
- [ ] Every H2 has a planned 40-word extractive answer
- [ ] Featured snippet target is selected with answer drafted

### Link Checks
- [ ] 3-5 internal links FROM this page are planned with exact anchor text
- [ ] At least 1 internal link TO this page is planned (from parent page)
- [ ] Anchor texts match target pages' macro contexts
- [ ] No anchor text says "click here" or "learn more"

### Schema Checks
- [ ] At minimum Article + BreadcrumbList are checked
- [ ] FAQPage is checked if page has 3+ Q&A pairs
- [ ] HowTo is checked if page describes a process
- [ ] All checked schema types have required fields identified

### Keyword Checks
- [ ] Primary keyword is registered in keyword-to-URL registry
- [ ] Primary keyword is NOT assigned to any other page
- [ ] 3-8 secondary queries are listed
- [ ] PAA targets are listed

### Cannibalization Checks
- [ ] Keyword registry searched for exact match — no conflict
- [ ] Keyword registry searched for similar keywords — no conflict
- [ ] Keyword registry searched for same-intent keywords — no conflict
- [ ] H1 does not resemble any other page's H1
- [ ] Meta description could NOT apply to any other page

### CTA Checks
- [ ] Primary CTA is defined with action, placement, and URL
- [ ] CTA placement is after a relevant H2 section
- [ ] CTA is appropriate for page type and intent

---

## Example Brief: "How Much Does a Wyoming LLC Cost?"

```
=====================================
PAGE BRIEF
=====================================

PAGE IDENTIFICATION
-------------------
Page Title (H1):        How Much Does a Wyoming LLC Cost? (2026 Breakdown)
Meta Title:             Wyoming LLC Cost 2026: Complete Fee Breakdown
Meta Description:       Wyoming LLC costs $102 to form. See the full 2026 breakdown: state filing fee, registered agent, annual report, and hidden costs most sites don't mention.
Target URL:             /cost/
Page ID:                WY-002
Page Type:              Cluster
Tier:                   T2
Parent Page:            /form/
Word Count Target:      2,500

MACRO CONTEXT (ONE SENTENCE)
-----------------------------
-> This page is the comprehensive breakdown of every cost involved in forming and maintaining a Wyoming LLC, including state filing fees, registered agent fees, annual report fees, and commonly overlooked hidden costs.

PRIMARY ENTITY
--------------
-> Wyoming LLC

KEY ATTRIBUTES TO COVER
-----------------------
-> filing fee, registered agent cost, annual report fee, expedited processing fee, total first-year cost, total annual ongoing cost, hidden costs, cost comparison vs other states, cost for non-US residents, ways to reduce cost

EAV TRIPLES
-----------
| Entity | Attribute | Value |
|--------|-----------|-------|
| Wyoming LLC | state filing fee | $100 (paid to Wyoming Secretary of State) |
| Wyoming LLC | registered agent cost | $25-$300/year depending on provider |
| Wyoming LLC | annual report fee | $60/year (due on the first day of the anniversary month) |
| Wyoming LLC | expedited processing fee | $100 for same-day, $50 for 2-day |
| Wyoming LLC | total first-year cost (minimum) | $102 (filing fee + cheapest registered agent) |
| Wyoming LLC | total annual ongoing cost | $85-$360/year (annual report + registered agent) |
| Wyoming LLC | EIN application cost | $0 (free from IRS) |
| Wyoming LLC | operating agreement cost | $0 (can draft yourself) |
| Wyoming LLC | cost vs Delaware LLC | Wyoming: $100 filing + $60/year vs Delaware: $90 filing + $300/year franchise tax |
| Wyoming LLC | hidden costs | compliance service fees, mail forwarding, business license (if applicable) |

REQUIRED H2 SECTIONS
---------------------
H2-1: How Much Does It Cost to Form a Wyoming LLC?
  -> 40-word answer: Forming a Wyoming LLC costs $100 in state filing fees paid to the Wyoming Secretary of State. With a registered agent (required), the minimum total is approximately $102 for the most affordable option. Expedited processing adds $50-$100.

H2-2: Wyoming LLC Fee Breakdown (2026)
  -> 40-word answer: Wyoming LLC fees include a $100 formation filing fee, $25-$300 annual registered agent fee, and $60 annual report fee. The total first-year cost ranges from $102 to $500 depending on the services and speed you choose.

H2-3: Annual Costs to Maintain a Wyoming LLC
  -> 40-word answer: Maintaining a Wyoming LLC costs $85-$360 per year. This includes the $60 annual report fee due on your anniversary month and $25-$300 for a registered agent. There is no franchise tax or state income tax in Wyoming.

H2-4: Hidden Costs Most Sites Don't Mention
  -> 40-word answer: Common hidden Wyoming LLC costs include mail forwarding ($10-$30/month), compliance monitoring services ($100-$200/year), business licenses for specific activities, and bank account maintenance fees. These are not required but many LLC owners end up needing them.

H2-5: Wyoming LLC Cost vs Other States
  -> 40-word answer: Wyoming is among the cheapest states for LLC formation. Delaware charges $90 to file but $300/year in franchise tax. Nevada charges $425 to file. Wyoming's $100 filing fee and $60/year annual report make it the most cost-effective option for most businesses.

H2-6: How to Reduce Your Wyoming LLC Costs
  -> 40-word answer: Reduce Wyoming LLC costs by filing directly with the Secretary of State instead of using a formation service, choosing a low-cost registered agent, and handling your own annual report filing. This can bring total first-year costs under $150.

H2-7: Wyoming LLC Cost for Non-US Residents
  -> 40-word answer: Non-US residents pay the same $100 state filing fee as US residents. Additional costs may include ITIN application ($0 from IRS, $150-$350 via CAA), EIN application ($0), and international mail forwarding ($15-$50/month). Total first-year cost: $150-$500.

FEATURED SNIPPET TARGET
------------------------
Target H2:      H2-1: How Much Does It Cost to Form a Wyoming LLC?
40-Word Answer: Forming a Wyoming LLC costs $100 in state filing fees paid to the Wyoming Secretary of State. With a registered agent (required), the minimum total is approximately $102 for the most affordable option. Expedited processing adds $50-$100.
Snippet Type:   Paragraph

INTERNAL LINKS FROM THIS PAGE
------------------------------
| # | Target Page URL | Target Page Title | Anchor Text | Placement |
|---|----------------|-------------------|-------------|-----------|
| 1 | /form/ | How to Form a Wyoming LLC | form a Wyoming LLC | H2-1 body |
| 2 | /registered-agent/ | Wyoming Registered Agent | registered agent | H2-2 body |
| 3 | /annual-report/ | Wyoming LLC Annual Report | annual report | H2-3 body |
| 4 | /vs-delaware/ | Wyoming vs Delaware LLC | Delaware LLC | H2-5 body |
| 5 | /non-us-residents/ | Wyoming LLC for Non-US Residents | non-US residents | H2-7 body |

INTERNAL LINKS TO THIS PAGE (from other pages)
-----------------------------------------------
| # | Source Page URL | Source Page Title | Anchor Text | Status |
|---|---------------|-------------------|-------------|--------|
| 1 | /form/ | How to Form a Wyoming LLC | Wyoming LLC cost | Pending |
| 2 | /non-us-residents/ | Wyoming LLC for Non-US Residents | cost breakdown | Pending |
| 3 | / | Homepage | how much a Wyoming LLC costs | Pending |

SCHEMA REQUIRED
---------------
[x] Article
[x] FAQPage (H2-1 through H2-7 are all questions)
[x] BreadcrumbList
[ ] HowTo
[ ] Product
[ ] LocalBusiness
[ ] Review
[ ] VideoObject

PRIMARY KEYWORD
---------------
-> wyoming llc cost

SECONDARY QUERIES
-----------------
-> how much does a wyoming llc cost
-> wyoming llc filing fee
-> wyoming llc annual fee
-> cost to form llc in wyoming
-> wyoming llc price
-> cheapest way to form wyoming llc
-> wyoming llc cost for foreigners

PEOPLE ALSO ASK TARGETS
------------------------
-> How much does it cost to start an LLC in Wyoming?
-> What is the annual fee for a Wyoming LLC?
-> Is Wyoming the cheapest state for an LLC?
-> Do non-US residents pay more for a Wyoming LLC?
-> What are the hidden costs of a Wyoming LLC?

CTA (Call to Action)
--------------------
Primary CTA:    Start Your Wyoming LLC Formation ($100 + State Fees)
CTA Placement:  After H2-6 (How to Reduce Costs) and end of page
CTA Type:       Button
CTA URL:        /form/

CANNIBALIZATION CHECK
---------------------
Keyword registry checked:  [x] Yes
Similar pages reviewed:    [x] Yes — /cost-breakdown/ and /pricing/ merged into this page via 301
Differentiation confirmed: [x] Yes
Notes: Former cannibalization cluster. /cost-breakdown/ and /annual-fee/ both 301 redirect to /cost/. All cost-related content consolidated here.

ADDITIONAL NOTES
----------------
-> Update dollar amounts annually (verify against Wyoming SOS website in January).
-> This is a P1 priority page — high commercial intent, high search volume.
-> Seasonal peak: January-April (new year formation spike). Ensure content is updated by December.
-> Main competitors to outrank: LegalZoom, Incfile, ZenBusiness cost pages.

=====================================
END BRIEF
=====================================
```

---

## Quick Reference: Brief Creation Workflow

1. **Pull the page from the topical map.** Get the Page ID, type, tier, parent, and primary keyword.
2. **Check the keyword-to-URL registry.** Confirm the primary keyword is not assigned to another page. If it is, STOP — this page should not be created.
3. **Define the macro context.** Write one sentence.
4. **Build the EAV triples.** Research every attribute and fill in specific values.
5. **Draft the H2 sections.** Use the standard pattern (What, How, Cost, Who, Risks) plus attribute-specific sections.
6. **Write 40-word answers.** One per H2, factual and self-contained.
7. **Select the featured snippet target.** Choose the best H2 and refine the 40-word answer.
8. **Plan internal links.** 3-5 FROM this page, 1-3 TO this page.
9. **Check schema requirements.** Minimum: Article + BreadcrumbList.
10. **List secondary queries and PAA targets.**
11. **Define the CTA.**
12. **Run the validation checklist.** Every box must be checked before writing begins.

---

## LLM Optimization Fields in Every Brief

In addition to the standard brief fields above, every content brief must include these LLM-specific planning items:

### LLM Brief Additions

```
LLM OPTIMIZATION PLAN
=====================

BLUF (Bottom Line Up Front):
-> [2-3 sentence summary that answers "what is this page about?" with specific facts]
-> Must be under 120 words. This appears at the top of the content.

EXTRACTIVE ANSWERS (one per H2):
H2-1: [Question] -> [40-word answer with specific number]
H2-2: [Question] -> [40-word answer with specific number]
H2-3: [Question] -> [40-word answer with specific number]

FAQ SCHEMA ITEMS (8-10 unique questions):
Q1: [Question matching an H2/H3] -> [40-80 word answer, specific, no hedging]
Q2: [Question] -> [Answer]
...

DATA DENSITY TARGET: [minimum 40 specific numbers]
-> List the key numbers you know: prices, percentages, timeframes, quantities

COMPARISON TABLES PLANNED: [3-5]
-> Table 1: [What vs what, which columns]
-> Table 2: [What vs what]

AI CITATION COMPETITORS:
-> [Who currently gets cited by ChatGPT/Claude for this query?]
-> [What do they have that we need to match or beat?]

ENTITY MAP:
-> Primary entity: [e.g., Wyoming LLC]
-> Related entities to mention: [EIN, registered agent, operating agreement]
-> Competitor entities to compare against: [Delaware LLC, LegalZoom, Doola]
-> Integration/tool entities: [Stripe, Mercury, Relay]

FRESHNESS SIGNALS:
-> dateModified: [planned publish date]
-> Year in title: [e.g., "(2026 Guide)"]
-> Current-year data references: [list 3+ facts with current year]
```

### Why This Matters

Without LLM planning in the brief, writers default to Google-only optimization. Adding these fields ensures every page is designed for dual citation from the start. The brief is where you prevent the problem -- retrofitting LLM optimization onto existing content costs 3x more effort than building it in from the beginning.
