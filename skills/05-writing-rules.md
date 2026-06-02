---
skill: writing-rules
description: Load when writing ANY content. The 41 NLP-optimized authorship rules plus LLM extraction patterns. Non-negotiable on every page.
version: 1.0.0
last-verified: 2026-04
source: Koray GUBUR authorship framework + Ahrefs E-E-A-T + WyomingLLC.co production rules + SEO Council (Indig CITABLE framework)
load: always
triggers: write, content, article, page, blog, copy, draft, authorship
---

# The Writing Rules — Complete Authorship System

> This file is the single source of truth for ALL content writing across ALL sites. Every sentence Claude writes must pass through these rules. No exceptions. No shortcuts. Load this file before writing anything.

---

## THE 41 AUTHORSHIP RULES (Koray Tugberk Gubur Framework)

Every sentence must carry semantic payload. No fluff. No hedging. No opinions. Only verifiable facts structured as Subject-Predicate-Object triples. The SEO community calls this writing style "Koraynese" — NLP-optimized prose that feeds both Google's algorithms and LLM extraction systems simultaneously.

---

### SECTION A: SENTENCE STRUCTURE (Rules 1-6)

These six rules govern how every sentence is physically constructed. They ensure NLP parsers can extract clean Subject-Predicate-Object triples from every line.

---

**RULE 1: Subject Before Verb Before Object. Always.**

Place the grammatical subject first, the verb second, the object third. Never invert sentence order unless for deliberate stylistic emphasis in an introduction.

NLP systems parse SVO triples to build knowledge graphs. Inverted sentences break the triple and reduce extraction confidence.

```
BAD:  "Formed in just 24 hours can be your Wyoming LLC."
GOOD: "A Wyoming LLC forms in 24 hours."

BAD:  "Required for every LLC is a registered agent."
GOOD: "Every LLC requires a registered agent."

BAD:  "Into the calculator, enter your revenue."
GOOD: "Enter your revenue into the calculator."
```

**Self-check:** Read the sentence. Can you identify subject, verb, and object in that exact order? If not, restructure.

---

**RULE 2: Use Active Voice. Never Passive Unless Subject Is Unknown.**

Active voice names the actor. Passive voice hides the actor and weakens semantic signal. Google's NLP extracts entities from active sentences with higher confidence.

```
BAD:  "The LLC is formed by the Secretary of State."
GOOD: "The Wyoming Secretary of State forms the LLC."

BAD:  "The filing fee is charged annually."
GOOD: "Wyoming charges a $60 annual filing fee."

BAD:  "The EIN is issued within 4 weeks."
GOOD: "The IRS issues an EIN within 4 weeks."
```

The only exception: when the actor is genuinely unknown or irrelevant. "The documents were lost in transit" is acceptable if the responsible party is unknown.

---

**RULE 3: Keep Sentences Short. 15-20 Words Maximum.**

Long sentences reduce NLP extraction accuracy. They also reduce human comprehension. Split every sentence that exceeds 20 words into two or more sentences.

```
BAD (31 words):
"Wyoming is one of the most popular states for LLC formation because it offers
no state income tax and has relatively low annual fees compared to other states."

GOOD (two sentences, 11 and 10 words):
"Wyoming charges 0% state income tax on LLCs. Annual fees cost $60 — the lowest among popular formation states."
```

**Target:** Average sentence length across the entire article should fall between 12 and 18 words.

---

**RULE 4: One Idea Per Sentence. Never Combine Two Distinct Facts.**

Each sentence delivers exactly one fact. Two facts in one sentence force the NLP parser to disambiguate, reducing confidence on both.

```
BAD:  "Wyoming has no state income tax and the filing fee is $100."
GOOD: "Wyoming charges 0% state income tax. The state filing fee is $100."

BAD:  "The registered agent receives legal documents and the annual report is due in the first quarter."
GOOD: "The registered agent receives legal documents on behalf of the LLC. The annual report is due by the first day of the LLC's anniversary month."
```

---

**RULE 5: Start With the Most Important Word.**

The first word of a sentence signals the topic entity to NLP. Front-load the keyword or entity that matters most.

```
BAD:  "In order to form an LLC, you need an EIN."
GOOD: "An EIN is required to form a Wyoming LLC."

BAD:  "When it comes to costs, the filing fee is $100."
GOOD: "The filing fee for a Wyoming LLC is $100."

BAD:  "There are several advantages to forming in Wyoming."
GOOD: "Wyoming offers 5 advantages for LLC formation."
```

**Self-check:** Does the first word (or first two words) name the entity this sentence is about? If not, restructure.

---

**RULE 6: Use Parallel Structure in Lists and Sequential Sentences.**

When presenting multiple items, use identical grammatical structure for each. Parallel structure helps NLP recognize items as belonging to the same set.

```
BAD:  "Filing costs $100, and then there is the agent which runs about $25."
GOOD: "Filing costs $100. A registered agent costs $25."

BAD:
- "The filing fee is $100"
- "You also need to pay for a registered agent"
- "Operating agreement costs vary"

GOOD:
- "Filing fee: $100"
- "Registered agent: $25/year"
- "Operating agreement: $0-$200"
```

---

### SECTION B: CERTAINTY AND FACTUAL PRECISION (Rules 7-12)

These rules eliminate ambiguity. Every sentence must read as a verifiable factual claim. NLP systems score certainty — hedging language reduces trust signals.

---

**RULE 7: Never Use Hedging Language.**

Eliminate every hedge word from every sentence. Hedging tells NLP systems the author lacks confidence in the claim.

**Hedging Elimination Table:**

| Hedging Word/Phrase | Replacement Strategy | Example |
|---|---|---|
| might | state what actually happens | "You might need an EIN" -> "A Wyoming LLC requires an EIN" |
| could | state the definite outcome | "This could save you money" -> "This saves $740/year vs. California" |
| possibly | use a specific number or fact | "Possibly within a few days" -> "Within 1-3 business days" |
| perhaps | state the condition directly | "Perhaps you should consider" -> "Non-residents should file Form W-8BEN" |
| some say | cite the specific source | "Some say Wyoming is best" -> "Wyoming ranks #1 for LLC privacy (Nolo, 2026)" |
| it depends | state the variables explicitly | "It depends on your situation" -> "Tax liability varies by state: $0 (WY), $800 (CA), $300 (DE)" |
| generally | give the exact figure | "Generally around $100" -> "The filing fee is $100" |
| typically | specify the norm and exceptions | "Typically takes a few weeks" -> "Standard processing takes 15 business days. Expedited takes 1 day for $100" |
| arguably | remove and state the fact | "Arguably the best state" -> "Wyoming charges the lowest fees of any formation state" |
| tends to | state what it does | "Tends to be cheaper" -> "Costs $60/year vs. $300/year in Delaware" |
| may | state the actual rule | "You may need to file" -> "Non-residents must file Form 5472 annually" |
| often | give the percentage | "Often processed quickly" -> "85% of filings process within 3 business days" |
| probably | confirm or deny | "This will probably work" -> "This method works for all 50 states" |

---

**RULE 8: State Facts as Facts.**

Do not soften factual claims. If something is true, write it as a declarative statement.

```
BAD:  "Wyoming LLCs typically cost around $100."
GOOD: "A Wyoming LLC costs $100 to file."

BAD:  "It is generally believed that Wyoming offers strong privacy."
GOOD: "Wyoming does not require LLC members to be listed in public records."

BAD:  "Most experts agree that an operating agreement is important."
GOOD: "An operating agreement defines member rights, profit distribution, and dissolution procedures."
```

---

**RULE 9: Use Specific Numbers. Always.**

Every claim that can include a number must include a number. Vague quantifiers ("several," "many," "a few") carry zero semantic payload.

```
BAD:  "several requirements"      GOOD: "3 requirements"
BAD:  "a few months"              GOOD: "60 days"
BAD:  "many countries"            GOOD: "150+ countries"
BAD:  "a small fee"               GOOD: "a $60 fee"
BAD:  "most states"               GOOD: "44 states"
BAD:  "a significant percentage"  GOOD: "73%"
BAD:  "takes some time"           GOOD: "takes 15 business days"
BAD:  "saves you money"           GOOD: "saves $740/year"
```

**Data Density Target:** Every article must contain a minimum of 40 specific numbers. This includes dollar amounts, percentages, day counts, entity counts, year references, statute numbers, and any other quantifiable fact. Count the numbers in the draft. If the total falls below 40, research and add more.

---

**RULE 10: Cite Verifiable Sources for Claims Requiring Authority.**

Any claim involving government rules, legal requirements, tax rates, or official processes must reference the source. NLP systems use citation presence as a trust signal.

```
BAD:  "The filing fee is $100."
GOOD: "The Wyoming Secretary of State charges a $100 filing fee (W.S. 17-29-105)."

BAD:  "Non-residents can form an LLC."
GOOD: "Wyoming statute W.S. 17-29-201 allows non-US residents to form an LLC without a Social Security Number."
```

Acceptable sources: government websites (.gov), state statutes (with section numbers), IRS publications (with publication numbers), official regulatory bodies.

---

**RULE 11: Do Not Express Opinions.**

Replace every opinion with verifiable data. Content is not an editorial. Content is an information delivery system.

```
BAD:  "I think Wyoming is the best state for LLCs."
GOOD: "Wyoming charges $100 to form an LLC with $60 annual fees, 0% state income tax, and no public member disclosure."

BAD:  "In my experience, the process is straightforward."
GOOD: "The formation process requires 3 documents and takes 1-3 business days."

BAD:  "We believe this is the best approach."
GOOD: "This approach reduces filing time from 15 days to 1 day and costs $100 less than alternatives."
```

---

**RULE 12: Date-Stamp Facts That Change Over Time.**

Any fee, rate, deadline, requirement, or regulation that could change must include a date reference. Undated facts become misleading as soon as the underlying data changes.

```
BAD:  "The fee is $100."
GOOD: "As of 2026, the Wyoming LLC filing fee is $100."

BAD:  "The corporate tax rate is 21%."
GOOD: "The US federal corporate tax rate is 21% (2026, IRC Section 11)."

BAD:  "Wyoming has no state income tax."
GOOD: "Wyoming levies 0% state income tax as of 2026."
```

---

### SECTION C: ENTITY COVERAGE (Rules 13-18)

These rules ensure every entity mentioned is fully qualified with its attributes, relationships, and context. NLP systems build knowledge graphs from entity-attribute-value triples.

---

**RULE 13: Every Entity Mentioned Must Be Qualified.**

Never reference an entity without describing what it is. NLP systems need qualification to disambiguate.

```
BAD:  "the LLC"
GOOD: "the Wyoming LLC, a single-member limited liability company"

BAD:  "the EIN"
GOOD: "the Employer Identification Number (EIN), a 9-digit tax ID issued by the IRS"

BAD:  "the annual report"
GOOD: "the Wyoming Annual Report, a 1-page filing due on the first day of the LLC's anniversary month"
```

Qualify on first mention. Subsequent mentions can use the short form after the full form has been established.

---

**RULE 14: Cover Every Relevant Attribute Using the EAV Framework.**

For the primary entity on any page, systematically cover every attribute users ask about. Use the Entity-Attribute-Value (EAV) model:

| Entity | Attribute | Value |
|---|---|---|
| Wyoming LLC | Filing fee | $100 |
| Wyoming LLC | Annual fee | $60 |
| Wyoming LLC | Formation time | 1-3 business days |
| Wyoming LLC | State income tax | 0% |
| Wyoming LLC | Public disclosure | None required |
| Wyoming LLC | Registered agent | Required |

**Self-check:** List the primary entity's attributes. Have you covered cost, time, requirements, benefits, limitations, and alternatives? If any attribute is missing, add it.

---

**RULE 15: Mention Related Entities That Establish Context.**

No entity exists in isolation. Mention the entities that surround and connect to the primary entity. This builds the semantic neighborhood NLP systems expect.

Writing about a Wyoming LLC? Mention:
- EIN (tax identification)
- Registered agent (legal requirement)
- Operating agreement (governance document)
- Articles of Organization (formation document)
- Wyoming Secretary of State (filing authority)
- Annual report (compliance requirement)
- Bank account (operational necessity)

Each related entity strengthens the semantic signal of the primary entity.

---

**RULE 16: Define Every Technical Term on First Use.**

Write for someone who knows their problem but not the jargon. Define terms inline without breaking the sentence flow.

```
BAD:  "You need an EIN to open a bank account."
GOOD: "You need an Employer Identification Number (EIN) — a 9-digit tax ID from the IRS — to open a US business bank account."

BAD:  "File your Articles of Organization."
GOOD: "File your Articles of Organization, the 1-page legal document that officially creates the LLC with the state."

BAD:  "Set up DKIM for your domain."
GOOD: "Set up DKIM (DomainKeys Identified Mail), an email authentication protocol that verifies your domain is authorized to send emails."
```

---

**RULE 17: Use the Exact Entity Name Consistently.**

Do not alternate randomly between variations. Pick one primary name. Use it every time. Introduce variations intentionally and explicitly.

```
BAD:  "Wyoming LLC" → "WY LLC" → "Wyoming limited liability company" → "the LLC" (random switching)

GOOD: "A Wyoming LLC is a limited liability company registered in Wyoming (also abbreviated as WY LLC)."
Then use "Wyoming LLC" consistently for the rest of the page.
```

NLP rewards consistency over stylistic variety. Using the same term repeatedly is not repetitive — it is precise.

---

**RULE 18: Map Entity-to-Attribute Connections Explicitly.**

State the relationship between entities in plain language. Do not assume the reader or the NLP system will infer the connection.

```
BAD:  "You need a registered agent. You also need an operating agreement."
GOOD: "A Wyoming LLC requires a registered agent. The registered agent receives legal documents — including lawsuits and state correspondence — on behalf of the LLC. A Wyoming LLC also requires an operating agreement, which defines member ownership percentages and voting rights."
```

Every entity connection must be stated. Never leave relationships implicit.

---

### SECTION D: H2 HEADING RULES (Rules 19-24)

H2 headings structure the page for both NLP and featured snippet extraction. Every H2 is a potential featured snippet or AI Overview answer trigger.

---

**RULE 19: Every H2 Must Be a Question.**

Questions match user search queries directly. Statement headings require NLP to infer the question. Question headings match it exactly.

```
BAD:  "Wyoming LLC Overview"
GOOD: "What Is a Wyoming LLC?"

BAD:  "Costs and Fees"
GOOD: "How Much Does It Cost to Form a Wyoming LLC?"

BAD:  "Formation Process"
GOOD: "How Do You Form a Wyoming LLC?"

BAD:  "Tax Advantages"
GOOD: "What Tax Advantages Does a Wyoming LLC Provide?"
```

---

**RULE 20: The Question Must Match the User's Exact Query Pattern.**

Research how users phrase the question in Google and AI systems. Use the same words in the same order.

```
BAD:  "What Is the Procedure for Wyoming LLC Establishment?" (nobody searches this)
GOOD: "How Do I Start a Wyoming LLC?" (matches real search queries)

BAD:  "What Are the Financial Obligations?" (too formal)
GOOD: "How Much Does a Wyoming LLC Cost?" (matches search language)
```

Tools: Check Google's People Also Ask, autocomplete suggestions, and DataForSEO question queries for the target keyword.

---

**RULE 21: Answer the H2 Question in the FIRST Sentence After the Heading.**

Do not build up to the answer. Do not provide context first. Do not write an introduction. Answer immediately.

```
BAD:
## How Much Does a Wyoming LLC Cost?
When it comes to costs, there are several factors to consider. The state has its
own fees, and then you need to think about additional services...

GOOD:
## How Much Does a Wyoming LLC Cost?
A Wyoming LLC costs $100 for the state filing fee plus $25-$100 annually for a
registered agent service. The total first-year cost for a non-resident ranges
from $125 to $300.
```

The first sentence IS the answer. Everything after the first sentence is supporting detail.

---

**RULE 22: The First Answer Must Be 40 Words or Fewer.**

This is the extractive answer. Google pulls this for featured snippets. AI Overviews pull this for citation. LLMs extract this for RAG responses. If the answer exceeds 40 words, Google skips it.

**The 40-Word Extractive Answer Formula:**

```
[Entity] + [verb] + [specific answer with numbers] + [one qualifying detail].
```

Examples:

```
"A Wyoming LLC costs $100 for state filing plus $60/year for the annual report.
Non-residents pay an additional $25-$100/year for a registered agent." (29 words)

"The IRS issues an EIN to Wyoming LLCs within 4 weeks by mail or instantly online.
Non-US residents without an SSN must apply by mail using Form SS-4." (30 words)

"Wyoming charges 0% state income tax on LLC revenue. Members pay federal income
tax only, reported on their personal returns via Schedule C or Form 1065." (26 words)
```

**Self-check:** Count the words in the first sentence (or first two sentences) after every H2. If the count exceeds 40, shorten.

---

**RULE 23: After the 40-Word Answer, Expand With Full Detail.**

The 40-word answer opens the section. It is not the entire section. After the extractive answer, provide:
- Supporting data and numbers
- Breakdown tables
- Step-by-step processes
- Edge cases and exceptions
- Source citations

```
## How Much Does a Wyoming LLC Cost?
A Wyoming LLC costs $100 for state filing plus $60/year for the annual report.
Non-residents pay an additional $25-$100/year for a registered agent.

### Full Cost Breakdown

| Item | Cost | Frequency |
|---|---|---|
| State filing fee | $100 | One-time |
| Annual report | $60 | Annual |
| Registered agent | $25-$100 | Annual |
| EIN application | $0 | One-time |
| Operating agreement | $0-$200 | One-time |
| **Total first year** | **$185-$460** | — |

The Wyoming Secretary of State charges $100 for online filing...
[continue with full detail]
```

---

**RULE 24: Never Use Vague H2s. Always Specify the Entity.**

Every H2 must name the specific entity. Generic questions match too many topics and reduce ranking precision.

```
BAD:  "How Much Does It Cost?"
GOOD: "How Much Does It Cost to Form a Wyoming LLC?"

BAD:  "What Are the Benefits?"
GOOD: "What Are the Tax Benefits of a Wyoming LLC?"

BAD:  "How Long Does It Take?"
GOOD: "How Long Does It Take to Form a Wyoming LLC Online?"
```

---

### SECTION E: CONTENT STRUCTURE (Rules 25-30)

These rules govern how sections, paragraphs, and information blocks are organized across the full page.

---

**RULE 25: Open With the Most Important Sentence.**

The first sentence of the entire page answers: "What is this page about?" No wind-up. No context-setting. No "In this guide, we will cover..."

**Opening Sentence Formula:**

```
[Primary entity] + [is/does] + [core definition or value proposition] + [one key differentiator].
```

```
WRONG:
"Wyoming has become an increasingly popular choice for entrepreneurs and business
owners who are looking to form an LLC due to its business-friendly laws and low fees."

RIGHT:
"A Wyoming LLC is a limited liability company registered in Wyoming that non-US
residents can form without visiting the United States."

WRONG:
"In this comprehensive guide, we will walk you through everything you need to know
about calculating your markup percentage for your e-commerce business."

RIGHT:
"The markup calculator converts your product cost and desired margin into the exact
selling price, profit amount, and markup percentage."
```

**Why the RIGHT versions work:** They name the entity, define it, and deliver the most important fact. No filler. Pure semantic signal.

---

**RULE 26: Use the Inverted Pyramid Within Each Section.**

Every section follows: Most important fact -> supporting details -> examples -> edge cases.

```
STRUCTURE:
1. Extractive answer (40 words, the key fact)
2. Supporting data (numbers, breakdowns, specifics)
3. Table or list (structured data for NLP)
4. Examples or edge cases (depth)
5. Source citation (trust)
```

Never build up to the point. Start with it.

---

**RULE 27: Never Start a New Section Without Finishing the Previous Section's Core Claim.**

Every section must be self-contained. The reader (and the NLP system) must be able to extract the section independently without needing context from other sections.

```
BAD:
## How Much Does a Wyoming LLC Cost?
The costs vary. We'll break them down below.

## What Fees Does Wyoming Charge?
As mentioned in the previous section...

GOOD:
## How Much Does a Wyoming LLC Cost?
A Wyoming LLC costs $100 for state filing plus $60/year for the annual report.
[Full cost breakdown within this section]

## What Annual Fees Does a Wyoming LLC Require?
Wyoming charges a $60 annual report fee due on the first day of the LLC's
anniversary month. [Full annual fee details within this section]
```

---

**RULE 28: Every H3 Must Be a Sub-Question or Sub-Attribute of Its Parent H2.**

H3s break down the H2's answer into specific components. An H3 must be semantically contained within its parent H2's scope.

```
GOOD STRUCTURE:
## How Much Does a Wyoming LLC Cost?
  ### What Is the State Filing Fee?
  ### What Does a Registered Agent Cost?
  ### Are There Any Hidden Fees?

BAD STRUCTURE:
## How Much Does a Wyoming LLC Cost?
  ### What Is a Registered Agent? (this is a different topic, not a cost sub-question)
  ### History of Wyoming Business Law (completely unrelated)
```

---

**RULE 29: Use Tables for Comparisons. Never Write Comparison Information in Prose.**

Tables are structured data. Prose comparisons are unstructured data. NLP systems extract tables with higher accuracy than prose comparisons. Google displays tables in featured snippets.

```
WRONG:
"Wyoming is cheaper than Delaware because the annual fee is only $60 compared to
$300 for Delaware, and California charges even more at $800 per year."

RIGHT:
| State | Filing Fee | Annual Fee | State Income Tax | 5-Year Total Cost |
|---|---|---|---|---|
| Wyoming | $100 | $60/year | 0% | $340 |
| Delaware | $90 | $300/year | 0% (for non-residents) | $1,290 |
| California | $70 | $800/year (franchise tax) | 8.84% | $3,270 |
```

**Comparison Table Rules:**
1. Always include at least 3 options in a comparison (never just 2)
2. Always include a "total cost" or "bottom line" column so readers can compare outcomes
3. Bold the winning value in each column when a clear winner exists
4. Include the unit ($/year, %, days) in the column header, not in every cell
5. Sort rows by the most important column (usually cost) from best to worst
6. Include a source note below the table with the verification date

---

**RULE 30: Use Numbered Lists for Processes. Use Bulleted Lists for Non-Sequential Attributes.**

```
NUMBERED (sequential process):
1. Choose a business name — check availability at wyoming.gov
2. Appoint a registered agent — must have a Wyoming address
3. File Articles of Organization — $100 online filing fee
4. Draft an operating agreement — not filed with the state but legally required
5. Apply for an EIN — free from IRS.gov or by mail

BULLETED (non-sequential attributes):
- 0% state income tax
- No public member disclosure
- $60/year annual report fee
- No residency requirement
- Asset protection statutes
```

Never use bullets for steps. Never use numbers for unordered attributes.

---

### SECTION F: WORD AND VOCABULARY (Rules 31-36)

These rules govern word choice. Every word must carry semantic weight. Eliminate every word that does not add information.

---

**RULE 31: Prefer Concrete Nouns Over Abstract Ones.**

Abstract nouns reduce NLP extraction accuracy. Concrete nouns name specific things.

```
BAD:  "the cost"              GOOD: "the $100 filing fee"
BAD:  "the process"           GOOD: "the 3-step formation process"
BAD:  "the benefits"          GOOD: "the 0% state income tax and no public disclosure"
BAD:  "the requirements"      GOOD: "the 3 formation documents"
BAD:  "the timeline"          GOOD: "the 1-3 business day processing window"
```

---

**RULE 32: Use Verbs That Carry Semantic Payload.**

Strong verbs name specific actions. Weak verbs name existence. Replace weak verbs with strong verbs wherever possible.

```
STRONG VERBS (use these):
requires, enables, restricts, costs, produces, files, registers, charges,
eliminates, reduces, generates, protects, discloses, mandates, prohibits,
calculates, converts, displays, validates, verifies

WEAK VERBS (avoid these):
is, has, does, gets, makes, goes, comes, takes, gives, puts, seems, appears
```

```
BAD:  "Wyoming has no state income tax."
GOOD: "Wyoming charges 0% state income tax."

BAD:  "The tool gives you the result."
GOOD: "The calculator displays your markup percentage, selling price, and profit margin."

BAD:  "You need to get an EIN."
GOOD: "The IRS requires every multi-member LLC to obtain an EIN."
```

---

**RULE 33: Eliminate Redundant Adjectives.**

If two adjectives mean the same thing, delete one. If an adjective adds no information, delete it.

```
BAD:  "fast and quick processing"     GOOD: "fast processing"
BAD:  "simple and easy steps"         GOOD: "simple steps"
BAD:  "free and complimentary"        GOOD: "free"
BAD:  "important and essential"       GOOD: "essential"
BAD:  "complete and comprehensive"    GOOD: "complete"
```

---

**RULE 34: Do Not Use Filler Phrases.**

Filler phrases add zero semantic signal. They exist only as written throat-clearing. Delete every one on sight.

**Filler Phrase Elimination List:**

| Filler Phrase | Action |
|---|---|
| "It is important to note" | Delete entirely. State the fact directly. |
| "As mentioned above" | Delete. Each section is self-contained. |
| "In conclusion" | Delete. The final section speaks for itself. |
| "To sum up" | Delete. |
| "At the end of the day" | Delete. |
| "When it comes to" | Delete. Start with the subject. |
| "In order to" | Replace with "To" |
| "Due to the fact that" | Replace with "Because" |
| "In the event that" | Replace with "If" |
| "It goes without saying" | Delete. If it goes without saying, don't say it. |
| "Needless to say" | Delete. |
| "As a matter of fact" | Delete. State the fact. |
| "For all intents and purposes" | Delete. |
| "In this article/guide" | Delete. |
| "Let's dive in" | Delete. |
| "Without further ado" | Delete. |
| "It should be noted that" | Delete. State the note directly. |
| "The fact of the matter is" | Delete. State the matter. |
| "All things considered" | Delete. |
| "In today's world" | Delete. |
| "Are you looking for" | Delete. Answer the search query directly. |

---

**RULE 35: Use the Same Vocabulary as Google's Featured Snippets and PAA.**

Research the target query. Look at the exact words Google uses in featured snippets and People Also Ask results. Use those exact words.

```
If Google's PAA says "How much does it cost to start an LLC in Wyoming?"
  -> Use "cost to start an LLC in Wyoming" — not "price of Wyoming LLC formation"

If the featured snippet says "registered agent"
  -> Use "registered agent" — not "statutory agent" or "agent for service of process"
```

Match user language. Do not use technical synonyms that users do not search for.

---

**RULE 36: Do Not Use Synonyms to Avoid Repetition.**

If the correct word is "registered agent," use "registered agent" every time. Never replace it with "statutory agent," "resident agent," or "the agent" for variety.

NLP rewards consistency. Synonym rotation introduces ambiguity. The entity name IS the semantic signal. Repeating it strengthens the signal.

```
BAD:  "The registered agent... The statutory agent... The resident agent... The agent..."
GOOD: "The registered agent... The registered agent... The registered agent..."

BAD:  "Wyoming LLC... WY business entity... Wyoming company... The LLC..."
GOOD: "Wyoming LLC... Wyoming LLC... Wyoming LLC..."
```

---

### SECTION G: FORMAT AND FLOW (Rules 37-41)

These rules govern the macro structure of the page and ensure semantic coherence across the entire document.

---

**RULE 37: Maximum One Macro Context Per Page.**

A macro context is the single overarching topic of the page. One page = one macro context. If you are writing about two distinct topics, split into two pages.

```
BAD:  A page about "Wyoming LLC formation" that also covers "Delaware LLC formation"
      in equal depth. (Two macro contexts = semantic confusion)

GOOD: A page about "Wyoming LLC Formation" with a comparison table that briefly
      references Delaware. (One macro context with supporting comparison)
```

---

**RULE 38: Do Not Introduce Unrelated Entities.**

Every entity on the page must be semantically connected to the macro context. An entity that has no connection to the primary topic dilutes semantic signal.

```
BAD (on a Wyoming LLC cost page):
"Bitcoin has been rising in value recently, which makes cryptocurrency businesses
a good candidate for Wyoming LLCs."

GOOD (on a Wyoming LLC cost page):
"The Wyoming Secretary of State accepts credit card, ACH, and check payments for
the $100 filing fee."
```

---

**RULE 39: Every Paragraph Transition Must Be Logical.**

The last sentence of one paragraph must connect to the first sentence of the next. The reader (and NLP system) should never wonder "why did we jump to this?"

```
BAD:
"The filing fee is $100. Wyoming processes filings within 1-3 business days.

The registered agent must have a physical address in Wyoming."

GOOD:
"The filing fee is $100. Wyoming processes filings within 1-3 business days.

After filing, the LLC must maintain a registered agent. The registered agent must
have a physical address in Wyoming to receive legal documents on behalf of the LLC."
```

The transition word "After filing" connects the two paragraphs logically.

---

**RULE 40: Use Schema Markup for Every Applicable Structured Data Type.**

Every page must include the relevant JSON-LD schema markup:
- **FAQPage** — for any page with Q&A sections
- **HowTo** — for any page with step-by-step processes
- **Article** — for blog posts and informational pages
- **BreadcrumbList** — for every page (navigation context)
- **Product** — for service/product pages with pricing

Schema markup makes content machine-readable. It enables rich results in Google and structured extraction by LLMs.

---

**RULE 41: End With a Clear Action Statement.**

The final section of every page must tell the reader exactly what to do next. No vague "hope this helped." A specific, actionable next step.

```
BAD:  "We hope this guide was helpful in understanding Wyoming LLCs."

GOOD: "File your Wyoming LLC now at the Wyoming Secretary of State website
(sos.wyo.gov). The online filing takes 10 minutes and costs $100."

BAD:  "Feel free to reach out if you have any questions."

GOOD: "Use the markup calculator above to find your selling price. Enter your
cost and target margin — the tool calculates your price instantly."
```

---

## LEXICAL SEMANTICS CHECKLIST

Before publishing any page, verify that the content includes the full lexical network around the primary entity. NLP systems expect these semantic relationships to be present.

| Relation | What It Is | What to Do | Example (Entity: Wyoming LLC) |
|---|---|---|---|
| **Synonyms** | Different names for the same thing | Use primary name consistently. Introduce variations once, explicitly. | "Wyoming LLC" primary. Introduce "WY LLC" once in parentheses. |
| **Hypernyms** | Broader category terms | Include the broader terms that contain the entity. | "business structure," "legal entity," "business formation" |
| **Hyponyms** | Narrower, more specific terms | Include the specific subtypes of the entity. | "single-member Wyoming LLC," "multi-member Wyoming LLC," "Series LLC" |
| **Meronyms** | Part-of relationships (components) | Name every component of the entity explicitly. | "Articles of Organization," "operating agreement," "registered agent," "EIN" |
| **Co-occurrence** | Terms that naturally appear alongside the entity | Include standard co-occurring terms throughout. | "no state income tax," "asset protection," "annual report," "filing fee" |

**Pre-Publish Lexical Audit:**
- [ ] Primary entity named correctly and used consistently throughout
- [ ] At least 2 hypernyms (broader category terms) present
- [ ] At least 2 hyponyms (narrower subtypes) present
- [ ] All meronyms (components) named and defined
- [ ] At least 5 co-occurrence terms naturally integrated
- [ ] Predicate verbs match user query patterns (form, cost, require, file, register)
- [ ] No synonym rotation — same entity name used every time

---

## E-E-A-T WRITING SIGNALS

E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is not just about site structure. It must be demonstrated within the writing itself.

### How to Signal Experience in Writing

Experience means first-hand, real-world involvement. Show it through specificity and practical knowledge.

```
BAD (no experience signal):
"Forming an LLC is a good idea for business owners."

GOOD (experience signal):
"Filing a Wyoming LLC online takes 10 minutes. The Secretary of State's website
accepts the Articles of Organization as a fillable PDF. Confirmation arrives by
email within 24 hours on business days."
```

Signals that demonstrate experience:
- Specific process details that only someone who has done it would know
- Exact time durations from real-world completion ("confirmation arrives within 24 hours")
- Named tools, websites, and forms ("fillable PDF on sos.wyo.gov")
- "Last verified" dates on factual claims
- Real outputs and screenshots with realistic data
- Edge cases that only come from hands-on knowledge

### How to Signal Expertise in Writing

Expertise means depth and accuracy. Show it through precision and completeness.

```
BAD (no expertise signal):
"You might need to pay taxes on your LLC income."

GOOD (expertise signal):
"A single-member Wyoming LLC reports income on Schedule C of the owner's Form 1040.
Multi-member LLCs file Form 1065 and issue K-1s to each member. The LLC itself
pays no federal income tax — all income passes through to members' personal returns."
```

Signals that demonstrate expertise:
- Correct form numbers, statute references, and section citations
- Coverage of edge cases and exceptions
- Technical accuracy verified against primary sources
- EAV triples that cover every relevant attribute
- Depth that goes beyond what competitors cover

### How to Signal Authoritativeness in Writing

Authoritativeness means being the recognized source. Show it through original data and definitive statements.

```
BAD (no authority signal):
"According to various sources, Wyoming is a popular state for LLCs."

GOOD (authority signal):
"Wyoming registered 32,491 new LLCs in 2025 (Wyoming Secretary of State Annual Report).
This represents a 12% increase over 2024 and makes Wyoming the 3rd most popular
formation state per capita."
```

Signals that demonstrate authority:
- Original data, research, or analysis not found elsewhere
- Specific citations with publication names and dates
- Definitive statements backed by evidence
- Industry-standard terminology used correctly
- Content that other sites would want to reference

### How to Signal Trustworthiness in Writing

Trust is the most important E-E-A-T pillar. Untrustworthy content is worthless regardless of expertise.

```
BAD (trust-destroying):
"This is definitely the cheapest way to form an LLC!" (unverified superlative)

GOOD (trust-building):
"Wyoming's $100 filing fee ranks 5th lowest among all 50 states. Only Kentucky ($40),
Arkansas ($45), Mississippi ($50), and Colorado ($50) charge less as of 2026."
```

Signals that build trust:
- No hedging language (Rules 7-8)
- No unverified superlatives ("best," "cheapest," "fastest" without evidence)
- Transparent methodology ("we compared filing fees across all 50 states")
- Date-stamped facts (Rule 12)
- Clear disclosure of limitations ("this calculator does not account for local taxes")
- Source citations for every authoritative claim

---

## BRAND VOICE ADAPTATION RULES

The 41 authorship rules apply to every site. Brand voice determines HOW you apply them — the tone, sophistication level, and audience assumptions change per site. The rules themselves never change.

### How Brand Voice Interacts With the 41 Rules

| Rule Aspect | Universal (never changes) | Brand-Adapted (changes per site) |
|---|---|---|
| Sentence length | Max 20 words | — |
| Active voice | Always | — |
| Hedging elimination | Always eliminate | — |
| Specific numbers | Always include | — |
| Entity qualification | Full qualification on first mention | Level of detail in qualification varies by audience sophistication |
| Technical terms | Define on first use | Skip definitions for expert audiences (e.g., crazyads.io, serpapis.com) |
| Tone words | No filler, no fluff | Word choice adapts: "instantly" (tweetsy) vs. "in real-time" (serpapis) |
| Opening sentence | Entity + definition + key fact | Formula adapts per site voice profile |
| CTA style | Specific and actionable | "Spin the wheel" (tweetsy) vs. "Calculate your CPM" (crazyads) |

### Adaptation Examples

**Same fact, different brand voices:**

ecomstudio.ai (business-like):
"The markup calculator converts your product cost into selling price, margin percentage, and profit amount. Enter your cost and target margin below."

tweetsy.io (casual, fun):
"Find your selling price in seconds. Type your cost, pick your margin, done."

supatax.ai (clear, reassuring):
"See exactly how much profit you keep after costs. Enter your product cost and desired margin — the calculator shows your selling price instantly."

crazyads.io (confident, data-driven):
"Calculate markup, margin, and selling price. Input cost and target — output in real-time."

**All four versions follow the 41 rules.** Subject before verb. Active voice. Specific numbers where applicable. No hedging. No filler. The difference is in tone, word choice, and assumed sophistication.

---

## THE 40-WORD EXTRACTIVE ANSWER FORMULA

Every H2 section must open with an answer designed for extraction by Google Featured Snippets, AI Overviews, and LLM RAG systems.

### The Formula

```
[Entity] + [specific verb] + [direct answer with at least 1 number] + [one qualifying clause].
```

### Constraints
- Maximum 40 words
- Must contain at least 1 specific number
- Must name the entity explicitly (not "it" or "this")
- Must be a complete, standalone answer (no "as mentioned above")
- Must use active voice
- Must be the FIRST sentence(s) after the H2

### Examples

```
Q: "How much does a Wyoming LLC cost?"
A: "A Wyoming LLC costs $100 for state filing plus $60/year for the annual report.
   Total first-year cost ranges from $185 to $460 depending on registered agent
   and operating agreement options." (34 words)

Q: "How long does it take to form a Wyoming LLC?"
A: "Wyoming processes LLC filings in 1-3 business days for online submissions.
   Same-day expedited processing costs $100 and completes within 4 hours on
   business days." (26 words)

Q: "What is CPM in advertising?"
A: "CPM (cost per mille) is the price an advertiser pays per 1,000 ad impressions.
   The formula is: CPM = (total ad spend / total impressions) x 1,000." (30 words)

Q: "How do you calculate markup percentage?"
A: "Markup percentage equals the difference between selling price and cost, divided
   by cost, multiplied by 100. A product costing $10 sold for $15 has a 50%
   markup." (29 words)
```

### Why 40 Words

Google's featured snippet extraction pulls 40-50 words. AI Overviews cite passages of similar length. LLM RAG systems chunk and retrieve passages — shorter, self-contained answers score higher retrieval relevance. Writing the extractive answer deliberately ensures YOUR content is the cited source.

---

## DATA DENSITY TARGETS

Every article must be dense with specific, verifiable data points. Vague content gets skipped by NLP systems. Data-rich content gets extracted, cited, and ranked.

### Minimum Data Points Per Article

| Article Type | Minimum Specific Numbers | Examples of Countable Data |
|---|---|---|
| Tool page | 40+ | Fees, percentages, time durations, step counts, limits |
| Comparison page | 50+ | Price per option, feature counts, ratings, dates |
| How-to guide | 40+ | Step counts, time per step, costs, requirements |
| FAQ page | 30+ | Specific answers with numbers in each Q&A |
| Pillar page | 60+ | Stats, entity counts, cost ranges, date references |

### What Counts as a Specific Number

- Dollar amounts: "$100," "$25/year"
- Percentages: "0%," "73%," "12.5%"
- Counts: "3 requirements," "5 steps," "50 states"
- Durations: "1-3 business days," "15 minutes," "24 hours"
- Dates: "2026," "as of January 2026"
- Statute references: "W.S. 17-29-105"
- Ranges: "$185-$460," "1-3 days"
- Measurements: "40 words," "15-20 words per sentence"

### How to Hit the Target

1. After drafting, count every specific number in the article
2. If below the minimum, identify vague claims ("several," "many," "a few")
3. Research the actual number for each vague claim
4. Replace every vague quantifier with a specific figure
5. Add supporting data points: comparisons, breakdowns, percentages, date stamps

---

## COMPARISON TABLE WRITING RULES

Tables are the highest-value content format for NLP extraction. Google features tables in snippets. LLMs extract table data with high accuracy.

### Table Construction Rules

1. **Minimum 3 rows** — never compare only 2 items
2. **Maximum 7 columns** — beyond 7, the table becomes unreadable on mobile
3. **First column = entity names** — the things being compared
4. **Column headers include units** — "$USD/year" not just "Annual Fee"
5. **Bold the best value** in each column when a clear winner exists
6. **Sort by the most important column** — usually total cost, best to worst
7. **Include a total/summary column** — "5-Year Total Cost" or "Overall Score"
8. **No prose in table cells** — numbers, short phrases, Yes/No only
9. **Source row or note below** — "Source: [Name], verified [Month Year]"
10. **Every table must have an introductory sentence** — what is being compared and why

### Example

```
Wyoming offers the lowest total formation and maintenance cost among the 3 most
popular LLC states.

| Feature | Wyoming | Delaware | California |
|---|---|---|---|
| Filing fee | **$100** | $90 | $70 |
| Annual fee | **$60/year** | $300/year | $800/year |
| State income tax | **0%** | 0% (non-residents) | 8.84% |
| Public member disclosure | **No** | No | Yes |
| 5-year total cost | **$340** | $1,290 | $3,270 |

Source: Wyoming Secretary of State, Delaware Division of Corporations, California
Franchise Tax Board. Verified April 2026.
```

---

## SELF-CHECK BEFORE PUBLISHING: THE 5-QUESTION SENTENCE AUDIT

Read every single sentence in the draft and ask these 5 questions. If any sentence fails any question, rewrite or delete.

### The 5 Questions

| # | Question | If NO... |
|---|---|---|
| 1 | Does this sentence state a verifiable fact? | Rewrite with a fact or delete. No opinions, no hedging. |
| 2 | Does this sentence contain a specific number (or is it a definition/transition where a number is impossible)? | Add a number. Research the actual figure. |
| 3 | Is the subject before the verb before the object? | Restructure to SVO order. |
| 4 | Is this sentence under 20 words? | Split into two sentences. |
| 5 | Would this sentence survive if someone asked "prove it"? | Add a source, add a number, or delete the claim. |

### Running the Audit

```
Step 1: Read sentence 1. Ask all 5 questions. Fix if needed.
Step 2: Read sentence 2. Ask all 5 questions. Fix if needed.
Step 3: Continue until every sentence in the article has passed.
Step 4: Count total specific numbers. Must be 40+.
Step 5: Count total word count of first answer after each H2. Must be 40 words or fewer each.
Step 6: Verify no hedging words remain (search for: might, could, possibly, perhaps, generally, typically, arguably, often, probably, may, tends to, some say).
Step 7: Verify no filler phrases remain (search the elimination list in Rule 34).
Step 8: Run the lexical semantics checklist — hypernyms, hyponyms, meronyms, co-occurrence terms all present.
```

---

## WRITING FOR LLM EXTRACTION (RAG-FRIENDLY CONTENT)

Content must be optimized not just for Google but for LLM retrieval-augmented generation (RAG). When ChatGPT, Perplexity, Claude, or Gemini answer a question, they retrieve and cite source passages. Optimizing for this extraction is the new frontier of visibility.

### RAG-Friendly Chunk Structure

LLMs chunk content into passages of 200-500 tokens (roughly 150-375 words). Each chunk is independently scored for relevance to a user query. This means:

1. **Every section must be self-contained.** A reader (or LLM) must understand the section without reading any other section on the page.

```
BAD:  "As we discussed above, the fees are reasonable." (requires context from another section)
GOOD: "Wyoming charges a $100 filing fee and $60/year annual report fee." (self-contained)
```

2. **Every section must re-state the entity name.** Do not use pronouns when referring to the primary entity at the start of a new section.

```
BAD:  "It costs $100 to file." (what is "it"?)
GOOD: "A Wyoming LLC costs $100 to file with the Secretary of State." (entity named)
```

3. **Every section must open with the answer.** LLM retrieval scores the first sentence of a chunk highest. If the answer is buried in paragraph 3, the chunk scores lower.

4. **Use H2 questions that match LLM query patterns.** Users ask LLMs natural-language questions. H2 headings that match these questions trigger direct retrieval.

```
User query to ChatGPT: "how much does a Wyoming LLC cost"
H2 that triggers retrieval: "How Much Does a Wyoming LLC Cost?"
First sentence retrieved: "A Wyoming LLC costs $100 for state filing plus $60/year..."
```

### Self-Contained Section Template

```
## [Question matching user query]
[40-word extractive answer with specific numbers and entity name]

[Supporting detail paragraph 1 — 2-4 sentences, each with specific data]

[Table or list if applicable]

[Edge case or exception — 1-2 sentences]

[Source citation]
```

Each section following this template functions as an independent, retrievable chunk that any LLM can extract, attribute, and cite.

### Inline Definitions for LLM Comprehension

LLMs process text sequentially. If a term is used before being defined, the LLM's response quality degrades for that passage. Define terms BEFORE or AT the point of use.

```
BAD:  "File your AOI online. The Articles of Incorporation..." (acronym before definition)
GOOD: "File your Articles of Organization (AOI) online at sos.wyo.gov." (definition first)
```

### Citation-Optimized Formatting

LLMs prefer to cite content that:
- Names the entity in the first 10 words of the passage
- Includes a specific number within the first 20 words
- Uses declarative statements (not questions or conditional language)
- Contains no hedging language
- Is factually verifiable

```
HIGH CITATION PROBABILITY:
"A Wyoming LLC costs $100 for state filing. The Wyoming Secretary of State
processes online filings within 1-3 business days."

LOW CITATION PROBABILITY:
"When it comes to forming an LLC in Wyoming, costs can vary depending on
several factors and the specific services you might need."
```

### LLM Extraction Signals Checklist

- [ ] Every section opens with a direct answer (not a lead-in)
- [ ] Entity name appears in the first 10 words of every section
- [ ] At least 1 specific number in the first 20 words of every section
- [ ] No section references another section ("as mentioned above")
- [ ] Every acronym defined before or at first use
- [ ] No hedging language anywhere
- [ ] Every section is independently comprehensible without context
- [ ] H2 headings match natural-language question patterns

---

## MASTER REFERENCE: RULES BY VIOLATION SEVERITY

Not all rule violations are equal. This ranking helps prioritize edits during the self-check audit.

### Severity 1 — Rewrite Immediately (destroys ranking potential)
- Hedging language present (Rules 7-8)
- No specific numbers in a claim that should have them (Rule 9)
- Passive voice in extractive answer (Rule 2)
- Extractive answer exceeds 40 words (Rule 22)
- Two macro contexts on one page (Rule 37)
- Filler phrases present (Rule 34)

### Severity 2 — Fix Before Publishing (reduces ranking potential)
- H2 is a statement, not a question (Rule 19)
- Answer does not come first after H2 (Rule 21)
- Entity not qualified on first mention (Rule 13)
- Synonym rotation instead of consistent naming (Rule 36)
- Comparison written in prose instead of table (Rule 29)
- Section references another section (Rule 27)

### Severity 3 — Fix If Time Permits (reduces content quality)
- Sentence exceeds 20 words (Rule 3)
- Two ideas in one sentence (Rule 4)
- Abstract noun instead of concrete (Rule 31)
- Weak verb instead of strong (Rule 32)
- Non-parallel list structure (Rule 6)
- Missing schema markup (Rule 40)

---

## QUICK REFERENCE CARD

Print this. Tape it to the wall. Check every draft against it.

```
THE NON-NEGOTIABLES (check every sentence):
[ ] Subject -> Verb -> Object
[ ] Active voice
[ ] Under 20 words
[ ] One idea per sentence
[ ] Specific number included (or impossible)
[ ] No hedging words
[ ] No filler phrases
[ ] Entity named (not "it" or "this")

THE SECTION CHECKS (check every H2 section):
[ ] H2 is a question
[ ] H2 names the entity
[ ] First sentence answers the question
[ ] Answer is under 40 words
[ ] Section is self-contained (no "as mentioned above")
[ ] Table used for any comparison data

THE PAGE CHECKS (check once per page):
[ ] Opening sentence defines the primary entity
[ ] One macro context only
[ ] 40+ specific numbers in the article
[ ] All lexical relations present (hypernyms, hyponyms, meronyms, co-occurrence)
[ ] Schema markup applied
[ ] Final section has a clear action statement
[ ] All technical terms defined on first use
[ ] Date-stamped facts that change over time
[ ] Brand voice consistent with site profile
```
