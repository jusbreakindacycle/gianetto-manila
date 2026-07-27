# Gianetto Official Restaurant Website

## 1. Project Title

**Gianetto Official Restaurant Website** — repository `gianetto-manila`.

## 2. Current Project Status

This project is in **foundation and early implementation**.

```text
Phase 0 — Business and Content Verification
Status: IN_PROGRESS

Phase 1 — Project Documentation Foundation
Status: DONE

Phase 2 — Repository and Application Initialization
Status: IN_PROGRESS
```

The repository has been initialized, pushed to GitHub, and now contains a minimal Next.js foundation and the full project documentation pack. No restaurant features, database, or authentication have been implemented yet.

## 3. Project Overview

Gianetto is a Filipino-Italian restaurant. This repository will become the official website: a public customer-facing site plus a protected staff administration portal, built as a single server-first Next.js application connected to Supabase.

Operational restaurant content (branches, menu, hours, contact details, events) still requires verification and approval by Gianetto management before it can be published. See [docs/PROJECT.md](docs/PROJECT.md) for full project scope.

## 4. Approved Technology Stack

```text
Next.js App Router
TypeScript
Tailwind CSS
ESLint
shadcn/ui (initialized, Base UI primitive layer)
```

Approved but **not yet implemented**:

```text
Supabase PostgreSQL
Supabase Auth
Supabase Storage
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [docs/DECISIONS.md](docs/DECISIONS.md) for the full approved architecture and technology decisions.

## 5. Current Implementation

- Next.js App Router project initialized with TypeScript, Tailwind CSS, and ESLint.
- `src` directory layout with the `@/*` import alias configured.
- A temporary branded Gianetto landing page at `src/app/page.tsx`.
- shadcn/ui initialized using the Base UI primitive layer (`components.json`, `src/lib/utils.ts`). No shadcn components have been installed yet; the custom Gianetto design system (colors, typography) is still pending.
- Full project documentation pack committed under `docs/`.
- No Supabase integration, authentication, database, or restaurant features exist yet.

The current homepage is a temporary branded landing page, not the final Gianetto homepage. No operational restaurant content has been published, and no Supabase, database, authentication, or restaurant feature modules exist yet.

## 6. Planned Public Features

The following are planned for the public website and are **not yet implemented**:

- structured menu with categories and branch-specific availability;
- branch directory and branch detail pages;
- live music and events listing;
- reservation inquiry submission;
- private-event inquiry submission;
- gallery of approved restaurant photos;
- promotions display;
- our story, contact, privacy, and terms pages.

## 7. Planned Administration Features

The following are planned for the protected staff portal and are **not yet implemented**:

- staff authentication and role-based access;
- menu and branch management;
- live music and event management;
- reservation and private-event inquiry management;
- media, gallery, and promotion management;
- audit logging of administrative actions.

## 8. Repository Structure

```text
gianetto-manila/
├── docs/
├── src/
│   └── app/
├── public/
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs
```

`public/` currently exists but is empty; no brand assets or images have been added yet.

## 9. Local Development

```bash
npm install
npm run dev
```

The temporary landing page is served from [src/app/page.tsx](src/app/page.tsx).

## 10. Available npm Commands

```bash
npm run dev         # start the local development server
npm run build       # create a production build
npm run start       # run the production build locally
npm run lint        # run ESLint
npm run type-check  # run the TypeScript compiler in no-emit mode
```

## 11. Environment Configuration Status

`.env.example` documents the expected public Supabase environment-variable names (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`). No real environment values are committed to this repository, and Supabase has not yet been configured or connected.

When the development Supabase project is created and approved, developers will copy the variable names from `.env.example` into a local `.env.local` file and populate the real values there. `.env.local` remains excluded from version control by `.gitignore`.

No service-role key is required or present at the current stage.

## 12. Documentation Index

- [docs/PROJECT.md](docs/PROJECT.md) — project definition and scope
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — system architecture
- [docs/ROADMAP.md](docs/ROADMAP.md) — implementation roadmap
- [docs/DATA-MODEL.md](docs/DATA-MODEL.md) — conceptual data model
- [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) — design direction
- [docs/CONTENT-INVENTORY.md](docs/CONTENT-INVENTORY.md) — known and verified content
- [docs/SECURITY.md](docs/SECURITY.md) — security and privacy requirements
- [docs/AGENT-RULES.md](docs/AGENT-RULES.md) — AI agent operating rules
- [docs/TASKS.md](docs/TASKS.md) — task backlog and delivery tracker
- [docs/DECISIONS.md](docs/DECISIONS.md) — architecture and scope decision register
- [docs/OWNER-VERIFICATION-FORM.md](docs/OWNER-VERIFICATION-FORM.md) — owner content-verification form

## 13. Content-Verification Rule

All public-facing operational information — branches, addresses, hours, contact numbers, menu items, prices, reservation and private-event procedures, and live music schedules — must be verified and approved by Gianetto management before production publication. Unverified information may only be used as clearly marked temporary development content.

## 14. Security Rule

This repository must never contain live credentials, API keys, or secrets. Authentication, authorization, Row Level Security, and input validation requirements are defined in [docs/SECURITY.md](docs/SECURITY.md) and must not be weakened to complete a feature.

## 15. Media and Copyright Rule

Third-party screenshots, editorial photographs, social-media screenshots, customer images, and performer materials must not be treated as production media without confirmed ownership, licence, or permission. See [docs/PROJECT.md](docs/PROJECT.md) section 17 and [docs/SECURITY.md](docs/SECURITY.md) for the full media and copyright policy.

## 16. Current Limitations

- No Supabase integration, database tables, or staff authentication exist.
- No admin portal exists.
- No reservation or private-event submission exists.
- No dynamic menu or dynamic events exist.
- No production deployment exists.
- Active branches, menu, hours, and other operational content remain unverified.

## 17. Repository Ownership and Licence Status

No open-source licence has currently been granted for this repository. Production ownership arrangements are described in [docs/PROJECT.md](docs/PROJECT.md).
