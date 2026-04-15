"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForNigeriaClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Nigerian"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from Nigeria without an SSN. ein.so handles the IRS fax filing for Nigerian tech founders, freelancers, and e-commerce sellers. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Nigerian entrepreneurs can get a US EIN by faxing IRS Form SS-4 with their Nigerian passport number. No SSN, ITIN, or US visa is required.</strong>{" "}
                  Nigeria&apos;s tech ecosystem is booming, and more Nigerian founders are forming US LLCs to access American banking, payment processing, and investor networks. ein.so handles the EIN application for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Nigeria is Africa&apos;s largest economy and home to a rapidly growing tech startup ecosystem. From Lagos to Abuja, Nigerian entrepreneurs build products and services for both local and international markets. When the target is the US market -- or when US infrastructure is needed for payments, banking, or investor relations -- a US LLC with an EIN is the standard approach.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The challenge is that the IRS makes it difficult for Nigerian applicants to get an EIN. The online tool requires an SSN, and calling from Nigeria means expensive international calls during US business hours. This guide explains how ein.so solves this problem and covers everything Nigerian entrepreneurs need to know about getting a US EIN. Read our complete guide on <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents</Link> for the full process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Nigerian Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Nigerian Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Nigerian entrepreneurs form US LLCs for access to global infrastructure that Nigerian banking and payment systems do not fully provide. The US entity structure is particularly important for tech startups seeking funding. Here are the primary use cases:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Tech Startups and Venture Capital", desc: "Many Nigerian tech startups form Delaware LLCs or C-Corps to raise funding from US investors. Y Combinator, Techstars, and other accelerators require or strongly prefer US entities. Your EIN is required to open a US bank account, issue shares (for C-Corps), set up Stripe, and comply with US tax reporting." },
                  { title: "Freelancing and Remote Work", desc: "Nigerian freelancers on Upwork, Toptal, and other platforms form US LLCs to access better payment options. A US entity with an EIN lets you receive payments through US banking rails, avoiding the delays and fees associated with receiving international payments in Nigeria." },
                  { title: "E-Commerce and Amazon Selling", desc: "Nigerian entrepreneurs selling products online -- whether handmade goods, private label products, or wholesale items -- use US LLCs to access Amazon.com and other US marketplaces. Your EIN completes the Amazon tax interview and lets you sell directly to US consumers." },
                  { title: "US Payment Processing (Beyond Paystack/Flutterwave)", desc: "Paystack and Flutterwave are excellent for Nigerian local payments, but they do not replace US payment processors for US-based transactions. A US EIN lets you set up Stripe, accept US credit cards, process ACH payments, and receive bank transfers through your US bank account." },
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

      {/* How Do Nigerian Citizens Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Nigerian Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Nigerian applicants use the IRS fax method to submit <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link>. Your Nigerian passport number serves as your identification. Here is the step-by-step process:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form Your US LLC", desc: "Form an LLC in Delaware (preferred for startups seeking funding) or Wyoming (lower costs). Use a registered agent for your US address. The entire formation process is done online from Nigeria." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Nigerian passport (valid and unexpired) and your LLC details. No NIN (National Identification Number), BVN, or Nigerian business registration (CAC) documents are needed for the US EIN." },
                    { step: "3", title: "Apply Through ein.so", desc: "Complete our simple application in 3 minutes. We prepare your SS-4, format your Nigerian address for IRS acceptance, and fax it to the IRS. $49 Standard or $97 Express." },
                    { step: "4", title: "Receive Your EIN", desc: "The IRS assigns your EIN and we deliver it via email. Standard takes 4-7 business days; Express takes 7 business days. You receive your official CP 575 confirmation letter." },
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
                The IRS phone method (267-941-1099) is impractical from Nigeria due to expensive international call rates and the 6-hour time difference (IRS operates on US Eastern Time). The fax method through ein.so is the standard approach for Nigerian applicants. Learn more about the <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">complete EIN application process</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SS-4 Tips for Nigerian Applicants */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Nigeria-Specific Tips</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What SS-4 Challenges Do Nigerian Applicants <span className="font-display gradient-text">Face?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Nigerian applicants face specific challenges with Form SS-4. Nigerian address formats, passport conventions, and name structures require careful handling. Here are the most common issues:
              </p>

              <div className="space-y-4">
                {[
                  { issue: "Nigerian Address Formatting", detail: "Nigerian addresses often include house numbers, street names, area names, and LGA (Local Government Area) designations. Lagos addresses can be particularly complex with areas like Victoria Island, Lekki, and Ikeja having multiple sub-zones. ein.so formats these correctly for IRS acceptance." },
                  { issue: "Passport Number vs NIN", detail: "Use your Nigerian passport number, not your National Identification Number (NIN) or Bank Verification Number (BVN). The IRS requires a passport number for non-resident applicants. Ensure your passport is valid and unexpired at the time of application." },
                  { issue: "Name Order and Formatting", detail: "Nigerian names may follow different ordering conventions than Western names. Some Nigerian passports list surname first, others list given names first. The SS-4 requires names in the Western format (first name, last name). Ensure this matches your passport exactly." },
                  { issue: "Phone Number Format", detail: "If providing a contact phone number on the SS-4, use the international format with Nigeria's country code (+234). Do not use the local 0-prefix format. ein.so handles all formatting details for you." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                These formatting issues cause silent rejections. The IRS does not tell you why your application was not processed -- your form just goes unanswered. ein.so eliminates this risk. See our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 form guide</Link> and <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN guide</Link> for details.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* US Banking and Payments for Nigerian Entrepreneurs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking &amp; Payments</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Nigerian Entrepreneurs Set Up <span className="font-display gradient-text">US Banking and Payments?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                One of the biggest challenges for Nigerian entrepreneurs is accessing US banking and payment infrastructure. CBN (Central Bank of Nigeria) regulations, Naira volatility, and limited international payment options make a US bank account especially valuable. Here is how your EIN unlocks US financial services:
              </p>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Mercury or Relay Bank Account", desc: "Open a US business bank account remotely using your EIN. Receive a US routing number and account number for ACH transfers and wire receipts. Hold USD without CBN exchange rate restrictions." },
                  { title: "Stripe (US)", desc: "Set up Stripe with your US entity and EIN. Accept credit card payments, process subscriptions, and handle ACH debits. This complements Paystack for US-facing revenue." },
                  { title: "Paystack + Stripe Dual Setup", desc: "Use Paystack for Naira collections in Nigeria and Stripe for USD collections internationally. Your US EIN enables the Stripe side. This dual setup covers both your Nigerian and US customer bases." },
                  { title: "Wise for NGN/USD Transfers", desc: "Transfer funds between your US bank account and Nigerian bank account through Wise. While Naira conversion options may be limited, Wise provides a transparent and competitive transfer mechanism." },
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
                For Nigerian tech startups, a US bank account is often essential for receiving investment funds, paying US-based service providers, and managing USD revenue. Your EIN is the first requirement for opening this account. <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">Learn more about EIN for bank accounts</Link>. Ready to get started? <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
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
