import React from 'react';

/**
 * Button — primary call-to-action for the portfolio.
 * Variants: primary (filled pink), secondary (outline), ghost (text).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  disabled = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--fs-sm)', gap: '8px' },
    md: { padding: '13px 24px', fontSize: 'var(--fs-base)', gap: '10px' },
    lg: { padding: '17px 34px', fontSize: 'var(--fs-lg)', gap: '12px' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-snug)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    transition: 'transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: 'var(--grad-pink)',
      color: 'var(--text-onPink)',
      boxShadow: 'var(--glow-pink-sm)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '2px solid transparent',
    },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover
    ? variant === 'primary'
      ? { transform: 'translateY(-2px)', boxShadow: 'var(--glow-pink-md)' }
      : variant === 'secondary'
        ? { borderColor: 'var(--accent)', color: 'var(--accent)', transform: 'translateY(-2px)' }
        : { background: 'rgba(247,37,133,0.10)' }
    : {};

  const Tag = href && !disabled ? 'a' : 'button';

  return (
    <Tag
      href={href}
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </Tag>
  );
}
