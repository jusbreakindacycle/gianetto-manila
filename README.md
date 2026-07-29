# Gianetto Official Restaurant Website

## 1. Project Title

**Gianetto Official Restaurant Website** — repository `gianetto-manila`.

## 2. Current Project Status

This project has a **static public prototype (Version 0.2)** ready for local visual review.

```text
Phase 0 — Business and Content Verification
Status: IN_PROGRESS

Phase 1 — Project Documentation Foundation
Status: DONE

Phase 2 — Repository and Application Initialization
Status: DONE

Phase 3 — Design System and Wireframes
Status: DONE

Phase 4 — Static Public Website
Status: REVIEW (pending JL's local visual review)
```

The repository now contains a complete static public customer journey — homepage, menu, branches, events, reservation and private-event inquiry interfaces, and supporting pages — built on typed temporary data. No Supabase, database, or authentication exists yet, and no operational restaurant content has been owner-verified. See [docs/TASKS.md](docs/TASKS.md) Section 10 for the full per-task completion record.

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
- Custom Gianetto design system (color tokens, Manrope/Cormorant Garamond typography, layout, button, badge, header/footer components) implemented in Phase 3.
- A complete static public website (Phase 4 / Version 0.2), described in Section 5A below.
- shadcn/ui initialized using the Base UI primitive layer (`components.json`, `src/lib/utils.ts`).
- Full project documentation pack committed under `docs/`.
- No Supabase integration, authentication, database, or dynamic data fetching exists yet — all public content is typed temporary data under `src/data/`.

## 5A. Static Public Website (Version 0.2)

Public routes implemented:

```text
/                    Homepage (hero through reservation CTA)
/menu                Sample menu, category navigation
/branches            Branch listing
/branches/[slug]     Branch detail (parqal, capitol-commons)
/events              Sample events listing
/events/[slug]       Sample event detail
/reservations        Reservation inquiry (interface only)
/private-events      Private-event inquiry (interface only)
/our-story           Our Story placeholder
/gallery             Gallery (abstract placeholders)
/contact             Contact (pending-verification states)
/privacy             Privacy working draft
/terms               Website terms working draft
not-found / global-error
```

All branch, menu, event, and gallery content is typed temporary data
(`src/types/temporary-content.ts`, `src/data/`) marked `OBSERVED` or
`PROVISIONAL` — none of it is owner-verified, production-ready, or an
official business claim. The reservation and private-event forms are
interface-only: they transmit no data (no Server Action, route handler,
or network request) and show a demo-only status notice on submit. See
[docs/TASKS.md](docs/TASKS.md) Section 10 (TASK-043–TASK-074) for the
complete per-task implementation record, and [docs/CONTENT-INVENTORY.md](docs/CONTENT-INVENTORY.md)
for the content-verification vocabulary these statuses use.

## 6. Planned Public Features

The following remain planned and are **not yet implemented** (Phase 5+):

- Supabase-backed dynamic menu, branches, and events with branch-specific availability;
- real reservation and private-event inquiry submission and storage;
- gallery of approved, owner-cleared restaurant photography (replacing today's abstract placeholders);
- promotions display;
- owner-verified branch, menu, story, and contact content (replacing today's temporary data).

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

The homepage is served from [src/app/page.tsx](src/app/page.tsx). Visit `/` for the homepage, then use the header navigation (or the route list in Section 5A) to reach the rest of the static public site.

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
- No reservation or private-event submission exists — the forms are interface-only and transmit nothing.
- No dynamic menu or dynamic events exist; all public content is typed temporary data.
- No production deployment exists.
- Active branches, menu, hours, gallery photography, and other operational content remain unverified and pending Gianetto owner confirmation (see the Phase 0 tasks in [docs/TASKS.md](docs/TASKS.md)).
- Logo Recovery has not started; all wordmarks in the static prototype are plain provisional text, not a recovered or official logo.

## 17. Repository Ownership and Licence Status

No open-source licence has currently been granted for this repository. Production ownership arrangements are described in [docs/PROJECT.md](docs/PROJECT.md).
