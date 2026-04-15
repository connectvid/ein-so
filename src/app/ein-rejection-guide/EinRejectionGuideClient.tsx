"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinRejectionGuideClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Troubleshooting Guide"
        title="EIN Application Rejected?"
        titleAccent="Fix & Reapply (2026)"
        description="An EIN rejection does not mean you cannot get an EIN. It means the IRS found an error in your application. This guide walks you through every common rejection reason, how to fix it, and how to reapply successfully."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>EIN applications get rejected for five main reasons: duplicate applications, name mismatches between your SS-4 and formation documents, invalid responsible party information, incomplete form fields, or formatting errors. You fix the specific error and resubmit Form SS-4. There is no penalty or waiting period for reapplying.</strong>{" "}
                ein.so prevents most rejections by reviewing every application before submission, and we resubmit rejected applications at no extra cost.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Was Your EIN Application Rejected? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Why Was Your EIN Application <span className="font-display gradient-text">Rejected?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS rejects EIN applications when the information you submitted does not pass their validation checks. Understanding the specific reason for your rejection is the first step toward getting your EIN. The IRS rejection notice includes a code or explanation that tells you exactly what went wrong. Here are the five most common causes of EIN application rejections and what each one means for your reapplication.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you applied online through the IRS website, you receive the rejection immediately on screen. If you applied by fax using{" "}
                  <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    Form SS-4
                  </Link>, the IRS sends a rejection notice by fax within 7 to 14 business days. Either way, the rejection notice specifies the problem so you can correct it and resubmit.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Reason 1: Duplicate Application */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Does a Duplicate EIN <span className="font-display gradient-text">Rejection Mean?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  A duplicate EIN rejection means the IRS already has an EIN on file for a business entity that matches your application. This is the single most common reason for EIN rejections. It happens when someone previously applied for an EIN using the same business name and responsible party combination, when a registered agent filed on your behalf without telling you, or when you forgot about a previous application you submitted months or years ago.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS assigns one EIN per entity. If your LLC or corporation already has an EIN, the IRS will not issue a second one. Instead, you need to locate the existing EIN. You can find it on your original IRS confirmation letter (CP 575), on previously filed tax returns, by calling the IRS Business and Specialty Tax Line at (800) 829-4933, or by checking with your registered agent or formation service.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you genuinely need a new EIN because your business structure changed (for example, you converted from a sole proprietorship to an LLC), make sure your new application reflects the new entity name and structure. The IRS treats this as a different entity and will issue a separate EIN. Read our full guide on{" "}
                  <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    how to get an EIN
                  </Link>{" "}
                  for the complete process.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Reason 2: Name Mismatch */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Fix a Name Mismatch <span className="font-display gradient-text">Rejection?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  A name mismatch rejection occurs when the business name on your Form SS-4 does not match what the IRS expects. This happens for 3 common reasons. The business name is spelled differently than it appears on your Articles of Organization or Articles of Incorporation. The legal designator (LLC, Inc., Corp.) is omitted or uses an abbreviation the IRS does not recognize. A DBA (doing business as) name is included where the legal name should go.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To fix a name mismatch, pull up your original formation documents filed with your state. Copy the business name character for character, including all punctuation, capitalization, and legal designators. Enter this exact name on Line 1 of Form SS-4. If you also have a trade name or DBA, enter that on Line 2, but never put it on Line 1. Refer to our{" "}
                  <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    SS-4 Form guide
                  </Link>{" "}
                  for detailed field-by-field instructions.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For non-residents applying without an SSN, the responsible party name must also match exactly. If your passport name includes a middle name or uses a different order than what you entered on the form, the IRS may flag it. Always use your name exactly as it appears on your passport or government-issued identification when completing the{" "}
                  <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN application without an SSN
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Reason 3: Invalid Responsible Party */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What If the Responsible Party Information <span className="font-display gradient-text">Is Wrong?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS requires every EIN application to list a responsible party, which is an individual person (not an entity) who controls or manages the business. The responsible party&apos;s name, SSN or ITIN (if applicable), and address must be accurate. If the SSN or ITIN you provided does not match the name in IRS records, the application gets rejected.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Common responsible party errors include entering a name that does not match the SSN on file (for example, using a maiden name when the SSN is registered under a married name), providing an SSN or ITIN that has been deactivated, listing a business entity as the responsible party instead of an individual, or making a typo in the 9-digit SSN or ITIN. Each of these triggers an immediate rejection.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To fix this, verify that the responsible party name matches exactly what the SSA or IRS has on file for that SSN or ITIN. If you recently changed your name, update it with the SSA first before reapplying. For non-residents without an SSN or ITIN, this field is left blank on the fax application, which eliminates this particular rejection risk entirely.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Reason 4: Incomplete Form */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Fix an Incomplete or Incorrectly <span className="font-display gradient-text">Filled SS-4?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS rejects Form SS-4 submissions when required fields are blank, when entity type selections contradict other fields, or when the form is illegible (common with fax submissions). Required fields include the legal business name (Line 1), the responsible party name and identifier (Lines 7a-7b), the business address (Lines 4a-4b), the entity type (Line 9), the reason for applying (Line 10), and the signature with date.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To avoid incomplete form rejections, use our{" "}
                  <Link href="/ss4-form-guide/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    step-by-step SS-4 Form guide
                  </Link>{" "}
                  to verify every field before submitting. If you are faxing the form, use a clean printout with high contrast to ensure legibility. Avoid handwriting when possible; typed forms have a much lower rejection rate. Double-check that your entity type selection on Line 9 matches your actual business structure.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you received an incomplete form rejection, compare your submitted form against the IRS instructions for Form SS-4. Fill in any missing fields, correct any contradictions, and resubmit. The IRS does not charge for resubmissions, and there is no limit on how many times you can reapply.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How to Reapply After Rejection */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Reapply After an EIN <span className="font-display gradient-text">Rejection?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 1: Read the Rejection Notice</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    The IRS rejection notice contains a specific code or explanation for why your application was denied. Read it carefully and identify the exact field or data point that caused the rejection. Do not guess or assume. The notice tells you precisely what to fix.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 2: Gather Correct Documentation</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Pull your Articles of Organization (for LLCs) or Articles of Incorporation (for corporations), your passport or government ID, and any previous IRS correspondence. Verify that every piece of information on your new application matches these source documents exactly.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 3: Complete a New Form SS-4</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Do not try to amend or mark up your previously rejected form. Start fresh with a clean Form SS-4. Fill in every required field using your verified documentation. Double-check all names, addresses, entity types, and identification numbers before proceeding.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Step 4: Submit and Wait</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    If you have an SSN, you can reapply online immediately. If you are filing by fax, send your corrected Form SS-4 to the IRS at (855) 215-1627. Expect your EIN within 7 to 14 business days. Track your{" "}
                    <Link href="/ein-processing-time/" className="text-[var(--color-blue)] hover:underline font-semibold">
                      EIN processing time
                    </Link>{" "}
                    and contact the IRS if you do not hear back within 10 business days.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* How ein.so Prevents Rejections */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Does ein.so Prevent EIN <span className="font-display gradient-text">Rejections?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  ein.so eliminates the guesswork from EIN applications. When you use our service, we review every detail of your application before it reaches the IRS. We verify your business name matches your formation documents, confirm the entity type and responsible party information are correct, check for formatting issues, and ensure all required fields are complete. This pre-submission review catches the errors that cause over 95% of EIN rejections.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If the IRS does reject an application we filed, we handle the correction and resubmission at no additional charge. You do not pay twice. We diagnose the rejection reason, fix the issue, and resubmit your corrected Form SS-4 immediately. This is included in both our Standard (<strong className="text-[var(--color-text)]">$49</strong>, 14 business days) and Express (<strong className="text-[var(--color-text)]">$97</strong>, 7 business days) plans.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For non-residents who cannot use the IRS online system, our service is especially valuable because fax rejections take another 7 to 14 business days to resolve on your own. With ein.so, we monitor for the rejection, fix it the same day, and resubmit immediately, saving you a full processing cycle. Ready to get your EIN without the rejection risk?{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    Start your application today
                  </Link>.
                </p>
              </div>
            </AnimateIn>
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
                    <svg
                      className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
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
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">Related Guides</h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              { label: "How to Get an EIN", href: "/how-to-get-ein/" },
              { label: "SS-4 Form Guide", href: "/ss4-form-guide/" },
              { label: "EIN Without SSN", href: "/ein-without-ssn/" },
              { label: "EIN Processing Time", href: "/ein-processing-time/" },
              { label: "Apply for EIN", href: "/apply/" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
                >
                  {link.label}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Get Your EIN Without the Rejection Risk"
        subtitle="$49. Pre-submission review catches errors before the IRS sees your application."
      />
    </>
  );
}
