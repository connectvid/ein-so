"use client";

import { ReactNode } from "react";

export default function InfoBox({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 my-6">
      {title && (
        <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">{title}</h3>
      )}
      <div className="text-[var(--color-text-muted)] leading-relaxed [&>ol]:space-y-3 [&>ol]:list-decimal [&>ol]:list-inside [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
