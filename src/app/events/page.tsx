import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { EventCard } from "@/components/public/event-card"
import { getBranchBySlug } from "@/data/branches"
import { getPublicEvents } from "@/data/events"

export const metadata: Metadata = {
  title: "Events (Sample) | Gianetto",
  description:
    "A working sample events listing used to preview Gianetto's events page layout. Dates and performers shown here are fictional and not a confirmed schedule.",
}

export default function EventsPage() {
  const events = getPublicEvents()

  return (
    <PageContainer className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Sample Events"
        title="Live Music & Events"
        description="The listings below are fictional demonstration events used to preview this page's layout. They do not represent a confirmed schedule, recurring live-music night, or guaranteed availability."
      />

      {events.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const branch = getBranchBySlug(event.branchSlug)
            return (
              <EventCard
                key={event.id}
                event={event}
                branchName={branch?.name ?? "Branch pending confirmation"}
              />
            )
          })}
        </div>
      ) : (
        <p className="text-body text-muted-foreground">
          No upcoming live music dates are posted yet. Follow Gianetto&apos;s
          official channels or check again soon.
        </p>
      )}
    </PageContainer>
  )
}
