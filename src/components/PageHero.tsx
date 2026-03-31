"use client";

import { motion } from "framer-motion";

export default function PageHero({
  label,
  title,
  titleAccent,
  description,
}: {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
}) {
  return (
    <section className="relative bg-[var(--color-navy)] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-blue)] rounded-full opacity-[0.06] blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-bold text-[var(--color-blue-glow)] uppercase tracking-widest mb-4">{label}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            {title} <span className="font-display gradient-text">{titleAccent}</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
