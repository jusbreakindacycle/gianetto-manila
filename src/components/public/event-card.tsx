import Link from "next/link"

import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import { StatusBadge } from "@/components/shared/status-badge"
import {
  formatSampleEventDate,
  formatSampleEventTime,
} from "@/lib/temporary-content-format"
import { cn } from "@/lib/utils"
import type { TemporaryEvent } from "@/types/temporary-content"

interface EventCardProps {
  event: TemporaryEvent
  branchName: string
  className?: string
}

const EVENT_STATUS_BADGE = {
  DRAFT: "draft",
  UPCOMING: "upcoming",
  CANCELLED: "cancelled",
} as const

/**
 * Server-rendered event summary card (TASK-053). Key schedule details
 * (title, branch, date, time, status) are always rendered as HTML
 * text, never embedded only inside a poster image.
 */
function EventCard({ event, branchName, className }: EventCardProps) {
  const isCancelled = event.status === "CANCELLED"

  return (
    <article
      className={cn(
        "flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5",
        isCancelled && "opacity-80",
        className
      )}
    >
      <PlaceholderVisual aspect="4/5" label={event.title} />

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={EVENT_STATUS_BADGE[event.status]} />
        </div>
        <h3 className="text-card-title font-heading text-foreground">
          {event.title}
        </h3>
        <p className="text-small text-muted-foreground">{branchName}</p>
        <p className="text-small text-foreground">
          {formatSampleEventDate(event.eventDate)} ·{" "}
          {formatSampleEventTime(event.startTime)}
          {event.endTime ? ` – ${formatSampleEventTime(event.endTime)}` : ""}
        </p>
        {event.performerName && (
          <p className="text-small text-muted-foreground">
            {event.performerName}
          </p>
        )}
        {isCancelled && event.cancellationNote && (
          <p className="text-small text-gianetto-cancelled">
            {event.cancellationNote}
          </p>
        )}
      </div>

      <Link
        href={`/events/${event.slug}`}
        className="text-small font-medium text-gianetto-red underline underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        View event details
      </Link>
    </article>
  )
}

export { EventCard }
