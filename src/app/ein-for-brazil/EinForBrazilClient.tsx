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

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Brazil&apos;s Position as Latin America&apos;s Largest Economy</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Brazil has a population of 215 million, a GDP of $2.1 trillion (the largest in Latin America), and over 20 million registered companies (CNPJs). Brazilians are among the top 5 foreign buyers of US real estate, spending $1.6 billion on US property purchases in 2023. The BRL/USD exchange rate hovers near 5.0. Brazilian entrepreneurs have a growing presence in the US market, with strong communities in Miami, Orlando, Newark, and Boston.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">What This Guide Covers for Brazilian Entrepreneurs</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                This guide covers the EIN application process for Brazilian entrepreneurs, including the CNPJ vs EIN comparison, real estate investment considerations, payment and currency management between BRL and USD, and how ein.so handles the application process. Read our complete guide on <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents</Link> for the full process.
              </p>

              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Factor</th><th className="px-4 py-3 font-semibold">Brazil</th><th className="px-4 py-3 font-semibold">United States</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Business Entity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Ltda / S.A. / MEI / EIRELI</td><td className="px-4 py-3 text-[var(--color-text-muted)]">LLC / Corporation</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Tax ID</td><td className="px-4 py-3 text-[var(--color-text-muted)]">CNPJ (14 digits) / CPF (11 digits)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">EIN (9 digits: XX-XXXXXXX)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Corporate Tax Rate</td><td className="px-4 py-3 text-[var(--color-text-muted)]">34% (15% IRPJ + 9% CSLL + 10% surcharge)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">21% federal corporate rate</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Banking</td><td className="px-4 py-3 text-[var(--color-text-muted)]">BRL accounts; Itau, Bradesco, Banco do Brasil</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USD accounts; Mercury, Relay, Chase</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Currency</td><td className="px-4 py-3 text-[var(--color-text-muted)]">BRL (~5.0 per USD)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USD (global reserve currency)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">US Real Estate Buying</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Top 5 foreign buyer country ($1.6B in 2023)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Domestic market</td></tr>
                  </tbody>
                </table>
              </div>
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
                Brazil&apos;s effective corporate tax rate of 34% is among the highest in Latin America, while a US single-member LLC offers pass-through taxation and 0% federal tax on non-US-sourced income for non-residents. Over 50,000 Brazilian nationals hold active US business registrations. Here are the primary use cases:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Core Business Reasons for Brazilian EIN Applicants</h3>

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
                Brazilian citizens receive their EIN in 4-7 business days via fax filing, with a 96% first-submission success rate through ein.so. Your Brazilian passport (Passaporte) number serves as identification. Here is the step-by-step process:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">The 4-Step EIN Process From Brazil</h3>

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

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Why Fax Is Preferred From Brazil</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                While Brazilian time zones (BRT, UTC-3) are close to US Eastern Time (UTC-5), calling the IRS still involves 1-2 hour hold times and potential language barriers (the IRS primarily operates in English). The fax method through ein.so is more reliable. Learn more about <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN</Link>.
              </p>

              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Document</th><th className="px-4 py-3 font-semibold">What to Prepare</th><th className="px-4 py-3 font-semibold">Notes</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Brazilian Passport (Passaporte)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Valid, unexpired passport</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Passport number in foreign ID field; not CPF or CNPJ</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">US LLC Documents</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Articles of Organization, entity name, state</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Florida popular for Brazilians; Wyoming for lower cost</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Brazilian Address</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Rua/Av, numero, bairro, cidade, estado, CEP</td><td className="px-4 py-3 text-[var(--color-text-muted)]">ein.so reformats Brazilian addresses for IRS acceptance</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Registered Agent</td><td className="px-4 py-3 text-[var(--color-text-muted)]">US registered agent name and address</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Provides US address for IRS correspondence</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Business Activity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Brief description of US business</td><td className="px-4 py-3 text-[var(--color-text-muted)]">E.g., &quot;e-commerce,&quot; &quot;real estate investment,&quot; &quot;SaaS&quot;</td></tr>
                  </tbody>
                </table>
              </div>
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
                Brazil&apos;s CNPJ has 14 digits and is issued by Receita Federal, while the US EIN has 9 digits and is issued by the IRS. Over 20 million active CNPJs exist in Brazil, and Brazilian entrepreneurs operating in the US need both. Here is the comparison:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">CNPJ vs EIN: Key Differences</h3>

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
                Brazilians purchased $1.6 billion in US real estate in 2023, with 60% of purchases concentrated in Florida (Miami-Dade, Broward, Orange, and Osceola counties). The median purchase price for Brazilian buyers was $350,000. A US LLC with an EIN is the standard holding structure. Here is why:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Why LLCs Are Essential for Brazilian Property Investors</h3>

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
