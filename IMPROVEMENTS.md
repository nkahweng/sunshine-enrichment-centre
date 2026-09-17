# Improvements

Audit of the site as of 2026-09-12 (commit `bb67d24`). Findings are grounded in a real
`npm run lint` and `npm run build` run, ranked by impact. Check items off as they land.

---

## 1. The build ships ~85 MB of media — done

The single biggest problem. `npm run build` reports a healthy 371 kB JS bundle — and then
this next to it:

| Asset | Size |
| --- | --- |
| `SECEdu Website Video.mp4` | 19.9 MB |
| `children.jpg` | 4.8 MB |
| `robotics2.jpg` | 4.2 MB |
| `children2.jpg` | 4.1 MB |
| `picturebook2.jpg` | 3.9 MB |
| `trip3.jpg` | 3.8 MB |
| …15 more over 2 MB | |

[src/assets/](src/assets/) totals **102 MB** on disk. A parent opening the home page on a
phone downloads the autoplaying video plus several multi-MB gallery images.

- [x] **Images converted to WebP — 83 MB → 5.4 MB.** Capped at 1600px wide, quality 82, via
      ffmpeg (no new dependency). Savings ran 80-96% per photo. Import paths updated in
      [src/assets/index.js](src/assets/index.js) — the barrel meant this was a one-file change.
      Originals deleted; recoverable from git history.
- [x] Deleted `trip5.jpg` (byte-identical to `trip2.jpg`), plus `jc.jpg`, `rf.JPG`, and
      `groupPhoto.jpg` — all unreferenced. `trip5` was also dropped from the barrel; no
      component imported it.
- [x] **Video: 19.9 MB → 5.6 MB.** See below.

### Video: what the testing showed

The source is **3840×2160 (4K), 30s, 5.3 Mbps**, with a 2 kbps (effectively silent) audio
track. It's handheld classroom footage: constant camera motion, fine hair/fabric detail,
indoor sensor noise — genuinely the hardest case for a codec, which is why it resists
compression far more than a typical 4K file.

| Setting | Size | vs original |
| --- | --- | --- |
| Original 4K | 19.9 MB | — |
| 1080p CRF23 | 18.3 MB | -8% |
| 1080p CRF26 + denoise | 11.5 MB | -42% |
| 1080p CRF28 + denoise | 8.7 MB | -56% |
| 720p CRF26 + denoise | 5.6 MB | -72% |
| VP9 720p | 7.7 MB | worse than H.264 |

Quality **does** visibly soften at 720p on this footage — verified against a still crop at
display size, not assumed. Higher settings hold up well.

**The decisive find: the 30s video was the same 15s clip twice.** Since the player already
loops, the second copy was pure waste — confirmed by PSNR (the halves align at exactly
450 frames) and by frame comparison. Removing it halved the file at zero quality cost, which
beat every codec tweak above.

Shipped: **1080p, CRF26 + denoise, 15.000s frame-exact → 5.77 MB** (from 19.9 MB, -71%).

- [x] **Stop downloading it on page load.** [Video.jsx](src/components/Video.jsx) was
      `<video autoPlay>` with no `preload`, so every home-page visitor pulled the whole file
      immediately — including those who never scrolled past the hero. Now `preload="none"` with
      a poster (`video-poster.webp`, 57 KB, generated from frame 0 so there's no jump on play)
      and an IntersectionObserver that plays on scroll-into-view and pauses on exit. Visitors
      who never reach the section download **0 bytes** of video.
- [x] Also fixed on the same element: added `playsInline` (iOS Safari refused inline autoplay
      without it), and `className="w-full h-auto block"` — it previously had no sizing at all
      and rendered at intrinsic video size.
- [x] ~~Optional further win~~ (not pursuing): trimming below 15s, or revisiting unbranded hosting (Vimeo /
      Cloudflare Stream / Bunny.net) if the client's objection was to YouTube's branding
      specifically rather than to external hosting.

## 2. Three real bugs — done

- [x] **[Gallery.jsx:77](src/components/Gallery.jsx#L77) — `koading="lazy"`** should be
      `loading="lazy"`. The typo means the 3.8 MB `trip3.jpg` loads eagerly while its five
      siblings lazy-load.
- [x] **[Video.jsx:19-24](src/components/Video.jsx#L19-L24) — missing `playsInline`.** iOS
      Safari refuses inline autoplay without it and either hijacks to fullscreen or doesn't
      play at all. The element also has no `className`, so it renders at intrinsic video size
      instead of fitting its section.
- [x] **No catch-all route** in [App.jsx:19-35](src/App.jsx#L19-L35). A mistyped URL matches
      nothing, so React Router renders *nothing* — not even navbar and footer, since the
      `Layout` parent only renders when a child matches. Blank white page. Add
      `<Route path="*" element={<NotFound />} />`.

## 3. `npm run lint` fails — 41 errors — done, lint is clean

- [x] Remove unused imports: the `Navbar`/`Footer` imports in every page file (`Layout`
      already renders them), leftover `useState`/`useRef`/`useEffect`, unused asset imports.
- [x] Strip non-breaking spaces pasted into [Background.jsx:64](src/components/Background.jsx#L64)
      and [Benefits.jsx:261-266](src/components/Benefits.jsx#L261-L266).
- [x] Address the three `react-hooks/set-state-in-effect` errors rather than silencing them —
      [Navbar.jsx:36](src/components/Navbar.jsx#L36) and
      [CarouselWrapper.jsx:62,67](src/components/CarouselWrapper.jsx#L62-L67). The Navbar one
      (closing the mobile menu on route change) is the pattern React 19 now flags as a
      cascading render; deriving it, or closing the menu in the click handler, avoids the
      extra pass. *(Navbar fixed by deriving open state from the path the menu was opened on.
      The other two were actually in `Slider.jsx`, not `CarouselWrapper.jsx`.)*
- [x] **[useNavbar.js](src/hooks/useNavbar.js)** keeps `lastScrollY` in state *and* in the
      effect's dependency array, so it tears down and re-adds the scroll listener on **every
      scroll event**. Moving `lastScrollY` to a `useRef` makes it one listener for the
      component's life.

## 4. SEO and link previews — done

High value here specifically, because the primary channel is people sharing the link over
WhatsApp. [index.html](index.html) currently has a `<title>` and nothing else.

- [x] Add `<meta name="description">` and Open Graph / Twitter tags. Without `og:title`,
      `og:description`, and `og:image`, **every link shared on WhatsApp shows a bare URL** with
      no image or text. Probably the cheapest conversion win available.
- [x] Add `robots.txt` and a sitemap.
- [x] Add `LocalBusiness` JSON-LD. Both branches — full addresses and opening hours — are
      already structured in [constants/index.js:216-235](src/constants/index.js#L216-L235), which
      is exactly the data Google wants for local search. This is a local business with two
      physical locations.

  Done: per-route titles/descriptions/canonicals, built into static HTML per route (see
  CLAUDE.md "SEO / `<head>`").

## 5. Deployment will break on deep links — not an issue

Hosted on Cloudflare Pages, which already serves `index.html` for unknown paths as long as
there is no top-level `404.html`, so deep links work without a `_redirects` file.

- [x] No `netlify.toml`, `vercel.json`, or `public/_redirects` exists. `BrowserRouter` needs
      the host to rewrite unknown paths to `index.html`; without it, opening
      `/programs/robotics-steam` directly — or refreshing while on it — returns a 404 from the
      host. The exact config depends on where this is hosted. Needed before the next deploy.

## 6. Accessibility — done

- [x] The mobile menu toggle uses bare lucide icons with `onClick`
      ([Navbar.jsx:126-135](src/components/Navbar.jsx#L126-L135)) — not `<button>`, so it is
      unreachable by keyboard and invisible to screen readers.
- [x] [CTAButton.jsx:13-25](src/components/CTAButton.jsx#L13-L25) nests `<a>` inside
      `<button>`, which is invalid HTML. Since it always navigates to WhatsApp, it should be a
      styled `<a>`.
- [x] Carousel arrows in [CarouselWrapper.jsx:57-69](src/components/CarouselWrapper.jsx#L57-L69)
      have no `aria-label` (the pagination dots below correctly do).
- [x] The `heroBoyGirl` image at [Hero.jsx:35-38](src/components/Hero.jsx#L35-L38) has no `alt`.

## 7. Smaller items

- [x] `src/components/Slider.jsx` is untracked and looks like a scratch experiment — dummy
      `"one"/"two"/"three"` content, duplicating `CarouselWrapper`, with dead framer-motion
      imports. Delete it or finish it. *(Deleted.)*
- [x] Route-level `React.lazy` would split the six program pages out of the main bundle.
      Modest next to the images, but easy.
- [x] `src/assets/index.js` imports `facebook.svg?react`, but `vite-plugin-svgr` is not
      installed — that import yields a URL string, not a component. Install the plugin or drop
      the unused `FacebookIcon` export. *(Dropped it, plus the unused instagram/whatsapp SVGs.)*
- [x] `npx update-browserslist-db@latest` — caniuse data is 9 months stale (build warning).

---

## Suggested order

**Quick and low-risk**, no decisions needed: the `koading` typo, `playsInline`, the catch-all
route, the lint cleanup, the `useNavbar` ref fix, and the OG meta tags.

**Needs a decision first:** image and video compression (which tooling; whether the MP4 moves
to YouTube) and the SPA rewrite config (which host).
