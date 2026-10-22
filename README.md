# Astra Mastering (web)

Standalone, **local-first** audio mastering in the browser. Pick any audio file,
shape the chain, A/B the result, export a validated WAV. No account, no upload:
the DSP runs in a Web Worker on your machine.

This app is the mastering screen of AstraStudio without the studio around it.
The UI and the audio engine come from `@tradade/astra-mastering-ui`; the DSP
chain comes from `@tradade/astra-mastering`.

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # tsc -b && vite build
pnpm lint
```

## Shared packages

Both halves ship as public packages on npm, and `pnpm install` pulls them from
the registry — no sibling checkout needed:

- `@tradade/astra-mastering-ui` — workspace, theme, and landing page (`^0.1.0`)
- `@tradade/astra-mastering` — the DSP chain (`^0.1.1`)

That matters for CI: a clean clone must build from the registry alone. Vercel
runs `pnpm install` and `pnpm build` in a checkout where
`../astra-audio-project` does not exist, so a `link:` dependency there fails
the build with `failed to resolve import`.

### Working on the UI package locally

Point the dependency at your AstraStudio checkout for live edits, then install:

```jsonc
// package.json (temporary)
"@tradade/astra-mastering-ui": "link:../astra-audio-project/packages/astra-mastering-ui"
```

```bash
pnpm install
```

Switch it back to the version range before committing; `link:` paths break the
deploy.

## What it does

- **Drop a file** — WAV, MP3, M4A, FLAC (anything the browser decodes). Long
  files are analyzed and rendered in a worker so the UI stays responsive.
- **Master** — input gain, five-band EQ, mud cut, clean low end, glue
  compression, de-harsh, punch, air, tape warmth, stereo width, center bass.
- **Recommend** — a deterministic, rule-based engine reads the analysis report
  and proposes profile/goal-driven settings. Three ready variants
  (Safe / Balanced / Loud) can be previewed and applied.
- **A/B** — original ↔ manual ↔ suggestion, with level matching and a
  bypassable preview cache.
- **Export** — 44.1/48/88.2/96 kHz, 16/24/32-bit, TPDF or noise-shaped dither,
  plus a JSON export report (LUFS, true peak, validation warnings).

Preview and export run the *same* chain (`runMasteringChain`), so what you hear
is what you get.

## Layout

| Path | Role |
|---|---|
| `src/App.tsx` | App shell: `#studio` shows the workspace, otherwise the landing page |
| `src/components/BrandBar.tsx` | Studio header (Overview link + theme toggle) |
| `src/styles/app.scss` | App-only chrome; theme comes from the package |
| `DESIGN.md` | Stitch-ready design system for the landing page |
| `public/test-sine.wav` | Demo tone offered by the drop zone |

## Privacy

Audio never leaves the device. There are no network calls in the mastering path
— the only outbound request is the web-font stylesheet declared by the shared
theme.

## License

GPL-2.0-or-later. See `LICENSE`. The bundled `@tradade/astra-mastering` package
is MIT.
