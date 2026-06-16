---
name: melissa-tinoco-design
description: Use this skill to generate well-branded interfaces and assets for Melissa Tinoco López's personal portfolio brand — dark canvas, magenta-pink (#f72585) signature, Quicksand + Manrope type. Good for production work or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and portfolio UI components.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`styles.css` and everything it `@import`s under `tokens/`, the components under
`components/`, the specimen cards under `guidelines/`, and the full portfolio in
`ui_kits/portfolio/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out
and create static HTML files for the user to view. Link `styles.css` for the tokens and
either reuse the React components (via the compiled `_ds_bundle.js` on
`window.MelissaTinocoPortfolioDesignSystem_c81f0c`) or recreate their look with the
documented tokens. If working on production code, copy the assets and read the rules here
to become an expert in designing with this brand.

Key brand rules: pure-black backgrounds; magenta-pink `#f72585` as the only hero color
(violet/cyan live inside gradients only); elevation reads as a pink **glow**, not a soft
shadow; Quicksand for display, Manrope for body; Spanish, warm, first-person copy; simple
fade-up reveals and a gentle spring on hover; no emoji as icons (use the Lucide-style SVG
set in `ui_kits/portfolio/icons.jsx`).

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask a few questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
