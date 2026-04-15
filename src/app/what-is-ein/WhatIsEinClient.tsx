"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function WhatIsEinClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Complete Guide"
        title="What Is an EIN Number?"
        titleAccent="Complete Guide (2026)"
        description="Everything you need to know about Employer Identification Numbers: what they are, who needs one, how to apply, and how ein.so can help non-residents get one fast."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>An EIN (Employer Identification Number) is a unique 9-digit number issued by the Internal Revenue Service (IRS) to identify businesses operating in the United States for tax purposes.</strong>{" "}
                  Formatted as XX-XXXXXXX, an EIN functions as a business&apos;s federal tax ID. It is sometimes called a Federal Employer Identification Number (FEIN) or simply a Tax ID. Every business entity that hires employees, operates as a corporation or partnership, or files certain tax returns needs an EIN. The IRS issues EINs at no cost, and once assigned, an EIN is permanently tied to that entity.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                If you are starting a business, opening a US bank account, or hiring employees in the United States, you will almost certainly need an EIN. This comprehensive guide explains exactly what an EIN is, how the numbering system works, who needs one, and how to get one -- whether you are a US resident or an international entrepreneur operating from abroad.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Understanding your EIN is essential because it appears on virtually every federal tax document your business files. It is used by the IRS to track your business&apos;s tax obligations, and it is required by banks, payment processors, and other financial institutions before they will open accounts or process transactions on your behalf. Think of it as your business&apos;s Social Security Number -- a permanent identifier that follows your entity throughout its lifetime.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Does EIN Stand For? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Definition</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Does EIN <span className="font-display gradient-text">Stand For?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                EIN stands for <strong className="text-[var(--color-text)]">Employer Identification Number</strong>. It is a federal tax identification number assigned by the Internal Revenue Service (IRS) to business entities operating in the United States. The EIN system was established in 1974 as part of the IRS&apos;s efforts to create a standardized identification system for businesses, separate from the Social Security Number (SSN) system used for individuals.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                You may also hear an EIN referred to by several other names. The terms <strong className="text-[var(--color-text)]">Federal Employer Identification Number (FEIN)</strong>, <strong className="text-[var(--color-text)]">Federal Tax Identification Number</strong>, and <strong className="text-[var(--color-text)]">Tax ID Number (TIN)</strong> are all commonly used to describe the same thing. Regardless of which name is used, they all refer to the same 9-digit number issued by the IRS.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The EIN system exists because the IRS needs a reliable way to identify and track the tax obligations of millions of business entities across the country. Before the EIN system was formalized, tax administration for businesses was more cumbersome and error-prone. By assigning a unique number to each entity, the IRS can efficiently process tax returns, track payments, and enforce compliance. Today, over 30 million active EINs are in use across the United States.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                It is important to note that despite the word &quot;Employer&quot; in the name, you do not need to have employees to need an EIN. Many sole proprietors, single-member LLCs, and even trusts and estates are required to obtain an EIN for tax filing and banking purposes. The name is a historical artifact from when the primary use case was employer tax reporting.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN Number Format Explained */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Format</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              EIN Number Format <span className="font-display gradient-text">Explained</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                An EIN is a <strong className="text-[var(--color-text)]">9-digit number</strong> formatted as <strong className="text-[var(--color-text)]">XX-XXXXXXX</strong>. The first two digits are separated from the remaining seven by a hyphen. For example, a valid EIN might look like <span className="font-mono bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 rounded text-[var(--color-text)]">12-3456789</span>.
              </p>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6">
                <h3 className="text-base font-bold text-[var(--color-text)] mb-4">What the digits mean:</h3>
                <ul className="space-y-3 text-[var(--color-text-muted)]">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-xs font-bold">1</span>
                    <span><strong className="text-[var(--color-text)]">First two digits (prefix):</strong> Originally, the first two digits indicated the IRS campus (formerly called a &quot;service center&quot;) that issued the EIN. For example, prefixes 10-16 were assigned by the Andover campus, while 20-27 came from the Austin campus. Since 2001, the IRS has moved to centralized issuance, and the prefix is now assigned based on an internal algorithm rather than geographic location. However, the two-digit prefix still provides information about when and how the EIN was assigned.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-xs font-bold">2</span>
                    <span><strong className="text-[var(--color-text)]">Remaining seven digits (serial):</strong> These seven digits are a sequential serial number assigned by the IRS within each prefix group. Together with the prefix, they create a unique identifier for each business entity.</span>
                  </li>
                </ul>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The EIN format is intentionally similar to the SSN format (which is XXX-XX-XXXX) in that both are 9-digit numbers, but they use different hyphenation patterns. This distinction helps prevent confusion between the two types of identifiers. An EIN always has the hyphen after the second digit, while an SSN has hyphens after the third and fifth digits.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a deeper dive into valid EIN prefixes and how to verify your EIN format, refer to the IRS documentation on <span className="font-semibold">EIN number format</span>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who Issues EIN Numbers? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Issuing Authority</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Who Issues <span className="font-display gradient-text">EIN Numbers?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                EINs are issued exclusively by the <strong className="text-[var(--color-text)]">Internal Revenue Service (IRS)</strong>, which is a bureau of the United States Department of the Treasury. No other government agency, state authority, or private organization has the authority to issue an EIN. Any service that claims to &quot;issue&quot; an EIN is actually filing the application with the IRS on your behalf -- the EIN itself always comes from the IRS.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS offers several methods for obtaining an EIN, depending on your circumstances:
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Online (EIN Assistant)</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Available only to US residents with a valid SSN or ITIN. The EIN is issued immediately upon completion. This is the fastest method but is restricted to applicants who can verify their identity through an SSN or ITIN.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Fax (Form SS-4)</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Available to all applicants, including non-US residents. Fax the completed Form SS-4 to the IRS at <strong>855-215-1627</strong>. Processing typically takes 4-7 business days. This is the primary method for non-residents.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Phone</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">International applicants can call the IRS Business &amp; Specialty Tax Line at <strong>267-941-1099</strong> (not a toll-free number) Monday through Friday, 6:00 AM to 11:00 PM Eastern Time. An EIN can be issued during the call.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Mail (Form SS-4)</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">You can mail your completed Form SS-4 to the IRS. Processing takes approximately 4-6 weeks. This is the slowest method and is generally not recommended unless other methods are unavailable.</p>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Regardless of which method you use, the EIN is always free when obtained directly from the IRS. Be wary of websites that charge hundreds of dollars for what is fundamentally a free government service. At ein.so, we charge only <strong className="text-[var(--color-text)]">$49</strong> for our service because we are handling the SS-4 preparation and fax filing process on your behalf -- not for the EIN itself.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN vs SSN vs ITIN vs TIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-4">
              EIN vs SSN vs ITIN <span className="font-display gradient-text">vs TIN</span>
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              The US tax system uses several types of identification numbers. Each serves a different purpose and is issued to a different group of people or entities. Understanding the distinctions is important because using the wrong number on a tax form or bank application can cause delays, rejections, or compliance issues.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-navy)] text-white">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="text-left p-4 font-bold">EIN</th>
                    <th className="text-left p-4 font-bold">SSN</th>
                    <th className="text-left p-4 font-bold">ITIN</th>
                    <th className="text-left p-4 font-bold">TIN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Full Name</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Employer Identification Number</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Social Security Number</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Individual Taxpayer Identification Number</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Taxpayer Identification Number (umbrella term)</td>
                  </tr>
                  <tr className="bg-[var(--color-surface)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Digits</td>
                    <td className="p-4 text-[var(--color-text-muted)]">9 (XX-XXXXXXX)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">9 (XXX-XX-XXXX)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">9 (9XX-XX-XXXX)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Varies by type</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Issued To</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Businesses &amp; entities</td>
                    <td className="p-4 text-[var(--color-text-muted)]">US citizens &amp; authorized residents</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Non-residents &amp; residents not eligible for SSN</td>
                    <td className="p-4 text-[var(--color-text-muted)]">All taxpayers (general category)</td>
                  </tr>
                  <tr className="bg-[var(--color-surface)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Issued By</td>
                    <td className="p-4 text-[var(--color-text-muted)]">IRS</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Social Security Administration</td>
                    <td className="p-4 text-[var(--color-text-muted)]">IRS</td>
                    <td className="p-4 text-[var(--color-text-muted)]">IRS / SSA</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Primary Purpose</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Business tax reporting</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Personal tax &amp; social security benefits</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Individual tax reporting (no work authorization)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">General tax identification</td>
                  </tr>
                  <tr className="bg-[var(--color-surface)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Cost</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                A <strong className="text-[var(--color-text)]">TIN (Taxpayer Identification Number)</strong> is not a specific number type -- it is an umbrella term that encompasses EINs, SSNs, ITINs, and other identification numbers used for tax purposes. When a form asks for your &quot;TIN,&quot; you should provide whichever number is appropriate for your situation: your EIN for business-related filings, or your SSN/ITIN for individual filings.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For more detailed comparisons, see our dedicated guide on{" "}
                <Link href="/ein-vs-itin/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN vs ITIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who Needs an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Who Needs <span className="font-display gradient-text">an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS requires certain business entities and organizations to have an EIN. Even if it is not strictly required for your situation, having an EIN can be beneficial for separating your personal and business finances. Here is a comprehensive list of entities and situations that require an EIN:
              </p>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.06}>
                {[
                  { title: "Corporations", desc: "All C-corps and S-corps must have an EIN, regardless of whether they have employees." },
                  { title: "Partnerships", desc: "General partnerships, limited partnerships, and LLPs all require an EIN for tax filing." },
                  { title: "Multi-Member LLCs", desc: "Any LLC with two or more members must obtain an EIN. Single-member LLCs may also need one." },
                  { title: "Single-Member LLCs", desc: "Required if the LLC has employees or files excise tax returns. Recommended even if not required." },
                  { title: "Sole Proprietors with Employees", desc: "If you hire even one employee, you need an EIN for payroll tax reporting." },
                  { title: "Non-Profit Organizations", desc: "501(c)(3) organizations and other non-profits need an EIN to apply for tax-exempt status." },
                  { title: "Trusts & Estates", desc: "Irrevocable trusts and estates of deceased individuals require an EIN for tax administration." },
                  { title: "Farmers' Cooperatives", desc: "Agricultural cooperatives need an EIN for federal tax purposes." },
                  { title: "Plan Administrators", desc: "Retirement plan administrators (such as 401(k) plans) need an EIN for plan reporting." },
                  { title: "Foreign-Owned US Entities", desc: "Any US business owned by non-US residents must have an EIN for tax compliance." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] card-hover h-full">
                      <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Even if you are a sole proprietor without employees, many banks require an EIN to open a business bank account. Payment processors like Stripe and PayPal also frequently ask for an EIN when setting up business accounts. Having an EIN helps establish your business as a separate entity and protects your SSN from being shared on business documents.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a complete breakdown of every situation that requires an EIN, see our <Link href="/faq/" className="text-[var(--color-blue)] hover:underline font-semibold">FAQ</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Get an EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How to Get <span className="font-display gradient-text">an EIN</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process for obtaining an EIN depends on whether you are a US resident with a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN), or a non-US resident without either. Both paths ultimately result in the same 9-digit EIN, but the application methods differ significantly.
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US Residents (with SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Visit the IRS EIN Assistant at <strong className="text-[var(--color-text)]">irs.gov</strong></li>
                  <li>Select your entity type (LLC, corporation, sole proprietor, etc.)</li>
                  <li>Enter your personal information including your SSN or ITIN</li>
                  <li>Provide your business details (name, address, type of activity)</li>
                  <li>Submit the application and receive your EIN <strong className="text-[var(--color-text)]">immediately</strong></li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">The online application is available Monday through Friday, 7:00 AM to 10:00 PM Eastern Time.</p>
              </div>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Residents (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete <strong className="text-[var(--color-text)]">IRS Form SS-4</strong> (Application for Employer Identification Number)</li>
                  <li>Fax the completed form to the IRS at <strong className="text-[var(--color-text)]">855-215-1627</strong></li>
                  <li>Wait approximately 4-7 business days for processing</li>
                  <li>Receive your EIN via fax from the IRS</li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">Alternatively, you can call the IRS at <strong>267-941-1099</strong> to apply by phone during business hours.</p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Getting the SS-4 form right is critical. Common errors -- such as selecting the wrong entity type, entering an incorrect address format, or leaving required fields blank -- can result in the IRS rejecting your application, which means starting the process over and waiting another week or more. This is one of the main reasons non-residents choose to use a service like ein.so to handle the filing.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a complete step-by-step walkthrough of the application process, see our{" "}
                <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                  how to get an EIN guide
                </Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Can Non-Residents Get an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Non-Residents</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Can Non-Residents <span className="font-display gradient-text">Get an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Yes, absolutely.</strong> Non-US residents can and do obtain EINs from the IRS. In fact, if you are a foreign person or entity that has US tax obligations -- such as owning a US-based LLC, investing in US real estate, or earning income from US sources -- you are <em>required</em> to have an EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The challenge for non-residents is that the IRS online EIN application (the EIN Assistant) requires an SSN or ITIN to verify the applicant&apos;s identity. If you do not have either of these numbers, you cannot use the online system. This leaves two options:
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Option 1: File Form SS-4 by Fax</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Complete Form SS-4 and fax it to the IRS at <strong className="text-[var(--color-text)]">855-215-1627</strong>. This is the most common method for non-residents. Processing takes approximately 4-7 business days, after which the IRS will fax back your EIN assignment letter. The form must be filled out correctly, as errors will result in rejection and delays.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Option 2: Call the IRS International Line</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Call <strong className="text-[var(--color-text)]">267-941-1099</strong> during IRS business hours (Monday-Friday, 6:00 AM - 11:00 PM Eastern Time). Be prepared for potentially long wait times, especially during peak periods. The IRS agent will walk through the SS-4 questions over the phone and can issue your EIN during the call.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/30 rounded-2xl p-6">
                <h3 className="text-base font-bold text-[var(--color-text)] mb-2">How ein.so Helps</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  We handle the entire SS-4 filing process for non-residents. You provide your information, we prepare and fax the form to the IRS, and we deliver your EIN by email. Our Standard service is <strong className="text-[var(--color-text)]">$49</strong> (14 business days) and our Express service is <strong className="text-[var(--color-text)]">$97</strong> (7 business days). No SSN required, no navigating IRS phone trees, no fax machine needed.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For more information about the non-resident EIN process, visit our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">How to Get an EIN</Link> guide.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN Format Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Deep Dive</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              EIN Format <span className="font-display gradient-text">Details</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Understanding EIN format details can help you verify that an EIN is valid and identify potential errors before submitting it on tax forms or bank applications. A valid EIN must satisfy several criteria: it must be exactly 9 digits, the first two digits (the prefix) must fall within a range that the IRS has actually used, and it must follow the XX-XXXXXXX formatting convention.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS has used a specific set of two-digit prefixes over the years. Some prefixes were retired as the IRS consolidated its processing centers, while newer prefixes have been introduced for online and centralized issuance. Prefixes starting with 20, 26, 27, 45, 46, and 47 are among those assigned to more recent internet-based applications. If you see an EIN with a prefix that does not match any known IRS campus or assignment method, it may be invalid.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN will appear on several important documents, including your IRS confirmation letter (CP 575), your annual tax returns (Form 1120 for corporations, Form 1065 for partnerships, etc.), W-2 and 1099 forms you issue to employees and contractors, and any correspondence you receive from the IRS. Always double-check that your EIN is correctly formatted on these documents to avoid processing delays.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                It is also worth noting that EINs do not expire. Once the IRS assigns an EIN to your entity, that number is permanently yours. However, the IRS may <strong className="text-[var(--color-text)]">deactivate an EIN</strong> if it has not been used on any federal tax filing for three or more consecutive years. A deactivated EIN is not deleted -- it can potentially be reactivated by contacting the IRS and filing the appropriate returns.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a comprehensive reference on valid prefixes and format validation, refer to the IRS documentation on <span className="font-semibold">EIN number format</span>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Summary</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Key <span className="font-display gradient-text">Takeaways</span>
            </h2>

            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
              <ul className="space-y-4 text-[var(--color-text-muted)]">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>An <strong className="text-[var(--color-text)]">EIN (Employer Identification Number)</strong> is a 9-digit number in the format XX-XXXXXXX, issued by the IRS to identify business entities.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>EINs are also called <strong className="text-[var(--color-text)]">FEIN, Federal Tax ID, or Tax Identification Number</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Only the <strong className="text-[var(--color-text)]">IRS</strong> issues EINs. They are always free when obtained directly from the IRS.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>US residents with an SSN/ITIN can apply <strong className="text-[var(--color-text)]">online for free</strong> and receive their EIN immediately.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Non-residents must use <strong className="text-[var(--color-text)]">Form SS-4 by fax (855-215-1627)</strong> or phone (267-941-1099).</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>EINs <strong className="text-[var(--color-text)]">do not expire</strong>, but can be deactivated after 3+ years of non-use on federal filings.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Corporations, partnerships, LLCs, non-profits, trusts, estates, and sole proprietors with employees all need an EIN.</span>
                </li>
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">FAQ</p>
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
                    <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">
              Continue <span className="font-display gradient-text">Reading</span>
            </h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              { label: "How to Get an EIN", href: "/how-to-get-ein/" },
              { label: "EIN vs ITIN", href: "/ein-vs-itin/" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
            {[
              "EIN vs SSN",
              "EIN vs Tax ID",
              "Who Needs an EIN?",
              "EIN Number Format",
              "EIN for Non-Residents",
            ].map((label) => (
              <StaggerItem key={label}>
                <span className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
                  {label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need an EIN? We Handle Everything."
        subtitle="Non-US resident? We file Form SS-4 with the IRS and deliver your EIN by email. Just $49."
      />
    </>
  );
}
