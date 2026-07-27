# Gianetto Official Restaurant Website
## Security, Privacy, and Access-Control Requirements

**Project:** Gianetto Official Restaurant Website  
**Architecture:** Server-first modular monolith  
**Application:** Next.js App Router with TypeScript  
**Backend:** Supabase PostgreSQL, Auth, and Storage  
**Document status:** Approved working security baseline  
**Last updated:** July 2026  

---

# 1. Document Purpose

This document defines the security and privacy baseline for the Gianetto Official Restaurant Website.

It establishes:

- security objectives;
- protected assets;
- trust boundaries;
- threat assumptions;
- authentication requirements;
- role-based and branch-based authorization;
- Supabase Row Level Security requirements;
- customer-inquiry protections;
- public-form abuse prevention;
- file-upload and media protections;
- secrets management;
- logging and audit requirements;
- environment isolation;
- dependency controls;
- deployment security;
- backup and recovery considerations;
- incident-response procedures;
- security testing requirements;
- security rules for Cursor and AI coding agents.

This document is not a substitute for professional legal, privacy, or penetration-testing advice.

It defines the minimum security standard that implementation tasks must follow.

---

# 2. Security Objectives

The project must protect the following qualities.

## 2.1 Confidentiality

Only authorized users may access:

- customer reservation inquiries;
- private-event inquiries;
- customer contact details;
- internal staff notes;
- staff profiles;
- branch assignments;
- draft content;
- media-rights notes;
- audit logs;
- privileged configuration.

## 2.2 Integrity

Unauthorized users must not be able to:

- change menu prices;
- change branch information;
- publish or cancel events;
- alter customer inquiries;
- approve media;
- assign staff roles;
- modify audit logs;
- change operational content.

## 2.3 Availability

The website should remain usable for:

- menu browsing;
- branch discovery;
- event viewing;
- reservation inquiries;
- private-event inquiries;
- staff administration.

The architecture should avoid unnecessary dependencies that increase outage risk.

## 2.4 Accountability

Important administrative actions must be attributable to an authenticated staff member.

Examples:

- publishing an event;
- changing a menu price;
- changing branch hours;
- approving media;
- updating an inquiry status;
- changing a staff role.

## 2.5 Data Minimization

The system must collect only the customer information required to process the requested inquiry.

The MVP must not create broad customer profiles or unnecessary behavioral records.

---

# 3. Protected Assets

## 3.1 Public Business Content

Examples:

- branch names;
- addresses;
- operating hours;
- public contact numbers;
- menu items;
- prices;
- event schedules;
- promotions;
- approved public images.

These records are publicly readable only after publication approval.

They still require integrity protection because incorrect information can harm the business.

---

## 3.2 Customer Personal Data

Examples:

- customer name;
- phone number;
- email address;
- preferred reservation date;
- preferred reservation time;
- guest count;
- special requests;
- private-event requirements;
- organization name;
- budget range, when collected.

This information must never be publicly readable.

---

## 3.3 Staff and Administrative Data

Examples:

- staff identity;
- role;
- branch assignment;
- account-active status;
- internal notes;
- administrative activity;
- unpublished content.

Only authorized staff may access these records.

---

## 3.4 Authentication Assets

Examples:

- authenticated sessions;
- access tokens;
- refresh tokens;
- password-reset links;
- server-side credentials;
- privileged Supabase keys.

Authentication secrets must never be written into project documentation, source control, client-visible code, screenshots, or logs.

---

## 3.5 Media and Rights Information

Examples:

- original image files;
- ownership classifications;
- photographer credits;
- licensing notes;
- performer permissions;
- internal approval information.

A media file may be publicly visible only after its publication rights are confirmed.

---

## 3.6 Infrastructure Assets

Examples:

- domain registrar account;
- hosting account;
- Supabase organization;
- production Supabase project;
- source-code repository;
- deployment credentials;
- business email account;
- analytics property.

Production ownership should ultimately belong to Gianetto or an authorized business representative.

---

# 4. Security Scope

This security baseline applies to:

```text
Public website
Administration portal
Next.js server operations
Supabase PostgreSQL
Supabase Auth
Supabase Storage
Environment variables
Source-code repository
Deployment platform
Business-owned media
Customer inquiry workflows
Staff administration workflows
```

It also applies to:

- local development;
- staging;
- production;
- AI-assisted coding;
- database migrations;
- seed data;
- testing environments.

---

# 5. Trust Boundaries

The system contains several trust boundaries.

```text
Public browser
    ↓ untrusted input
Next.js public interface
    ↓ validated server operation
Application authorization layer
    ↓ controlled request
Supabase database and storage
```

For administration:

```text
Staff browser
    ↓ session required
Protected Next.js route
    ↓ role and branch authorization
Application mutation service
    ↓ RLS and database constraints
Supabase PostgreSQL
```

Every boundary requires validation.

The system must never assume that a request is safe because it originated from the official user interface.

---

# 6. Threat Actors

The security model should consider:

## 6.1 Anonymous Abusive Visitor

May attempt to:

- spam public forms;
- submit harmful content;
- scrape contact details;
- enumerate records;
- access private inquiries;
- overload public endpoints.

## 6.2 Unauthorized Authenticated User

May possess a valid account but attempt to:

- access another branch;
- assign a stronger role;
- view protected inquiries;
- edit unauthorized content;
- bypass the admin interface.

## 6.3 Compromised Staff Account

An attacker may gain access through:

- reused passwords;
- phishing;
- exposed sessions;
- shared devices;
- unauthorized account sharing.

## 6.4 Malicious File Uploader

May attempt to upload:

- executable content;
- oversized files;
- misleading file extensions;
- harmful SVG files;
- copyrighted content;
- images containing private information.

## 6.5 Automated Bot

May attempt:

- rapid form submission;
- account-login attempts;
- content scraping;
- endpoint enumeration;
- denial-of-service behavior.

## 6.6 Accidental Staff Error

Staff may accidentally:

- publish draft content;
- change a price incorrectly;
- expose an unapproved image;
- cancel the wrong event;
- assign the wrong branch;
- delete an important record.

Security controls must also reduce accidental harm.

---

# 7. Major Threat Categories

The project must defend against:

```text
Broken access control
Unauthorized cross-branch access
Private-record exposure
Weak authentication handling
Session misuse
Injection attacks
Cross-site scripting
Cross-site request forgery
Insecure file uploads
Mass form spam
Sensitive-data logging
Exposed secrets
Unsafe redirects
Unvalidated identifiers
Dependency vulnerabilities
Configuration mistakes
Unprotected storage objects
Incorrect Row Level Security
Accidental production-data deletion
Unapproved content publication
```

Security requirements must be implemented in both the application and database.

---

# 8. Authentication Architecture

## 8.1 Authentication Scope

Only authorized Gianetto staff will have accounts during the MVP.

Public customers will not register or sign in.

The following public actions do not require customer accounts:

- browsing the menu;
- viewing branches;
- viewing events;
- submitting reservation inquiries;
- submitting private-event inquiries.

---

## 8.2 Authentication Provider

Supabase Auth will identify staff users.

Supabase Auth is responsible for:

- password-based identity;
- password reset;
- session issuance;
- session refresh;
- sign-out;
- authenticated user identifiers.

The application must not implement its own password database.

---

## 8.3 Staff Profile Requirement

A valid Supabase Auth identity is not sufficient by itself.

An administrative user must also have:

```text
profiles record exists
is_active = true
approved role exists
required branch assignment exists when applicable
```

An authenticated account without an active profile must be denied administrative access.

---

## 8.4 Sign-In Requirements

The staff sign-in interface should:

- use encrypted HTTPS in production;
- show generic failure messages;
- avoid confirming whether a specific email exists;
- limit repeated failed attempts;
- avoid displaying passwords;
- support password managers;
- use secure password inputs;
- avoid logging credentials.

Recommended generic response:

> The email or password is incorrect, or this account is not permitted to access the administration portal.

---

## 8.5 Password Recovery

Password-recovery links must:

- expire;
- be single-purpose;
- redirect only to an approved application route;
- not expose tokens through logs;
- not accept arbitrary external redirect destinations.

The application must validate redirect destinations.

---

## 8.6 Session Handling

Administrative sessions should:

- use secure cookies where supported;
- use HTTP-only cookies for server-managed authentication where appropriate;
- use `Secure` in production;
- use an appropriate `SameSite` policy;
- refresh through the approved Supabase server-rendering approach;
- be cleared during sign-out;
- be rejected when the staff profile becomes inactive.

Do not store privileged session information in ordinary browser local storage unless required by the approved authentication integration.

---

## 8.7 Shared Devices

The administration portal should provide:

- a clear sign-out action;
- automatic denial after account deactivation;
- no permanent display of sensitive inquiry data after sign-out;
- no caching of protected pages in publicly shared browser contexts.

Restaurant staff should be instructed not to share administrative accounts.

Each staff member should use an individual account when possible.

---

## 8.8 Multi-Factor Authentication

Multi-factor authentication is recommended for:

- owner account;
- administrator accounts;
- production-account owners;
- domain and hosting accounts;
- Supabase organization owners;
- source-code repository owners.

Application-level enforcement may be added when operationally available and approved.

---

# 9. Role Model

Approved application roles:

```text
OWNER
ADMIN
CONTENT_MANAGER
BRANCH_MANAGER
```

Roles must be consistent across:

- PostgreSQL constraints;
- generated database types;
- TypeScript;
- Zod validation;
- authorization utilities;
- RLS policies;
- administration interface.

The browser must never be trusted to declare its own role.

---

# 10. Authorization Principles

## 10.1 Deny by Default

A staff user receives no protected permission unless the application can prove that the user is authorized.

Conceptual rule:

```text
No matching permission
        ↓
Deny request
```

---

## 10.2 Server-Side Authorization

Every protected mutation must retrieve the current user and permission information on the server.

Do not authorize using:

- a role hidden in the interface;
- route visibility;
- a branch ID sent by the browser;
- client-side state;
- an editable form field;
- user-controlled metadata.

---

## 10.3 Database-Level Authorization

Supabase RLS provides a final data-access layer.

The application interface and server logic improve usability and validation.

They do not replace RLS.

---

## 10.4 Branch-Scoped Authorization

Branch Manager access must be based on `staff_branch_assignments`.

Example:

```text
Authenticated user
    ↓
Active profile
    ↓
Role = BRANCH_MANAGER
    ↓
Target branch exists in staff_branch_assignments
    ↓
Requested action is permitted
```

A branch identifier submitted through a form does not prove permission.

---

## 10.5 Owner-Level Access

The Owner may manage:

- all branches;
- all menu content;
- all events;
- all inquiries;
- staff roles;
- branch assignments;
- media approvals;
- promotions;
- audit-log access;
- business-wide settings.

Owner access must still be authenticated and validated.

---

## 10.6 Administrator Access

Administrators may manage operational content across branches.

Administration of owner-level identity and production ownership may remain restricted.

---

## 10.7 Content Manager Access

Content Managers may manage approved content such as:

- menu descriptions;
- menu items when permitted;
- event content;
- promotions;
- gallery entries;
- public copy;
- media uploads.

Customer inquiries should remain inaccessible to Content Managers by default.

---

## 10.8 Branch Manager Access

Branch Managers may manage approved records associated with assigned branches.

Possible permissions:

- branch information;
- branch operating hours;
- branch-specific menu availability;
- branch events;
- branch reservation inquiries;
- branch private-event inquiries;
- branch gallery content.

They must not access unrelated branches.

---

# 11. Authorization Matrix

| Capability | Owner | Admin | Content Manager | Branch Manager |
|---|---:|---:|---:|---:|
| View all branches | Yes | Yes | Yes | Assigned or public |
| Edit all branches | Yes | Yes | No by default | No |
| Edit assigned branch | Yes | Yes | Optional | Yes |
| Manage menu categories | Yes | Yes | Yes | No by default |
| Manage menu items | Yes | Yes | Yes | Limited |
| Change branch availability | Yes | Yes | Optional | Assigned branch |
| Manage all events | Yes | Yes | Yes | No |
| Manage assigned events | Yes | Yes | Yes if allowed | Assigned branch |
| View all reservation inquiries | Yes | Yes | No | No |
| View assigned-branch reservations | Yes | Yes | No | Yes |
| View all private-event inquiries | Yes | Yes | No | No |
| View assigned private-event inquiries | Yes | Yes | No | Yes |
| Approve media | Yes | Yes | Optional | No by default |
| Upload branch media | Yes | Yes | Yes | Assigned branch |
| Manage promotions | Yes | Yes | Yes | Assigned branch |
| Manage staff roles | Yes | Limited | No | No |
| View audit logs | Yes | Limited | No | No |

The exact matrix must be reflected in server authorization and RLS policies.

---

# 12. Row Level Security Requirements

## 12.1 General Rule

RLS must be enabled on every application table exposed through Supabase APIs.

Enabling RLS is not enough.

Each table must have deliberate policies.

---

## 12.2 Public Content Policies

Anonymous users may read only records that satisfy the relevant public conditions.

Examples:

```text
branches.is_active = true

menu_categories.is_active = true

menu_items.is_published = true

events.status = 'PUBLISHED'

gallery_entries.is_published = true

promotions.status = 'PUBLISHED'

media_assets.approved_for_web = true
```

Related records must also satisfy their own publication conditions.

Example:

A published menu item must not appear when its category is inactive.

---

## 12.3 Private Tables

Anonymous users must never read:

```text
profiles
staff_branch_assignments
reservation_inquiries
private_event_inquiries
audit_logs
internal staff notes
draft content
media rights notes
```

Authenticated users must still satisfy role and branch requirements.

---

## 12.4 Public Writes

Anonymous direct writes should not be enabled broadly.

Preferred flow:

```text
Public browser
    ↓
Next.js server operation
    ↓
Validation and abuse checks
    ↓
Controlled database insert
```

If a dedicated database function is later used for public submissions, it must:

- accept only required fields;
- assign a safe initial status;
- generate or validate the reference number;
- reject prohibited fields;
- prevent users from choosing staff assignments;
- prevent users from setting internal notes;
- prevent users from setting confirmation status.

---

## 12.5 Branch Manager Policies

Conceptual RLS logic:

```text
User is authenticated
AND
profile is active
AND
role is BRANCH_MANAGER
AND
target branch appears in staff_branch_assignments
```

Policies should use the authenticated user identifier rather than browser-supplied identity.

---

## 12.6 Audit-Log Policies

Audit logs should be:

- insertable only through trusted administrative operations;
- readable only by approved owner or administrator roles;
- not updateable through normal application access;
- not deletable through normal application access.

---

## 12.7 Policy Testing

Every RLS policy must be tested using:

- anonymous user;
- active Owner;
- active Administrator;
- active Content Manager;
- active Branch Manager;
- inactive staff;
- Branch Manager assigned to another branch;
- authenticated user without a profile.

Interface testing alone is insufficient.

---

# 13. Public Form Security

Public forms include:

- reservation inquiry;
- private-event inquiry;
- possible contact inquiry.

All public form inputs are untrusted.

---

## 13.1 Server-Side Validation

Every submission must be validated using a server-side Zod schema.

Validate:

- required fields;
- field types;
- maximum lengths;
- email format;
- phone-number length and format;
- guest-count boundaries;
- branch identifiers;
- dates;
- times;
- approved event types;
- privacy consent;
- optional-field normalization.

Client-side validation is for user experience only.

---

## 13.2 Field Length Limits

Every text field must have a maximum accepted length.

Examples requiring limits:

```text
customer_name
email
mobile_number
organization_name
special_request
event_requirements
staff_note
```

Large uncontrolled text submissions should be rejected.

---

## 13.3 Date Validation

Reservation and private-event dates must be checked server-side.

The system should reject:

- malformed dates;
- clearly past dates;
- invalid time values;
- impossible values;
- dates outside an approved future range when configured.

A valid date does not guarantee business availability.

---

## 13.4 Branch Validation

The requested branch must:

- exist;
- be active;
- accept the relevant inquiry type when such configuration is added.

Do not accept arbitrary branch identifiers.

---

## 13.5 Initial Status Control

Public users must not select inquiry status.

New submissions must receive a server-controlled initial status:

```text
NEW
```

Public users must not assign staff members.

---

## 13.6 Honeypot Protection

Public forms should include a hidden honeypot field.

Submissions with the field completed should be rejected or silently ignored according to the implementation strategy.

The field must not block assistive technology incorrectly.

---

## 13.7 Rate Limiting

Rate limiting should consider:

- IP address where available;
- route;
- submission type;
- time window;
- repeated identical submissions.

Rate limiting should not store more personal data than needed.

When the free hosting or infrastructure tier limits available controls, use the simplest reliable server-side approach and document its limitations.

---

## 13.8 Duplicate Submission Handling

The application should reduce accidental duplicate submissions caused by:

- double-clicking;
- browser retries;
- repeated refresh;
- slow network conditions.

Possible approaches:

- disable the submit button while pending;
- use an idempotency value;
- detect identical rapid submissions;
- return the original successful reference when safe.

---

## 13.9 CAPTCHA

CAPTCHA is not required initially.

Add it only when:

- spam becomes significant;
- honeypot and rate limiting are insufficient;
- the selected solution remains accessible and privacy-conscious.

---

## 13.10 Safe Error Messages

Public error responses must not expose:

- SQL errors;
- table names;
- stack traces;
- internal identifiers;
- environment variables;
- authorization logic;
- rate-limit internals.

Preferred message:

> We could not submit your inquiry. Please review the form or contact your preferred branch directly.

---

# 14. Cross-Site Request Forgery Protection

Mutating administrative requests must be protected against unauthorized cross-site submission.

Controls may include:

- secure same-site session cookies;
- framework-supported Server Actions;
- origin validation where appropriate;
- CSRF tokens when the implementation requires them;
- rejecting unapproved origins;
- avoiding state-changing `GET` requests.

State changes must use:

```text
POST
PUT
PATCH
DELETE
```

or approved Server Action behavior.

A link click must not perform a destructive action.

---

# 15. Cross-Site Scripting Protection

## 15.1 Default Rendering

React text rendering should be used for public and administrative content.

Do not render user-controlled HTML directly.

---

## 15.2 Dangerous HTML

Avoid `dangerouslySetInnerHTML`.

When rich text is later required:

- use a controlled editor;
- sanitize output on the server;
- allow only approved elements;
- block scriptable attributes;
- test stored content for XSS.

---

## 15.3 Inquiry Content

Customer special requests and event requirements must be displayed as text.

They must never be interpreted as HTML.

---

## 15.4 URLs

Validate user-configurable URLs such as:

- map links;
- social links;
- external event links;
- promotion links.

Permit only approved protocols:

```text
https
http only when explicitly required during development
tel
mailto
```

Do not permit:

```text
javascript:
data:
vbscript:
```

except controlled internal image handling where technically required and reviewed.

---

# 16. Injection Protection

Supabase query builders and parameterized operations should be used for database access.

Do not construct SQL by concatenating untrusted input.

Database functions must:

- accept typed parameters;
- avoid dynamic SQL when possible;
- validate identifiers;
- use fixed allowed values.

Search and filter input must be validated even when parameterized.

---

# 17. Identifier and Record Access Security

The application must prevent insecure direct object reference vulnerabilities.

A user knowing or guessing a UUID must not gain access.

For every protected record:

```text
Record exists
        +
User is authenticated
        +
User has permission
        +
Branch scope matches
```

Do not fetch a protected record and rely only on hiding its page link.

---

# 18. File Upload Security

## 18.1 Upload Scope

Initial upload support should focus on approved image files.

Documents and videos should be deferred unless required.

---

## 18.2 File-Type Validation

Validate:

- MIME type;
- extension;
- actual image decoding where possible;
- allowed dimensions;
- maximum size.

Suggested initial image formats:

```text
JPEG
PNG
WebP
```

AVIF may be accepted when supported by the full upload and delivery workflow.

---

## 18.3 SVG Handling

SVG files may contain active or unsafe content.

Production SVG uploads should be:

- limited to trusted brand assets;
- reviewed manually;
- sanitized when uploaded through the application;
- blocked for ordinary staff uploads unless required.

Do not permit arbitrary customer SVG uploads.

---

## 18.4 File Size

Set explicit upload-size limits.

The final limits should depend on:

- Supabase plan;
- hosting limits;
- image-processing workflow;
- expected photo quality.

Oversized files should be rejected with a user-friendly message.

---

## 18.5 Storage Paths

Generate storage paths on the server.

Do not trust the original filename as the final object path.

Recommended pattern:

```text
<content-category>/<record-id>/<generated-uuid>.<extension>
```

Original filenames may be stored as metadata after normalization.

---

## 18.6 Public Visibility

A successful upload does not authorize publication.

Required public conditions:

```text
Storage object exists
media_assets record exists
ownership status is acceptable
approved_for_web = true
related public record is published
```

---

## 18.7 Image Metadata

Consider removing unnecessary embedded metadata from public images when practical.

Uploaded images may contain:

- device information;
- creation time;
- location metadata;
- editing information.

Precise location metadata should not be published accidentally.

---

## 18.8 Copyright and Consent

The upload workflow must require an ownership classification.

Staff should not be able to mark an image public without identifying its source.

Rejected statuses:

```text
UNVERIFIED
RESTRICTED
```

must remain unpublished.

---

## 18.9 Deletion

Before deleting a storage object:

- check database references;
- prevent broken public content;
- record the administrative action;
- confirm destructive intent;
- remove or replace dependent records.

---

# 19. Supabase Storage Security

Storage policies must control:

- who may upload;
- which bucket may be used;
- which path may be written;
- who may update metadata;
- who may delete;
- which objects are public.

Possible approach:

```text
Public-read bucket
Only for approved published derivatives

Private bucket
Original uploads and unapproved assets
```

Alternatively, use private buckets with controlled signed or server-proxied access.

The final bucket model must be selected before production.

Bucket public visibility must not replace the `media_assets.approved_for_web` rule.

---

# 20. Secrets Management

## 20.1 Public Configuration

Browser-safe values may include:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

The publishable key does not grant unrestricted safety by itself.

RLS and storage policies remain mandatory.

---

## 20.2 Privileged Secrets

Examples:

```text
SUPABASE_SERVICE_ROLE_KEY
Email provider secret
Rate-limit secret
Deployment tokens
```

These must:

- remain server-side;
- never use a public environment-variable prefix;
- never appear in Client Components;
- never be committed;
- never be copied into documentation;
- never be printed in logs;
- never be exposed in error responses.

---

## 20.3 `.env.example`

`.env.example` should contain variable names and explanatory placeholders only.

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

# Add only when a reviewed server-only operation requires it.
SUPABASE_SERVICE_ROLE_KEY=
```

---

## 20.4 Secret Rotation

Rotate a secret when:

- it is exposed in source control;
- it appears in a screenshot;
- it appears in an AI conversation;
- it is sent through an insecure channel;
- a staff member with access leaves;
- an account compromise is suspected.

Removing a committed secret from the latest file does not make the exposed secret safe.

It must be replaced.

---

# 21. Environment Isolation

Use separate environments:

```text
Development
Staging
Production
```

## 21.1 Development

May contain:

- fake staff accounts;
- sample menu items;
- sample events;
- non-sensitive placeholder inquiries.

Do not place real customer data in development.

---

## 21.2 Staging

Used for:

- owner review;
- user acceptance;
- permissions testing;
- content approval.

Staging must not share production inquiry data.

---

## 21.3 Production

Contains:

- verified business content;
- real staff accounts;
- real inquiries;
- approved public media.

Production credentials must not be used in local experiments.

---

## 21.4 Environment Labelling

The admin interface should clearly identify non-production environments.

Example:

```text
STAGING
```

This reduces accidental testing against production.

---

# 22. Database Security

## 22.1 Constraints

Database constraints must enforce:

- valid foreign keys;
- valid statuses;
- unique slugs;
- non-negative prices;
- positive guest counts;
- valid event time order;
- required privacy consent;
- unique reference numbers.

Application validation does not replace database constraints.

---

## 22.2 Migrations

All schema changes must be stored in version-controlled migrations.

Do not make undocumented production schema changes through the Supabase dashboard.

Emergency changes must be converted into a migration immediately after stabilization.

---

## 22.3 Service-Role Usage

The service-role key bypasses normal RLS protections.

Therefore:

- avoid it whenever possible;
- isolate it in server-only code;
- use narrow helper functions;
- validate and authorize before calling;
- do not create generic service-role access utilities;
- document every required use.

Public form submission should not automatically require service-role access if a safer controlled database function or policy can be used.

---

## 22.4 Database Functions

Security-sensitive database functions should:

- use explicit parameters;
- set a deliberate search path when applicable;
- avoid dynamic SQL;
- avoid returning private columns;
- use the minimum required privileges;
- be reviewed separately.

---

# 23. Protected Route Security

Administrative routes must:

- retrieve the authenticated session on the server;
- retrieve the active profile;
- confirm the role;
- confirm branch assignment where necessary;
- redirect or deny unauthorized access;
- avoid rendering protected data before authorization completes.

Client-side route guards alone are prohibited.

---

# 24. Server Action and Route Handler Security

Every mutating server operation must:

```text
1. Parse input.
2. Validate input.
3. Retrieve the authenticated user.
4. Retrieve the active profile.
5. Check permission.
6. Check branch scope.
7. Perform the mutation.
8. Write the audit record when required.
9. Revalidate affected content.
10. Return a safe result.
```

Do not trust hidden form fields for:

- actor identity;
- role;
- branch authorization;
- publication approval;
- staff assignment.

---

# 25. Cache Security

Public content may be cached.

Protected administrative content must not be cached publicly.

Requirements:

- do not cache customer inquiries in a shared public cache;
- do not statically generate permission-sensitive admin pages;
- invalidate public caches after approved changes;
- ensure draft content is never inserted into a public cached result;
- avoid leaking one staff member’s data into another user’s response.

---

# 26. HTTP Security Headers

Production responses should use appropriate security headers.

Review and configure:

```text
Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Frame-related protections
```

The exact Content Security Policy must reflect the final:

- image sources;
- Supabase endpoints;
- analytics provider;
- map links or embeds;
- font sources;
- email or verification services.

Do not deploy an untested policy that breaks essential functionality.

Avoid broad values such as unrestricted `*` where narrower sources are possible.

---

# 27. Embeds and External Content

External content may include:

- maps;
- social links;
- possibly third-party booking or delivery links.

Prefer ordinary links over embeds when an embed:

- adds trackers;
- harms performance;
- complicates consent;
- reduces accessibility;
- introduces cross-origin risks.

Any embedded content must be reviewed for:

- allowed origin;
- privacy implications;
- loading behavior;
- fallback links;
- mobile usability.

---

# 28. External Link Security

Links opening a new tab should use appropriate protection.

External URLs must be:

- validated;
- owner-approved;
- stored as complete secure URLs;
- restricted to allowed protocols.

The interface should make external navigation clear where helpful.

---

# 29. Logging Requirements

## 29.1 Allowed Logging

Logs may contain:

- request route;
- error category;
- timestamp;
- non-sensitive record identifier;
- action result;
- authorization denial category;
- notification failure.

---

## 29.2 Prohibited Logging

Do not log:

- passwords;
- access tokens;
- refresh tokens;
- service-role keys;
- complete environment variables;
- password-reset URLs;
- full customer inquiry bodies by default;
- full private-event requirements by default;
- raw authorization headers;
- complete session cookies.

---

## 29.3 Production Error Responses

Detailed server errors should be recorded privately.

Users should receive generic safe messages.

---

# 30. Audit Logging

Significant successful administrative actions must create an audit log.

Examples:

```text
MENU_PRICE_CHANGED
MENU_ITEM_PUBLISHED
BRANCH_HOURS_UPDATED
EVENT_PUBLISHED
EVENT_CANCELLED
RESERVATION_STATUS_CHANGED
PRIVATE_EVENT_STATUS_CHANGED
MEDIA_APPROVED
PROMOTION_PUBLISHED
STAFF_ROLE_CHANGED
STAFF_DEACTIVATED
```

Audit metadata should contain only necessary change information.

Do not duplicate full customer records inside audit logs.

Audit logs should be append-only through ordinary application operations.

---

# 31. Privacy Requirements

## 31.1 Transparency

Before submission, customers should be told:

- what information is being collected;
- why it is needed;
- that the restaurant will use it to respond;
- that submission does not guarantee a reservation;
- how to access the privacy notice.

---

## 31.2 Consent Record

The system should store:

```text
privacy_consent_at
privacy_policy_version
```

Consent must not be preselected through a hidden assumption.

---

## 31.3 Purpose Limitation

Reservation data should be used for:

- reviewing the reservation request;
- contacting the customer;
- managing the reservation process;
- resolving related customer concerns.

Private-event data should be used for:

- evaluating the inquiry;
- contacting the customer;
- preparing an offer or response;
- managing the event process.

The data should not automatically enter a marketing list.

---

## 31.4 Marketing Consent

Marketing communications require a separate explicit decision.

A reservation consent checkbox must not silently authorize promotional messages.

Marketing functionality is outside the MVP.

---

## 31.5 Access Limitation

Only roles with an operational need may view customer inquiries.

Content Managers should not access customer data by default.

---

## 31.6 Retention

The owner must approve:

- active-inquiry retention period;
- completed-inquiry retention period;
- archival period;
- deletion process;
- legal or accounting retention needs;
- staff-note retention.

Until approved:

- archive rather than delete automatically;
- restrict access;
- do not export data unnecessarily;
- avoid maintaining duplicate copies.

---

## 31.7 Correction and Deletion Requests

The production privacy notice should identify:

- how a customer may contact Gianetto;
- how correction requests are handled;
- how deletion requests are reviewed;
- exceptions where retention may be required.

The business should designate a responsible contact.

---

# 32. Inquiry Export Security

If CSV or spreadsheet export is added later:

- restrict it to approved roles;
- log the export;
- limit it by branch and selected date range;
- avoid including unnecessary columns;
- protect the downloaded file;
- warn staff about personal information;
- avoid persistent public download URLs.

Bulk export is not required for the MVP.

---

# 33. Email Notification Security

Optional inquiry notifications must:

- avoid including unnecessary sensitive details;
- use approved recipient addresses;
- avoid exposing all staff recipients to one another when not needed;
- not make email the sole record;
- preserve the database as the source of truth;
- handle provider failure safely.

Recommended notification content:

```text
New reservation inquiry received
Reference number
Branch
Requested date and time
Guest count
Secure admin link
```

Avoid placing complete customer special requests in broad email distribution.

---

# 34. Account Administration Security

## 34.1 Account Creation

Owner or approved administrator action should be required.

Public self-registration must remain disabled.

---

## 34.2 Role Changes

Role changes must:

- require appropriate permission;
- be validated server-side;
- create an audit log;
- prevent a user from assigning themselves unauthorized access;
- preserve at least one valid Owner account.

---

## 34.3 Branch Assignments

Assignments must:

- reference active profiles;
- reference valid branches;
- prevent duplicates;
- create an audit record;
- take effect in both application authorization and RLS.

---

## 34.4 Account Deactivation

Deactivating a staff profile should:

- immediately block new administrative access;
- preserve historical audit references;
- preserve created-content history;
- remove branch-management capability.

Existing sessions should be rechecked against `is_active`.

---

# 35. Destructive Action Security

Destructive or high-impact actions require confirmation.

Examples:

- deactivate branch;
- cancel published event;
- unpublish active menu item;
- delete media;
- deactivate staff;
- change role;
- remove branch assignment.

Use an accessible confirmation dialog.

The confirmation should explain the effect.

Example:

> Cancelling this event will display a cancellation notice and remove it from upcoming-event listings.

Do not use a generic “Are you sure?” when the impact can be described.

---

# 36. Status Transition Security

Not every status change should be accepted.

Examples:

## Reservation Inquiry

Possible controlled flow:

```text
NEW
    ↓
CONTACTED
    ↓
CONFIRMED or DECLINED
    ↓
COMPLETED or CANCELLED
```

## Event

Possible controlled flow:

```text
DRAFT
    ↓
PUBLISHED
    ↓
COMPLETED or CANCELLED
```

The application should reject invalid transitions when they could create inconsistent records.

The exact transition rules should be tested and documented.

---

# 37. Dependency Security

## 37.1 Installation Rule

No package may be added merely because an AI agent prefers it.

Every dependency should have:

- a clear project need;
- acceptable maintenance status;
- compatible license;
- limited overlap with existing packages;
- known security posture;
- documented purpose.

---

## 37.2 Lockfile

The package-manager lockfile must be committed.

---

## 37.3 Updating

Dependencies should be reviewed before production and during maintenance.

Updates must be tested for:

- build behavior;
- authentication;
- shadcn component compatibility;
- Supabase integration;
- form behavior;
- security regressions.

---

## 37.4 Removed Dependencies

Unused dependencies should be removed.

A large dependency surface creates:

- more vulnerabilities;
- more update work;
- larger bundles;
- more implementation inconsistency.

---

# 38. Source-Control Security

## 38.1 Repository Visibility

Repository visibility should be selected according to client approval.

A public repository must not contain:

- secrets;
- personal inquiry data;
- unapproved client materials;
- restricted media;
- private business documents;
- production exports.

---

## 38.2 `.gitignore`

Must exclude:

```text
.env
.env.local
production exports
temporary customer data
private uploaded media
local logs
test artifacts containing personal data
```

---

## 38.3 Commit Review

Before committing, verify:

- no secrets;
- no production data;
- no unrelated screenshots;
- no unapproved copyrighted images;
- no temporary debug logs;
- no privileged URLs;
- no database dumps containing personal information.

---

# 39. Cursor and AI-Agent Security Rules

AI coding agents must never:

- receive real secrets in prompts;
- invent production credentials;
- disable RLS to make a feature work;
- use the service-role key in Client Components;
- create public access to inquiry tables;
- remove authorization checks for convenience;
- log customer inquiry bodies;
- install packages without approval;
- copy third-party images into the repository;
- create fake customer records using real personal details;
- modify production data automatically;
- run destructive database commands without explicit approval;
- weaken security headers without documenting the reason;
- expose internal error details publicly.

---

## 39.1 AI Prompt Rule

Every security-sensitive task should state:

```text
Do not weaken authentication, authorization, RLS, validation, or secret handling.

Before editing, identify:
- trust boundary;
- required permission;
- affected data;
- RLS impact;
- audit requirement.
```

---

## 39.2 AI Review Requirement

AI-generated changes affecting the following require manual review:

```text
Authentication
Authorization
RLS
Database functions
Service-role access
File uploads
Customer inquiries
Account administration
Environment variables
Security headers
Audit logging
Deletion
```

---

# 40. Security Testing Strategy

## 40.1 Unit Tests

Test:

- role permission functions;
- branch-scope functions;
- inquiry validation;
- event status transitions;
- reservation status transitions;
- safe redirect validation;
- file metadata validation;
- reference-number generation.

---

## 40.2 Integration Tests

Test:

- staff session retrieval;
- profile-active enforcement;
- branch assignment;
- protected mutations;
- inquiry insertion;
- media approval;
- audit-log creation;
- storage-policy behavior.

---

## 40.3 RLS Tests

Required scenarios:

```text
Anonymous user reads published menu.
Anonymous user cannot read draft menu.
Anonymous user cannot read reservation inquiries.
Anonymous user cannot read staff profiles.
Anonymous user cannot read audit logs.

Owner reads and manages all branches.
Admin manages operational content.
Content Manager cannot read inquiries.
Branch Manager reads assigned inquiries.
Branch Manager cannot read another branch.
Inactive staff cannot access protected data.
Authenticated user without a profile is denied.
Unapproved media is not publicly readable through application queries.
```

---

## 40.4 End-to-End Security Tests

Critical cases:

```text
Unauthenticated visitor opens /admin.
Inactive staff attempts sign-in.
Branch Manager changes URL to another branch.
Content Manager requests reservation API data.
Public user submits an oversized inquiry.
Public user submits an invalid branch identifier.
Public user submits HTML and script content.
Staff attempts to publish unapproved media.
Staff attempts invalid event transition.
Cancelled event is not shown as upcoming.
```

---

## 40.5 Manual Security Checks

Before launch:

- inspect browser network requests;
- confirm no privileged key appears;
- confirm protected responses are not cached publicly;
- test session sign-out;
- test password recovery;
- inspect public Supabase access;
- test file-upload restrictions;
- verify error pages;
- verify external redirects;
- review production environment variables;
- confirm account ownership.

---

# 41. Backup and Recovery Security

Before launch, document:

- database backup availability;
- migration history;
- media backup approach;
- owner-account recovery;
- domain recovery;
- hosting recovery;
- production-secret rotation;
- restore testing.

Backups must be protected as sensitive data.

A database backup may contain:

- customer names;
- phone numbers;
- email addresses;
- staff profiles;
- internal notes.

Do not place backups in public storage.

---

# 42. Production Configuration Review

Before production deployment, verify:

```text
HTTPS is enforced.
Production secrets are configured correctly.
Development secrets are removed.
RLS is enabled and tested.
Storage policies are tested.
Public forms are rate-limited.
Admin routes require server-side authentication.
Inactive staff are denied.
Branch permissions are enforced.
Error responses are safe.
Security headers are configured.
Source maps and logs do not expose secrets.
Production email recipients are verified.
Customer data is not included in analytics.
Backups and recovery are documented.
Owner account uses strong security.
```

---

# 43. Security Incident Categories

Possible incidents include:

```text
Exposed secret
Compromised staff account
Unauthorized inquiry access
Unauthorized branch modification
Malicious file upload
Incorrect public RLS policy
Customer data sent to wrong recipient
Production database deletion
Domain compromise
Unapproved copyrighted media publication
```

---

# 44. Incident Response

When a security incident is suspected:

```text
1. Contain the issue.
2. Preserve relevant logs.
3. Disable compromised access.
4. Rotate exposed secrets.
5. Identify affected records.
6. Correct the vulnerability.
7. Verify that access is restored safely.
8. Inform the business owner.
9. Assess whether affected people must be contacted.
10. Document the incident and preventive action.
```

Do not delete relevant evidence before understanding the incident.

---

# 45. Secret Exposure Response

When a privileged secret is exposed:

```text
1. Revoke or rotate the secret immediately.
2. Remove it from active configuration.
3. Review logs for misuse.
4. remove it from source control history where practical.
5. verify that no public deployment still contains it.
6. document the incident.
```

A secret must be rotated even when the repository is private.

---

# 46. Compromised Staff Account Response

Recommended response:

```text
1. Deactivate the staff profile.
2. Revoke active sessions where possible.
3. Reset account credentials.
4. Review audit logs.
5. Review branch and content changes.
6. Reverse unauthorized actions.
7. Restore access only after verification.
```

---

# 47. Security Maintenance

After launch, perform recurring checks for:

- inactive staff accounts;
- stale branch assignments;
- dependency vulnerabilities;
- unusual inquiry volume;
- repeated login failures;
- unapproved media;
- old production secrets;
- failed backups;
- storage growth;
- public policy changes;
- broken authorization tests.

The maintenance schedule should be documented during handover.

---

# 48. Security Risks and Responses

## Risk: Misconfigured RLS

**Impact:** Private data exposure or unauthorized modification.

**Response:**

- deny by default;
- test each role;
- keep policies version-controlled;
- review production policies before launch.

---

## Risk: Service-Role Key Exposure

**Impact:** RLS bypass and broad backend access.

**Response:**

- server-only use;
- avoid generic privileged client;
- never expose through public variables;
- rotate immediately if exposed.

---

## Risk: Public Form Spam

**Impact:** Database clutter, operational overload, possible cost increase.

**Response:**

- validation;
- honeypot;
- rate limiting;
- duplicate control;
- optional CAPTCHA when necessary.

---

## Risk: Cross-Branch Access

**Impact:** Branch Manager views or changes another branch.

**Response:**

- assignment-based server checks;
- branch-scoped RLS;
- role testing;
- no trust in browser branch IDs.

---

## Risk: Unapproved Media Publication

**Impact:** Copyright, privacy, or reputational harm.

**Response:**

- ownership classifications;
- approval workflow;
- public query filtering;
- restricted upload permissions.

---

## Risk: Staff Account Sharing

**Impact:** Poor accountability and uncontrolled access.

**Response:**

- individual accounts;
- clear roles;
- audit logging;
- account deactivation;
- staff training.

---

## Risk: Sensitive Data in Logs

**Impact:** Personal information exposure.

**Response:**

- structured safe logging;
- redact customer content;
- prohibit tokens and secrets;
- restrict production-log access.

---

## Risk: Accidental Destructive Change

**Impact:** Missing menu, event cancellation, staff lockout, content loss.

**Response:**

- confirmation dialogs;
- restricted roles;
- status-based deactivation;
- audit logs;
- backups;
- reviewed migrations.

---

# 49. Deferred Security Capabilities

The following may be added after the MVP when justified:

```text
Mandatory application-level multi-factor authentication
Advanced bot-management service
Web Application Firewall
Centralized security-information monitoring
Automated retention and deletion jobs
Customer-access portal
Encrypted inquiry-field storage beyond platform defaults
Advanced anomaly detection
Security key authentication
Enterprise identity provider
Fine-grained approval workflows
```

These are not reasons to delay the essential security baseline.

---

# 50. Security Acceptance Criteria

The security baseline is satisfied when:

- public and admin routes are separated;
- public users can read only published content;
- inquiry records are private;
- staff authentication works server-side;
- inactive staff are denied;
- roles are enforced;
- branch assignments are enforced;
- RLS is enabled and tested;
- public forms validate and limit abuse;
- privileged secrets remain server-side;
- uploads are validated;
- unapproved media remains private;
- customer data is not logged unnecessarily;
- significant admin changes create audit records;
- development and production are isolated;
- backups and recovery are documented;
- production security checks pass.

---

# 51. Security Review Triggers

Review this document when:

- customer accounts are introduced;
- online payments are introduced;
- automatic reservations are introduced;
- third-party booking platforms are integrated;
- delivery ordering is introduced;
- POS integration is introduced;
- bulk customer exports are introduced;
- staff roles change;
- additional restaurant brands use the application;
- new storage types are added;
- mobile applications are introduced;
- realtime features are introduced;
- an incident occurs;
- Supabase architecture changes materially.

---

# 52. Locked Security Decisions

```text
SEC-001
Public customers will not create accounts during the MVP.

SEC-002
Only active staff profiles may enter the admin portal.

SEC-003
Authorization will be enforced in server logic and RLS.

SEC-004
Branch Managers will be restricted through database-backed branch assignments.

SEC-005
Public users will not receive direct read access to inquiry records.

SEC-006
Public form input will be validated on the server.

SEC-007
Anonymous inquiry submissions will use a controlled server operation.

SEC-008
The Supabase service-role key will never be exposed to browser code.

SEC-009
Unapproved media will not appear publicly.

SEC-010
Media publication requires ownership classification and approval.

SEC-011
Important administrative mutations will create audit logs.

SEC-012
Development, staging, and production data will remain separate.

SEC-013
No real customer data will be used as development seed data.

SEC-014
AI agents may not disable security controls to complete a feature.

SEC-015
Reservation submissions will not create automatic confirmed bookings.
```

---

# 53. Current Security Decision

The Gianetto system will use layered security:

```text
Secure public interface
        ↓
Server-side validation
        ↓
Server-side authentication and authorization
        ↓
Branch-based permission checks
        ↓
Supabase Row Level Security
        ↓
PostgreSQL constraints
        ↓
Audit logging
```

No single control will be treated as sufficient by itself.