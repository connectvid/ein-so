"use client";

import { ReactNode } from "react";

export default function PenaltyGrid({ children }: { children: ReactNode }) {
  return (
    <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

export function PenaltyStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-2xl font-extrabold text-red-700">{value}</p>
      <p className="text-sm text-red-600">{label}</p>
    </div>
  );
}
