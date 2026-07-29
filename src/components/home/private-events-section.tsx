import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { PlaceholderVisual } from "@/components/shared/placeholder-visual"

/**
 * Private-events section (TASK-062). No packages, capacities, or
 * minimum spend are published — only provisional inquiry copy.
 */
function PrivateEventsSection() {
  return (
    <section className="py-16 sm:py-24">
      <PageContainer className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Private Events"
          title="Host your next gathering at Gianetto"
          description="Gianetto branches may be able to host birthdays, anniversaries, and small gatherings. Packages, capacities, and pricing are not yet confirmed — send an inquiry with your preferred date and a Gianetto representative will follow up."
          action={
            <Button render={<Link href="/private-events" />}>
              Start a private-event inquiry
            </Button>
          }
        />
        <PlaceholderVisual aspect="4/3" label="Gianetto private event setup" />
      </PageContainer>
    </section>
  )
}

export { PrivateEventsSection }
