import React from 'react';

/**
 * Badge / Tag — small pill label for skills, project tech, statuses.
 */
export function Badge({ children, variant = 'soft', style, ...rest }) {
  const variants = {
    soft: {
      background: 'rgba(247,37,133,0.12)',
      color: 'var(--pink-300)',
      border: '1px solid var(--border-accent)',
    },
    solid: {
      background: 'var(--grad-pink)',
      color: 'var(--text-onPink)',
      border: '1px solid transparent',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)',
    },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 13px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        lineHeight: 1,
        borderRadius: 'var(--radius-pill)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
