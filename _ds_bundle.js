/* @ds-bundle: {"format":3,"namespace":"MelissaTinocoPortfolioDesignSystem_c81f0c","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"SectionHeading","sourcePath":"components/data-display/SectionHeading.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CertCard","sourcePath":"components/surfaces/CertCard.jsx"},{"name":"ProjectCard","sourcePath":"components/surfaces/ProjectCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"89c00da3e937","components/buttons/IconButton.jsx":"00bce333dda3","components/data-display/Badge.jsx":"929bf6db3ed1","components/data-display/SectionHeading.jsx":"704d33e3a417","components/surfaces/Card.jsx":"3ab194ef63ba","components/surfaces/CertCard.jsx":"3ab0c18cf154","components/surfaces/ProjectCard.jsx":"1b12aa5a1f31","ui_kits/portfolio/About.jsx":"0be9f9a3a20e","ui_kits/portfolio/App.jsx":"f2c80586f3b3","ui_kits/portfolio/Contact.jsx":"6bbb995ab08b","ui_kits/portfolio/Hero.jsx":"179c7c51742c","ui_kits/portfolio/Nav.jsx":"4900f1527e72","ui_kits/portfolio/Work.jsx":"aea1c8bef966","ui_kits/portfolio/data.jsx":"220a8498ae4a","ui_kits/portfolio/icons.jsx":"26891dd851b5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MelissaTinocoPortfolioDesignSystem_c81f0c = window.MelissaTinocoPortfolioDesignSystem_c81f0c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action for the portfolio.
 * Variants: primary (filled pink), secondary (outline), ghost (text).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  disabled = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--fs-sm)',
      gap: '8px'
    },
    md: {
      padding: '13px 24px',
      fontSize: 'var(--fs-base)',
      gap: '10px'
    },
    lg: {
      padding: '17px 34px',
      fontSize: 'var(--fs-lg)',
      gap: '12px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-snug)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    transition: 'transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--grad-pink)',
      color: 'var(--text-onPink)',
      boxShadow: 'var(--glow-pink-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '2px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--glow-pink-md)'
  } : variant === 'secondary' ? {
    borderColor: 'var(--accent)',
    color: 'var(--accent)',
    transform: 'translateY(-2px)'
  } : {
    background: 'rgba(247,37,133,0.10)'
  } : {};
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — circular button for social links / icon-only actions.
 */
function IconButton({
  children,
  label,
  href,
  variant = 'outline',
  size = 'md',
  style,
  ...rest
}) {
  const dims = {
    sm: 38,
    md: 46,
    lg: 56
  };
  const d = dims[size] || dims.md;
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: d,
    height: d,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    transition: 'transform var(--dur-base) var(--ease-spring), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    textDecoration: 'none'
  };
  const variants = {
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)'
    },
    solid: {
      background: 'var(--grad-pink)',
      border: '1px solid transparent',
      color: 'var(--text-onPink)',
      boxShadow: 'var(--glow-pink-sm)'
    }
  };
  const hoverStyle = hover ? variant === 'solid' ? {
    transform: 'translateY(-3px)',
    boxShadow: 'var(--glow-pink-md)'
  } : {
    transform: 'translateY(-3px)',
    borderColor: 'var(--accent)',
    color: 'var(--accent)',
    boxShadow: 'var(--glow-pink-sm)'
  } : {};
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / Tag — small pill label for skills, project tech, statuses.
 */
function Badge({
  children,
  variant = 'soft',
  style,
  ...rest
}) {
  const variants = {
    soft: {
      background: 'rgba(247,37,133,0.12)',
      color: 'var(--pink-300)',
      border: '1px solid var(--border-accent)'
    },
    solid: {
      background: 'var(--grad-pink)',
      color: 'var(--text-onPink)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 13px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — eyebrow + large display title used to open every section.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  eyebrowColor,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 'var(--prose-max)' : 'none',
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      color: eyebrowColor || 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 2,
      background: eyebrowColor || 'var(--grad-pink)',
      display: 'inline-block',
      borderRadius: 2,
      flex: 'none'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-d1)',
      fontWeight: 'var(--fw-extra)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: 'var(--prose-max)',
      margin: 0
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base glass surface on the black canvas. Hairline border, optional
 * pink-glow hover lift.
 */
function Card({
  children,
  interactive = false,
  glow = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: glow ? 'var(--glow-pink-md)' : 'var(--shadow-md)',
    transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
  };
  const hoverStyle = interactive && hover ? {
    transform: 'translateY(-4px)',
    borderColor: 'var(--border-accent)',
    boxShadow: 'var(--glow-pink-md)'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      ...base,
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CertCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CertCard — frames a certification image with issuer + title, lightbox-ready.
 */
function CertCard({
  image,
  title,
  issuer,
  date,
  onView,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onView,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderColor: hover ? 'var(--border-accent)' : 'var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onView ? 'zoom-in' : 'default',
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? 'var(--glow-pink-md)' : 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'var(--space-4)',
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      borderRadius: 'var(--radius-sm)',
      display: 'block',
      boxShadow: 'var(--shadow-md)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--space-5)',
      right: 'var(--space-5)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--grad-pink)',
      boxShadow: 'var(--glow-pink-sm)',
      opacity: hover ? 1 : 0,
      transform: hover ? 'translateY(0)' : 'translateY(-6px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "Ver")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-primary)'
    }
  }, title), date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)'
    }
  }, date)), issuer && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--accent)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, issuer)));
}
Object.assign(__ds_scope, { CertCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CertCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — image/video thumbnail with title, description and tech tags.
 * The core unit of the Proyectos section.
 */
function ProjectCard({
  image,
  video,
  title,
  description,
  tags = [],
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      transform: hover ? 'translateY(-6px)' : 'none',
      borderColor: hover ? 'var(--border-accent)' : 'var(--border)',
      boxShadow: hover ? 'var(--glow-pink-md)' : 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 11',
      overflow: 'hidden',
      background: 'var(--ink-800)'
    }
  }, video ? /*#__PURE__*/React.createElement("video", {
    src: video,
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      transform: hover ? 'scale(1.06)' : 'scale(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)',
      opacity: hover ? 1 : 0.55,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-primary)',
      margin: 0,
      letterSpacing: 'var(--ls-snug)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)',
      margin: 0
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: 'var(--space-2)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    variant: "soft"
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
/* About — "Sobre mí" with personality traits and a Download CV action. */
(function () {
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const {
    Button,
    Badge,
    SectionHeading,
    Card
  } = NS;
  const Icons = window.PortfolioIcons;
  const {
    skills
  } = window.PortfolioData;
  const traits = [{
    icon: 'Sparkles',
    title: 'Creativa',
    text: 'Me gusta lo nuevo, lo diferente y destacar en cada proyecto.'
  }, {
    icon: 'Palette',
    title: 'Curiosa',
    text: 'Disfruto probar cosas nuevas y explorar técnicas que no conocía.'
  }, {
    icon: 'Heart',
    title: 'Cercana',
    text: 'Escucho, conozco a las personas y diseño pensando en ellas.'
  }, {
    icon: 'Eye',
    title: 'Avispada',
    text: 'Atenta a los detalles y a las tendencias antes de que lleguen.'
  }];
  function About() {
    const Trait = ({
      t
    }) => {
      const Ic = Icons[t.icon];
      return /*#__PURE__*/React.createElement(Card, {
        interactive: true,
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          padding: 'var(--space-5)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-md)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          background: 'var(--grad-pink)',
          boxShadow: 'var(--glow-pink-sm)'
        }
      }, /*#__PURE__*/React.createElement(Ic, {
        width: 22,
        height: 22
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--fs-h3)',
          color: 'var(--text-primary)'
        }
      }, t.title), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--fs-sm)',
          color: 'var(--text-muted)',
          lineHeight: 'var(--lh-relaxed)'
        }
      }, t.text));
    };
    return /*#__PURE__*/React.createElement("section", {
      id: "sobre-mi",
      style: {
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        background: 'var(--bg-section)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt-reveal",
      style: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Sobre m\xED",
      eyebrowColor: "var(--text-muted)",
      align: "center",
      title: "Dise\xF1o para destacar",
      subtitle: "Soy una dise\xF1adora muy creativa. Me apasiona lo nuevo y lo diferente, escuchar a quien tengo enfrente y convertir ideas en piezas que llaman la atenci\xF3n."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        margin: '28px 0 32px',
        justifyContent: 'center'
      }
    }, skills.map(s => /*#__PURE__*/React.createElement(Badge, {
      key: s,
      variant: "soft"
    }, s))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      href: "assets/cv-melissa-tinoco.pdf",
      iconLeft: /*#__PURE__*/React.createElement(Icons.Download, null),
      download: true
    }, "Descargar CV (PDF)")), /*#__PURE__*/React.createElement("div", {
      className: "mt-reveal",
      style: {
        animationDelay: '120ms',
        marginTop: 'var(--space-8)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: 'var(--space-4)',
        width: '100%',
        maxWidth: 940
      }
    }, traits.map(t => /*#__PURE__*/React.createElement(Trait, {
      key: t.title,
      t: t
    })))));
  }
  window.PortfolioAbout = About;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
/* App — assembles the portfolio and wires scroll-reveal. */
(function () {
  const {
    useEffect
  } = React;
  function App() {
    useEffect(() => {
      const els = document.querySelectorAll('.mt-reveal');
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
      });
      els.forEach(el => io.observe(el));
      return () => io.disconnect();
    }, []);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PortfolioNav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.PortfolioHero, null), /*#__PURE__*/React.createElement(window.PortfolioAbout, null), /*#__PURE__*/React.createElement(window.PortfolioWork, null), /*#__PURE__*/React.createElement(window.PortfolioContact, null)));
  }
  window.PortfolioApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Contact — email CTA + social links, plus footer. */
(function () {
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const {
    Button,
    IconButton
  } = NS;
  const Icons = window.PortfolioIcons;
  const EMAIL = 'melissa.tinoco@email.com';
  function Contact() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      id: "contacto",
      style: {
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt-reveal",
      style: {
        position: 'relative',
        maxWidth: 820,
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--fs-d1)',
        letterSpacing: 'var(--ls-tight)',
        lineHeight: 'var(--lh-tight)',
        color: 'var(--text-primary)'
      }
    }, "\xBFCreamos algo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "mt-gradient-text"
    }, "juntas?")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-lg)',
        color: 'var(--text-body)',
        lineHeight: 'var(--lh-relaxed)',
        maxWidth: 520
      }
    }, "Cu\xE9ntame tu idea y la convertimos en algo que destaque. Estoy a un correo de distancia."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      href: `mailto:${EMAIL}`,
      iconLeft: /*#__PURE__*/React.createElement(Icons.Mail, null)
    }, "Escr\xEDbeme un correo")), /*#__PURE__*/React.createElement("a", {
      href: `mailto:${EMAIL}`,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, EMAIL), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Instagram",
      href: "#"
    }, /*#__PURE__*/React.createElement(Icons.Instagram, null)), /*#__PURE__*/React.createElement(IconButton, {
      label: "Behance",
      href: "#"
    }, /*#__PURE__*/React.createElement(Icons.Behance, null)), /*#__PURE__*/React.createElement(IconButton, {
      label: "LinkedIn",
      href: "#"
    }, /*#__PURE__*/React.createElement(Icons.Linkedin, null))))), /*#__PURE__*/React.createElement("footer", {
      style: {
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-section)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '56px var(--section-pad-x) 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 40,
        alignItems: 'start',
        justifyItems: 'center',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        maxWidth: 320
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em'
      }
    }, "Melissa", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)'
      }
    }, ".")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-sm)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "Dise\xF1adora gr\xE1fica & creativa. Convierto ideas en piezas que destacan.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-xs)',
        fontWeight: 700,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "Navegaci\xF3n"), [['Sobre mí', '#sobre-mi'], ['Proyectos', '#proyectos'], ['Certificaciones', '#certificaciones'], ['Contacto', '#contacto']].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h,
      style: {
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-body)',
        textDecoration: 'none'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--accent)',
      onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-xs)',
        fontWeight: 700,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "S\xEDgueme"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Instagram",
      href: "#"
    }, /*#__PURE__*/React.createElement(Icons.Instagram, null)), /*#__PURE__*/React.createElement(IconButton, {
      label: "Behance",
      href: "#"
    }, /*#__PURE__*/React.createElement(Icons.Behance, null)), /*#__PURE__*/React.createElement(IconButton, {
      label: "LinkedIn",
      href: "#"
    }, /*#__PURE__*/React.createElement(Icons.Linkedin, null))), /*#__PURE__*/React.createElement("a", {
      href: `mailto:${EMAIL}`,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, EMAIL))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '20px var(--section-pad-x)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-faint)'
      }
    }, "\xA9 2026 Melissa Tinoco L\xF3pez \xB7 Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-faint)'
      }
    }, "Hecho con ", /*#__PURE__*/React.createElement(Icons.Heart, {
      width: 13,
      height: 13,
      style: {
        display: 'inline',
        verticalAlign: 'middle',
        color: 'var(--accent)'
      }
    }), " y caf\xE9")))));
  }
  window.PortfolioContact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — the name in pink on black, with ambient glow and reveal animation. */
(function () {
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const {
    Button,
    Badge
  } = NS;
  const Icons = window.PortfolioIcons;
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '-10%',
        left: '-4%',
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(114,9,183,0.16) 0%, rgba(114,9,183,0) 70%)',
        filter: 'blur(20px)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "mt-reveal",
      style: {
        animationDelay: '0ms',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--fs-hero)',
        lineHeight: 'var(--lh-tight)',
        letterSpacing: 'var(--ls-tight)',
        margin: 0,
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        fontSize: '0.4em',
        fontWeight: 600,
        color: 'var(--text-muted)',
        letterSpacing: '0.04em',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icons.Sparkles, {
      width: 20,
      height: 20,
      style: {
        color: 'var(--accent)'
      }
    }), " Dise\xF1adora"), "Meli", /*#__PURE__*/React.createElement("span", {
      className: "mt-green-text"
    }, "ss"), "a", ' ', /*#__PURE__*/React.createElement("span", {
      className: "mt-gradient-text",
      style: {
        backgroundSize: '200% auto',
        animation: 'mt-shimmer 6s linear infinite'
      }
    }, "Tinoco L\xF3pez"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        color: 'var(--text-faint)',
        fontSize: 'var(--fs-xs)',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase'
      }
    }, "Scroll", /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 34,
        background: 'linear-gradient(var(--accent), transparent)'
      }
    })));
  }
  window.PortfolioHero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
/* Sticky top navigation with glass blur. */
(function () {
  const {
    useState,
    useEffect
  } = React;
  function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const links = [['Sobre mí', '#sobre-mi'], ['Proyectos', '#proyectos'], ['Certificaciones', '#certificaciones'], ['Contacto', '#contacto']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px clamp(20px, 6vw, 96px)',
        background: scrolled ? 'rgba(8,8,10,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'var(--blur-md)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--blur-md)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 20,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em'
      }
    }, "Melissa", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)'
      }
    }, "."))), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      },
      className: "mt-navlinks"
    }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
      key: href,
      href: href,
      style: {
        padding: '8px 14px',
        fontSize: 'var(--fs-sm)',
        fontWeight: 600,
        color: 'var(--text-body)',
        borderRadius: 'var(--radius-pill)',
        transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--text-primary)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-body)';
        e.currentTarget.style.background = 'transparent';
      }
    }, label))));
  }
  window.PortfolioNav = Nav;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
/* Work — Proyectos grid + Certificaciones with a lightbox. */
(function () {
  const {
    useState
  } = React;
  const NS = window.MelissaTinocoPortfolioDesignSystem_c81f0c;
  const {
    SectionHeading,
    ProjectCard,
    CertCard
  } = NS;
  const Icons = window.PortfolioIcons;
  const {
    projects,
    certs
  } = window.PortfolioData;
  function Lightbox({
    src,
    alt,
    onClose
  }) {
    if (!src) return null;
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.86)',
        backdropFilter: 'var(--blur-md)',
        WebkitBackdropFilter: 'var(--blur-md)',
        padding: 'var(--space-6)',
        animation: 'mt-fade-in var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Cerrar",
      style: {
        position: 'absolute',
        top: 24,
        right: 24,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid var(--border-strong)',
        background: 'var(--surface-card)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icons.Close, null)), /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      onClick: e => e.stopPropagation(),
      style: {
        maxWidth: 'min(900px, 92vw)',
        maxHeight: '86vh',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--glow-pink-lg)'
      }
    }));
  }
  function Work() {
    const [lightbox, setLightbox] = useState(null);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      id: "proyectos",
      style: {
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt-reveal"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Proyectos",
      eyebrowColor: "var(--text-muted)",
      align: "center",
      title: "Trabajo seleccionado",
      subtitle: "Una muestra de lo que m\xE1s disfruto crear \u2014 identidad, dise\xF1o editorial, social media y un poco de magia."
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-reveal mt-projects-grid",
      style: {
        animationDelay: '100ms',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 'var(--space-5)',
        marginTop: 'var(--space-7)'
      }
    }, projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
      key: p.title,
      image: p.image,
      title: p.title,
      description: p.description,
      tags: p.tags,
      href: "#"
    }))))), /*#__PURE__*/React.createElement("section", {
      id: "certificaciones",
      style: {
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        background: 'var(--bg-section)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt-reveal"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Certificaciones",
      eyebrowColor: "var(--text-muted)",
      align: "center",
      title: "Aprendizaje constante",
      subtitle: "Siempre estoy aprendiendo algo nuevo. Estos son algunos de los logros que respaldan mi trabajo."
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-reveal mt-certs-grid",
      style: {
        animationDelay: '100ms',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'var(--space-5)',
        marginTop: 'var(--space-7)',
        maxWidth: 720,
        marginInline: 'auto'
      }
    }, certs.map(c => /*#__PURE__*/React.createElement(CertCard, {
      key: c.title,
      image: c.image,
      title: c.title,
      issuer: c.issuer,
      date: c.date,
      onView: () => setLightbox({
        src: c.image,
        alt: c.title
      })
    }))))), /*#__PURE__*/React.createElement(Lightbox, {
      src: lightbox?.src,
      alt: lightbox?.alt,
      onClose: () => setLightbox(null)
    }));
  }
  window.PortfolioWork = Work;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.jsx
try { (() => {
/* Portfolio content + helpers. Replace placeholder media with Melissa's real work. */
(function () {
  // Gradient placeholder generator — swap these for real project images/videos.
  const ph = (a, b, c) => 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='640' height='440'>
        <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='${a}'/><stop offset='0.6' stop-color='${b}'/><stop offset='1' stop-color='${c}'/>
        </linearGradient></defs>
        <rect width='640' height='440' fill='%230e0e12'/>
        <rect width='640' height='440' fill='url(%23g)' opacity='0.92'/>
        <circle cx='120' cy='90' r='160' fill='%23ffffff' opacity='0.06'/>
        <circle cx='540' cy='380' r='120' fill='%23000000' opacity='0.12'/>
      </svg>`.replace(/#/g, '%23').replace(/\s+/g, ' '));
  const projects = [{
    title: 'Identidad — Café Aurora',
    description: 'Branding completo para una cafetería de especialidad: logotipo, paleta cálida y diseño de empaques.',
    tags: ['Branding', 'Packaging', 'Canva'],
    image: ph('#f72585', '#b5179e', '#7209b7')
  }, {
    title: 'Campaña — Flores de Marzo',
    description: 'Serie de piezas para redes sociales con una dirección de arte vibrante y femenina.',
    tags: ['Social Media', 'Dirección de arte'],
    image: ph('#f94c9c', '#f72585', '#d11371')
  }, {
    title: 'Editorial — Revista Nova',
    description: 'Diseño editorial y maquetación de una revista digital independiente de 32 páginas.',
    tags: ['Editorial', 'Layout'],
    image: ph('#7209b7', '#4361ee', '#4cc9f0')
  }, {
    title: 'UI Concept — App Bloom',
    description: 'Concepto visual de una app de bienestar: sistema de color, iconografía y pantallas clave.',
    tags: ['UI / UX', 'Figma'],
    image: ph('#4cc9f0', '#7209b7', '#f72585')
  }, {
    title: 'Posters — Serie Caos',
    description: 'Colección experimental de carteles tipográficos explorando ritmo y contraste.',
    tags: ['Tipografía', 'Print'],
    image: ph('#b5179e', '#f72585', '#fb7bb4')
  }, {
    title: 'Logo Set — Estudio Lúa',
    description: 'Sistema de marca y variaciones de logotipo para un estudio de fotografía.',
    tags: ['Logo', 'Branding'],
    image: ph('#d11371', '#7209b7', '#4361ee')
  }];
  const certs = [{
    image: '../../assets/cert-canva-100.jpeg',
    title: '100 diseños en Canva',
    issuer: 'Canva',
    date: '2026'
  }];
  const skills = ['Branding', 'Diseño editorial', 'Social Media', 'UI / UX', 'Tipografía', 'Canva', 'Figma', 'Dirección de arte'];
  window.PortfolioData = {
    projects,
    certs,
    skills,
    ph
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/icons.jsx
try { (() => {
/* Lucide-style stroke icons for the portfolio (1.75 stroke, round caps). */
(function () {
  const I = (paths, vb = '0 0 24 24') => props => React.createElement('svg', Object.assign({
    width: 20,
    height: 20,
    viewBox: vb,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, props), paths.map((d, i) => typeof d === 'string' ? React.createElement('path', {
    key: i,
    d
  }) : React.createElement(d.tag, Object.assign({
    key: i
  }, d.attr))));
  const Icons = {
    Download: I(['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3']),
    Arrow: I(['M5 12h14', 'm12 5 7 7-7 7']),
    ArrowUpRight: I(['M7 17 17 7', 'M7 7h10v10']),
    Mail: I([{
      tag: 'rect',
      attr: {
        x: 2,
        y: 4,
        width: 20,
        height: 16,
        rx: 2
      }
    }, 'm22 7-10 5L2 7']),
    Sparkles: I(['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3', 'M19 15l.7 1.8L21.5 17.5 19.7 18.2 19 20l-.7-1.8L16.5 17.5 18.3 16.8 19 15']),
    Eye: I(['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z', {
      tag: 'circle',
      attr: {
        cx: 12,
        cy: 12,
        r: 3
      }
    }]),
    Instagram: I([{
      tag: 'rect',
      attr: {
        x: 2,
        y: 2,
        width: 20,
        height: 20,
        rx: 5
      }
    }, {
      tag: 'circle',
      attr: {
        cx: 12,
        cy: 12,
        r: 4
      }
    }, {
      tag: 'circle',
      attr: {
        cx: 17.5,
        cy: 6.5,
        r: 0.6
      }
    }]),
    Behance: I(['M3 7h5a2.5 2.5 0 0 1 0 5H3z', 'M3 12h5.5a2.5 2.5 0 0 1 0 5H3z', 'M15 9h5', 'M14 14.5h7a3.5 3.5 0 0 0-7 0 3.5 3.5 0 0 0 6 2.3']),
    Linkedin: I(['M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2', {
      tag: 'rect',
      attr: {
        x: 2,
        y: 9,
        width: 4,
        height: 11
      }
    }, {
      tag: 'circle',
      attr: {
        cx: 4,
        cy: 4,
        r: 2
      }
    }]),
    Close: I(['M18 6 6 18', 'm6 6 12 12']),
    Heart: I(['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z']),
    Palette: I([{
      tag: 'circle',
      attr: {
        cx: 13.5,
        cy: 6.5,
        r: 0.5
      }
    }, {
      tag: 'circle',
      attr: {
        cx: 17.5,
        cy: 10.5,
        r: 0.5
      }
    }, {
      tag: 'circle',
      attr: {
        cx: 8.5,
        cy: 7.5,
        r: 0.5
      }
    }, {
      tag: 'circle',
      attr: {
        cx: 6.5,
        cy: 12.5,
        r: 0.5
      }
    }, 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C21.5 5.864 17.286 2 12 2Z'])
  };
  window.PortfolioIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CertCard = __ds_scope.CertCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
