import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { PrivateEventForm } from "@/components/forms/private-event-form"
import { getActiveBranches } from "@/data/branches"

export const metadata: Metadata = {
  title: "Private Events (Preview) | Gianetto",
  description:
    "A preview of Gianetto's private-event inquiry interface. This demo form is not yet connected — no inquiry is transmitted or stored.",
}

export default function PrivateEventsPage() {
  const branches = getActiveBranches()

  return (
    <PageContainer size="form" className="flex flex-col gap-8 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Private-Event Inquiry"
        title="Private Events"
        description="This is a working preview of Gianetto's private-event inquiry interface. Submission is not yet connected — no inquiry is sent, transmitted, or stored. Event types, capacities, and pricing are not yet confirmed."
      />

      <div className="rounded-xl border border-border bg-secondary/40 p-6">
        <p className="text-body text-foreground">
          Preview the private-event inquiry interface and the information it
          may request. This demo does not send an inquiry. Final packages,
          capacities, pricing, and response procedures require Gianetto
          approval.
        </p>
      </div>

      <PrivateEventForm branches={branches} />
    </PageContainer>
  )
}
