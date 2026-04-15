"use client";

import { useState } from "react";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const questions = [
  {
    id: 1,
    text: "What type of entity do you have?",
    options: [
      "LLC",
      "Corporation",
      "Sole Proprietorship",
      "Partnership",
      "Nonprofit",
      "Trust/Estate",
      "None yet",
    ],
  },
  {
    id: 2,
    text: "Are you a US resident?",
    options: ["Yes", "No"],
  },
  {
    id: 3,
    text: "Do you have employees or plan to hire?",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    text: "Do you need a US bank account?",
    options: ["Yes", "No"],
  },
  {
    id: 5,
    text: "Do you sell on Amazon, Shopify, or other US platforms?",
    options: ["Yes", "No"],
  },
];

function getResult(answers: Record<number, string>) {
  const entity = answers[1];
  const usResident = answers[2] === "Yes";
  const hasEmployees = answers[3] === "Yes";
  const needsBank = answers[4] === "Yes";
  const sellsOnPlatforms = answers[5] === "Yes";

  const alwaysNeedEin = [
    "LLC",
    "Corporation",
    "Partnership",
    "Nonprofit",
    "Trust/Estate",
  ];

  if (alwaysNeedEin.includes(entity)) {
    return {
      verdict: "You need an EIN",
      color: "text-green-600",
      bg: "bg-green-50 border-green-200",
      explanation: `As a ${entity.toLowerCase()}, you are required by the IRS to have an Employer Identification Number. ${
        !usResident
          ? "Since you are not a US resident, you cannot use the IRS online application. You will need to file Form SS-4 by fax."
          : "You can apply online through the IRS website if you have an SSN or ITIN."
      } An EIN is necessary for tax filings, opening a bank account, and conducting business operations in the United States.`,
    };
  }

  if (entity === "Sole Proprietorship") {
    if (hasEmployees) {
      return {
        verdict: "You need an EIN",
        color: "text-green-600",
        bg: "bg-green-50 border-green-200",
        explanation:
          "As a sole proprietor with employees (or plans to hire), the IRS requires you to have an EIN for employment tax reporting purposes. You will use your EIN on W-2 forms, quarterly payroll tax filings, and annual employment tax returns.",
      };
    }
    if (needsBank || sellsOnPlatforms || !usResident) {
      return {
        verdict: "You may need an EIN",
        color: "text-amber-600",
        bg: "bg-amber-50 border-amber-200",
        explanation: `While a sole proprietor without employees is not strictly required to have an EIN, your situation strongly suggests you should get one. ${
          needsBank ? "Banks require an EIN to open a business account." : ""
        }${
          sellsOnPlatforms
            ? "US marketplace platforms like Amazon and Shopify require an EIN for seller verification. "
            : ""
        }${
          !usResident
            ? "As a non-US resident, you will need an EIN for virtually all US business activities. "
            : ""
        }Getting an EIN also protects your SSN from exposure on business documents.`,
      };
    }
    return {
      verdict: "You may need an EIN",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      explanation:
        "As a sole proprietor with no employees, you are not strictly required to have an EIN. You can use your SSN for tax purposes. However, most financial advisors recommend getting an EIN to protect your SSN, appear more professional, and simplify things if you ever decide to hire employees or open a dedicated business bank account.",
    };
  }

  // "None yet"
  if (hasEmployees || needsBank || sellsOnPlatforms || !usResident) {
    return {
      verdict: "You may need an EIN",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      explanation: `Even though you have not yet formed a business entity, your plans suggest you will need an EIN. ${
        hasEmployees ? "Hiring employees requires an EIN for payroll tax reporting. " : ""
      }${needsBank ? "Opening a US business bank account requires an EIN. " : ""}${
        sellsOnPlatforms
          ? "Selling on US marketplace platforms requires an EIN for tax compliance. "
          : ""
      }${
        !usResident
          ? "As a non-US resident planning to do business in the US, you will almost certainly need an EIN once you form your entity. "
          : ""
      }We recommend forming your business entity first, then applying for your EIN immediately after.`,
    };
  }

  return {
    verdict: "You may need an EIN",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    explanation:
      "Based on your answers, it is not immediately clear whether you need an EIN right now. If you are planning to start a business, hire employees, open a US bank account, or sell on US platforms in the future, you will need an EIN at that point. We recommend getting an EIN as soon as you form any business entity.",
  };
}

export default function EinEligibilityCheckerClient({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? getResult(answers) : null;
  const progress = showResult
    ? 100
    : ((currentStep) / questions.length) * 100;

  return (
    <>
      <PageHero
        label="Free Tool"
        title="EIN Eligibility Checker:"
        titleAccent="Do You Need an EIN?"
        description="Answer 5 quick questions to find out if you need an Employer Identification Number from the IRS. Free, instant results -- no signup required."
      />

      {/* Interactive Tool Widget */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto">
            <AnimateIn>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8">
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-[var(--color-text-muted)] mb-2">
                    <span>
                      {showResult
                        ? "Complete"
                        : `Question ${currentStep + 1} of ${questions.length}`}
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[var(--color-blue)] h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {!showResult ? (
                  <div key={currentStep}>
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">
                      {questions[currentStep].text}
                    </h3>
                    <div className="space-y-3">
                      {questions[currentStep].options.map((option) => (
                        <button
                          key={option}
                          onClick={() =>
                            handleAnswer(questions[currentStep].id, option)
                          }
                          className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                            answers[questions[currentStep].id] === option
                              ? "border-[var(--color-blue)] bg-blue-50 text-[var(--color-blue)]"
                              : "border-[var(--color-border)] bg-white hover:border-[var(--color-blue)] hover:bg-blue-50/50 text-[var(--color-text)]"
                          }`}
                        >
                          <span className="font-medium">{option}</span>
                        </button>
                      ))}
                    </div>
                    {currentStep > 0 && (
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="mt-4 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
                      >
                        &larr; Back to previous question
                      </button>
                    )}
                  </div>
                ) : (
                  result && (
                    <div>
                      <div
                        className={`${result.bg} border rounded-xl p-6 mb-6`}
                      >
                        <h3
                          className={`text-2xl font-bold ${result.color} mb-3`}
                        >
                          {result.verdict}
                        </h3>
                        <p className="text-[var(--color-text-muted)] leading-relaxed">
                          {result.explanation}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="/apply/"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-6 py-3 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                        >
                          Apply for Your EIN
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.17 10h11.66M10.83 5l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                        <button
                          onClick={resetQuiz}
                          className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-6 py-3 text-base font-medium text-[var(--color-text-muted)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] transition-all"
                        >
                          Start Over
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Supporting Content */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
              Understanding EIN Requirements
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Who Needs an EIN <span className="font-display gradient-text">in 2026?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                An Employer Identification Number (EIN) is a nine-digit number assigned by the Internal Revenue Service to identify a business entity for tax purposes. Think of it as a Social Security Number for your business. The IRS uses EINs to track tax obligations, employment taxes, and business filings across millions of entities operating in the United States. Whether you are a US citizen forming your first LLC or a non-resident entrepreneur launching an e-commerce business from abroad, understanding whether you need an EIN is one of the first steps in getting your business operations right.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The rules around who needs an EIN are straightforward for most entity types. If you have formed an LLC, corporation, partnership, or nonprofit organization, you are required to have an EIN. The IRS mandates it for tax filing, and virtually every bank, payment processor, and marketplace platform requires it before they will work with your business. Trusts and estates also need EINs if they generate income that must be reported to the IRS. The only common exception is the sole proprietor with no employees -- and even then, most advisors recommend getting one.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
              Non-Residents
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              EIN Requirements for <span className="font-display gradient-text">Non-US Residents</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Non-US residents face unique challenges when applying for an EIN. The IRS online application -- which is the fastest method for US residents -- requires either a Social Security Number (SSN) or an Individual Taxpayer Identification Number (ITIN). Most non-residents do not have either of these, which means the online path is unavailable. Instead, non-residents must submit Form SS-4 by fax to the IRS or call the IRS international line at 267-941-1099. The fax method is more reliable, as the phone line has limited hours and notoriously long hold times that can exceed two hours.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                If you are a non-resident who has formed a US LLC through a registered agent in Delaware, Wyoming, or another state, obtaining your EIN should be your immediate next step after receiving your articles of organization. Without an EIN, you cannot open a US bank account for your LLC, accept payments through Stripe or PayPal, or set up a seller account on Amazon or Shopify. These platforms all require an EIN during the verification process. Our <Link href="/ein-without-ssn/" className="text-[var(--color-blue)] underline">EIN Without SSN guide</Link> explains exactly how non-residents can navigate this process.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The ein.so service exists specifically to solve this problem. We complete and file Form SS-4 on your behalf, submit it to the IRS by fax, and deliver your EIN by email. Our Standard service costs $49 with a 14 business day turnaround, while our Express service costs $97 with a 7 business day turnaround. Both options include full support via WhatsApp throughout the process. Visit our <Link href="/how-to-get-ein/" className="text-[var(--color-blue)] underline">How to Get an EIN</Link> page for a detailed walkthrough of the entire application process.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
              Entity Types
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              EIN Requirements <span className="font-display gradient-text">by Entity Type</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>LLCs:</strong> Every LLC should have an EIN. Multi-member LLCs are always required to have one because the IRS treats them as partnerships. Single-member LLCs need an EIN the moment they want to open a business bank account, hire an employee, or accept payments through most processors. Learn more in our <Link href="/who-needs-ein/" className="text-[var(--color-blue)] underline">Who Needs an EIN</Link> guide.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>Corporations (C-Corp and S-Corp):</strong> All corporations are required to have an EIN without exception. The IRS requires an EIN for corporate tax filings (Form 1120 for C-Corps, Form 1120-S for S-Corps), issuing stock, setting up payroll, and opening corporate bank accounts. If you are incorporating in the US, an EIN is mandatory.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>Partnerships:</strong> Every partnership must have an EIN. Partnerships file Form 1065 annually, which requires an EIN. Each partner receives a Schedule K-1 from the partnership showing their share of income, which is prepared using the partnership&apos;s EIN.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>Nonprofits:</strong> Nonprofit organizations need an EIN before they can apply for 501(c)(3) tax-exempt status. The EIN is also required for opening a bank account, accepting donations, filing Form 990, and hiring staff or contractors. Without an EIN, a nonprofit cannot operate legally.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>Trusts and Estates:</strong> Irrevocable trusts and estates that earn income must have an EIN for tax reporting purposes. Revocable living trusts use the grantor&apos;s SSN while the grantor is alive, but need an EIN after the grantor passes away.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>Sole Proprietors:</strong> A sole proprietor is only required to have an EIN if they have employees. However, sole proprietors who want to keep their SSN private, open a dedicated business bank account, or build business credit should strongly consider getting an EIN. It is free from the IRS and provides significant practical benefits even when not technically required.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Related <span className="font-display gradient-text">Resources</span>
            </h2>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/who-needs-ein/", label: "Who Needs an EIN?", desc: "Full breakdown by entity type" },
                { href: "/what-is-ein/", label: "What Is an EIN?", desc: "Complete overview of EINs" },
                { href: "/how-to-get-ein/", label: "How to Get an EIN", desc: "Step-by-step application guide" },
                { href: "/apply/", label: "Apply for Your EIN", desc: "Start your application today" },
              ].map((link) => (
                <StaggerItem key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-blue)] transition-all group"
                  >
                    <p className="font-bold text-[var(--color-text)] group-hover:text-[var(--color-blue)] transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">
                      {link.desc}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-[var(--color-border)] rounded-xl p-6"
                >
                  <h3 className="font-bold text-[var(--color-text)] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
