import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"

/**
 * Homepage hero (TASK-056). The decorative background is CSS-only —
 * radial gradients built from existing Gianetto tokens — and never
 * claims to be an actual photograph of Gianetto.
 */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gianetto-dark-surface text-gianetto-warm-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,var(--gianetto-red-soft)_0%,transparent_45%),radial-gradient(circle_at_85%_80%,var(--gianetto-olive-soft)_0%,transparent_40%)] opacity-15"
      />
      <PageContainer className="relative flex flex-col gap-8 py-24 sm:py-32">
        <p className="text-label font-semibold tracking-[0.14em] text-gianetto-gold uppercase">
          Working Preview
        </p>
        <h1 className="max-w-3xl text-display-hero font-heading text-gianetto-white md:text-display-hero-desktop">
          A Gianetto table, made for gathering
        </h1>
        <p className="max-w-prose text-body-large text-gianetto-warm-ivory">
          This is a working preview of Gianetto&apos;s official website.
          Menu, branch, and event details shown here are provisional and
          still pending owner confirmation.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button render={<Link href="/menu" />}>View Menu</Button>
          <Button variant="secondary" render={<Link href="/reservations" />}>
            Reserve a Table
          </Button>
          <Button
            variant="outline"
            className="border-gianetto-warm-ivory/40 text-gianetto-warm-ivory hover:bg-gianetto-warm-ivory/10"
            render={<Link href="/branches" />}
          >
            Explore Branches
          </Button>
        </div>
      </PageContainer>
    </section>
  )
}

export { Hero }
