"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForBrazilClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Brazilian"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from Brazil without an SSN. ein.so handles the IRS fax filing for Brazilian Amazon sellers, e-commerce businesses, and real estate investors. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Brazilian entrepreneurs can get a US EIN by faxing IRS Form SS-4 with their Brazilian passport number. No SSN, ITIN, or US visa is required.</strong>{" "}
                  Brazil is the largest economy in Latin America, and Brazilian entrepreneurs are expanding into the US market through e-commerce, real estate investment, and technology. ein.so handles the EIN application for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Brazilian entrepreneurs have a growing presence in the US market. From Amazon FBA sellers to real estate investors in Florida and New York, Brazilian business owners use US LLCs and EINs to establish formal US business operations. The Brazilian entrepreneurial community in the US is large and active, with strong networks in Miami, Orlando, and other cities.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers the EIN application process for Brazilian entrepreneurs, including the CNPJ vs EIN comparison, real estate investment considerations, payment and currency management between BRL and USD, and how ein.so handles the application process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Brazilian Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Brazilian Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Brazilian entrepreneurs form US LLCs for market access, asset protection, and investment management. The US offers banking stability, payment infrastructure, and market size that complement Brazilian business operations. Here are the primary use cases:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Amazon FBA and E-Commerce", desc: "Brazilian entrepreneurs sell on Amazon.com through private label, wholesale, and arbitrage models. Your US EIN completes the Amazon tax interview and registers you as a US seller. FBA handles fulfillment while you manage product sourcing and marketing from Brazil. The US Amazon marketplace is significantly larger than Amazon.com.br." },
                  { title: "US Real Estate Investment", desc: "Brazilians are among the top foreign buyers of US real estate, particularly in Florida (Miami, Orlando, Fort Lauderdale). A US LLC with an EIN is the standard structure for holding investment properties. Your EIN is needed for rental income reporting, property tax, and banking related to the property." },
                  { title: "Technology and SaaS", desc: "Brazilian tech companies expanding into the US market form LLCs for payment processing, customer credibility, and venture capital access. Your EIN enables Stripe, US banking, and compliance with US tax requirements for SaaS revenue." },
                  { title: "Import/Export Trade", desc: "Brazilian exporters selling directly to US importers or consumers benefit from a US entity. Your EIN connects to a US bank account for receivables, simplifies customs documentation, and provides a professional US business identity for American buyers." },
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

      {/* How Do Brazilian Citizens Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Brazilian Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Brazilian applicants use the IRS fax method with <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link>. Your Brazilian passport number serves as identification. Here is the step-by-step process:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form a US LLC", desc: "Form an LLC in Wyoming, Delaware, or Florida through a registered agent. Florida is popular among Brazilian entrepreneurs due to the large Brazilian community and proximity. The formation is done entirely online." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Brazilian passport (Passaporte) and your LLC details. Do not use your CPF or CNPJ number on the SS-4 -- the IRS requires a passport number for non-resident applications." },
                    { step: "3", title: "Apply Through ein.so", desc: "Complete our application in 3 minutes. We prepare your SS-4, correctly format your Brazilian address, and fax it to the IRS. Standard is $49. Express is $97." },
                    { step: "4", title: "Receive Your EIN", desc: "We deliver your EIN via email. Standard takes 4-7 business days. Express takes 7 business days. You receive your official IRS confirmation letter (CP 575)." },
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
                While Brazilian time zones are relatively close to US Eastern Time, calling the IRS still involves long hold times and potential language barriers (the IRS primarily operates in English). The fax method through ein.so is more reliable and does not require you to navigate an English-language phone system. Learn more about <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CNPJ vs EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              CNPJ vs EIN: What Brazilian Entrepreneurs <span className="font-display gradient-text">Need to Understand</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Brazilian entrepreneurs are familiar with the CNPJ for business and CPF for individuals. The US EIN serves a similar purpose but for US operations. Here is the comparison:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Brazilian CNPJ/CPF</th>
                      <th className="text-left p-4 font-bold">US EIN</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Issuing Authority</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Receita Federal (Brazil)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">IRS (United States)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">CNPJ Format</td>
                      <td className="p-4 text-[var(--color-text-muted)]">14 digits (XX.XXX.XXX/XXXX-XX)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">9 digits (XX-XXXXXXX)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">US Banking</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Not accepted</td>
                      <td className="p-4 text-green-600 font-bold">Required for US bank accounts</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Amazon.com</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Not sufficient for US seller registration</td>
                      <td className="p-4 text-green-600 font-bold">Completes tax interview</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">US Real Estate</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Not accepted for US tax filing</td>
                      <td className="p-4 text-green-600 font-bold">Required for rental income reporting</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you operate in both countries, you need both your CNPJ (for Brazilian operations) and your EIN (for US operations). They are complementary identifiers for different jurisdictions. Learn more about the <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN application process</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Real Estate Investment */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Real Estate</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Brazilian Real Estate Investors Use a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Brazilian nationals are among the largest foreign buyers of US real estate. Whether you are buying a vacation home, investment property, or commercial real estate, a US LLC with an EIN is the standard holding structure. Here is why:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Asset Protection", desc: "Holding US property through an LLC provides liability protection. If someone is injured on your property, the LLC shields your personal assets. This is standard practice for both American and foreign real estate investors." },
                  { title: "Tax Filing", desc: "Your LLC's EIN is used for filing US tax returns on rental income (Form 1040-NR for non-residents). Without an EIN, you cannot properly file taxes on US rental income, which creates compliance problems." },
                  { title: "Banking and Mortgage", desc: "Your EIN lets you open a US bank account for managing rental income, property expenses, and mortgage payments. Some banks offer mortgages to foreign nationals with US LLCs, though requirements are stricter than for US residents." },
                  { title: "FIRPTA Compliance", desc: "FIRPTA (Foreign Investment in Real Property Tax Act) imposes withholding requirements on sales of US real estate by foreign persons. Your LLC's EIN is needed for FIRPTA compliance, including filing for reduced withholding or exemptions." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Learn more about <Link href="/ein-for-real-estate-investors/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for real estate investors</Link> and <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank accounts</Link>. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
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
