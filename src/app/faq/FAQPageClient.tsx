"use client";

import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const categories = [
  "General EIN Questions",
  "Non-Resident Specific",
  "Application Process",
  "After Getting Your EIN",
] as const;

const categoryDescriptions: Record<string, { icon: string; description: string }> = {
  "General EIN Questions": {
    icon: "📋",
    description: "Learn the basics about Employer Identification Numbers and who needs one.",
  },
  "Non-Resident Specific": {
    icon: "🌍",
    description: "Everything non-US residents need to know about getting an EIN.",
  },
  "Application Process": {
    icon: "📝",
    description: "Step-by-step details about applying for your EIN through ein.so.",
  },
  "After Getting Your EIN": {
    icon: "✅",
    description: "What to do once you have your EIN and how to use it.",
  },
};

export default function FAQPageClient({
  faqs,
}: {
  faqs: { q: string; a: string; category: string }[];
}) {
  return (
    <>
      <PageHero
        label="FAQ"
        title="EIN FAQ —"
        titleAccent="Your Questions Answered"
        description="Find answers to the most common questions about EIN numbers, the application process, and how our service works for non-US residents."
      />

      {/* Quick Navigation */}
      <section className="py-12 bg-white border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-6 text-center">
              Jump to a Topic
            </p>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
            {categories.map((cat) => (
              <StaggerItem key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
                >
                  {categoryDescriptions[cat].icon} {cat}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Categories */}
      {categories.map((category, catIndex) => {
        const categoryFaqs = faqs.filter((f) => f.category === category);
        const slug = category.toLowerCase().replace(/\s+/g, "-");
        const isAlt = catIndex % 2 === 0;

        return (
          <section
            key={category}
            id={slug}
            className={`py-20 lg:py-28 ${isAlt ? "bg-[var(--color-surface)]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <AnimateIn className="text-center mb-12">
                <p className="text-4xl mb-4">{categoryDescriptions[category].icon}</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text)] mb-3">
                  {category.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="font-display gradient-text">
                    {category.split(" ").slice(-1)[0]}
                  </span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
                  {categoryDescriptions[category].description}
                </p>
              </AnimateIn>

              <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
                {categoryFaqs.map((faq) => (
                  <StaggerItem key={faq.q}>
                    <details className="bg-white rounded-2xl border border-[var(--color-border)] group">
                      <summary className="flex items-center justify-between cursor-pointer p-6 text-base font-bold text-[var(--color-text)] [&::-webkit-details-marker]:hidden list-none">
                        {faq.q}
                        <svg
                          className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300"
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
                      <p className="px-6 pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        );
      })}

      {/* Related Pages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text)]">
              Learn More About <span className="font-display gradient-text">EINs</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 max-w-xl mx-auto">
              Explore our in-depth guides for more detailed information.
            </p>
          </AnimateIn>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            staggerDelay={0.1}
          >
            {[
              {
                title: "What Is an EIN?",
                desc: "A complete guide to Employer Identification Numbers and why you need one.",
                href: "/what-is-ein/",
              },
              {
                title: "How to Get an EIN",
                desc: "Step-by-step instructions for non-residents applying for an EIN.",
                href: "/how-to-get-ein/",
              },
              {
                title: "EIN vs ITIN",
                desc: "Understand the difference between an EIN and ITIN and which one you need.",
                href: "/ein-vs-itin/",
              },
              {
                title: "Apply Now",
                desc: "Ready to get your EIN? Start your application today for just $49.",
                href: "/apply/",
              },
            ].map((page) => (
              <StaggerItem key={page.href}>
                <Link
                  href={page.href}
                  className="block bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 card-hover h-full group"
                >
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-blue)] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                    {page.desc}
                  </p>
                  <span className="text-sm font-semibold text-[var(--color-blue)] inline-flex items-center gap-1">
                    Read more
                    <svg
                      width="16"
                      height="16"
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
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Still Have Questions?"
        subtitle="Chat with us on WhatsApp or get started with your EIN application today."
      />
    </>
  );
}
