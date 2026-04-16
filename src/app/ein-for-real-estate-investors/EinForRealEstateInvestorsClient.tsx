"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForRealEstateInvestorsClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Real Estate Investors"
        title="EIN for Real Estate Investors:"
        titleAccent="LLC & FIRPTA Guide (2026)"
        description="Real estate investors need an EIN for their LLC, rental income reporting, and FIRPTA compliance. Non-resident investors use the fax method to apply."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Real estate investors need an EIN to hold property in an LLC, report rental income to the IRS, open property-specific bank accounts, and comply with FIRPTA withholding requirements. Non-US investors must have an EIN to purchase, manage, and sell US real estate.</strong>{" "}
                  Whether you own one rental property or a portfolio of commercial buildings, your EIN is the tax identifier that ties your real estate investments to the IRS.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                US real estate attracts investors worldwide because of its stable returns, strong legal protections, and transparent market. However, the tax and legal structure requires proper identification. Your EIN serves as the foundation for LLC formation, banking, tax filing, and -- for non-US investors -- FIRPTA compliance when selling property.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers everything real estate investors need to know about EINs: why you need one, how LLCs protect your assets, what FIRPTA means for non-resident investors, and the step-by-step process from EIN application to your first property purchase. For general LLC information, see our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for LLC guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Real Estate Investors Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Real Estate Investors <span className="font-display gradient-text">Need an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                US commercial real estate is valued at $20.7 trillion, and non-resident investors purchased $53.3 billion in US properties in 2024. Real estate investing involves multiple financial and legal processes that require a Tax Identification Number. Your EIN is used in virtually every aspect of property ownership and management.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">5 EIN Requirements for Real Estate Investors</h3>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    title: "LLC Formation and Maintenance",
                    desc: "Most real estate investors hold each property (or group of properties) in a separate LLC for liability protection. Each LLC must have its own EIN for tax filing, bank account opening, and legal identification.",
                  },
                  {
                    title: "Rental Income Reporting",
                    desc: "Rental income must be reported to the IRS on Schedule E or Form 1065 (for partnerships). Your EIN identifies your rental business on these forms. Property managers also need your EIN to issue 1099 forms for rental income.",
                  },
                  {
                    title: "Bank Account for Each Property",
                    desc: "Best practice is to maintain a separate bank account for each rental property or LLC. Banks require an EIN to open business accounts. This separation makes accounting cleaner and strengthens the liability protection of your LLC structure.",
                  },
                  {
                    title: "Contractor and Vendor Payments",
                    desc: "When you hire contractors for repairs, renovations, or property management, you may need to issue 1099 forms for payments over $600. Your EIN appears on these forms as the payer identifier.",
                  },
                  {
                    title: "Mortgage and Financing",
                    desc: "Commercial lenders and some residential lenders require an EIN when the borrower is an LLC. Your EIN is used on loan applications, closing documents, and mortgage interest deduction forms.",
                  },
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

      {/* How Does an LLC Protect Real Estate Investors? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Asset Protection</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does an LLC Protect <span className="font-display gradient-text">Real Estate Investors?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                An LLC (Limited Liability Company) creates a legal barrier between your rental properties and your personal assets. If a tenant slips on an icy walkway and sues, they can only go after the LLC&apos;s assets -- not your personal savings, home, or other investments. This is why nearly every experienced real estate investor uses LLCs.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The standard structure is one LLC per property or one LLC per group of related properties. Each LLC needs its own EIN. This means a real estate investor with five properties in five LLCs needs five EINs. While this sounds like a lot of paperwork, it provides maximum liability isolation -- a lawsuit involving one property cannot affect the others.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Series LLCs</strong> are available in some states (Delaware, Nevada, Texas, Illinois) and offer a more streamlined approach. A series LLC is a single parent LLC with multiple &quot;series&quot; or child entities. Each series can hold a separate property with isolated liability. However, each series still needs its own EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Popular states for real estate LLCs include <strong className="text-[var(--color-text)]">Wyoming</strong> (strong asset protection, no state income tax, low fees), <strong className="text-[var(--color-text)]">Delaware</strong> (business-friendly courts, privacy protections), and <strong className="text-[var(--color-text)]">the state where the property is located</strong> (avoids foreign LLC registration requirements). For LLC EIN details, see our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for LLC guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Is FIRPTA and How Does It Affect Non-US Investors? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">FIRPTA Compliance</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Is FIRPTA and How Does It Affect <span className="font-display gradient-text">Non-US Real Estate Investors?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                FIRPTA (Foreign Investment in Real Property Tax Act) requires 15% withholding on the gross sale price when a non-US person sells US real estate. On a $500,000 sale, that is $75,000 withheld upfront. Reduced rates of 10% apply when the sale price is $1 million or less and the buyer intends to use the property as a residence. 0% withholding applies when the sale price is $300,000 or less under the same conditions.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">FIRPTA Withholding Rates by Sale Price</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Sale Price</th><th className="px-4 py-3 font-semibold">Withholding Rate</th><th className="px-4 py-3 font-semibold">Amount Withheld (Example)</th><th className="px-4 py-3 font-semibold">Condition</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">$300,000 or less</td><td className="px-4 py-3 text-[var(--color-text-muted)]">0%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$0</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Buyer uses as residence</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">$300,001 - $1,000,000</td><td className="px-4 py-3 text-[var(--color-text-muted)]">10%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$50,000 (on $500K)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Buyer uses as residence</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Over $1,000,000</td><td className="px-4 py-3 text-[var(--color-text-muted)]">15%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$225,000 (on $1.5M)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">All sales</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Any price (investor buyer)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">15%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$75,000 (on $500K)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Buyer is not end-user</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For example, if a non-US investor sells a US property for $500,000, the buyer must withhold $75,000 (15%) and remit it to the IRS using Form 8288. The foreign seller can then file a US tax return to claim a refund if the actual tax owed is less than the amount withheld.
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">How your EIN is used in FIRPTA transactions:</h3>
                <ul className="space-y-3 text-[var(--color-text-muted)]">
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-xs font-bold">1</span>
                    <span><strong className="text-[var(--color-text)]">Form 8288</strong> -- The buyer files this form to remit the withholding tax. Your EIN identifies you as the foreign seller.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-xs font-bold">2</span>
                    <span><strong className="text-[var(--color-text)]">Form 8288-A</strong> -- This is the statement of withholding that you receive as proof of the tax paid. Your EIN appears here.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-xs font-bold">3</span>
                    <span><strong className="text-[var(--color-text)]">Form 1040-NR</strong> -- You file this non-resident tax return to report the sale, claim deductions, and request a refund of excess withholding. Your EIN is on this form.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-xs font-bold">4</span>
                    <span><strong className="text-[var(--color-text)]">Form 8288-B</strong> -- If you want to apply for reduced withholding before the sale (because your actual tax will be less than 15%), you file this form with your EIN.</span>
                  </li>
                </ul>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Without an EIN, non-US real estate investors cannot properly complete FIRPTA paperwork, file for reduced withholding, or claim refunds. Getting your EIN before purchasing property sets you up for smooth transactions throughout your investment lifecycle. Learn more about the <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">non-resident EIN process</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Rental Income and Tax Reporting */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Reporting</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Real Estate Investors Report <span className="font-display gradient-text">Rental Income With Their EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                4 entity structures exist for rental income reporting, each with different forms and tax rates. Non-residents who make the Section 871(d) election save 10-20% compared to the flat 30% withholding rate. Here is how each structure works:
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Rental Income Tax Treatment by Entity Type</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Entity Type</th><th className="px-4 py-3 font-semibold">Tax Form</th><th className="px-4 py-3 font-semibold">Tax Rate</th><th className="px-4 py-3 font-semibold">Deductions Allowed?</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Sole Proprietor (US)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Schedule E</td><td className="px-4 py-3 text-[var(--color-text-muted)]">10-37% (graduated)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Yes (mortgage, depreciation, repairs)</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Single-Member LLC</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Schedule E</td><td className="px-4 py-3 text-[var(--color-text-muted)]">10-37% (graduated)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Multi-Member LLC</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1065 + K-1</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Pass-through to members</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Non-Resident (with 871(d))</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1040-NR</td><td className="px-4 py-3 text-[var(--color-text-muted)]">10-37% (graduated)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Yes</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">Non-Resident (without 871(d))</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1040-NR</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Flat 30%</td><td className="px-4 py-3 text-[var(--color-text-muted)]">No</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                {[
                  { structure: "Sole Proprietor (Schedule E)", detail: "If you own rental property in your personal name, report rental income on Schedule E of your personal Form 1040. You can use your EIN or SSN. Deductible expenses include mortgage interest, property taxes, insurance, repairs, depreciation, and property management fees." },
                  { structure: "Single-Member LLC (Schedule E)", detail: "A single-member LLC is a disregarded entity for tax purposes. You report rental income on Schedule E, the same as a sole proprietor. However, the LLC has its own EIN used for banking, contracts, and legal purposes." },
                  { structure: "Multi-Member LLC (Form 1065)", detail: "A multi-member LLC files Form 1065 (Partnership Return) with its EIN. The LLC issues Schedule K-1 to each member, who then reports their share of income on their personal tax return. Each member's share of rental income, deductions, and credits flows through the K-1." },
                  { structure: "Non-Resident Investor (Form 1040-NR)", detail: "Non-US investors report US rental income on Form 1040-NR using their EIN. Rental income is taxed at graduated rates if you make a Section 871(d) election, which allows you to deduct expenses. Without this election, rental income is taxed at a flat 30%." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.structure}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Regardless of your structure, keep meticulous records of all rental income and expenses. Your EIN ties everything together -- from the bank account where rent deposits land to the tax return where you report income. For banking setup, see our <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank account guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Step-by-Step: EIN to Property Purchase */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Is the Step-by-Step Path From EIN <span className="font-display gradient-text">to Property Purchase?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Here is the complete roadmap for real estate investors, especially non-US residents, from EIN application to closing on your first US property.
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Form a US LLC",
                    desc: "Register an LLC in a business-friendly state. Wyoming is popular for its strong asset protection laws and low annual fees. Delaware is preferred for its business-friendly court system. Non-residents can form an LLC remotely through formation services.",
                  },
                  {
                    step: "2",
                    title: "Get Your EIN",
                    desc: "Apply for an EIN through ein.so ($49 Standard, $97 Express). Provide your LLC formation documents, passport, and foreign address. We file Form SS-4 with the IRS and deliver your EIN by email and WhatsApp.",
                    link: "/apply/",
                  },
                  {
                    step: "3",
                    title: "Open a US Bank Account",
                    desc: "Use your EIN and LLC documents to open a US bank account. Mercury and Relay accept non-resident LLC applications. This account handles rent collection, expense payments, and property transactions.",
                    link: "/ein-for-bank-account/",
                  },
                  {
                    step: "4",
                    title: "Find and Purchase Property",
                    desc: "Work with a real estate agent and attorney who specialize in investor transactions. The title company will need your LLC information and EIN for closing documents. Fund the purchase through your LLC bank account.",
                  },
                  {
                    step: "5",
                    title: "Set Up Property Management",
                    desc: "Hire a property management company or manage the property yourself. Provide your EIN on the management agreement. The manager will deposit rent into your LLC bank account and handle tenant relations.",
                  },
                  {
                    step: "6",
                    title: "File Annual Tax Returns",
                    desc: "Report rental income and expenses on your tax return using your EIN. Claim deductions for mortgage interest, property taxes, insurance, repairs, and depreciation. Non-residents file Form 1040-NR.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="flex gap-4 bg-white rounded-xl border border-[var(--color-border)] p-5">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-blue)] text-white flex items-center justify-center text-lg font-bold">{item.step}</span>
                      <div>
                        <h3 className="font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                        {"link" in item && item.link && (
                          <Link href={item.link} className="text-sm text-[var(--color-blue)] hover:underline font-semibold mt-1 inline-block">
                            Learn more
                          </Link>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
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

      <CTASection title="Ready to Invest in US Real Estate?" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
