interface PublicNavigationItem {
  readonly label: string
  readonly href: string
}

// Single shared source for SiteHeader, MobileNavigation, and SiteFooter.
// Do not duplicate this list elsewhere.
const PUBLIC_NAVIGATION_ITEMS: readonly PublicNavigationItem[] = [
  { label: "Menu", href: "/menu" },
  { label: "Branches", href: "/branches" },
  { label: "Events", href: "/events" },
  { label: "Private Events", href: "/private-events" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
] as const

const RESERVATION_NAVIGATION_ITEM: PublicNavigationItem = {
  label: "Reserve a Table",
  href: "/reservations",
} as const

export { PUBLIC_NAVIGATION_ITEMS, RESERVATION_NAVIGATION_ITEM }
export type { PublicNavigationItem }
