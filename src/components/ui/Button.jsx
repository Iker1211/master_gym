import React from 'react';

/**
 * Master Gym UI Primitive: Button
 * Variantes: primary (Hot Pink), yellow (Cyber Yellow), secondary (Glass), outline (Borde)
 * Tamaños: sm, md, lg
 */
export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    yellow: 'btn-yellow',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  }[variant] || 'btn-primary';

  const sizeClass = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }[size] || 'btn-md';

  const classes = [
    'btn',
    variantClass,
    sizeClass,
    fullWidth ? 'btn-full-width' : '',
    className
  ].filter(Boolean).join(' ');

  const defaultProps = Component === 'button' ? { type: props.type || 'button' } : {};

  return (
    <Component className={classes} {...defaultProps} {...props}>
      {children}
    </Component>
  );
}
