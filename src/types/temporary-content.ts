/**
 * Temporary content types for the Version 0.2 static public prototype
 * (Phase 4 — Static Public Website). These describe development data
 * living in `src/data/`, not a generated Supabase schema. Names are
 * deliberately prefixed with `Temporary` so they can never be mistaken
 * for database-generated types once Supabase is introduced in Phase 5.
 *
 * See docs/CONTENT-INVENTORY.md Sections 2 and 4 for the verification
 * and ownership vocabularies these unions encode.
 */

/** Content-verification status. Matches CONTENT-INVENTORY.md Section 2. */
type TemporaryContentVerificationStatus =
  | "VERIFIED"
  | "OBSERVED"
  | "PROVISIONAL"
  | "HISTORICAL"
  | "UNVERIFIED"
  | "REJECTED"

/** Media/content ownership classification. Matches CONTENT-INVENTORY.md Section 4. */
type TemporaryContentOwnershipStatus =
  | "BUSINESS_OWNED"
  | "COMMISSIONED"
  | "LICENSED"
  | "CUSTOMER_PERMISSION"
  | "PERFORMER_PERMISSION"
  | "SOCIAL_PLATFORM_REFERENCE"
  | "THIRD_PARTY_COPYRIGHTED"
  | "AI_GENERATED_PLACEHOLDER"
  | "UNVERIFIED"
  | "RESTRICTED"

interface TemporaryBranch {
  id: string
  slug: string
  /** Working branch name, not yet confirmed as official naming. */
  name: string
  /** Minimal observed wording distinguishing this branch, e.g. "Parqal, Parañaque City". */
  areaLabel: string
  isActiveBranch: boolean
  verificationStatus: TemporaryContentVerificationStatus
  /** null until an owner-confirmed address is available. */
  addressLine: string | null
  /** null until an owner-confirmed public contact number is available. */
  contactPhone: string | null
  /** null until an owner-approved map link is available. */
  mapUrl: string | null
  /** null until owner-verified operating hours are available. */
  operatingHoursSummary: string | null
  /** null when no image exists yet; a card should render an abstract placeholder instead. */
  heroImageOwnershipStatus: TemporaryContentOwnershipStatus | null
  notes?: string
}

interface TemporaryMenuCategory {
  id: string
  slug: string
  name: string
  displayOrder: number
  verificationStatus: TemporaryContentVerificationStatus
}

interface TemporaryMenuItem {
  id: string
  categoryId: string
  name: string
  description: string | null
  /** null because no production price has been approved; must never be invented. */
  price: number | null
  /** Customer-friendly availability wording, e.g. "Available at Parqal". null when unspecified. */
  availabilityLabel: string | null
  /** Branch slugs this sample item is associated with; empty means unspecified/all. */
  branchSlugs: string[]
  isFeatured: boolean
  verificationStatus: TemporaryContentVerificationStatus
  imageOwnershipStatus: TemporaryContentOwnershipStatus | null
}

type TemporaryEventStatus = "DRAFT" | "UPCOMING" | "CANCELLED"

interface TemporaryEvent {
  id: string
  slug: string
  title: string
  branchSlug: string
  status: TemporaryEventStatus
  /** ISO calendar date, e.g. "2026-08-15". Stored and displayed without timezone conversion. */
  eventDate: string
  /** 24-hour "HH:MM" start time. */
  startTime: string
  /** 24-hour "HH:MM" end time, when known. */
  endTime: string | null
  performerName: string | null
  description: string
  posterOwnershipStatus: TemporaryContentOwnershipStatus | null
  verificationStatus: TemporaryContentVerificationStatus
  /** Populated only for cancelled events, explaining the cancellation to customers. */
  cancellationNote?: string
}

type TemporaryGalleryCategory =
  | "FOOD"
  | "INTERIOR"
  | "EVENTS"
  | "PRIVATE_EVENTS"
  | "ATMOSPHERE"

type TemporaryGalleryOrientation = "LANDSCAPE" | "PORTRAIT" | "SQUARE"

interface TemporaryGalleryItem {
  id: string
  caption: string
  category: TemporaryGalleryCategory
  orientation: TemporaryGalleryOrientation
  ownershipStatus: TemporaryContentOwnershipStatus
  verificationStatus: TemporaryContentVerificationStatus
}

export type {
  TemporaryContentVerificationStatus,
  TemporaryContentOwnershipStatus,
  TemporaryBranch,
  TemporaryMenuCategory,
  TemporaryMenuItem,
  TemporaryEventStatus,
  TemporaryEvent,
  TemporaryGalleryCategory,
  TemporaryGalleryOrientation,
  TemporaryGalleryItem,
}
