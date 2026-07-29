import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { PlaceholderVisual } from "@/components/shared/placeholder-visual"
import { getGalleryPreviewItems } from "@/data/gallery"

const ORIENTATION_ASPECT = {
  LANDSCAPE: "3/2",
  PORTRAIT: "4/5",
  SQUARE: "1/1",
} as const

/**
 * Homepage gallery preview (TASK-063). Uses the central temporary
 * gallery data and CSS-only abstract placeholders — no downloaded or
 * generated image files, and no claim that any tile shows Gianetto.
 */
function GalleryPreview() {
  const items = getGalleryPreviewItems(6)

  return (
    <section className="py-16 sm:py-24">
      <PageContainer className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from Gianetto"
          description="Abstract placeholders used to preview this section's grid. These are not photographs of Gianetto."
          action={
            <Button variant="secondary" render={<Link href="/gallery" />}>
              View gallery
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <PlaceholderVisual
              key={item.id}
              aspect={ORIENTATION_ASPECT[item.orientation]}
              label={item.caption}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export { GalleryPreview }
