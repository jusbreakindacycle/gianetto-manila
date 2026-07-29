import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import { getFeaturedMenuItems } from "@/data/menu"
import { getUpcomingEvents } from "@/data/events"
import {
  formatSampleEventDate,
  formatSampleEventTime,
} from "@/lib/temporary-content-format"
import type { TemporaryBranch } from "@/types/temporary-content"

interface BranchDetailTemplateProps {
  branch: TemporaryBranch
}

const VERIFICATION_STATUS_NOTE: Record<TemporaryBranch["verificationStatus"], string> = {
  VERIFIED: "Confirmed directly by the Gianetto owner.",
  OBSERVED:
    "Based on material Gianetto has shared publicly, not yet independently confirmed by the owner.",
  PROVISIONAL: "Created for development and layout purposes only.",
  HISTORICAL: "From an older source and may no longer be current.",
  UNVERIFIED: "Source reliability has not yet been confirmed.",
  REJECTED: "Excluded from the working data set.",
}

/**
 * Reusable branch detail template (TASK-047). Every section that
 * lacks owner-verified data states that plainly instead of inventing a
 * value, and no action is rendered for a destination that has no
 * verified value (no dead phone or map links). "Open now" is never
 * calculated.
 */
function BranchDetailTemplate({ branch }: BranchDetailTemplateProps) {
  const featuredDishes = getFeaturedMenuItems().filter(
    (item) => item.branchSlugs.length === 0 || item.branchSlugs.includes(branch.slug)
  )
  const upcomingEvents = getUpcomingEvents().filter(
    (event) => event.branchSlug === branch.slug
  )

  return (
    <PageContainer className="flex flex-col gap-16 py-16 sm:py-24">
      <div className="flex flex-col gap-4">
        <p className="text-label font-semibold tracking-[0.14em] text-gianetto-red uppercase">
          Branch Preview
        </p>
        <h1 className="text-page-title md:text-page-title-desktop font-heading text-foreground">
          {branch.name}
        </h1>
        <p className="text-body-large text-muted-foreground">
          {branch.areaLabel}
        </p>
        <p className="text-small text-muted-foreground italic">
          Branch information status: {branch.verificationStatus} —{" "}
          {VERIFICATION_STATUS_NOTE[branch.verificationStatus]}
        </p>
      </div>

      <PlaceholderVisual aspect="16/9" label={branch.name} />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Address
          </h2>
          <p className="text-body text-muted-foreground">
            {branch.addressLine ?? "Pending owner verification."}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Contact
          </h2>
          <p className="text-body text-muted-foreground">
            {branch.contactPhone ?? "Pending owner verification."}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Operating Hours
          </h2>
          <p className="text-body text-muted-foreground">
            {branch.operatingHoursSummary ??
              "Pending owner verification. Hours will be published once confirmed."}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Directions
          </h2>
          {branch.mapUrl ? (
            <Link
              href={branch.mapUrl}
              className="text-body text-gianetto-red underline underline-offset-4"
            >
              Get directions
            </Link>
          ) : (
            <p className="text-body text-muted-foreground">
              A directions link will be added once an approved map source is
              confirmed.
            </p>
          )}
        </div>
      </div>

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Featured Dishes"
          description="Sample menu entries used to preview this section. These are design placeholders, not this branch's confirmed current menu."
        />
        {featuredDishes.length > 0 ? (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {featuredDishes.map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-border bg-card px-4 py-3 text-body text-foreground"
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-body text-muted-foreground">
            Featured dishes for this branch are still being finalized.
          </p>
        )}
        <Button
          variant="secondary"
          className="w-fit"
          render={<Link href="/menu" />}
        >
          View the full sample menu
        </Button>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Upcoming Events"
          description="Sample event entries used to preview this section."
        />
        {upcomingEvents.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {upcomingEvents.map((event) => (
              <li
                key={event.id}
                className="rounded-lg border border-border bg-card px-4 py-3 text-body text-foreground"
              >
                {event.title} — {formatSampleEventDate(event.eventDate)},{" "}
                {formatSampleEventTime(event.startTime)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-body text-muted-foreground">
            No upcoming events are currently published for this branch.
          </p>
        )}
        <Button
          variant="secondary"
          className="w-fit"
          render={<Link href="/events" />}
        >
          View all events
        </Button>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Gallery"
          description="Abstract placeholders used to preview this section's layout. These are not photographs of Gianetto."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <PlaceholderVisual aspect="1/1" label={`${branch.name} gallery`} />
          <PlaceholderVisual aspect="1/1" label={`${branch.name} gallery`} />
          <PlaceholderVisual aspect="1/1" label={`${branch.name} gallery`} />
        </div>
        <Button
          variant="secondary"
          className="w-fit"
          render={<Link href="/gallery" />}
        >
          View gallery
        </Button>
      </section>

      <section className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/40 p-8">
        <h2 className="text-subheading font-heading text-foreground">
          Private Events
        </h2>
        <p className="text-body text-muted-foreground">
          This branch may be able to host private gatherings. Capacities,
          packages, and pricing are not yet confirmed — reach out with your
          preferred date and Gianetto will follow up.
        </p>
        <Button
          variant="secondary"
          className="w-fit"
          render={<Link href="/private-events" />}
        >
          Start a private-event inquiry
        </Button>
      </section>

      <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-8">
        <h2 className="text-subheading font-heading text-foreground">
          Reserve a Table
        </h2>
        <p className="text-body text-muted-foreground">
          Submitting a reservation inquiry does not confirm a table. A
          Gianetto representative will follow up after checking
          availability.
        </p>
        <Button className="w-fit" render={<Link href="/reservations" />}>
          Start a reservation inquiry
        </Button>
      </section>
    </PageContainer>
  )
}

export { BranchDetailTemplate }
