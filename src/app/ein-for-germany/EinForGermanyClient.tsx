"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForGermanyClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for German"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from Germany without an SSN. ein.so handles the IRS fax filing for German Amazon sellers, GmbH owners, and EU-US businesses. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>German entrepreneurs can get a US EIN by faxing IRS Form SS-4 with their Reisepass (passport) number. No SSN, ITIN, or US visa is required.</strong>{" "}
                  Germany is the second-largest Amazon market in the world, and German sellers expanding to Amazon.com need an EIN. ein.so handles the fax filing for $49 (Standard, 4-7 business days) or $97 (Express, 2-3 business days).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Germany has the largest economy in Europe and deep trade ties with the United States. German entrepreneurs expand into the US market through Amazon FBA, SaaS, manufacturing exports, and professional services. A US EIN is the starting point for all of these activities -- it unlocks US banking, marketplace registration, payment processing, and tax compliance.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers the complete EIN application process for German entrepreneurs, including the GmbH vs LLC decision, VAT and sales tax considerations, Amazon.com expansion from Germany, and how ein.so simplifies the process for German business owners.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do German Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do German Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                German businesses are well-positioned for US market entry. German engineering, manufacturing quality, and business discipline are respected globally. Here are the main reasons German entrepreneurs apply for a US EIN through ein.so:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Amazon FBA (US Marketplace)", desc: "Germany is Amazon's second-largest market after the US. German sellers on Amazon.de who expand to Amazon.com access a customer base roughly 4 times larger. Your US EIN completes the Amazon tax interview and lets you register as a US-based seller through your LLC. FBA handles fulfillment in the US while you manage operations from Germany." },
                  { title: "EU-US Business Expansion", desc: "German companies entering the US market form LLCs for liability protection, tax efficiency, and professional credibility. Whether you sell physical products, software, or professional services, a US EIN connected to a US bank account gives you a complete US business infrastructure." },
                  { title: "SaaS and Technology", desc: "German SaaS companies selling to US enterprises benefit from a US entity. American companies prefer contracting with US-registered businesses for procurement, compliance, and payment simplicity. Your EIN lets you set up Stripe, open a US bank account, and invoice in USD." },
                  { title: "Manufacturing and Export", desc: "German manufacturers selling directly to US distributors or consumers need US tax compliance. An EIN enables you to manage US sales tax obligations, file required IRS forms, and maintain a US banking relationship for receivables." },
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

      {/* GmbH vs US LLC */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Entity Structure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              GmbH vs US LLC: Which Structure Should <span className="font-display gradient-text">German Entrepreneurs Choose?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                German entrepreneurs often ask whether to register their existing GmbH in the US or form a new US LLC. Here is the comparison:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Factor</th>
                      <th className="text-left p-4 font-bold">GmbH in the US</th>
                      <th className="text-left p-4 font-bold">New US LLC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Setup</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Foreign qualification required</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Simple online formation ($100-300)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Tax Treatment</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Treated as foreign corporation</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Pass-through (disregarded entity)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Annual Cost</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Higher (state fees, compliance)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Lower ($50-300/year depending on state)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Recommended?</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Only for large companies with US offices</td>
                      <td className="p-4 text-green-600 font-bold">Yes, for most German entrepreneurs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The vast majority of German entrepreneurs form a new US LLC. It is simpler, cheaper, and provides cleaner legal separation between your German and US business activities. Your GmbH can remain your German entity while your US LLC handles US operations. Each entity has its own tax ID -- your Steuernummer in Germany and your EIN in the US. For more on LLC EINs, see our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for LLC guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* VAT and US Sales Tax */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Systems</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do German VAT and US Sales Tax <span className="font-display gradient-text">Work Together?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                German entrepreneurs are familiar with Umsatzsteuer (VAT), but the US uses a completely different system -- state-level sales tax. Understanding the differences is important for managing your US business from Germany:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "German VAT Does Not Apply to US Sales", detail: "When you sell to US customers through your US LLC, German VAT (Umsatzsteuer) does not apply. US sales are outside the scope of the German VAT system. You do not charge VAT on US sales, and you do not need a Umsatzsteuer-ID for US transactions." },
                  { topic: "US Sales Tax is State-Level", detail: "The US has no federal sales tax (unlike German VAT). Instead, each state sets its own sales tax rates and rules. If you sell physical goods through Amazon FBA, Amazon handles sales tax collection and remittance in most states. For direct sales, you may need to collect sales tax in states where you have nexus." },
                  { topic: "Amazon FBA Simplifies Tax Collection", detail: "Amazon's Marketplace Tax Collection program collects and remits sales tax on behalf of sellers in all states that require it. This means German sellers using Amazon FBA do not need to register for sales tax in individual US states. Amazon handles it automatically." },
                  { topic: "Income Tax (US-Germany Treaty)", detail: "The US-Germany Doppelbesteuerungsabkommen (double taxation treaty) prevents you from being taxed on the same income in both countries. Business profits from your US LLC are generally taxable in Germany unless you have a permanent establishment in the US. Consult a Steuerberater familiar with US operations." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application -- tax compliance is between you and your Steuerberater. Your EIN is the foundation for all US tax reporting. For more about the application, visit our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Application Process and SS-4 Tips */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do German Applicants Need to Know About <span className="font-display gradient-text">Form SS-4?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link> application is straightforward for German applicants, but there are a few Germany-specific details to get right:
              </p>

              <div className="space-y-4">
                {[
                  { tip: "Passport Number (Reisepass)", detail: "Use your Reisepass number in the foreign identification field. Do not use your Personalausweis (national ID card) number. The IRS specifically requires a passport number for non-resident EIN applications." },
                  { tip: "German Address Formatting", detail: "German addresses follow a different convention (street name before house number, PLZ before city). The SS-4 requires the American format. ein.so converts your German address into the correct format for IRS acceptance." },
                  { tip: "Umlauts and Special Characters", detail: "The IRS form does not support umlauts (ae, oe, ue). If your name contains an umlaut, transliterate it (Mueller instead of Mueller, for example). ein.so handles this automatically." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.tip}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-[var(--color-text)] mb-2">Standard: $49 | Express: $97</p>
                <p className="text-[var(--color-text-muted)] mb-4">No SSN required. Applied from Germany in 3 minutes.</p>
                <Link
                  href="/apply/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                >
                  Get My EIN Now
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Banking and EUR/USD */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do German Entrepreneurs Manage <span className="font-display gradient-text">EUR and USD Banking?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Operating in both EUR and USD requires a smart banking setup. Your US EIN enables a US bank account that holds USD, eliminating forced conversion on every US transaction:
              </p>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "US Bank Account", desc: "Open a Mercury or Relay account with your EIN. Hold USD, receive ACH payments, and pay US vendors directly without EUR conversion fees." },
                  { title: "Wise Multi-Currency", desc: "Use Wise for EUR/USD transfers at mid-market rates. Transfer from your US account to your German bank when needed. Typical fees are 0.4-0.6%." },
                  { title: "Stripe (US Entity)", desc: "Process US payments through Stripe connected to your US bank account. Avoid Stripe's automatic currency conversion, which adds ~1% per transaction." },
                  { title: "Amazon Payments", desc: "Receive Amazon.com seller payments directly in your US bank account in USD. No more waiting for Amazon's EUR conversion on US marketplace earnings." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white rounded-xl border border-[var(--color-border)] p-5 h-full">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Learn more about <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">using your EIN for banking</Link>. Your EIN is the key that opens the US financial system for German entrepreneurs. <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">No SSN required</Link>.
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
