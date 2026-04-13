"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForPakistanClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Pakistani"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from Pakistan without an SSN or ITIN. ein.so handles the IRS fax filing for Pakistani freelancers, Amazon sellers, and IT professionals. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Pakistani entrepreneurs can get a US EIN by submitting IRS Form SS-4 by fax. Your Pakistani passport number replaces the SSN requirement.</strong>{" "}
                  The IRS online tool is blocked for applicants without an SSN, so the fax method is the path for Pakistani applicants. ein.so prepares your SS-4, faxes it to the IRS, and delivers your EIN. Standard costs $49 (4-7 business days). Express costs $97 (2-3 business days).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Pakistan has one of the fastest-growing freelancing communities in the world. Pakistani professionals dominate platforms like Upwork, Fiverr, and Freelancer.com, and many are forming US LLCs to access better payment processing, build credibility with international clients, and avoid the limitations of Pakistani banking for international transactions. The first step in this process is getting a US EIN.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers everything Pakistani entrepreneurs need to know: the EIN application process, common use cases, payment platform integration with Payoneer and other services, SS-4 tips specific to Pakistani applicants, and how ein.so makes the entire process simple and reliable.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Pakistani Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Pakistani Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Pakistani professionals and business owners form US LLCs for access to the global payment ecosystem that Pakistani banking infrastructure does not fully support. Here are the primary reasons Pakistani applicants use ein.so:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Freelancing (Upwork, Fiverr, Freelancer.com)", desc: "Pakistan ranks among the top five countries for freelancers on major platforms. A US LLC with an EIN lets you present as a US-based business, accept payments through US banking rails, and avoid the payment delays and conversion fees that Pakistani freelancers commonly face. Many top-rated Pakistani freelancers operate through US entities." },
                  { title: "Amazon FBA Selling", desc: "Pakistani entrepreneurs are increasingly selling on Amazon.com through private label and wholesale models. A US EIN is required to complete the Amazon tax interview. Combined with a US bank account or Payoneer, your EIN gives you full access to Amazon's US marketplace and FBA fulfillment network." },
                  { title: "IT Services and Software Development", desc: "Pakistan's IT sector exports billions of dollars in services annually. IT firms and individual developers form US LLCs to contract directly with American companies, which prefer paying US entities. Your EIN lets you open a US bank account, sign US contracts, and issue US invoices." },
                  { title: "Payment Processing (Payoneer, Wise, Stripe)", desc: "Payoneer is the dominant payment platform for Pakistani freelancers and sellers. A US EIN and US bank account give you additional payment channels beyond Payoneer, including Stripe and direct ACH transfers. This reduces your dependence on a single payment platform." },
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

      {/* How Do Pakistani Citizens Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Step-by-Step</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Pakistani Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The application process for Pakistani citizens uses the IRS fax method. You submit <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link> with your Pakistani passport number as identification. Here is how it works:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form a US LLC", desc: "Most Pakistani entrepreneurs form an LLC in Wyoming, Delaware, or New Mexico. Formation is done online through a registered agent. Cost is typically $100-300 plus state fees. You do not need to visit the US." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Pakistani passport (valid and unexpired) and your LLC formation details. No NTN, CNIC, or Pakistani business registration is needed for the US EIN application." },
                    { step: "3", title: "Submit Through ein.so", desc: "Fill out our 3-minute application form. We prepare your SS-4, format your Pakistani address correctly for IRS acceptance, and fax it to the IRS. Standard processing is $49. Express is $97." },
                    { step: "4", title: "Receive Your EIN", desc: "The IRS processes your application and assigns your EIN. We deliver it to you via email and WhatsApp. Your EIN confirmation letter (CP 575) serves as your official IRS documentation." },
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
                Calling the IRS from Pakistan is expensive and impractical. The IRS phone line (267-941-1099) operates during US business hours (6 AM - 11 PM ET), which is late night in Pakistan. International call rates from Pakistan to the US are high, and hold times frequently exceed an hour. The fax method through ein.so is the most practical option for Pakistani applicants. Learn more about applying <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">without an SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SS-4 Tips for Pakistani Applicants */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Pakistan-Specific Tips</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What SS-4 Mistakes Do Pakistani Applicants <span className="font-display gradient-text">Commonly Make?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Pakistani applicants face specific challenges when completing Form SS-4. The IRS form was not designed for South Asian address formats, and small errors cause silent rejections. Here are the issues we see most frequently:
              </p>

              <div className="space-y-4">
                {[
                  { issue: "Address Formatting", detail: "Pakistani addresses include house numbers, street names, sector/block names, city names, and postal codes in a format that does not fit neatly into the SS-4 fields. ein.so knows exactly how to format addresses from Karachi, Lahore, Islamabad, and other Pakistani cities for IRS acceptance." },
                  { issue: "Passport Number Entry", detail: "Your Pakistani passport number goes in the foreign identification field. Do not enter your CNIC (Computerized National Identity Card) number or NTN. The IRS requires passport numbers specifically for non-resident applications." },
                  { issue: "Name Matching", detail: "Your name on the SS-4 must match your passport exactly. Pakistani passports sometimes include patronymic names or different name orderings than Western conventions. Ensure the name matches character-for-character." },
                  { issue: "Entity Type Confusion", detail: "If you formed a US LLC, select LLC on the SS-4 -- not sole proprietor or partnership. Your Pakistani business structure (sole proprietorship, partnership, or company) is irrelevant for the US EIN application. The SS-4 is about your US entity." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                These errors result in the IRS ignoring your application entirely. They do not send rejection notices -- your form simply goes unanswered. ein.so has processed hundreds of applications from Pakistani entrepreneurs and knows the correct formatting for every field. See our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 form guide</Link> for details.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Payoneer and Payment Platforms */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Payments</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Pakistani Entrepreneurs Use Their EIN With <span className="font-display gradient-text">Payoneer and Other Platforms?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Payoneer is the lifeline for many Pakistani entrepreneurs receiving international payments. A US EIN and bank account expand your payment options beyond Payoneer. Here is how Pakistani business owners structure their payment systems:
              </p>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Payoneer", desc: "Continue using Payoneer for marketplace payments from Upwork, Fiverr, and Amazon. Your US bank account gives you an additional receiving account option within Payoneer." },
                  { title: "US Bank Account", desc: "Open a US bank account with Mercury or Relay using your EIN. This gives you a US routing and account number for ACH transfers, wire transfers, and direct deposits from US clients." },
                  { title: "Stripe", desc: "Accept credit card payments from customers worldwide through Stripe. Your US EIN and bank account enable full Stripe functionality, including recurring billing and subscriptions." },
                  { title: "Wise", desc: "Transfer funds between your US bank account and Pakistani bank account at competitive exchange rates. Wise supports PKR transfers, making it easy to access your US earnings in Pakistan." },
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
                The combination of Payoneer plus a US bank account gives you maximum flexibility. You keep your existing Payoneer payment flows intact while adding direct US banking capability for clients who prefer ACH or wire transfers. Your EIN is the key that unlocks the US banking side of this equation. Learn more about <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank accounts</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pakistan Tax Considerations */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Considerations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Should Pakistani Entrepreneurs Know About <span className="font-display gradient-text">US and Pakistani Taxes?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Getting a US EIN creates US tax reporting obligations. Pakistani entrepreneurs with US LLCs should understand the basics of both US and Pakistani tax requirements. This is not tax advice -- consult a qualified professional -- but here is what you need to be aware of:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "US Tax Filing", detail: "A single-member LLC owned by a non-resident Pakistani is a disregarded entity for US tax purposes. You may need to file Form 5472 and Form 1120 (pro forma) annually. The filing requirement exists even if your LLC has no US-sourced income." },
                  { topic: "Pakistan-US Tax Treaty", detail: "Pakistan and the US have a tax treaty that provides relief from double taxation. The treaty affects withholding rates on certain types of income and may provide credits for taxes paid in either country. Consult a tax professional familiar with this treaty." },
                  { topic: "FBR Reporting", detail: "Pakistani residents must report worldwide income to the Federal Board of Revenue (FBR). Income from your US LLC is reportable in Pakistan. The IT export income exemption may apply if your US LLC income qualifies under Pakistan's IT export incentive programs." },
                  { topic: "State Bank of Pakistan (SBP) Regulations", detail: "Foreign investments by Pakistani residents may require reporting to or approval from the State Bank of Pakistan. Forming a US LLC and holding a US bank account are foreign investments. Check current SBP foreign exchange regulations to ensure compliance." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application only. We strongly recommend consulting a Pakistani tax consultant or CA who understands US-Pakistan cross-border tax obligations. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link> and take the first step toward your US business.
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
