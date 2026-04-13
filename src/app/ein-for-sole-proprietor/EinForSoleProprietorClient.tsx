"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForSoleProprietorClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Sole Proprietor"
        title="EIN for Sole Proprietor:"
        titleAccent="Do You Need One? (2026)"
        description="Sole proprietors do not always need an EIN, but most should get one. Learn when the IRS requires it, when it is optional, and how getting an EIN protects your personal SSN."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Sole proprietors need an EIN if they hire employees, file excise tax returns, or maintain a Keogh or Solo 401(k) retirement plan. Without these triggers, an EIN is optional but highly recommended for SSN protection and business banking.</strong>{" "}
                  The IRS issues EINs free of charge. US residents apply online and receive the number instantly. Non-US residents apply by fax using Form SS-4. ein.so handles fax applications for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                A sole proprietorship is the simplest business structure in the United States. You do not file formation documents with the state. You do not need an operating agreement. The moment you start earning business income as an individual, the IRS considers you a sole proprietor. But simplicity does not mean you should skip getting an EIN. This guide explains exactly when the IRS mandates an EIN for sole proprietors, why most sole proprietors should get one regardless, and how to apply.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a broader overview of <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">what an EIN is</Link> and <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs one</Link>, see our dedicated guides. This page focuses specifically on sole proprietor EIN requirements.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* When Is an EIN Required? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">IRS Rules</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              When Does the IRS Require a Sole Proprietor <span className="font-display gradient-text">to Have an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS has clear rules about when a sole proprietor must obtain an EIN. You need an EIN if any of the following apply to your business:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "You Hire Employees", desc: "If you employ even one person, you must have an EIN. The IRS uses your EIN to track payroll taxes, withholding, and W-2 forms. You need the EIN before you pay your first employee." },
                  { title: "You File Excise Tax Returns", desc: "Certain industries require excise tax filings (e.g., alcohol, tobacco, firearms, fuel). If your sole proprietorship files any excise tax return, you must have an EIN. This applies even if you have no employees." },
                  { title: "You Have a Keogh or Solo 401(k) Plan", desc: "Self-employed retirement plans require an EIN for the plan itself. If you contribute to a Keogh plan or Solo 401(k), you need an EIN to open and maintain the account. This is separate from your personal tax ID." },
                  { title: "You File for Bankruptcy", desc: "If your sole proprietorship files for bankruptcy, the bankruptcy estate needs its own EIN. The bankruptcy trustee applies for this EIN on behalf of the estate." },
                  { title: "You Acquire an Existing Business", desc: "When you purchase an existing business and continue operating it as a sole proprietorship, you need a new EIN. You cannot use the previous owner's EIN." },
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

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If none of these situations apply to you, the IRS does not require you to have an EIN. You can use your personal SSN for all tax filings. But that does not mean you should skip getting one.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Get One Anyway */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Practical Benefits</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Should Sole Proprietors Get an EIN <span className="font-display gradient-text">Even When Not Required?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Even when the IRS does not mandate an EIN, the practical benefits make it worth the five minutes it takes to apply. Here are the reasons most sole proprietors get an EIN voluntarily:
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">SSN Protection.</strong> Every time a client asks you for a W-9, you must provide a taxpayer identification number. Without an EIN, that number is your SSN. Your SSN then sits in the accounting files of every client you work with. If any of those businesses experience a data breach, your SSN is compromised. An EIN replaces your SSN on W-9 forms, invoices, and contracts, keeping your most sensitive personal identifier private.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Business Bank Accounts.</strong> Most banks require an EIN to open a business checking account, even for sole proprietors. A business bank account separates your personal and business finances, which simplifies tax preparation and provides cleaner records if the IRS ever audits your business. See our guide on <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN</Link> for the full application process.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Business Credit.</strong> Building a business credit profile requires an EIN. Credit bureaus like Dun &amp; Bradstreet use your EIN to track your business credit history, separate from your personal credit score. Strong business credit gives you access to better financing terms and higher credit limits.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Professional Credibility.</strong> Having an EIN signals to clients, vendors, and partners that you run a legitimate business operation. Government contracts and large corporate clients often require vendors to have an EIN, even if they are sole proprietors.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Future-Proofing.</strong> If you plan to hire employees, form an LLC, or set up a retirement plan, you will need an EIN eventually. Getting one now means you are prepared when your business grows. There is no downside to getting an EIN early -- it is free and permanent.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Apply for an EIN <span className="font-display gradient-text">as a Sole Proprietor?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Applying for an EIN as a sole proprietor is straightforward. The process depends on whether you have an SSN or ITIN, or whether you are a non-US resident applying without either.
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US Residents (with SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Go to the IRS EIN Assistant at irs.gov</li>
                  <li>Select &quot;Sole Proprietor&quot; as your entity type</li>
                  <li>Enter your SSN or ITIN as the responsible party</li>
                  <li>Provide your business name (or your personal name if no DBA)</li>
                  <li>Enter your business address</li>
                  <li>Submit and receive your EIN <strong className="text-[var(--color-text)]">instantly</strong></li>
                </ol>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Residents (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete IRS Form SS-4 with your business details</li>
                  <li>Select &quot;Sole Proprietor&quot; as the entity type</li>
                  <li>Enter your passport number as the responsible party identifier</li>
                  <li>Fax the completed form to the IRS at 855-215-1627</li>
                  <li>Wait 4-7 business days for processing</li>
                  <li>Receive your EIN confirmation by fax</li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Or let ein.so handle everything for <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your application</Link>.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                On Form SS-4, sole proprietors enter their own name as both the legal name of the entity and the responsible party. If you operate under a DBA (doing business as) name, you enter that as the trade name. The IRS ties the EIN to your personal record, so your sole proprietorship EIN is linked to your SSN (or passport number for non-residents).
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Sole Proprietor vs LLC */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Should You Stay a Sole Proprietor <span className="font-display gradient-text">or Form an LLC?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Many sole proprietors wonder whether they should form an LLC instead. The EIN question often comes up alongside this decision. Here is how the two structures compare:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Factor</th>
                      <th className="text-left p-4 font-bold">Sole Proprietor</th>
                      <th className="text-left p-4 font-bold">LLC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">EIN Required?</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Only in specific situations</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Practically always</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Liability Protection</td>
                      <td className="p-4 text-[var(--color-text-muted)]">None -- personal assets at risk</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Limited liability for members</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Formation Cost</td>
                      <td className="p-4 text-[var(--color-text-muted)]">$0 (automatic)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">$50-$500 depending on state</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Tax Filing</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Schedule C on personal return</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Same (single-member) or Form 1065</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                A sole proprietorship is the easiest starting point, but it offers zero liability protection. If your business faces a lawsuit, your personal assets (home, savings, car) are at risk. Forming an LLC creates a legal barrier between your business and personal assets. Either way, you should get an EIN. If you decide to form an LLC, read our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">guide on getting an EIN</Link> for complete instructions.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Freelancers and Independent Contractors */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Special Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Freelancers and Independent Contractors <span className="font-display gradient-text">Need an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Freelancers and independent contractors are sole proprietors by default. If you earn income from clients without forming a business entity, the IRS classifies you as a sole proprietor. The same EIN rules apply: you need one if you hire employees, file excise tax returns, or have a qualified retirement plan.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Beyond those triggers, freelancers have an additional practical reason to get an EIN: issuing 1099 forms to subcontractors. If you hire other freelancers or subcontractors and pay them $600 or more in a year, you must issue them a 1099-NEC form. The 1099 form requires your taxpayer identification number. Using your SSN on 1099 forms exposes your personal information to every subcontractor you hire. An EIN solves this problem.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Many freelancers also work on platforms like Upwork, Fiverr, and Toptal that require a W-9 for tax reporting. Having an EIN means you provide the platform with your EIN instead of your SSN. This is especially important because data stored on third-party platforms is vulnerable to breaches.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process for getting an EIN as a freelancer is identical to the sole proprietor process described above. It takes five minutes online and costs nothing. There is no reason to delay. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
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
