"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinWithoutSsnClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Non-Resident Guide"
        title="How to Get an EIN"
        titleAccent="Without an SSN (2026)"
        description="Non-US residents do not need a Social Security Number to get an EIN. This guide covers the Form SS-4 fax method, the documents you need, and why the IRS online application does not work without an SSN."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Non-US residents get an EIN without an SSN by filling out IRS Form SS-4 and faxing it to 855-215-1627. Write &quot;N/A&quot; on Line 7b where the form asks for an SSN, attach a copy of your passport, and include a fax number where the IRS can send your EIN. Processing takes 4-7 business days.</strong>{" "}
                  The IRS online EIN application does not work without an SSN or ITIN -- it blocks you on the first screen. The fax method is the official alternative for non-residents, and the IRS processes thousands of these applications every month.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                If you are a non-US resident trying to start a business in the United States, one of the first obstacles you face is getting an EIN without a Social Security Number. The IRS website makes it look like you need an SSN or ITIN to apply, but that is only true for the online application. The paper form (SS-4) submitted by fax works perfectly without either number.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide walks you through the entire process step by step. We cover exactly what to write on each relevant line of Form SS-4, what documents to include, how to submit the form, and how long it takes to receive your EIN. If you want to skip the process entirely, <Link href="/apply/" className="text-[var(--color-blue)] underline">ein.so handles everything for $49 (Standard) or $97 (Express)</Link>. For a broader overview of all EIN application methods, see our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] underline">How to Get an EIN</Link> guide.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Can't Non-Residents Use the IRS Online Application? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does the IRS Online EIN Application Not Work <span className="font-display gradient-text">Without an SSN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS EIN Assistant (the online application at irs.gov) was designed primarily for US residents. On the very first screen, it asks for the responsible party&apos;s SSN or ITIN. If you cannot provide one of these numbers, the system will not let you proceed to the next step. There is no &quot;skip&quot; option and no way to enter &quot;N/A.&quot;
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This is not a bug or an oversight -- the IRS intentionally designed the online system this way. The SSN/ITIN requirement serves as an identity verification mechanism for the online application. Since the online system issues EINs instantly (within minutes), the IRS needs a reliable way to verify that the applicant is a real person. The SSN/ITIN check accomplishes this.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For non-residents who do not have an SSN or ITIN, the IRS provides two alternative methods: faxing Form SS-4 and calling the IRS international phone line. The fax method is the most reliable and most commonly used. The phone method (267-941-1099) can work but involves hold times that often exceed one to two hours, and the line is only available during limited business hours.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Documents Do You Need? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Documents</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Documents Do You Need to Get an EIN <span className="font-display gradient-text">Without an SSN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The document requirements for getting an EIN without an SSN are straightforward. You need three things: a completed IRS Form SS-4, a copy of your passport, and access to a fax machine (or a digital fax service). If you have formed a US business entity, you should also have your formation documents available, though they are not always required to be submitted with the SS-4.
              </p>

              <StaggerContainer className="space-y-3">
                <StaggerItem>
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-6 py-4">
                    <p className="font-semibold text-[var(--color-text)] mb-1">IRS Form SS-4</p>
                    <p className="text-[var(--color-text-muted)] text-sm">Download from irs.gov. Fill out all applicable lines. Write &quot;N/A&quot; on Line 7b where it asks for SSN/ITIN.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-6 py-4">
                    <p className="font-semibold text-[var(--color-text)] mb-1">Passport Copy</p>
                    <p className="text-[var(--color-text-muted)] text-sm">A clear copy of the photo page of your passport. This verifies the responsible party&apos;s identity since no SSN is provided.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-6 py-4">
                    <p className="font-semibold text-[var(--color-text)] mb-1">Fax Access</p>
                    <p className="text-[var(--color-text-muted)] text-sm">You need the ability to send a fax to the IRS at 855-215-1627 and receive a fax back. Online fax services like eFax or HelloFax work.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-6 py-4">
                    <p className="font-semibold text-[var(--color-text)] mb-1">Business Formation Documents (recommended)</p>
                    <p className="text-[var(--color-text-muted)] text-sm">Articles of Organization (LLC) or Articles of Incorporation (corporation). Not always required with the SS-4, but useful for reference.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a detailed breakdown of every line on Form SS-4, see our <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] underline">SS-4 Form Guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Step-by-Step: How to Get an EIN Without an SSN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Are the Steps to Get an EIN <span className="font-display gradient-text">Without an SSN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process for getting an EIN without an SSN involves five steps. Each step is straightforward, but accuracy matters -- mistakes on the form cause delays or rejections. Follow these steps carefully:
              </p>

              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="flex gap-4 bg-white border border-[var(--color-border)] rounded-xl px-6 py-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                      <p className="font-semibold text-[var(--color-text)] mb-1">Download Form SS-4 from IRS.gov</p>
                      <p className="text-[var(--color-text-muted)] text-sm">Go to irs.gov and search for &quot;Form SS-4.&quot; Download the PDF. Open it in a PDF reader that lets you type directly into the fields. Do not use an outdated version of the form.</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex gap-4 bg-white border border-[var(--color-border)] rounded-xl px-6 py-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                      <p className="font-semibold text-[var(--color-text)] mb-1">Fill Out the Form Completely</p>
                      <p className="text-[var(--color-text-muted)] text-sm">Enter your legal name (Line 1), mailing address (Lines 4a-4b), responsible party name (Line 7a), &quot;N/A&quot; for SSN (Line 7b), entity type (Line 8a), reason for applying (Line 9a), and all other applicable fields. Sign and date the form.</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex gap-4 bg-white border border-[var(--color-border)] rounded-xl px-6 py-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                      <p className="font-semibold text-[var(--color-text)] mb-1">Attach Your Passport Copy</p>
                      <p className="text-[var(--color-text-muted)] text-sm">Include a clear copy of the photo page of your passport. This verifies your identity and helps the IRS process the application faster. The passport name must match the responsible party name on Line 7a.</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex gap-4 bg-white border border-[var(--color-border)] rounded-xl px-6 py-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center font-bold text-lg">4</div>
                    <div>
                      <p className="font-semibold text-[var(--color-text)] mb-1">Fax to the IRS at 855-215-1627</p>
                      <p className="text-[var(--color-text-muted)] text-sm">Send the completed SS-4 and passport copy to the IRS fax number. Use a physical fax machine or an online fax service. Keep the fax confirmation receipt as proof of submission.</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex gap-4 bg-white border border-[var(--color-border)] rounded-xl px-6 py-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-blue)] text-white flex items-center justify-center font-bold text-lg">5</div>
                    <div>
                      <p className="font-semibold text-[var(--color-text)] mb-1">Receive Your EIN by Fax (4-7 Business Days)</p>
                      <p className="text-[var(--color-text-muted)] text-sm">The IRS faxes your EIN confirmation back to the fax number you provided on the form. This typically takes 4-7 business days. During tax season (January-April), processing may take slightly longer.</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What About the IRS Phone Method? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Alternative Method</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Can You Get an EIN Without an SSN by Calling <span className="font-display gradient-text">the IRS?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Yes, you can call the IRS international line at 267-941-1099 to apply for an EIN without an SSN. An IRS representative will walk you through the SS-4 form over the phone and can issue your EIN during the call. This method has the advantage of getting your EIN immediately without waiting 4-7 business days.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                However, the phone method has significant drawbacks. Hold times frequently exceed one to two hours, and the line is only available Monday through Friday, 6:00 AM to 11:00 PM Eastern Time. International calling charges apply unless you use a VoIP service. The IRS agent may also ask you to verify your identity verbally, which can be challenging if English is not your first language. Many applicants call multiple times before successfully getting through.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For most non-residents, the fax method is more reliable and less stressful. You fill out the form at your own pace, double-check everything before sending, and receive your EIN by fax without spending hours on hold. If you want to avoid both methods entirely, <Link href="/apply/" className="text-[var(--color-blue)] underline">ein.so handles the entire process</Link> -- we file your SS-4 by fax and deliver your EIN by email for $49 (Standard) or $97 (Express).
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How Does ein.so Help Non-Residents? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Our Service</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does ein.so Help You Get an EIN <span className="font-display gradient-text">Without an SSN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so was built specifically for non-US residents who need an EIN but do not have an SSN or ITIN. We handle the entire Form SS-4 filing process so you do not have to deal with fax machines, IRS processing delays, or confusing form instructions. Here is how it works:
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                You fill out a simple online form on our website with your legal name, date of birth, country of citizenship, mailing address, and business details. We use this information to complete IRS Form SS-4 accurately. We then fax the form to the IRS at 855-215-1627 and monitor for the response. When the IRS returns your EIN, we deliver it to you by email along with a copy of the official IRS confirmation.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                We offer two packages: <strong className="text-[var(--color-text)]">Standard ($49)</strong> with 5-7 business day turnaround and <strong className="text-[var(--color-text)]">Express ($97)</strong> with 2-3 business day turnaround. Both include full SS-4 preparation and filing, IRS correspondence handling, and email delivery of your EIN. No SSN, ITIN, or US address is required. Visit our <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] underline">EIN for Non-Residents</Link> page to learn more, or check our <Link href="/ein-processing-time/" className="text-[var(--color-blue)] underline">EIN Processing Time</Link> page for current turnaround estimates.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
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
