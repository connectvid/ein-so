"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function BoiFilingClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Compliance Guide"
        title="BOI Filing:"
        titleAccent="Beneficial Ownership Information Report (2026)"
        description="The Corporate Transparency Act requires most US LLCs and corporations to file a Beneficial Ownership Information (BOI) report with FinCEN. Non-compliance carries penalties of $500 per day. Here is everything you need to know."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>A BOI (Beneficial Ownership Information) filing is a mandatory report that most US LLCs and corporations must submit to FinCEN, disclosing the individuals who own or control the company. You must report each beneficial owner&apos;s name, date of birth, address, and government-issued ID.</strong>{" "}
                Failure to file carries civil penalties of $500 per day and potential criminal penalties including fines up to $10,000 and up to 2 years in prison.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Is BOI Filing? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is <span className="font-display gradient-text">BOI Filing?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">What BOI Filing Means</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  FinCEN estimates 32.6 million companies must file BOI reports. BOI stands for Beneficial Ownership Information. A BOI filing is a report submitted to the Financial Crimes
                  Enforcement Network (FinCEN), a bureau of the US Department of the Treasury. The report identifies the real
                  people who own or control a company, stripping away the layers of corporate structure that can hide true
                  ownership.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The requirement was created by the <strong className="text-[var(--color-text)]">Corporate Transparency Act
                  (CTA)</strong>, codified at 31 USC §5336, signed into law on January 1, 2021. The CTA aims to combat money laundering, tax evasion,
                  terrorism financing, and other illicit activities by making it harder to hide behind anonymous shell companies.
                  FinCEN began accepting BOI reports on January 1, 2024. Reports are filed via FinCEN&apos;s online portal at fincen.gov/boi.
                </p>
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Who Must File</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you have formed a US LLC, corporation, limited partnership, or other entity by filing with a state
                  secretary of state, you are almost certainly required to file a BOI report. This applies to both domestic
                  and foreign-owned entities. Only 23 categories of entities are exempt, primarily large companies with 20+ employees and $5M+ revenue. The filing is submitted directly to FinCEN through their online portal at fincen.gov/boi, and
                  the information is stored in a secure, non-public database accessible only to authorized government agencies
                  and financial institutions.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you recently formed an LLC and obtained an EIN, your BOI filing is the next critical compliance step.
                  Learn more about{" "}
                  <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN requirements for LLCs
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Who Must File a BOI Report? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Who Must File a <span className="font-display gradient-text">BOI Report?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  FinCEN defines two categories of &ldquo;reporting companies&rdquo; that must file a BOI report:
                </p>
              </div>
            </AnimateIn>

            <StaggerContainer className="space-y-4 mt-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Domestic Reporting Companies</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Any entity created by filing a document with a US state secretary of state or similar office. This includes
                    LLCs, corporations (C-Corps and S-Corps), limited partnerships (LPs), limited liability partnerships (LLPs),
                    and certain trusts formed by state filing. If you filed formation documents with any US state, you are a
                    domestic reporting company unless you qualify for an exemption.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Foreign Reporting Companies</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Any entity formed under the law of a foreign country that has registered to do business in the United States
                    by filing with a state secretary of state. If you formed a company abroad and then registered it in a US
                    state to conduct business domestically, you must file a BOI report.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">23 Exempt Categories</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    FinCEN exempts 23 categories of entities, including: large operating companies (20+ full-time US employees,
                    $5M+ gross receipts, and physical US office), banks, credit unions, insurance companies, registered
                    broker-dealers, SEC-registered investment companies, public utilities, tax-exempt organizations (501(c)),
                    and certain inactive entities. Most small businesses and newly formed LLCs do not qualify for any
                    exemption and must file.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <AnimateIn delay={0.2} className="mt-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Not sure if your entity needs an EIN or a BOI filing?{" "}
                <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                  Check who needs an EIN
                </Link>{" "}
                and understand your full compliance obligations.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What Information Is Required in a BOI Filing? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Information Is Required in a <span className="font-display gradient-text">BOI Filing?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Beneficial Owner Definition</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  A BOI report requires detailed information about both the company and its beneficial owners. A{" "}
                  <strong className="text-[var(--color-text)]">beneficial owner</strong> is any individual who directly or
                  indirectly owns 25% or more of the company, or who exercises substantial control over the company (such as
                  a senior officer, director, or anyone with authority over key decisions). FinCEN estimates the average BOI filing takes 30 minutes and requires 11 data points per beneficial owner.
                </p>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <AnimateIn delay={0.1} direction="left">
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 h-full">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Company Information</h3>
                  <ul className="space-y-2">
                    {[
                      "Full legal name of the entity",
                      "Any trade names or DBAs",
                      "Current US street address",
                      "State or tribal jurisdiction of formation",
                      "IRS Employer Identification Number (EIN)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                        <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2} direction="right">
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 h-full">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Beneficial Owner Information</h3>
                  <ul className="space-y-2">
                    {[
                      "Full legal name",
                      "Date of birth",
                      "Current residential street address",
                      "Government-issued ID number (passport, driver's license, or state ID)",
                      "Image/scan of the identification document",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                        <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.3} className="mt-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Companies formed on or after January 1, 2024 must also report information about the{" "}
                <strong className="text-[var(--color-text)]">company applicant</strong>, the person who filed the formation
                documents with the state. This includes the same four data points: name, date of birth, address, and
                government-issued ID.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* BOI Deadlines by Formation Date Table */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                BOI Filing Deadlines by <span className="font-display gradient-text">Formation Date</span>
              </h2>
            </AnimateIn>

            <AnimateIn>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Formation Date</th><th className="px-4 py-3 font-semibold">Filing Deadline</th><th className="px-4 py-3 font-semibold">Status (April 2026)</th><th className="px-4 py-3 font-semibold">Penalty if Late</th></tr></thead>
                  <tbody>
                    {[
                      { date: "Before January 1, 2024", deadline: "January 1, 2025", status: "OVERDUE", penalty: "$591/day accruing since Jan 2, 2025" },
                      { date: "January 1 - March 31, 2024", deadline: "90 days from formation", status: "OVERDUE", penalty: "$591/day accruing" },
                      { date: "April 1 - June 30, 2024", deadline: "90 days from formation", status: "OVERDUE", penalty: "$591/day accruing" },
                      { date: "July 1 - September 30, 2024", deadline: "90 days from formation", status: "OVERDUE", penalty: "$591/day accruing" },
                      { date: "October 1 - December 31, 2024", deadline: "90 days from formation", status: "OVERDUE (likely)", penalty: "$591/day accruing" },
                      { date: "January 1 - December 31, 2025", deadline: "30 days from formation notice", status: "Depends on formation date", penalty: "$591/day after deadline" },
                      { date: "2026 and later", deadline: "30 days from formation notice", status: "Active requirement", penalty: "$591/day after deadline" },
                      { date: "Change in ownership info", deadline: "30 days from the change", status: "Ongoing obligation", penalty: "$591/day after 30-day window" },
                    ].map((row, i) => (
                      <tr key={row.date} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                        <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.date}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.deadline}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.status}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.penalty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Required BOI Information Table */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Required BOI Information: <span className="font-display gradient-text">Complete Checklist</span>
              </h2>
            </AnimateIn>

            <AnimateIn>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Information Category</th><th className="px-4 py-3 font-semibold">Required Data</th><th className="px-4 py-3 font-semibold">Who Provides It</th></tr></thead>
                  <tbody>
                    {[
                      { cat: "Company Legal Name", data: "Exact legal name from formation documents", who: "Company" },
                      { cat: "Company Trade Names", data: "All DBAs (doing business as) names", who: "Company" },
                      { cat: "Company Address", data: "Current US street address (no P.O. boxes)", who: "Company" },
                      { cat: "Jurisdiction of Formation", data: "State or tribal jurisdiction where entity was formed", who: "Company" },
                      { cat: "Company EIN/TIN", data: "9-digit EIN or Tax ID number", who: "Company" },
                      { cat: "Beneficial Owner Name", data: "Full legal name (first, middle, last, suffix)", who: "Each owner 25%+ or controller" },
                      { cat: "Beneficial Owner DOB", data: "Date of birth (month, day, year)", who: "Each owner 25%+ or controller" },
                      { cat: "Beneficial Owner Address", data: "Current residential street address", who: "Each owner 25%+ or controller" },
                      { cat: "Beneficial Owner ID", data: "US passport, state ID, or driver license number", who: "Each owner 25%+ or controller" },
                      { cat: "ID Document Image", data: "Clear scan/photo of the identification document", who: "Each owner 25%+ or controller" },
                      { cat: "Company Applicant (post-2024)", data: "Name, DOB, address, and ID of person who filed formation docs", who: "Person who filed" },
                    ].map((row, i) => (
                      <tr key={row.cat} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                        <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.cat}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.data}</td>
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

      {/* BOI Filing Deadlines Detail */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                BOI Filing Deadline <span className="font-display gradient-text">Details</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {[
                {
                  category: "Formed Before January 1, 2024",
                  deadline: "January 1, 2025",
                  detail:
                    "Companies that existed before the reporting requirement took effect had until January 1, 2025 to file their initial BOI report. If you missed this deadline, file immediately to minimize the $500/day penalty accumulation.",
                  urgent: true,
                },
                {
                  category: "Formed in 2024",
                  deadline: "90 days from formation date",
                  detail:
                    "Companies formed on or after January 1, 2024 and before January 1, 2025 had 90 calendar days from their date of formation (or registration) to file their initial BOI report.",
                  urgent: false,
                },
                {
                  category: "Formed in 2025 or Later",
                  deadline: "30 days from formation date",
                  detail:
                    "Companies formed on or after January 1, 2025 must file their initial BOI report within 30 calendar days of receiving notice that their formation or registration is effective.",
                  urgent: false,
                },
                {
                  category: "Changes to Reported Information",
                  deadline: "30 days from the change",
                  detail:
                    "If any previously reported information changes (new owner, address change, new ID document), you must file an updated report within 30 calendar days of the change.",
                  urgent: false,
                },
              ].map((item) => (
                <StaggerItem key={item.category}>
                  <div className={`rounded-2xl border p-6 ${item.urgent ? "bg-red-50 border-red-200" : "bg-[var(--color-surface)] border-[var(--color-border)]"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-base font-bold text-[var(--color-text)]">{item.category}</h3>
                      <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold whitespace-nowrap ${item.urgent ? "bg-red-100 text-red-700" : "bg-[var(--color-blue)]/10 text-[var(--color-blue)]"}`}>
                        Deadline: {item.deadline}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimateIn delay={0.3} className="mt-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For detailed deadline information and the latest updates on extensions, read our{" "}
                <Link href="/boi-filing-deadline/" className="text-[var(--color-blue)] hover:underline font-semibold">
                  BOI filing deadline guide
                </Link>.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Penalties for Not Filing BOI Report */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Penalties for Not Filing Your <span className="font-display gradient-text">BOI Report</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <p className="text-red-800 leading-relaxed font-semibold text-lg mb-2">
                    $591 per day in civil penalties (adjusted for inflation)
                  </p>
                  <p className="text-red-700 leading-relaxed text-sm">
                    Per 31 USC §5321, civil penalties of $591/day (adjusted for inflation) accrue for every day your BOI report is overdue. That adds up quickly --
                    over $4,100 per week and $17,700 per month. The penalty clock starts the day after your filing deadline
                    passes and does not stop until you file.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <p className="text-red-800 leading-relaxed font-semibold text-lg mb-2">
                    Up to $10,000 in criminal fines
                  </p>
                  <p className="text-red-700 leading-relaxed text-sm">
                    Willful failure to file or providing false information can result in criminal fines of up to $10,000.
                    This applies to the company as well as any individual who willfully causes the violation.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <p className="text-red-800 leading-relaxed font-semibold text-lg mb-2">
                    Up to 2 years imprisonment
                  </p>
                  <p className="text-red-700 leading-relaxed text-sm">
                    In the most serious cases, willful failure to file or filing false information can lead to imprisonment
                    of up to 2 years. Senior officers and anyone who knowingly provides false information to evade reporting
                    are personally liable.
                  </p>
                </div>

                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  These penalties are severe by design. FinCEN wants to ensure full compliance. The good news: filing is
                  free through FinCEN&apos;s online portal, and the process takes about 30 minutes if you have your
                  documents ready. If you want help, ein.so handles BOI filings for{" "}
                  <strong className="text-[var(--color-text)]">$49</strong> via WhatsApp.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Learn more about{" "}
                  <Link href="/boi-penalties/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    BOI penalties and enforcement
                  </Link>{" "}
                  to understand the full scope of consequences.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How ein.so Helps with BOI Filing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How ein.so Helps with <span className="font-display gradient-text">BOI Filing</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              {[
                {
                  step: "1",
                  title: "Message Us on WhatsApp",
                  detail:
                    "Contact ein.so on WhatsApp and tell us you need help with your BOI filing. We respond within hours, not days. No forms to fill out on a confusing government website.",
                },
                {
                  step: "2",
                  title: "Provide Your Company and Owner Details",
                  detail:
                    "We ask you for the required information: your company details (name, EIN, state of formation, address) and beneficial owner details (name, date of birth, address, passport or ID scan). You send everything through WhatsApp chat.",
                },
                {
                  step: "3",
                  title: "We Prepare and File Your BOI Report",
                  detail:
                    "Our team prepares your BOI report and submits it to FinCEN through their official filing system. We verify all information for accuracy before submission to avoid rejection or correction notices.",
                },
                {
                  step: "4",
                  title: "Receive Your Filing Confirmation",
                  detail:
                    "After FinCEN accepts your report, we send you the filing confirmation directly on WhatsApp. You are now compliant with the Corporate Transparency Act. Keep the confirmation for your records.",
                },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-blue)] text-white flex items-center justify-center font-extrabold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimateIn delay={0.3} className="mt-8">
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 text-center">
                <p className="text-2xl font-extrabold text-[var(--color-text)] mb-2">$49 BOI Filing Service</p>
                <p className="text-[var(--color-text-muted)] text-sm mb-4">
                  We handle the entire FinCEN filing process via WhatsApp. Fast, accurate, and stress-free.
                </p>
                <Link
                  href="/apply/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-6 py-3.5 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                >
                  File My BOI Report
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
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
              { label: "BOI Filing Deadline", href: "/boi-filing-deadline/" },
              { label: "EIN for LLC", href: "/ein-for-llc/" },
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
            <StaggerItem>
              <span className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
                BOI Penalties
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="File Your BOI Report Before Penalties Stack Up"
        subtitle="$500/day in penalties for non-compliance. Let ein.so handle your BOI filing for $49."
      />
    </>
  );
}
