"use client";

import AnimateIn from "@/components/AnimateIn";
import { ReactNode } from "react";

export default function Section({
  children,
  surface,
  wide,
  compact,
}: {
  children: ReactNode;
  surface?: boolean;
  wide?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      className={`${compact ? "py-12" : "py-20 lg:py-28"} ${
        surface ? "bg-[var(--color-surface)]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`${wide ? "max-w-4xl" : "max-w-3xl"} mx-auto`}>
          <AnimateIn>{children}</AnimateIn>
        </div>
      </div>
    </section>
  );
}
