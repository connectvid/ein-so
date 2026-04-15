"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForLlcClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="LLC Requirements"
        title="EIN for LLC:"
        titleAccent="Do You Need One? (2026)"
        description="Every LLC needs an EIN for tax filing, banking, and hiring. Learn the requirements for single-member and multi-member LLCs, how to apply, and why BOI filing is now mandatory."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Yes, every LLC needs an EIN. The IRS requires multi-member LLCs to have an EIN for partnership tax filing. Single-member LLCs need an EIN to open bank accounts, hire employees, and protect the owner&apos;s SSN.</strong>{" "}
                  An EIN is free from the IRS if you apply online with an SSN. Non-US residents who own a US LLC can get an EIN through ein.so for $49. Additionally, most LLCs must now file a Beneficial Ownership Information (BOI) report with FinCEN or face penalties of $500 per day.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Forming an LLC is one of the most common first steps for new business owners in the United States. Whether you are a US resident launching a local business or an international entrepreneur setting up a US entity, your LLC will need an EIN before it can function. This guide covers everything you need to know about getting an EIN for your LLC, including the differences between single-member and multi-member requirements, the mandatory BOI filing, and how non-residents can apply.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a broader overview of <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">what an EIN is</Link> and <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs one</Link>, see our dedicated guides. This page focuses specifically on EIN requirements for LLCs.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Does an LLC Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does an LLC Need <span className="font-display gradient-text">an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                An LLC needs an EIN for three core reasons: federal tax obligations, business banking, and hiring employees. Without an EIN, your LLC cannot function as a legitimate business entity in the United States.
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Federal Tax Filing", desc: "Multi-member LLCs file IRS Form 1065 (Partnership Return) as partnerships, which requires an EIN. Single-member LLCs that elect corporate taxation (Form 8832) also need an EIN. Even disregarded entities benefit from having an EIN for clean tax reporting." },
                  { title: "Business Bank Accounts", desc: "Every US bank requires an EIN to open a business bank account for an LLC. You cannot use a personal SSN to open an LLC account. The bank verifies your EIN with the IRS to confirm your business entity exists." },
                  { title: "Hiring Employees", desc: "If your LLC hires even one employee, you must have an EIN for payroll tax reporting. The EIN is used on W-2 forms, quarterly payroll tax returns (Form 941), and annual employer returns." },
                  { title: "Business Credit and Vendor Relationships", desc: "Building business credit requires an EIN. Credit bureaus (Dun & Bradstreet, Experian Business) use your EIN to track your LLC's credit history. Vendors and suppliers also require your EIN on W-9 forms." },
                  { title: "SSN Protection", desc: "Using your personal SSN on business documents exposes you to identity theft risk. An EIN replaces your SSN on W-9 forms, invoices, contracts, and other business documents, keeping your personal information private." },
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

      {/* Single-Member vs Multi-Member */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Does a Single-Member LLC Need an EIN <span className="font-display gradient-text">vs Multi-Member?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS treats single-member and multi-member LLCs differently for tax purposes, which affects the EIN requirement. Here is the breakdown:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Factor</th>
                      <th className="text-left p-4 font-bold">Single-Member LLC</th>
                      <th className="text-left p-4 font-bold">Multi-Member LLC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">IRS Classification</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Disregarded entity (by default)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Partnership (by default)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">EIN Required by IRS?</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Only if hiring employees or electing corporate tax</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes, always required</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">EIN Needed in Practice?</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes (banks require it)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Tax Form Filed</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Schedule C (on personal return)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1065 (partnership return)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The bottom line: regardless of whether your LLC has one member or ten, you should get an EIN. The question is not whether you need one -- it is how quickly you can get one so your business can start operating.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* BOI Filing Requirement */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Mandatory Compliance</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Does Your LLC Need to File a <span className="font-display gradient-text">BOI Report?</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 text-red-600 text-xl font-bold">!</span>
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">$500/Day Penalty for Non-Compliance</h3>
                    <p className="text-red-700 leading-relaxed">
                      BOI reporting is required under the Corporate Transparency Act (31 USC §5336), which requires most LLCs to file a Beneficial Ownership Information (BOI) report with the Financial Crimes Enforcement Network (FinCEN). Failure to file carries civil penalties of <strong>$500 per day</strong> and potential criminal penalties including fines up to $10,000 and imprisonment up to 2 years.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The BOI report identifies the individuals who ultimately own or control your LLC. This requirement applies to most LLCs operating in the United States, including those owned by non-US residents. LLCs formed in 2024 or later must file their initial BOI report within 90 days of formation. LLCs that existed before 2024 must also file.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The BOI report requires information about each beneficial owner: full legal name, date of birth, residential address, and a copy of an identifying document (passport, driver&apos;s license, or state ID). A beneficial owner is anyone who directly or indirectly owns 25% or more of the LLC or exercises substantial control over it.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">ein.so offers BOI filing assistance.</strong> When you get your EIN through us, we can also prepare and submit your BOI report to FinCEN, ensuring your LLC is fully compliant from day one. <Link href="/boi-filing/" className="text-[var(--color-blue)] hover:underline font-semibold">Learn more about BOI filing requirements</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Get an EIN for Your LLC */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Get an EIN <span className="font-display gradient-text">for Your LLC?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process for getting an EIN for your LLC depends on whether you are a US resident with an SSN or ITIN, or a non-US resident without either. Both paths result in the same EIN.
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US Residents (with SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Go to the IRS EIN Assistant at irs.gov</li>
                  <li>Select &quot;Limited Liability Company (LLC)&quot; as your entity type</li>
                  <li>Enter the number of members in your LLC</li>
                  <li>Provide the responsible party&apos;s SSN or ITIN</li>
                  <li>Enter your LLC&apos;s legal name and address</li>
                  <li>Submit and receive your EIN <strong className="text-[var(--color-text)]">instantly</strong></li>
                </ol>
              </div>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Residents (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete IRS Form SS-4 with your LLC&apos;s details</li>
                  <li>Enter your passport number in the responsible party section (no SSN required)</li>
                  <li>Fax the form to the IRS at 855-215-1627</li>
                  <li>Wait 4-7 business days for processing</li>
                  <li>Receive your EIN by fax from the IRS</li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Or let ein.so handle the entire process for <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your application</Link>.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For detailed instructions on completing Form SS-4 correctly, see our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 Form Guide</Link>. For information on applying without an SSN, read our <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN for LLC Bank Account */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do You Need an EIN for an LLC <span className="font-display gradient-text">Bank Account?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Yes, without exception.</strong> Every US bank requires an EIN to open a business bank account for an LLC. This is a federal regulatory requirement, not a bank policy that you can negotiate around. The bank uses your EIN to report account activity to the IRS and to verify that your business entity is legitimate.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                When you open an LLC bank account, the bank will ask for your EIN Confirmation Letter (also called a CP 575 or 147C letter) from the IRS. This letter proves that your EIN was legitimately assigned to your LLC by the IRS. ein.so provides this letter as part of every EIN application we process.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a complete guide on using your EIN to open a bank account, see our <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank account guide</Link>. This is especially important for non-US residents who need to open a US bank account for their LLC.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Non-Resident LLC EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">International</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Can a Non-US Resident Get an EIN <span className="font-display gradient-text">for a US LLC?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Yes.</strong> Non-US residents form US LLCs every day -- it is one of the most popular business structures for international entrepreneurs. LLCs are governed by state statute (e.g., Wyoming LLC Act §17-29-101 et seq.), and states like Wyoming, Delaware, and New Mexico are particularly popular for non-resident LLC formation because they offer favorable privacy protections and low fees.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                After forming your LLC, you must obtain an EIN before you can open a bank account, accept payments, or file taxes. Since non-residents cannot use the IRS online system, the fax method with Form SS-4 is the standard approach. You do not need an SSN or ITIN -- your passport number and foreign address are sufficient.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so was built specifically for this use case. We handle the SS-4 preparation, fax filing, and IRS follow-up for non-resident LLC owners. Our Standard service costs <strong className="text-[var(--color-text)]">$49</strong> and our Express service costs <strong className="text-[var(--color-text)]">$97</strong>. Read our complete guide on <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN</Link> for the full process.
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
