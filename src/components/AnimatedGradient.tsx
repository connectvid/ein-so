"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGradientProps {
  children?: ReactNode;
  className?: string;
}

export default function AnimatedGradient({
  children,
  className = "",
}: AnimatedGradientProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(37,99,235,0.15) 0%, rgba(10,22,40,0) 70%)",
            "radial-gradient(ellipse 80% 60% at 80% 30%, rgba(96,165,250,0.12) 0%, rgba(10,22,40,0) 70%)",
            "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(99,60,235,0.1) 0%, rgba(10,22,40,0) 70%)",
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(37,99,235,0.15) 0%, rgba(10,22,40,0) 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* Secondary slower gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 50% at 70% 60%, rgba(96,165,250,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(139,92,246,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 60% 30%, rgba(37,99,235,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 70% 60%, rgba(96,165,250,0.08) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
