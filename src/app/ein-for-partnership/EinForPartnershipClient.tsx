"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForPartnershipClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Partnerships"
        title="EIN for Partnership:"
        titleAccent="Required for All Partnerships (2026)"
        description="Every partnership needs an EIN. The IRS requires it for Form 1065 filing, issuing K-1s to partners, opening bank accounts, and hiring employees. Learn how to apply."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Every partnership must have an EIN. The IRS requires partnerships to file Form 1065 annually and issue Schedule K-1 to each partner, both of which require an EIN. You cannot use a partner&apos;s SSN for partnership tax filing.</strong>{" "}
                  This applies to general partnerships, limited partnerships (LPs), and limited liability partnerships (LLPs). US residents apply online for free. Non-US residents apply by fax using Form SS-4, or through ein.so for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                A partnership forms when two or more people agree to carry on a business together for profit. Unlike a sole proprietorship, a partnership is a separate entity for tax purposes. The IRS assigns it an EIN and expects it to file its own tax return. This guide covers the EIN requirement for all types of partnerships and walks you through the application process.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For general EIN information, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs an EIN</Link>. If your partnership is structured as a multi-member LLC, the same rules apply -- multi-member LLCs are taxed as partnerships by default.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Partnerships Need an EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does Every Partnership <span className="font-display gradient-text">Need an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                4 million partnerships file Form 1065 annually, and every single one requires an EIN. Partnerships are pass-through entities for tax purposes. The partnership itself does not pay income tax. Instead, it reports income and deductions on Form 1065, and each partner receives a Schedule K-1 showing their share. The EIN is required for every step of this process:
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">5 EIN-Dependent Obligations for Partnerships</h3>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Form 1065 Filing", desc: "Every partnership files Form 1065 (US Return of Partnership Income) annually. The form requires the partnership's EIN. Without it, the IRS cannot process your return." },
                  { title: "Schedule K-1 Distribution", desc: "The partnership issues Schedule K-1 to each partner, reporting their share of income, deductions, and credits. The K-1 includes the partnership's EIN, which partners need for their personal tax returns." },
                  { title: "Business Bank Accounts", desc: "Banks require an EIN to open a partnership bank account. Partnership funds must be kept separate from personal accounts. The bank verifies the EIN with the IRS before opening the account." },
                  { title: "Hiring Employees", desc: "If the partnership hires employees, the EIN is used for payroll tax reporting on W-2 forms, Form 941 (quarterly payroll), and Form 940 (annual FUTA). The partnership withholds taxes under its EIN." },
                  { title: "1099 Reporting", desc: "Partnerships that pay independent contractors $600 or more must issue Form 1099-NEC. The partnership's EIN appears on these forms as the payer's TIN." },
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

      {/* Types of Partnerships */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Entity Types</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do All Types of Partnerships <span className="font-display gradient-text">Need an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Yes -- all 4 partnership types recognized by the IRS must have an EIN. Every one files Form 1065. Here is how the EIN requirement applies to each:
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Partnership Types and EIN Requirements</h3>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Partnership Type</th>
                      <th className="text-left p-4 font-bold">EIN Required?</th>
                      <th className="text-left p-4 font-bold">Tax Form</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">General Partnership (GP)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1065</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Limited Partnership (LP)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1065</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Limited Liability Partnership (LLP)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1065</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Multi-Member LLC (default)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1065</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS treats all of these entities identically for EIN and tax filing purposes. They all file Form 1065, issue K-1s, and need an EIN. The liability protections differ at the state level, but the federal tax treatment is the same.
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
              How Do You Apply for an EIN <span className="font-display gradient-text">for a Partnership?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                US residents apply online and receive the EIN instantly at $0 cost. Non-US residents apply by fax in 4-7 business days. The responsible party on a partnership EIN application must be a general partner -- an individual who controls, manages, or directs the partnership and its funds.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Partnership EIN Application Checklist</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Item Required</th><th className="px-4 py-3 font-semibold">US Resident Partners</th><th className="px-4 py-3 font-semibold">Non-US Resident Partners</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Responsible Party ID</td><td className="px-4 py-3 text-[var(--color-text-muted)]">SSN or ITIN</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Passport number</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Application Method</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Online at irs.gov</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Fax Form SS-4</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Processing Time</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Instant</td><td className="px-4 py-3 text-[var(--color-text-muted)]">4-7 business days</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">IRS Cost</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$0</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$0 (IRS) + $49-$97 (ein.so)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Partnership Agreement</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Recommended</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Recommended</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US Residents (with SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Go to the IRS EIN Assistant at irs.gov</li>
                  <li>Select &quot;Partnership&quot; as your entity type</li>
                  <li>Enter the number of partners</li>
                  <li>Provide the responsible party&apos;s (general partner&apos;s) name and SSN or ITIN</li>
                  <li>Enter the partnership&apos;s legal name and address</li>
                  <li>Submit and receive your EIN <strong className="text-[var(--color-text)]">instantly</strong></li>
                </ol>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Residents (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete IRS Form SS-4 selecting &quot;Partnership&quot; as entity type</li>
                  <li>Enter the responsible party&apos;s (general partner&apos;s) name and passport number</li>
                  <li>Provide the partnership&apos;s legal name and US address</li>
                  <li>Fax the form to the IRS at 855-215-1627</li>
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

      {/* Partnership Banking */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do You Need an EIN to Open a <span className="font-display gradient-text">Partnership Bank Account?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Yes.</strong> Every US bank requires an EIN to open a business bank account for a partnership. You will also need your partnership agreement (or a letter signed by all partners authorizing the account) and government-issued ID for the person opening the account.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Partnership funds must be kept separate from the personal accounts of individual partners. Commingling funds creates legal and tax complications. The partnership bank account, identified by the partnership&apos;s EIN, is where all business income flows in and all business expenses flow out.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                When you apply through ein.so, we provide your EIN Confirmation Letter, which banks require as proof that the IRS assigned the EIN to your partnership. For more details on using your EIN to open a bank account, see our <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank account guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* When You Need a New EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Important Rules</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              When Does a Partnership Need <span className="font-display gradient-text">a New EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                3 specific events trigger a new EIN requirement for partnerships. In all other cases -- including partner changes, name changes, and address changes -- the partnership keeps its original EIN permanently. Here are the 3 triggers:
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">When a New EIN Is and Is Not Required</h3>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Partnership dissolves and a new one forms.</strong> If the partnership terminates (all partners leave, or the partnership agreement ends) and a new partnership is created -- even with some of the same partners -- the new partnership needs a new EIN. The old EIN cannot be reused.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Partnership incorporates.</strong> If the partnership converts to a corporation, the new corporation needs its own EIN. The partnership EIN stays with the now-dissolved partnership for record-keeping purposes.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">You do NOT need a new EIN when:</strong> a partner joins or leaves (as long as the partnership continues), the partnership changes its name, or the partnership moves to a new address. In these cases, update the IRS by filing the appropriate forms (Form 8822-B for address or responsible party changes) but keep your existing EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For detailed guidance on the full EIN application process, see our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN guide</Link>.
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
