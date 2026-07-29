import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { GalleryGrid } from "@/components/public/gallery-grid"
import { getGalleryItems } from "@/data/gallery"

export const metadata: Metadata = {
  title: "Gallery (Preview) | Gianetto",
  description:
    "A working preview of Gianetto's gallery page layout using abstract placeholders, not photographs of Gianetto.",
}

export default function GalleryPage() {
  const items = getGalleryItems()

  return (
    <PageContainer className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Gallery"
        title="Gallery"
        description="The tiles below are abstract, CSS-based placeholders used to develop this page's layout. They are not photographs of Gianetto — real food, interior, and event photography will replace them once approved by the owner."
      />

      {items.length > 0 ? (
        <GalleryGrid items={items} />
      ) : (
        <p className="text-body text-muted-foreground">
          More Gianetto moments will be added soon.
        </p>
      )}
    </PageContainer>
  )
}
