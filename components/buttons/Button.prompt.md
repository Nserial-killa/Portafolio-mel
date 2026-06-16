**Button** — the portfolio's call-to-action; pink-filled primary, outline secondary, text ghost.

```jsx
<Button variant="primary" size="lg" iconLeft={<DownloadIcon/>}>Descargar CV</Button>
<Button variant="secondary">Ver proyectos</Button>
<Button variant="ghost" href="#contacto">Contacto</Button>
```

Variants: `primary` (gradient pink + glow, lifts on hover), `secondary` (hairline outline that turns pink on hover), `ghost` (pink text, soft pink wash on hover). Sizes `sm | md | lg`. Pass `href` to render an `<a>`.
