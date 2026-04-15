"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function SCorpElectionClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Tax Election Guide"
        title="S-Corp Election:"
        titleAccent="Form 2553 Filing Guide (2026)"
        description="Electing S-Corp status can save you thousands in self-employment taxes each year. This guide covers Form 2553 instructions, deadlines, qualification requirements, tax benefits, and why you need an EIN before filing."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>To elect S-Corp status, file Form 2553 (Election by a Small Business Corporation) with the IRS within 75 days of formation or by March 15 for existing entities. S-Corp status lets you split income into salary and distributions, saving 15.3% self-employment tax on the distribution portion. You need an EIN before filing Form 2553.</strong>{" "}
                Only US citizens and resident aliens qualify as S-Corp shareholders.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Is S-Corp Election? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an S-Corp Election and Why <span className="font-display gradient-text">Does It Matter?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An S-Corp election is a tax classification choice made by filing IRS Form 2553. It does not create a new type of business entity. Instead, it changes how the IRS taxes your existing corporation or LLC. Without the election, a corporation is taxed as a C-Corp (double taxation on corporate profits and shareholder dividends) and an LLC is taxed as a sole proprietorship or partnership. With the S-Corp election, your entity is taxed as a pass-through entity with a critical difference: you can split income between salary and distributions.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The S-Corp election matters because of self-employment tax. As a sole proprietor or single-member LLC without the election, you pay self-employment tax (Social Security and Medicare, totaling 15.3%) on all net business income. With S-Corp status, you pay yourself a reasonable salary (which is subject to employment tax) and take the remaining profits as distributions (which are not subject to self-employment tax). For profitable businesses, this saves thousands of dollars annually.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The S-Corp election is one of the most commonly used tax optimization strategies for small businesses in the United States. It works best for businesses earning at least $50,000 to $60,000 in annual profit, where the tax savings on distributions outweigh the additional costs of S-Corp compliance (payroll processing, additional tax returns, and reasonable salary documentation). For a deeper look at{" "}
                  <Link href="/ein-for-scorp/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    getting an EIN for an S-Corp
                  </Link>, see our dedicated guide.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Form 2553 Instructions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You File Form 2553 <span className="font-display gradient-text">Step by Step?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 1: Get Your EIN</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Form 2553 requires your entity&apos;s EIN in the header. If you do not have an EIN yet, obtain one before filing. US residents can apply online at irs.gov. Non-residents file Form SS-4 by fax, or use ein.so for <strong className="text-[var(--color-text)]">$49</strong> (Standard, 14 days) or <strong className="text-[var(--color-text)]">$97</strong> (Express, 7 days). See our guide on{" "}
                    <Link href="/ein-for-corporation/" className="text-[var(--color-blue)] hover:underline font-semibold">
                      EIN for corporations
                    </Link>.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 2: Complete Part I of Form 2553</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Enter your corporation or LLC name, EIN, address, date incorporated or formed, state of incorporation, and the tax year you want the S-Corp election to begin. Select the effective date carefully: it must fall within the 75-day window or the beginning of the tax year if you are filing by March 15.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 3: Get All Shareholders to Sign</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Every shareholder must consent to the S-Corp election by signing the form. Part I includes a shareholder consent section where each shareholder lists their name, address, SSN, number of shares, date acquired, and tax year end. If there are more shareholders than the form accommodates, attach a continuation sheet with the same information and signatures.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 4: Complete Parts II-IV (If Applicable)</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Part II applies if you want a fiscal year end different from December 31. Part III applies if you are making a qualified Subchapter S trust (QSST) election. Part IV applies if you are making a late election and need to provide a reasonable cause statement. Most small businesses only need to complete Part I.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 5: Mail or Fax to the IRS</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Mail Form 2553 to the IRS service center for your state (listed in the Form 2553 instructions) or fax it to (855) 887-7734. Keep a copy of the signed form and your proof of mailing or fax confirmation. The IRS sends an acceptance letter (CP261) within 60 days confirming your S-Corp election. If you do not receive confirmation, call (800) 829-4933.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Are the Form 2553 Filing <span className="font-display gradient-text">Deadlines?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  There are two primary deadlines for filing Form 2553. For new entities that want S-Corp status from the date of formation, you must file within <strong className="text-[var(--color-text)]">75 days</strong> of formation. This means if you formed your LLC or corporation on January 15, your deadline is March 31. If you miss this window, the S-Corp election takes effect the following tax year instead.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For existing entities that want S-Corp status starting the next tax year, the deadline is <strong className="text-[var(--color-text)]">March 15</strong> of the year before the election takes effect. For example, to have S-Corp status for tax year 2027, you must file Form 2553 by March 15, 2027. Filing after March 15 means the election does not take effect until tax year 2028 (unless you qualify for late election relief).
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you miss both deadlines, all is not lost. The IRS grants late election relief under Revenue Procedure 2013-30 if you file within 3 years and 75 days of the intended effective date. You must include a reasonable cause statement explaining why you filed late. Common acceptable reasons include reliance on a tax professional who failed to file, administrative oversight, or not being aware of the election requirement. The IRS approves late elections frequently when reasonable cause is demonstrated.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Much Tax Does S-Corp Election <span className="font-display gradient-text">Actually Save?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The primary tax benefit of S-Corp election is the reduction in self-employment tax. Self-employment tax consists of Social Security tax (12.4% on income up to $168,600 in 2026) and Medicare tax (2.9% on all income, plus 0.9% Additional Medicare Tax on income over $200,000). Without S-Corp status, all net business income is subject to this combined 15.3% tax.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  With S-Corp status, you split your business income into two streams. First, you pay yourself a &quot;reasonable salary&quot; that is subject to employment taxes. Second, you take the remaining profit as distributions that are not subject to self-employment tax. For example, if your business nets $150,000 and you pay yourself a $70,000 salary, the $80,000 in distributions avoids the 15.3% self-employment tax. That is a savings of approximately <strong className="text-[var(--color-text)]">$12,240 per year</strong>.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The &quot;reasonable salary&quot; requirement is critical. The IRS requires that you pay yourself a salary that is comparable to what someone in your role and industry would earn. You cannot pay yourself a $10,000 salary on $200,000 in profits just to minimize employment taxes. The IRS audits S-Corp salary levels, and paying an unreasonably low salary triggers penalties and back taxes. Most tax advisors recommend setting salary at 40% to 60% of total business income for most small businesses.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Who Qualifies? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Who Qualifies for <span className="font-display gradient-text">S-Corp Status?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS imposes strict eligibility requirements for S-Corp status. Your entity must meet all of the following criteria: it must be a domestic entity (formed in the United States), it must have no more than 100 shareholders, all shareholders must be individuals, certain trusts, or estates (no corporations, partnerships, or LLCs as shareholders), no shareholder can be a non-resident alien, and the entity can have only one class of stock.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The non-resident alien restriction is particularly important for international entrepreneurs. If any shareholder of your corporation or any member of your LLC is not a US citizen or US resident alien, you cannot elect S-Corp status. This means most foreign-owned US businesses must be taxed as either a C-Corp (for corporations) or a partnership/disregarded entity (for LLCs). See our guide on{" "}
                  <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    who needs an EIN
                  </Link>{" "}
                  for entity-specific guidance.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The one-class-of-stock rule means all shares must confer identical rights to distributions and liquidation proceeds. You can have voting and non-voting shares (these are not considered different classes), but you cannot have shares with different economic rights. Straight debt that meets certain requirements is also not treated as a second class of stock.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* EIN Requirements */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Why Do You Need an EIN Before Filing <span className="font-display gradient-text">Form 2553?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Form 2553 requires your entity&apos;s EIN in the identification section at the top of the form. The IRS uses the EIN to match your S-Corp election to your entity&apos;s tax account. Without an EIN, the IRS cannot process your Form 2553. This makes obtaining an EIN the essential first step before making the S-Corp election.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Given the 75-day deadline for new entities, timing matters. If you form your LLC or corporation and need S-Corp status from day one, you should apply for your EIN immediately after formation. US residents can get an EIN online in minutes. Non-residents filing by fax need 7 to 14 business days (or 7 days with ein.so Express). Factor this processing time into your 75-day deadline calculation.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  ein.so helps you get your EIN quickly so you can file Form 2553 on time. Our Standard service delivers your EIN in 14 business days for <strong className="text-[var(--color-text)]">$49</strong>. Our Express service delivers in 7 business days for <strong className="text-[var(--color-text)]">$97</strong>. Once you have your EIN, you can immediately complete and file Form 2553. Do not let the EIN processing time eat into your 75-day S-Corp election window.{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    Apply for your EIN today
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </AnimateIn>
          <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="bg-white rounded-2xl border border-[var(--color-border)] group">
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">Related Guides</h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              { label: "EIN for Corporation", href: "/ein-for-corporation/" },
              { label: "EIN for S-Corp", href: "/ein-for-scorp/" },
              { label: "Who Needs an EIN?", href: "/who-needs-ein/" },
              { label: "Apply for EIN", href: "/apply/" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
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
        title="Get Your EIN Before the S-Corp Deadline"
        subtitle="$49. Fast EIN delivery so you can file Form 2553 on time."
      />
    </>
  );
}
