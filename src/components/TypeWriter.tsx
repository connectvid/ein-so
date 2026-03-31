"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypeWriterProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  texts,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex] ?? "";

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (charIndex < currentText.length) {
        setCharIndex((c) => c + 1);
        return typingSpeed + Math.random() * 40; // slight variation
      }
      // Pause at end of word
      setIsDeleting(true);
      return pauseDuration;
    }
    // Deleting
    if (charIndex > 0) {
      setCharIndex((c) => c - 1);
      return deletingSpeed;
    }
    // Move to next word
    setIsDeleting(false);
    setTextIndex((i) => (i + 1) % texts.length);
    return typingSpeed;
  }, [charIndex, isDeleting, currentText, texts.length, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const delay = tick();
    const timeout = setTimeout(() => {
      // Force re-render by calling tick logic inline
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex((c) => c + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, textIndex]);

  const displayed = currentText.slice(0, charIndex);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${textIndex}-${displayed}`}
          initial={false}
          className="inline-block"
        >
          {displayed}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] ml-0.5 bg-current align-middle"
      />
    </span>
  );
}
