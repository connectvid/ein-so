"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinLookupFreeClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Lookup Guide"
        title="Free EIN Lookup:"
        titleAccent="5 Ways to Find an EIN (2026)"
        description="You do not need to pay a third-party service to find an EIN number. There are five free methods that work depending on the type of organization you are searching for. This guide covers every method step by step."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>You can find EINs for free using the IRS Tax Exempt Organization Search (for nonprofits), SEC EDGAR (for public companies), state business registries, direct requests to the business, or by calling the IRS at (800) 829-4933 for your own EIN.</strong>{" "}
                Each method works for different situations. No paid EIN lookup service is necessary for these five approaches.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Method 1: IRS Tax Exempt Organization Search */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Find a Nonprofit&apos;s EIN Using <span className="font-display gradient-text">IRS Tax Exempt Search?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS Tax Exempt Organization Search is the most reliable free method for finding EINs of nonprofits, charities, churches, and other tax-exempt organizations. The IRS maintains this public database at apps.irs.gov/app/eos and updates it regularly. Every 501(c)(3) and other tax-exempt entity that has filed with the IRS appears in this database.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To use it, visit the IRS Tax Exempt Organization Search page and enter the organization name, city, or state. The search results display the organization&apos;s EIN, name, city, state, country, and tax-exempt status. You can also download the full database as a CSV file if you need to search in bulk. This tool also shows whether the organization has had its tax-exempt status revoked, which is valuable for due diligence before making donations.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This method only works for tax-exempt organizations. For-profit businesses like LLCs and corporations do not appear in this database. If you need to find the EIN of a for-profit company, use one of the other four methods below. For more on EIN lookup methods, see our comprehensive{" "}
                  <Link href="/ein-lookup/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN lookup guide
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Method 2: SEC EDGAR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Find a Public Company&apos;s EIN on <span className="font-display gradient-text">SEC EDGAR?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The SEC EDGAR database contains filings from all publicly traded companies and certain private companies that have issued public securities. Every filing includes the company&apos;s EIN (listed as &quot;IRS Number&quot; or &quot;Employer Identification Number&quot;). This makes SEC EDGAR one of the fastest ways to find a public company&apos;s EIN for free.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Go to sec.gov and use the EDGAR Company Search. Enter the company name or ticker symbol. Click on the company&apos;s CIK number to view its filing page. The EIN appears in the company header information. You can also find the EIN in the body of 10-K (annual report) and 10-Q (quarterly report) filings, usually on the cover page.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This method is limited to SEC-reporting companies. Private LLCs, partnerships, and small businesses that do not file with the SEC will not appear in EDGAR. For those entities, you need to use state registries, direct contact, or other methods. Understanding the{" "}
                  <Link href="/ein-number-format/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    EIN number format
                  </Link>{" "}
                  helps you identify the EIN when scanning filings.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Method 3: State Business Registries */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Can You Find an EIN Through <span className="font-display gradient-text">State Business Registries?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  State business registries maintained by each state&apos;s Secretary of State office contain registration information for LLCs, corporations, and other business entities formed in that state. Some states include EINs in their public records, though most display only state-level tax identification numbers rather than the federal EIN.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To search, visit the Secretary of State website for the state where the business is registered. Use their business entity search tool and enter the company name. If the state publishes EINs, it will appear in the entity details alongside the registered agent, formation date, and status. States that commonly display EINs include some smaller states with more open records policies.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Even when a state does not display the EIN directly, the registry still provides useful information. You can find the business&apos;s registered agent, principal office address, and officer names, which you can use to contact the business directly and request the EIN. This is particularly useful for vendor verification and due diligence.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Method 4: Ask the Business Directly */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Can You Ask a Business for <span className="font-display gradient-text">Their EIN Directly?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Yes, and this is often the simplest method. Businesses routinely share their EINs with vendors, contractors, financial institutions, and anyone who has a legitimate business reason to request it. The EIN is a business identifier, not a personal one, so there is no privacy violation in asking for it or sharing it.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Request the EIN by asking for a completed W-9 form (Request for Taxpayer Identification Number and Certification). The W-9 is the standard IRS form that businesses use to share their EIN with other parties. Any legitimate business should be willing to provide a W-9 when you have a valid business relationship, such as a vendor-client arrangement, a partnership, or a tax reporting obligation.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If the business refuses to provide their EIN and you need it for tax reporting purposes (such as issuing a 1099), you may need to withhold taxes at the backup withholding rate of 24%. The IRS requires you to make a reasonable effort to obtain the EIN before resorting to backup withholding. For more on{" "}
                  <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    what an EIN is and why businesses have them
                  </Link>, read our introductory guide.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Method 5: Call the IRS */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How Do You Retrieve Your Own EIN by <span className="font-display gradient-text">Calling the IRS?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you lost your own EIN and cannot find it in your records, you can call the IRS Business and Specialty Tax Line at (800) 829-4933. The line operates Monday through Friday, 7:00 AM to 7:00 PM local time. An IRS agent will verify your identity by asking for information about the business entity and the responsible party, then provide your EIN over the phone.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Before calling, have the following ready: your business name as registered with the IRS, the responsible party&apos;s full name and SSN or ITIN, the business address on file, and the approximate date the EIN was issued. The IRS agent uses this information to locate your record and confirm you are authorized to receive the EIN. Only authorized parties (the responsible party, an officer, a partner, or a properly authorized representative with Form 8821 or 2848 on file) can request the EIN by phone.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  This method works only for retrieving your own EIN. The IRS will not provide another business&apos;s EIN over the phone. For other businesses, use the public database methods described above. If you need a brand new EIN rather than retrieving a lost one,{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    apply through ein.so
                  </Link>{" "}
                  for fast, reliable processing.
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
              { label: "EIN Lookup", href: "/ein-lookup/" },
              { label: "What Is an EIN?", href: "/what-is-ein/" },
              { label: "EIN Number Format", href: "/ein-number-format/" },
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
        title="Need a New EIN Instead?"
        subtitle="$49. We handle the entire IRS application process. No SSN required."
      />
    </>
  );
}
