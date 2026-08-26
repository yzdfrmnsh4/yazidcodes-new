# AGENTS.md - yazidcodes-new

## Quickstart

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Next.js + Turbopack) |
| `npm run build` | Produce production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Environment

- Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` and `APP_URL`
- `GEMINI_API_KEY` is required for Gemini AI API calls
- `APP_URL` is used for self-referential links, OAuth callbacks, and API endpoints

## Path Aliases

- `@/` prefix resolves to `./*` (defined in `tsconfig.json`)
- Example: `@/components/ui/Button` → `src/components/ui/Button`

## Key Conventions

- **Tailwind CSS v4** — configure via `postcss.config.mjs`; no `tailwind.config.js`
- **Three.js packages** are transpiled via `next.config.ts` (`transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"]`)
- **TypeScript** — `strict: false`, `noEmit: true`, `isolatedModules: true`; build errors intentionally ignored (`ignoreBuildErrors: true` in `next.config.ts`)
- **No test scripts** defined in `package.json`; only `dev`, `build`, `start`, `clean`, `lint`

## Architecture

- App router (Next.js 15, `src/app/` directory)
- 3D/animation heavy: Beams background (canvas), Framer Motion transitions, Lenis smooth scroll
- Dark-themed premium agency showcase (per `PRD.md`)
- Grid breakpoints: `sm:grid-cols-2` / `lg:grid-cols-3` (Tailwind)