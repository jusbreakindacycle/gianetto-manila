import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import { cn } from "@/lib/utils"
import type {
  TemporaryGalleryItem,
  TemporaryGalleryOrientation,
} from "@/types/temporary-content"
import type { PlaceholderVisualAspect } from "@/components/shared/placeholder-visual"

const GALLERY_ORIENTATION_ASPECT: Record<
  TemporaryGalleryOrientation,
  PlaceholderVisualAspect
> = {
  LANDSCAPE: "3/2",
  PORTRAIT: "4/5",
  SQUARE: "1/1",
}

interface GalleryGridProps {
  items: TemporaryGalleryItem[]
  columnsClassName?: string
  showCaptions?: boolean
}

/**
 * Controlled responsive gallery grid (TASK-069). Uses normal grid flow
 * (never a "dense"/masonry pack) so mixed aspect ratios still read in
 * a predictable left-to-right, top-to-bottom order.
 */
function GalleryGrid({
  items,
  columnsClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  showCaptions = true,
}: GalleryGridProps) {
  return (
    <div className={cn("grid gap-4", columnsClassName)}>
      {items.map((item) => (
        <figure key={item.id} className="flex flex-col gap-2">
          <PlaceholderVisual
            aspect={GALLERY_ORIENTATION_ASPECT[item.orientation]}
            label={item.caption}
          />
          {showCaptions && (
            <figcaption className="text-label text-muted-foreground">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

export { GalleryGrid, GALLERY_ORIENTATION_ASPECT }
