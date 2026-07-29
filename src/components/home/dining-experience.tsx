import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import { PageContainer } from "@/components/layout/page-container"

/**
 * Dining-experience section (TASK-061). Uses an abstract placeholder
 * rather than real interior photography, and makes no claim about
 * live-music frequency or a recurring schedule.
 */
function DiningExperience() {
  return (
    <section className="bg-gianetto-dark-surface py-16 text-gianetto-warm-ivory sm:py-24">
      <PageContainer className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <PlaceholderVisual aspect="4/3" label="Gianetto dining atmosphere" />
        <div className="flex flex-col gap-4">
          <p className="text-label font-semibold tracking-[0.14em] text-gianetto-gold uppercase">
            The Experience
          </p>
          <h2 className="text-section-title font-heading text-gianetto-white md:text-section-title-desktop">
            An evening worth staying for
          </h2>
          <p className="max-w-prose text-body-large text-gianetto-warm-ivory">
            Gianetto&apos;s branches are being positioned around a warm,
            unhurried dining atmosphere. Authentic interior and
            live-music photography will replace the placeholder shown
            here once approved by the owner — no live-music frequency
            or schedule is promised yet.
          </p>
        </div>
      </PageContainer>
    </section>
  )
}

export { DiningExperience }
