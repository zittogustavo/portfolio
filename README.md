# Gustavo Zitto — portfolio

Personal site of Gustavo Zitto, full-stack developer. Static, bilingual (English / Spanish), light and dark themes.

Built with [Astro](https://astro.build): no client framework, all CSS inlined, a few hundred bytes of JavaScript per feature.

## Commands

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # type-check + static build to dist/
pnpm preview   # serve the build
```

Requires Node 22.22+.

## Where things live

| What | Where |
| --- | --- |
| Profile, experience, projects (one source, text per language) | `src/data/profile.ts` |
| UI strings and i18n helpers | `src/i18n/ui.ts` |
| Page template (renders `/` and `/es/`) | `src/pages/[...lang].astro` |
| Hero: dotted world map (built from Natural Earth at build time) | `src/components/HeroMap.astro`, `src/data/worldDots.ts` |
| Portrait and its four looks (split, post-its, motion, dissolve) | `src/components/Portrait.astro` |
| Career-timeline preloader | `src/components/Preloader.astro` |
| Design tokens (colors, type, motion) | `src/styles/global.css` |

### Adding a language

1. Add it to `languages` in `src/i18n/ui.ts` and to `i18n.locales` in `astro.config.mjs`.
2. Add its UI dictionary in `src/i18n/ui.ts` (typed: a missing key fails the build).
3. Add the new key to every `Localized` field in `src/data/profile.ts`.

## Notes

- The preloader runs once per browser session and never with `prefers-reduced-motion`.
- The portrait look is picked with the switcher in the hero and remembered per visitor. The default is the first entry of `LOOKS` in `src/data/profile.ts`.
- `src/assets/portrait-cutout.png` is the portrait with its background removed (rembg, `u2net_human_seg`); `src/assets/portrait.jpg` is the uncut original used by the post-its look.
- Fonts (Geist, Geist Mono) are self-hosted by Astro's font API at build time, preloaded, with metric-matched fallbacks.
- The previous version of this site is kept at the `legacy-v1` tag.
