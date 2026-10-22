# Design System: Astra Mastering — Landing

## 1. Visual Theme & Atmosphere

A control room at 3 a.m., cleaned up for daylight. **Instrument-panel minimalism**:
almost no surfaces, hairline rules, mono readouts, and one indigo accent that only
marks live or primary state. Density 3 / 10, variance 7 / 10 (left-weighted,
asymmetric hero with an offset spec column), motion 4 / 10 — restrained, physical,
never decorative. The page should feel measured, like a device that reports what it
did rather than a SaaS page that asks for an email.

Dark is the default; light is a first-class peer, not an inversion filter.

## 2. Color Palette & Roles

- **Studio Off-Black** (#060608) — page canvas in dark mode (never pure black)
- **Panel Charcoal** (#0F0F15) — the only filled surface, used for the spec readout
- **Instrument White** (#F4F6FB) — primary text, dark mode
- **Readout Steel** (#B4BDCC) — body and secondary copy, dark mode
- **Quiet Slate** (#8A99AF) — labels, captions, metadata, dark mode
- **Hairline** (rgba(255,255,255,0.08)) — every divider, border, and ladder tick
- **Signal Indigo** (#6366F1) — the structural accent: primary CTA border,
  focus ring, index numbers, one ladder line. Never used as a fill for large
  areas.
- **Spectrum set** — indigo / violet / cyan / teal / amber / rose. Each one is a
  channel, assigned per readout: chain steps 01–03, the four proof numbers, the
  three variants (cool → hot), the spectrum ladder, the section-title rule, the
  brand glyph, and the eyebrow. Hue marks *which* value, never decoration.
- **Ambient wash** — three low-alpha radial gradients (indigo, cyan, violet) at
  the hero corners tell you this page is about sound; they sit behind the text
  at 7–20% alpha and never become a surface.
- Light mode: **Paper** (#F5F7FB), **Ink** (#0B1220), **Steel** (#3A4763),
  **Rule** (rgba(15,23,42,0.12)). Spectrum hues deepen (indigo #4F46E5,
  violet #7C3AED, cyan #0891B2, teal #0D9488, amber #B45309, rose #BE123C);
  the wash drops to 7–10% alpha.

Gradients are allowed only as the ambient page wash, the 30px section-title
rule, and the spectrum ladder — never as text fill or card fill. No glow
shadows. Numeric readouts use JetBrains Mono; labels use uppercase mono at
0.66–0.7 rem.

## 3. Typography Rules

- **Display:** Outfit — 600 weight, `clamp(2.5rem, 6.2vw, 5rem)`, line-height 0.98,
  letter-spacing −0.035em. Hierarchy comes from weight and color, not size alone.
- **Body:** Plus Jakarta Sans — 0.9–1.08rem, line-height 1.6–1.65, max 62ch.
- **Mono:** JetBrains Mono — spec values, indices (`01`, `02`), fine print,
  uppercase eyebrows at 0.18em tracking.
- **Banned:** Inter, any generic serif, oversized gradient headline text.

## 4. Component Stylings

- **Primary button:** transparent fill, 1px Signal Indigo border, 4px radius,
  min-height 46px, arrow icon after the label. Hover = 16% indigo wash. Active =
  1px downward translate. Focus-visible = 2px indigo ring, 3px offset. No glow.
- **Ghost button:** hairline border, stone text, border turns indigo on hover.
  Used for the header's "Overview" back action and the theme toggle.
- **Theme toggle:** pill, hairline border, sun/moon icon + word. Label hides under
  720px, icon stays.
- **Spec panel:** no card. An indigo-tinted left hairline and a wash that fades
  by 68%, four `dt/dd` rows separated by top borders, values right-aligned in
  mono. The ladder is fourteen 2px ticks running indigo → cyan → amber → rose,
  brightest at the top; the top line animates scaleX and the live teal dot
  pulses at 3.2s.
- **Chain steps:** index in the step's hue, top hairline mixed 34% toward it.
- **Variants:** 6px dot + name in the variant hue (teal / indigo / rose), top
  hairline mixed 30% toward it.
- **Sections:** separated by full-bleed top borders, never by cards. Cards are
  banned here — elevation does not communicate hierarchy on this page.
- **Loaders/empty states:** the app's own drop zone, not the landing page.

## 5. Layout Principles

- One 1320px container, `padding-inline: clamp(20px, 5vw, 64px)`.
- Hero: 12-column grid split 7 / 4 with a large gap; the spec column is pushed
  down 58px so the two halves never align into a centered block.
- Proof strip: 4 columns with vertical hairlines; collapses to 2×2 under 960px.
- Chain + variants: 4 / 7 asymmetric split, left heading, right rows.
- Single column below 960px; every grid collapses, no horizontal overflow.
- Section rhythm: `padding-block: clamp(44px, 7vw, 92px)`.
- Full-height uses `100dvh`, never `100vh`.

## 6. Motion & Interaction

- Entrance: 12px rise + fade, 0.7s `cubic-bezier(0.2, 0.7, 0.2, 1)`, 60ms stagger
  across hero children.
- Perpetual micro-motion only where it reports state: the live dot pulse and the
  scaleX sweep on the spec ladder.
- Hover/active transitions: 150ms, transform and color only.
- `prefers-reduced-motion: reduce` removes every animation, including loops.
- Never animate width, height, top, or left.

## 7. Anti-Patterns (Banned)

- No emojis anywhere.
- No Inter, no generic serifs, no gradient text on headlines.
- No pure black (#000000) or pure white (#FFFFFF) page fields.
- No neon or outer-glow shadows; colour is carried by hairlines, ticks, numbers
  and type, not by glowing fills.
- No more than the six spectrum hues; never a colour outside that set.
- No centered hero, no 3-equal-card feature row, no card-in-card nesting.
- No overlapping text or absolutely stacked content.
- No filler: "Scroll to explore", chevrons, bouncing arrows, fake metrics,
  invented testimonial names.
- No marketing clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Supercharge".
- Copy states measurable facts (0 bytes uploaded, one chain, 24-bit WAV + report).
