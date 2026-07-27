# Gianetto Official Restaurant Website
## System Architecture

**Project:** Gianetto Official Restaurant Website  
**Architecture style:** Server-first modular monolith  
**Application framework:** Next.js App Router with TypeScript  
**Backend platform:** Supabase  
**Database:** PostgreSQL through Supabase  
**Authentication:** Supabase Auth for authorized staff  
**Media storage:** Supabase Storage  
**UI foundation:** Tailwind CSS, customized shadcn/ui components, and Gianetto design tokens  
**Document status:** Approved working architecture  
**Last updated:** July 2026  

---

## 1. Document Purpose

This document defines the technical architecture for the Gianetto Official Restaurant Website.

It establishes:

- the application boundaries;
- the responsibilities of Next.js and Supabase;
- the internal feature modules;
- the public and administrative application surfaces;
- the data-access strategy;
- the rendering strategy;
- the authentication and authorization model;
- the security layers;
- the media-management model;
- the request and mutation flows;
- the environment and deployment model;
- the architectural constraints that AI coding agents must follow.

This document is the primary source of truth for technical implementation decisions.

When generated code conflicts with this document, the code must be corrected unless an approved architecture decision explicitly changes the direction.

---

# 2. Architecture Summary

Gianetto will be implemented as a **server-first modular monolith**.

```text
Public Customers
        │
        ▼
Next.js Public Website
        │
        ├── Server-rendered menu and branch content
        ├── Live music and event listings
        ├── Reservation inquiry forms
        ├── Private-event inquiry forms
        └── Gallery and promotional content
        │
        ▼
Next.js Application Layer
        │
        ├── Validation
        ├── Authorization
        ├── Domain services
        ├── Server Actions
        ├── Route Handlers
        ├── Error handling
        └── Cache invalidation
        │
        ▼
Supabase
        ├── PostgreSQL
        ├── Staff authentication
        └── Media storage
````

The same Next.js application will also contain the protected administration portal.

```text
Authorized Gianetto Staff
        │
        ▼
Protected Next.js Admin Portal
        │
        ├── Menu management
        ├── Branch management
        ├── Event management
        ├── Inquiry management
        ├── Gallery and media management
        ├── Promotion management
        └── Staff-access management
        │
        ▼
Application Authorization Layer
        │
        ▼
Supabase RLS and Database Constraints
```

---

# 3. Architectural Style

## 3.1 Modular Monolith

The application will remain one deployable Next.js system.

```text
One repository
One Next.js application
One public website
One protected admin portal
One Supabase project per environment
One deployment pipeline
```

Internally, the application will be divided into independent feature modules.

```text
Authentication
Branches
Menu
Live Music and Events
Reservations
Private Events
Gallery
Media
Promotions
Administration
Audit Logging
```

Each feature should have clear internal responsibilities but must not be deployed as a separate service.

## 3.2 Why a Modular Monolith

This architecture is appropriate because Gianetto requires:

* a public website;
* a structured relational database;
* secure staff administration;
* branch-specific information;
* manageable deployment;
* low operational complexity;
* room for future features without premature distributed architecture.

A microservices architecture would create unnecessary complexity involving:

* multiple deployments;
* service-to-service communication;
* distributed authentication;
* independent logging;
* increased hosting costs;
* more difficult debugging;
* more AI-generated architectural inconsistency.

Microservices are therefore explicitly excluded unless future operational requirements clearly justify them.

---

# 4. Architecture Principles

All implementation must follow these principles.

## 4.1 Server First

Public pages should use Server Components by default.

Client Components should be introduced only when browser-side interaction is necessary.

Appropriate Client Component use cases include:

* mobile navigation;
* menu filters;
* branch selectors;
* calendars and date pickers;
* interactive forms;
* gallery dialogs;
* admin data tables;
* client-side previews.

The following should generally remain server-rendered:

* branch information;
* menu data;
* event information;
* restaurant story;
* gallery records;
* promotions;
* SEO metadata;
* page headings and content.

## 4.2 Thin Pages, Feature-Owned Logic

Route files should coordinate page rendering but should not contain large amounts of business logic.

```text
Route
  ↓
Feature query or service
  ↓
Supabase data access
  ↓
Typed result
  ↓
Page component
```

## 4.3 Validate Every Mutation

Every create, update, and delete operation must be validated on the server.

The browser must never be treated as a trusted source.

Zod schemas should validate:

* field formats;
* required values;
* string lengths;
* number limits;
* dates and times;
* identifiers;
* enumerated values;
* role-sensitive inputs.

## 4.4 Layered Authorization

Authorization must exist at multiple levels:

```text
Route protection
        ↓
Server-side role and ownership check
        ↓
Supabase Row Level Security
        ↓
Database constraints
```

No single layer should be treated as the only protection.

## 4.5 Verified Content Only

The architecture must distinguish:

* verified production content;
* draft content;
* unverified imported information;
* temporary development placeholders.

Only published and approved records may appear on the public website.

## 4.6 Minimum Necessary Data

The system should collect only the customer information required to process:

* table reservation inquiries;
* private-event inquiries;
* requested communications.

Unnecessary customer profiling is outside the project scope.

## 4.7 No Premature Realtime

The system will not initially use realtime database subscriptions.

Menu items, branch information, event listings, and inquiries do not require continuous live synchronization for the MVP.

Normal page refreshes and deliberate cache invalidation are sufficient.

## 4.8 No Direct Database Management for Restaurant Staff

Restaurant staff should manage content through the protected admin portal.

They should not be expected to:

* edit raw database rows;
* write SQL;
* manage Supabase policies;
* access service keys;
* work directly inside storage buckets.

---

# 5. High-Level System Context

```text
┌───────────────────────────────────────────────────────────────┐
│                       EXTERNAL USERS                          │
├───────────────────────────────┬───────────────────────────────┤
│ Customers                     │ Gianetto Staff                │
│                               │                               │
│ • Discover restaurant         │ • Owner                      │
│ • Browse menu                 │ • Administrator              │
│ • Find branches               │ • Content Manager            │
│ • View events                 │ • Branch Manager             │
│ • Submit inquiries            │                               │
└──────────────┬────────────────┴───────────────┬───────────────┘
               │                                │
               ▼                                ▼
┌───────────────────────────────────────────────────────────────┐
│                       NEXT.JS APPLICATION                     │
├───────────────────────────────┬───────────────────────────────┤
│ Public Website                │ Protected Admin Portal        │
│                               │                               │
│ • Home                        │ • Dashboard                   │
│ • Menu                        │ • Menu CRUD                   │
│ • Branches                    │ • Branch CRUD                 │
│ • Events                      │ • Event CRUD                  │
│ • Reservations                │ • Inquiry management          │
│ • Private Events              │ • Gallery and media           │
│ • Gallery                     │ • Promotions                 │
│ • Contact                     │ • Staff access                │
└───────────────────────────────┴───────────────────────────────┘
                               │
                               ▼
┌───────────────────────────────────────────────────────────────┐
│                   APPLICATION SERVICES                        │
├───────────────────────────────────────────────────────────────┤
│ • Data queries                                                │
│ • Mutation services                                           │
│ • Validation                                                  │
│ • Permissions                                                 │
│ • Cache invalidation                                          │
│ • Error normalization                                         │
│ • Audit logging                                               │
└───────────────────────────────┬───────────────────────────────┘
                                │
                                ▼
┌───────────────────────────────────────────────────────────────┐
│                          SUPABASE                             │
├──────────────────────────┬─────────────────┬──────────────────┤
│ PostgreSQL               │ Supabase Auth   │ Supabase Storage │
│                          │                 │                  │
│ • Restaurant data        │ • Staff users   │ • Brand media    │
│ • Inquiry data           │ • Sessions      │ • Food images    │
│ • Role assignments       │ • Identity      │ • Event posters  │
│ • Audit logs             │                 │ • Gallery media  │
└──────────────────────────┴─────────────────┴──────────────────┘
```

---

# 6. Application Surfaces

## 6.1 Public Website

The public website serves customers and search engines.

Primary routes:

```text
/
├── /menu
├── /branches
│   ├── /branches/parqal
│   └── /branches/capitol-commons
├── /events
│   └── /events/[slug]
├── /reservations
├── /private-events
├── /our-story
├── /gallery
├── /contact
├── /privacy
└── /terms
```

The public website must prioritize:

* mobile usability;
* fast content rendering;
* clear branch selection;
* menu discoverability;
* upcoming-event visibility;
* reservation conversion;
* private-event inquiries;
* official-site credibility.

## 6.2 Administration Portal

The administration portal serves authenticated Gianetto staff.

```text
/admin
├── /admin/menu
│   ├── /admin/menu/categories
│   ├── /admin/menu/items
│   └── /admin/menu/availability
├── /admin/branches
├── /admin/events
├── /admin/reservations
├── /admin/private-events
├── /admin/gallery
├── /admin/promotions
├── /admin/media
├── /admin/staff
└── /admin/audit-logs
```

The exact route depth may be simplified during implementation, but feature boundaries must remain clear.

## 6.3 Authentication Routes

```text
/auth
├── /auth/sign-in
├── /auth/callback
├── /auth/forgot-password
└── /auth/reset-password
```

Public customer registration is not included.

---

# 7. Internal Module Architecture

Each feature module should contain only the files needed for that domain.

A feature may include:

```text
features/<feature>/
├── components/
├── queries/
├── actions/
├── schemas/
├── permissions/
├── types/
├── constants/
└── utilities/
```

Not every feature needs every folder.

Folders should be created only when necessary.

---

## 7.1 Branches Module

Responsibilities:

* retrieve active branches;
* retrieve a branch by slug;
* manage branch contact information;
* manage addresses and map links;
* manage branch status;
* manage business hours;
* manage parking and access information;
* enforce branch-specific permissions.

The branch module must not own menu item definitions. It may only manage branch-specific menu relationships.

---

## 7.2 Menu Module

Responsibilities:

* menu categories;
* menu items;
* prices;
* descriptions;
* dietary labels;
* featured items;
* publication status;
* branch-specific availability;
* branch-specific price overrides;
* menu display ordering.

The menu module must support:

```text
One menu item
        ↓
Zero or more branch settings
        ↓
Branch-specific availability or pricing
```

---

## 7.3 Live Music and Events Module

Responsibilities:

* event creation;
* event publication;
* branch assignment;
* performer or band name;
* event date and time;
* event type;
* event poster;
* featured-event selection;
* reservation instructions;
* event cancellation;
* automatic separation of upcoming and past events.

The module is not responsible for:

* performer contracts;
* ticket sales;
* seat allocation;
* online payments;
* talent scheduling.

---

## 7.4 Reservation Module

Responsibilities:

* public reservation inquiry form;
* server-side validation;
* secure database insertion;
* reference-number generation;
* inquiry status;
* branch assignment;
* staff review;
* inquiry notes, when later approved;
* privacy-consent timestamp.

The module must clearly distinguish:

```text
Reservation inquiry
≠
Confirmed restaurant booking
```

---

## 7.5 Private Events Module

Responsibilities:

* public private-event inquiry form;
* event requirements;
* guest count;
* optional organization information;
* preferred branch;
* preferred date and time;
* inquiry status;
* staff assignment;
* branch-level permissions.

The module must not become a full event-planning or contract-management platform during the MVP.

---

## 7.6 Gallery Module

Responsibilities:

* gallery entries;
* captions;
* alt text;
* branch assignment;
* display ordering;
* publication status;
* relationship to approved media assets.

The gallery module does not directly upload files. File ownership belongs to the media module.

---

## 7.7 Media Module

Responsibilities:

* Supabase Storage uploads;
* media metadata;
* source type;
* ownership status;
* publication approval;
* photographer credit;
* performer permission;
* alternative text;
* storage-path management;
* prevention of unapproved public display.

Every public media record must be connected to a valid ownership and approval status.

---

## 7.8 Promotions Module

Responsibilities:

* promotional title;
* promotional copy;
* start and end dates;
* branch assignment;
* publication state;
* promotional media;
* featured status.

Promotions and events must remain distinct.

Example:

```text
Event:
Live acoustic performance on a specific date

Promotion:
Discount or restaurant offer available during a date range
```

---

## 7.9 Authentication Module

Responsibilities:

* staff sign-in;
* sign-out;
* password recovery;
* authenticated session retrieval;
* role retrieval;
* branch assignment retrieval;
* protected-route handling.

The authentication module confirms identity.

The permissions module determines what an authenticated user is allowed to do.

---

## 7.10 Audit Module

Responsibilities:

* record significant administrative actions;
* capture actor identity;
* capture action type;
* capture affected record;
* capture timestamp;
* store relevant non-sensitive metadata.

Examples of auditable actions:

* menu item published;
* price changed;
* branch hours changed;
* event cancelled;
* inquiry status changed;
* staff role changed;
* media approved;
* media removed.

Audit logs are not a complete event-sourcing system.

---

# 8. Rendering Architecture

## 8.1 Server Components by Default

Public pages should be rendered using Server Components unless browser interaction is required.

Example:

```text
/menu
    ↓
Server page component
    ↓
Server-side menu query
    ↓
Published menu records
    ↓
Rendered HTML
```

Advantages:

* reduced client-side JavaScript;
* database credentials remain server-side;
* easier SEO;
* consistent content rendering;
* simpler access to verified server data.

## 8.2 Client Components

Client Components should be isolated and small.

Examples:

```text
MenuFilter
MobileNavigation
GalleryDialog
ReservationDatePicker
AdminDataTableControls
ImagePreview
```

A page must not be converted into a Client Component simply because one child requires interaction.

Preferred structure:

```text
Server Page
├── Server Header
├── Server Menu Data
├── Client Menu Filter
├── Server Menu Item Cards
└── Server Footer
```

## 8.3 Static and Dynamic Rendering

Recommended behavior:

### Mostly static or cached

* homepage restaurant introduction;
* our story;
* branch pages;
* menu pages;
* gallery;
* event pages;
* privacy and terms.

### Dynamic

* admin pages;
* authenticated user-specific pages;
* inquiry lists;
* permission-sensitive content;
* forms that process server mutations.

The final caching configuration will be implemented only after actual data-change requirements are known.

---

# 9. Data-Access Architecture

## 9.1 Supabase Clients

The project may require separate Supabase client utilities.

```text
src/lib/supabase/
├── server.ts
├── browser.ts
├── middleware.ts
└── types.ts
```

### Server client

Used for:

* Server Components;
* Server Actions;
* Route Handlers;
* authenticated server queries;
* permission-sensitive operations.

### Browser client

Used only when browser-side Supabase behavior is necessary.

The browser client must not receive privileged credentials.

### Privileged server client

A service-role client should be avoided unless a specific trusted server operation requires it.

When used, it must:

* remain server-only;
* never be imported into Client Components;
* never be exposed through public environment variables;
* be limited to narrow, documented operations.

## 9.2 Data-Access Functions

Direct Supabase calls should not be scattered across pages and components.

Preferred:

```ts
const menuItems = await getPublishedMenuItems({
  branchSlug,
  categorySlug,
});
```

Avoid:

```ts
// Repeated directly in multiple pages and components
supabase.from("menu_items").select(...)
```

Feature-owned query functions provide:

* consistent filters;
* reusable types;
* centralized error handling;
* easier testing;
* easier future refactoring.

## 9.3 Mutation Services

Mutations should follow:

```text
Input
  ↓
Zod validation
  ↓
Session retrieval
  ↓
Permission check
  ↓
Database mutation
  ↓
Audit log
  ↓
Cache invalidation
  ↓
Typed result
```

---

# 10. Database Responsibility

Supabase PostgreSQL will store structured operational content.

Core tables:

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

The detailed schema belongs in `docs/DATA-MODEL.md`.

---

# 11. Authentication Architecture

## 11.1 Authentication Scope

Only authorized Gianetto staff will have accounts during the MVP.

Public customers will not create accounts.

Staff users authenticate through Supabase Auth.

## 11.2 Staff Profile

Supabase Auth identifies the account.

The application profile stores business-specific information.

```text
auth.users
    ↓
profiles
    ├── full_name
    ├── role
    ├── is_active
    └── business metadata
```

## 11.3 Role Model

Initial roles:

```text
OWNER
ADMIN
CONTENT_MANAGER
BRANCH_MANAGER
```

Role names should be represented consistently in:

* PostgreSQL;
* TypeScript;
* validation schemas;
* permission utilities;
* admin UI.

## 11.4 Branch Assignment

Branch Managers may be assigned to one or more branches through:

```text
staff_branch_assignments
- profile_id
- branch_id
```

Permissions must be based on database assignments, not on branch identifiers sent by the browser.

---

# 12. Authorization Architecture

## 12.1 Owner

May:

* manage all branches;
* manage all menu content;
* manage events;
* manage promotions;
* manage media;
* view all inquiries;
* manage staff roles;
* view audit logs;
* manage business-wide settings.

## 12.2 Administrator

May:

* manage operational content;
* manage all branches;
* manage menu content;
* manage events;
* manage inquiries;
* manage gallery and promotions;
* manage approved media.

Administrator access to owner-level account control may be limited.

## 12.3 Content Manager

May:

* manage approved website copy;
* manage menu descriptions;
* manage gallery entries;
* manage promotions;
* manage event content;
* upload or select media according to policy.

Content Managers should not automatically receive access to customer inquiries.

## 12.4 Branch Manager

May manage only assigned branches.

Possible permissions:

* branch hours;
* branch contact details;
* branch menu availability;
* branch events;
* branch reservation inquiries;
* branch private-event inquiries.

Branch Managers may not:

* manage unrelated branches;
* change global staff roles;
* approve owner-level permissions;
* access audit logs unless explicitly authorized.

---

# 13. Row Level Security Architecture

RLS must be enabled on exposed application tables.

Policies should reflect actual roles and branch assignments.

## 13.1 Public Read Policies

Anonymous visitors may read only records that are:

* active;
* published;
* approved;
* intended for public display.

Examples:

```text
branches.is_active = true

menu_items.is_published = true

events.status = 'PUBLISHED'

media_assets.approved_for_web = true

promotions.is_published = true
```

Public users must not be able to read:

* reservation inquiries;
* private-event inquiries;
* profiles;
* staff assignments;
* audit logs;
* internal notes;
* draft records.

## 13.2 Public Write Policies

The preferred architecture is:

```text
Public browser
    ↓
Next.js server operation
    ↓
Validated insert
    ↓
Supabase database
```

Anonymous direct writes from the browser should not be enabled by default.

## 13.3 Staff Policies

Staff policies should consider:

* authenticated user ID;
* active profile status;
* assigned role;
* assigned branch;
* target record branch.

Example conceptual rule:

```text
Branch Manager may update an event
only when:
- the event belongs to an assigned branch;
- the profile is active;
- the role is BRANCH_MANAGER.
```

RLS policies must be tested independently from application-interface restrictions.

---

# 14. Public Content Publication Model

Operational content should generally include publication fields.

Possible fields:

```text
is_published
published_at
is_active
status
approved_for_web
```

The exact field depends on the entity.

Examples:

### Menu item

```text
is_published = true
```

### Event

```text
status = PUBLISHED
published_at is not null
```

### Media asset

```text
approved_for_web = true
```

### Branch

```text
is_active = true
```

Draft or unverified records must never be exposed through public queries.

---

# 15. Form Architecture

## 15.1 Public Forms

Public forms include:

* reservation inquiry;
* private-event inquiry;
* contact inquiry, when approved.

Recommended flow:

```text
Customer submits form
        ↓
Next.js server operation
        ↓
Validate using Zod
        ↓
Reject spam or excessive requests
        ↓
Normalize input
        ↓
Store inquiry
        ↓
Return reference number
        ↓
Display acknowledgment
```

## 15.2 Form Security

Public forms should support:

* server-side validation;
* maximum field lengths;
* normalized phone and email input;
* honeypot field;
* rate limiting;
* privacy consent;
* generic error responses;
* duplicate-submission handling where appropriate.

CAPTCHA should be added only when necessary.

## 15.3 Public Submission Result

A successful reservation submission must not claim a confirmed booking.

Appropriate response:

> Your reservation inquiry has been received. A Gianetto representative will contact you after checking availability.

## 15.4 Admin Forms

Complex admin forms may use React Hook Form when it adds clear value.

Simple admin actions may use native forms and Server Actions.

Do not use React Hook Form automatically for every form.

---

# 16. Event Architecture

## 16.1 Upcoming Event Query

An upcoming event should generally satisfy:

```text
status = PUBLISHED
event_date is today or later
assigned branch is active
poster media is approved, when displayed
```

## 16.2 Completed Events

Past events should not appear in the main upcoming-events listing.

They may:

* remain available as archived event pages;
* appear in a past-events section;
* be hidden completely.

The final behavior must be confirmed with the owner.

## 16.3 Cancelled Events

Cancelled events may remain publicly visible when customers could already know about them.

They must display a clear cancellation notice.

```text
CANCELLED
This event will no longer proceed as scheduled.
Please contact the branch for assistance.
```

## 16.4 Recurring Events

Recurring schedules are outside the first implementation.

Initial events should be represented as individual records.

A recurrence model may be introduced later only when Gianetto confirms a stable recurring live-music schedule.

---

# 17. Media and Storage Architecture

## 17.1 Storage Buckets

Recommended logical buckets:

```text
brand-assets
menu-images
branch-images
event-posters
gallery-images
promotion-images
```

The actual number of buckets may be reduced if simpler policy management is preferable.

## 17.2 Storage Paths

Recommended organization:

```text
menu-images/
  <menu-item-id>/
    <generated-file-name>

branch-images/
  <branch-id>/
    <generated-file-name>

event-posters/
  <event-id>/
    <generated-file-name>
```

User-provided filenames should not be trusted as final storage paths.

## 17.3 Media Metadata

Supabase Storage stores the file.

The `media_assets` table stores business metadata such as:

* title;
* alt text;
* source type;
* ownership status;
* photographer credit;
* branch relationship;
* web approval;
* uploader;
* creation date.

## 17.4 Public Media Rule

A file existing in Storage does not automatically mean it may appear publicly.

Public display requires:

```text
Storage object exists
        +
media_assets record exists
        +
ownership status is acceptable
        +
approved_for_web = true
```

## 17.5 Upload Validation

Uploads should validate:

* MIME type;
* file extension;
* file size;
* image dimensions where appropriate;
* user permission;
* destination category.

SVG uploads should be restricted or carefully sanitized.

---

# 18. Caching and Revalidation Architecture

Public data changes infrequently compared with page visits.

Suitable content for caching:

* menu categories;
* menu items;
* branch information;
* business hours;
* events;
* promotions;
* gallery entries;
* restaurant story.

After an authorized mutation, the application should invalidate only the affected routes or cache tags.

Example:

```text
Admin updates menu item
        ↓
Database update succeeds
        ↓
Invalidate:
- menu cache
- relevant branch page
- homepage, when featured
```

The exact Next.js caching API must be implemented according to the project version in use.

Avoid relying on implicit caching behavior that has not been documented and tested.

---

# 19. Error-Handling Architecture

## 19.1 Expected Errors

Examples:

* validation failure;
* unauthenticated request;
* insufficient permission;
* record not found;
* duplicate slug;
* unavailable storage object;
* invalid event date;
* failed inquiry submission.

Expected errors should return safe, user-readable results.

## 19.2 Unexpected Errors

Unexpected errors should:

* be logged server-side;
* return a generic message;
* avoid exposing internal queries;
* avoid exposing stack traces;
* avoid exposing database details;
* avoid exposing environment variables.

## 19.3 Error Result Shape

Feature actions should use a consistent result pattern.

Conceptual example:

```ts
type ActionResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
        fieldErrors?: Record<string, string[]>;
      };
    };
```

The exact implementation may change, but consistency is required.

---

# 20. Audit Logging Architecture

Audit logs should be written after a successful administrative mutation.

Possible fields:

```text
id
actor_profile_id
action
entity_type
entity_id
branch_id
summary
metadata
created_at
```

Sensitive customer information should not be copied unnecessarily into audit metadata.

Example actions:

```text
MENU_ITEM_CREATED
MENU_ITEM_UPDATED
MENU_PRICE_CHANGED
MENU_AVAILABILITY_CHANGED

BRANCH_UPDATED
BUSINESS_HOURS_UPDATED

EVENT_CREATED
EVENT_PUBLISHED
EVENT_CANCELLED

RESERVATION_STATUS_CHANGED
PRIVATE_EVENT_STATUS_CHANGED

MEDIA_APPROVED
MEDIA_UNPUBLISHED

STAFF_ROLE_CHANGED
```

---

# 21. Repository Architecture

```text
gianetto-manila/
│
├── docs/
│   ├── PROJECT.md
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   ├── DATA-MODEL.md
│   ├── DESIGN-SYSTEM.md
│   ├── CONTENT-INVENTORY.md
│   ├── SECURITY.md
│   ├── AGENT-RULES.md
│   ├── TASKS.md
│   ├── DECISIONS.md
│   └── OWNER-VERIFICATION-FORM.md
│
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.tsx
│   │   │   ├── menu/
│   │   │   ├── branches/
│   │   │   ├── events/
│   │   │   ├── reservations/
│   │   │   ├── private-events/
│   │   │   ├── our-story/
│   │   │   ├── gallery/
│   │   │   └── contact/
│   │   │
│   │   ├── (admin)/
│   │   │   └── admin/
│   │   │       ├── menu/
│   │   │       ├── branches/
│   │   │       ├── events/
│   │   │       ├── reservations/
│   │   │       ├── private-events/
│   │   │       ├── gallery/
│   │   │       ├── promotions/
│   │   │       ├── media/
│   │   │       └── staff/
│   │   │
│   │   ├── auth/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── public/
│   │   ├── admin/
│   │   └── forms/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── branches/
│   │   ├── menu/
│   │   ├── events/
│   │   ├── reservations/
│   │   ├── private-events/
│   │   ├── gallery/
│   │   ├── promotions/
│   │   ├── media/
│   │   └── audit/
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   ├── validation/
│   │   ├── permissions/
│   │   ├── caching/
│   │   ├── seo/
│   │   ├── errors/
│   │   └── utilities/
│   │
│   ├── config/
│   └── types/
│
├── supabase/
│   ├── migrations/
│   ├── seed.sql
│   └── README.md
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── end-to-end/
│
├── public/
│   ├── brand/
│   └── placeholders/
│
├── .env.example
├── components.json
├── package.json
└── README.md
```

This structure is directional.

Do not create every empty directory during initialization.

Directories should be added when the first real feature requires them.

---

# 22. Dependency Rules

## 22.1 Pages May Import

Pages may import:

* feature queries;
* feature page components;
* shared layout components;
* shared configuration;
* shared utilities.

## 22.2 Components Must Not Own Database Logic

Presentational components must not directly query Supabase.

Avoid:

```text
MenuItemCard
    ↓
Direct database query
```

Prefer:

```text
Menu page or feature query
    ↓
Typed menu data
    ↓
MenuItemCard props
```

## 22.3 Features Must Not Create Circular Dependencies

Examples:

* menu may reference branch identifiers;
* branch pages may display menu results;
* neither module should import internal implementation files from the other.

Shared contracts should move into:

```text
src/types
```

or a small shared domain utility.

## 22.4 Server-Only Code

Files containing:

* secret environment variables;
* privileged Supabase clients;
* administrative mutation services;
* server-only permissions;
* audit-write operations;

must never be imported into Client Components.

---

# 23. Environment Architecture

Recommended environments:

```text
Local Development
Staging
Production
```

## 23.1 Local Development

Purpose:

* feature development;
* schema iteration;
* seed data;
* local testing.

May initially use a dedicated Supabase development project.

## 23.2 Staging

Purpose:

* owner review;
* user acceptance testing;
* content verification;
* pre-launch testing.

Staging must not share production customer inquiries.

## 23.3 Production

Purpose:

* official Gianetto website;
* approved staff accounts;
* real inquiries;
* verified business content.

Production ownership should belong to Gianetto or an authorized representative.

---

# 24. Environment Variables

Expected environment-variable categories:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

SUPABASE_SERVICE_ROLE_KEY
```

The service-role key should be included only when a narrow server-side operation truly requires it.

Other possible variables:

```text
SITE_URL
FORM_RATE_LIMIT_SECRET
EMAIL_PROVIDER_KEY
EMAIL_FROM_ADDRESS
ADMIN_NOTIFICATION_ADDRESS
```

Exact variables will be documented in `.env.example`.

Rules:

* secrets must never be committed;
* browser-safe values must use the public prefix;
* privileged keys must not use the public prefix;
* logs must not print secret values;
* AI agents must not invent live credentials.

---

# 25. Notification Architecture

Email notification is optional for the first release but recommended for inquiries.

Possible flow:

```text
Inquiry stored successfully
        ↓
Server sends notification
        ↓
Assigned branch receives summary
```

The database insert must remain the source of truth.

A notification failure should not erase a successfully stored inquiry.

Notification status may later be recorded separately.

SMS and messaging-platform integrations are outside the MVP unless explicitly approved.

---

# 26. SEO Architecture

Public pages should support:

* page metadata;
* canonical URLs;
* open graph information;
* sitemap;
* robots configuration;
* structured branch information;
* structured restaurant information;
* event metadata;
* image alt text;
* branch-specific titles and descriptions.

Only verified information should be inserted into structured data.

The application must not publish fabricated:

* ratings;
* reviews;
* price ranges;
* founding dates;
* awards;
* performer schedules;
* addresses.

---

# 27. Accessibility Architecture

Accessibility is a cross-cutting requirement.

Public and admin interfaces should include:

* semantic headings;
* landmark regions;
* keyboard navigation;
* visible focus indicators;
* correct form labels;
* descriptive error messages;
* sufficient contrast;
* accessible dialogs;
* table headers;
* alternative text;
* reduced-motion consideration;
* meaningful link text.

shadcn/ui components provide a starting structure but do not replace implementation testing.

---

# 28. Testing Architecture

## 28.1 Unit Tests

Suitable for:

* Zod schemas;
* permission functions;
* data transformers;
* reference-number generation;
* event-date classification;
* status transitions;
* utility functions.

## 28.2 Integration Tests

Suitable for:

* database queries;
* authenticated mutations;
* RLS behavior;
* branch-based access;
* public inquiry insertion;
* media approval rules.

## 28.3 End-to-End Tests

Critical journeys:

```text
Customer browses menu
Customer selects branch
Customer views upcoming event
Customer submits reservation inquiry
Customer submits private-event inquiry

Staff signs in
Staff publishes event
Staff changes menu availability
Staff changes inquiry status
Branch Manager is blocked from another branch
```

## 28.4 Manual Testing

Required for:

* responsive layouts;
* image quality;
* content accuracy;
* mobile interactions;
* screen-reader spot checks;
* owner acceptance.

---

# 29. Performance Architecture

Performance priorities:

* optimized images;
* minimal client JavaScript;
* server-rendered public content;
* cached read-heavy content;
* no unnecessary realtime subscriptions;
* no large UI library bundles;
* paginated admin tables when necessary;
* efficient database indexes;
* selective cache invalidation.

Avoid premature optimization that makes the code difficult to maintain.

Performance should be measured after real pages and images exist.

---

# 30. Deployment Architecture

Recommended deployment:

```text
Git Repository
      ↓
Hosting Platform Build
      ↓
Next.js Application
      ↓
Supabase Production Project
```

The hosting provider will be selected later.

Requirements:

* Next.js support;
* server execution;
* environment-variable management;
* custom-domain support;
* production logs;
* predictable deployment;
* reasonable cost.

The architecture should not depend unnecessarily on proprietary hosting-only behavior.

---

# 31. Backup and Recovery Considerations

Before production launch, the project must document:

* database backup availability;
* media recovery approach;
* migration rollback procedure;
* content export procedure;
* staff-account recovery;
* owner-access recovery;
* domain-account recovery.

The database schema must be represented through version-controlled migrations.

A production database must not be treated as the only copy of the schema.

---

# 32. Observability

The initial system should provide enough information to diagnose:

* failed page loads;
* failed database queries;
* failed form submissions;
* failed authentication;
* failed media uploads;
* notification failures;
* authorization denials.

Logging must not expose:

* passwords;
* access tokens;
* private keys;
* complete customer messages unnecessarily;
* service-role credentials.

Advanced monitoring may be added after launch.

---

# 33. Architectural Decisions Locked for MVP

The following decisions are approved:

```text
ADR-001
Use a server-first modular monolith.

ADR-002
Use Next.js App Router and TypeScript.

ADR-003
Use Tailwind CSS and customized shadcn/ui components.

ADR-004
Use Supabase PostgreSQL, Auth, and Storage.

ADR-005
Do not use Prisma initially.

ADR-006
Do not create customer accounts.

ADR-007
Treat reservations as inquiries, not automatic confirmations.

ADR-008
Include lightweight branch-specific live music and events.

ADR-009
Do not implement event ticketing or performer management.

ADR-010
Use business-owned, licensed, approved, or clearly tracked media only.

ADR-011
Use RLS and server-side authorization together.

ADR-012
Do not introduce microservices or realtime features for the MVP.

ADR-013
Build the public website before the full admin portal.

ADR-014
Use bounded AI-agent tasks and reviewed commits.
```

Detailed decision history will be maintained in `docs/DECISIONS.md`.

---

# 34. Prohibited Architectural Patterns

AI agents and developers must not introduce the following without approval:

* microservices;
* GraphQL;
* separate backend application;
* Prisma;
* Firebase;
* MongoDB;
* customer authentication;
* realtime database subscriptions;
* complex global state libraries;
* direct public access to private inquiry tables;
* direct database calls inside presentation components;
* privileged credentials in browser code;
* untracked third-party image use;
* automatic reservation confirmation;
* event ticketing;
* payment processing;
* POS integration;
* large dependency additions without justification;
* duplicated validation rules across unrelated files;
* unrelated refactors during bounded tasks.

---

# 35. Architecture Review Triggers

The architecture should be formally reviewed when:

* Gianetto requests live table availability;
* online payments are introduced;
* delivery ordering is introduced;
* a POS integration becomes necessary;
* more branches significantly increase complexity;
* multiple restaurant brands use the same system;
* customer accounts become necessary;
* realtime operational workflows become necessary;
* restaurant staff require advanced reporting;
* Supabase limitations materially block requirements;
* the admin portal becomes a broader restaurant operations platform.

These triggers do not automatically require microservices.

They require reassessment.

---

# 36. Definition of Architectural Completion

The architecture foundation is complete when:

* project boundaries are documented;
* approved modules are defined;
* public and admin surfaces are separated;
* Supabase responsibilities are clear;
* server and browser responsibilities are clear;
* data-access conventions are defined;
* authentication and authorization layers are defined;
* media ownership rules are integrated;
* public form flows are defined;
* event publication behavior is defined;
* environments are defined;
* prohibited patterns are documented;
* AI agents can implement bounded tasks without inventing a new architecture.

---

# 37. Current Architecture Decision

The Gianetto Official Restaurant Website will proceed as:

> A server-first Next.js modular monolith containing a public restaurant website and a protected staff administration portal, connected to Supabase PostgreSQL, Supabase Auth, and Supabase Storage.

The application will prioritize:

* verified restaurant information;
* mobile-first public usability;
* structured menus;
* branch-specific content;
* live music and event discovery;
* secure customer inquiries;
* copyright-aware media management;
* simple staff administration;
* controlled technical scope.