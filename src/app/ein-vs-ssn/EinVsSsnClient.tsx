"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const comparisonRows = [
  { label: "Full Name", ein: "Employer Identification Number", ssn: "Social Security Number" },
  { label: "Purpose", ein: "Identifies a business entity for tax and banking purposes", ssn: "Identifies an individual for employment, taxes, and government benefits" },
  { label: "Who Gets It", ein: "LLCs, corporations, partnerships, sole proprietors, trusts, estates, nonprofits", ssn: "US citizens, permanent residents, and authorized work-visa holders" },
  { label: "Format", ein: "XX-XXXXXXX (e.g., 12-3456789)", ssn: "XXX-XX-XXXX (e.g., 123-45-6789)" },
  { label: "Digits", ein: "9 digits", ssn: "9 digits" },
  { label: "Issued By", ein: "IRS (Internal Revenue Service)", ssn: "SSA (Social Security Administration)" },
  { label: "Application Form", ein: "Form SS-4", ssn: "Form SS-5" },
  { label: "Cost", ein: "Free from IRS", ssn: "Free from SSA" },
  { label: "Processing Time", ein: "Instant (online with SSN) or 4-7 days (fax)", ssn: "2-4 weeks after application" },
  { label: "Available to Non-Residents?", ein: "Yes (via fax filing of Form SS-4)", ssn: "No (requires US citizenship or authorized work status)" },
  { label: "Used for Business Taxes?", ein: "Yes (1120, 1065, 940, etc.)", ssn: "Only for sole proprietors without an EIN" },
  { label: "Used for Personal Taxes?", ein: "No", ssn: "Yes (1040, W-2, etc.)" },
  { label: "Opens Bank Accounts?", ein: "Business bank accounts", ssn: "Personal and some business accounts" },
  { label: "Expires?", ein: "Never", ssn: "Never (but card can be replaced)" },
  { label: "Privacy Risk", ein: "Low (business identifier only)", ssn: "High (linked to credit, identity, benefits)" },
];

export default function EinVsSsnClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Comparison Guide"
        title="EIN vs SSN:"
        titleAccent="What's the Difference? (2026)"
        description="Both are 9-digit identification numbers issued by the US government, but they serve fundamentally different purposes. An EIN identifies your business. An SSN identifies you as an individual. Here is the complete comparison."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>An EIN (Employer Identification Number) is a 9-digit number the IRS assigns to businesses for tax filing, banking, and hiring. An SSN (Social Security Number) is a 9-digit number the SSA assigns to individuals for personal taxes, employment, and government benefits.</strong>{" "}
                You use your SSN for personal matters and your EIN for business matters. Non-US residents without an SSN can still get an EIN by filing Form SS-4 by fax with the IRS.
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
              EIN vs SSN: Complete <span className="font-display gradient-text">Comparison Table</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              A side-by-side breakdown of every key difference between an EIN and an SSN.
            </p>
          </AnimateIn>

          <AnimateIn className="max-w-4xl mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[var(--color-navy)]">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/70 w-1/4">Feature</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-blue-glow)] w-[37.5%]">EIN</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] w-[37.5%]">SSN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
                    >
                      <td className="px-6 py-4 font-semibold text-[var(--color-text)]">{row.label}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.ein}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.ssn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Is an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an <span className="font-display gradient-text">EIN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An Employer Identification Number (EIN) is a unique 9-digit number assigned by the Internal Revenue Service
                  (IRS) to identify a business entity for tax purposes. Every LLC, corporation, partnership, nonprofit, trust,
                  and estate operating in the United States needs an EIN. Think of it as your business&apos;s Social Security
                  Number, except it carries far less privacy risk because it is not tied to personal credit or government benefits.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The EIN format is <strong className="text-[var(--color-text)]">XX-XXXXXXX</strong> (two digits, a hyphen,
                  then seven digits). You use your EIN to file business tax returns, open a business bank account, apply for
                  business licenses, hire employees, and establish business credit. The IRS issues EINs at no cost. US residents
                  with an SSN can apply online at irs.gov in minutes. Non-residents without an SSN file Form SS-4 by fax, which
                  takes 7 to 14 business days.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For a complete overview, read our guide on{" "}
                  <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    what an EIN is and why every business needs one
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What Is an SSN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an <span className="font-display gradient-text">SSN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  A Social Security Number (SSN) is a unique 9-digit number issued by the Social Security Administration (SSA)
                  to US citizens, permanent residents, and certain individuals authorized to work in the United States. The SSN
                  is the most widely used personal identifier in the US, linking you to your employment history, tax records,
                  credit reports, and government benefits.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The SSN format is <strong className="text-[var(--color-text)]">XXX-XX-XXXX</strong> (three digits, two
                  digits, four digits). You use your SSN to file personal tax returns, get hired by an employer, apply for
                  credit cards and loans, open personal bank accounts, and collect Social Security benefits. Because the SSN is
                  connected to so many critical systems, exposing it creates serious identity theft risk. This is precisely why
                  business owners should use an EIN rather than their SSN for business activities.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Non-US residents generally cannot obtain an SSN unless they have authorization to work in the United States.
                  However, they can still form a US business and get an EIN without an SSN. See our guide on{" "}
                  <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    how to get an EIN without an SSN
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Can You Use an EIN Instead of an SSN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Can You Use an EIN Instead of <span className="font-display gradient-text">an SSN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  In business contexts, yes. You can and should use your EIN instead of your SSN for virtually all business
                  purposes. This includes filing business tax returns, completing W-9 forms for clients and vendors, opening
                  business bank accounts, applying for business credit, and registering with payment processors like Stripe
                  and PayPal.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Using your EIN instead of your SSN for business activities is one of the smartest privacy decisions you can
                  make. Every time you hand out your SSN, you increase your exposure to identity theft. An EIN provides the
                  same tax identification functionality for your business without putting your personal identity at risk.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  However, you cannot use an EIN for personal purposes. You still need your SSN (or ITIN) to file personal
                  tax returns, apply for personal credit, verify your identity with government agencies, and receive Social
                  Security benefits. The EIN and SSN exist in separate domains: business and personal.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For more on how EINs compare with other personal tax IDs, read our{" "}
                  <Link href="/ein-vs-itin/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN vs ITIN comparison guide
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* When Do You Need Both an EIN and an SSN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                When Do You Need Both an <span className="font-display gradient-text">EIN and an SSN?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">US Resident Starting a Business</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    If you are a US citizen or permanent resident forming an LLC, corporation, or partnership, you need your
                    SSN to apply for the EIN online. Once you have the EIN, you use the EIN for all business activities and
                    your SSN for personal tax filing. Both numbers remain active permanently.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Sole Proprietor Hiring Employees</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    A sole proprietor with no employees can use their SSN for business taxes. The moment you hire your first
                    employee, you must get an EIN. From that point, you use the EIN for payroll taxes (Forms 940 and 941) and
                    your SSN for personal income taxes (Form 1040).
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Multi-Member LLC or Partnership</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Any business with more than one owner must have an EIN. Each owner uses their personal SSN on their
                    individual tax return (Schedule K-1), while the business files its partnership return (Form 1065) under the
                    EIN. There is no option to use an SSN for a multi-member entity.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Corporation Owner</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Every corporation (S-Corp or C-Corp) requires an EIN regardless of how many shareholders it has. As a
                    shareholder, you use your SSN for personal tax filing. The corporation uses the EIN for corporate tax
                    returns, payroll, and all business transactions.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Can Non-Residents Without an SSN Get an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Can Non-Residents Without an SSN Get an <span className="font-display gradient-text">EIN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Yes. The IRS does not require an SSN or ITIN to issue an EIN. Non-US residents who do not have either number
                  can obtain an EIN by filing Form SS-4 by fax with the IRS. This is the standard process for international
                  business owners forming US entities like LLCs and corporations.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS online EIN application requires an SSN or ITIN, which locks out most non-residents. The fax method
                  bypasses this requirement entirely. You complete Form SS-4 with your foreign address and identification
                  details, fax it to the IRS at (855) 215-1627, and receive your EIN by fax within 7 to 14 business days.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  At ein.so, we handle the entire process for you. We prepare your Form SS-4, fax it to the IRS, monitor for
                  the response, and deliver your EIN directly to your WhatsApp or email. Our Standard service costs{" "}
                  <strong className="text-[var(--color-text)]">$49</strong> (14 business days) and our Express service costs{" "}
                  <strong className="text-[var(--color-text)]">$97</strong> (7 business days). No SSN, no ITIN, no
                  complicated paperwork.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Learn more in our detailed guide on{" "}
                  <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    getting an EIN as a non-resident
                  </Link>{" "}
                  or read about{" "}
                  <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    how to get an EIN without an SSN
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* EIN vs SSN: Privacy and Security */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                EIN vs SSN: Why Privacy <span className="font-display gradient-text">Matters</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  One of the most compelling reasons to get an EIN is privacy protection. Your SSN is the master key to your
                  personal identity. It connects to your credit reports, bank accounts, tax history, medical records, and
                  government benefits. Every time you share your SSN on a business form, you increase the risk that it ends up
                  in the wrong hands.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An EIN, by contrast, is a business-only identifier. If someone obtains your EIN, they cannot open personal
                  credit accounts in your name, file personal taxes as you, or access your Social Security benefits. The
                  damage from a leaked EIN is limited to your business entity, and even that is far more contained than SSN
                  theft.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS recommends that business owners use their EIN rather than their SSN whenever possible. Sole
                  proprietors, in particular, benefit from obtaining an EIN even when not legally required, because it removes
                  the need to put their SSN on W-9 forms sent to every client and vendor they work with.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Ready to protect your SSN?{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    Apply for your EIN today
                  </Link>{" "}
                  and stop sharing your Social Security Number with every business contact.
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
              { label: "What Is an EIN?", href: "/what-is-ein/" },
              { label: "EIN vs ITIN", href: "/ein-vs-itin/" },
              { label: "EIN Without SSN", href: "/ein-without-ssn/" },
              { label: "EIN for Non-Residents", href: "/ein-for-non-residents/" },
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
        title="Get Your EIN Without an SSN"
        subtitle="$49. No SSN required. No paperwork. We handle the IRS fax process for you."
      />
    </>
  );
}
