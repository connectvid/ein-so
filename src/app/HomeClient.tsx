"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedGradient from "@/components/AnimatedGradient";
import EINCardVisual from "@/components/EINCardVisual";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { PRICING, SITE } from "@/lib/constants";

const trustBadges = [
  { text: "No SSN Required", icon: "shield" },
  { text: "IRS Compliant", icon: "check" },
  { text: "100% Money-Back Guarantee", icon: "refund" },
  { text: "WhatsApp Support", icon: "chat" },
];

const howItWorks = [
  {
    step: "01",
    title: "Pick Your Speed",
    description: "Standard ($49) gets your EIN in 14 days. Express ($97) delivers in 7 days. Both include full SS-4 preparation and IRS filing.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    step: "02",
    title: "Share Your Details",
    description: "Name, business info, and address. That's it. No SSN. No ITIN. No US visit. We've filed for entrepreneurs in 50+ countries.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    step: "03",
    title: "We Handle the IRS",
    description: "We prepare your Form SS-4, fax it to the IRS, and follow up until your EIN is confirmed. You don't touch a single government form.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    step: "04",
    title: "EIN in Your Inbox",
    description: "Your 9-digit EIN lands in your email. Immediately use it for US banking, Amazon, Stripe, PayPal, tax filing - everything.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const audiences = [
  { title: "LLC Owners", desc: "Required for tax filing, banking, and payroll. No exceptions.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "Amazon FBA Sellers", desc: "Complete your Seller Central tax interview and start selling in the US.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
  { title: "Freelancers", desc: "Use your EIN on W-9 forms. Keep your SSN private from clients.", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
  { title: "Corporations", desc: "Every C-Corp and S-Corp needs an EIN from day one.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { title: "Nonprofits", desc: "Required before you can apply for 501(c)(3) tax-exempt status.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { title: "Real Estate Investors", desc: "FIRPTA compliance, property LLCs, and US banking all require an EIN.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
];

const pillarLinks = [
  { title: "What Is an EIN?", description: "The definitive guide to Employer Identification Numbers.", href: "/what-is-ein/", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: "How to Get an EIN", description: "Step-by-step for non-residents. Every method compared.", href: "/how-to-get-ein/", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { title: "Who Needs an EIN?", description: "LLCs, corporations, nonprofits, freelancers, and non-residents.", href: "/who-needs-ein/", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { title: "What Can You Do With an EIN?", description: "Banking, taxes, hiring, Amazon, Stripe, and more.", href: "/what-can-you-do-with-ein/", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { title: "EIN vs ITIN", description: "Which tax ID do you actually need? Clear comparison.", href: "/ein-vs-itin/", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
  { title: "EIN Lookup", description: "Find any business EIN number. 5 verified methods.", href: "/ein-lookup/", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
];

const faqs = [
  { q: "Can a non-US resident get an EIN?", a: "Yes. Non-US residents can get an EIN without a Social Security Number (SSN). You must file Form SS-4 by fax or phone. You cannot use the IRS online application. We handle the entire fax process for you." },
  { q: "How much does it cost?", a: "Standard EIN service is $49 with 14 business day turnaround. Express EIN service is $97 with 7 business day turnaround. The IRS does not charge a fee for EINs. Our fee covers SS-4 preparation, filing, and delivery." },
  { q: "How long does it take?", a: "The IRS processes faxed Form SS-4 applications in about 4 business days. Our Standard service delivers in 14 business days. Express delivers in 7 business days with priority processing and follow-up." },
  { q: "Do I need an SSN to get an EIN?", a: "No. Non-US residents can get an EIN without an SSN. You will need a valid passport or government-issued ID. Form SS-4 has a specific section for applicants without an SSN or ITIN." },
  { q: "What is the difference between an EIN and an ITIN?", a: "An EIN (Employer Identification Number) identifies businesses for tax purposes. An ITIN (Individual Taxpayer Identification Number) identifies individuals who cannot get an SSN. Many non-US business owners need both." },
  { q: "What can I do with an EIN?", a: "Open a US business bank account, hire employees, file federal tax returns, apply for business credit, register on Amazon and Shopify, accept payments through Stripe and PayPal, and establish your US business identity." },
  { q: "Is ein.so affiliated with the IRS?", a: "No. ein.so is an independent service. We prepare and file Form SS-4 with the IRS on your behalf. The IRS is the only entity that issues EINs. We are not a government agency." },
];

/* ─── Animated number counter for hero ─── */
function CountUpStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">
        <AnimatedCounter to={value} duration={2} />{suffix}
      </div>
      <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">{label}</div>
    </div>
  );
}

export default function HomeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-[var(--color-navy)] pt-16 pb-24 lg:pt-24 lg:pb-36 overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        <div className="absolute inset-0 hero-grid" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 bg-[var(--color-blue)]/20 rounded-full blur-[100px]"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-[5%] w-56 h-56 bg-purple-500/10 rounded-full blur-[80px]"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-success)]"></span>
                </span>
                <span className="text-sm text-white/70 font-medium">The #1 EIN service for non-US residents</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              >
                Your US Business
                <br />
                <span className="shimmer-text">
                  Starts Here.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-lg lg:text-xl text-white/60 leading-relaxed mb-10 max-w-xl"
              >
                Get your EIN in as little as <strong className="text-white/90">7 days</strong>.
                No SSN. No US address. No paperwork headaches.
                We file directly with the IRS for <strong className="text-white/90">$49</strong>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 mb-10"
              >
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappStandard)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all shadow-lg shadow-[var(--color-blue)]/30 hover:shadow-xl hover:shadow-[var(--color-blue)]/40 hover:-translate-y-0.5"
                >
                  Get My EIN - $49
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 20 20">
                    <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappExpress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Express - $97
                  <span className="text-xs bg-[var(--color-amber)]/20 text-[var(--color-amber-light)] px-2 py-0.5 rounded-full font-semibold">7 days</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {trustBadges.map((badge, i) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[var(--color-success)]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-white/50">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* EIN Card with floating effect */}
            <motion.div
              className="hidden lg:flex justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <EINCardVisual className="w-full max-w-[400px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="relative -mt-8 z-10 mx-auto max-w-5xl px-6">
        <AnimateIn>
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[var(--color-border)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)] py-2">
            <div className="py-5 px-4">
              <CountUpStat value={49} suffix="" label="Cheapest in the Market" />
            </div>
            <div className="py-5 px-4">
              <CountUpStat value={2} suffix="-3" label="Days (Express)" />
            </div>
            <div className="py-5 px-4">
              <CountUpStat value={100} suffix="%" label="Money-Back Guarantee" />
            </div>
            <div className="py-5 px-4 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">0</div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">SSN Required</div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ═══ SOCIAL PROOF TICKER ═══ */}
      <section className="py-12 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="flex items-center justify-center gap-8 md:gap-16 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              "Trusted by entrepreneurs in 50+ countries",
              "Amazon sellers",
              "Shopify merchants",
              "Freelancers on Upwork & Fiverr",
              "Real estate investors",
              "Tech startups",
            ].map((item, i) => (
              <span key={i} className="text-sm text-[var(--color-text-muted)] font-medium whitespace-nowrap">
                {i > 0 && <span className="text-[var(--color-blue)] mr-2">|</span>}
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-3">Effortless Process</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Four Steps. Zero Hassle.
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              While other services make you fill out government forms, we handle <em>everything</em>.
              You answer a few questions. We do the rest.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
            {howItWorks.map((item, i) => (
              <StaggerItem key={item.step}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-[var(--color-surface)] rounded-2xl p-7 border border-[var(--color-border)] h-full group gradient-underline-hover overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-[var(--color-blue)] uppercase tracking-wider">Step {item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="mt-12 flex justify-center">
            <WhatsAppCTA text="Not sure which package is right? Ask us anything." />
          </AnimateIn>
        </div>
      </section>

      {/* ═══ WHY EIN.SO - DIFFERENTIATOR ═══ */}
      <section className="py-24 lg:py-32 bg-[var(--color-navy)] relative overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        <div className="absolute inset-0 hero-grid" />
        <div className="relative mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--color-blue-glow)] uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Not Just Another Filing Service
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Most EIN services charge $99-$200 and take weeks. We built ein.so to be faster, cheaper, and
              obsessively focused on non-residents.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {[
              {
                title: "$49. The Lowest Price. Period.",
                desc: "Competitors charge $65 to $200 for the same IRS filing. We charge $49 because EIN filing shouldn't be expensive. The IRS doesn't charge for EINs - neither should you overpay a middleman.",
                stat: "$49",
                statLabel: "vs $200 industry avg",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Built for Non-Residents",
                desc: "Other services are built for Americans and tack on non-resident support as an afterthought. We exist because of non-residents. Every process, every support touchpoint, every piece of content is designed for you.",
                stat: "50+",
                statLabel: "countries served",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Human Support. Always.",
                desc: "No ticket systems. No 5-day email waits. Message us on WhatsApp and a real human responds within hours. We walk you through every step, answer every question, and celebrate when your EIN arrives.",
                stat: "<2hrs",
                statLabel: "avg response time",
                icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-blue)]/20 text-[var(--color-blue-glow)] flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{item.desc}</p>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-2xl font-extrabold text-[var(--color-blue-glow)]">{item.stat}</span>
                    <span className="text-xs text-white/30 ml-2">{item.statLabel}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              One Service. Two Speeds.
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
              No hidden fees. No upsells. The IRS charges $0 for EINs.
              You&apos;re paying for our expertise, speed, and obsessive attention to your filing.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <AnimateIn delay={0.1}>
              <PricingCard {...PRICING.standard} />
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <PricingCard {...PRICING.express} />
            </AnimateIn>
          </div>

          <AnimateIn className="mt-10 text-center">
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              Both packages include SS-4 preparation, IRS filing, and EIN delivery by email.
            </p>
            <WhatsAppCTA text="Not sure which speed you need? Let us help you decide." />
          </AnimateIn>
        </div>
      </section>

      {/* ═══ WHAT IS AN EIN ═══ */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-3">The Basics</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                What Is an EIN Number?
              </h2>
              <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed text-base">
                <p>
                  An <strong className="text-[var(--color-text)]">EIN (Employer Identification Number)</strong> is a
                  9-digit tax ID issued by the IRS. Think of it as a Social Security Number for your business.
                  Every LLC, corporation, and nonprofit in the United States needs one.
                </p>
                <p>
                  If you want to <strong className="text-[var(--color-text)]">open a US bank account</strong>, sell on Amazon,
                  hire employees, or file taxes - you need an EIN. It&apos;s the single most important number
                  for your US business.
                </p>
                <p className="bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/20 rounded-xl p-4 text-sm">
                  <strong className="text-[var(--color-text)]">The problem:</strong> Non-US residents cannot apply for an EIN online. The IRS requires an SSN or ITIN for online applications.
                  Your only option? File Form SS-4 by fax. That&apos;s exactly what we do - <strong className="text-[var(--color-text)]">for $49</strong>.
                </p>
              </div>
              <Link
                href="/what-is-ein/"
                className="group inline-flex items-center gap-2 text-[var(--color-blue)] font-semibold mt-6 hover:gap-3 transition-all"
              >
                Read the complete guide
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 14 14">
                  <path d="M2.92 7h8.16M7.58 3.5L11.08 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm overflow-hidden">
                <div className="bg-[var(--color-navy)] px-6 py-4">
                  <h3 className="text-sm font-bold text-white">EIN at a Glance</h3>
                </div>
                <div className="p-6 space-y-0">
                  {[
                    { label: "Format", value: "XX-XXXXXXX (9 digits)", highlight: false },
                    { label: "Issued by", value: "Internal Revenue Service (IRS)", highlight: false },
                    { label: "Cost from IRS", value: "Free", highlight: false },
                    { label: "Online application", value: "US residents only", highlight: true },
                    { label: "Non-resident method", value: "Form SS-4 by fax", highlight: false },
                    { label: "Processing time", value: "4 business days (fax)", highlight: false },
                    { label: "Our fee", value: "$49 Standard / $97 Express", highlight: false },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
                      className={`flex justify-between items-center py-3.5 border-b border-[var(--color-border)] last:border-0 ${item.highlight ? "bg-red-50/50 -mx-6 px-6 border-red-100" : ""}`}
                    >
                      <span className="text-sm text-[var(--color-text-muted)]">{item.label}</span>
                      <span className={`text-sm font-semibold text-right ${item.highlight ? "text-[var(--color-error)]" : "text-[var(--color-text)]"}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══ WHO NEEDS AN EIN ═══ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-3">Who We Serve</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Built for Entrepreneurs Like You
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Whether you&apos;re launching on Amazon from India or forming an LLC from the UK,
              we&apos;ve helped people in your exact situation get their EIN.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
            {audiences.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] h-full group gradient-border-hover cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-blue)]/8 text-[var(--color-blue)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="mt-12 text-center">
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappStandard)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-navy)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-navy-light)] transition-all hover:-translate-y-0.5"
            >
              Get Your EIN Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 20 20">
                <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ GUIDES ═══ */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-3">Knowledge Base</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Free EIN Guides
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
              We don&apos;t just file your EIN. We make sure you understand exactly what you&apos;re getting and why it matters.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto" staggerDelay={0.1}>
            {pillarLinks.map((link) => (
              <StaggerItem key={link.href}>
                <Link href={link.href} className="block group">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-blue)]/8 text-[var(--color-blue)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-1.5 group-hover:text-[var(--color-blue)] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4">{link.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-blue)] group-hover:gap-2 transition-all">
                      Read guide
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                        <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-16">
            <p className="text-xs font-semibold text-[var(--color-blue)] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Questions? Answered.
            </h2>
          </AnimateIn>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <AnimateIn key={faq.q} delay={idx * 0.05}>
                <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between cursor-pointer p-5 text-left"
                  >
                    <span className="text-sm font-bold text-[var(--color-text)] pr-4">{faq.q}</span>
                    <motion.svg
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-[var(--color-text-muted)] flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === idx ? "auto" : 0,
                      opacity: openFaq === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                  </motion.div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/faq/"
              className="text-sm font-semibold text-[var(--color-blue)] hover:underline"
            >
              View all 37+ FAQs →
            </Link>
            <WhatsAppCTA text="Still have questions? We respond in minutes, not days." />
          </AnimateIn>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-navy)] overflow-hidden">
        <AnimatedGradient className="absolute inset-0" />
        <div className="absolute inset-0 hero-grid" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-blue)]/15 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <AnimateIn>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            >
              Your US Business Is
              <br />
              <span className="shimmer-text">One Step Away.</span>
            </motion.h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Join thousands of entrepreneurs worldwide who started their
              US business journey with ein.so. Takes 5 minutes to apply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappStandard)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-10 py-4.5 text-lg font-bold text-white hover:bg-[var(--color-blue-light)] transition-all shadow-xl shadow-[var(--color-blue)]/30 hover:shadow-2xl hover:shadow-[var(--color-blue)]/40 hover:-translate-y-1"
              >
                Get My EIN - $49
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 20 20">
                  <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4.5 text-lg font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat With Us
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
