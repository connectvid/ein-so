"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PricingCardProps {
  name: string;
  price: number;
  turnaround: string;
  cta: string;
  highlighted: boolean;
  stripeLink: string;
  features: readonly string[];
}

export default function PricingCard({
  name,
  price,
  turnaround,
  cta,
  highlighted,
  stripeLink,
  features,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl p-8 flex flex-col border ${
        highlighted
          ? "bg-[var(--color-navy)] text-white border-[var(--color-blue)]/40"
          : "bg-white text-[var(--color-text)] border-[var(--color-border)]"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-blue)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-bold text-center mb-2">{name}</h3>

      <div className="text-center mb-1">
        <span className={`text-5xl font-extrabold ${highlighted ? "text-white" : "text-[var(--color-navy)]"}`}>
          ${price}
        </span>
      </div>

      <p className={`text-center text-sm mb-8 ${highlighted ? "text-white/50" : "text-[var(--color-text-muted)]"}`}>
        {turnaround}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? "text-[var(--color-blue-glow)]" : "text-[var(--color-blue)]"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className={highlighted ? "text-white/80" : ""}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={stripeLink}
        className={`block w-full text-center rounded-xl py-3.5 px-6 font-bold transition-colors ${
          highlighted
            ? "bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-light)]"
            : "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)]"
        }`}
      >
        {cta}
      </Link>
    </motion.div>
  );
}
