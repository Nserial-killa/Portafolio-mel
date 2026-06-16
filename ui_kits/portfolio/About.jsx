/* About — "Sobre mí" with personality traits and a Download CV action. */
(function () {
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const { Button, Badge, SectionHeading, Card } = NS;
  const Icons = window.PortfolioIcons;
  const { skills } = window.PortfolioData;

  const traits = [
    { icon: 'Sparkles', title: 'Creativa', text: 'Me gusta lo nuevo, lo diferente y destacar en cada proyecto.' },
    { icon: 'Palette', title: 'Curiosa', text: 'Disfruto probar cosas nuevas y explorar técnicas que no conocía.' },
    { icon: 'Heart', title: 'Cercana', text: 'Escucho, conozco a las personas y diseño pensando en ellas.' },
    { icon: 'Eye', title: 'Avispada', text: 'Atenta a los detalles y a las tendencias antes de que lleguen.' },
  ];

  function About() {
    const Trait = ({ t }) => {
      const Ic = Icons[t.icon];
      return (
        <Card interactive style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 'var(--space-5)' }}>
          <span
            style={{
              width: 44, height: 44, borderRadius: 'var(--radius-md)', display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center', color: '#fff',
              background: 'var(--grad-pink)', boxShadow: 'var(--glow-pink-sm)',
            }}
          >
            <Ic width={22} height={22} />
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h3)', color: 'var(--text-primary)' }}>{t.title}</span>
          <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 'var(--lh-relaxed)' }}>{t.text}</span>
        </Card>
      );
    };

    return (
      <section id="sobre-mi" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--bg-section)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="mt-reveal" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionHeading
              eyebrow="Sobre mí"
              eyebrowColor="var(--text-muted)"
              align="center"
              title="Diseño para destacar"
              subtitle="Soy una diseñadora muy creativa. Me apasiona lo nuevo y lo diferente, escuchar a quien tengo enfrente y convertir ideas en piezas que llaman la atención."
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '28px 0 32px', justifyContent: 'center' }}>
              {skills.map((s) => <Badge key={s} variant="soft">{s}</Badge>)}
            </div>
            <Button variant="primary" size="lg" href="assets/cv-melissa-tinoco.pdf" iconLeft={<Icons.Download />} download>
              Descargar CV (PDF)
            </Button>
          </div>

          <div className="mt-reveal" style={{ animationDelay: '120ms', marginTop: 'var(--space-8)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 'var(--space-4)', width: '100%', maxWidth: 940 }}>
            {traits.map((t) => <Trait key={t.title} t={t} />)}
          </div>
        </div>
      </section>
    );
  }

  window.PortfolioAbout = About;
})();
