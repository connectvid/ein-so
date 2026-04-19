"use client";

import AnimateIn from "@/components/AnimateIn";
import { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

export default function FAQSection({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  if (!faqs?.length) return null;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
            Frequently Asked <span className="font-display gradient-text">Questions</span>
          </h2>
        </AnimateIn>
        <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
          {faqs.map((faq) => (
            <StaggerItem key={faq.q}>
              <details className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] group">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-base font-bold text-[var(--color-text)]">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
}
