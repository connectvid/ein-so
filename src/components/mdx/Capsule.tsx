"use client";

import { ReactNode } from "react";

export default function Capsule({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
      {label && (
        <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <div className="text-lg text-[var(--color-text)] leading-relaxed [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}
