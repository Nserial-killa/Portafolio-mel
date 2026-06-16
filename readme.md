# Melissa Tinoco — Portfolio Design System

A dark, high-contrast personal-brand design system for **Melissa Tinoco López**, a
creative graphic designer. The system powers her portfolio: a pure-black canvas with a
vivid magenta-pink (`#f72585`) signature, expressive display type, and simple but
eye-catching motion.

> **Source material:** one uploaded asset — a Canva certificate ("100 diseños en Canva",
> issued to Melissa Tinoco López). Stored at `assets/cert-canva-100.jpeg`. No codebase or
> Figma file was provided; the visual direction was derived from the brief (black
> background + pink name) and the creative-designer persona.

---

## Brand at a glance

- **Who:** Melissa Tinoco López — graphic/creative designer.
- **Personality:** creative, drawn to the new and the different, wants to stand out, loves
  trying things, listens, gets to know people, sharp/"avispada".
- **Look:** black canvas, magenta-pink as the single hero color, subtle violet→cyan only
  inside gradients. Glow instead of soft shadow. Big rounded Quicksand headlines, clean Manrope body.
- **Language:** Spanish (Latin American), warm and first-person.

---

## CONTENT FUNDAMENTALS

How copy is written across the portfolio:

- **Language & voice:** Spanish, first person singular ("Soy muy creativa", "Me mueve lo
  nuevo"). Warm, confident, personal — she speaks directly to the visitor and sometimes
  addresses them ("¿Creamos algo juntas?", "Contáctame").
- **Tone:** enthusiastic but not loud; creative and approachable. Short, punchy sentences
  with the occasional emphasis word in bold (**destacar**, **muy creativa**).
- **Casing:** sentence case everywhere in prose. Eyebrows and badges are UPPERCASE with
  wide tracking ("SOBRE MÍ", "PROYECTOS"). Headlines use Title-ish sentence case.
- **I vs you:** "yo" for self-description; "tú/te" when inviting contact. Feminine forms
  used naturally ("juntas", "una diseñadora").
- **Emoji:** not used in body copy. A single inline heart icon (SVG, not emoji) appears in
  the footer signature ("Hecho con ♥ y café"). Keep decoration to icons, not emoji.
- **Numbers/stats:** used sparingly and only when real (e.g. "100 diseños en Canva"). No
  invented metrics or stat-slop.
- **Examples:**
  - Eyebrow: `SOBRE MÍ`
  - Headline: `Diseño para destacar`
  - Lead: `Soy una diseñadora muy creativa. Me apasiona lo nuevo y lo diferente…`
  - CTA: `Descargar CV (PDF)`, `Escríbeme un correo`, `Ver proyectos`

---

## VISUAL FOUNDATIONS

- **Color & vibe:** pure black (`#000000`) page; near-black layered surfaces
  (`#08080a → #1c1c23`) for sections and cards. Magenta-pink `#f72585` is THE accent —
  the name, primary buttons, focus, links, glows. Violet `#7209b7` and cyan `#4cc9f0`
  appear ONLY as gradient partners, never as flat UI color. Text is white → cool grays.
- **Type:** **Quicksand** (500/600/700) for the name, headings and display — a rounded,
  geometric sans (echoing the certificate wordmark); friendly and open with gentle
  tracking (`-0.005em`). **Manrope** for body and UI — clean humanist sans, relaxed 1.7
  line-height for reading. **JetBrains Mono** for small meta (dates, email). The name can
  use the `--grad-text` magenta gradient with a slow shimmer.
- **Spacing:** 8px base rhythm; generous section padding (`clamp(64px,10vw,128px)`),
  1200px content max, 680px prose max.
- **Backgrounds:** solid black, layered with soft **radial pink glows** (`--ambient-glow`)
  behind the hero and contact sections, plus large blurred floating orbs (pink + violet).
  No photographic full-bleeds, no repeating patterns, no noisy textures.
- **Elevation = glow, not shadow.** On black, cards separate via a 1px hairline border
  (`rgba(255,255,255,0.08)`) and, on hover/emphasis, a pink glow
  (`0 8px 40px rgba(247,37,133,0.35)`). Plain dark shadows exist but are secondary.
- **Animation:** simple but eye-catching. Reveal-on-scroll = fade + 28px rise over ~700ms
  with `--ease-out` (cubic-bezier(.22,1,.36,1)). Hero shimmer on the gradient name.
  Floating orbs (`mt-float`, 7s). Buttons use a gentle spring (`--ease-spring`) overshoot.
  Everything respects `prefers-reduced-motion`.
- **Hover states:** lift (`translateY(-2…-6px)`) + pink border + pink glow on cards and
  buttons; nav links get a faint white wash. Secondary/ghost buttons shift to pink.
- **Press/focus:** focus shows a 3px pink ring (`--glow-focus`). Active relies on the
  spring settle rather than a heavy shrink.
- **Borders & radii:** hairline borders by default; pink hairline on emphasis. Radii:
  xs 6 / sm 10 / md 16 / lg 24 (cards) / xl 32 / pill (buttons, badges, icon buttons).
- **Transparency & blur:** glass used for the sticky nav (blurred near-black) and the
  certificate lightbox overlay. Otherwise surfaces are solid.
- **Cards:** dark fill (`--surface-card` `#141419`), 1px hairline, 24px radius, soft
  shadow at rest → lift + pink border + glow on hover. Project cards add a media zoom.
- **Imagery vibe:** project media leans vibrant and saturated (pink→violet→cyan), warm
  and energetic — matching the personality. (Current project thumbnails are gradient
  placeholders to be replaced with real work.)

---

## ICONOGRAPHY

- **System:** a small, hand-picked **Lucide-style** stroke icon set, drawn inline as SVG
  in `ui_kits/portfolio/icons.jsx` (1.9px stroke, round caps/joins, 24px grid). Covers
  download, arrow, mail, sparkles, eye, heart, palette, and the social glyphs
  (Instagram, Behance, LinkedIn).
- **Format:** inline SVG with `stroke: currentColor`, so icons inherit text color and the
  pink accent automatically. No icon font, no PNG icons, no sprite sheet.
- **Emoji:** never used as icons. Unicode is avoided too — everything is real SVG.
- **Substitution flag:** these are *Lucide-style* re-draws, not the official Lucide
  package. If you want pixel-exact Lucide, link the CDN
  (`https://unpkg.com/lucide-static`) and swap — the stroke weight matches.
- **Logo:** there is no formal logomark. The wordmark is simply **"Melissa"** in Quicksand
  700 with a pink full-stop (`Melissa.`). Used in the nav and footer.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill front matter for Claude Code.

**`tokens/`** (all `@import`ed by `styles.css`)
- `colors.css` — pink scale, ink/surfaces, neutrals, gradients, semantic aliases.
- `typography.css` — font families (Quicksand / Manrope / JetBrains Mono via Google Fonts), scale, weights.
- `spacing.css` — 8px spacing scale, section rhythm, radii, borders.
- `effects.css` — shadows, pink glows, glass/blur, ambient glow.
- `motion.css` — durations, easings, keyframes, reduced-motion guard.
- `base.css` — reset + element defaults + `.mt-gradient-text` / `.mt-eyebrow` utilities.

**`components/`** (React primitives — `window.MelissaTinocoPortfolioDesignSystem_c81f0c`)
- `buttons/` — `Button`, `IconButton`
- `data-display/` — `Badge`, `SectionHeading`
- `surfaces/` — `Card`, `ProjectCard`, `CertCard`

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing) for the DS tab.

**`ui_kits/portfolio/`** — the full click-through portfolio (`index.html`): Hero,
Sobre mí (+ Download CV), Proyectos (grid), Certificaciones (+ lightbox), Contacto.

**`assets/`**
- `cert-canva-100.jpeg` — the supplied Canva certificate.

---

## Fonts note

Fonts load via **Google Fonts** (`@import` in `tokens/typography.css`): Syne, Manrope,
JetBrains Mono. No font binaries are bundled, so consumers need internet access at load.
If you want fully offline/self-hosted fonts, drop the `.woff2` files into `assets/fonts/`
and add `@font-face` rules — flag this if it matters for your deployment.
