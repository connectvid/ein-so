"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function WhoNeedsEinClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Complete Guide"
        title="Who Needs an EIN?"
        titleAccent="Complete List of Entities (2026)"
        description="Every business entity type that needs an Employer Identification Number from the IRS -- LLCs, corporations, nonprofits, partnerships, trusts, estates, sole proprietors, non-residents, Amazon sellers, and freelancers."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Any business entity that operates in the United States needs an EIN. This includes LLCs, corporations, nonprofits, partnerships, trusts, estates, and sole proprietors who hire employees. Non-US residents who sell on Amazon, use Stripe or PayPal, or open a US bank account also need an EIN.</strong>{" "}
                  The IRS issues EINs at no charge, but the online application requires an SSN or ITIN. Non-residents who lack these documents must file Form SS-4 by fax. ein.so handles this process for $49 (Standard) or $97 (Express).
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                If you are wondering whether your specific situation requires an EIN, this guide breaks down every entity type and business scenario where the IRS mandates -- or strongly recommends -- obtaining an Employer Identification Number. We cover the most common cases first and then address special situations like non-resident entrepreneurs, Amazon sellers, and freelancers. For a general overview of what an EIN is, visit our <Link href="/what-is-ein/" className="text-[var(--color-blue)] underline">What Is an EIN?</Link> guide.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The short answer is that if you are conducting any business activity in the US -- whether you are a US citizen or a foreign national operating from abroad -- you almost certainly need an EIN. The only major exception is a sole proprietor with no employees who chooses to use their personal SSN for all tax filings. Even in that case, most financial advisors recommend getting an EIN for identity protection purposes.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Complete EIN Requirements by Entity Type</h3>
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[var(--color-navy)] text-white">
                      <th className="px-4 py-3 font-semibold">Entity Type</th>
                      <th className="px-4 py-3 font-semibold">EIN Required?</th>
                      <th className="px-4 py-3 font-semibold">IRS Form Filed</th>
                      <th className="px-4 py-3 font-semibold">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Multi-Member LLC</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1065</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Taxed as partnership by default; each member gets K-1</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Single-Member LLC</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Strongly recommended</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Schedule C (Form 1040)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Required if LLC has employees or files excise taxes</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">C-Corporation</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1120</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">21% flat corporate tax rate; separate legal entity</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">S-Corporation</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1120-S</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Requires Form 2553 S-election; max 100 shareholders</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">501(c)(3) Nonprofit</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 990</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Must have EIN before filing Form 1023</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">General Partnership</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1065</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Created when 2+ people carry on business for profit</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Limited Partnership (LP)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1065</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">State-registered; separate EIN from partners&apos; personal IDs</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Limited Liability Partnership (LLP)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1065</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Common for law firms and accounting firms</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Irrevocable Trust</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 1041</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Separate tax entity from the grantor</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Revocable Trust (grantor alive)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">No (uses grantor&apos;s SSN)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Grantor&apos;s Form 1040</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Needs EIN only after grantor dies or becomes incapacitated</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Estate of Deceased Person</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 706 / 1041</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Executor applies; cannot reuse decedent&apos;s SSN</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Sole Proprietor (with employees)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 941 / 940</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Even 1 part-time employee triggers requirement</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Sole Proprietor (no employees)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Recommended</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Schedule C (Form 1040)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Protects SSN on W-9 forms and invoices</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Foreign-Owned US LLC</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Form 5472 + pro-forma 1120</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">$25,000 penalty per year for non-filing</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Amazon Seller (non-resident)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Yes, always</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">1099-K (Amazon issues)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Required during Seller Central tax interview</td>
                    </tr>
                    <tr className="border-t border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">Freelancer (no entity)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Recommended</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Schedule C (Form 1040)</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">Avoids sharing SSN with every client</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do LLCs Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">LLCs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do LLCs Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Yes, every LLC benefits from having an EIN and most are required to obtain one. Multi-member LLCs are always required to have an EIN because the IRS treats them as partnerships by default, and partnerships must file their own tax returns using an EIN. Single-member LLCs are technically allowed to use the owner&apos;s SSN if they have no employees, but this is rarely practical.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Why Banks and Processors Require an EIN for LLCs</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The moment you want to open a business bank account for your LLC, the bank will ask for an EIN. Chase, Bank of America, Wells Fargo, Mercury, and Relay all require an EIN for LLC accounts. Payment processors like Stripe and PayPal require an EIN to verify your business. If you plan to hire employees -- even a single part-time contractor -- the IRS requires an EIN for employment tax reporting. And using an EIN instead of your SSN on invoices and W-9 forms protects your personal identity.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Non-Resident LLC Owners</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For non-US residents who form a US LLC, an EIN is essential. You cannot use the IRS online application without an SSN or ITIN, so you must file Form SS-4 by fax to 855-215-1627. Our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] underline">EIN for LLC</Link> guide walks you through the entire process. ein.so files your SS-4 for $49 (Standard, 14 business days) or $97 (Express, 7 business days).
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Corporations Need an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Corporations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Corporations Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Every corporation -- whether a C-Corp or an S-Corp -- is required to have an EIN. There are no exceptions. Corporations are separate legal entities from their owners, and the IRS requires each corporation to file its own tax returns using its own EIN. A C-Corp files Form 1120 (subject to a 21% flat corporate tax rate) and an S-Corp files Form 1120-S, both of which require an EIN.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">What Corporations Use an EIN For</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Beyond tax filing, corporations need an EIN to open bank accounts, issue stock, set up payroll, apply for business licenses, and enter into contracts. Investors and venture capital firms will require your EIN during due diligence. If you are incorporating a company in the US as a non-resident, you need to obtain an EIN as one of your first steps after state registration.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Our <Link href="/ein-for-corporation/" className="text-[var(--color-blue)] underline">EIN for Corporation</Link> guide provides specific instructions for both C-Corps and S-Corps. If you are a non-resident incorporating a Delaware or Wyoming company, ein.so handles the SS-4 filing so you can get your EIN without needing an SSN.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Nonprofits Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Nonprofits</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Nonprofits Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Yes, every nonprofit organization needs an EIN, and you must obtain one before you can apply for 501(c)(3) tax-exempt status. The IRS Form 1023 (Application for Recognition of Exemption) requires your EIN -- the filing fee is $600 for the full Form 1023 or $275 for Form 1023-EZ. Without an EIN, your tax-exempt application cannot be processed.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">How Nonprofits Use Their EIN Daily</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Nonprofits use their EIN for every operational task: opening bank accounts, accepting donations, filing annual Form 990 returns (due by the 15th day of the 5th month after the fiscal year ends), issuing donation receipts to contributors, hiring staff, and applying for grants. Grant-making organizations and government agencies require your EIN as part of the application process.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are forming a nonprofit as a non-US resident, you need to file Form SS-4 by fax because the online application requires an SSN or ITIN. Our <Link href="/ein-for-nonprofit/" className="text-[var(--color-blue)] underline">EIN for Nonprofit</Link> guide covers the specific steps and entity type selections for nonprofit organizations on the SS-4 form.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Partnerships Need an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Partnerships</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Partnerships Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Every partnership -- general partnerships, limited partnerships (LPs), and limited liability partnerships (LLPs) -- is required to have an EIN. Partnerships file Form 1065 (US Return of Partnership Income) annually, and this form requires an EIN. Each partner receives a Schedule K-1 from the partnership showing their share of income, deductions, and credits.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                A partnership is created any time two or more people agree to carry on a business together for profit. Even informal arrangements between friends or family members can constitute a partnership under IRS rules. If you are operating a business with one or more co-owners, you need an EIN for the partnership entity itself, separate from any personal tax IDs.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Read our <Link href="/ein-for-partnership/" className="text-[var(--color-blue)] underline">EIN for Partnership</Link> guide for details on how to select the correct entity type and reason for applying on Form SS-4 when you are setting up a partnership.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Trusts and Estates Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Trusts & Estates</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Trusts and Estates Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Irrevocable trusts always need their own EIN because they are separate legal and tax entities from the grantor. Once assets are transferred into an irrevocable trust, the trust must file its own tax return (Form 1041) using its own EIN. Banks and financial institutions require the trust&apos;s EIN to open accounts in the trust&apos;s name.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">When Revocable Trusts Need an EIN</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Revocable living trusts (also called grantor trusts) do not need a separate EIN while the grantor is alive and competent. The grantor&apos;s SSN is used for all tax reporting during this period. However, when the grantor dies or becomes incapacitated, the trust becomes irrevocable and must obtain its own EIN immediately. The successor trustee is responsible for applying.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Estates of deceased persons always need an EIN. The executor or personal representative must apply for an EIN to manage the estate&apos;s finances, file estate tax returns (Form 706 if required), and distribute assets to beneficiaries. See our <Link href="/ein-for-trust/" className="text-[var(--color-blue)] underline">EIN for Trust</Link> and <Link href="/ein-for-estate/" className="text-[var(--color-blue)] underline">EIN for Estate</Link> guides for specific instructions.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Sole Proprietors Need an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Sole Proprietors</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Sole Proprietors Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Sole Proprietors With Employees</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Sole proprietors who have employees are required to have an EIN for payroll tax purposes. If you hire even 1 employee -- including a spouse -- you must obtain an EIN and use it to report employment taxes on Form 941 (quarterly) and Form 940 (annual FUTA). Sole proprietors who file excise tax returns (Form 720) or who have a Keogh retirement plan are also required to have an EIN.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Sole Proprietors Without Employees</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Sole proprietors with no employees are not technically required to have an EIN. They can use their SSN on tax returns, W-9 forms, and other IRS documents. However, there are strong practical reasons to get one. Using an EIN instead of your SSN on invoices, contracts, and vendor forms reduces your risk of identity theft. Many clients and companies prefer to work with businesses that have an EIN because it appears more professional and established.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Our <Link href="/ein-for-sole-proprietor/" className="text-[var(--color-blue)] underline">EIN for Sole Proprietor</Link> guide explains how to fill out Form SS-4 when you are applying as a sole proprietor, including which entity type to select and what reason for applying to choose.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Non-US Residents Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Non-Residents</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Non-US Residents Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US residents need an EIN whenever they conduct business in the United States. This includes forming a US LLC or corporation, selling on Amazon.com, accepting payments through US payment processors like Stripe or PayPal, opening a US bank account, or investing in US real estate. The IRS requires a tax identification number for all of these activities, and an EIN is the correct ID for non-residents who lack an SSN or ITIN.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">How Non-Residents Apply for an EIN</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS online EIN application requires an SSN or ITIN, which most foreign nationals do not have. Non-residents must apply by fax using Form SS-4 (fax number: 855-215-1627) or by calling the IRS international line at 267-941-1099 (Monday-Friday, 6 AM to 11 PM Eastern). The fax method is the most reliable -- the IRS processes faxed SS-4 forms within 4 business days and returns the EIN by fax to the number you provide.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so exists specifically to solve this problem. We complete and file Form SS-4 with the IRS on your behalf for $49 (Standard, 14 business days) or $97 (Express, 7 business days). You do not need an SSN, ITIN, or US address. Read our <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] underline">EIN for Non-Residents</Link> guide for the full process, or <Link href="/apply/" className="text-[var(--color-blue)] underline">apply now</Link> to get started.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Amazon Sellers Need an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Amazon Sellers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Amazon Sellers Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Amazon requires every seller to provide a Tax Identification Number during Seller Central registration. US-based individual sellers can use their SSN, but this exposes your personal information in Amazon&apos;s system. Non-US sellers must provide an EIN because they do not have an SSN. For both groups, using an EIN is the recommended approach.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Amazon FBA and 1099-K Reporting</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                An EIN is particularly important for Amazon FBA (Fulfillment by Amazon) sellers because Amazon uses it for 1099-K reporting. If your gross sales exceed the IRS $5,000 reporting threshold (lowered from $20,000 in 2024), Amazon will issue a 1099-K tied to your EIN. Having a dedicated business EIN keeps your Amazon income cleanly separated from your personal finances and simplifies tax filing.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-resident Amazon sellers face an additional challenge: Amazon&apos;s identity verification process requires a valid tax ID, and the IRS online EIN tool does not work without an SSN. Our <Link href="/ein-for-amazon-sellers/" className="text-[var(--color-blue)] underline">EIN for Amazon Sellers</Link> guide walks you through getting an EIN specifically for your Amazon business, and ein.so can file your SS-4 for $49 (Standard) or $97 (Express).
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Do Freelancers Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Freelancers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Do Freelancers Need <span className="font-display gradient-text">an EIN?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Freelancers who operate as sole proprietors without employees are not legally required to have an EIN. They can use their SSN on W-9 forms and tax returns. However, freelancers who form an LLC, hire subcontractors, or want to protect their SSN from exposure on client paperwork should get an EIN.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Protecting Your SSN on W-9 Forms</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Every time a client asks you to fill out a W-9, you must provide a Tax Identification Number. If you use your SSN, that number is now in the client&apos;s records and visible to their accounting staff. An EIN eliminates this risk. Many freelancers find that having an EIN makes them appear more legitimate and professional to potential clients, especially Fortune 500 companies with formal vendor onboarding processes.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US freelancers who work with US clients face an additional requirement: clients will often withhold 30% of payments unless you provide a valid US tax ID. An EIN satisfies this requirement and allows you to claim treaty benefits by filing Form W-8BEN-E. Visit our <Link href="/ein-for-freelancers/" className="text-[var(--color-blue)] underline">EIN for Freelancers</Link> guide to learn more about how an EIN benefits your freelance business.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Quick Reference: Who Needs an EIN? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Summary</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Who Needs an EIN? <span className="font-display gradient-text">Quick Reference</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Here is a quick reference table summarizing which entities are required to have an EIN and which ones should strongly consider getting one:
              </p>

              <StaggerContainer className="space-y-3">
                {[
                  { entity: "Multi-member LLC", status: "Required", link: "/ein-for-llc/" },
                  { entity: "Single-member LLC", status: "Strongly recommended", link: "/ein-for-llc/" },
                  { entity: "C-Corporation", status: "Required", link: "/ein-for-corporation/" },
                  { entity: "S-Corporation", status: "Required", link: "/ein-for-corporation/" },
                  { entity: "Nonprofit", status: "Required", link: "/ein-for-nonprofit/" },
                  { entity: "Partnership", status: "Required", link: "/ein-for-partnership/" },
                  { entity: "Irrevocable trust", status: "Required", link: "/ein-for-trust/" },
                  { entity: "Estate", status: "Required", link: "/ein-for-estate/" },
                  { entity: "Sole proprietor with employees", status: "Required", link: "/ein-for-sole-proprietor/" },
                  { entity: "Sole proprietor without employees", status: "Recommended", link: "/ein-for-sole-proprietor/" },
                  { entity: "Non-US resident with US business", status: "Required", link: "/ein-for-non-residents/" },
                  { entity: "Amazon seller (non-resident)", status: "Required", link: "/ein-for-amazon-sellers/" },
                  { entity: "Freelancer", status: "Recommended", link: "/ein-for-freelancers/" },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-center justify-between bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-6 py-4">
                      <Link href={item.link} className="text-[var(--color-blue)] underline font-semibold">{item.entity}</Link>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${item.status === "Required" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {item.status}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are unsure whether your specific situation requires an EIN, the safest approach is to get one. There is no downside to having an EIN, and it protects your personal SSN from unnecessary exposure. Ready to get started? <Link href="/apply/" className="text-[var(--color-blue)] underline">Apply for your EIN now</Link> -- ein.so offers Standard ($49) and Express ($97) packages for non-residents.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Explore All Guides</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">All Business Types & Audiences</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: "EIN for LLC", href: "/ein-for-llc/", desc: "How to get an EIN for your LLC, including single-member and multi-member LLCs." },
              { title: "EIN for Corporation", href: "/ein-for-corporation/", desc: "EIN requirements for C-Corps and S-Corps, including non-resident incorporations." },
              { title: "EIN for Nonprofit", href: "/ein-for-nonprofit/", desc: "Get your EIN before applying for 501(c)(3) tax-exempt status." },
              { title: "EIN for Partnership", href: "/ein-for-partnership/", desc: "EIN requirements for general partnerships, LPs, and LLPs." },
              { title: "EIN for Sole Proprietor", href: "/ein-for-sole-proprietor/", desc: "When sole proprietors need an EIN and why most should get one." },
              { title: "EIN for Trust", href: "/ein-for-trust/", desc: "EIN requirements for irrevocable trusts, revocable trusts, and grantor trusts." },
              { title: "EIN for Estate", href: "/ein-for-estate/", desc: "How executors obtain an EIN for estates of deceased persons." },
              { title: "EIN for S-Corp", href: "/ein-for-scorp/", desc: "S-Corporation EIN application process and tax election requirements." },
              { title: "EIN for Non-Residents", href: "/ein-for-non-residents/", desc: "How non-US residents apply for an EIN without an SSN or ITIN." },
              { title: "EIN for Amazon Sellers", href: "/ein-for-amazon-sellers/", desc: "Get an EIN for Amazon Seller Central registration and 1099-K reporting." },
              { title: "EIN for Shopify Sellers", href: "/ein-for-shopify-sellers/", desc: "EIN setup for Shopify store owners and Shopify Payments verification." },
              { title: "EIN for Freelancers", href: "/ein-for-freelancers/", desc: "Protect your SSN and appear more professional with a dedicated EIN." },
              { title: "EIN for Real Estate Investors", href: "/ein-for-real-estate-investors/", desc: "EIN requirements for real estate LLCs, rental properties, and investment entities." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group block bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-blue)]/30 transition-colors">
                <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-blue)] transition-colors mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
