import React from 'react';

/**
 * SectionHeading — eyebrow + large display title used to open every section.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  eyebrowColor,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        maxWidth: align === 'center' ? 'var(--prose-max)' : 'none',
        marginInline: align === 'center' ? 'auto' : undefined,
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            fontWeight: 'var(--fw-bold)',
            letterSpacing: 'var(--ls-eyebrow)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            color: eyebrowColor || 'var(--accent)',
          }}
        >
          <span style={{ width: 34, height: 2, background: eyebrowColor || 'var(--grad-pink)', display: 'inline-block', borderRadius: 2, flex: 'none' }} />
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-d1)',
          fontWeight: 'var(--fw-extra)',
          lineHeight: 'var(--lh-tight)',
          letterSpacing: 'var(--ls-tight)',
          color: 'var(--text-primary)',
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'var(--fs-lg)',
            color: 'var(--text-muted)',
            lineHeight: 'var(--lh-relaxed)',
            maxWidth: 'var(--prose-max)',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
