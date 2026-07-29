import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type StatusBadgeStatus =
  | "upcoming"
  | "cancelled"
  | "draft"
  | "published"
  | "unavailable"
  | "confirmed"

const STATUS_BADGE_LABELS: Record<StatusBadgeStatus, string> = {
  upcoming: "Upcoming",
  cancelled: "Cancelled",
  draft: "Draft",
  published: "Published",
  unavailable: "Temporarily unavailable",
  confirmed: "Confirmed",
}

// Every status pairs a distinct text label with its tint — never color alone.
const STATUS_BADGE_STYLES: Record<StatusBadgeStatus, string> = {
  upcoming: "bg-gianetto-information/10 text-gianetto-information",
  cancelled: "bg-gianetto-cancelled/10 text-gianetto-cancelled",
  draft: "bg-muted text-muted-foreground",
  published: "bg-gianetto-success/10 text-gianetto-success",
  unavailable: "bg-gianetto-warning/10 text-gianetto-warning",
  confirmed: "bg-gianetto-success/10 text-gianetto-success",
}

interface StatusBadgeProps extends Omit<ComponentProps<"span">, "children"> {
  status: StatusBadgeStatus
}

function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
  return (
    <span
      data-slot="status-badge"
      className={cn(
        "inline-flex w-fit items-center rounded-full border border-transparent px-2.5 py-1 text-label font-semibold",
        STATUS_BADGE_STYLES[status],
        className
      )}
      {...props}
    >
      {STATUS_BADGE_LABELS[status]}
    </span>
  )
}

export { StatusBadge }
export type { StatusBadgeStatus }
