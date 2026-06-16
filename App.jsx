/* App — assembles the portfolio and wires scroll-reveal. */
(function () {
  const { useEffect } = React;

  function App() {
    useEffect(() => {
      const els = document.querySelectorAll('.mt-reveal');
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, []);

    return (
      <React.Fragment>
        <window.PortfolioNav />
        <main>
          <window.PortfolioHero />
          <window.PortfolioAbout />
          <window.PortfolioWork />
          <window.PortfolioContact />
        </main>
      </React.Fragment>
    );
  }

  window.PortfolioApp = App;
})();
