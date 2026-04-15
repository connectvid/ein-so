"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForNonResidentsClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="For International Entrepreneurs"
        title="EIN for Non-US Residents:"
        titleAccent="How to Apply From Abroad (2026)"
        description="You don't need an SSN, ITIN, or US visa to get an EIN. ein.so handles the entire IRS fax filing process for non-residents in 100+ countries. $49 Standard. $97 Express."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Non-US residents can get an EIN by submitting IRS Form SS-4 by fax. No SSN or ITIN is required -- your passport number and foreign address are sufficient. The IRS online application is not available to non-residents, which is why the fax method exists.</strong>{" "}
                  ein.so was built specifically for this: we prepare your SS-4, fax it to the IRS, track the response, and deliver your EIN. Standard processing costs $49 (4-7 business days). Express costs $97 (7 business days).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                If you are a non-US resident starting a business in the United States, an EIN is the first thing you need. Without it, you cannot open a bank account, register on Amazon, accept payments through Stripe or PayPal, or file US taxes. The problem is that the IRS makes it unnecessarily difficult for international applicants to get one. This guide explains exactly how the process works and why ein.so exists to solve this problem.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Whether you are forming a US LLC from Bangladesh, starting an Amazon FBA business from the UK, or opening a US bank account from Japan, the EIN application process is the same. You need a correctly completed Form SS-4 faxed to the IRS. That is what ein.so does, every day, for entrepreneurs around the world.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Can't Non-Residents Use the Online IRS Tool? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Can&apos;t Non-Residents Use the <span className="font-display gradient-text">IRS Online Tool?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS EIN Assistant -- the online tool that issues EINs instantly -- requires a valid Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) to verify the applicant&apos;s identity. If you are a non-US resident without either number, the system blocks you at the identity verification step. There is no workaround.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This restriction exists because the IRS uses SSN/ITIN as a primary identity verification mechanism in its online systems. The agency has not built an alternative verification method for international applicants, despite the growing number of non-residents who form US businesses each year.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The result is that non-residents are forced to use one of two offline methods: fax or phone. The <strong className="text-[var(--color-text)]">fax method</strong> (submitting Form SS-4 to 855-215-1627) is the most reliable. The <strong className="text-[var(--color-text)]">phone method</strong> (calling 267-941-1099) works but involves long hold times, limited hours, and potential language barriers.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This is the exact gap that ein.so fills. We take the fax process -- which requires completing an IRS form correctly, finding a fax machine, transmitting the form, and monitoring for the IRS response -- and handle every step for you. For <strong className="text-[var(--color-text)]">$49</strong>, you get your EIN without ever touching a fax machine or calling the IRS. Learn more about applying <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">without an SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The Fax Method Explained */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Non-Residents Get an EIN <span className="font-display gradient-text">Using the Fax Method?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The fax method is the primary way non-US residents obtain an EIN. It uses IRS <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link> (Application for Employer Identification Number), which is a one-page form that captures your business and personal information. Here is how the process works:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <StaggerContainer className="space-y-4">
                  {[
                    { step: "1", title: "Complete Form SS-4", desc: "Fill out the form with your business entity details (LLC name, state of formation, business type) and your personal details (name, passport number, foreign address). The responsible party must be an individual, not a business entity." },
                    { step: "2", title: "Fax to the IRS", desc: "Send the completed form to the IRS at 855-215-1627. This is the dedicated EIN fax line. The form must be clear and legible -- blurry or cut-off forms are not processed." },
                    { step: "3", title: "IRS Processes Your Application", desc: "The IRS reviews your SS-4, verifies the information, assigns an EIN, and prepares an EIN assignment letter (Form CP 575). This takes 4-7 business days during normal periods." },
                    { step: "4", title: "Receive Your EIN", desc: "The IRS faxes your EIN assignment letter back to the fax number you provided on the form. This letter contains your 9-digit EIN and serves as official confirmation from the IRS." },
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
                The challenge for most non-residents is that errors on the SS-4 are common and result in rejection. The IRS does not call or email you to explain the error -- they simply do not respond. You are left waiting, not knowing if your form was received, is being processed, or was rejected. This uncertainty is what makes the DIY fax method so frustrating for international applicants.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Documents Do You Need? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Required Documents</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Documents Do Non-Residents Need <span className="font-display gradient-text">for an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The document requirements for non-resident EIN applications are straightforward. You do <strong className="text-[var(--color-text)]">not</strong> need an SSN, ITIN, US driver&apos;s license, US visa, or any US-based identification. Here is what you need:
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Valid Passport</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Your passport number is used as the identifying number on Form SS-4. Any valid, unexpired passport from any country works. The IRS does not restrict EIN issuance by nationality.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">US Business Entity Details</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">If applying for an LLC or corporation, you need the entity&apos;s legal name, state of formation, date of formation, and registered address. If applying as a foreign individual, you need your foreign business details.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] mb-1">Foreign Address</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Your home address in your country of residence. The IRS uses this to identify you as a non-resident applicant. You can list a US address for the business and a foreign address for the responsible party.</p>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                That is it. No SSN. No ITIN. No visa. No proof of US presence. The IRS issues EINs to non-residents specifically because foreign-owned entities operating in the US have tax obligations that require a federal tax ID. For more details on applying without an SSN, see our <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN without SSN guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why ein.so Exists */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Our Service</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does ein.so Exist? <span className="font-display gradient-text">We Solve This Problem.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so exists because the IRS makes it unnecessarily hard for non-US residents to get an EIN. The online tool is locked behind an SSN requirement. The phone line has hour-long hold times. The fax method requires a form that most people fill out incorrectly on their first try. We fix all of this.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                When you use ein.so, here is exactly what happens:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  { title: "You fill out a simple form", desc: "Our application takes 3 minutes. We ask only the questions the IRS requires -- no unnecessary steps, no confusing government jargon. We support English, Bengali, and Hindi." },
                  { title: "We prepare your Form SS-4", desc: "Our team translates your information into a properly formatted IRS Form SS-4. We know every field, every format requirement, and every common rejection trigger. Your form is prepared correctly the first time." },
                  { title: "We fax it to the IRS", desc: "We submit your SS-4 using a commercial-grade fax system that ensures clear, complete transmission. No blurry pages, no cut-off fields, no transmission errors." },
                  { title: "We monitor and follow up", desc: "We track the IRS response and follow up as needed. If there is any issue, we handle it. You do not need to call the IRS or wonder what is happening." },
                  { title: "We deliver your EIN", desc: "The moment the IRS returns your EIN assignment, we deliver it to you via email and WhatsApp. You receive your official IRS confirmation letter (CP 575)." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex gap-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                      <div>
                        <h3 className="font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-[var(--color-text)] mb-2">Standard: $49 | Express: $97</p>
                <p className="text-[var(--color-text-muted)] mb-4">No SSN required. No ITIN required. No fax machine needed.</p>
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

      {/* Country-Specific Tips */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Global Coverage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              EIN for Non-Residents: <span className="font-display gradient-text">Country-Specific Tips</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The EIN application process is the same regardless of your country, but certain countries have specific considerations that affect how you fill out the Form SS-4 or structure your US business:
              </p>

              <div className="space-y-4">
                {[
                  { country: "United Kingdom & EU", tip: "UK and EU residents commonly form Wyoming or Delaware LLCs for e-commerce businesses. Your UK/EU passport number works on the SS-4. VAT registration in your home country is separate from your US EIN." },
                  { country: "Canada", tip: "Canadian residents can use the IRS phone method since there are no international calling barriers, but wait times are long. The fax method through ein.so is faster and more reliable. Your Canadian passport number is used on the SS-4." },
                  { country: "India & Bangladesh", tip: "A large number of our clients are from India and Bangladesh. Your passport number is all you need. ein.so provides support in Bengali and Hindi in addition to English. We handle address formatting for South Asian addresses." },
                  { country: "Australia & New Zealand", tip: "Australian and New Zealand residents often form US LLCs for SaaS businesses or Amazon FBA. The time zone difference makes calling the IRS impractical (IRS hours are 6 AM - 11 PM ET). Fax through ein.so is the most convenient option." },
                  { country: "Middle East & Africa", tip: "Applicants from the Middle East and Africa can apply with any valid passport. There are no country restrictions on EIN issuance. We have successfully filed EIN applications for clients in every region of the world." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.country}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Regardless of where you are located, the process is the same: fill out our simple application, and we handle the rest. For more information on how non-residents use their EIN, see our guides on <Link href="/ein-for-amazon-sellers/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for Amazon sellers</Link> and <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank accounts</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Can You Do With Your EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Next Steps</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Can Non-Residents Do <span className="font-display gradient-text">With an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN unlocks the US business ecosystem. Once you have your EIN, you can:
              </p>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Open a US Bank Account", desc: "Banks like Mercury, Relay, and traditional banks accept EINs from non-resident LLC owners.", link: "/ein-for-bank-account/" },
                  { title: "Sell on Amazon", desc: "Complete the Amazon Seller Central tax interview and start selling through FBA.", link: "/ein-for-amazon-sellers/" },
                  { title: "Accept Payments via Stripe", desc: "Set up Stripe with your EIN to accept credit card payments from US customers." },
                  { title: "File US Tax Returns", desc: "Report income, claim deductions, and comply with IRS requirements for your US entity." },
                  { title: "Hire US Employees", desc: "Use your EIN for payroll tax reporting, W-2 issuance, and employer obligations." },
                  { title: "Build Business Credit", desc: "Establish a credit profile with Dun & Bradstreet using your EIN as the identifier." },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5 h-full">
                      <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">{item.desc}</p>
                      {"link" in item && item.link && (
                        <Link href={item.link} className="text-sm text-[var(--color-blue)] hover:underline font-semibold">
                          Learn more
                        </Link>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The EIN is the foundation of your US business presence. Everything else -- banking, selling, hiring, taxes -- builds on top of it. The sooner you get your EIN, the sooner you can start operating. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link> and have it in as few as 7 business days with Express processing.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN Processing Timeline */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Timeline</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Long Does It Take for Non-Residents <span className="font-display gradient-text">to Get an EIN?</span>
            </h2>

            <div className="space-y-6">
              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Method</th>
                      <th className="text-left p-4 font-bold">Processing Time</th>
                      <th className="text-left p-4 font-bold">Cost</th>
                      <th className="text-left p-4 font-bold">Recommended?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">ein.so Express</td>
                      <td className="p-4 text-[var(--color-text-muted)]">7 business days</td>
                      <td className="p-4 text-[var(--color-text-muted)]">$97</td>
                      <td className="p-4 text-green-600 font-bold">Best for urgent needs</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">ein.so Standard</td>
                      <td className="p-4 text-[var(--color-text-muted)]">4-7 business days</td>
                      <td className="p-4 text-[var(--color-text-muted)]">$49</td>
                      <td className="p-4 text-green-600 font-bold">Best value</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">DIY Fax</td>
                      <td className="p-4 text-[var(--color-text-muted)]">4-7 business days (if no errors)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Free + fax costs</td>
                      <td className="p-4 text-[var(--color-text-muted)]">High rejection risk</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">IRS Phone</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Same day (if you reach an agent)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Free + call costs</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Long hold times, limited hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a detailed comparison of all EIN processing methods and timelines, see our <Link href="/ein-processing-time/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN processing time guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">By Country</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">Country-Specific EIN Guides</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: "EIN for Indian Entrepreneurs", href: "/ein-for-india/", desc: "How entrepreneurs from India get a US EIN without an SSN or ITIN." },
              { title: "EIN for Canadians", href: "/ein-for-canada/", desc: "Canadian residents: get your US EIN for cross-border business operations." },
              { title: "EIN for UK Residents", href: "/ein-for-uk/", desc: "UK-based entrepreneurs: obtain a US EIN for your American business entity." },
              { title: "EIN for Pakistani Entrepreneurs", href: "/ein-for-pakistan/", desc: "Pakistan-based business owners: apply for a US EIN from abroad." },
              { title: "EIN for Nigerian Entrepreneurs", href: "/ein-for-nigeria/", desc: "Nigerian entrepreneurs: get your US EIN for e-commerce and US business." },
              { title: "EIN for German Entrepreneurs", href: "/ein-for-germany/", desc: "German residents: obtain a US EIN for your LLC or corporation." },
              { title: "EIN for Chinese Entrepreneurs", href: "/ein-for-china/", desc: "Chinese business owners: apply for a US EIN to operate in the US market." },
              { title: "EIN for Filipino Entrepreneurs", href: "/ein-for-philippines/", desc: "Philippines-based entrepreneurs: get your US EIN for Amazon, Stripe, and more." },
              { title: "EIN for Mexican Entrepreneurs", href: "/ein-for-mexico/", desc: "Mexican residents: obtain a US EIN for cross-border business operations." },
              { title: "EIN for Brazilian Entrepreneurs", href: "/ein-for-brazil/", desc: "Brazilian business owners: apply for a US EIN from Brazil." },
              { title: "EIN for Bangladeshi Entrepreneurs", href: "/ein-for-bangladesh/", desc: "Bangladeshi entrepreneurs: get your US EIN with support in Bengali." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group block bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-blue)]/30 transition-colors">
                <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-blue)] transition-colors mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
              </Link>
            ))}
          </div>
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

      <CTASection title="Ready to Get Your EIN?" subtitle="No SSN required. No fax machine needed. From $49." />
    </>
  );
}
