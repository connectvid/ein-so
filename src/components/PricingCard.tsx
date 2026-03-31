"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      whileHover={{
        y: -6,
        boxShadow: highlighted
          ? "0 0 30px rgba(37,99,235,0.35), 0 20px 40px rgba(10,22,40,0.15)"
          : "0 0 20px rgba(37,99,235,0.15), 0 20px 40px rgba(10,22,40,0.1)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl p-8 flex flex-col border-2 transition-colors ${
        highlighted
          ? "bg-[var(--color-navy)] text-white border-[var(--color-blue)] shadow-xl shadow-[var(--color-blue)]/10"
          : "bg-white text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-blue)]/30"
      }`}
    >
      {/* Most Popular badge with pulse */}
      {highlighted && (
        <motion.span
          animate={{
            boxShadow: [
              "0 0 0px rgba(245,158,11,0)",
              "0 0 12px rgba(245,158,11,0.5)",
              "0 0 0px rgba(245,158,11,0)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-amber)] text-[var(--color-navy)] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide"
        >
          Most Popular
        </motion.span>
      )}

      <h3 className="text-xl font-bold text-center mb-2">{name}</h3>

      <div className="text-center mb-1">
        <motion.span
          className={`text-5xl font-extrabold inline-block ${
            inView ? "shimmer-text" : "gradient-text"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={
            inView
              ? { animationIterationCount: 1, animationDuration: "2s" }
              : undefined
          }
        >
          ${price}
        </motion.span>
      </div>

      <p
        className={`text-center text-sm mb-8 ${
          highlighted ? "text-white/50" : "text-[var(--color-text-muted)]"
        }`}
      >
        {turnaround}
      </p>

      <ul className="space-y-3.5 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-blue)]"
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
        className={`block w-full text-center rounded-xl py-3.5 px-6 font-bold transition-all hover:-translate-y-0.5 ${
          highlighted
            ? "bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-light)] shadow-lg shadow-[var(--color-blue)]/30"
            : "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)]"
        }`}
      >
        {cta}
      </Link>
    </motion.div>
  );
}
