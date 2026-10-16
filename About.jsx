/* About — "Sobre mí" with skills and a Download CV action. */
(function () {
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const { Button, Badge, SectionHeading } = NS;
  const Icons = window.PortfolioIcons;
  const { skills } = window.PortfolioData;

  function About() {
    return (
      <section id="sobre-mi" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--bg-section)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="mt-reveal" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionHeading
              eyebrow="Sobre mí"
              eyebrowColor="var(--text-muted)"
              align="center"
              title="Diseño con propósito y evolución"
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '28px 0 32px', justifyContent: 'center' }}>
              {skills.map((s) => <Badge key={s} variant="soft">{s}</Badge>)}
            </div>
            <Button variant="primary" size="lg" href="assets/cv-melissa-tinoco.pdf" iconLeft={<Icons.Download />} download>
              Descargar CV (PDF)
            </Button>
          </div>
        </div>
      </section>
    );
  }

  window.PortfolioAbout = About;
})();
