/* Sticky top navigation with glass blur and a mobile dropdown menu.
   On desktop it stays hidden over the hero (which has its own menu) until the page scrolls. */
(function () {
  const { useState, useEffect } = React;

  const Icons = window.PortfolioIcons;

  function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = window.PortfolioData.navLinks;

    return (
      <header
        className="mt-nav"
        data-at-top={!scrolled && !open}
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
          background: scrolled || open ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: scrolled || open ? 'var(--blur-md)' : 'none',
          WebkitBackdropFilter: scrolled || open ? 'var(--blur-md)' : 'none',
          borderBottom: scrolled || open ? '1px solid var(--border)' : '1px solid transparent',
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

        <button
          className="mt-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          style={{
            width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--text-primary)', cursor: 'pointer',
          }}
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>

        {open && (
          <nav
            className="mt-mobile-nav"
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0, display: 'flex', flexDirection: 'column',
              padding: '8px clamp(20px, 6vw, 96px) 20px', background: 'var(--surface-card)',
              borderBottom: '1px solid var(--border)', boxShadow: 'var(--shadow-md)',
            }}
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ padding: '14px 4px', fontSize: 'var(--fs-base)', fontWeight: 600, color: 'var(--text-primary)', borderBottom: '1px solid var(--border)' }}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
    );
  }

  window.PortfolioNav = Nav;
})();
