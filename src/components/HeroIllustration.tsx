"use client";

/**
 * Animated SVG illustration for the hero section.
 * Shows a stylized document (SS-4 form) with orbiting elements
 * representing the EIN delivery process: document → fax → EIN number.
 */
export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for main document */}
          <linearGradient id="docGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A5F" />
            <stop offset="100%" stopColor="#0F2440" />
          </linearGradient>

          {/* Blue accent gradient */}
          <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          {/* Amber gradient */}
          <linearGradient id="amberGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
        </defs>

        {/* ── Pulsing background circles ── */}
        <circle cx="200" cy="200" r="160" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.15">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="60s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="130" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.1">
          <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="45s" repeatCount="indefinite" />
        </circle>

        {/* Pulse rings */}
        <circle cx="200" cy="200" r="100" stroke="#2563EB" strokeWidth="1" fill="none" opacity="0">
          <animate attributeName="r" values="100;160" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="100" stroke="#2563EB" strokeWidth="1" fill="none" opacity="0">
          <animate attributeName="r" values="100;160" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>

        {/* ── Main document (SS-4 form) ── */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="5s" repeatCount="indefinite" />

          {/* Document shadow */}
          <rect x="128" y="108" width="150" height="195" rx="12" fill="#000" opacity="0.15" />

          {/* Document body */}
          <rect x="125" y="105" width="150" height="195" rx="12" fill="url(#docGrad)" stroke="#2563EB" strokeWidth="1.5" />

          {/* Document header bar */}
          <rect x="125" y="105" width="150" height="36" rx="12" fill="#2563EB" opacity="0.9" />
          <rect x="125" y="129" width="150" height="12" fill="#2563EB" opacity="0.9" />

          {/* Header text: "SS-4" */}
          <text x="200" y="126" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="system-ui">SS-4</text>

          {/* Document lines (form fields) */}
          <rect x="140" y="152" width="90" height="4" rx="2" fill="#2563EB" opacity="0.2" />
          <rect x="140" y="164" width="120" height="4" rx="2" fill="#2563EB" opacity="0.15" />
          <rect x="140" y="176" width="70" height="4" rx="2" fill="#2563EB" opacity="0.2" />
          <rect x="140" y="192" width="105" height="4" rx="2" fill="#2563EB" opacity="0.15" />
          <rect x="140" y="204" width="85" height="4" rx="2" fill="#2563EB" opacity="0.2" />
          <rect x="140" y="220" width="95" height="4" rx="2" fill="#2563EB" opacity="0.15" />

          {/* Checkboxes */}
          <rect x="140" y="238" width="10" height="10" rx="2" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
          <rect x="158" y="238" width="50" height="4" rx="2" fill="#2563EB" opacity="0.15" />

          {/* Animated checkmark on the checkbox */}
          <path d="M142 243l3 3 5-5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="15" strokeDashoffset="15">
            <animate attributeName="stroke-dashoffset" values="15;0" dur="0.6s" begin="1.5s" fill="freeze" />
          </path>

          {/* Signature line */}
          <line x1="140" y1="270" x2="260" y2="270" stroke="#2563EB" strokeWidth="0.8" opacity="0.3" />
          <path d="M145 268 Q155 258 165 268 T185 268" stroke="#60A5FA" strokeWidth="1.2" fill="none" opacity="0" strokeLinecap="round">
            <animate attributeName="opacity" values="0;0.8" dur="0.5s" begin="2s" fill="freeze" />
            <animate attributeName="stroke-dashoffset" values="50;0" dur="0.8s" begin="2s" fill="freeze" />
          </path>

          {/* Corner fold */}
          <path d="M263 105 L275 105 L275 117 Z" fill="#0F2440" />
          <path d="M263 105 L275 117 L263 117 Z" fill="#1E3A5F" stroke="#2563EB" strokeWidth="0.5" />
        </g>

        {/* ── Orbiting EIN badge ── */}
        <g filter="url(#glow)">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
          <g transform="translate(200, 45)">
            <animateTransform attributeName="transform" type="translate" values="200,45; 200,40; 200,45" dur="3s" repeatCount="indefinite" />
            <rect x="-32" y="-14" width="64" height="28" rx="14" fill="url(#blueGrad)" />
            <text x="0" y="5" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui">EIN</text>
          </g>
        </g>

        {/* ── Orbiting $49 badge ── */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="120 200 200" to="480 200 200" dur="25s" repeatCount="indefinite" />
          <g transform="translate(200, 355)">
            <animateTransform attributeName="transform" type="translate" values="200,355; 200,350; 200,355" dur="4s" repeatCount="indefinite" />
            <rect x="-24" y="-12" width="48" height="24" rx="12" fill="url(#amberGrad)" />
            <text x="0" y="4" textAnchor="middle" fill="#0A1628" fontSize="10" fontWeight="800" fontFamily="system-ui">$49</text>
          </g>
        </g>

        {/* ── Orbiting checkmark ── */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="240 200 200" to="600 200 200" dur="22s" repeatCount="indefinite" />
          <g transform="translate(50, 200)">
            <circle cx="0" cy="0" r="16" fill="#10B981" opacity="0.9" />
            <path d="M-5 0l4 4 7-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* ── Orbiting fax icon ── */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="60 200 200" to="420 200 200" dur="28s" repeatCount="indefinite" />
          <g transform="translate(350, 200)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#2563EB" opacity="0.8" />
            <line x1="-8" y1="-4" x2="8" y2="-4" stroke="white" strokeWidth="1" opacity="0.6" />
            <line x1="-8" y1="0" x2="5" y2="0" stroke="white" strokeWidth="1" opacity="0.6" />
            <line x1="-8" y1="4" x2="6" y2="4" stroke="white" strokeWidth="1" opacity="0.6" />
          </g>
        </g>

        {/* ── Sparkle dots ── */}
        <circle cx="90" cy="120" r="2" fill="#60A5FA" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="100" r="1.5" fill="#FCD34D" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="310" cy="310" r="2" fill="#60A5FA" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="280" r="1.5" fill="#2563EB" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="2.8s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="60" r="1" fill="#FCD34D" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0" dur="3.2s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
