"use client";

/**
 * Animated SVG for the "How It Works" section.
 * Shows the flow: Form → Fax → IRS → EIN delivered.
 */
export default function ProcessIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
      aria-hidden="true"
    >
      {/* Connecting dashed path */}
      <path
        d="M100 60 L300 60 L500 60 L700 60"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        opacity="0.2"
      />

      {/* Animated dot traveling along the path */}
      <circle cx="0" cy="0" r="4" fill="#2563EB">
        <animateMotion dur="4s" repeatCount="indefinite" path="M100,60 L300,60 L500,60 L700,60" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Step 1: Form icon */}
      <g transform="translate(100, 60)">
        <circle r="30" fill="#2563EB" opacity="0.1">
          <animate attributeName="r" values="28;32;28" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="24" fill="#0A1628" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="-8" y="-10" width="16" height="20" rx="2" fill="none" stroke="#60A5FA" strokeWidth="1.2" />
        <line x1="-4" y1="-4" x2="4" y2="-4" stroke="#60A5FA" strokeWidth="0.8" opacity="0.6" />
        <line x1="-4" y1="0" x2="4" y2="0" stroke="#60A5FA" strokeWidth="0.8" opacity="0.6" />
        <line x1="-4" y1="4" x2="2" y2="4" stroke="#60A5FA" strokeWidth="0.8" opacity="0.6" />
      </g>

      {/* Step 2: Person icon */}
      <g transform="translate(300, 60)">
        <circle r="30" fill="#2563EB" opacity="0.1">
          <animate attributeName="r" values="28;32;28" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle r="24" fill="#0A1628" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="0" cy="-4" r="5" fill="none" stroke="#60A5FA" strokeWidth="1.2" />
        <path d="M-8 10 Q-8 2 0 2 Q8 2 8 10" fill="none" stroke="#60A5FA" strokeWidth="1.2" />
      </g>

      {/* Step 3: Fax/Send icon */}
      <g transform="translate(500, 60)">
        <circle r="30" fill="#2563EB" opacity="0.1">
          <animate attributeName="r" values="28;32;28" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle r="24" fill="#0A1628" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M-6 0l10-7v4h4v6h-4v4z" fill="#60A5FA" opacity="0.8" />
      </g>

      {/* Step 4: Checkmark / Delivered */}
      <g transform="translate(700, 60)">
        <circle r="30" fill="#10B981" opacity="0.1">
          <animate attributeName="r" values="28;34;28" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle r="24" fill="#0A1628" stroke="#10B981" strokeWidth="1.5" />
        <path d="M-6 0l5 5 9-10" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="25" strokeDashoffset="25">
          <animate attributeName="stroke-dashoffset" values="25;0" dur="0.6s" begin="2s" fill="freeze" />
        </path>
      </g>

      {/* Step labels */}
      <text x="100" y="105" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="system-ui">Choose Plan</text>
      <text x="300" y="105" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="system-ui">Your Info</text>
      <text x="500" y="105" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="system-ui">We File SS-4</text>
      <text x="700" y="105" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="600" fontFamily="system-ui">EIN Delivered</text>
    </svg>
  );
}
