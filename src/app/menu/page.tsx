import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { MenuCategoryNav } from "@/components/public/menu-category-nav"
import { MenuItemCard } from "@/components/public/menu-item-card"
import { getMenuCategories, getMenuItemsByCategory } from "@/data/menu"

export const metadata: Metadata = {
  title: "Menu (Sample) | Gianetto",
  description:
    "A working sample menu used to preview Gianetto's menu page layout. These are design samples, not Gianetto's confirmed current menu.",
}

export default function MenuPage() {
  const categories = getMenuCategories()

  return (
    <PageContainer className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Sample Menu"
        title="Menu"
        description="The entries below are neutral design samples used to preview this page's layout. They are not Gianetto's confirmed current menu, and no prices shown here are final."
      />

      <MenuCategoryNav categories={categories} />

      <div className="flex flex-col gap-16">
        {categories.map((category) => {
          const items = getMenuItemsByCategory(category.id)

          return (
            <section
              key={category.id}
              id={category.slug}
              className="scroll-mt-24"
            >
              <h2 className="mb-6 text-section-title font-heading text-foreground">
                {category.name}
              </h2>
              {items.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <p className="text-body text-muted-foreground">
                  No menu items are currently available in this category.
                </p>
              )}
            </section>
          )
        })}
      </div>
    </PageContainer>
  )
}
