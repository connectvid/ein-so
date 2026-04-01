"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedGradient from "@/components/AnimatedGradient";
import EINCardVisual from "@/components/EINCardVisual";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { PRICING, SITE } from "@/lib/constants";

const trustBadges = [
  "No SSN Required",
  "IRS Compliant",
  "100% Money-Back Guarantee",
  "WhatsApp Support",
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Package",
    description: "Standard ($49, 5-7 business days) or Express ($97, 2-3 business days). Both include complete SS-4 filing.",
  },
  {
    step: "02",
    title: "Submit Your Information",
    description: "Provide your legal name, business details, and address. No SSN or ITIN is required for non-residents.",
  },
  {
    step: "03",
    title: "We File with the IRS",
    description: "We prepare and fax your Form SS-4 to the IRS. Non-residents cannot use the online system. We handle this for you.",
  },
  {
    step: "04",
    title: "Receive Your EIN",
    description: "Your 9-digit EIN is delivered to your email. Use it for banking, Amazon, Stripe, PayPal, and US tax filing.",
  },
];

const audiences = [
  { title: "LLC Owners", desc: "Every LLC needs an EIN for tax filing, banking, and hiring." },
  { title: "Amazon FBA Sellers", desc: "Non-US sellers need an EIN for account verification and US taxes." },
  { title: "Freelancers & Contractors", desc: "Use an EIN on W-9 forms to protect your personal SSN with US clients." },
  { title: "Corporations", desc: "All C-Corps and S-Corps require an EIN, no exceptions." },
  { title: "Non-Profit Organizations", desc: "Required for 501(c)(3) tax-exempt status and Form 990 filing." },
  { title: "Real Estate Investors", desc: "Foreign nationals need an EIN for FIRPTA compliance and property management." },
];

const pillarLinks = [
  { title: "What Is an EIN?", description: "Complete guide to Employer Identification Numbers.", href: "/what-is-ein/" },
  { title: "How to Get an EIN", description: "Step-by-step process for non-residents.", href: "/how-to-get-ein/" },
  { title: "EIN vs ITIN", description: "Understand which tax ID you need.", href: "/ein-vs-itin/" },
  { title: "EIN Lookup", description: "How to find any business EIN number.", href: "/ein-lookup/" },
];

const faqs = [
  { q: "Can a non-US resident get an EIN?", a: "Yes. Non-US residents can get an EIN without a Social Security Number (SSN). You must file Form SS-4 by fax or phone. You cannot use the IRS online application. We handle the entire fax process for you." },
  { q: "How much does it cost?", a: "Standard EIN service is $49 with 5-7 business day turnaround. Express EIN service is $97 with 2-3 business day turnaround. The IRS does not charge a fee for EINs. Our fee covers SS-4 preparation, filing, and delivery." },
  { q: "How long does it take?", a: "The IRS processes faxed Form SS-4 applications in approximately 4 business days. Our Standard service delivers in 5-7 business days. Express delivers in 2-3 business days with priority processing and follow-up." },
  { q: "Do I need an SSN to get an EIN?", a: "No. Non-US residents can get an EIN without an SSN. You will need a valid passport or government-issued ID. Form SS-4 has a specific section for applicants without an SSN or ITIN." },
  { q: "What is the difference between an EIN and an ITIN?", a: "An EIN (Employer Identification Number) identifies businesses for tax purposes. An ITIN (Individual Taxpayer Identification Number) identifies individuals who cannot get an SSN. Many non-US business owners need both." },
  { q: "What can I do with an EIN?", a: "Open a US business bank account, hire employees, file federal tax returns, apply for business credit, register on Amazon and Shopify, accept payments through Stripe and PayPal, and establish your US business identity." },
  { q: "Is ein.so affiliated with the IRS?", a: "No. ein.so is an independent service. We prepare and file Form SS-4 with the IRS on your behalf. The IRS is the only entity that issues EINs. We are not a government agency." },
];

export default function HomeClient() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-[var(--color-navy)] pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        <div className="absolute inset-0 hero-grid" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-1.5 h-1.5 bg-[var(--color-success)] rounded-full animate-pulse" />
                <span className="text-sm text-white/60 font-medium">IRS-compliant EIN filing service</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15] mb-6"
              >
                Get Your EIN Number.
                <br />
                <span className="text-[var(--color-blue-glow)]">
                  Fastest Service for Non-Residents.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-base lg:text-lg text-white/50 leading-relaxed mb-8 max-w-xl"
              >
                Non-US residents cannot apply for an EIN online. We prepare and fax
                Form SS-4 to the IRS on your behalf and deliver your EIN by email.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <Link
                  href="/apply/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-7 py-3.5 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all shadow-lg shadow-[var(--color-blue)]/25"
                >
                  Apply Now · $49
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/apply/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 text-sm font-bold text-white/80 hover:bg-white/5 transition-all"
                >
                  Express · $97
                </Link>
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 px-5 py-3.5 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/10 transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Ask a Question
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-x-5 gap-y-2"
              >
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-white/40">
                    <svg className="w-3.5 h-3.5 text-[var(--color-success)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* EIN Card */}
            <div className="hidden lg:flex justify-center">
              <EINCardVisual className="w-full max-w-[380px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="relative -mt-7 z-10 mx-auto max-w-5xl px-6">
        <AnimateIn>
          <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-border)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
            <div className="py-5 px-4 text-center">
              <div className="text-2xl font-extrabold text-[var(--color-navy)]">$49</div>
              <div className="text-[11px] text-[var(--color-text-muted)] font-medium mt-0.5">Cheapest in Market</div>
            </div>
            <div className="py-5 px-4 text-center">
              <div className="text-2xl font-extrabold text-[var(--color-navy)]">
                <AnimatedCounter to={4} duration={1.5} /> Days
              </div>
              <div className="text-[11px] text-[var(--color-text-muted)] font-medium mt-0.5">IRS Fax Processing</div>
            </div>
            <div className="py-5 px-4 text-center">
              <div className="text-2xl font-extrabold text-[var(--color-navy)]">100%</div>
              <div className="text-[11px] text-[var(--color-text-muted)] font-medium mt-0.5">Money-Back Guarantee</div>
            </div>
            <div className="py-5 px-4 text-center">
              <div className="text-2xl font-extrabold text-[var(--color-navy)]">No SSN</div>
              <div className="text-[11px] text-[var(--color-text-muted)] font-medium mt-0.5">Required to Apply</div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-2">Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              How It Works
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {howItWorks.map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] h-full card-hover">
                  <span className="inline-block text-xs font-bold text-[var(--color-blue)] bg-[var(--color-blue)]/8 rounded-md px-2.5 py-1 mb-4">{item.step}</span>
                  <h3 className="text-sm font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="mt-8 flex justify-center">
            <WhatsAppCTA text="Not sure which package is right for you?" />
          </AnimateIn>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Simple, Transparent Pricing
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-lg mx-auto text-sm">
              Two options. No hidden fees. The IRS does not charge for EINs. Our fee covers the entire filing process.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimateIn delay={0.1}>
              <PricingCard {...PRICING.standard} />
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <PricingCard {...PRICING.express} />
            </AnimateIn>
          </div>

          <AnimateIn className="mt-8 flex justify-center">
            <WhatsAppCTA text="Need help choosing? Talk to our team." />
          </AnimateIn>
        </div>
      </section>

      {/* ═══ WHAT IS AN EIN ═══ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimateIn>
              <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-2">The Basics</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an EIN Number?
              </h2>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  An <strong className="text-[var(--color-text)]">EIN (Employer Identification Number)</strong> is a
                  9-digit tax ID issued by the IRS to identify businesses operating in the United States.
                  It functions as a Social Security Number for your business.
                </p>
                <p>
                  Every LLC, corporation, partnership, and non-profit needs an EIN.
                  Non-US residents who want to open a US bank account, sell on Amazon,
                  or hire employees need an EIN.
                </p>
                <p>
                  <strong className="text-[var(--color-text)]">Non-residents cannot apply online.</strong>{" "}
                  The IRS online application requires an SSN or ITIN. Without one,
                  you must file Form SS-4 by fax. We handle this entire process for you.
                </p>
              </div>
              <Link
                href="/what-is-ein/"
                className="inline-flex items-center gap-2 text-[var(--color-blue)] font-semibold text-sm mt-6 hover:gap-3 transition-all"
              >
                Read the complete guide
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.92 7h8.16M7.58 3.5L11.08 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-white rounded-xl border border-[var(--color-border)] p-6 space-y-4">
                <h3 className="text-sm font-bold text-[var(--color-text)] mb-4">EIN at a Glance</h3>
                {[
                  { label: "Format", value: "XX-XXXXXXX (9 digits)" },
                  { label: "Issued by", value: "Internal Revenue Service (IRS)" },
                  { label: "Cost from IRS", value: "Free" },
                  { label: "Online application", value: "US residents only" },
                  { label: "Non-resident method", value: "Form SS-4 by fax" },
                  { label: "Processing time", value: "4 business days (fax)" },
                  { label: "Our fee", value: "$49 (Standard) / $97 (Express)" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-[var(--color-border)] pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-[var(--color-text-muted)]">{item.label}</span>
                    <span className="text-sm font-semibold text-[var(--color-text)] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══ WHO NEEDS AN EIN ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-2">Eligibility</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Who Needs an EIN?
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto" staggerDelay={0.08}>
            {audiences.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)] card-hover h-full">
                  <h3 className="text-sm font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="mt-10 text-center">
            <Link
              href="/apply/"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-navy)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--color-navy-light)] transition-colors"
            >
              Apply for Your EIN
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.92 7h8.16M7.58 3.5L11.08 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ GUIDES ═══ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-2">Resources</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              EIN Guides
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto" staggerDelay={0.1}>
            {pillarLinks.map((link) => (
              <StaggerItem key={link.href}>
                <Link href={link.href} className="block group">
                  <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] card-hover h-full">
                    <h3 className="text-base font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-blue)] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">{link.description}</p>
                    <span className="text-xs font-semibold text-[var(--color-blue)]">
                      Read guide →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-2">Why ein.so</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Built for Trust
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.12}>
            {[
              {
                title: "Money-Back Guarantee",
                desc: "If the IRS rejects your application for any reason we caused, you receive a full refund. No questions asked.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Fast, Reliable Processing",
                desc: "Standard service: 5-7 business days. Express service: 2-3 business days. We file your SS-4 immediately upon receiving your information.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "WhatsApp Support",
                desc: "Real human support through WhatsApp. Ask questions, get status updates, and receive your EIN confirmation. We respond within hours.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-blue)]/8 text-[var(--color-blue)] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Frequently Asked Questions
            </h2>
          </AnimateIn>

          <StaggerContainer className="max-w-3xl mx-auto space-y-3" staggerDelay={0.06}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="bg-white rounded-xl border border-[var(--color-border)] group">
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-bold text-[var(--color-text)]">
                    {faq.q}
                    <svg
                      className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="mt-8 flex flex-col items-center gap-4">
            <Link
              href="/faq/"
              className="text-sm font-semibold text-[var(--color-blue)] hover:underline"
            >
              View all FAQs →
            </Link>
            <WhatsAppCTA text="Still have questions?" />
          </AnimateIn>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-navy)] overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        <div className="absolute inset-0 hero-grid" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Get Your EIN?
            </h2>
            <p className="text-base text-white/50 mb-8 max-w-lg mx-auto">
              We handle the IRS paperwork so you can focus on your business.
              Apply in minutes. Receive your EIN by email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/apply/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-7 py-3.5 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all shadow-lg shadow-[var(--color-blue)]/25"
              >
                Apply Now · $49
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
