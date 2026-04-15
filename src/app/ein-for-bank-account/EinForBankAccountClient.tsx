"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForBankAccountClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Business Banking Guide"
        title="EIN for Bank Account:"
        titleAccent="Open a US Business Account (2026)"
        description="An EIN is your key to opening a US business bank account. Whether you are a non-resident forming a US LLC or a domestic founder launching your first company, you need an EIN to bank in the United States."
      />

      {/* Answer Capsule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Short Answer</p>
              <p className="text-[var(--color-text)] leading-relaxed text-base">
                <strong>You need an EIN (Employer Identification Number) to open a US business bank account. Banks require an EIN to verify your business identity, comply with IRS regulations, and set up tax reporting for your account.</strong>{" "}
                Non-residents without an SSN can get an EIN through ein.so for $49 and then open accounts at banks like Mercury, Relay, or Wise, all 100% online without visiting the US.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Do You Need an EIN for a Bank Account? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Why Do You Need an EIN for a <span className="font-display gradient-text">Bank Account?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  US banks are legally required to collect a Tax Identification Number (TIN) when opening any business account.
                  For business entities like LLCs, corporations, and partnerships, that TIN is your EIN. Without an EIN, no
                  legitimate US bank will open a business checking or savings account for you.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The bank uses your EIN to report interest income and other tax-relevant information to the IRS. It also
                  serves as the primary identifier on your account, linking your business banking activity to your business
                  entity. This separation between personal and business finances is essential for maintaining your LLC&apos;s
                  liability protection and keeping clean books.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  If you do not yet have an EIN,{" "}
                  <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">
                    apply through ein.so
                  </Link>{" "}
                  to get one in as few as 7 business days (Express) or 14 business days (Standard). Once you have your
                  EIN, you can immediately apply for a business bank account.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Best Banks for Non-Residents with an EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Best Banks for Non-Residents <span className="font-display gradient-text">with an EIN</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              These banks accept non-resident founders and allow 100% remote account opening.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimateIn delay={0.1} direction="left">
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)] font-extrabold text-sm">
                    1
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">Mercury</h3>
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Best overall</strong> for non-resident founders. Free
                    business checking with no minimum balance. Instant virtual debit cards. Integrates with Stripe, QuickBooks,
                    Xero, and dozens of business tools. FDIC insured up to $5M through partner banks.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Requirements:</strong> US LLC or Corporation, EIN, Articles
                    of Organization, passport, proof of address.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Approval time:</strong> 1-2 business days.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)] font-extrabold text-sm">
                    2
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">Relay</h3>
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Best for budgeting</strong> and financial organization. Free
                    business checking with up to 20 individual checking accounts for categorizing funds. No fees, no minimums.
                    Built-in profit-first banking methodology.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Requirements:</strong> US LLC or Corporation, EIN,
                    formation documents, passport, business description.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Approval time:</strong> 7 business days.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2} direction="right">
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)] font-extrabold text-sm">
                    3
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">Wise Business</h3>
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Best for international transfers</strong> and
                    multi-currency needs. Hold and convert 40+ currencies at the real exchange rate. Low-cost international
                    wire transfers. US, UK, EU, and other local account details included.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Requirements:</strong> US LLC or Corporation, EIN,
                    formation documents, passport, proof of address.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    <strong className="text-[var(--color-text)]">Approval time:</strong> 2-5 business days.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What Documents Do Banks Require with Your EIN? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Documents Do Banks Require <span className="font-display gradient-text">with Your EIN?</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {[
                {
                  doc: "EIN Confirmation Letter (CP 575 or 147C)",
                  detail:
                    "This is the official letter the IRS sends after assigning your EIN. It confirms your EIN, business name, and entity type. Every bank requires this document. ein.so delivers your EIN confirmation directly to you after we receive it from the IRS.",
                },
                {
                  doc: "Articles of Organization / Certificate of Formation",
                  detail:
                    "This is the document filed with your state of formation (Wyoming, Delaware, etc.) proving your LLC or corporation legally exists. You receive this from your registered agent or the Secretary of State after forming your entity.",
                },
                {
                  doc: "Operating Agreement (for LLCs)",
                  detail:
                    "Your LLC operating agreement outlines ownership structure, member responsibilities, and how the business is managed. Most banks require this even for single-member LLCs. If you formed your LLC through a service, they typically provide a template.",
                },
                {
                  doc: "Valid Passport or Government-Issued Photo ID",
                  detail:
                    "Banks need to verify the identity of all beneficial owners (anyone owning 25% or more of the business). A clear scan or photo of your passport is sufficient for online applications. Some banks also accept national ID cards.",
                },
                {
                  doc: "Proof of Business Address",
                  detail:
                    "A utility bill, lease agreement, or registered agent confirmation showing your business address. Your registered agent address in Wyoming or Delaware is usually acceptable. Some banks also accept your foreign address with supporting documentation.",
                },
              ].map((item) => (
                <StaggerItem key={item.doc}>
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                    <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.doc}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Step-by-Step: How to Open a US Business Bank Account with an EIN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                How to Open a US Business Bank Account <span className="font-display gradient-text">with an EIN</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-6" staggerDelay={0.08}>
              {[
                {
                  step: "1",
                  title: "Form Your US LLC or Corporation",
                  detail:
                    "Register your business entity in a US state. Wyoming and Delaware are the most popular choices for non-residents due to favorable tax laws, strong privacy protections, and low annual fees. This gives you the legal structure banks require.",
                },
                {
                  step: "2",
                  title: "Get Your EIN from the IRS",
                  detail:
                    "Apply for your EIN through ein.so. We file Form SS-4 by fax with the IRS and deliver your EIN confirmation letter. Standard service ($49) takes 14 business days. Express service ($97) takes 7 business days. No SSN required.",
                },
                {
                  step: "3",
                  title: "Gather Your Documents",
                  detail:
                    "Collect your EIN confirmation letter, Articles of Organization, operating agreement, passport scan, and proof of business address. Have these ready before starting your bank application to avoid delays.",
                },
                {
                  step: "4",
                  title: "Choose Your Bank and Apply Online",
                  detail:
                    "Select Mercury, Relay, or Wise Business based on your needs. Complete the online application, upload your documents, and provide information about your business activities. The entire process takes 15-30 minutes.",
                },
                {
                  step: "5",
                  title: "Wait for Approval and Start Banking",
                  detail:
                    "Most applications are reviewed within 1-5 business days. Once approved, you receive your account details, routing number, and account number by email. You can immediately start receiving payments, paying vendors, and managing your business finances.",
                },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-blue)] text-white flex items-center justify-center font-extrabold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimateIn delay={0.3} className="mt-8">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For a deeper look at everything you can do once you have your EIN, read our guide on{" "}
                <Link href="/what-can-you-do-with-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">
                  what you can do with an EIN
                </Link>.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Business Checking vs Savings with Your EIN */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Business Checking vs Savings: <span className="font-display gradient-text">Which Do You Need?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  A <strong className="text-[var(--color-text)]">business checking account</strong> is your operational
                  account. This is where you receive payments from clients, pay vendors and contractors, process payroll, and
                  handle day-to-day expenses. Every business needs a checking account. It comes with a routing number, account
                  number, and typically a debit card for purchases and ATM access.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  A <strong className="text-[var(--color-text)]">business savings account</strong> is for reserves, tax
                  funds, and emergency capital. Not all businesses need a separate savings account immediately, but it is a
                  best practice to set aside a percentage of revenue for taxes and unexpected expenses. Some banks like Relay
                  let you create multiple sub-accounts within one checking account, effectively serving the same purpose.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Start with a business checking account. Add a savings account once your revenue is consistent and you want
                  to earn interest on reserves. Both account types require your EIN to open.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Common Mistakes When Opening a Business Bank Account */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                Common Mistakes When Opening a <span className="font-display gradient-text">Business Bank Account</span>
              </h2>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {[
                {
                  mistake: "Using your personal bank account for business",
                  fix: "This pierces your LLC's liability protection and makes tax filing a nightmare. Always open a dedicated business account with your EIN.",
                },
                {
                  mistake: "Applying before you have your EIN",
                  fix: "Banks will reject your application without an EIN. Get your EIN first, then apply for the bank account. ein.so can have your EIN ready in 7 business days with Express service.",
                },
                {
                  mistake: "Choosing a bank that does not serve non-residents",
                  fix: "Traditional banks like Chase, Bank of America, and Wells Fargo typically require an in-person visit and SSN. Stick with Mercury, Relay, or Wise for remote, non-resident-friendly account opening.",
                },
                {
                  mistake: "Not having your operating agreement ready",
                  fix: "Many founders skip the operating agreement, but banks require it. Prepare your LLC operating agreement before you apply. Most LLC formation services include a template.",
                },
                {
                  mistake: "Mismatching the business name on documents",
                  fix: "Your EIN letter, Articles of Organization, and bank application must all show the exact same business name. Even small differences (like missing 'LLC') can cause rejections.",
                },
              ].map((item) => (
                <StaggerItem key={item.mistake}>
                  <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                    <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.mistake}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.fix}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimateIn delay={0.3} className="mt-8">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Need an EIN for your LLC?{" "}
                <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">
                  Learn about EINs for LLCs
                </Link>{" "}
                or{" "}
                <Link href="/ein-for-non-residents/" className="text-[var(--color-blue)] hover:underline font-semibold">
                  read our guide for non-residents
                </Link>.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </AnimateIn>
          <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="bg-white rounded-2xl border border-[var(--color-border)] group">
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">Related Guides</h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              { label: "What Can You Do With an EIN?", href: "/what-can-you-do-with-ein/" },
              { label: "EIN for Non-Residents", href: "/ein-for-non-residents/" },
              { label: "EIN for LLC", href: "/ein-for-llc/" },
              { label: "What Is an EIN?", href: "/what-is-ein/" },
              { label: "Apply for EIN", href: "/apply/" },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
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
        title="Get Your EIN and Open Your US Bank Account"
        subtitle="$49 Standard or $97 Express. No SSN required. Your EIN is the first step to US business banking."
      />
    </>
  );
}
