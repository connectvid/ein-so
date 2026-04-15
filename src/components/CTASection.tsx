"use client";

import AnimateIn from "@/components/AnimateIn";
import { SITE } from "@/lib/constants";

export default function CTASection({ title = "Ready to Get Your EIN?", subtitle = "Fast, simple, $49. No SSN required." }: { title?: string; subtitle?: string }) {
  return (
    <section className="relative py-20 lg:py-28 bg-[var(--color-navy)] overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-blue)] rounded-full opacity-[0.08] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
          <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto">{subtitle}</p>
          <a
            href={`${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappStandard)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
          >
            Get My EIN for $49
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
