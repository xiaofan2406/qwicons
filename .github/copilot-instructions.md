# Copilot Instructions

## Commands

```bash
bun run generate-icons          # Regenerate all icons from source packages
bun run generate-5-icons        # Generate only 5 icons (fast dev iteration)
bun run generate-50-icons       # Generate 50 icons
bun run build.lib               # Build the library (ESM + CJS + types)
bun run build.lib.browser       # Build JS only (vite)
bun run build.lib.types         # Build type declarations only (tsc)
bun run lint                    # ESLint on src/**/*.ts*
bun run fmt                     # Prettier write
bun run fmt.check               # Prettier check
```

There is no test suite.

## Architecture

This is a **code-generation pipeline** that wraps lucide SVGs as Qwik components, published as `qwicons`.

### How it works

1. **`generate/lucide.ts`** — Defines the lucide icon pack config: `prefix`, `coloring`, and a `contents` object with a glob pattern for source SVG files and an `extract` function to parse icon names from file paths.

2. **`generate/generate-icons.ts`** — Reads the lucide config, iterates over SVG files, runs SVGO on each, injects `stroke: currentColor`, sets dimensions to `1em × 1em`, spreads `{...props}` on the SVG element, and writes each icon as a `.jsx` file to `src/icons/lu/`.

3. **`src/icons/lu/`** — Entirely generated; not committed (only `.gitkeep` is tracked). Contains individual component files and a barrel index.

4. **`vite.config.ts`** — Builds `src/icons/lu/lu.js` and `src/entry.lib.ts` as entry points, producing `lib/lu.qwik.mjs` and `lib/lu.qwik.cjs`.

5. **`package.json` exports** — `qwicons/lucide` maps to `lib/lu.qwik.mjs`.

## Key Conventions

### Icon naming
`Lu{CamelCaseName}` — e.g., `LuRocket`. The `Lu` prefix comes from the lucide pack config.

### Coloring
- `coloring: "stroke"` — sets `stroke="currentColor"`, `fill="none"`

### IconProps
All icons accept `QwikIntrinsicElements["svg"]` props (defined in `src/utils/icon-props.ts`), spread directly onto the `<svg>` element. Size and color are inherited via CSS (`font-size` / `color`).

### Running generation with limited icons
Use `ICON_LIMIT=N` env var (or the `generate-5-icons` / `generate-50-icons` scripts) during development to avoid generating thousands of files. Bun runs the TypeScript generator scripts natively — no transpilation step needed.
