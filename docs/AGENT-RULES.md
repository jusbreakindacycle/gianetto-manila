# Gianetto Official Restaurant Website
## AI Agent Operating Rules

**Project:** Gianetto Official Restaurant Website  
**Primary coding environment:** Cursor Free  
**Additional assistance:** Free AI Agent Chats  
**Architecture:** Server-first modular monolith  
**Document status:** Approved working agent policy  
**Last updated:** July 2026  

---

# 1. Document Purpose

This document defines how AI coding agents must work inside the Gianetto project.

It establishes:

- required project context;
- task-scoping rules;
- planning requirements;
- file-access boundaries;
- architecture constraints;
- content-verification rules;
- security restrictions;
- package-installation controls;
- testing expectations;
- documentation responsibilities;
- Git and commit behavior;
- response format;
- failure handling;
- prohibited agent behavior.

The purpose is to prevent AI agents from:

- changing the approved architecture;
- building unrelated features;
- inventing business information;
- introducing inconsistent design;
- weakening security;
- modifying excessive numbers of files;
- installing unnecessary packages;
- producing large, difficult-to-review changes;
- repeatedly rebuilding completed work.

These rules apply to Cursor agents, chat-based coding assistants, and any other AI tool used for implementation.

---

# 2. Primary Agent Principle

Every AI task must follow this sequence:

```text
Read
    ↓
Understand
    ↓
Plan
    ↓
Confirm scope
    ↓
Implement
    ↓
Validate
    ↓
Report
    ↓
Update documentation
```

The agent must not skip directly from the prompt to uncontrolled implementation.

---

# 3. Required Reading Order

Before beginning a project task, the agent must read the documents relevant to the task.

## 3.1 Required for Every Coding Task

```text
docs/PROJECT.md
docs/ARCHITECTURE.md
docs/ROADMAP.md
docs/AGENT-RULES.md
docs/TASKS.md
docs/DECISIONS.md
```

## 3.2 Required for UI Tasks

Also read:

```text
docs/DESIGN-SYSTEM.md
docs/CONTENT-INVENTORY.md
```

## 3.3 Required for Database Tasks

Also read:

```text
docs/DATA-MODEL.md
docs/SECURITY.md
```

## 3.4 Required for Authentication or Authorization Tasks

Also read:

```text
docs/SECURITY.md
docs/DATA-MODEL.md
```

## 3.5 Required for Content Tasks

Also read:

```text
docs/CONTENT-INVENTORY.md
docs/OWNER-VERIFICATION-FORM.md
```

## 3.6 Required for Media Tasks

Also read:

```text
docs/CONTENT-INVENTORY.md
docs/SECURITY.md
docs/DATA-MODEL.md
docs/DESIGN-SYSTEM.md
```

The task prompt may identify a smaller required reading set when the task is extremely limited, but architecture and agent rules must remain available.

---

# 4. Source-of-Truth Priority

When project instructions conflict, use this order:

```text
1. Current explicit instruction from the project owner
2. Approved decision recorded in DECISIONS.md
3. PROJECT.md
4. ARCHITECTURE.md
5. SECURITY.md
6. DATA-MODEL.md
7. DESIGN-SYSTEM.md
8. ROADMAP.md
9. CONTENT-INVENTORY.md
10. TASKS.md
11. Existing code behavior
12. Agent assumption
```

Existing code must not override an approved architecture or security decision merely because it already exists.

When two approved documents conflict, the agent must stop and report the conflict rather than choosing silently.

---

# 5. Task Scope Rule

Each agent task must have one primary objective.

Approved examples:

```text
Create the public BranchCard component.
Add the static events listing page.
Create the reservation Zod schema.
Implement the published menu query.
Add the mobile navigation Sheet.
```

Unapproved task examples:

```text
Build the entire website.
Complete the whole admin portal.
Implement Supabase, authentication, and all CRUD pages.
Redesign all pages and refactor the architecture.
Fix everything that looks wrong.
```

A task should normally affect:

- one component;
- one page;
- one query;
- one schema;
- one migration;
- one focused feature slice.

Large features must be divided into smaller tasks.

---

# 6. Plan-Before-Editing Rule

Before changing files, the agent must provide:

```text
1. Task understanding
2. Exact implementation plan
3. Files to create
4. Files to modify
5. Assumptions
6. Potential risks
7. Required validation commands
```

Example:

```text
PLAN

1. Read the existing branch types and design tokens.
2. Create a reusable server-rendered BranchCard.
3. Accept typed branch details through props.
4. Add phone, directions, and reservation actions.
5. Handle missing landline and missing image.
6. Add a focused component test.

FILES TO CREATE
- src/components/public/branch-card.tsx
- tests/unit/branch-card.test.tsx

FILES TO MODIFY
- None

ASSUMPTIONS
- Branch data is supplied by the parent page.
- The component does not query Supabase directly.
```

When the prompt requires approval before editing, the agent must stop after the plan.

---

# 7. Allowed File Scope

The task prompt must identify the files or directories the agent may modify.

The agent must not change files outside the approved scope unless:

- the required change is impossible without doing so;
- the additional file is directly necessary;
- the agent reports the reason before editing;
- the developer approves the expanded scope.

Example:

```text
ALLOWED SCOPE
- src/components/public/event-card.tsx
- src/features/events/types.ts
- related test file
```

The agent must not also modify:

- global styles;
- unrelated pages;
- database migrations;
- package dependencies;
- authentication;
- other feature components.

---

# 8. Minimal-Diff Rule

The agent should make the smallest correct change.

It must avoid:

- reformatting unrelated files;
- renaming unrelated variables;
- reorganizing directories without approval;
- replacing working patterns with personal preferences;
- rewriting completed components;
- changing imports across the project unnecessarily;
- altering generated files manually;
- modifying lockfiles without a package change.

A task diff should be easy to review and explain.

---

# 9. Architecture Rules

The approved architecture is:

```text
Next.js App Router
TypeScript
Tailwind CSS
Customized shadcn/ui
Supabase PostgreSQL
Supabase Auth
Supabase Storage
Server-first modular monolith
```

Agents must not introduce:

```text
Microservices
Separate backend application
GraphQL
Prisma
Firebase
MongoDB
Customer authentication
Realtime subscriptions
Complex global state libraries
Payment processing
POS integration
Automatic table booking
Event ticketing
```

These require a recorded architecture decision.

---

# 10. Server and Client Component Rules

## 10.1 Server by Default

Pages and public content components should remain Server Components unless browser-side interaction is required.

Appropriate server-rendered content:

- menu data;
- branch data;
- event data;
- restaurant story;
- page metadata;
- gallery records;
- promotions.

## 10.2 Client Components Only When Necessary

Use `"use client"` only for:

- mobile navigation;
- dialogs;
- form state requiring client behavior;
- interactive filters;
- date pickers;
- admin table controls;
- browser-specific functionality.

## 10.3 Do Not Convert Parent Trees Unnecessarily

When a child requires interaction:

```text
Server Page
    ↓
Small Client Component
```

Do not convert the full page or layout into a Client Component for convenience.

## 10.4 No Secret Access in Client Components

Client Components must never import:

- service-role clients;
- secret environment variables;
- server-only authorization utilities;
- privileged mutation services;
- private customer data loaders.

---

# 11. Data-Access Rules

## 11.1 No Database Calls in Presentation Components

Unapproved:

```text
MenuItemCard
    ↓
Direct Supabase query
```

Approved:

```text
Page or feature query
    ↓
Typed menu data
    ↓
MenuItemCard props
```

## 11.2 Feature-Owned Queries

Supabase queries should live inside the relevant feature.

Example:

```text
src/features/menu/queries/get-published-menu-items.ts
```

Avoid scattering equivalent queries across multiple routes.

## 11.3 Typed Results

Queries and actions must use:

- generated Supabase database types;
- project-defined view models;
- explicit return types when useful;
- no unnecessary `any`.

## 11.4 Public Query Filtering

Public queries must return only:

- active branches;
- published menu items;
- published events;
- approved media;
- active promotions.

Draft or internal records must not be returned and hidden only in the interface.

---

# 12. Mutation Rules

Every mutation must follow:

```text
Parse input
    ↓
Validate with Zod
    ↓
Retrieve authenticated identity
    ↓
Retrieve active profile
    ↓
Check role
    ↓
Check branch scope
    ↓
Perform mutation
    ↓
Write audit log when required
    ↓
Revalidate affected content
    ↓
Return safe typed result
```

Agents must not implement shortcuts that bypass:

- validation;
- authentication;
- authorization;
- RLS;
- audit requirements;
- database constraints.

---

# 13. Security Rules

Agents must not:

- disable Row Level Security;
- create broad public read policies;
- expose inquiry tables publicly;
- expose staff profiles publicly;
- use the service-role key in browser code;
- trust browser-supplied roles;
- trust browser-supplied branch assignments;
- log passwords or tokens;
- return database errors to users;
- render customer input as HTML;
- add unrestricted file uploads;
- weaken validation to make tests pass.

Security-sensitive changes require explicit manual review.

---

# 14. Supabase Rules

## 14.1 Approved Supabase Services

```text
PostgreSQL
Auth for staff
Storage for approved media
```

## 14.2 Not Approved Initially

```text
Realtime
Edge Functions
Customer Auth
Complex database webhooks
Uncontrolled public APIs
```

## 14.3 Schema Changes

All schema changes must use version-controlled migrations.

Agents must not:

- change production tables manually;
- create undocumented dashboard-only changes;
- edit generated database types by hand;
- include real credentials;
- include real customer data in seed files.

## 14.4 Service Role

Use only for a narrow approved server-only operation.

Before introducing it, the agent must explain:

- why normal authenticated access is insufficient;
- which function will use it;
- how access is limited;
- why RLS bypass is safe in that operation.

---

# 15. Design-System Rules

The agent must use the approved design system.

It must not invent:

- new brand colors;
- unrelated fonts;
- random shadows;
- inconsistent container widths;
- arbitrary radii;
- generic SaaS page styling;
- neon gradients;
- excessive animations.

Use approved tokens from:

```text
globals.css
shared design configuration
approved component variants
```

When a required visual style does not exist, the agent must report the gap rather than silently creating a one-off pattern.

---

# 16. shadcn/ui Rules

shadcn/ui is a component foundation, not the finished brand.

Agents may use approved shadcn components for:

- buttons;
- forms;
- sheets;
- dialogs;
- selects;
- calendars;
- alerts;
- tables;
- dropdown menus;
- badges;
- admin controls.

Agents must not:

- make the public site look like a default dashboard;
- replace custom restaurant sections with generic cards;
- install all shadcn components at once;
- modify shared UI primitives for one page without checking impact;
- remove accessibility behavior from primitives.

Custom Gianetto components remain required for:

```text
HeroSection
FeaturedDishCard
MenuItemCard
BranchCard
EventCard
DiningExperienceSection
PrivateEventFeature
RestaurantGallery
ReservationCallToAction
SiteFooter
```

---

# 17. Content Rules

Agents must distinguish:

```text
VERIFIED
OBSERVED
PROVISIONAL
HISTORICAL
UNVERIFIED
REJECTED
```

Agents must not invent:

- menu prices;
- branch hours;
- restaurant history;
- founder information;
- branch capacity;
- live band schedules;
- event fees;
- private-event packages;
- awards;
- customer reviews;
- ratings;
- bestselling claims;
- accessibility features.

Temporary development copy must be clearly marked provisional.

---

# 18. Copyright and Media Rules

Agents must not copy into the repository:

- Patikim article photographs;
- article text;
- Scribd screenshots;
- social-media screenshots;
- influencer photographs;
- customer photographs without permission;
- watermarked images;
- unrelated sponsored content;
- performer posters without approval.

Agents may use:

- approved business-owned media;
- commissioned media;
- licensed media;
- permission-cleared customer or performer media;
- clearly marked AI-generated placeholders.

A file showing Gianetto does not automatically mean Gianetto owns it.

---

# 19. AI-Generated Media Rules

AI-generated visuals must be classified as:

```text
AI_GENERATED_PLACEHOLDER
```

They must not:

- falsely represent an actual menu item;
- be presented as documentary photography;
- copy a third-party image;
- reproduce an identifiable private person;
- imply an event occurred when it did not;
- invent interior features.

Production use requires explicit owner approval.

---

# 20. Package Installation Rules

Agents must not install packages without approval.

Before recommending a package, the agent must state:

```text
Package name
Problem it solves
Why existing tools are insufficient
Bundle or runtime impact
Maintenance status
Security considerations
License considerations
Alternative without the package
```

Packages must not be installed merely because:

- the agent is more familiar with them;
- they shorten a small amount of code;
- they are popular;
- they duplicate existing functionality.

The lockfile should change only when dependencies change.

---

# 21. TypeScript Rules

The project must use strict, clear TypeScript.

Agents should:

- avoid `any`;
- use `unknown` when input type is not known;
- narrow values safely;
- use generated database types;
- create explicit domain types where needed;
- model optional values accurately;
- avoid non-null assertions unless logically guaranteed;
- avoid unsafe type casting.

Unapproved:

```ts
const item = data as any;
```

Preferred:

```ts
const parsed = menuItemSchema.parse(data);
```

---

# 22. Validation Rules

Zod is the approved validation library.

Validation schemas should be feature-owned.

Example:

```text
src/features/reservations/schemas/reservation-inquiry-schema.ts
```

Avoid duplicating different rules for the same input across:

- browser form;
- Server Action;
- Route Handler;
- admin form.

Client validation may reuse safe schemas, but authorization logic must remain server-only.

---

# 23. Form Rules

Public forms must include:

- visible labels;
- required indicators;
- accessible error messages;
- server-side validation;
- maximum lengths;
- privacy consent;
- safe success and error responses;
- reservation disclaimer where applicable.

Agents must not claim:

```text
Your table is confirmed.
```

Approved wording:

```text
Your reservation inquiry has been received.
A Gianetto representative will contact you after checking availability.
```

---

# 24. Accessibility Rules

Every task must preserve:

- semantic HTML;
- keyboard access;
- visible focus;
- sufficient contrast;
- form labels;
- meaningful button text;
- appropriate headings;
- alt text;
- accessible dialog behavior;
- comfortable touch targets.

Agents must not:

- remove focus outlines;
- use click-only `div` elements;
- communicate state using color alone;
- embed key event details only inside a poster image;
- use placeholder text as the only field label.

---

# 25. Responsive Rules

Every public component must support:

```text
Small mobile
Standard mobile
Tablet
Laptop
Desktop
```

Mobile is the primary design target.

The agent must consider:

- long branch names;
- long menu names;
- missing images;
- large prices;
- multiple phone numbers;
- event titles;
- stacked actions;
- narrow navigation.

No interaction may depend on hover alone.

---

# 26. Performance Rules

Agents should:

- keep public pages server-rendered;
- minimize Client Components;
- optimize image usage;
- avoid oversized dependencies;
- avoid repeated database requests;
- use selective caching;
- paginate large admin collections;
- avoid unnecessary realtime behavior.

Agents must not prematurely introduce complex caching before the data update behavior is understood.

---

# 27. Testing Rules

The required checks depend on the task.

## 27.1 Standard Checks

```text
npm run lint
npm run type-check
npm run build
```

Use only scripts that exist in the project.

## 27.2 Component Tasks

Also test:

- missing optional values;
- long text;
- mobile layout;
- keyboard behavior;
- loading or empty states when relevant.

## 27.3 Database Tasks

Also test:

- migration success;
- constraints;
- generated types;
- expected query results;
- rollback or safe correction path.

## 27.4 Security Tasks

Also test:

- anonymous access;
- each staff role;
- inactive staff;
- cross-branch attempts;
- direct data access;
- RLS behavior.

## 27.5 Form Tasks

Also test:

- valid submission;
- invalid fields;
- missing consent;
- malicious text input;
- oversized input;
- duplicate submission;
- server error.

The agent must report checks it could not perform.

---

# 28. Generated File Rules

Agents must not manually edit generated files unless the tool explicitly requires it.

Possible generated files include:

- Supabase database types;
- framework build output;
- lockfiles;
- generated shadcn component source after installation.

Generated component source may be customized after addition, but changes must remain deliberate and documented.

Build directories must not be committed unless required by the hosting workflow.

---

# 29. Documentation Update Rules

After completing a task, update the relevant documents when necessary.

## `TASKS.md`

Update:

- status;
- completion date;
- files changed;
- validation performed;
- blockers;
- follow-up task.

## `DECISIONS.md`

Update only when the task introduces or changes a meaningful decision.

Examples:

- choosing one date library;
- changing event archival behavior;
- approving a storage-bucket strategy;
- adding a new staff permission.

## Other Documents

Update when implementation changes:

```text
ARCHITECTURE.md
DATA-MODEL.md
DESIGN-SYSTEM.md
SECURITY.md
CONTENT-INVENTORY.md
ROADMAP.md
```

Do not update documents with claims that are not reflected in code.

---

# 30. Decision Escalation Rule

The agent must stop and request a decision when a task would require:

- new technology;
- new package;
- schema change outside the approved model;
- new role;
- changed permission;
- customer accounts;
- payment processing;
- realtime behavior;
- new external service;
- new public data collection;
- new copyrighted material;
- change to reservation semantics;
- architecture change;
- scope expansion.

The agent must not silently choose.

---

# 31. Assumption Rules

Every assumption must be stated.

Examples:

```text
Assumption: Event end time is optional.
Assumption: The card receives already approved media.
Assumption: No database access is needed for this static task.
Assumption: The branch phone number may be missing.
```

Unsafe assumptions include:

```text
Live music happens every Friday.
Both branches use the same prices.
The supplied photos belong to Gianetto.
The form automatically confirms reservations.
```

Unsafe assumptions must be treated as unresolved questions.

---

# 32. Blocker Rules

When blocked, the agent must report:

```text
BLOCKER
What is missing

IMPACT
What cannot be completed safely

REQUIRED DECISION OR INPUT
What the developer or owner must provide

SAFE TEMPORARY OPTION
Only when one exists

FILES LEFT UNCHANGED
What the agent intentionally did not modify
```

The agent must not bypass a blocker through invention.

---

# 33. Error-Handling Rules

Agents must create safe error behavior.

Public errors must not expose:

- SQL messages;
- stack traces;
- secret names;
- internal file paths;
- private record IDs;
- authorization logic.

Expected errors should have clear user-facing messages.

Unexpected errors should be logged safely on the server.

---

# 34. Logging Rules

Allowed logs:

- operation name;
- safe error code;
- timestamp;
- non-sensitive record identifier;
- success or failure.

Do not log:

- passwords;
- access tokens;
- cookies;
- service keys;
- full customer inquiry text;
- private-event requirements;
- raw authorization headers;
- complete environment configuration.

Temporary debug logs must be removed before task completion.

---

# 35. Git Rules

## 35.1 One Task, One Commit

A completed bounded task should normally produce one commit.

## 35.2 Commit Format

Approved types:

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
feat: add responsive branch card

fix: exclude cancelled events from upcoming list

security: enforce branch-scoped inquiry access

docs: record event publication decision
```

## 35.3 No Unrelated Changes

The commit must not contain unrelated:

- formatting;
- dependencies;
- design changes;
- refactors;
- generated assets.

## 35.4 Do Not Commit Broken Work

Before marking a task complete:

- lint must pass;
- type-check must pass;
- applicable tests must pass;
- build should pass when practical.

---

# 36. Agent Response Format Before Editing

The agent should respond using:

```text
TASK UNDERSTANDING

IMPLEMENTATION PLAN

FILES TO CREATE

FILES TO MODIFY

ASSUMPTIONS

RISKS

VALIDATION PLAN

AWAITING APPROVAL
```

The final line may be omitted when the prompt explicitly authorizes immediate editing.

---

# 37. Agent Response Format After Editing

The completion report should use:

```text
COMPLETED

FILES CREATED
- ...

FILES MODIFIED
- ...

IMPLEMENTATION SUMMARY
- ...

DECISIONS
- ...

VALIDATION PERFORMED
- ...

RESULTS
- ...

REMAINING ISSUES
- ...

DOCUMENTATION UPDATED
- ...

NEXT SINGLE TASK
- ...
```

Do not claim tests passed unless they were actually run successfully.

---

# 38. Agent Failure Reporting

When a command fails, report:

```text
COMMAND
The exact command

RESULT
Exit status or concise failure

LIKELY CAUSE
Evidence-based explanation

FILES AFFECTED
Any partial changes

SAFE NEXT ACTION
One recommended correction
```

The agent must not hide failures or mark the task done.

---

# 39. Refactoring Rules

Refactoring requires a separate task unless it is essential to the current feature.

A refactor task must state:

- why current structure is harmful;
- expected behavior that must remain unchanged;
- exact files affected;
- tests protecting behavior;
- rollback approach.

Do not mix broad refactoring with feature implementation.

---

# 40. Migration Rules

Each database migration task must include:

```text
Purpose
Tables affected
Columns affected
Constraints
Indexes
RLS impact
Data migration requirement
Rollback or corrective migration strategy
Generated type update
Tests
```

Agents must not modify previously applied production migrations.

Corrections require a new migration.

---

# 41. RLS Task Rules

Before writing an RLS policy, the agent must identify:

```text
Actor
Operation
Table
Permitted records
Denied records
Role requirement
Branch requirement
Publication requirement
Test cases
```

Example:

```text
Actor: Anonymous visitor
Operation: SELECT
Table: events
Permit: Published events for active branches
Deny: Draft, cancelled when excluded, and internal fields
```

RLS policies require explicit tests.

---

# 42. Media Task Rules

Before implementing media upload or display, the agent must identify:

```text
Allowed file types
Maximum file size
Storage bucket
Storage path
Who may upload
Who may approve
Ownership field
Public visibility condition
Deletion behavior
Referenced-record behavior
```

The agent must not make an uploaded file public automatically.

---

# 43. Inquiry Task Rules

Before implementing reservation or private-event inquiries, the agent must confirm:

```text
Required fields
Optional fields
Maximum lengths
Initial status
Reference-number format
Privacy consent
Branch validation
Rate limiting
Honeypot
Success wording
Failure wording
Notification behavior
```

An email notification failure must not erase a successful database insert.

---

# 44. Event Task Rules

Before implementing event behavior, the agent must confirm:

```text
Event status
Publication state
Branch
Start time
Optional end time
Performer visibility
Poster approval
Reservation requirement
Cancellation behavior
Past-event behavior
Homepage-feature behavior
```

The agent must not assume recurrence.

---

# 45. Menu Task Rules

Before implementing menu behavior, the agent must confirm:

```text
Category
Default price
Possible branch override
Availability
Publication state
Featured state
Image approval
Variant requirements
Display order
```

If the current menu includes multiple sizes or prices, the agent must report whether `menu_item_variants` is required before inventing a workaround.

---

# 46. Admin Task Rules

Administrative pages must:

- authorize on the server;
- enforce branch scope;
- show safe empty states;
- support mobile use;
- confirm destructive actions;
- validate every mutation;
- create audit logs when required;
- avoid exposing prohibited columns.

A hidden button is not authorization.

---

# 47. Prohibited Agent Actions

Agents must not:

```text
Build the whole project in one task.
Ignore project documents.
Change the approved stack.
Install packages without permission.
Disable lint or TypeScript checks.
Use any to silence errors.
Disable RLS.
Expose service-role credentials.
Expose inquiry data publicly.
Create customer authentication.
Add automatic reservation confirmation.
Add event ticketing.
Add online payment.
Add POS or inventory features.
Copy third-party images or text.
Invent restaurant facts.
Use real customer data in tests.
Modify unrelated files.
Perform broad refactors silently.
Delete production records.
Change production schema manually.
Claim commands passed when they were not run.
```

---

# 48. Cursor Free Usage Strategy

Because free agent requests are limited, tasks should be context-efficient.

Recommended approach:

```text
One task
One focused prompt
One small file scope
One reviewed diff
One commit
Fresh chat for the next feature
```

Avoid repeatedly asking the agent to reread the entire repository when a narrow file set is sufficient.

Do not use an agent request for tasks that can be completed reliably through:

- a small manual edit;
- a direct command;
- formatting;
- renaming one value;
- reviewing a simple diff.

Reserve stronger agent usage for:

- planning;
- multi-file feature logic;
- security-sensitive reasoning;
- database migrations;
- difficult bugs;
- test design.

---

# 49. Standard Task Prompt Template

```text
TASK
[One exact task]

READ FIRST
- docs/PROJECT.md
- docs/ARCHITECTURE.md
- docs/ROADMAP.md
- docs/AGENT-RULES.md
- docs/TASKS.md
- [Other relevant documents]

OBJECTIVE
[Describe the final result.]

ALLOWED SCOPE
- [Exact files or directories]

REQUIREMENTS
- Follow the approved architecture.
- Use TypeScript.
- Keep public content server-rendered unless interaction requires a Client Component.
- Use existing design tokens.
- Use semantic and accessible markup.
- Validate all untrusted input.
- Handle optional and missing data.
- Do not publish unverified Gianetto information.

DO NOT
- Install packages.
- Modify unrelated files.
- Change the architecture.
- Add database code unless requested.
- Add authentication unless requested.
- Create new colors or typography.
- Copy third-party content.
- Weaken security controls.
- Convert parent layouts into Client Components unnecessarily.

ACCEPTANCE CRITERIA
- TypeScript passes.
- Lint passes.
- Applicable tests pass.
- Production build passes when relevant.
- Mobile and desktop behavior works.
- Empty and missing-data states are handled.
- No unrelated changes are included.

BEFORE EDITING
1. Explain the plan.
2. Identify exact files.
3. State assumptions.
4. Identify risks.
5. Wait for approval.

AFTER EDITING
1. Run relevant checks.
2. Report files changed.
3. Report decisions.
4. Report tests.
5. Report unresolved issues.
6. Update TASKS.md when authorized.
7. Suggest one next task.
```

---

# 50. First Cursor Task Template

The first coding task must initialize only the project foundation.

```text
TASK
Initialize the Gianetto Next.js project foundation.

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
Create a clean local Next.js App Router project using TypeScript, Tailwind CSS, ESLint, a src directory, and the approved import alias.

ALLOWED SCOPE
- Repository root
- Initial Next.js-generated files
- package.json
- TypeScript configuration
- ESLint configuration
- src/app foundation
- public directory
- .gitignore
- .env.example

REQUIREMENTS
- Use the approved package manager.
- Use App Router.
- Use TypeScript.
- Use Tailwind CSS.
- Use a src directory.
- Keep the generated homepage minimal.
- Add no Supabase code yet.
- Add no authentication.
- Add no admin portal.
- Add no restaurant content beyond a clearly provisional project title.
- Add quality scripts only when supported by installed tooling.
- Preserve the project documentation.

DO NOT
- Install shadcn/ui yet unless this task explicitly includes it.
- Build the homepage.
- Create database tables.
- Add Prisma.
- Add images from supplied screenshots.
- Add third-party content.
- Add packages beyond the initialization requirements.
- Create every future directory as an empty folder.

ACCEPTANCE CRITERIA
- Development server starts.
- Lint passes.
- Type-check passes.
- Production build passes.
- No secrets are committed.
- The repository contains only the initial foundation.

BEFORE EDITING
Present the exact initialization commands and the files expected to change.
```

---

# 51. Agent Review Checklist

Before accepting an agent-generated change, manually confirm:

```text
Did it follow the requested scope?
Did it modify unrelated files?
Did it install anything?
Did it change architecture?
Did it introduce client components unnecessarily?
Did it invent business content?
Did it weaken security?
Did it use approved design tokens?
Did it handle missing data?
Did it add accessible markup?
Did it run the claimed checks?
Did it update documentation accurately?
Is the diff understandable?
Can the change be reverted cleanly?
```

---

# 52. Task Completion Definition

An AI-assisted task is complete only when:

- the requested feature works;
- the allowed scope was respected;
- no unresolved errors remain hidden;
- validation commands were run;
- failures were disclosed;
- security requirements were preserved;
- content remains verified or clearly provisional;
- documentation reflects meaningful changes;
- the diff was manually reviewed;
- the task is ready for one focused commit.

---

# 53. Locked Agent Decisions

```text
AGENT-001
Every task must be bounded.

AGENT-002
Agents must plan before editing.

AGENT-003
Agents must not expand file scope silently.

AGENT-004
Agents must use the approved architecture.

AGENT-005
Agents must not install packages without approval.

AGENT-006
Agents must not invent Gianetto business information.

AGENT-007
Agents must not use unapproved media.

AGENT-008
Agents must preserve server-first rendering.

AGENT-009
Agents must preserve authentication, authorization, RLS, and validation.

AGENT-010
Agents must report failed checks honestly.

AGENT-011
Agents must update project records when decisions or task statuses change.

AGENT-012
One bounded task should normally produce one reviewed commit.

AGENT-013
AI-generated code is not accepted without manual review.

AGENT-014
Free agent requests should be reserved for work that benefits from codebase reasoning.

AGENT-015
No agent may treat temporary development content as verified production content.
```

---

# 54. Current Agent Operating Decision

Cursor and other AI agents will function as controlled implementation assistants.

They will not act as autonomous project owners.

The human developer remains responsible for:

- approving plans;
- reviewing code;
- controlling scope;
- verifying business information;
- protecting credentials;
- approving dependencies;
- testing changes;
- committing code;
- authorizing production deployment.