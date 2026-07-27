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
Status: IN_PROGRESS
```

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
**Status:** BACKLOG  
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

---

## TASK-030 — Initialize shadcn/ui

**Phase:** Repository Initialization  
**Status:** BACKLOG  
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

---

## TASK-031 — Add Initial shadcn Components

**Phase:** Repository Initialization  
**Status:** BACKLOG  
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

---

## TASK-032 — Create Minimal Directory Foundation

**Phase:** Repository Initialization  
**Status:** BACKLOG  
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
**Status:** BACKLOG  
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

---

## TASK-035 — Configure Typography

**Phase:** Design System  
**Status:** BACKLOG  
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

---

## TASK-036 — Create Page Container

**Phase:** Design System  
**Status:** BACKLOG  
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

---

## TASK-037 — Customize Button Variants

**Phase:** Design System  
**Status:** BACKLOG  
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

---

## TASK-038 — Create Section Heading Component

**Phase:** Design System  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-035, TASK-036  

### Acceptance Criteria

- optional eyebrow;
- main heading;
- supporting text;
- optional action;
- mobile and desktop alignment;
- semantic heading level is configurable.

---

## TASK-039 — Create Responsive Public Header

**Phase:** Design System  
**Status:** BACKLOG  
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

---

## TASK-040 — Create Mobile Navigation

**Phase:** Design System  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-031, TASK-039  

### Acceptance Criteria

- uses accessible Sheet;
- traps and restores focus correctly;
- closes on navigation;
- supports keyboard operation;
- includes reservation action.

---

## TASK-041 — Create Public Footer

**Phase:** Design System  
**Status:** BACKLOG  
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

---

## TASK-042 — Create Shared Status Badge

**Phase:** Design System  
**Status:** BACKLOG  
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

---

# 10. Phase 4 — Static Public Website Tasks

## TASK-043 — Create Temporary Content Types

**Phase:** Static Public Website  
**Status:** BACKLOG  
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

---

## TASK-044 — Create Temporary Branch Data

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-043  

### Requirements

- Parqal and Capitol Commons may be included as `OBSERVED`;
- Little Baguio must remain historical or excluded;
- missing values remain null or provisional;
- no invented map links or hours.

---

## TASK-045 — Create Branch Card

**Phase:** Static Public Website  
**Status:** BACKLOG  
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

---

## TASK-046 — Create Branch Listing Page

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-039, TASK-041, TASK-045  

### Acceptance Criteria

- page title and provisional introduction;
- active working branches displayed;
- historical branch not shown as active;
- responsive layout;
- metadata marked provisional.

---

## TASK-047 — Create Branch Detail Template

**Phase:** Static Public Website  
**Status:** BACKLOG  
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

---

## TASK-048 — Create Temporary Menu Data

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** HIGH  
**Dependencies:** TASK-005, TASK-043  

### Blocker

Current menu source has not been provided.

### Safe Temporary Option

Use neutral sample entries that do not mimic confirmed current menu content.

---

## TASK-049 — Create Menu Item Card

**Phase:** Static Public Website  
**Status:** BACKLOG  
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

---

## TASK-050 — Create Menu Category Navigation

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-043  

### Acceptance Criteria

- keyboard accessible;
- mobile-friendly;
- handles many categories;
- does not use an overcrowded tab bar;
- uses approved tokens.

---

## TASK-051 — Create Static Menu Page

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** HIGH  
**Dependencies:** TASK-048, TASK-049, TASK-050  

### Blocker

Current menu or approved sample menu is needed.

---

## TASK-052 — Create Temporary Event Data

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-043  

### Requirements

- use clearly fictional sample events;
- `verificationStatus = PROVISIONAL`;
- do not use real performer names without confirmation;
- include draft, upcoming, and cancelled UI examples.

---

## TASK-053 — Create Event Card

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-037, TASK-042, TASK-052  

### Acceptance Criteria

- branch, date, time, and status visible;
- performer optional;
- end time optional;
- cancelled state;
- poster optional;
- key schedule details rendered as HTML.

---

## TASK-054 — Create Events Listing Page

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-053  

### Acceptance Criteria

- upcoming event list;
- branch context;
- no-events state;
- cancellation handling;
- provisional content notice during development.

---

## TASK-055 — Create Event Detail Page

**Phase:** Static Public Website  
**Status:** BACKLOG  
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

---

## TASK-056 — Create Homepage Hero

**Phase:** Static Public Website  
**Status:** BACKLOG  
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

---

## TASK-057 — Create Restaurant Introduction Section

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-038  

### Acceptance Criteria

- provisional copy clearly identified in source;
- layout works with short or long copy;
- no invented founder story.

---

## TASK-058 — Create Featured Dishes Section

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** MEDIUM  
**Dependencies:** TASK-005, TASK-049  

### Blocker

Featured dishes and current menu are not confirmed.

### Safe Temporary Option

Use neutral sample dishes in development only.

---

## TASK-059 — Create Homepage Branch Section

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-045  

### Acceptance Criteria

- uses branch card;
- no duplicated branch logic;
- responsive;
- clear branch-selection action.

---

## TASK-060 — Create Homepage Upcoming Events Section

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-053  

### Acceptance Criteria

- displays limited featured events;
- supports no-events state;
- supports cancelled status;
- links to `/events`.

---

## TASK-061 — Create Dining Experience Section

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-038  

### Acceptance Criteria

- works with placeholder imagery;
- no unsupported live-music frequency claim;
- authentic imagery requirement documented.

---

## TASK-062 — Create Private Events Section

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-038, TASK-037  

### Acceptance Criteria

- no unverified package or capacity;
- links to inquiry page;
- uses provisional copy;
- supports approved image later.

---

## TASK-063 — Create Gallery Preview

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** MEDIUM  
**Dependencies:** TASK-010  

### Blocker

No production-cleared gallery images are available.

### Safe Temporary Option

Use local abstract placeholders with no restaurant claim.

---

## TASK-064 — Create Reservation CTA

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-037  

### Acceptance Criteria

- inquiry language;
- branch options may remain provisional;
- no automatic confirmation claim.

---

## TASK-065 — Assemble Static Homepage

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-056 to TASK-064  

### Acceptance Criteria

- all homepage sections follow approved order;
- responsive;
- no duplicate data;
- no third-party content;
- lint and build pass.

---

## TASK-066 — Create Reservation Form Interface

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** HIGH  
**Dependencies:** TASK-006, TASK-037  

### Blocker

Required reservation fields and business rules need owner approval.

### Development Option

Build a provisional form only after fields are clearly marked subject to confirmation.

---

## TASK-067 — Create Private-Event Form Interface

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** HIGH  
**Dependencies:** TASK-007, TASK-037  

### Blocker

Required inquiry details need owner confirmation.

---

## TASK-068 — Create Our Story Page

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** MEDIUM  
**Dependencies:** TASK-011  

### Blocker

No verified restaurant story.

---

## TASK-069 — Create Gallery Page

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** MEDIUM  
**Dependencies:** TASK-010, TASK-063  

---

## TASK-070 — Create Contact Page

**Phase:** Static Public Website  
**Status:** BLOCKED  
**Priority:** HIGH  
**Dependencies:** TASK-003, TASK-004  

### Blocker

Branch contacts, maps, and hours require final verification.

---

## TASK-071 — Draft Privacy Page

**Phase:** Static Public Website  
**Status:** BACKLOG  
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

---

## TASK-072 — Draft Terms and Website Notice

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-017  

### Required Topics

- official-site identity;
- menu and price changes;
- event schedule changes;
- inquiry limitation;
- external links;
- copyright notice.

---

## TASK-073 — Create Not-Found Page

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** MEDIUM  
**Dependencies:** TASK-034 to TASK-041  

---

## TASK-074 — Create Global Error Boundary

**Phase:** Static Public Website  
**Status:** BACKLOG  
**Priority:** HIGH  
**Dependencies:** TASK-025  

### Acceptance Criteria

- safe customer message;
- no stack trace;
- route recovery action;
- consistent design.

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