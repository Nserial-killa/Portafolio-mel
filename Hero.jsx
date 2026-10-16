/* Hero — sección de inicio a pantalla completa: foto a la izquierda, texto a la derecha.
   Los estilos viven en hero.css (clases .mt-hero__*). */
(function () {
  const Icons = window.PortfolioIcons;
  const { navLinks } = window.PortfolioData;

  // ---------------------------------------------------------------------------
  // CONTENIDO EDITABLE
  // Cambia estos textos aquí sin tocar el resto del componente.
  // ---------------------------------------------------------------------------
  // Cada elemento = una línea del título. Pueden ser texto o JSX: en la
  // primera, la "ss" va en un <span> propio para darle el degradado animado.
  const HERO_TITLE = [
    <>Meli<span className="mt-hero__ss">ss</span>a</>,
    'Tinoco López',
  ];
  const HERO_TEXT = ''; // párrafo bajo el título; si está vacío ('') no se muestra
  const CV_URL = 'assets/cv-melissa-tinoco.pdf';
  const PHOTO_URL = 'assets/img-mel.jpg';

  // Enlaces del menú del hero: "Inicio" + los mismos que usa la barra global.
  const links = [['Inicio', '#top'], ...navLinks];

  function Hero() {
    return (
      // <section id="top">: el id permite que el logo y "Inicio" vuelvan aquí.
      <section id="top" className="mt-hero">
        {/* ===== COLUMNA IZQUIERDA: foto con esquinas redondeadas ===== */}
        <div className="mt-hero__media">
          {/* alt describe la imagen para lectores de pantalla.
              fetchpriority="high" le dice al navegador que la cargue primero
              porque es lo primero que se ve. */}
          <img className="mt-hero__photo" src={PHOTO_URL} alt="Retrato de Melissa Tinoco" fetchpriority="high" />
          {/* Nombre discreto en la esquina superior izquierda (sobre la foto). */}
          <a className="mt-hero__name" href="#top">Melissa Tinoco</a>
        </div>

        {/* ===== COLUMNA DERECHA: panel oscuro con el contenido ===== */}
        <div className="mt-hero__panel">
          {/* Menú propio del hero (arriba a la derecha). En móvil se oculta
              por CSS y se usa el menú global con botón ☰. */}
          <nav className="mt-hero__nav" aria-label="Secciones">
            {links.map(([label, href]) => (
              // aria-current marca "Inicio" como la sección actual (accesibilidad + estilo).
              <a key={href} href={href} aria-current={href === '#top' ? 'page' : undefined}>
                {label}
              </a>
            ))}
          </nav>

          {/* Título en dos líneas. Cada línea se anima con un retraso distinto
              (--delay) para lograr la entrada "en cascada". */}
          <h1 className="mt-hero__title">
            <span className="mt-hero__title-line mt-hero__in" style={{ '--delay': '150ms' }}>
              {/* El texto va en su propio span para que no se parta en dos líneas. */}
              <span className="mt-hero__title-text">{HERO_TITLE[0]}</span>
              {/* Línea fina decorativa; aria-hidden la oculta a lectores de pantalla. */}
              <span className="mt-hero__title-rule" aria-hidden="true" />
            </span>
            <span className="mt-hero__title-line mt-hero__in" style={{ '--delay': '280ms' }}>
              {HERO_TITLE[1]}
            </span>
          </h1>

          {/* Párrafo corto en gris claro. "&&" solo lo dibuja si HERO_TEXT tiene texto. */}
          {HERO_TEXT && (
            <p className="mt-hero__text mt-hero__in" style={{ '--delay': '420ms' }}>
              {HERO_TEXT}
            </p>
          )}

          {/* Botones de acción. */}
          <div className="mt-hero__actions mt-hero__in" style={{ '--delay': '560ms' }}>
            {/* "download" hace que el navegador descargue el PDF en vez de abrirlo. */}
            <a className="mt-hero__btn--primary" href={CV_URL} download>
              <Icons.Download width={18} height={18} />
              Descargar CV
            </a>
            {/* href="#proyectos" + html { scroll-behavior: smooth } (en index.html)
                hace un scroll suave hasta la sección de proyectos. */}
            <a className="mt-hero__btn--ghost" href="#proyectos">
              <span className="mt-hero__btn-circle" aria-hidden="true">
                <Icons.Play width={18} height={18} />
              </span>
              Ver trabajos
            </a>
          </div>

          {/* Indicador decorativo "01 / 05" (total = número de secciones del menú).
              padStart(2, '0') convierte 5 en "05". */}
          <span className="mt-hero__counter" aria-hidden="true">
            <strong>01</strong> / {String(links.length).padStart(2, '0')}
          </span>
        </div>
      </section>
    );
  }

  window.PortfolioHero = Hero;
})();
