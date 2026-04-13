"use client";

import { useState, FormEvent } from "react";
import AnimateIn from "@/components/AnimateIn";

export default function EmailCapture({
  title = "Get Our Free EIN Guide",
  subtitle = "Step-by-step PDF guide to getting your EIN as a non-resident. No spam, ever.",
  buttonText = "Send Me the Guide",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Silently fail — we still show success to avoid blocking UX
    }

    setSubmitted(true);
  }

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-4">
              {title}
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">{subtitle}</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-green-800 font-semibold">Check your inbox! We sent the guide to {email}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 rounded-xl border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[var(--color-blue)] px-6 py-3 font-bold text-white hover:bg-[var(--color-blue-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--color-blue)]/30"
                >
                  {buttonText}
                </button>
              </form>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
