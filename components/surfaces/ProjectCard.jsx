import React from 'react';
import { Badge } from '../data-display/Badge.jsx';

/**
 * ProjectCard — image/video thumbnail with title, description and tech tags.
 * The core unit of the Proyectos section.
 */
export function ProjectCard({
  image,
  video,
  title,
  description,
  tags = [],
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href={href || '#'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: hover ? 'translateY(-6px)' : 'none',
        borderColor: hover ? 'var(--border-accent)' : 'var(--border)',
        boxShadow: hover ? 'var(--glow-pink-md)' : 'var(--shadow-md)',
        ...style,
      }}
      {...rest}
    >
      {/* Media */}
      <div style={{ position: 'relative', aspectRatio: '16 / 11', overflow: 'hidden', background: 'var(--ink-800)' }}>
        {video ? (
          <video
            src={video}
            muted
            loop
            playsInline
            autoPlay
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform var(--dur-slow) var(--ease-out)',
              transform: hover ? 'scale(1.06)' : 'scale(1)',
            }}
          />
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)',
            opacity: hover ? 1 : 0.55,
            transition: 'opacity var(--dur-base) var(--ease-out)',
          }}
        />
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-5)' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-h2)',
            fontWeight: 'var(--fw-bold)',
            color: 'var(--text-primary)',
            margin: 0,
            letterSpacing: 'var(--ls-snug)',
          }}
        >
          {title}
        </h3>
        {description && (
          <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>
            {description}
          </p>
        )}
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'var(--space-2)' }}>
            {tags.map((t) => (
              <Badge key={t} variant="soft">{t}</Badge>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
