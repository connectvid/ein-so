"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function BoiPenaltiesClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Compliance Alert"
        title="BOI Filing Penalties:"
        titleAccent="$500/Day for Non-Compliance (2026)"
        description="The Corporate Transparency Act requires most US companies to file Beneficial Ownership Information (BOI) reports with FinCEN. The penalties for non-compliance are severe: $500 per day in civil fines with no cap, plus criminal penalties of up to $10,000 and 2 years in prison."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>Failing to file your BOI report triggers $500/day in civil penalties with no cap and potential criminal penalties of up to $10,000 in fines and 2 years in prison. These penalties apply to willful non-filing, late filing, and submitting false information. Individual officers and managers can be held personally liable.</strong>{" "}
                File your BOI report immediately to stop penalties from accruing. ein.so provides BOI filing services to ensure your report is accurate and submitted on time.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Penalty Escalation Table */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                BOI Penalty Escalation: <span className="font-display gradient-text">How Fast Fines Accumulate</span>
              </h2>
            </AnimateIn>

            <AnimateIn>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Time Overdue</th><th className="px-4 py-3 font-semibold">Civil Penalty (at $591/day)</th><th className="px-4 py-3 font-semibold">Criminal Exposure</th><th className="px-4 py-3 font-semibold">Total Maximum Liability</th></tr></thead>
                  <tbody>
                    {[
                      { time: "1 day", civil: "$591", criminal: "Up to $10,000 + 2 years", total: "$10,591" },
                      { time: "1 week (7 days)", civil: "$4,137", criminal: "Up to $10,000 + 2 years", total: "$14,137" },
                      { time: "2 weeks (14 days)", civil: "$8,274", criminal: "Up to $10,000 + 2 years", total: "$18,274" },
                      { time: "1 month (30 days)", civil: "$17,730", criminal: "Up to $10,000 + 2 years", total: "$27,730" },
                      { time: "3 months (90 days)", civil: "$53,190", criminal: "Up to $10,000 + 2 years", total: "$63,190" },
                      { time: "6 months (180 days)", civil: "$106,380", criminal: "Up to $10,000 + 2 years", total: "$116,380" },
                      { time: "1 year (365 days)", civil: "$215,715", criminal: "Up to $10,000 + 2 years", total: "$225,715" },
                      { time: "2 years (730 days)", civil: "$431,430", criminal: "Up to $10,000 + 2 years", total: "$441,430" },
                      { time: "No cap", civil: "Unlimited", criminal: "Per violation", total: "Unlimited" },
                    ].map((row, i) => (
                      <tr key={row.time} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                        <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.time}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.civil}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.criminal}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Civil Penalties */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Are the Civil Penalties for Not <span className="font-display gradient-text">Filing a BOI Report?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">$591 Per Day With No Cap</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The civil penalty for failing to file a BOI report is <strong className="text-[var(--color-text)]">$591 per day</strong> (adjusted for inflation from the statutory $500) for each day the violation continues. There is no maximum cap on this penalty. That means the fines accumulate indefinitely until you file the required report or the government takes enforcement action. A company that is 30 days late faces $17,730 in penalties. A company that is 90 days late faces $53,190. A company that is one year late faces $215,715.
                </p>
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Penalties for Inaccurate Filings</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  These penalties also apply to filing a report with false or incomplete information. If FinCEN determines that your report contains inaccurate beneficial ownership data, the $591/day penalty begins accruing from the date the inaccurate report was due to be corrected. FinCEN provides a 90-day safe harbor for voluntary corrections, but only if you catch and fix errors yourself. Filing a sloppy report to meet the deadline can expose you to the same penalties as not filing at all.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The civil penalties apply to the reporting company itself, but individual officers and managers who cause the failure can also face personal liability. FinCEN has the authority to assess penalties against any person who willfully fails to file or willfully causes a company to provide false information. This personal liability makes BOI compliance a matter of individual risk, not just corporate risk.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Criminal Penalties */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Are the Criminal Penalties for <span className="font-display gradient-text">BOI Non-Compliance?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Federal Criminal Charges for Willful Violations</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Beyond civil fines, willful violation of the BOI reporting requirements is a federal crime under 31 USC Section 5336(h). The criminal penalties include fines of up to <strong className="text-[var(--color-text)]">$10,000</strong> and imprisonment for up to <strong className="text-[var(--color-text)]">2 years</strong>. Criminal penalties apply to individuals who knowingly and willfully provide false or fraudulent beneficial ownership information, or who knowingly and willfully fail to file a required report.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The criminal standard requires &quot;willfulness,&quot; meaning the government must prove that the individual knew about the filing requirement and deliberately chose not to comply. Ignorance of the requirement may serve as a defense against criminal charges, but it does not protect against civil penalties. This distinction means that even if you avoid criminal prosecution by claiming you did not know about BOI reporting, you can still face the $500/day civil fines.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The criminal penalties can also be enhanced if the BOI violation is connected to other crimes, such as money laundering, tax evasion, or fraud. In those cases, the BOI violation becomes an additional charge that increases overall sentencing exposure. FinCEN designed these penalties to make the cost of non-compliance far exceed the cost of filing, creating a strong incentive to comply.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* BOI Penalty Types Comparison */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Civil vs Criminal Penalties: <span className="font-display gradient-text">Complete Comparison</span>
              </h2>
            </AnimateIn>

            <AnimateIn>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Factor</th><th className="px-4 py-3 font-semibold">Civil Penalties</th><th className="px-4 py-3 font-semibold">Criminal Penalties</th></tr></thead>
                  <tbody>
                    {[
                      { factor: "Legal Standard", civil: "Strict liability (no intent needed)", criminal: "Willful violation required" },
                      { factor: "Daily Fine", civil: "$591/day (inflation-adjusted)", criminal: "N/A" },
                      { factor: "Maximum Fine", civil: "No cap (unlimited)", criminal: "$10,000 per violation" },
                      { factor: "Imprisonment", civil: "None", criminal: "Up to 2 years" },
                      { factor: "Who Faces It", civil: "Company and responsible individuals", criminal: "Individuals who willfully violate" },
                      { factor: "Trigger", civil: "Late filing, inaccurate filing, failure to update", criminal: "Knowingly false info or willful refusal" },
                      { factor: "Defense Available", civil: "Limited (file to stop accrual)", criminal: "Lack of knowledge/willfulness" },
                      { factor: "Safe Harbor", civil: "90-day correction window for inaccuracies", criminal: "Correction within 90 days may prevent charges" },
                      { factor: "Enforcement Agency", civil: "FinCEN (Treasury Department)", criminal: "DOJ (Department of Justice)" },
                      { factor: "Statute Reference", civil: "31 USC 5321", criminal: "31 USC 5336(h)" },
                    ].map((row, i) => (
                      <tr key={row.factor} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                        <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.factor}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.civil}</td>
                        <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.criminal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Who Is Liable? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Who Is Personally Liable for <span className="font-display gradient-text">BOI Penalties?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Personal Liability Extends Beyond the Company</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The Corporate Transparency Act makes individuals personally liable for BOI violations, not just the company. 5 categories of people face personal exposure: founders, officers, directors, managers, and anyone with authority over the company&apos;s filings. Any person who willfully provides false information, willfully fails to file a required report, or willfully causes a company to file inaccurate information faces personal civil and criminal penalties.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For LLCs, the members and managers who control the company&apos;s operations bear responsibility. For corporations, the officers and directors bear responsibility. If you delegate the filing to an employee or a third party and they fail to file or file inaccurately, you may still be held liable if you had the authority and obligation to ensure compliance. The duty to file cannot be delegated away.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This personal liability extends to beneficial owners who provide false identifying information. If a beneficial owner gives the company incorrect information about their identity, that individual faces the same $500/day civil penalties and potential criminal charges. Every person involved in the BOI reporting chain has an independent obligation to provide truthful information.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How to Cure Late Filings */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Cure a Late or Inaccurate <span className="font-display gradient-text">BOI Filing?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">File Immediately to Limit Exposure</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you missed your BOI filing deadline, file immediately. Every day you wait adds $591 to your potential penalty exposure. There is no formal amnesty program for late filers, but filing voluntarily before enforcement action demonstrates good faith and may influence how FinCEN handles your case. The worst outcome is doing nothing and letting penalties accumulate indefinitely. A company that missed the January 1, 2025 deadline and files on April 16, 2026 faces a theoretical exposure of over $278,000 in civil penalties alone.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For inaccurate reports, FinCEN provides a 90-day safe harbor for corrections. If you discover that information in your BOI report is inaccurate and you voluntarily correct it within 90 days of the original filing, you may avoid penalties for the inaccuracy. This safe harbor applies only to corrections, not to reports that were never filed. To use it, submit a corrected BOI report through FinCEN&apos;s filing system within 90 days of the original report date.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  You must also file an updated BOI report within 30 days whenever there is a change in beneficial ownership information, such as a new owner, a change of address, or a name change. Failing to update within 30 days triggers the same penalties as failing to file the initial report. Keep your BOI information current to stay compliant. Learn about{" "}
                  <Link href="/boi-filing-deadline/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    BOI filing deadlines
                  </Link>{" "}
                  to make sure you never miss a date.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How to Avoid BOI Penalties */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Avoid BOI <span className="font-display gradient-text">Penalties Entirely?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">File on Time</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    The simplest way to avoid penalties is to file your BOI report before the deadline. Companies formed before January 1, 2024 had an initial deadline of January 1, 2025 (check FinCEN for extensions). Companies formed on or after January 1, 2024 must file within 90 days of formation. Mark these dates and file early.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">File Accurately</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Verify every piece of beneficial ownership information before submitting. Confirm legal names match government-issued IDs, addresses are current, and ownership percentages are correct. Inaccurate filings carry the same penalties as late filings. Take the time to get it right the first time.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Update Within 30 Days</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Whenever beneficial ownership information changes (new owner, address change, name change), file an updated BOI report within 30 days. Set reminders for your team so ownership changes trigger an immediate filing update. Missing the 30-day update window starts the $500/day penalty clock.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Use a Filing Service</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Let ein.so handle your BOI filing. We collect the required information, verify it for accuracy, and submit the report to FinCEN on your behalf. This eliminates the risk of errors and missed deadlines. For companies that also need an EIN, we can handle both filings together. See our{" "}
                    <Link href="/boi-filing/" className="text-[var(--color-blue)] hover:underline font-semibold">
                      BOI filing service
                    </Link>{" "}
                    for details.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* EIN and BOI Connection */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Does Your LLC Need an EIN Before <span className="font-display gradient-text">Filing BOI?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Yes. Your BOI report requires your company&apos;s EIN (or Tax ID). FinCEN uses the EIN to identify your entity in their database. If you formed your LLC or corporation but have not yet obtained an EIN, you need to get one before you can complete your BOI filing. The good news is that getting an EIN is fast, so it should not delay your BOI report significantly.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  ein.so can handle both your EIN application and your BOI filing. We apply for your EIN first, and once it is issued, we use it to complete your BOI report. This streamlined process ensures both filings are done correctly and on time. For{" "}
                  <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    LLCs that need an EIN
                  </Link>, we recommend starting the process as early as possible so you have your EIN in hand before the BOI deadline.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Do not let BOI penalties accumulate. The $500/day fine structure means every day of delay costs real money. Whether you file yourself or use ein.so, the important thing is to file accurately and on time.{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    Start your EIN and BOI filing today
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
              { label: "BOI Filing", href: "/boi-filing/" },
              { label: "BOI Filing Deadline", href: "/boi-filing-deadline/" },
              { label: "EIN for LLC", href: "/ein-for-llc/" },
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
        title="Avoid $500/Day BOI Penalties"
        subtitle="File your BOI report and get your EIN. We handle both filings for you."
      />
    </>
  );
}
