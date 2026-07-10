# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **Norta DeSyCo OÜ** (NDSC), exported from the [Base44](https://base44.com) no-code platform. React 18 + Vite 6, JavaScript/JSX (TypeScript only for `src/utils/index.ts`). The directory name (`..._src_to_be_migrated`) signals this code is intended to be migrated off the Base44 platform — expect Base44-specific glue to eventually be replaced.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # production build
npm run preview    # serve the build
npm run lint       # ESLint
npm run lint:fix   # ESLint with --fix
npm run typecheck  # tsc against jsconfig.json (checkJs on .js/.jsx)
```

No test runner is configured.

ESLint and typecheck only cover `src/components/**`, `src/pages/**`, and `Layout.jsx` — `src/api`, `src/lib`, and `src/components/ui` are intentionally excluded (see `eslint.config.js`, `jsconfig.json`).

## Architecture

### Base44 backend integration

All backend access goes through one SDK client, `base44`, created in `src/api/base44Client.js` with `requiresAuth: false` (the app renders for anonymous visitors).

- **Entities** — `base44.entities.<Name>` (CRUD). `src/api/entities.js` re-exports a few. Example: `base44.entities.ContactMessage.create({...})` in `ConsultationFormModal.jsx`.
- **Integrations** — `base44.integrations.Core.*`: `SendEmail`, `SendSMS`, `InvokeLLM`, `UploadFile`, `GenerateImage`, `ExtractDataFromUploadedFile` (re-exported in `src/api/integrations.js`).
- **Auth** — `base44.auth` (`me`, `logout`, `redirectToLogin`).

`appParams` (`src/lib/app-params.js`) resolves `appId`, `serverUrl`, `token`, etc. from, in priority order: URL query params → `localStorage` (`base44_*` keys) → env vars (`VITE_BASE44_APP_ID`, `VITE_BASE44_BACKEND_URL`). The `access_token` query param is consumed and stripped from the URL on load.

The Vite `base44()` plugin supports legacy SDK import aliases (`@/integrations`, `@/entities`) when `BASE44_LEGACY_SDK_IMPORTS=true`; prefer importing `base44` from `@/api/base44Client` directly.

### Routing — page registry, not file-based

Routes are generated from a manual registry, not the filesystem:

1. `src/pages.config.js` maps page names → page components and sets `mainPage`.
2. `src/App.jsx` reads `pagesConfig` and builds a `<Route>` per entry; `mainPage` also serves `/`. Unmatched paths render `PageNotFound`.
3. `createPageUrl(name)` (`src/utils/index.ts`) is the canonical URL builder: lowercase + spaces→hyphens. Use it for all internal links (see `Layout.jsx` nav).

**To add a page:** create `src/pages/<Name>.jsx`, then register it in `pages.config.js` `PAGES`. The route appears automatically.

### App shell

`App.jsx` wraps everything: `AuthProvider` → `QueryClientProvider` → `Router` → `NavigationTracker` + `AuthenticatedApp`, plus `Toaster` and `VisualEditAgent`.

- `AuthContext` (`src/lib/AuthContext.jsx`) fetches app public settings then optional user auth; exposes `useAuth()`. While loading it shows a spinner; on `auth_required`/`user_not_registered` it short-circuits the whole app.
- `Layout.jsx` is the shared chrome (header, footer, `ConsultationFormModal`) applied to every page via `pagesConfig.Layout`.
- Every page receives a `currentPageName` prop.

### Base44 sandbox / visual-editor coupling

Two `src/lib` modules exist to run inside the Base44 editor iframe and are not app features:

- `VisualEditAgent.jsx` — listens for `postMessage` from the parent window, lets the parent visually select elements and edit their Tailwind classes.
- `NavigationTracker.jsx` — posts `app_changed_url` messages to the parent and calls `base44.appLogs.logUserInApp(pageName)` for authenticated users.

`main.jsx` also forwards Vite HMR events to the parent window. These are safe to remove when migrating off Base44.

## Conventions

- Path alias `@/` → `src/` (configured in `jsconfig.json`, resolved by Vite).
- UI: shadcn/ui (`new-york` style, `neutral` base) in `src/components/ui` (~49 primitives). Add components via the shadcn CLI per `components.json`; `cn()` helper lives in `src/lib/utils.js`.
- Styling: Tailwind with CSS-variable theme tokens (`hsl(var(--...))`) defined in `src/index.css`; `darkMode: "class"`.
- This project's own pages currently use hardcoded hex colors (e.g. `#050713`, `#18C5FF`, `#2563FF`) rather than theme tokens — match the surrounding file.
- ESLint enforces `unused-imports/no-unused-imports` (error) and `no-unused-vars` (warn); prefix intentionally unused vars/args with `_`.
