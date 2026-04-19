"use client";

import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export default function PromoBox({
  title,
  subtitle,
  buttonText,
  buttonHref = "/apply/",
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
}) {
  return (
    <AnimateIn className="mt-8">
      <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 text-center">
        <p className="text-2xl font-extrabold text-[var(--color-text)] mb-2">{title}</p>
        <p className="text-[var(--color-text-muted)] text-sm mb-4">{subtitle}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-blue)] px-6 py-3.5 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
        >
          {buttonText}
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </AnimateIn>
  );
}
