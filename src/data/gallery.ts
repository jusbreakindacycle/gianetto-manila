import type { TemporaryGalleryItem } from "@/types/temporary-content"

/**
 * Central temporary gallery data (TASK-063, TASK-069). No production-
 * cleared photography exists yet, so every record renders as an
 * abstract CSS-based placeholder (see PlaceholderVisual) rather than
 * a downloaded or generated image file, and every caption avoids any
 * claim that the placeholder depicts an actual Gianetto space or dish.
 */
const GALLERY_ITEMS: TemporaryGalleryItem[] = [
  {
    id: "gallery-food-1",
    caption: "Sample layout placeholder — food category",
    category: "FOOD",
    orientation: "LANDSCAPE",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "gallery-interior-1",
    caption: "Sample layout placeholder — interior category",
    category: "INTERIOR",
    orientation: "PORTRAIT",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "gallery-atmosphere-1",
    caption: "Sample layout placeholder — atmosphere category",
    category: "ATMOSPHERE",
    orientation: "LANDSCAPE",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "gallery-events-1",
    caption: "Sample layout placeholder — events category",
    category: "EVENTS",
    orientation: "SQUARE",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "gallery-private-events-1",
    caption: "Sample layout placeholder — private events category",
    category: "PRIVATE_EVENTS",
    orientation: "PORTRAIT",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "gallery-food-2",
    caption: "Sample layout placeholder — food category",
    category: "FOOD",
    orientation: "SQUARE",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "gallery-interior-2",
    caption: "Sample layout placeholder — interior category",
    category: "INTERIOR",
    orientation: "LANDSCAPE",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "gallery-atmosphere-2",
    caption: "Sample layout placeholder — atmosphere category",
    category: "ATMOSPHERE",
    orientation: "PORTRAIT",
    ownershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
]

function getGalleryItems(): TemporaryGalleryItem[] {
  return GALLERY_ITEMS
}

function getGalleryPreviewItems(limit: number): TemporaryGalleryItem[] {
  return GALLERY_ITEMS.slice(0, limit)
}

export { getGalleryItems, getGalleryPreviewItems }
