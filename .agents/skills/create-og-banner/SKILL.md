---
name: create-og-banner
description: Use when creating, updating or re-exporting an Open Graph / social share banner (og:image) or a landing page card image for the Fylgja site, or a GitHub README banner, including requests for "a new OG image", "social banner", "share image", "README banner", "banner for /some-section", or "card thumbnail like the library ones". Covers the shared visual system, copy rules, the HTML sources in banners/, the render script, and where each image is wired into the site.
---

# Create OG Banner

Every social banner on fylgja.dev is a self contained HTML file in `banners/`, rendered to a
1200×630 PNG in `src/assets/social/`. README banners use the same system at 1280×320. All banners share one visual system so they read as a
set. A new banner always starts as a copy of the closest existing one.

## Existing banners

| Source | Used for | Wired in |
| --- | --- | --- |
| `default.html` | Fallback for every page without its own image | `src/layouts/BlankLayout.astro` |
| `ui.html` | `/ui/**` | `socialImages` in `src/layouts/DocsLayout.astro`, keyed by `collectionName` |
| `library.html` | `/library/**` without a package banner | same as above |
| `docs.html` | `/docs/**` | same as above |
| `blog.html` | Blog index, tag pages, posts without a `coverImage` | `src/pages/blog/**` |
| `base.html`, `tokens.html`, `utilities.html` | The package pages | `socialImages` in `src/pages/library/_collection.ts`, keyed by entry id |
| `*-card.html` | Card images on the `/library/` landing page | `cardImages` in `src/pages/library/_collection.ts` |
| `readme.html` | GitHub README banner, 1280×320 | Not used by the site, render it elsewhere with `--out` |

## Workflow

1. Copy the closest file in `banners/` to `banners/<name>.html`. The file name becomes the PNG name.
2. Change the pill text, the headline, the tagline and the cards (rules below).
3. Render it from the site root:
   ```sh
   node .agents/skills/create-og-banner/render.mjs <name>
   ```
   This screenshots the banner at the size set on its `.banner` element with headless Chrome (override the path with `CHROME=...`) and writes a palette compressed PNG of about 70KB to `src/assets/social/<name>.png`. Without names it renders every banner. `--out=<dir>` writes somewhere else, and `--scale=2` renders at double size, which suits README banners since GitHub scales them down. Keep OG images at scale 1, since Open Graph expects exactly 1200×630.
4. Look at the PNG before wiring it. Check that nothing wraps unexpectedly and the card stack stays inside the frame (the last card should end above roughly y=580).
5. Wire it in. Import the PNG and pass `.src` as the layout's `image` prop, or add it to one of the maps in the table above. `DocsLayout` takes an `image` prop that overrides its section image.
6. Run `npx astro check`.

Re-rendering an unchanged banner produces a slightly different PNG, so only commit the PNGs you meant to change.

## Visual system

Colors are custom properties on `:root` in each file.

| Token | Value | Used for |
| --- | --- | --- |
| `--ground` | `#221A26` | Background |
| `--glowA` | `#E3895C` | Warm end of the gradient |
| `--glowB` | `#B05BC4` | Purple end of the gradient |
| `--brand` | `#70279A` | Fylgja Purple inside the cards |
| On Brand | `#FCFCFC` | Logo, headline, card surfaces |
| Tagline | `#E4D8EA` | Mono tagline |
| Card text | `#2B1C2C` | Text on the white cards |
| Card label | `#5E2183` on `#F1E6F7` | Small mono labels and chips |

- Behind everything: a 24px dot grid and a radial glow centered at 930, 300 (radius 440).
- Left column: 72px from the left, 64px from the top, 560px wide. Logo row, an 80px gap, the headline, a 22px gap, the tagline. The space below the text stays empty on purpose.
- Logo row: the white wordmark at 230px with a mono pill naming the section, top aligned (`align-items: flex-start`). The default banner has no pill since it stands for the whole brand.
- Headline: Bricolage Grotesque 800, 58px, line height 1.04.
- Pill and tagline: JetBrains Mono, 600 at 28px and 500 at 22px.
- Cards: three white cards, 400px wide, starting at x=720, rotated −4deg, with the middle card offset 48px to the right. Each card has a small uppercase mono label, optionally a chip on the right.

## Copy rules

- The headline has exactly two gradient words. Put `&#160;` before the last one so it never sits alone on a line.
- Don't reuse gradient words already taken: copy/install, pick/adopt, HTML/import, new/modern CSS, companion/need, HTML/class, language/variables, tune/class.
- The tagline is a few mono items joined by `·` and ends with the page URL, for example `fylgja.dev/library/tokens`. There is no separate footer or call to action.
- No counts (components, packages, posts) and no versions, dates or other time-based claims. They go stale and the banner should outlive them.
- Cards show real Fylgja output using real class names, tokens and element names. Check names against `node_modules/@fylgja/` or `src/content/` before using them.
- Use US English, matching the site.

## README variant

A README banner is 1280×320 with a vertically centered text column, 64px from the left and 700px wide: the logo row (wordmark at 200px), the headline at 36px and the tagline at 18px. Two cards sit 64px from the right, 380px wide, rotated −4deg, with the second offset 40px. The glow is centered at 1030, 160 with a radius of 340. Start from `readme.html`.

## Card variant

A landing page card image is the same banner with the headline and tagline removed. The logo
row is vertically centered in the left column, the wordmark grows to 280px with `flex: none`
(so a long pill can't shrink it) and the pill grows to 32px. Name it `<name>-card.html`. See
`base-card.html` for the exact changes.
