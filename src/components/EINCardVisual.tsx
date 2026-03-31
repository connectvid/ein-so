"use client";

import { motion } from "framer-motion";

/**
 * A clean, professional animated EIN card visual for the hero.
 * Looks like a real government document / ID card.
 */
export default function EINCardVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Soft glow behind the card */}
      <div className="absolute inset-0 bg-[var(--color-blue)] rounded-3xl blur-[60px] opacity-[0.15]" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-[#0F2440] to-[#0A1628] rounded-2xl border border-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          {/* Card header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-blue)] flex items-center justify-center">
                <span className="text-white text-xs font-bold">IRS</span>
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Department of Treasury</p>
                <p className="text-white/60 text-[10px]">Internal Revenue Service</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/30 text-[10px] uppercase tracking-wider">Federal Tax ID</p>
            </div>
          </div>

          {/* EIN number with animated reveal */}
          <div className="mb-8">
            <p className="text-white/40 text-xs mb-2 font-medium uppercase tracking-wider">Employer Identification Number</p>
            <div className="flex items-center gap-1">
              {["8", "8", "-", "1", "2", "3", "4", "5", "6", "7"].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-3xl font-mono font-bold tracking-wider ${
                    char === "-" ? "text-white/30 mx-1" : "text-white"
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Card details */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Business Name</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="text-white/80 text-sm font-medium"
              >
                Your Business LLC
              </motion.p>
            </div>
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Entity Type</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="text-white/80 text-sm font-medium"
              >
                Limited Liability
              </motion.p>
            </div>
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Date Issued</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.5 }}
                className="text-white/80 text-sm font-medium"
              >
                April 2026
              </motion.p>
            </div>
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Status</p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-1.5"
              >
                <span className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
                <span className="text-[var(--color-success)] text-sm font-semibold">Active</span>
              </motion.div>
            </div>
          </div>

          {/* Subtle corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-blue)]/10 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Floating badge: $49 */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.5, type: "spring", stiffness: 200 }}
        className="absolute -bottom-4 -right-4 bg-[var(--color-amber)] text-[var(--color-navy)] rounded-xl px-4 py-2 shadow-lg"
      >
        <p className="text-xs font-bold">Starting at</p>
        <p className="text-xl font-extrabold">$49</p>
      </motion.div>

      {/* Floating badge: checkmark */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5, type: "spring", stiffness: 200 }}
        className="absolute -top-3 -left-3 w-10 h-10 bg-[var(--color-success)] rounded-full flex items-center justify-center shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 9l3.5 3.5L14 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
}
