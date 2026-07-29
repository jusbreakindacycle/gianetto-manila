import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import { StatusBadge } from "@/components/shared/status-badge"
import { getBranchBySlug } from "@/data/branches"
import { getEventBySlug, getPublicEventSlugs } from "@/data/events"
import {
  formatSampleEventDate,
  formatSampleEventTime,
} from "@/lib/temporary-content-format"

interface EventPageProps {
  params: Promise<{ slug: string }>
}

const EVENT_STATUS_BADGE = {
  DRAFT: "draft",
  UPCOMING: "upcoming",
  CANCELLED: "cancelled",
} as const

export function generateStaticParams() {
  return getPublicEventSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return { title: "Event Not Found | Gianetto" }
  }

  return {
    title: `${event.title} (Sample) | Gianetto`,
    description: `A fictional demonstration event used to preview this page's layout. ${event.title} is not a confirmed booking.`,
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const branch = getBranchBySlug(event.branchSlug)
  const isCancelled = event.status === "CANCELLED"

  return (
    <PageContainer size="reading" className="flex flex-col gap-8 py-16 sm:py-24">
      <div className="flex flex-col gap-4">
        <StatusBadge status={EVENT_STATUS_BADGE[event.status]} className="w-fit" />
        <h1 className="text-page-title md:text-page-title-desktop font-heading text-foreground">
          {event.title}
        </h1>
        <p className="text-body-large text-muted-foreground">
          {branch?.name ?? "Branch pending confirmation"}
        </p>
      </div>

      <PlaceholderVisual aspect="4/5" className="max-w-sm" label={event.title} />

      <div className="flex flex-col gap-2">
        <p className="text-body text-foreground">
          {formatSampleEventDate(event.eventDate)} ·{" "}
          {formatSampleEventTime(event.startTime)}
          {event.endTime ? ` – ${formatSampleEventTime(event.endTime)}` : ""}
        </p>
        {event.performerName && (
          <p className="text-body text-muted-foreground">
            Featuring {event.performerName}
          </p>
        )}
      </div>

      <p className="max-w-prose text-body text-muted-foreground">
        {event.description}
      </p>

      {isCancelled ? (
        <div className="rounded-xl border border-gianetto-cancelled/30 bg-gianetto-cancelled/10 p-6">
          <p className="text-body font-medium text-gianetto-cancelled">
            This sample date has been marked cancelled.
          </p>
          {event.cancellationNote && (
            <p className="mt-2 text-small text-gianetto-cancelled">
              {event.cancellationNote}
            </p>
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-secondary/40 p-6">
          <p className="text-body text-foreground">
            This is a fictional sample event used to preview this page. It
            is not a confirmed date, and attending it cannot be booked
            through this demo. For an actual visit, start a reservation
            inquiry and a Gianetto representative will follow up.
          </p>
        </div>
      )}

      <Button className="w-fit" render={<Link href="/reservations" />}>
        Start a reservation inquiry
      </Button>
    </PageContainer>
  )
}
