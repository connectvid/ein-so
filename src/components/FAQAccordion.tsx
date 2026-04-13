"use client";

import AnimateIn from "@/components/AnimateIn";

export default function FAQAccordion({ faqs, title = "Frequently Asked", titleAccent = "Questions" }: { faqs: { q: string; a: string }[]; title?: string; titleAccent?: string }) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-4">
            {title} <span className="font-display gradient-text">{titleAccent}</span>
          </h2>
        </AnimateIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden"
            >
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between">
                <span className="font-semibold text-[var(--color-text)] pr-4">{faq.q}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[var(--color-text-muted)] transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 border-t border-[var(--color-border)] text-[var(--color-text-muted)] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
