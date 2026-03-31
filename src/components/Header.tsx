"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[var(--color-blue)] rounded-lg rotate-6 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-[var(--color-navy)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                scrolled ? "text-[var(--color-navy)]" : "text-white"
              }`}
            >
              ein<span className="text-[var(--color-blue)]">.so</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-blue)] ${
                  scrolled ? "text-[var(--color-text)]" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/apply/"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[var(--color-blue)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/20"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.33 8h9.34M8.67 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[var(--color-navy)]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-blue)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply/"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--color-blue)] px-8 py-3.5 text-base font-bold text-white"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
