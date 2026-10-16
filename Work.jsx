/* Work — Proyectos rotating carousel. */
(function () {
  const { useState, useEffect, useRef } = React;
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const { SectionHeading, ProjectCard } = NS;
  const Icons = window.PortfolioIcons;
  const { projects } = window.PortfolioData;

  const ROTATE_MS = 4500; // time each project stays in front

  /* Coverflow carousel: the active card sits in front, its neighbours tilt
     back on each side, and the ring advances on its own. Auto-rotation
     pauses on hover/focus, while the tab is hidden, and with reduced motion. */
  function ProjectCarousel({ items }) {
    const n = items.length;
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchX = useRef(null);

    const go = (i) => setActive(((i % n) + n) % n);

    useEffect(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (paused || reduce || n < 2) return;
      const id = setInterval(() => {
        if (!document.hidden) setActive((a) => (a + 1) % n);
      }, ROTATE_MS);
      return () => clearInterval(id);
    }, [paused, n]);

    // Signed distance from the active card, wrapped so the ring has no ends
    // (with 3 items: 0 = front, 1 = right, -1 = left).
    const offsetOf = (i) => {
      let d = (i - active + n) % n;
      if (d > n / 2) d -= n;
      return d;
    };

    const onTouchEnd = (e) => {
      if (touchX.current == null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
      touchX.current = null;
    };

    return (
      <div
        className="mt-carousel"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Proyectos"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(active + 1);
          if (e.key === 'ArrowLeft') go(active - 1);
        }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
        onTouchEnd={(e) => { onTouchEnd(e); setPaused(false); }}
      >
        <div className="mt-carousel__stage">
          {items.map((p, i) => {
            const d = offsetOf(i);
            const isActive = d === 0;
            return (
              <div
                key={p.title}
                className="mt-carousel__slide"
                data-offset={Math.max(-2, Math.min(2, d))}
                aria-hidden={!isActive}
                // A side card is a "bring me to front" button, not a link out.
                onClickCapture={(e) => {
                  if (!isActive) { e.preventDefault(); e.stopPropagation(); go(i); }
                }}
              >
                <ProjectCard
                  video={p.video} image={p.image} title={p.title} description={p.description} tags={p.tags}
                  href={p.href} target="_blank" rel="noopener noreferrer" tabIndex={isActive ? 0 : -1}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-carousel__controls">
          <button className="mt-carousel__arrow" onClick={() => go(active - 1)} aria-label="Proyecto anterior">
            <Icons.Arrow style={{ transform: 'rotate(180deg)' }} />
          </button>
          <div className="mt-carousel__dots">
            {items.map((p, i) => (
              <button
                key={p.title}
                className="mt-carousel__dot"
                aria-label={`Ver ${p.title}`}
                aria-current={i === active}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button className="mt-carousel__arrow" onClick={() => go(active + 1)} aria-label="Proyecto siguiente">
            <Icons.Arrow />
          </button>
        </div>
      </div>
    );
  }

  function Work() {
    // React doesn't write the `muted` attribute, which Safari/iOS require for autoplay.
    useEffect(() => {
      document.querySelectorAll('#proyectos video').forEach((v) => {
        v.muted = true;
        v.setAttribute('muted', '');
        v.play().catch(() => {});
      });
    }, []);

    return (
      <section id="proyectos" style={{ padding: 'var(--section-pad-y) var(--section-pad-x)', overflowX: 'clip' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <div className="mt-reveal">
            <SectionHeading
              eyebrow="Portafolio"
              eyebrowColor="var(--text-muted)"
              align="center"
              title="Proyectos"
              subtitle="Sitios web diseñados de principio a fin: interfaz, contenido visual y experiencia de usuario."
            />
          </div>
          <div className="mt-reveal" style={{ animationDelay: '100ms', marginTop: 'var(--space-8)' }}>
            <ProjectCarousel items={projects} />
          </div>
        </div>
      </section>
    );
  }

  window.PortfolioWork = Work;
})();
