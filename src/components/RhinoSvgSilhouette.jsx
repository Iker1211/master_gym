import React from 'react';

/**
 * Pure SVG vector illustration of a stoic, noble rhinoceros silhouette.
 * Tier-1 athletic branding: non-violent, architectural, minimalist geometry.
 * Scales infinitely with zero pixelation and negligible file footprint.
 */
export default function RhinoSvgSilhouette({
  className = '',
  style = {},
  gradientId = 'rhino-gradient',
  strokeWidth = 1.5,
}) {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rhino-svg-silhouette ${className}`}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="10%" y1="90%" x2="90%" y2="10%">
          <stop offset="0%" stopColor="#FF007F" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FF2688" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFEA00" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id={`${gradientId}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF007F" stopOpacity="0.15" />
          <stop offset="60%" stopColor="#FFEA00" stopOpacity="0.05" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <filter id={`${gradientId}-filter`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Subtle background energy aura */}
      <circle cx="480" cy="240" r="220" fill={`url(#${gradientId}-glow)`} />

      {/* Rhino Contours: Stoic Head, Horns, Neck & Massive Shoulder Line */}
      <g filter={`url(#${gradientId}-filter)`} stroke={`url(#${gradientId})`} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Primary Horn Arc (Graceful, solid, upward curved, peaceful strength) */}
        <path
          d="M 620 280 C 635 240, 645 180, 625 140 C 610 160, 585 220, 560 250"
          strokeWidth={strokeWidth * 1.5}
        />
        {/* Secondary Horn */}
        <path
          d="M 555 245 C 560 220, 568 200, 550 185 C 540 200, 532 230, 528 250"
        />

        {/* Snout and Chin line */}
        <path
          d="M 620 280 C 610 300, 580 325, 545 325 C 525 325, 510 315, 495 300 C 475 285, 440 280, 410 290"
        />

        {/* Eye contour & Brow (Calm, observant, serene) */}
        <path
          d="M 505 235 C 515 228, 525 230, 532 238 C 522 242, 512 242, 505 235 Z"
          fill="none"
          strokeWidth={strokeWidth}
        />
        <path
          d="M 495 228 C 515 218, 535 220, 545 225"
          opacity="0.6"
        />

        {/* Forehead to Ear */}
        <path
          d="M 528 250 C 510 220, 480 185, 435 170"
        />

        {/* Ear Structure */}
        <path
          d="M 435 170 C 430 145, 415 125, 400 130 C 395 145, 405 165, 412 180"
        />
        <path
          d="M 405 175 C 395 155, 385 140, 375 145 C 372 155, 380 170, 388 185"
          opacity="0.5"
        />

        {/* Massive Neck & Shoulder Ridge (Symbolizing unwavering mass and power) */}
        <path
          d="M 412 180 C 360 175, 310 150, 240 160 C 180 170, 140 210, 100 240 C 70 265, 40 310, 20 370"
          strokeWidth={strokeWidth * 1.3}
        />

        {/* Neck Muscle Crest Folds (Geometric athletic lines) */}
        <path
          d="M 360 195 C 340 240, 335 290, 350 340"
          opacity="0.6"
        />
        <path
          d="M 290 190 C 270 235, 260 285, 275 330"
          opacity="0.45"
        />
        <path
          d="M 220 200 C 200 245, 195 290, 205 320"
          opacity="0.3"
        />

        {/* Jawline and Throat */}
        <path
          d="M 410 290 C 390 320, 370 350, 350 375 C 330 395, 290 410, 240 420"
          opacity="0.5"
        />

        {/* Chest & Stance Curve */}
        <path
          d="M 240 420 C 180 430, 120 420, 70 395"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}
