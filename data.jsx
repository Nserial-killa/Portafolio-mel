/* Portfolio content + helpers. */
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
      title: 'Pollo Frito Geme — Soda',
      description: 'Web responsive para pedidos de una soda, hecha con Canva IA: carrito, checkout desplegable, validación de formularios, categorías y confirmación del pedido por WhatsApp.',
      tags: ['Diseño web', 'UI / UX', 'Canva IA'],
      video: ['assets/soda-pollo-geme.mp4?v=2', 'assets/soda-pollo-geme.webm?v=2'],
      image: 'assets/soda-pollo-geme.jpg',
      href: 'https://soda-pollo-frito-geme.vercel.app/',
    },
    {
      title: 'Noble Studio',
      description: 'Interfaz del sitio en blanco y dorado con títulos serif, logo del ave dorada en Canva, estructura de secciones con carrusel de proyectos y piezas para redes sociales.',
      tags: ['UI / UX', 'Branding', 'Social Media'],
      video: ['assets/noble-studio.mp4?v=2', 'assets/noble-studio.webm?v=2'],
      image: 'assets/noble-studio.jpg',
      href: 'https://noble-studio-web-site.vercel.app/',
    },
    {
      title: 'Las Chemas del Mapa',
      description: 'Interfaz del sitio y product cards para el catálogo, imágenes únicas del carrusel creadas con Canva IA y estructura de navegación, productos, contacto y footer.',
      tags: ['Diseño web', 'UI / UX', 'Canva IA'],
      video: ['assets/chemas-del-mapa.mp4?v=2', 'assets/chemas-del-mapa.webm?v=2'],
      image: 'assets/chemas-del-mapa.jpg',
      href: 'https://www.laschemasdelmap.com/',
    },
  ];

  const skills = ['Branding', 'Diseño web', 'Social Media', 'UI / UX', 'Tipografía', 'Canva', 'CapCut', 'Adobe Illustrator'];

  // Section links shared by the top nav and the hero menu.
  const navLinks = [
    ['Sobre mí', '#sobre-mi'],
    ['Proyectos', '#proyectos'],
    ['Contacto', '#contacto'],
  ];

  window.PortfolioData = { projects, skills, navLinks, ph };
})();
