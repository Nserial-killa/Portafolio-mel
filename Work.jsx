/* Work — Proyectos grid + Certificaciones with a lightbox. */
(function () {
  const { useState } = React;
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const { SectionHeading, ProjectCard, CertCard } = NS;
  const Icons = window.PortfolioIcons;
  const { projects, certs } = window.PortfolioData;

  function Lightbox({ src, alt, onClose }) {
    if (!src) return null;
    return (
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.86)', backdropFilter: 'var(--blur-md)', WebkitBackdropFilter: 'var(--blur-md)',
          padding: 'var(--space-6)', animation: 'mt-fade-in var(--dur-base) var(--ease-out)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: 'absolute', top: 24, right: 24, width: 48, height: 48, borderRadius: '50%',
            border: '1px solid var(--border-strong)', background: 'var(--surface-card)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}
        >
          <Icons.Close />
        </button>
        <img
          src={src} alt={alt}
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: 'min(900px, 92vw)', maxHeight: '86vh', borderRadius: 'var(--radius-md)', boxShadow: 'var(--glow-pink-lg)' }}
        />
      </div>
    );
  }

  function Work() {
    const [lightbox, setLightbox] = useState(null);

    return (
      <>
        {/* Proyectos */}
        <section id="proyectos" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div className="mt-reveal">
              <SectionHeading
                eyebrow="Proyectos"
                eyebrowColor="var(--text-muted)"
                align="center"
                title="Trabajo seleccionado"
                subtitle="Una muestra de lo que más disfruto crear — identidad, diseño editorial, social media y un poco de magia."
              />
            </div>
            <div
              className="mt-reveal mt-projects-grid"
              style={{ animationDelay: '100ms', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)', marginTop: 'var(--space-7)' }}
            >
              {projects.map((p) => (
                <ProjectCard key={p.title} image={p.image} title={p.title} description={p.description} tags={p.tags} href="#" />
              ))}
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section id="certificaciones" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', background: 'var(--bg-section)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <div className="mt-reveal">
              <SectionHeading
                eyebrow="Certificaciones"
                eyebrowColor="var(--text-muted)"
                align="center"
                title="Aprendizaje constante"
                subtitle="Siempre estoy aprendiendo algo nuevo. Estos son algunos de los logros que respaldan mi trabajo."
              />
            </div>
            <div
              className="mt-reveal mt-certs-grid"
              style={{ animationDelay: '100ms', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-5)', marginTop: 'var(--space-7)', maxWidth: 720, marginInline: 'auto' }}
            >
              {certs.map((c) => (
                <CertCard
                  key={c.title}
                  image={c.image}
                  title={c.title}
                  issuer={c.issuer}
                  date={c.date}
                  onView={() => setLightbox({ src: c.image, alt: c.title })}
                />
              ))}
            </div>
          </div>
        </section>

        <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
      </>
    );
  }

  window.PortfolioWork = Work;
})();
