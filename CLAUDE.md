# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the built dist/
npm run lint     # eslint over the repo
```

There is no test setup in this project — no test runner, no test files.

## What this is

A single-page marketing site (React 19 + Vite + Tailwind, plain JS/JSX — no TypeScript) for Sunshine Enrichment Centre / SECEdu, a children's enrichment centre in Johor, Malaysia. Content is bilingual English/Chinese in places. There is no backend, no API, and no forms: every call to action is a WhatsApp deep link.

## Architecture

**Routing** — All routes live in [src/App.jsx](src/App.jsx). Every page renders inside a single `Layout` route ([src/components/Layout.jsx](src/components/Layout.jsx) = `Navbar` + `<Outlet />` + `Footer`), so pages must **not** render `Navbar`/`Footer` themselves (some page files still import them unused — that's dead code, not a pattern to copy). `ScrollToTop` resets scroll position on navigation.

Route paths are duplicated in places that must stay in sync: the `<Route>` tree in `App.jsx`, the `routes` object in [src/constants/site.js](src/constants/site.js) (re-exported from `constants/index.js`), and `pageMeta` in that same file. Always link via `routes.*`, never a hardcoded string.

**Content lives in constants, not components** — [src/constants/index.js](src/constants/index.js) holds `programs`, `testimonials`, `managements`, `subjects`, `branches`, `routes`, and `WHATSAPP_NUMBER`/`WHATSAPP_LINK`. Home-page sections map over these arrays. Note the split: program *summary* data (title, ages, blurb, card image, route) is in `programs`, but each program's long-form body copy is hardcoded as JSX inside its page under [src/pages/Programs/](src/pages/Programs/). Adding a program means touching `constants` (including a `pageMeta` entry in `site.js`), `App.jsx`, `Navbar.jsx` (both the desktop dropdown and the mobile menu, which are separate hardcoded lists), and a new page file.

**Assets** — Every image/video/svg is imported and re-exported through [src/assets/index.js](src/assets/index.js) as a named export; components import from `"../assets"`, never by relative file path. Filenames contain spaces and mixed case, so the barrel is also the place where a sane name is assigned.

**Scroll animations** — The mechanism is CSS + IntersectionObserver, not Framer Motion (framer-motion is a dependency but barely used). See the explanatory comment at the top of [src/index.css](src/index.css). To animate a section:

1. Call `const containerRef = useScrollObserver()` ([src/hooks/useScrollObserver.js](src/hooks/useScrollObserver.js)) and put the ref on the section element.
2. Give each animating child `animate-on-scroll` (sets `opacity: 0`) plus one of `animate-fade-up` / `animate-slide-right` / `animate-pop-up`.
3. The observer adds `is-visible` once, then unobserves — animations fire a single time and never reverse.

The keyframes that matter are the kebab-case ones in `index.css` (`fade-up`, `slide-right`, `pop-up`). `tailwind.config.js` *also* defines camelCase `fadeUp`/`slideRight`/`popUp` animations; those are a separate, mostly unused set — don't confuse the two. `Impact.jsx` and `Benefits.jsx` inline their own copy of the observer instead of using the hook.

**SEO / `<head>`** — [src/constants/site.js](src/constants/site.js) holds `SITE_URL`, `routes`, `branches` and per-route `pageMeta` (title + description). It must stay free of asset/component imports, because `vite.config.js` imports it in Node. [src/seo/head.js](src/seo/head.js) turns that into head tags + `LocalBusiness` JSON-LD. At build time a plugin in [vite.config.js](vite.config.js) fills the `<!--app-head-->` placeholder in `index.html` and writes one HTML file per route (`about.html`, `programs/*.html`, which Cloudflare Pages serves extension-less) plus `sitemap.xml`, so WhatsApp/Facebook previews get per-page tags without running JS. On client-side navigation, `usePageMeta` (called in `Layout`) updates those same tags in place; unknown paths get `noindex`. Share image is `public/og-image.jpg` (1200×630).

**Navbar** — [src/hooks/useNavbar.js](src/hooks/useNavbar.js) owns two behaviours: hide-on-scroll-down/show-on-scroll-up, and transparency (transparent only on `/` above 30px, because the home hero sits under the navbar). Route-dependent, so it reads `pathname` and runs once on mount.

**Carousels** — Embla via the shared [src/components/CarouselWrapper.jsx](src/components/CarouselWrapper.jsx) (`items` + `renderItem` render-prop, autoplay, arrows, dots). Use it rather than wiring `useEmblaCarousel` directly.

**CTAs** — [src/components/CTAButton.jsx](src/components/CTAButton.jsx) always links to `WHATSAPP_LINK`; it takes `text`, `icon`, and Tailwind class overrides (`className`, `backgroundColor`, `rounded`).

## Styling conventions

Tailwind with a project palette defined in [tailwind.config.js](tailwind.config.js) — use the semantic names (`orange`, `yellow`, `darkblue`, `green`, `red`, `grey`) and the named gradient backgrounds (`bg-linear-darkblue`, `bg-orange-yellow`, `bg-radial-orange-footer`, …) rather than hex values. Fonts: `font-leagueSpartan` for headings, `font-montserrat` for body — both loaded from Google Fonts in [index.html](index.html), so neither is the default and one of them must be set explicitly on a section. Widths use `max-w-wide` (1400px) / `max-w-content` (960px).

Mobile responsiveness matters here (much of the recent commit history is mobile overflow fixes); check narrow widths when touching layout.

## Gotchas

- `dist/` exists on disk and is gitignored; don't edit or commit it.
