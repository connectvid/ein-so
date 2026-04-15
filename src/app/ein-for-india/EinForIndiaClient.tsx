"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForIndiaClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Indian"
        titleAccent="Entrepreneurs"
        description="Apply for your US EIN from India without an SSN or ITIN. ein.so handles the IRS fax filing process for Indian freelancers, Amazon sellers, and IT firms. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Indian entrepreneurs can get a US EIN by submitting IRS Form SS-4 by fax. Your Indian passport number replaces the SSN requirement.</strong>{" "}
                  The IRS online tool is blocked for applicants without an SSN, so the fax method is your path. ein.so prepares your SS-4, faxes it to the IRS, and delivers your EIN. Standard processing costs $49 (4-7 business days). Express costs $97 (7 business days).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                India is one of the largest sources of international entrepreneurs entering the US market. From Upwork freelancers forming US LLCs to Amazon India sellers expanding to Amazon.com, Indian business owners need EINs to operate legally in the United States. The challenge is that the IRS does not make it easy for non-residents to apply -- the online tool requires an SSN, and calling the IRS from India means expensive international calls during US business hours.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers everything Indian entrepreneurs need to know about getting a US EIN: the application process, required documents, common use cases, payment platform integration, and how ein.so simplifies the entire process. Whether you are a software developer in Bangalore, a textile exporter in Mumbai, or a freelancer in Delhi, the process is the same. Read our complete guide on <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents</Link> for the full process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Indian Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Indian Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Indian entrepreneurs form US LLCs and need EINs for several reasons. The US market offers access to payment processors, banking infrastructure, and customer trust that Indian business structures alone cannot provide. Here are the most common reasons Indian applicants come to ein.so:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Freelancing on US Platforms", desc: "Indian freelancers dominate platforms like Upwork, Fiverr, and Toptal. Forming a US LLC with an EIN gives you a professional presence, access to US banking, and the ability to invoice in USD without relying on PayPal's unfavorable exchange rates. Many Indian freelancers report higher client trust and win rates after forming a US entity." },
                  { title: "Amazon.com Expansion", desc: "If you sell on Amazon.in and want to expand to Amazon.com, you need a US entity with an EIN. Amazon's US marketplace requires a tax identification number for the seller tax interview. Your EIN lets you register as a US-based seller, use FBA warehouses, and access Amazon's largest customer base." },
                  { title: "IT Consulting and Software Services", desc: "India's IT sector is massive, and many IT firms form US LLCs to contract directly with American companies. A US EIN is required to open a business bank account, sign contracts as a US entity, and comply with US tax reporting for income earned from American clients." },
                  { title: "Payment Processing Integration", desc: "Services like Stripe, PayPal Business, and Braintree work more smoothly with a US entity and EIN. While Razorpay handles Indian payments well, it does not process US-based transactions the way Stripe does. A US EIN connected to a US bank account gives you full access to the US payment ecosystem." },
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

      {/* How Do Indian Citizens Apply for an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Step-by-Step</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Indian Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process for Indian applicants follows the same fax method used by all non-US residents. You submit IRS <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link> by fax to 855-215-1627 using your Indian passport as identification. Here is the step-by-step process:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form Your US LLC (If You Have Not Already)", desc: "Most Indian entrepreneurs form an LLC in Wyoming, Delaware, or New Mexico through a registered agent. This gives you a US business address and a legal entity to associate with your EIN. You can form an LLC entirely online from India." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Indian passport (valid and unexpired), your LLC formation details (name, state, formation date), and your Indian address. No PAN card, Aadhaar, or Indian business registration is needed for the US EIN application." },
                    { step: "3", title: "Complete Form SS-4", desc: "Fill out the one-page IRS form with your LLC details and your personal information. Use your passport number in the identification field. Use your Indian address as the responsible party's address. ein.so handles this step for you to prevent errors." },
                    { step: "4", title: "Submit by Fax and Wait", desc: "The completed SS-4 is faxed to the IRS. Processing takes 4-7 business days for Standard or 7 business days for Express through ein.so. The IRS faxes back your EIN assignment letter (CP 575)." },
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
                The most common mistake Indian applicants make is incorrectly formatting their address on the SS-4. Indian addresses often include locality names, pin codes, and state abbreviations that do not fit neatly into the IRS form fields. ein.so knows exactly how to format Indian addresses for IRS acceptance. Learn more about the <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">complete EIN application process</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SS-4 Tips for Indian Applicants */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">India-Specific Tips</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What SS-4 Mistakes Do Indian Applicants <span className="font-display gradient-text">Commonly Make?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Indian applicants face specific challenges when completing Form SS-4. The IRS does not provide clear guidance for international addresses, and small formatting errors cause rejections. Here are the most common issues we see from Indian applicants:
              </p>

              <div className="space-y-4">
                {[
                  { issue: "Address Formatting", detail: "Indian addresses often include flat numbers, building names, locality names, and 6-digit pin codes. The SS-4 has limited space. You need to abbreviate carefully without omitting critical information. ein.so formats your address correctly every time." },
                  { issue: "Passport Number Entry", detail: "Your Indian passport number goes in the 'foreign identification number' field. Some applicants mistakenly enter their PAN number or Aadhaar number instead. The IRS specifically requires your passport number for non-resident applications." },
                  { issue: "Business Type Selection", detail: "Indian applicants sometimes select the wrong entity type. If you formed a US LLC, select 'LLC' -- not 'partnership' or 'sole proprietor,' even if your Indian business is structured differently. The SS-4 is about your US entity, not your Indian business." },
                  { issue: "Responsible Party Confusion", detail: "The responsible party must be an individual person, not your Indian company or your US LLC. Enter your personal name as it appears on your passport. This is the person the IRS holds responsible for the entity's tax obligations." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                These errors cause silent rejections -- the IRS does not notify you when your form is rejected. You simply never receive a response. This is why so many Indian applicants waste weeks waiting for an EIN that will never arrive. ein.so eliminates this risk by preparing your SS-4 correctly the first time. See our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 form guide</Link> for detailed field-by-field instructions.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Banking and Payments for Indian Entrepreneurs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking &amp; Payments</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Indian Entrepreneurs Use Their EIN for <span className="font-display gradient-text">US Banking and Payments?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Once you have your EIN, the next step for most Indian entrepreneurs is opening a US bank account and setting up payment processing. Your EIN is the key that unlocks the US financial system. Here is how Indian business owners typically use their EIN:
              </p>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "US Business Bank Account", desc: "Banks like Mercury and Relay accept Indian LLC owners with an EIN. You can open an account remotely and receive a US routing number and account number for ACH transfers." },
                  { title: "Stripe Integration", desc: "With a US EIN and bank account, you can set up Stripe to accept USD payments directly. This eliminates the conversion fees and delays you experience with Razorpay for US transactions." },
                  { title: "PayPal Business (US)", desc: "A US PayPal Business account connected to your EIN gives you better rates than PayPal India for international transactions. You can hold and transfer USD without forced INR conversion." },
                  { title: "Amazon Seller Registration", desc: "Your EIN completes the Amazon tax interview, letting you sell on Amazon.com through FBA. This is separate from your Amazon.in seller account." },
                  { title: "Wise (TransferWise)", desc: "Many Indian entrepreneurs use Wise to transfer funds between their US bank account and Indian bank account. Your EIN-linked US bank account gives you a USD balance with low-cost INR conversion." },
                  { title: "Payoneer Integration", desc: "Payoneer works well for Indian freelancers receiving payments from US clients. Your US EIN and bank account give you an additional payment receiving option alongside Payoneer." },
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
                The combination of a US LLC, EIN, and US bank account gives Indian entrepreneurs a complete US business infrastructure. You can invoice US clients in USD, accept credit card payments through Stripe, and transfer profits to your Indian bank account through Wise or your bank&apos;s wire transfer service. Learn more about <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">using your EIN for banking</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Indian Tax Considerations */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Considerations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Should Indian Entrepreneurs Know About <span className="font-display gradient-text">US and Indian Taxes?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Getting a US EIN creates US tax obligations. Indian entrepreneurs with US LLCs need to understand the basics of both US and Indian tax requirements. This is not tax advice -- consult a cross-border tax professional -- but here is what you should know:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "US Tax Filing", detail: "A single-member LLC owned by a non-resident Indian is treated as a disregarded entity for US tax purposes. You may need to file Form 5472 and Form 1120 (pro forma) annually. If your LLC has US-sourced income, additional filing requirements apply." },
                  { topic: "India-US Tax Treaty", detail: "India and the United States have a tax treaty (DTAA) that prevents double taxation on the same income. This treaty affects how your US business income is taxed in India and may provide credits for taxes paid in either country." },
                  { topic: "FEMA and RBI Compliance", detail: "Indian residents who own foreign entities must comply with FEMA (Foreign Exchange Management Act) and RBI (Reserve Bank of India) regulations regarding overseas direct investments. Forming a US LLC may require filing with the RBI under the Overseas Direct Investment framework." },
                  { topic: "GST Implications", detail: "If your Indian business provides services to your US LLC, GST (Goods and Services Tax) implications may apply to the cross-border service arrangement. Export of services is generally zero-rated under GST, but the structure matters." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application -- we do not provide tax advice. We strongly recommend working with a CA (Chartered Accountant) in India who understands cross-border tax obligations, or a US CPA familiar with non-resident tax matters. Your EIN is the starting point for all US tax compliance. For more about the EIN application without an SSN, see our <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN guide</Link>.
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
