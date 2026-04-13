"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForBangladeshClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Bangladeshi"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from Bangladesh without an SSN or ITIN. ein.so provides Bengali language support and handles the entire IRS fax filing process for Bangladeshi freelancers, RMG exporters, and IT firms. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Bangladeshi entrepreneurs can get a US EIN by submitting IRS Form SS-4 by fax. Your Bangladeshi passport number replaces the SSN requirement. No ITIN, visa, or US presence is needed.</strong>{" "}
                  ein.so was built with Bangladeshi entrepreneurs as a core audience. We provide support in Bengali, understand Bangladeshi address formats, and know the specific challenges our Bangladeshi clients face. Standard processing costs $49 (4-7 business days). Express costs $97 (2-3 business days).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Bangladesh is a country of entrepreneurs. From the garment factories of Dhaka and Chittagong to the freelancers of Rajshahi and Sylhet, Bangladeshi professionals are building businesses that serve the global market. The United States is a primary destination for these products and services, and a US EIN is the first step in formalizing that connection.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Bangladesh&apos;s freelancing sector is growing faster than almost any country in the world. The IT outsourcing industry is expanding rapidly. The RMG (Ready-Made Garment) sector is the world&apos;s second-largest apparel exporter. All of these industries connect to the US market, and all of them benefit from having a US EIN and business entity.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide is specifically written for Bangladeshi entrepreneurs. We cover the EIN application process, common use cases for Bangladeshi applicants, payment and banking solutions that work in Bangladesh, SS-4 tips for Bangladeshi addresses and names, tax considerations, and how ein.so makes the entire process simple. We understand your challenges because we built ein.so to solve them.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Bangladeshi Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Bangladeshi Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Bangladeshi entrepreneurs face unique challenges when doing business internationally: limited banking infrastructure for foreign transactions, restricted access to global payment processors, and currency controls by Bangladesh Bank. A US LLC with an EIN solves many of these problems. Here are the primary reasons Bangladeshi applicants use ein.so:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Freelancing (Upwork, Fiverr, Freelancer.com)", desc: "Bangladesh ranks among the top freelancing countries globally. Tens of thousands of Bangladeshi professionals earn their living on international platforms. A US LLC with an EIN transforms you from an individual contractor to a registered US business. This means access to US banking, Stripe payment processing, higher client trust, and the ability to charge US-market rates. Many successful Bangladeshi freelancers report significantly higher earnings after establishing a US entity." },
                  { title: "IT Services and Software Outsourcing", desc: "Bangladesh's IT sector is growing rapidly, with software development, QA testing, and IT support services exported to US and European clients. A US LLC gives IT firms a professional US presence for contracting with American companies. Your EIN lets you open a US bank account, sign contracts as a US entity, and receive payments through US banking rails without the delays of international wire transfers to Bangladesh." },
                  { title: "RMG (Ready-Made Garment) Industry", desc: "Bangladesh is the world's second-largest apparel exporter, and the US is a major buyer of Bangladeshi garments. RMG companies establishing direct US sales channels, forming US distribution entities, or managing US-side logistics use LLCs and EINs for banking, invoicing, and compliance. Your EIN enables direct US banking relationships for trade receivables from US buyers like Walmart, Target, and H&M's US operations." },
                  { title: "Amazon FBA and E-Commerce", desc: "Bangladeshi entrepreneurs are entering the Amazon FBA market through private label and wholesale models. Your US EIN completes the Amazon tax interview and registers you as a US seller. Combined with a US bank account, you can receive Amazon payments in USD without routing through Bangladeshi banking, which can involve delays and unfavorable conversion rates." },
                  { title: "Overcoming Payment Processing Limitations", desc: "Bangladesh has limited access to international payment processors. Stripe is not directly available in Bangladesh. PayPal has restricted functionality. A US entity with an EIN gives you full access to Stripe, PayPal Business (US), and other payment processors that work seamlessly with US bank accounts. This is often the single biggest reason Bangladeshi entrepreneurs form US LLCs." },
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

      {/* How Do Bangladeshi Citizens Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Step-by-Step</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Bangladeshi Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process for Bangladeshi applicants uses the IRS fax method. You submit <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link> with your Bangladeshi passport as identification. ein.so handles every step. Here is how it works:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form a US LLC", desc: "Form an LLC in Wyoming, Delaware, or New Mexico through a registered agent. This is done entirely online from Bangladesh. Most Bangladeshi entrepreneurs choose Wyoming for its low costs and strong privacy protections. Formation typically costs $100-300 plus state fees." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Bangladeshi passport (valid and unexpired) and your LLC formation details (entity name, state, formation date, registered address). No NID (National ID), TIN, or Bangladeshi trade license is needed for the US EIN application." },
                    { step: "3", title: "Apply Through ein.so (Bengali Support Available)", desc: "Fill out our simple application form -- it takes 3 minutes. We prepare your Form SS-4, correctly format your Bangladeshi address for IRS acceptance, and fax it to the IRS using commercial-grade systems. We provide support in Bengali if you need help at any step. Standard processing is $49. Express is $97." },
                    { step: "4", title: "Receive Your EIN via Email and WhatsApp", desc: "The moment the IRS returns your EIN assignment, we deliver it to you via email and WhatsApp. You receive your official IRS confirmation letter (CP 575). Standard takes 4-7 business days. Express takes 2-3 business days." },
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
                Calling the IRS from Bangladesh is not practical. The phone line (267-941-1099) operates during US business hours (6 AM - 11 PM ET), which is 4 PM - 9 AM the next day in Bangladesh. International call rates from Bangladesh to the US are expensive, hold times exceed an hour, and the language barrier adds difficulty. The fax method through ein.so eliminates all of these problems. Learn more about applying <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">without an SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SS-4 Tips for Bangladeshi Applicants */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Bangladesh-Specific Tips</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What SS-4 Mistakes Do Bangladeshi Applicants <span className="font-display gradient-text">Commonly Make?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Bangladeshi applicants face specific challenges with Form SS-4 that we have solved through years of experience. The IRS form was not designed for South Asian address formats or naming conventions. Here are the issues we see most frequently from Bangladeshi applicants:
              </p>

              <div className="space-y-4">
                {[
                  { issue: "Bangladeshi Address Formatting", detail: "Bangladeshi addresses include house numbers, road numbers, area names, thana/upazila names, district names, and postal codes -- in a format that is very different from US addresses. Dhaka addresses are especially complex with areas like Dhanmondi, Gulshan, Banani, Uttara, and Mirpur having their own numbering systems. ein.so knows exactly how to format every type of Bangladeshi address for IRS acceptance." },
                  { issue: "Passport Number Entry", detail: "Your Bangladeshi passport number (e-Passport numbers start with 'B' or 'A' followed by digits) goes in the foreign identification field. Do not enter your NID (National ID) number, TIN, or any other number. The IRS specifically requires a passport for non-resident applications." },
                  { issue: "Name Formatting", detail: "Bangladeshi names sometimes include patronymic elements, titles, or different transliterations of Bengali names. The name on your SS-4 must match your passport exactly. If your passport says 'Mohammad' do not write 'Muhammad.' If your passport shows 'Akter' do not write 'Akhter.' ein.so ensures exact matching." },
                  { issue: "Entity Type Selection", detail: "Select LLC if you formed a US LLC. Some Bangladeshi applicants confuse this with their Bangladeshi business type (proprietorship, partnership, or limited company under RJSC). The SS-4 is about your US entity only. Your Bangladeshi trade license or RJSC registration is irrelevant for this form." },
                  { issue: "Responsible Party", detail: "The responsible party must be an individual person -- not your Bangladeshi company, not your US LLC. Enter your personal name exactly as it appears on your passport. This is the person the IRS holds responsible for the entity's tax obligations." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                These errors cause the IRS to silently reject your application. They do not send a rejection letter -- your form simply goes unanswered. You wait weeks, not knowing if your application is being processed or was thrown out. ein.so has processed hundreds of applications from Bangladeshi entrepreneurs and handles all formatting correctly every time. See our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 form guide</Link> for field-by-field instructions.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Payment and Banking Solutions for Bangladesh */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Payments &amp; Banking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Bangladeshi Entrepreneurs Solve <span className="font-display gradient-text">Payment and Banking Challenges?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Payment processing is one of the biggest challenges for Bangladeshi entrepreneurs doing international business. Bangladesh Bank regulations, limited Stripe availability, restricted PayPal functionality, and currency controls make it difficult to receive international payments efficiently. A US EIN and bank account solve most of these problems:
              </p>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "US Bank Account (Mercury/Relay)", desc: "Your EIN lets you open a US business bank account remotely. This gives you a USD account with a US routing number for receiving ACH payments, wire transfers, and direct deposits from US clients and platforms." },
                  { title: "Stripe (Full Access)", desc: "Stripe is not directly available in Bangladesh, but with a US entity and EIN, you get full Stripe functionality. Accept credit cards, set up subscriptions, and process payments from customers worldwide -- all settling into your US bank account." },
                  { title: "Payoneer", desc: "Many Bangladeshi freelancers already use Payoneer. Your US bank account gives you an additional receiving channel. Link your US account to Payoneer or use both independently for different payment scenarios." },
                  { title: "Wise for BDT Transfers", desc: "Transfer from your US bank account to your Bangladeshi bank account through Wise. While BDT transfer options may have limitations, Wise provides competitive rates compared to traditional bank wire transfers." },
                  { title: "PayPal Business (US)", desc: "A US PayPal Business account linked to your EIN and US bank account provides full PayPal functionality -- unlike the limited options available with a Bangladesh-based PayPal account." },
                  { title: "Direct Client Payments", desc: "US clients can pay you directly via ACH or wire transfer to your US bank account. This eliminates intermediary fees and conversion delays. Many Bangladeshi IT firms find this dramatically improves cash flow." },
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
                The combination of a US EIN, US bank account, and Stripe gives Bangladeshi entrepreneurs access to the same payment infrastructure that American businesses use. This is transformative for freelancers and IT firms who have been limited by Bangladesh&apos;s payment ecosystem. Your EIN is the key that unlocks all of this. Learn more about <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank accounts</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why ein.so Was Built for Bangladeshi Entrepreneurs */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Was ein.so Built With Bangladeshi <span className="font-display gradient-text">Entrepreneurs in Mind?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so was founded by a team that understands the Bangladeshi entrepreneurial experience firsthand. We know that getting a US EIN from Bangladesh is not just a bureaucratic step -- it is the gateway to an entirely different level of business capability. We built ein.so to make this process accessible, reliable, and affordable for every Bangladeshi entrepreneur who wants to enter the US market.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Here is what makes ein.so different for Bangladeshi clients:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Bengali Language Support", desc: "We provide customer support in Bengali (Bangla). You can communicate with our team in your native language throughout the entire process. No other EIN service offers this." },
                  { title: "WhatsApp Communication", desc: "We deliver updates and your EIN confirmation via WhatsApp -- the communication platform most Bangladeshi entrepreneurs use daily. No need to check email constantly." },
                  { title: "Bangladeshi Address Expertise", desc: "We have formatted hundreds of Bangladeshi addresses for IRS acceptance. Whether you are in Dhanmondi, Gulshan, Chittagong, Sylhet, or Rajshahi, we know your address format and how to convert it for the SS-4." },
                  { title: "Affordable Pricing", desc: "At $49 for Standard and $97 for Express, our pricing is designed to be accessible. We understand the value of these amounts in BDT, and we ensure you get reliable, professional service at a fair price." },
                  { title: "Understanding Your Challenges", desc: "We know about Bangladesh Bank regulations, Stripe unavailability, PayPal limitations, and the payment processing gaps that drive Bangladeshi entrepreneurs to form US entities. We built ein.so to solve exactly this problem." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-[var(--color-text)] mb-2">Standard: $49 | Express: $97</p>
                <p className="text-[var(--color-text-muted)] mb-4">Bengali support available. No SSN required. Applied from Bangladesh in 3 minutes.</p>
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

      {/* Tax Considerations for Bangladeshi EIN Holders */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Considerations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Should Bangladeshi Entrepreneurs Know About <span className="font-display gradient-text">US and Bangladeshi Taxes?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Getting a US EIN creates US tax reporting obligations. Bangladeshi entrepreneurs with US LLCs should understand the basics of both US and Bangladeshi tax requirements. This is not tax advice -- consult a qualified professional -- but here is what you need to know:
              </p>

              <div className="space-y-4">
                {[
                  { topic: "US Tax Filing Requirements", detail: "A single-member LLC owned by a Bangladeshi non-resident is a disregarded entity for US tax purposes. You may need to file Form 5472 and Form 1120 (pro forma) annually with the IRS. Late filing penalties are $25,000 per form, so do not ignore this requirement. ein.so can connect you with tax professionals who specialize in non-resident filings." },
                  { topic: "Bangladesh-US Tax Treaty", detail: "Bangladesh and the US have a limited tax treaty (primarily covering shipping income). Unlike countries with comprehensive tax treaties, the Bangladesh-US treaty does not provide broad relief from double taxation. This means careful tax planning is especially important for Bangladeshi entrepreneurs with US income." },
                  { topic: "NBR Reporting", detail: "Bangladeshi residents must report worldwide income to the National Board of Revenue (NBR). Income from your US LLC is taxable in Bangladesh. The annual income tax return filed with the NBR should include your US business income. Consult a Bangladeshi CA (Chartered Accountant) familiar with foreign income." },
                  { topic: "Bangladesh Bank Foreign Exchange Rules", detail: "Bangladesh Bank regulates foreign exchange transactions. Holding a foreign bank account and receiving foreign income may require reporting or approval. Ensure you comply with current Bangladesh Bank regulations regarding foreign accounts and remittances. These regulations change periodically." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the EIN application only. We strongly recommend working with both a Bangladeshi CA and a US CPA familiar with non-resident tax matters. Your EIN is the starting point for US tax compliance. For more about the application process, visit our <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-residents guide</Link> and <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN guide</Link>.
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
