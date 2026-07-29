import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { ReservationForm } from "@/components/forms/reservation-form"
import { getActiveBranches } from "@/data/branches"

export const metadata: Metadata = {
  title: "Reservations (Preview) | Gianetto",
  description:
    "A preview of Gianetto's reservation inquiry interface. This demo form is not yet connected — no inquiry is transmitted or stored.",
}

export default function ReservationsPage() {
  const branches = getActiveBranches()

  return (
    <PageContainer size="form" className="flex flex-col gap-8 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Reservation Inquiry"
        title="Reserve a Table"
        description="This is a working preview of Gianetto's reservation inquiry interface. Submission is not yet connected — no inquiry is sent, transmitted, or stored. Final fields and policies still require Gianetto's approval."
      />

      <div className="rounded-xl border border-border bg-secondary/40 p-6">
        <p className="text-body text-foreground">
          Submitting this form does not confirm a table. Once connected, a
          Gianetto representative would contact you after checking
          availability.
        </p>
      </div>

      <ReservationForm branches={branches} />
    </PageContainer>
  )
}
