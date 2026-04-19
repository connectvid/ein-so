"use client";

import { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <StaggerContainer className="space-y-6" staggerDelay={0.08}>
      {children}
    </StaggerContainer>
  );
}

export function Step({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <StaggerItem>
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-blue)] text-white flex items-center justify-center font-extrabold text-sm">
          {step}
        </div>
        <div>
          <h3 className="text-base font-bold text-[var(--color-text)] mb-1">{title}</h3>
          <div className="text-sm text-[var(--color-text-muted)] leading-relaxed [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}
