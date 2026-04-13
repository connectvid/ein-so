"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const campusPrefixes = [
  { range: "01-06", campus: "Brookhaven, NY" },
  { range: "10-16", campus: "Austin, TX" },
  { range: "20-27", campus: "Philadelphia, PA" },
  { range: "30-38", campus: "Kansas City, MO" },
  { range: "40-48", campus: "Ogden, UT" },
  { range: "50-58", campus: "Cincinnati, OH (closed)" },
  { range: "60-68", campus: "Atlanta, GA (closed)" },
  { range: "71-77", campus: "Memphis, TN" },
  { range: "80-88", campus: "Internet (online applications)" },
  { range: "90-99", campus: "Internet (online applications)" },
];

export default function EinNumberFormatClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Reference Guide"
        title="EIN Number Format:"
        titleAccent="XX-XXXXXXX Explained (2026)"
        description="Every EIN follows the same format: two digits, a hyphen, then seven digits. The first two digits reveal which IRS campus issued the number. This guide breaks down every component of the EIN format so you can verify, understand, and use your EIN correctly."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>An EIN (Employer Identification Number) is formatted as XX-XXXXXXX: two digits, a hyphen, then seven digits, totaling 9 digits. The first two digits identify the IRS campus that issued the EIN. Every EIN is unique and permanent. The IRS never reuses or reassigns EINs.</strong>{" "}
                This format distinguishes EINs from SSNs (XXX-XX-XXXX) and ITINs (9XX-XX-XXXX), even though all three are 9-digit numbers.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Does Each Part of an EIN Mean? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Does Each Part of an EIN <span className="font-display gradient-text">Number Mean?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An EIN contains exactly 9 digits written in the format XX-XXXXXXX. The number breaks down into two parts. The first two digits (the prefix) identify the IRS campus or processing center that issued the EIN. The remaining seven digits are a sequential identifier assigned to your specific business entity. Together, these 9 digits create a unique identifier that belongs to your business permanently.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For example, in the EIN <strong className="text-[var(--color-text)]">84-1234567</strong>, the prefix &quot;84&quot; indicates the EIN was issued through the IRS online application system. The remaining &quot;1234567&quot; is the sequential number assigned to that entity. The hyphen after the second digit is always present in the formatted version and is required on most IRS forms and business documents.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The EIN format has remained consistent since the IRS began issuing these numbers. Unlike SSNs, which have area numbers, group numbers, and serial numbers with specific validation rules, the EIN structure is simpler: a campus prefix plus a sequential identifier. This makes EINs easier to verify visually. If you see a 9-digit number formatted as XX-XXXXXXX, it is almost certainly an EIN. For a broader overview, see our guide on{" "}
                  <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    what an EIN is
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* IRS Campus Prefix Codes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Do the First Two Digits of an EIN <span className="font-display gradient-text">Tell You?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The first two digits of an EIN are the campus prefix code. Before the IRS allowed online applications, the prefix indicated which IRS processing campus handled your application, which generally corresponded to your geographic location. Since the IRS launched online EIN applications in 2001, most new EINs carry internet-assigned prefixes in the 80-99 range.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15} className="mt-8">
              <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)]">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/70">Prefix Range</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-blue-glow)]">IRS Campus / Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campusPrefixes.map((row, i) => (
                      <tr
                        key={row.range}
                        className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
                      >
                        <td className="px-6 py-4 font-semibold text-[var(--color-text)]">{row.range}</td>
                        <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.campus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2} className="mt-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If your EIN starts with 80 or higher, it was issued through the IRS online system. If it starts with a lower number, it was issued by a specific IRS campus, likely through a fax or mail application. Non-residents who apply by fax through ein.so typically receive EINs with campus prefixes corresponding to the IRS campus that processes fax applications (currently the Ogden and Kansas City campuses).
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How to Verify an EIN Format */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Verify an EIN <span className="font-display gradient-text">Is Valid?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To verify an EIN format, check these four criteria. First, the number must contain exactly 9 digits. Second, it must be formatted as XX-XXXXXXX with a single hyphen after the second digit. Third, the first two digits must fall within a valid IRS prefix range (01-06, 10-16, 20-27, 30-38, 40-48, 50-58, 60-68, 71-77, 80-88, or 90-99). Fourth, the number should not start with 00 or 07-09, as these are not assigned prefixes.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Format verification tells you that a number looks like a valid EIN, but it does not confirm the EIN belongs to a specific business. To verify that an EIN is assigned to a particular entity, you need to use the{" "}
                  <Link href="/ein-lookup/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN lookup methods
                  </Link>{" "}
                  described in our lookup guide, such as the IRS Tax Exempt Organization Search for nonprofits or SEC EDGAR for public companies. You can also find free options in our{" "}
                  <Link href="/ein-lookup-free/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    free EIN lookup guide
                  </Link>.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  When entering your EIN on government forms, bank applications, and tax returns, always include the hyphen unless the form explicitly asks for digits only. Some electronic systems accept only digits (123456789), while printed forms expect the hyphenated format (12-3456789). Using the wrong format can cause processing delays or rejections.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* EIN vs SSN vs ITIN Format */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Does the EIN Format Compare to <span className="font-display gradient-text">SSN and ITIN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  All three tax identification numbers (EIN, SSN, and ITIN) contain 9 digits, but their formats are distinct. The EIN uses a 2-7 split (XX-XXXXXXX). The SSN uses a 3-2-4 split (XXX-XX-XXXX). The ITIN also uses a 3-2-4 split but always starts with the digit 9 (9XX-XX-XXXX). These format differences make it easy to identify which type of tax ID you are looking at.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The format matters because using the wrong type of number on a form triggers processing errors. If the IRS expects an EIN (XX-XXXXXXX) and you enter an SSN (XXX-XX-XXXX), the system rejects the submission. Similarly, banks and payment processors validate the format of tax IDs during account setup. Always enter the right type of number in the right field to avoid delays and rejections.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Common Format Mistakes */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Are Common EIN Format <span className="font-display gradient-text">Mistakes?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Missing the Hyphen</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Entering &quot;123456789&quot; instead of &quot;12-3456789&quot; on forms that expect the hyphenated format. Most IRS forms and bank applications require the hyphen. Electronic systems sometimes strip it automatically, but paper forms almost always need it.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Placing the Hyphen Wrong</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Writing &quot;123-456789&quot; or &quot;123-45-6789&quot; instead of &quot;12-3456789&quot;. The EIN hyphen goes after the second digit, not the third. If you place the hyphen in the SSN position, the system may interpret your EIN as an SSN and reject it.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Confusing EIN with State Tax ID</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    State tax identification numbers have different formats and lengths than federal EINs. Your state tax ID is not interchangeable with your EIN. When a form asks for your EIN or Federal Tax ID, provide the 9-digit XX-XXXXXXX number from your IRS confirmation letter, not your state number.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Transposing Digits</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Swapping two adjacent digits (typing &quot;12-3465789&quot; instead of &quot;12-3456789&quot;) is a common data entry error that causes tax filing rejections and bank application failures. Always double-check your EIN against your original CP 575 confirmation letter before entering it anywhere.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
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
              { label: "What Is an EIN?", href: "/what-is-ein/" },
              { label: "EIN Lookup", href: "/ein-lookup/" },
              { label: "Free EIN Lookup", href: "/ein-lookup-free/" },
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
        title="Get Your EIN in the Right Format"
        subtitle="$49. We handle Form SS-4 and deliver your correctly formatted EIN."
      />
    </>
  );
}
