import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"

/**
 * Restaurant introduction section (TASK-057). Copy is original,
 * provisional positioning only — no invented founder or family story.
 */
function RestaurantIntroduction() {
  return (
    <section className="py-16 sm:py-24">
      <PageContainer size="reading" className="flex flex-col gap-6 text-center">
        <SectionHeading
          align="center"
          eyebrow="About Gianetto"
          title="A place built around the table"
          description="Gianetto is being positioned as a warm, food-first gathering spot across its branches — a place for shared plates, unhurried evenings, and returning often. This is a working draft; the official Gianetto story will be finalized with the owner."
        />
      </PageContainer>
    </section>
  )
}

export { RestaurantIntroduction }
