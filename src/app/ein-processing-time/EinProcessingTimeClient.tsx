"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinProcessingTimeClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Processing Times"
        title="EIN Processing Time:"
        titleAccent="How Long Does It Take? (2026)"
        description="Every EIN application method has a different timeline. Learn exactly how long each one takes, what causes delays, and how ein.so's Express service gets your EIN faster."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>EIN processing time depends on your application method. Online applications receive an EIN instantly. Fax applications (Form SS-4) take 4-7 business days. Phone applications can be processed the same day. Mail applications take 4-6 weeks.</strong>{" "}
                  For non-US residents who must use the fax method, ein.so offers Standard processing ($49, 4-7 business days) and Express processing ($97, 7 business days) to get your EIN as quickly as possible.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Understanding EIN processing time is critical for planning your business launch. If you need to open a bank account, register with Amazon, or file taxes by a specific deadline, the method you choose directly affects when you can move forward. This guide breaks down every EIN processing timeline, explains what causes delays, and shows you how to get your EIN faster.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS processes over 5 million EIN applications every year. While the agency has improved its processing systems significantly, backlogs still occur -- especially during the January-to-April tax season. Choosing the right application method and submitting an error-free <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link> are the two most important factors in getting your EIN on time.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN Processing Time by Method */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Is the EIN Processing Time <span className="font-display gradient-text">for Each Method?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS offers four methods to apply for an EIN, and each has a dramatically different processing time. Your eligibility for certain methods depends on whether you have a US Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN).
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Method</th>
                      <th className="text-left p-4 font-bold">Processing Time</th>
                      <th className="text-left p-4 font-bold">Eligibility</th>
                      <th className="text-left p-4 font-bold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Online (IRS EIN Assistant)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Instant</td>
                      <td className="p-4 text-[var(--color-text-muted)]">US residents with SSN/ITIN only</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Free</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Phone (267-941-1099)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Same day (if you reach an agent)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">International applicants</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Free (international call fees apply)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Fax (Form SS-4)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">4-7 business days</td>
                      <td className="p-4 text-[var(--color-text-muted)]">All applicants</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Free (DIY) / $49-$97 (ein.so)</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Mail (Form SS-4)</td>
                      <td className="p-4 text-[var(--color-text-muted)]">4-6 weeks</td>
                      <td className="p-4 text-[var(--color-text-muted)]">All applicants</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Free (postage costs apply)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For non-US residents, the online option is not available. That makes fax the most reliable and commonly used method. The phone method works in theory, but long hold times, limited hours, and the difficulty of communicating complex business details over the phone make it impractical for most international applicants. Learn more in our guide on <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">how to get an EIN without an SSN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Online EIN Processing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Instant</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Long Does Online EIN Processing <span className="font-display gradient-text">Take?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS EIN Assistant is the fastest way to get an EIN. You complete a short online form, verify your identity with your SSN or ITIN, and receive your EIN immediately upon submission. The entire process takes about 10-15 minutes from start to finish.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The online system is available Monday through Friday, 7:00 AM to 10:00 PM Eastern Time. Applications submitted outside these hours will not be processed. The system is also occasionally unavailable during IRS maintenance windows.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">The catch:</strong> This method requires a valid SSN or ITIN. If you are a non-US resident without either number, you cannot use the online system. This restriction is why the fax method remains essential for international entrepreneurs. If you are a US resident with an SSN, applying online at irs.gov is always the best option -- it is free and instant.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Fax Processing Time */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Fax Method</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Is the EIN Processing Time <span className="font-display gradient-text">by Fax?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Faxing Form SS-4 to the IRS is the primary method for non-US residents applying for an EIN. The standard EIN processing time for fax applications is <strong className="text-[var(--color-text)]">7 to 14 business days</strong>. The IRS receives your completed SS-4, processes the application, assigns an EIN, and faxes the assignment letter back to the number you provided.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Several factors affect fax processing time. The IRS fax number for EIN applications is <strong className="text-[var(--color-text)]">855-215-1627</strong>. During peak tax season (January through April), the IRS receives significantly higher volumes of applications, which can push processing times to 7-10 business days. Outside of peak season, 4-5 business days is more typical.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The quality of your <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">Form SS-4</Link> matters enormously. An error-free, properly formatted form is processed on the first pass. Forms with errors, missing information, or illegible entries are rejected, and you must resubmit -- adding another 4-7 business days to your wait. This is the number-one reason applicants experience delays.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so handles the entire fax filing process. Our team prepares your SS-4, verifies every field for accuracy, submits it by fax, monitors for the IRS response, and delivers your EIN to you. <strong className="text-[var(--color-text)]">Standard processing costs $49</strong> and follows the normal IRS timeline. <strong className="text-[var(--color-text)]">Express processing costs $97</strong> and includes priority handling to get your EIN in as few as 7 business days.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Express Processing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Faster Option</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does Express EIN Processing <span className="font-display gradient-text">Speed Things Up?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so&apos;s Express service ($97) is designed for applicants who need their EIN as fast as possible. Express processing reduces your EIN processing time from the standard 4-7 business days down to <strong className="text-[var(--color-text)]">7 business days</strong> in most cases.
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">What Express includes:</h3>
                <StaggerContainer className="space-y-3">
                  {[
                    { title: "Same-Day Fax Submission", desc: "Your SS-4 is prepared and faxed to the IRS within hours of your order, not queued for the next batch." },
                    { title: "Priority Error Review", desc: "A senior team member reviews every field on your SS-4 before submission, minimizing the chance of IRS rejection." },
                    { title: "Daily Follow-Up", desc: "We actively monitor the IRS fax line for your response and follow up daily until your EIN is confirmed." },
                    { title: "Instant Delivery", desc: "The moment the IRS returns your EIN assignment, we deliver it to you via email and WhatsApp." },
                  ].map((item, idx) => (
                    <StaggerItem key={idx}>
                      <div className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                        <div>
                          <h4 className="font-bold text-[var(--color-text)] mb-1">{item.title}</h4>
                          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Standard ($49)</th>
                      <th className="text-left p-4 font-bold">Express ($97)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Processing Time</td>
                      <td className="p-4 text-[var(--color-text-muted)]">4-7 business days</td>
                      <td className="p-4 text-[var(--color-text-muted)]">7 business days</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">Fax Submission</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Next business day</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Same day</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">IRS Follow-Up</td>
                      <td className="p-4 text-[var(--color-text-muted)]">As needed</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Daily proactive</td>
                    </tr>
                    <tr className="bg-[var(--color-surface)]">
                      <td className="p-4 font-semibold text-[var(--color-text)]">SS-4 Preparation</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Included</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Included (priority review)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-[var(--color-text)]">WhatsApp Updates</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Included</td>
                      <td className="p-4 text-[var(--color-text-muted)]">Included (real-time)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Express processing is recommended if you are on a deadline -- for example, if you need your EIN to open a bank account before a specific date, complete an Amazon Seller Central registration, or meet a tax filing deadline. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your Express application now</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Causes EIN Processing Delays? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Avoid Delays</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Causes EIN Processing Time <span className="font-display gradient-text">Delays?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                EIN processing delays are almost always preventable. The most common reasons your EIN application takes longer than expected fall into two categories: applicant errors and IRS-side backlogs.
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Common causes of EIN processing delays:</h3>
                <ul className="space-y-3 text-[var(--color-text-muted)]">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-500 font-bold">1.</span>
                    <span><strong className="text-[var(--color-text)]">Errors on Form SS-4:</strong> Selecting the wrong entity type, entering an incorrect address format (the IRS requires US-style formatting), leaving required fields blank, or providing inconsistent information. Each error means a rejection and another 4-7 day wait.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-500 font-bold">2.</span>
                    <span><strong className="text-[var(--color-text)]">IRS seasonal backlogs:</strong> From January through April, the IRS processes millions of tax returns alongside EIN applications. EIN processing times during this period can extend to 7-10 business days or more.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-500 font-bold">3.</span>
                    <span><strong className="text-[var(--color-text)]">Poor fax quality:</strong> If your faxed SS-4 is blurry, cut off, or illegible, the IRS will not process it. You will not receive a notification -- your application simply sits unprocessed until you realize something is wrong and resubmit.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-500 font-bold">4.</span>
                    <span><strong className="text-[var(--color-text)]">Duplicate applications:</strong> If you submit multiple SS-4 forms for the same entity, the IRS may flag your application for manual review, adding days or weeks to processing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-500 font-bold">5.</span>
                    <span><strong className="text-[var(--color-text)]">Missing responsible party information:</strong> The IRS requires a valid responsible party (an individual, not an entity) on every SS-4. If this section is incomplete or lists a business name instead of a person, the form is rejected.</span>
                  </li>
                </ul>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Using ein.so eliminates most of these risks. Our team prepares your SS-4 using a proven template, verifies every field before submission, and uses a high-quality commercial fax system to ensure clear transmission. See our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">complete guide on how to get an EIN</Link> for more details on the application process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Current IRS Backlogs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">2026 Update</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Are There Current IRS EIN Processing <span className="font-display gradient-text">Backlogs?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                As of 2026, the IRS has made significant progress in reducing processing backlogs that accumulated during the pandemic years. EIN fax applications are currently being processed within the standard 4-7 business day window for most applicants. However, processing times remain subject to seasonal fluctuations.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The busiest period for EIN applications is <strong className="text-[var(--color-text)]">January through April</strong>, when the IRS is simultaneously handling individual and business tax returns. During these months, fax-based EIN processing can take 7-10 business days. The quietest period is <strong className="text-[var(--color-text)]">July through September</strong>, when processing times are at their shortest.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are applying during peak season and need your EIN quickly, ein.so&apos;s Express processing ($97) is the most reliable way to minimize your wait. Our daily follow-up protocol ensures that your application does not get lost in the queue. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Phone and Mail Processing */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Other Methods</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What About EIN Processing Time <span className="font-display gradient-text">by Phone and Mail?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Phone applications</strong> can theoretically give you an EIN the same day. International applicants can call the IRS at <strong className="text-[var(--color-text)]">267-941-1099</strong> Monday through Friday, 6:00 AM to 11:00 PM Eastern Time. If you reach an agent, they walk through the SS-4 questions and can assign your EIN during the call.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                In practice, the phone method has significant drawbacks. Hold times can exceed 30-60 minutes. The line is sometimes completely unavailable due to high call volumes. Language barriers and poor international call quality can make the conversation difficult. And if the agent cannot verify your information during the call, you are directed to use the fax method anyway.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Mail applications</strong> have the longest EIN processing time at <strong className="text-[var(--color-text)]">4-6 weeks</strong>. You mail your completed Form SS-4 to: Internal Revenue Service, Attn: EIN Operation, Cincinnati, OH 45999. The IRS processes the form and mails your EIN assignment letter back to you. Given the availability of faster methods, mail is not recommended unless you have no access to fax, phone, or the internet.
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

      <CTASection title="Need Your EIN Fast?" subtitle="Express processing: 7 business days for $97. Standard: $49." />
    </>
  );
}
