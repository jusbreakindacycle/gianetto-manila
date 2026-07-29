import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { BranchCard } from "@/components/public/branch-card"
import { getActiveBranches } from "@/data/branches"

/**
 * Homepage branch selection (TASK-059). Reuses BranchCard directly —
 * no duplicated branch-rendering logic.
 */
function BranchSection() {
  const branches = getActiveBranches()

  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <PageContainer className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Our Branches"
          description="A working preview of Gianetto's branch listing. Locations shown here are provisional and pending owner verification."
          action={
            <Button variant="secondary" render={<Link href="/branches" />}>
              View all branches
            </Button>
          }
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export { BranchSection }
