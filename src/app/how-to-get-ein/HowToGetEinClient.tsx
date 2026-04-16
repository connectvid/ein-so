"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function HowToGetEinClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Step-by-Step Guide"
        title="How to Get an EIN Number"
        titleAccent="in 2026"
        description="Everything you need to know about obtaining an Employer Identification Number from the IRS, whether you are a US resident or applying from abroad."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-lg font-bold text-[var(--color-text)] mb-3">
                Short answer: There are three ways to get an EIN from the IRS in 2026.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                US residents with an SSN or ITIN can <strong className="text-[var(--color-text)]">apply online at irs.gov and receive their EIN instantly</strong>. Non-US residents without an SSN must use either the{" "}
                <strong className="text-[var(--color-text)]">fax method (Form SS-4)</strong> or the{" "}
                <strong className="text-[var(--color-text)]">IRS international phone line</strong>. The fax method is the most reliable path for non-residents and takes about 4 business days. This guide walks you through every method, step by step.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 3 Ways Overview */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Overview</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              3 Ways to Get an <span className="font-display gradient-text">EIN Number</span>
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
              The IRS offers three official methods for obtaining an Employer Identification Number. Each method has different eligibility requirements, processing times, and levels of convenience. Understanding the differences will help you choose the right path for your situation.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.1}>
            {[
              {
                num: "01",
                title: "Apply Online",
                who: "US residents with SSN/ITIN only",
                time: "Instant",
                desc: "The fastest and easiest method. Complete the IRS online application on irs.gov and receive your EIN immediately upon submission. Available Monday through Friday, 7 AM to 10 PM Eastern Time.",
                color: "var(--color-blue)",
              },
              {
                num: "02",
                title: "Apply by Fax",
                who: "Anyone (including non-residents)",
                time: "~4 business days",
                desc: "Complete Form SS-4 and fax it to the IRS. This is the primary method for non-US residents who do not have an SSN. The IRS will fax your EIN back to you within about 4 business days.",
                color: "var(--color-amber)",
              },
              {
                num: "03",
                title: "Apply by Phone",
                who: "International applicants",
                time: "Immediate (if you get through)",
                desc: "Call the IRS Business & Specialty Tax Line at 267-941-1099. An agent can issue your EIN over the phone. However, long hold times and the English-only requirement make this challenging for many applicants.",
                color: "var(--color-blue-glow)",
              },
            ].map((method) => (
              <StaggerItem key={method.num}>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 card-hover h-full flex flex-col">
                  <span
                    className="text-4xl font-extrabold mb-4 block"
                    style={{ color: method.color }}
                  >
                    {method.num}
                  </span>
                  <h3 className="text-xl font-extrabold text-[var(--color-text)] mb-1">{method.title}</h3>
                  <p className="text-xs font-bold text-[var(--color-blue)] uppercase tracking-wider mb-1">{method.who}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mb-4">Processing: {method.time}</p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">{method.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Method 1 - Online */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Method 1</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              Apply Online <span className="font-display gradient-text">(US Residents Only)</span>
            </h2>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              The IRS online EIN application is the fastest way to get your number. It is available on the IRS website at irs.gov. The entire process takes 15 minutes, and you receive your EIN immediately upon completion. The online system is available Monday through Friday, 7:00 AM to 10:00 PM Eastern Time, and processes over 3 million applications per year.
            </p>

            <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Application Methods Comparison</h3>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[var(--color-navy)] text-white">
                    <th className="px-4 py-3 font-semibold">Factor</th>
                    <th className="px-4 py-3 font-semibold">Online</th>
                    <th className="px-4 py-3 font-semibold">Fax (Form SS-4)</th>
                    <th className="px-4 py-3 font-semibold">Phone</th>
                    <th className="px-4 py-3 font-semibold">Mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">Eligibility</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">US residents with SSN/ITIN only</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Anyone (including non-residents)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">International applicants</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Anyone</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">Processing Time</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Instant</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">4 business days</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Immediate (if connected)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">4-6 weeks</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">IRS Cost</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">$0</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">$0</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">$0</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">$0</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">Requires SSN/ITIN?</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">Language</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">English (web form)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">English (written form)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">English only (spoken)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">English (written form)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">Availability</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Mon-Fri 7am-10pm ET</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">24/7 (submit anytime)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Mon-Fri 6am-11pm ET</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">N/A (mail anytime)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">Confirmation</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">On-screen (print it)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Fax or mail (CP 575)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Verbal + mail (CP 575)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Mail (CP 575)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">Difficulty</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Easy</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Moderate</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Hard (1-2+ hour hold times)</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">Easy (but very slow)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Step-by-Step: Online Application</h3>
              <ol className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-blue)] text-white text-sm font-bold flex items-center justify-center">1</span>
                  <span>Go to the IRS EIN Assistant on irs.gov. The application is available Monday through Friday, 7:00 AM to 10:00 PM Eastern Time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-blue)] text-white text-sm font-bold flex items-center justify-center">2</span>
                  <span>Select your entity type (sole proprietor, LLC, corporation, partnership, etc.). This determines which questions you will be asked.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-blue)] text-white text-sm font-bold flex items-center justify-center">3</span>
                  <span>Enter the responsible party&apos;s SSN or ITIN. This is the individual who controls, manages, or directs the entity. <strong className="text-[var(--color-text)]">This is the step that blocks non-residents</strong> -- you must have a valid SSN or ITIN to proceed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-blue)] text-white text-sm font-bold flex items-center justify-center">4</span>
                  <span>Provide your business details: legal name, trade name (if different), address, entity formation date, and reason for applying.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-blue)] text-white text-sm font-bold flex items-center justify-center">5</span>
                  <span>Review and submit. Your EIN is generated instantly. Print or save the confirmation notice -- the IRS does not email it to you.</span>
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Why Non-Residents Cannot Use the Online Method</h3>
            <div className="bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/30 rounded-2xl p-6 mb-6">
              <p className="text-sm font-bold text-[var(--color-amber)] mb-2">SSN/ITIN Requirement</p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                The IRS online EIN application requires a valid Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) for the responsible party. Most non-US residents do not have either of these. Without one, the application cannot proceed past step 3. If you are a non-resident without an SSN or ITIN, you must use the fax or phone method instead. Read our detailed guide on{" "}
                <span className="font-semibold">getting an EIN without an SSN</span>.
              </p>
            </div>

            <p className="text-[var(--color-text-muted)] leading-relaxed">
              One important limitation: the online system only allows one EIN per responsible party per day. If you need multiple EINs, you will need to apply on separate days or use an alternative method for the additional applications.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Method 2 - Fax */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Method 2</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              Apply by Fax <span className="font-display gradient-text">(Form SS-4)</span>
            </h2>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              Faxing Form SS-4 to the IRS is the most reliable method for non-US residents to obtain an EIN. As outlined in IRS Publication 1635, non-residents must fax Form SS-4 to the IRS at (855) 641-6935 since the online application at irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online is available to US residents only. Unlike the online application, the fax method does not require an SSN or ITIN. You fill out the form, fax it to the appropriate IRS number, and wait for your EIN to be faxed back. The typical processing time is <strong className="text-[var(--color-text)]">4 business days</strong>.
            </p>

            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Step-by-Step: Fax Application</h3>
              <ol className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-amber)] text-white text-sm font-bold flex items-center justify-center">1</span>
                  <span><strong className="text-[var(--color-text)]">Download Form SS-4</strong> from the IRS website (irs.gov). The form is a single page with 18 lines. Refer to the IRS instructions for line-by-line guidance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-amber)] text-white text-sm font-bold flex items-center justify-center">2</span>
                  <span><strong className="text-[var(--color-text)]">Complete every required field.</strong> Key information includes: legal name of the entity, trade name (if any), mailing address, entity type (LLC, corporation, etc.), state of organization, date business started, principal activity, and reason for applying.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-amber)] text-white text-sm font-bold flex items-center justify-center">3</span>
                  <span><strong className="text-[var(--color-text)]">Include a fax cover sheet</strong> with your return fax number or indicate you want the response mailed. If you include a return fax number, the IRS will fax the EIN assignment letter (CP 575) to that number.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-amber)] text-white text-sm font-bold flex items-center justify-center">4</span>
                  <span><strong className="text-[var(--color-text)]">Fax to the correct number.</strong> For international applicants (outside the US), fax to <strong className="text-[var(--color-text)]">855-215-1627</strong>. For domestic applicants (within the US), fax to <strong className="text-[var(--color-text)]">855-641-6935</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-amber)] text-white text-sm font-bold flex items-center justify-center">5</span>
                  <span><strong className="text-[var(--color-text)]">Wait for your EIN.</strong> The IRS processes faxed SS-4 forms within 4 business days. If you provided a return fax number, your EIN assignment notice will be faxed back. Otherwise, it will be mailed to the address on the form.</span>
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Why the Fax Method Is Best for Non-Residents</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
              The fax method is the best option for non-residents because it is straightforward, well-documented, and has a predictable 4-business-day processing time. Unlike the phone method, you do not need to navigate 1-2 hour hold times or communicate entirely in English over the phone.
            </p>
            <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Common Fax Filing Mistakes to Avoid</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              The most common issue with faxed applications is incomplete or incorrectly filled forms, which lead to rejection and add 1-2 weeks of delay. The top 3 errors are: leaving the entity type blank, using an incorrect address format for international addresses, and failing to sign the form. Make sure every required field is completed accurately. Refer to the IRS instructions included with Form SS-4 for field-by-field guidance.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Method 3 - Phone */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Method 3</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              Apply by Phone <span className="font-display gradient-text">(International Line)</span>
            </h2>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              The IRS maintains a dedicated phone line for international applicants who need an EIN. By calling{" "}
              <strong className="text-[var(--color-text)]">267-941-1099</strong> (not a toll-free number), you can speak with an IRS agent who can issue your EIN immediately over the phone. The line is open Monday through Friday, 6:00 AM to 11:00 PM Eastern Time.
            </p>

            <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">What to Expect When You Call</h3>
              <ul className="space-y-3 text-[var(--color-text-muted)] leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[var(--color-blue)]" />
                  <span><strong className="text-[var(--color-text)]">Long hold times.</strong> Wait times can range from 30 minutes to over 2 hours depending on the time of year and day of the week. Peak tax season (January through April) is particularly busy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[var(--color-blue)]" />
                  <span><strong className="text-[var(--color-text)]">English only.</strong> The IRS agents on this line conduct the conversation entirely in English. If English is not your first language, this can make the process difficult and increase the risk of miscommunication.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[var(--color-blue)]" />
                  <span><strong className="text-[var(--color-text)]">Have your information ready.</strong> The agent will ask for the same information that is on Form SS-4: legal name, business name, entity type, address, reason for applying, and the responsible party&apos;s details.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[var(--color-blue)]" />
                  <span><strong className="text-[var(--color-text)]">Immediate issuance.</strong> If the agent can verify your information and everything checks out, they will issue your EIN during the call and provide it to you verbally. You will also receive a written confirmation (CP 575 notice) by mail.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[var(--color-blue)]" />
                  <span><strong className="text-[var(--color-text)]">International calling costs.</strong> Since 267-941-1099 is a US number (Philadelphia area code), international callers will incur standard international calling rates. Consider using a VoIP service to reduce costs.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Phone vs Fax: Which Is Better?</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              While the phone method can get you an EIN immediately, the practical challenges -- 1-2+ hour hold times, English-only communication, international calling costs of $0.50-$2.00 per minute, and the risk of being disconnected -- make it less reliable than the fax method for most non-resident applicants. Over 70% of people who attempt the phone method eventually fall back to faxing Form SS-4 instead.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Non-Residents */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">For International Applicants</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              How Non-Residents <span className="font-display gradient-text">Get an EIN</span>
            </h2>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              If you are a non-US resident, your options are limited to the fax and phone methods described above. The online application is off-limits because it requires an SSN or ITIN. For the vast majority of non-resident applicants, <strong className="text-[var(--color-text)]">faxing Form SS-4 is the recommended approach</strong>. It is predictable, well-documented, and does not require you to sit on hold for hours trying to communicate in English with an IRS agent.
            </p>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              That said, the fax process has its own challenges. You need to fill out Form SS-4 correctly (errors are the number one cause of rejection), you need access to a fax machine or online fax service, and you need to wait about 4 business days for the IRS to respond. If the form has errors, the IRS may reject it or assign the wrong type of EIN, creating complications down the road.
            </p>

            <div className="bg-white rounded-2xl border border-[var(--color-blue)]/20 p-8 mb-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">This Is What We Do at ein.so</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                We built ein.so specifically to solve this problem for non-US residents. We handle the entire fax-based SS-4 filing process:
              </p>

              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-6">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">Standard ($49)</th>
                      <th className="px-4 py-3 font-semibold">Express ($97)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Delivery Time</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">14 business days</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">7 business days</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">SS-4 Preparation</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Included</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Included</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">IRS Fax Filing</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Included</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Priority submission</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">IRS Phone Follow-Up</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Not included</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Included</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Delivery Method</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Email (PDF)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Email (PDF)</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">SSN Required?</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Rejection Refile</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Free refile or full refund</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Free refile or full refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>We complete your Form SS-4 accurately, tailored for non-resident applicants</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>We fax it to the IRS international fax number (855-215-1627) on your behalf</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>We monitor for the IRS response and deliver your EIN by email</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Express orders get priority fax submission plus phone follow-up with the IRS</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>If rejected due to our error, we refile free or refund in full</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/apply/"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-blue)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                >
                  Apply Now · From $49
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>

            <p className="text-[var(--color-text-muted)] leading-relaxed">
              For more details on the non-resident process and why an SSN is not required, note that the IRS allows applicants without an SSN or ITIN to use their foreign identification on Form SS-4. You can also learn more about{" "}
              <Link href="/what-is-ein/" className="text-[var(--color-blue)] font-semibold hover:underline">what an EIN is and why you need one</Link>.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Form SS-4 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">The Application Form</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              Form SS-4: <span className="font-display gradient-text">What You Need</span>
            </h2>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              Form SS-4, officially titled &ldquo;Application for Employer Identification Number,&rdquo; is the IRS form used to apply for an EIN via fax, mail, or phone. Even if you apply by phone, the agent will ask you for the same information that appears on the form. Here is what you need to have ready before you start:
            </p>

            <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Required Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Legal Name", detail: "The exact legal name of the business entity as registered" },
                  { label: "Trade Name", detail: "Your DBA (doing business as) name, if different from the legal name" },
                  { label: "Entity Type", detail: "Sole proprietor, LLC, corporation, partnership, trust, or other" },
                  { label: "Mailing Address", detail: "Where the IRS should send correspondence (US or foreign address)" },
                  { label: "Responsible Party", detail: "Name and SSN/ITIN of the individual who controls the entity (leave SSN blank if non-resident)" },
                  { label: "Reason for Applying", detail: "Started new business, banking purposes, hired employees, compliance, etc." },
                  { label: "Date Business Started", detail: "The date you started or acquired the business, or plan to start" },
                  { label: "Principal Activity", detail: "A brief description of what the business does (e.g., consulting, e-commerce)" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 border border-[var(--color-border)]">
                    <p className="text-sm font-bold text-[var(--color-text)] mb-1">{item.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Filling out Form SS-4 correctly is critical. Errors in entity type, responsible party information, or address can lead to rejection or delays. Refer to the IRS instructions included with Form SS-4 for a complete line-by-line walkthrough of every field on the form.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Processing Time Table */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              EIN Processing Time <span className="font-display gradient-text">by Method</span>
            </h2>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              Processing times vary significantly depending on which method you use. The table below compares all three methods across key factors so you can make an informed decision.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-navy)] text-white">
                    <th className="text-left p-4 font-bold">Factor</th>
                    <th className="text-left p-4 font-bold">Online</th>
                    <th className="text-left p-4 font-bold">Fax (SS-4)</th>
                    <th className="text-left p-4 font-bold">Phone</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Processing Time</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Instant</td>
                    <td className="p-4 text-[var(--color-text-muted)]">~4 business days</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Immediate*</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Requires SSN/ITIN?</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                    <td className="p-4 text-[var(--color-text-muted)]">No</td>
                    <td className="p-4 text-[var(--color-text-muted)]">No</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Available to Non-Residents?</td>
                    <td className="p-4 text-[var(--color-text-muted)]">No</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Yes</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">IRS Fee</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Availability</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Mon-Fri 7am-10pm ET</td>
                    <td className="p-4 text-[var(--color-text-muted)]">24/7 (submit anytime)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Mon-Fri 6am-11pm ET</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Language</td>
                    <td className="p-4 text-[var(--color-text-muted)]">English (web form)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">English (written form)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">English only (spoken)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Difficulty Level</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Easy</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Moderate</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Hard</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="p-4 font-semibold text-[var(--color-text)]">Confirmation</td>
                    <td className="p-4 text-[var(--color-text-muted)]">On-screen (print it)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Fax or mail (CP 575)</td>
                    <td className="p-4 text-[var(--color-text-muted)]">Verbal + mail (CP 575)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mt-3">
              *Phone processing is immediate if you reach an agent, but hold times of 1-2+ hours are common.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Common Reasons for Rejection */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Avoid These Mistakes</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              Common Reasons for <span className="font-display gradient-text">EIN Rejection</span>
            </h2>

            <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">5 Preventable Mistakes That Cause Rejection</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              Not every EIN application is approved on the first attempt. The IRS rejects an estimated 10-15% of faxed SS-4 applications. Understanding these 5 pitfalls before you apply saves days or weeks of delays.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Incomplete Form SS-4",
                  desc: "Missing fields are the most common reason for rejection. Every required line on the form must be filled out. Leaving the entity type, address, or responsible party name blank will result in automatic rejection.",
                },
                {
                  title: "Duplicate Application",
                  desc: "The IRS will reject your application if they determine that the entity already has an EIN on file. This happens when applicants submit multiple applications or when a previously registered entity applies again.",
                },
                {
                  title: "Incorrect Entity Type",
                  desc: "Selecting the wrong entity classification (for example, choosing 'sole proprietor' when you formed an LLC) creates a mismatch in the IRS system and can cause rejection or assignment of an incorrect EIN type.",
                },
                {
                  title: "Responsible Party Mismatch",
                  desc: "The responsible party named on the SS-4 must be an individual (not an entity) who has authority to control the business. If the IRS cannot verify the responsible party's identity, the application may be held or rejected.",
                },
                {
                  title: "Illegible Fax Submission",
                  desc: "Poor fax quality, handwriting that cannot be read, or forms that are cut off can cause the IRS to reject or ignore your application. Always use typed forms and confirm your fax was sent successfully.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What to Do After Getting Your EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Next Steps</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
              What to Do After <span className="font-display gradient-text">Getting Your EIN</span>
            </h2>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              Congratulations -- once your EIN is issued, you have a permanent federal tax identification number for your business. But getting the number is just the first step. Here is what you should do next to put your EIN to work and stay compliant with the IRS.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Open a US Business Bank Account</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  One of the most common reasons non-residents need an EIN is to open a US business bank account. With your EIN, you can approach US banks that accept non-resident business accounts. Many online-first banks like Mercury, Relay, or traditional institutions like Chase or Bank of America offer business accounts for foreign-owned entities. You need your EIN confirmation letter (CP 575), your formation documents (like Articles of Organization), and valid government-issued ID.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Set Up Payment Processing</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you plan to accept payments from US customers, you will need your EIN to set up merchant accounts or payment processors like Stripe, PayPal, or Square. These services require a valid EIN for tax reporting purposes. Having your EIN ready before applying will speed up the verification and onboarding process significantly.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Understand Your Tax Obligations</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An EIN comes with tax responsibilities. Depending on your entity type and business activity, you may need to file annual tax returns, pay estimated taxes, or submit informational returns. Non-resident owners of US LLCs may need to file Form 5472 and a pro-forma Form 1120. Consult with a tax professional familiar with international tax law to understand your specific obligations.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Keep Your EIN Confirmation Safe</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Your EIN confirmation letter (IRS Notice CP 575) is the official document proving your EIN assignment. Keep it in a safe place. You will need it when opening bank accounts, applying for licenses, and filing taxes. If you lose it, you can request a verification letter (IRS Letter 147C) by calling the IRS, but this process can take time.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Stay Compliant</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Make sure you file all required returns on time. For many non-resident-owned single-member LLCs, the annual filing deadline is April 15 (or the extended deadline of October 15 with an extension). Failing to file can result in penalties starting at $25,000 per year for Form 5472. Staying on top of compliance from day one will save you from costly problems later.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Learn More</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Application <span className="font-display gradient-text">Resources</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: "IRS Form SS-4 Guide", href: "/ss4-form-guide/", desc: "Line-by-line walkthrough of the SS-4 form required to apply for an EIN." },
              { title: "Get EIN Without SSN", href: "/ein-without-ssn/", desc: "How non-residents and foreign nationals can obtain an EIN without a Social Security Number." },
              { title: "EIN Processing Time", href: "/ein-processing-time/", desc: "Current IRS processing times for online, fax, phone, and mail EIN applications." },
              { title: "EIN Rejection Guide", href: "/ein-rejection-guide/", desc: "Common reasons the IRS rejects EIN applications and how to fix them." },
              { title: "EIN for Non-Residents", href: "/ein-for-non-residents/", desc: "Complete guide for international entrepreneurs applying for a US EIN from abroad." },
              { title: "What Is an EIN?", href: "/what-is-ein/", desc: "Everything you need to know about Employer Identification Numbers and why they matter." },
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
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </AnimateIn>
          <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-base font-bold text-[var(--color-text)]">
                    {faq.q}
                    <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">Related Guides</h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            <StaggerItem>
              <Link
                href="/what-is-ein/"
                className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
              >
                What Is an EIN?
              </Link>
            </StaggerItem>
            {[
              "SS-4 Form Guide",
              "EIN Without SSN",
              "EIN Processing Time",
              "EIN Rejection Guide",
            ].map((label) => (
              <StaggerItem key={label}>
                <span className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
                  {label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let Us Handle Your EIN Application"
        subtitle="No SSN required. No fax machine needed. We file Form SS-4 and deliver your EIN by email. Starting at $49."
      />
    </>
  );
}
