"use client";

import { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { ReactNode } from "react";

const iconMap: Record<string, React.ReactNode> = {
  dollar: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  lightning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  chat: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

export function NumberedCards({ children }: { children: ReactNode }) {
  return (
    <StaggerContainer className="space-y-4">
      {children}
    </StaggerContainer>
  );
}

export function Card({
  title,
  children,
  index,
}: {
  title: string;
  children: ReactNode;
  index?: number;
}) {
  return (
    <StaggerItem>
      <div className="bg-white rounded-xl border border-[var(--color-border)] p-5 flex gap-4">
        {index !== undefined && (
          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center text-sm font-bold">
            {index}
          </span>
        )}
        <div>
          <h3 className="font-bold text-[var(--color-text)] mb-1">{title}</h3>
          <div className="text-sm text-[var(--color-text-muted)] leading-relaxed [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}

export function FeatureCards({
  children,
  columns = 2,
}: {
  children: ReactNode;
  columns?: number;
}) {
  const colClass =
    columns === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "grid-cols-1 md:grid-cols-3"
        : "grid-cols-1 md:grid-cols-2";

  return (
    <StaggerContainer
      className={`grid ${colClass} gap-6 max-w-${columns === 4 ? "5" : "4"}xl mx-auto`}
      staggerDelay={0.1}
    >
      {children}
    </StaggerContainer>
  );
}

export function FeatureCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: ReactNode;
}) {
  return (
    <StaggerItem>
      <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] card-hover h-full">
        {icon && iconMap[icon] && (
          <div className="w-12 h-12 rounded-xl bg-[var(--color-blue)]/10 flex items-center justify-center text-[var(--color-blue)] mb-4">
            {iconMap[icon]}
          </div>
        )}
        <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{title}</h3>
        <div className="text-sm text-[var(--color-text-muted)] leading-relaxed [&>p]:mb-0">
          {children}
        </div>
      </div>
    </StaggerItem>
  );
}

export function ProcessSteps({
  children,
  columns = 4,
}: {
  children: ReactNode;
  columns?: number;
}) {
  const colClass =
    columns === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "grid-cols-1 md:grid-cols-3"
        : "grid-cols-1 md:grid-cols-2";

  return (
    <StaggerContainer
      className={`grid ${colClass} gap-6 max-w-5xl mx-auto`}
      staggerDelay={0.12}
    >
      {children}
    </StaggerContainer>
  );
}

export function ProcessStep({
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
      <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] card-hover h-full text-center">
        <div className="w-10 h-10 rounded-full bg-[var(--color-blue)] text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">
          {step}
        </div>
        <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{title}</h3>
        <div className="text-sm text-[var(--color-text-muted)] leading-relaxed [&>p]:mb-0">
          {children}
        </div>
      </div>
    </StaggerItem>
  );
}
