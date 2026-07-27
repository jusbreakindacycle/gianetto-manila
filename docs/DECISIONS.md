# Gianetto Official Restaurant Website
## Architecture, Scope, and Product Decision Register

**Project:** Gianetto Official Restaurant Website  
**Architecture:** Server-first modular monolith  
**Primary stack:** Next.js, TypeScript, Tailwind CSS, customized shadcn/ui, Supabase  
**Document status:** Active decision register  
**Last updated:** July 2026  

---

# 1. Document Purpose

This document records the significant decisions made for the Gianetto Official Restaurant Website.

It exists to prevent:

- repeated debates about already approved choices;
- inconsistent instructions between AI agents;
- silent architecture changes;
- unapproved scope expansion;
- conflicting implementation patterns;
- undocumented technical assumptions;
- future confusion about why a decision was made.

The register covers:

- product direction;
- architecture;
- technology;
- user experience;
- data modelling;
- security;
- content;
- media ownership;
- implementation workflow;
- release boundaries;
- deferred decisions.

This document does not record every small coding choice.

A decision belongs here when it materially affects:

- project scope;
- system architecture;
- security;
- data structures;
- implementation strategy;
- business operations;
- maintenance;
- client ownership;
- future development.

---

# 2. Decision Status Values

Each decision uses one status.

```text
PROPOSED
ACCEPTED
DEFERRED
REJECTED
SUPERSEDED
RETIRED
```

## 2.1 Proposed

The decision is under review and has not yet been approved.

## 2.2 Accepted

The decision is approved and should guide implementation.

## 2.3 Deferred

The decision is intentionally postponed because more information is required or the capability belongs to a later release.

## 2.4 Rejected

The option was considered and deliberately excluded.

## 2.5 Superseded

A newer decision replaces this one.

The replacement decision must be identified.

## 2.6 Retired

The decision was valid previously but is no longer applicable because the related feature or requirement was removed.

---

# 3. Decision Priority

Use one classification.

```text
FOUNDATIONAL
MAJOR
SUPPORTING
```

## Foundational

Changes require broad review of architecture and project documentation.

## Major

Changes affect a feature area, release, or significant implementation approach.

## Supporting

Changes guide implementation but have a narrower impact.

---

# 4. Decision Record Template

New decisions should follow:

```md
## ADR-XXX — Decision Title

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** YYYY-MM-DD  
**Decision owners:** Project owner and technical lead  

### Context

Why this decision was necessary.

### Decision

What was approved.

### Rationale

Why this option was selected.

### Consequences

Positive and negative effects.

### Alternatives Considered

Other options reviewed.

### Review Triggers

Conditions that require reconsideration.
```

---

# 5. Product and Scope Decisions

## ADR-001 — Build an Official Gianetto Website

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  
**Decision owners:** Project owner and technical lead  

### Context

Gianetto currently relies heavily on social-media content, menu screenshots, third-party pages, and scattered branch information.

Some supplied material also indicates the existence of a Gianetto-branded page associated with unrelated sponsorship or advertising.

Customers need one controlled and credible source for:

- menu information;
- branches;
- contact details;
- operating hours;
- reservations;
- events;
- restaurant media.

### Decision

Build Gianetto’s own official restaurant website.

The website will become the primary controlled digital source for verified Gianetto information.

### Rationale

An official website gives the business greater control over:

- brand identity;
- customer trust;
- branch information;
- search visibility;
- customer inquiries;
- current menu presentation;
- event announcements.

### Consequences

Positive:

- improved digital legitimacy;
- reduced confusion;
- structured menu and branch information;
- better customer experience;
- stronger portfolio value.

Negative:

- information must be actively maintained;
- ownership and content approval must be managed;
- outdated data can damage trust if not updated.

### Alternatives Considered

- Continue using only social media.
- Recreate the third-party editorial site.
- Use only a downloadable menu.
- Build only a social-link landing page.

### Review Triggers

Review when Gianetto no longer wants to maintain an independent website or chooses a different official digital platform.

---

## ADR-002 — Treat Third-Party Gianetto Pages as Research References Only

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Context

Some supplied pages use Gianetto branding but contain:

- third-party editorial presentation;
- unrelated advertisements or sponsorship;
- uncertain ownership;
- possible outdated claims;
- photographs with unclear usage rights.

### Decision

Third-party Gianetto pages will be treated as:

```text
Research references
Verification leads
Visual-context references
Digital-risk evidence
```

They will not be treated as:

```text
Official source of truth
Production content
Reusable layout
Reusable article copy
Reusable photography
```

### Rationale

The official website must not inherit:

- inaccurate information;
- unrelated advertisements;
- copyright risk;
- misleading brand presentation;
- uncertain business claims.

### Consequences

The project must obtain verified information directly from Gianetto management.

---

## ADR-003 — Prioritize a Conversion-Focused Restaurant Website

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

The website will prioritize these customer actions:

```text
View the Menu
Choose a Branch
View Upcoming Events
Request a Reservation
Inquire About a Private Event
Contact Gianetto
```

It will not primarily function as an editorial article or online magazine.

### Rationale

Most customers arrive with practical questions involving:

- food;
- price;
- location;
- schedule;
- contact;
- reservation.

### Consequences

Homepage sections and navigation must support direct customer actions.

---

## ADR-004 — Separate the Public Website and Protected Admin Portal

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

The application will contain two major surfaces:

```text
Public customer website
Protected staff administration portal
```

They will remain inside one Next.js application.

### Rationale

Customers and staff have different goals:

```text
Customers
- discover;
- browse;
- contact;
- submit inquiries.

Staff
- maintain;
- approve;
- publish;
- manage.
```

### Consequences

Public and protected routes must use separate layouts, authorization rules, and interaction patterns.

---

## ADR-005 — Build the Public Customer Journey Before Full Administration

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Implementation order:

```text
Foundation
Design System
Static Public Website
Supabase Foundation
Dynamic Public Content
Inquiry Workflows
Admin Portal
```

### Rationale

Building the admin portal first risks producing an unfinished internal tool without a polished public website.

### Consequences

Some content may temporarily use typed local data before Supabase integration.

---

# 6. Architecture Decisions

## ADR-006 — Use a Server-First Modular Monolith

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Context

The project requires:

- public pages;
- staff administration;
- relational data;
- branch permissions;
- secure inquiry handling;
- manageable deployment.

### Decision

Use a server-first modular monolith.

```text
One repository
One Next.js application
One public website
One admin portal
One Supabase backend per environment
One deployment pipeline
```

Internal modules remain separated by feature.

### Rationale

This provides:

- low operational complexity;
- clear structure;
- simple deployment;
- one TypeScript codebase;
- room for future growth.

### Consequences

Modules must remain organized even though they are deployed together.

### Alternatives Considered

- Microservices
- Separate frontend and backend repositories
- Multiple independent applications

### Review Triggers

Review when:

- multiple restaurant brands use the platform;
- service boundaries require independent scaling;
- operations become significantly more complex;
- one deployment becomes a material limitation.

---

## ADR-007 — Do Not Use Microservices for the MVP

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Do not introduce microservices.

### Rationale

They would add unnecessary:

- infrastructure;
- authentication complexity;
- service communication;
- deployment work;
- debugging difficulty;
- hosting cost.

### Review Triggers

The existence of more features alone does not justify microservices.

A review requires clear operational evidence.

---

## ADR-008 — Use Server Components by Default

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Next.js pages and public content components will remain Server Components unless browser-side interaction requires otherwise.

### Appropriate Client Components

```text
Mobile navigation
Dialogs
Interactive filters
Date pickers
Client-side form state
Admin table controls
Image previews
```

### Rationale

Server-first rendering supports:

- less browser JavaScript;
- protected data access;
- better content rendering;
- improved SEO;
- simpler public pages.

### Consequences

Interactive components should remain small and isolated.

---

## ADR-009 — Keep Presentation Components Free of Database Queries

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Components such as:

```text
MenuItemCard
BranchCard
EventCard
FeaturedDishCard
```

must receive typed data through props.

They must not query Supabase directly.

### Rationale

This improves:

- reuse;
- testability;
- predictable rendering;
- separation of concerns;
- future refactoring.

### Consequences

Queries belong in feature-owned data-access files.

---

# 7. Technology Decisions

## ADR-010 — Use Next.js App Router and TypeScript

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Use:

```text
Next.js App Router
TypeScript
```

### Rationale

The framework supports:

- server-first pages;
- public and admin routes;
- metadata;
- server operations;
- React-based UI;
- one full-stack application.

TypeScript improves:

- data modelling;
- validation;
- database integration;
- AI-generated-code review;
- maintainability.

### Alternatives Considered

- Astro
- Laravel
- WordPress
- plain React SPA

### Review Triggers

Review only when Next.js creates a material delivery or hosting problem.

---

## ADR-011 — Use Tailwind CSS

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Use Tailwind CSS for the design implementation.

### Rationale

It fits:

- Next.js;
- shadcn/ui;
- responsive development;
- design-token usage;
- reusable component styling.

### Consequences

The project must avoid:

- arbitrary repeated values;
- inconsistent utility combinations;
- excessive one-off styling;
- unreadable class duplication.

---

## ADR-012 — Use shadcn/ui as a Component Foundation

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Use shadcn/ui with the selected Base UI primitive configuration.

### Rationale

It provides editable and accessible foundations for:

- buttons;
- forms;
- sheets;
- dialogs;
- selects;
- tables;
- admin interactions.

### Important Boundary

shadcn/ui will not define Gianetto’s finished visual identity.

The project will use:

```text
Gianetto Design System
        ↓
Custom Restaurant Components
        ↓
shadcn/ui
        ↓
Tailwind CSS
```

### Consequences

The project owns and maintains customized component source.

### Review Triggers

Review if the selected primitive layer creates major accessibility or compatibility problems.

---

## ADR-013 — Use Supabase as the Managed Backend Platform

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Use Supabase for:

```text
PostgreSQL
Staff authentication
Media storage
```

### Rationale

Gianetto requires:

- hosted relational data;
- secure staff login;
- media storage;
- branch relationships;
- inquiry records;
- future administration.

### Alternatives Considered

- SQLite
- Firebase
- Payload CMS
- Laravel with PostgreSQL
- WordPress
- custom backend server

### Consequences

The project must manage:

- RLS;
- storage policies;
- schema migrations;
- account ownership;
- environment separation.

---

## ADR-014 — Use PostgreSQL Rather Than SQLite

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Context

SQLite was suitable for a local prototype but Gianetto is intended to become a real remotely managed client website.

### Decision

Use Supabase PostgreSQL.

### Rationale

It supports:

- hosted access;
- relational data;
- multiple staff users;
- branch permissions;
- administration;
- secure inquiries;
- future scaling.

### Consequences

Local development requires Supabase configuration and migrations.

---

## ADR-015 — Do Not Use Prisma Initially

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Use Supabase clients and PostgreSQL directly without Prisma during the MVP.

### Rationale

Prisma would add:

- another data-access layer;
- another migration workflow;
- connection configuration;
- more dependencies;
- unnecessary complexity for the current scope.

### Consequences

Feature queries may become more verbose.

Database types must be generated and maintained from Supabase.

### Review Triggers

Review when:

- reporting becomes complex;
- transactional workflows expand;
- direct queries become difficult to maintain;
- an ORM provides a demonstrated benefit.

---

## ADR-016 — Do Not Use Firebase

**Status:** REJECTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Rationale

Gianetto’s data is naturally relational:

```text
branches
menu items
branch settings
events
inquiries
staff assignments
```

PostgreSQL is a better fit than a document-first database for the approved model.

---

## ADR-017 — Do Not Use Realtime Features Initially

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Do not use Supabase Realtime during the MVP.

### Rationale

The project does not initially require continuous synchronization for:

- menu information;
- branch details;
- events;
- inquiries.

### Consequences

Pages use standard reads, refresh, and cache invalidation.

### Review Triggers

Review if staff require simultaneous operational updates that cannot be handled reliably without realtime behavior.

---

# 8. Design Decisions

## ADR-018 — Use a Custom Gianetto Design System

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Use a custom visual system based on:

```text
Deep restaurant red
Warm ivory
Cream
Charcoal
Muted olive
Warm brick
Limited gold
```

### Working Typography

```text
Display: Cormorant Garamond
Body and interface: Manrope
```

### Rationale

The site should feel:

- warm;
- food-focused;
- polished;
- welcoming;
- original;
- restaurant-specific.

### Consequences

Default shadcn styling is not considered finished UI.

### Review Triggers

Review after receiving the official logo and brand guide.

---

## ADR-019 — Keep the Public Website Mobile First

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Design and test the public experience primarily for smartphones.

### Rationale

Restaurant customers often access:

- menus;
- directions;
- contact details;
- reservations;
- event schedules

through mobile devices.

### Required Review Device

Include a Redmi 12C-sized viewport in manual testing.

---

## ADR-020 — Do Not Add Full Dark Mode During the MVP

**Status:** DEFERRED  
**Priority:** SUPPORTING  
**Date:** July 2026  

### Decision

The MVP will use a primarily warm light theme.

Dark sections may be used intentionally for:

- footer;
- live music;
- evening atmosphere;
- reservation features.

### Rationale

A full theme system adds unnecessary:

- design work;
- accessibility review;
- testing scope;
- maintenance.

---

## ADR-021 — Use Authentic Restaurant Photography as the Production Priority

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Preferred Order

```text
1. Business-owned photography
2. Commissioned photography
3. Licensed media
4. Permission-cleared customer or performer content
5. AI-generated placeholder or decorative visuals
```

### Rationale

Customers expect the website to represent actual:

- dishes;
- interiors;
- branches;
- events.

---

# 9. Content and Copyright Decisions

## ADR-022 — Do Not Reuse Supplied Third-Party Screenshots as Production Assets

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Supplied screenshots from:

- articles;
- social media;
- Scribd;
- third-party photography;
- sponsored pages

will not be used directly as permanent website assets.

### Rationale

Screenshots may contain:

- copyrighted photography;
- platform interfaces;
- advertisements;
- personal accounts;
- watermarks;
- outdated information.

### Consequences

Original source files must be requested from Gianetto where the business owns them.

---

## ADR-023 — Track Media Ownership and Approval

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Every managed media asset will record:

- source;
- ownership status;
- rights note;
- photographer credit;
- approval status;
- branch relationship where relevant.

### Approved Ownership Values

```text
BUSINESS_OWNED
COMMISSIONED
LICENSED
CUSTOMER_PERMISSION
PERFORMER_PERMISSION
AI_GENERATED_PLACEHOLDER
UNVERIFIED
RESTRICTED
```

### Public Rule

A file may appear publicly only when:

```text
approved_for_web = true
AND
ownership status permits publication
```

---

## ADR-024 — Use AI Images as Placeholders, Not Automatic Production Media

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

AI-generated images may support:

- wireframes;
- design prototypes;
- decorative concepts;
- temporary development content.

They must be marked:

```text
AI_GENERATED_PLACEHOLDER
```

### Restrictions

AI visuals must not:

- falsely represent an actual Gianetto dish;
- fabricate a real event;
- reproduce a third-party photo;
- invent restaurant features;
- imply documentary authenticity.

### Review Triggers

Any permanent AI-media use requires explicit owner approval.

---

## ADR-025 — Use Owner-Verified Information as the Production Source of Truth

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Production content must follow this source hierarchy:

```text
1. Written owner confirmation
2. Current approved Gianetto document
3. Current official Gianetto publication
4. Current branch-provided information
5. Older official materials
6. Third-party sources
7. AI-generated placeholders
```

### Consequences

Observed screenshots must remain marked `OBSERVED` until verified.

---

# 10. Branch and Menu Decisions

## ADR-026 — Treat Parqal and Capitol Commons as Observed, Not Yet Verified

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Parqal and Capitol Commons may appear in temporary development data using:

```text
verificationStatus = OBSERVED
```

They must not be treated as fully production-approved until the owner confirms them.

---

## ADR-027 — Treat Little Baguio as Historical Until Confirmed

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Do not show Little Baguio as an active branch unless the owner confirms its current status.

### Rationale

The branch appeared in older menu material but may no longer be active.

---

## ADR-028 — Use a Structured HTML Menu

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

The primary menu will be structured web content.

A PDF may be offered as a supporting download but must not replace the HTML menu.

### Rationale

Structured HTML improves:

- mobile readability;
- accessibility;
- search;
- branch filtering;
- price maintenance;
- performance.

---

## ADR-029 — Support Branch-Specific Menu Settings

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Use:

```text
menu_items
        ↓
menu_item_branch_settings
        ↓
branches
```

Branch settings may override:

- availability;
- price;
- featured state;
- display order.

### Rationale

A dish may vary across branches.

### Consequences

The effective price is:

```text
price_override when present
otherwise default_price
```

---

## ADR-030 — Defer Menu Item Variants Until the Current Menu Is Reviewed

**Status:** DEFERRED  
**Priority:** MAJOR  
**Date:** July 2026  

### Context

Some restaurant items may have:

- sizes;
- serving options;
- glass or bottle prices;
- solo or sharing prices.

### Decision

Do not create `menu_item_variants` until the current menu source confirms the need.

### Rationale

Creating unused schema increases complexity.

### Review Trigger

Current menu contains multiple maintained prices for one item.

---

# 11. Reservation and Private-Event Decisions

## ADR-031 — Treat Reservations as Inquiries

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

The website will accept reservation inquiries.

Submission will not automatically confirm a table.

### Required Customer Message

> Submitting this form does not confirm a table. A Gianetto representative will contact you after checking availability.

### Rationale

The MVP does not have:

- live table inventory;
- scheduling integration;
- automatic branch confirmation.

### Consequences

Inquiry statuses may include:

```text
NEW
CONTACTED
CONFIRMED
DECLINED
CANCELLED
COMPLETED
```

---

## ADR-032 — Do Not Build Live Table Inventory

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Do not implement:

- table maps;
- real-time availability;
- seat allocation;
- booking locks;
- automatic table assignment.

### Review Triggers

Review only when Gianetto has:

- a defined reservation operation;
- reliable table data;
- staff workflow;
- business approval;
- integration requirements.

---

## ADR-033 — Use a Separate Private-Event Inquiry Workflow

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Private events will use a separate inquiry form and status flow.

### Rationale

Private events may require:

- larger guest count;
- event type;
- organization details;
- special requirements;
- budget discussion;
- proposal follow-up.

### Consequences

Private-event inquiries remain distinct from public restaurant events.

---

## ADR-034 — Do Not Add Online Payments

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

The MVP will not process:

- reservation deposits;
- private-event payments;
- online orders;
- event tickets.

### Rationale

Payments introduce additional:

- security;
- legal;
- accounting;
- refund;
- integration;
- operational requirements.

---

# 12. Live Music and Events Decisions

## ADR-035 — Include a Lightweight Live Music and Events Module

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Include:

```text
/events
/events/[slug]
homepage upcoming events
branch-specific upcoming events
admin event management
```

### Supported Uses

```text
Live music
Acoustic performances
Special dinners
Holiday events
Branch celebrations
Promotional events
```

### Rationale

Live performances are part of Gianetto’s customer experience and can encourage repeat website visits.

---

## ADR-036 — Keep Events Branch-Specific

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Every public event must belong to a branch.

### Rationale

Customers need to know exactly where an event occurs.

### Consequences

Event queries and permissions must consider `branch_id`.

---

## ADR-037 — Do Not Build Event Ticketing

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

The events module will not include:

- ticket sales;
- QR tickets;
- seat allocation;
- event payments;
- ticket refunds.

---

## ADR-038 — Do Not Build Performer Management

**Status:** REJECTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Do not create:

- performer accounts;
- contracts;
- talent scheduling;
- performer payments;
- booking requests;
- contact databases.

The MVP stores only the approved public performer name and related event content.

---

## ADR-039 — Defer Recurring Event Rules

**Status:** DEFERRED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Each MVP event will be stored as an individual record.

### Rationale

The actual frequency and schedule process remain unverified.

### Review Trigger

Gianetto confirms a stable recurring live-music schedule that staff repeatedly enter manually.

---

## ADR-040 — Keep Cancelled Events Visible When Customer Communication Requires It

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

A cancelled event may remain publicly visible with a clear cancellation notice.

### Rationale

Removing an already announced event without explanation may confuse customers.

### Consequences

Cancelled events must not appear as normal upcoming events.

---

# 13. Data Decisions

## ADR-041 — Use UUID Primary Keys

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Use UUIDs for primary business entities.

### Rationale

They are:

- difficult to guess;
- compatible with Supabase;
- suitable across environments;
- independent of public reference numbers.

---

## ADR-042 — Use Separate Customer-Facing Inquiry Reference Numbers

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Reservation and private-event inquiries will use readable reference numbers separate from database IDs.

Working examples:

```text
GIA-RES-20260718-A7K2
GIA-EVT-20260718-P4D8
```

### Rationale

Customers should not receive internal UUIDs as their primary inquiry reference.

---

## ADR-043 — Use UTC Timestamps and Asia/Manila Display

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Store absolute timestamps using `timestamptz`.

Display restaurant dates and times using:

```text
Asia/Manila
```

### Consequences

Event and publication logic must be timezone-aware.

---

## ADR-044 — Use Numeric Currency Fields

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Use:

```sql
numeric(10,2)
```

for menu prices.

Default currency:

```text
PHP
```

### Rationale

Floating-point types are unsuitable for monetary values.

---

## ADR-045 — Use Text Values with Database Check Constraints for Early Status Fields

**Status:** ACCEPTED  
**Priority:** SUPPORTING  
**Date:** July 2026  

### Decision

During the early MVP, use controlled text values with PostgreSQL `CHECK` constraints rather than rigid database enums.

### Rationale

Status values may still require adjustment during owner verification.

### Consequences

The database must still reject invalid values.

---

## ADR-046 — Do Not Add Soft Deletion to Every Table

**Status:** ACCEPTED  
**Priority:** SUPPORTING  
**Date:** July 2026  

### Decision

Use entity-appropriate lifecycle controls:

```text
branches.is_active
menu_items.is_published
events.status
profiles.is_active
inquiries.archived_at
```

### Rationale

A universal `deleted_at` adds unnecessary complexity.

---

## ADR-047 — Defer General Site Content Management

**Status:** DEFERRED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Marketing copy may remain in source control initially.

Do not build a generic CMS or page builder for the MVP.

### Review Trigger

Gianetto staff need to update:

- homepage copy;
- restaurant story;
- legal notices;
- general page content

without developer assistance.

---

## ADR-048 — Defer Holiday Schedule Exceptions

**Status:** DEFERRED  
**Priority:** SUPPORTING  
**Date:** July 2026  

### Decision

The initial data model will store repeating weekly business hours.

Do not add `branch_schedule_exceptions` until the business confirms a maintenance workflow.

### Review Trigger

Gianetto requires website-managed:

- holiday hours;
- temporary closures;
- special schedule overrides.

---

# 14. Security Decisions

## ADR-049 — Use Supabase Auth for Staff Only

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Only authorized Gianetto staff will have accounts during the MVP.

Customers do not need accounts.

### Rationale

Customer accounts would add unnecessary:

- identity management;
- privacy requirements;
- recovery flows;
- support obligations.

---

## ADR-050 — Require an Active Application Profile

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

A Supabase Auth identity must also have:

```text
profiles record
is_active = true
approved role
required branch assignment
```

to access administration.

### Rationale

Authentication confirms identity.

The application profile confirms business authorization.

---

## ADR-051 — Use Role-Based and Branch-Based Authorization

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Roles

```text
OWNER
ADMIN
CONTENT_MANAGER
BRANCH_MANAGER
```

### Decision

Branch Manager permissions must use `staff_branch_assignments`.

### Rationale

A valid staff account must not automatically gain access to every branch.

---

## ADR-052 — Enforce Authorization in the Application and RLS

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Use layered access control:

```text
Protected route
Server-side permission check
Supabase RLS
PostgreSQL constraint
```

### Rationale

No single layer is sufficient.

---

## ADR-053 — Keep Inquiry Records Private

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Anonymous visitors may submit inquiries through controlled server operations.

They may not:

- list inquiries;
- retrieve inquiry details;
- view customer contact information;
- change status;
- assign staff.

---

## ADR-054 — Keep Privileged Keys Server-Side

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Privileged Supabase credentials must never appear in:

- Client Components;
- public environment variables;
- source control;
- browser responses;
- logs;
- documentation.

### Service-Role Rule

Avoid the service-role key unless a narrow approved server operation requires it.

---

## ADR-055 — Enable RLS on Exposed Tables

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

All relevant Supabase tables must use Row Level Security with explicit policies.

### Consequences

RLS must be tested using:

- anonymous access;
- every role;
- inactive staff;
- cross-branch attempts;
- authenticated user without a profile.

---

## ADR-056 — Validate All Mutations with Zod

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Zod will validate untrusted mutation input on the server.

### Rationale

Client-side validation alone can be bypassed.

---

## ADR-057 — Add Honeypot and Rate Limiting Before CAPTCHA

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

Initial public-form protection:

```text
Server validation
Maximum field lengths
Honeypot
Rate limiting
Duplicate-submission control
```

CAPTCHA remains deferred unless abuse requires it.

### Rationale

This reduces friction and preserves accessibility.

---

## ADR-058 — Audit Significant Administrative Actions

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Create audit records for actions such as:

```text
Menu price changes
Menu publication
Branch-hour changes
Event publication
Event cancellation
Inquiry status changes
Media approval
Role changes
Staff deactivation
```

### Rationale

The system requires accountability and traceability.

---

# 15. Media Storage Decisions

## ADR-059 — Use Supabase Storage

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Store approved media files in Supabase Storage.

Store rights and approval metadata in PostgreSQL.

### Rationale

The file and business permission record serve different purposes.

---

## ADR-060 — Do Not Treat an Uploaded File as Automatically Public

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Public Eligibility

```text
Storage object exists
AND
media_assets record exists
AND
ownership is acceptable
AND
approved_for_web = true
```

### Rationale

Upload and publication must remain separate actions.

---

## ADR-061 — Final Storage Bucket Model Remains Undecided

**Status:** DEFERRED  
**Priority:** MAJOR  
**Date:** July 2026  

### Options Under Review

```text
A. Private original uploads with controlled delivery
B. Public buckets containing approved assets only
C. Mixed public and private model
```

### Required Decision Timing

Before implementing production media uploads.

### Evaluation Criteria

- policy complexity;
- public image performance;
- original-file protection;
- staff workflow;
- deletion behavior;
- cost;
- maintainability.

---

# 16. Development and AI Workflow Decisions

## ADR-062 — Use Cursor Free and Free Agent Chats as Controlled Assistants

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

AI tools will assist with:

- planning;
- bounded implementation;
- testing;
- debugging;
- documentation.

They will not operate as autonomous project owners.

### Human Responsibilities

The developer remains responsible for:

- approving scope;
- reviewing code;
- protecting credentials;
- validating commands;
- verifying business information;
- committing changes;
- deploying production.

---

## ADR-063 — Use One Bounded Task Per Agent Session

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Preferred workflow:

```text
One task
One plan
One small scope
One reviewed diff
One commit
Fresh session
```

### Rationale

This conserves limited agent requests and reduces uncontrolled changes.

---

## ADR-064 — Require Plan Before Editing

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

AI agents must identify:

- task understanding;
- implementation plan;
- files;
- assumptions;
- risks;
- validation commands

before editing when approval is required.

---

## ADR-065 — Do Not Allow Silent Package Installation

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

A package requires justification and approval before installation.

### Required Justification

```text
Problem solved
Why existing tools are insufficient
Maintenance status
Security considerations
License
Runtime or bundle impact
Alternative without the package
```

---

## ADR-066 — Use One Task Per Commit

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Decision

A completed bounded task should normally produce one reviewed commit.

### Rationale

This improves:

- rollback;
- review;
- portfolio evidence;
- debugging;
- task tracking.

---

## ADR-067 — Do Not Begin Coding Before the Initialization Pack Is Complete

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Required Documents

```text
PROJECT.md
ARCHITECTURE.md
ROADMAP.md
DATA-MODEL.md
DESIGN-SYSTEM.md
CONTENT-INVENTORY.md
SECURITY.md
AGENT-RULES.md
TASKS.md
DECISIONS.md
OWNER-VERIFICATION-FORM.md
```

### Rationale

The documentation provides persistent context for Cursor and prevents architecture drift.

---

# 17. Testing Decisions

## ADR-068 — Use Layered Testing

**Status:** ACCEPTED  
**Priority:** MAJOR  
**Date:** July 2026  

### Test Levels

```text
Unit
Integration
RLS/security
End-to-end
Manual responsive
Manual accessibility
Client acceptance
```

### Required Critical Areas

- validation;
- permissions;
- branch scope;
- RLS;
- inquiry privacy;
- event classification;
- effective menu pricing;
- customer submission flows.

---

## ADR-069 — Testing Framework Selection Remains Deferred

**Status:** DEFERRED  
**Priority:** MAJOR  
**Date:** July 2026  

### Context

The exact testing packages should be selected only when the project reaches the first feature that benefits from automated testing.

### Evaluation Criteria

- compatibility;
- setup size;
- maintenance;
- free usage;
- Next.js support;
- Supabase testing support;
- minimal package overhead.

### Rule

Do not install a testing framework automatically during initial project creation.

---

# 18. Deployment and Ownership Decisions

## ADR-070 — Separate Development, Staging, and Production

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Use separate environments for:

```text
Development
Staging
Production
```

### Rationale

Real inquiries and staff access must remain isolated from development experiments.

---

## ADR-071 — Production Accounts Should Belong to Gianetto

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Production Assets

```text
Domain
Hosting
Supabase organization
Supabase production project
Business email
Analytics
Primary owner account
```

### Rationale

The business must retain operational control even if the developer becomes unavailable.

---

## ADR-072 — Hosting Provider Selection Remains Deferred

**Status:** DEFERRED  
**Priority:** MAJOR  
**Date:** July 2026  

### Evaluation Criteria

```text
Next.js support
Server execution
Environment variables
Custom domain
Logs
Cost
Deployment reliability
Client ownership
Vendor dependency
```

### Required Decision Timing

Before staging deployment.

---

## ADR-073 — Email Notification Provider Remains Deferred

**Status:** DEFERRED  
**Priority:** SUPPORTING  
**Date:** July 2026  

### Decision

Complete secure inquiry storage before adding email notifications.

### Rationale

The database must remain the source of truth.

Email failure must not erase a successful submission.

### Required Decision Timing

After reservation and private-event insertion workflows are stable.

---

# 19. Privacy Decisions

## ADR-074 — Collect Only Necessary Inquiry Information

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Collect only information required for:

- reservation follow-up;
- private-event follow-up;
- related customer communication.

### Not Included

- customer profiles;
- marketing behavior;
- loyalty history;
- broad analytics tied to personal identity.

---

## ADR-075 — Do Not Combine Inquiry Consent with Marketing Consent

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Decision

Reservation or event consent does not automatically authorize promotional messaging.

### Rationale

Customer communication must remain purpose-specific.

---

## ADR-076 — Inquiry Retention Period Remains Unresolved

**Status:** DEFERRED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

### Required Owner Decision

Confirm:

- active inquiry retention;
- completed inquiry retention;
- archive duration;
- deletion procedure;
- business or legal requirements;
- responsible staff.

### Temporary Rule

Until approved:

- restrict access;
- archive instead of automatically deleting;
- avoid duplicate exports;
- do not create scheduled deletion jobs.

---

# 20. Rejected Scope Decisions

## ADR-077 — No Customer Accounts

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

The MVP will not include:

- customer login;
- saved reservations;
- order history;
- customer profiles.

---

## ADR-078 — No POS Integration

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

No integration with restaurant point-of-sale systems is approved.

---

## ADR-079 — No Delivery Ordering

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

The website may link to verified delivery providers later.

It will not process delivery orders during the MVP.

---

## ADR-080 — No Loyalty or Grazie Card Management

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

The website will not manage:

- loyalty points;
- card balances;
- member accounts;
- reward redemption.

---

## ADR-081 — No Inventory, Procurement, Payroll, or Employee Scheduling

**Status:** REJECTED  
**Priority:** FOUNDATIONAL  
**Date:** July 2026  

These systems are outside the restaurant website and administration scope.

---

## ADR-082 — No Mobile Application

**Status:** REJECTED  
**Priority:** MAJOR  
**Date:** July 2026  

The MVP will be a responsive web application.

A mobile application requires separate evidence of need.

---

# 21. Governance and Product-Review Decisions

## ADR-083 — Use Demo-First Owner Review with JL as Product and Design Authority

**Status:** ACCEPTED  
**Priority:** FOUNDATIONAL  
**Date:** 2026-07-28  
**Decision owners:** Project owner and technical lead

### Context

Requiring the Gianetto owner or an authorized representative to review every screen, component, layout, color, or implementation choice during development would stall routine work and does not match how the owner is available to participate. Most day-to-day product, design, and technical choices do not touch business facts, commitments, legal or privacy obligations, media rights, account ownership, security, or production publication, and do not need owner sign-off before they can proceed.

### Decision

JL controls normal product, design, UX, information-architecture, implementation, and technical decisions during development. The Gianetto owner or authorized representative is not required to review every screen, component, layout, color, or implementation choice.

The project builds a coherent working demo first. The owner then reviews the complete demo, confirms business facts and commitments, identifies required changes, and provides one consolidated feedback set. The project completes one coordinated refinement pass before final production approval.

### Division of Responsibilities

```text
JL decides without intermediate owner approval:
- page structure and information architecture;
- visual composition and responsive layout;
- normal color, typography, spacing, and component decisions within
  the documented working design system;
- interaction patterns and customer journeys;
- technical implementation and architecture within approved project rules;
- provisional demo presentation that does not publish unsupported facts;
- routine usability and accessibility improvements.

Owner approval is required for:
- official business identity and public factual claims;
- active branches, addresses, contacts, and operating hours;
- current menu items, prices, and availability;
- reservation, private-event, event, deposit, cancellation, and service rules;
- anything Gianetto must operationally or legally honor;
- logo, photographs, media rights, and publication permissions;
- customer-data handling, privacy, production-account ownership, and launch;
- final production content and business commitments.
```

### Rationale

Separating routine design and implementation authority from business-fact and commitment approval lets development proceed without waiting on the owner for every visual choice, while preserving owner control over anything Gianetto must actually stand behind. Reviewing one coherent demo is more efficient and more legible to the owner than reviewing fragments as they are built, and produces one consolidated set of feedback instead of many scattered rounds.

### Consequences

Positive:

- development is not blocked by routine approval requests;
- the owner's attention is spent confirming facts and commitments rather than reviewing components;
- feedback arrives consolidated, enabling one coordinated refinement pass instead of continuous rework.

Negative:

- the owner will not see incremental design work as it is built, only the assembled demo;
- provisional content must be tracked carefully so it is never mistaken for verified content before the demo review.

### Escalation Boundaries

An AI agent must stop and escalate rather than deciding silently when a decision affects:

```text
factual business information
operational commitments
legal or privacy obligations
media rights
account ownership
security
production publication
```

### Review Sequence

```text
1. JL directs product and design.
2. The team builds a coherent working demo.
3. Unverified facts remain excluded, null, or clearly provisional.
4. The authorized Gianetto representative reviews the complete demo.
5. Factual corrections and strongly requested changes are recorded.
6. Feedback is consolidated.
7. One coordinated refinement pass is completed.
8. Final production approval is obtained.
```

### Final-Production Approval Requirement

This decision does not remove or weaken the owner's final production approval. Production publication of business facts, commitments, media, and account ownership still requires explicit owner approval as recorded in `OWNER-VERIFICATION-FORM.md`. JL is not the legal or operational owner of Gianetto.

### Alternatives Considered

- Require owner approval for every screen or component before it is built — rejected as unworkable given owner availability and unnecessary given the narrow set of decisions that actually carry business risk.
- Let JL approve business facts and commitments without owner review — rejected because it would let AI-assisted or developer-only work make commitments Gianetto has not agreed to honor.

### Review Triggers

Review if the owner requests more granular visibility into work in progress, or if the demo-first sequence produces feedback that repeatedly arrives too late to address efficiently.

---

# 22. Pending Decisions Register

The following decisions require future resolution.

| Decision | Status | Required before |
|---|---|---|
| Official restaurant classification | Pending owner verification | Final copy |
| Official active branch list | Pending owner verification | Production branch pages |
| Current menu and variants | Pending current source | Menu schema implementation |
| Reservation fields and policies | Pending owner verification | Reservation form |
| Private-event fields and policies | Pending owner verification | Private-event form |
| Live music frequency and workflow | Pending owner verification | Production events |
| Official logo and exact colors | Pending assets | Final visual system |
| Storage bucket model | Deferred | Media upload implementation |
| Testing framework | Deferred | First automated-test task |
| Hosting provider | Deferred | Staging |
| Email provider | Deferred | Notifications |
| Inquiry retention period | Pending owner/legal decision | Production privacy approval |
| Holiday schedule model | Deferred | Schedule exception requirement |
| General editable site content | Deferred | Admin content-management requirement |

---

# 23. Decision Change Procedure

A locked decision may be changed only through:

```text
1. Identify the existing decision.
2. Explain the new requirement.
3. Describe why the current decision is insufficient.
4. Evaluate alternatives.
5. Assess architecture, security, data, cost, and roadmap impact.
6. Create a new decision record.
7. Mark the old decision SUPERSEDED when applicable.
8. Update affected project documents.
9. Update TASKS.md.
10. Implement through bounded tasks.
```

An AI agent may recommend a change.

It may not approve the change itself.

---

# 24. Decision Impact Checklist

Before approving a new decision, review:

```text
Does it expand the MVP?
Does it introduce a package?
Does it change the database?
Does it change RLS?
Does it collect more personal data?
Does it change a staff role?
Does it require a new external service?
Does it change account ownership?
Does it introduce payment?
Does it change reservation semantics?
Does it affect copyright or media rights?
Does it affect deployment cost?
Does it affect the roadmap?
```

---

# 25. Current Accepted Foundation

The project currently proceeds with:

```text
Official Gianetto restaurant website
Public customer experience
Protected staff administration portal
Server-first modular monolith
Next.js App Router
TypeScript
Tailwind CSS
Customized shadcn/ui
Supabase PostgreSQL
Supabase Auth for staff
Supabase Storage
Structured HTML menu
Branch-specific menu settings
Reservation inquiries
Private-event inquiries
Lightweight live music and events
Media rights and approval tracking
Role-based and branch-based access
RLS and server authorization
Bounded Cursor tasks
One reviewed task per commit
```

The project currently excludes:

```text
Customer accounts
Automatic table booking
Live table inventory
Payments
Event ticketing
Performer management
POS integration
Delivery ordering
Loyalty management
Inventory
Payroll
Mobile application
Realtime subscriptions
Microservices
```