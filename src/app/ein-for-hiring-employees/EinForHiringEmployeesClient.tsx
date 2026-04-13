"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function EinForHiringEmployeesClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Hiring Employees"
        title="EIN for Hiring Employees:"
        titleAccent="Payroll Tax Requirements (2026)"
        description="You must have an EIN before hiring your first employee. Learn about Form 941, W-2 requirements, state payroll registration, and how to set up payroll correctly."
      />

      {/* Answer Capsule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
                <p className="text-lg text-[var(--color-text)] leading-relaxed">
                  <strong>The IRS requires every employer to have an EIN before paying wages to any employee. Your EIN is used on Form 941 (quarterly payroll tax return), Form W-2 (annual wage statement), federal and state payroll tax deposits, and new hire reporting forms.</strong>{" "}
                  Hiring without an EIN means you cannot legally withhold or deposit payroll taxes, which exposes you to IRS penalties ranging from 2% to 15% of unpaid taxes.
                </p>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Hiring your first employee is a major milestone for any business. It means your business is growing and you need help to keep up with demand. But the IRS has strict requirements for employers that kick in the moment you issue your first paycheck. Your EIN is the foundation of employer tax compliance.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                This guide covers everything employers need to know about EINs: why you must have one before hiring, what payroll taxes you owe, which forms you file, how to set up payroll, and the penalties for non-compliance. Whether you are hiring your first employee or your hundredth, your EIN is on every payroll tax document. For general information, see <Link href="/who-needs-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">Who needs an EIN?</Link>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Is an EIN Required Before Hiring? */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Legal Requirements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Why Is an EIN Required <span className="font-display gradient-text">Before Hiring Employees?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                When you hire an employee, you become responsible for withholding federal income tax, Social Security tax, and Medicare tax from their paycheck. You must also pay the employer portion of Social Security and Medicare, plus federal and state unemployment taxes. All of these obligations require an EIN.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN is the identifier the IRS uses to track your payroll tax deposits and filings. Without an EIN, you cannot create an account in the Electronic Federal Tax Payment System (EFTPS), which is how employers deposit payroll taxes. You cannot file Form 941 (quarterly payroll tax return) or issue W-2 forms to employees at year end.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS is explicit about this requirement: <strong className="text-[var(--color-text)]">you must have an EIN before paying your first employee.</strong> This is not optional, and there is no grace period. If you hire someone and pay them without an EIN, you are immediately out of compliance with federal tax law. Penalties begin accruing from the first missed deposit.
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Beyond federal requirements, every state has its own employer registration process that requires your federal EIN. You need to register for state income tax withholding, state unemployment insurance (SUI), and workers&apos; compensation insurance. Your EIN is the starting point for all of these registrations.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Payroll Taxes Employers Must Pay */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Payroll Taxes</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Payroll Taxes Do Employers Pay <span className="font-display gradient-text">Using Their EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Employers have two types of payroll tax obligations: taxes you withhold from employee paychecks (trust fund taxes) and taxes you pay as the employer. Your EIN identifies your business on all payroll tax deposits and filings.
              </p>

              <div className="space-y-4">
                {[
                  {
                    tax: "Social Security Tax (FICA)",
                    rate: "6.2% employer + 6.2% employee",
                    detail: "Both the employer and employee pay 6.2% on wages up to $168,600 (2026 limit). You withhold the employee portion from their paycheck and pay the employer portion yourself. Both amounts are deposited under your EIN.",
                  },
                  {
                    tax: "Medicare Tax",
                    rate: "1.45% employer + 1.45% employee",
                    detail: "Both the employer and employee pay 1.45% on all wages with no cap. Employees earning over $200,000 pay an additional 0.9% Medicare surtax. You withhold the employee portions and pay the employer portion.",
                  },
                  {
                    tax: "Federal Income Tax Withholding",
                    rate: "Varies by employee W-4",
                    detail: "You withhold federal income tax from employee paychecks based on their Form W-4 elections. The amount varies by income, filing status, and allowances. You deposit these withholdings with the IRS under your EIN.",
                  },
                  {
                    tax: "Federal Unemployment Tax (FUTA)",
                    rate: "6.0% on first $7,000 per employee",
                    detail: "Employers pay FUTA tax on the first $7,000 of each employee's wages. Most employers receive a 5.4% credit for paying state unemployment taxes, reducing the effective FUTA rate to 0.6%. Filed annually on Form 940 using your EIN.",
                  },
                  {
                    tax: "State Unemployment Tax (SUTA)",
                    rate: "Varies by state (0.5%-12%)",
                    detail: "Each state sets its own unemployment tax rate based on your industry and claims history. New employers typically pay a default rate. You register with each state where you have employees using your federal EIN.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-[var(--color-text)]">{item.tax}</h3>
                      <span className="text-xs font-semibold text-[var(--color-blue)] bg-[var(--color-blue)]/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">{item.rate}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Key Payroll Tax Forms */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Tax Forms</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Payroll Tax Forms Require <span className="font-display gradient-text">Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                As an employer, you file multiple tax forms throughout the year. Every one of them requires your EIN. Missing a filing deadline triggers automatic penalties, so staying on top of the schedule is critical.
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    form: "Form 941 -- Quarterly Payroll Tax Return",
                    frequency: "Quarterly (April 30, July 31, Oct 31, Jan 31)",
                    desc: "Reports total wages paid, federal income tax withheld, Social Security and Medicare taxes (both employer and employee portions), and any adjustments. This is the most frequently filed employer tax form.",
                  },
                  {
                    form: "Form W-2 -- Wage and Tax Statement",
                    frequency: "Annually (January 31)",
                    desc: "Reports each employee's total wages and tax withholdings for the year. You send copies to employees, the Social Security Administration, and state tax agencies. Your EIN appears on every W-2.",
                  },
                  {
                    form: "Form W-3 -- Transmittal of Wage and Tax Statements",
                    frequency: "Annually (January 31)",
                    desc: "A summary form that accompanies all W-2s sent to the Social Security Administration. It totals all wages and withholdings across all employees for the year.",
                  },
                  {
                    form: "Form 940 -- Annual Federal Unemployment Tax Return",
                    frequency: "Annually (January 31)",
                    desc: "Reports your FUTA tax liability for the year. If your FUTA tax exceeds $500 in any quarter, you must deposit it quarterly. The annual return reconciles all deposits.",
                  },
                  {
                    form: "Form 944 -- Annual Payroll Tax Return",
                    frequency: "Annually (January 31)",
                    desc: "Available for very small employers (annual payroll tax liability of $1,000 or less). Instead of filing Form 941 quarterly, you file one annual return. The IRS must approve you to use Form 944.",
                  },
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                      <h3 className="font-bold text-[var(--color-text)] mb-1">{item.form}</h3>
                      <p className="text-xs font-semibold text-[var(--color-blue)] mb-2">{item.frequency}</p>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Set Up Payroll */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Payroll Setup</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Do You Set Up Payroll <span className="font-display gradient-text">With Your EIN?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Setting up payroll correctly from the start prevents costly mistakes and IRS penalties. Here is the complete checklist for new employers:
              </p>

              <StaggerContainer className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Get Your EIN",
                    desc: "If you do not have an EIN yet, apply immediately. US residents get one instantly online. Non-US residents use ein.so ($49 Standard, $97 Express). Do not hire anyone until you have your EIN in hand.",
                    link: "/apply/",
                  },
                  {
                    step: "2",
                    title: "Register with EFTPS",
                    desc: "Create an account at eftps.gov (Electronic Federal Tax Payment System). This is how you deposit federal payroll taxes. Registration requires your EIN and takes about a week to receive your PIN by mail.",
                  },
                  {
                    step: "3",
                    title: "Register with State Tax Agencies",
                    desc: "Register for state income tax withholding and state unemployment insurance in every state where you have employees. Each state issues its own employer ID number. Your federal EIN is used during registration.",
                  },
                  {
                    step: "4",
                    title: "Choose a Payroll System",
                    desc: "Select a payroll service (Gusto, ADP, Paychex, QuickBooks Payroll) or handle payroll manually. Enter your EIN during setup. Modern payroll systems automate tax calculations, deposits, and filings.",
                  },
                  {
                    step: "5",
                    title: "Collect Employee Forms",
                    desc: "Have each new employee complete Form W-4 (federal withholding elections), Form I-9 (employment eligibility verification), and any state withholding forms. Report new hires to your state's new hire registry within 20 days.",
                  },
                  {
                    step: "6",
                    title: "Run Your First Payroll",
                    desc: "Calculate gross wages, withhold federal and state taxes, deduct employee benefits, and pay net wages. Deposit withheld taxes with the IRS via EFTPS on schedule (semi-weekly or monthly depending on your liability). File Form 941 at quarter end.",
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

      {/* Penalties for Non-Compliance */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Compliance</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              What Are the Penalties for Payroll Tax <span className="font-display gradient-text">Non-Compliance?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS takes payroll tax compliance very seriously because withheld taxes are considered &quot;trust fund&quot; taxes -- money held in trust for the government. Failing to deposit or file on time triggers automatic penalties.
              </p>

              <div className="space-y-4">
                {[
                  { penalty: "Failure to Deposit", detail: "Penalties range from 2% (1-5 days late) to 10% (16+ days late) to 15% (not deposited within 10 days of IRS notice). These penalties are calculated on the amount of tax not deposited on time." },
                  { penalty: "Failure to File Form 941", detail: "5% of the unpaid tax for each month the return is late, up to a maximum of 25%. If you file more than 60 days late, the minimum penalty is the lesser of $510 or 100% of the tax due." },
                  { penalty: "Failure to Furnish W-2s", detail: "If you do not provide W-2 forms to employees by January 31, the penalty is $60 per form (up to $630,500). Intentional disregard of the requirement carries higher penalties with no cap." },
                  { penalty: "Trust Fund Recovery Penalty (TFRP)", detail: "The IRS can assess the TFRP against any individual responsible for collecting, accounting for, or depositing payroll taxes who willfully fails to do so. This penalty equals 100% of the unpaid trust fund taxes and is assessed personally -- not against the business." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-[var(--color-text)] mb-2">{item.penalty}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The Trust Fund Recovery Penalty is particularly dangerous because it bypasses your LLC&apos;s liability protection. The IRS can come after you personally for unpaid payroll taxes. This is why getting your EIN and setting up payroll correctly from day one is so important. For LLC-specific guidance, see our <Link href="/ein-for-llc/" className="text-[var(--color-blue)] hover:underline font-semibold">EIN for LLC guide</Link>. For the EIN application process, see <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] hover:underline font-semibold">How to get an EIN</Link>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Employees vs Contractors */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Classification</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              How Does Your EIN Work Differently <span className="font-display gradient-text">for Employees vs. Contractors?</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Your EIN appears on tax forms for both employees and independent contractors, but the obligations are very different. Misclassifying an employee as a contractor triggers severe IRS penalties, so understanding the distinction is critical.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[var(--color-border)] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[var(--color-surface)]">
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Obligation</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Employees (W-2)</th>
                      <th className="text-left px-4 py-3 font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">Contractors (1099)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-muted)]">
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Tax withholding</td>
                      <td className="px-4 py-3">Required (income, SS, Medicare)</td>
                      <td className="px-4 py-3">Not required</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Employer taxes</td>
                      <td className="px-4 py-3">SS, Medicare, FUTA, SUTA</td>
                      <td className="px-4 py-3">None</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Year-end form</td>
                      <td className="px-4 py-3">Form W-2</td>
                      <td className="px-4 py-3">Form 1099-NEC</td>
                    </tr>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="px-4 py-3 font-medium">Quarterly filing</td>
                      <td className="px-4 py-3">Form 941</td>
                      <td className="px-4 py-3">None</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">EIN required</td>
                      <td className="px-4 py-3">Mandatory</td>
                      <td className="px-4 py-3">Recommended (SSN alternative)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you hire both employees and contractors, you need your EIN for both but handle them differently in your tax system. Employees go through payroll with full withholding; contractors receive gross payments and handle their own taxes. Your EIN appears on W-2s for employees and 1099-NECs for contractors who receive $600 or more.
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

      <CTASection title="Ready to Hire Your First Employee?" subtitle="Get your EIN in days. $49 Standard. $97 Express. No SSN required." />
    </>
  );
}
