"use client";

import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

export default function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <AnimateIn className="text-center mt-12">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-4 text-base font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
      >
        {children}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4.17 10h11.66M10.83 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </AnimateIn>
  );
}
