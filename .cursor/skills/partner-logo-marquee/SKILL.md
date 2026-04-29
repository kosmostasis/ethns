---
name: partner-logo-marquee
description: >-
  Delivers partner and community logo rows and marquees to a high standard:
  brand-compliant assets, correct Next.js Image usage, SVG/PNG pitfalls, uniform
  spacing in CSS, and deploy hygiene. Use when adding or changing sponsor logos,
  logo carousels, trust strips, “as seen in” rows, or similar brand marks on a
  Next.js/React site (especially with next/image and flex/wrap marquees).
---

# Partner logo and marquee (best-in-class)

Read this skill when editing partner/community logo lists, marquee components, or assets under `public/`.

## Brand and visual quality

1. **Official guidelines first** — Prefer the partner’s press/brand kit for correct logo variant (e.g. full-color on light, monochrome where required), clearspace, and **co-branding “don’ts”** (no distortion, unapproved colors, busy backgrounds).
2. **Consistent treatment in one row** — Avoid mixing horizontal wordmarks with stacked lockups, or full-color with single-color marks, unless the design system explicitly allows it; keep **relative scale** balanced so no one logo dominates or vanishes.
3. **Tight rows need tight art** — Clearspace-heavy official files look tiny when the row caps `max-height` (e.g. ~2rem). **Crop to the meaningful mark** (alpha bbox) and set accurate intrinsic dimensions, or use a production-ready export the brand allows.

## Assets: SVG vs PNG

| Issue | Fix |
|--------|-----|
| SVG uses `<style>` or `class` for fills | As `<img>` / `next/image`, those often **do not apply**. **Inline `fill` (and stroke)** on paths/shapes, or **use PNG/WebP**. |
| SVG has whitespace | Match **`viewBox`** to content; align root **`width`/`height`** with `viewBox` aspect ratio so the browser does not letterbox. |
| Raster has excess transparent padding | **Crop to alpha bounds**; update **width/height** in code to match the new file. |

## `next/image` checklist

- **`width` and `height`** must match the **actual file pixels** after any crop (aspect ratio drives layout).
- Use **`unoptimized: true`** only when required (e.g. odd formats, tooling constraints); document why in code if non-obvious.
- Colored logos on non-white sections: ensure **correct background** (e.g. transparent PNG on dark) per brand rules.

## Marquee / logo row CSS (uniform spacing)

Prefer **CSS** for breathing room so every mark gets the same treatment regardless of how the file was exported:

- **`box-sizing: border-box`** on the logo item wrapper.
- **Uniform `padding`** on the item (horizontal slightly larger than vertical is fine); avoids relying on inconsistent in-file clearspace.
- **Gap scale**: tune **`gap` / `--marquee-gap`** per row variant (e.g. default vs “medium” vs “dense/subtle”); for wrapped static belts, set **`row-gap`** in proportion so wrapped lines do not collide.
- **Mobile**: slightly tighter gaps are OK; keep **proportional** bumps with desktop so the row does not feel cramped or uneven.

Implement in the project’s marquee module (e.g. `LogoMarquee.module.css` + item class), not only inside image files.

## Deploy and verification

- **Commit `public/` assets** — Untracked or uncommitted files **404 in production** even if they work locally.
- **Hydration warnings on `<body>`** (e.g. `data-gr-*`) — Often **browser extensions** (e.g. Grammarly), not the app; do not “fix” the framework for that.

## Workflow summary

1. Source logo from official kit; pick variant for background and layout.
2. Normalize asset (inline SVG fills **or** PNG; fix viewBox/crop).
3. Record true **width × height** next to the image in data/config.
4. Apply **uniform item padding + gap tokens** in the marquee CSS; verify desktop and narrow breakpoints.
5. **`git add`** new/changed static assets before merge.
