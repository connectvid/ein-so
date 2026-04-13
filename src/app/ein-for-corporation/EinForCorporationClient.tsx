"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForCorporationClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Corporations"
        title="EIN for Corporation:"
        titleAccent="How to Apply (2026)"
        description="Every corporation needs an EIN for tax filing, payroll, banking, and compliance. Learn how to apply online or by fax, who qualifies as the responsible party, and what non-US founders need to know."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Every corporation must have an EIN. The IRS requires it for filing corporate tax returns (Form 1120 or 1120-S), withholding payroll taxes, and opening business bank accounts. There are no exceptions -- both C-Corps and S-Corps need an EIN.</strong>{" "}
                  US residents with an SSN apply online at irs.gov and receive the EIN instantly. Non-US residents apply by fax using Form SS-4. ein.so handles fax applications for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                A corporation is a legal entity separate from its owners. This separation means the corporation needs its own tax identification number -- an EIN. Unlike sole proprietors who can sometimes use their SSN, corporations have a hard requirement: no EIN, no corporate tax return, no payroll, no bank account. This guide walks you through every step of getting an EIN for your corporation.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For background on EINs in general, see <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">what an EIN is</Link>. For a list of all entity types that need an EIN, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs an EIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Corporations Need an EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does Every Corporation <span className="font-display gradient-text">Need an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Corporations use their EIN for virtually every financial and legal interaction with the federal government, banks, and business partners. Here are the core reasons:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Corporate Tax Filing", desc: "C-Corps file Form 1120 and S-Corps file Form 1120-S. Both forms require an EIN. Without one, the IRS cannot process your corporate tax return or track your tax obligations." },
                  { title: "Payroll and Employment Taxes", desc: "Corporations pay employees through payroll, which requires withholding federal income tax, Social Security, and Medicare. The EIN appears on every W-2, Form 941 (quarterly payroll return), and Form 940 (annual FUTA return)." },
                  { title: "Business Banking", desc: "No US bank will open a corporate bank account without an EIN. The bank uses the EIN to verify your corporation with the IRS and to report interest and account activity. This applies to checking accounts, savings accounts, credit cards, and loan applications." },
                  { title: "Issuing Stock and Dividends", desc: "Corporations that issue dividends to shareholders must report them on Form 1099-DIV, which requires the corporation's EIN. Even if you do not currently pay dividends, the EIN is necessary for stock issuance records." },
                  { title: "Business Licenses and Permits", desc: "State and local governments often require an EIN on business license applications. The EIN links your corporation's federal and state registrations, creating a consistent identification trail across jurisdictions." },
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

      {/* C-Corp vs S-Corp */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do C-Corps and S-Corps Get <span className="font-display gradient-text">Different EINs?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                No. Both C-Corps and S-Corps use the same type of EIN. The EIN itself does not indicate your tax election. When you first incorporate, the IRS assigns an EIN to your corporation as a C-Corp by default. If you later elect S-Corp status by filing Form 2553, you keep the same EIN.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Factor</th>
                      <th className="text-left p-4 font-bold">C-Corp</th>
                      <th className="text-left p-4 font-bold">S-Corp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">EIN Required?</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes (same EIN)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Tax Form</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1120</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1120-S</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Taxation</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Double taxation (corporate + personal)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Pass-through to shareholders</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">New EIN After Election?</td>
                      <td className="p-4 text-[var(--color-text-muted)]">N/A</td>
                      <td className="p-4 text-[var(--color-text-muted)]">No -- keep existing EIN</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are considering S-Corp election for your corporation, read our <Link href="/s-corp-election/" className="text-[var(--color-blue)] hover:underline font-semibold">S-Corp election guide</Link> and our dedicated page on <Link href="/ein-for-scorp/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for S-Corps</Link>.
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
              How Do You Apply for a <span className="font-display gradient-text">Corporate EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The application process is the same regardless of whether your corporation is a C-Corp or S-Corp. You need your articles of incorporation and the responsible party&apos;s personal identification.
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US Residents (with SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Go to the IRS EIN Assistant at irs.gov</li>
                  <li>Select &quot;Corporation&quot; as your entity type</li>
                  <li>Specify the type of corporation (general, S-Corp, personal service, church-controlled)</li>
                  <li>Enter the responsible party&apos;s name and SSN or ITIN</li>
                  <li>Provide the corporation&apos;s legal name as shown on articles of incorporation</li>
                  <li>Enter the corporate address and state of incorporation</li>
                  <li>Submit and receive your EIN <strong className="text-[var(--color-text)]">instantly</strong></li>
                </ol>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Residents (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete IRS Form SS-4 selecting &quot;Corporation&quot; as entity type</li>
                  <li>Enter the responsible party&apos;s name and passport number</li>
                  <li>Provide the corporation&apos;s legal name and state of incorporation</li>
                  <li>Fax the completed form to the IRS at 855-215-1627</li>
                  <li>Wait 4-7 business days for processing</li>
                  <li>Receive your EIN confirmation by fax</li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Or let ein.so handle everything for <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your application</Link>.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The Responsible Party */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Key Concept</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Who Is the Responsible Party <span className="font-display gradient-text">on a Corporate EIN Application?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The responsible party is the individual who controls, manages, or directs the corporation and the disposition of its funds and assets. The IRS requires this to be a person, not an entity. For corporations, the responsible party is typically the president, CEO, or another principal officer listed in the articles of incorporation or bylaws.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The responsible party must provide their SSN, ITIN, or passport number (for non-US residents) on the EIN application. This links the corporation&apos;s EIN to a real individual, which the IRS uses for accountability purposes. If the responsible party changes, the corporation must update the IRS by filing Form 8822-B within 60 days.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Common mistakes on corporate EIN applications include listing the registered agent as the responsible party (incorrect -- the agent is a service provider, not a controller of funds) or listing another corporation as the responsible party (also incorrect -- must be an individual). Avoid these errors to prevent delays in your application.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For non-US residents forming a US corporation, the responsible party is typically the foreign founder or director who exercises actual control over the corporation. A US-based registered agent does not qualify. Read our guide on <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN</Link> for more details on the responsible party requirement.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Corporate Banking */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do You Need an EIN to Open a <span className="font-display gradient-text">Corporate Bank Account?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Yes, without exception.</strong> US banks require an EIN, articles of incorporation, and a corporate resolution (or meeting minutes authorizing the account) to open a corporate bank account. The EIN is the first document the bank will ask for.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                When you apply for an EIN through ein.so, we provide your EIN Confirmation Letter (CP 575 equivalent). This letter serves as proof that the IRS assigned the EIN to your corporation and is accepted by all US banks. For non-US residents opening a US corporate bank account, this letter is essential.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a complete walkthrough of using your EIN to open a bank account, including which banks are most friendly to non-US residents, see our <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank account guide</Link>.
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
