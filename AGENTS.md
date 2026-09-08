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

- All code lives in `src/`. Import a module's internals via that module's alias (`@pagos/components/...` → `src/modules/pagos-seguro-bolivar/components/...`); the root `@/*` alias is reserved for shared code extracted to `src/` when a second module needs it.
- The app is organized as **self-contained modules** under `src/modules/<module>/`, one per payment destination. The current module is `src/modules/pagos-seguro-bolivar/` (hub: home, pagos-en-linea, listado-pagos-en-linea, proyectos) and is imported via the `@pagos/*` alias (`@pagos/components/...` → `src/modules/pagos-seguro-bolivar/components/...`). Future portal modules (davivienda, ecollect, zonapagos...) will each add their own folder under `src/modules/` and their own alias.
- Each module owns its `components/`, `constants/`, `features/`, `fonts/`, `hooks/`, `lib/`, `assets/` and `globals.css`. Feature code goes in `src/modules/<module>/features/<feature>/` with `components/`, `hooks/`, `api/`, `types/` and (when needed) `utils/` subfolders. Each API file is a single fetch function that delegates to the shared `apiGet` from the module's `lib/api.ts` (`API_BASE_URL` = constructorabolivar.com).
- `src/app/` is a **thin route layer only**: each `page.tsx`/`layout.tsx` renders components imported from a module, with no business logic. Route groups are named after the module they serve (e.g. `src/app/(pagos-seguro-bolivar)/`). Root `layout.tsx` imports the module's `globals.css` and fonts.
- Shared UI primitives live in `<module>/components/ui`, layout components in `<module>/components/layout`. Layout is grouped by area: `header/` and `footer/` subfolders hold the composite component plus their pieces; standalone layout widgets live flat.
- Constants that only reference components (icons) can live in `<module>/constants/` (e.g. `socialLinks`, `currencies`). Data containing JSX children (e.g. footer `contactItems`) or referencing feature components (e.g. `steps` with `StepIcon*`) stays colocated in the component file.
- Tailwind v4: there is no `tailwind.config.js`. Theme/styling is done in CSS (e.g. `@theme` in the module's `globals.css`); content is auto-detected.
- If a second portal module ever duplicates shared primitives, extract the genuinely-shared pieces to `src/` root (`src/components/ui`, `src/fonts`, `src/lib`, `src/hooks`) with real evidence — not before (YAGNI).