"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForCreditClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Business Credit"
        title="EIN for Business Credit:"
        titleAccent="Build Credit Without SSN (2026)"
        description="Use your EIN to build business credit separate from personal credit. Establish a Dun & Bradstreet profile, open business credit cards, and access funding."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>Your EIN is the foundation for building business credit that exists independently of your personal credit score. Register with Dun &amp; Bradstreet, open vendor trade accounts, and establish payment history under your EIN to build a business credit profile that unlocks larger credit lines, better loan terms, and business credit cards.</strong>{" "}
                  Business credit protects your personal credit score and gives your business its own financial identity.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Personal credit and business credit are two separate systems. Personal credit is tied to your SSN and tracked by Equifax, Experian, and TransUnion. Business credit is tied to your EIN and tracked by Dun &amp; Bradstreet, Experian Business, and Equifax Business. Building business credit gives your company access to financing without putting your personal credit at risk.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide explains how to build business credit from scratch using your EIN, which credit bureaus track business credit, how to get EIN-only credit cards, and the step-by-step process from EIN to a strong business credit score. For general EIN information, see <Link href="/what-is-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">What is an EIN?</Link>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Business Credit Building Timeline Table */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8 text-center">
              Business Credit Building Timeline: <span className="font-display gradient-text">Month 1 to Month 12</span>
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
              <table className="w-full text-left text-sm">
                <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Month</th><th className="px-4 py-3 font-semibold">Action</th><th className="px-4 py-3 font-semibold">Expected PAYDEX Score</th><th className="px-4 py-3 font-semibold">Credit Available</th></tr></thead>
                <tbody>
                  {[
                    { month: "Month 1", action: "Get EIN, form LLC, open business bank account", score: "No score yet", credit: "$0" },
                    { month: "Month 2", action: "Register for D-U-N-S number, open 2 Net-30 vendor accounts", score: "No score yet", credit: "$500-$1,000 (vendor)" },
                    { month: "Month 3", action: "Pay first vendor invoices early, open 2 more Net-30 accounts", score: "40-50", credit: "$1,000-$3,000 (vendor)" },
                    { month: "Month 4", action: "Continue early payments, apply for secured business credit card", score: "50-60", credit: "$2,000-$5,000 (vendor + secured)" },
                    { month: "Month 5-6", action: "Maintain 5+ active trade lines with early payments", score: "60-70", credit: "$5,000-$10,000" },
                    { month: "Month 7-8", action: "Apply for store credit cards (Staples, Home Depot Business)", score: "70-75", credit: "$10,000-$25,000" },
                    { month: "Month 9-10", action: "Apply for unsecured business credit card", score: "75-80", credit: "$25,000-$50,000" },
                    { month: "Month 11-12", action: "Apply for business line of credit or term loan", score: "80+", credit: "$50,000-$100,000+" },
                  ].map((row, i) => (
                    <tr key={row.month} className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}>
                      <td className="px-4 py-3 font-medium text-[var(--color-text)]">{row.month}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.action}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.score}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.credit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How Does Business Credit Work? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Business Credit Basics</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does Business Credit <span className="font-display gradient-text">Work With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">EIN-Based Credit Tracking</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                27 million US businesses have active business credit profiles. Business credit works similarly to personal credit but uses your EIN instead of your SSN. Vendors, lenders, and credit bureaus track your business&apos;s payment history under your EIN. Over time, consistent on-time payments build a credit score that represents your business&apos;s creditworthiness.
              </p>

              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Three Scoring Systems You Need to Know</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The three major business credit bureaus each use different scoring systems. <strong className="text-[var(--color-text)]">Dun &amp; Bradstreet</strong> uses the PAYDEX score, which ranges from 0 to 100 (80+ is considered excellent and represents paying 30 days early). <strong className="text-[var(--color-text)]">Experian Business</strong> uses Intelliscore Plus, ranging from 1 to 100 (76+ is low risk). <strong className="text-[var(--color-text)]">Equifax Business</strong> uses the Business Credit Risk Score, ranging from 101 to 992 (700+ is good). D&amp;B tracks 500 million+ businesses globally and is checked by 90% of Fortune 500 procurement departments.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Unlike personal credit, business credit scores are publicly accessible. Anyone can look up your business credit report. This means strong business credit helps you win contracts, attract investors, and negotiate better terms with suppliers. Weak business credit or no credit history can cost you business opportunities.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The key difference between business and personal credit is the personal guarantee. Business credit lines obtained with just your EIN (no personal guarantee) do not affect your personal credit score. If you default on an EIN-only account, it hurts your business credit but not your personal FICO score. This separation is one of the biggest advantages of building business credit.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Step-by-Step: Building Business Credit */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Credit Building Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Build Business Credit <span className="font-display gradient-text">From Scratch With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Building business credit takes time and deliberate action. Here is the proven step-by-step process that moves you from zero business credit history to a strong score.
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Get Your EIN and Form Your Entity",
                    desc: "Your EIN is the identifier used by business credit bureaus. If you do not have one yet, apply through ein.so ($49 Standard, $97 Express). An LLC or corporation provides stronger credibility with credit bureaus than a sole proprietorship.",
                    link: "/apply/",
                  },
                  {
                    step: "2",
                    title: "Register for a D-U-N-S Number",
                    desc: "Dun & Bradstreet is the most widely used business credit bureau. Register for a free D-U-N-S number at dnb.com. This 9-digit number, linked to your EIN, is your business credit identity. Many lenders and vendors check your D&B score first.",
                  },
                  {
                    step: "3",
                    title: "Open a Business Bank Account",
                    desc: "A dedicated business bank account under your EIN establishes financial separation. Banks may report your account activity to business credit bureaus. Use this account for all business transactions.",
                    link: "/ein-for-bank-account/",
                  },
                  {
                    step: "4",
                    title: "Open Net-30 Vendor Accounts",
                    desc: "Net-30 vendors give you 30 days to pay invoices. Start with vendors known to report to business credit bureaus: Uline (shipping supplies), Quill (office supplies), Grainger (industrial supplies), and Crown Office Supplies. Make purchases and pay early.",
                  },
                  {
                    step: "5",
                    title: "Apply for a Business Credit Card",
                    desc: "After 3-6 months of trade account history, apply for a business credit card. Start with secured business cards or store cards. As your score builds, you qualify for unsecured cards with higher limits from major issuers.",
                  },
                  {
                    step: "6",
                    title: "Monitor and Maintain Your Score",
                    desc: "Check your business credit reports regularly at D&B, Experian Business, and Equifax Business. Dispute any errors promptly. Continue paying all accounts early or on time. Your score strengthens with each month of positive payment history.",
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

      {/* EIN-Only Credit Cards */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">EIN-Only Credit</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Can You Get Business Credit Cards <span className="font-display gradient-text">With Only an EIN?</span>
            </h2>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">EIN-Only Credit Card Landscape</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Fewer than 15% of business credit cards are approved without a personal guarantee. <strong className="text-[var(--color-text)]">EIN-only credit cards</strong> do not require your SSN or a personal credit check. They evaluate your application based solely on your business credit profile tied to your EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                When you are just starting out, EIN-only options are limited to secured business credit cards and vendor store cards. A secured card requires a cash deposit ($200-$2,000) that serves as your credit limit. Vendor store cards from companies like Uline, Grainger, and Quill are easier to obtain and build your business credit history.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                After 6-12 months of positive payment history, more EIN-only options open up. Some credit unions and community banks offer unsecured business credit cards based on your D&amp;B Paydex score without requiring a personal guarantee. These cards have lower limits initially but increase as your business credit strengthens.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Major bank business credit cards (Chase Ink, American Express Business, Capital One Spark) require a personal guarantee, which means they check your personal credit as well. However, having strong business credit improves your approval odds and can result in higher credit limits. Over time, some of these issuers may offer to remove the personal guarantee as your business credit matures.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The key is patience and consistency. Start with what you can get, pay early, and let your business credit score build over time. Every on-time payment strengthens your EIN&apos;s credit profile.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Business Credit Bureaus */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Credit Bureaus</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Which Business Credit Bureaus <span className="font-display gradient-text">Track Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Three major bureaus track business credit. Each uses a different scoring system and collects data from different sources. You should monitor all three because lenders and vendors may check any of them.
              </p>

              <div className="space-y-4">
                {[
                  {
                    bureau: "Dun & Bradstreet (D&B)",
                    score: "PAYDEX Score: 0-100",
                    detail: "The most widely used business credit bureau. Your D-U-N-S number links to your EIN. The PAYDEX score is based entirely on payment history -- paying early scores highest (80+). D&B also provides a Financial Stress Score and a Delinquency Predictor Score. Register free at dnb.com.",
                  },
                  {
                    bureau: "Experian Business",
                    score: "Intelliscore Plus: 1-100",
                    detail: "Experian Business uses a broader data set than D&B, including payment history, credit utilization, company size, industry risk, and public filings. Scores above 76 are considered low risk. Experian Business collects data from major vendors, credit card companies, and public records.",
                  },
                  {
                    bureau: "Equifax Business",
                    score: "Business Credit Risk Score: 101-992",
                    detail: "Equifax Business focuses on payment trends, credit utilization, and public filings like tax liens and judgments. It also tracks how many inquiries your business receives. Scores above 700 are considered good. Equifax pulls data from trade accounts, financial institutions, and government records.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-[var(--color-text)]">{item.bureau}</h3>
                      <span className="text-xs font-semibold text-[var(--color-blue)] bg-[var(--color-blue)]/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">{item.score}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                To maximize your business credit, work with vendors and lenders that report to all three bureaus. Not all do -- some only report to one or two. Ask before opening accounts. The more positive data flowing to all three bureaus, the faster your business credit grows.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Business Credit for Non-US Residents */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Non-US Residents</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Can Non-US Residents Build <span className="font-display gradient-text">US Business Credit?</span>
            </h2>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Non-Resident Business Credit Path</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Over 420,000 foreign-owned LLCs in the US have active D&amp;B profiles. Non-US residents who form a US LLC and obtain an EIN can build US business credit following the same process as domestic businesses. Your business credit profile is tied to your EIN, not your citizenship or residency status.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The process for non-US residents starts with forming a US LLC (most choose Wyoming or Delaware), getting an EIN through ein.so, and opening a US business bank account. From there, you register for a D-U-N-S number, open vendor accounts, and build payment history. The timeline and process are identical to what US residents follow.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The main advantage for non-US residents is that <strong className="text-[var(--color-text)]">business credit does not require an SSN</strong>. While personal credit in the US requires an SSN (which non-residents do not have), business credit uses your EIN. This means non-US entrepreneurs can access US business financing without having personal US credit history.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Start by getting your EIN. It is the first step to everything else -- your bank account, your D-U-N-S number, your vendor accounts, and ultimately your business credit score. ein.so handles EIN applications for non-residents for $49 (Standard) or $97 (Express). <Link href="/apply/" className="text-[var(--color-blue)] hover:underline font-semibold">Apply now</Link>. For LLC information, see our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for LLC guide</Link>.
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

      <CTASection title="Start Building Business Credit" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
