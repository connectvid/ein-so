"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

import Link from "next/link";

export default function AboutPageClient() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About"
        titleAccent="ein.so"
        description="We help non-US residents get their EIN number — fast, affordable, and hassle-free."
      />

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="text-center mb-16">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
                Making EINs <span className="font-display gradient-text">Accessible</span>
              </h2>
            </AnimateIn>
            <AnimateIn>
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text)]">ein.so</strong> exists for one reason: to help non-US residents get their Employer Identification Number without the confusion, delays, or inflated fees.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  We handle the entire SS-4 fax process on your behalf. You provide your information, we prepare and submit your form to the IRS, and your EIN is delivered by email.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  At <strong className="text-[var(--color-text)]">$49</strong>, we&apos;re the most affordable EIN service available. No upsells, no hidden fees — just a direct, professional service that gets the job done.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              How We&apos;re <span className="font-display gradient-text">Different</span>
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {[
              {
                title: "$49 Flat Fee",
                desc: "Most competitors charge $65 to $200 for the same service. We keep costs low because getting an EIN shouldn't be expensive.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
              },
              {
                title: "Fast Processing",
                desc: "Standard delivery in 5-7 business days. Express in 2-3 business days. We don't sit on applications — we file them immediately.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                ),
              },
              {
                title: "WhatsApp Support",
                desc: "Real human support through WhatsApp. Ask questions, get status updates, and receive your EIN — all in one conversation.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                ),
              },
              {
                title: "Money-Back Guarantee",
                desc: "If the IRS rejects your application for any reason we caused, we refile for free or give you a full refund. Zero risk.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-blue)]/10 flex items-center justify-center text-[var(--color-blue)] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              The Problem <span className="font-display gradient-text">We Solve</span>
            </h2>
          </AnimateIn>

          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 space-y-4">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  The IRS online EIN application <strong className="text-[var(--color-text)]">requires a Social Security Number (SSN) or ITIN</strong>. If you&apos;re a non-US resident without either, you simply cannot use the online system.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Your only option is to <strong className="text-[var(--color-text)]">fax Form SS-4</strong> to the IRS international fax line. But the form is confusing, the instructions are unclear, and a single mistake can mean rejection and weeks of delay.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  That&apos;s where we come in. We&apos;ve filed hundreds of SS-4 forms. We know exactly how to fill them out for non-resident applicants — LLCs, sole proprietors, partnerships, and more. We handle the fax, the follow-up, and the delivery.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text)]">You provide the information. We do everything else.</strong>
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Our <span className="font-display gradient-text">Process</span>
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
            {[
              { step: "1", title: "You Apply", desc: "Fill out our simple form with your personal and business details. Takes about 5 minutes." },
              { step: "2", title: "We Prepare", desc: "We complete Form SS-4 correctly, tailored to your specific situation as a non-resident." },
              { step: "3", title: "We File", desc: "We fax your SS-4 to the IRS and follow up to ensure it's processed without delays." },
              { step: "4", title: "You Receive", desc: "Your EIN is delivered to your email. We also send it via WhatsApp for instant access." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] card-hover h-full text-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-blue)] text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="text-center mt-12">
            <Link
              href="/apply/"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
            >
              Start Your Application
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Your EIN?"
        subtitle="The most affordable EIN service for non-US residents. Just $49."
      />
    </>
  );
}
