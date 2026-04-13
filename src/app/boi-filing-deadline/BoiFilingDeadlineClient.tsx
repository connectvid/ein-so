"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function BoiFilingDeadlineClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Compliance Deadline"
        title="BOI Filing Deadline 2026:"
        titleAccent="When Is Your Report Due?"
        description="Your BOI filing deadline depends on when your company was formed. Missing it costs $500 per day. Know your deadline, file on time, and avoid devastating penalties."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>Companies formed before January 1, 2024 had a BOI filing deadline of January 1, 2025. Companies formed in 2024 must file within 90 days of formation. Companies formed in 2025 or later must file within 30 days of formation.</strong>{" "}
                If you miss your deadline, you face civil penalties of $500 per day, criminal fines up to $10,000, and up to 2 years in prison for willful non-compliance.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* BOI Filing Deadline by Formation Date */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                BOI Filing Deadline by <span className="font-display gradient-text">Formation Date</span>
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
                FinCEN set different deadlines based on when your company was formed or registered. Here is the complete
                breakdown:
              </p>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-lg font-bold text-[var(--color-text)]">Formed Before January 1, 2024</h3>
                    <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-xs font-bold text-red-700 whitespace-nowrap">
                      DEADLINE PASSED
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                    <strong className="text-[var(--color-text)]">Deadline: January 1, 2025.</strong> If your LLC,
                    corporation, or other reporting entity was formed before January 1, 2024, your initial BOI report was due
                    by January 1, 2025. This applies to every existing entity regardless of when it was originally formed,
                    whether 2023, 2010, or 1995.
                  </p>
                  <p className="text-sm text-red-700 font-semibold leading-relaxed">
                    If you have not filed yet, you are already accruing $500/day in penalties. File immediately. Every day you
                    wait adds another $500 to your liability. Contact ein.so on WhatsApp for urgent BOI filing assistance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-lg font-bold text-[var(--color-text)]">Formed in 2024</h3>
                    <span className="inline-flex items-center rounded-full bg-[var(--color-amber)]/10 px-3 py-0.5 text-xs font-bold text-[var(--color-amber)] whitespace-nowrap">
                      90 Days from Formation
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Deadline: 90 calendar days from your formation date.</strong>{" "}
                    Companies formed between January 1, 2024 and December 31, 2024 received a 90-day window from their
                    effective formation date to file their initial BOI report. The clock starts from the date your Articles of
                    Organization or Certificate of Formation becomes effective with the state, not the date you submitted the
                    paperwork. For most 2024 companies, this deadline has already passed. If you formed in late 2024 and have
                    not filed, check your formation date and file immediately if your 90-day window has closed.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-lg font-bold text-[var(--color-text)]">Formed in 2025 or Later</h3>
                    <span className="inline-flex items-center rounded-full bg-[var(--color-blue)]/10 px-3 py-0.5 text-xs font-bold text-[var(--color-blue)] whitespace-nowrap">
                      30 Days from Formation
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Deadline: 30 calendar days from receiving formation notice.</strong>{" "}
                    Starting January 1, 2025, all newly formed or registered companies must file their initial BOI report within
                    30 calendar days of receiving actual or public notice that their formation or registration is effective. This
                    is a tight window. If you are forming a new LLC or corporation in 2025 or 2026, plan to file your BOI report
                    immediately after receiving your EIN and formation documents. Do not wait until the last day.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* What Happens If You Miss the BOI Filing Deadline? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Happens If You Miss the <span className="font-display gradient-text">BOI Filing Deadline?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Missing your BOI filing deadline triggers immediate and escalating consequences. The penalties are designed
                  to be severe enough to compel compliance, and FinCEN has the authority to enforce them aggressively.
                </p>

                <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Penalty Breakdown</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-extrabold text-red-700">$500/day</p>
                      <p className="text-sm text-red-600">Civil penalty per day of violation</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-red-700">$3,500/week</p>
                      <p className="text-sm text-red-600">Weekly accumulation</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-red-700">$15,000/month</p>
                      <p className="text-sm text-red-600">Monthly accumulation</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-red-700">$182,500/year</p>
                      <p className="text-sm text-red-600">Annual accumulation</p>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Beyond the daily civil penalties, willful failure to file or providing false information carries criminal
                  penalties: fines up to <strong className="text-[var(--color-text)]">$10,000</strong> and imprisonment for up
                  to <strong className="text-[var(--color-text)]">2 years</strong>. These criminal penalties apply to both the
                  reporting company and any individual who willfully causes the failure to file.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The best way to avoid penalties is to file now. If you are already past your deadline, file immediately.
                  FinCEN has not publicly stated whether late filers will receive the maximum penalty, but the statutory
                  authority to impose $500/day exists and grows every day you remain non-compliant.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Read more about the full scope of{" "}
                  <Link href="/boi-penalties/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    BOI penalties and enforcement actions
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How to Check If You Need to File a BOI Report */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How to Check If You Need to File a <span className="font-display gradient-text">BOI Report</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              {[
                {
                  step: "1",
                  title: "Confirm Your Entity Type",
                  detail:
                    "Was your company created by filing a document with a US state secretary of state? If you formed an LLC, corporation, LP, or LLP by filing Articles of Organization, Certificate of Formation, or Articles of Incorporation with any US state, you are a reporting company.",
                },
                {
                  step: "2",
                  title: "Check the 23 Exemptions",
                  detail:
                    "Review FinCEN's list of 23 exempt entity types. The most relevant exemption for small businesses is the 'large operating company' exemption, which requires 20+ full-time US employees, $5M+ in gross receipts, AND a physical US office. If you do not meet ALL three criteria, you are not exempt under this category.",
                },
                {
                  step: "3",
                  title: "Determine Your Formation Date",
                  detail:
                    "Check your Articles of Organization or Certificate of Formation for the effective date. This is the date the state officially recognized your entity, which determines your filing deadline (pre-2024: Jan 1, 2025 / 2024: 90 days / 2025+: 30 days).",
                },
                {
                  step: "4",
                  title: "Calculate Your Deadline",
                  detail:
                    "Based on your formation date, calculate your specific deadline. If your deadline has passed, file immediately. If it is approaching, gather your documents now and file well before the deadline to avoid last-minute issues.",
                },
                {
                  step: "5",
                  title: "File or Get Help",
                  detail:
                    "File directly through FinCEN's BOI E-Filing portal at boiefiling.fincen.gov, or contact ein.so on WhatsApp for $49 BOI filing assistance. We prepare and submit the report on your behalf.",
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
          </div>
        </div>
      </section>

      {/* BOI Filing Deadline Extensions and Legal Updates */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                BOI Filing Deadline Extensions and <span className="font-display gradient-text">Legal Updates</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The BOI filing requirement under the Corporate Transparency Act has faced legal challenges since its
                  inception. Several lawsuits have questioned the constitutionality of the reporting mandate, and courts
                  have issued temporary injunctions at various points that briefly paused enforcement.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  As of 2026, the BOI filing requirement is in full effect. FinCEN is actively accepting filings and has the
                  authority to enforce penalties. While future legal challenges or congressional action could modify the
                  requirement, relying on a potential future change is a risky strategy when penalties accumulate at $500 per
                  day.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Our recommendation: <strong className="text-[var(--color-text)]">file now</strong>. Even if the requirement
                  is later modified, filing protects you from any retroactive penalty enforcement. The filing itself is
                  straightforward and takes about 30 minutes if you have your documents ready, or you can have ein.so handle
                  it for $49.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For comprehensive information about BOI reporting requirements, visit our{" "}
                  <Link href="/boi-filing/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    complete BOI filing guide
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Don't Wait: File Your BOI Report Now */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Do Not Wait: File Your <span className="font-display gradient-text">BOI Report Now</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Every day you delay is another $500 added to your potential liability. There is zero benefit to waiting and
                  enormous risk in procrastinating. The filing process is not complicated, it just requires gathering the right
                  information and submitting it through the proper channels.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you formed your LLC recently and need an EIN before filing your BOI report, ein.so can help with both.
                  We offer{" "}
                  <strong className="text-[var(--color-text)]">EIN application service for $49</strong> (Standard) or{" "}
                  <strong className="text-[var(--color-text)]">$97</strong> (Express), plus{" "}
                  <strong className="text-[var(--color-text)]">BOI filing service for $49</strong>. Get both done through
                  a single WhatsApp conversation with our team.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Need to form an LLC first? Read our guide on{" "}
                  <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EINs for LLCs
                  </Link>{" "}
                  to understand the full setup process from entity formation to EIN to BOI filing.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2} className="mt-8">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 text-center">
                <p className="text-2xl font-extrabold text-[var(--color-text)] mb-2">$49 BOI Filing Service</p>
                <p className="text-[var(--color-text-muted)] text-sm mb-4">
                  Stop the penalty clock. We file your BOI report with FinCEN via WhatsApp.
                </p>
                <Link
                  href="/apply/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-6 py-3.5 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                >
                  File My BOI Report Now
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
              { label: "BOI Filing Guide", href: "/boi-filing/" },
              { label: "EIN for LLC", href: "/ein-for-llc/" },
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
            <StaggerItem>
              <span className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
                BOI Penalties
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Your BOI Deadline May Have Already Passed"
        subtitle="$500/day penalties are accumulating. File your BOI report through ein.so for $49. Stop the clock now."
      />
    </>
  );
}
