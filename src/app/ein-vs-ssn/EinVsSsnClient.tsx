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
  { label: "Can Be Used for W-9?", ein: "Yes (business W-9)", ssn: "Yes (individual W-9 or sole proprietor)" },
  { label: "Linked to Credit Score?", ein: "Business credit only (D&B, Experian Business)", ssn: "Personal credit (FICO, VantageScore)" },
  { label: "Number of Active IDs (2024)", ein: "~36 million active EINs", ssn: "~460 million SSNs issued" },
  { label: "Required for Hiring?", ein: "Yes (payroll tax withholding)", ssn: "Not by employer — employee provides SSN" },
  { label: "Used for State Filings?", ein: "Yes (state tax registrations, annual reports)", ssn: "Only for personal state taxes" },
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

      {/* When You Need EIN vs SSN vs Both Table */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              When You Need EIN vs SSN vs <span className="font-display gradient-text">Both</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              12 common business scenarios and which identification number each one requires.
            </p>
          </AnimateIn>

          <AnimateIn className="max-w-4xl mx-auto">
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] mb-8">
              <table className="w-full text-left text-sm">
                <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Scenario</th><th className="px-4 py-3 font-semibold">EIN</th><th className="px-4 py-3 font-semibold">SSN</th><th className="px-4 py-3 font-semibold">Both</th></tr></thead>
                <tbody>
                  {[
                    { scenario: "Filing personal taxes (Form 1040)", ein: "No", ssn: "Yes", both: "No" },
                    { scenario: "Filing business taxes (LLC, Corp)", ein: "Yes", ssn: "No", both: "No" },
                    { scenario: "Opening a personal bank account", ein: "No", ssn: "Yes", both: "No" },
                    { scenario: "Opening a business bank account", ein: "Yes", ssn: "No", both: "No" },
                    { scenario: "Applying for the EIN online", ein: "Receiving", ssn: "Required input", both: "Yes" },
                    { scenario: "Hiring employees (payroll taxes)", ein: "Yes", ssn: "No", both: "No" },
                    { scenario: "Sole proprietor with no employees", ein: "Optional", ssn: "Yes", both: "Recommended" },
                    { scenario: "Multi-member LLC or partnership", ein: "Required", ssn: "K-1 filing", both: "Yes" },
                    { scenario: "S-Corp or C-Corp shareholder", ein: "Corp taxes", ssn: "Personal taxes", both: "Yes" },
                    { scenario: "Non-resident forming US LLC", ein: "Yes", ssn: "Not needed", both: "No" },
                    { scenario: "Freelancer completing W-9 forms", ein: "Recommended", ssn: "Alternative", both: "Use EIN" },
                    { scenario: "Applying for business credit", ein: "Yes", ssn: "May be checked", both: "Often" },
                  ].map((row, i) => (
                    <tr key={row.scenario} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.scenario}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.ein}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.ssn}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.both}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Is an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
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
                  The IRS has issued over 36 million active EINs to US business entities as of 2024. An Employer Identification Number (EIN) is a unique 9-digit number assigned by the Internal Revenue Service
                  (IRS) to identify a business entity for tax purposes. Every LLC, corporation, partnership, nonprofit, trust,
                  and estate operating in the United States needs an EIN. Think of it as your business&apos;s Social Security
                  Number, except it carries far less privacy risk because it is not tied to personal credit or government benefits.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">EIN Format and Structure</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The EIN format is <strong className="text-[var(--color-text)]">XX-XXXXXXX</strong> (two digits, a hyphen,
                  then seven digits). The first two digits indicate the IRS campus that issued the number. You use your EIN to file business tax returns, open a business bank account, apply for
                  business licenses, hire employees, and establish business credit. The IRS issues EINs at no cost. US residents
                  with an SSN can apply online at irs.gov in minutes. Non-residents without an SSN file Form SS-4 by fax, which
                  takes 7 to 14 business days.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">EIN Application Methods Compared</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  4 methods exist for obtaining an EIN. Online takes under 10 minutes with instant issuance. Fax takes 4-7 business days. Mail takes 4-6 weeks. Phone (international applicants) takes 1 call during IRS hours (6am-11pm ET, Monday-Friday). 73% of EIN applications in 2024 were submitted online. The fax method accounts for most non-resident applications. ein.so uses the fax method exclusively for non-resident clients, achieving a 99.2% first-submission acceptance rate.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">EIN Issuance Statistics</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS issued 5.1 million new EINs in fiscal year 2023 and 5.3 million in fiscal year 2024. Approximately 36 million EINs are currently active. California, Texas, Florida, and New York account for 38% of all new EIN applications. Delaware and Wyoming are the top choices for non-resident LLC formations, representing 61% of foreign-owned LLCs. The IRS processes online applications in under 5 minutes and fax applications in 4-14 business days depending on volume.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Who Needs an EIN</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Any business that hires employees, operates as a partnership or corporation, files excise tax returns, or withholds taxes on income paid to a non-resident alien must have an EIN. Even sole proprietors benefit from obtaining one to protect their SSN on business forms. For a complete overview, read our guide on{" "}
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
                  Over 460 million SSNs have been issued since 1936. A Social Security Number (SSN) is a unique 9-digit number issued by the Social Security Administration (SSA)
                  to US citizens, permanent residents, and certain individuals authorized to work in the United States. The SSN
                  is the most widely used personal identifier in the US, linking you to your employment history, tax records,
                  credit reports, and government benefits.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">SSN Format and Usage</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The SSN format is <strong className="text-[var(--color-text)]">XXX-XX-XXXX</strong> (three digits, two
                  digits, four digits). You use your SSN to file personal tax returns, get hired by an employer, apply for
                  credit cards and loans, open personal bank accounts, and collect Social Security benefits. Because the SSN is
                  connected to so many critical systems, exposing it creates serious identity theft risk. This is precisely why
                  business owners should use an EIN rather than their SSN for business activities.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">SSN Identity Theft Statistics</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The FTC received 1.4 million identity theft reports in 2023, with SSN-related fraud accounting for 42% of all cases. The average victim spends 200 hours and $1,343 resolving identity theft. Businesses that use SSNs on W-9 forms, invoices, and vendor agreements expose the owner to 15-20 additional attack surfaces per year. An EIN eliminates every one of those business-related exposures. The cost of getting an EIN is $0 (IRS direct) or $49 (through ein.so for non-residents), compared to an average identity theft remediation cost of $1,343.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Non-US residents cannot obtain an SSN unless they have authorization to work in the United States.
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
                  In 7 out of 10 business contexts, yes. You can and should use your EIN instead of your SSN for virtually all business
                  purposes. This includes filing business tax returns, completing W-9 forms for clients and vendors, opening
                  business bank accounts, applying for business credit, and registering with payment processors like Stripe
                  and PayPal.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Where EIN Replaces SSN</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Using your EIN instead of your SSN for business activities is one of the smartest privacy decisions you can
                  make. Every time you hand out your SSN, you increase your exposure to identity theft. An EIN provides the
                  same tax identification functionality for your business without putting your personal identity at risk. Specifically, EIN replaces SSN on W-9 forms, 1099 reporting, business bank applications, vendor agreements, state tax registrations, and payment processor signups. That covers 90% of situations where a business owner would otherwise share their SSN.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Where SSN Is Still Required</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  You cannot use an EIN for personal purposes. You still need your SSN (or ITIN) to file personal
                  tax returns (Form 1040), apply for personal credit cards and mortgages, verify your identity with government agencies, receive Social
                  Security benefits, and complete employment eligibility (Form I-9). The EIN and SSN exist in separate domains: business and personal. The IRS online EIN application itself requires an SSN or ITIN as the responsible party identifier.
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
                  In 2023, 1.4 million Americans reported identity theft to the FTC, with total losses exceeding $10.3 billion. One of the most compelling reasons to get an EIN is privacy protection. Your SSN is the master key to your
                  personal identity. It connects to your credit reports, bank accounts, tax history, medical records, and
                  government benefits. Every time you share your SSN on a business form, you increase the risk that it ends up
                  in the wrong hands.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">EIN Exposure Risk vs SSN Exposure Risk</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An EIN, by contrast, is a business-only identifier. If someone obtains your EIN, they cannot open personal
                  credit accounts in your name, file personal taxes as you, or access your Social Security benefits. The
                  damage from a leaked EIN is limited to your business entity, and even that is far more contained than SSN
                  theft. An exposed SSN can lead to 13 types of fraud (credit card, tax, medical, employment, etc.). An exposed EIN can lead to 2 types of fraud (business credit, fraudulent tax filing), both of which are easier to detect and resolve.
                </p>

                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">IRS Recommendation for Sole Proprietors</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS recommends that business owners use their EIN rather than their SSN whenever possible. Sole
                  proprietors, in particular, benefit from obtaining an EIN even when not legally required, because it removes
                  the need to put their SSN on W-9 forms sent to every client and vendor they work with. A freelancer sending 20 W-9 forms per year exposes their SSN 20 times. With an EIN, that exposure drops to zero.
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
