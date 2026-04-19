"use client";

import { StaggerItem } from "@/components/AnimateIn";
import { ReactNode } from "react";

export default function Alert({
  children,
  type = "danger",
  title,
  badge,
}: {
  children: ReactNode;
  type?: "danger" | "warning" | "info";
  title?: string;
  badge?: string;
}) {
  const styles = {
    danger: {
      bg: "bg-red-50",
      border: "border-red-200",
      title: "text-red-800",
      badge: "bg-red-100 text-red-700",
    },
    warning: {
      bg: "bg-[var(--color-amber)]/5",
      border: "border-[var(--color-amber)]/20",
      title: "text-[var(--color-text)]",
      badge: "bg-[var(--color-amber)]/10 text-[var(--color-amber)]",
    },
    info: {
      bg: "bg-[var(--color-blue)]/5",
      border: "border-[var(--color-blue)]/20",
      title: "text-[var(--color-text)]",
      badge: "bg-[var(--color-blue)]/10 text-[var(--color-blue)]",
    },
  };

  const s = styles[type];

  return (
    <StaggerItem>
      <div className={`${s.bg} rounded-2xl border ${s.border} p-6`}>
        {(title || badge) && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
            {title && <h3 className={`text-lg font-bold ${s.title}`}>{title}</h3>}
            {badge && (
              <span
                className={`inline-flex items-center rounded-full ${s.badge} px-3 py-0.5 text-xs font-bold whitespace-nowrap`}
              >
                {badge}
              </span>
            )}
          </div>
        )}
        <div className="text-sm text-[var(--color-text-muted)] leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </StaggerItem>
  );
}
