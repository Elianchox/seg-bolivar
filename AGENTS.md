# AGENTS.md

## Overview

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript. "Seg Bolivar" — a security app (UI copy is in Spanish, `<html lang="es">`). A recreated clone of constructorabolivar.com's "Pagos en línea" flow (`/pagos-en-linea` and `/listado-pagos-en-linea`) built from the real HTML/CSS.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (runs type-checking)
- `npm run start` — serve production build
- `npm run lint` — ESLint (flat config, whole repo)
- `npx tsc --noEmit` — type-check without a build; there is no `typecheck` script

There is no test framework configured — don't look for test scripts or fixtures.

## Conventions

- All code lives in `src/`; import via the `@/*` alias (`@/components/...` → `src/components/...`).
- Feature code goes in `src/features/<feature>/` with `components/`, `hooks/`, `api/`, `types/` and (when needed) `utils/` subfolders. Each API file is a single fetch function that delegates to the shared `apiGet` from `src/lib/api.ts` (`API_BASE_URL` = constructorabolivar.com). Shared UI primitives belong in `src/components/ui`, layout components in `src/components/layout`. Don't put shared UI or API clients inside `app/`.
- `src/components/layout` is grouped by area: `header/` and `footer/` subfolders hold the composite component (`header.tsx`, `footer.tsx`) plus their pieces. Standalone layout widgets (`mobile-menu.tsx`, `mobile-fixed-actions.tsx`) live flat in `src/components/layout`.
- Shared folders:
  - `src/constants/` — static UI data (nav, footer links, languages, currencies, contact, pagination).
  - `src/lib/` — non-React infra (e.g. `api.ts`).
  - `src/hooks/` — shared reusable hooks (e.g. `use-debounced-search.ts`).
  - `src/utils/` — pure helper functions.
- Constants that only reference components (icons) can live in `src/constants/` (e.g. `socialLinks`, `currencies`). Data containing JSX children (e.g. footer `contactItems`) or referencing feature components (e.g. `steps` with `StepIcon*`) stays colocated in the component file.
- Tailwind v4: there is no `tailwind.config.js`. Theme/styling is done in CSS (e.g. `@theme` in `src/app/globals.css`); content is auto-detected.