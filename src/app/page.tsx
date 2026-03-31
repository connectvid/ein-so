import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import { PRICING, SITE } from "@/lib/constants";

const trustBadges = [
  { icon: "globe", label: "Clients from 150+ Countries" },
  { icon: "shield", label: "100% Money Back" },
  { icon: "clock", label: "Fast Processing" },
  { icon: "check", label: "No SSN Required" },
  { icon: "star", label: "IRS Compliant" },
];

const howItWorks = [
  {
    step: "1",
    title: "Choose Your Package",
    description:
      "Select Standard ($49, 5-7 days) or Express ($97, 2-3 days). Both include full SS-4 filing.",
  },
  {
    step: "2",
    title: "Submit Your Information",
    description:
      "Fill out a simple form with your details. No SSN needed. We handle the IRS paperwork.",
  },
  {
    step: "3",
    title: "We File Your SS-4",
    description:
      "We complete Form SS-4 and fax it to the IRS on your behalf. Non-residents cannot apply online.",
  },
  {
    step: "4",
    title: "Receive Your EIN",
    description:
      "Your 9-digit EIN is delivered to your email. Use it for banking, taxes, and US business.",
  },
];

const pillarLinks = [
  {
    title: "What Is an EIN?",
    description: "Everything about Employer Identification Numbers — what they are, who issues them, and why you need one.",
    href: "/what-is-ein/",
    keyword: "22,200/mo searches",
  },
  {
    title: "How to Get an EIN",
    description: "Step-by-step guide to getting your EIN. Non-residents must file Form SS-4 by fax — we handle this for you.",
    href: "/how-to-get-ein/",
    keyword: "12,100/mo searches",
  },
  {
    title: "Who Needs an EIN?",
    description: "LLCs, corporations, partnerships, sole proprietors, non-profits — find out if your business needs an EIN.",
    href: "/who-needs-ein/",
    keyword: "3,600/mo searches",
  },
  {
    title: "What Can You Do With an EIN?",
    description: "Open US bank accounts, hire employees, file taxes, get business credit, and more — all with your EIN.",
    href: "/what-can-you-do-with-ein/",
    keyword: "$8.92 CPC",
  },
  {
    title: "EIN vs ITIN",
    description: "EIN is for businesses. ITIN is for individuals without an SSN. Learn which one you need — or if you need both.",
    href: "/ein-vs-itin/",
    keyword: "8,100/mo searches",
  },
  {
    title: "EIN Lookup",
    description: "Find any business EIN number. Free methods, IRS resources, and SEC filings to look up an EIN.",
    href: "/ein-lookup/",
    keyword: "18,100/mo searches",
  },
];

const faqs = [
  {
    q: "Can a non-US resident get an EIN?",
    a: "Yes. Non-US residents can get an EIN without a Social Security Number (SSN). The only requirement is that you file Form SS-4 by fax or phone — you cannot use the IRS online application. We handle the entire fax process for you.",
  },
  {
    q: "How much does it cost to get an EIN through ein.so?",
    a: "Standard EIN service is $49 with 5-7 business day turnaround. Express EIN service is $97 with 2-3 business day turnaround. The IRS does not charge a fee for EINs — our fee covers SS-4 preparation, filing, and delivery.",
  },
  {
    q: "How long does it take to get an EIN?",
    a: "By fax (how non-residents must apply), the IRS processes Form SS-4 in approximately 4 business days. Our Standard service delivers in 5-7 business days. Express service delivers in 2-3 business days with priority processing.",
  },
  {
    q: "Do I need an SSN to get an EIN?",
    a: "No. Non-US residents can get an EIN without an SSN. You will need a valid passport or other government-issued ID. Form SS-4 has a specific section for applicants without an SSN or ITIN.",
  },
  {
    q: "What is the difference between an EIN and an ITIN?",
    a: "An EIN (Employer Identification Number) is a tax ID for businesses. An ITIN (Individual Taxpayer Identification Number) is a tax ID for individuals who cannot get an SSN. Many non-US business owners need both.",
  },
  {
    q: "What can I use my EIN for?",
    a: "With an EIN you can open a US business bank account, hire employees, file federal tax returns, apply for business credit, register on Amazon and Shopify, accept payments through Stripe and PayPal, and establish your US business identity.",
  },
  {
    q: "Is ein.so an official IRS service?",
    a: "No. ein.so is an independent service that helps non-US residents obtain EINs. We prepare and file Form SS-4 with the IRS on your behalf. The IRS is the only entity that issues EINs.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ein.so",
    url: SITE.url,
    description: SITE.description,
    sameAs: ["https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: SITE.whatsapp,
      availableLanguage: ["English", "Bengali", "Hindi"],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EIN Application Service for Non-Residents",
    provider: { "@type": "Organization", name: "ein.so" },
    description:
      "We file Form SS-4 with the IRS by fax and deliver your EIN. For non-US residents who cannot apply online.",
    offers: [
      {
        "@type": "Offer",
        name: "Standard EIN",
        price: "49",
        priceCurrency: "USD",
        description: "SS-4 filing with 5-7 business day turnaround",
      },
      {
        "@type": "Offer",
        name: "Express EIN",
        price: "97",
        priceCurrency: "USD",
        description: "Priority SS-4 filing with 2-3 business day turnaround",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[var(--color-primary)] pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] opacity-80" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-white)] leading-tight mb-6">
              Get Your EIN Number —{" "}
              <span className="font-serif-accent text-[var(--color-accent)]">
                Fastest Service
              </span>{" "}
              for Non-Residents
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-accent)] leading-relaxed mb-8 max-w-2xl">
              Non-US residents cannot apply for an EIN online. We file Form SS-4
              by fax with the IRS and deliver your EIN. Standard $49. Express
              $97. No SSN required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/apply/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-white)] px-8 py-4 text-base font-semibold text-[var(--color-black)] hover:bg-[var(--color-beige)] transition-colors"
              >
                Get My EIN — $49
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              <Link
                href="/apply/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--color-accent)] px-8 py-4 text-base font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
              >
                Express — $97
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-[var(--color-accent)]"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-beige)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] text-center mb-4">
            How It Works —{" "}
            <span className="font-serif-accent text-[var(--color-primary)]">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-center text-[var(--color-gray)] mb-16 max-w-2xl mx-auto">
            Getting an EIN as a non-resident is straightforward when we handle
            the IRS fax process for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="bg-[var(--color-white)] rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-[var(--color-white)] flex items-center justify-center text-lg font-bold mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-black)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-gray)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[var(--color-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] text-center mb-4">
            Simple, Transparent{" "}
            <span className="font-serif-accent text-[var(--color-primary)]">
              Pricing
            </span>
          </h2>
          <p className="text-center text-[var(--color-gray)] mb-16 max-w-2xl mx-auto">
            Two options. No hidden fees. The IRS does not charge for EINs — our
            fee covers the entire filing process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingCard {...PRICING.standard} />
            <PricingCard {...PRICING.express} />
          </div>
        </div>
      </section>

      {/* What Is an EIN - Brief */}
      <section className="bg-[var(--color-beige)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] mb-6">
              What Is an EIN Number?
            </h2>
            <p className="text-lg text-[var(--color-black)] leading-relaxed mb-4">
              An <strong>EIN (Employer Identification Number)</strong> is a
              9-digit tax ID issued by the IRS to identify businesses operating
              in the United States. Think of it as a Social Security Number for
              your business.
            </p>
            <p className="text-lg text-[var(--color-black)] leading-relaxed mb-4">
              Every LLC, corporation, partnership, and non-profit needs an EIN.
              Non-US residents who want to do business in the US — open a bank
              account, sell on Amazon, hire employees — need an EIN.
            </p>
            <p className="text-lg text-[var(--color-black)] leading-relaxed mb-6">
              The problem: <strong>non-residents cannot apply online</strong>.
              The IRS online application requires an SSN or ITIN. If you
              don&apos;t have one, you must file Form SS-4 by fax or phone. We
              handle this entire process for you.
            </p>
            <Link
              href="/what-is-ein/"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Read the complete guide: What Is an EIN?
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33 8h9.34M8.67 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Needs an EIN */}
      <section className="bg-[var(--color-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] text-center mb-4">
            Who Needs an{" "}
            <span className="font-serif-accent text-[var(--color-primary)]">
              EIN?
            </span>
          </h2>
          <p className="text-center text-[var(--color-gray)] mb-16 max-w-2xl mx-auto">
            If you&apos;re doing business in the US, you almost certainly need
            an EIN.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "LLC Owners", desc: "Every LLC needs an EIN for tax filing, banking, and hiring." },
              { title: "Amazon Sellers", desc: "Non-US Amazon FBA sellers need an EIN for account verification and taxes." },
              { title: "Freelancers", desc: "Protect your SSN by using an EIN on W-9 forms for US clients." },
              { title: "Corporations", desc: "All C-Corps and S-Corps must have an EIN. No exceptions." },
              { title: "Non-Profits", desc: "Required for 501(c)(3) tax-exempt status and Form 990 filing." },
              { title: "Real Estate Investors", desc: "Foreign nationals investing in US property need an EIN for FIRPTA compliance." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-beige)] rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--color-black)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-gray)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/who-needs-ein/"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Full eligibility guide
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33 8h9.34M8.67 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Guides — Pillar Links */}
      <section className="bg-[var(--color-beige)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] text-center mb-16">
            Everything About{" "}
            <span className="font-serif-accent text-[var(--color-primary)]">
              EIN Numbers
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[var(--color-white)] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--color-gray)] leading-relaxed mb-4">
                  {link.description}
                </p>
                <span className="text-xs font-medium text-[var(--color-primary)] flex items-center gap-1">
                  Read guide
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.92 7h8.16M7.58 3.5L11.08 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="bg-[var(--color-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-black)] mb-2">
                100% Money-Back Guarantee
              </h3>
              <p className="text-sm text-[var(--color-gray)]">
                If the IRS rejects your application for any reason we caused, you get a full refund.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-black)] mb-2">
                Fast Processing
              </h3>
              <p className="text-sm text-[var(--color-gray)]">
                Standard: 5-7 business days. Express: 2-3 business days. We prioritize your filing.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-black)] mb-2">
                150+ Countries Served
              </h3>
              <p className="text-sm text-[var(--color-gray)]">
                We help non-residents from around the world get their US EIN. No US presence required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-beige)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] text-center mb-16">
            Frequently Asked{" "}
            <span className="font-serif-accent text-[var(--color-primary)]">
              Questions
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-[var(--color-white)] rounded-2xl p-6 group"
              >
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-[var(--color-black)] list-none">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-[var(--color-gray)] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faq/"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              See all FAQs
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33 8h9.34M8.67 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-primary)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-white)] mb-4">
            Ready to Get Your EIN?
          </h2>
          <p className="text-lg text-[var(--color-accent)] mb-8 max-w-xl mx-auto">
            Join thousands of non-US residents who got their EIN through ein.so.
            Fast, simple, $49.
          </p>
          <Link
            href="/apply/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-white)] px-8 py-4 text-base font-semibold text-[var(--color-black)] hover:bg-[var(--color-beige)] transition-colors"
          >
            Get My EIN — $49
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
      </section>
    </>
  );
}
