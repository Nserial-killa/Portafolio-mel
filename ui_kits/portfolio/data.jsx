/* Portfolio content + helpers. Replace placeholder media with Melissa's real work. */
(function () {
  // Gradient placeholder generator — swap these for real project images/videos.
  const ph = (a, b, c) =>
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='440'>
        <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='${a}'/><stop offset='0.6' stop-color='${b}'/><stop offset='1' stop-color='${c}'/>
        </linearGradient></defs>
        <rect width='640' height='440' fill='%230e0e12'/>
        <rect width='640' height='440' fill='url(%23g)' opacity='0.92'/>
        <circle cx='120' cy='90' r='160' fill='%23ffffff' opacity='0.06'/>
        <circle cx='540' cy='380' r='120' fill='%23000000' opacity='0.12'/>
      </svg>`.replace(/#/g, '%23').replace(/\s+/g, ' ')
    );

  const projects = [
    {
      title: 'Identidad — Café Aurora',
      description: 'Branding completo para una cafetería de especialidad: logotipo, paleta cálida y diseño de empaques.',
      tags: ['Branding', 'Packaging', 'Canva'],
      image: ph('#f72585', '#b5179e', '#7209b7'),
    },
    {
      title: 'Campaña — Flores de Marzo',
      description: 'Serie de piezas para redes sociales con una dirección de arte vibrante y femenina.',
      tags: ['Social Media', 'Dirección de arte'],
      image: ph('#f94c9c', '#f72585', '#d11371'),
    },
    {
      title: 'Editorial — Revista Nova',
      description: 'Diseño editorial y maquetación de una revista digital independiente de 32 páginas.',
      tags: ['Editorial', 'Layout'],
      image: ph('#7209b7', '#4361ee', '#4cc9f0'),
    },
    {
      title: 'UI Concept — App Bloom',
      description: 'Concepto visual de una app de bienestar: sistema de color, iconografía y pantallas clave.',
      tags: ['UI / UX', 'Figma'],
      image: ph('#4cc9f0', '#7209b7', '#f72585'),
    },
    {
      title: 'Posters — Serie Caos',
      description: 'Colección experimental de carteles tipográficos explorando ritmo y contraste.',
      tags: ['Tipografía', 'Print'],
      image: ph('#b5179e', '#f72585', '#fb7bb4'),
    },
    {
      title: 'Logo Set — Estudio Lúa',
      description: 'Sistema de marca y variaciones de logotipo para un estudio de fotografía.',
      tags: ['Logo', 'Branding'],
      image: ph('#d11371', '#7209b7', '#4361ee'),
    },
  ];

  const certs = [
    { image: '../../assets/cert-canva-100.jpeg', title: '100 diseños en Canva', issuer: 'Canva', date: '2026' },
  ];

  const skills = ['Branding', 'Diseño editorial', 'Social Media', 'UI / UX', 'Tipografía', 'Canva', 'Figma', 'Dirección de arte'];

  window.PortfolioData = { projects, certs, skills, ph };
})();
