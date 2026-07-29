import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { EventCard } from "@/components/public/event-card"
import { getBranchBySlug } from "@/data/branches"
import { getPublicEvents } from "@/data/events"

/**
 * Homepage upcoming-events section (TASK-060). Draft events are
 * already excluded by `getPublicEvents`; a cancelled event that falls
 * within the limited homepage window is still shown so the cancelled
 * treatment in EventCard is demonstrated, rather than silently hidden.
 */
function UpcomingEventsSection() {
  const events = getPublicEvents().slice(0, 3)

  return (
    <section className="py-16 sm:py-24">
      <PageContainer className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Live Music & Events"
          title="Upcoming at Gianetto"
          description="Sample event listings used to preview this section. These are fictional demonstration events, not a confirmed schedule."
          action={
            <Button variant="secondary" render={<Link href="/events" />}>
              View all events
            </Button>
          }
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
            No upcoming live music dates are posted yet. Follow
            Gianetto&apos;s official channels or check again soon.
          </p>
        )}
      </PageContainer>
    </section>
  )
}

export { UpcomingEventsSection }
