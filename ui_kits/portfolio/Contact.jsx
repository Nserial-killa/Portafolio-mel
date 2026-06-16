/* Contact — email CTA + social links, plus footer. */
(function () {
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const { Button, IconButton } = NS;
  const Icons = window.PortfolioIcons;

  const EMAIL = 'melissa.tinoco@email.com';

  function Contact() {
    return (
      <>
        <section id="contacto" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', position: 'relative', overflow: 'hidden' }}>
          <div
            className="mt-reveal"
            style={{
              position: 'relative', maxWidth: 820, margin: '0 auto', textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Contacto</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-d1)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-tight)', color: 'var(--text-primary)' }}>
              ¿Creamos algo<br /><span className="mt-gradient-text">juntas?</span>
            </h2>
            <p style={{ fontSize: 'var(--fs-lg)', color: 'var(--text-body)', lineHeight: 'var(--lh-relaxed)', maxWidth: 520 }}>
              Cuéntame tu idea y la convertimos en algo que destaque. Estoy a un correo de distancia.
            </p>
            <div style={{ marginTop: 'var(--space-3)' }}>
              <Button variant="primary" size="lg" href={`mailto:${EMAIL}`} iconLeft={<Icons.Mail />}>
                Escríbeme un correo
              </Button>
            </div>
            <a href={`mailto:${EMAIL}`} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>{EMAIL}</a>

            <div style={{ display: 'flex', gap: 12, marginTop: 'var(--space-4)' }}>
              <IconButton label="Instagram" href="#"><Icons.Instagram /></IconButton>
              <IconButton label="Behance" href="#"><Icons.Behance /></IconButton>
              <IconButton label="LinkedIn" href="#"><Icons.Linkedin /></IconButton>
            </div>
          </div>
        </section>

        <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-section)' }}>
          <div
            style={{
              maxWidth: 'var(--content-max)', margin: '0 auto',
              padding: '56px var(--section-pad-x) 28px',
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, alignItems: 'start', justifyItems: 'center', textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, maxWidth: 320 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Melissa<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
              <p style={{ fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)', margin: 0 }}>
                Diseñadora gráfica & creativa. Convierto ideas en piezas que destacan.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 'var(--fs-xs)', fontWeight: 700, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Navegación</span>
              {[['Sobre mí', '#sobre-mi'], ['Proyectos', '#proyectos'], ['Certificaciones', '#certificaciones'], ['Contacto', '#contacto']].map(([l, h]) => (
                <a key={h} href={h} style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-body)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}>{l}</a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 'var(--fs-xs)', fontWeight: 700, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Sígueme</span>
              <div style={{ display: 'flex', gap: 12 }}>
                <IconButton label="Instagram" href="#"><Icons.Instagram /></IconButton>
                <IconButton label="Behance" href="#"><Icons.Behance /></IconButton>
                <IconButton label="LinkedIn" href="#"><Icons.Linkedin /></IconButton>
              </div>
              <a href={`mailto:${EMAIL}`} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', textDecoration: 'none' }}>{EMAIL}</a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '20px var(--section-pad-x)', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-faint)' }}>© 2026 Melissa Tinoco López · Todos los derechos reservados.</span>
              <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-faint)' }}>
                Hecho con <Icons.Heart width={13} height={13} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--accent)' }} /> y café
              </span>
            </div>
          </div>
        </footer>
      </>
    );
  }

  window.PortfolioContact = Contact;
})();
