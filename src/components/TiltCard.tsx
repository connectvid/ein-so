"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 5,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 200,
    damping: 20,
  });

  // Light reflection position based on mouse
  const lightX = useTransform(mouseX, [0, 1], [0, 100]);
  const lightY = useTransform(mouseY, [0, 1], [0, 100]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    mouseX.set(nx);
    mouseY.set(ny);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative ${className}`}
      >
        {/* Subtle light reflection overlay */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [lightX, lightY],
              ([lx, ly]) =>
                `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
            ),
          }}
          aria-hidden="true"
        />
        {children}
      </motion.div>
    </div>
  );
}
