import React from 'react';

/**
 * Master Gym UI Primitive: Card
 * Contenedor glassmórfico unificado con elevación, bordes e iluminación neón opcional.
 */
export default function Card({
  glow = false,
  glowColor = 'pink',
  className = '',
  children,
  ...props
}) {
  const glowClass = glow ? (glowColor === 'yellow' ? 'card-glow-yellow' : 'card-glow-pink') : '';

  return (
    <div className={`mg-card ${glowClass} ${className}`} {...props}>
      {children}
    </div>
  );
}
