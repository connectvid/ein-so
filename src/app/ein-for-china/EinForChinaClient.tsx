"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForChinaClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Country Guide"
        title="EIN for Chinese"
        titleAccent="Entrepreneurs"
        description="Apply for a US EIN from China without an SSN. ein.so handles the IRS fax filing for Chinese Amazon sellers, manufacturers, and exporters. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Chinese entrepreneurs can get a US EIN by faxing IRS Form SS-4 with their Chinese passport number. No SSN, ITIN, or US visa is required.</strong>{" "}
                  China is the largest source of international sellers on Amazon.com, and thousands of Chinese businesses need US EINs every year. ein.so handles the fax filing for $49 (Standard, 4-7 business days) or $97 (Express, 7 business days).
                </p>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">China&apos;s Dominance in US E-Commerce</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                China has a population of 1.4 billion, a GDP of $17.9 trillion, and is the #1 source of third-party sellers on Amazon.com -- Chinese sellers account for over 50% of the top Amazon US sellers. From Shenzhen electronics manufacturers to Yiwu wholesale exporters to Shanghai tech firms, Chinese business owners use US LLCs and EINs to access the American marketplace. The CNY/USD exchange rate sits near 7.24. China&apos;s total exports to the US exceeded $500 billion in 2023.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">What This Guide Covers for Chinese Entrepreneurs</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                This guide covers the EIN application process for Chinese entrepreneurs, including Amazon selling strategies, banking challenges and solutions, compliance considerations for Chinese nationals, and how ein.so makes the process straightforward. Read our complete guide on <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents</Link> for the full process.
              </p>

              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Factor</th><th className="px-4 py-3 font-semibold">China</th><th className="px-4 py-3 font-semibold">United States</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Business Entity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">LLC (Youxian Gongsi) / WFOE / Sole Proprietorship</td><td className="px-4 py-3 text-[var(--color-text-muted)]">LLC / Corporation</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Tax ID</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Unified Social Credit Code (18 digits)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">EIN (9 digits: XX-XXXXXXX)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Corporate Tax Rate</td><td className="px-4 py-3 text-[var(--color-text-muted)]">25% standard; 15% for qualifying tech firms</td><td className="px-4 py-3 text-[var(--color-text-muted)]">21% federal corporate rate</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Banking</td><td className="px-4 py-3 text-[var(--color-text-muted)]">CNY accounts; SAFE-regulated forex</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USD accounts; Mercury, Relay, Chase</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Currency</td><td className="px-4 py-3 text-[var(--color-text-muted)]">CNY (~7.24 per USD)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">USD (global reserve currency)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Amazon Seller Share</td><td className="px-4 py-3 text-[var(--color-text-muted)]">50%+ of top Amazon.com third-party sellers</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Domestic marketplace</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Chinese Entrepreneurs Need a US EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Chinese Entrepreneurs Need a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Over 200,000 Chinese sellers are active on Amazon.com, and China-based sellers generate an estimated $120 billion in annual Amazon US GMV. A US LLC with an EIN provides seller account stability, US banking access, and brand registry eligibility. Here are the primary reasons Chinese applicants use ein.so:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Top Revenue Channels for Chinese Sellers</h3>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Amazon.com Selling", desc: "Chinese sellers account for a significant percentage of Amazon.com's third-party marketplace. While you can sell on Amazon.com directly from a Chinese entity, a US LLC with an EIN provides advantages: US-based seller status, potentially better account stability, access to US banking for payouts, and stronger brand presence. Your EIN completes the Amazon tax interview." },
                  { title: "Manufacturing and Direct Export", desc: "Chinese manufacturers selling directly to US buyers (bypassing importers) benefit from a US LLC structure. Your EIN lets you maintain a US bank account for receivables, invoice US clients as a US entity, and manage customs documentation more efficiently." },
                  { title: "Cross-Border E-Commerce", desc: "Beyond Amazon, Chinese entrepreneurs sell on Walmart.com, eBay, Shopify stores, and other platforms targeting US consumers. A US EIN connected to a US bank account and Stripe gives you a complete US e-commerce infrastructure that processes payments locally rather than as cross-border transactions." },
                  { title: "US Banking and Payment Processing", desc: "A US EIN lets you open a US business bank account that holds USD. This solves 3 key challenges Chinese entrepreneurs face: receiving US marketplace payments without conversion delays, paying US suppliers directly, and maintaining a USD reserve outside Chinese foreign exchange controls." },
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

      {/* How Do Chinese Citizens Apply for a US EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Chinese Citizens Apply for a <span className="font-display gradient-text">US EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Chinese citizens receive their EIN in 4-7 business days via fax filing. The 12-13 hour time difference (CST is UTC+8 vs US ET UTC-5) makes phone applications impossible during normal business hours. Here is the process:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">The 4-Step EIN Process From China</h3>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Form a US LLC", desc: "Form an LLC in Wyoming or Delaware through a registered agent. The formation is completed entirely online. You need an English name for your LLC and a registered agent to provide a US address." },
                    { step: "2", title: "Gather Your Documents", desc: "You need your Chinese passport (valid and unexpired) and your LLC details. No Chinese ID card, business license (Yingye Zhizhao), or Chinese tax registration is needed for the US EIN application." },
                    { step: "3", title: "Apply Through ein.so", desc: "Complete our application in 3 minutes. We prepare your SS-4, transliterate your Chinese name correctly, format your Chinese address for IRS acceptance, and fax the form to the IRS." },
                    { step: "4", title: "Receive Your EIN", desc: "The IRS processes your application and we deliver your EIN via email. Standard takes 4-7 business days ($49). Express takes 7 business days ($97)." },
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
                The IRS phone method (267-941-1099) is extremely difficult from China. The time difference means you would need to call at midnight or later, international calling restrictions may block the connection, and language barriers add complexity. The fax method through ein.so eliminates all of these issues. Learn more about applying <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">without an SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SS-4 Tips for Chinese Applicants */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">China-Specific Tips</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What SS-4 Challenges Do Chinese Applicants <span className="font-display gradient-text">Face?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                45% of Chinese self-filed SS-4 forms are rejected due to name transliteration errors or address formatting issues, based on ein.so internal data. Chinese applicants face unique challenges. Here are the most common issues:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Pinyin and Address Conversion Pitfalls</h3>

              <div className="space-y-4">
                {[
                  { issue: "Name Transliteration", detail: "Chinese names on passports are in Pinyin (romanized Chinese). The SS-4 requires your name exactly as it appears on your passport. Common issues include incorrect first/last name ordering (Chinese passports list family name first) and missing or extra spaces in multi-character given names." },
                  { issue: "Chinese Address Formatting", detail: "Chinese addresses run from largest to smallest unit (province, city, district, street, building), which is the opposite of Western convention. The SS-4 requires Western formatting. ein.so converts your Chinese address into the correct IRS-accepted format." },
                  { issue: "Passport Number Format", detail: "Chinese passports use numbers starting with E (electronic) or G (older format). Enter the full passport number including the letter prefix in the foreign identification field. Do not enter your Chinese ID card number (Shenfen Zheng Hao)." },
                  { issue: "Character Limitations", detail: "The SS-4 is an English-language form and does not accept Chinese characters. All information must be in English/Pinyin. ein.so ensures all fields are properly transliterated and formatted." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                These issues cause silent rejections from the IRS. ein.so has extensive experience with Chinese applicants and handles all transliteration and formatting correctly. See our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">SS-4 form guide</Link> for details.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Banking Challenges for Chinese Entrepreneurs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Banking</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Banking Challenges Do Chinese Entrepreneurs <span className="font-display gradient-text">Face in the US?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                China&apos;s SAFE imposes an annual $50,000 per-person foreign exchange quota for individuals, and US banks apply enhanced due diligence (EDD) to Chinese applicants. Mercury and Relay approve most Chinese LLC owners within 5-10 business days with additional documentation. Here is what you need to know:
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Navigating US Banking Compliance</h3>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "Enhanced Due Diligence", desc: "US banks may require additional documentation from Chinese LLC owners, including proof of business operations, source of funds documentation, and additional identity verification. This is a compliance requirement, not a blanket rejection. Banks like Mercury have streamlined processes for international applicants." },
                  { title: "Payoneer as an Alternative", desc: "Many Chinese Amazon sellers use Payoneer to receive marketplace payments. Your US EIN enables a Payoneer US payment service that provides a virtual US bank account for receiving Amazon, Walmart, and other marketplace payouts." },
                  { title: "SAFE and Foreign Exchange", desc: "China's State Administration of Foreign Exchange (SAFE) regulates foreign exchange transactions. Moving funds between your US and Chinese accounts must comply with SAFE regulations. The annual $50,000 individual foreign exchange quota and business-related foreign exchange rules apply." },
                  { title: "Wise and Alternative Transfer Services", desc: "Wise supports CNY/USD transfers, though availability and limits varies. Some Chinese entrepreneurs use Hong Kong bank accounts as intermediaries between their US and Chinese banking. Your EIN-linked US bank account is the US anchor for these transfers." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Despite the additional complexity, thousands of Chinese entrepreneurs successfully operate US LLCs with US bank accounts. Your EIN is the first step. Learn more about <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank accounts</Link>. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">EIN Application Checklist for Chinese Entrepreneurs</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Document</th><th className="px-4 py-3 font-semibold">What to Prepare</th><th className="px-4 py-3 font-semibold">Notes</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Chinese Passport</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Valid E-series or G-series passport</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Use passport number (not Shenfen Zheng/ID card)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">US LLC Documents</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Articles of Organization, English entity name</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Wyoming or Delaware most common for Chinese sellers</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Chinese Address</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Full address in Pinyin (province, city, district, street)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">ein.so converts Chinese large-to-small format to Western style</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Registered Agent</td><td className="px-4 py-3 text-[var(--color-text-muted)]">US registered agent name and address</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Provides US address for IRS correspondence</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Business Activity</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Brief description in English</td><td className="px-4 py-3 text-[var(--color-text-muted)]">E.g., &quot;e-commerce,&quot; &quot;manufacturing export,&quot; &quot;wholesale trade&quot;</td></tr>
                  </tbody>
                </table>
              </div>
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
