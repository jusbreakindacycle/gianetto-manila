# Gianetto Official Restaurant Website
## Design System

**Project:** Gianetto Official Restaurant Website  
**UI framework:** Tailwind CSS and customized shadcn/ui components  
**Primitive layer:** Base UI  
**Design direction:** Warm, polished Filipino-Italian restaurant experience  
**Primary platform:** Mobile-first responsive website  
**Document status:** Approved working design system  
**Last updated:** July 2026  

---

# 1. Document Purpose

This document defines the visual and interaction system for the Gianetto Official Restaurant Website.

It establishes:

- brand presentation;
- color tokens;
- typography;
- spacing;
- layout rules;
- responsive behavior;
- imagery and photography treatment;
- iconography;
- buttons;
- cards;
- forms;
- navigation;
- menu presentation;
- event presentation;
- administrative interface styling;
- accessibility requirements;
- motion guidelines;
- the boundary between custom Gianetto components and shadcn/ui primitives.

This document prevents AI coding agents and developers from inventing inconsistent visual rules while implementing individual pages.

The final website should feel designed specifically for Gianetto rather than assembled from default UI components.

---

# 2. Design Objective

The Gianetto website should communicate:

- warmth;
- generous dining;
- casual sophistication;
- Filipino-Italian comfort;
- shared meals;
- celebrations;
- live dining experiences;
- credibility as the restaurant’s official digital home.

The visual design should support the customer’s primary actions:

```text
Discover Gianetto
        ↓
Browse the Menu
        ↓
Choose a Branch
        ↓
View Upcoming Events
        ↓
Request a Reservation
```

The website must remain easy to use even when decorative photography is unavailable.

---

# 3. Brand Direction

## 3.1 Working Brand Positioning

> Filipino-Italian comfort dining made for shared meals, everyday indulgence, and memorable gatherings.

This positioning remains subject to owner confirmation.

## 3.2 Existing Tagline

> Delight in every bite!

The tagline must be confirmed before final publication.

## 3.3 Brand Personality

The digital experience should feel:

- warm, not sterile;
- polished, not intimidating;
- elegant, not excessively formal;
- expressive, not visually chaotic;
- family-friendly, not childish;
- premium, not luxury-exclusive;
- food-focused, not application-focused;
- contemporary, not trend-dependent.

## 3.4 Visual Keywords

```text
Warm ivory
Deep restaurant red
Charcoal typography
Brick texture
Cream table linen
Dark wood
Soft ambient lighting
Shared dining
Italian warmth
Filipino hospitality
Live evening atmosphere
```

---

# 4. Design Principles

## 4.1 Food and Hospitality First

The public website must prioritize:

- authentic dishes;
- real restaurant spaces;
- branch information;
- menu clarity;
- customer actions.

Technology and interface patterns must remain visually secondary.

## 4.2 Original, Not Imitative

The website must not reproduce:

- the Patikim article layout;
- magazine-style compositions from third-party restaurant features;
- Scribd menu layouts;
- social-media platform interfaces;
- competitor page structures;
- generic shadcn dashboard styling.

References may inform the project, but the implementation must be original.

## 4.3 Mobile First

Primary design decisions should be made for smartphone use.

The website must remain comfortable on devices with:

- narrow screen widths;
- modest processing power;
- slower mobile internet;
- touch input;
- limited visible space.

Desktop layouts should expand the mobile system rather than replace it with an unrelated design.

## 4.4 Clear Before Decorative

No decorative element should interfere with:

- menu item names;
- prices;
- branch details;
- event schedules;
- contact information;
- form labels;
- reservation disclaimers.

## 4.5 Authentic Before Artificial

Production imagery should prioritize real Gianetto food, interiors, and events.

AI-generated imagery may support development, but it must not misrepresent real dishes or restaurant conditions.

## 4.6 Consistency Over Novelty

Spacing, typography, buttons, cards, and image treatments should remain consistent across pages.

AI agents must not create a new visual pattern for every section.

---

# 5. Approved Visual Direction

The public website should resemble a modern restaurant editorial experience, but remain more practical and conversion-focused than a dining magazine.

Recommended characteristics:

- large food imagery;
- generous whitespace;
- strong serif headlines;
- highly readable body text;
- warm neutral surfaces;
- deep red calls to action;
- subtle texture;
- restrained shadows;
- rounded corners used selectively;
- clear section transitions;
- minimal unnecessary animation.

The administration portal may be more utilitarian, but it must still use the approved Gianetto color and typography tokens.

---

# 6. Color System

The following colors are working design tokens.

They are provisional until Gianetto provides an official logo file or approved brand guide.

## 6.1 Primary Palette

| Token | Working value | Purpose |
|---|---:|---|
| Gianetto Red | `#9E1B1B` | Primary actions, brand accents, active navigation |
| Gianetto Red Dark | `#751313` | Hover states, strong emphasis |
| Gianetto Red Soft | `#F4E5E2` | Soft callouts and tinted backgrounds |
| Warm Ivory | `#FFF9F1` | Primary page background |
| Cream | `#F5EBDD` | Alternate section background |
| Charcoal | `#25211F` | Main text |
| Warm Gray | `#6F6762` | Secondary text |
| Soft Border | `#DED3C8` | Borders and dividers |
| White | `#FFFFFF` | Cards and high-contrast surfaces |

## 6.2 Supporting Accent Palette

| Token | Working value | Purpose |
|---|---:|---|
| Olive | `#66704A` | Subtle accents, dietary or natural cues |
| Olive Soft | `#E8EBDC` | Secondary tinted surfaces |
| Brick | `#A9523E` | Warm decorative accents |
| Gold | `#B88A44` | Limited celebration or premium emphasis |
| Dark Surface | `#1E1A18` | Footer and evening-event sections |

Gold must be used sparingly.

It should not replace red as the primary brand color.

## 6.3 Semantic Colors

| Token | Working value | Purpose |
|---|---:|---|
| Success | `#2F6B45` | Successful form submission |
| Warning | `#9A6516` | Schedule warnings and limited availability |
| Error | `#B42318` | Validation errors and failed actions |
| Information | `#315A75` | Neutral information notices |
| Cancelled | `#7A2E2E` | Cancelled event status |

Semantic meaning must not depend on color alone.

Icons, labels, or explanatory text must also be present.

---

# 7. CSS Token Direction

Exact implementation may vary based on the installed Tailwind and shadcn versions.

Conceptual token structure:

```css
:root {
  --background: #fff9f1;
  --foreground: #25211f;

  --card: #ffffff;
  --card-foreground: #25211f;

  --popover: #ffffff;
  --popover-foreground: #25211f;

  --primary: #9e1b1b;
  --primary-foreground: #ffffff;

  --secondary: #f5ebdd;
  --secondary-foreground: #25211f;

  --muted: #f2ebe4;
  --muted-foreground: #6f6762;

  --accent: #e8ebdc;
  --accent-foreground: #354028;

  --destructive: #b42318;
  --destructive-foreground: #ffffff;

  --border: #ded3c8;
  --input: #ded3c8;
  --ring: #9e1b1b;

  --radius: 0.625rem;
}
```

These tokens must be reviewed for accessibility before final implementation.

AI agents must use existing tokens instead of creating raw arbitrary colors throughout the codebase.

### 7.1 Implementation Note (TASK-034)

The implemented `src/app/globals.css` centralizes every raw hex value once,
under `:root`, as `--gianetto-*` custom properties (e.g. `--gianetto-red`,
`--gianetto-warm-ivory`, `--gianetto-dark-surface`). The semantic shadcn
variables shown above (`--primary`, `--background`, `--muted`, etc.)
reference those `--gianetto-*` properties instead of repeating hex values,
and the same `--gianetto-*` properties are exposed through the Tailwind v4
`@theme inline` block as `--color-gianetto-*` so components can also use
token-based utility classes (`bg-gianetto-red`, `text-gianetto-charcoal`)
directly. The existing shadcn/Rhea `--chart-1` … `--chart-5` and
`--sidebar-*` variables were preserved and mapped only to colors from the
approved palette rather than left as unrelated placeholder values.

---

# 8. Color Usage Rules

## Gianetto Red

Use for:

- primary buttons;
- active navigation;
- important links;
- selected filters;
- brand accents;
- form focus indicators;
- key calls to action.

Do not use red for:

- every heading;
- large amounts of paragraph text;
- complete page backgrounds;
- decorative elements without hierarchy.

## Warm Ivory

Use as the default public-site background.

It should create warmth without appearing yellow or aged.

## Cream

Use for:

- alternate sections;
- subtle feature blocks;
- menu-category sections;
- private-event callouts.

## Charcoal

Use for primary readable text.

Pure black should generally be avoided on large warm surfaces.

## Dark Surface

Use for:

- footer;
- selected live-music sections;
- optional reservation call-to-action;
- evening dining atmosphere sections.

Text on dark surfaces must meet contrast requirements.

---

# 9. Typography System

The website should use two primary font families.

## 9.1 Display Font

**Working recommendation:** Cormorant Garamond

Use for:

- hero headings;
- major section headings;
- event-feature headings;
- restaurant story highlights;
- selected menu-category titles.

Characteristics:

- editorial;
- elegant;
- warm;
- restaurant-appropriate;
- expressive without imitating the logo.

## 9.2 Interface and Body Font

**Working recommendation:** Manrope

Use for:

- body copy;
- navigation;
- buttons;
- menu descriptions;
- prices;
- branch information;
- forms;
- administration interface;
- metadata.

Characteristics:

- highly readable;
- modern;
- clear at small sizes;
- suitable for both public and administrative interfaces.

## 9.3 Logo and Script Treatment

The authentic Gianetto logo should be displayed as an approved brand asset.

Do not attempt to recreate the logo using a random cursive font.

Do not use a separate script typeface across the interface unless approved during visual review.

The logo should remain the primary script element.

---

# 10. Typography Scale

Working responsive scale:

| Role | Mobile | Desktop | Font |
|---|---:|---:|---|
| Display Hero | 2.75rem | 5rem | Cormorant Garamond |
| Page Title | 2.25rem | 4rem | Cormorant Garamond |
| Section Title | 2rem | 3.25rem | Cormorant Garamond |
| Card Title | 1.375rem | 1.625rem | Cormorant Garamond or Manrope |
| Subheading | 1.125rem | 1.25rem | Manrope |
| Body Large | 1.0625rem | 1.125rem | Manrope |
| Body | 1rem | 1rem | Manrope |
| Small | 0.875rem | 0.875rem | Manrope |
| Label | 0.8125rem | 0.875rem | Manrope |

Actual Tailwind classes should use the project token scale.

Avoid using arbitrary font sizes inside isolated components.

---

# 11. Typography Rules

## Headings

- use sentence case;
- avoid full uppercase for long headings;
- keep line lengths controlled;
- use tighter line height for display typography;
- do not use cursive text for critical information.

## Body Copy

Recommended maximum readable width:

```text
60–72 characters per line
```

Long paragraphs should not span the full desktop container.

## Menu Item Names

Menu names should remain highly readable.

Do not sacrifice clarity for decorative typography.

## Prices

Prices should:

- use the body font;
- use tabular numerals where supported;
- align consistently;
- remain visible without overpowering item names.

## Labels and Metadata

Event dates, branch labels, and statuses may use subtle uppercase styling.

Letter spacing must remain restrained.

---

# 12. Layout System

## 12.1 Public Content Container

Recommended maximum widths:

```text
Standard content: 72rem
Wide visual sections: 90rem
Reading content: 48rem
Form content: 42rem
```

Working utility direction:

```text
mx-auto
w-full
max-w-6xl
px-4
sm:px-6
lg:px-8
```

## 12.2 Full-Bleed Sections

Full-width sections may be used for:

- hero imagery;
- gallery bands;
- live music feature;
- reservation call to action;
- footer.

The inner content should still align with the site container.

## 12.3 Vertical Rhythm

Recommended section spacing:

| Context | Mobile | Desktop |
|---|---:|---:|
| Standard section | 4rem | 6rem |
| Major feature section | 5rem | 8rem |
| Compact supporting section | 3rem | 4rem |
| Card grid gap | 1rem | 1.5–2rem |

Sections must not use random vertical padding independently.

## 12.4 Grid Rules

Common layouts:

```text
Mobile
1 column

Tablet
2 columns

Desktop
2–4 columns depending on content
```

Recommended:

- menu items: 1 column mobile, 2 columns desktop;
- branches: 1 column mobile, 2 columns desktop;
- events: 1 column mobile, 2–3 columns desktop;
- gallery: mixed but controlled grid;
- featured dishes: horizontal scroll or 2-column mobile, 4-column desktop.

---

# 13. Responsive Breakpoints

Follow Tailwind’s configured breakpoint system unless the project documents an approved override.

Design review should cover:

```text
Small mobile: approximately 320–374 px
Standard mobile: approximately 375–430 px
Tablet: approximately 768 px
Laptop: approximately 1024–1280 px
Desktop: approximately 1440 px and above
```

The Xiaomi Redmi 12C-sized viewport must be included in manual testing.

No feature should depend on hover alone.

---

# 14. Spacing System

Use the standard spacing scale consistently.

Preferred common values:

```text
4 px
8 px
12 px
16 px
24 px
32 px
48 px
64 px
96 px
128 px
```

Use smaller gaps for tightly related content.

Use larger gaps between independent sections.

Avoid arbitrary values unless required to match an approved design.

---

# 15. Border Radius

Recommended radius hierarchy:

| Token | Use |
|---|---|
| Small | Form controls, badges |
| Medium | Standard cards and dialogs |
| Large | Feature cards and image panels |
| Full | Pills, status labels, circular controls |

Working values:

```text
Small: 0.375rem
Medium: 0.625rem
Large: 1rem
Extra large: 1.5rem
```

The website should not make every element heavily rounded.

Food images and large editorial sections may use restrained or no radius when the composition benefits from it.

---

# 16. Borders and Shadows

## Borders

Use warm-gray borders.

Borders should usually be:

```text
1 px
low contrast
warm neutral
```

## Shadows

Use shadows only when they clarify elevation.

Recommended uses:

- navigation overlay;
- dialogs;
- floating mobile controls;
- admin dropdowns;
- selected feature cards.

Avoid strong generic card shadows across the entire public site.

The restaurant experience should rely more on:

- spacing;
- contrast;
- surfaces;
- imagery;
- borders.

---

# 17. Image System

## 17.1 Production Image Priority

Use this order:

1. Business-owned original photography.
2. Commissioned Gianetto photography.
3. Properly licensed media.
4. Customer or performer media with explicit permission.
5. AI-generated placeholder or decorative media.

## 17.2 Image Categories

The project needs:

```text
Brand logo
Homepage hero
Featured dishes
Menu item images
Branch exterior
Branch interior
Live music and event posters
Event atmosphere
Private-event setup
Gallery images
Social preview images
```

## 17.3 Recommended Aspect Ratios

| Use | Ratio |
|---|---:|
| Homepage hero | 16:9 or 3:2 |
| Featured dish | 4:3 |
| Menu item card | 4:3 |
| Branch card | 4:3 |
| Branch hero | 16:9 |
| Event card | 4:5 or 3:2 |
| Event poster | Original poster ratio, contained |
| Gallery landscape | 3:2 |
| Gallery portrait | 4:5 |
| Social preview | 1.91:1 |

Menu images should use a consistent ratio within a given page.

## 17.4 Image Cropping

Use object positioning deliberately.

Do not allow automatic center cropping to remove:

- the main dish;
- signage;
- performer faces;
- event text;
- key restaurant details.

## 17.5 Image Overlays

Dark overlays may be used only when text appears over an image.

Text contrast must remain readable across different photos.

## 17.6 Placeholder Images

Placeholder assets must be visually marked or clearly documented as provisional.

AI-generated food images must not include exact menu-item claims unless approved.

---

# 18. Photography Direction

## Food Photography

Preferred characteristics:

- actual Gianetto dish;
- warm natural or restaurant lighting;
- realistic portion;
- real plating;
- visible texture;
- limited excessive props;
- no misleading ingredient additions.

## Interior Photography

Preferred characteristics:

- actual Gianetto environment;
- warm lighting;
- accurate colors;
- clean composition;
- visible restaurant character;
- limited identifiable customers without permission.

## Live Music Photography

Preferred characteristics:

- approved performer imagery;
- branch atmosphere;
- respectful framing;
- clear indication of the branch or event;
- no unapproved customer close-ups.

## Private Event Photography

Preferred characteristics:

- table setup;
- food arrangement;
- room configuration;
- celebratory atmosphere;
- no unsupported capacity claims.

---

# 19. Iconography

Use Lucide icons for interface actions.

Appropriate uses:

- location;
- phone;
- clock;
- calendar;
- users;
- music;
- directions;
- external link;
- menu;
- close;
- filter;
- search;
- accessibility cues;
- admin actions.

Icons must:

- support text rather than replace it;
- use consistent stroke width;
- remain decorative when a visible text label exists;
- have accessible labels when used alone.

Do not mix multiple unrelated icon libraries.

---

# 20. Logo Treatment

The Gianetto logo should be used only from an approved source file.

Preferred formats:

```text
SVG
Transparent PNG
```

Required variants:

```text
Primary red logo
White or light reversed logo
Single-color fallback
Square social or favicon mark, when available
```

Do not:

- stretch the logo;
- rotate it;
- recolor it arbitrarily;
- add effects;
- place it on low-contrast backgrounds;
- reconstruct it from screenshot pixels for production.

A temporary extracted or traced logo may be used only during development when clearly marked as provisional.

---

# 21. Public Header

## Desktop Header

Recommended content:

```text
Logo
Menu
Branches
Events
Private Events
Our Story
Contact
Reserve a Table
```

Behavior:

- clear primary action;
- limited navigation depth;
- visible focus states;
- optional sticky behavior after testing;
- warm or transparent treatment over the hero only when readability is guaranteed.

## Mobile Header

Recommended content:

```text
Logo
Reserve action or phone action
Menu trigger
```

Use a shadcn `Sheet` or equivalent accessible navigation drawer.

The mobile menu should contain:

- navigation links;
- branch shortcuts;
- reservation action;
- official contact or social links.

---

# 22. Public Footer

The footer should use a dark surface or deep warm tone.

Include:

- approved Gianetto logo;
- tagline;
- branch addresses;
- branch phone numbers;
- operating hours;
- social links;
- menu link;
- events link;
- reservation link;
- privacy notice;
- website notice;
- official-site statement.

Recommended statement:

> This is the official website of Gianetto. Use the branch and contact information published here for verified restaurant inquiries.

The statement must be reviewed by the owner.

---

# 23. Button System

## 23.1 Primary Button

Use for:

- Reserve a Table;
- Submit Inquiry;
- View Menu when primary;
- Publish in admin;
- Save changes.

Appearance:

- Gianetto red background;
- white text;
- medium or large radius;
- visible hover;
- visible focus ring;
- disabled state.

## 23.2 Secondary Button

Use for:

- View Menu when secondary;
- Get Directions;
- View Branch;
- Learn More;
- Cancel non-destructive actions.

Appearance:

- warm neutral surface or transparent;
- charcoal or red text;
- visible border.

## 23.3 Text Link

Use for low-emphasis navigation.

Must include a visible hover and focus treatment.

## 23.4 Destructive Button

Use only for genuine destructive actions.

Examples:

- delete an unreferenced draft;
- permanently remove a media record;
- deactivate staff access.

Destructive actions should normally require an `AlertDialog`.

## 23.5 Button Size

Minimum touch target:

```text
44 × 44 CSS pixels
```

Buttons must not shrink below comfortable mobile interaction size.

---

# 24. Section Heading Component

Recommended structure:

```text
Optional eyebrow
Main heading
Supporting description
Optional action
```

Example:

```text
UPCOMING AT GIANETTO

Live music, special dinners, and evenings worth sharing.

View all events
```

Rules:

- eyebrow text remains brief;
- heading uses display typography;
- description remains readable;
- action aligns consistently;
- mobile stacking is supported.

---

# 25. Menu Presentation

## 25.1 Menu Page Objective

The menu should be easier to browse than an image or PDF.

The page should support:

- category browsing;
- branch context;
- readable item names;
- descriptions;
- prices;
- availability;
- featured dishes;
- optional images.

## 25.2 Menu Item Card

Possible fields:

```text
Image
Item name
Description
Dietary or spice labels
Price
Branch availability
Featured marker
```

The card must still work without an image.

## 25.3 Menu Density

The menu should not rely exclusively on large visual cards.

Recommended balance:

- featured dishes use image cards;
- the full menu may use a cleaner text-forward layout;
- dense categories should remain easy to scan;
- prices should align consistently.

## 25.4 Category Navigation

Possible patterns:

- sticky horizontal category list;
- dropdown on small screens;
- anchor navigation;
- tabs only when accessibility and scale remain manageable.

Do not render dozens of categories as an overcrowded tab bar.

## 25.5 Availability

Use customer-friendly wording:

```text
Available at Parqal
Available at Capitol Commons
Temporarily unavailable
```

Avoid exposing internal inventory language.

---

# 26. Branch Components

## Branch Card

Include:

- branch image;
- branch name;
- city;
- current verified hours summary;
- phone action;
- directions action;
- branch details action;
- reservation action.

## Branch Detail Header

Include:

- branch name;
- address;
- operating status, only when accurately calculated;
- phone;
- directions;
- reservation action.

## Operating Hours

Hours should be readable without requiring a dialog.

Current-day highlighting may be used when implemented accurately.

Do not display “Open now” unless timezone and schedule calculations are reliable.

---

# 27. Live Music and Event Components

## Event Card

Include:

- approved poster or branch image;
- event title;
- event type;
- performer name when applicable;
- branch;
- date;
- time;
- status;
- reservation action or detail link.

## Event Visual Direction

Live music sections may use:

- darker backgrounds;
- warm red accents;
- subtle gold highlights;
- evening photography;
- music iconography.

The event section must still feel part of Gianetto’s main design system.

## Cancelled State

Cancelled events must use:

- visible cancellation label;
- explanatory text;
- reduced emphasis;
- updated contact guidance when needed.

Do not remove cancellation information abruptly when customers may already know about the event.

## No Upcoming Events

Use a calm empty state:

> No upcoming live music dates are posted yet. Follow Gianetto’s official channels or check again soon.

Do not fabricate a recurring schedule.

---

# 28. Reservation and Inquiry Forms

## Form Layout

Recommended:

- one-column mobile layout;
- grouped fields;
- clear section labels;
- limited optional fields;
- concise helper text;
- visible privacy consent;
- clear submission disclaimer.

## Field Rules

Each field must have:

- visible label;
- required indicator when applicable;
- helper text when needed;
- accessible error message;
- consistent height;
- sufficient contrast.

Placeholder text must not replace labels.

## Reservation Disclaimer

Display prominently:

> Submitting this form does not confirm a table. A Gianetto representative will contact you after checking availability.

## Success State

Include:

- confirmation that the inquiry was received;
- reference number;
- expected follow-up statement;
- branch contact fallback.

Do not claim automatic confirmation.

## Error State

Use clear language:

> We could not submit your inquiry. Please review the highlighted fields or contact the branch directly.

Avoid exposing technical details.

---

# 29. Gallery Design

The gallery should highlight:

- food;
- interiors;
- branch character;
- live performances;
- private events;
- restaurant atmosphere.

Recommended behavior:

- responsive grid;
- mixed ratios only when controlled;
- accessible image dialog;
- captions when useful;
- branch filtering only when enough content exists.

Avoid using an uncontrolled masonry layout that causes unpredictable reading order.

---

# 30. Private Events Presentation

The private-events page should communicate:

- suitable event types;
- branch options;
- dining atmosphere;
- inquiry process;
- verified capacity only when confirmed;
- how the restaurant will respond.

Recommended structure:

```text
Hero
Event Types
Branch Options
Experience or Gallery
Inquiry Process
Private-Event Form
Contact Fallback
```

Do not publish fabricated package pricing, room capacities, or inclusions.

---

# 31. Promotion Components

Promotions should remain visually distinct from events.

A promotion card may include:

- promotion title;
- short offer description;
- valid date range;
- branch;
- approved media;
- terms link.

Do not use visual urgency patterns that feel deceptive.

Avoid:

- fake countdown timers;
- unsupported “limited slots” claims;
- flashing elements;
- exaggerated discount labels.

---

# 32. Status Badges

Approved status categories include:

## Public

```text
Upcoming
Cancelled
Featured
Available
Temporarily unavailable
```

## Admin

```text
Draft
Published
Cancelled
Completed
New
Contacted
Confirmed
Declined
Archived
```

Badges should use:

- text;
- icon when useful;
- background tint;
- accessible contrast.

Do not rely on red and green alone.

---

# 33. Card System

## Standard Card

Use for:

- branch summaries;
- event summaries;
- admin metrics;
- selected content blocks.

Characteristics:

- warm-white or cream surface;
- subtle border;
- restrained radius;
- minimal shadow.

## Editorial Card

Use for:

- featured dishes;
- private-event highlights;
- restaurant experience;
- featured live music.

Characteristics:

- stronger image presence;
- larger typography;
- optional overlay;
- flexible layout.

## Utility Card

Use primarily in admin.

Characteristics:

- denser information;
- clearer borders;
- compact spacing;
- practical actions.

The public site should not consist entirely of generic boxed cards.

---

# 34. shadcn/ui Usage Rules

shadcn/ui provides editable interface primitives.

It does not define Gianetto’s brand.

## Approved Public Uses

```text
Button
Sheet
Dialog
Drawer
Accordion
Form
Input
Textarea
Select
Popover
Calendar
Alert
Badge
Skeleton
Tooltip
Toast
```

## Approved Admin Uses

```text
Sidebar
Table
DropdownMenu
Tabs
Dialog
AlertDialog
Form
Input
Textarea
Select
Checkbox
Switch
Popover
Calendar
Command
Pagination
Badge
Skeleton
Toast
```

## Custom Gianetto Components

The following should not be represented only by generic shadcn cards:

```text
HeroSection
FeaturedDishCard
MenuItemCard
BranchCard
UpcomingEventsSection
EventCard
DiningExperienceSection
PrivateEventFeature
RestaurantGallery
ReservationCallToAction
OfficialWebsiteNotice
PublicFooter
```

## Modification Rule

When shadcn component source is added to the repository:

- preserve accessibility behavior;
- document significant modifications;
- use design tokens;
- avoid one-off variants;
- do not change shared primitives for one page without checking other usage.

---

# 35. Public and Admin Visual Separation

## Public Website

Characteristics:

- expressive photography;
- editorial spacing;
- warm surfaces;
- display serif typography;
- customer-oriented language;
- limited interface density.

## Administration Portal

Characteristics:

- compact navigation;
- clear labels;
- practical tables;
- status visibility;
- efficient forms;
- less decorative photography;
- mostly Manrope typography.

Both surfaces must share:

- color tokens;
- button logic;
- accessibility behavior;
- form states;
- spacing principles;
- icon system.

The admin portal should not visually compete with the restaurant website.

---

# 36. Admin Layout

Recommended structure:

```text
Desktop
Sidebar
Top bar
Page header
Primary action
Content area

Mobile
Top bar
Navigation sheet
Page header
Primary action
Stacked content
```

Admin pages should support:

- page title;
- short description;
- filters;
- primary action;
- table or form;
- empty state;
- error state;
- loading state.

Tables must provide mobile alternatives when horizontal content becomes unusable.

---

# 37. Loading States

Use skeletons for:

- menu lists;
- branch cards;
- event cards;
- admin tables;
- image galleries.

Loading states should resemble the final layout.

Avoid full-page spinners when partial skeleton rendering is possible.

Public server-rendered pages should minimize visible loading states.

---

# 38. Empty States

Every dynamic collection must have an intentional empty state.

Examples:

## No Events

> No upcoming events are currently published.

## No Menu Items

> No menu items are currently available in this category.

## No Gallery Images

> More Gianetto moments will be added soon.

## No Admin Inquiries

> There are no inquiries matching the selected filters.

Empty states must not look like errors.

---

# 39. Error States

Error messages should:

- explain what failed;
- suggest a safe next action;
- avoid technical details;
- maintain the page structure;
- provide branch contact fallback when appropriate.

Example:

> We could not load the menu right now. Please try again or contact your preferred branch for assistance.

---

# 40. Motion and Interaction

## Motion Principles

Motion should:

- support orientation;
- confirm interaction;
- remain subtle;
- avoid delaying customer actions;
- respect reduced-motion preferences.

Approved examples:

- navigation drawer transition;
- accordion opening;
- button hover;
- gallery dialog transition;
- gentle image reveal;
- filter state change.

Avoid:

- continuous background movement;
- excessive parallax;
- autoplay video with sound;
- large entrance animations;
- animated cursor effects;
- motion that makes menu browsing slower.

---

# 41. Hover, Focus, and Active States

Every interactive control must have:

- default state;
- hover state when applicable;
- keyboard focus state;
- active or pressed state;
- disabled state when applicable.

Focus indicators must remain visible.

Do not remove outlines without a proper replacement.

Touch interfaces must not depend on hover.

---

# 42. Accessibility Requirements

## Color Contrast

Text and controls must meet WCAG contrast expectations.

Exact color combinations must be tested after implementation.

## Keyboard Access

Users must be able to operate:

- navigation;
- mobile menu;
- dialogs;
- accordion;
- filters;
- forms;
- admin actions;
- date selection.

## Heading Structure

Each page should have one clear primary heading.

Heading levels must follow content hierarchy.

## Forms

Forms require:

- visible labels;
- programmatic error association;
- accessible descriptions;
- focus movement or summary for major validation failures;
- understandable required indicators.

## Images

Images require:

- descriptive alternative text when meaningful;
- empty alt text when decorative;
- no critical text embedded only inside an image.

Event posters must have key schedule details repeated as HTML text.

## Motion

Respect:

```css
prefers-reduced-motion
```

## Touch Targets

Interactive controls should generally meet a minimum target size of 44 × 44 CSS pixels.

---

# 43. Content Style Within the Interface

Public website language should be:

- warm;
- direct;
- hospitable;
- concise;
- accurate;
- branch-specific where needed.

Avoid:

- exaggerated claims;
- unsupported awards;
- fabricated history;
- copied editorial descriptions;
- overly technical wording;
- automatic booking language.

Examples:

Preferred:

> Request a table at Gianetto Parqal.

Avoid:

> Secure your guaranteed seat instantly.

Preferred:

> View upcoming live music at Gianetto.

Avoid:

> Manila’s best nightly live entertainment.

---

# 44. Official Website Credibility

The visual system should reinforce legitimacy through:

- consistent logo use;
- verified branch details;
- clear contact information;
- official-site statement;
- visible privacy notice;
- professional domain;
- consistent brand styling;
- no unrelated advertisements;
- no copied third-party layout;
- no low-quality screenshot content.

The website should not include third-party ad units in the MVP.

---

# 45. Dark Mode

Dark mode is not included in the MVP.

Reasons:

- the primary brand direction depends on warm ivory and restaurant photography;
- it adds design and testing scope;
- it is not a stated client requirement;
- the admin portal can remain readable using the light theme.

Dark sections may still be used intentionally for:

- footer;
- live music features;
- evening atmosphere sections.

A full dark theme requires a future approved decision.

---

# 46. Print and Download Behavior

The website does not initially require a print-specific design system.

Menu pages should remain readable when printed by the browser, but a downloadable PDF menu is optional.

A PDF must not replace the structured HTML menu.

---

# 47. Design Token Ownership

Design tokens should be defined centrally.

Possible locations:

```text
src/app/globals.css
src/config/design.ts
tailwind configuration when required
```

Components must consume approved tokens.

Avoid:

```text
random inline hex colors
arbitrary shadows
untracked font sizes
different container widths per page
one-off border radii
```

---

# 48. Component Variant Rules

Variants should represent reusable design meaning.

Appropriate variants:

```text
Button
- primary
- secondary
- outline
- ghost
- destructive

Card
- standard
- editorial
- utility

Section
- default
- cream
- dark
- image
```

Avoid creating variants named after individual pages unless the treatment is genuinely unique and approved.

---

# 49. Design Review Checklist

Before a component is approved, verify:

- does it use existing tokens?
- does it work on mobile?
- does it work without an image?
- does it handle long names?
- does it handle missing optional data?
- does it have keyboard focus?
- is the contrast acceptable?
- does it resemble Gianetto rather than default shadcn?
- does it avoid copied third-party layouts?
- does it support verified content only?
- does it remain usable with slow-loading images?

---

# 50. Page-Level Design Requirements

## Homepage

Must communicate within the first screen:

- Gianetto identity;
- restaurant category;
- strong food or dining visual;
- Menu action;
- Reservation action;
- Branch action.

## Menu

Must prioritize scanability and current pricing.

## Branches

Must prioritize address, hours, phone, directions, and reservation.

## Events

Must prioritize branch, date, time, status, and reservation guidance.

## Reservations

Must clearly explain that the form is an inquiry.

## Private Events

Must explain the process without publishing unverified packages.

## Gallery

Must use approved visual assets only.

## Contact

Must separate branch contact details clearly.

## Admin

Must prioritize safe, efficient updates over decorative presentation.

---

# 51. Initial Component Inventory

## Layout

```text
SiteHeader
MobileNavigation
SiteFooter
PageContainer
SectionContainer
PageHeader
SectionHeading
OfficialWebsiteNotice
```

## Homepage

```text
HeroSection
RestaurantIntroduction
FeaturedDishesSection
BranchesSection
UpcomingEventsSection
DiningExperienceSection
PrivateEventsSection
GalleryPreview
ReservationCallToAction
```

## Menu

```text
MenuCategoryNavigation
MenuCategorySection
MenuItemCard
FeaturedDishCard
BranchMenuSelector
AvailabilityLabel
DietaryLabel
```

## Branches

```text
BranchCard
BranchHeader
BranchContactActions
BranchHours
BranchMapAction
BranchGallery
BranchEvents
```

## Events

```text
EventCard
EventDateBlock
EventStatusBadge
EventDetails
CancelledEventNotice
NoUpcomingEvents
```

## Forms

```text
FormField
FormSection
ReservationForm
PrivateEventForm
PrivacyConsent
SubmissionDisclaimer
FormSuccess
FormError
```

## Media

```text
ResponsiveImage
GalleryGrid
GalleryDialog
MediaCredit
```

## Admin

```text
AdminSidebar
AdminHeader
AdminPageHeader
AdminTable
AdminFilters
StatusBadge
EmptyState
ConfirmActionDialog
```

---

# 52. Prohibited Design Patterns

Do not introduce:

- default shadcn styling as the finished brand;
- neon gradients;
- generic blue SaaS color palettes;
- glassmorphism across the public site;
- excessive pill-shaped components;
- autoplay audio;
- autoplay video with sound;
- fake customer testimonials;
- fake star ratings;
- animated statistics without verified data;
- social-media screenshots as permanent content;
- full-page PDF menu replacement;
- image-only navigation;
- low-contrast text over food images;
- script fonts for body copy;
- inconsistent card styles;
- unnecessary carousels;
- infinite scrolling;
- forced account creation;
- intrusive pop-ups.

---

# 53. Design-System Implementation Order

Recommended order:

```text
1. Color tokens
2. Typography
3. Base spacing and containers
4. Button variants
5. Form controls
6. Section heading
7. Header and mobile navigation
8. Footer
9. Image component rules
10. Branch card
11. Menu item presentation
12. Event card
13. Public forms
14. Gallery
15. Admin shell
```

Do not begin with the homepage hero before the foundational tokens and layout components exist.

---

# 54. Design-System Completion Gate

The design-system phase is complete when:

- the working palette is approved;
- typography is configured;
- responsive spacing is defined;
- container widths are defined;
- buttons are implemented;
- form fields are consistent;
- header and footer behavior are defined;
- menu-item styling is approved;
- branch-card styling is approved;
- event-card styling is approved;
- image ratios are defined;
- accessibility checks are completed;
- the website does not resemble default shadcn;
- no third-party layout has been copied;
- AI agents can implement pages without inventing new visual rules.

---

# 55. Current Design Decision

The Gianetto website will use:

> A warm ivory, deep red, charcoal, and muted olive visual system with editorial serif headings, highly readable sans-serif interface text, authentic restaurant imagery, and selectively customized shadcn/ui primitives.

The design should feel:

```text
Warm
Food-focused
Welcoming
Polished
Mobile-first
Original
Credible
Easy to maintain
```

The next document will identify the known content, content sources, verification status, ownership status, missing information, and where each item belongs on the website.