"use client";

import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import PageHero from "@/components/PageHero";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { PRICING, SITE } from "@/lib/constants";

export default function ApplyPageClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <PageHero
        label="Apply Now"
        title="Get Your EIN:"
        titleAccent="Start Today"
        description="Choose your package below. We file Form SS-4 with the IRS and deliver your EIN by email. No SSN required."
      />

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <AnimateIn delay={0.1} direction="left">
              <PricingCard {...PRICING.standard} />
            </AnimateIn>
            <AnimateIn delay={0.2} direction="right">
              <PricingCard {...PRICING.express} />
            </AnimateIn>
          </div>

          <AnimateIn className="mt-12 text-center">
            <p className="text-sm text-[var(--color-text-muted)]">
              Secure payment via Stripe. Your EIN is delivered by email.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Everything You Need to <span className="font-display gradient-text">Get Your EIN</span>
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {[
              { title: "SS-4 Form Preparation", desc: "We complete every field of Form SS-4 correctly, tailored to non-resident applicants." },
              { title: "IRS Fax Submission", desc: "We fax your completed SS-4 to the IRS at the correct international fax number." },
              { title: "EIN Delivery by Email", desc: "Your 9-digit EIN number is emailed to you as soon as the IRS processes it." },
              { title: "WhatsApp Support", desc: "Real-time updates and support through WhatsApp in English and multiple languages." },
              { title: "Error-Free Filing", desc: "We review every application for common errors that cause IRS rejections." },
              { title: "Money-Back Guarantee", desc: "If rejected for any reason we caused, get a full refund, no questions asked." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] card-hover h-full">
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Why Can&apos;t Non-Residents <span className="font-display gradient-text">Apply Online?</span>
            </h2>
          </AnimateIn>
          <AnimateIn className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 space-y-4">
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The IRS online EIN application requires a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN). If you don&apos;t have either, you <strong className="text-[var(--color-text)]">cannot use the online system</strong>.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Instead, non-residents must submit <strong className="text-[var(--color-text)]">Form SS-4 by fax</strong> to the IRS at their international fax line (855-215-1627). The IRS processes faxed SS-4 forms in approximately 4 business days.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                We handle this entire process: completing the form, faxing it, and following up with the IRS. All you need to do is provide your information and wait for your EIN to arrive by email.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Links */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">Learn More</h2>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
            {[
              { label: "What Is an EIN?", href: "/what-is-ein/" },
              { label: "How to Get EIN", href: "/how-to-get-ein/" },
              { label: "EIN vs ITIN", href: "/ein-vs-itin/" },
              { label: "FAQ", href: "/faq/" },
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

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </AnimateIn>
          <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="bg-white rounded-2xl border border-[var(--color-border)] group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-base font-bold text-[var(--color-text)]">
                    {faq.q}
                    <svg className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* Bottom CTA */}
      <section className="relative py-20 bg-[var(--color-navy)] overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Have Questions?</h2>
            <p className="text-white/50 mb-6">Chat with us on WhatsApp. We respond fast.</p>
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
