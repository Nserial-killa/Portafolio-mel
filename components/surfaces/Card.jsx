import React from 'react';

/**
 * Card — base glass surface on the black canvas. Hairline border, optional
 * pink-glow hover lift.
 */
export function Card({
  children,
  interactive = false,
  glow = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const base = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: glow ? 'var(--glow-pink-md)' : 'var(--shadow-md)',
    transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
  };

  const hoverStyle = interactive && hover
    ? { transform: 'translateY(-4px)', borderColor: 'var(--border-accent)', boxShadow: 'var(--glow-pink-md)' }
    : {};

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{ ...base, ...hoverStyle, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
