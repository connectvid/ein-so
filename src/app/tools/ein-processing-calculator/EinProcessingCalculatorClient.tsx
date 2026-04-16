"use client";

import { useState, useMemo } from "react";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const methods = [
  {
    id: "online",
    label: "Online (IRS website)",
    minDays: 0,
    maxDays: 0,
    note: "Instant — requires SSN or ITIN",
    available: "US residents with SSN/ITIN only",
    highlight: false,
  },
  {
    id: "fax-standard",
    label: "Fax — Standard (ein.so)",
    minDays: 5,
    maxDays: 7,
    note: "$49 — reliable for non-residents",
    available: "Anyone, including non-residents",
    highlight: false,
  },
  {
    id: "fax-express",
    label: "Fax — Express (ein.so)",
    minDays: 2,
    maxDays: 3,
    note: "$97 — fastest for non-residents",
    available: "Anyone, including non-residents",
    highlight: true,
  },
  {
    id: "phone",
    label: "Phone (IRS international line)",
    minDays: 1,
    maxDays: 1,
    note: "Free — extremely long hold times",
    available: "Anyone, but unreliable",
    highlight: false,
  },
  {
    id: "mail",
    label: "Mail (postal service)",
    minDays: 20,
    maxDays: 30,
    note: "Free — slowest method",
    available: "Anyone",
    highlight: false,
  },
];

function addBusinessDays(date: Date, days: number): Date {
  const result = new Date(date);
  let added = 0;
  while (added < days) {
    result.setDate(result.getDate() + 1);
    const dayOfWeek = result.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      added++;
    }
  }
  return result;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function toInputDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function EinProcessingCalculatorClient({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [selectedMethod, setSelectedMethod] = useState("fax-express");
  const [submissionDate, setSubmissionDate] = useState(toInputDate(new Date()));

  const result = useMemo(() => {
    const method = methods.find((m) => m.id === selectedMethod);
    if (!method) return null;

    const baseDate = new Date(submissionDate + "T12:00:00");

    if (method.minDays === 0 && method.maxDays === 0) {
      return {
        method,
        minDate: baseDate,
        maxDate: baseDate,
        isInstant: true,
      };
    }

    return {
      method,
      minDate: addBusinessDays(baseDate, method.minDays),
      maxDate: addBusinessDays(baseDate, method.maxDays),
      isInstant: false,
    };
  }, [selectedMethod, submissionDate]);

  return (
    <>
      <PageHero
        label="Free Tool"
        title="EIN Processing Time"
        titleAccent="Calculator"
        description="Calculate when you will receive your EIN based on application method and submission date. Compare Standard vs Express timelines -- no signup required."
      />

      {/* Interactive Tool Widget */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto">
            <AnimateIn>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8">
                {/* Method Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-[var(--color-text)] mb-3">
                    Select application method
                  </label>
                  <div className="space-y-2">
                    {methods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                          selectedMethod === method.id
                            ? method.highlight
                              ? "border-[var(--color-blue)] bg-blue-50 ring-2 ring-[var(--color-blue)]/20"
                              : "border-[var(--color-blue)] bg-blue-50"
                            : method.highlight
                            ? "border-[var(--color-blue)]/30 bg-white hover:border-[var(--color-blue)] hover:bg-blue-50/50"
                            : "border-[var(--color-border)] bg-white hover:border-[var(--color-blue)] hover:bg-blue-50/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-[var(--color-text)]">
                              {method.label}
                            </span>
                            {method.highlight && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-[var(--color-blue)] text-white">
                                Recommended
                              </span>
                            )}
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedMethod === method.id
                                ? "border-[var(--color-blue)]"
                                : "border-gray-300"
                            }`}
                          >
                            {selectedMethod === method.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-blue)]" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
                          {method.note}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Picker */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-[var(--color-text)] mb-3">
                    Submission date
                  </label>
                  <input
                    type="date"
                    value={submissionDate}
                    onChange={(e) => setSubmissionDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/30 focus:border-[var(--color-blue)] transition-all"
                  />
                </div>

                {/* Result */}
                {result && (
                  <div
                    className={`rounded-xl p-6 ${
                      result.method.highlight
                        ? "bg-blue-50 border border-[var(--color-blue)]/20"
                        : "bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-wider mb-2">
                      Estimated delivery
                    </p>
                    {result.isInstant ? (
                      <div>
                        <p className="text-2xl font-bold text-[var(--color-text)]">
                          Instant
                        </p>
                        <p className="text-[var(--color-text-muted)] mt-1">
                          You receive your EIN immediately after completing the
                          online application.
                        </p>
                        <p className="text-sm text-amber-600 mt-3 font-medium">
                          Note: Online application requires an SSN or ITIN.
                          Non-residents without these documents cannot use this
                          method.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-2xl font-bold text-[var(--color-text)]">
                          {formatDate(result.minDate)}
                          {result.minDate.getTime() !==
                            result.maxDate.getTime() && (
                            <>
                              {" "}
                              <span className="text-lg font-normal text-[var(--color-text-muted)]">
                                to
                              </span>{" "}
                              {formatDate(result.maxDate)}
                            </>
                          )}
                        </p>
                        <p className="text-[var(--color-text-muted)] mt-1">
                          {result.method.minDays}-{result.method.maxDays}{" "}
                          business days from submission ({result.method.available})
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA for Express */}
                {selectedMethod !== "fax-express" && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <p className="text-sm text-[var(--color-text)] leading-relaxed">
                      <strong>Need it faster?</strong> ein.so Express delivers
                      your EIN in 7 business days for $97 -- the fastest
                      option for non-residents.{" "}
                      <Link
                        href="/apply/"
                        className="text-[var(--color-blue)] underline font-bold"
                      >
                        Get Express EIN &rarr;
                      </Link>
                    </p>
                  </div>
                )}

                {selectedMethod === "fax-express" && (
                  <div className="mt-6">
                    <Link
                      href="/apply/"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-6 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                    >
                      Get Express EIN for $97
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
                  </div>
                )}
              </div>
            </AnimateIn>

            {/* Comparison Table */}
            <AnimateIn className="mt-10">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-[var(--color-border)]">
                  <h3 className="font-bold text-[var(--color-text)]">
                    Processing Time Comparison
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-4 font-bold text-[var(--color-text)]">
                          Method
                        </th>
                        <th className="text-left p-4 font-bold text-[var(--color-text)]">
                          Time
                        </th>
                        <th className="text-left p-4 font-bold text-[var(--color-text)]">
                          Cost
                        </th>
                        <th className="text-left p-4 font-bold text-[var(--color-text)]">
                          Availability
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[var(--color-border)]">
                        <td className="p-4 text-[var(--color-text)]">
                          Online
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          Instant
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          Free
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          SSN/ITIN required
                        </td>
                      </tr>
                      <tr className="border-t border-[var(--color-border)] bg-blue-50/50">
                        <td className="p-4 text-[var(--color-text)] font-medium">
                          Express Fax (ein.so)
                        </td>
                        <td className="p-4 text-[var(--color-blue)] font-bold">
                          7 business days
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          $97
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          No SSN needed
                        </td>
                      </tr>
                      <tr className="border-t border-[var(--color-border)]">
                        <td className="p-4 text-[var(--color-text)]">
                          Standard Fax (ein.so)
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          14 business days
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          $49
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          No SSN needed
                        </td>
                      </tr>
                      <tr className="border-t border-[var(--color-border)]">
                        <td className="p-4 text-[var(--color-text)]">Phone</td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          Same day (if connected)
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          Free
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          Unreliable hold times
                        </td>
                      </tr>
                      <tr className="border-t border-[var(--color-border)]">
                        <td className="p-4 text-[var(--color-text)]">Mail</td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          4-6 weeks
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          Free
                        </td>
                        <td className="p-4 text-[var(--color-text-muted)]">
                          Anyone
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
              Processing Details
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Understanding EIN <span className="font-display gradient-text">Processing Times</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Online vs Fax: Which Method Should You Use?</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS online application issues an EIN instantly but requires an SSN or ITIN -- locking out 100% of non-residents without these documents. For US residents with a Social Security Number or ITIN, it is the fastest option. For everyone else, fax is the only practical path.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Standard Fax Processing: $49, 14 Business Days</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Fax submission involves completing Form SS-4, signing it, and faxing it to the IRS at the designated fax number. Standard fax processing takes 4-7 business days at the IRS, during which staff manually review the form, assign an EIN, and fax the confirmation back. The ein.so Standard service ($49) uses this method and includes form completion, IRS fax submission, and email delivery of your EIN once received.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Express Fax Processing: $97, 7 Business Days</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The ein.so Express service ($97) delivers your EIN in 7 business days. Express applications receive priority handling: we submit your Form SS-4 as soon as it is completed, follow up with the IRS via phone to confirm receipt and expedite processing, and send you WhatsApp status updates throughout. This is the fastest reliable method for non-residents to obtain an EIN.
              </p>

              {/* Processing Time by Method Table */}
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] my-8">
                <table className="w-full text-left text-sm">
                  <thead><tr className="bg-[var(--color-navy)] text-white"><th className="px-4 py-3 font-semibold">Method</th><th className="px-4 py-3 font-semibold">Business Days</th><th className="px-4 py-3 font-semibold">Cost</th><th className="px-4 py-3 font-semibold">Best For</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">IRS Online</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Instant (same day)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Free</td><td className="px-4 py-3 text-[var(--color-text-muted)]">US residents with SSN/ITIN</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">ein.so Express (Fax)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">7 days</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$97</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Non-residents who need it fast</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">ein.so Standard (Fax)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">14 days</td><td className="px-4 py-3 text-[var(--color-text-muted)]">$49</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Non-residents on a budget</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">IRS Phone</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Same day (if connected)</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Free</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Those willing to wait 2+ hrs on hold</td></tr>
                    <tr className="border-t border-[var(--color-border)]"><td className="px-4 py-3 font-medium text-[var(--color-text)]">US Mail</td><td className="px-4 py-3 text-[var(--color-text-muted)]">20-30 days</td><td className="px-4 py-3 text-[var(--color-text-muted)]">Free</td><td className="px-4 py-3 text-[var(--color-text-muted)]">No time pressure at all</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
              What Affects Timing
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Factors That Impact <span className="font-display gradient-text">Your EIN Delivery</span>
            </h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">IRS Workload and Peak Filing Season</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                IRS workload is the biggest variable outside your control. During peak filing season (January through April), processing times increase as IRS staff handle a higher volume of applications. Submissions made during the summer months or late in the year see faster turnaround times.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Form Errors That Cause Delays</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Errors on your Form SS-4 can add days or weeks to the process. If the IRS finds inconsistencies -- such as a mismatch between the entity name and the name on file with the state, an incorrect entity type, or a missing signature -- they may reject the application entirely, requiring you to resubmit. This can add days or even weeks to the process. Using our <Link href="/tools/ss4-form-helper/" className="text-[var(--color-blue)] underline">SS-4 Form Helper</Link> can help you avoid these common mistakes before you submit.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Federal Holidays and Business Day Counting</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Federal holidays also impact processing times. The IRS is closed on all federal holidays, including New Year&apos;s Day, Presidents&apos; Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas. If a federal holiday falls within your processing window, your actual delivery date will be pushed back by one business day for each holiday. The calculator above counts business days (Monday through Friday) but does not account for federal holidays, so keep this in mind if you are submitting near a holiday period.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">Our Recommendation for Non-Residents</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                ein.so Express ($97, 7 business days) is the fastest reliable method for non-residents. At $97, it is the most cost-effective way to get your EIN in 7 business days without the uncertainty of trying to reach the IRS by phone. Visit our <Link href="/ein-processing-time/" className="text-[var(--color-blue)] underline">EIN Processing Time</Link> page for a detailed breakdown of each method, or head directly to the <Link href="/apply/" className="text-[var(--color-blue)] underline">application page</Link> to get started today.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Related <span className="font-display gradient-text">Resources</span>
            </h2>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/ein-processing-time/", label: "EIN Processing Time", desc: "Full breakdown of all methods" },
                { href: "/how-to-get-ein/", label: "How to Get an EIN", desc: "Step-by-step application guide" },
                { href: "/ein-without-ssn/", label: "EIN Without SSN", desc: "Options for non-residents" },
                { href: "/apply/", label: "Apply for Your EIN", desc: "Start your application today" },
              ].map((link) => (
                <StaggerItem key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-blue)] transition-all group"
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6"
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
