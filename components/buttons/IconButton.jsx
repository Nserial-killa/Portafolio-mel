import React from 'react';

/**
 * IconButton — circular button for social links / icon-only actions.
 */
export function IconButton({
  children,
  label,
  href,
  variant = 'outline',
  size = 'md',
  style,
  ...rest
}) {
  const dims = { sm: 38, md: 46, lg: 56 };
  const d = dims[size] || dims.md;

  const [hover, setHover] = React.useState(false);

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: d,
    height: d,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    transition: 'transform var(--dur-base) var(--ease-spring), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    textDecoration: 'none',
  };

  const variants = {
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
    },
    solid: {
      background: 'var(--grad-pink)',
      border: '1px solid transparent',
      color: 'var(--text-onPink)',
      boxShadow: 'var(--glow-pink-sm)',
    },
  };

  const hoverStyle = hover
    ? variant === 'solid'
      ? { transform: 'translateY(-3px)', boxShadow: 'var(--glow-pink-md)' }
      : { transform: 'translateY(-3px)', borderColor: 'var(--accent)', color: 'var(--accent)', boxShadow: 'var(--glow-pink-sm)' }
    : {};

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      aria-label={label}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
