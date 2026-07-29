# Gianetto Official Restaurant Website
## Development Roadmap

**Project:** Gianetto Official Restaurant Website  
**Architecture:** Server-first modular monolith  
**Primary stack:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase  
**Development workflow:** Cursor Free and free AI agent chats  
**Document status:** Approved working roadmap  
**Last updated:** July 2026  

---

# 1. Document Purpose

This roadmap defines the implementation order for the Gianetto Official Restaurant Website.

It converts the approved project scope and architecture into:

- phases;
- milestones;
- task sequences;
- dependencies;
- completion gates;
- testing requirements;
- client-verification checkpoints;
- Cursor and AI-agent task boundaries;
- release targets.

This roadmap must be followed sequentially unless a documented project decision changes the order.

The project must not skip directly from project initialization to full-stack implementation.

---

# 2. Roadmap Principles

## 2.1 Verify Before Publishing

Business information must be confirmed before it becomes production content.

This includes:

- active branches;
- official addresses;
- current operating hours;
- current contact numbers;
- menu items;
- prices;
- live music schedules;
- reservation procedures;
- private-event procedures;
- image ownership;
- official social-media accounts.

Unverified information may be used temporarily during development only when clearly marked.

---

## 2.2 Build the Public Journey Before the Full Admin Portal

The public customer experience must work before building advanced administration.

Recommended sequence:

```text
Project Foundation
        ↓
Design System
        ↓
Static Public Website
        ↓
Supabase Foundation
        ↓
Dynamic Public Content
        ↓
Customer Inquiry Workflows
        ↓
Administration Portal
````

This prevents the project from becoming an unfinished internal dashboard with no polished client-facing website.

---

## 2.3 One Bounded Task at a Time

Each Cursor or AI-agent task should have:

* one clear objective;
* a small allowed file scope;
* explicit acceptance criteria;
* no unrelated refactoring;
* a plan before editing;
* validation after editing;
* one reviewed commit.

Avoid prompts asking an agent to build an entire phase at once.

---

## 2.4 Documentation Is Part of Implementation

Important decisions must be recorded in:

```text
docs/TASKS.md
docs/DECISIONS.md
docs/CONTENT-INVENTORY.md
docs/DATA-MODEL.md
docs/DESIGN-SYSTEM.md
docs/SECURITY.md
```

Documentation must reflect the actual implementation.

It must not become disconnected from the codebase.

---

## 2.5 Completion Gates Are Mandatory

A phase is complete only when its completion gate is satisfied.

Starting a later phase does not make an earlier phase complete.

Incomplete work must remain visible in `docs/TASKS.md`.

---

# 3. Release Overview

## Version 0.1 — Project Foundation

Includes:

* approved project documents;
* initialized repository;
* working Next.js application;
* TypeScript;
* Tailwind CSS;
* shadcn/ui;
* basic quality checks;
* environment template;
* agent rules.

---

## Version 0.2 — Static Public Prototype

Includes:

* complete public route structure;
* mobile-first navigation;
* homepage;
* menu shell;
* branch shells;
* event shells;
* reservation and private-event form interfaces;
* gallery;
* contact page;
* temporary structured content.

No production database is required yet.

---

## Version 0.3 — Dynamic Public MVP

Includes:

* Supabase integration;
* dynamic menu;
* dynamic branches;
* dynamic events;
* approved media;
* reservation inquiries;
* private-event inquiries;
* publication controls.

---

## Version 1.0 — Public Production Release

Includes:

* verified business content;
* responsive public website;
* dynamic operational content;
* working inquiry flows;
* privacy notice;
* accessibility review;
* SEO;
* production deployment;
* client approval.

---

## Version 1.1 — Administration MVP

Includes:

* staff authentication;
* menu management;
* branch management;
* event management;
* inquiry management;
* media management;
* gallery management;
* promotion management;
* role-based access;
* audit logging.

---

## Version 2.0 — Optional Enhancements

Possible features:

* recurring live music schedules;
* scheduled promotions;
* email automation;
* inquiry analytics;
* downloadable private-event packages;
* richer site-content management;
* branch-level reporting.

Version 2 features must not enter the MVP without approval.

---

# 4. Phase Dependency Map

```text
Phase 0 — Business and Content Verification
        ↓
Phase 1 — Project Documentation Foundation
        ↓
Phase 2 — Repository and Application Initialization
        ↓
Phase 3 — Design System and Wireframes
        ↓
Phase 4 — Static Public Website
        ↓
Phase 5 — Supabase Foundation
        ↓
Phase 6 — Dynamic Branches and Menu
        ↓
Phase 7 — Dynamic Live Music and Events
        ↓
Phase 8 — Reservation and Private-Event Inquiries
        ↓
Phase 9 — Staff Authentication and Admin Foundation
        ↓
Phase 10 — Administration Modules
        ↓
Phase 11 — Media, Gallery, and Promotions
        ↓
Phase 12 — Quality Assurance and Security Review
        ↓
Phase 13 — Client Acceptance
        ↓
Phase 14 — Production Launch
        ↓
Phase 15 — Portfolio Packaging
```

Some documentation and verification activities may continue across phases, but implementation dependencies must remain respected.

---

# 5. Phase 0 — Business and Content Verification

## Objective

Establish the verified business information needed for design, development, and publication.

## Required Inputs

* owner or authorized representative;
* current menu;
* branch information;
* official logo and brand assets;
* reservation procedure;
* private-event procedure;
* live music information;
* official contact channels;
* business-owned photos.

## Tasks

### Business Identity

Confirm:

* official business name;
* public-facing restaurant name;
* approved tagline;
* approved restaurant description;
* preferred restaurant classification;
* official logo;
* official brand colors;
* founding story, when available.

### Branch Verification

For every possible branch, confirm:

* active or inactive status;
* official branch name;
* full address;
* map link;
* contact numbers;
* operating hours;
* parking information;
* accessibility information;
* reservation contact;
* private-event availability;
* seating or event capacity, when approved.

### Menu Verification

Obtain:

* latest menu document;
* current menu categories;
* item names;
* descriptions;
* current prices;
* branch-specific availability;
* branch-specific price differences;
* featured dishes;
* unavailable items;
* dietary information;
* service-charge information;
* menu update responsibility.

### Live Music and Events Verification

Confirm:

* which branches host live bands;
* approximate frequency;
* whether schedules are recurring or irregular;
* who provides event details;
* who approves performer names;
* whether event posters may be published;
* reservation requirements;
* entrance fees or minimum spend;
* cancellation process;
* whether past events should remain visible.

### Reservation Verification

Confirm:

* accepted reservation channels;
* whether the website form is acceptable;
* required customer details;
* same-day reservation policy;
* maximum online guest count;
* cancellation process;
* response expectations;
* which branch receives notifications.

### Private-Event Verification

Confirm:

* available event types;
* branch availability;
* minimum or maximum guest count;
* required inquiry details;
* budget information;
* response process;
* event-package documents;
* branch contact ownership.

### Media Ownership Verification

Classify every candidate asset as:

```text
BUSINESS_OWNED
COMMISSIONED
LICENSED
CUSTOMER_PERMISSION
PERFORMER_PERMISSION
AI_GENERATED_PLACEHOLDER
UNVERIFIED
```

## Deliverables

* completed `OWNER-VERIFICATION-FORM.md`;
* verified branch list;
* verified menu source;
* content inventory;
* media ownership inventory;
* list of unresolved questions.

## Completion Gate

Phase 0 is complete when:

* active branches are confirmed;
* current menu source is identified;
* official contact information is confirmed;
* reservation workflow is approved;
* live music publication process is understood;
* production media candidates are classified;
* unresolved items are documented.

Unresolved items may remain, but they must not be silently treated as verified.

---

# 6. Phase 1 — Project Documentation Foundation

## Objective

Create the persistent project context that guides development and AI-agent behavior.

## Documents

```text
docs/
├── PROJECT.md
├── ARCHITECTURE.md
├── ROADMAP.md
├── DATA-MODEL.md
├── DESIGN-SYSTEM.md
├── CONTENT-INVENTORY.md
├── SECURITY.md
├── AGENT-RULES.md
├── TASKS.md
├── DECISIONS.md
└── OWNER-VERIFICATION-FORM.md
```

## Tasks

1. Finalize project definition.
2. Lock architectural direction.
3. Define implementation roadmap.
4. Define conceptual data model.
5. establish initial design direction.
6. classify known content.
7. document security requirements.
8. establish AI-agent operating rules.
9. create initial task backlog.
10. record approved decisions.

## Completion Gate

Phase 1 is complete when:

* all foundation documents exist;
* major contradictions are resolved;
* scope boundaries are clear;
* AI agents can identify approved and prohibited technologies;
* implementation phases are ordered;
* unresolved business details are marked.

---

# 7. Phase 2 — Repository and Application Initialization

## Objective

Create a clean local project foundation without prematurely building features.

## Recommended Initialization Order

```text
Create Git repository
        ↓
Create Next.js application
        ↓
Confirm TypeScript
        ↓
Confirm Tailwind CSS
        ↓
Install and initialize shadcn/ui
        ↓
Add formatting and quality scripts
        ↓
Create required project directories
        ↓
Copy approved documentation
        ↓
Create environment template
        ↓
Create first clean commit
```

## Initial Technical Tasks

### Repository

* create `gianetto-manila`;
* initialize Git;
* create `.gitignore`;
* create main branch;
* establish commit naming convention.

### Next.js

Initialize with:

* App Router;
* TypeScript;
* `src` directory;
* Tailwind CSS;
* ESLint;
* import alias.

### shadcn/ui

* initialize shadcn/ui;
* confirm primitive configuration;
* add only initial components;
* avoid installing the complete component catalog.

Initial components may include:

```text
Button
Sheet
Dialog
Input
Textarea
Form-related primitives
```

Only install components needed for the first public shell.

### Project Structure

Create only essential directories:

```text
docs/
src/app/
src/components/
src/lib/
src/types/
public/
```

Do not create every future feature folder as an empty directory.

### Quality Commands

Expected commands:

```text
npm run dev
npm run build
npm run lint
```

A dedicated type-check command may be added.

### Environment Template

Create `.env.example` containing variable names only.

Do not add live credentials.

## Deliverables

* running local Next.js application;
* working Tailwind styling;
* working shadcn/ui component;
* documentation stored in repository;
* lint and build commands;
* `.env.example`;
* clean initial Git history.

## Completion Gate

Phase 2 is complete when:

* the application starts locally;
* production build passes;
* lint passes;
* no secrets are committed;
* no database implementation has been invented;
* documentation is accessible inside the repository;
* the initial commit is reviewed.

---

# 8. Phase 3 — Design System and Wireframes

## Objective

Create Gianetto’s original visual system before building complete pages.

## Design Direction

The website should feel:

* warm;
* polished;
* welcoming;
* restaurant-focused;
* celebratory;
* Filipino-Italian;
* modern without looking like a SaaS dashboard.

## Tasks

### Design Tokens

Define:

* primary red;
* warm ivory background;
* charcoal text;
* secondary neutral colors;
* optional olive or muted green accent;
* border colors;
* focus colors;
* status colors;
* spacing scale;
* border radius;
* shadow levels;
* content widths;
* image aspect ratios.

### Typography

Define:

* display serif;
* interface and body sans-serif;
* optional cursive accent;
* heading hierarchy;
* paragraph sizes;
* menu-item typography;
* button typography;
* mobile scaling.

### Core Components

Design:

* primary button;
* secondary button;
* text link;
* header;
* mobile navigation;
* section heading;
* menu-item card;
* featured-dish card;
* branch card;
* event card;
* gallery tile;
* form field;
* notice;
* status badge;
* footer.

### Wireframes

Create wireframes for:

* homepage;
* menu page;
* branch page;
* events page;
* event details;
* reservation form;
* private-event form;
* gallery;
* contact page;
* admin shell.

### Responsive Planning

Define behavior for:

* small mobile;
* large mobile;
* tablet;
* laptop;
* desktop.

## Deliverables

* `DESIGN-SYSTEM.md`;
* approved design tokens;
* typography choices;
* component specifications;
* page wireframes;
* mobile navigation plan;
* image requirements.

## Completion Gate

Phase 3 is complete when:

* visual direction is approved;
* core responsive layouts are defined;
* accessibility contrast is checked;
* public components do not resemble default shadcn styling;
* no copied third-party layout is used;
* Cursor can implement components without inventing visual rules.

---

# 9. Phase 4 — Static Public Website

## Objective

Build the complete public customer journey using temporary typed data.

Supabase should not be required yet.

## Static Data Strategy

Create temporary structured data inside the repository.

Example:

```text
src/data/
├── branches.ts
├── menu.ts
├── events.ts
└── gallery.ts
```

Temporary data must be marked as:

* verified;
* provisional;
* placeholder.

## Implementation Sequence

### Milestone 4.1 — Global Layout

Build:

* root layout;
* metadata foundation;
* header;
* mobile navigation;
* footer;
* page container;
* official-site notice;
* error page;
* not-found page.

### Milestone 4.2 — Homepage

Build sections in order:

```text
Hero
Restaurant Introduction
Featured Dishes
Branch Selection
Upcoming Live Music and Events
Dining Experience
Private Events
Gallery Preview
Reservation Call to Action
Footer
```

### Milestone 4.3 — Menu

Build:

* menu heading;
* branch selector, when required;
* category navigation;
* menu-item cards;
* price display;
* availability notice;
* dietary-label display;
* empty state;
* mobile category behavior.

### Milestone 4.4 — Branches

Build:

* branches listing;
* branch card;
* branch detail template;
* address;
* hours;
* call action;
* map action;
* parking information;
* featured dishes;
* branch events;
* branch gallery;
* reservation action.

### Milestone 4.5 — Live Music and Events

Build:

* upcoming-events page;
* event card;
* event details page;
* event branch label;
* date and time;
* performer;
* reservation instructions;
* cancelled state;
* no-upcoming-events state.

### Milestone 4.6 — Reservation and Private-Event Pages

Build interface-only forms:

* form layout;
* field labels;
* helper text;
* privacy consent;
* submission disclaimer;
* validation-message presentation;
* success-state design;
* error-state design.

No real database submission is needed yet.

### Milestone 4.7 — Supporting Pages

Build:

* our story;
* gallery;
* contact;
* privacy;
* terms or website notice.

## Deliverables

* complete static public website;
* responsive layouts;
* typed temporary data;
* accessible navigation;
* reusable public components;
* basic metadata.

## Completion Gate

Phase 4 is complete when:

* all public routes exist;
* mobile and desktop journeys work;
* the menu is readable;
* branches are easy to find;
* upcoming events are visible;
* forms have complete interfaces;
* no database is required to demonstrate the public experience;
* lint and build pass.

---

# 10. Phase 5 — Supabase Foundation

## Objective

Create the managed backend and security foundation.

## Tasks

### Supabase Environment

Create:

* development Supabase project;
* staging project later;
* production project only near launch.

### Local Configuration

Add:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

Add privileged credentials only when required.

### Supabase Clients

Create:

```text
src/lib/supabase/server.ts
src/lib/supabase/browser.ts
```

Add middleware or session-refresh support only when authentication begins.

### Database Migrations

Create version-controlled migrations for:

```text
profiles
staff_branch_assignments
branches
business_hours
menu_categories
menu_items
menu_item_branch_settings
events
reservation_inquiries
private_event_inquiries
media_assets
gallery_entries
promotions
site_content
audit_logs
```

The first migration may be divided into several controlled migrations.

### Seed Data

Create seed data using:

* confirmed branches;
* approved categories;
* clearly marked development menu records;
* clearly marked development events;
* development owner profile.

### Row Level Security

Enable RLS on exposed tables.

Create public-read policies only for published and approved content.

Do not enable public direct access to inquiry records.

### Storage

Create approved storage structure for:

* brand assets;
* menu images;
* branch images;
* event posters;
* gallery images;
* promotion images.

## Deliverables

* connected development Supabase project;
* version-controlled migrations;
* database types;
* seed data;
* RLS policies;
* storage structure;
* documented environment configuration.

## Completion Gate

Phase 5 is complete when:

* migrations run successfully;
* seed data loads;
* public users can read only approved content;
* private records remain inaccessible;
* no privileged key appears in client code;
* database types are generated;
* security tests cover basic RLS behavior.

---

# 11. Phase 6 — Dynamic Branches and Menu

## Objective

Replace static branch and menu data with Supabase-backed content.

## Implementation Sequence

### Milestone 6.1 — Branch Queries

Implement:

* get active branches;
* get branch by slug;
* get business hours;
* get branch contact information;
* get branch map information.

### Milestone 6.2 — Menu Queries

Implement:

* get published categories;
* get published menu items;
* get featured menu items;
* get menu items by category;
* get menu items by branch.

### Milestone 6.3 — Branch-Specific Menu Settings

Implement:

* branch availability;
* price overrides;
* branch featured state;
* branch display ordering.

### Milestone 6.4 — Page Integration

Replace temporary data on:

* homepage;
* menu page;
* branch listing;
* branch pages;
* featured dishes.

### Milestone 6.5 — Cache Strategy

Define and test:

* menu cache;
* branch cache;
* homepage featured-content cache;
* revalidation rules.

## Deliverables

* dynamic menu;
* dynamic branches;
* typed database query functions;
* branch-specific availability;
* branch-specific price handling;
* fallback and empty states.

## Completion Gate

Phase 6 is complete when:

* changing a menu record changes the public website;
* inactive branches do not appear;
* unpublished menu items do not appear;
* branch-specific availability works;
* price overrides work;
* public pages remain fast and server-rendered.

---

# 12. Phase 7 — Dynamic Live Music and Events

## Objective

Connect the live music and events experience to Supabase.

## Tasks

### Event Queries

Implement:

* get upcoming published events;
* get featured events;
* get events by branch;
* get event by slug;
* get past events, only when approved;
* classify event date status.

### Public Integration

Connect:

* homepage upcoming-events section;
* events listing;
* event details;
* branch upcoming-events sections.

### Event States

Support:

```text
DRAFT
PUBLISHED
CANCELLED
COMPLETED
```

### Event Media

Display posters only when:

* media exists;
* ownership is acceptable;
* `approved_for_web` is true.

### Time Handling

Confirm:

* timezone behavior;
* event date boundaries;
* completed-event behavior;
* cancelled-event behavior.

## Deliverables

* dynamic upcoming events;
* branch event listings;
* event detail pages;
* cancellation state;
* empty state;
* featured-event behavior.

## Completion Gate

Phase 7 is complete when:

* draft events remain private;
* published events appear correctly;
* branch filtering works;
* cancelled events display correctly;
* completed events leave the upcoming list;
* unapproved posters do not appear.

---

# 13. Phase 8 — Reservation and Private-Event Inquiries

## Objective

Create secure public submission workflows.

## Reservation Workflow Tasks

Implement:

* reservation Zod schema;
* server-side form processing;
* normalized fields;
* reference-number generation;
* database insertion;
* success result;
* safe error handling;
* privacy consent;
* submission disclaimer.

## Private-Event Workflow Tasks

Implement:

* private-event Zod schema;
* event-type handling;
* optional organization information;
* guest-count validation;
* preferred branch;
* preferred date and time;
* database insertion;
* reference-number generation.

## Anti-Abuse Tasks

Add:

* honeypot;
* rate limiting;
* maximum lengths;
* invalid date rejection;
* duplicate-submission consideration;
* safe server logs.

CAPTCHA should be deferred unless abuse occurs.

## Optional Notifications

Add email notification only after database insertion works reliably.

The database remains the source of truth.

## Deliverables

* working reservation inquiry;
* working private-event inquiry;
* server-side validation;
* secure database storage;
* submission reference numbers;
* privacy acknowledgement;
* user-friendly success and failure states.

## Completion Gate

Phase 8 is complete when:

* valid submissions are stored;
* invalid submissions are rejected;
* public users cannot read inquiry records;
* duplicate rapid submissions are limited;
* customer-facing language does not imply automatic confirmation;
* notifications do not control whether data is saved.

---

# 14. Phase 9 — Staff Authentication and Admin Foundation

## Objective

Create the secure administration shell.

## Tasks

### Authentication

Implement:

* staff sign-in;
* sign-out;
* session handling;
* password recovery;
* inactive-profile rejection.

### Profile and Role Handling

Support:

```text
OWNER
ADMIN
CONTENT_MANAGER
BRANCH_MANAGER
```

### Route Protection

Protect:

```text
/admin
/admin/*
```

### Admin Layout

Build:

* admin header;
* sidebar;
* mobile admin navigation;
* authenticated user display;
* role display;
* branch context;
* unauthorized state.

### Permission Utilities

Create reusable permission checks.

Examples:

```text
canManageMenu
canManageBranch
canManageEvent
canViewReservation
canManageMedia
canManageStaff
```

## Deliverables

* secure staff sign-in;
* protected admin routes;
* role-aware admin shell;
* branch assignment retrieval;
* reusable permission layer.

## Completion Gate

Phase 9 is complete when:

* unauthenticated users cannot access admin routes;
* inactive users are blocked;
* staff roles are retrieved server-side;
* branch assignments are enforced;
* admin shell works on mobile and desktop;
* RLS remains effective even when UI checks are bypassed.

---

# 15. Phase 10 — Administration Modules

## Objective

Allow staff to manage essential operational content.

## Recommended Implementation Order

```text
Menu Management
        ↓
Branch Management
        ↓
Event Management
        ↓
Reservation Inquiries
        ↓
Private-Event Inquiries
        ↓
Staff Management
        ↓
Audit Log Viewer
```

## Milestone 10.1 — Menu Management

Implement:

* categories list;
* create category;
* edit category;
* category ordering;
* item list;
* create item;
* edit item;
* publish or unpublish item;
* availability;
* price overrides;
* featured status.

## Milestone 10.2 — Branch Management

Implement:

* branch list;
* branch edit;
* contact details;
* operating hours;
* map link;
* parking information;
* active status.

## Milestone 10.3 — Event Management

Implement:

* event list;
* create event;
* edit event;
* select branch;
* performer;
* date and time;
* poster selection;
* draft;
* publish;
* cancel;
* mark completed;
* feature on homepage.

## Milestone 10.4 — Reservation Management

Implement:

* inquiry list;
* branch filtering;
* status filtering;
* inquiry details;
* assigned staff;
* status updates;
* contact history only when approved.

## Milestone 10.5 — Private-Event Management

Implement:

* inquiry list;
* branch filtering;
* event-type filtering;
* details;
* status updates;
* assignment.

## Milestone 10.6 — Staff Access

Owner-level capability:

* view staff;
* activate or deactivate profile;
* assign role;
* assign branch.

Do not build an unnecessarily complex human-resources module.

## Milestone 10.7 — Audit Logs

Implement:

* audit list;
* action filter;
* actor filter;
* date filter;
* entity reference;
* read-only access.

## Deliverables

* usable administration MVP;
* role-based content management;
* branch-scoped access;
* audit logs for critical mutations.

## Completion Gate

Phase 10 is complete when:

* owner can update business content without editing code;
* branch managers cannot manage unrelated branches;
* content managers cannot access prohibited customer records;
* important mutations create audit logs;
* public pages update after approved changes;
* admin forms pass validation and permission tests.

---

# 16. Phase 11 — Media, Gallery, and Promotions

## Objective

Create controlled management of approved visual and promotional content.

## Media Tasks

Implement:

* upload interface;
* file validation;
* storage path generation;
* media metadata;
* ownership classification;
* web approval;
* alt text;
* photographer credit;
* branch relationship.

## Gallery Tasks

Implement:

* gallery entry creation;
* approved-media selection;
* caption;
* branch assignment;
* display order;
* publish or unpublish.

## Promotion Tasks

Implement:

* promotion title;
* copy;
* date range;
* branch assignment;
* approved media;
* publication state;
* homepage feature state.

## Deliverables

* media library;
* ownership-aware upload flow;
* gallery management;
* promotion management;
* public gallery integration;
* public promotion integration.

## Completion Gate

Phase 11 is complete when:

* unapproved media cannot appear publicly;
* file types and sizes are validated;
* media ownership is recorded;
* gallery entries use approved assets;
* promotions respect publication dates;
* event posters remain separate from general gallery content.

---

# 17. Phase 12 — Quality Assurance and Security Review

## Objective

Verify that the system is ready for client acceptance.

## Functional Testing

Test:

* all public routes;
* menu filters;
* branch pages;
* event pages;
* reservation submission;
* private-event submission;
* staff sign-in;
* permissions;
* CRUD operations;
* publication controls;
* media approval;
* audit logging.

## Responsive Testing

Test:

* Xiaomi Redmi 12C-sized viewport;
* common mobile widths;
* tablet;
* laptop;
* desktop.

## Accessibility Testing

Review:

* heading order;
* keyboard navigation;
* focus states;
* form labels;
* validation errors;
* contrast;
* dialog behavior;
* alternative text;
* table accessibility.

## Security Testing

Test:

* unauthenticated admin access;
* inactive staff;
* cross-branch access;
* direct Supabase access;
* inquiry privacy;
* RLS policies;
* public-write restrictions;
* service-role exposure;
* unsafe upload types;
* rate limiting.

## Performance Testing

Review:

* image sizes;
* page loading;
* client JavaScript;
* slow queries;
* missing indexes;
* unnecessary database requests;
* caching behavior.

## Content Testing

Verify:

* addresses;
* hours;
* contacts;
* prices;
* branch status;
* event schedules;
* performer names;
* reservation disclaimer;
* image rights;
* spelling and grammar.

## SEO Testing

Verify:

* titles;
* descriptions;
* canonical URLs;
* sitemap;
* robots configuration;
* branch metadata;
* event metadata;
* social preview images.

## Completion Gate

Phase 12 is complete when:

* critical bugs are resolved;
* no known unauthorized access remains;
* public content is verified;
* client-testing build is stable;
* lint, type-check, tests, and production build pass.

---

# 18. Phase 13 — Client Acceptance

## Objective

Allow Gianetto management to review and approve the complete website.

## Client Review Areas

### Public Website

* brand appearance;
* homepage content;
* menu;
* branches;
* events;
* forms;
* gallery;
* contact details;
* mobile experience.

### Administration Portal

* sign-in;
* menu updates;
* branch updates;
* event publication;
* inquiry management;
* image management.

### Operational Review

Confirm:

* who receives inquiries;
* who maintains events;
* who updates prices;
* who approves images;
* who owns production accounts;
* who provides ongoing support.

## Deliverables

* staging website;
* client walkthrough;
* issue list;
* correction list;
* final approval checklist;
* account-ownership plan.

## Completion Gate

Phase 13 is complete when the authorized client representative approves:

* business information;
* menu;
* branches;
* events;
* media;
* functionality;
* administrative access;
* launch readiness.

---

# 19. Phase 14 — Production Launch

## Objective

Publish Gianetto’s official website safely.

## Tasks

### Production Accounts

Confirm business ownership of:

* domain;
* hosting;
* Supabase organization;
* Supabase production project;
* production email;
* analytics;
* administrator account.

### Production Setup

* create production environment;
* apply migrations;
* create production storage;
* configure RLS;
* create owner account;
* import verified content;
* configure production environment variables;
* configure custom domain.

### Final Verification

Check:

* production URLs;
* HTTPS;
* forms;
* email notifications;
* maps;
* click-to-call;
* social links;
* event dates;
* menu prices;
* privacy notice;
* analytics;
* error logs.

### Launch

* publish website;
* announce official website through Gianetto channels;
* monitor errors;
* monitor inquiry submissions;
* provide owner handover.

## Deliverables

* official live website;
* production database;
* owner-controlled accounts;
* backup and recovery notes;
* maintenance guide;
* launch checklist.

## Completion Gate

Phase 14 is complete when:

* the official domain is live;
* client owns or controls production accounts;
* real inquiries work;
* critical logs are monitored;
* owner can access the admin portal;
* handover documentation is complete.

---

# 20. Phase 15 — Portfolio Packaging

## Objective

Turn the completed client project into a professional freelance portfolio case study.

## Portfolio Materials

Create:

* project summary;
* client problem;
* research findings;
* unofficial-site risk explanation;
* copyright-aware media process;
* architecture diagram;
* technology rationale;
* public website screenshots;
* mobile screenshots;
* admin screenshots;
* live-events workflow;
* menu-management workflow;
* security overview;
* before-and-after comparison;
* project challenges;
* lessons learned;
* future roadmap;
* short demonstration video.

## Confidentiality Rules

Do not publish:

* customer inquiry data;
* staff email addresses;
* internal contact details;
* service credentials;
* private business information;
* unapproved financial or operational information.

## Client Approval

Obtain approval before publishing:

* business name as a portfolio client;
* screenshots;
* testimonial;
* internal admin views;
* business outcomes.

## Completion Gate

Phase 15 is complete when:

* case study is published;
* technical README is complete;
* sensitive data is removed;
* screenshots are polished;
* client approval is documented.

---

# 21. Recommended Cursor Task Sequence

The following is the recommended first implementation sequence.

## Initialization Tasks

```text
TASK-001
Initialize the Next.js repository.

TASK-002
Add approved project documentation.

TASK-003
Initialize shadcn/ui.

TASK-004
Create the base directory structure.

TASK-005
Create the environment template.

TASK-006
Add type-check and quality scripts.

TASK-007
Create the base application metadata.
```

## Design Foundation Tasks

```text
TASK-008
Implement approved design tokens.

TASK-009
Configure typography.

TASK-010
Create the base page container.

TASK-011
Create the primary and secondary button variants.

TASK-012
Create the section-heading component.

TASK-013
Create the responsive public header.

TASK-014
Create the mobile navigation.

TASK-015
Create the public footer.
```

## Public Website Tasks

```text
TASK-016
Create typed temporary branch data.

TASK-017
Create the branch-card component.

TASK-018
Create the branch listing page.

TASK-019
Create the branch detail template.

TASK-020
Create typed temporary menu data.

TASK-021
Create the menu-item card.

TASK-022
Create menu category navigation.

TASK-023
Create the menu page.

TASK-024
Create typed temporary event data.

TASK-025
Create the event-card component.

TASK-026
Create the events listing page.

TASK-027
Create the event detail page.

TASK-028
Create the homepage hero.

TASK-029
Create the homepage featured-dishes section.

TASK-030
Create the homepage branch section.

TASK-031
Create the homepage upcoming-events section.

TASK-032
Create the homepage dining-experience section.

TASK-033
Create the homepage private-events section.

TASK-034
Create the homepage gallery preview.

TASK-035
Create the homepage reservation call to action.
```

## Form Interface Tasks

```text
TASK-036
Create the reservation form interface.

TASK-037
Create the private-event form interface.

TASK-038
Create shared form field components.

TASK-039
Create public success and error states.
```

## Supporting Page Tasks

```text
TASK-040
Create the Our Story page.

TASK-041
Create the Gallery page.

TASK-042
Create the Contact page.

TASK-043
Create the Privacy page.

TASK-044
Create the website Terms and Notice page.

TASK-045
Create the not-found page.

TASK-046
Create the application error boundary.
```

Only after this sequence should Supabase integration begin.

---

# 22. Standard Cursor Task Prompt

Use this format for most development tasks:

```text
TASK
[One precise task]

READ FIRST
- docs/PROJECT.md
- docs/ARCHITECTURE.md
- docs/ROADMAP.md
- docs/DESIGN-SYSTEM.md
- docs/AGENT-RULES.md
- docs/TASKS.md

OBJECTIVE
[Describe the exact result.]

ALLOWED SCOPE
- [Exact file or directory]
- [Related test file]
- [Required shared type only]

REQUIREMENTS
- Follow the approved architecture.
- Use TypeScript.
- Keep public content server-rendered unless interaction requires a Client Component.
- Use existing design tokens.
- Use semantic and accessible markup.
- Handle missing or optional data.
- Do not introduce unverified restaurant claims.

DO NOT
- Install packages.
- Modify unrelated files.
- Change the architecture.
- Add database code unless requested.
- Add authentication unless requested.
- Add new colors or fonts.
- Copy third-party website layouts.
- Create placeholder claims that look verified.
- Convert parent layouts into Client Components unnecessarily.

ACCEPTANCE CRITERIA
- TypeScript passes.
- Lint passes.
- Production build passes when applicable.
- Mobile and desktop layouts work.
- The component or feature is reusable.
- Empty and missing-data states are handled.
- No unrelated changes are included.

BEFORE EDITING
1. Explain the implementation plan.
2. Identify the exact files to create or modify.
3. State any assumptions.
4. Wait for approval before making changes.

AFTER EDITING
1. Run the relevant checks.
2. Summarize files changed.
3. Summarize decisions made.
4. Report tests performed.
5. Report remaining issues.
6. Suggest the next single task only.
```

---

# 23. Commit Strategy

Each completed task should normally produce one commit.

Recommended commit types:

```text
docs:
chore:
feat:
fix:
refactor:
test:
style:
security:
```

Examples:

```text
docs: add approved system roadmap

chore: initialize Next.js application

feat: add responsive public navigation

feat: add static menu page

feat: connect public menu to Supabase

security: enforce branch-scoped event access

fix: prevent cancelled events from appearing as upcoming
```

Do not combine unrelated features in one commit.

---

# 24. Branch Strategy

For a solo project, keep Git simple.

Recommended branches:

```text
main
feature/<task-name>
fix/<issue-name>
```

Examples:

```text
feature/public-header
feature/menu-item-card
feature/supabase-branches
fix/event-date-classification
```

A separate development branch is optional.

Do not create an enterprise-level branching model for a solo MVP.

---

# 25. Task Status Model

Use the following task statuses in `docs/TASKS.md`:

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

Each task should include:

* task ID;
* title;
* phase;
* status;
* dependencies;
* allowed scope;
* acceptance criteria;
* notes.

---

# 26. Blocker Handling

A task is blocked when it depends on:

* unverified business information;
* missing image rights;
* unavailable Supabase access;
* unresolved architecture conflict;
* missing client approval;
* another incomplete task.

Blocked tasks must not be silently bypassed.

Document:

```text
Blocker
Impact
Required decision
Temporary workaround, if safe
Responsible person
```

---

# 27. Scope-Control Rules

The following may not enter the active roadmap without an approved decision:

* table inventory;
* automatic reservation confirmation;
* event ticketing;
* online payments;
* point-of-sale integration;
* delivery ordering;
* customer accounts;
* loyalty program;
* employee scheduling;
* inventory;
* procurement;
* payroll;
* mobile application;
* microservices;
* realtime subscriptions.

New ideas should be placed in:

```text
Future Considerations
```

They must not be implemented automatically.

---

# 28. Roadmap Review Schedule

Review the roadmap:

* after content verification;
* after static public prototype;
* after Supabase integration;
* before administration development;
* before staging;
* after client acceptance;
* after production launch.

Each review should answer:

1. Is the current phase complete?
2. Are business assumptions still correct?
3. Has scope changed?
4. Are new risks visible?
5. Does the architecture still fit?
6. What is the next smallest deliverable?

---

# 29. Immediate Current Position

Current progress:

```text
Phase 0 — Business and content verification
Status: IN_PROGRESS

Phase 1 — Project documentation foundation
Status: DONE

Phase 2 — Repository and application initialization
Status: DONE

Phase 3 — Design system and wireframes
Status: DONE

Phase 4 — Static public website (Version 0.2)
Status: REVIEW (static prototype complete; pending JL's local visual
review before Phase 4 is marked fully DONE, per the demo-first review
sequence in Section 55 of AGENT-RULES.md and ADR-083)
```

All eleven foundation documents (`docs/`) are complete. All Phase 4
static-prototype tasks (TASK-043 through TASK-074) are recorded DONE in
`docs/TASKS.md`, including the tasks completed through a documented
Safe Temporary or Development Option. No Phase 0 verification task has
been closed by this work — TASK-001 through TASK-011 remain BLOCKED or
READY pending owner input, and production content/publication still
requires Gianetto owner approval.

Phase 5 (Supabase Foundation) has not begun.