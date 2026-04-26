#!/usr/bin/env python3
"""Generate all remaining pages for ein.so in one execution."""
import os

BASE = "/Users/zawwadulsami/Desktop/Korey/Anchorage-Core/Ein.so/ein-so-website"
built = 0

def sc(s):
    return "".join(p.capitalize() for p in s.replace("/","-").strip("-").split("-"))

def wtsx(slug):
    c = sc(slug); d = slug.count("/"); sp = "../"*(d+1)+"schema"
    p = os.path.join(BASE,"src/app",slug,"page.tsx")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    if not os.path.exists(p):
        open(p,"w").write(f'import type {{ Metadata }} from "next";\nimport {{ FAQSchema, BreadcrumbSchema, ArticleSchema }} from "{sp}";\nimport {{ getListPage }} from "@/lib/contentParser";\nimport {{ MDXPage }} from "@/lib/mdx";\n\nconst {{ frontmatter: fm, content }} = getListPage("{slug}/_index.md");\n\nexport const metadata: Metadata = {{\n  title: fm.title,\n  description: fm.description,\n  alternates: {{ canonical: fm.canonical }},\n}};\n\nexport default function {c}Page() {{\n  return (\n    <>\n      <BreadcrumbSchema items={{fm.breadcrumbs}} />\n      <ArticleSchema headline={{fm.schema.headline}} description={{fm.schema.description}} url={{fm.canonical}} />\n      <FAQSchema faqs={{fm.faqs}} />\n      <MDXPage frontmatter={{fm}} content={{content}} />\n    </>\n  );\n}}\n')

def wmd(slug, content):
    p = os.path.join(BASE,"src/content",slug,"_index.md")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    if not os.path.exists(p):
        open(p,"w").write(content)
        return True
    return False

def mkp(slug, title, desc, parent, parent_url, label, capsule, sections, faqs_list):
    global built
    wtsx(slug)
    fq = "\n".join([f'  - q: "{q}"\n    a: "{a}"' for q,a in faqs_list])
    short = title.split(":")[0].split(" - ")[0][:35]
    md = f"""---
title: "{title}"
description: "{desc}"
canonical: "/{slug}/"
breadcrumbs:
  - name: "Home"
    url: "/"
  - name: "{parent}"
    url: "{parent_url}"
  - name: "{short}"
    url: "/{slug}/"
schema:
  type: "article"
  headline: "{title}"
  description: "{desc}"
heroLabel: "{label}"
heroTitle: "{short}"
heroAccent: "Guide"
heroDescription: "{desc[:200]}"
ctaTitle: "Need an EIN? We Handle Everything."
ctaSubtitle: "Non-US resident? We file Form SS-4 with the IRS and deliver your EIN by email. Just $49."
faqs:
{fq}
---

<Section>
<Capsule>{capsule}</Capsule>
</Section>

{sections}
"""
    if wmd(slug, md):
        built += 1
        print(f"  {built}. {slug}")

# Standard body sections for different page types
def process_body(intro, steps, comparison, summary, links):
    return f"""<Section surface>
<Label>Process</Label>
{intro}
</Section>

<Section>
<Label>Steps</Label>
{steps}
</Section>

<Section wide>
<Label>Comparison</Label>
{comparison}
</Section>

<Section surface>
<Label>Summary</Label>
{summary}

{links}

[Apply for your EIN — $49](/apply/)
</Section>"""

def info_body(s1_label, s1, s2_label, s2, s3_label, s3):
    return f"""<Section surface>
<Label>{s1_label}</Label>
{s1}
</Section>

<Section>
<Label>{s2_label}</Label>
{s2}
</Section>

<Section wide>
<Label>{s3_label}</Label>
{s3}

[Apply for your EIN — $49](/apply/)
</Section>"""

# ============================================================
# ALL REMAINING PROCESS PAGES
# ============================================================

# irs-fax-number-for-ein
mkp("irs-fax-number-for-ein","IRS Fax Number for EIN: Where to Fax SS-4 (2026)","Fax Form SS-4 to the IRS at 855-215-1627 to apply for an EIN. Processing takes 4-7 business days. Primary method for non-US residents.","SS-4 Guide","/ss4-form-guide/","Reference",
"**Fax Form SS-4 to 855-215-1627 to apply for an EIN. The IRS processes faxed applications within 4-7 business days.** This is the primary EIN application method for non-US residents who cannot use the IRS online tool. The fax number is toll-free within the US. ein.so handles the fax process for $49.",
info_body("The Number","## IRS EIN Fax: <Accent>855-215-1627</Accent>\n\nThis is the only fax number for EIN applications. All Form SS-4 submissions go here regardless of your location or entity type. The IRS EIN Operation center in Cincinnati, Ohio processes all faxed forms.\n\n| Detail | Information |\n|--------|------------|\n| Fax Number | 855-215-1627 |\n| Form | SS-4 |\n| Processing | 4-7 business days |\n| Cost | $0 (IRS) / $49 (ein.so) |\n| Available to | All applicants worldwide |\n\nFor the complete IRS fax directory, see [IRS fax number](/irs-fax-number/). For the step-by-step fax guide, see [EIN by fax](/ein-by-fax/).",
"What to Include","## What to Fax <Accent>with Form SS-4</Accent>\n\n1. **Completed Form SS-4** — All 21 fields. Use our [SS-4 form guide](/ss4-form-guide/)\n2. **Cover page** — Your name, entity name, return fax number\n3. **Nothing else** — No payment, no passport copy, no supporting docs\n\n### Non-Resident Tips\n\n| SS-4 Field | Non-Resident Entry |\n|-----------|-------------------|\n| Line 7b (SSN/ITIN) | Your passport number |\n| Line 4 (Address) | Your foreign address |\n| Line 10 (Reason) | Started new business |\n| Line 18 (Designee) | ein.so (if using our service) |\n\nSee [responsible party](/responsible-party-ein/) for Line 7a guidance.",
"Alternative","## Alternatives to <Accent>Faxing</Accent>\n\n| Method | Speed | SSN Required? |\n|--------|-------|---------------|\n| [Online](/ein-online-application/) | Instant | Yes |\n| **Fax** | **4-7 days** | **No** |\n| [Phone](/ein-by-phone/) | Same day | No |\n| [Mail](/ein-by-mail/) | 4-6 weeks | No |\n\nFor more: [How to get EIN](/how-to-get-ein/) | [EIN for non-residents](/ein-for-non-residents/)"),
[("What is the fax number for EIN?","The IRS fax number for EIN applications is 855-215-1627. Fax your completed Form SS-4 to this number. Processing takes 4-7 business days."),
("Can I fax SS-4 from another country?","Yes. International applicants fax to the same number: 855-215-1627. Use an online fax service or ein.so ($49) to handle the process."),
("Is faxing for EIN free?","The IRS charges $0. Your cost is only the fax service. ein.so charges $49 and handles everything including Form SS-4 preparation."),
("What if the fax line is busy?","Try early morning ET (7-9 AM) or late afternoon (4-6 PM). The IRS fax line can be busy during peak hours."),
("How do I know IRS received my fax?","Your fax service provides a transmission confirmation. If no EIN after 10 business days, call IRS at 800-829-4933.")])

# ein-by-fax
mkp("ein-by-fax","How to Apply for EIN by Fax: Complete Guide (2026)","Apply for an EIN by faxing Form SS-4 to the IRS at 855-215-1627. 4-7 business day processing. Step-by-step guide for US and international applicants.","How to Get EIN","/how-to-get-ein/","Process",
"**Apply for an EIN by faxing Form SS-4 to the IRS at 855-215-1627. Processing takes 4-7 business days.** This is the primary method for non-US residents who cannot use the IRS online tool. The fax method is free, available worldwide, and faster than mail. ein.so handles the entire fax process for $49.",
process_body(
"## How to Apply by <Accent>Fax</Accent>\n\nFaxing Form SS-4 is the most reliable EIN application method for non-residents. No SSN required. Available from any country. Faster than mail (4-7 days vs 4-6 weeks). The IRS fax line operates 24/7 but processes forms during business hours.",
"## Step-by-Step <Accent>Fax Process</Accent>\n\n1. **Download Form SS-4** from irs.gov — [SS-4 guide](/ss4-form-guide/)\n2. **Complete all 21 fields** — Use passport number on Line 7b if no SSN\n3. **Write a cover page** — Include return fax number and entity name\n4. **Fax to [855-215-1627](/irs-fax-number-for-ein/)** — Confirm transmission\n5. **Wait 4-7 business days** — IRS faxes your EIN back\n6. **Save your EIN** — Use for [bank accounts](/ein-for-bank-account/), taxes, etc.\n\n### Common Mistakes\n\n| Mistake | Prevention |\n|---------|------------|\n| Missing Line 7b | Enter passport number |\n| Wrong entity type | Match your LLC/corp docs |\n| No return fax number | Include on cover page |\n| Duplicate submission | Fax once only |",
"## Fax vs Other <Accent>Methods</Accent>\n\n| Method | Speed | SSN? | Cost | Best For |\n|--------|-------|------|------|----------|\n| [Online](/ein-online-application/) | Instant | Yes | Free | US residents |\n| **Fax** | **4-7 days** | **No** | **Free** | **Non-residents** |\n| [Phone](/ein-by-phone/) | Same day | No | Free | Comfortable callers |\n| [Mail](/ein-by-mail/) | 4-6 weeks | No | Free | Last resort |\n| [ein.so](/apply/) | 4-7 days | No | $49 | Hands-off |",
"## Summary\n\n- **Fax to:** 855-215-1627\n- **Form:** SS-4\n- **Processing:** 4-7 business days\n- **Cost:** Free (IRS) / $49 (ein.so)\n- **SSN Required:** No",
"[EIN for non-residents](/ein-for-non-residents/) | [SS-4 guide](/ss4-form-guide/) | [IRS fax number](/irs-fax-number/)"),
[("How do I apply for EIN by fax?","Complete Form SS-4, fax to 855-215-1627, wait 4-7 business days. Include a cover page with your return fax number. The IRS returns your EIN by fax."),
("Is fax free?","Yes. The IRS charges $0. Your cost is only the fax service itself. ein.so charges $49 for complete handling."),
("Can non-residents fax?","Yes. Non-residents fax to the same number. Use an online fax service or ein.so. No SSN required — use passport number."),
("What if my fax is rejected?","The IRS faxes a rejection notice explaining the issue. Fix the error and re-fax. See our EIN rejection guide."),
("How long does fax EIN take?","4-7 business days from the date the IRS receives your fax.")])

# ein-by-phone
mkp("ein-by-phone","Apply for EIN by Phone: IRS Numbers & Guide (2026)","Call IRS at 267-941-1099 (international) or 800-829-4933 (domestic) for an EIN. Mon-Fri 7am-7pm ET. Same-day issuance possible.","How to Get EIN","/how-to-get-ein/","Process",
"**Call the IRS at 267-941-1099 (international) or 800-829-4933 (domestic) to apply for an EIN by phone.** Hours: Monday-Friday, 7:00 AM to 7:00 PM Eastern Time. Same-day EIN issuance during the call. Have all [Form SS-4](/ss4-form-guide/) information ready. Hold times average 30-60 minutes.",
info_body("Phone Numbers","## IRS Phone Numbers <Accent>for EIN</Accent>\n\n| Line | Number | For | Toll-Free? |\n|------|--------|-----|------------|\n| International | **267-941-1099** | Non-US residents | No |\n| Domestic | **800-829-4933** | US residents | Yes |\n| TTY/TDD | 800-829-4059 | Hearing impaired | Yes |\n\n**Hours:** Monday-Friday, 7:00 AM to 7:00 PM Eastern Time\n\n### Best Times to Call\n- Lowest wait: Tuesday-Thursday 7-8 AM ET\n- Moderate: Weekday afternoons 3-5 PM ET\n- Longest: Monday mornings, Fridays, tax season\n\nFor more IRS contacts, see [IRS EIN phone number](/irs-ein-phone-number/).",
"Process","## How to Apply <Accent>by Phone</Accent>\n\n1. **Prepare** — Fill out Form SS-4 on paper for reference\n2. **Call** — 267-941-1099 (international) or 800-829-4933\n3. **Navigate prompts** — Select EIN option\n4. **Wait on hold** — 30-60+ minutes typical\n5. **Answer questions** — IRS rep asks SS-4 questions verbally\n6. **Receive EIN** — Issued during the call if approved\n\n### Pros and Cons\n\n| Pros | Cons |\n|------|------|\n| Same-day EIN | 30-60+ min hold |\n| Free | Int'l calling costs |\n| Ask questions live | Language barriers |\n| No fax needed | Business hours only |",
"Alternative","## Skip the Hold Time\n\nein.so handles [Form SS-4](/ss4-form-guide/) by [fax](/ein-by-fax/) — no phone call needed.\n\n| ein.so | DIY Phone |\n|--------|----------|\n| $49 | Free (+ call costs) |\n| No phone call | 30-60 min hold |\n| We handle everything | You answer questions |\n\nOther methods: [online](/ein-online-application/) | [fax](/ein-by-fax/) | [mail](/ein-by-mail/)"),
[("What number for EIN by phone?","International: 267-941-1099. Domestic: 800-829-4933. Hours: Mon-Fri 7am-7pm ET."),
("Can I get EIN same day by phone?","Yes. If you reach a representative and provide all information correctly, the EIN is issued during the call."),
("How long is the hold time?","Typically 30-60 minutes. Best times: Tuesday-Thursday 7-8 AM ET."),
("Is phone application free?","Yes from the IRS. Your cost is only the phone call. International calls may cost $0.10-2.00/minute."),
("What info do I need?","All Form SS-4 fields: entity name, type, responsible party, address, reason, date started, employees, activity.")])

# ein-by-mail
mkp("ein-by-mail","Apply for EIN by Mail: Address & Timeline (2026)","Mail Form SS-4 to IRS EIN Operation, Cincinnati OH 45999. Processing: 4-6 weeks. Slowest EIN method. Fax or phone recommended instead.","How to Get EIN","/how-to-get-ein/","Process",
"**Mail Form SS-4 to: Internal Revenue Service, Attn: EIN Operation, Cincinnati, OH 45999. Processing takes 4-6 weeks.** This is the slowest EIN method. We recommend [fax](/ein-by-fax/) (4-7 days) or [phone](/ein-by-phone/) (same day) instead. ein.so handles fax filing for $49.",
info_body("Address","## IRS Mailing Address <Accent>for SS-4</Accent>\n\n**Internal Revenue Service**\n**Attn: EIN Operation**\n**Cincinnati, OH 45999**\n\n### International Mail Options\n\n| Method | Cost | Delivery |\n|--------|------|----------|\n| USPS First Class Int'l | $1.50-3 | 7-21 days |\n| USPS Priority Int'l | $28-50 | 6-10 days |\n| FedEx | $40-80 | 3-5 days |\n\nAdd 4-6 weeks for IRS processing after delivery.",
"Comparison","## Mail vs Other <Accent>Methods</Accent>\n\n| Method | Speed | Cost |\n|--------|-------|------|\n| [Online](/ein-online-application/) | Instant | Free |\n| [Fax](/ein-by-fax/) | 4-7 days | Free/$49 |\n| [Phone](/ein-by-phone/) | Same day | Free |\n| **Mail** | **4-6 weeks** | **Free** |\n\nMail is 6-10x slower than every other method. Only use if you cannot fax or call.",
"When Mail Works","## When to Use Mail\n\n- No fax or internet access\n- No ability to make international calls\n- Not in a hurry (6+ weeks OK)\n- Want physical paper trail\n\nFor everyone else: [fax](/ein-by-fax/) or [ein.so](/apply/) ($49)\n\nMore: [How to get EIN](/how-to-get-ein/) | [SS-4 guide](/ss4-form-guide/) | [EIN processing time](/ein-processing-time/)"),
[("Where do I mail SS-4?","Internal Revenue Service, Attn: EIN Operation, Cincinnati, OH 45999. This is the only address for EIN applications by mail."),
("How long by mail?","4-6 weeks from when the IRS receives your form. This is the slowest method."),
("Is mail free?","Yes from the IRS. Your cost is postage only."),
("Can I track my application?","Use certified/tracked mail. The IRS does not provide tracking. Call 800-829-4933 after 6 weeks if no response."),
("Should I use mail?","Only as a last resort. Fax (4-7 days) and phone (same day) are much faster. ein.so handles fax for $49.")])

# ein-application-status
mkp("ein-application-status","Check EIN Application Status (2026)","Check EIN application status by calling IRS at 800-829-4933. Online: instant. Fax: wait 7 days. Mail: wait 6 weeks. No online status checker exists.","How to Get EIN","/how-to-get-ein/","Process",
"**Check your EIN application status by calling the IRS at 800-829-4933 (domestic) or 267-941-1099 (international).** The IRS does not offer online status checking for EIN applications. Online applicants get instant EINs. Fax applicants should call after 7 business days. Mail applicants should call after 6 weeks.",
info_body("How to Check","## Check EIN Status <Accent>by Phone</Accent>\n\n**Call:** 800-829-4933 (domestic) / 267-941-1099 (international)\n**Hours:** Mon-Fri 7am-7pm ET\n\nHave ready: entity name, responsible party name, application date, method used.\n\n**There is no online status checker.** You must call.",
"Timelines","## Expected <Accent>Processing Times</Accent>\n\n| Method | Processing | When to Check |\n|--------|-----------|---------------|\n| [Online](/ein-online-application/) | Instant | N/A |\n| [Fax](/ein-by-fax/) | 4-7 days | After 7 days |\n| [Phone](/ein-by-phone/) | Same day | N/A |\n| [Mail](/ein-by-mail/) | 4-6 weeks | After 6 weeks |\n| [ein.so](/apply/) | 4-7 days | We email you |",
"Delays","## What Causes <Accent>Delays</Accent>\n\n| Cause | Impact | Fix |\n|-------|--------|-----|\n| Peak season (Jan-Apr) | +2-5 days | Apply off-season |\n| Incomplete SS-4 | Rejection | Use [SS-4 guide](/ss4-form-guide/) |\n| Wrong fax number | Lost app | Use 855-215-1627 |\n| Duplicate submission | Confusion | Apply once |\n\nein.so tracks your application and emails you when your EIN is ready. [Apply for $49](/apply/).\n\nMore: [EIN processing time](/ein-processing-time/) | [EIN rejection guide](/ein-rejection-guide/)"),
[("How do I check EIN status?","Call IRS at 800-829-4933 or 267-941-1099. Provide entity name, responsible party, and application date."),
("Is there online status checking?","No. The IRS does not offer online EIN status checking. You must call."),
("How long before checking?","Online: instant. Fax: wait 7 business days. Mail: wait 6 weeks. Calling earlier gets 'still processing.'"),
("What if EIN is delayed?","Fax: call after 10 days. Mail: call after 8 weeks. IRS may ask you to resubmit."),
("Does ein.so track status?","Yes. ein.so monitors your application and emails your EIN when the IRS issues it. No calling needed.")])

# lost-ein-number
mkp("lost-ein-number","Lost Your EIN? 3 Ways to Recover It (2026)","Lost your EIN? Recover by calling IRS at 800-829-4933, checking old tax returns, or requesting Letter 147C. Only authorized persons can request EIN info.","What Is an EIN?","/what-is-ein/","Recovery",
"**Recover a lost EIN by: (1) calling the IRS at 800-829-4933, (2) checking old tax returns or bank documents, or (3) requesting Letter 147C.** Only the authorized responsible party can request EIN information. The IRS does not offer online EIN recovery. Your EIN is permanent — it still exists even if you lost the paperwork.",
info_body("3 Methods","## 3 Ways to Find <Accent>Your Lost EIN</Accent>\n\n### Method 1: Call the IRS\n- **Number:** 800-829-4933 (domestic) / 267-941-1099 (international)\n- **Hours:** Mon-Fri 7am-7pm ET\n- **Who can call:** Responsible party or Power of Attorney (Form 2848)\n- **Result:** EIN provided verbally during call\n\n### Method 2: Check Existing Documents\nYour EIN appears on:\n- CP 575 (original EIN confirmation letter)\n- Prior tax returns (1120, 1065, Schedule C)\n- Bank account opening documents\n- W-2 and 1099 forms\n- State business filings\n- IRS correspondence\n\n### Method 3: Request Letter 147C\n- Call 800-829-4933 and request [Letter 147C](/irs-letter-147c/)\n- IRS faxes within 24-48 hours or mails within 10 days\n- Banks accept 147C for account verification\n- See [EIN confirmation letter](/ein-confirmation-letter/)",
"Prevention","## Prevent Future <Accent>Loss</Accent>\n\n1. **Save CP 575 digitally** — Cloud storage backup\n2. **Record EIN in multiple places** — Accounting software, password manager\n3. **Request 147C backup** — Get a second verification letter\n4. **Keep tax returns accessible** — EIN is on every return",
"Key Facts","## Key Facts\n\n- Your EIN is **permanent** — it never expires or changes\n- Only the **responsible party** can recover it from the IRS\n- **No online recovery** tool exists\n- [Letter 147C](/irs-letter-147c/) is the official verification document\n\nNeed a new EIN for a new business? [Apply through ein.so — $49](/apply/)\n\nMore: [What is an EIN](/what-is-ein/) | [EIN format](/ein-number-format/) | [Multiple EINs](/multiple-ein-numbers/)"),
[("How do I find my lost EIN?","Call IRS at 800-829-4933 as the responsible party. Or check old tax returns, bank documents, or IRS letters. Your EIN appears on all these documents."),
("Can I look up my EIN online?","No. The IRS does not offer online EIN recovery. You must call or check physical/digital documents."),
("What is Letter 147C?","An EIN verification letter from the IRS. Confirms your EIN, entity name, and address. Request by calling 800-829-4933. Faxed in 24-48 hours."),
("Can someone else recover my EIN?","Only the responsible party or someone with Power of Attorney (Form 2848) can request EIN information from the IRS."),
("Does my EIN still exist if I lost it?","Yes. EINs are permanent. Losing the paperwork does not cancel the EIN. It still exists in IRS records.")])

# ein-address-change
mkp("ein-address-change","EIN Address Change: Update IRS Records (2026)","Change your EIN address by filing Form 8822-B or sending a letter to the IRS. Free. Update within 60 days of moving. Your EIN number stays the same.","What Is an EIN?","/what-is-ein/","Process",
"**Change your EIN address by filing IRS Form 8822-B or sending a signed letter to the IRS at Cincinnati, OH 45999.** The process is free. Update within 60 days of an address change. Your EIN number does not change — only the address on file. Processing takes 4-6 weeks.",
info_body("How to Change","## How to Update <Accent>EIN Address</Accent>\n\n### Method 1: Form 8822-B (Recommended)\n1. Download Form 8822-B from irs.gov\n2. Complete Part I (EIN, business name, old address)\n3. Complete Part II (new address)\n4. Sign and date\n5. Mail to address in form instructions\n\n### Method 2: Letter to IRS\nWrite a letter including: EIN, entity name, old address, new address, responsible party signature. Mail to Cincinnati, OH 45999.\n\n### Method 3: Next Tax Return\nEnter new address on your next federal return. IRS updates automatically.\n\n| Detail | Information |\n|--------|------------|\n| Form | 8822-B |\n| Cost | $0 |\n| Processing | 4-6 weeks |\n| Deadline | Within 60 days |",
"What Changes","## What Changes, <Accent>What Doesn't</Accent>\n\n| Changes | Stays Same |\n|---------|------------|\n| Address on file | Your 9-digit EIN |\n| Where IRS sends mail | Entity type |\n| Where refunds go | Tax obligations |",
"Related","## Related Changes\n\n- [EIN name change](/ein-name-change/) — Update business name\n- [EIN cancellation](/ein-cancellation/) — Close EIN account\n- [Multiple EINs](/multiple-ein-numbers/) — When you need a new one\n\n[Apply for a new EIN — $49](/apply/)"),
[("How do I change EIN address?","File Form 8822-B or send a letter to IRS at Cincinnati, OH 45999 with your EIN, old address, new address, and signature."),
("Is address change free?","Yes. The IRS charges nothing for address updates."),
("Does my EIN change?","No. Your 9-digit EIN stays the same forever. Only the address on file changes."),
("How long does it take?","4-6 weeks for the IRS to process Form 8822-B."),
("Can I change online?","No. The IRS does not offer online EIN address changes. Mail Form 8822-B or update on your next tax return.")])

# ein-name-change
mkp("ein-name-change","Change Business Name on EIN (2026)","Change the business name on your EIN by sending a letter to the IRS (LLC), filing amended Articles (corporation), or updating your next tax return (sole prop).","What Is an EIN?","/what-is-ein/","Process",
"**Change the business name on your EIN by notifying the IRS. LLCs: send a letter to Cincinnati, OH 45999. Corporations: file amended Articles with your state. Sole proprietors: enter the new name on your next tax return.** Your EIN number stays the same. The process is free at the federal level.",
info_body("By Entity Type","## Name Change <Accent>by Entity Type</Accent>\n\n### LLC\n1. File amended Articles with your state\n2. Send letter to IRS: EIN, old name, new name, state amendment copy, signature\n3. Mail to Cincinnati, OH 45999\n\n### Corporation\n1. File amended Articles of Incorporation with state\n2. Check 'Name change' box on next Form 1120\n3. Or send letter to IRS\n\n### Sole Proprietor\n1. Enter new name on next Schedule C (Form 1040)\n2. No separate IRS notification needed for DBA changes\n\n### Partnership\n1. Check 'Name change' box on next Form 1065",
"Key Rules","## Key Rules\n\n| Rule | Detail |\n|------|--------|\n| EIN changes? | No — stays the same |\n| Cost (IRS) | Free |\n| State cost | $25-150 (varies) |\n| New EIN needed? | No (unless entity type changes) |\n| Processing | 4-6 weeks |",
"Related","## Related\n\n- [EIN address change](/ein-address-change/)\n- [EIN cancellation](/ein-cancellation/)\n- [EIN for LLC](/ein-for-llc/)\n\n[Apply for new EIN — $49](/apply/)"),
[("How do I change my business name on EIN?","LLCs: letter to IRS with EIN, old/new name, state amendment. Corps: check name change box on 1120. Sole props: enter new name on next Schedule C."),
("Do I need a new EIN for a name change?","No. A name change alone does not require a new EIN. Your existing EIN stays the same."),
("Is it free?","IRS processing is free. Your state may charge $25-150 for filing amended Articles."),
("How long does it take?","4-6 weeks for IRS processing after they receive your notification."),
("Where do I send the letter?","Internal Revenue Service, Cincinnati, OH 45999. Include EIN, old name, new name, and responsible party signature.")])

# ein-cancellation
mkp("ein-cancellation","How to Cancel an EIN (2026)","EINs cannot be cancelled. Once issued, an EIN is permanent. You can close the account by letter to the IRS, but the number stays assigned forever.","What Is an EIN?","/what-is-ein/","Info",
"**EINs cannot be cancelled. Once the IRS assigns an EIN, it is permanently tied to that entity forever.** You can close the business account by sending a letter to the IRS, but the 9-digit number remains assigned. You cannot reuse, transfer, or reassign an EIN. Starting a new business requires a [new EIN](/apply/).",
info_body("The Rule","## EINs Are <Accent>Permanent</Accent>\n\nThe IRS states: 'Once an EIN has been assigned to a business entity, it becomes the permanent federal taxpayer identification number for that entity.'\n\n| Can Do | Cannot Do |\n|--------|----------|\n| Close the account | Cancel the number |\n| File final return | Delete from IRS |\n| Dissolve entity | Transfer to new entity |\n| Stop using it | Reuse for new business |",
"Close Account","## How to Close <Accent>EIN Account</Accent>\n\n1. File final tax return (check 'Final return' box)\n2. Pay all outstanding taxes\n3. Send letter to IRS, Cincinnati, OH 45999:\n   - Include: EIN, entity name, reason for closing\n   - Sign as responsible party\n4. File state dissolution documents separately\n\nThe IRS marks the account as closed. The EIN remains on record permanently.",
"New EIN","## When You Need a <Accent>New EIN</Accent>\n\n| Event | New EIN? |\n|-------|----------|\n| New business entity | Yes |\n| Sole prop to LLC | Yes |\n| New sole prop owner | Yes |\n| Bankruptcy | Yes |\n| Name change only | No |\n| Address change only | No |\n\nSee [multiple EINs](/multiple-ein-numbers/). [Apply for new EIN — $49](/apply/)"),
[("Can I cancel my EIN?","No. EINs cannot be cancelled. Once assigned, the number is permanent. You can close the account but the number remains."),
("How do I close EIN account?","Send a letter to IRS at Cincinnati, OH 45999 with your EIN, entity name, and reason for closing."),
("What happens to unused EINs?","The IRS may deactivate after 3 years of non-use, but the EIN still exists and is assigned to that entity."),
("Can I reuse an EIN?","No. Each EIN is permanently assigned to one entity. New business = new EIN."),
("Do I cancel EIN when dissolving LLC?","You close the account (not cancel). File final return, send closing letter, file state dissolution.")])

# multiple-ein-numbers
mkp("multiple-ein-numbers","Can You Have Multiple EIN Numbers? (2026)","Each entity gets one EIN. One person can have multiple EINs for multiple businesses. New EIN needed for each new entity. No limit on EINs per person.","What Is an EIN?","/what-is-ein/","Rules",
"**Each business entity gets one unique EIN. One person can have multiple EINs for multiple businesses.** If you own 3 LLCs, you need 3 EINs. There is no limit. You need a new EIN when you form a new entity or change entity types. You do NOT need a new EIN for name or address changes.",
info_body("The Rule","## One Entity = <Accent>One EIN</Accent>\n\n| Situation | EINs |\n|-----------|------|\n| 1 LLC | 1 |\n| 2 LLCs | 2 |\n| 1 LLC + 1 Corp | 2 |\n| 5 businesses | 5 |\n\n### When You Need a NEW EIN\n\n| Event | New EIN? |\n|-------|----------|\n| New LLC/Corp | Yes |\n| Sole prop to LLC | Yes |\n| New sole prop owner | Yes |\n| Bankruptcy | Yes |",
"When NOT","## When You Do NOT <Accent>Need a New EIN</Accent>\n\n| Event | New EIN? |\n|-------|----------|\n| [Name change](/ein-name-change/) | No |\n| [Address change](/ein-address-change/) | No |\n| Add LLC members | No |\n| Change registered agent | No |\n| S-Corp election | No |\n| New bank account | No |",
"Apply","## Get an EIN for <Accent>Each Entity</Accent>\n\nApply separately for each business entity. The responsible party can be the same person on multiple applications.\n\n[Apply for EIN — $49 per entity](/apply/)\n\nMore: [What is an EIN](/what-is-ein/) | [EIN for LLC](/ein-for-llc/) | [EIN cancellation](/ein-cancellation/)"),
[("Can one person have multiple EINs?","Yes. One person can own multiple entities, each with its own EIN. No limit on how many."),
("Does each LLC need its own EIN?","Yes. Each LLC must have a unique EIN. You cannot share EINs across entities."),
("When do I need a new EIN?","New entity, entity type change, new sole prop owner, or bankruptcy. NOT for name/address changes."),
("Can I use one EIN for two businesses?","No. Each entity needs its own EIN. Using one EIN for multiple entities violates IRS rules."),
("Is there a limit on EINs?","No. You can apply for as many EINs as you have entities. The IRS limits one online application per responsible party per day.")])

# ein-lookup-irs
mkp("ein-lookup-irs","EIN Lookup on IRS: Official Methods (2026)","Look up an EIN using IRS Tax Exempt Org Search (nonprofits, free), call IRS at 800-829-4933 (your own EIN only), SEC EDGAR (public companies), or state databases.","EIN Lookup","/ein-lookup/","Lookup",
"**The IRS offers limited EIN lookup. Tax-exempt organizations can be searched free at apps.irs.gov. Private business EINs are confidential.** To find a private company's EIN, request their W-9 form. To verify your own EIN, call the IRS at 800-829-4933 or request [Letter 147C](/irs-letter-147c/).",
info_body("Methods","## IRS EIN <Accent>Search Methods</Accent>\n\n### 1. Tax Exempt Org Search (Free)\n- URL: apps.irs.gov/app/eos\n- Searches: 501(c)(3) organizations, charities\n- Shows: EIN, name, city, state, ruling date\n\n### 2. Call IRS (Your Own EIN Only)\n- Number: 800-829-4933 / 267-941-1099\n- Must be authorized responsible party\n- Cannot look up others' EINs\n\n### 3. SEC EDGAR (Public Companies)\n- URL: sec.gov/edgar\n- EIN in 10-K/10-Q filing headers\n- Free\n\n### 4. State SOS Databases\n- Varies by state\n- Not all states show EINs",
"Limitations","## Why Lookup Is <Accent>Limited</Accent>\n\nEINs are confidential under IRC Section 6103. The IRS protects them like SSNs.\n\n| To Find | Method |\n|---------|--------|\n| Nonprofit EIN | IRS Tax Exempt Search |\n| Public company EIN | SEC EDGAR |\n| Private company EIN | Request W-9 |\n| Your own EIN | Call IRS or check [CP 575](/ein-confirmation-letter/) |",
"Related","## Related\n\n- [EIN lookup](/ein-lookup/) — Full overview\n- [Free EIN lookup](/ein-lookup-free/) — Free methods\n- [EIN lookup by name](/ein-lookup-by-name/) — Search by company\n- [EIN verification](/ein-verification/) — Verify a known EIN\n\n[Apply for EIN — $49](/apply/)"),
[("Can I look up an EIN on irs.gov?","Only for nonprofits. The IRS Tax Exempt Organization Search is free for 501(c)(3) organizations. No tool exists for private businesses."),
("How do I find a company's EIN?","Nonprofits: IRS search. Public companies: SEC EDGAR. Private: request W-9 form or check state databases."),
("Can I call IRS to look up an EIN?","Only YOUR OWN EIN. The IRS will not disclose others' EINs by phone."),
("Is there a free EIN lookup?","IRS nonprofit search and SEC EDGAR are free. No universal free lookup exists for all businesses."),
("Why can't I find a private EIN?","EINs are confidential tax info under IRC Section 6103. Private companies share theirs via W-9 form.")])

# ein-lookup-by-name
mkp("ein-lookup-by-name","EIN Lookup by Company Name (2026)","Search for an EIN by company name: IRS Tax Exempt Search (nonprofits), SEC EDGAR (public), state databases, or request W-9 directly from the business.","EIN Lookup","/ein-lookup/","Lookup",
"**Search for an EIN by company name using the IRS Tax Exempt Organization Search (nonprofits, free), SEC EDGAR (public companies, free), or state Secretary of State databases.** Private company EINs are not publicly searchable. The standard method is to request IRS Form W-9 directly from the business.",
info_body("Search Methods","## Search by Name <Accent>Methods</Accent>\n\n| Method | Works For | Cost |\n|--------|-----------|------|\n| IRS Tax Exempt Search | Nonprofits | Free |\n| SEC EDGAR | Public companies | Free |\n| State SOS | Registered businesses | Free |\n| W-9 Request | Any business | Free |\n| Dun & Bradstreet | Any (limited) | Paid |\n\n### How to Use IRS Tax Exempt Search\n1. Go to apps.irs.gov/app/eos\n2. Enter organization name\n3. Filter by city/state\n4. Results show EIN, name, status",
"Private Companies","## Finding Private <Accent>Company EINs</Accent>\n\nPrivate company EINs are confidential. Your options:\n\n1. **Request W-9** — Standard business practice. Companies must provide W-9 for $600+ transactions\n2. **State databases** — Many states list registered businesses with EINs\n3. **Google search** — Some orgs publish EINs in public documents\n4. **Commercial services** — D&B, LexisNexis",
"Related","## Related Guides\n\n- [EIN lookup](/ein-lookup/)\n- [EIN lookup IRS](/ein-lookup-irs/)\n- [EIN verification](/ein-verification/)\n- [Free EIN lookup](/ein-lookup-free/)\n\n[Apply for EIN — $49](/apply/)"),
[("Can I look up EIN by company name?","For nonprofits: yes (IRS search). For public companies: yes (SEC EDGAR). For private: no public tool — request W-9."),
("Is there a free EIN search by name?","IRS Tax Exempt search and SEC EDGAR are free. No free tool covers all private businesses."),
("How do I get a vendor's EIN?","Request IRS Form W-9. Businesses are required to provide W-9 for $600+ payment relationships."),
("What info do I need to search?","The exact legal name (not DBA). For IRS nonprofit search, you can also filter by city and state."),
("Can I find EIN on Google?","Sometimes. Some organizations publish EINs in annual reports or public filings. Unreliable for private companies.")])

# ein-verification
mkp("ein-verification","EIN Verification: Confirm a Business Tax ID (2026)","Verify an EIN with IRS Letter 147C, CP 575 notice, W-9 form, or state filings. Banks require EIN verification for business accounts. Call IRS at 800-829-4933.","EIN Lookup","/ein-lookup/","Verification",
"**Verify an EIN by requesting IRS Letter 147C (call 800-829-4933), checking your CP 575 confirmation, or cross-referencing state filings.** Banks require EIN verification before opening business accounts. The IRS faxes Letter 147C within 24-48 hours or mails within 10 business days.",
info_body("Methods","## How to Verify <Accent>an EIN</Accent>\n\n### Your Own EIN\n| Method | Timeline |\n|--------|----------|\n| CP 575 notice | Instant (if you have it) |\n| [Letter 147C](/irs-letter-147c/) | 24-48 hrs (fax) / 10 days (mail) |\n| Tax returns | Instant |\n| Bank records | Instant |\n\n### Another Company's EIN\n| Method | Reliability |\n|--------|-------------|\n| W-9 form request | High |\n| State SOS records | Medium |\n| IRS nonprofit search | High |\n| SEC EDGAR | High |",
"147C vs CP 575","## Letter 147C vs <Accent>CP 575</Accent>\n\n| | CP 575 | Letter 147C |\n|-|--------|-------------|\n| What | Original EIN notice | Verification letter |\n| When | At EIN issuance | Upon request |\n| How to get | Automatic | Call 800-829-4933 |\n| Delivery | Mail | Fax (24-48 hrs) or mail |\n| Banks accept? | Yes | Yes |\n| Replacement? | Cannot re-issue | Unlimited |",
"Related","## Related\n\n- [EIN confirmation letter](/ein-confirmation-letter/)\n- [IRS Letter 147C](/irs-letter-147c/)\n- [EIN lookup](/ein-lookup/)\n- [Lost EIN](/lost-ein-number/)\n\n[Apply for EIN — $49](/apply/)"),
[("How do I verify an EIN?","Request Letter 147C by calling 800-829-4933, check your CP 575, or cross-reference with state records."),
("What is Letter 147C?","An EIN verification letter from the IRS. Confirms EIN, entity name, and address. Faxed in 24-48 hours upon request."),
("What is CP 575?","The original EIN assignment notice mailed when your EIN is first issued. Your primary EIN confirmation document."),
("Do banks verify EINs?","Yes. Banks verify EINs during account opening. They may accept 147C, CP 575, or your latest tax return."),
("How long does verification take?","Phone: 10-30 min. Letter 147C by fax: 24-48 hours. By mail: 10 business days.")])

# ein-for-foreign-nationals
mkp("ein-for-foreign-nationals","EIN for Foreign Nationals: International Guide (2026)","Foreign nationals can get a US EIN by submitting Form SS-4 by fax. No SSN required. Use your passport number as identification. ein.so handles it for $49.","EIN for Non-Residents","/ein-for-non-residents/","Audience",
"**Foreign nationals can get a US EIN by submitting IRS Form SS-4 by fax to 855-215-1627. No SSN or ITIN is required.** Use your passport number as your identifying number on Line 7b of Form SS-4. The IRS processes fax applications within 4-7 business days. ein.so handles the process for $49 Standard or $97 Express.",
info_body("Process","## How Foreign Nationals <Accent>Get an EIN</Accent>\n\n1. **Form a US entity** — Register an LLC or corporation with a US state\n2. **Complete [Form SS-4](/ss4-form-guide/)** — Use passport number on Line 7b\n3. **Fax to [855-215-1627](/irs-fax-number-for-ein/)** — Or use ein.so ($49)\n4. **Receive EIN** — 4-7 business days by fax or email\n\n### Key Fields for Foreign Nationals\n\n| SS-4 Line | What to Enter |\n|-----------|---------------|\n| 7a (Responsible party) | Your full legal name |\n| 7b (SSN/ITIN) | Passport number |\n| 4a-4b (Address) | Your foreign address |\n| 10 (Reason) | Started new business |\n\nFor detailed instructions, see [foreign EIN application](/foreign-ein-application/).",
"Why You Need EIN","## Why Foreign Nationals <Accent>Need an EIN</Accent>\n\n- Open a [US business bank account](/ein-for-bank-account/)\n- Accept payments through PayPal, Stripe, Amazon\n- File US tax returns\n- Comply with [BOI filing](/boi-filing/) requirements\n- File [Form 5472](/form-5472-guide/) (required for foreign-owned LLCs)\n- Hire US employees or contractors",
"Country Guides","## Country-Specific <Accent>EIN Guides</Accent>\n\n- [EIN for India](/ein-for-india/)\n- [EIN for UK](/ein-for-uk/)\n- [EIN for Canada](/ein-for-canada/)\n- [EIN for Nigeria](/ein-for-nigeria/)\n- [EIN for Pakistan](/ein-for-pakistan/)\n- [EIN for Philippines](/ein-for-philippines/)\n- [EIN for Bangladesh](/ein-for-bangladesh/)\n- [All countries](/ein-for-non-residents/)\n\n[Apply for EIN — $49](/apply/)"),
[("Can foreign nationals get an EIN?","Yes. Any foreign national can get a US EIN by submitting Form SS-4 to the IRS by fax. No SSN required. Use passport number."),
("Do I need to visit the US?","No. The entire process is remote. Fax SS-4 from any country or use ein.so ($49) online."),
("What ID do I need?","Your passport number. Enter it on Line 7b of Form SS-4 where it asks for SSN/ITIN."),
("How long does it take?","4-7 business days by fax. Same day by phone (267-941-1099). ein.so: 4-7 days standard, 2-3 days express."),
("Do I need a US address?","A US address is required for your LLC registration but not for the EIN application. You can use your foreign address on Form SS-4.")])

# foreign-ein-application
mkp("foreign-ein-application","Foreign EIN Application: SS-4 for Non-US Entities (2026)","How to submit a foreign EIN application using Form SS-4. Line-by-line guidance for international applicants. No SSN needed. ein.so handles it for $49.","EIN for Non-Residents","/ein-for-non-residents/","Process",
"**Submit a foreign EIN application by completing IRS Form SS-4 and faxing it to 855-215-1627.** International applicants use their passport number instead of an SSN on Line 7b. The IRS processes foreign applications within 4-7 business days. ein.so prepares and files your SS-4 for $49.",
info_body("Line by Line","## Form SS-4 for <Accent>Foreign Applicants</Accent>\n\n### Critical Fields\n\n| Line | Field | Foreign Applicant Entry |\n|------|-------|-------------------------|\n| 1 | Legal name | Your LLC/entity name |\n| 2 | Trade name | DBA if different |\n| 3 | Executor/trustee | Your personal name |\n| 4a-4b | Mailing address | Your foreign address |\n| 7a | Responsible party | Your name (individual) |\n| 7b | SSN/ITIN | **Passport number** |\n| 9a | Type of entity | LLC/Corporation/etc |\n| 10 | Reason | Started new business |\n| 16 | Country | Your country of residence |\n| 18 | Third party designee | ein.so (if using service) |\n\nFor complete instructions, see [SS-4 form guide](/ss4-form-guide/). For [responsible party](/responsible-party-ein/) guidance.",
"Common Mistakes","## Common <Accent>Mistakes</Accent>\n\n| Mistake | Fix |\n|---------|-----|\n| Using foreign tax ID on Line 7b | Use **passport number** |\n| Leaving Line 7b blank | Must provide identification |\n| Wrong entity type | Match your LLC/corp registration |\n| US address on Line 4 | Use your actual foreign address |\n| Missing signature | Sign the form |\n\nSee [EIN rejection guide](/ein-rejection-guide/) for more.",
"Next Steps","## After Getting <Accent>Your EIN</Accent>\n\n1. [Open a US bank account](/ein-for-bank-account/) — Mercury, Relay, Wise\n2. [File BOI report](/boi-filing/) — Required for all LLCs\n3. [File Form 5472](/form-5472-guide/) — Required for foreign-owned LLCs ($25,000 penalty)\n4. Set up payment processing — PayPal, Stripe, Amazon\n\n[Apply for EIN — $49](/apply/) | [EIN for non-residents](/ein-for-non-residents/) | [EIN for foreign nationals](/ein-for-foreign-nationals/)"),
[("How do foreign entities apply for EIN?","Complete Form SS-4 with passport number on Line 7b, fax to 855-215-1627. Processing: 4-7 business days."),
("What replaces SSN on the application?","Your passport number. Enter it on Line 7b where the form asks for SSN or ITIN."),
("Can I apply online as a foreign applicant?","No. The IRS online tool requires SSN. Foreign applicants must use fax, phone, or ein.so."),
("What if my application is rejected?","Common reasons: missing passport number, wrong entity type. Fix the error and re-fax. See EIN rejection guide."),
("How much does ein.so charge?","$49 Standard (4-7 business days) or $97 Express. Includes SS-4 preparation, faxing, and EIN delivery by email.")])

# ein-for-youtube-creators
mkp("ein-for-youtube-creators","EIN for YouTube Creators (2026)","YouTube creators need an EIN for AdSense tax compliance, avoiding 24% backup withholding, and separating business from personal finances. Apply for $49 at ein.so.","What Can You Do","/what-can-you-do-with-ein/","Industry",
"**YouTube creators earning $600+ per year from AdSense need a tax identification number. An EIN separates your business income from personal finances and avoids 24% backup withholding.** If you formed an LLC for your YouTube channel, you need an EIN. Non-US creators need an EIN to complete YouTube's tax information interview. ein.so handles EIN applications for $49.",
info_body("Why YouTube Needs EIN","## Why YouTube Creators <Accent>Need an EIN</Accent>\n\n1. **AdSense Tax Compliance** — Google requires tax info (W-9 or W-8BEN) for all monetized channels\n2. **Avoid 24% Withholding** — Without a tax ID, Google withholds 24% of US-source income\n3. **1099 Reporting** — YouTube issues 1099 for $600+/year in earnings\n4. **Business Bank Account** — Separate YouTube income from personal\n5. **Business Expenses** — Deduct equipment, software, travel\n6. **Professional Credibility** — Brand deals require W-9 with EIN\n\n### Do You Need an EIN?\n\n| Situation | EIN Needed? |\n|-----------|------------|\n| Monetized channel (sole prop) | Recommended |\n| YouTube LLC | Required |\n| Brand sponsorships $600+ | Required (W-9) |\n| Non-US creator with US LLC | Required |\n| Hobby channel, no income | No |",
"Non-US Creators","## Non-US YouTube <Accent>Creators</Accent>\n\nGoogle withholds up to 30% of US-source AdSense revenue from non-US creators without proper tax documentation. Getting an EIN through a US LLC can:\n- Reduce withholding via tax treaty benefits\n- Enable US business banking\n- Build credibility with US brands\n\nSee [EIN for non-residents](/ein-for-non-residents/) and [EIN without SSN](/ein-without-ssn/).",
"Related","## Related Guides\n\n- [EIN for freelancers](/ein-for-freelancers/)\n- [EIN for TikTok creators](/ein-for-tiktok-creators/)\n- [EIN for sole proprietors](/ein-for-sole-proprietor/)\n- [EIN for LLC](/ein-for-llc/)\n\n[Apply for EIN — $49](/apply/)"),
[("Do YouTube creators need an EIN?","If you earn $600+/year from YouTube and have an LLC, yes. Sole proprietors can use their SSN but an EIN is recommended for privacy and professionalism."),
("Does YouTube require an EIN?","YouTube requires a tax identification number (SSN, ITIN, or EIN) to monetize your channel. An EIN is required if your channel operates as an LLC."),
("What happens without a tax ID on YouTube?","Google withholds 24% of your US earnings as backup withholding. Non-US creators may face up to 30% withholding without proper tax documentation."),
("Can non-US YouTubers get an EIN?","Yes. Non-US creators with a US LLC can get an EIN by faxing Form SS-4. ein.so handles it for $49."),
("Should I form an LLC for YouTube?","An LLC provides liability protection, tax deduction benefits, and separates business from personal. Recommended once earning $1,000+/month consistently.")])

# ein-for-etsy-sellers
mkp("ein-for-etsy-sellers","EIN for Etsy Sellers (2026)","Etsy sellers need an EIN for tax compliance when earning $600+ per year. Separate business from personal finances. Required for LLC-based Etsy shops.","What Can You Do","/what-can-you-do-with-ein/","Industry",
"**Etsy sellers earning $600+ per year receive a 1099-K and need a tax identification number. An EIN separates your Etsy business from personal finances.** If you formed an LLC for your Etsy shop, an EIN is required. Sole proprietors can use their SSN but an EIN is recommended for privacy. ein.so handles EIN applications for $49.",
info_body("Why Etsy Needs EIN","## Why Etsy Sellers <Accent>Need an EIN</Accent>\n\n1. **1099-K Reporting** — Etsy issues 1099-K for $600+ in annual sales (since 2022)\n2. **Tax Filing** — Report Etsy income on Schedule C or Form 1120\n3. **Business Bank Account** — Separate Etsy revenue from personal\n4. **Sales Tax Collection** — Some states require EIN for sales tax registration\n5. **Wholesale Buying** — Suppliers may require EIN for wholesale orders\n\n### Do You Need an EIN?\n\n| Situation | EIN Needed? |\n|-----------|------------|\n| Etsy LLC | Required |\n| Etsy sole prop | Recommended |\n| Sales $600+/year | Recommended |\n| Non-US seller with US LLC | Required |",
"Getting Started","## How to Get an EIN <Accent>for Etsy</Accent>\n\n1. **US residents:** Apply free online at irs.gov (instant)\n2. **Non-residents:** [Fax Form SS-4](/ein-by-fax/) or use [ein.so](/apply/) ($49)\n3. **Use EIN for:** Etsy tax settings, bank account, tax returns\n\nFor more: [EIN for Shopify sellers](/ein-for-shopify-sellers/) | [EIN for Amazon sellers](/ein-for-amazon-sellers/)",
"Related","## Related\n\n- [EIN for sole proprietors](/ein-for-sole-proprietor/)\n- [EIN for LLC](/ein-for-llc/)\n- [What is an EIN](/what-is-ein/)\n\n[Apply for EIN — $49](/apply/)"),
[("Do Etsy sellers need an EIN?","If you have an LLC: yes. If sole proprietor: recommended but not required. An EIN protects your SSN and enables business banking."),
("Does Etsy require an EIN?","Etsy requires a tax ID (SSN or EIN) for tax reporting. They issue 1099-K for $600+ in annual sales."),
("Can I use my SSN for Etsy?","Yes, sole proprietors can use their SSN. However, an EIN is recommended to separate business and personal tax identities."),
("How do I add my EIN to Etsy?","Go to Shop Manager > Finances > Legal and tax information. Enter your EIN in the taxpayer identification field."),
("Do non-US Etsy sellers need an EIN?","If you have a US LLC and sell on Etsy, yes. ein.so handles EIN applications for non-residents for $49.")])

# ein-for-payoneer
mkp("ein-for-payoneer","EIN for Payoneer (2026)","Payoneer requires a tax ID for US receiving accounts. An EIN connects your business to Payoneer for receiving US payments. Common for international freelancers.","What Can You Do","/what-can-you-do-with-ein/","Industry",
"**Payoneer requires a tax identification number to set up US payment receiving accounts. An EIN (Employer Identification Number) connects your US business entity to your Payoneer account.** International freelancers and businesses use Payoneer with their EIN to receive USD payments from US clients. ein.so handles EIN applications for $49.",
info_body("Why Payoneer Needs EIN","## Why Payoneer Users <Accent>Need an EIN</Accent>\n\n1. **US Receiving Account** — Payoneer requires a tax ID for US payment accounts\n2. **Tax Compliance** — IRS requires tax ID for US-source income reporting\n3. **Business Verification** — Payoneer verifies your business entity with your EIN\n4. **Higher Limits** — Business accounts with EIN get higher transaction limits\n\n### Who Needs an EIN for Payoneer?\n\n| User Type | EIN Needed? |\n|-----------|------------|\n| US LLC receiving US payments | Yes |\n| Freelancer with US LLC | Yes |\n| Non-US individual (no LLC) | No (use personal tax ID) |\n| Business receiving US clients | Recommended |",
"Setup","## How to Connect <Accent>EIN to Payoneer</Accent>\n\n1. Get your EIN — [Apply through ein.so](/apply/) ($49)\n2. Log in to Payoneer\n3. Go to Settings > Verification\n4. Enter your EIN as your US tax ID\n5. Upload supporting documents (LLC registration)\n\nFor other payment platforms: [EIN for PayPal](/ein-for-paypal/) | [EIN for Stripe](/ein-for-stripe/)",
"Related","## Related\n\n- [EIN for freelancers](/ein-for-freelancers/)\n- [EIN for non-residents](/ein-for-non-residents/)\n- [EIN for bank account](/ein-for-bank-account/)\n\n[Apply for EIN — $49](/apply/)"),
[("Does Payoneer require an EIN?","Payoneer requires a tax ID for US receiving accounts. If your business has a US LLC, you need an EIN. Individual accounts can use SSN or ITIN."),
("How do I add EIN to Payoneer?","Go to Settings > Verification in your Payoneer account. Enter your EIN in the tax identification field and upload LLC documents."),
("Can non-US users get an EIN for Payoneer?","Yes. Non-US residents with a US LLC can get an EIN by faxing Form SS-4 or through ein.so ($49)."),
("Is Payoneer better than PayPal for non-residents?","Both require a tax ID. Payoneer generally offers better exchange rates and lower fees for international transfers. Both accept EINs."),
("Do I need an LLC for Payoneer?","Not required for personal accounts. But a US LLC + EIN gives you a US receiving account with better features and higher limits.")])

print(f"\n{'='*50}")
print(f"TOTAL PAGES BUILT: {built}")
print(f"{'='*50}")

# Count totals
import subprocess
r1 = subprocess.run(["find", os.path.join(BASE,"src/content"), "-name", "_index.md"], capture_output=True, text=True)
r2 = subprocess.run(["find", os.path.join(BASE,"src/app"), "-name", "page.tsx"], capture_output=True, text=True)
print(f"Content files: {len(r1.stdout.strip().split(chr(10)))}")
print(f"Page files: {len(r2.stdout.strip().split(chr(10)))}")
