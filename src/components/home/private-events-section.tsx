import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
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
          description="Preview the private-event inquiry interface and the information it may request. This demo does not send an inquiry. Final packages, capacities, pricing, and response procedures require Gianetto approval."
          action={
            <Link
              href="/private-events"
              className={buttonVariants({ variant: "primary" })}
            >
              Start a private-event inquiry
            </Link>
          }
        />
        <PlaceholderVisual aspect="4/3" label="Gianetto private event setup" />
      </PageContainer>
    </section>
  )
}

export { PrivateEventsSection }
