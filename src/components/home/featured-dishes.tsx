import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { MenuItemCard } from "@/components/public/menu-item-card"
import { getFeaturedMenuItems } from "@/data/menu"

/**
 * Featured dishes section (TASK-058). Derives directly from the shared
 * temporary menu data — no duplicated dish array — and never claims
 * these are Gianetto's current dishes.
 */
function FeaturedDishes() {
  const items = getFeaturedMenuItems(4)

  return (
    <section className="py-16 sm:py-24">
      <PageContainer className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Sample Selection"
          title="Featured Dishes"
          description="Sample entries drawn from the working menu data, used to preview this section. These are design placeholders, not Gianetto's confirmed current dishes."
          action={
            <Button variant="secondary" render={<Link href="/menu" />}>
              View full menu
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} showVisual />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export { FeaturedDishes }
