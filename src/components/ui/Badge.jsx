import React from 'react';

/**
 * Master Gym UI Primitive: Badge / Tag
 * Variantes: yellow, pink, glass, live
 */
export default function Badge({
  variant = 'glass',
  dot = false,
  dotColor = 'yellow',
  className = '',
  children,
  ...props
}) {
  const variantClass = {
    yellow: 'badge-yellow',
    pink: 'badge-pink',
    glass: 'badge-glass',
    live: 'badge-live'
  }[variant] || 'badge-glass';

  return (
    <span className={`mg-badge ${variantClass} ${className}`} {...props}>
      {dot && (
        <span className={`mg-badge-dot ping-indicator ping-indicator-${dotColor}`}></span>
      )}
      <span>{children}</span>
    </span>
  );
}
