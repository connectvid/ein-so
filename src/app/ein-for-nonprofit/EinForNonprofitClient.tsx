"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForNonprofitClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Nonprofits"
        title="EIN for Nonprofit:"
        titleAccent="How to Apply (2026)"
        description="Every nonprofit needs an EIN before applying for 501(c)(3) tax-exempt status. Learn the correct Form SS-4 selections, who qualifies as the responsible party, and how to apply step by step."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Every nonprofit organization needs an EIN. You must obtain an EIN before applying for 501(c)(3) tax-exempt status, filing Form 990, opening a bank account, or applying for grants. The EIN is the foundation of your nonprofit&apos;s federal identity.</strong>{" "}
                  Apply online at irs.gov if a responsible party has an SSN or ITIN. Select &quot;Other nonprofit organization&quot; as the entity type on Form SS-4. Non-US residents can apply by fax through ein.so for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Starting a nonprofit involves multiple federal and state filings. The EIN application is one of the first steps because nearly every subsequent filing requires it. You need the EIN before you file Form 1023 (or 1023-EZ) for tax-exempt recognition, before you open a bank account to receive donations, and before you apply for most grants. This guide walks you through the entire process.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For general information about EINs, see <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">what an EIN is</Link>. For a list of all entity types requiring an EIN, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs an EIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Nonprofits Need an EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does Every Nonprofit <span className="font-display gradient-text">Need an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Nonprofits are separate legal entities. Even though they do not pay income tax (once granted exempt status), they still have extensive reporting obligations to the IRS and need an EIN for all of them:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "501(c)(3) Application", desc: "Form 1023 and Form 1023-EZ both require your EIN. The IRS will not process your tax-exempt application without it. Get your EIN first, then file for tax-exempt status." },
                  { title: "Form 990 Annual Filing", desc: "Most tax-exempt organizations must file Form 990, 990-EZ, or 990-N annually. Your EIN identifies your organization on these returns. Missing Form 990 filings for three consecutive years results in automatic revocation of tax-exempt status." },
                  { title: "Bank Accounts and Donations", desc: "Banks require an EIN to open a nonprofit bank account. Donors who give $250 or more need a written acknowledgment from the nonprofit, and grant-making foundations verify your EIN against the IRS exempt organizations database before funding your programs." },
                  { title: "Payroll and Employment", desc: "If your nonprofit has paid staff, the EIN is required for withholding income tax, Social Security, and Medicare from employee wages. It appears on W-2 forms, Form 941 (quarterly payroll returns), and Form 940 (FUTA returns)." },
                  { title: "State Registrations", desc: "Most states require nonprofits to register for charitable solicitation before fundraising. These state registrations require your federal EIN. State tax exemption applications also reference your federal EIN." },
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
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The 501(c)(3) Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Timeline</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Where Does the EIN Fit in the <span className="font-display gradient-text">501(c)(3) Application Process?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The EIN is one of the earliest steps in forming a nonprofit. Here is the typical sequence:
              </p>

              <ol className="space-y-4 text-[var(--color-text-muted)]">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center text-sm font-bold">1</span>
                  <div><strong className="text-[var(--color-text)]">Incorporate with your state.</strong> File articles of incorporation with the Secretary of State, including the required IRS language for tax-exempt purposes (charitable purpose clause and dissolution clause).</div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center text-sm font-bold">2</span>
                  <div><strong className="text-[var(--color-text)]">Apply for an EIN.</strong> Use Form SS-4 and select &quot;Other nonprofit organization.&quot; You need the EIN before you can proceed to step 3.</div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center text-sm font-bold">3</span>
                  <div><strong className="text-[var(--color-text)]">File Form 1023 or 1023-EZ.</strong> Apply for 501(c)(3) tax-exempt recognition. The full Form 1023 costs $600 to file. Form 1023-EZ (for smaller organizations) costs $275.</div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center text-sm font-bold">4</span>
                  <div><strong className="text-[var(--color-text)]">Open a bank account.</strong> Use your EIN and articles of incorporation to open a nonprofit bank account for receiving donations and paying expenses.</div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center text-sm font-bold">5</span>
                  <div><strong className="text-[var(--color-text)]">Register for state tax exemption and charitable solicitation.</strong> Most states require separate applications referencing your federal EIN and 501(c)(3) determination letter.</div>
                </li>
              </ol>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The EIN application itself takes minutes. The bottleneck is the 501(c)(3) determination, which can take 3-6 months for full Form 1023 or 2-4 weeks for Form 1023-EZ. Do not delay getting your EIN -- it holds up everything else in the process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Apply for an EIN <span className="font-display gradient-text">for a Nonprofit?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process depends on whether the responsible party (a principal officer of the nonprofit) has an SSN or ITIN. The most critical detail: select &quot;Other nonprofit organization&quot; as your entity type.
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US-Based Nonprofits (responsible party has SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Go to the IRS EIN Assistant at irs.gov</li>
                  <li>Select &quot;View Additional Types, Including Tax-Exempt and Governmental Organizations&quot;</li>
                  <li>Choose &quot;Other nonprofit/tax-exempt organization&quot;</li>
                  <li>Enter the responsible party&apos;s name and SSN or ITIN</li>
                  <li>Provide the nonprofit&apos;s legal name as shown on articles of incorporation</li>
                  <li>Enter the organization&apos;s address</li>
                  <li>Submit and receive your EIN <strong className="text-[var(--color-text)]">instantly</strong></li>
                </ol>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Residents (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete Form SS-4 selecting &quot;Other nonprofit organization&quot; on line 9a</li>
                  <li>Enter the responsible party&apos;s name and passport number</li>
                  <li>Provide the nonprofit&apos;s legal name and address</li>
                  <li>Specify the nonprofit&apos;s purpose (charitable, educational, religious, etc.)</li>
                  <li>Fax the form to the IRS at 855-215-1627</li>
                  <li>Wait 4-7 business days for your EIN</li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Or let ein.so handle the process for <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your application</Link>.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Avoid These Errors</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Mistakes Do Nonprofits Make <span className="font-display gradient-text">on EIN Applications?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Nonprofits frequently make errors on the EIN application that cause delays or complications with the subsequent 501(c)(3) filing. Here are the most common mistakes and how to avoid them:
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Selecting the wrong entity type.</strong> The most common error is selecting &quot;Corporation&quot; instead of &quot;Other nonprofit organization.&quot; While many nonprofits are incorporated, the IRS treats nonprofit entities differently from for-profit corporations. Selecting the wrong type can cause the IRS to set up your account incorrectly, leading to mismatched records when you file Form 1023.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Using the organization name as the responsible party.</strong> The responsible party must be an individual person -- the board president or executive director. Entering the organization&apos;s name in the responsible party field will result in a rejected application.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Mismatching the legal name.</strong> The name on your EIN application must match the name on your articles of incorporation exactly. Abbreviations, punctuation differences, or missing words (like &quot;Inc.&quot;) will cause issues when you file for tax-exempt status or open a bank account.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Waiting too long to apply.</strong> Some nonprofit founders delay the EIN application, thinking they need tax-exempt status first. The opposite is true: you need the EIN before you can apply for tax-exempt status. Get the EIN immediately after incorporating. For more on the application process, see our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
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
