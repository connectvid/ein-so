"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const comparisonRows = [
  { label: "Full Name", ein: "Employer Identification Number", itin: "Individual Taxpayer Identification Number" },
  { label: "Purpose", ein: "Identifies a business entity for tax purposes", itin: "Identifies an individual who cannot obtain an SSN" },
  { label: "Who Gets It", ein: "LLCs, corporations, partnerships, sole proprietors, trusts, estates, nonprofits", itin: "Non-resident aliens, dependents, or spouses of US citizens/residents who are ineligible for an SSN" },
  { label: "Format", ein: "XX-XXXXXXX", itin: "9XX-XX-XXXX" },
  { label: "Digits", ein: "9 digits", itin: "9 digits" },
  { label: "Issued By", ein: "IRS", itin: "IRS" },
  { label: "Application Form", ein: "Form SS-4", itin: "Form W-7" },
  { label: "Cost (IRS)", ein: "Free", itin: "Free (but CAA fees of $150-$300 may apply)" },
  { label: "Processing Time", ein: "Instant (online) or 4 business days (fax)", itin: "6-11 weeks" },
  { label: "Requires SSN?", ein: "No (for non-residents filing by fax)", itin: "No (it replaces an SSN)" },
  { label: "Used to File", ein: "Business tax returns (1120, 1065, 1041, 990)", itin: "Personal tax returns (1040-NR, 1040)" },
  { label: "Opens Bank Account?", ein: "Yes, business bank accounts", itin: "Yes, personal bank accounts at some institutions" },
  { label: "Expires?", ein: "Never (permanent once assigned)", itin: "After 3 consecutive years of non-use on a tax return" },
  { label: "Authorizes Employment?", ein: "No (business ID only)", itin: "No (tax filing only, no work authorization)" },
  { label: "Documents Required", ein: "Business formation docs + passport", itin: "Form W-7 + tax return + original ID (passport)" },
  { label: "ein.so Service", ein: "$49 (Standard) or $97 (Express)", itin: "Not offered by ein.so" },
];

export default function EinVsItinClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Comparison Guide"
        title="EIN vs ITIN:"
        titleAccent="Key Differences Explained (2026)"
        description="Both are 9-digit IRS numbers, but they serve completely different purposes. An EIN identifies your business. An ITIN identifies you as an individual taxpayer. Here is everything you need to know."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                An <strong>EIN (Employer Identification Number)</strong> is a 9-digit number the IRS assigns to
                businesses: LLCs, corporations, partnerships, and other entities. It is your business&apos;s tax
                ID. An <strong>ITIN (Individual Taxpayer Identification Number)</strong> is a 9-digit number the IRS
                assigns to individuals who need to file US taxes but are not eligible for a Social Security Number (SSN).
                Many non-US residents need <strong>both</strong>: an EIN for their business and an ITIN for their
                personal tax obligations.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Quick Comparison <span className="font-display gradient-text">Table</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              A side-by-side look at everything that separates an EIN from an ITIN.
            </p>
          </AnimateIn>

          <AnimateIn className="max-w-4xl mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[var(--color-navy)]">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/70 w-1/4">Feature</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-blue-glow)] w-[37.5%]">EIN</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[var(--color-amber)] w-[37.5%]">ITIN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
                    >
                      <td className="px-6 py-4 font-semibold text-[var(--color-text)]">{row.label}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.ein}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.itin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* When Do You Need EIN vs ITIN vs Both? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                When You Need EIN Only vs ITIN Only vs <span className="font-display gradient-text">Both</span>
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                The number you need depends on your specific situation. This table covers the 8 most common scenarios for non-US residents.
              </p>
            </AnimateIn>
            <AnimateIn>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="px-4 py-3 font-semibold">Scenario</th>
                      <th className="px-4 py-3 font-semibold">Need EIN?</th>
                      <th className="px-4 py-3 font-semibold">Need ITIN?</th>
                      <th className="px-4 py-3 font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Forming a US LLC (no personal US income)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">EIN for business taxes (Form 5472); no personal return needed</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Selling on Amazon (through US LLC)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">EIN for Seller Central tax interview and 1099-K</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Freelancing for US clients (no US entity)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">ITIN to file Form 1040-NR and claim treaty benefits</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">US real estate investment (through LLC)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">EIN for LLC; ITIN for personal return reporting rental income</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Receiving US royalties or dividends</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">ITIN to file W-8BEN and reduce withholding tax from 30%</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Opening a US personal bank account</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">ITIN serves as personal tax ID for bank compliance</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">US LLC + freelancing for US clients</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">EIN for business; ITIN for personal tax return and treaty claims</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Incorporating a C-Corp (no personal US income)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">EIN for Form 1120; corporation is separate tax entity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What Is an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an <span className="font-display gradient-text">EIN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An Employer Identification Number (EIN) is a unique 9-digit number assigned by the IRS to identify a
                  business entity. Think of it as your business&apos;s Social Security Number. Every LLC, corporation,
                  partnership, nonprofit, trust, and estate that operates in the United States needs one.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The EIN format is <strong className="text-[var(--color-text)]">XX-XXXXXXX</strong>, two digits,
                  a hyphen, then seven digits (e.g., 12-3456789). You use your EIN to file business tax returns, open a
                  business bank account, apply for business licenses, and hire employees. Without an EIN, your business
                  cannot operate legally in the US tax system.
                </p>
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">How to Get an EIN</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  US residents with an SSN can apply for an EIN online at irs.gov in 15 minutes and receive it instantly. Non-US residents without an SSN must apply by faxing Form SS-4 to the IRS at 855-215-1627. This fax-based process takes 4 business days. At ein.so, we handle the entire fax process for $49 (Standard, 14 business days) or $97 (Express, 7 business days).{" "}
                  <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    Learn more about what an EIN is and why you need one
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What Is an ITIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an <span className="font-display gradient-text">ITIN?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  An Individual Taxpayer Identification Number (ITIN) is a 9-digit number issued by the IRS to
                  individuals who are required to file US tax returns but who are not eligible for a Social Security
                  Number. This includes non-resident aliens, their dependents, and spouses of US citizens or residents.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The ITIN format mirrors the SSN format,{" "}
                  <strong className="text-[var(--color-text)]">9XX-XX-XXXX</strong>, but always starts with the
                  digit 9. Despite looking similar to an SSN, an ITIN does not authorize you to work in the US, does not
                  make you eligible for Social Security benefits, and does not change your immigration status.
                </p>
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">How to Get an ITIN</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  To apply for an ITIN, you must complete <strong className="text-[var(--color-text)]">Form W-7</strong>{" "}
                  and mail it to the IRS Austin Processing Center along with your federal tax return and original identification documents (or
                  certified copies). Alternatively, you can apply through an IRS-authorized Certifying Acceptance Agent
                  (CAA), which costs $150-$300 but lets you keep your passport. Processing takes 6 to 11 weeks, significantly longer than the EIN process.
                </p>
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">ITIN Expiration and Renewal Rules</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  ITINs expire if not used on a federal tax return for 3 consecutive years, or if the ITIN was issued
                  before 2013 and falls under the IRS&apos;s rolling renewal schedule. You must renew an expired ITIN
                  before filing a return that requires it. Renewal requires submitting Form W-7 again with updated identification documents.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Key Differences Between <span className="font-display gradient-text">EIN and ITIN</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Entity vs Individual</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    The most fundamental difference: an EIN identifies a <strong className="text-[var(--color-text)]">business entity</strong> (LLC,
                    corporation, partnership, etc.), while an ITIN identifies an <strong className="text-[var(--color-text)]">individual person</strong>.
                    If you are forming a company, you need an EIN. If you personally need to file a US tax return and do
                    not have an SSN, you need an ITIN.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Application Process</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Getting an EIN is straightforward: file Form SS-4 online (if you have an SSN) or by fax (if you do
                    not). The process takes minutes to days. Getting an ITIN requires Form W-7, a completed tax return,
                    and original identity documents mailed to the IRS. The process takes 6 to 11 weeks, and you
                    must surrender your passport or other original documents during that time (unless you use a CAA).
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Number Format</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    Both are 9-digit numbers, but the formats are different. An EIN uses the format{" "}
                    <strong className="text-[var(--color-text)]">XX-XXXXXXX</strong> (e.g., 12-3456789). An ITIN uses
                    the SSN format <strong className="text-[var(--color-text)]">9XX-XX-XXXX</strong> (e.g., 912-34-5678)
                    and always begins with the digit 9 in the first position.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Expiration</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    An EIN never expires. Once assigned, your business keeps it permanently (even if the business closes,
                    the EIN is never reassigned). An ITIN expires after three consecutive years of non-use on a federal
                    tax return, and certain older ITINs expire on a rolling schedule set by the IRS.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">What It Enables</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    An EIN lets you open business bank accounts, file business tax returns, hire employees, apply for
                    business credit, and comply with IRS reporting requirements. An ITIN lets you file a personal US tax
                    return, claim tax treaty benefits, and open personal bank accounts at participating institutions.
                    Neither an EIN nor an ITIN authorizes employment in the United States.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Do You Need EIN, ITIN, or Both? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-4">
                Do You Need an EIN, ITIN, or <span className="font-display gradient-text">Both?</span>
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
                The answer depends on your situation. Here are the most common scenarios for non-US residents:
              </p>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {[
                {
                  scenario: "Starting a US LLC or Corporation",
                  need: "EIN",
                  detail:
                    "If you are forming a business entity in the US (such as a Wyoming or Delaware LLC), you need an EIN to open a business bank account and file business taxes. If you will not be filing a personal US tax return, you likely do not need an ITIN.",
                },
                {
                  scenario: "Freelancing for US Clients",
                  need: "ITIN (and possibly EIN)",
                  detail:
                    "If US companies are withholding taxes from your payments, you need an ITIN to file a US tax return and claim any refund or treaty benefits. If you also operate through a business entity, you need an EIN as well.",
                },
                {
                  scenario: "Selling on Amazon, Shopify, or Stripe",
                  need: "EIN",
                  detail:
                    "E-commerce platforms require a US tax ID for sellers. An EIN is sufficient if you operate through a business entity. Some platforms accept an ITIN for individual sellers.",
                },
                {
                  scenario: "Investing in US Real Estate",
                  need: "Both EIN and ITIN",
                  detail:
                    "You need an EIN for the LLC or partnership holding the property, and an ITIN for your personal tax return reporting rental income or capital gains.",
                },
                {
                  scenario: "Opening a US Personal Bank Account",
                  need: "ITIN",
                  detail:
                    "Some US banks allow non-residents to open personal accounts with an ITIN. An EIN is for business accounts only and cannot be used to open a personal account.",
                },
                {
                  scenario: "Receiving US Royalties or Dividends",
                  need: "ITIN",
                  detail:
                    "If you receive passive income from US sources (royalties, dividends, interest), you may need an ITIN to file a US tax return and claim treaty benefits to reduce withholding tax.",
                },
              ].map((item) => (
                <StaggerItem key={item.scenario}>
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-base font-bold text-[var(--color-text)]">{item.scenario}</h3>
                      <span className="inline-flex items-center rounded-full bg-[var(--color-blue)]/10 px-3 py-0.5 text-xs font-bold text-[var(--color-blue)] whitespace-nowrap">
                        {item.need}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* EIN vs ITIN vs SSN vs TIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                EIN vs ITIN vs SSN vs <span className="font-display gradient-text">TIN</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  All four of these acronyms refer to tax identification numbers issued or recognized by the IRS. Here is how they relate to each other:
                </p>
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">TIN: The Umbrella Term</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text)]">TIN (Tax Identification Number)</strong> is the umbrella
                  term. It is not a specific number type. It refers to any number used to identify a taxpayer. An
                  SSN, ITIN, and EIN are all types of TINs. When an IRS form or bank asks for your &quot;TIN,&quot; provide the number that matches your situation.
                </p>
                <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">SSN: For US Citizens and Authorized Workers</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text)]">SSN (Social Security Number)</strong> is the most
                  common TIN for individuals. It is issued by the Social Security Administration (SSA) to US citizens, permanent residents, and certain work-visa
                  holders. An SSN authorizes employment in the US, provides access to Social Security benefits, and is required for the IRS online EIN application.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text)]">ITIN</strong> is the personal TIN for individuals who
                  cannot get an SSN. It allows tax filing but does not authorize employment or confer immigration
                  benefits.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text)]">EIN</strong> is the TIN for business entities. It has
                  nothing to do with individual tax filing. It is strictly for businesses.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  For a deeper dive into how these numbers compare, see our guide on{" "}
                  <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    What Is an EIN
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How to Get Each One */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              How to Get <span className="font-display gradient-text">Each One</span>
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateIn delay={0.1} direction="left">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)] font-extrabold text-sm">
                    EIN
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">Get an EIN</h3>
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">With SSN:</strong> Apply online at irs.gov. Instant.
                    Free.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Without SSN:</strong> File Form SS-4 by fax. Takes 4-7
                    business days. Free from IRS, but the fax process is complicated for non-residents.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">With ein.so:</strong> We handle the entire SS-4 process
                    for <strong className="text-[var(--color-text)]">$49</strong> (standard, 14 business days) or{" "}
                    <strong className="text-[var(--color-text)]">$97</strong> (express, 7 business days). No SSN
                    required. No paperwork for you.
                  </p>
                </div>
                <Link
                  href="/apply/"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-6 py-3.5 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                >
                  Get My EIN for $49
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2} direction="right">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)] font-extrabold text-sm">
                    ITIN
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">Get an ITIN</h3>
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Step 1:</strong> Complete IRS Form W-7 with your
                    personal information and reason for applying.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Step 2:</strong> Attach a completed US federal tax
                    return (usually Form 1040-NR) unless you qualify for an exception.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Step 3:</strong> Mail the W-7, tax return, and original
                    identification documents to the IRS, or visit an IRS-authorized Certifying Acceptance Agent
                    (CAA) to avoid mailing originals.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Processing:</strong> 6-11 weeks. You cannot apply
                    online.
                  </p>
                </div>
                <a
                  href="https://wa.me/8801750278508?text=Hi%2C%20I%20need%20help%20with%20an%20ITIN%20application."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5"
                >
                  Ask About ITIN on WhatsApp
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.79 23.329l4.47-1.474A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.168 0-4.19-.586-5.932-1.608l-.425-.253-2.652.875.87-2.578-.278-.442A9.772 9.772 0 012.182 12c0-5.414 4.404-9.818 9.818-9.818S21.818 6.586 21.818 12 17.414 21.818 12 21.818z" />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Related</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              More Tax ID <span className="font-display gradient-text">Comparisons</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: "EIN vs SSN", href: "/ein-vs-ssn/", desc: "How an Employer Identification Number differs from a Social Security Number." },
              { title: "EIN vs Tax ID", href: "/ein-vs-tax-id/", desc: "Understanding the relationship between EINs and the broader Tax ID category." },
              { title: "EIN vs TIN", href: "/ein-vs-tin/", desc: "What separates an EIN from a Taxpayer Identification Number and when you need each." },
              { title: "What Is an EIN?", href: "/what-is-ein/", desc: "Complete guide to Employer Identification Numbers, formats, and who needs one." },
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
            <StaggerItem>
              <span className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
                EIN vs SSN
              </span>
            </StaggerItem>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
                EIN vs TIN
              </span>
            </StaggerItem>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
                EIN vs Tax ID
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Your EIN?"
        subtitle="Fast, simple, $49. No SSN required. We handle the IRS paperwork."
      />
    </>
  );
}
