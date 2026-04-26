#!/usr/bin/env python3
"""
Mass page generator for ein.so
Generates page.tsx + _index.md for each page definition
"""
import os
import json

BASE = "/Users/zawwadulsami/Desktop/Korey/Anchorage-Core/Ein.so/ein-so-website"
APP_DIR = os.path.join(BASE, "src/app")
CONTENT_DIR = os.path.join(BASE, "src/content")


def slug_to_component(slug):
    """Convert slug to PascalCase component name"""
    parts = slug.replace("/", "-").strip("-").split("-")
    return "".join(p.capitalize() for p in parts)


def write_page_tsx(slug):
    """Write the page.tsx file for a given slug"""
    # Handle nested slugs like tools/ein-eligibility-checker
    component = slug_to_component(slug)

    # For nested paths, schema import needs correct relative path
    depth = slug.count("/")
    schema_import = "../" * (depth + 1) + "schema"

    content = f'''import type {{ Metadata }} from "next";
import {{ FAQSchema, BreadcrumbSchema, ArticleSchema }} from "{schema_import}";
import {{ getListPage }} from "@/lib/contentParser";
import {{ MDXPage }} from "@/lib/mdx";

const {{ frontmatter: fm, content }} = getListPage("{slug}/_index.md");

export const metadata: Metadata = {{
  title: fm.title,
  description: fm.description,
  alternates: {{ canonical: fm.canonical }},
}};

export default function {component}Page() {{
  return (
    <>
      <BreadcrumbSchema items={{fm.breadcrumbs}} />
      <ArticleSchema
        headline={{fm.schema.headline}}
        description={{fm.schema.description}}
        url={{fm.canonical}}
      />
      <FAQSchema faqs={{fm.faqs}} />
      <MDXPage frontmatter={{fm}} content={{content}} />
    </>
  );
}}
'''
    filepath = os.path.join(APP_DIR, slug, "page.tsx")
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w") as f:
        f.write(content)


def write_content_md(slug, frontmatter_yaml, body_md):
    """Write the _index.md content file"""
    filepath = os.path.join(CONTENT_DIR, slug, "_index.md")
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w") as f:
        f.write(f"---\n{frontmatter_yaml}\n---\n\n{body_md}\n")


def generate_comparison_page(slug, title, desc, other_name, other_full, other_digits, other_format,
                              other_issuer, other_purpose, other_country, is_same=False,
                              breadcrumb_parent="What Is an EIN?", breadcrumb_parent_url="/what-is-ein/",
                              extra_links="", extra_content="", faqs_extra=""):
    """Generate a comparison page (EIN vs X)"""

    canonical = f"/{slug}/"

    if is_same:
        capsule = f"**An EIN and a {other_name} are the same number.** Both refer to the 9-digit tax identification number (XX-XXXXXXX) issued by the IRS to businesses. The IRS officially uses EIN. The term {other_name} is used informally in business contexts."
        core_answer = f"Yes. An EIN and a {other_name} refer to the same 9-digit IRS tax ID number. They are interchangeable."
    else:
        capsule = f"**An EIN is a 9-digit US federal tax ID issued by the IRS. A {other_name} is a {other_digits}-digit {other_purpose} issued by {other_issuer} in {other_country}.** They serve different purposes in different countries. US businesses need an EIN. {other_country} businesses need a {other_name}. If you operate in both countries, you may need both."
        core_answer = f"No. An EIN is a US federal tax ID from the IRS. A {other_name} is a {other_purpose} from {other_issuer} in {other_country}. They are issued by different authorities in different countries for different purposes."

    faqs_yaml = f'''  - q: "Is an EIN the same as a {other_name}?"
    a: "{core_answer}"
  - q: "Do I need both an EIN and a {other_name}?"
    a: "Only if you operate businesses in both the United States and {other_country}. Your EIN identifies your US business for IRS tax purposes. Your {other_name} identifies your {other_country} business for local tax purposes. Each number is valid only in its own jurisdiction."
  - q: "Can I use my {other_name} instead of an EIN in the US?"
    a: "No. The IRS does not accept foreign tax identification numbers for US tax reporting. If you operate a US business entity (LLC, corporation), you must obtain a separate EIN from the IRS regardless of whether you have a {other_name} in {other_country}."
  - q: "How do {other_country} entrepreneurs get a US EIN?"
    a: "{other_country} entrepreneurs can get a US EIN by submitting Form SS-4 to the IRS by fax. No SSN is required. Your {other_country} passport number serves as your identification. ein.so handles the entire process for $49 (Standard) or $97 (Express)."
  - q: "What format is a {other_name}?"
    a: "A {other_name} uses a {other_format} format. An EIN uses the XX-XXXXXXX format (9 digits with a hyphen after the second digit). The formats are different and not interchangeable."
  - q: "Is an EIN valid in {other_country}?"
    a: "No. An EIN is valid only for US federal tax purposes. It has no legal standing in {other_country}. Similarly, a {other_name} has no legal standing in the United States. Each country issues its own tax identification numbers."
{faqs_extra}'''

    frontmatter = f'''title: "{title}"
description: "{desc}"
canonical: "{canonical}"
breadcrumbs:
  - name: "Home"
    url: "/"
  - name: "{breadcrumb_parent}"
    url: "{breadcrumb_parent_url}"
  - name: "{title.split(' - ')[0].split(':')[0].strip()}"
    url: "{canonical}"
schema:
  type: "article"
  headline: "{title}"
  description: "{desc}"
heroLabel: "Comparison Guide"
heroTitle: "EIN vs {other_name}"
heroAccent: "Compared"
heroDescription: "Understand the difference between a US EIN and a {other_country} {other_name}. Both are tax identification numbers, but they serve different countries and purposes."
ctaTitle: "Need an EIN? We Handle Everything."
ctaSubtitle: "Non-US resident? We file Form SS-4 with the IRS and deliver your EIN by email. Just $49."
faqs:
{faqs_yaml}'''

    body = f'''<Section>
<Capsule>{capsule}</Capsule>

{other_country} entrepreneurs expanding into the US market frequently encounter both EINs and {other_name}s. Understanding the difference between these two identification numbers is essential for operating legally in both jurisdictions. This guide provides a complete comparison, explains when you need each number, and shows how {other_country} business owners can obtain a US EIN.

The key distinction is jurisdiction. An EIN is issued by the US Internal Revenue Service (IRS) for US federal tax purposes. A {other_name} is issued by {other_issuer} for {other_country} tax purposes. Neither number is valid in the other's jurisdiction.
</Section>

<Section surface>
<Label>Definition</Label>

## What Is an <Accent>EIN?</Accent>

An EIN (Employer Identification Number) is a 9-digit tax identification number issued by the US Internal Revenue Service (IRS) to businesses operating in the United States. The format is XX-XXXXXXX (for example, 12-3456789). The IRS issues approximately 5 million EINs per year.

Every US business entity needs an EIN for federal tax filing, opening bank accounts, hiring employees, and accepting payments. The EIN is free to obtain from the IRS and is permanently assigned to the entity once issued.

For a complete explanation, see our guide on [what is an EIN](/what-is-ein/).

### Key EIN Facts

- **Issued by:** Internal Revenue Service (IRS)
- **Format:** XX-XXXXXXX (9 digits)
- **Cost:** Free from IRS / $49 through [ein.so](/apply/)
- **Purpose:** US federal tax identification
- **Application:** [Form SS-4](/ss4-form-guide/) (online, fax, phone, mail)
- **Processing:** Instant (online) or 4-7 business days (fax)
</Section>

<Section>
<Label>{other_name}</Label>

## What Is a <Accent>{other_name}?</Accent>

A {other_name} ({other_full}) is a {other_digits}-digit identification number issued by {other_issuer} in {other_country}. It uses the format {other_format}. The {other_name} serves as the primary {other_purpose} in {other_country}.

{extra_content}

### Key {other_name} Facts

- **Issued by:** {other_issuer}
- **Format:** {other_format}
- **Country:** {other_country}
- **Purpose:** {other_purpose}
</Section>

<Section wide>
<Label>Comparison</Label>

## EIN vs {other_name}: <Accent>Side-by-Side</Accent>

| Factor | EIN (United States) | {other_name} ({other_country}) |
|--------|--------------------|-----------------------|
| Full Name | Employer Identification Number | {other_full} |
| Issuing Authority | IRS (Internal Revenue Service) | {other_issuer} |
| Format | XX-XXXXXXX (9 digits) | {other_format} |
| Purpose | US federal tax identification | {other_purpose} |
| Cost | Free | Varies |
| Validity | United States only | {other_country} only |
| Required for | US tax filing, banking, payroll | {other_country} tax compliance |
| Application | Form SS-4 to IRS | {other_country} tax authority |

### The Core Difference

An EIN identifies your business to the US government. A {other_name} identifies your business to the {other_country} government. If you operate in both countries, you need both numbers. One does not replace the other.
</Section>

<Section surface>
<Label>For {other_country} Entrepreneurs</Label>

## How {other_country} Entrepreneurs <Accent>Get a US EIN</Accent>

{other_country} entrepreneurs who form a US LLC or corporation need a US EIN. The IRS online application requires an SSN, which {other_country} residents do not have. The solution is to submit [Form SS-4](/ss4-form-guide/) by fax.

<ProcessSteps>
<ProcessStep step="1" title="Form Your US Entity">Register an LLC or corporation with a US state (Wyoming and Delaware are popular choices for non-residents).</ProcessStep>
<ProcessStep step="2" title="Complete Form SS-4">Fill out IRS Form SS-4 with your business information. Use your {other_country} passport number as your identifying number.</ProcessStep>
<ProcessStep step="3" title="Submit by Fax">Fax Form SS-4 to the IRS at 855-215-1627. Or use ein.so to handle the entire process for $49.</ProcessStep>
<ProcessStep step="4" title="Receive Your EIN">The IRS returns your EIN within 4-7 business days. ein.so delivers it to you by email.</ProcessStep>
</ProcessSteps>

Your existing {other_name} has no bearing on your US EIN application. The IRS does not ask for or verify foreign tax IDs. Your passport is sufficient identification.

{extra_links}

For more details, see our guide on [EIN for non-US residents](/ein-for-non-residents/) or [how to get an EIN without an SSN](/ein-without-ssn/).
</Section>

<Section>
<Label>Both Numbers</Label>

## Do You Need <Accent>Both Numbers?</Accent>

### You need an EIN if:
- You formed a US LLC or corporation
- You sell on US platforms (Amazon.com, Shopify US store)
- You need a US [business bank account](/ein-for-bank-account/)
- You hire US-based employees or contractors
- You file US tax returns

### You need a {other_name} if:
- You operate a business in {other_country}
- You have tax obligations in {other_country}
- You employ workers in {other_country}
- You sell goods or services in {other_country}

### You need both if:
- You operate businesses in both the US and {other_country}
- You are a {other_country} resident with a US LLC
- You earn income in both jurisdictions

Most {other_country} entrepreneurs expanding to the US already have a {other_name}. They add an EIN when they form their US business entity. The two numbers coexist without conflict.
</Section>

<Section wide>
<Label>Summary</Label>

## Summary: EIN vs {other_name}

| Question | Answer |
|----------|--------|
| Are they the same? | No. Different countries, different authorities |
| Can one replace the other? | No. Each is valid only in its own country |
| Do I need both? | Only if you operate in both countries |
| Which do I get first? | Whichever country you start your business in |
| Cost of EIN? | Free (IRS) or $49 (ein.so for non-residents) |

For more comparisons, see [EIN vs ITIN](/ein-vs-itin/), [EIN vs SSN](/ein-vs-ssn/), or [EIN vs Tax ID](/ein-vs-tax-id/).

Ready to get your US EIN? [Apply now for $49](/apply/).
</Section>
'''

    write_page_tsx(slug)
    write_content_md(slug, frontmatter, body)
    print(f"  Created {slug}")


# Generate remaining comparison pages
comparisons = [
    {
        "slug": "ein-vs-vat",
        "title": "EIN vs VAT Number: US vs International Tax IDs (2026)",
        "desc": "An EIN is a US federal tax ID from the IRS. A VAT number is a Value Added Tax registration used in the EU, UK, and 170+ countries. Learn the key differences.",
        "other_name": "VAT Number",
        "other_full": "Value Added Tax Identification Number",
        "other_digits": "varies (8-15 characters)",
        "other_format": "Country code + 8-12 digits (e.g., GB123456789)",
        "other_issuer": "national tax authorities (HMRC, EU member states)",
        "other_purpose": "consumption tax registration and collection",
        "other_country": "EU/UK/170+ countries",
        "extra_content": "VAT (Value Added Tax) is a consumption tax applied at each stage of production and distribution. Over 170 countries use VAT systems. The European Union, United Kingdom, Australia (GST), Canada (GST/HST), and India (GST) all operate VAT-style tax systems. Each country issues its own VAT registration number. In the EU, VAT numbers follow the format of the country code followed by 8-12 digits. In the UK, VAT numbers start with GB followed by 9 digits. The US does not have a VAT system. The US uses sales tax at the state and local level instead.",
        "extra_links": "For related comparisons, see [EIN vs GST](/ein-vs-gst/) or [EIN vs ABN](/ein-vs-abn/).",
    },
    {
        "slug": "ein-vs-abn",
        "title": "EIN vs ABN: US vs Australian Business Numbers (2026)",
        "desc": "An EIN is a US tax ID from the IRS. An ABN is an 11-digit Australian Business Number from the Australian Business Register. Compare both business identifiers.",
        "other_name": "ABN",
        "other_full": "Australian Business Number",
        "other_digits": "11",
        "other_format": "11 digits (e.g., 51 824 753 556)",
        "other_issuer": "Australian Business Register (ABR)",
        "other_purpose": "business identification and GST registration",
        "other_country": "Australia",
        "extra_content": "The ABN (Australian Business Number) is an 11-digit identifier issued by the Australian Business Register (ABR), operated by the Australian Taxation Office (ATO). The ABN was introduced on July 1, 2000, as part of Australia's New Tax System. Every business operating in Australia needs an ABN. It is used for GST (Goods and Services Tax) registration, invoicing, tax reporting, and business-to-business transactions. The ABN is free to obtain and can be applied for online at abr.gov.au. Australia has approximately 2.5 million active ABNs.",
        "extra_links": "For the Australia-specific EIN guide, see [EIN for Australian entrepreneurs](/ein-for-australia/).",
    },
    {
        "slug": "ein-vs-utr",
        "title": "EIN vs UTR: US vs UK Tax Reference Numbers (2026)",
        "desc": "An EIN is a US tax ID from the IRS. A UTR is a 10-digit Unique Taxpayer Reference from HMRC in the United Kingdom. Compare both tax identifiers.",
        "other_name": "UTR",
        "other_full": "Unique Taxpayer Reference",
        "other_digits": "10",
        "other_format": "10 digits (e.g., 1234567890)",
        "other_issuer": "HMRC (Her Majesty's Revenue and Customs)",
        "other_purpose": "tax identification for individuals and businesses",
        "other_country": "United Kingdom",
        "extra_content": "The UTR (Unique Taxpayer Reference) is a 10-digit number issued by HMRC (His Majesty's Revenue and Customs) to individuals and businesses in the United Kingdom for tax purposes. HMRC issues a UTR automatically when you register for Self Assessment or Corporation Tax. Unlike the US EIN which is only for businesses, the UK UTR is issued to both individuals and companies. Self-employed individuals, partnerships, trusts, and limited companies each receive a UTR. The UTR is used on all HMRC correspondence and tax returns.",
        "extra_links": "For the UK-specific EIN guide, see [EIN for UK entrepreneurs](/ein-for-uk/).",
    },
    {
        "slug": "ein-vs-pan",
        "title": "EIN vs PAN: US vs India Tax IDs Compared (2026)",
        "desc": "An EIN is a US tax ID from the IRS. A PAN is a 10-character alphanumeric ID from India's Income Tax Department. Compare both tax identifiers for cross-border business.",
        "other_name": "PAN",
        "other_full": "Permanent Account Number",
        "other_digits": "10-character alphanumeric",
        "other_format": "AAAAA9999A (5 letters + 4 digits + 1 letter)",
        "other_issuer": "Income Tax Department of India",
        "other_purpose": "income tax identification for individuals and entities",
        "other_country": "India",
        "extra_content": "The PAN (Permanent Account Number) is a 10-character alphanumeric identifier issued by the Income Tax Department of India under Section 139A of the Income Tax Act, 1961. The format is AAAAA9999A: 5 uppercase letters, 4 digits, and 1 uppercase letter. The fourth character indicates the PAN holder type: P for individual, C for company, H for HUF (Hindu Undivided Family), F for firm, A for AOP (Association of Persons), T for trust. India has issued over 600 million PANs. PAN is required for all financial transactions above specified thresholds, including bank account opening, property purchases, and vehicle registration.",
        "extra_links": "For the India-specific EIN guide, see [EIN for Indian entrepreneurs](/ein-for-india/).",
    },
    {
        "slug": "ein-vs-gst",
        "title": "EIN vs GST Number: US vs International Tax IDs (2026)",
        "desc": "An EIN is a US federal tax ID. A GST number is a Goods and Services Tax registration in India, Australia, Canada, and other countries. Compare both tax systems.",
        "other_name": "GST Number",
        "other_full": "Goods and Services Tax Identification Number",
        "other_digits": "varies (9-15 characters)",
        "other_format": "Varies by country (India: 15 digits, Australia: 11 digits, Canada: 9 digits + RT)",
        "other_issuer": "national tax authorities",
        "other_purpose": "consumption/value-added tax registration",
        "other_country": "India, Australia, Canada, and others",
        "extra_content": "GST (Goods and Services Tax) is a consumption tax used in India, Australia, Canada, New Zealand, Singapore, Malaysia, and other countries. Each country's GST system has a unique registration number format. In India, the GSTIN is 15 digits derived from the state code and PAN. In Australia, the GST is linked to the ABN (11 digits). In Canada, the GST/HST number is the Business Number (9 digits) plus an RT suffix. The US does not have a federal consumption tax. Instead, individual US states impose their own sales taxes, which are separate from the EIN system.",
        "extra_links": "For related comparisons, see [EIN vs VAT](/ein-vs-vat/) or [EIN vs ABN](/ein-vs-abn/).",
    },
    {
        "slug": "ein-vs-crn",
        "title": "EIN vs CRN: US EIN vs UK Company Registration (2026)",
        "desc": "An EIN is a US tax ID from the IRS. A CRN is an 8-digit Company Registration Number from UK Companies House. Compare both business identifiers.",
        "other_name": "CRN",
        "other_full": "Company Registration Number",
        "other_digits": "8",
        "other_format": "8 digits or 2 letters + 6 digits (e.g., 12345678 or SC123456)",
        "other_issuer": "Companies House",
        "other_purpose": "company registration and corporate identification",
        "other_country": "United Kingdom",
        "extra_content": "The CRN (Company Registration Number) is an 8-character identifier issued by Companies House when a company is incorporated in England, Wales, Scotland, or Northern Ireland. Companies registered in Scotland have numbers prefixed with SC. Northern Ireland companies use NI. The CRN is NOT a tax number — it is a company registration identifier. UK companies also need a UTR (Unique Taxpayer Reference) from HMRC for tax purposes. The CRN and UTR serve different functions: CRN identifies the company entity, UTR identifies it for tax purposes. In the US, the EIN serves both purposes (entity identification and tax identification).",
        "extra_links": "For the UK-specific EIN guide, see [EIN for UK entrepreneurs](/ein-for-uk/). For the tax comparison, see [EIN vs UTR](/ein-vs-utr/).",
    },
]

print("Generating remaining comparison pages...")
for comp in comparisons:
    generate_comparison_page(**comp)

print(f"\nGenerated {len(comparisons)} comparison pages")
print(f"Total comparison pages (including earlier 3): {len(comparisons) + 3}")
