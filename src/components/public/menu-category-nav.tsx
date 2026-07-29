import type { TemporaryMenuCategory } from "@/types/temporary-content"

interface MenuCategoryNavProps {
  categories: TemporaryMenuCategory[]
}

/**
 * Accessible anchor-navigation for menu categories (TASK-050). A plain
 * horizontally-scrollable link list rather than a client-side tab
 * bar — every entry is a real, keyboard-reachable anchor link to a
 * stable category section id, so it scales to many categories without
 * becoming an overcrowded tab bar.
 */
function MenuCategoryNav({ categories }: MenuCategoryNavProps) {
  return (
    <nav aria-label="Menu categories" className="border-b border-border">
      <ul className="flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:overflow-visible">
        {categories.map((category) => (
          <li key={category.id} className="shrink-0">
            <a
              href={`#${category.slug}`}
              className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium whitespace-nowrap text-secondary-foreground hover:bg-gianetto-soft-border/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { MenuCategoryNav }
