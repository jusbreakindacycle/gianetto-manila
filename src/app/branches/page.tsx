import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { BranchCard } from "@/components/public/branch-card"
import { getActiveBranches } from "@/data/branches"

export const metadata: Metadata = {
  title: "Branches (Preview) | Gianetto",
  description:
    "A preview list of Gianetto branches. Branch details shown here are provisional and pending owner verification.",
}

export default function BranchesPage() {
  const branches = getActiveBranches()

  return (
    <PageContainer className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Our Locations"
        title="Branches"
        description="This is a working preview of Gianetto's branch listing. Locations, addresses, and contact details below are still pending owner verification and are not yet final."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {branches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </PageContainer>
  )
}
