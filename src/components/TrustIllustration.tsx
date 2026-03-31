"use client";

/**
 * Animated shield/trust SVG with orbiting trust badges.
 */
export default function TrustIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      {/* Rotating dashed ring */}
      <circle cx="150" cy="150" r="130" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.15">
        <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="50s" repeatCount="indefinite" />
      </circle>

      {/* Pulse ring */}
      <circle cx="150" cy="150" r="80" stroke="#2563EB" strokeWidth="1" fill="none" opacity="0">
        <animate attributeName="r" values="80;130" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Shield body */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="4s" repeatCount="indefinite" />

        {/* Shield shape */}
        <path
          d="M150 60 L200 85 L200 155 Q200 200 150 230 Q100 200 100 155 L100 85 Z"
          fill="#0A1628"
          stroke="#2563EB"
          strokeWidth="2"
        />

        {/* Shield inner glow */}
        <path
          d="M150 72 L192 93 L192 152 Q192 192 150 218 Q108 192 108 152 L108 93 Z"
          fill="#2563EB"
          opacity="0.08"
        />

        {/* Animated checkmark inside shield */}
        <path
          d="M130 148 L145 163 L172 133"
          stroke="#2563EB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="60"
          strokeDashoffset="60"
        >
          <animate attributeName="stroke-dashoffset" values="60;0" dur="0.8s" begin="0.5s" fill="freeze" />
        </path>

        {/* Glow pulse on checkmark */}
        <path
          d="M130 148 L145 163 L172 133"
          stroke="#60A5FA"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0"
          filter="url(#trustGlow)"
        >
          <animate attributeName="opacity" values="0;0.6;0" dur="2.5s" begin="1.3s" repeatCount="indefinite" />
        </path>

        <defs>
          <filter id="trustGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
      </g>

      {/* Orbiting money-back badge */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="18s" repeatCount="indefinite" />
        <g transform="translate(150, 28)">
          <circle r="16" fill="#F59E0B" opacity="0.9" />
          <text x="0" y="1" textAnchor="middle" fill="#0A1628" fontSize="7" fontWeight="800" fontFamily="system-ui">100%</text>
          <text x="0" y="9" textAnchor="middle" fill="#0A1628" fontSize="5" fontWeight="600" fontFamily="system-ui">BACK</text>
        </g>
      </g>

      {/* Orbiting lock icon */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="180 150 150" to="540 150 150" dur="22s" repeatCount="indefinite" />
        <g transform="translate(150, 272)">
          <circle r="14" fill="#2563EB" opacity="0.8" />
          <rect x="-5" y="-2" width="10" height="8" rx="1.5" fill="none" stroke="white" strokeWidth="1.2" />
          <path d="M-3 -2 L-3 -5 Q-3 -9 0 -9 Q3 -9 3 -5 L3 -2" fill="none" stroke="white" strokeWidth="1.2" />
        </g>
      </g>

      {/* Sparkles */}
      <circle cx="60" cy="80" r="2" fill="#60A5FA" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="240" cy="100" r="1.5" fill="#FCD34D" opacity="0">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="230" cy="240" r="2" fill="#2563EB" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
