import React from 'react';

/**
 * CertCard — frames a certification image with issuer + title, lightbox-ready.
 */
export function CertCard({
  image,
  title,
  issuer,
  date,
  onView,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onView}
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderColor: hover ? 'var(--border-accent)' : 'var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: onView ? 'zoom-in' : 'default',
        transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover ? 'var(--glow-pink-md)' : 'var(--shadow-md)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', padding: 'var(--space-4)', background: 'var(--ink-800)' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            borderRadius: 'var(--radius-sm)',
            display: 'block',
            boxShadow: 'var(--shadow-md)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: 'var(--space-5)',
            right: 'var(--space-5)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-xs)',
            fontWeight: 'var(--fw-bold)',
            letterSpacing: 'var(--ls-wide)',
            textTransform: 'uppercase',
            color: '#fff',
            background: 'var(--grad-pink)',
            boxShadow: 'var(--glow-pink-sm)',
            opacity: hover ? 1 : 0,
            transform: hover ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'all var(--dur-base) var(--ease-out)',
          }}
        >
          Ver
        </span>
      </div>
      <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: 'var(--space-5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-3)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-bold)', color: 'var(--text-primary)' }}>
            {title}
          </span>
          {date && <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>{date}</span>}
        </div>
        {issuer && <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--accent)', fontWeight: 'var(--fw-semibold)' }}>{issuer}</span>}
      </figcaption>
    </figure>
  );
}
