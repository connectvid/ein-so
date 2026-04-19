"use client";

import AnimateIn from "@/components/AnimateIn";
import { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import Link from "next/link";

export function InternalLinks({
  children,
  title = "Related Guides",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <section className="py-16 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-[var(--color-text)]">{title}</h2>
        </AnimateIn>
        <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.05}>
          {children}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function InternalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <StaggerItem>
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-xl px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-blue)] transition-all"
      >
        {label}
      </Link>
    </StaggerItem>
  );
}
