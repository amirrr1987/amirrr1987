# Amir Maghami — Portfolio

Personal portfolio built with **Nuxt 4**, **Nuxt UI**, and GSAP/Three.js motion. Deployed on **Netlify** (SSR + prerendered home).

## Stack

- Nuxt `4.5.1` + Vue `3.5` + Vue Router `5`
- `@nuxt/ui`, `@pinia/nuxt`, `@nuxt/image`, `@nuxt/icon`, `@vueuse/nuxt`, `@netlify/nuxt`
- GSAP + Three.js for motion / background
- Node `>=22.12` (see `engines` + `.node-version`)

## Setup

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```

Netlify uses `netlify.toml`:

- Build: `pnpm run build`
- Publish: `dist`
- Functions: `.netlify/functions-internal`
- Node: `22`

## Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Local development |
| `pnpm build` | Production build (Netlify preset) |
| `pnpm preview` | Preview production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | Vue / Nuxt typecheck |
