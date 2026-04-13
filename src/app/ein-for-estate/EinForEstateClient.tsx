"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForEstateClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Estates"
        title="EIN for Estate:"
        titleAccent="How to Get One for a Deceased Person (2026)"
        description="An estate needs its own EIN for tax filing, banking, and asset distribution. Learn how executors apply, what documents you need, and the step-by-step process."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Every estate of a deceased person needs its own EIN. The executor (personal representative) applies using Form SS-4, selecting &quot;Estate&quot; as the entity type. The estate&apos;s EIN is used for Form 1041 filing, opening estate bank accounts, and distributing assets to heirs.</strong>{" "}
                  You cannot use the deceased person&apos;s SSN for estate purposes. Apply online at irs.gov if you have an SSN or ITIN. Non-US executors apply by fax, or through ein.so for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Losing a family member is difficult. Managing their estate adds legal and financial complexity. One of the executor&apos;s first responsibilities is obtaining an EIN for the estate so that financial transactions can proceed. Without an EIN, the executor cannot open an estate bank account, collect the decedent&apos;s assets, pay outstanding debts, or file the estate&apos;s tax return. This guide explains the process clearly and completely.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For general EIN information, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs an EIN</Link>. If the deceased person had a trust, see our <Link href="/ein-for-trust/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for trust guide</Link> -- the trust needs a separate EIN.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why an Estate Needs an EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does an Estate Need <span className="font-display gradient-text">Its Own EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                When a person dies, their estate becomes a separate legal and tax entity. The deceased person&apos;s SSN cannot be used for estate transactions. The estate needs its own identifier -- an EIN -- for the following purposes:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Estate Tax Return (Form 1041)", desc: "If the estate earns $600 or more in gross income during any tax year, the executor must file Form 1041. Income earned by estate assets after the date of death -- such as interest, dividends, rent, and capital gains -- is reported on this return under the estate's EIN." },
                  { title: "Estate Bank Account", desc: "The executor opens a dedicated estate bank account to manage the decedent's finances. All income flows into this account and all debts, taxes, and distributions flow out. Banks require the estate's EIN to open this account." },
                  { title: "Asset Collection and Transfer", desc: "Insurance companies, brokerage firms, and financial institutions require the estate's EIN before releasing the decedent's assets to the executor. Without an EIN, you cannot collect life insurance proceeds payable to the estate, close investment accounts, or transfer property titles." },
                  { title: "Debt Payment and Creditor Notices", desc: "The executor uses the estate's EIN when paying the decedent's outstanding debts. Creditors file claims against the estate, and payments are made from the estate bank account using the estate's EIN for record-keeping." },
                  { title: "Distribution to Heirs", desc: "When the executor distributes estate assets to beneficiaries, the estate issues Schedule K-1 showing each beneficiary's share of estate income. The K-1 includes the estate's EIN." },
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

      {/* Who Can Apply */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Executor Role</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Who Can Apply for an <span className="font-display gradient-text">Estate EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Only the executor, personal representative, or administrator of the estate can apply for an estate EIN. This person is either named in the deceased person&apos;s will or appointed by the probate court (if there is no will or the named executor cannot serve).
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Executor named in the will:</strong> If the deceased person&apos;s will names you as executor, you have the authority to apply for the estate&apos;s EIN once the court accepts the will (usually at the initial probate hearing). Many jurisdictions issue Letters Testamentary at this point, which formally authorize your role.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Administrator appointed by the court:</strong> If there is no will (intestate estate), the probate court appoints an administrator. The court issues Letters of Administration, which give the administrator the same authority as an executor, including the ability to apply for the estate&apos;s EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                On the EIN application, the executor or administrator is listed as the &quot;responsible party.&quot; You provide your own SSN or ITIN (not the deceased person&apos;s SSN) and your own name and address. The EIN is issued to the estate, with you identified as the person managing it.
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
              How Do You Apply for an EIN <span className="font-display gradient-text">for an Estate?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The executor applies for the estate&apos;s EIN using Form SS-4. You will need the deceased person&apos;s legal name, date of death, and SSN. Here is the process:
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For US-Based Executors (with SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Go to the IRS EIN Assistant at irs.gov</li>
                  <li>Select &quot;Estate&quot; as your entity type</li>
                  <li>Select &quot;Estate of a deceased individual&quot;</li>
                  <li>Enter the executor&apos;s name and SSN or ITIN as the responsible party</li>
                  <li>Provide the estate&apos;s legal name (e.g., &quot;Estate of John Smith&quot;)</li>
                  <li>Enter the deceased person&apos;s SSN and date of death</li>
                  <li>Provide the estate&apos;s mailing address (usually the executor&apos;s address)</li>
                  <li>Submit and receive the EIN <strong className="text-[var(--color-text)]">instantly</strong></li>
                </ol>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">For Non-US Executors (without SSN or ITIN):</h3>
                <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside">
                  <li>Complete Form SS-4 selecting &quot;Estate&quot; as entity type</li>
                  <li>Enter the executor&apos;s name and passport number</li>
                  <li>Provide the estate&apos;s legal name and the decedent&apos;s information</li>
                  <li>Fax the form to the IRS at 855-215-1627</li>
                  <li>Wait 4-7 business days for processing</li>
                  <li>Receive your EIN confirmation by fax</li>
                </ol>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Or let ein.so handle the process for <strong className="text-[var(--color-text)]">$49</strong> (Standard) or <strong className="text-[var(--color-text)]">$97</strong> (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your application</Link>.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Estate Tax Filing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Obligations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Tax Returns Does the Executor <span className="font-display gradient-text">File for the Estate?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The executor files two types of tax returns: the deceased person&apos;s final personal tax return and the estate&apos;s income tax return. These are separate filings with different identification numbers:
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Final Form 1040 (Personal):</strong> This return covers the deceased person&apos;s income from January 1 to the date of death. It uses the deceased person&apos;s SSN. The executor files this return for the final time.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Form 1041 (Estate):</strong> This return covers income earned by estate assets after the date of death. It uses the estate&apos;s EIN. Examples include interest on bank accounts, dividends from stocks, rental income from property, and capital gains from asset sales during estate administration.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Form 706 (Estate Tax):</strong> If the estate&apos;s gross value exceeds the federal estate tax exemption ($13.99 million in 2026), the executor must also file Form 706. This is the federal estate tax return, which calculates the tax owed on the value of the estate. Form 706 uses the decedent&apos;s SSN, not the estate&apos;s EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The estate&apos;s EIN is primarily used for Form 1041. The executor continues filing Form 1041 each year until all estate assets are distributed and the estate is closed. For more about the EIN application process, see our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Estate vs Trust */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Related Entity</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Does the Estate Need a Separate EIN <span className="font-display gradient-text">from the Trust?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Yes.</strong> If the deceased person had a revocable living trust, that trust becomes irrevocable upon death and needs its own EIN. The estate also needs its own EIN. These are two separate entities, each with separate bank accounts, separate tax returns (both file Form 1041), and separate EINs.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The estate holds assets that pass through probate -- assets titled solely in the deceased person&apos;s name without beneficiary designations. The trust holds assets that were transferred to it during the person&apos;s lifetime or directed to it by the will.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                In some cases, the same person serves as both the executor (for the estate) and the successor trustee (for the trust). Even so, the two entities must have separate EINs. The executor/trustee applies for both EINs, listing themselves as the responsible party on each application.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For full details on trust EINs, see our <Link href="/ein-for-trust/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for trust guide</Link>.
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
