"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const comparisonRows = [
  { label: "What It Stands For", tin: "Taxpayer Identification Number", ein: "Employer Identification Number" },
  { label: "What It Is", tin: "Umbrella category for all IRS tax identification numbers", ein: "A specific type of TIN used for businesses" },
  { label: "Scope", tin: "Covers EIN, SSN, ITIN, ATIN, and PTIN", ein: "One number per business entity" },
  { label: "Who Uses It", tin: "Everyone who files taxes (individuals and businesses)", ein: "Business entities only (LLCs, corporations, partnerships, etc.)" },
  { label: "Format", tin: "Varies by type (EIN: XX-XXXXXXX, SSN: XXX-XX-XXXX, ITIN: 9XX-XX-XXXX)", ein: "XX-XXXXXXX (always)" },
  { label: "Issued By", tin: "IRS (EIN, ITIN, ATIN, PTIN) or SSA (SSN)", ein: "IRS only" },
  { label: "Application Form", tin: "Depends on type (SS-4, SS-5, W-7, W-12)", ein: "Form SS-4 only" },
  { label: "Can Be Used Interchangeably?", tin: "No — each type of TIN serves a specific purpose", ein: "Only for business tax purposes" },
  { label: "Relationship", tin: "Parent category", ein: "Child (subset of TIN)" },
];

export default function EinVsTinClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Comparison Guide"
        title="EIN vs TIN:"
        titleAccent="What's the Difference? (2026)"
        description="TIN is the umbrella. EIN is one type under that umbrella. Understanding this relationship clears up the confusion that trips up business owners, accountants, and anyone dealing with IRS forms."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>TIN (Taxpayer Identification Number) is the IRS umbrella term for all tax identification numbers. EIN (Employer Identification Number) is one specific type of TIN assigned to businesses. SSN and ITIN are other types of TINs assigned to individuals. Your business&apos;s TIN is its EIN. Your personal TIN is your SSN or ITIN.</strong>{" "}
                When a form asks for a TIN in a business context, enter your EIN.
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
              TIN vs EIN: Side-by-Side <span className="font-display gradient-text">Comparison</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              TIN is the category. EIN is one specific member of that category.
            </p>
          </AnimateIn>

          <AnimateIn className="max-w-4xl mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[var(--color-navy)]">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/70 w-1/4">Feature</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] w-[37.5%]">TIN</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-blue-glow)] w-[37.5%]">EIN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
                    >
                      <td className="px-6 py-4 font-semibold text-[var(--color-text)]">{row.label}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.tin}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.ein}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Is a TIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is a TIN and Why Does the <span className="font-display gradient-text">IRS Use It?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  TIN stands for Taxpayer Identification Number. The IRS created this umbrella term to refer to any number they use to identify taxpayers, whether those taxpayers are individuals or businesses. The IRS recognizes five types of TINs: EIN (Employer Identification Number) for business entities, SSN (Social Security Number) for US citizens and authorized workers, ITIN (Individual Taxpayer Identification Number) for individuals who cannot get an SSN, ATIN (Adoption Taxpayer Identification Number) for children in the adoption process, and PTIN (Preparer Tax Identification Number) for tax return preparers.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS needs a consistent way to track tax obligations across millions of filers. The TIN system provides this by assigning a unique 9-digit number to every entity and individual that interacts with the US tax system. Each type of TIN has its own format, application process, and issuing authority, but they all serve the same fundamental purpose: identifying who owes what taxes and who has filed what returns.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  In practice, you will rarely hear anyone say &quot;TIN&quot; in conversation. Business owners say &quot;EIN&quot; or &quot;Tax ID.&quot; Individuals say &quot;Social Security Number.&quot; The term TIN appears mainly on IRS forms, official instructions, and in tax professional conversations. But understanding that TIN is the parent category helps you navigate forms that use this formal terminology.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What Are the Different Types of TINs? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Are the Different Types <span className="font-display gradient-text">of TINs?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">EIN (Employer Identification Number)</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Assigned to business entities by the IRS. Format: XX-XXXXXXX. Used for business tax returns, bank accounts, hiring employees, and business licenses. Applied for using Form SS-4. Free from the IRS. Available to non-residents via fax filing. This is the TIN your business needs. Learn more about{" "}
                    <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                      what an EIN is
                    </Link>.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">SSN (Social Security Number)</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Assigned to US citizens, permanent residents, and authorized workers by the Social Security Administration. Format: XXX-XX-XXXX. Used for personal taxes, employment, credit, and government benefits. Not available to non-residents without work authorization. See our{" "}
                    <Link href="/ein-vs-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">
                      EIN vs SSN guide
                    </Link>{" "}
                    for a full comparison.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">ITIN (Individual Taxpayer Identification Number)</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Assigned to individuals who need to file US taxes but cannot get an SSN. Format: 9XX-XX-XXXX. Used for personal tax returns, opening certain bank accounts, and tax treaty benefits. Applied for using Form W-7. Takes 6 to 11 weeks. See our{" "}
                    <Link href="/ein-vs-itin/" className="text-[var(--color-blue)] hover:underline font-semibold">
                      EIN vs ITIN guide
                    </Link>{" "}
                    for details.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">ATIN and PTIN</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    ATINs are temporary numbers for children in the adoption process who do not yet have an SSN. PTINs are assigned to paid tax return preparers. Both are specialized TINs that most business owners will never encounter. They exist to complete the TIN category for the IRS&apos;s record-keeping system.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* When a Form Asks for TIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Should You Enter When a Form Asks for <span className="font-display gradient-text">Your TIN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  When a form asks for your TIN, the context determines which number to provide. If the form is for your business (a business bank application, a vendor agreement, Form W-9 for business payments), enter your EIN. If the form is for you personally (a personal tax return, employment application, personal bank account), enter your SSN or ITIN.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The W-9 form is one of the most common places you will see &quot;TIN&quot; used. The W-9 has a field labeled &quot;Taxpayer Identification Number (TIN)&quot; with two sub-fields: one for SSN or ITIN and one for EIN. If you are completing a W-9 on behalf of your business, enter the EIN. If you are completing it as an individual (such as a freelancer without a business entity), enter your SSN or ITIN. Never enter both numbers on the same W-9.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For a detailed comparison of how EIN relates to the broader Tax ID concept, see our{" "}
                  <Link href="/ein-vs-tax-id/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN vs Tax ID guide
                  </Link>. And if you need to get an EIN for your business, you can{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    apply through ein.so
                  </Link>{" "}
                  in minutes.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Do Non-Residents Need a TIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do Non-Residents Get a TIN for <span className="font-display gradient-text">US Business?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Non-US residents who form a US business entity need an EIN, which serves as their business TIN. The process does not require an SSN or ITIN. You file Form SS-4 by fax with the IRS, and they assign an EIN within 7 to 14 business days. This EIN becomes your business&apos;s TIN for all US tax and business purposes.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you also need a personal TIN for US tax filing (for example, to report personal income from your US business), you apply separately for an ITIN using Form W-7. The EIN and ITIN are independent applications. You can get an EIN without having an ITIN, and you do not need the ITIN to apply for the EIN. Most non-residents start with the EIN because it is required to open a bank account and begin operations.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  ein.so handles the EIN application for non-residents. We prepare your Form SS-4, fax it to the IRS, and deliver your EIN to your WhatsApp or email. Standard processing costs <strong className="text-[var(--color-text)]">$49</strong> (14 business days) and Express costs <strong className="text-[var(--color-text)]">$97</strong> (7 business days). No SSN, no ITIN, no US address required.
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
              { label: "EIN vs Tax ID", href: "/ein-vs-tax-id/" },
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
        title="Get Your Business TIN (EIN) Today"
        subtitle="$49. No SSN required. We handle the IRS fax process for non-residents."
      />
    </>
  );
}
