"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForUkClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for UK"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from the United Kingdom without an SSN. ein.so handles the IRS fax filing for UK-based Amazon sellers, e-commerce merchants, and service businesses. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>UK residents can get a US EIN by submitting IRS Form SS-4 by fax. Your British passport number replaces the SSN requirement.</strong>{" "}
                  The IRS online tool does not work for UK applicants without an SSN. ein.so handles the entire fax filing process for $49 (Standard, 4-7 business days) or $97 (Express, 7 business days). No visit to the US required.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                The UK and the US share one of the strongest trade relationships in the world. British entrepreneurs regularly expand into the US market through e-commerce, Amazon FBA, SaaS, consulting, and investment. A US EIN is the first thing you need to operate a US business -- it unlocks banking, payment processing, marketplace registration, and tax compliance.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers the complete EIN application process for UK residents, including the Ltd vs LLC decision, currency management between GBP and USD, Amazon.com expansion from the UK, and how ein.so simplifies the process for British business owners. Read our complete guide on <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents</Link> for the full process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do UK Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do UK Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                UK entrepreneurs enter the US market for scale. The US consumer market is roughly five times larger than the UK market, and US payment infrastructure is the global standard. Here are the most common reasons UK residents apply for a US EIN:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Amazon FBA Expansion", desc: "The UK is the third-largest Amazon marketplace globally, behind the US and Germany. Many UK sellers on Amazon.co.uk expand to Amazon.com to access the massive US customer base. A US EIN through a US LLC lets you register as a US seller, use FBA warehouses, and avoid the 30% withholding tax on US-sourced income through the UK-US tax treaty." },
                  { title: "US Payment Processing", desc: "Stripe US, PayPal US, and other payment processors work best with a US entity and EIN. UK entrepreneurs selling digital products, SaaS subscriptions, or services to US customers benefit from processing payments in USD through a US bank account rather than routing everything through UK payment processors." },
                  { title: "US Banking Access", desc: "A US EIN lets you open a US business bank account with banks like Mercury or Relay. This gives you a USD account for receiving US payments, paying US vendors, and managing your US business finances without converting every transaction between GBP and USD." },
                  { title: "Client Trust and Credibility", desc: "US enterprise clients and government agencies often prefer working with US-registered entities. A US LLC with an EIN gives UK consultants, agencies, and service providers a professional US presence that builds trust with American clients and opens doors to US contracts." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Ltd vs LLC: Which Structure for UK Entrepreneurs? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Entity Structure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              UK Ltd vs US LLC: Which Structure Should <span className="font-display gradient-text">British Entrepreneurs Choose?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                One of the most common questions UK entrepreneurs ask is whether to use their existing UK Ltd company or form a new US LLC. Here is the comparison:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Factor</th>
                      <th className="text-left p-4 font-bold">UK Ltd in the US</th>
                      <th className="text-left p-4 font-bold">New US LLC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Setup Complexity</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Requires foreign qualification in a US state</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Simple online formation ($100-300)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Tax Treatment</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Treated as a foreign corporation</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Pass-through entity (simpler)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Banking</td>
                      <td className="p-4 text-[var(--color-text-muted)]">More difficult to open US bank accounts</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Straightforward with EIN</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Recommended?</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Only for large companies with existing US operations</td>
                      <td className="p-4 text-green-600 font-bold">Yes, for most UK entrepreneurs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The vast majority of UK entrepreneurs we work with form a new US LLC rather than qualifying their UK Ltd in the US. The LLC is simpler to set up, cheaper to maintain, and provides cleaner separation between your UK and US business activities. Your US LLC gets its own EIN, and you remain the sole member (owner) as an individual. For more on LLC EINs, see our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for LLC guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* GBP/USD Currency Considerations */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Currency</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do UK Entrepreneurs Manage <span className="font-display gradient-text">GBP and USD?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Operating a US business from the UK means dealing with two currencies. GBP/USD exchange rates fluctuate, and poor currency management eats into your profits. Here is how UK entrepreneurs structure their finances:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "US Bank Account (via EIN)", desc: "Your EIN lets you open a US bank account that holds USD. Revenue from US customers stays in USD until you choose to convert. This eliminates forced conversion on every transaction and gives you control over timing." },
                  { title: "Wise (TransferWise)", desc: "Most UK-based US LLC owners use Wise for GBP/USD transfers. Wise offers mid-market exchange rates with transparent fees, typically 0.4-0.6% per transfer. This is significantly cheaper than traditional bank wire transfers." },
                  { title: "Stripe Multi-Currency", desc: "If you use Stripe for payment processing, your US entity can accept USD payments that settle directly into your US bank account. This avoids Stripe's automatic currency conversion, which adds roughly 1% to each transaction." },
                  { title: "Tax Reporting in Both Currencies", desc: "Your US tax filings are in USD. Your UK self-assessment is in GBP. You need to track exchange rates for each transaction to accurately report income and expenses in both jurisdictions." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The key takeaway is that your EIN-linked US bank account gives you a USD home base. Without it, every US transaction involves conversion fees and exchange rate risk. With it, you hold USD, pay USD expenses directly, and convert to GBP only when you need to. Learn more about <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank accounts</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* UK-US Tax Treaty and HMRC Reporting */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Compliance</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Should UK Residents Know About <span className="font-display gradient-text">US-UK Tax Obligations?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Getting a US EIN creates US tax reporting obligations. UK residents with US LLCs need to understand both HMRC and IRS requirements. This is not tax advice, but here are the basics:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "US Tax Filing", detail: "A single-member LLC owned by a non-resident is a disregarded entity for US tax purposes. You may need to file Form 5472 and Form 1120 (pro forma) annually with the IRS. If your LLC has US-sourced income, you may owe US taxes, subject to treaty relief." },
                  { topic: "HMRC Self-Assessment", detail: "UK residents must report worldwide income, including US LLC income, on their self-assessment tax return. You can claim foreign tax credits for any US taxes paid to avoid double taxation under the UK-US tax treaty." },
                  { topic: "VAT Considerations", detail: "Your US LLC is not subject to UK VAT for sales made to US customers. However, if your US LLC sells to UK customers, VAT registration may be required. US sales tax is separate from UK VAT and is handled at the state level." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application only -- we recommend consulting a UK-based accountant or tax adviser who understands US-UK cross-border obligations. Your EIN is the foundation for all US tax compliance. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link> and get started on your US business from the UK.
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
