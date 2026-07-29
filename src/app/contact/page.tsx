import Link from "next/link"
import type { Metadata } from "next"

import { buttonVariants } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { getActiveBranches } from "@/data/branches"

export const metadata: Metadata = {
  title: "Contact (Preview) | Gianetto",
  description:
    "A working preview of Gianetto's contact page. Phone numbers, email, hours, and maps are pending owner verification and are not yet published here.",
}

export default function ContactPage() {
  const branches = getActiveBranches()

  return (
    <PageContainer size="reading" className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Contact"
        title="Get in Touch"
        description="This is a working preview of Gianetto's contact page. Phone numbers, email addresses, operating hours, and map links are pending owner verification and are intentionally not shown yet."
      />

      <div className="flex flex-col gap-6">
        {branches.map((branch) => (
          <address
            key={branch.id}
            className="flex flex-col gap-2 rounded-xl border border-border bg-card p-6 not-italic"
          >
            <h2 className="text-subheading font-heading text-foreground">
              {branch.name}
            </h2>
            <p className="text-small text-muted-foreground">
              {branch.areaLabel}
            </p>
            <p className="text-small text-muted-foreground italic">
              Phone, email, and hours: pending owner verification.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href={`/branches/${branch.slug}`}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                View branch details
              </Link>
            </div>
          </address>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/40 p-6">
        <h2 className="text-subheading font-heading text-foreground">
          Reservation and Private-Event Inquiries
        </h2>
        <p className="text-body text-muted-foreground">
          For reservation or private-event questions, use the inquiry forms
          below rather than the pending contact details above.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/reservations" className={buttonVariants({ variant: "primary" })}>
            Reservation Inquiry
          </Link>
          <Link
            href="/private-events"
            className={buttonVariants({ variant: "secondary" })}
          >
            Private-Event Inquiry
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}
