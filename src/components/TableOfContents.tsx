"use client";

import { useState, useEffect } from "react";

export default function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 mb-10" aria-label="Table of contents">
      <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">On This Page</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`text-sm block py-1 transition-colors ${
                activeId === item.id
                  ? "text-[var(--color-blue)] font-semibold"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
