"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForMexicoClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Mexican"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from Mexico without an SSN. ein.so handles the IRS fax filing for Mexican cross-border sellers, importers, and e-commerce businesses. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Mexican entrepreneurs can get a US EIN by faxing IRS Form SS-4 with their Mexican passport number. No SSN, ITIN, or US visa is required.</strong>{" "}
                  Mexico and the US share the world&apos;s busiest border and billions of dollars in daily trade. Whether you are expanding cross-border commerce or launching on Amazon.com, ein.so handles the EIN application for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">The Scale of US-Mexico Trade</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Mexico has a population of 130 million, a GDP of $1.3 trillion, and bilateral trade with the US exceeding $800 billion annually -- making Mexico the United States&apos; largest trading partner as of 2023. Over 1 million US companies import from or export to Mexico. The MXN/USD exchange rate trades near 17. USMCA trade benefits, geographic proximity, and time zone alignment create natural advantages for Mexican entrepreneurs. A US EIN is the foundation for formalizing these cross-border business activities.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">What This Guide Covers for Mexican Entrepreneurs</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                This guide covers the complete EIN application process for Mexican entrepreneurs, including USMCA considerations, Amazon.com expansion from Mexico, the RFC vs EIN comparison, MXN/USD currency management, and how ein.so simplifies the process.
              </p>

              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Factor</th><th className="px-4 py-3 font-semibold">Mexico</th><th className="px-4 py-3 font-semibold">United States</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Business Entity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">S.A. de C.V. / S. de R.L. / Persona Fisica</td><td className="px-4 py-3 text-[var(--color-text-muted)]">LLC / Corporation</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Tax ID</td><td className="px-4 py-3 text-[var(--color-text-muted)]">RFC (12-13 characters)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">EIN (9 digits: XX-XXXXXXX)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Corporate Tax Rate</td><td className="px-4 py-3 text-[var(--color-text-muted)]">30% flat rate</td><td className="px-4 py-3 text-[var(--color-text-muted)]">21% federal corporate rate</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Banking</td><td className="px-4 py-3 text-[var(--color-text-muted)]">MXN/USD accounts; BBVA, Banorte</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USD accounts; Mercury, Relay, Chase</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Currency</td><td className="px-4 py-3 text-[var(--color-text-muted)]">MXN (~17 per USD)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USD (global reserve currency)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Trade Agreement</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USMCA member</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USMCA member</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Mexican Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Mexican Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Mexico exported $402 billion in goods to the US in 2023, and over 4.7 million Mexican nationals have business interests in the US. USMCA reduces tariffs on qualifying goods to 0%, and same-day shipping from Mexican border cities to US warehouses is standard. Here are the primary reasons Mexican business owners apply for a US EIN through ein.so:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Key Business Drivers for Mexican EIN Applicants</h3>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Cross-Border Commerce", desc: "Mexican businesses selling products or services to US customers need a US tax ID for compliance. A US LLC with an EIN lets you invoice US clients, accept US payments, and manage US sales tax obligations. The proximity between Mexico and the US makes physical product shipping fast and affordable." },
                  { title: "Amazon.com Expansion", desc: "Many Mexican sellers on Amazon.com.mx expand to Amazon.com to access the much larger US customer base. Your US EIN completes the Amazon tax interview and lets you register as a US seller. Combined with FBA, you can ship products from Mexican factories to US warehouses and sell directly to American consumers." },
                  { title: "USMCA Trade Benefits", desc: "The USMCA trade agreement provides preferential treatment for goods traded between Mexico, the US, and Canada. A US entity with an EIN positions your business to take full advantage of these trade benefits, including reduced tariffs and simplified customs procedures for qualifying goods." },
                  { title: "US Real Estate and Investment", desc: "Mexican nationals investing in US real estate or businesses need an EIN for tax compliance. Whether you are buying rental property, investing in a US business, or forming a holding company, your EIN is required for tax filing and banking purposes." },
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

      {/* How Do Mexican Citizens Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Mexican Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Mexican applicants receive their EIN in 4-7 business days via fax, with a 97% first-submission success rate through ein.so. Mexico shares time zones with the US (CST/MST/PST overlap), making phone calls feasible but still unreliable due to 1-2 hour hold times. Here is the process:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Step-by-Step EIN Filing From Mexico</h3>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form a US LLC", desc: "Form an LLC in Wyoming, Delaware, or New Mexico through a registered agent. Mexican entrepreneurs in border cities like Tijuana, Ciudad Juarez, or Monterrey sometimes visit the US for banking, but LLC formation is done entirely online." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Mexican passport (Pasaporte) and your LLC details. Do not use your CURP, INE, or RFC number on the SS-4 -- the IRS requires a passport number for non-resident applications." },
                    { step: "3", title: "Apply Through ein.so", desc: "Complete our 3-minute application. We prepare your SS-4, format your Mexican address for IRS acceptance, and fax it to the IRS. $49 Standard or $97 Express." },
                    { step: "4", title: "Receive Your EIN", desc: "The IRS processes your application and we deliver your EIN via email. Standard takes 4-7 business days. Express takes 7 business days." },
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

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Why Fax Is More Reliable Than Phone</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Mexico&apos;s time zone alignment with the US is an advantage for phone applications, but IRS hold times remain long and unreliable. ein.so provides a guaranteed, hassle-free process. See our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 form guide</Link> for details.
              </p>

              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Document</th><th className="px-4 py-3 font-semibold">What to Prepare</th><th className="px-4 py-3 font-semibold">Notes</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Mexican Passport (Pasaporte)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Valid, unexpired passport</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Passport number in foreign ID field; not CURP, INE, or RFC</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">US LLC Documents</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Articles of Organization, entity name, state</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Wyoming, Delaware, or New Mexico most common</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Mexican Address</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Calle, numero, colonia, CP, ciudad, estado</td><td className="px-4 py-3 text-[var(--color-text-muted)]">ein.so reformats Mexican addresses for IRS acceptance</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Registered Agent</td><td className="px-4 py-3 text-[var(--color-text-muted)]">US registered agent name and address</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Provides US business address for IRS</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Business Activity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Brief description of US business</td><td className="px-4 py-3 text-[var(--color-text-muted)]">E.g., &quot;cross-border trade,&quot; &quot;e-commerce,&quot; &quot;real estate&quot;</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* RFC vs EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              RFC vs EIN: What Mexican Entrepreneurs <span className="font-display gradient-text">Need to Know</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Mexico&apos;s RFC is issued by SAT and is required for all Mexican tax obligations, while the US EIN is issued by the IRS for US federal tax purposes. Mexican entrepreneurs operating cross-border need both. Here is how they compare:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">RFC vs EIN: Key Differences</h3>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Mexican RFC</th>
                      <th className="text-left p-4 font-bold">US EIN</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Issuing Authority</td>
                      <td className="p-4 text-[var(--color-text-muted)]">SAT (Mexico)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">IRS (United States)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Purpose</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Mexican tax identification</td>
                      <td className="p-4 text-[var(--color-text-muted)]">US federal tax identification</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Format</td>
                      <td className="p-4 text-[var(--color-text-muted)]">13 characters (individuals) or 12 (companies)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">9 digits (XX-XXXXXXX)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">US Banking</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Not accepted</td>
                      <td className="p-4 text-green-600 font-bold">Required for US bank accounts</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Amazon.com</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Not sufficient for US seller registration</td>
                      <td className="p-4 text-green-600 font-bold">Completes tax interview</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                You need both your RFC (for Mexican obligations) and your EIN (for US obligations) if you operate cross-border. They are complementary, not interchangeable. Learn more about <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">getting an EIN without an SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* MXN/USD Currency and Banking */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Mexican Entrepreneurs Manage <span className="font-display gradient-text">MXN and USD Banking?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                MXN/USD fluctuated between 16.5 and 18.5 over the past 12 months. Mexican banks like BBVA Mexico and Banorte offer USD-denominated accounts domestically, and a US bank account via your EIN adds a second USD tier with full ACH capability. Here is how Mexican entrepreneurs structure their finances:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Dual-Currency Banking for Cross-Border Sellers</h3>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "US Bank Account", desc: "Open a Mercury or Relay account with your EIN. Receive USD payments from US clients, marketplaces, and payment processors. Hold USD without forced conversion to MXN." },
                  { title: "Mexican USD Account", desc: "Many Mexican banks (BBVA, Banorte, Citibanamex) offer USD accounts. You can transfer from your US bank to your Mexican USD account to maintain dollar holdings within Mexican banking." },
                  { title: "Wise Transfers", desc: "Use Wise for competitive MXN/USD transfers. Wise offers better rates than Mexican banks for international transfers, with transparent fees and fast delivery." },
                  { title: "Cross-Border Payment Processing", desc: "Stripe US for USD payments, and local Mexican processors (Conekta, OpenPay) for MXN payments. Your EIN enables the US side of this dual payment structure." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5 h-full">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Border-city entrepreneurs in Tijuana, Ciudad Juarez, Nogales, and other border cities have the added advantage of being able to visit US banks in person. But even from Mexico City, Monterrey, or Guadalajara, you can open a US bank account remotely with your EIN. <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">Learn more about EIN for banking</Link>. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Mexico-US Tax Considerations */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Considerations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Tax Obligations Do Mexican EIN Holders <span className="font-display gradient-text">Need to Consider?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Mexico&apos;s corporate tax rate is 30% flat, compared to the US federal rate of 21%. The Mexico-US tax treaty prevents double taxation, and Mexico offers a RESICO regime with rates as low as 1% for qualifying small businesses earning under MXN 3.5 million. Key considerations:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">SAT and IRS Dual Filing Requirements</h3>

              <div className="space-y-4">
                {[
                  { topic: "US Tax Filing", detail: "A single-member LLC owned by a Mexican non-resident is a disregarded entity. You may need to file Form 5472 and Form 1120 (pro forma) annually. If your LLC has US-sourced income, additional requirements may apply." },
                  { topic: "Mexico-US Tax Treaty", detail: "The Mexico-US tax treaty prevents double taxation on the same income. Business profits are taxable where you reside (Mexico) unless you have a permanent establishment in the US. The treaty provides credits for taxes paid in either country." },
                  { topic: "SAT Obligations", detail: "Mexican residents must report worldwide income to the SAT. Income from your US LLC is reportable in Mexico. If you operate under a Mexican tax regime (RESICO, actividad empresarial, etc.), your US income must be included in your Mexican tax calculations." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application. Tax compliance is best managed with a Mexican contador (accountant) who understands cross-border US-Mexico obligations. Your EIN is the starting point for US compliance. Visit <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-residents</Link> for more.
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
