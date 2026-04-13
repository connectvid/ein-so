"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForFreelancersClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Freelancers"
        title="EIN for Freelancers:"
        titleAccent="Protect Your SSN on W-9 Forms (2026)"
        description="Freelancers can use an EIN on W-9 forms instead of their SSN. Protect your identity, separate business from personal taxes, and build credibility with clients."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Freelancers should get an EIN to replace their SSN on W-9 forms sent to clients. Every client who pays you $600 or more requests a W-9, which means your SSN gets shared repeatedly across companies, platforms, and accounting systems -- increasing your identity theft risk.</strong>{" "}
                  An EIN gives you a dedicated business identifier that protects your personal information while meeting all IRS requirements.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                As a freelancer, you fill out W-9 forms constantly. Every new client, every platform like Upwork or Fiverr, and every business that pays you needs your Tax Identification Number. Without an EIN, your SSN sits in dozens of company databases, email chains, and accounting software systems. One data breach at any of those companies exposes your SSN.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide explains how freelancers use an EIN, why it matters for identity protection, how it works on platforms like Upwork and Fiverr, and the tax implications. Whether you are a US-based freelancer or a non-US freelancer working with US clients, this guide covers your EIN needs. For general EIN information, see <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">What is an EIN?</Link>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Should Freelancers Use an EIN on W-9 Forms? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Identity Protection</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Should Freelancers Use an EIN <span className="font-display gradient-text">on W-9 Forms?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Form W-9 asks for your name, address, and Tax Identification Number. Clients use this information to generate 1099-NEC forms at year end, which report how much they paid you. The IRS requires a TIN on these forms -- but it does not have to be your SSN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">The IRS explicitly allows sole proprietors to use an EIN instead of an SSN on Form W-9.</strong> Line 2 of the W-9 asks for your business name, and the TIN section accepts either an SSN or an EIN. When you provide your EIN, clients use that number on your 1099-NEC instead of your SSN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Consider how many W-9 forms a busy freelancer sends in a year. If you work with 10 clients, your SSN is in 10 different accounting systems. If you use Upwork and Fiverr, add two more platforms. Each system is a potential data breach target. An EIN eliminates this exposure. Even if your EIN is compromised, it cannot be used to open personal credit cards, file fraudulent tax returns, or steal your identity the way an SSN can.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Getting an EIN is free through the IRS for US residents with an SSN. For non-US freelancers, ein.so handles the application for $49 (Standard) or $97 (Express). There is no reason for any freelancer to keep sharing their SSN on W-9 forms.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EIN for Upwork, Fiverr, and Freelance Platforms */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Freelance Platforms</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Use an EIN on Upwork, <span className="font-display gradient-text">Fiverr, and Other Platforms?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Freelance platforms like Upwork, Fiverr, Toptal, and 99designs are required to collect tax information from freelancers earning money through their platforms. For US-based freelancers, this means submitting a W-9 with a TIN. For non-US freelancers, it means submitting a W-8BEN form.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Upwork</strong> requires a W-9 from US freelancers before releasing payments. In your Upwork profile, go to Settings &gt; Tax Information and submit your W-9 with your EIN instead of your SSN. Upwork uses this information to generate 1099-K forms for freelancers who earn over $600.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Fiverr</strong> similarly requires tax information for US-based sellers. Navigate to your Fiverr account settings, find the tax information section, and submit your W-9 with your EIN. Fiverr reports earnings to the IRS using Form 1099-K.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Non-US freelancers</strong> working through these platforms submit a W-8BEN form instead of a W-9. If you have a US LLC, you may need to submit a W-9 with your EIN. The form you need depends on your tax status and entity type. Non-US freelancers who form a US LLC and get an EIN can receive payments as a US business entity, which some clients prefer.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Beyond platforms, direct clients also request W-9 forms. Every company that pays a freelancer more than $600 in a year must issue a 1099-NEC, and they need your W-9 to do so. Using your EIN on every W-9 keeps your SSN private across all client relationships. For payment processing setup, see our guides on <Link href="/ein-for-paypal/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for PayPal</Link> and payment processors.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Tax Benefits of an EIN for Freelancers */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Benefits</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Are the Tax Benefits of an EIN <span className="font-display gradient-text">for Freelancers?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                An EIN does not change your tax obligations as a sole proprietor freelancer -- you still report income on Schedule C of your personal tax return. However, an EIN provides several practical tax-related benefits that make your freelance business easier to manage.
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    title: "Business Bank Account",
                    desc: "Banks require an EIN to open a business checking account. Separating business and personal finances makes tax preparation dramatically easier. Every business expense is in one place, and you can clearly track income and deductions.",
                  },
                  {
                    title: "Cleaner Tax Records",
                    desc: "When all your 1099 forms use your EIN instead of your SSN, your tax records are organized under your business identifier. This simplifies reconciliation at tax time and reduces errors in your tax return.",
                  },
                  {
                    title: "LLC Foundation",
                    desc: "If you decide to form an LLC for liability protection (which many freelancers eventually do), the LLC needs its own EIN. Having an EIN already makes the transition smoother. See our guide on EIN for sole proprietors for details.",
                  },
                  {
                    title: "Professional Credibility",
                    desc: "Providing an EIN on W-9 forms signals to clients that you operate as a legitimate business, not just a hobbyist. Some corporate clients prefer or require working with freelancers who have an EIN.",
                  },
                  {
                    title: "Retirement Account Access",
                    desc: "Certain retirement accounts for self-employed individuals, like a Solo 401(k) or SEP IRA, are easier to establish with an EIN. These accounts provide significant tax deductions that reduce your freelance tax burden.",
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

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For freelancers considering an LLC, see our <Link href="/ein-for-sole-proprietor/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for sole proprietors guide</Link> to understand the transition from sole proprietor to LLC and how your EIN works in each structure.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Get an EIN as a Freelancer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do Freelancers Get <span className="font-display gradient-text">an EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process depends on whether you are a US resident or a non-US freelancer.
              </p>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">US Residents</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Visit IRS.gov, navigate to the EIN Assistant, and complete the online application. You receive your EIN instantly. The process takes about 10 minutes. Select &quot;Sole Proprietor&quot; as your entity type (unless you have an LLC). Enter your SSN when prompted -- it is only used for verification and does not appear on your EIN.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Non-US Freelancers</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">The IRS online application requires an SSN, so non-US freelancers must apply by fax using Form SS-4. ein.so handles this process completely. We prepare your Form SS-4, verify every field, fax it to the IRS, and deliver your EIN by email and WhatsApp. Standard service costs $49 (5-7 business days). Express costs $97 (2-3 business days). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply now</Link>.</p>
                </div>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Once you receive your EIN, update all your W-9 forms with clients and platforms. Going forward, use your EIN on every new W-9 you fill out. Your SSN stays private, and your tax reporting continues exactly as before -- just with a different TIN on the forms.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For more about the application process, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">Who needs an EIN?</Link> For details on using an EIN with payment processors, check our <Link href="/ein-for-paypal/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for PayPal guide</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Common Freelancer EIN Questions */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Common Concerns</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Do Freelancers Need to Know <span className="font-display gradient-text">About EIN Compliance?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Freelancers often have specific concerns about how an EIN affects their tax situation. Here are the most important compliance points:
              </p>

              <div className="space-y-4">
                {[
                  { issue: "Filing status does not change", detail: "As a sole proprietor with an EIN, you still file Schedule C with your personal Form 1040. The EIN does not create a separate tax entity. It is simply a different identifier used on W-9 and 1099 forms." },
                  { issue: "Self-employment tax still applies", detail: "You still pay self-employment tax (15.3%) on net freelance income regardless of whether you use an SSN or EIN. The EIN does not reduce or eliminate self-employment tax obligations." },
                  { issue: "Quarterly estimated taxes continue", detail: "If you owe more than $1,000 in taxes for the year, you must make quarterly estimated tax payments. Use Form 1040-ES with either your SSN or EIN. The payment schedule (April 15, June 15, September 15, January 15) stays the same." },
                  { issue: "Multiple income streams, one EIN", detail: "If you freelance in multiple areas (writing, design, consulting), you can use one EIN for all activities as a sole proprietor. You do not need separate EINs for different types of freelance work unless you create separate legal entities." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.issue}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
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

      <CTASection title="Protect Your SSN Today" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
