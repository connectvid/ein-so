"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForPaypalClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="PayPal Business"
        title="EIN for PayPal Business Account:"
        titleAccent="Setup Guide (2026)"
        description="PayPal requires an EIN for business accounts. Learn how to set up PayPal Business, handle tax reporting, and receive US payments as a non-resident."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>PayPal requires a Tax Identification Number for business accounts because it must report payments to the IRS using Form 1099-K. Non-US residents need an EIN to set up a PayPal Business account for receiving US payments. US residents should use an EIN to keep their SSN off PayPal&apos;s systems.</strong>{" "}
                  A PayPal Business account with an EIN gives you higher transaction limits, business branding, and multi-user access that personal accounts lack.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                PayPal processes over $1.5 trillion in payment volume annually and is the most widely recognized payment platform in the world. For freelancers, e-commerce sellers, and service providers, a PayPal Business account is often the first payment method they set up. But PayPal&apos;s tax compliance requirements mean you need a TIN before your business account is fully functional.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers everything you need to know about using an EIN with PayPal: why PayPal requires one, how to set up a business account, what happens with tax reporting, and how non-US residents can get started. For other payment processors, see our <Link href="/ein-for-stripe/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for Stripe guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Does PayPal Require an EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Compliance</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Does PayPal Require <span className="font-display gradient-text">an EIN for Business Accounts?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                PayPal is classified as a payment settlement entity under US tax law. This means PayPal must report payments to the IRS using Form 1099-K for any account that receives more than $600 in goods and services payments during a calendar year. To generate these tax forms, PayPal needs your Tax Identification Number.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For personal accounts, PayPal accepts your SSN. For business accounts -- which provide higher limits, business branding, invoicing tools, and multi-user access -- PayPal requires an EIN if you operate as an LLC, corporation, or partnership. Sole proprietors can technically use an SSN for a business account, but using an EIN is strongly recommended for identity protection.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                PayPal also uses your TIN to verify your identity and comply with anti-money laundering (AML) regulations. If you do not provide a valid TIN, PayPal may limit your account, hold your funds, or suspend your ability to receive payments. Getting your EIN set up before you start receiving payments avoids these disruptions.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For <strong className="text-[var(--color-text)]">non-US residents</strong>, an EIN is the only practical option for a PayPal US business account. You need a US LLC, an EIN, and a US bank account. ein.so handles the EIN portion for $49 (Standard) or $97 (Express). For the complete non-resident process, see <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for non-US residents</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Set Up a PayPal Business Account With Your EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Setup Guide</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Set Up a PayPal Business Account <span className="font-display gradient-text">With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Setting up a PayPal Business account with your EIN is straightforward once you have your EIN confirmation letter. Here is the step-by-step process:
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 1: Create a PayPal Business Account</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Go to paypal.com and select <strong className="text-[var(--color-text)]">&quot;Sign Up&quot; &gt; &quot;Business Account.&quot;</strong> Enter your email address and create a password. You can also upgrade an existing personal account to a business account.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 2: Enter Business Information</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Provide your legal business name (must match your EIN confirmation letter exactly), business type (LLC, corporation, sole proprietor), business address, phone number, and website URL.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 3: Provide Your EIN</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">When prompted for a Tax Identification Number, enter your 9-digit EIN. PayPal validates this with the IRS. Make sure the business name and EIN match your IRS records exactly. A mismatch causes verification failure.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 4: Link Your Bank Account</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Connect a US bank account to receive PayPal payouts. The bank account should be in your business name. PayPal verifies the bank account with two small test deposits, which takes 7 business days.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Step 5: Complete Verification</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">PayPal may request additional verification documents, such as a business license, utility bill, or your LLC formation documents. Upload these through the PayPal Resolution Center. Verification typically completes within 3-5 business days.</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* PayPal Tax Reporting: 1099-K */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Reporting</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does PayPal Handle Tax Reporting <span className="font-display gradient-text">With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                PayPal reports your payment activity to the IRS using Form 1099-K. Understanding how this works helps you plan for tax season and avoid surprises.
              </p>

              <div className="space-y-4">
                {[
                  { topic: "1099-K Threshold", detail: "For 2026, PayPal must send a 1099-K to the IRS for any account that receives more than $600 in goods and services payments. This is the gross amount -- before fees, refunds, or adjustments. Your EIN appears on this form." },
                  { topic: "What Gets Reported", detail: "Only goods and services payments are reported on 1099-K. Personal payments (friends and family) are not reported. PayPal categorizes each transaction, but it is your responsibility to ensure payments are properly classified." },
                  { topic: "When You Receive the 1099-K", detail: "PayPal sends 1099-K forms by January 31 each year for the previous tax year. You can access your 1099-K in your PayPal account under Activity > Statements > Tax Documents. Use this form when preparing your business tax return." },
                  { topic: "State Reporting", detail: "Some states have their own 1099-K thresholds that may differ from the federal threshold. PayPal complies with state reporting requirements automatically. Your EIN is used for both federal and state tax reporting." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.topic}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN is the link between your PayPal activity and your IRS tax records. When you file your business tax return, the income reported on your 1099-K (identified by your EIN) must match what you report. Discrepancies trigger IRS notices, so accurate record-keeping is essential.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* PayPal for Non-US Residents */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Non-US Residents</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Non-US Residents Set Up <span className="font-display gradient-text">PayPal Business With an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US residents who want a US PayPal Business account need three things: a US LLC, an EIN, and a US bank account. Here is the typical path:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Form a US LLC",
                    desc: "Register an LLC in a state like Wyoming or Delaware. Many formation services handle this remotely for non-residents. Your LLC gives you a legal US business entity.",
                  },
                  {
                    step: "2",
                    title: "Get Your EIN",
                    desc: "Apply through ein.so ($49 Standard, $97 Express). We prepare Form SS-4, fax it to the IRS, and deliver your EIN by email and WhatsApp. No SSN or US address required.",
                    link: "/apply/",
                  },
                  {
                    step: "3",
                    title: "Open a US Bank Account",
                    desc: "Use your EIN and LLC documents to open a US bank account with Mercury, Relay, or a similar bank. This account links to PayPal for payouts.",
                    link: "/what-can-you-do-with-ein/",
                  },
                  {
                    step: "4",
                    title: "Create Your PayPal Business Account",
                    desc: "Sign up for a PayPal Business account using your US LLC name, EIN, and US bank account. Follow the setup steps above. PayPal verifies your information within a few business days.",
                  },
                  {
                    step: "5",
                    title: "Start Receiving Payments",
                    desc: "Once verified, you can receive payments from US customers, send invoices, and accept payments on your website. PayPal handles currency conversion if your clients pay in different currencies.",
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
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* PayPal vs Stripe */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does PayPal Compare to Stripe <span className="font-display gradient-text">for EIN Requirements?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Both PayPal and Stripe require a TIN for US payment processing, but they serve different use cases. Many businesses use both platforms simultaneously.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[var(--color-border)] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-white">
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Feature</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">PayPal</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Stripe</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-muted)]">
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">EIN required</td>
                      <td className="px-4 py-3">Business accounts</td>
                      <td className="px-4 py-3">All US accounts</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Best for</td>
                      <td className="px-4 py-3">Invoicing, freelancers, marketplaces</td>
                      <td className="px-4 py-3">Websites, SaaS, subscriptions</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Non-resident setup</td>
                      <td className="px-4 py-3">US LLC + EIN + bank</td>
                      <td className="px-4 py-3">Atlas ($500) or US LLC + EIN</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">1099-K reporting</td>
                      <td className="px-4 py-3">Over $600</td>
                      <td className="px-4 py-3">Over $600</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Transaction fees</td>
                      <td className="px-4 py-3">2.99% + $0.49</td>
                      <td className="px-4 py-3">2.9% + $0.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                You can use the same EIN for both PayPal and Stripe. Many businesses set up both to give customers more payment options. For Stripe-specific setup instructions, see our <Link href="/ein-for-stripe/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for Stripe guide</Link>. For freelancer-specific guidance on receiving payments, see <Link href="/ein-for-freelancers/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for freelancers</Link>.
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

      <CTASection title="Ready to Accept PayPal Payments?" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
