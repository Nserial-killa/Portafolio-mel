/* Hero — the name in pink on black, with ambient glow and reveal animation. */
(function () {
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const { Button, Badge } = NS;
  const Icons = window.PortfolioIcons;

  function Hero() {
    return (
      <section
        id="top"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
          overflow: 'hidden',
        }}
      >
        {/* Subtle violet ambience at the bottom only (no pink glow up top) */}
        <div
          style={{
            position: 'absolute', bottom: '-10%', left: '-4%', width: 420, height: 420, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(114,9,183,0.16) 0%, rgba(114,9,183,0) 70%)',
            filter: 'blur(20px)', pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <h1
            className="mt-reveal"
            style={{
              animationDelay: '0ms',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'var(--fs-hero)',
              lineHeight: 'var(--lh-tight)',
              letterSpacing: 'var(--ls-tight)',
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, fontSize: '0.4em', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: 14 }}>
              <Icons.Sparkles width={20} height={20} style={{ color: 'var(--accent)' }} /> Diseñadora
            </span>
            Meli<span className="mt-green-text">ss</span>a{' '}
            <span className="mt-gradient-text" style={{ backgroundSize: '200% auto', animation: 'mt-shimmer 6s linear infinite' }}>
              Tinoco López
            </span>
          </h1>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            color: 'var(--text-faint)', fontSize: 'var(--fs-xs)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase',
          }}
        >
          Scroll
          <span style={{ width: 1, height: 34, background: 'linear-gradient(var(--accent), transparent)' }} />
        </div>
      </section>
    );
  }

  window.PortfolioHero = Hero;
})();
