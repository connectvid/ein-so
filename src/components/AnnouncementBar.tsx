"use client";

import Link from "next/link";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[var(--color-navy)] text-white text-sm py-2.5 relative z-[60] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-center gap-3">
        <p className="text-center font-medium">
          <span className="hidden sm:inline">Non-US resident? </span>
          Get your EIN in as fast as 2-3 business days.{" "}
          <Link href="/apply/" className="underline font-bold hover:no-underline">
            Apply now for $49
          </Link>
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-1"
          aria-label="Close announcement"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M4 12l8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
