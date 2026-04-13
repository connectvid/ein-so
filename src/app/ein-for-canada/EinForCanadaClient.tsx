"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForCanadaClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Canadian"
        titleAccent="Entrepreneurs"
        description="Get your US EIN from Canada without an SSN. ein.so handles the IRS fax filing for Canadian cross-border sellers, e-commerce businesses, and Shopify merchants. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Canadians can get a US EIN by submitting Form SS-4 by fax to the IRS. No SSN or ITIN is required -- your Canadian passport number is sufficient.</strong>{" "}
                  While Canadians can technically call the IRS, hold times are long and unreliable. ein.so handles the fax filing for $49 (Standard, 4-7 business days) or $97 (Express, 2-3 business days).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Canada and the United States share the world&apos;s largest bilateral trade relationship. Hundreds of thousands of Canadian entrepreneurs sell into the US market through e-commerce, SaaS, consulting, and cross-border services. A US EIN is the foundation for all of this -- you need it to open a US bank account, register on US marketplaces, accept US payments, and file US taxes.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The proximity of Canada to the US makes cross-border business natural, but the IRS still treats Canadian applicants the same as any other non-resident when it comes to the EIN application. The online tool requires an SSN you do not have. This guide explains the process and how ein.so makes it seamless for Canadian entrepreneurs.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Canadians Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Canadian Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Canadian entrepreneurs are uniquely positioned for US market access. Geographic proximity, cultural similarity, and CUSMA (formerly NAFTA) trade agreements make cross-border business straightforward. Here are the most common reasons Canadians apply for a US EIN through ein.so:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Cross-Border E-Commerce", desc: "Selling on Amazon.com, Walmart.com, or your own Shopify store to US customers requires a US tax ID. Many Canadian sellers operate on both Amazon.ca and Amazon.com simultaneously. Your US EIN lets you register as a US seller and use FBA warehouses south of the border." },
                  { title: "Shopify Payments (US)", desc: "Shopify is a Canadian company, but Shopify Payments for US transactions works best with a US entity and EIN. Canadian merchants selling primarily to US customers benefit from a US LLC with a US bank account to avoid cross-border payment processing fees and currency conversion on every transaction." },
                  { title: "US Banking and Payment Processing", desc: "A US EIN lets you open a US business bank account for USD transactions. This eliminates the CAD/USD conversion fees on every sale. Banks like Mercury accept Canadian LLC owners, and services like Stripe US provide better rates for US-based transactions than Stripe Canada." },
                  { title: "SaaS and Digital Services", desc: "Canadian SaaS companies selling to US clients often form US LLCs for payment processing, tax efficiency, and client trust. A US entity with an EIN signals to American customers that you are a legitimate US-based business, which matters for enterprise sales and government contracts." },
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

      {/* How Do Canadians Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Canadians Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Canadians have two viable options for getting a US EIN: the fax method and the phone method. The IRS online tool is not available because it requires an SSN. Here is how each method works for Canadian applicants:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form Your US LLC", desc: "Most Canadians form an LLC in Wyoming or Delaware through a registered agent. This is done entirely online from Canada. The LLC gives you a US legal entity, a registered address, and the structure you need for US banking and tax compliance." },
                    { step: "2", title: "Prepare Form SS-4", desc: "Complete IRS Form SS-4 with your LLC details and your Canadian passport number. Your Canadian home address goes in the responsible party section. ein.so prepares this form for you to ensure accuracy." },
                    { step: "3", title: "Submit via Fax", desc: "Fax the completed SS-4 to the IRS at 855-215-1627. ein.so uses commercial-grade fax systems to ensure clear transmission. The IRS processes faxed applications in 4-7 business days." },
                    { step: "4", title: "Receive Your EIN", desc: "The IRS faxes back your EIN assignment letter (CP 575). ein.so delivers your EIN via email as soon as it arrives. With Express processing ($97), you can have your EIN in 2-3 business days." },
                  ].map((item) => (
                    <StaggerItem key={item.step}>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">{item.step}</span>
                        <div>
                          <h3 className="font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                While Canadians can call the IRS at 267-941-1099 during business hours (6 AM - 11 PM ET), hold times frequently exceed an hour, and you may need to call multiple times. The fax method through ein.so is more reliable and does not require you to spend your morning on hold. For the complete SS-4 walkthrough, see our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 form guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Amazon.com vs Amazon.ca */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">E-Commerce</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does a US EIN Help Canadian Sellers on <span className="font-display gradient-text">Amazon.com vs Amazon.ca?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Amazon.com (US) is roughly 10 times the size of Amazon.ca (Canada) in terms of customer base and revenue. Many Canadian sellers start on Amazon.ca and expand to Amazon.com to access the larger market. Here is what you need to know about using your EIN for Amazon selling:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "Tax Interview Completion", detail: "Amazon requires every seller to complete a tax interview. With a US LLC and EIN, you complete this as a US entity. Without a US entity, you must complete a W-8BEN-E as a foreign entity, which subjects your sales to 30% withholding on US-sourced income (unless reduced by the Canada-US tax treaty)." },
                  { topic: "FBA Inventory in the US", detail: "Sending inventory to Amazon US FBA warehouses is straightforward with a US entity. Your EIN is linked to your seller account, and Amazon handles sales tax collection. Without a US entity, you may face complications with customs and import duties." },
                  { topic: "Unified North American Strategy", detail: "With an EIN and US LLC, you can run a unified North American Amazon business. List on Amazon.com, Amazon.ca, and Amazon.com.mx. Your US bank account receives payments from all three marketplaces without currency conversion delays." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Canadian Amazon sellers who expand to the US market with a proper EIN and LLC structure report significantly higher revenue due to the larger customer base. Your EIN is the first step in this expansion. Learn more about <Link href="/ein-for-amazon-sellers/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for Amazon sellers</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Canadian Tax and Currency Considerations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax &amp; Currency</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Tax and Currency Considerations Apply to <span className="font-display gradient-text">Canadian EIN Holders?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Canada and the United States have a comprehensive tax treaty that affects how your US business income is taxed. Here are the key considerations for Canadian entrepreneurs with a US EIN:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "Canada-US Tax Treaty", detail: "The Canada-US tax treaty prevents double taxation. Business profits earned through a US LLC are generally taxable in Canada (where you reside) unless you have a permanent establishment in the US. The treaty allows foreign tax credits to offset taxes paid in either country." },
                  { topic: "CAD/USD Currency Management", detail: "Operating in both CAD and USD means you need a currency strategy. A US bank account lets you hold USD without forced conversion. Many Canadian entrepreneurs use Wise or their Canadian bank's USD account to manage transfers between countries at favorable rates." },
                  { topic: "GST/HST on Cross-Border Sales", detail: "Canadian GST/HST generally does not apply to goods or services exported to the US. However, if you sell digital products or services to Canadian customers through your US entity, GST/HST rules may apply. Consult a Canadian tax professional familiar with cross-border e-commerce." },
                  { topic: "CRA Reporting Obligations", detail: "Canadian residents must report worldwide income to the CRA, including income earned through US LLCs. You may need to file Form T1135 (Foreign Income Verification) if your US business assets exceed $100,000 CAD. Your US EIN does not replace any Canadian tax obligations." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application -- we do not provide tax advice. We recommend working with a Canadian CPA who understands cross-border taxation. Your EIN is the starting point for US tax compliance. For more on the application process, see <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN</Link> and <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ein.so Pricing */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Much Does It Cost for Canadians to Get a <span className="font-display gradient-text">US EIN Through ein.so?</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-[var(--color-text)] mb-2">Standard: $49 USD | Express: $97 USD</p>
                <p className="text-[var(--color-text-muted)] mb-4">No SSN required. No fax machine needed. Applied from Canada in 3 minutes.</p>
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

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Our pricing is in USD and includes SS-4 preparation, fax filing to the IRS, follow-up monitoring, and delivery of your EIN confirmation letter. The EIN itself is free from the IRS -- our fee covers the professional service of handling the application correctly and efficiently. Most Canadian clients choose Standard processing, which delivers the EIN within a week. Express processing is available when you need to move faster -- for example, if you are launching on Amazon and need your EIN to complete the tax interview immediately.
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
