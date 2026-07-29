# Gianetto Official Restaurant Website
## Task Backlog and Delivery Tracker

**Project:** Gianetto Official Restaurant Website  
**Development environment:** Cursor Free and free AI Agent Chats  
**Architecture:** Server-first modular monolith  
**Primary stack:** Next.js, TypeScript, Tailwind CSS, customized shadcn/ui, Supabase  
**Document status:** Active working backlog  
**Last updated:** July 2026  

---

# 1. Document Purpose

This document is the operational task tracker for the Gianetto project.

It records:

- implementation tasks;
- documentation tasks;
- business-verification tasks;
- dependencies;
- task statuses;
- allowed implementation scope;
- acceptance criteria;
- blockers;
- completion evidence;
- recommended Cursor execution order;
- future and deferred work.

This document should answer:

```text
What has been completed?
What is currently being worked on?
What is ready to begin?
What is blocked?
What should be done next?
What must not enter the MVP?
```

The roadmap defines the project phases.

This task file defines the actual executable work inside those phases.

---

# 2. Task Status Values

Every task must use one status.

```text
BACKLOG
READY
IN_PROGRESS
BLOCKED
REVIEW
DONE
DEFERRED
CANCELLED
```

## 2.1 BACKLOG

The task is approved but not yet ready to begin.

It may depend on:

- another incomplete task;
- missing business information;
- unfinished design work;
- unavailable technical access.

## 2.2 READY

The task has:

- sufficient requirements;
- completed dependencies;
- clear scope;
- acceptance criteria;
- no known blocker.

A `READY` task may be assigned to Cursor or completed manually.

## 2.3 IN_PROGRESS

Implementation or documentation work has started.

Only one major coding task should normally be `IN_PROGRESS` at a time.

## 2.4 BLOCKED

The task cannot proceed safely.

The blocker must be documented.

## 2.5 REVIEW

The implementation is complete but still requires:

- manual code review;
- visual review;
- client confirmation;
- security review;
- testing;
- approval.

## 2.6 DONE

The task has:

- met its acceptance criteria;
- passed required validation;
- been manually reviewed;
- been committed when applicable;
- updated relevant documentation.

## 2.7 DEFERRED

The task is intentionally postponed to a later version.

## 2.8 CANCELLED

The task is no longer part of the approved project.

A cancellation reason should be recorded.

---

# 3. Task Priority Values

Use one priority.

```text
CRITICAL
HIGH
MEDIUM
LOW
```

## CRITICAL

Required before safe implementation or launch.

## HIGH

Required for the approved MVP.

## MEDIUM

Important but may follow core MVP functionality.

## LOW

Useful enhancement with limited effect on core delivery.

---

# 4. Task Record Format

Every active task should include:

```text
Task ID
Title
Phase
Status
Priority
Dependencies
Objective
Allowed scope
Acceptance criteria
Validation
Blockers
Notes
Completion evidence
```

Example:

```md
## TASK-017 — Create Branch Card

**Phase:** Static Public Website  
**Status:** READY  
**Priority:** HIGH  
**Dependencies:** TASK-008, TASK-010, TASK-013  

### Objective

Create a reusable public branch card.

### Allowed Scope

- `src/components/public/branch-card.tsx`
- related test file

### Acceptance Criteria

- accepts typed branch data;
- works with or without a branch image;
- displays address, phone, hours summary, and actions;
- responsive on mobile and desktop;
- does not query Supabase directly;
- lint and type-check pass.
```

---

# 5. Current Project Status

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
Status: REVIEW (pending JL's local visual review of the demo)
```

Phase 4 note: every TASK-043–TASK-074 static-prototype implementation is
recorded DONE in Section 10 below. Phase 4 is held at REVIEW rather than
DONE because ROADMAP.md's demo-first review sequence (Section 55 of
AGENT-RULES.md, ADR-083) requires JL to review the assembled local demo
before the phase is considered fully closed. This does not reopen or
close any Phase 0 task — TASK-001 through TASK-011 remain BLOCKED/READY
as recorded in Section 6, and production content still requires owner
verification.

Phase 4 local-review correction (2026-07-29): during JL's local visual
review, the browser dev overlay surfaced runtime Base UI warnings
("A component that acts as a button expected a native `<button>`") on
navigation actions implemented as `<Button render={<Link .../>}>`. All
affected navigation actions across the header, mobile navigation, footer
composition, hero, homepage sections, branch/event cards, branch detail
template, contact, our-story, not-found, and the event-detail route were
corrected to plain Next.js `Link` styled with the exported `buttonVariants`
helper; `Button` no longer renders `Link` or an anchor anywhere. Mobile
navigation now controls the Sheet's open state directly and closes it from
each `Link`'s `onClick`, preserving link semantics instead of nesting
`Button`/`SheetClose` around navigation. Demo-only "a Gianetto
representative will follow up / will contact you" copy (reservation CTA,
private-events section, branch detail template, event-detail page,
reservations and private-events pages) was corrected to accurate demo-safe
wording, since no inquiry is actually sent. The stale `src/data/menu.ts`
comment claiming TASK-048/TASK-051 remain BLOCKED was reconciled: their
static-prototype work is complete through the Safe Temporary Option, and
production menu content remains dependent on TASK-005. Phase 4 remains
REVIEW pending the rest of JL's local visual review.

Completed foundation documents:

```text
01 — PROJECT.md
02 — ARCHITECTURE.md
03 — ROADMAP.md
04 — DATA-MODEL.md
05 — DESIGN-SYSTEM.md
06 — CONTENT-INVENTORY.md
07 — SECURITY.md
08 — AGENT-RULES.md
09 — TASKS.md
10 — DECISIONS.md
11 — OWNER-VERIFICATION-FORM.md
```

All eleven foundation documents are complete and committed to the repository under `docs/`.

---

# 6. Phase 0 — Business and Content Verification Tasks

## TASK-001 — Confirm Official Business Identity

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** None  
**Responsible party:** Gianetto owner or authorized representative  

### Objective

Confirm Gianetto’s official public and legal identity.

### Required Information

- public business name;
- legal or registered business name;
- approved tagline;
- preferred cuisine classification;
- approved short restaurant description;
- ownership of the current logo;
- available logo files.

### Acceptance Criteria

- official public name is written and approved;
- legal name is recorded where required;
- tagline status is confirmed;
- cuisine classification is confirmed;
- original logo file is obtained or formally requested;
- information is added to `CONTENT-INVENTORY.md`.

### Blocker

Owner confirmation has not yet been received.

---

## TASK-002 — Confirm Active Branches

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** None  
**Responsible party:** Gianetto owner or authorized representative  

### Objective

Identify every currently active Gianetto branch.

### Required Confirmation

- Parqal status;
- Capitol Commons status;
- Little Baguio status;
- any branch not shown in supplied materials;
- official branch names.

### Acceptance Criteria

- active branch list is approved;
- inactive or historical branches are recorded;
- branch names are standardized;
- production sitemap reflects only active branches.

---

## TASK-003 — Verify Parqal Branch Information

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-002  

### Objective

Verify all public operational details for the Parqal branch.

### Required Information

- full address;
- official unit and building format;
- mobile number;
- landline;
- operating hours;
- map URL;
- parking information;
- reservation process;
- private-event availability;
- live-music availability;
- approved branch photos.

### Acceptance Criteria

- owner-approved branch record exists;
- no conflicting phone or schedule remains unresolved;
- map link is tested;
- production-ready branch copy is available.

---

## TASK-004 — Verify Capitol Commons Branch Information

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-002  

### Objective

Verify all public operational details for the Capitol Commons branch.

### Acceptance Criteria

Same verification standard as TASK-003.

---

## TASK-005 — Obtain Current Menu Source

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** None  

### Objective

Obtain Gianetto’s current approved menu from the owner.

### Preferred Source Formats

```text
PDF
Spreadsheet
Editable document
POS export
High-resolution menu files
```

### Requirements

The source should identify:

- current categories;
- item names;
- descriptions;
- prices;
- variants or sizes;
- branch differences;
- unavailable items;
- featured dishes.

### Acceptance Criteria

- current menu source is received;
- source date is recorded;
- owner confirms that it is current;
- outdated screenshot menu is marked as reference-only;
- menu import planning may begin.

---

## TASK-006 — Verify Reservation Process

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-002  

### Objective

Confirm how reservation inquiries should work.

### Required Decisions

- whether website inquiries are accepted;
- required customer fields;
- same-day policy;
- maximum guest count;
- direct-call fallback;
- responsible branch recipient;
- response expectations;
- deposit requirements;
- cancellation handling.

### Acceptance Criteria

- form fields are approved;
- disclaimer is approved;
- notification recipient is identified;
- inquiry status model remains suitable;
- no automatic confirmation is implied.

---

## TASK-007 — Verify Private-Event Process

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** HIGH  
**Dependencies:** TASK-002  

### Objective

Confirm Gianetto’s private-event offerings and inquiry process.

### Required Decisions

- participating branches;
- accepted event types;
- guest-capacity information;
- packages;
- minimum spend or deposit;
- required inquiry fields;
- contact and follow-up process;
- approved event images.

### Acceptance Criteria

- public copy can be written accurately;
- form fields are approved;
- unverified capacities are excluded;
- package documents are obtained when available.

---

## TASK-008 — Verify Live Music and Event Process

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** HIGH  
**Dependencies:** TASK-002  

### Objective

Confirm how live music and events operate at Gianetto.

### Required Decisions

- participating branches;
- frequency;
- recurring or irregular schedule;
- performer approval;
- poster ownership;
- reservations;
- entrance fee;
- minimum spend;
- cancellation handling;
- content owner responsible for updates.

### Acceptance Criteria

- events feature remains valid;
- publication workflow is understood;
- actual event fields are approved;
- no fabricated recurring schedule is used.

---

## TASK-009 — Obtain Approved Brand Assets

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-001  

### Objective

Collect production-quality brand assets.

### Requested Files

```text
Primary logo SVG
Transparent PNG logo
White or reversed logo
Square icon or favicon
Official color references
Brand guidelines, if available
```

### Acceptance Criteria

- production logo is not extracted from a screenshot;
- file ownership is confirmed;
- approved variants are stored safely;
- development placeholders are identified separately.

---

## TASK-010 — Build Media Rights Register

**Phase:** Business and Content Verification  
**Status:** READY  
**Priority:** HIGH  
**Dependencies:** None  

### Objective

Create a register for all candidate visual assets.

### Suggested File

```text
docs/content/media-rights-register.md
```

### Required Fields

```text
Asset name
Source
Original owner
Current file location
Ownership status
Permission evidence
Allowed uses
Required credit
Approved for production
Notes
```

### Acceptance Criteria

- all supplied screenshot-based materials are classified;
- unrelated images are rejected;
- third-party editorial images are marked non-production;
- owner-provided originals can be added later.

---

## TASK-011 — Conduct Owner Story Interview

**Phase:** Business and Content Verification  
**Status:** BLOCKED  
**Priority:** MEDIUM  
**Dependencies:** TASK-001  

### Objective

Collect authentic material for the Our Story page.

### Interview Topics

- how Gianetto started;
- meaning of the name;
- cuisine influence;
- family or founder story;
- customer experience;
- branch development;
- future direction.

### Acceptance Criteria

- notes are recorded;
- unsupported claims are removed;
- original website copy can be drafted;
- owner approves the final story.

---

# 7. Phase 1 — Documentation Foundation Tasks

## TASK-012 — Create `PROJECT.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** None  

### Completion Evidence

- project purpose defined;
- public and admin scope defined;
- live music included;
- stack approved;
- out-of-scope items documented.

---

## TASK-013 — Create `ARCHITECTURE.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-012  

### Completion Evidence

- modular-monolith architecture defined;
- routes defined;
- Next.js and Supabase responsibilities separated;
- security layers included;
- live-events module included.

---

## TASK-014 — Create `ROADMAP.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-012, TASK-013  

### Completion Evidence

- implementation phases defined;
- completion gates included;
- Cursor sequence included;
- release boundaries defined.

---

## TASK-015 — Create `DATA-MODEL.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-013  

### Completion Evidence

- proposed tables documented;
- branch-specific menu settings defined;
- event structure defined;
- inquiry structures defined;
- media-rights fields defined;
- indexing guidance included.

---

## TASK-016 — Create `DESIGN-SYSTEM.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-012  

### Completion Evidence

- working palette defined;
- typography direction defined;
- responsive rules included;
- public and admin UI boundaries included;
- custom component inventory included.

---

## TASK-017 — Create `CONTENT-INVENTORY.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-012  

### Completion Evidence

- known content recorded;
- observed versus verified content separated;
- copyright restrictions documented;
- branch and menu gaps recorded;
- live-event gaps recorded.

---

## TASK-018 — Create `SECURITY.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-013, TASK-015  

### Completion Evidence

- authentication rules defined;
- role and branch access defined;
- RLS expectations documented;
- inquiry privacy included;
- upload security included;
- AI-agent security restrictions included.

---

## TASK-019 — Create `AGENT-RULES.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-012 to TASK-018  

### Completion Evidence

- plan-before-editing rule established;
- bounded task policy established;
- architecture and content restrictions included;
- validation and reporting format included.

---

## TASK-020 — Create `TASKS.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-014, TASK-019  

### Objective

Create the operational backlog and execution tracker.

### Acceptance Criteria

- all approved phases are represented;
- early Cursor tasks are sequenced;
- dependencies and statuses are visible;
- blocked business tasks are recorded;
- future features are separated from MVP.

### Completion Evidence

- `docs/TASKS.md` exists and is committed to the repository;
- all approved phases and early implementation tasks are represented.

---

## TASK-021 — Create `DECISIONS.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-012 to TASK-020  

### Objective

Create the formal architecture and scope decision register.

### Acceptance Criteria

- approved stack decisions are recorded;
- live music inclusion is recorded;
- reservation inquiry model is recorded;
- Supabase and shadcn decisions are recorded;
- deferred features are recorded;
- decision IDs are stable.

### Completion Evidence

- `docs/DECISIONS.md` exists and is committed to the repository;
- approved stack, scope, and deferred decisions are recorded with stable ADR IDs.

---

## TASK-022 — Create `OWNER-VERIFICATION-FORM.md`

**Phase:** Documentation Foundation  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-017  

### Objective

Create a form that the owner can answer without reading the entire project documentation.

### Acceptance Criteria

- questions use plain language;
- answers can be typed directly;
- uncertain items support “not sure”;
- branch, menu, reservation, events, photos, and ownership are covered;
- form avoids technical jargon;
- final approval section is included.

### Completion Evidence

- `docs/OWNER-VERIFICATION-FORM.md` exists and is committed to the repository.

---

# 8. Phase 2 — Repository Initialization Tasks

## TASK-023 — Select Local Project Directory

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-021, TASK-022  

### Objective

Choose the local Windows development path.

### Working Example

```text
C:\Projects\gianetto-manila
```

### Acceptance Criteria

- directory path is known;
- path is not inside a temporary or synchronized folder unless intended;
- available storage is sufficient;
- project name is standardized.

### Completion Evidence

- confirmed directory: `D:\ALL PROJECTS - 20260725\gianetto-manila`.

---

## TASK-024 — Confirm Development Prerequisites

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-023  

### Verify

```text
Node.js supported LTS version
npm or selected package manager
Git
VS Code or Cursor
Supabase account
GitHub account
```

### Acceptance Criteria

- version commands succeed;
- Cursor can open the project directory;
- Git identity is configured;
- no paid tool is required.

### Completion Evidence

- Node.js and npm were available;
- Git was available;
- Cursor or VS Code was available;
- a GitHub account was available;
- local development commands executed successfully during foundation setup.

Supabase account setup is not yet confirmed as configured for this project.

---

## TASK-025 — Initialize Next.js Application

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-024  

### Objective

Create the project foundation.

### Required Configuration

```text
Next.js App Router
TypeScript
Tailwind CSS
ESLint
src directory
approved import alias
```

### Allowed Scope

- repository root;
- Next.js generated files;
- `src/app`;
- `public`;
- configuration files.

### Do Not Include

- Supabase;
- authentication;
- database;
- admin portal;
- completed homepage;
- screenshots;
- restaurant claims.

### Acceptance Criteria

- local development server starts;
- lint passes;
- type-check passes;
- production build passes;
- generated page remains minimal.

### Completion Evidence

- Next.js App Router foundation created with TypeScript, Tailwind CSS, and ESLint enabled;
- `src` directory used with the `@/*` import alias configured;
- the application served successfully locally;
- a minimal, clearly provisional foundation page was created at `src/app/page.tsx`;
- no Supabase, authentication, shadcn/ui, database, or restaurant feature code was added.

---

## TASK-026 — Initialize Git Repository

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-025  

### Acceptance Criteria

- Git initialized;
- `.gitignore` reviewed;
- no secrets included;
- first clean commit created;
- default branch is confirmed.

### Completion Evidence

- Git initialized in the authoritative project root;
- `main` branch created;
- `.gitignore` reviewed and generated directories excluded;
- initial commit created: `837ea76 chore: initialize Gianetto project repository`;
- GitHub origin configured: `https://github.com/jusbreakindacycle/gianetto-manila.git`;
- `main` pushed successfully.

---

## TASK-027 — Add Foundation Documentation to Repository

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-025, TASK-020, TASK-021, TASK-022  

### Objective

Store the approved project documents under `docs/`.

### Acceptance Criteria

- filenames match the approved pack;
- markdown renders correctly;
- no confidential credentials are included;
- documents are committed.

### Completion Evidence

- all eleven approved Markdown documents are present under `docs/`;
- documentation was included in the initial commit;
- no credentials were added to the documentation pack.

---

## TASK-027R — Reconcile Repository Initialization Status

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-020 through TASK-027  

### Objective

Reconcile the repository README and task tracker with the actual completed initialization state.

### Allowed Scope

- `README.md`
- `docs/TASKS.md`

### Acceptance Criteria

- initialization task statuses match the repository;
- README describes the actual Gianetto project;
- no application source is modified;
- Git validation passes.

### Completion Evidence

- `README.md` replaced with a Gianetto-specific repository README reflecting the actual foundation state;
- `docs/TASKS.md` current-status section and TASK-020 through TASK-027 updated to `DONE` with completion evidence recorded;
- no files outside `README.md` and `docs/TASKS.md` were modified;
- lint, `tsc --noEmit`, and `git diff --check` passed before commit.

---

## TASK-028 — Add `.env.example`

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-025  

### Required Placeholder Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Service-role placeholder should be added only when later required.

### Acceptance Criteria

- `.env.example` is committed;
- `.env.local` is ignored;
- no live key appears.

### Completion Evidence

- `.env.example` created with the approved empty public Supabase placeholders;
- `.gitignore` updated to permit `.env.example` while continuing to ignore real environment files;
- `.env.local` remained ignored;
- no live credentials or service-role placeholder were added;
- lint, type-check, build, and Git hygiene checks passed;
- commit and push completed.

---

## TASK-029 — Add Type-Check Script

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-025  

### Expected Script

Conceptually:

```text
tsc --noEmit
```

### Acceptance Criteria

- `npm run type-check` succeeds;
- script uses installed tooling only;
- no package added unnecessarily.

### Completion Evidence

- `"type-check": "tsc --noEmit"` added to `package.json` using already-installed TypeScript tooling;
- `README.md` command list updated to include `npm run type-check`;
- no packages installed and no lockfile changes;
- lint, `npm run type-check`, and production build all passed before commit.

---

## TASK-030 — Initialize shadcn/ui

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-025  

### Objective

Initialize shadcn/ui using the approved primitive configuration.

### Requirements

- Tailwind integration remains functional;
- project aliases are correct;
- `components.json` is reviewed;
- no complete component catalog is installed.

### Acceptance Criteria

- one test component can render;
- design tokens remain customizable;
- no generic dashboard layout is added.

### Note on CLI Configuration Drift

The installed CLI (`shadcn@4.15.0`+) no longer supports the classic `style: new-york` / `baseColor: stone` flags assumed when this task was written. The old style concept has been replaced by named built-in presets (`nova, vega, maia, lyra, mira, luma, sera, rhea`), none of which use a `stone` base color; reaching `stone` requires the web-based Custom preset builder at ui.shadcn.com, which was ruled out for this task. The developer approved substituting the closest built-in preset instead.

### Completion Evidence

- shadcn/ui initialized via `npx shadcn@latest init -b base -p rhea --css-variables --no-rtl`;
- Base UI selected (`"base": "base"` in `components.json`);
- current CLI preset system used in place of the legacy style/base-color flow; **Rhea** selected as the closest built-in preset (`style: "base-rhea"`, `iconLibrary: "lucide"`, matching the approved Base UI and Lucide requirements);
- **final Gianetto Stone-based color tokens remain pending TASK-034** — Rhea's default `baseColor: "neutral"` is a placeholder only;
- CSS variables enabled (`cssVariables: true`);
- `components.json` and `src/lib/utils.ts` (`cn` helper) created;
- approved aliases confirmed: `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`;
- Tailwind v4 config path left blank; CSS file points to `src/app/globals.css`;
- no shadcn UI components installed (`src/components/ui` does not exist);
- the CLI's automatic font-wiring step modified `src/app/layout.tsx` (adding an Inter font import); this was reverted to preserve the original file per this task's scope, since layout.tsx changes are out of scope until TASK-035;
- dependencies added: `@base-ui/react`, `class-variance-authority`, `clsx`, `lucide-react`, `shadcn`, `tailwind-merge`, `tw-animate-css`;
- lint, `npm run type-check`, and production build all passed before commit;
- `git diff --check` passed; only approved files changed.

---

## TASK-030A — Establish Demo-First Product and Owner Review Governance

**Phase:** Documentation Governance  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-020, TASK-021, TASK-022, TASK-030

### Objective

Document the approved Gianetto governance model: JL controls normal product, design, UX, information-architecture, implementation, and technical decisions during development; the Gianetto owner or authorized representative is not required to review every screen, component, layout, color, or implementation choice; a coherent working demo is built first; the owner then reviews the demo, confirms business facts and commitments, identifies required changes, and provides one consolidated feedback set; the project then completes one coordinated refinement pass before final production approval.

### Allowed Scope

- `docs/AGENT-RULES.md`
- `docs/DECISIONS.md`
- `docs/OWNER-VERIFICATION-FORM.md`
- `docs/TASKS.md`

### Acceptance Criteria

- `AGENT-RULES.md` records a named Product, Design, and Owner Review Authority section stating agents must not block routine development by requesting owner approval for every visual or product choice, listing the escalation boundary (factual business information, operational commitments, legal or privacy obligations, media rights, account ownership, security, production publication), and recording the eight-step demo-first review sequence;
- `DECISIONS.md` records ADR-083 (Use Demo-First Owner Review with JL as Product and Design Authority, Status ACCEPTED, Priority FOUNDATIONAL, Date 2026-07-28) without renumbering or altering any existing ADR identifier;
- `OWNER-VERIFICATION-FORM.md` Section 19 is renamed to Demo Review and Consolidated Refinement and no longer asks the owner to pre-approve the visual direction before seeing the working website; it instead asks whether anything is factually incorrect, whether the site promises anything Gianetto cannot operationally honor, what visible changes are strongly requested, which changes are essential versus optional, and whether final business facts, commitments, rights, and production content are approved, while retaining one optional general visual-preferences field;
- final production approval by the Gianetto owner remains required and is not weakened;
- JL is not established as the legal or operational owner of Gianetto;
- no application source, package, or architecture file is modified.

### Completion Evidence

- `docs/AGENT-RULES.md` — added Section 55, "Product, Design, and Owner Review Authority," covering JL's development-time authority, the narrow escalation boundary, and the eight-step demo-first review sequence;
- `docs/DECISIONS.md` — added ADR-083 in a new Section 21, "Governance and Product-Review Decisions," placed immediately before the Pending Decisions Register; existing sections 21–24 were renumbered to 22–25 to keep document structure correct, and no existing ADR identifier was changed or renumbered;
- `docs/OWNER-VERIFICATION-FORM.md` — reworked Section 19 into "Demo Review and Consolidated Refinement," replacing pre-build visual-direction approval with post-demo factual, commitment, and change-request review, and retaining one optional general visual-preferences field;
- `docs/TASKS.md` — added this task record between TASK-030 and TASK-031;
- no application source, package, or configuration files were modified;
- `git diff --check` passed with no whitespace errors.

---

## TASK-031 — Add Initial shadcn Components

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-030  

### Initial Approved Components

```text
Button
Sheet
Dialog
Input
Textarea
Label
```

Add form-specific components only when the first form requires them.

### Acceptance Criteria

- only required components are installed;
- components compile;
- accessibility behavior is preserved;
- no unnecessary packages are added.

### Completion Evidence

- installed via `npx shadcn@latest add button sheet dialog input textarea label --yes`, previewed first with `--dry-run` and `--view`;
- six component files created: `src/components/ui/button.tsx`, `src/components/ui/sheet.tsx`, `src/components/ui/dialog.tsx`, `src/components/ui/input.tsx`, `src/components/ui/textarea.tsx`, `src/components/ui/label.tsx`;
- Base UI primitive layer preserved (`@base-ui/react/button`, `@base-ui/react/dialog`, `@base-ui/react/input`) and Rhea preset styling preserved (`style: "base-rhea"` unchanged in `components.json`); no `@radix-ui` or React Aria dependency introduced;
- Input, Textarea, and Label wrap native `<input>`, `<textarea>`, and `<label>` elements, preserving accessible native behavior;
- all generated files resolve imports through the approved `@/components/ui` and `@/lib/utils` aliases;
- no components were customized with Gianetto-specific colors, typography, spacing, or radii; default Rhea preset styling is unchanged, deferred to TASK-034/TASK-037;
- no application page imports or renders these components yet (`src/app/page.tsx` and `src/app/layout.tsx` untouched);
- dependency changes: none — `@base-ui/react`, `lucide-react`, `class-variance-authority`, `clsx`, and `tailwind-merge` were already installed under TASK-030; `package.json` and `package-lock.json` were not modified;
- `components.json` and `src/app/globals.css` were not modified;
- validation performed: `npx shadcn@latest info` (confirmed `base: base`, `style: base-rhea`, `iconLibrary: lucide`, all six components listed as installed), `npm run lint` (passed), `npm run type-check` (passed), `npm run build` (passed, static export of `/` and `/_not-found`), `git diff --check` (clean), `git status --short` (only the six new files under `src/components/ui/`, plus this documentation update).

---

## TASK-032 — Create Minimal Directory Foundation

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-025  

### Initial Directories

```text
src/components/
src/lib/
src/types/
docs/
public/brand/
public/placeholders/
```

### Rule

Do not create empty future feature trees.

### Acceptance Criteria

- structure is minimal;
- no empty architecture theatre;
- directories correspond to immediate tasks.

### Completion Evidence

- `src/app` already exists as the Next.js App Router foundation;
- `src/components/ui` exists and contains the approved shadcn components;
- `src/lib` exists and contains shared utilities (`cn` helper in `src/lib/utils.ts`);
- `docs` exists and contains the controlling project documentation;
- `public` exists as the public static-assets root;
- empty future directories were deliberately not created;
- `src/types`, `public/brand`, and `public/placeholders` do not yet exist and will be introduced only when their first real type definition, approved brand asset, or approved placeholder asset is required, per the project rule against premature architecture;
- no application or package files were changed.

---

## TASK-033 — Add Base Metadata

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-025  

### Objective

Add clearly provisional project metadata.

### Working Title

```text
Gianetto Official Website — Development
```

### Acceptance Criteria

- no unsupported business claim;
- favicon remains provisional unless approved;
- production canonical URL is not invented.

### Completion Evidence

- temporary Gianetto title (`Gianetto | Official Website`) and description were added to `src/app/layout.tsx`;
- no canonical domain or unsupported metadata was added.

---

## TASK-033A — Replace Technical Placeholder with Temporary Branded Landing Page

**Phase:** Repository Initialization  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-025, TASK-027R, TASK-033  

### Objective

Replace the technical development placeholder with a temporary branded Gianetto landing page while the complete public website remains under development.

### Allowed Scope

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `README.md`
- `docs/TASKS.md`

### Acceptance Criteria

- technical placeholder removed;
- temporary approved content displayed;
- responsive warm restaurant presentation;
- page remains a Server Component;
- no unverified operational content;
- no external media or packages;
- lint, type-check, and build pass.

### Completion Evidence

- `src/app/page.tsx` replaced with the approved temporary landing-page content and structure, kept as a Server Component with no client-side hooks or APIs;
- `src/app/layout.tsx` metadata updated to the approved temporary title and description;
- `src/app/globals.css` extended with a clearly labeled temporary, page-scoped style block (no changes to shared root tokens);
- no packages, environment files, or media assets were added;
- `README.md` and `docs/TASKS.md` updated to reflect the new landing page;
- lint, `tsc --noEmit`, and production build passed before commit.

---

# 9. Phase 3 — Design Foundation Tasks

## TASK-034 — Implement Color Tokens

**Phase:** Design System  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-025, TASK-030  

### Objective

Implement the approved working palette.

### Allowed Scope

- global CSS;
- necessary Tailwind configuration;
- design token documentation update when needed.

### Acceptance Criteria

- tokens use approved working colors;
- no arbitrary component-level hex values;
- contrast is reviewed;
- temporary status is documented.

### Completion Evidence

- `src/app/globals.css` is the single centralized location for all color
  values; the full approved palette is defined once, under `:root`, as
  `--gianetto-*` custom properties, and every other rule in the file
  references those variables instead of raw hex.

**Palette implemented** (`--gianetto-*` custom properties under `:root`):

```text
Primary
  --gianetto-red            #9E1B1B
  --gianetto-red-dark       #751313
  --gianetto-red-soft       #F4E5E2
  --gianetto-warm-ivory     #FFF9F1
  --gianetto-cream          #F5EBDD
  --gianetto-charcoal       #25211F
  --gianetto-warm-gray      #6F6762
  --gianetto-soft-border    #DED3C8
  --gianetto-white          #FFFFFF

Supporting
  --gianetto-olive          #66704A
  --gianetto-olive-soft     #E8EBDC
  --gianetto-brick          #A9523E
  --gianetto-gold           #B88A44
  --gianetto-dark-surface   #1E1A18

Semantic
  --gianetto-success        #2F6B45
  --gianetto-warning        #9A6516
  --gianetto-error          #B42318
  --gianetto-information    #315A75
  --gianetto-cancelled      #7A2E2E

Additional documented semantic values
  --gianetto-muted-surface     #F2EBE4
  --gianetto-accent-foreground #354028
```

**Shadcn semantic mappings** (`:root`, all reference `--gianetto-*`, no new
raw hex introduced):

```text
--background            --gianetto-warm-ivory
--foreground             --gianetto-charcoal
--card                   --gianetto-white
--card-foreground        --gianetto-charcoal
--popover                --gianetto-white
--popover-foreground     --gianetto-charcoal
--primary                --gianetto-red
--primary-foreground     --gianetto-white
--secondary              --gianetto-cream
--secondary-foreground   --gianetto-charcoal
--muted                  --gianetto-muted-surface
--muted-foreground       --gianetto-warm-gray
--accent                 --gianetto-olive-soft
--accent-foreground      --gianetto-accent-foreground
--destructive            --gianetto-error
--destructive-foreground --gianetto-white
--border                 --gianetto-soft-border
--input                  --gianetto-soft-border
--ring                   --gianetto-red
```

- additional existing shadcn/Rhea semantic variables required by the
  installed components (`--chart-1..5`, `--sidebar`,
  `--sidebar-foreground`, `--sidebar-primary`,
  `--sidebar-primary-foreground`, `--sidebar-accent`,
  `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`)
  were preserved and remapped only to colors from the approved palette
  (e.g. `--chart-1` → red, `--chart-2` → olive, `--chart-3` → gold,
  `--chart-4` → brick, `--chart-5` → information); no arbitrary new color
  was introduced;
- `--radius` and the derived `--radius-sm` … `--radius-4xl` scale in the
  `@theme inline` block were left unchanged;
- `@import "tailwindcss"`, `@import "tw-animate-css"`,
  `@import "shadcn/tailwind.css"`, and the `@custom-variant dark` line
  were preserved unchanged.

**Tailwind v4 token exposure:** the existing `@theme inline` block was
extended (no new Tailwind config file was created) with
`--color-gianetto-*` entries mapping to each `--gianetto-*` variable, so
future components can use token-based utility classes such as
`bg-gianetto-red` or `text-gianetto-charcoal` in addition to the existing
shadcn semantic classes (`bg-primary`, `text-muted-foreground`, etc.).

**Palette status:** the palette remains provisional until Gianetto
provides an official logo file or an approved brand guide; this is stated
in a comment directly above the `--gianetto-*` token block in
`globals.css`.

**Temporary landing-page styles:** the `TASK-033A` `.landing-*` rules in
`globals.css` were audited; every hardcoded hex literal that matched an
approved palette color was replaced with the corresponding `--gianetto-*`
variable. No layout, spacing, typography, content, responsive behavior, or
component structure was changed.

**Dark mode:** an unused shadcn-generated `.dark { ... }` full-theme
override block existed in `globals.css`. `src` was searched for a theme
provider, a `.dark` class application, or any `next-themes`/similar
usage; none exists — the only other `dark`-related references are the
inert Tailwind `dark:` utility variants already present in the six
installed `src/components/ui` component files, which have no effect
because `.dark` is never applied anywhere in application code. Per ADR-020
(no full dark mode in the MVP), the unused `.dark` override block was
removed. The `@custom-variant dark (&:is(.dark *));` declaration was
retained unchanged, since the installed shadcn/Rhea components already
reference `dark:` utility classes and removing the variant declaration
would break the Tailwind build. `--gianetto-dark-surface` was retained in
the palette for future intentional dark sections (footer, live-event
sections), per `DESIGN-SYSTEM.md` Section 6.2 and `DECISIONS.md` ADR-020.
No new dark theme was built.

**Contrast review** (WCAG relative-luminance contrast ratios computed with
a temporary, uncommitted Node command; AA normal text requires ≥4.5:1, AA
large text ≥3:1):

```text
White on Gianetto Red                 8.00  — pass (button text)
White on Gianetto Red Dark            11.30 — pass (hover state)
Charcoal on Warm Ivory                15.25 — pass (body text)
Warm Gray on Warm Ivory               5.29  — pass (secondary text)
Charcoal on Cream                     13.53 — pass
Accent Foreground on Olive Soft       9.06  — pass
Warm Ivory on Dark Surface            16.50 — pass
White on Dark Surface                 17.27 — pass
White on Success/Warning/Error/
  Information/Cancelled               4.94–7.37 — pass (button/badge text)
Success/Error/Information/Cancelled
  text directly on Warm Ivory         6.06–8.89 — pass
Warning text directly on Warm Ivory   4.73  — pass, but narrow margin
Gold on White                         3.11  — FAILS normal text (4.5:1);
                                                only marginal for large text
Gold on Warm Ivory                    2.97  — fails even large-text (3:1)
Olive on Olive Soft                   4.36  — FAILS normal text (4.5:1);
                                                only acceptable for large
                                                or decorative text
Olive on Warm Ivory                   5.04  — pass
```

Findings recorded per the task's required minimum checks: White on
Gianetto Red, Charcoal on Warm Ivory, Warm Gray on Warm Ivory, Charcoal on
Cream, Accent Foreground on Olive Soft, and Warm Ivory/White on Dark
Surface are all suitable for normal text; semantic
foreground/background pairs remain readable. Gold must not be used as
normal text on white or Warm Ivory (fails AA); Olive on Olive Soft must
not be assumed safe as small/normal text (fails AA) and should be
reserved for large text, icons, or decorative use. Status/semantic
meaning must continue to rely on icons or text labels, not color alone,
per `DESIGN-SYSTEM.md` Section 6.3 — no component logic was added in this
task that would violate that rule.

**Files changed:**

```text
src/app/globals.css
docs/TASKS.md
```

**Validation performed:** `npm run lint` (passed), `npm run type-check`
(passed), `npm run build` (passed — static export of `/` and
`/_not-found`), `git diff --check` (no whitespace errors), `git status
--short` (only `src/app/globals.css` and this documentation change).
`components.json`, `package.json`, `package-lock.json`, `src/app/page.tsx`,
`src/app/layout.tsx`, and all six files in `src/components/ui` were
inspected but not modified.

---

## TASK-035 — Configure Typography

**Phase:** Design System  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-034  

### Working Fonts

```text
Cormorant Garamond
Manrope
```

### Acceptance Criteria

- fonts load through the approved Next.js method;
- display and body roles are defined;
- no script-font replacement of the logo;
- fallback fonts are configured;
- layout shift is minimized.

### Completion Evidence

**Font loading (`src/app/layout.tsx`):** the previous `Geist`/`Geist_Mono`
imports from `next/font/google` were replaced with `Manrope` and
`Cormorant_Garamond` from the same built-in loader. Both are configured
with:

```text
subsets: ["latin"]
display: "swap"
adjustFontFallback: true
```

Neither font specifies a `weight`, so `next/font` loads each font's
variable-width axis (both fonts list `"variable"` in their available
weights) instead of a fixed static weight — this is the "variable-font
loading" and "automatic fallback adjustment" the task required, and both
are Next.js defaults/capabilities of the installed version (Next.js
16.2.10, Tailwind CSS 4.3.3). Generated CSS custom properties:

```text
--font-manrope
--font-cormorant-garamond
```

Both variables are applied to the root `<html>` element alongside the
preserved `lang="en"`, `h-full`, and `antialiased` attributes; `body`
still carries `min-h-full`. `Metadata` and the body/document structure
are otherwise unchanged.

**Geist removal:** the `Geist` and `Geist_Mono` imports, both font
instances, and the `--font-geist-mono` reference in `globals.css` were
removed completely; no code still depends on them. The Tailwind
`font-mono` role now resolves to a system monospace stack instead of a
web font, since no admin or public UI currently requires a loaded
monospace typeface.

**Tailwind v4 font-family mappings (`src/app/globals.css`, `@theme
inline`):** the previous recursive `--font-sans: var(--font-sans)` and
`--font-heading: var(--font-sans)` mappings were replaced with:

```text
--font-sans     → var(--font-manrope), ui-sans-serif, system-ui,
                  -apple-system, "Segoe UI", Arial, sans-serif
--font-body     → same Manrope stack as --font-sans
--font-heading  → var(--font-cormorant-garamond), Georgia,
                  "Times New Roman", serif
--font-display  → same Cormorant Garamond stack as --font-heading
--font-serif    → same Cormorant Garamond stack as --font-heading
--font-mono     → ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                  "Liberation Mono", "Courier New", monospace
```

Fallback stacks are centralized in this block only (not duplicated in
`next/font` config). No circular custom-property reference remains. This
exposes the Tailwind utilities `font-sans`, `font-body`, `font-heading`,
`font-display`, `font-serif`, and `font-mono`. The existing
`html { @apply font-sans; }` rule in the `@layer base` block already
makes Manrope the inherited application font; it was not changed, and no
rule applies `font-heading`/`font-display` to heading elements globally,
so Cormorant Garamond remains an explicit, component-level choice per
`DESIGN-SYSTEM.md` Section 9.3.

**Semantic typography scale (`@theme inline`, valid Tailwind v4 `--text-*`
tokens, paired with `--text-*--line-height`):** added the roles from
`DESIGN-SYSTEM.md` Section 10 — `display-hero`, `page-title`,
`section-title`, `card-title`, `subheading`, `body-large`, `body`,
`small`, and `label` — each with a `-desktop` companion token where the
scale has separate mobile/desktop sizes (all except `body` and `small`,
which are single-value per the documented scale). This exposes utilities
such as `text-display-hero`, `text-section-title-desktop`, and
`text-label`, usable as e.g. `text-section-title
md:text-section-title-desktop`. Line heights follow the documented
tiers: tight (1.15) for `display-hero`/`page-title`/`section-title`;
moderately tight (1.35) for `card-title`/`subheading`; readable (1.6) for
`body-large`/`body`/`small`; compact-but-accessible (1.4) for `label`. No
letter-spacing or forced uppercase was added, and no existing Tailwind
default type utility was removed.

**Temporary landing page (`src/app/globals.css`, `.landing-heading`):**
the hardcoded `font-family: Georgia, "Times New Roman", serif;` was
replaced with `font-family: var(--font-heading);`, so the landing
heading now resolves to Cormorant Garamond with the same serif fallback
chain. No other `.landing-*` rule declares a `font-family`, so all other
landing-page text already inherits Manrope through the base-layer
`font-sans` rule. Font size (`clamp(2.5rem, 8vw, 4rem)`), line-height,
color, spacing, layout, and all other `.landing-*` rules were left
unchanged, since the existing clamp value is not an exact match for any
semantic token and replacing it was not required to be safe.

**Logo:** no cursive or brush-script font was introduced, Cormorant
Garamond was not used to approximate the Gianetto wordmark, no logo asset
was created or modified, and Logo Recovery was not started. Typography
remains distinct from the logo per `DESIGN-SYSTEM.md` Section 9.3.

**Files changed:**

```text
src/app/layout.tsx
src/app/globals.css
docs/TASKS.md
```

**Validation performed:** `npm run lint` (passed), `npm run type-check`
(passed), `npm run build` (passed — Turbopack production build, static
export of `/` and `/_not-found`, fonts resolved and self-hosted through
`next/font` at build time), `git diff --check` (no whitespace errors),
`git status --short` (only `src/app/globals.css` and `src/app/layout.tsx`
plus this documentation change). Searched for remaining `Geist`/
`--font-geist-*` references (none), remaining direct `font-family:`
declarations in `globals.css` (only the corrected `.landing-heading`
rule, now token-based), and `fonts.googleapis.com`/`fonts.gstatic.com`
references in `src` (none — `next/font` self-hosts both fonts, so no
external runtime font request was introduced). `package.json`,
`package-lock.json`, `components.json`, `src/app/page.tsx`, and all
`src/components/ui` files were inspected but not modified.

---

## TASK-036 — Create Page Container

**Phase:** Design System  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-034  

### Objective

Create a reusable responsive content container.

### Acceptance Criteria

- approved maximum width;
- mobile padding;
- desktop padding;
- typed props;
- no unnecessary Client Component.

### Completion Evidence

- `src/components/layout/page-container.tsx` created as a Server Component
  (no `"use client"`); exports `PageContainer` and the `PageContainerProps` /
  `PageContainerSize` types;
- typed API: `size?: "standard" | "wide" | "reading" | "form"` (default
  `"standard"`), plus standard `ComponentProps<"div">` (`className`,
  `children`, and all native `div` attributes);
- approved widths implemented via a `PAGE_CONTAINER_SIZE_CLASSES` lookup
  matching `DESIGN-SYSTEM.md` Section 12.1 exactly: `standard` → `max-w-6xl`
  (72rem), `wide` → `max-w-[90rem]` (90rem — no built-in Tailwind class at
  this width, so an arbitrary value was used since it exactly matches an
  approved token rather than an invented one), `reading` → `max-w-3xl`
  (48rem), `form` → `max-w-2xl` (42rem);
- shared layout classes applied unconditionally: `mx-auto w-full px-4
  sm:px-6 lg:px-8`;
- `className` is merged after the base/size classes via `cn` (`clsx` +
  `tailwind-merge`), so a caller can extend or intentionally override one
  utility (e.g. supply their own `px-*`) without silently dropping the rest
  of the required container behavior;
- no context provider, hook, or polymorphic `as`/`render` prop was added —
  the component is a single typed `div` wrapper only.

---

## TASK-037 — Customize Button Variants

**Phase:** Design System  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-031, TASK-034  

### Required Variants

```text
primary
secondary
outline
ghost
destructive
```

### Acceptance Criteria

- accessible focus state;
- 44-pixel touch target where applicable;
- disabled state;
- Gianetto visual identity;
- shared primitive behavior preserved.

### Completion Evidence

**Files modified:** `src/components/ui/button.tsx`, `src/components/ui/sheet.tsx`.

**Variants** (`buttonVariants`, `cva`, unchanged `@base-ui/react/button`
primitive and Base UI render composition preserved):

- `primary` (default rendered appearance — `defaultVariants.variant` changed
  from `"default"` to `"primary"`): `bg-primary text-primary-foreground`
  (Gianetto red / white) with `hover:bg-gianetto-red-dark` and
  `active:bg-gianetto-red-dark` for a visibly darker-red hover/active state;
- `secondary`: `bg-secondary text-secondary-foreground` (cream surface,
  charcoal text) plus an added `border border-border` (soft warm border,
  previously missing) and a restrained
  `hover:bg-gianetto-soft-border/50` / `active:bg-gianetto-soft-border/70`;
- `outline`: `border border-gianetto-red/50 bg-transparent
  text-gianetto-red`, with `hover:border-gianetto-red
  hover:bg-gianetto-red-soft` for a clear hover state — chosen as a
  red-accented bordered variant so it stays visually distinct from
  `secondary` (cream/charcoal) and `ghost` (borderless);
- `ghost`: unchanged transparent base with `hover:bg-muted
  hover:text-foreground` (warm-neutral hover only), suited to navigation
  links and low-emphasis actions;
- `destructive`: unchanged token-driven tinted style
  (`bg-destructive/10 text-destructive`, `hover:bg-destructive/20`, added
  `active:bg-destructive/30`) — stays visually distinct from the solid
  `primary` button;
- every class references only `--gianetto-*`/semantic Tailwind theme
  tokens already exposed in `globals.css` (`bg-primary`, `bg-secondary`,
  `border-border`, `bg-muted`, `bg-destructive`, `bg-gianetto-red-dark`,
  `border-gianetto-red`, `bg-gianetto-red-soft`,
  `bg-gianetto-soft-border`); no hex literal was added.

**Sizes** (44-pixel touch target, `DESIGN-SYSTEM.md` Section 23.5 /
Section 42): every normal (non-icon) size — `default`, `xs`, `sm`, `lg` —
now uses `h-11` (44px); visual hierarchy between sizes comes from
padding, gap, and text size only, not height. The default icon size
(`icon`) was bumped from `size-8` (32px) to `size-11` (44px); `icon-lg`
was bumped from `size-9` to `size-12` (48px) to remain the tier above the
default icon size.

**Compatibility decision — `icon-xs` / `icon-sm` retained below 44px:**
`icon-xs` (24px) and `icon-sm` (28px) were left unchanged. Repository-wide
search (`grep -rn 'size="icon-sm"' src`) showed `icon-sm` is used only by
the pre-existing, out-of-scope `src/components/ui/dialog.tsx` close
button; changing its meaning would have silently altered Dialog's
close-button size without Dialog being part of this task's allowed file
scope. Instead, per the task instruction to "adjust the Sheet close-button
size reference," `sheet.tsx`'s close button was moved from `size="icon-sm"`
to `size="icon"` (now 44px) with the absolute position tightened from
`top-4 right-4` to `top-3 right-3` to keep it visually balanced at the
larger size. Dialog's close button is untouched and remains at its
existing (pre-task) 28px size, which is unchanged pre-existing behavior,
not a regression introduced by this task.

**Compatibility decision — removed `default` and `link` variants:**
`variant="default"` was renamed to `variant="primary"` per the required
public API (`defaultVariants.variant` updated to `"primary"` so the
default rendered appearance is still primary). The unused `link` variant
was removed. Repository-wide search
(`grep -rn 'variant=' src --include=*.tsx` and a direct search for
`variant="default"` / `variant="link"`) confirmed neither `default` nor
`link` was referenced anywhere outside `button.tsx` itself before this
change, and the only other `variant=` usages in the repository
(`dialog.tsx`: `ghost`, `outline`) continue to resolve correctly, so
removal does not break any generated UI primitive.

**Preserved:** disabled styling (`disabled:pointer-events-none
disabled:opacity-50`), `aria-invalid` ring/border styling, keyboard focus
ring (`focus-visible:border-ring focus-visible:ring-3
focus-visible:ring-ring/30`), the Base UI `render` composition API, icon
sizing behavior (`[&_svg:not([class*='size-'])]:size-4` etc.), and the
exported `buttonVariants` function (still exported alongside `Button`).

No page-specific button variant was added.

---

## TASK-038 — Create Section Heading Component

**Phase:** Design System  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-035, TASK-036  

### Acceptance Criteria

- optional eyebrow;
- main heading;
- supporting text;
- optional action;
- mobile and desktop alignment;
- semantic heading level is configurable.

### Completion Evidence

- `src/components/layout/section-heading.tsx` created as a Server
  Component (no `"use client"` — an interactive `action` child does not
  force the wrapping heading into a Client Component);
- typed API: `eyebrow?: ReactNode`, `title: ReactNode`,
  `description?: ReactNode`, `action?: ReactNode`,
  `headingLevel?: "h1" | "h2" | "h3" | "h4"` (default `"h2"`),
  `align?: "left" | "center"` (default `"left"`), `className?: string`;
  exports `SectionHeading`, `SectionHeadingProps`, `SectionHeadingLevel`,
  `SectionHeadingAlign`;
- heading hierarchy is controlled entirely by the typed `headingLevel`
  prop, assigned to a `const Heading = headingLevel` and rendered as
  `<Heading>`; because the prop type is a closed 4-value union checked at
  compile time (not a raw/untrusted string), this does not "generate
  heading levels dynamically from untrusted strings" — it selects one of
  four explicitly permitted tags;
- title uses `font-heading` (Cormorant Garamond) with the
  `text-section-title` / `md:text-section-title-desktop` semantic
  typography tokens from TASK-035; description uses the readable
  `text-body-large` body token with `text-muted-foreground`; the optional
  eyebrow uses the compact `text-label` token with `tracking-[0.14em]
  uppercase text-gianetto-red` for restrained emphasis (matching the
  existing `.landing-eyebrow` treatment);
- layout is `flex flex-col` (mobile stacking) by default, switching to
  `sm:flex-row sm:items-end sm:justify-between` so the optional action
  aligns to the right of the heading block on wider viewports; when
  `align="center"`, the layout stays a centered column
  (`sm:flex-col sm:items-center`) instead of moving the action beside the
  heading;
- `eyebrow`, `description`, and `action` render only when supplied
  (conditional `&&`), so missing optional content produces no empty
  wrapper elements; `title` uses `max-w-prose`-free flexible text so long
  titles wrap normally inside the flex layout.

---

## TASK-039 — Create Responsive Public Header

**Phase:** Design System  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-035, TASK-037  

### Requirements

- approved navigation;
- provisional logo support;
- reservation action;
- desktop layout;
- mobile menu trigger;
- keyboard navigation.

### Acceptance Criteria

- responsive;
- accessible;
- no unsupported branch claim;
- no oversized client boundary.

### Completion Evidence

(See combined TASK-039/TASK-040 implementation notes below TASK-040 —
`src/components/layout/site-header.tsx` and
`src/lib/public-navigation.ts`.)

- `src/components/layout/site-header.tsx` created as a Server Component
  (no `"use client"`) exporting `SiteHeader`;
- uses semantic `<header>`, `PageContainer` (default `standard` size),
  `next/link` `Link` for the wordmark and desktop nav, the shared
  navigation data from `src/lib/public-navigation.ts`, `Button` for the
  reservation action, and imports `MobileNavigation` as the only Client
  Component in the tree;
- desktop (`lg:` and above): text wordmark, full inline navigation
  (`PUBLIC_NAVIGATION_ITEMS`), and a primary `Button` reservation action
  rendered via Button's `render` composition API
  (`<Button render={<Link href="/reservations" />}>`), so the final DOM
  is a single `<a>` styled as a button — not a button nested in a link;
- below `lg:`: wordmark, a compact `size="sm"` reservation button shown
  from `sm:` upward and hidden below it (`hidden sm:inline-flex`) so it
  never crowds the smallest phone widths, and the `MobileNavigation`
  trigger;
- the wordmark is plain text ("Gianetto") in `font-heading`, colored
  `text-gianetto-red`, links to `/`, and has a code comment stating it is
  a provisional text wordmark, not the recovered or official logo;
- `usePathname` / active-link styling was not added; the header does not
  use any client hook; transparent-over-hero and sticky behavior were not
  implemented (explicitly deferred per task scope);
- all interactive text uses `focus-visible:ring-3 focus-visible:ring-ring/30`
  for a visible keyboard-focus state; no interaction depends on hover
  alone.

---

## TASK-040 — Create Mobile Navigation

**Phase:** Design System  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-031, TASK-039  

### Acceptance Criteria

- uses accessible Sheet;
- traps and restores focus correctly;
- closes on navigation;
- supports keyboard operation;
- includes reservation action.

### Completion Evidence

**Files created:** `src/components/layout/mobile-navigation.tsx`,
`src/lib/public-navigation.ts`.

- `mobile-navigation.tsx` is the only new Client Component
  (`"use client"`), exporting `MobileNavigation`; it composes the existing
  `Sheet` / `SheetTrigger` / `SheetContent` / `SheetHeader` / `SheetTitle` /
  `SheetClose` / `SheetFooter` from `src/components/ui/sheet.tsx`
  unmodified in structure — no Base UI Dialog focus-trap or portal logic
  was replaced;
- trigger: `<SheetTrigger render={<Button variant="ghost" size="icon" />}>`
  with a visible `MenuIcon` (`aria-hidden`) and an `sr-only` "Open menu"
  label — 44×44px after the TASK-037 `icon` size change;
- panel: `SheetTitle` renders the visible text "Gianetto" as the menu
  title; all six `PUBLIC_NAVIGATION_ITEMS` render as `<SheetClose
  render={<Link href={item.href} .../>}>` — the Base UI `Close` primitive
  clones its merged (close-on-activate) props onto the given `Link`
  element, so each nav row is a single rendered `<a>`, not a link nested
  inside another interactive control;
- the reservation action is `<SheetClose render={<Button className="w-full"
  render={<Link href="/reservations" />} />}>`, chaining Base UI's render
  composition twice (`Close` → `Button` → `Link`) so Sheet-close behavior,
  Button's visual styling, and Link navigation all resolve to one final
  `<a>` element — verified against
  `node_modules/@base-ui/react/internals/useRenderElement.js`, which
  recursively clones/merges props through nested `render` elements rather
  than wrapping them, so no nested interactive DOM elements are produced;
- accessible close control: `SheetContent`'s existing default close button
  (`showCloseButton`, unchanged) is reused, now 44×44px per the TASK-037
  Sheet size change;
- focus trap, focus return to the trigger on close, and Escape-to-close
  are provided by the underlying unmodified Base UI `Dialog` primitive
  used by `Sheet` — behavior relied upon, not reimplemented;
- no external links, fabricated branch information, social links, theme
  switcher, or authentication controls were added.

**`src/lib/public-navigation.ts`** — single shared, immutable navigation
source (`readonly` array/object types with `as const`) used by
`SiteHeader`, `MobileNavigation`, and `SiteFooter`:

```text
PUBLIC_NAVIGATION_ITEMS: Menu (/menu), Branches (/branches),
  Events (/events), Private Events (/private-events),
  Our Story (/our-story), Contact (/contact)
RESERVATION_NAVIGATION_ITEM: Reserve a Table (/reservations)
```

No branch-specific shortcuts, phone numbers, addresses, hours, or social
links were added, per task instruction.

---

## TASK-041 — Create Public Footer

**Phase:** Design System  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-035, TASK-036  

### Requirements

- provisional official-site statement;
- branch placeholders marked provisional;
- navigation;
- social links only when confirmed;
- privacy and terms links.

### Acceptance Criteria

- works without verified branch data;
- no invented contact information;
- responsive;
- accessible links.

### Completion Evidence

- `src/components/layout/site-footer.tsx` created as a Server Component
  (no `"use client"`) exporting `SiteFooter`;
- uses semantic `<footer>`, `PageContainer`, the shared
  `PUBLIC_NAVIGATION_ITEMS` / `RESERVATION_NAVIGATION_ITEM` from
  `src/lib/public-navigation.ts` (not duplicated), `next/link` `Link`, and
  the approved dark surface token (`bg-gianetto-dark-surface`) with
  `text-gianetto-warm-ivory` / `text-gianetto-white` foregrounds — the
  same pairing reviewed at 16.50–17.27 contrast in TASK-034;
- includes: provisional text wordmark ("Gianetto", same non-logo
  treatment as the header), the full public navigation plus the
  reservation link, `Privacy` → `/privacy`, `Website Terms` → `/terms`,
  the current copyright year via `new Date().getFullYear()` (safe in a
  Server Component; not a client-only API), and two provisional notices;
- **content decision — deviates from `DESIGN-SYSTEM.md` Section 22's
  illustrative footer copy on purpose:** Section 22 lists "approved
  Gianetto logo," "branch addresses," "branch phone numbers," "operating
  hours," and "social links" as example footer content, and its sample
  official-site statement asserts verified branch/contact information is
  already published. None of that is owner-verified yet
  (`docs/CONTENT-INVENTORY.md`, TASK-001 through TASK-009 remain
  `BLOCKED`), so per `AGENT-RULES.md` Section 4 (an explicit task
  instruction and `DECISIONS.md` outrank `DESIGN-SYSTEM.md` illustrative
  copy) and Section 17 (agents must not invent branch hours/contact
  information), the footer instead uses exactly the two provisional
  statements specified in this task's instructions:
  - "This website is being prepared as Gianetto's official online home.
    Verified branch and contact information will be published before
    launch."
  - "Branch information is pending final owner verification."
  No branch names, addresses, phone numbers, hours, parking claims,
  reservation guarantees, social links, or logo image were added;
- responsive: single column on mobile, wordmark/notices beside navigation
  on `sm:` and above; all links carry visible
  `focus-visible:ring-3 focus-visible:ring-ring/40` focus states; no
  footer item is forced into a card or pill.

---

## TASK-042 — Create Shared Status Badge

**Phase:** Design System  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-034  

### Use Cases

- upcoming;
- cancelled;
- draft;
- published;
- unavailable;
- confirmed.

### Acceptance Criteria

- status is not communicated by color alone;
- public and admin variants remain consistent;
- typed allowed values.

### Completion Evidence

- `src/components/shared/status-badge.tsx` created as a Server Component
  (no `"use client"`); exports `StatusBadge` and the `StatusBadgeStatus`
  type;
- `StatusBadgeStatus` is a closed 6-value union
  (`"upcoming" | "cancelled" | "draft" | "published" | "unavailable" |
  "confirmed"`); `StatusBadgeProps` extends
  `Omit<ComponentProps<"span">, "children">` plus a required `status`
  field, so callers get full standard `span` props (including
  `className`, merged via `cn`) but cannot pass arbitrary string statuses
  or override the rendered label with custom `children`;
- one shared implementation is intended for both public and future admin
  contexts (no separate public/admin variant);
- visible human-readable label per status (`STATUS_BADGE_LABELS`):
  `upcoming` → "Upcoming", `cancelled` → "Cancelled", `draft` → "Draft",
  `published` → "Published", `unavailable` → "Temporarily unavailable",
  `confirmed` → "Confirmed" — the label is the badge's only content, so
  status is always communicated through visible text, never color alone;
- each status pairs its label with a tinted `--gianetto-*`/semantic token
  background and matching foreground (`STATUS_BADGE_STYLES`), e.g.
  `unavailable` → `bg-gianetto-warning/10 text-gianetto-warning`,
  `cancelled` → `bg-gianetto-cancelled/10 text-gianetto-cancelled`,
  `draft` → `bg-muted text-muted-foreground`; no new hex color was
  introduced;
- restrained pill shape (`rounded-full`), compact spacing
  (`px-2.5 py-1`), and compact label typography (`text-label
  font-semibold`); no icon was added (none was judged to add meaning
  beyond the text label, per the task's "only when it adds meaning"
  condition);
- no new Badge package or shadcn component was added; no status outside
  the six required values was introduced.

---

## TASK-036–042 — Batch Validation and Integration Note

**Validation performed once, after all seven components:** `npm run lint`
(passed, no warnings), `npm run type-check` (`tsc --noEmit`, passed),
`npm run build` (Turbopack production build, passed — static export of `/`
and `/_not-found` unchanged), `git diff --check` (no whitespace errors),
`git status --short` (only the allowed files changed: `button.tsx` and
`sheet.tsx` modified; `src/components/layout/`, `src/components/shared/`,
and `src/lib/public-navigation.ts` added).

**Additional inspection:** every `"use client"` file under `src/components`
was listed — only `mobile-navigation.tsx` (new) plus the pre-existing
`dialog.tsx`, `label.tsx`, and `sheet.tsx` require client execution;
repository-wide `Button` `variant=` usage and `Sheet` usage were reviewed
(see TASK-037/TASK-040 notes above); no hex color literal was found in any
created or modified component file; `package.json` and `package-lock.json`
show no diff (no dependency changed); `src/app/page.tsx` and
`src/app/layout.tsx` show no diff.

**Integration status:** none of the seven components are imported or
rendered by `src/app/page.tsx`, `src/app/layout.tsx`, or any route file.
The temporary branded landing page from TASK-033A is unchanged. Wiring
`SiteHeader` / `SiteFooter` into the root layout and assembling full pages
is explicitly deferred to Phase 4 (TASK-046, TASK-051, TASK-065, and
related page-assembly tasks) and was not started in this batch.

---

# 10. Phase 4 — Static Public Website Tasks

## TASK-043 — Create Temporary Content Types

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-015, TASK-017  

### Objective

Create types for temporary branch, menu, event, and gallery data.

### Required Metadata

```text
verificationStatus
ownershipStatus where relevant
```

### Acceptance Criteria

- temporary data cannot be mistaken for database types;
- no `any`;
- optional fields reflect real uncertainty.

### Completion Evidence

- **Files:** `src/types/temporary-content.ts`.
- **Component type:** n/a (type definitions only).
- **Data/verification:** defines the `TemporaryContent*VerificationStatus`/`OwnershipStatus` unions plus `TemporaryBranch`, `TemporaryMenuCategory`, `TemporaryMenuItem`, `TemporaryEvent`, `TemporaryGalleryItem` — all names prefixed `Temporary` so they cannot be mistaken for generated Supabase types. No `any` used; optional/nullable fields (e.g. `addressLine`, `price`, `endTime`) represent real unresolved facts.
- **Validation:** `npm run type-check` and `npm run build` pass (see Section 5 final validation).

---

## TASK-044 — Create Temporary Branch Data

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-043  

### Requirements

- Parqal and Capitol Commons may be included as `OBSERVED`;
- Little Baguio must remain historical or excluded;
- missing values remain null or provisional;
- no invented map links or hours.

### Completion Evidence

- **Files:** `src/data/branches.ts`.
- **Component type:** n/a (plain data module, no Supabase).
- **Data/verification:** Parqal and Capitol Commons included with `verificationStatus: "OBSERVED"` per ADR-026; `addressLine`, `contactPhone`, `mapUrl`, and `operatingHoursSummary` are all `null` (nothing invented). Little Baguio is omitted entirely from active data per ADR-027 and CONTENT-INVENTORY.md Section 7.3.
- **Validation:** `npm run type-check` and `npm run build` pass; `getActiveBranchSlugs()` confirmed to drive `generateStaticParams` for exactly `parqal` and `capitol-commons`.
- **Production dependency:** replacing OBSERVED data with owner-VERIFIED branch facts remains blocked on TASK-002/TASK-003 (Phase 0).

---

## TASK-045 — Create Branch Card

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-036, TASK-037, TASK-044  

### Acceptance Criteria

- server-rendered;
- typed props;
- supports missing image;
- supports missing landline;
- address and action layout;
- no Supabase query;
- mobile and desktop tested.

### Completion Evidence

- **Files:** `src/components/public/branch-card.tsx`.
- **Component type:** Server Component (no `"use client"`, no interactivity beyond plain links/buttons).
- **Data/verification:** accepts a typed `TemporaryBranch` prop; renders `PlaceholderVisual` when no image exists, omits phone/map actions entirely rather than showing dead links, and never computes "Open now".
- **Responsive/accessibility:** single-column card that reflows in the 1/2-column grids used on `/branches` and the homepage; both actions are real `<Link>`-backed buttons at the 44px touch-target size.
- **Validation:** `npm run type-check`, `npm run lint`, and `npm run build` pass.

---

## TASK-046 — Create Branch Listing Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-039, TASK-041, TASK-045  

### Acceptance Criteria

- page title and provisional introduction;
- active working branches displayed;
- historical branch not shown as active;
- responsive layout;
- metadata marked provisional.

### Completion Evidence

- **Files:** `src/app/branches/page.tsx`.
- **Component type:** Server Component; `SiteHeader`/`SiteFooter` supplied by the root layout, not duplicated.
- **Data/verification:** renders `getActiveBranches()` (Parqal, Capitol Commons only) via `BranchCard`; page copy states branch details are pending owner verification.
- **Responsive/accessibility:** 1-column mobile / 2-column desktop grid via `PageContainer`; single `h1` via `SectionHeading`.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass; `/branches` confirmed in the static route list.

---

## TASK-047 — Create Branch Detail Template

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-045  

### Required Sections

```text
Branch overview
Address and contact
Hours
Directions
Featured dishes
Upcoming events
Gallery
Private events
Reservation CTA
```

### Acceptance Criteria

- missing sections have safe placeholder state;
- no false “Open now” calculation;
- branch template is reusable.

### Completion Evidence

- **Files:** `src/components/public/branch-detail-template.tsx`, `src/app/branches/[slug]/page.tsx`.
- **Component type:** Server Components throughout; `generateStaticParams` built from `getActiveBranchSlugs()`, async `params` (Next.js 16 `Promise<{ slug }>` convention) resolved via `await params`, `notFound()` called for any other slug.
- **Data/verification:** all nine required sections present (overview, address, contact, hours, directions, featured dishes, upcoming events, gallery, private events, reservation CTA); featured dishes/events are derived from `src/data/menu.ts` / `src/data/events.ts` filtered by branch slug, not duplicated; every missing fact renders "Pending owner verification" text instead of a fake value or dead link; "Open now" is never computed.
- **Responsive/accessibility:** single reading-width column, real heading hierarchy (`h1` branch name, `h2` per section).
- **Validation:** production build confirms `/branches/parqal` and `/branches/capitol-commons` prerender via SSG; unknown slugs verified to hit `notFound()`.

---

## TASK-048 — Create Temporary Menu Data

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-005, TASK-043  

### Blocker

Current menu source has not been provided.

### Safe Temporary Option

Use neutral sample entries that do not mimic confirmed current menu content.

### Completion Evidence

- **Files:** `src/data/menu.ts`.
- **Component type:** n/a (plain data module, no Supabase).
- **Data/verification:** implements the Safe Temporary Option — six neutral "Sample ..." categories and ten neutral "Sample ..." items, every `price: null`, every `verificationStatus: "PROVISIONAL"`; descriptions are generic and explicitly demonstrative, not copied from any supplied menu material.
- **Validation:** `npm run type-check` and `npm run build` pass.
- **Production dependency:** static-prototype implementation is complete; replacing this with Gianetto's actual current menu remains blocked on **TASK-005** (Phase 0 — current menu not yet supplied). This task is recorded DONE for the Phase 4 static-prototype deliverable only; it does not close TASK-005.

---

## TASK-049 — Create Menu Item Card

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-034, TASK-035, TASK-043  

### Acceptance Criteria

- works with and without image;
- supports optional description;
- supports optional price;
- supports availability labels;
- supports branch information;
- text-forward design;
- no database query.

### Completion Evidence

- **Files:** `src/components/public/menu-item-card.tsx`.
- **Component type:** Server Component.
- **Data/verification:** typed `TemporaryMenuItem` prop; optional `showVisual` renders `PlaceholderVisual` only when explicitly requested (menu page omits it, featured-dishes section enables it), so the card demonstrably works with and without an image; price renders "Price to be confirmed" whenever `price` is `null` (always, in Phase 4 data) rather than inventing a number; `StatusBadge status="unavailable"` used only when `availabilityLabel === "Temporarily unavailable"`.
- **Responsive/accessibility:** text-forward flex layout, no image dependency for readability.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-050 — Create Menu Category Navigation

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-043  

### Acceptance Criteria

- keyboard accessible;
- mobile-friendly;
- handles many categories;
- does not use an overcrowded tab bar;
- uses approved tokens.

### Completion Evidence

- **Files:** `src/components/public/menu-category-nav.tsx`.
- **Component type:** Server Component — plain `<nav>`/`<a href="#slug">` anchor navigation, not a client-side tab widget, so it needs no `"use client"`.
- **Data/verification:** links to each category's stable `id` (the category `slug`) on the menu page; scales to any category count via horizontal scroll on mobile and wrapping on larger screens instead of an overcrowded tab bar.
- **Responsive/accessibility:** real focusable links with visible focus rings; horizontally scrollable on narrow viewports, `flex-wrap` from `sm:` up.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-051 — Create Static Menu Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-048, TASK-049, TASK-050  

### Blocker

Current menu or approved sample menu is needed.

### Completion Evidence

- **Files:** `src/app/menu/page.tsx`.
- **Component type:** Server Component.
- **Data/verification:** built on the approved sample menu from TASK-048 (`src/data/menu.ts`); page prominently states the entries are design samples, "not Gianetto's confirmed current menu"; no PDF/screenshot menu; per-category empty state ("No menu items are currently available in this category.") implemented even though every current sample category has items.
- **Responsive/accessibility:** `MenuCategoryNav` + anchor-sectioned categories, 1-column mobile / 2-column desktop item grid, `scroll-mt-24` so anchor jumps clear the sticky header.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass; `/menu` confirmed in the static route list.
- **Production dependency:** static-prototype implementation is complete; replacing the sample menu with Gianetto's actual current menu remains blocked on **TASK-005** (Phase 0).

---

## TASK-052 — Create Temporary Event Data

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-043  

### Requirements

- use clearly fictional sample events;
- `verificationStatus = PROVISIONAL`;
- do not use real performer names without confirmation;
- include draft, upcoming, and cancelled UI examples.

### Completion Evidence

- **Files:** `src/data/events.ts`.
- **Component type:** n/a (plain data module, no Supabase).
- **Data/verification:** four records, all `verificationStatus: "PROVISIONAL"`, titles containing "Sample"/"Demo"; covers DRAFT ("Sample Draft Event Night"), two UPCOMING, and one CANCELLED; performer name is fictional ("Sample Performer") and never a real person; every public accessor (`getPublicEvents`, `getUpcomingEvents`, `getEventBySlug`, `getPublicEventSlugs`) filters out `DRAFT` before returning, so the draft record is unreachable from any page.
- **Validation:** `npm run type-check` and `npm run build` pass; production build confirmed only the three non-draft slugs are prerendered under `/events/[slug]`.

---

## TASK-053 — Create Event Card

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-037, TASK-042, TASK-052  

### Acceptance Criteria

- branch, date, time, and status visible;
- performer optional;
- end time optional;
- cancelled state;
- poster optional;
- key schedule details rendered as HTML.

### Completion Evidence

- **Files:** `src/components/public/event-card.tsx`.
- **Component type:** Server Component.
- **Data/verification:** typed `TemporaryEvent` prop plus a `branchName` string resolved by the caller (no branch lookup duplicated inside the card); title, branch, date/time, and `StatusBadge` are always rendered as HTML text — never embedded only inside the `PlaceholderVisual` "poster"; performer and end time render conditionally when present; cancelled events get reduced emphasis plus their `cancellationNote`.
- **Responsive/accessibility:** all schedule facts are real text nodes, satisfying "no critical text embedded only inside an image".
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-054 — Create Events Listing Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-053  

### Acceptance Criteria

- upcoming event list;
- branch context;
- no-events state;
- cancellation handling;
- provisional content notice during development.

### Completion Evidence

- **Files:** `src/app/events/page.tsx`.
- **Component type:** Server Component.
- **Data/verification:** renders `getPublicEvents()` (drafts already excluded at the data layer) via `EventCard`, resolving branch name per event through `getBranchBySlug`; page copy states the listing is fictional and not a confirmed schedule; empty state implemented ("No upcoming live music dates are posted yet...") for when the filtered list is empty.
- **Responsive/accessibility:** 1/2/3-column responsive grid.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass; `/events` confirmed in the static route list.

---

## TASK-055 — Create Event Detail Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-053  

### Acceptance Criteria

- event title;
- branch;
- date and time;
- performer;
- description;
- poster;
- reservation guidance;
- cancellation notice;
- not-found behavior.

### Completion Evidence

- **Files:** `src/app/events/[slug]/page.tsx`.
- **Component type:** Server Component; `generateStaticParams` from `getPublicEventSlugs()`, async `params` (`Promise<{ slug }>`) awaited, `notFound()` for any slug `getEventBySlug` does not resolve (which includes the draft slug, since it is filtered out of that lookup too).
- **Data/verification:** renders title, branch, formatted date/time (via `formatSampleEventDate`/`formatSampleEventTime`, no `Date`/timezone conversion), optional performer, description, a poster `PlaceholderVisual`, and cancellation notice when `status === "CANCELLED"`; explicitly states the sample event "is not a confirmed date" and cannot be booked through the demo.
- **Validation:** production build confirms all three non-draft event slugs prerender via SSG.

---

## TASK-056 — Create Homepage Hero

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-034 to TASK-041  

### Requirements

- provisional headline;
- menu action;
- reservation action;
- branch action;
- safe placeholder visual.

### Acceptance Criteria

- communicates restaurant purpose;
- no false official claim;
- no third-party image;
- mobile-first;
- suitable without final photography.

### Completion Evidence

- **Files:** `src/components/home/hero.tsx`.
- **Component type:** Server Component.
- **Data/verification:** provisional headline/description copy, explicitly labelled "Working Preview"; decorative background is CSS-only radial gradients built from existing `--gianetto-*` tokens (no image file); Menu, Reserve a Table, and Branches actions all present as real links.
- **Responsive/accessibility:** mobile-first stacked layout; `h1` here is the page's sole top-level heading.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-057 — Create Restaurant Introduction Section

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-038  

### Acceptance Criteria

- provisional copy clearly identified in source;
- layout works with short or long copy;
- no invented founder story.

### Completion Evidence

- **Files:** `src/components/home/restaurant-introduction.tsx`.
- **Component type:** Server Component.
- **Data/verification:** original provisional-positioning copy only; explicitly states "the official Gianetto story will be finalized with the owner" — no founder, family, or history claim; uses `SectionHeading`, whose `description` prop already handles short or long copy without layout breakage.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-058 — Create Featured Dishes Section

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-005, TASK-049  

### Blocker

Featured dishes and current menu are not confirmed.

### Safe Temporary Option

Use neutral sample dishes in development only.

### Completion Evidence

- **Files:** `src/components/home/featured-dishes.tsx`.
- **Component type:** Server Component.
- **Data/verification:** calls `getFeaturedMenuItems(4)` from the same `src/data/menu.ts` used by `/menu` — no duplicated dish array; renders each via `MenuItemCard` with `showVisual`; section copy states these are "design placeholders, not Gianetto's confirmed current dishes"; no price is shown (all sample prices are `null`).
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.
- **Production dependency:** static-prototype implementation is complete; a real featured-dishes selection remains blocked on **TASK-005** (current menu, Phase 0), same as TASK-048/051.

---

## TASK-059 — Create Homepage Branch Section

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-045  

### Acceptance Criteria

- uses branch card;
- no duplicated branch logic;
- responsive;
- clear branch-selection action.

### Completion Evidence

- **Files:** `src/components/home/branch-section.tsx`.
- **Component type:** Server Component.
- **Data/verification:** calls `getActiveBranches()` and renders `BranchCard` directly — no branch-rendering logic duplicated from `/branches`; includes a "View all branches" action linking to `/branches`.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-060 — Create Homepage Upcoming Events Section

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-053  

### Acceptance Criteria

- displays limited featured events;
- supports no-events state;
- supports cancelled status;
- links to `/events`.

### Completion Evidence

- **Files:** `src/components/home/upcoming-events-section.tsx`.
- **Component type:** Server Component.
- **Data/verification:** renders `getPublicEvents().slice(0, 3)` (drafts already excluded at the data layer) via `EventCard`; because the slice is chronological rather than upcoming-only, the cancelled sample event is demonstrated in-place with its cancelled treatment rather than hidden; empty-state text implemented for when the slice is empty; "View all events" links to `/events`.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-061 — Create Dining Experience Section

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-038  

### Acceptance Criteria

- works with placeholder imagery;
- no unsupported live-music frequency claim;
- authentic imagery requirement documented.

### Completion Evidence

- **Files:** `src/components/home/dining-experience.tsx`.
- **Component type:** Server Component.
- **Data/verification:** uses `PlaceholderVisual` (abstract CSS only); copy explicitly states "no live-music frequency or schedule is promised yet" and that authentic photography "will replace the placeholder shown here once approved by the owner".
- **Responsive/accessibility:** dark-surface section styled directly (not via `SectionHeading`, whose default text tokens are tuned for light backgrounds) so text contrast stays correct against `--gianetto-dark-surface`.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-062 — Create Private Events Section

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-038, TASK-037  

### Acceptance Criteria

- no unverified package or capacity;
- links to inquiry page;
- uses provisional copy;
- supports approved image later.

### Completion Evidence

- **Files:** `src/components/home/private-events-section.tsx`.
- **Component type:** Server Component.
- **Data/verification:** copy explicitly states packages, capacities, and pricing "are not yet confirmed"; links to `/private-events`; `PlaceholderVisual` used in place of a real private-event photo, swappable later without a layout change.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-063 — Create Gallery Preview

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-010  

### Blocker

No production-cleared gallery images are available.

### Safe Temporary Option

Use local abstract placeholders with no restaurant claim.

### Completion Evidence

- **Files:** `src/components/home/gallery-preview.tsx`, `src/components/public/gallery-grid.tsx`, `src/data/gallery.ts`.
- **Component type:** Server Components.
- **Data/verification:** `getGalleryPreviewItems(6)` from the central `src/data/gallery.ts`, every record `ownershipStatus: "AI_GENERATED_PLACEHOLDER"` / `verificationStatus: "PROVISIONAL"`; rendered through the shared `GalleryGrid` using `PlaceholderVisual` (CSS gradient, no image file); no caption claims to show Gianetto.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.
- **Production dependency:** static-prototype implementation is complete; replacing placeholders with owner-cleared photography remains blocked on **TASK-010** (Phase 0 — no production-cleared gallery images yet).

---

## TASK-064 — Create Reservation CTA

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-037  

### Acceptance Criteria

- inquiry language;
- branch options may remain provisional;
- no automatic confirmation claim.

### Completion Evidence

- **Files:** `src/components/home/reservation-cta.tsx`.
- **Component type:** Server Component.
- **Data/verification:** copy uses inquiry language only ("Send a reservation inquiry... Submitting this form does not automatically confirm a table"); links to `/reservations`.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-065 — Assemble Static Homepage

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-056 to TASK-064  

### Acceptance Criteria

- all homepage sections follow approved order;
- responsive;
- no duplicate data;
- no third-party content;
- lint and build pass.

### Completion Evidence

- **Files:** `src/app/page.tsx` (replaces the temporary landing page), `src/app/globals.css` (removes the now-unused `.landing-*` block).
- **Component type:** Server Component composing nine Server Component sections.
- **Data/verification:** sections assembled in the approved order (Hero → Restaurant Introduction → Featured Dishes → Branch Selection → Upcoming Events → Dining Experience → Private Events → Gallery Preview → Reservation CTA); one `h1` (in `Hero`), all other section headings `h2`; every section reads from `src/data/*` with no duplicated arrays; no third-party content anywhere.
- **Responsive/accessibility:** mobile-first throughout; consistent vertical rhythm via `PageContainer`/section padding; no arbitrary hex colors added.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` all pass — confirmed via the full Section 5 final validation run.

---

## TASK-066 — Create Reservation Form Interface

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-006, TASK-037  

### Blocker

Required reservation fields and business rules need owner approval.

### Development Option

Build a provisional form only after fields are clearly marked subject to confirmation.

### Completion Evidence

- **Files:** `src/app/reservations/page.tsx` (Server), `src/components/forms/reservation-form.tsx` (Client), `src/components/forms/form-status-message.tsx`, `src/components/forms/field-mark.tsx`.
- **Component type:** the page is a Server Component (fetches `getActiveBranches()`, passes as a prop); only the interactive form itself is a small Client Component, per the "smallest possible demo form interaction component" rule — no page-level `"use client"`.
- **Data/verification:** conservative provisional field set only (name, email, mobile, preferred branch, date, time, party size, notes, privacy acknowledgement); no Zod, no React Hook Form, no Server Action, no route handler, no network request; `onSubmit` calls `preventDefault()` and reveals `FormStatusMessage` reading "This is a website-demo form. No inquiry was sent."; no fake success/confirmation state is ever shown.
- **Responsive/accessibility:** every control has a real `<Label htmlFor>`, native HTML validation (`required`, `type="email"/"tel"/"date"/"time"/"number"`) instead of custom JS validation, 44px-height controls, visible focus rings, required/optional clearly marked (not color-only).
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.
- **Production dependency:** static-prototype implementation is complete; final reservation fields and business rules remain blocked on **TASK-006** (Phase 0 — owner approval of reservation rules).

---

## TASK-067 — Create Private-Event Form Interface

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-007, TASK-037  

### Blocker

Required inquiry details need owner confirmation.

### Completion Evidence

- **Files:** `src/app/private-events/page.tsx` (Server), `src/components/forms/private-event-form.tsx` (Client).
- **Component type:** same Server-page/Client-form split as TASK-066.
- **Data/verification:** conservative provisional field set (name, email, mobile, organization (optional), event type, preferred branch, date, time, estimated guest count, notes, privacy acknowledgement); event-type options are an explicitly labelled provisional working set ("subject to Gianetto's confirmation"); no guest limits, deposit rules, or capacities encoded anywhere; same demo-only submit behavior and status messaging as the reservation form.
- **Responsive/accessibility:** same native-control accessibility approach as TASK-066.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.
- **Production dependency:** static-prototype implementation is complete; final private-event fields and policies remain blocked on **TASK-007** (Phase 0 — owner approval of private-event rules).

---

## TASK-068 — Create Our Story Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-011  

### Blocker

No verified restaurant story.

### Completion Evidence

- **Files:** `src/app/our-story/page.tsx`.
- **Component type:** Server Component.
- **Data/verification:** complete page structure with provisional positioning copy only; explicitly states the official story "will be finalized with the owner" — no founding date, founder, family history, award, or timeline is asserted; links to `/menu` and `/branches`.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.
- **Production dependency:** static-prototype implementation is complete; the verified official story remains blocked on **TASK-011** (Phase 0).

---

## TASK-069 — Create Gallery Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-010, TASK-063  

### Completion Evidence

- **Files:** `src/app/gallery/page.tsx`, `src/components/public/gallery-grid.tsx` (shared with the homepage preview from TASK-063).
- **Component type:** Server Component.
- **Data/verification:** renders all of `getGalleryItems()` through `GalleryGrid`; controlled CSS grid (normal row flow, not masonry/`dense`) so mixed aspect ratios keep a predictable reading order; page copy states the tiles "are not photographs of Gianetto"; empty-state copy implemented for when the data set is empty.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass; `/gallery` confirmed in the static route list.
- **Production dependency:** static-prototype implementation is complete; real gallery photography remains blocked on **TASK-010** (Phase 0), same as TASK-063.

---

## TASK-070 — Create Contact Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-003, TASK-004  

### Blocker

Branch contacts, maps, and hours require final verification.

### Completion Evidence

- **Files:** `src/app/contact/page.tsx`.
- **Component type:** Server Component.
- **Data/verification:** renders `getActiveBranches()` inside `<address>` blocks distinguishing the two branches; phone/email/hours explicitly rendered as "Pending owner verification" text rather than any invented or unverified value; no `tel:`, `mailto:`, or map link anywhere on the page; navigation to branch details and both inquiry forms provided instead.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass; confirmed no `tel:`/`mailto:`/map URL exists anywhere in `src` (Section 5 final validation search).
- **Production dependency:** static-prototype implementation is complete; real branch contact/hours/map data remains blocked on **TASK-003**/**TASK-004** (Phase 0).

---

## TASK-071 — Draft Privacy Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** CRITICAL  
**Dependencies:** TASK-006, TASK-007  

### Requirements

- collection purposes;
- customer data fields;
- access;
- retention placeholder;
- privacy contact placeholder;
- third-party processors;
- customer rights process.

### Note

Business and legal review remain necessary before production.

### Completion Evidence

- **Files:** `src/app/privacy/page.tsx`.
- **Component type:** Server Component.
- **Data/verification:** labelled "Working Draft — Not Final" with an unset effective date; states plainly that the demo forms "do not currently collect, transmit, or store" any data; covers purpose, provisional data categories, intended staff-only access, security intent, unresolved third-party processors, unresolved retention, unresolved privacy-contact channel, and a to-be-defined customer-rights process; no legal business name, DPO, privacy email, retention duration, or claim of legal review is invented.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.
- **Production dependency:** this is a working draft only; legal review and owner approval remain outstanding before this can be a final policy.

---

## TASK-072 — Draft Terms and Website Notice

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-017  

### Required Topics

- official-site identity;
- menu and price changes;
- event schedule changes;
- inquiry limitation;
- external links;
- copyright notice.

### Completion Evidence

- **Files:** `src/app/terms/page.tsx`.
- **Component type:** Server Component.
- **Data/verification:** original, project-specific draft covering website-preview status, pending official identity, menu/price/event-schedule change notices, "inquiries are not confirmed reservations", external-link verification policy, copyright/media ownership, no online ordering/payments, and required owner review before production. Not copied from any other site's terms.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass.

---

## TASK-073 — Create Not-Found Page

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** MEDIUM  
**Dependencies:** TASK-034 to TASK-041  

### Completion Evidence

- **Files:** `src/app/not-found.tsx`.
- **Component type:** Server Component (no `"use client"`).
- **Data/verification:** consistent Gianetto design via `PageContainer`; `h1` heading, plain customer-facing copy, no technical detail; links to Home, Menu, and Branches.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass; `/_not-found` confirmed in the static route list.

---

## TASK-074 — Create Global Error Boundary

**Phase:** Static Public Website  
**Status:** DONE  
**Priority:** HIGH  
**Dependencies:** TASK-025  

### Acceptance Criteria

- safe customer message;
- no stack trace;
- route recovery action;
- consistent design.

### Completion Evidence

- **Files:** `src/app/global-error.tsx`, `src/lib/fonts.ts` (new — extracted from `src/app/layout.tsx` so global-error can apply the same fonts without importing the root layout).
- **Component type:** Client Component (`"use client"`, required by the Next.js 16 global-error convention); renders its own `<html>`/`<body>` and does not import `src/app/layout.tsx` or any Server Component tree.
- **Data/verification:** never renders `error.message`, `error.digest`, a stack trace, or any filesystem path; shows only a safe "Something went wrong" message; provides a `reset()` "Try again" button and a `Link` "Return to homepage" as recovery controls; uses Gianetto tokens/fonts via `src/lib/fonts.ts` and `./globals.css` for on-brand, readable fallback typography.
- **Validation:** `npm run type-check`, `npm run lint`, `npm run build` pass. No error is deliberately thrown to test this in committed code.

---

# 11. Phase 5 — Supabase Foundation Tasks

## TASK-075 — Create Development Supabase Project

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-025  

### Requirements

- development only;
- project ownership documented;
- no production customer data;
- connection details stored in `.env.local`.

---

## TASK-076 — Add Supabase Dependencies

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-075  

### Rule

Install only official packages needed for Next.js integration.

### Acceptance Criteria

- package purpose documented;
- lockfile reviewed;
- no extra ORM;
- no Prisma.

---

## TASK-077 — Create Supabase Server Client

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-076  

### Acceptance Criteria

- server-only usage;
- no privileged key required;
- cookie behavior follows approved integration;
- safe error handling.

---

## TASK-078 — Create Supabase Browser Client

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-076  

### Acceptance Criteria

- publishable key only;
- used only where browser access is necessary;
- no private queries.

---

## TASK-079 — Create Database Helper Migration

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-075  

### Includes

- UUID support if required;
- `updated_at` trigger function;
- common helper functions when approved.

---

## TASK-080 — Create Profiles and Assignments Migration

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-079  

---

## TASK-081 — Create Branches and Hours Migration

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-079  

---

## TASK-082 — Create Media Assets Migration

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-081  

---

## TASK-083 — Create Menu Tables Migration

**Phase:** Supabase Foundation  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-005, TASK-079  

### Blocker

Menu variants must be reviewed before locking the schema.

---

## TASK-084 — Create Events Migration

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-079, TASK-081, TASK-082  

---

## TASK-085 — Create Inquiry Tables Migration

**Phase:** Supabase Foundation  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-006, TASK-007, TASK-079, TASK-081  

---

## TASK-086 — Create Gallery and Promotions Migration

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-082  

---

## TASK-087 — Create Audit Logs Migration

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-080  

---

## TASK-088 — Add Database Indexes and Constraints

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-080 to TASK-087  

---

## TASK-089 — Add Initial RLS Policies

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-080 to TASK-088  

### Required Scenarios

- anonymous public reads;
- no public inquiry access;
- staff role access;
- branch-scoped access;
- inactive staff denial;
- audit-log restriction.

---

## TASK-090 — Generate Supabase TypeScript Types

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-089  

### Acceptance Criteria

- generated types stored in approved location;
- no manual edits;
- type generation instructions documented.

---

## TASK-091 — Create Development Seed Data

**Phase:** Supabase Foundation  
**Status:** BLOCKED  
**Priority:** MEDIUM  
**Dependencies:** TASK-002, TASK-005, TASK-008, TASK-090  

### Rule

Use fake inquiries and clearly provisional business content only.

---

## TASK-092 — Configure Storage Buckets

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-075, TASK-082  

### Decision Required

Choose:

- multiple public/private buckets; or
- simplified bucket structure with strict policies.

The final choice must be recorded in `DECISIONS.md`.

---

## TASK-093 — Test RLS Baseline

**Phase:** Supabase Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-089, TASK-091  

### Required Actors

```text
Anonymous
Owner
Admin
Content Manager
Branch Manager
Inactive staff
Authenticated user without profile
```

---

# 12. Phase 6 — Dynamic Branch and Menu Tasks

## TASK-094 — Implement Active Branch Query

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-077, TASK-081, TASK-089, TASK-090  

---

## TASK-095 — Implement Branch-by-Slug Query

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-094  

---

## TASK-096 — Replace Static Branch Listing

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-046, TASK-094  

---

## TASK-097 — Replace Static Branch Detail Data

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-047, TASK-095  

---

## TASK-098 — Implement Published Menu Query

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-083, TASK-089, TASK-090  

---

## TASK-099 — Implement Branch Menu Query

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-098  

---

## TASK-100 — Implement Effective Price Logic

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-083, TASK-098  

### Logic

```text
price_override
otherwise default_price
```

---

## TASK-101 — Replace Static Menu Data

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-051, TASK-098 to TASK-100  

---

## TASK-102 — Add Public Menu Cache Strategy

**Phase:** Dynamic Public Content  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-101  

---

# 13. Phase 7 — Dynamic Events Tasks

## TASK-103 — Implement Upcoming Events Query

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-084, TASK-089, TASK-090  

---

## TASK-104 — Implement Featured Events Query

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-103  

---

## TASK-105 — Implement Events-by-Branch Query

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-103  

---

## TASK-106 — Implement Event-by-Slug Query

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-103  

---

## TASK-107 — Implement Event Date Classification

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-084  

### Required Classifications

```text
UPCOMING
IN_PROGRESS when supported
PAST
CANCELLED
```

---

## TASK-108 — Replace Static Events Listing

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-054, TASK-103  

---

## TASK-109 — Replace Static Event Detail

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-055, TASK-106  

---

## TASK-110 — Connect Homepage Events

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-060, TASK-104  

---

## TASK-111 — Connect Branch Events

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-047, TASK-105  

---

## TASK-112 — Test Cancelled and Completed Events

**Phase:** Dynamic Events  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-107 to TASK-111  

---

# 14. Phase 8 — Inquiry Workflow Tasks

## TASK-113 — Create Reservation Zod Schema

**Phase:** Inquiry Workflows  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-006  

---

## TASK-114 — Create Private-Event Zod Schema

**Phase:** Inquiry Workflows  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-007  

---

## TASK-115 — Implement Reference Number Generator

**Phase:** Inquiry Workflows  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-085  

### Required Properties

- unique enough for MVP;
- not sequential only;
- customer-safe;
- tested;
- separate prefixes for reservation and private event.

---

## TASK-116 — Implement Reservation Submission

**Phase:** Inquiry Workflows  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-066, TASK-085, TASK-089, TASK-113, TASK-115  

### Required Controls

- server validation;
- active branch check;
- privacy consent;
- honeypot;
- rate limit;
- safe initial status;
- safe result.

---

## TASK-117 — Implement Private-Event Submission

**Phase:** Inquiry Workflows  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-067, TASK-085, TASK-089, TASK-114, TASK-115  

---

## TASK-118 — Add Form Pending and Duplicate Protection

**Phase:** Inquiry Workflows  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-116, TASK-117  

---

## TASK-119 — Add Inquiry Notification Provider

**Phase:** Inquiry Workflows  
**Status:** DEFERRED  
**Priority:** MEDIUM  
**Dependencies:** TASK-116, TASK-117  

### Reason

Database submission should be completed and verified before adding email notifications.

---

## TASK-120 — Test Inquiry Privacy

**Phase:** Inquiry Workflows  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-116, TASK-117  

### Required Tests

- anonymous user cannot read inquiries;
- one customer cannot retrieve another submission;
- public user cannot set status;
- public user cannot set staff assignment;
- malicious HTML remains text;
- invalid branch rejected.

---

# 15. Phase 9 — Authentication and Admin Foundation Tasks

## TASK-121 — Configure Supabase Staff Authentication

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-077, TASK-078, TASK-080, TASK-089  

---

## TASK-122 — Create Sign-In Page

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-121  

---

## TASK-123 — Create Sign-Out Action

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-121  

---

## TASK-124 — Create Password Recovery Flow

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-121  

---

## TASK-125 — Create Active Profile Resolver

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-080, TASK-121  

---

## TASK-126 — Create Permission Utilities

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-125  

### Initial Functions

```text
canManageMenu
canManageBranch
canManageEvent
canViewReservation
canViewPrivateEvent
canManageMedia
canManageStaff
```

---

## TASK-127 — Protect Admin Routes

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-125, TASK-126  

---

## TASK-128 — Create Admin Layout

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-037, TASK-042, TASK-127  

---

## TASK-129 — Create Admin Mobile Navigation

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-128  

---

## TASK-130 — Test Admin Access Matrix

**Phase:** Admin Foundation  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-127 to TASK-129  

---

# 16. Phase 10 — Administration Module Tasks

## TASK-131 — Create Menu Categories Admin List

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-098, TASK-126, TASK-128  

---

## TASK-132 — Create Menu Category Form

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-131  

---

## TASK-133 — Create Menu Items Admin List

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-098, TASK-126, TASK-128  

---

## TASK-134 — Create Menu Item Form

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-133  

---

## TASK-135 — Create Branch Availability Editor

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-099, TASK-134  

---

## TASK-136 — Create Branch Admin List

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-094, TASK-126, TASK-128  

---

## TASK-137 — Create Branch Edit Form

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-136  

---

## TASK-138 — Create Business Hours Editor

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-137  

---

## TASK-139 — Create Events Admin List

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-103, TASK-126, TASK-128  

---

## TASK-140 — Create Event Form

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-139  

---

## TASK-141 — Implement Event Publish Action

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-140  

### Requirements

- validate;
- authorize;
- require approved poster when used;
- write audit log;
- invalidate relevant pages.

---

## TASK-142 — Implement Event Cancellation Action

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-140  

---

## TASK-143 — Create Reservation Inquiry List

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-116, TASK-126, TASK-128  

---

## TASK-144 — Create Reservation Inquiry Detail

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-143  

---

## TASK-145 — Implement Reservation Status Update

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-144, TASK-087  

---

## TASK-146 — Create Private-Event Inquiry List

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-117, TASK-126, TASK-128  

---

## TASK-147 — Create Private-Event Inquiry Detail

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-146  

---

## TASK-148 — Implement Private-Event Status Update

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-147, TASK-087  

---

## TASK-149 — Create Staff Management Page

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-126, TASK-128  

---

## TASK-150 — Implement Staff Role Management

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-149, TASK-087  

---

## TASK-151 — Implement Staff Branch Assignments

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-149, TASK-087  

---

## TASK-152 — Create Audit Log Viewer

**Phase:** Administration MVP  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-087, TASK-126, TASK-128  

---

# 17. Phase 11 — Media, Gallery, and Promotions Tasks

## TASK-153 — Finalize Storage Security Model

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-092  

### Decision Options

- private original uploads plus controlled delivery;
- public bucket for approved assets only;
- mixed model.

Record the final decision in `DECISIONS.md`.

---

## TASK-154 — Create Media Upload Validation

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-082, TASK-153  

### Validate

- file type;
- extension;
- file size;
- dimensions;
- uploader permission;
- ownership status.

---

## TASK-155 — Create Media Upload Interface

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-154, TASK-128  

---

## TASK-156 — Create Media Approval Workflow

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-155, TASK-087  

---

## TASK-157 — Create Gallery Administration

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-086, TASK-156  

---

## TASK-158 — Connect Public Gallery

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-069, TASK-157  

---

## TASK-159 — Create Promotions Administration

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-086, TASK-156  

---

## TASK-160 — Connect Public Promotions

**Phase:** Media and Promotions  
**Status:** BACKLOG  
**Priority:** LOW  
**Dependencies:** TASK-159  

---

# 18. Phase 12 — Quality Assurance Tasks

## TASK-161 — Create Unit Test Foundation

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-025  

### Decision Required

Select the smallest suitable testing setup.

Package installation requires approval and a recorded decision.

---

## TASK-162 — Test Validation Schemas

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-113, TASK-114, TASK-161  

---

## TASK-163 — Test Permission Utilities

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-126, TASK-161  

---

## TASK-164 — Test Effective Menu Pricing

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-100, TASK-161  

---

## TASK-165 — Test Event Date Classification

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-107, TASK-161  

---

## TASK-166 — Create Integration Test Foundation

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-075, TASK-161  

---

## TASK-167 — Test RLS Policies

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-093, TASK-166  

---

## TASK-168 — Create End-to-End Test Foundation

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** Stable public and admin routes  

---

## TASK-169 — Test Public Customer Journeys

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-168  

### Journeys

- browse menu;
- choose branch;
- view event;
- submit reservation;
- submit private event.

---

## TASK-170 — Test Staff Journeys

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-168  

### Journeys

- sign in;
- publish event;
- update menu;
- change inquiry status;
- reject cross-branch access.

---

## TASK-171 — Conduct Responsive Review

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** Stable public interface  

### Required Device Class

Include Redmi 12C-sized viewport.

---

## TASK-172 — Conduct Accessibility Review

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** Stable public and admin interface  

---

## TASK-173 — Conduct Performance Review

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** Production-like images and data  

---

## TASK-174 — Conduct Security Review

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** Authentication, RLS, uploads, inquiries complete  

---

## TASK-175 — Verify Production Content

**Phase:** Quality Assurance  
**Status:** BLOCKED  
**Priority:** CRITICAL  
**Dependencies:** TASK-001 to TASK-011  

---

## TASK-176 — Verify SEO Metadata

**Phase:** Quality Assurance  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** Verified branch and business information  

---

# 19. Phase 13 — Client Acceptance Tasks

## TASK-177 — Create Staging Deployment

**Phase:** Client Acceptance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-161 to TASK-176  

---

## TASK-178 — Conduct Owner Walkthrough

**Phase:** Client Acceptance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-177  

---

## TASK-179 — Record Client Corrections

**Phase:** Client Acceptance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-178  

---

## TASK-180 — Complete Final Content Approval

**Phase:** Client Acceptance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-179  

---

## TASK-181 — Complete Account Ownership Plan

**Phase:** Client Acceptance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-178  

### Accounts

- domain;
- hosting;
- Supabase;
- GitHub;
- production email;
- analytics.

---

## TASK-182 — Obtain Launch Approval

**Phase:** Client Acceptance  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-180, TASK-181  

---

# 20. Phase 14 — Production Launch Tasks

## TASK-183 — Create Production Supabase Project

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-182  

---

## TASK-184 — Apply Production Migrations

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-183  

---

## TASK-185 — Import Verified Production Content

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-180, TASK-184  

---

## TASK-186 — Configure Production Environment

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-183  

---

## TASK-187 — Configure Production Domain

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-181, TASK-186  

---

## TASK-188 — Run Production Smoke Tests

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-185 to TASK-187  

---

## TASK-189 — Publish Official Website

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-188  

---

## TASK-190 — Monitor Initial Launch

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-189  

### Review

- inquiry failures;
- broken links;
- event dates;
- image loading;
- admin access;
- authorization denials;
- database errors.

---

## TASK-191 — Complete Owner Handover

**Phase:** Production Launch  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-189  

### Deliverables

- account ownership;
- admin instructions;
- content-update guide;
- backup notes;
- support boundaries;
- recovery contacts.

---

# 21. Phase 15 — Portfolio Packaging Tasks

## TASK-192 — Obtain Portfolio Permission

**Phase:** Portfolio Packaging  
**Status:** BACKLOG  
**Priority:** CRITICAL  
**Dependencies:** TASK-182  

---

## TASK-193 — Capture Public Website Screenshots

**Phase:** Portfolio Packaging  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-189, TASK-192  

---

## TASK-194 — Capture Safe Admin Screenshots

**Phase:** Portfolio Packaging  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-192  

### Rule

No customer data, staff email, or sensitive business information.

---

## TASK-195 — Create Architecture Diagram

**Phase:** Portfolio Packaging  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** Final architecture implementation  

---

## TASK-196 — Write Portfolio Case Study

**Phase:** Portfolio Packaging  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-192 to TASK-195  

### Sections

- client context;
- digital-presence problem;
- copyright-aware research;
- solution;
- architecture;
- customer experience;
- admin experience;
- security;
- results;
- lessons;
- future roadmap.

---

## TASK-197 — Create Demo Video

**Phase:** Portfolio Packaging  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-196  

---

## TASK-198 — Request Client Testimonial

**Phase:** Portfolio Packaging  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** Successful launch and owner approval  

---

# 22. Deferred Version 2 Tasks

These tasks must not enter the MVP automatically.

## TASK-F001 — Recurring Event Scheduling

**Status:** DEFERRED

Add only when Gianetto confirms a stable recurring live-music schedule.

---

## TASK-F002 — Promotion Scheduling Automation

**Status:** DEFERRED

---

## TASK-F003 — Customer Feedback System

**Status:** DEFERRED

---

## TASK-F004 — Inquiry Analytics

**Status:** DEFERRED

---

## TASK-F005 — Branch-Level Reports

**Status:** DEFERRED

---

## TASK-F006 — Downloadable Event Packages

**Status:** DEFERRED

---

## TASK-F007 — Editable Marketing Content CMS

**Status:** DEFERRED

---

## TASK-F008 — Automated Inquiry Email Workflow

**Status:** DEFERRED

---

# 23. Explicitly Excluded Tasks

The following are not approved.

```text
Automatic live table availability
Automatic reservation confirmation
Reservation payment
Event ticketing
Performer booking
POS integration
Delivery ordering
Customer accounts
Loyalty program
Grazie Card system
Inventory
Procurement
Employee scheduling
Payroll
Mobile application
Realtime subscriptions
Microservices
```

If requested later, they require:

- requirements review;
- architecture challenge;
- roadmap update;
- data-model update;
- security review;
- new decision record.

---

# 24. First Cursor Execution Queue

Do not send all tasks to Cursor at once.

Recommended first queue:

```text
CURSOR TASK 1
TASK-025 — Initialize Next.js Application

CURSOR TASK 2
TASK-026 — Initialize and review Git repository

CURSOR TASK 3
TASK-027 — Add foundation documentation

CURSOR TASK 4
TASK-028 — Add .env.example

CURSOR TASK 5
TASK-029 — Add type-check script

CURSOR TASK 6
TASK-030 — Initialize shadcn/ui

CURSOR TASK 7
TASK-031 — Add only the first required shadcn components

CURSOR TASK 8
TASK-034 — Implement design tokens

CURSOR TASK 9
TASK-035 — Configure typography

CURSOR TASK 10
TASK-036 — Create PageContainer
```

After each task:

```text
review diff
run checks
update TASKS.md
commit
start fresh chat
```

---

# 25. First Cursor Prompt

Use after the documentation pack is complete and saved locally.

```text
TASK
Initialize the Gianetto Next.js application foundation.

TASK ID
TASK-025

READ FIRST
- docs/PROJECT.md
- docs/ARCHITECTURE.md
- docs/ROADMAP.md
- docs/DESIGN-SYSTEM.md
- docs/SECURITY.md
- docs/AGENT-RULES.md
- docs/TASKS.md
- docs/DECISIONS.md

OBJECTIVE
Create a clean Next.js App Router project using TypeScript, Tailwind CSS, ESLint, a src directory, and the approved import alias.

ALLOWED SCOPE
- Repository root
- Initial Next.js-generated files
- package.json
- TypeScript configuration
- ESLint configuration
- src/app foundation
- public directory
- .gitignore

REQUIREMENTS
- Use the selected package manager.
- Use Next.js App Router.
- Use TypeScript.
- Use Tailwind CSS.
- Use a src directory.
- Use the approved import alias.
- Keep the generated homepage minimal.
- Preserve the docs directory.
- Add no business claims beyond a clearly provisional project title.

DO NOT
- Add Supabase.
- Add Prisma.
- Add authentication.
- Add the admin portal.
- Build the restaurant homepage.
- Add shadcn/ui in this task.
- Install additional packages.
- Add screenshot images.
- Add third-party content.
- Create all future directories.
- Modify project documents.

ACCEPTANCE CRITERIA
- Development server starts.
- Lint passes.
- Type-check can run successfully.
- Production build passes.
- No secrets are committed.
- No unrelated feature code exists.

BEFORE EDITING
1. State the initialization command.
2. Identify the exact generated files expected.
3. State any environment assumptions.
4. Wait for approval before running commands.

AFTER EDITING
1. Run the development check.
2. Run lint.
3. Run type-check.
4. Run production build.
5. Report all results honestly.
6. Summarize files created.
7. Suggest only TASK-026 next.
```

---

# 26. Task Update Procedure

After a task is completed:

1. Change the status to `REVIEW`.
2. Review the diff manually.
3. Run required validation.
4. Fix any issue.
5. Commit the task.
6. Change the status to `DONE`.
7. Add completion evidence.
8. Record a new decision only when necessary.
9. Move the next eligible task to `READY`.

Example completion entry:

```md
### Completion Evidence

- Completed: 2026-07-20
- Commit: `feat: add responsive branch card`
- Files:
  - `src/components/public/branch-card.tsx`
  - `tests/unit/branch-card.test.tsx`
- Validation:
  - `npm run lint` passed
  - `npm run type-check` passed
  - mobile review completed
- Notes:
  - missing landline and image states supported
```

---

# 27. Blocker Record Template

```md
### Blocker

**Missing input:**  
[Describe what is missing.]

**Impact:**  
[Describe what cannot be completed safely.]

**Responsible party:**  
[Owner, developer, branch manager, or provider.]

**Safe temporary option:**  
[Describe a safe placeholder or state that may be used.]

**Next review date:**  
[Date or milestone.]
```

---

# 28. Definition of Ready

A coding task is `READY` when:

- objective is clear;
- dependencies are done;
- relevant business information is available;
- file scope is defined;
- acceptance criteria are testable;
- design rules exist;
- security implications are understood;
- no unresolved architecture decision remains;
- required packages are already approved.

---

# 29. Definition of Done

A coding task is `DONE` when:

- implementation matches the task;
- no unauthorized scope was added;
- lint passes;
- type-check passes;
- applicable tests pass;
- build passes when relevant;
- responsive behavior is reviewed;
- accessibility is considered;
- security controls remain intact;
- documentation is updated;
- diff is manually reviewed;
- commit is created;
- unresolved limitations are recorded.