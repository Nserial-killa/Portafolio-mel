**ProjectCard** — the tile for the Proyectos section: media on top, title + description + tag pills below, with a hover lift and image zoom.

```jsx
<ProjectCard
  image="assets/project-1.jpg"
  title="Identidad — Café Aurora"
  description="Branding completo: logo, paleta y empaques."
  tags={['Branding', 'Canva', 'Packaging']}
  href="#"
/>
```

Pass `video` instead of `image` for an autoplaying muted loop. Tags render as soft `Badge`s. Whole card is a link.
