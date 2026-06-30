"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

/* ─── Original AnimateIn ─── */

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimateInProps) {
  const { x, y } = directionMap[direction];

  return (
    <m.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── StaggerContainer / StaggerItem ─── */

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── CountUp (legacy) ─── */

export function CountUp({
  target,
  prefix = "",
  suffix = "",
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <m.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <m.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
        <m.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {target.toLocaleString()}
        </m.span>
        {suffix}
      </m.span>
    </m.span>
  );
}

/* ─── ScaleIn ─── */

export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── BlurIn ─── */

export function BlurIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── SlideReveal ─── */

export function SlideReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Sliding mask overlay */}
      <m.div
        initial={{ x: 0 }}
        whileInView={{ x: direction === "left" ? "100%" : "-100%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration,
          delay: delay + 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 z-10 bg-[var(--color-blue)]"
      />
      {/* Content fades in under the mask */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.01,
          delay: delay + 0.15,
        }}
      >
        {children}
      </m.div>
    </div>
  );
}

/* ─── FloatingElement ─── */

export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <m.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── PulseGlow ─── */

export function PulseGlow({
  children,
  className = "",
  color = "var(--color-blue)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <m.div
      animate={{
        boxShadow: [
          `0 0 0px ${color}00`,
          `0 0 20px ${color}66, 0 0 40px ${color}33`,
          `0 0 0px ${color}00`,
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
