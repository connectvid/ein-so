"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForTrustClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Trusts"
        title="EIN for Trust:"
        titleAccent="When Trusts Need an EIN (2026)"
        description="Irrevocable trusts always need an EIN. Revocable trusts need one after the grantor dies. Learn which type of trust you have, when to apply, and how the process works."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Irrevocable trusts always need an EIN because they are separate tax entities. Revocable (living) trusts use the grantor&apos;s SSN while the grantor is alive, but need an EIN after the grantor dies and the trust becomes irrevocable.</strong>{" "}
                  The trustee applies for the EIN using Form SS-4. US-based trustees apply online for free. Non-US trustees apply by fax, or through ein.so for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Trusts are among the most misunderstood entities when it comes to EIN requirements. The rules depend entirely on the type of trust and whether the grantor is alive. Many trustees apply for an EIN when they do not need one, while others fail to apply when it is legally required. This guide clarifies the rules for every type of trust.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For general EIN information, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs an EIN</Link>. If you are managing an estate rather than a trust, see our <Link href="/ein-for-estate/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for estate guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Revocable vs Irrevocable */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Key Distinction</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Does Your Trust Need an EIN? <span className="font-display gradient-text">Revocable vs Irrevocable</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                3 of 4 trust types require an EIN immediately upon creation. The EIN requirement hinges on one question: is the trust a separate tax entity from the grantor? Over 2 million trusts file Form 1041 annually. Here is the breakdown:
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Revocable vs Irrevocable Trust EIN Requirements</h3>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Trust Type</th>
                      <th className="text-left p-4 font-bold">EIN Needed?</th>
                      <th className="text-left p-4 font-bold">Tax Filing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Revocable Trust (grantor alive)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">No -- use grantor&apos;s SSN</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Income reported on grantor&apos;s Form 1040</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Revocable Trust (grantor deceased)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes -- now irrevocable</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1041</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Irrevocable Trust</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes -- always</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1041</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Testamentary Trust</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Yes -- irrevocable from creation</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Form 1041</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                A revocable trust is called a &quot;grantor trust&quot; because the IRS treats all trust income as the grantor&apos;s income. The trust is essentially invisible for tax purposes during the grantor&apos;s lifetime. Once the grantor dies, the trust becomes irrevocable, and the successor trustee must obtain an EIN within a reasonable time to manage the trust&apos;s finances and tax obligations.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* When to Apply */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Timing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              When Should You Apply for <span className="font-display gradient-text">a Trust EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">For irrevocable trusts:</strong> Apply for the EIN as soon as the trust is established. You need the EIN before you can open a bank account in the trust&apos;s name, transfer assets, or make investments. Financial institutions will not title assets in the trust&apos;s name without an EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">For revocable trusts that become irrevocable upon the grantor&apos;s death:</strong> The successor trustee should apply for the EIN promptly after the grantor passes away. Banks will freeze accounts held under the grantor&apos;s SSN once they learn of the death. The successor trustee needs the trust&apos;s new EIN to unfreeze accounts, retitle assets, and manage ongoing trust business.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">For testamentary trusts:</strong> Apply after the will is admitted to probate and the trust is formally established. The executor or trustee named in the will handles this step. The testamentary trust needs its own EIN separate from the estate&apos;s EIN (which is a different entity).
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Do not delay the EIN application. Without an EIN, the trust cannot conduct financial transactions, file tax returns, or receive distributions from other entities. The application itself takes minutes -- the only requirement is that the trust legally exists.
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
              How Do You Apply for an EIN <span className="font-display gradient-text">for a Trust?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The trustee is the responsible party on the EIN application. The trustee provides their personal identification (SSN, ITIN, or passport number) and the trust&apos;s details.
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US-Based Trustees (with SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Go to the IRS EIN Assistant at irs.gov</li>
                  <li>Select &quot;Trust&quot; as your entity type</li>
                  <li>Specify the type of trust (irrevocable, trust upon death of individual, etc.)</li>
                  <li>Enter the trustee&apos;s name and SSN or ITIN as the responsible party</li>
                  <li>Provide the trust&apos;s legal name (e.g., &quot;The John Smith Irrevocable Trust&quot;)</li>
                  <li>Enter the trust&apos;s address (the trustee&apos;s address)</li>
                  <li>Submit and receive your EIN <strong className="text-[var(--color-text)]">instantly</strong></li>
                </ol>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Trustees (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete Form SS-4 selecting &quot;Trust&quot; as entity type</li>
                  <li>Enter the trustee&apos;s name and passport number</li>
                  <li>Provide the trust&apos;s legal name and address</li>
                  <li>Specify the trust type and date the trust was funded</li>
                  <li>Fax the form to the IRS at 855-215-1627</li>
                  <li>Wait 4-7 business days for processing</li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Or let ein.so handle the process for <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your application</Link>.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Trust Tax Filing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Obligations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Tax Returns Does a Trust <span className="font-display gradient-text">File with Its EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Trusts with their own EIN file Form 1041 annually, due April 15. Trust tax rates hit the maximum 37% bracket at just $15,200 of taxable income in 2026 -- compared to $609,350 for individual filers. This compressed bracket makes distribution planning critical.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Trust vs Individual Tax Brackets (2026)</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Tax Rate</th><th className="px-4 py-3 font-semibold">Trust Income Threshold</th><th className="px-4 py-3 font-semibold">Individual Income Threshold</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">10%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$0 - $3,150</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$0 - $11,600</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">24%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$3,150 - $11,450</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$47,150 - $100,525</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">35%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$11,450 - $15,200</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$191,950 - $609,350</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">37%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Over $15,200</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Over $609,350</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Form 1041 Filing Requirements</h3>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If the trust distributes income to beneficiaries, it deducts those distributions on Form 1041 and issues Schedule K-1 to each beneficiary. The beneficiaries then report the distributions on their personal tax returns. Income retained by the trust is taxed at trust tax rates, which reach the highest marginal rate at just $15,200 of taxable income (2026) -- far lower than the threshold for individual taxpayers.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This compressed tax bracket makes it financially important for trusts to distribute income to beneficiaries whenever the trust instrument allows it. The trustee must balance tax efficiency with the trust&apos;s purpose and the beneficiaries&apos; needs.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Form 1041 is due on April 15 of each year (for trusts using a calendar year). The trust can request a 5.5-month extension by filing Form 7004. The trust&apos;s EIN appears on every filing. For more about EIN applications, see our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Trust vs Estate */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Related Entity</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Is the Difference Between a Trust EIN <span className="font-display gradient-text">and an Estate EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                2 separate entities may need EINs when someone dies: the decedent&apos;s estate and any trusts that become irrevocable upon death. These are different entities with different EINs, different tax returns, and different purposes. Using the wrong EIN on tax filings triggers IRS matching errors and delays refunds.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Trust EIN vs Estate EIN</h3>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">The estate</strong> holds assets that pass through probate. The executor manages the estate and applies for its EIN. The estate files Form 1041 under its own EIN until all assets are distributed to heirs or trusts.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">The trust</strong> holds assets that were transferred to it during the grantor&apos;s lifetime (for revocable trusts) or that are directed to it by the will (for testamentary trusts). The trustee manages the trust and applies for its own EIN. The trust files its own Form 1041 under its own EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Do not use the estate&apos;s EIN for the trust, or vice versa. They are separate entities with separate tax obligations. For estate EIN requirements, see our <Link href="/ein-for-estate/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for estate guide</Link>.
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
