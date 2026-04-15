"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function WhatCanYouDoWithEinClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Complete Guide"
        title="What Can You Do With an EIN?"
        titleAccent="8 Essential Uses (2026)"
        description="Your EIN unlocks banking, taxes, hiring, business credit, payment processing, licensing, and more. Here are the 8 most important things you can do with your Employer Identification Number."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>An EIN lets you open a US business bank account, file federal taxes, hire employees, build business credit, accept payments through Amazon, Stripe, and PayPal, apply for business licenses, establish your business identity, and comply with IRS requirements.</strong>{" "}
                  Your EIN is the key that unlocks nearly every business function in the United States. Without one, banks will not open accounts, payment processors will not verify your business, and the IRS cannot process your tax returns. For a basic overview, see our <Link href="/what-is-ein/" className="text-[var(--color-blue)] underline">What Is an EIN?</Link> guide.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Many entrepreneurs apply for an EIN because they are told they need one, but they do not fully understand how many doors it opens. Your EIN is not just a tax number -- it is the foundation of your business&apos;s financial and legal identity in the United States. Every bank, payment processor, government agency, and business partner will ask for it.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers the eight most important uses of an EIN, with specific details on how each one works and why it matters for your business. Whether you are a US resident launching a startup or a non-resident building an ecommerce business from overseas, these are the core capabilities your EIN provides.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 1. Open a US Business Bank Account */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #1</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Use an EIN to Open <span className="font-display gradient-text">a Business Bank Account?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Opening a business bank account is the most common first use of an EIN. Every US bank requires an EIN before they will open a business checking or savings account. This applies to all entity types: LLCs, corporations, partnerships, and even sole proprietors who want a separate business account. Without an EIN, you cannot separate your business finances from your personal finances.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                To open a business bank account, you typically need your EIN confirmation letter (IRS Letter 147C or CP 575), your business formation documents (Articles of Organization for LLCs, Articles of Incorporation for corporations), a government-issued ID, and your business address. Some banks also require an operating agreement for LLCs or corporate bylaws for corporations.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-resident business owners face additional requirements. Many traditional banks require an in-person visit to open an account, which is difficult if you live outside the US. However, several online-friendly banks like Mercury, Relay, and Brex accept applications from non-residents with a valid EIN and passport. Read our <Link href="/ein-for-bank-account/" className="text-[var(--color-blue)] underline">EIN for Bank Account</Link> guide for a full list of banks that work with non-residents.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 2. File Federal Taxes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #2</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Use an EIN to <span className="font-display gradient-text">File Federal Taxes?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN is required on every federal tax return your business files. The specific form depends on your entity type: C-Corporations file Form 1120, S-Corporations file Form 1120-S, partnerships file Form 1065, and sole proprietors use their EIN on Schedule C attached to their personal Form 1040. Without an EIN, the IRS cannot process your business tax return.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN also appears on information returns you file with the IRS. If you pay independent contractors $600 or more during the year, you must file Form 1099-NEC reporting those payments, and your EIN appears as the payer&apos;s Tax Identification Number. Employees receive W-2 forms that show your EIN. The IRS uses your EIN to match all of these documents and verify that your tax reporting is accurate and complete.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-resident business owners with US-source income must also file annual tax returns with the IRS, even if they do not live in the United States. An EIN is essential for these filings. Common forms for non-residents include Form 1040-NR (for individuals with US income) and Form 5472 (for foreign-owned single-member LLCs).
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 3. Hire Employees */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #3</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Use an EIN to <span className="font-display gradient-text">Hire Employees?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The word &quot;Employer&quot; in Employer Identification Number exists for a reason: the original and primary purpose of an EIN is to identify employers for payroll tax reporting. If you hire even one employee, you must have an EIN. The IRS requires it for reporting federal income tax withholding, Social Security tax, and Medicare tax (collectively known as FICA taxes).
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                With your EIN, you file Form 941 (Employer&apos;s Quarterly Federal Tax Return) every quarter to report employment taxes. At the end of each year, you issue W-2 forms to every employee showing their wages and the taxes withheld. You also file Form W-3 (Transmittal of Wage and Tax Statements) with the Social Security Administration. All of these forms require your EIN.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Beyond federal requirements, your EIN is also needed to register for state payroll taxes, set up workers&apos; compensation insurance, and register with your state&apos;s unemployment insurance program. See our <Link href="/ein-for-hiring-employees/" className="text-[var(--color-blue)] underline">EIN for Hiring Employees</Link> guide for a complete checklist of everything you need to do before bringing on your first hire.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 4. Build Business Credit */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #4</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Use an EIN to <span className="font-display gradient-text">Build Business Credit?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN is the foundation of your business credit profile. Business credit bureaus -- Dun &amp; Bradstreet, Experian Business, and Equifax Business -- use your EIN to track your business&apos;s payment history, credit utilization, and overall financial health. Without an EIN, you cannot establish a business credit profile separate from your personal credit.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Building business credit starts with registering your business with Dun &amp; Bradstreet to get a D-U-N-S number, which is linked to your EIN. From there, you open trade accounts with vendors that report to business credit bureaus, apply for a business credit card, and make consistent on-time payments. Over time, your business builds its own credit score independent of your personal credit history.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Strong business credit allows you to qualify for larger loans, better interest rates, and higher credit limits without personally guaranteeing every obligation. This is especially valuable for growing businesses that need capital for inventory, equipment, or expansion. Our <Link href="/ein-for-credit/" className="text-[var(--color-blue)] underline">EIN for Business Credit</Link> guide explains the step-by-step process of building credit with your EIN.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 5. Accept Payments */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #5</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Use an EIN to Accept Payments on <span className="font-display gradient-text">Amazon, Stripe, and PayPal?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Every major payment platform that processes transactions in the United States requires a Tax Identification Number for compliance with IRS reporting rules. Amazon Seller Central, Stripe, PayPal, Shopify Payments, and Square all require either an SSN or EIN during account setup. For business accounts and non-resident sellers, an EIN is the correct (and often only) option.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Amazon:</strong> Requires a TIN during Seller Central registration. Non-US sellers must provide an EIN. Amazon uses it for 1099-K reporting when your gross sales exceed the IRS threshold. <strong className="text-[var(--color-text)]">Stripe:</strong> Requires a TIN for identity verification and tax reporting. Non-US businesses selling to US customers need an EIN to complete Stripe&apos;s account verification. <strong className="text-[var(--color-text)]">PayPal:</strong> Business accounts require a TIN for IRS compliance, and non-residents need an EIN to verify their accounts.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Without an EIN, these platforms will restrict your ability to receive payments, issue payouts, or fully verify your account. Our guides for <Link href="/ein-for-amazon-sellers/" className="text-[var(--color-blue)] underline">Amazon sellers</Link>, <Link href="/ein-for-stripe/" className="text-[var(--color-blue)] underline">Stripe users</Link>, and <Link href="/ein-for-paypal/" className="text-[var(--color-blue)] underline">PayPal users</Link> provide platform-specific setup instructions.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 6. Apply for Business Licenses */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #6</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Use an EIN to Apply for <span className="font-display gradient-text">Business Licenses?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Most state and local business license applications require a federal Tax Identification Number, which is your EIN. Whether you are applying for a general business license, a professional license, a sales tax permit, or an industry-specific permit, the licensing authority needs your EIN to verify your business identity and ensure you are registered with the IRS.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                State sales tax permits are a common example. If you sell taxable goods or services, most states require you to register for a sales tax permit. The application asks for your EIN (or SSN for sole proprietors). Similarly, state employer tax registrations, professional licenses (for accountants, attorneys, contractors, etc.), and alcohol or food service permits all require a valid EIN.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Federal licenses and permits also use your EIN for identification. If your business is in a regulated industry -- firearms, alcohol, tobacco, transportation, or broadcasting -- you need federal permits that require your EIN. The EIN serves as the universal identifier that connects your business to every level of government regulation and licensing.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 7. Establish Business Identity */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #7</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does an EIN Help Establish <span className="font-display gradient-text">Your Business Identity?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                An EIN separates your business identity from your personal identity. Every time you use your SSN for business purposes -- on W-9 forms, invoices, contracts, or vendor applications -- you expose your personal information to potential identity theft. An EIN eliminates this risk by providing a dedicated number for all business interactions.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                From a professional standpoint, having an EIN signals that your business is legitimate and properly registered with the IRS. Clients, vendors, and business partners view an EIN as a mark of professionalism. Large companies often require an EIN before they will add you as a vendor or approve a contract. Government agencies and grant programs also verify your EIN during the application process.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For non-resident entrepreneurs, an EIN is especially important because it is often the first US-recognized identifier they obtain. It allows them to start building a legitimate business presence in the United States before they have any physical presence in the country. With an EIN, you can open bank accounts, register with payment processors, and begin conducting business immediately.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 8. Comply with IRS Requirements */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Use #8</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does an EIN Help You Comply with <span className="font-display gradient-text">IRS Requirements?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS requires businesses to have an EIN for a wide range of compliance activities. Filing tax returns, reporting employee wages, issuing 1099 forms to contractors, making estimated tax payments, and responding to IRS notices all require your EIN. Without one, you cannot fulfill your federal tax obligations as a business entity.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Specific IRS compliance requirements that need an EIN include: filing Form 941 quarterly for employment taxes, filing Form 940 annually for federal unemployment tax (FUTA), issuing W-2 forms to employees, issuing 1099-NEC forms to contractors, filing Form 720 for excise taxes, and filing Form 990 for tax-exempt organizations. The EIN appears on every single one of these forms.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-resident business owners have additional IRS compliance requirements. Foreign-owned single-member LLCs must file Form 5472 annually, which requires an EIN. Failure to file Form 5472 results in a $25,000 penalty per year. This is one of the most important reasons non-residents need to obtain an EIN promptly after forming a US business entity. Ready to get your EIN? <Link href="/apply/" className="text-[var(--color-blue)] underline">Apply now</Link> -- ein.so offers Standard ($49) and Express ($97) packages.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">EIN Use Cases</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: "EIN for Bank Account", href: "/ein-for-bank-account/", desc: "Open a US business bank account with your EIN, including options for non-residents." },
              { title: "EIN for Hiring Employees", href: "/ein-for-hiring-employees/", desc: "Use your EIN for payroll taxes, W-2 issuance, and employer obligations." },
              { title: "EIN for Business Credit", href: "/ein-for-credit/", desc: "Build a business credit profile with Dun & Bradstreet using your EIN." },
              { title: "EIN for PayPal", href: "/ein-for-paypal/", desc: "Verify your PayPal Business account with an EIN for IRS compliance." },
              { title: "EIN for Stripe", href: "/ein-for-stripe/", desc: "Complete Stripe identity verification and accept US payments with your EIN." },
              { title: "EIN for Amazon Sellers", href: "/ein-for-amazon-sellers/", desc: "Register on Amazon Seller Central and handle 1099-K reporting with an EIN." },
              { title: "EIN for Shopify Sellers", href: "/ein-for-shopify-sellers/", desc: "Set up Shopify Payments and verify your store with an EIN." },
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
