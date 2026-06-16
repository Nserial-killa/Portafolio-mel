**CertCard** — frames a certification image with an issuer + title caption; reveals a "Ver" chip on hover for opening a lightbox.

```jsx
<CertCard
  image="assets/cert-canva-100.jpeg"
  title="100 diseños en Canva"
  issuer="Canva"
  date="2026"
  onView={() => openLightbox(0)}
/>
```

Pass `onView` to make the whole card a zoom-in trigger. Caption shows title + mono date on one row, pink issuer beneath.
