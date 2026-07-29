import type { TemporaryEvent } from "@/types/temporary-content"

/**
 * Clearly fictional sample event data for the static prototype
 * (TASK-052). Every record is PROVISIONAL, every title contains
 * "Sample" or "Demo", and no real performers, posters, fees, minimum
 * spend, deposits, or recurring schedule are implied. Dates and times
 * exist only to exercise layout and are stored/formatted without any
 * timezone conversion (see src/lib/temporary-content-format.ts) to
 * avoid locale ambiguity.
 *
 * Draft events are intentionally excluded from every public-facing
 * accessor below — they exist only to demonstrate that the data layer
 * filters them out before anything reaches the page.
 */
const EVENTS: TemporaryEvent[] = [
  {
    id: "event-sample-live-music-night",
    slug: "sample-live-music-night",
    title: "Sample Live Music Night",
    branchSlug: "parqal",
    status: "UPCOMING",
    eventDate: "2026-08-15",
    startTime: "19:00",
    endTime: "21:00",
    performerName: "Sample Performer",
    description:
      "A demonstration event used to preview how an upcoming live-music listing appears on this page. No performer, date, or schedule shown here is confirmed.",
    posterOwnershipStatus: null,
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "event-demo-acoustic-evening",
    slug: "demo-acoustic-evening",
    title: "Demo Acoustic Evening",
    branchSlug: "capitol-commons",
    status: "UPCOMING",
    eventDate: "2026-08-22",
    startTime: "18:30",
    endTime: null,
    performerName: null,
    description:
      "A second demonstration event used to preview an event card without a listed performer or end time.",
    posterOwnershipStatus: "AI_GENERATED_PLACEHOLDER",
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "event-sample-anniversary-gathering",
    slug: "sample-anniversary-gathering",
    title: "Sample Anniversary Gathering",
    branchSlug: "parqal",
    status: "CANCELLED",
    eventDate: "2026-08-08",
    startTime: "19:00",
    endTime: "22:00",
    performerName: "Sample Performer",
    description:
      "A demonstration event used to preview the cancelled-event presentation and messaging.",
    posterOwnershipStatus: null,
    verificationStatus: "PROVISIONAL",
    cancellationNote:
      "This sample listing is marked cancelled to demonstrate how Gianetto communicates a cancelled date to customers.",
  },
  {
    id: "event-sample-draft-event-night",
    slug: "sample-draft-event-night",
    title: "Sample Draft Event Night",
    branchSlug: "capitol-commons",
    status: "DRAFT",
    eventDate: "2026-09-05",
    startTime: "19:00",
    endTime: null,
    performerName: null,
    description:
      "A draft-status demonstration record used to confirm that unpublished events never reach public pages.",
    posterOwnershipStatus: null,
    verificationStatus: "PROVISIONAL",
  },
]

function getPublicEvents(): TemporaryEvent[] {
  return EVENTS.filter((event) => event.status !== "DRAFT").sort((a, b) =>
    `${a.eventDate}T${a.startTime}`.localeCompare(`${b.eventDate}T${b.startTime}`)
  )
}

function getUpcomingEvents(limit?: number): TemporaryEvent[] {
  const upcoming = getPublicEvents().filter((event) => event.status === "UPCOMING")
  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming
}

function getEventBySlug(slug: string): TemporaryEvent | undefined {
  return getPublicEvents().find((event) => event.slug === slug)
}

function getPublicEventSlugs(): string[] {
  return getPublicEvents().map((event) => event.slug)
}

export {
  getPublicEvents,
  getUpcomingEvents,
  getEventBySlug,
  getPublicEventSlugs,
}
