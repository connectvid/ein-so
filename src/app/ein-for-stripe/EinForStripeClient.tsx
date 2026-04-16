"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForStripeClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Stripe Payments"
        title="EIN for Stripe:"
        titleAccent="Accept US Payments as Non-Resident (2026)"
        description="Stripe requires an EIN for US-based payment processing. Learn how to set up Stripe with your EIN, compare Stripe Atlas, and start accepting payments."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Stripe requires an EIN for all US-based business accounts. Non-US residents can either use Stripe Atlas ($500 for incorporation + EIN) or form their own US LLC and provide an EIN directly. If you already have a US LLC, you just need an EIN -- which ein.so provides for $49.</strong>{" "}
                  Stripe powers millions of businesses worldwide, and your EIN is the key to processing US payments through the platform.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Stripe is the preferred payment processor for SaaS companies, online marketplaces, subscription businesses, and e-commerce platforms. Its developer-friendly APIs and global reach make it the go-to choice for tech-savvy entrepreneurs. But Stripe&apos;s tax compliance requirements mean every US account needs a valid Tax Identification Number.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide explains how to set up Stripe with your EIN, compares Stripe Atlas to the DIY approach, covers tax reporting requirements, and walks non-US residents through the complete setup process. For PayPal-specific guidance, see our <Link href="/ein-for-paypal/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for PayPal guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Does Stripe Require an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does Stripe Require <span className="font-display gradient-text">an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Stripe processed $1 trillion in total payment volume in 2023, supporting 3.4 million businesses across 46 countries. Stripe is a payment facilitator regulated under US tax law. Like PayPal and other payment processors, Stripe must report payments to the IRS using Form 1099-K for any US account that processes more than $600 in a calendar year. To generate these tax forms, Stripe needs your Tax Identification Number -- an EIN for businesses or an SSN for sole proprietors.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">KYC and AML Verification Process</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Stripe also uses your TIN for identity verification, Know Your Customer (KYC) compliance, and anti-money laundering (AML) checks. Stripe rejects approximately 12% of initial applications due to verification failures. During account activation, Stripe validates your business information against IRS and state records. If your EIN and business name do not match IRS records, Stripe cannot activate your account.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For businesses structured as LLCs, corporations, or partnerships, Stripe requires the entity&apos;s EIN -- not the owner&apos;s SSN. Sole proprietors can use either an SSN or EIN, but using an EIN provides better identity protection and presents a more professional image. Regardless of your structure, an EIN is the recommended approach.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For <strong className="text-[var(--color-text)]">non-US residents</strong>, Stripe is one of the primary ways to accept US payments. Whether you run a SaaS product, an online store, or a digital services business, Stripe with an EIN enables you to process US dollar transactions and receive payouts to your US bank account. See our <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">non-resident EIN guide</Link> for the application process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stripe Atlas vs DIY: Which Path Is Right? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Stripe Atlas vs. DIY: Which Path <span className="font-display gradient-text">Is Right for You?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US residents who want to use Stripe have two main paths: Stripe Atlas (an all-in-one incorporation service) or the DIY approach (form your own LLC and get an EIN separately). Here is how they compare:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[var(--color-border)] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[var(--color-surface)]">
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Feature</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Stripe Atlas</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">DIY + ein.so</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-muted)]">
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Cost</td>
                      <td className="px-4 py-3">$500</td>
                      <td className="px-4 py-3">$49-$200 (LLC + EIN)</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Includes LLC</td>
                      <td className="px-4 py-3">Yes (Delaware C-Corp)</td>
                      <td className="px-4 py-3">Choose your state/entity</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">EIN included</td>
                      <td className="px-4 py-3">Yes</td>
                      <td className="px-4 py-3">$49 Standard / $97 Express</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Bank account</td>
                      <td className="px-4 py-3">Silicon Valley Bank</td>
                      <td className="px-4 py-3">Mercury, Relay, etc.</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Entity flexibility</td>
                      <td className="px-4 py-3">Delaware C-Corp only</td>
                      <td className="px-4 py-3">Any state, LLC or Corp</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Timeline</td>
                      <td className="px-4 py-3">1-2 weeks</td>
                      <td className="px-4 py-3">1-3 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Choose Stripe Atlas if:</strong> you want a one-stop solution and do not mind a Delaware C-Corp structure. Atlas is convenient for startups that plan to raise venture capital, since investors prefer C-Corps.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Choose the DIY approach if:</strong> you want an LLC (better for tax pass-through), prefer a specific state (Wyoming for privacy, your home state for convenience), want lower costs, or already have an LLC formed. With ein.so handling your EIN for $49, the DIY path saves hundreds of dollars.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Regardless of which path you choose, the end result is the same: a US business entity with an EIN that can process payments through Stripe. If you already have a US LLC, you just need an EIN. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Add Your EIN to Stripe */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Account Setup</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Add Your EIN <span className="font-display gradient-text">to Stripe?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Adding your EIN to Stripe is part of the account activation process. Here is how it works:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Create Your Stripe Account",
                    desc: "Sign up at stripe.com with your email address. Stripe creates your account instantly, but payment processing is not enabled until you complete activation.",
                  },
                  {
                    step: "2",
                    title: "Start Account Activation",
                    desc: "Click 'Activate your account' in the Stripe dashboard. Stripe walks you through a multi-step form collecting your business information.",
                  },
                  {
                    step: "3",
                    title: "Enter Business Details",
                    desc: "Select your business type (LLC, corporation, sole proprietor), enter your legal business name exactly as it appears on your EIN confirmation letter, and provide your business address.",
                  },
                  {
                    step: "4",
                    title: "Provide Your EIN",
                    desc: "Enter your 9-digit EIN when prompted for a Tax Identification Number. Stripe validates this against IRS records. Newly issued EINs may take up to 2 weeks to appear in the IRS database.",
                  },
                  {
                    step: "5",
                    title: "Add Bank Account for Payouts",
                    desc: "Connect your US bank account to receive Stripe payouts. Enter your routing number and account number. Stripe verifies the account with a small test deposit.",
                  },
                  {
                    step: "6",
                    title: "Complete Verification",
                    desc: "Stripe may request a photo of your passport or driver's license and your LLC formation documents. Upload these through the dashboard. Verification completes within 1-2 business days.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="flex gap-4 bg-white rounded-xl border border-[var(--color-border)] p-5">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-blue)] text-white flex items-center justify-center text-lg font-bold">{item.step}</span>
                      <div>
                        <h3 className="font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stripe Verification Requirements by Country Table */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8 text-center">
              Stripe Verification Requirements <span className="font-display gradient-text">by Country</span>
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
              <table className="w-full text-left text-sm">
                <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Country/Region</th><th className="px-4 py-3 font-semibold">US Entity Required</th><th className="px-4 py-3 font-semibold">EIN Required</th><th className="px-4 py-3 font-semibold">US Bank Required</th><th className="px-4 py-3 font-semibold">Recommended Path</th></tr></thead>
                <tbody>
                  {[
                    { country: "United States (resident)", entity: "No (sole prop OK)", ein: "Recommended", bank: "Yes", path: "IRS.gov online EIN" },
                    { country: "Canada", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes", path: "Wyoming LLC + ein.so" },
                    { country: "United Kingdom", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes", path: "Delaware LLC + ein.so" },
                    { country: "EU Countries", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes", path: "Wyoming LLC + ein.so" },
                    { country: "India", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes", path: "Wyoming LLC + ein.so" },
                    { country: "Brazil", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes", path: "Wyoming LLC + ein.so" },
                    { country: "Nigeria", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes (Mercury/Relay)", path: "Wyoming LLC + ein.so" },
                    { country: "Australia", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes", path: "Delaware LLC + ein.so" },
                    { country: "UAE/Dubai", entity: "Yes (LLC or Corp)", ein: "Yes", bank: "Yes", path: "Wyoming LLC + ein.so" },
                    { country: "Any (via Stripe Atlas)", entity: "Included ($500)", ein: "Included", bank: "SVB included", path: "Stripe Atlas all-in-one" },
                  ].map((row, i) => (
                    <tr key={row.country} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.country}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.entity}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.ein}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.bank}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.path}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stripe Tax Reporting */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Reporting</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does Stripe Handle Tax Reporting <span className="font-display gradient-text">With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">1099-K Reporting Thresholds and Timelines</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Stripe sent over 12 million 1099-K forms in tax year 2023. Stripe reports payment activity to the IRS just like other payment processors. Understanding Stripe&apos;s tax reporting helps you stay compliant and avoid IRS notices.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Form 1099-K:</strong> Stripe issues a 1099-K to the IRS for any US account that processes more than $600 in a calendar year. Your EIN appears on this form. You can access your 1099-K in the Stripe dashboard under Settings &gt; Documents &gt; Tax Forms. Stripe makes these available by January 31 each year.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Stripe Tax:</strong> Stripe also offers Stripe Tax, an automated sales tax calculation and collection tool. If you sell to customers in multiple US states, Stripe Tax handles the complexity of different state tax rates and rules. Your EIN is used when registering with state tax authorities through Stripe.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Connect accounts:</strong> If you operate a marketplace using Stripe Connect, your platform&apos;s EIN is used on tax forms for the platform. Each connected account (your sellers/vendors) needs their own TIN. Stripe handles 1099 generation for connected accounts automatically.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For Shopify sellers using Stripe as a payment gateway (instead of Shopify Payments), your EIN appears on Stripe&apos;s 1099-K, not Shopify&apos;s. Make sure you track which platform reports your income to avoid double-counting. See our <Link href="/ein-for-shopify-sellers/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for Shopify sellers guide</Link> for platform-specific details.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Common Stripe Verification Issues */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Troubleshooting</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What If Stripe Cannot Verify <span className="font-display gradient-text">Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Top 4 Verification Failures and Fixes</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Stripe EIN verification failures affect 12% of new accounts and are almost always fixable within 48 hours. Here are the most frequent issues and solutions:
              </p>

              <div className="space-y-4">
                {[
                  { issue: "EIN is too new", solution: "The IRS takes up to 2 weeks to propagate a new EIN through all its databases. If you just received your EIN, wait 2 weeks before completing Stripe activation. This is the most common verification failure." },
                  { issue: "Business name mismatch", solution: "The legal business name in Stripe must match your EIN confirmation letter exactly. Check for differences in punctuation (LLC vs. L.L.C.), spacing, and capitalization. Even minor differences cause mismatches." },
                  { issue: "Wrong entity type selected", solution: "Make sure you select the correct business type in Stripe (LLC, corporation, sole proprietor). Selecting the wrong type causes Stripe to validate against the wrong IRS records." },
                  { issue: "EIN entered incorrectly", solution: "Verify all 9 digits against your IRS confirmation letter (CP 575). Transposed digits are a common typo. The format should be XX-XXXXXXX." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.solution}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you obtained your EIN through ein.so and are having trouble with Stripe verification, contact us via WhatsApp. We provide free support for verification issues and can provide additional documentation if Stripe requires it.
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

      <CTASection title="Ready to Accept Payments With Stripe?" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
