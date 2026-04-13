"use client";

import AnimateIn from "@/components/AnimateIn";

export default function ComparisonTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <AnimateIn>
      <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
        <table className="w-full text-left">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="bg-[var(--color-navy)]">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface)]"}`}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-6 py-4 text-sm text-[var(--color-text-muted)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimateIn>
  );
}
