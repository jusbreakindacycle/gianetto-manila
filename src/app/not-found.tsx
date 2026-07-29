import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"

export default function NotFound() {
  return (
    <PageContainer size="reading" className="flex flex-col gap-8 py-24 sm:py-32">
      <div className="flex flex-col gap-4">
        <p className="text-label font-semibold tracking-[0.14em] text-gianetto-red uppercase">
          Page not found
        </p>
        <h1 className="text-page-title md:text-page-title-desktop font-heading text-foreground">
          We couldn&apos;t find that page
        </h1>
        <p className="max-w-prose text-body-large text-muted-foreground">
          The page you&apos;re looking for may have moved or the link may be
          out of date. You can find your way back using the links below.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button render={<Link href="/" />}>Go to Home</Button>
        <Button variant="secondary" render={<Link href="/menu" />}>
          View Menu
        </Button>
        <Button variant="secondary" render={<Link href="/branches" />}>
          View Branches
        </Button>
      </div>
    </PageContainer>
  )
}
