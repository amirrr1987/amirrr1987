# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Single **Nuxt 4** portfolio site (Vue 3, Nitro API routes, Pinia, `@nuxt/content`, `@nuxt/ui`). One dev process serves UI and `/api/*`. No Docker, no separate database server — `@nuxt/content` uses embedded SQLite via `better-sqlite3`.

### Prerequisites

- **Node.js 22** (see `.nvmrc`: `v22.20.0`)
- **Bun** (lockfile is `bun.lock`; install from https://bun.sh if missing). Ensure `~/.bun/bin` is on `PATH`.

### Commands

| Task | Command |
|------|---------|
| Install deps | `bun install` (runs `nuxt prepare` via `postinstall`) |
| Dev server | `bun run dev` → http://localhost:3000 |
| Production build | `bun run build` |
| Preview build | `bun run preview` |
| Static generate | `bun run generate` |
| Lint | `bun run lint` |
| Format | `bun run format` |

There is **no test script** in `package.json` despite `@nuxt/test-utils` being listed.

### Services

Only **one required service**: the Nuxt dev server (`bun run dev`). Use **tmux** for long-running dev (e.g. session name `nuxt-dev`).

**Outbound HTTPS** to `css-tricks.com` is required for `/blogs` and `/api/blogs` (Cheerio scraper). No `.env` or secrets are used.

### Gotchas

- **Lint** may fail on pre-existing issues (e.g. `vue/no-multiple-template-root` in `app/layouts/default.vue`, `@typescript-eslint/no-explicit-any` in blog API routes). Build still succeeds.
- **`@nuxt/image` / sharp**: build can warn that sharp linux-x64 binaries are missing; dev and build still complete.
- **Hot reload**: after dependency changes, restart `bun run dev` if behavior looks stale.
- Root `README.md` is a GitHub profile README, not app setup docs.

### Hello-world smoke test

1. `bun run dev`
2. Open http://localhost:3000 — home hero loads
3. Visit **Blogs** — posts from `/api/blogs`
4. Submit **Contact** form — expect browser `alert()` confirmation (no backend email)
