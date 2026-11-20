# Project Audit – The Signature Affair (Phase 1 Homepage)

Reference: https://signature-affair-club.base44.app/
Inspected: 2026-11-21 with Playwright (Chromium 1255) at 1440×900, 1280×800, 1024×768, 768×1024, 390×844.

The reference is a single-page React + Tailwind CSS v3 app. Every "page" in the navigation is an
anchor to a section on the homepage (`#top`, `#events`, `#academy`, `#portfolio`, `#about`, `#inquire`),
so the whole site is in Phase 1 scope. Nothing links to a separate internal page.

Rendered page height: 9510px (1440), 9470px (1280), 9526px (1024), 12513px (768), 13248px (390).
No horizontal overflow at any width.

---

## 1. Section breakdown (exact order)

| # | Section | id | Background | Notes |
|---|---------|----|-----------|-------|
| 0 | Fixed header | – | `rgba(13,13,15,.55)` + 40px backdrop blur, copper/30 bottom border | 76px tall, `max-w-7xl` |
| 1 | Hero | `top` | Ballroom photo + 2 dark gradients, copper uplight, pulsing candle glow, floating gold dust | `min-h-[100svh]` |
| 2 | "How can I help you?" (two paths) | `paths` | Champagne `#F3E6D3` + blush/copper blurred orbs | Two image cards, the hovered one widens (`flex-[1.14]`) |
| 3 | Signature services | `events` | Signature black `#0D0D0F` + 6 pulsing candle glows | 12-col bento grid: 1 large image card, 2 glass cards, 3 category image cards |
| 4 | Portfolio "Room reveals." | `portfolio` | Champagne | 5 filter pills, 9-image masonry (CSS columns), lightbox, Instagram link |
| 5 | Academy | `academy` | Black + royal-blue and copper blurred glows | 5/7 split: intro + chips; 3 staggered class cards + mentorship bar + disclaimer |
| 6 | About Dee | `about` | Designer photo at 60% opacity under 2 gradients | Portrait with copper badge + glass bio card, stats count up |
| 7 | Testimonials "Kind words" | – | Champagne + blush orb | 2 rows × 3 glass-light cards, offset vertically on desktop, horizontal snap scroll on mobile |
| 8 | Inquiry form | `inquire` | Flower-wall photo at 55% + black/85 overlay | Tabbed form (Plan an Event / Join the Academy), validation |
| 9 | Footer | – | Black, copper/30 top border | 4/2/3/3 grid, social buttons, Privacy/Terms dialogs |
| – | Mobile sticky CTA bar | – | `rgba(13,13,15,.92)` + blur | `< lg` only: "Plan My Event" / "Academy" |

The "Edit with Base44" badge is platform chrome, not site content, so it is not reproduced.

## 2. Design specification

### Colour palette (Tailwind tokens taken from the compiled CSS)
| Token | Value | Use |
|---|---|---|
| `signature` | `#0D0D0F` | Page / dark section background |
| `champagne` | `#F3E6D3` | Light section background |
| `blush` | `#F2D3CF` | Decorative blurred orbs |
| `copper` | `#C98A5E` | Primary accent, CTA fill |
| `copper-light` | `#E8B38A` | Script text, outline-button text |
| `copper-deep` | `#A8643E` | Accent text on light backgrounds |
| `ivory` | `#FFFAF4` | Body text on dark |
| `ink` | `#1C1A1A` | Text on light |
| `royal` | `#0047AB` | Academy divider gradient |
| `text-copper-grad` | `linear-gradient(102deg,#E8B38A 0%,#C98A5E 46%,#A8643E 100%)` clipped to text | Italic heading accents |

### Typography (Google Fonts)
- **Bodoni Moda** (variable, opsz 6–96, wght 400–700, roman + italic): `font-display`, used for headings, card titles and testimonial quotes. Headings use weight 500 (`font-medium`).
- **Pinyon Script**: `font-script`, used for script accents ("Every detail, a signature", "learn from a designer", "hello, I'm").
- **Questrial**: body font. Body is 17px with line-height 1.65.
- `.label-caps`: Questrial 11.5px, uppercase, letter-spacing .24em, line-height 1.6.
- H1: `clamp(2.5rem, 6.2vw, 5rem)`, leading 1.04, tracking -0.01em.
- H2: `clamp(2.1rem, 4.6vw, 3.5rem)`, leading 1.08–1.1.
- Buttons: 11–12px uppercase, tracking .18–.2em.

### Layout
- Container `max-w-7xl` (1280px), gutters `px-5` (20px) on mobile and `sm:px-8` (32px).
- Section padding `py-24` (96px), and `lg:py-32` (128px) on large screens.
- Card radius 28px everywhere. Inputs are `rounded-2xl` (16px). Buttons and pills are fully rounded.
- Breakpoints are standard Tailwind: sm 640, md 768, lg 1024, xl 1280.

### Surfaces
- `.glass-dark`: `#0F0F128C` background, 24px blur, 1px `#C98A5E4D` border, shadow `0 40px 90px -50px #E8B38A73` plus an inset highlight.
- `.glass-light`: `#FFFFFFA6` background, 22px blur, 1px `#C98A5E3D` border, shadow `0 30px 70px -45px #1C1A1A59`.
- `.lit-card`: images rest at `brightness(.6) saturate(.75)` and light up to `brightness(1.04) saturate(1.05)` on hover over 0.9s. A ring glow fades in.

## 3. Animation and interaction inventory

| Component | Behaviour |
|---|---|
| Hero image | `saf-uplight` fades it in over 2s after a 150ms delay |
| Hero copy | `saf-rise` (22px → 0, fade, 1.1s, cubic-bezier(.22,1,.36,1)) with staggered delays of 700, 900, 1100, 1300 and 1500ms |
| Hero dust | 12 gold particles drift up and fade (`saf-dust`, 15–23s, infinite) |
| Candle glows | `saf-candle` pulses opacity and scale over 5s, infinite |
| Scroll reveal | Blocks start at `translate-y-7 opacity-0` and transition over 1100ms when they enter the viewport. Stagger delays come from inline `transition-delay` |
| `.btn-shine` | A light sweep crosses the button on hover (0.95s) |
| Primary buttons | Lift 2px on hover (`-translate-y-0.5`) |
| Nav links | Copper underline grows from 0 to 100% width (500ms) |
| Paths cards | Hovered card grows to `flex: 1.14` (lg only), image zooms from 1.05 to 1, inset copper glow |
| Services cards | The "Inquire →" label fades and slides in on hover. Glass cards get a copper border on hover |
| Portfolio filters | All / Weddings / Corporate / Celebrations / Details filter the grid. The active pill is ink-filled |
| Portfolio items | Hover zooms to 1.04 and lightens the image. Some items show a "maximize" badge. Clicking opens a lightbox (`object-contain`, category plus caption). It closes on ✕, Escape or a backdrop click |
| About stats | Numbers count up from 0 to 15+ and 500+ (about 2s) when they scroll into view |
| Inquiry tabs | A copper pill slides between "Plan an Event" and "Join the Academy" (500ms). The form swaps with a fade |
| Service chips | Toggle buttons. When on: `bg-copper text-signature` |
| Validation | Name needs 2 or more characters, phone needs 10 or more digits, email must be valid, and an event type or class must be chosen. Errors appear as copper-light text under each field |
| Footer Privacy / Terms | Glass modal with placeholder policy text |
| Footer Facebook / TikTok | "Find us" modal explaining the profiles are being finalised |
| Mobile menu (< lg) | Right drawer (86% width, max 384px) slides in over 500ms with a blurred backdrop and large Bodoni links |
| Mobile CTA bar (< lg) | Fixed bottom bar with two CTAs |
| `prefers-reduced-motion` | All keyframe animations are disabled and smooth scroll is turned off |

## 4. Responsive behaviour

| Width | Header | Hero | Paths | Services | Portfolio | Academy | Testimonials |
|---|---|---|---|---|---|---|---|
| ≥1280 (xl) | Full nav + 2 CTAs | 2-line H1 + italic gradient line | Side by side | 7/5 bento + 3 category cards | 3 columns | 5/7 split, cards staggered right | Centered rows, offset cards |
| 1024–1279 (lg) | No text nav, 2 CTAs + nothing else (menu button hidden) | Same | Side by side | Same | 3 columns | Same | Same |
| 768–1023 | Logo + menu button | Buttons in a row | Stacked | Single column | 2 columns | Stacked | Horizontal scroll |
| 390 | Logo + menu button | Buttons stacked full width | Stacked, full-width buttons | Single column | 2 columns (300/200px tiles) | Stacked, buttons below text | Horizontal snap scroll, 276px cards |

On screens below lg, the footer has extra bottom padding (`pb-28`) so the sticky CTA bar does not cover it.

## 5. Asset inventory

All original assets were retrieved at full resolution from `media.base44.com` and saved to `public/images/`.

| File | Original | Used in |
|---|---|---|
| `logo-monogram.png` | `user_6aea…/eea1637e7_image0.png` | Header, drawer, footer (circular crop) |
| `ballroom-hero.png` | `d3bc479ff_generated_ba891467.png` | Hero, portfolio |
| `floral-arch.png` | `32b9ec24f_generated_eaa56711.png` | Paths card 1, portfolio |
| `academy-class.png` | `bae8a316a_generated_ab591a72.png` | Paths card 2 |
| `flower-wall.png` | `5a1d9e83f_generated_c98b2632.png` | Services feature, portfolio, inquiry background |
| `first-dance.png` | `df7ba980e_generated_a370a5e2.png` | Weddings card, portfolio |
| `corporate-gala.png` | `26f5d9dda_generated_f0bc3930.png` | Corporate card, portfolio |
| `milestone-tablescape.png` | `da78dd04b_generated_4ca4fd8c.png` | Celebrations card, portfolio |
| `seating-chart.png` | `d87890dc8_generated_d1d92c48.png` | Portfolio |
| `place-setting.png` | `2110c889c_generated_bd0e8cdc.png` | Portfolio |
| `designer-florals.png` | `8e080137b_generated_b364b92c.png` | Portfolio, About background |
| `dee-lyles.png` | `3a96f9910_generated_e10c2afe.png` | About portrait |

- **Fonts:** Bodoni Moda, Pinyon Script and Questrial come from Google Fonts. They are self-hosted through `next/font`.
- **Icons:** Lucide icons (menu, x, arrow-up-right, arrow-right, maximize-2, music-2). The Instagram and Facebook glyphs were removed in lucide-react v1, so they are inlined as SVG using the same Lucide paths.
- No assets were substituted.

## 6. Notes for later phases
- The inquiry form posts to the Base44 backend in the reference. In Phase 1 it validates on the client only and tells the user it is a preview. Nothing is sent.
- The Instagram handle is spelled `@thesignaturesffairga` in the reference and has been kept as-is. It looks like a typo for "signatureaffair" and should be confirmed with the client.
- Testimonials are labelled as samples in the reference, and the label is kept.
