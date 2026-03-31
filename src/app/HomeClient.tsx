"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import AnimateIn, { StaggerContainer, StaggerItem, BlurIn, ScaleIn, SlideReveal, FloatingElement, PulseGlow } from "@/components/AnimateIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroParticles from "@/components/HeroParticles";
import TypeWriter from "@/components/TypeWriter";
import MagneticButton from "@/components/MagneticButton";
import AnimatedGradient from "@/components/AnimatedGradient";
import TiltCard from "@/components/TiltCard";
import { PRICING, SITE } from "@/lib/constants";

const trustBadges = [
  { label: "150+ Countries" },
  { label: "100% Money Back" },
  { label: "No SSN Required" },
  { label: "IRS Compliant" },
  { label: "Fast Processing" },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Package",
    description: "Standard ($49, 5-7 days) or Express ($97, 2-3 days). Both include full SS-4 filing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Submit Your Details",
    description: "Fill out a simple form. No SSN needed — just your name, address, and business info.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "We File Your SS-4",
    description: "We complete Form SS-4 and fax it to the IRS. Non-residents cannot apply online — we do this for you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Receive Your EIN",
    description: "Your 9-digit EIN is delivered by email. Use it for banking, Amazon, Stripe, PayPal, and US taxes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const audiences = [
  { title: "LLC Owners", desc: "Every LLC needs an EIN for tax filing, banking, and hiring employees." },
  { title: "Amazon Sellers", desc: "FBA sellers outside the US need an EIN for account verification and taxes." },
  { title: "Freelancers", desc: "Protect your SSN by using an EIN on W-9 forms for US clients." },
  { title: "Corporations", desc: "All C-Corps and S-Corps must have an EIN — no exceptions." },
  { title: "Non-Profits", desc: "Required for 501(c)(3) tax-exempt status and Form 990." },
  { title: "Real Estate Investors", desc: "Foreign nationals need an EIN for FIRPTA compliance and US property." },
  { title: "Shopify Sellers", desc: "International Shopify store owners need an EIN for US tax compliance." },
  { title: "YouTube Creators", desc: "Reduce US tax withholding on AdSense with an EIN." },
];

const pillarLinks = [
  { title: "What Is an EIN?", description: "Everything about Employer Identification Numbers.", href: "/what-is-ein/" },
  { title: "How to Get an EIN", description: "Step-by-step guide for non-residents.", href: "/how-to-get-ein/" },
  { title: "EIN vs ITIN", description: "Which tax ID do you need?", href: "/ein-vs-itin/" },
  { title: "EIN Lookup", description: "Find any business EIN number.", href: "/ein-lookup/" },
];

const faqs = [
  { q: "Can a non-US resident get an EIN?", a: "Yes. Non-US residents can get an EIN without a Social Security Number (SSN). The only requirement is that you file Form SS-4 by fax or phone — you cannot use the IRS online application. We handle the entire fax process for you." },
  { q: "How much does it cost to get an EIN through ein.so?", a: "Standard EIN service is $49 with 5-7 business day turnaround. Express EIN service is $97 with 2-3 business day turnaround. The IRS does not charge a fee for EINs — our fee covers SS-4 preparation, filing, and delivery." },
  { q: "How long does it take to get an EIN?", a: "By fax (how non-residents must apply), the IRS processes Form SS-4 in approximately 4 business days. Our Standard service delivers in 5-7 business days. Express service delivers in 2-3 business days with priority processing." },
  { q: "Do I need an SSN to get an EIN?", a: "No. Non-US residents can get an EIN without an SSN. You will need a valid passport or other government-issued ID. Form SS-4 has a specific section for applicants without an SSN or ITIN." },
  { q: "What is the difference between an EIN and an ITIN?", a: "An EIN (Employer Identification Number) is a tax ID for businesses. An ITIN (Individual Taxpayer Identification Number) is a tax ID for individuals who cannot get an SSN. Many non-US business owners need both." },
  { q: "What can I use my EIN for?", a: "With an EIN you can open a US business bank account, hire employees, file federal tax returns, apply for business credit, register on Amazon and Shopify, accept payments through Stripe and PayPal, and establish your US business identity." },
  { q: "Is ein.so an official IRS service?", a: "No. ein.so is an independent service that helps non-US residents obtain EINs. We prepare and file Form SS-4 with the IRS on your behalf. The IRS is the only entity that issues EINs." },
];

export default function HomeClient() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative bg-[var(--color-navy)] pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        <div className="absolute inset-0 hero-grid" />
        <HeroParticles count={20} />

        {/* Floating decorative elements */}
        <FloatingElement className="absolute top-24 right-[15%] hidden lg:block" amplitude={15} duration={5}>
          <div className="w-20 h-20 rounded-2xl bg-[var(--color-blue)]/10 border border-[var(--color-blue)]/20 backdrop-blur-sm rotate-12" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 right-[8%] hidden lg:block" amplitude={10} duration={7}>
          <div className="w-14 h-14 rounded-full bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/20 backdrop-blur-sm" />
        </FloatingElement>
        <FloatingElement className="absolute top-40 left-[5%] hidden lg:block" amplitude={8} duration={6}>
          <div className="w-10 h-10 rounded-lg bg-[var(--color-blue-glow)]/10 border border-[var(--color-blue-glow)]/20 backdrop-blur-sm -rotate-6" />
        </FloatingElement>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse" />
              <span className="text-sm text-white/70 font-medium">Cheapest EIN service — $49 flat</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6"
            >
              Get Your EIN Number — Fastest Service for{" "}
              <span className="font-display gradient-text">
                <TypeWriter
                  texts={["Non-Residents", "Amazon Sellers", "LLC Owners", "Freelancers", "Shopify Sellers", "YouTubers"]}
                  typingSpeed={70}
                  deletingSpeed={35}
                  pauseDuration={2500}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl"
            >
              Non-US residents can&apos;t apply for an EIN online. We file Form SS-4
              by fax with the IRS and deliver your EIN by email.
              Standard <span className="text-white font-semibold">$49</span>.
              Express <span className="text-white font-semibold">$97</span>.
              No SSN required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <MagneticButton as="a" href="/apply/" strength={0.25}>
                <PulseGlow className="rounded-xl" color="rgba(37,99,235,0.6)">
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all shadow-lg shadow-[var(--color-blue)]/30">
                    Get My EIN — $49
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </PulseGlow>
              </MagneticButton>
              <MagneticButton as="a" href="/apply/" strength={0.2}>
                <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all">
                  Express — $97
                </span>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center gap-2 text-white/50"
                >
                  <svg className="w-4 h-4 text-[var(--color-blue-glow)]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="relative -mt-8 z-10 mx-auto max-w-5xl px-6">
        <ScaleIn>
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[var(--color-border)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
            <div className="py-6 px-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                <AnimatedCounter to={3000} suffix="+" duration={2.5} />
              </div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">EINs Delivered</div>
            </div>
            <div className="py-6 px-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                <AnimatedCounter to={150} suffix="+" duration={2} />
              </div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">Countries Served</div>
            </div>
            <div className="py-6 px-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold shimmer-text">$49</div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">Lowest Price</div>
            </div>
            <div className="py-6 px-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                <AnimatedCounter to={4} duration={1.5} /> Days
              </div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">Avg. Processing</div>
            </div>
          </div>
        </ScaleIn>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <BlurIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              How It Works — <span className="font-display gradient-text">4 Simple Steps</span>
            </h2>
          </BlurIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
            {howItWorks.map((item) => (
              <StaggerItem key={item.step}>
                <TiltCard className="h-full">
                  <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-[var(--color-blue)] tracking-widest">{item.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section id="pricing" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SlideReveal className="text-center mb-16" direction="left">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Transparent <span className="font-display gradient-text">Pricing</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-lg mx-auto">
              Two options. No hidden fees. The IRS does not charge for EINs — our fee covers the entire filing process.
            </p>
          </SlideReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <AnimateIn delay={0.1} direction="left">
              <PricingCard {...PRICING.standard} />
            </AnimateIn>
            <AnimateIn delay={0.2} direction="right">
              <PricingCard {...PRICING.express} />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT IS AN EIN ═══════════ */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">The Basics</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an <span className="font-display gradient-text">EIN Number?</span>
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                An <strong className="text-[var(--color-text)]">EIN (Employer Identification Number)</strong> is a
                9-digit tax ID issued by the IRS to identify businesses operating
                in the United States. Think of it as a Social Security Number for
                your business.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Every LLC, corporation, partnership, and non-profit needs an EIN.
                Non-US residents who want to do business in the US — open a bank
                account, sell on Amazon, hire employees — need an EIN.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                The problem: <strong className="text-[var(--color-text)]">non-residents cannot apply online</strong>.
                The IRS online application requires an SSN or ITIN. We handle
                the fax process so you don&apos;t have to.
              </p>
              <Link
                href="/what-is-ein/"
                className="inline-flex items-center gap-2 text-[var(--color-blue)] font-bold text-sm animated-underline hover:gap-3 transition-all"
              >
                Read the complete guide
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.2}>
              <TiltCard>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 space-y-5">
                  {[
                    { label: "Format", value: "XX-XXXXXXX (9 digits)" },
                    { label: "Issued by", value: "Internal Revenue Service (IRS)" },
                    { label: "Cost from IRS", value: "Free" },
                    { label: "Online available to", value: "US residents only" },
                    { label: "Non-resident method", value: "Form SS-4 by fax (we do this)" },
                    { label: "Processing time", value: "4 business days (fax)" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0">
                      <span className="text-sm text-[var(--color-text-muted)]">{item.label}</span>
                      <span className="text-sm font-semibold text-[var(--color-text)] text-right max-w-[200px]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════ WHO NEEDS AN EIN ═══════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <BlurIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Audience</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Who Needs an <span className="font-display gradient-text">EIN?</span>
            </h2>
          </BlurIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
            {audiences.map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                  <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] h-full">
                    <h3 className="text-base font-bold text-[var(--color-text)] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ EXPLORE GUIDES ═══════════ */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <SlideReveal className="text-center mb-16" direction="right">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">Resources</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Learn Everything About <span className="font-display gradient-text">EINs</span>
            </h2>
          </SlideReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {pillarLinks.map((link) => (
              <StaggerItem key={link.href}>
                <Link href={link.href} className="block group">
                  <TiltCard>
                    <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full group-hover:border-[var(--color-blue)]/30 transition-colors">
                      <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-blue)] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] mb-4">{link.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-blue)] group-hover:gap-2 transition-all animated-underline">
                        Read guide
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.92 7h8.16M7.58 3.5L11.08 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </TiltCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ TRUST ═══════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              {
                title: "100% Money-Back Guarantee",
                desc: "If the IRS rejects your application for any reason we caused, full refund — no questions asked.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                title: "Fast Processing",
                desc: "Standard: 5-7 business days. Express: 2-3 business days. We prioritize your filing.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "150+ Countries Served",
                desc: "We help non-residents from around the world get their US EIN. No US presence required.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <ScaleIn>
                  <div className="text-center p-8">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[var(--color-blue)]/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[var(--color-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </ScaleIn>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <BlurIn className="text-center mb-16">
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Frequently Asked <span className="font-display gradient-text">Questions</span>
            </h2>
          </BlurIn>

          <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="bg-white rounded-2xl border border-[var(--color-border)] group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-base font-bold text-[var(--color-text)]">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="text-center mt-10">
            <Link
              href="/faq/"
              className="inline-flex items-center gap-2 text-[var(--color-blue)] font-bold text-sm animated-underline hover:gap-3 transition-all"
            >
              See all FAQs
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-navy)] overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        <div className="absolute inset-0 hero-grid" />
        <HeroParticles count={12} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <BlurIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Get Your <span className="font-display gradient-text">EIN?</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Join thousands of non-US residents who got their EIN through ein.so.
              Fast, simple, $49.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton as="a" href="/apply/" strength={0.25}>
                <PulseGlow className="rounded-xl" color="rgba(37,99,235,0.5)">
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all shadow-lg shadow-[var(--color-blue)]/30">
                    Get My EIN — $49
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </PulseGlow>
              </MagneticButton>
              <MagneticButton as="a" href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`} strength={0.2}>
                <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </span>
              </MagneticButton>
            </div>
          </BlurIn>
        </div>
      </section>
    </>
  );
}
