"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForScorpClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="S-Corporations"
        title="EIN for S-Corp:"
        titleAccent="How to Apply After S-Corp Election (2026)"
        description="S-Corps use the same EIN as the original entity. You do not need a new EIN after filing Form 2553. Learn how the EIN works with S-Corp election, when you do need a new one, and eligibility requirements."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>You do not need a new EIN when you elect S-Corp status. Filing Form 2553 changes your tax classification, not your entity. Your corporation or LLC keeps the same EIN it received when it was first formed.</strong>{" "}
                  Every S-Corp does need an EIN -- but you get it when the entity is created, not when you make the S-Corp election. If you are forming a new entity that will elect S-Corp status, apply for the EIN as a corporation or LLC first, then file Form 2553 separately.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                The relationship between EINs and S-Corp elections causes significant confusion. Business owners frequently search for &quot;EIN for S-Corp&quot; expecting a special application process. There is none. The S-Corp election is a tax classification choice made on Form 2553 -- it is separate from the EIN application. This guide clears up the confusion and explains exactly how EINs work with S-Corp status.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For the corporation EIN application process, see our <Link href="/ein-for-corporation/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for corporation guide</Link>. For a broader overview, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs an EIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The Key Rule */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Core Rule</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Doesn&apos;t S-Corp Election <span className="font-display gradient-text">Require a New EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS assigns EINs to entities, not to tax classifications. When you file Form 2553, you are changing how the IRS taxes your entity -- you are not creating a new entity. The corporation or LLC that received the original EIN continues to exist. Only the tax treatment changes.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Think of it this way: your EIN is your entity&apos;s Social Security number. When a person gets married and changes their tax filing status from single to married filing jointly, they do not get a new SSN. Similarly, when your corporation changes from C-Corp taxation to S-Corp taxation, it does not get a new EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS processes the S-Corp election internally. After accepting your Form 2553, the IRS updates your entity&apos;s tax account to reflect the new classification. Your EIN stays the same. Your bank accounts, contracts, and vendor relationships are unaffected. The only visible change is the tax return form: you file Form 1120-S (S-Corp return) instead of Form 1120 (C-Corp return).
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For S-Corp election details, see our <Link href="/s-corp-election/" className="text-[var(--color-blue)] hover:underline font-semibold">S-Corp election guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Getting an EIN for a New S-Corp */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">New Entities</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Get an EIN for a <span className="font-display gradient-text">New Entity Electing S-Corp?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are forming a brand-new corporation or LLC that you intend to elect S-Corp status for, follow these two separate steps in order:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Step 1: Apply for an EIN</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
                  Apply for an EIN using Form SS-4. Select the entity type that matches your legal structure:
                </p>
                <ul className="space-y-2 text-[var(--color-text-muted)] list-disc list-inside">
                  <li>If you formed a corporation, select &quot;Corporation&quot;</li>
                  <li>If you formed an LLC, select &quot;LLC&quot;</li>
                </ul>
                <p className="text-[var(--color-text-muted)] leading-relaxed mt-3">
                  Do not select &quot;S-Corp&quot; as the entity type on the EIN application. The IRS EIN Assistant does offer an S-Corp option, but this is only for entities that have already received their S-Corp election approval. For a new entity, select Corporation or LLC.
                </p>
              </div>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Step 2: File Form 2553</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
                  After receiving your EIN, file Form 2553 (Election by a Small Business Corporation) with the IRS. This form requires:
                </p>
                <ul className="space-y-2 text-[var(--color-text-muted)] list-disc list-inside">
                  <li>The entity&apos;s EIN (from Step 1)</li>
                  <li>The entity&apos;s legal name and address</li>
                  <li>The effective date of the S-Corp election</li>
                  <li>Signatures of all shareholders consenting to the election</li>
                </ul>
                <p className="text-[var(--color-text-muted)] leading-relaxed mt-3">
                  File Form 2553 by the 15th day of the third month of the tax year (March 15 for calendar-year entities). You can also file during the preceding tax year.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                US residents apply for the EIN online at irs.gov. Non-US residents apply by fax using Form SS-4. ein.so handles fax applications for <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your application</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* S-Corp Eligibility */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Eligibility</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Who Is Eligible for <span className="font-display gradient-text">S-Corp Election?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Not every entity qualifies for S-Corp status. The IRS has strict eligibility requirements. If your entity does not meet all of these, the IRS will reject your Form 2553:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Domestic Entity", desc: "The entity must be formed in the United States. Foreign corporations cannot elect S-Corp status." },
                  { title: "Eligible Shareholders Only", desc: "Shareholders must be US citizens or US residents (green card holders or individuals meeting the substantial presence test). Non-resident aliens, corporations, and partnerships cannot be S-Corp shareholders. Certain trusts and estates can qualify." },
                  { title: "100 or Fewer Shareholders", desc: "S-Corps cannot have more than 100 shareholders. Family members can be treated as a single shareholder for this limit." },
                  { title: "One Class of Stock", desc: "S-Corps can have only one class of stock. All shares must have identical rights to distributions and liquidation proceeds. Voting and non-voting shares are permitted as long as economic rights are equal." },
                  { title: "Not an Ineligible Corporation", desc: "Certain corporations cannot elect S-Corp status: insurance companies, domestic international sales corporations (DISCs), and certain financial institutions." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white rounded-xl border border-[var(--color-border)] p-5 flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                      <div>
                        <h3 className="font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are a non-US resident, you cannot be an S-Corp shareholder. Consider a C-Corp instead -- see our <Link href="/ein-for-corporation/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for corporation guide</Link> for the application process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* S-Corp Tax Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Advantages</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Business Owners <span className="font-display gradient-text">Elect S-Corp Status?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                S-Corp election provides a significant tax advantage: it eliminates the double taxation that C-Corps face. With a C-Corp, the corporation pays tax on its income (21% federal rate), and shareholders pay tax again when they receive dividends. S-Corps avoid this by passing income directly to shareholders, who report it on their personal tax returns.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The second major advantage is self-employment tax savings. S-Corp shareholder-employees pay themselves a &quot;reasonable salary,&quot; which is subject to payroll taxes (Social Security and Medicare, totaling 15.3%). Profit distributions above the reasonable salary are not subject to self-employment tax. This can save thousands of dollars annually for profitable businesses.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Example:</strong> An LLC owner earning $150,000 in profit pays self-employment tax on the entire amount. If the same LLC elects S-Corp status and the owner pays themselves a $70,000 salary, only the $70,000 is subject to payroll tax. The remaining $80,000 is distributed as profit, saving about $12,000 in self-employment taxes annually.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The S-Corp election does not change the entity&apos;s EIN. It simply changes how the entity is taxed. The entity continues using the same EIN for all tax filings, bank accounts, and business operations. For more details on the S-Corp election process, see our <Link href="/s-corp-election/" className="text-[var(--color-blue)] hover:underline font-semibold">S-Corp election guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* When You DO Need a New EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Exceptions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              When Does an S-Corp Actually <span className="font-display gradient-text">Need a New EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                While S-Corp election does not trigger a new EIN requirement, certain structural changes do. Here are the situations where an S-Corp needs a new EIN:
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">The S-Corp is dissolved and a new entity is formed.</strong> If you close the S-Corp and start a completely new corporation, the new entity needs its own EIN. The old S-Corp&apos;s EIN stays with the dissolved entity permanently.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">The S-Corp converts to a partnership or sole proprietorship.</strong> If the entity fundamentally changes its legal structure (not just its tax election), a new EIN is required. This is rare but can happen during business restructuring.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">You do NOT need a new EIN when:</strong> you change the company name, change the company address, change the responsible party (file Form 8822-B instead), add or remove shareholders, or lose S-Corp status and revert to C-Corp taxation. In all of these cases, the original EIN remains valid.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you determine that you do need a new EIN, see our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN guide</Link> for the full application process. You can also <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">apply through ein.so</Link> if you need the fax method.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-4">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </AnimateIn>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden">
                <summary className="cursor-pointer px-6 py-4 flex items-center justify-between">
                  <span className="font-semibold text-[var(--color-text)] pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 text-[var(--color-text-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-4 border-t border-[var(--color-border)] text-[var(--color-text-muted)] leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
