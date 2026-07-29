import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import { StatusBadge } from "@/components/shared/status-badge"
import { cn } from "@/lib/utils"
import type { TemporaryMenuItem } from "@/types/temporary-content"

interface MenuItemCardProps {
  item: TemporaryMenuItem
  /** Renders an abstract placeholder visual above the item (used for featured-dish contexts). */
  showVisual?: boolean
  className?: string
}

/**
 * Server-rendered, text-forward menu item card (TASK-049). Works with
 * or without a visual, never invents a price, and never implies a
 * placeholder visual depicts an actual Gianetto dish.
 */
function MenuItemCard({ item, showVisual = false, className }: MenuItemCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-4",
        className
      )}
    >
      {showVisual && <PlaceholderVisual aspect="4/3" label={item.name} />}

      <div className="flex flex-1 flex-col gap-1.5">
        <h4 className="text-card-title font-heading text-foreground">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-small text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-small font-medium text-foreground">
          {item.price != null ? `₱${item.price.toFixed(2)}` : "Price to be confirmed"}
        </span>
        {item.availabilityLabel === "Temporarily unavailable" ? (
          <StatusBadge status="unavailable" />
        ) : item.availabilityLabel ? (
          <span className="text-label text-muted-foreground">
            {item.availabilityLabel}
          </span>
        ) : null}
      </div>
    </article>
  )
}

export { MenuItemCard }
