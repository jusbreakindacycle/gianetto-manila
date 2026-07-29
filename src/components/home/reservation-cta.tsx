import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"

/**
 * Homepage reservation call to action (TASK-064). Inquiry language
 * only — no claim of automatic confirmation.
 */
function ReservationCta() {
  return (
    <section className="bg-gianetto-red py-16 text-gianetto-white sm:py-24">
      <PageContainer className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-section-title font-heading text-gianetto-white md:text-section-title-desktop">
          Ready for your next table?
        </h2>
        <p className="max-w-prose text-body-large text-gianetto-warm-ivory">
          Preview the reservation inquiry interface. This demo does not send
          an inquiry, and Gianetto&apos;s final reservation process remains
          subject to owner confirmation.
        </p>
        <Link
          href="/reservations"
          className={buttonVariants({ variant: "secondary" })}
        >
          Start a Reservation Inquiry
        </Link>
      </PageContainer>
    </section>
  )
}

export { ReservationCta }
