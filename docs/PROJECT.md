# Gianetto Official Restaurant Website

## Project Definition

**Project name:** Gianetto Official Restaurant Website  
**Project type:** Public restaurant website with a protected content-management and inquiry-management portal  
**Client:** Gianetto Filipino-Italian Restaurant  
**Project owner:** To be confirmed by Gianetto management  
**Technical lead:** JL  
**Architecture:** Server-first modular monolith  
**Project status:** Foundation and business verification  
**Document status:** Working project definition  
**Last updated:** July 2026  

---

## 1. Project Summary

The Gianetto Official Restaurant Website will be a trusted digital platform for Gianetto’s customers and authorized staff.

The public website will centralize verified information about:

- restaurant branches;
- menu items and prices;
- operating hours;
- contact details;
- table reservation inquiries;
- private-event inquiries;
- live music and restaurant events;
- promotions;
- restaurant photos;
- official social-media accounts.

The protected administration portal will allow authorized Gianetto staff to maintain operational website content without editing source code or directly managing raw database records.

The website will be developed as one Next.js application connected to Supabase for PostgreSQL data, staff authentication, and approved media storage.

---

## 2. Project Background

Gianetto currently relies significantly on social-media pages, posts, menu images, and third-party online content to communicate with customers.

This creates several potential problems:

- restaurant information is distributed across multiple posts and platforms;
- customers may encounter outdated branch details, menu prices, or operating hours;
- menus shared as screenshots or documents are difficult to browse on mobile devices;
- reservation and private-event instructions may not be consistent;
- live music schedules can be buried in temporary social-media posts;
- unofficial or sponsored websites may appear to represent the restaurant;
- Gianetto does not fully control how its brand is presented in third-party content;
- restaurant staff may need a simpler way to maintain public information.

The proposed website will become Gianetto’s controlled and verified online source.

---

## 3. Problem Statement

Customers need a reliable way to discover Gianetto, view its current menu, locate an active branch, check operating hours, learn about upcoming live music, and contact the appropriate restaurant team.

Gianetto needs a controlled digital platform where authorized staff can update time-sensitive information while protecting customer inquiries, staff access, and copyrighted media.

The website must address these needs without becoming an unnecessarily complex restaurant operations system.

---

## 4. Proposed Solution

Build a responsive, mobile-first restaurant website with two main application surfaces:

### 4.1 Public Customer Website

The public website will allow customers to:

- learn about Gianetto;
- browse a structured menu;
- view branch-specific information;
- view upcoming live music and restaurant events;
- submit a reservation inquiry;
- submit a private-event inquiry;
- browse approved restaurant photos;
- view current promotions;
- access official contact, map, and social-media links.

### 4.2 Protected Administration Portal

The administration portal will allow authorized staff to:

- manage menu categories and items;
- update branch information;
- update branch-specific menu availability;
- publish live music and restaurant events;
- manage reservation inquiries;
- manage private-event inquiries;
- upload and approve authorized media;
- manage promotions;
- review important administrative activity.

---

## 5. Project Vision

Create a credible official digital home for Gianetto that is:

- easier to use than searching through social-media posts;
- trustworthy enough to represent the restaurant officially;
- simple enough for restaurant staff to maintain;
- structured enough to support future growth;
- visually distinctive without copying third-party restaurant websites;
- technically strong enough to serve as a real client system and professional portfolio case study.

---

## 6. Working Brand Positioning

> Filipino-Italian comfort dining made for shared meals, everyday indulgence, and memorable gatherings.

This is provisional and must be approved or revised by Gianetto management.

### Existing tagline observed in provided materials

> Delight in every bite!

The tagline must still be confirmed as approved for official website use.

### Working brand qualities

- warm;
- welcoming;
- generous;
- polished;
- family-friendly;
- celebratory;
- approachable;
- suitable for casual meals and special occasions.

---

## 7. Primary Business Goals

The website should help Gianetto:

1. Establish an official and controlled online identity.
2. Centralize verified branch, menu, contact, and schedule information.
3. Increase qualified table reservation inquiries.
4. Generate private dining and event leads.
5. Promote upcoming live music and restaurant events.
6. Improve customer discovery of each active branch.
7. Reduce dependency on scattered social-media posts.
8. Improve search-engine visibility.
9. Protect the business from confusion caused by unofficial content.
10. Allow authorized staff to update operational information safely.

---

## 8. Primary Customer Goals

Customers should be able to answer the following questions quickly:

- What kind of restaurant is Gianetto?
- Which Gianetto branches are currently active?
- Which branch is nearest to me?
- What are the current operating hours?
- What food and drinks are available?
- How much do menu items cost?
- Are certain dishes available at my preferred branch?
- Is there live music or a special event soon?
- How do I request a table reservation?
- Can Gianetto host a private celebration or company gathering?
- How do I contact the correct branch?
- Which website and social-media accounts are official?

---

## 9. Target Users

### 9.1 Public Customers

#### Families and groups

Customers planning:

- family meals;
- birthdays;
- reunions;
- weekend dining;
- shared celebrations.

#### Couples and small groups

Customers looking for:

- lunch or dinner;
- casual dates;
- drinks;
- relaxed gatherings;
- live music nights.

#### Corporate and office customers

Customers considering:

- team meals;
- company dinners;
- client meetings;
- office celebrations;
- private functions.

#### Event organizers

Customers planning:

- birthdays;
- anniversaries;
- reunions;
- corporate gatherings;
- private dinners;
- holiday events.

#### Restaurant discoverers

Customers who found Gianetto through:

- search engines;
- social media;
- maps;
- mall directories;
- recommendations;
- food-related articles.

### 9.2 Internal Users

#### Owner

Responsible for:

- business-wide access;
- final content approval;
- staff-role management;
- administrative oversight.

#### Administrator

Responsible for:

- branches;
- menus;
- events;
- inquiries;
- media;
- promotions;
- operational website settings.

#### Content Manager

Responsible for:

- approved website copy;
- menu content;
- gallery content;
- event information;
- promotions.

#### Branch Manager

Responsible for an assigned branch, including:

- branch information;
- menu availability;
- branch events;
- reservation inquiries;
- private-event inquiries.

---

## 10. Approved Technology Direction

### Application

- Next.js App Router
- TypeScript

### User Interface

- Tailwind CSS
- shadcn/ui
- Base UI primitives
- Custom Gianetto design system
- Lucide icons

### Backend Platform

- Supabase

### Database

- Supabase PostgreSQL

### Authentication

- Supabase Auth
- Staff accounts only during the MVP

### Media Storage

- Supabase Storage

### Validation and Forms

- Zod
- native forms and server operations for simple public forms
- React Hook Form only for sufficiently complex administration forms

### Architectural Approach

- server-first;
- modular monolith;
- one repository;
- one Next.js application;
- managed Supabase backend;
- no microservices;
- no Prisma initially;
- no customer accounts initially;
- no realtime features initially.

---

## 11. Functional Scope

### 11.1 Public Website

The public website will include:

- responsive navigation;
- homepage;
- structured menu;
- menu categories and filters;
- featured dishes;
- branch directory;
- individual branch pages;
- operating hours;
- branch contact information;
- map and direction links;
- live music and events listing;
- individual event pages;
- reservation inquiry form;
- private-event inquiry form;
- restaurant story;
- gallery;
- promotions;
- official social-media links;
- privacy notice;
- website terms or notice;
- official-website identification;
- basic search-engine optimization;
- accessible mobile interactions.

### 11.2 Administration Portal

The administration portal will eventually include:

- secure staff sign-in;
- dashboard;
- menu-category management;
- menu-item management;
- branch-specific availability;
- branch management;
- business-hours management;
- live music and event management;
- reservation-inquiry management;
- private-event-inquiry management;
- media management;
- gallery management;
- promotion management;
- staff role and branch assignment;
- audit-log visibility for authorized roles.

---

## 12. Live Music and Events Scope

The website will include a lightweight branch-specific events capability.

It may be used for:

- live band performances;
- acoustic performances;
- holiday events;
- special dinners;
- branch celebrations;
- restaurant promotions connected to a scheduled event.

Each event may contain:

- event title;
- performer or band name;
- event type;
- branch;
- event date;
- start and end time;
- short description;
- approved image or poster;
- reservation requirement;
- reservation instructions;
- publication status;
- cancellation notice.

The events feature is not:

- an event-ticketing platform;
- a performer-booking system;
- a talent-management system;
- a payment platform;
- a seat-allocation system.

---

## 13. Reservation Scope

The first release will support reservation inquiries only.

Submitting a form will not automatically confirm a table.

The customer must be informed:

> Your request is subject to restaurant availability. A Gianetto representative will contact you to confirm your reservation.

The reservation workflow may collect:

- preferred branch;
- customer name;
- email;
- mobile number;
- requested date;
- requested time;
- number of guests;
- special requests;
- privacy consent.

Authorized staff may update an inquiry using statuses such as:

- New;
- Contacted;
- Confirmed;
- Declined;
- Cancelled;
- Completed.

---

## 14. Private-Event Scope

Customers may submit inquiries for:

- birthdays;
- family celebrations;
- reunions;
- corporate dinners;
- private dining;
- holiday gatherings;
- wedding-related events;
- product launches;
- other approved event types.

The private-event form may collect:

- preferred branch;
- customer name;
- organization name, when applicable;
- contact details;
- preferred date and time;
- estimated number of guests;
- event type;
- event requirements;
- optional budget range;
- privacy consent.

The form will not automatically approve or book the event.

---

## 15. Content Verification Policy

All operational information must be verified by Gianetto management before production publication.

This includes:

- active branches;
- official addresses;
- current contact numbers;
- operating hours;
- menu items;
- item descriptions;
- prices;
- branch-specific availability;
- reservation instructions;
- private-event information;
- live music schedules;
- performer names;
- event fees or minimum-spend requirements;
- delivery links;
- official social-media accounts;
- accepted payment methods;
- parking or access information.

Unverified information may be used only as clearly marked temporary development content.

---

## 16. Current Working Information

The following information was observed in provided screenshots and remains subject to owner confirmation.

### Possible current branches

- Parqal, Parañaque
- Capitol Commons, Pasig

### Historical or uncertain branch reference

- Little Baguio, San Juan

The Little Baguio location must not be presented as active unless explicitly confirmed.

### Possible operating hours

- Sunday to Thursday: 10:00 AM to 10:00 PM
- Friday to Saturday: 10:00 AM to 11:00 PM

Some provided materials contain different or simplified schedules. Hours must be confirmed per branch.

### Observed social identity

- Instagram: `@gianetto.ph`
- Facebook: Gianetto

These must be confirmed as the restaurant’s approved official channels.

---

## 17. Media and Copyright Policy

The project must not assume that online images are free to reuse.

### Potentially usable after ownership confirmation

- Gianetto-owned food photographs;
- Gianetto-owned branch photographs;
- official logos and brand assets;
- commissioned media with transferred rights;
- staff-produced images;
- customer-submitted images with explicit permission;
- performer posters approved for restaurant publication.

### Reference only unless separately licensed

- third-party food articles;
- screenshots from editorial websites;
- customer or influencer photographs;
- social-media screenshots;
- images containing platform interfaces;
- food photography owned by outside photographers;
- watermarked images;
- Scribd or document-hosting screenshots;
- performer materials without publication approval.

### Prohibited publication

The website must not publish:

- unverified copyrighted images;
- photos containing identifiable customers without permission;
- copied third-party article layouts;
- copied editorial writing;
- advertisements from unrelated sponsors;
- screenshots used as permanent website content.

---

## 18. AI-Generated Media Policy

AI-generated images may be used temporarily during design and development when clearly marked as placeholders.

AI-generated food images should not permanently represent actual menu items unless Gianetto explicitly approves their use and the presentation cannot mislead customers about the real dish.

Preferred production media order:

1. Business-owned authentic photography.
2. Newly commissioned restaurant photography.
3. Properly licensed media.
4. AI-generated decorative or placeholder visuals.

AI-generated media must be recorded in the media system using an appropriate ownership or source status.

---

## 19. Source-of-Truth Hierarchy

When project materials conflict, use the following priority:

1. Written confirmation from the Gianetto owner or authorized representative.
2. Current official business records and approved menu documents.
3. Current official Gianetto social-media posts.
4. Current branch-provided information.
5. Older official materials.
6. Third-party articles, directories, and customer posts.
7. AI assumptions or temporary placeholders.

Lower-priority sources must not override higher-priority sources.

---

## 20. Non-Functional Requirements

### Performance

- public pages should load quickly on mobile connections;
- images must be optimized;
- unnecessary client-side JavaScript must be avoided;
- menu and branch pages should be server-rendered or appropriately cached.

### Accessibility

- semantic HTML;
- keyboard-accessible navigation;
- visible focus states;
- appropriate color contrast;
- form labels and error messages;
- descriptive image alternative text;
- accessible dialogs and menus.

### Responsive Design

The website must support:

- small mobile devices;
- standard smartphones;
- tablets;
- laptops;
- desktop displays.

The mobile experience is the primary design priority.

### Security

- Row Level Security on exposed Supabase tables;
- privileged keys restricted to server environments;
- server-side validation for all mutations;
- role-based authorization;
- branch-based permissions where applicable;
- protected administrative routes;
- rate limiting and anti-spam controls;
- no public access to customer inquiries;
- audit logging for important administrative actions.

### Privacy

The project should collect only information required to process inquiries.

The business must eventually define:

- inquiry retention period;
- who may access customer information;
- deletion procedures;
- privacy contact process;
- approved privacy notice.

### Maintainability

- feature-based project organization;
- typed data structures;
- documented architecture decisions;
- reusable components;
- database migrations stored in source control;
- no undocumented dependencies;
- bounded AI-agent tasks;
- clear separation of verified and placeholder content.

---

## 21. Out of Scope for Initial Releases

The following are not included unless the project scope is formally revised:

- automatic live table availability;
- guaranteed real-time reservation confirmation;
- online reservation payments;
- event ticket sales;
- performer contracting or booking;
- point-of-sale integration;
- kitchen display integration;
- inventory management;
- procurement management;
- delivery ordering;
- customer accounts;
- customer loyalty program;
- Grazie Card management;
- mobile application;
- employee scheduling;
- payroll;
- advanced customer relationship management;
- franchise management;
- microservices;
- realtime database subscriptions.

---

## 22. Release Plan

### Version 1 — Public MVP

- official public website;
- homepage;
- dynamic menu;
- dynamic branch pages;
- live music and events;
- reservation inquiry;
- private-event inquiry;
- gallery;
- promotions display;
- basic SEO;
- official-site notice;
- privacy notice.

### Version 1.1 — Administration MVP

- staff authentication;
- menu management;
- branch management;
- business-hours management;
- event management;
- inquiry management;
- gallery management;
- promotion management;
- role-based access;
- audit logging.

### Version 2 — Possible Enhancements

- recurring event schedules;
- scheduled promotion publishing;
- email notifications;
- customer feedback;
- downloadable event packages;
- inquiry analytics;
- branch-level reports;
- richer website content management.

---

## 23. Project Constraints

### Business constraints

- operational information is not yet fully verified;
- image ownership must be confirmed;
- menu prices may be outdated;
- branch information may differ across existing materials;
- live music frequency and scheduling process are not yet confirmed.

### Technical constraints

- development will be performed primarily using Cursor Free and free agent-chat tools;
- AI-agent usage must therefore be task-bounded and context-efficient;
- development will begin locally;
- unnecessary services and dependencies must be avoided;
- production ownership must eventually be transferred to or controlled by Gianetto.

### Scope constraints

- the project must remain a restaurant website and content-management system;
- unrelated restaurant operations must not be added without formal approval;
- future ideas must not silently enter the MVP.

---

## 24. Development Principles

1. Verify before publishing.
2. Build the public customer journey before complex administration.
3. Prefer server-rendered pages for public content.
4. Use Client Components only when interaction requires them.
5. Keep the architecture monolithic and modular.
6. Do not introduce packages without a documented need.
7. Do not copy third-party layouts or content.
8. Do not represent AI-generated food as authentic without approval.
9. Protect customer inquiry information.
10. Keep every AI coding task small, reviewable, and testable.
11. Complete one feature before starting another.
12. Record important architecture and scope decisions.

---

## 25. Definition of MVP Success

The public MVP is successful when a customer can:

- identify the website as Gianetto’s official website;
- understand what Gianetto offers;
- view a current structured menu;
- select an active branch;
- view verified operating hours and contact information;
- find directions;
- discover upcoming live music and events;
- submit a reservation inquiry;
- submit a private-event inquiry;
- browse approved restaurant photos;
- use the website comfortably on a mobile device.

The administration MVP is successful when authorized staff can:

- sign in securely;
- update menu content;
- update branch information;
- publish an event;
- manage inquiries;
- manage approved gallery content;
- perform these tasks without directly editing code or raw Supabase records.

---

## 26. Initial Success Indicators

Possible indicators after launch include:

- reservation inquiry submissions;
- private-event inquiry submissions;
- branch direction clicks;
- click-to-call usage;
- menu page visits;
- event page visits;
- social-media referral clicks;
- successful staff content updates;
- reduced customer questions about hours, addresses, and current menus.

Specific performance targets must be agreed with the client after baseline information becomes available.

---

## 27. Major Project Risks

### Unverified business information

**Risk:** Incorrect details may be published.

**Response:** Require owner approval before production release.

### Outdated menu prices

**Risk:** Customer complaints and loss of trust.

**Response:** Use a final menu-verification checkpoint before launch.

### Copyright ownership uncertainty

**Risk:** Unauthorized media publication.

**Response:** Track source, ownership, and approval status for every public asset.

### Excessive scope

**Risk:** Delayed launch and unfinished implementation.

**Response:** Enforce version boundaries and document future ideas separately.

### AI-generated implementation inconsistency

**Risk:** Agents may introduce conflicting patterns or unnecessary code.

**Response:** Use project documents, bounded prompts, plan-before-editing, code review, and one-task commits.

### Supabase permission mistakes

**Risk:** Unauthorized access to protected information.

**Response:** Use server-side operations, RLS, authorization tests, and environment separation.

### Staff adoption difficulty

**Risk:** Staff may continue relying only on social media.

**Response:** Design the admin portal around a small number of clear operational tasks.

---

## 28. Project Ownership and Handover

The following production assets should ultimately belong to Gianetto or its authorized business representative:

- production domain;
- hosting account;
- production Supabase organization and project;
- billing information;
- official email accounts;
- analytics property;
- production media;
- administrator ownership account.

The developer may retain access only according to an approved maintenance or support arrangement.

---

## 29. Required Approval Before Implementation

The following project-level decisions must be approved:

- official website purpose;
- technology direction;
- public MVP scope;
- administration MVP scope;
- live music and events inclusion;
- reservation inquiry model;
- private-event inquiry model;
- media ownership policy;
- official-site positioning;
- active branch list;
- current menu source;
- initial production ownership arrangement.

---

## 30. Current Project Decision

The approved direction is:

> Build Gianetto as a server-first Next.js modular monolith using TypeScript, Tailwind CSS, customized shadcn/ui components, and Supabase for PostgreSQL, staff authentication, and media storage.

The project will begin with business and content verification, followed by controlled project initialization.

The first coding phase will establish only the application foundation. It will not build the complete homepage, database, authentication system, or administration portal in one task.