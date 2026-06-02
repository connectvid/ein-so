---
skill: page-architecture
description: Apply when building any new page, auditing page structure, writing content sections, or checking pre-deployment completeness. This is the single source of truth for how every page on every site is structured, ordered, and validated.
version: 1.0.0
last-verified: 2026-04
source: seo-master/03-content-architecture.md + skills/02-onpage-seo.md + skills/18-content-completeness.md
load: always
triggers: page structure, section order, hero section, H1, H2, overview, benefits, FAQ, CTA, page template, content architecture, on-page SEO, title tag, meta description, pre-deploy checklist, page type, pillar page, cluster page
---

# Page Architecture — The Definitive Guide

> **The Golden Rule:** Maximum 12 sections per page. No exceptions. Every section beyond 12 dilutes focus, increases bounce rate, and creates duplicate content risk. Consolidate ruthlessly.

---

## The 12-Section Template

```
 1. Hero          (H1, value prop, 3 key stats, primary CTA, date)
 2. Overview      (2-3 sentences ONLY — NO separate "What Is" section)
 3. Benefits      (3-6 benefits with icons/visual elements)
 4. Video         (IF available — embedded after benefits)
 5. How It Works  (Steps/process — main instructional content)
 6. Costs         (Table format with linked line items)
 7. Requirements  (Banking/docs/prerequisites — integrated)
 8. Compliance    (Taxes/legal/forms — consolidated)
 9. Comparison    (vs alternatives — table format)
10. Social Proof  (Testimonials + trust badges — ONE section)
11. FAQ           (8-10 questions, accordion, schema-matched)
12. CTA           (Clear next action with price anchor)
```

---

## Section-by-Section Rules

### Section 1: Hero

The hero is the first thing users and crawlers see. It must contain five elements: H1, value proposition, stats, CTA, and freshness date.

#### Hero Requirements

| Element | Rule | Example |
|---------|------|---------|
| H1 | Contains primary keyword, exactly one per page | `Wyoming LLC for Non-Residents (2026 Guide)` |
| Value Proposition | One line under H1, states the core benefit with numbers | `Form your US LLC in 3-5 days. $297 total. No SSN required.` |
| Stats | 3 key numbers visible immediately | `$297 Total` / `3-5 Business Days` / `100% Money-Back` |
| Primary CTA | Button above the fold, single action | `Get Started` linking to `/pricing/` |
| Freshness Date | `Updated [Month Year]` visible on page | `Updated April 2026` |

#### Hero HTML Example

```html
<section class="hero">
  <h1>Wyoming LLC for Non-Residents (2026 Guide)</h1>
  <p class="hero-subtitle">Form your US LLC in 3-5 days. $297 total. No SSN required.</p>
  <div class="hero-stats">
    <span>$297 Total</span>
    <span>3-5 Business Days</span>
    <span>100% Money-Back</span>
  </div>
  <a href="/pricing/" class="btn-primary">Get Started</a>
  <p class="updated-date">Updated April 2026</p>
</section>
```

#### H1 Rules (Non-Negotiable)

- Exactly ONE H1 per page — never two, never zero
- H1 must match or closely match the primary keyword
- H1 is the first heading visible on the page
- Do NOT put brand name in the H1
- Include year for freshness-sensitive topics: `(2026 Guide)` or `(2026)`
- Schema `headline` must match H1 EXACTLY — not "Site Name Guide"
- Most CMS/frameworks set H1 automatically — verify it is actually H1, not H2 or a styled div

---

### Section 2: Overview

The overview replaces any "What Is" section. There is NEVER a separate "What Is" section on any page.

#### Overview Rules

- Maximum 2-3 sentences. Not a paragraph. Not a section with subheadings.
- **First sentence** answers "What is this?" completely and directly
- **Second sentence** answers "Why does it matter?"
- **Third sentence** (optional) bridges to the rest of the content
- The overview IS the definition — never create a separate "What Is" heading
- First sentence must be under 40 words (featured snippet extraction length)
- No hedging language: state the definition as a fact

#### Overview Example

```
A Wyoming LLC is a limited liability company registered in Wyoming that provides
asset protection, zero state income tax, and privacy for business owners. Non-residents
from 150+ countries can form one without a US visa or SSN. This guide covers the
complete process from filing to bank account setup.
```

---

### Section 3: Benefits

Benefits sell the value before explaining the process.

#### Benefits Rules

- 3-6 benefits maximum — not 8, not 10
- Each benefit has an icon or visual element (checkmark, shield icon, etc.)
- Each benefit has a 1-line headline + 1-2 sentence explanation
- Benefits MUST contain specific numbers, not vague claims
- Use parallel grammatical structure across all benefit headlines

#### Benefits Examples

```
BAD:  "Great privacy protection"
GOOD: "Zero State Income Tax — Wyoming charges 0% state income tax on LLC income"

BAD:  "Quick formation"
GOOD: "3-5 Day Formation — Your LLC is filed and approved within 3-5 business days"

BAD:  "Affordable pricing"
GOOD: "$297 Total First Year — Includes state fee, registered agent, and all documents"
```

---

### Section 4: Video (Optional)

Video placement has strict rules. Wrong placement breaks content flow.

#### Video Rules

- Only include if a relevant, high-quality video exists
- Place AFTER benefits, BEFORE steps — this is the only valid position
- Never autoplay — always require user interaction to play
- Must have title/attribution visible
- Embed responsively (16:9 aspect ratio container)
- If no video exists, skip this section entirely — do NOT use a placeholder

---

### Section 5: How It Works / Steps

This is the main instructional content of the page.

#### Steps Rules

- Use numbered lists for sequential processes — never bullet points for steps
- Each step = one H3 heading under the H2
- Include time estimates per step (e.g., "Step 1: Choose Your LLC Name (5 minutes)")
- Include requirements inline within each step — do NOT create a separate prerequisites section before the steps
- Link to detailed guide pages from each step
- Each step section must be self-contained (readable without other steps for AI extraction)

#### Steps Example

```html
<h2>How Do You Form a Wyoming LLC?</h2>
<p>Forming a Wyoming LLC takes 5 steps and 3-5 business days total.</p>

<h3>Step 1: Choose Your LLC Name (5 minutes)</h3>
<p>Search the Wyoming Secretary of State database to confirm your name is available.
Your name must include "LLC" or "Limited Liability Company" per Wyoming statute 17-29-108.</p>

<h3>Step 2: Appoint a Registered Agent (10 minutes)</h3>
<p>Wyoming law requires every LLC to have a registered agent with a physical
Wyoming address. Cost: $25-$100/year.</p>
```

---

### Section 6: Costs

Cost transparency builds trust and feeds AI systems extractable pricing data.

#### Costs Rules

- MUST be presented as a table — never as prose paragraphs
- Every line item links to its detailed page
- Show total prominently (bolded row or highlighted)
- Include "Year 2+" costs for transparency — this is non-negotiable
- Compare to competitors in the same table or in an adjacent row
- Include government fee sources (link to .gov pages)

#### Costs Table Example

```html
<h2>How Much Does a Wyoming LLC Cost?</h2>
<p>A Wyoming LLC costs $297 total in the first year with our service.</p>

<table>
  <thead>
    <tr><th>Item</th><th>Cost</th><th>Frequency</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/wyoming-filing-fee/">State Filing Fee</a></td><td>$100</td><td>One-time</td></tr>
    <tr><td><a href="/registered-agent/">Registered Agent</a></td><td>$50</td><td>Annual</td></tr>
    <tr><td><a href="/pricing/">Service Fee</a></td><td>$147</td><td>One-time</td></tr>
    <tr><td><strong>Year 1 Total</strong></td><td><strong>$297</strong></td><td></td></tr>
    <tr><td><strong>Year 2+ Total</strong></td><td><strong>$110/year</strong></td><td>Annual</td></tr>
  </tbody>
</table>
```

---

### Section 7: Requirements

Consolidate ALL prerequisites, documents, and requirements into one section.

#### Requirements Rules

- Use checklist format (checkboxes or checkmark icons)
- Link each requirement to its guide page
- Group by category if more than 6 items (Documents, Banking, Identity)
- Never create separate "Banking" and "Documents" and "Prerequisites" sections — consolidate here

#### Requirements Example

```html
<h2>What Do You Need to Form a Wyoming LLC?</h2>
<p>You need 4 items to form a Wyoming LLC as a non-resident.</p>
<ul class="checklist">
  <li><a href="/passport-requirements/">Valid passport</a> (any country)</li>
  <li><a href="/us-address/">US mailing address</a> (provided with our service)</li>
  <li><a href="/registered-agent/">Wyoming registered agent</a> ($50/year)</li>
  <li><a href="/ein-application/">EIN from IRS</a> (free, Form SS-4)</li>
</ul>
```

---

### Section 8: Compliance

ALL legal, tax, filing, and regulatory content goes in ONE section.

#### Compliance Rules

- Consolidate taxes, legal requirements, annual filings, and regulatory obligations into one section
- Include specific form numbers (Form 5472, Form 1040-NR, Form SS-4)
- Link to IRS.gov and state .gov sources — never secondary sources
- Include BOI (Beneficial Ownership Information) reporting HERE, not as a separate section
- Date-stamp all changing information: "As of 2026, the IRS processing time is..."
- Include disclaimer for YMYL (Your Money, Your Life) content

#### Compliance Example

```html
<h2>What Are the Tax and Compliance Requirements for a Wyoming LLC?</h2>
<p>Wyoming LLCs have 3 annual compliance requirements: the annual report ($60),
federal tax filing, and BOI reporting.</p>

<h3>Annual Report</h3>
<p>File with the Wyoming Secretary of State by the first day of your anniversary month. Cost: $60/year.</p>

<h3>Federal Tax Filing</h3>
<p>Foreign-owned single-member LLCs file <a href="https://www.irs.gov/forms-pubs/about-form-5472">Form 5472</a>
and a pro-forma <a href="https://www.irs.gov/forms-pubs/about-form-1120">Form 1120</a> annually.</p>

<h3>BOI Reporting</h3>
<p>Report beneficial ownership to FinCEN within 90 days of formation (as of 2026).
Updates required within 30 days of any ownership change.</p>
```

---

### Section 9: Comparison

Comparisons must always use tables. Never write comparison paragraphs.

#### Comparison Rules

- ALWAYS use a table — never prose comparisons
- Your service in the first or highlighted column
- Include 3-4 competitors maximum — more creates decision paralysis
- Show real numbers, not vague comparisons ("cheaper" is banned, "$297 vs $597" is correct)
- Include a "3-Year Total" or "5-Year Total" row — this is the knockout metric
- Source competitor pricing with dates: "Prices verified April 2026"

#### Comparison Table Example

```html
<h2>How Does Wyoming LLC Cost Compare to Other Services?</h2>
<p>Our service costs $297 total — $300 less than the next cheapest competitor.</p>

<table>
  <thead>
    <tr><th>Feature</th><th>Our Service</th><th>Doola</th><th>Firstbase</th><th>Incfile</th></tr>
  </thead>
  <tbody>
    <tr><td>Year 1 Total</td><td><strong>$297</strong></td><td>$597</td><td>$499</td><td>$149 + fees</td></tr>
    <tr><td>Year 2+ Annual</td><td><strong>$110</strong></td><td>$300</td><td>$299</td><td>$149</td></tr>
    <tr><td>3-Year Total</td><td><strong>$517</strong></td><td>$1,197</td><td>$1,097</td><td>$447 + fees</td></tr>
    <tr><td>Registered Agent</td><td>Included</td><td>Included</td><td>Included</td><td>$119/year</td></tr>
    <tr><td>EIN Filing</td><td>Included</td><td>Included</td><td>Extra $50</td><td>Extra $70</td></tr>
  </tbody>
</table>
<p class="source-note">Prices verified April 2026</p>
```

---

### Section 10: Social Proof

Combine all trust signals into ONE section near the bottom.

#### Social Proof Rules

- 3 testimonials maximum — more than 3 looks fabricated
- Each testimonial: real quote + real name + location/context + specific result
- Include trust badges: guarantee seal, response time, support channel, key stat
- Link to a full reviews page if one exists
- Never scatter testimonials throughout the page — one section only

#### Social Proof Example

```html
<h2>What Do Clients Say About Our Service?</h2>

<blockquote>
  <p>"Got my Wyoming LLC and EIN in 4 days. Bank account opened the same week."</p>
  <cite>— Sarah M., ecommerce seller, United Kingdom</cite>
</blockquote>

<blockquote>
  <p>"Saved $300 compared to Doola. The WhatsApp support answered my questions in 2 hours."</p>
  <cite>— Ahmed K., freelancer, UAE</cite>
</blockquote>

<blockquote>
  <p>"Filed my Form 5472 on time thanks to their compliance reminders. No IRS issues."</p>
  <cite>— Li Wei, Amazon seller, Singapore</cite>
</blockquote>

<div class="trust-badges">
  <span>100% Money-Back Guarantee</span>
  <span>2-Hour Response Time</span>
  <span>WhatsApp Support</span>
  <span>500+ LLCs Formed</span>
</div>
```

---

### Section 11: FAQ

The FAQ section serves dual purpose: user experience AND AI citation via FAQPage schema.

#### FAQ Rules

- 8-10 questions — not 5, not 15
- Each question uses `<details><summary>` for accordion behavior
- Each answer must be 40-80 words (AI extraction sweet spot)
- Each answer links to at least one relevant internal page
- FAQ schema JSON-LD must match the visible FAQ text EXACTLY
- Questions must match real search queries (check Google PAA for your keyword)
- NEVER have a separate "People Also Ask" section — consolidate all Q&A into this FAQ
- Include specific numbers in every answer — no hedging

#### FAQ HTML Example

```html
<h2>Frequently Asked Questions</h2>

<details>
  <summary>How much does a Wyoming LLC cost?</summary>
  <p>A Wyoming LLC costs $100 for the state filing fee plus $60/year for the
  annual report. With our done-for-you service, the total first-year cost is
  <a href="/pricing/">$297</a>, which includes the registered agent, EIN filing,
  and all formation documents.</p>
</details>

<details>
  <summary>Can non-residents form a Wyoming LLC?</summary>
  <p>Yes. Non-residents from 150+ countries can form a Wyoming LLC without a US
  visa, SSN, or ITIN. You need a valid passport and a
  <a href="/registered-agent/">Wyoming registered agent</a>. The entire process
  takes 3-5 business days.</p>
</details>
```

---

### Section 12: CTA

The final CTA converts visitors who have read the entire page.

#### CTA Rules

- Repeat the price anchor from the hero ($297, etc.)
- Clear single action — one button, one destination (WhatsApp, form, checkout)
- Restate the guarantee ("100% Money-Back Guarantee")
- Include a friction reducer ("No credit card required", "Cancel anytime")
- Never offer multiple competing CTAs — one action only

#### CTA Example

```html
<section class="final-cta">
  <h2>Start Your Wyoming LLC Today</h2>
  <p class="price-anchor">$297 total. Includes everything. No hidden fees.</p>
  <a href="/apply/" class="btn-primary">Get Started Now</a>
  <p class="guarantee">100% Money-Back Guarantee. No credit card required to start.</p>
</section>
```

---

## Section Flow Rules

### Correct Flow (The Only Valid Order)

```
Hero -> Overview -> Benefits -> Video -> Steps -> Costs -> Requirements ->
Compliance -> Comparison -> Social Proof -> FAQ -> CTA
```

This order follows the buyer's journey: What is it? -> Why do I want it? -> How does it work? -> What does it cost? -> What do I need? -> How does it compare? -> Do others trust it? -> What else should I know? -> Take action.

### Wrong Flows (Common Mistakes)

| Mistake | Why It Fails | Fix |
|---------|-------------|-----|
| Overview -> "What Is" section | Duplicate content, cannibalizes own ranking | Expand Overview, delete "What Is" |
| FAQ -> PAA section | Duplicate Q&A content, confuses crawlers | One FAQ section with best questions from both |
| Testimonials mid-content | Breaks instructional flow, reduces comprehension | One Social Proof section near bottom |
| Steps appearing AFTER costs | Users want to understand the process before seeing price | Steps before Costs, always |
| BOI as separate section from Taxes | Too granular, inflates section count | Fold into Compliance section |
| Country guides as a section | Should be internal links within relevant sections | Link contextually, create separate pages |
| "Related Articles" section | Weak internal linking signal | Link within content body instead |
| Costs before Steps | Premature price exposure before value is established | Follow the template order |

---

## Forbidden Patterns

| Pattern | Why It's Bad | Fix |
|---------|-------------|-----|
| FAQ + PAA sections | Duplicate content, confuses schema | One FAQ section, best questions from both |
| "What Is" + Overview | Redundant, wastes section budget | Expand Overview, delete "What Is" |
| 13+ sections | Overwhelming, dilutes focus, higher bounce rate | Consolidate ruthlessly to 12 max |
| Testimonials mid-content | Breaks instructional flow | One Social Proof section near bottom |
| Separate BOI section | Too granular for its own section | Fold into Compliance/Taxes |
| "Related Articles" section | Weak internal linking, lazy | Link within content body instead |
| "In this guide you'll learn..." | Fluff intro that delays the answer | Get to the point in the first sentence |
| "Click here" or "Learn more" links | Non-descriptive anchor text hurts SEO | Use descriptive anchor text: "Wyoming LLC costs" |
| Wall of text (4+ paragraphs no visual) | Users and crawlers skip dense text | Add table, list, or image every 3 paragraphs max |
| Prose comparisons | Unextractable by AI, harder to scan | Use comparison tables |
| Placeholder text | "Coming soon", "TBD", "Lorem ipsum" | Remove or write real content |
| Passive voice | Weak authority signal | Rewrite in active voice |
| Hedging language | "might", "could", "typically" erode trust | State facts with specific numbers |

---

## On-Page SEO Elements

Every page must have these elements configured correctly before deployment.

### Title Tag

- **Length:** 50-60 characters (under 70 to avoid truncation)
- **Format:** `Primary Keyword - Secondary Info (Year) | Brand`
- **Formula (ABC from Ahrefs):** `Adjective + Benefit + Confidence Booster`
- Example: `10 Easy SEO Tips for More Traffic (Tried and Tested)`
- Include primary keyword or close variation
- Include year for freshness-sensitive topics
- Every indexable page must have a unique title tag
- Google rewrites titles 61.6% of the time but still uses your original for ranking

### Meta Description

- **Length:** 150-160 characters
- Expand on the title tag — add information the title doesn't contain
- Match search intent — double down on what searchers want
- Use active voice, address the searcher directly
- Include primary keyword (Google bolds it in results)
- End with a soft CTA or include "Free" / "No signup required"
- Meta descriptions directly influence whether AI (ChatGPT, Perplexity) cites your page

### Canonical Tag

- Every page MUST have a canonical tag pointing to its own URL
- Always absolute URL with trailing slash: `https://yoursite.com/page-slug/`
- Never relative URLs in canonical tags
- Canonical must match the URL in your sitemap exactly

### Open Graph Tags (Required on Every Page)

OG tags influence AI citation decisions (Ahrefs, Jan 2026). Every page needs:

```tsx
openGraph: {
  title: 'Page Title',
  description: 'Description under 160 chars',
  url: 'https://yoursite.com/page-slug/',
  siteName: 'YourSiteName',
  images: [{ url: 'https://yoursite.com/og/page-slug', width: 1200, height: 630, alt: 'Descriptive alt with keyword' }],
  type: 'article',
},
twitter: {
  card: 'summary_large_image',
  title: 'Page Title',
  description: 'Description',
  images: ['https://yoursite.com/og/page-slug'],
}
```

- OG image: 1200x630px, readable at small size, includes page title
- Generate programmatically with Next.js `opengraph-image.tsx` on every page
- Always use LOCAL URLs for images (your domain) — never external image services

### URL Slug

- Lowercase, hyphens only, no dates in URL
- Contains target keyword
- Short and descriptive: `/wyoming-llc-cost/` not `/everything-you-need-to-know-about-wyoming-llc-costs-2026/`
- Trailing slash must match canonical

### Keyword Placement

Primary keyword must appear in all of these locations:

| Location | Example |
|----------|---------|
| Title tag | `Wyoming LLC Cost (2026) \| YourSite` |
| URL slug | `/wyoming-llc-cost/` |
| H1 | `How Much Does a Wyoming LLC Cost?` |
| First paragraph | Within first 100 words |
| At least one H2 | `What Is Included in Wyoming LLC Cost?` |
| Image alt text | `Wyoming LLC formation cost breakdown table` |
| Meta description | `A Wyoming LLC costs $297 total...` |

Rules:
- Never repeat the same keyword in back-to-back sentences
- Never bold keywords in body text for SEO purposes
- One natural mention per location is enough — do not stuff

### Images

- Minimum 1 image per page (hero image)
- Every image has alt text (minimum 10 characters, descriptive)
- At least one image alt text contains primary keyword naturally
- No filename-only alt text (e.g., "image-1.png" is not alt text)
- Use WebP format for all images
- Use `next/image` with `priority` prop on above-fold images

---

## Page Type Variations

### Pillar/Hub Pages

- Use all 12 sections
- Heavier on internal links: 15-20+
- Broader scope, less depth per section
- More comparison content
- Minimum 2,500 words
- Minimum 8 H2 tags
- Required schema: Article + FAQPage + BreadcrumbList

### Cluster Pages (Guides/Articles)

- Use 8-10 sections (may skip Video, may skip Comparison)
- Deeper content per section
- 10-15 internal links
- More detailed steps/processes
- Minimum 1,500 words
- Minimum 6 H2 tags
- Required schema: Article + FAQPage + BreadcrumbList

### Support Pages (Country/State/Niche)

- Use 6-8 sections (Hero, Overview, Key Content, Costs, FAQ, CTA)
- Highly specific content
- 8-12 internal links
- Link UP to parent cluster and pillar pages
- Minimum 1,000 words
- Minimum 4 H2 tags
- Required schema: Article + FAQPage + BreadcrumbList

### Pricing Pages

- Specialized structure:
  1. Hero with price anchor
  2. Value stack (what's included)
  3. Cost breakdown table
  4. Year 2+ transparency
  5. Competitor comparison table
  6. Payment options
  7. Guarantee/refund policy
  8. Social proof
  9. FAQ
  10. CTA
- Required schema: Product + Offer + FAQPage + BreadcrumbList

### Tool/Calculator Pages

- Tool widget is the FIRST thing on the page (after H1)
- Supporting content (how it works, what the concept means) comes AFTER the tool
- Minimum 800 words of supporting content below the tool
- Required schema: SoftwareApplication + FAQPage + BreadcrumbList

### Minimum Content Standards

| Page Type | Min Words | Min H2s | Min Internal Links In | Min Internal Links Out | Required Schema |
|-----------|----------|---------|----------------------|----------------------|-----------------|
| Homepage | 800 | 4+ | All hub pages | 5 pillar pages | Organization + WebSite + Service + FAQPage |
| Service page | 1,000 | 6+ | 5+ | 5+ | Service + Offer + FAQPage + Organization |
| Hub/Pillar | 2,500 | 8+ | 5+ | All cluster pages | Article + FAQPage + BreadcrumbList |
| Cluster/Spoke | 1,500 | 6+ | 3+ | 3+ | Article + FAQPage + BreadcrumbList |
| Comparison | 2,000 | 6+ | 3+ | 3+ | Article + FAQPage + BreadcrumbList |
| Blog post | 1,000 | 5+ | 3+ | 3+ | BlogPosting + FAQPage |
| Tool page | 800 | 4+ | 3+ | 3+ | SoftwareApplication + FAQPage |
| Spanish page | Match English +/-20% | Match English | 3+ | 3+ | Same as English + inLanguage:es |

---

## Visual Element Rules

- Every H2 section must have at least one visual element: icon, table, checklist, image, or stat
- No wall-of-text sections longer than 3 paragraphs without a visual break
- Tables for any comparison or multi-item data — never prose
- Numbered lists for processes/steps
- Bulleted lists for non-sequential items (features, attributes)
- Icons for benefit items
- All tables must have proper `<thead>` / `<tbody>` structure
- Responsive tables: horizontally scrollable on mobile

---

## Content Writing Standards

### Get to the Point Fast

Ahrefs: "Don't kick things off with a load of fluff. Get straight to the point and give the reader what they came for in the first sentence."

```
BAD:  "In this comprehensive guide, we'll walk you through everything you need
       to know about markup calculations and how our free tool can help your business."

GOOD: "Enter your cost price and markup percentage below to calculate your selling
       price instantly."
```

### H2 Rules

- Every H2 must be a question that includes the target entity
- Answer in the first sentence after the H2
- First sentence answer must be 40 words or fewer (featured snippet + AI extraction length)
- Expand fully after the 40-word answer

```
BAD H2:  "Processing Time"
GOOD H2: "How Long Does ITIN Processing Take?"

BAD first sentence:  "There are many factors that affect processing time..."
GOOD first sentence:  "ITIN processing takes 6-11 weeks when filed by mail with Form W-7."
```

### Language Rules

- Active voice always: Subject -> Verb -> Object
- Maximum 15-20 words per sentence
- No hedging: eliminate "might", "could", "possibly", "perhaps", "generally", "typically", "usually"
- State facts as facts: "ITIN processing takes 6-11 weeks" NOT "typically takes around 6-11 weeks"
- Use specific numbers: "3 requirements" NOT "several requirements"
- Date-stamp changing facts: "As of 2026, the IRS processing time is 6-11 weeks"

### Forbidden Phrases

Never write these anywhere on any page:

- "In this comprehensive guide we will cover..."
- "Click here to learn more"
- "Read more" (as anchor text)
- "In conclusion..."
- "It goes without saying..."
- "Various", "numerous", "many" (be specific with numbers)
- Passive voice when active is possible

---

## E-E-A-T Requirements (for YMYL Pages)

Pages covering financial, legal, tax, or health topics require additional trust signals:

- [ ] Author field present OR organization attribution
- [ ] Last updated date visible on page
- [ ] Disclaimer present (for ITIN/tax/legal content)
- [ ] Government verification links present (IRS.gov for tax content)
- [ ] Author schema with credentials in JSON-LD
- [ ] Citations to primary government sources with statute/form numbers

---

## Pre-Deploy Structure Checklist

Run this checklist on EVERY page before it touches production.

### Structure

- [ ] 12 or fewer sections
- [ ] No duplicate sections (no "What Is" + Overview, no FAQ + PAA)
- [ ] Section order follows the 12-section template
- [ ] Every H2 has a visual element (table, list, image, icon, or stat)
- [ ] No wall-of-text longer than 3 paragraphs without a visual break

### Hero

- [ ] H1 present, exactly one, contains primary keyword
- [ ] 3 key stats visible in hero
- [ ] Primary CTA button above the fold
- [ ] "Updated [Month Year]" date visible

### Content

- [ ] Overview is 2-3 sentences max, no separate "What Is" section
- [ ] Benefits have specific numbers, not vague claims
- [ ] Steps are numbered with time estimates
- [ ] Costs are in table format with Year 2+ transparency
- [ ] Requirements use checklist format
- [ ] Compliance consolidates all tax/legal/BOI content
- [ ] Comparison uses table with 3-4 competitors and real numbers

### FAQ

- [ ] FAQ has 8-10 questions with `<details><summary>` accordion
- [ ] FAQ answers are 40-80 words each
- [ ] FAQ text matches FAQPage schema JSON-LD exactly
- [ ] No separate "People Also Ask" section exists

### CTA

- [ ] Final CTA has price anchor + single action + guarantee
- [ ] No competing CTAs in the final section

### SEO Tags

- [ ] Title tag: 50-60 characters, unique, contains primary keyword
- [ ] Meta description: 150-160 characters, unique, expands on title
- [ ] Canonical tag: absolute URL with trailing slash, self-referencing
- [ ] OG tags: title, description, image (1200x630), url all present
- [ ] Twitter card: summary_large_image with title, description, image
- [ ] URL slug: lowercase, hyphens, target keyword, no dates

### Keywords

- [ ] Primary keyword in: title, URL, H1, first 100 words, one H2, alt text, meta description
- [ ] No keyword stuffing (one natural mention per location)

### Schema

- [ ] Article + FAQPage + BreadcrumbList schema present (minimum)
- [ ] Schema headline matches H1 exactly
- [ ] Schema description matches meta description exactly
- [ ] datePublished and dateModified in ISO 8601 format
- [ ] Validated with Google Rich Results Test — zero errors

### Images

- [ ] Minimum 1 image on page
- [ ] Every image has descriptive alt text (10+ characters)
- [ ] At least one alt text contains primary keyword
- [ ] OG image is 1200x630px
- [ ] No placeholder or filename-only alt text

### Internal Links

- [ ] Minimum 3 internal links pointing TO this page (check link map)
- [ ] Descriptive anchor text on every link (never "click here")
- [ ] CTA link to service/pricing page present
- [ ] Link back to parent hub page present
- [ ] All link targets are real pages (no broken links)

### Content Quality

- [ ] No placeholder text ("Lorem ipsum", "Coming soon", "TBD")
- [ ] No hedging language ("might", "could", "typically")
- [ ] Word count meets minimum for page type
- [ ] All H2s are questions containing the target entity
- [ ] First sentence after each H2 directly answers the question in 40 words or fewer

---

## How Page Architecture Affects LLM Citation

The 12-section template is not just for Google. Each section is designed to create extractable content blocks that LLMs can cite independently.

### Why This Architecture Works for AI Systems

LLMs use Retrieval-Augmented Generation (RAG) -- they retrieve chunks of content, not whole pages. The 12-section template creates 12 self-contained chunks, each answerable independently:

| Section | What LLMs Extract | Query Type It Serves |
|---------|-------------------|---------------------|
| Hero | Core value proposition + key stats | "What is [product]?" |
| Overview | Entity definition (under 120 words) | "What does [brand] do?" |
| Benefits | Specific advantages with numbers | "Why choose [product]?" |
| How It Works | Step-by-step process | "How does [process] work?" |
| Costs | Pricing table with line items | "How much does [product] cost?" |
| Requirements | Prerequisites checklist | "What do I need for [product]?" |
| Compliance | Legal/tax obligations | "What are the [compliance] requirements?" |
| Comparison | Feature/price comparison table | "[Product] vs [competitor]?" |
| Social Proof | Specific testimonial results | "Is [brand] worth it?" |
| FAQ | 8-10 direct Q&A pairs | Long-tail questions |

### Architecture Rules for LLM Optimization

1. **Every section must be self-contained.** A reader (or AI) should understand any section without reading the rest of the page. This means each section starts with a clear topic sentence, includes all necessary context, and doesn't rely on pronouns referencing previous sections.

2. **H2 = Question format.** LLMs match user queries to H2 headings. "How Much Does a Wyoming LLC Cost?" matches the query pattern exactly. "Pricing" does not.

3. **40-word answer immediately after H2.** This is the extractive answer that both Google (featured snippets) and LLMs pull. It must be a complete, specific, no-hedging answer.

4. **Tables over prose for comparisons.** LLMs parse HTML tables into structured data. They cannot extract comparison information from narrative paragraphs reliably. Always use `<table>` with `<thead>` and `<tbody>`.

5. **FAQ section = LLM citation multiplier.** Each FAQ question is a potential LLM citation. 8-10 FAQ items = 8-10 chances to be cited for different queries. FAQPage schema makes these machine-readable (3.2x AI citation uplift per Ahrefs).

6. **Server-render all 12 sections.** No section behind JavaScript tabs, accordions that hide content from crawlers, or client-side rendering. Every section must be in the initial HTML response.

---

## Orphan Prevention

Before publishing any page, verify:

1. Parent hub/pillar page already has a link to this new page (or update it simultaneously)
2. At least 2 sibling pages link to this new page
3. This page appears in `sitemap.ts`

A page with zero incoming internal links is invisible to crawlers and will not rank.
