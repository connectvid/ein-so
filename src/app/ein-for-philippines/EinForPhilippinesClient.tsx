"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForPhilippinesClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Filipino"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from the Philippines without an SSN. ein.so handles the IRS fax filing for Filipino freelancers, virtual assistants, and BPO professionals. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Filipino entrepreneurs can get a US EIN by faxing IRS Form SS-4 with their Philippine passport number. No SSN, ITIN, or US visa is required.</strong>{" "}
                  The Philippines is a global hub for freelancing, BPO, and virtual assistance. Many Filipino professionals form US LLCs to access better payment processing and build credibility with US clients. ein.so handles the EIN application for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                The Philippines has one of the world&apos;s largest freelancing and BPO (Business Process Outsourcing) workforces. Filipino professionals serve US companies as virtual assistants, web developers, graphic designers, content writers, and customer support specialists. Many of these professionals are forming US LLCs to professionalize their operations, access US banking, and maximize their earnings.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers the complete EIN application process for Filipino entrepreneurs, including common use cases, payment and remittance considerations, SS-4 tips for Philippine applicants, and how ein.so makes the process simple and reliable.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Filipino Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Filipino Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Filipino professionals working with US clients have strong reasons to form US entities. English fluency, cultural alignment with US business, and the massive Filipino freelance workforce make the Philippines a natural fit for US-connected business. Here are the primary use cases:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Freelancing on Upwork and Fiverr", desc: "The Philippines is one of the top countries on Upwork and Fiverr by number of freelancers. A US LLC with an EIN lets you operate as a US-based agency or professional service firm. This increases client trust, allows you to charge higher rates, and gives you access to US payment processing that avoids the high fees of cross-border PayPal transfers." },
                  { title: "Virtual Assistant Services", desc: "Filipino VAs are in high demand among US entrepreneurs. Forming a US LLC elevates you from an individual contractor to a registered US business. You can invoice clients as a US entity, accept ACH payments, and build a US business credit profile. Many successful VA agencies run by Filipinos operate as US LLCs." },
                  { title: "BPO and Outsourcing Companies", desc: "If you run a BPO or outsourcing operation in the Philippines serving US clients, a US LLC gives you a professional US presence. Your EIN lets you open a US bank account, sign contracts as a US entity, and manage US client payments without cross-border banking friction." },
                  { title: "E-Commerce and Amazon Selling", desc: "Filipino entrepreneurs selling on Amazon.com or running Shopify stores targeting US customers use US LLCs and EINs for marketplace registration, payment processing, and tax compliance. Your EIN completes the Amazon tax interview and enables Stripe for direct sales." },
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

      {/* How Do Filipino Citizens Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Filipino Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Filipino applicants use the IRS fax method with <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link>. Your Philippine passport number serves as identification. The IRS phone method is impractical from the Philippines due to the 12-13 hour time difference. Here is the process:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form a US LLC", desc: "Form an LLC in Wyoming or Delaware through a registered agent. The entire process is done online from the Philippines. Most Filipino entrepreneurs choose Wyoming for its low costs and privacy protections." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Philippine passport (valid and unexpired) and your LLC formation details. No Philippine TIN, SSS number, or DTI/SEC registration is needed for the US EIN application." },
                    { step: "3", title: "Apply Through ein.so", desc: "Complete our 3-minute application. We prepare your SS-4, format your Philippine address correctly, and fax it to the IRS. Standard processing is $49. Express is $97." },
                    { step: "4", title: "Receive Your EIN", desc: "We deliver your EIN via email once the IRS processes your application. Standard takes 4-7 business days. Express takes 7 business days. You receive your official CP 575 confirmation letter." },
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
                The time zone difference between the Philippines (PHT, UTC+8) and US Eastern Time makes calling the IRS extremely inconvenient -- you would need to call between 6 PM and 11 AM PHT, with peak hours being late night. The fax method through ein.so is the practical choice. Learn more about <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Payment and Remittance Considerations */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Payments &amp; Remittances</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Filipino Entrepreneurs Handle <span className="font-display gradient-text">US Payments and PHP Remittances?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Remittance is a critical part of the Filipino international business experience. Your US EIN and bank account give you powerful tools for managing USD earnings and PHP transfers. Here is how to structure your payment flows:
              </p>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "US Bank Account", desc: "Open a Mercury or Relay account with your EIN. Hold USD earnings and choose when to convert to PHP. This gives you control over exchange rate timing instead of forced conversion on every transaction." },
                  { title: "Wise for PHP Transfers", desc: "Transfer from your US bank to your Philippine bank account through Wise at mid-market rates. Wise supports PHP and offers transparent fees, much lower than traditional bank wire transfers or Western Union." },
                  { title: "PayPal Business (US)", desc: "A US PayPal account connected to your EIN offers better rates for US transactions than a Philippine PayPal account. Hold USD in PayPal and transfer to your US bank when ready." },
                  { title: "Payoneer", desc: "Continue using Payoneer for marketplace payments. Your US bank account provides an additional payment channel alongside Payoneer, giving you flexibility for different client payment preferences." },
                  { title: "GCash/Maya Integration", desc: "Transfer from your US bank to your Philippine bank, then to GCash or Maya for local spending. This two-step approach gives you both USD savings and PHP spending capability." },
                  { title: "Stripe for Direct Sales", desc: "If you sell services or products directly to US customers, Stripe connected to your US entity provides professional payment processing with funds settling into your US bank account." },
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
                The key advantage of a US bank account for Filipino entrepreneurs is currency control. Instead of receiving PHP at whatever rate your platform converts at, you hold USD and convert when the PHP/USD rate is favorable. This can make a meaningful difference in your effective income. Learn more about <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank accounts</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SS-4 Tips for Filipino Applicants */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Philippines-Specific Tips</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Should Filipino Applicants Know About <span className="font-display gradient-text">Form SS-4?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Filipino applicants have straightforward SS-4 applications because Philippine passports use English and follow Western name conventions. However, there are a few considerations:
              </p>

              <div className="space-y-4">
                {[
                  { tip: "Philippine Address Formatting", detail: "Philippine addresses include barangay, city/municipality, and province names that may not fit neatly into the SS-4 fields. ein.so formats your Philippine address correctly. For Manila-area addresses, we handle the distinction between cities within Metro Manila (Makati, Quezon City, Taguig, etc.)." },
                  { tip: "Passport Number", detail: "Use your Philippine passport number (starts with P followed by numbers). Do not use your Philippine TIN, SSS number, or any other ID number. Ensure your passport is valid and unexpired." },
                  { tip: "Name Format", detail: "Philippine passports list names in Western order (given name, middle name, surname), which matches the SS-4 format. Ensure your name on the SS-4 matches your passport exactly, including middle names or initials." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.tip}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-[var(--color-text)] mb-2">Standard: $49 | Express: $97</p>
                <p className="text-[var(--color-text-muted)] mb-4">No SSN required. Applied from the Philippines in 3 minutes.</p>
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

      {/* Philippine Tax Considerations */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Considerations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Tax Obligations Do Filipino EIN Holders <span className="font-display gradient-text">Need to Consider?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Filipino entrepreneurs with US LLCs have tax obligations in both countries. The Philippines taxes worldwide income of its residents, and the US requires tax filings from foreign-owned LLCs. Here are the key considerations:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "US Tax Filing", detail: "A single-member LLC owned by a Filipino non-resident is a disregarded entity. You may need to file Form 5472 and Form 1120 (pro forma) annually with the IRS. Late filing penalties are significant ($25,000 per form), so do not ignore this requirement." },
                  { topic: "Philippine Income Tax", detail: "Filipino residents must report worldwide income to the BIR. Income from your US LLC is taxable in the Philippines. The Philippines has a progressive income tax rate up to 35%. Consult a Philippine CPA familiar with foreign income reporting." },
                  { topic: "RP-US Tax Treaty", detail: "The Philippines and the US have a tax treaty that provides some relief from double taxation. The treaty affects withholding rates and may provide credits. However, the Philippines' tax treaty network is less extensive than some countries, so careful tax planning is important." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application only. We recommend consulting a Philippine CPA or tax attorney who understands US-Philippine cross-border obligations. Your EIN is the foundation for all US tax compliance. Visit our <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-residents guide</Link> for more.
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
