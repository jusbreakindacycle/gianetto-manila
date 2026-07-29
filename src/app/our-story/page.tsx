import Link from "next/link"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "Our Story (Preview) | Gianetto",
  description:
    "A working preview of Gianetto's Our Story page. The official founding story is not yet written and awaits confirmation from the Gianetto owner.",
}

export default function OurStoryPage() {
  return (
    <PageContainer size="reading" className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Our Story"
        title="The Gianetto story, in progress"
        description="This page is a working placeholder for Gianetto's official story. No founding date, founder, family history, award, or timeline is published here — those details will be written together with the Gianetto owner before this page is finalized."
      />

      <div className="flex flex-col gap-4">
        <h2 className="text-subheading font-heading text-foreground">
          What we can say for now
        </h2>
        <p className="max-w-prose text-body text-muted-foreground">
          Gianetto is being positioned as a food-first gathering place —
          somewhere for shared plates, unhurried evenings, and returning
          often across its branches. This is provisional positioning
          copy for the demo, not a historical account.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button render={<Link href="/menu" />}>View Menu</Button>
        <Button variant="secondary" render={<Link href="/branches" />}>
          Explore Branches
        </Button>
      </div>
    </PageContainer>
  )
}
