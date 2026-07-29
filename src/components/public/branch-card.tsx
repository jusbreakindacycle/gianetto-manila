import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import type { TemporaryBranch } from "@/types/temporary-content"

interface BranchCardProps {
  branch: TemporaryBranch
}

/**
 * Server-rendered branch summary card (TASK-045). Never renders a fake
 * "Open now" calculation, never invents hours/phone/map links, and
 * never shows a disabled-looking action for a destination that has no
 * verified value yet — those actions are simply omitted.
 */
function BranchCard({ branch }: BranchCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5">
      <PlaceholderVisual aspect="4/3" label={branch.name} />

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-card-title font-heading text-foreground">
          {branch.name}
        </h3>
        <p className="text-small text-muted-foreground">{branch.areaLabel}</p>
        {!branch.addressLine && (
          <p className="text-small text-muted-foreground italic">
            Full address pending owner verification.
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button size="sm" render={<Link href={`/branches/${branch.slug}`} />}>
          View branch details
        </Button>
        <Button
          size="sm"
          variant="secondary"
          render={<Link href="/reservations" />}
        >
          Start a reservation inquiry
        </Button>
      </div>
    </article>
  )
}

export { BranchCard }
