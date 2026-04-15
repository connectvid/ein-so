"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForShopifySellersClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Shopify Sellers"
        title="EIN for Shopify Sellers:"
        titleAccent="Tax Setup Guide (2026)"
        description="Shopify requires tax information for US sales. Learn how to get your EIN, set up Shopify Payments, and handle tax compliance whether you sell from the US or abroad."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Shopify sellers need an EIN to activate Shopify Payments, comply with IRS tax reporting requirements, and receive payouts from US sales. Non-US sellers must have an EIN because they lack an SSN. US sellers should use an EIN to protect their SSN on tax forms.</strong>{" "}
                  Without a valid Tax Identification Number, Shopify cannot process your tax information, and you risk account limitations or payment holds.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Shopify powers over 4 million online stores worldwide, making it the most popular e-commerce platform for independent sellers. Whether you sell physical products, digital downloads, or services, Shopify needs your tax information to comply with IRS reporting rules. For non-US sellers, this means getting an EIN before you can fully activate your store.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers everything Shopify sellers need to know about EINs: why Shopify requires one, how to get one as a non-US seller, how to configure your Shopify tax settings, and how to connect your EIN to Shopify Payments for seamless payouts. If you also sell on Amazon, see our <Link href="/ein-for-amazon-sellers/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for Amazon sellers guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do Shopify Sellers Need an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Do Shopify Sellers Need <span className="font-display gradient-text">an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Shopify is a payment facilitator, which means it processes transactions on behalf of sellers. Under US tax law, Shopify must report seller income to the IRS using Form 1099-K when a seller exceeds $600 in gross sales during a calendar year. To generate this form, Shopify needs your Tax Identification Number -- either an SSN or an EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Beyond tax reporting, Shopify Payments (the built-in payment processor) requires a TIN during activation. Without Shopify Payments, you are limited to third-party payment gateways that charge additional transaction fees. Activating Shopify Payments with your EIN gives you the lowest transaction rates and the smoothest checkout experience for your customers.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For <strong className="text-[var(--color-text)]">non-US sellers</strong>, the EIN is your gateway to the US e-commerce market. You cannot activate Shopify Payments, handle US tax obligations, or open a US bank account for payouts without one. The IRS online EIN application requires an SSN, so non-US sellers must apply by fax using Form SS-4 -- or use a service like ein.so that handles the process for $49.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For <strong className="text-[var(--color-text)]">US sellers</strong>, using an EIN instead of your SSN keeps your most sensitive personal identifier off Shopify&apos;s systems and the 1099-K forms sent to the IRS. This is a simple but effective identity protection measure. Learn more about <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">who needs an EIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Set Up Shopify Payments With Your EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Setup Guide</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Set Up Shopify Payments <span className="font-display gradient-text">With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Shopify Payments is the built-in payment processor that gives you the lowest transaction fees and the most seamless checkout experience. Setting it up with your EIN takes just a few minutes once you have your EIN confirmation letter from the IRS.
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 1: Access Payment Settings</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">In your Shopify admin dashboard, navigate to <strong className="text-[var(--color-text)]">Settings &gt; Payments</strong>. Click <strong className="text-[var(--color-text)]">&quot;Activate Shopify Payments&quot;</strong> or <strong className="text-[var(--color-text)]">&quot;Manage&quot;</strong> if already partially set up.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 2: Enter Business Information</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Enter your legal business name exactly as it appears on your EIN confirmation letter. Select your business type (sole proprietor, LLC, corporation). Enter your business address and phone number.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 3: Provide Your EIN</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">When prompted for a Tax Identification Number, enter your 9-digit EIN in the format XX-XXXXXXX. Double-check every digit against your IRS confirmation letter. A single incorrect digit causes validation failure.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 4: Connect Your Bank Account</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Link a US bank account to receive Shopify payouts. The bank account should be in your business name (matching your EIN). Non-US sellers can use Mercury, Relay, or similar banks that accept non-resident LLC owners. See our <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for bank account guide</Link>.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 5: Verify and Activate</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Shopify validates your EIN with the IRS, which takes 24-48 hours. Once verified, Shopify Payments is fully active. If you have a new EIN, allow 2 weeks for IRS database propagation before activating.</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How Do Non-US Shopify Sellers Get an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">International Sellers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Non-US Shopify Sellers <span className="font-display gradient-text">Get an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US residents cannot use the IRS online EIN application because it requires an SSN or ITIN. The alternative is filing Form SS-4 by fax directly to the IRS. This is the official method the IRS provides for applicants without an SSN, and it works regardless of your country of residence.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so specializes in this process. We prepare your Form SS-4 with the correct entity type, verify every field against IRS requirements, fax it to the IRS, track the response, and deliver your EIN by email and WhatsApp. The process takes 14 business days with our Standard service ($49) or 7 business days with Express ($97).
              </p>

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">What you need to apply:</h3>
                <ul className="space-y-2 text-[var(--color-text-muted)]">
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Valid passport (any country)</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>US LLC formation documents (if applicable)</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Your foreign home address</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span className="line-through">SSN or ITIN (not required)</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span className="line-through">US visa or physical presence (not required)</span>
                  </li>
                </ul>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For the complete walkthrough of the non-resident EIN process, see our <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents guide</Link>. Ready to get started? <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply for your EIN now</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Shopify Tax Configuration */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Configuration</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Configure Shopify Tax Settings <span className="font-display gradient-text">With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Beyond Shopify Payments, your EIN is used in Shopify&apos;s tax settings to handle sales tax collection and income tax reporting. Proper tax configuration prevents compliance issues and ensures smooth operations as your store grows.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                In your Shopify admin, go to <strong className="text-[var(--color-text)]">Settings &gt; Taxes and Duties</strong>. Here you configure which regions you collect sales tax in, your tax registration numbers for each state, and your federal EIN. If you use Shopify Tax (the automated tax calculation feature), your EIN is used to register with state tax authorities.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Sales tax nexus</strong> is an important concept for Shopify sellers. If you have economic nexus in a state ($100,000 in sales or 200 transactions), you must collect and remit sales tax in that state. Shopify Tax automates this calculation, but you need to register with each state&apos;s tax authority using your EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For non-US sellers, sales tax can be complex. Many non-US Shopify sellers use services like TaxJar or Avalara (both integrate with Shopify) to automate sales tax compliance. Your EIN is required to set up these services and to register with state tax authorities.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                At year end, Shopify generates a 1099-K if your gross sales exceed $600. This form is sent to the IRS with your EIN. You use this information when filing your business tax return. If you operate through an LLC, see our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for LLC guide</Link> for more on tax filing requirements.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Shopify vs Amazon: EIN Requirements */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Platform Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does Shopify Compare to Amazon <span className="font-display gradient-text">for EIN Requirements?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Both Shopify and Amazon require a TIN for US tax compliance, but the implementation differs. Amazon blocks your account entirely until you complete the tax interview. Shopify lets you create a store and add products, but restricts payment processing until you provide your EIN.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[var(--color-border)] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-white">
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Requirement</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Shopify</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Amazon</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-muted)]">
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">EIN needed to create account</td>
                      <td className="px-4 py-3">No</td>
                      <td className="px-4 py-3">Yes (tax interview)</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">EIN needed for payments</td>
                      <td className="px-4 py-3">Yes (Shopify Payments)</td>
                      <td className="px-4 py-3">Yes (required for all sales)</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">1099-K reporting</td>
                      <td className="px-4 py-3">Over $600</td>
                      <td className="px-4 py-3">Over $600</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">SSN alternative</td>
                      <td className="px-4 py-3">EIN accepted</td>
                      <td className="px-4 py-3">EIN accepted</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Non-US seller support</td>
                      <td className="px-4 py-3">EIN required for US payments</td>
                      <td className="px-4 py-3">EIN required for registration</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Many sellers use both platforms simultaneously -- Shopify for their own branded store and Amazon for marketplace reach. The good news is that one EIN works for both. For details on the Amazon side, see our <Link href="/ein-for-amazon-sellers/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for Amazon sellers guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Next Steps After Getting Your EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Next Steps</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Should Shopify Sellers Do <span className="font-display gradient-text">After Getting Their EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN unlocks the full Shopify selling experience. Here is the step-by-step roadmap from EIN to your first Shopify sale:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Open a US Bank Account",
                    desc: "Use your EIN and LLC formation documents to open a US bank account. This account receives your Shopify payouts. Online banks like Mercury and Relay accept non-resident applications.",
                    link: "/ein-for-bank-account/",
                  },
                  {
                    step: "2",
                    title: "Activate Shopify Payments",
                    desc: "Enter your EIN in Shopify Payments settings, connect your US bank account, and verify your business information. Wait 2 weeks after receiving a new EIN for IRS database propagation.",
                  },
                  {
                    step: "3",
                    title: "Configure Tax Settings",
                    desc: "Set up sales tax collection in Shopify under Settings > Taxes and Duties. Register with state tax authorities if you have nexus. Consider using Shopify Tax or a third-party service for automation.",
                  },
                  {
                    step: "4",
                    title: "Build and Launch Your Store",
                    desc: "Add your products, customize your theme, set up shipping zones, and launch. With Shopify Payments active and taxes configured, you are ready to accept orders and receive payouts.",
                  },
                  {
                    step: "5",
                    title: "Plan for Tax Compliance",
                    desc: "Track your income and expenses throughout the year. Shopify generates 1099-K forms at year end. Consult a tax professional to ensure you meet all filing requirements for your entity type.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="flex gap-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
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

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The entire process from EIN application to first Shopify sale takes 2-4 weeks. Getting your EIN is the fastest step when you use ein.so. <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Start your EIN application today</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
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

      <CTASection title="Ready to Sell on Shopify?" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
