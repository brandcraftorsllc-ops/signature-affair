# QA Report – The Signature Affair (Phase 1 Homepage)

Reference: https://signature-affair-club.base44.app/
Build: Next.js 15.5 (App Router), React 19, TypeScript 5, Tailwind CSS 3.4
Test date: 2026-11-21. Tested with Playwright on Chromium against `next build && next start`.

## 1. Completed sections

All sections from the reference are built, in the same order:

| Section | Component |
|---|---|
| Fixed header, desktop nav, CTAs, mobile drawer | `src/components/layout/Header.tsx` |
| Hero | `src/components/sections/Hero.tsx` |
| "How can I help you?" | `src/components/sections/Paths.tsx` |
| Signature services | `src/components/sections/Services.tsx` |
| Portfolio and lightbox | `src/components/sections/Portfolio.tsx` |
| Academy | `src/components/sections/Academy.tsx` |
| About Dee | `src/components/sections/About.tsx` |
| Testimonials | `src/components/sections/Testimonials.tsx` |
| Inquiry form (2 tabs) | `src/components/sections/Inquire.tsx` |
| Footer and dialogs | `src/components/layout/Footer.tsx` |
| Mobile sticky CTA bar | `src/components/layout/MobileCtaBar.tsx` |

## 2. Visual comparison

### Method
- The same Playwright script loads the reference and the local build at each viewport.
- It scrolls through the full page so every scroll-reveal fires.
- It captures a full-page screenshot.
- It measures the bounding box of every section and every H1/H2.
- It runs a per-section pixel diff. A pixel counts as different when the summed RGB delta is above 60.
- For the final pass, fixed-position UI (header, mobile CTA bar) is hidden in both captures. Full-page stitching draws fixed elements at arbitrary offsets. The looping particle and candle animations are also frozen, since they never line up frame-for-frame.

### Geometry
**0 mismatches across all 5 viewports.** Page height, every section's top, height, left and width, and every heading's box and computed font size are identical.

| Viewport | Page height (ref / local) | Sections matching | Headings matching |
|---|---|---|---|
| 1440×900 | 9510 / 9510 | 9 / 9 | 8 / 8 |
| 1280×800 | 9470 / 9470 | 9 / 9 | 8 / 8 |
| 1024×768 | 9526 / 9526 | 9 / 9 | 8 / 8 |
| 768×1024 | 12513 / 12513 | 9 / 9 | 8 / 8 |
| 390×844 | 13248 / 13248 | 9 / 9 | 8 / 8 |

### Pixel diff per section (% of pixels above threshold)

| Section | 1440 | 1280 | 1024 | 768 | 390 |
|---|---|---|---|---|---|
| Hero | 0.17 | 0.25 | 0.30 | 0.25 | 0.85 |
| Paths | 0.23 | 0.50 | 0.32 | 0.28 | 0.57 |
| Services | 0.30 | 1.04 | 0.63 | 0.59 | 0.73 |
| Portfolio | 2.11 | 2.64 | 2.90 | 2.74 | 1.26 |
| Academy | 0.50 | 0.63 | 0.68 | 0.63 | 0.95 |
| About | 0.30 | 0.34 | 0.41 | 0.35 | 1.14 |
| Testimonials | 0.09 | 0.10 | 0.14 | 0.16 | 0.18 |
| Inquiry | 0.20 | 0.22 | 0.28 | 0.40 | 0.61 |
| Footer | 0.38 | 0.43 | 0.46 | 0.52 | 0.54 |

All remaining differences are sub-pixel anti-aliasing and image resampling. Base44 serves the images through its own CDN transform; this build uses Next.js AVIF/WebP optimisation from the same source files. Portfolio is the highest because it is nine edge-to-edge photos. The side-by-side composites show identical layout, crops and text.

## 3. Responsive testing

At every width the layout comes from the same Tailwind breakpoint classes as the reference, which is why the geometry matches. Checked at all 5 viewports:

- No horizontal overflow at any width.
- Header: full nav at 1280 and above. CTAs only at 1024–1279, the same as the reference, which also hides the menu button in that range. Logo and menu button below 1024.
- Hero buttons stack full-width below 640.
- Paths and Services stack below 1024.
- Portfolio: 3 columns at 1024 and above, 2 columns below.
- Testimonials scroll horizontally with snap below 1024.
- Mobile CTA bar shows below 1024. The footer reserves space for it.

## 4. Functional interactions (26 / 26 pass)

| Test | Result |
|---|---|
| Header nav: each of 5 anchors scrolls its section to the top | PASS ×5 |
| Portfolio filter: Weddings → 3 items, Details → 4, All → 9 | PASS ×3 |
| Lightbox: opens on click, closes on Escape, closes on backdrop click | PASS ×3 |
| Event form: empty submit shows the 4 reference error messages verbatim | PASS |
| Service chips toggle `aria-pressed` and the copper fill | PASS |
| Valid event submit shows the preview notice | PASS |
| Tab switch to Join the Academy shows the academy form | PASS |
| Academy form: empty submit shows "Choose a class or mentorship." and the other errors | PASS |
| Footer Privacy / Terms / Facebook / TikTok dialogs, each with the reference copy | PASS ×4 |
| About counters animate to 15+ and 500+ | PASS |
| Mobile drawer: opens, a link navigates, the drawer closes | PASS |
| Mobile CTA bar is visible at 390 | PASS |
| No horizontal overflow at 390 | PASS |
| Zero console errors and uncaught page errors | PASS |
| Zero failed network requests (4xx/5xx) | PASS |

Hover effects were checked against the reference CSS and use the same classes and keyframes: button shine sweep, button lift, nav underline, lit-card brighten and glow, Paths card widen, "Inquire →" reveal, maximize badge.

## 5. Production build
`next build` compiles with no type or lint errors. The single route `/` is prerendered as static content, with 118 kB first-load JS.

## 6. Known differences and limitations

1. **The form does not send anything.** The reference posts to its Base44 backend. Phase 1 has no backend by design. After client-side validation passes, the form shows: "Thank you. This preview isn't connected to an inbox yet, so nothing was sent. Please email … or call …". Connecting a real form is Phase 2.
2. **The "Edit with Base44" badge is not reproduced.** It is platform chrome, not site content.
3. **Instagram and Facebook icons** are inlined SVGs. The geometry is identical to Lucide's, but lucide-react v1 no longer ships brand icons.
4. **Fonts are self-hosted with `next/font`** (same Google Fonts files), not loaded from the Google CDN. There is no visual difference.
5. **Content flags for the client.** These are copied verbatim from the reference, not invented:
   - The Instagram handle is `@thesignaturesffairga` (possible typo).
   - The testimonials are explicitly labelled as samples.
   - The Privacy and Terms text says the policies are "being finalized".
