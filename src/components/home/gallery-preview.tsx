import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { GalleryGrid } from "@/components/public/gallery-grid"
import { getGalleryPreviewItems } from "@/data/gallery"

/**
 * Homepage gallery preview (TASK-063). Uses the central temporary
 * gallery data and the shared GalleryGrid — no downloaded or
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
            <Link
              href="/gallery"
              className={buttonVariants({ variant: "secondary" })}
            >
              View gallery
            </Link>
          }
        />
        <GalleryGrid
          items={items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          showCaptions={false}
        />
      </PageContainer>
    </section>
  )
}

export { GalleryPreview }
