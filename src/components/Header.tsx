import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1280px] px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[var(--color-white)]">
          ein<span className="text-[var(--color-accent)]">.so</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-white)] text-[15px] font-medium hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/apply/"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-white)] px-5 py-2.5 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-beige)] transition-colors"
          >
            Apply Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33 8h9.34M8.67 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[var(--color-white)] p-2"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
