import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: number;
  turnaround: string;
  cta: string;
  highlighted: boolean;
  stripeLink: string;
  features: readonly string[];
}

export default function PricingCard({
  name,
  price,
  turnaround,
  cta,
  highlighted,
  stripeLink,
  features,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        highlighted
          ? "bg-[var(--color-primary)] text-[var(--color-white)]"
          : "bg-[var(--color-beige)] text-[var(--color-black)]"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>

      <div className="text-center mb-1">
        <span
          className={`text-5xl font-bold ${
            highlighted ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
          }`}
        >
          ${price}
        </span>
      </div>

      <p
        className={`text-center text-sm mb-6 ${
          highlighted ? "text-[var(--color-accent)]/80" : "text-[var(--color-gray)]"
        }`}
      >
        {turnaround}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={stripeLink}
        className={`block w-full text-center rounded-lg py-3.5 px-6 font-semibold transition-colors ${
          highlighted
            ? "bg-[var(--color-white)] text-[var(--color-black)] hover:bg-[var(--color-beige)]"
            : "bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-secondary)]"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
