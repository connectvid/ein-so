"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  duration: number;
  driftX: number;
  driftY: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      size: 2 + Math.random() * 4, // 2-6px
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.2, // 0.1-0.3
      duration: 10 + Math.random() * 20, // 10-30s
      driftX: -30 + Math.random() * 60, // ±30px
      driftY: -30 + Math.random() * 60,
      delay: Math.random() * -20, // stagger start
    });
  }
  return particles;
}

export default function HeroParticles({
  count = 18,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const particles = useMemo(() => generateParticles(count), [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: "var(--color-blue-glow)",
          }}
          animate={{
            x: [0, p.driftX, -p.driftX * 0.5, 0],
            y: [0, p.driftY, -p.driftY * 0.6, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.6, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
