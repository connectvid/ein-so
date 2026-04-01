"use client";

import { motion } from "framer-motion";

export default function EINCardVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-gradient-to-br from-[#0F2440] to-[#0A1628] rounded-2xl border border-white/10 p-8 shadow-2xl shadow-black/30">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                <span className="text-white/70 text-[10px] font-bold">IRS</span>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium">Department of the Treasury</p>
                <p className="text-white/40 text-[10px]">Internal Revenue Service</p>
              </div>
            </div>
          </div>

          {/* EIN */}
          <div className="mb-8">
            <p className="text-white/30 text-[10px] mb-2 font-medium uppercase tracking-widest">Employer Identification Number</p>
            <div className="flex items-center gap-0.5">
              {["8", "8", "-", "1", "2", "3", "4", "5", "6", "7"].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.07, duration: 0.3 }}
                  className={`text-2xl font-mono font-bold ${
                    char === "-" ? "text-white/20 mx-1" : "text-white/90"
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div>
              <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Business Name</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-white/70 text-sm font-medium"
              >
                Your Business LLC
              </motion.p>
            </div>
            <div>
              <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Entity Type</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-white/70 text-sm font-medium"
              >
                Limited Liability Co.
              </motion.p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-white/5">
            <div>
              <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Status</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 bg-[var(--color-success)] rounded-full" />
                <span className="text-[var(--color-success)] text-xs font-semibold">Active</span>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="text-right"
            >
              <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Filed via</p>
              <p className="text-[var(--color-blue-glow)] text-xs font-semibold">ein.so</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
