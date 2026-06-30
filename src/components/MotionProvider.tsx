"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only framer-motion's `domAnimation` feature set (animations, variants,
 * exit animations, and hover/tap/focus/in-view gestures) and pairs it with the
 * lightweight `m` components used across the app. This replaces the full
 * `motion` bundle (~34kb) with ~17kb. `strict` makes any leftover `motion.*`
 * usage throw, so the heavy bundle can never sneak back in.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
