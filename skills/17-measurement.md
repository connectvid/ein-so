---
skill: 17-measurement
description: Load when setting up analytics for AI traffic, configuring Google Search Console filters, building AI visibility reports, running verification scripts, analyzing log files for AI crawlers, or measuring AEO performance. Triggers on: analytics, measurement, tracking, GA4, Google Analytics, Search Console, GSC, AI traffic, referral, attribution, log files, GPTBot, ClaudeBot, crawl analysis, reporting, KPIs, share of voice, mention rate, citation rate, verification, audit, monthly report.
version: 1.0.0
last-verified: 2026-04
source: 23-verification-scripts.md + 09-content-audit.md + Indig AEO case study (Oct 2025) + Diggity AI SEO (Jul/Aug 2025) + Aleyda / Lily Ray (Jul 2025) + Ahrefs keyword research (Mar 2026) + Income School / Pantelli (Oct 2025)
load: on-demand
triggers: analytics, measurement, tracking, GA4, Google Analytics, search console, GSC, AI traffic, referral, attribution, log files, GPTBot, ClaudeBot, crawl analysis, reporting, KPIs, share of voice, mention rate, citation rate, verification, audit, monthly report, performance monitoring, self-reported attribution, brand search lift
---

# Skill 17: Measurement & Analytics for Google + AI Search

## The Measurement Problem

Measuring AI search performance is fundamentally harder than measuring traditional SEO. Here is why:

1. **No impression data from LLMs:** OpenAI, Anthropic, and Perplexity do not expose impression data. You cannot know with certainty how many people searched for a query in ChatGPT. (Indig, Oct 2025)
2. **Attribution is messy:** A user may discover you in ChatGPT, then convert by searching your brand name on Google. That conversion gets attributed to organic search, not AI. (Indig, Oct 2025)
3. **Direct traffic contamination:** AI referrals are sometimes attributed as "direct" traffic in analytics because they lack proper UTM parameters.
4. **The halo effect:** AI visibility drives brand search lift, referral traffic, and direct traffic simultaneously. Isolating AI's contribution requires triangulation, not a single metric.

> "None of this is exhaustive. We've had instances where AI referral traffic is trending down, but self-reported attribution is going exponential. Without self-reported attribution, a client would look at this and be like, 'Well guys, what's going on?'" -- Indig (Oct 2025)

**Bottom line:** You need multiple measurement signals triangulated together. No single metric tells the full story.

---

## Google Analytics 4 Setup for AI Traffic

### Custom Regex for AI Referral Traffic

Navigate to: Reports > Acquisition > Traffic Acquisition

1. Click "Add comparison" at the top
2. Add filter for referral traffic
3. Under dimension, search for "session source/medium"
4. Under match type, select "matches regex"
5. Paste this regex:

```
(chat\.openai|chatgpt|openai|claude\.ai|anthropic|perplexity|gemini|bard|copilot|you\.com|phind|kagi|meta\.ai|grok|deepseek)
```

This captures traffic from:
- ChatGPT / OpenAI
- Claude / Anthropic
- Perplexity
- Google Gemini (formerly Bard)
- Microsoft Copilot
- You.com
- Phind
- Kagi
- Meta AI
- Grok
- DeepSeek

> "With any luck, you'll have some AI traffic. You can see what platforms it came from and what pages on your site it's going to." -- Diggity (Jul 2025)

### UTM Parameter Tracking

Some AI platforms append UTM parameters to outbound links:
- `utm_source=chatgpt`
- `utm_source=perplexity`

Create a secondary filter to catch these:

```
utm_source matches regex: (chatgpt|perplexity|claude|gemini|copilot)
```

### Direct Traffic Analysis

AI referrals are frequently misattributed as "direct" traffic. Monitor for:

- **Sudden direct traffic spikes** that correlate with AI visibility improvements
- **Direct traffic to deep pages** (not homepage) -- real direct traffic typically hits the homepage. If deep content pages are getting direct traffic, it may be AI referral without proper attribution
- **Direct traffic patterns** -- AI referral traffic tends to spike during business hours (when people are using AI assistants for research)

### Brand Search Lift Monitoring

This is one of the most important indirect metrics for AI visibility.

> "What we want to do is measure your brand search lift. Monitor the percentage or absolute figure of people coming via brand search over time. A lot of people are going to search your company's name explicitly." -- Indig (Oct 2025)

**How to track:**
1. In GSC, filter for queries containing your brand name
2. Track branded impressions and clicks week-over-week
3. Create a trendline over 90-day windows
4. Annotate when AI visibility campaigns begin

If your AEO efforts are working, you should see branded search increasing even if AI referral traffic appears flat. This is the halo effect -- people discover you in AI, then Google your name.

### Annotation on AI Mode Launch Dates

Create GA4 annotations for major AI platform changes:

| Date | Event |
|------|-------|
| 2024-05 | Google AI Overviews US launch |
| 2024-10 | ChatGPT Search (SearchGPT) launch |
| 2024-12 | Google Gemini 2.0 launch |
| 2025-01 | Perplexity shopping features |
| 2025-03 | Google AI Mode limited rollout |
| 2025-05 | ChatGPT Shopify integration |
| 2025-06 | Google AI Mode broader rollout |
| Any date | Your own AEO campaign start dates |

These annotations let you correlate traffic changes with platform launches.

---

## Google Search Console

### AI-Related Query Filtering

In GSC, filter queries using this regex:

```
(chatgpt|ai|llm|gpt|claude|perplexity|gemini|best.*for|compare|vs|versus|alternative|recommend)
```

This captures:
- Direct AI-related queries ("chatgpt alternative")
- Comparison queries that AI users tend to ask ("X vs Y")
- Recommendation queries ("best X for Y")
- Alternative queries ("X alternative")

> "In GSC, add a filter by this custom regex query. This shows you what queries people are searching likely in Gemini or as part of Google Overviews to come across you." -- Indig (Oct 2025)

**Important caveat:** Everything in GSC is Google-specific. It does not reflect ChatGPT or Claude queries. But it does reflect Gemini and Google AI Overviews behavior.

### Impressions vs Clicks Trend Analysis

| Signal | What It Means | Action |
|--------|---------------|--------|
| Impressions rising, clicks stable | You're appearing in more searches but CTR is declining (possibly AI Overview absorbing clicks) | Optimize meta descriptions, add unique value AI can't replicate |
| Impressions stable, clicks dropping | AI Overviews answering the query, reducing click-through | Check if AI Overview appears for your queries. Pivot to tool/interactive content |
| Both dropping | Lost rankings or content decay | Full audit: content freshness + technical + link profile |
| Impressions rising, clicks rising | Healthy growth signal | Continue current strategy, expand to adjacent queries |
| Brand queries rising | AEO/PR efforts creating brand awareness | This is the halo effect -- your off-site signals are working |

### Position Tracking

Monitor position changes for your key queries:
- Positions 1-3: High priority to maintain. AI Overviews may still show above you
- Positions 4-10: Improvement zone. Content optimization + internal linking
- Positions 11-20: Striking distance. May need backlinks + content depth
- Positions 20+: Likely need significant content/authority investment

### New: Discussions and Forums Filter

Google added a filter in GSC to monitor forum-related rich results. If you have indexable forum/community content, track this separately -- it's a growing visibility surface. (Aleyda, Jul 2025)

---

## AEO-Specific Metrics (Different from SEO)

Traditional SEO metrics (impressions, clicks, positions) are necessary but insufficient for measuring AI search performance. AEO requires its own metric stack.

### Primary AEO Metrics

| Metric | Definition | How to Measure |
|--------|-----------|----------------|
| **Share of Voice** | What percentage of AI answers in your category mention you vs competitors | Run prompt universe across models, count mentions |
| **Mention Rate** | How often your brand is named in AI answers for target queries | Test prompts weekly, track over time |
| **Citation Rate** | What percentage of AI citations point to your content vs competitors | Track citation sources in AI answers |
| **Average Position** | Where in the AI answer's recommendation list you appear | Log position per prompt per model |
| **AI Referral Traffic** | Direct visits from AI platforms to your site | GA4 regex filter (see above) |
| **Self-Reported Attribution** | Users explicitly telling you they found you via AI | "How did you hear about us?" form field |
| **Brand Search Lift** | Growth in branded search queries over time | GSC branded query monitoring |

> "Top of funnel, we're looking at share of voice, mention rate, citation rate. These are AEO-specific metrics. Middle of funnel, we're looking at AI referral traffic and brand search lift." -- Indig (Oct 2025)

### Self-Reported Attribution: The Most Important Metric

> "I would put this as priority number one if you can: implement self-reported attribution." -- Indig (Oct 2025)

Add a "How did you hear about us?" field to every conversion point:
- Demo booking forms
- Account signup flows
- Contact forms
- Checkout pages

**Implementation options:**
1. **Free-form text field:** Less biased, captures unexpected channels. Harder to aggregate
2. **Dropdown with options:** Easier to aggregate. Include "AI assistant (ChatGPT, Claude, etc.)" as an explicit option
3. **Both:** Dropdown with an "Other (please specify)" option

**Why this matters:** Indig's client showed AI referral traffic trending down while self-reported attribution from AI was going exponential. Without the self-reported field, they would have concluded AEO wasn't working. The reality was that users were discovering the brand in AI, then converting through direct/branded search channels.

---

## Third-Party Tools for AI Measurement

| Tool | What It Does | Cost |
|------|-------------|------|
| **Ahrefs Brand Radar** | Shows AI mentions of your brand vs competitors, identifies keywords where competitors appear and you don't | Included with Ahrefs subscription |
| **Profound** | Citation tracking across ChatGPT, identifies most-cited websites and sources | Paid |
| **Scrunch** | AI visibility monitoring across models, accounts for geography and persona variables | Paid (agency-tier) |
| **Peak** | AI visibility monitoring and tracking | Paid |
| **Similar Web AI Report** | AI traffic analysis and benchmarking | Paid (enterprise) |
| **Google Alerts** | Free brand mention monitoring across the web | Free |
| **Talkwalker Alerts** | Free brand mention monitoring | Free |

### Tool Selection by Stage

- **Just starting AEO:** Google Alerts + manual prompt testing + GA4 regex = free
- **Growing AEO program:** Add Ahrefs Brand Radar + self-reported attribution
- **Mature AEO program:** Add Profound or Scrunch for systematic tracking

---

## Log File Analysis for AI Crawlers

### Why Log Files Matter

> "I used to think log analysis was tedious, but today I'm going to show you how to do it with ChatGPT." -- Diggity (Aug 2025)

Log files record every bot visit to your site. By analyzing them, you can:
- Identify which pages AI bots are crawling (and which they're ignoring)
- Detect crawl errors that prevent AI from accessing your content
- Find pages that AI bots love (use these for internal linking)
- Ensure your most important content is being accessed

### AI Crawler User Agents to Monitor

| Bot | Platform | User Agent String Keyword |
|-----|----------|--------------------------|
| GPTBot | ChatGPT / OpenAI | `GPTBot` |
| ClaudeBot | Claude / Anthropic | `ClaudeBot` |
| PerplexityBot | Perplexity | `PerplexityBot` |
| Googlebot | Google (incl. Gemini) | `Googlebot` |
| Bingbot | Bing / Copilot | `Bingbot` |
| Applebot-Extended | Apple Intelligence | `Applebot-Extended` |
| Meta-ExternalAgent | Meta AI | `Meta-ExternalAgent` |

### Log File Analysis Process (via ChatGPT)

1. **Download log files** from your hosting file manager (usually in a folder named `logs` or `access_logs`)
2. **Upload to ChatGPT** with this prompt:

```
I have attached log files from my website server. Please analyze the logs
focusing on Googlebot and AI crawlers such as GPTBot, ClaudeBot,
PerplexityBot, Bingbot, and Applebot-Extended.

Identify all hits from user agents containing any of the following keywords:
Google, GPTBot, ClaudeBot, PerplexityBot, Bingbot, Applebot.

Once you've analyzed this, I will ask you to perform a series of tasks.
```

3. **Follow-up prompts:**
   - "Provide a list of the 10 pages that receive the fewest hits from AI bots and create a visual diagram" -- identifies under-crawled important pages
   - "Provide a list of the 10 pages that receive the most hits and create a visual diagram" -- identifies pages AI loves (use for internal linking)
   - "Highlight any crawl errors from these bots and flag anything worth fixing" -- fix crawl errors immediately
   - "Provide additional insights: bots missing key commercial pages, pages crawled unexpectedly often, sudden spikes in crawl activity"

(Diggity, Aug 2025)

### Fixing Under-Crawled Pages

If an important page (especially a money page) is barely getting crawled by AI bots:

1. **Check internal links:** How many internal links point to this page? If fewer than 3, add more from highly-crawled pages
2. **Check robots.txt:** Is the page accidentally blocked?
3. **Check page speed:** Slow pages get abandoned by crawlers
4. **Check server response:** Is the page returning 200? Any redirect chains?

---

## Performance Monitoring Signals

### Healthy Page Signals

| Signal | Healthy Threshold | Source |
|--------|-------------------|--------|
| Impressions | Growing or stable month-over-month | Content Audit skill |
| Clicks | Growing or stable | Content Audit skill |
| Average position | Improving or stable | Content Audit skill |
| Time on page | > 2 minutes | Content Audit skill |
| Bounce rate | < 50% | Content Audit skill |
| Internal links received | 2+ minimum | Content Audit skill |
| Internal links sent | 8+ minimum | Content Audit skill |
| Core Web Vitals | Pass (all green) | Google PageSpeed Insights |
| Time to First Byte | < 1 second | Indig (Oct 2025) |
| AI bot crawl frequency | Stable or increasing | Log file analysis |
| Schema validation | Pass (no errors) | Google Rich Results Test |

### Warning Signals Table

| Signal | Likely Cause | First Action |
|--------|-------------|--------------|
| Impressions dropping, clicks stable | Losing positions on low-CTR queries | Expand content for dropping queries |
| Impressions stable, clicks dropping | CTR declining (AI Overview absorbing clicks, or title/snippet issue) | Rewrite title + meta description. Check if AI Overview exists for query |
| Both dropping | Lost rankings, penalty, or content decay | Full audit: content + technical + links |
| Position fluctuating 5+ spots | Cannibalization or authority issue | Check for competing pages targeting same query |
| New queries appearing unexpectedly | Google reinterpreting page topic | Either embrace (add content) or clarify (tighten focus) |
| AI referral traffic dropping but brand search rising | Attribution shift, not performance drop | Check self-reported attribution data |
| AI bots stopped crawling key pages | Technical issue (robots.txt, server error, redirect loop) | Log file analysis + robots.txt audit |
| High AI bot crawl rate on irrelevant pages | Wasted crawl budget on thin/template pages | Add noindex or consolidate thin pages |

---

## AI Visibility Audit Process

### Step 1: Map Your Prompt Universe

Identify every query/prompt that buyers use to discover you through LLMs. Think beyond keywords -- think conversations.

**Awareness stages:**
- **Problem-aware:** "How do I solve [problem]?"
- **Solution-aware:** "What tools help with [problem]?"
- **Product-aware:** "Is [your product] good for [use case]?"
- **Most-aware:** "Compare [your product] vs [competitor A] vs [competitor B]"

**Sources for prompt discovery:**
- Sales call transcripts (what questions do prospects actually ask?)
- Support conversations (what problems do customers describe?)
- Reddit threads in your niche (how do real people phrase questions?)
- Customer research interviews
- AI deep research (ask ChatGPT/Claude to generate likely prompts for your category)

(Indig, Oct 2025)

### Step 2: Test Across Models

Each model has its own biases and data sources:

| Model | Biases/Tendencies |
|-------|-------------------|
| ChatGPT | Biases toward Reddit, Wikipedia. Uses Google search (recent research confirms). Training data may include outdated content |
| Gemini | Biases toward YouTube (Google owns YouTube). Strong Google Search integration |
| Claude | Uses Brave Search for real-time retrieval. May weigh different sources |
| Perplexity | Cites sources explicitly. Good for seeing which URLs get cited |

> "All of these models -- different companies. They're not all copy paste of each other. They each have their own unique characteristics." -- Indig (Oct 2025)

### Step 3: Account for Variables

**Geography:** If your ICP is in Europe but you're testing from the US, results will differ. Use VPN or testing tools.

**Persona memory:** ChatGPT builds a knowledge graph of you. If you're head of marketing testing marketing queries, your workspace is trained on YOUR interests, not your ICP's.

**Solutions:**
- Use fresh/incognito sessions for testing
- Create separate test workspaces with no chat history
- Use tools like Scrunch that test from neutral environments
- Test with different personas explicitly stated in the prompt

(Indig, Oct 2025)

### Step 4: Log and Track

For each prompt tested, log:
- Model used
- Date tested
- Whether your brand was mentioned
- Position in recommendation list (if mentioned)
- What sources were cited
- How you were framed (positive, neutral, negative)
- Competitors mentioned

Track this weekly to build trend data.

---

## SEO Verification Scripts

### Post-Deployment Verification (60 seconds)

Run after every deployment. Create as `scripts/verify-seo.sh` in every project:

```bash
#!/bin/bash
# SEO Verification Script
# Run: bash scripts/verify-seo.sh https://yourdomain.com [tool-slug]

DOMAIN="${1:-https://yourdomain.com}"
TOOL_SLUG="${2:-markup-calculator}"
PASS=0
FAIL=0

echo ""
echo "=== SEO Verification: $DOMAIN ==="
echo ""

check() {
  local name="$1"
  local result="$2"
  local expected="$3"
  if [ "$result" -ge "$expected" ] 2>/dev/null || [ "$result" = "$expected" ] 2>/dev/null; then
    echo "  PASS -- $name ($result)"
    PASS=$((PASS+1))
  else
    echo "  FAIL -- $name (got: $result, expected: $expected)"
    FAIL=$((FAIL+1))
  fi
}

# Homepage checks
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/")
check "Homepage HTTP status" "$STATUS" "200"

ROBOTS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/robots.txt")
check "robots.txt accessible" "$ROBOTS" "200"

ROBOTS_ALLOW=$(curl -s "$DOMAIN/robots.txt" | grep -c "Allow")
check "robots.txt has Allow directive" "$ROBOTS_ALLOW" "1"

SITEMAP=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/sitemap.xml")
check "sitemap.xml accessible" "$SITEMAP" "200"

SITEMAP_PAGES=$(curl -s "$DOMAIN/sitemap.xml" | grep -c "<loc>")
check "sitemap.xml has pages" "$SITEMAP_PAGES" "1"

INTERNAL_LINKS=$(curl -s "$DOMAIN/" | grep -c 'href="/')
check "Homepage has server-rendered internal links" "$INTERNAL_LINKS" "5"

HAS_H1=$(curl -s "$DOMAIN/" | grep -c '<h1')
check "Homepage has H1" "$HAS_H1" "1"

# Tool page checks (if slug provided)
if [ "$TOOL_SLUG" != "markup-calculator" ] || curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/$TOOL_SLUG/" | grep -q "200"; then
  TOOL_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/$TOOL_SLUG/")
  check "Tool page HTTP status" "$TOOL_STATUS" "200"

  TOOL_H1=$(curl -s "$DOMAIN/$TOOL_SLUG/" | grep -c '<h1')
  check "Tool page has H1" "$TOOL_H1" "1"

  TOOL_SCHEMA=$(curl -s "$DOMAIN/$TOOL_SLUG/" | grep -c '"FAQPage"')
  check "Tool page has FAQPage schema" "$TOOL_SCHEMA" "1"

  TOOL_APP_SCHEMA=$(curl -s "$DOMAIN/$TOOL_SLUG/" | grep -c '"SoftwareApplication"')
  check "Tool page has SoftwareApplication schema" "$TOOL_APP_SCHEMA" "1"

  TOOL_CANONICAL=$(curl -s "$DOMAIN/$TOOL_SLUG/" | grep -c 'rel="canonical"')
  check "Tool page has canonical tag" "$TOOL_CANONICAL" "1"

  OG_IMAGE=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/$TOOL_SLUG/opengraph-image")
  check "OG image accessible" "$OG_IMAGE" "200"

  TOOL_LINKS_HOME=$(curl -s "$DOMAIN/$TOOL_SLUG/" | grep -c 'href="/"')
  check "Tool page links to homepage" "$TOOL_LINKS_HOME" "1"
fi

# No noindex on homepage
NOINDEX=$(curl -s "$DOMAIN/" | grep -c 'noindex')
if [ "$NOINDEX" -eq "0" ]; then
  echo "  PASS -- Homepage not noindexed"
  PASS=$((PASS+1))
else
  echo "  FAIL -- Homepage has noindex tag (CRITICAL)"
  FAIL=$((FAIL+1))
fi

echo ""
echo "=== RESULTS: $PASS passed, $FAIL failed ==="
echo ""

if [ "$FAIL" -gt "0" ]; then
  echo "  ACTION REQUIRED: Fix all failures before requesting GSC indexing."
  exit 1
else
  echo "  All checks passed. Safe to request indexing in GSC."
  exit 0
fi
```

### Weekly Health Check Script

Run every Monday as `scripts/weekly-check.sh`:

```bash
#!/bin/bash
# Weekly SEO Health Check
# Run: bash scripts/weekly-check.sh https://yourdomain.com

DOMAIN="${1:-https://yourdomain.com}"
echo ""
echo "=== Weekly Health Check: $DOMAIN ==="
echo "Run date: $(date)"
echo ""

# Check all pages in sitemap return 200
echo "Checking sitemap pages..."
URLS=$(curl -s "$DOMAIN/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+')
FAIL_COUNT=0

while IFS= read -r url; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$STATUS" != "200" ]; then
    echo "  FAIL: $STATUS -- $url"
    FAIL_COUNT=$((FAIL_COUNT+1))
  fi
done <<< "$URLS"

if [ "$FAIL_COUNT" -eq "0" ]; then
  echo "  All sitemap pages return 200"
else
  echo "  $FAIL_COUNT pages have errors -- fix before adding new content"
fi

echo ""
echo "=== Manual checks to do in GSC ==="
echo "  1. Coverage > Indexed count (should be growing)"
echo "  2. Coverage > Crawled not indexed (should not be growing)"
echo "  3. Core Web Vitals > any new issues?"
echo "  4. Manual Actions > any penalties? (should be zero)"
echo "  5. Discussions and forums filter > any new visibility?"
echo ""
echo "=== AI-specific manual checks ==="
echo "  6. Run brand audit prompts in ChatGPT, Gemini, Claude"
echo "  7. Check AI referral traffic in GA4 (regex filter)"
echo "  8. Review self-reported attribution data"
echo "  9. Check branded search volume trend in GSC"
echo ""
echo "Log these numbers in your tracking spreadsheet."
```

### GSC Verification Protocol

After every new page deployment, within 48 hours:

1. Open GSC > URL Inspection
2. Enter the new page URL
3. Click "Request Indexing"
4. Note the crawl status -- save screenshot to tracking sheet
5. Check back in 7 days -- if still not indexed, run `verify-seo.sh` again

**Do not deploy more pages until this protocol is completed for each page.**

### Kimi API Output Verification

When Kimi generates tool widget code, verify before integration:

```bash
# Check for API calls (should be zero for pure math calculators)
grep -n "fetch\|axios\|XMLHttpRequest\|api\." kimi-output.js

# Check for console.log statements (remove before production)
grep -n "console.log" kimi-output.js

# Check for hardcoded values or TODOs
grep -n "hardcoded\|TODO\|FIXME\|placeholder" kimi-output.js
```

Test with edge cases: 0, negative numbers, very large numbers (1,000,000), decimals (0.99), empty input. All five must produce reasonable output without errors or NaN.

---

## Monthly Reporting Template

### Report Structure

```
MONTHLY AI + SEO REPORT
Period: [Month Year]
Sites: [list sites covered]

---------------------------------------------
SECTION 1: GOOGLE PERFORMANCE (from GSC)
---------------------------------------------

Total impressions: [number] (vs last month: +/- %)
Total clicks: [number] (vs last month: +/- %)
Average position: [number] (vs last month: +/- %)
Indexed pages: [number] (vs last month: +/- %)
Crawled not indexed: [number] (trend: up/down/stable)

Top 10 queries by impressions:
1. [query] -- [impressions] imp / [clicks] clicks / pos [position]
2. ...

Branded search queries:
Total branded impressions: [number] (vs last month: +/- %)
Total branded clicks: [number] (vs last month: +/- %)
Trend: [growing/stable/declining]

---------------------------------------------
SECTION 2: AI TRAFFIC (from GA4)
---------------------------------------------

Total AI referral sessions: [number] (vs last month: +/- %)
Breakdown by source:
- ChatGPT: [number]
- Perplexity: [number]
- Gemini: [number]
- Claude: [number]
- Other: [number]

Top landing pages from AI referrals:
1. [URL] -- [sessions]
2. ...

Direct traffic anomalies: [any unexplained spikes?]

---------------------------------------------
SECTION 3: AEO METRICS
---------------------------------------------

Share of voice (manual prompt testing):
- [Query 1]: Mentioned [yes/no], Position [#], Cited [yes/no]
- [Query 2]: ...
- [Query 3]: ...

Mention rate: [X out of Y prompts tested]
Average position: [number]
Citation sources identified: [list URLs cited]

Self-reported attribution:
- "AI/ChatGPT" responses: [number] (vs last month)
- Trend: [growing/stable/declining]

---------------------------------------------
SECTION 4: THIRD-PARTY SIGNALS
---------------------------------------------

Reddit:
- New posts/comments seeded: [number]
- Upvotes received: [number]
- Subreddits active in: [list]

Reviews:
- New G2 reviews: [number] (avg rating: [X.X])
- New Capterra reviews: [number]
- New Trustpilot reviews: [number]

PR/Media:
- HARO/Quoted responses sent: [number]
- Placements secured: [number]
- Links earned: [number] (avg DR: [number])

Podcasts:
- Appearances: [number]
- Episodes published: [list]

---------------------------------------------
SECTION 5: TECHNICAL HEALTH
---------------------------------------------

Verification script results: [PASS/FAIL count]
Sitemap pages returning 200: [X of Y]
Core Web Vitals: [Pass/Fail]
AI bot crawl activity: [stable/increasing/decreasing]
Schema validation: [Pass/Fail]

---------------------------------------------
SECTION 6: ACTIONS FOR NEXT MONTH
---------------------------------------------

1. [Action item] -- Priority: [High/Medium/Low]
2. [Action item] -- Priority: [High/Medium/Low]
3. [Action item] -- Priority: [High/Medium/Low]

---------------------------------------------
SECTION 7: ISSUES / FLAGS
---------------------------------------------

[Any anomalies, penalties, de-indexing, competitor movements]
```

---

## What Success Looks Like: Timeline Expectations

### The Hard Truth About Timelines

Traditional SEO and AEO operate on different timescales:

> "Traditional SEO has that bad rep because you'd hire an agency and they like, 'Yep, you're not going to make a dollar for six months.' AEO can take weeks. We've had new content be cited within 48 to 72 hours." -- Indig (Oct 2025)

> "We've also had qualified inbounds on fresh domains with DA0. In SEO, this would just never happen." -- Indig (Oct 2025)

### Realistic Timeline

| Timeframe | What to Expect | Metric to Watch |
|-----------|---------------|-----------------|
| Week 1-2 | Technical foundation in place, GA4 configured, baseline audit complete | Verification scripts all passing |
| Week 2-4 | First Reddit content seeded, HARO responses sent, reviews solicited | Activity metrics (posts created, pitches sent) |
| Week 4-8 | First AI citations appearing for seeded content, initial review accumulation | Mention rate in manual prompt testing |
| Month 2-3 | Measurable AI referral traffic, early brand search lift, first PR placements | GA4 AI traffic filter, GSC branded queries |
| Month 3-6 | Share of voice improving, self-reported attribution growing, compounding PR | All AEO metrics trending up |
| Month 6-12 | Established AI presence, consistent citations, clear business impact | Pipeline/revenue attributed to AI channel |

### Case Study Benchmarks

**Indig's B2B SaaS client (Oct 2025):**
- Starting point: 575 trials/month from AI (self-reported)
- After 7 weeks: 819 trials/WEEK from AI
- Average position in AI answers: improved from 2.38 to 1.3
- Average mentions per prompt: doubled to 1.44

**Diggity's client (Jul 2025):**
- Starting point: 0 AI Overview appearances
- After 6 months: 90 AI Overview keywords, 2300% increase in AI referral traffic
- Traditional Google traffic also improved

**Diggity's second client (Aug 2025):**
- AI traffic grew 1400%
- 164 new AI Overview keyword appearances
- Overall organic traffic doubled

### What a Deliberate Strategy Delivers vs Accidental Exposure

> "A deliberate strategy should start showing business impact within 4 to 8 weeks. This is not like, hey, do a bit of Reddit, punch a bit of content out, and you're going to change your business overnight." -- Indig (Oct 2025)

If you are doing SEO well and ranking in Google, you will get SOME AI citations by default. But a deliberate AEO strategy (content optimized for passage extraction, Reddit presence, review collection, entity consistency) delivers 4-10x more impact than passive exposure.

---

## Post-Google-Core-Update Measurement Protocol

When Google rolls out a Core Algorithm Update:

### Week 1: Observe (Do NOT make changes)
- Document which pages gained/lost positions
- Note which queries were affected
- Check if AI Overview presence changed for your queries
- Monitor AI referral traffic for shifts

### Week 2-3: Analyze
- Compare lost pages to competitors that gained
- Check for E-A-T coverage gaps
- Look for thin content or cannibalization
- Review forum/UGC content -- Google has been rewarding this more in recent updates (Aleyda, Jul 2025)

### Week 3-4: Act
- Expand thin pages with additional depth
- Merge cannibalizing pages
- Update stale content (prices, dates, regulations)
- Add missing schema markup
- Strengthen internal linking

### Week 5-8: Monitor Recovery
- Track recovery over 4-6 weeks
- Document what worked for future reference
- Update monthly report with core update impact analysis

---

## Key Principle: Triangulate, Don't Rely on Single Metrics

No single tool or metric tells you whether AI search is working. You need:

1. **GA4** for direct AI referral traffic
2. **GSC** for branded search lift and query-level visibility
3. **Self-reported attribution** for the ground truth of how buyers actually found you
4. **Manual prompt testing** for share of voice and positioning
5. **Log file analysis** for crawl health and AI bot behavior
6. **Third-party tools** (Brand Radar, Profound, Scrunch) for systematic tracking at scale

When one signal contradicts another (e.g., AI referral traffic down but self-reported attribution up), investigate rather than panic. The measurement landscape for AI search is still maturing. Operate with statistical rigor and multiple data points.

> "Nobody with AEO has 100% confidence in what works. Therefore, we must operate with statistical rigor to avoid being fooled by bad data." -- Indig (Oct 2025)
