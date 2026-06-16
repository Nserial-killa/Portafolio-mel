/* Sticky top navigation with glass blur. */
(function () {
  const { useState, useEffect } = React;

  function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
      ['Sobre mí', '#sobre-mi'],
      ['Proyectos', '#proyectos'],
      ['Certificaciones', '#certificaciones'],
      ['Contacto', '#contacto'],
    ];

    return (
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px clamp(20px, 6vw, 96px)',
          background: scrolled ? 'rgba(8,8,10,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'var(--blur-md)' : 'none',
          WebkitBackdropFilter: scrolled ? 'var(--blur-md)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all var(--dur-base) var(--ease-out)',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Melissa<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="mt-navlinks">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={{
                padding: '8px 14px',
                fontSize: 'var(--fs-sm)',
                fontWeight: 600,
                color: 'var(--text-body)',
                borderRadius: 'var(--radius-pill)',
                transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-body)'; e.currentTarget.style.background = 'transparent'; }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
    );
  }

  window.PortfolioNav = Nav;
})();
