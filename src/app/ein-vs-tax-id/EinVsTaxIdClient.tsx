"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const comparisonRows = [
  { label: "Full Name", ein: "Employer Identification Number", ssn: "Social Security Number", itin: "Individual Taxpayer Identification Number" },
  { label: "Type", ein: "Business Tax ID", ssn: "Personal Tax ID", itin: "Personal Tax ID" },
  { label: "Purpose", ein: "Identifies a business entity for IRS and banking", ssn: "Identifies a US citizen or authorized worker", itin: "Identifies a tax filer without SSN eligibility" },
  { label: "Who Gets It", ein: "LLCs, corporations, partnerships, nonprofits, trusts, estates", ssn: "US citizens, permanent residents, authorized work-visa holders", itin: "Non-residents, dependents, and spouses without SSN eligibility" },
  { label: "Format", ein: "XX-XXXXXXX", ssn: "XXX-XX-XXXX", itin: "9XX-XX-XXXX" },
  { label: "Issued By", ein: "IRS", ssn: "Social Security Administration (SSA)", itin: "IRS" },
  { label: "Application Form", ein: "Form SS-4", ssn: "Form SS-5", itin: "Form W-7" },
  { label: "Cost", ein: "Free from IRS", ssn: "Free from SSA", itin: "Free from IRS" },
  { label: "Processing Time", ein: "Instant (online) or 4-7 days (fax)", ssn: "2-4 weeks", itin: "6-11 weeks" },
  { label: "Available to Non-Residents?", ein: "Yes (via fax)", ssn: "No", itin: "Yes" },
  { label: "Used for Business Taxes?", ein: "Yes", ssn: "Only sole proprietors without EIN", itin: "No" },
  { label: "Used for Personal Taxes?", ein: "No", ssn: "Yes", itin: "Yes" },
  { label: "Expires?", ein: "Never", ssn: "Never", itin: "After 3 years of non-use" },
];

export default function EinVsTaxIdClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Comparison Guide"
        title="EIN vs Tax ID:"
        titleAccent="Are They the Same? (2026)"
        description="Tax ID is an umbrella term. EIN is one specific type of Tax ID. Understanding the relationship between these terms prevents confusion when filing taxes, opening bank accounts, or applying for business licenses."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>An EIN is a type of Tax ID, but they are not the same thing. &quot;Tax ID&quot; (or TIN, Taxpayer Identification Number) is the umbrella term the IRS uses for all identification numbers assigned for tax purposes. EIN, SSN, and ITIN are all types of Tax IDs. Your business needs an EIN. You personally need an SSN or ITIN.</strong>{" "}
                When someone says &quot;Tax ID&quot; in a business context, they almost always mean the EIN.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              EIN vs SSN vs ITIN: Complete <span className="font-display gradient-text">Tax ID Comparison</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              All three are types of Tax IDs (TINs). Here is how they differ across every key dimension.
            </p>
          </AnimateIn>

          <AnimateIn className="max-w-5xl mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[var(--color-navy)]">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-white/70 w-1/5">Feature</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-blue-glow)] w-[26.6%]">EIN</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] w-[26.6%]">SSN</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-emerald-400 w-[26.6%]">ITIN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
                    >
                      <td className="px-5 py-4 font-semibold text-[var(--color-text)]">{row.label}</td>
                      <td className="px-5 py-4 text-[var(--color-text-muted)]">{row.ein}</td>
                      <td className="px-5 py-4 text-[var(--color-text-muted)]">{row.ssn}</td>
                      <td className="px-5 py-4 text-[var(--color-text-muted)]">{row.itin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* All US Tax ID Types Table */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                All 5 US Tax ID Types: <span className="font-display gradient-text">Complete Reference</span>
              </h2>
              <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
                The IRS recognizes exactly 5 types of Taxpayer Identification Numbers. Here is every one with key details.
              </p>
            </AnimateIn>

            <AnimateIn>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Tax ID Type</th><th className="px-4 py-3 font-semibold">Full Name</th><th className="px-4 py-3 font-semibold">Format</th><th className="px-4 py-3 font-semibold">Issued By</th><th className="px-4 py-3 font-semibold">Who Gets It</th></tr></thead>
                  <tbody>
                    {[
                      { type: "EIN", name: "Employer Identification Number", format: "XX-XXXXXXX", issuer: "IRS (Form SS-4)", who: "LLCs, corporations, partnerships, nonprofits, trusts" },
                      { type: "SSN", name: "Social Security Number", format: "XXX-XX-XXXX", issuer: "SSA (Form SS-5)", who: "US citizens, permanent residents, authorized workers" },
                      { type: "ITIN", name: "Individual Taxpayer ID Number", format: "9XX-XX-XXXX", issuer: "IRS (Form W-7)", who: "Non-residents and dependents without SSN eligibility" },
                      { type: "ATIN", name: "Adoption Taxpayer ID Number", format: "XXX-XX-XXXX", issuer: "IRS (Form W-7A)", who: "Children in pending US adoption without SSN" },
                      { type: "PTIN", name: "Preparer Tax ID Number", format: "P-XXXXXXXX", issuer: "IRS (online)", who: "Paid tax return preparers (mandatory since 2011)" },
                    ].map((row, i) => (
                      <tr key={row.type} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                        <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.type}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.name}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.format}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.issuer}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What Is a Tax ID (TIN)? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Exactly Is a <span className="font-display gradient-text">Tax ID Number?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS processes over 250 million tax returns annually, each tied to a TIN. A Tax ID (Taxpayer Identification Number, or TIN) is any identification number the IRS uses to track tax obligations and filings. The IRS recognizes 5 types of TINs, each serving a different population. The three most common are the EIN for businesses (36 million active), the SSN for US citizens and authorized workers (460 million issued), and the ITIN for individuals who need to file taxes but do not qualify for an SSN (4.7 million active).
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">TIN as an Umbrella Category</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The term &quot;Tax ID&quot; is intentionally broad. When a bank asks for your &quot;Tax ID,&quot; they want whichever number applies to your situation: an EIN for a business account, or an SSN/ITIN for a personal account. When a vendor asks for your &quot;Tax ID&quot; on a W-9 form, they want the identification number you use for tax reporting, whether that is your EIN or SSN. Understanding that Tax ID is a category, not a specific number, prevents confusion in these common business interactions.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Tax ID Numbers by the Numbers</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS issued 5.3 million new EINs in fiscal year 2024. The SSA assigns approximately 5.5 million new SSNs per year. The IRS processes 4.4 million ITIN applications annually. Over 800,000 PTINs are active for paid tax preparers. ATINs are issued to fewer than 50,000 adoptive families per year. Combined, the TIN system covers every individual and entity that interacts with US tax obligations.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For a deeper dive into the differences between EIN and individual tax IDs, see our guides on{" "}
                  <Link href="/ein-vs-itin/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN vs ITIN
                  </Link>{" "}
                  and{" "}
                  <Link href="/ein-vs-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN vs SSN
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Why Do People Confuse EIN and Tax ID? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Why Do People Confuse EIN and <span className="font-display gradient-text">Tax ID?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  92% of business owners surveyed by SCORE in 2023 used &quot;Tax ID&quot; and &quot;EIN&quot; interchangeably. The confusion stems from how the terms are used in everyday business. When business owners talk about their &quot;Tax ID,&quot; they usually mean their EIN. When banks, payment processors, and government agencies ask for a &quot;Federal Tax ID,&quot; they mean the EIN for business accounts. This informal shorthand makes &quot;Tax ID&quot; and &quot;EIN&quot; seem interchangeable, even though Tax ID is technically the broader category.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">IRS Form Ambiguity</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS itself uses the term &quot;Taxpayer Identification Number&quot; (TIN) as the umbrella category in official documents, but forms and instructions sometimes use &quot;Tax ID&quot; or &quot;Federal Tax ID&quot; loosely. For example, the W-9 form asks for your &quot;Taxpayer Identification Number,&quot; which could be an EIN, SSN, or ITIN depending on your entity type. Over 30 million W-9 forms are submitted annually, making this the most common source of Tax ID confusion.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">The Simple Rule</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The simplest way to remember: if you are filling out a form for your business, your Tax ID is your EIN. If you are filling out a form for yourself as an individual, your Tax ID is your SSN or ITIN. The form context tells you which type of Tax ID to provide. For more on this relationship, see our{" "}
                  <Link href="/ein-vs-tin/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN vs TIN comparison
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Which Tax ID Does Your Business Need? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Which Tax ID Does Your <span className="font-display gradient-text">Business Need?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">LLC, Corporation, or Partnership</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    You need an EIN. There is no alternative. Every multi-member entity, corporation, and partnership must have an EIN for tax filing, banking, and hiring. Apply through the IRS online (if you have an SSN) or by fax through ein.so (if you do not).
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Sole Proprietor</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    You can use your SSN, but you should get an EIN. Using an EIN keeps your SSN off W-9 forms, invoices, and business documents. It also makes you look more professional and enables business credit building. Getting an EIN as a sole proprietor is free and takes minutes.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Non-US Resident Starting a US Business</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    You need an EIN for your business entity and may also need an ITIN for personal tax filing. The EIN comes first because you need it to open a bank account and start operating. ein.so handles the EIN application for non-residents at <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express).
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Nonprofit or Tax-Exempt Organization</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    You need an EIN to apply for 501(c)(3) tax-exempt status, open organizational bank accounts, file Form 990, and accept tax-deductible donations. The EIN must be obtained before filing Form 1023 or 1023-EZ with the IRS.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* How to Get Your Business Tax ID */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Get Your Business <span className="font-display gradient-text">Tax ID (EIN)?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Application Methods and Processing Times</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Getting an EIN is straightforward. US residents with an SSN can apply online at irs.gov and receive their EIN instantly. Non-residents without an SSN apply by filing Form SS-4 by fax. The IRS does not charge for EIN applications regardless of method. Over 73% of applications are submitted online, with 100% receiving instant issuance. Fax applications take 4-14 business days. Mail applications take 4-6 weeks. The only cost is your time and effort in completing the form correctly.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  ein.so simplifies the fax process for non-residents. We prepare your Form SS-4, fax it to the IRS, and deliver your EIN to your WhatsApp or email. Standard processing takes 14 business days for <strong className="text-[var(--color-text)]">$49</strong>. Express processing takes 7 business days for <strong className="text-[var(--color-text)]">$97</strong>. Both plans include pre-submission review to prevent rejections and resubmission at no extra charge if the IRS returns an error.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Once you receive your EIN, it is permanent. You use it for the lifetime of your business entity. It never expires, and the IRS never reuses it. Store your EIN confirmation letter (CP 575) safely, as it is the official proof that the IRS assigned this number to your entity. Learn more about{" "}
                  <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    what an EIN is
                  </Link>{" "}
                  or{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    apply for your EIN today
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </AnimateIn>
          <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-base font-bold text-[var(--color-text)]">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">Related Guides</h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              { label: "EIN vs ITIN", href: "/ein-vs-itin/" },
              { label: "EIN vs SSN", href: "/ein-vs-ssn/" },
              { label: "EIN vs TIN", href: "/ein-vs-tin/" },
              { label: "What Is an EIN?", href: "/what-is-ein/" },
              { label: "Apply for EIN", href: "/apply/" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
                >
                  {link.label}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Get Your Business Tax ID (EIN)"
        subtitle="$49. No SSN required. We file Form SS-4 and deliver your EIN."
      />
    </>
  );
}
