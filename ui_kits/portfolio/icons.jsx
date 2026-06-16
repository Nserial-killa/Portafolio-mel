/* Lucide-style stroke icons for the portfolio (1.75 stroke, round caps). */
(function () {
  const I = (paths, vb = '0 0 24 24') => (props) =>
    React.createElement(
      'svg',
      Object.assign(
        { width: 20, height: 20, viewBox: vb, fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' },
        props
      ),
      paths.map((d, i) =>
        typeof d === 'string'
          ? React.createElement('path', { key: i, d })
          : React.createElement(d.tag, Object.assign({ key: i }, d.attr))
      )
    );

  const Icons = {
    Download: I(['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3']),
    Arrow: I(['M5 12h14', 'm12 5 7 7-7 7']),
    ArrowUpRight: I(['M7 17 17 7', 'M7 7h10v10']),
    Mail: I([{ tag: 'rect', attr: { x: 2, y: 4, width: 20, height: 16, rx: 2 } }, 'm22 7-10 5L2 7']),
    Sparkles: I(['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3', 'M19 15l.7 1.8L21.5 17.5 19.7 18.2 19 20l-.7-1.8L16.5 17.5 18.3 16.8 19 15']),
    Eye: I(['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z', { tag: 'circle', attr: { cx: 12, cy: 12, r: 3 } }]),
    Instagram: I([{ tag: 'rect', attr: { x: 2, y: 2, width: 20, height: 20, rx: 5 } }, { tag: 'circle', attr: { cx: 12, cy: 12, r: 4 } }, { tag: 'circle', attr: { cx: 17.5, cy: 6.5, r: 0.6 } }]),
    Behance: I(['M3 7h5a2.5 2.5 0 0 1 0 5H3z', 'M3 12h5.5a2.5 2.5 0 0 1 0 5H3z', 'M15 9h5', 'M14 14.5h7a3.5 3.5 0 0 0-7 0 3.5 3.5 0 0 0 6 2.3']),
    Linkedin: I(['M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2', { tag: 'rect', attr: { x: 2, y: 9, width: 4, height: 11 } }, { tag: 'circle', attr: { cx: 4, cy: 4, r: 2 } }]),
    Close: I(['M18 6 6 18', 'm6 6 12 12']),
    Heart: I(['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z']),
    Palette: I([{ tag: 'circle', attr: { cx: 13.5, cy: 6.5, r: 0.5 } }, { tag: 'circle', attr: { cx: 17.5, cy: 10.5, r: 0.5 } }, { tag: 'circle', attr: { cx: 8.5, cy: 7.5, r: 0.5 } }, { tag: 'circle', attr: { cx: 6.5, cy: 12.5, r: 0.5 } }, 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C21.5 5.864 17.286 2 12 2Z']),
  };

  window.PortfolioIcons = Icons;
})();
