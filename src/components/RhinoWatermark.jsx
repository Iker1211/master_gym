import React from 'react';
import RhinoSvgSilhouette from './RhinoSvgSilhouette';

const VARIANTS = {
  monolith: {
    webp: '/assets/rhino/rhino_monolith_sedes_alpha.webp',
    jpg: '/assets/rhino/rhino_monolith_sedes.jpg',
    alt: 'Silueta monumental de rinoceronte - Master Gym Manta',
    defaultOpacity: 0.22,
  },
  stoic: {
    webp: '/assets/rhino/rhino_stoic_tarifas_alpha.webp',
    jpg: '/assets/rhino/rhino_stoic_tarifas.jpg',
    alt: 'Ilustración geométrica de rinoceronte - Master Gym Manta',
    defaultOpacity: 0.20,
  },
  guardian: {
    webp: '/assets/rhino/rhino_guardian_faq_alpha.webp',
    jpg: '/assets/rhino/rhino_guardian_faq.jpg',
    alt: 'Contorno sereno de rinoceronte en neón - Master Gym Manta',
    defaultOpacity: 0.25,
  },
  contour: {
    webp: '/assets/rhino/rhino_contour_neon_alpha.webp',
    jpg: '/assets/rhino/rhino_contour_neon.jpg',
    alt: 'Línea de arte neón de rinoceronte - Master Gym Manta',
    defaultOpacity: 0.24,
  },
  footer: {
    webp: '/assets/rhino/rhino_footer_horizon_clean.webp',
    jpg: '/assets/rhino/rhino_footer_horizon_clean.jpg',
    alt: 'Horizonte rinoceronte - Master Gym Manta',
    defaultOpacity: 0.15,
  },
};

/**
 * RhinoWatermark - Ambient background silhouette for dark mode sections.
 * Tier-1 athletic branding: non-violent, majestic, subtle neon rim glow.
 *
 * @param {Object} props
 * @param {'monolith' | 'stoic' | 'guardian' | 'contour' | 'vector'} [props.variant='monolith']
 * @param {'top-right' | 'top-left' | 'center' | 'left' | 'right' | 'bottom-right'} [props.position='top-right']
 * @param {number} [props.opacity] - Optional opacity override (0.05 to 0.5)
 * @param {boolean} [props.glow=true] - Whether to render a soft ambient neon glow behind the silhouette
 * @param {string} [props.className] - Additional class names
 * @param {Object} [props.style] - Inline style overrides
 */
export default function RhinoWatermark({
  variant = 'monolith',
  position = 'top-right',
  opacity,
  glow = true,
  className = '',
  style = {},
}) {
  const isVector = variant === 'vector';
  const asset = VARIANTS[variant] || VARIANTS.monolith;
  const computedOpacity = opacity ?? (isVector ? 0.35 : asset.defaultOpacity);

  return (
    <div
      className={`rhino-watermark-wrap pos-${position} ${className}`}
      aria-hidden="true"
      style={{
        '--rhino-opacity': computedOpacity,
        ...style,
      }}
    >
      {glow && <div className={`rhino-ambient-glow glow-${variant}`} />}

      {isVector ? (
        <RhinoSvgSilhouette className="rhino-watermark-img" />
      ) : (
        <picture className="rhino-watermark-picture">
          <source srcSet={asset.webp} type="image/webp" />
          <img
            src={asset.jpg}
            alt={asset.alt}
            className="rhino-watermark-img"
            loading="lazy"
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
}
