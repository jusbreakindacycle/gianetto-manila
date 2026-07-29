import type {
  TemporaryMenuCategory,
  TemporaryMenuItem,
} from "@/types/temporary-content"

/**
 * Neutral sample menu data for the static prototype (TASK-048).
 *
 * TASK-048 and TASK-051 remain BLOCKED in docs/TASKS.md pending the
 * current Gianetto menu — this file is the documented Safe Temporary
 * Option: generic sample categories and items that do not mimic any
 * confirmed current or historical Gianetto menu. Prices are always
 * null; descriptions are intentionally generic and demonstrative.
 */
const MENU_CATEGORIES: TemporaryMenuCategory[] = [
  {
    id: "category-shared-plates",
    slug: "sample-shared-plates",
    name: "Sample Shared Plates",
    displayOrder: 1,
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "category-pasta",
    slug: "sample-pasta",
    name: "Sample Pasta",
    displayOrder: 2,
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "category-pizza",
    slug: "sample-pizza",
    name: "Sample Pizza",
    displayOrder: 3,
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "category-mains",
    slug: "sample-mains",
    name: "Sample Mains",
    displayOrder: 4,
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "category-dessert",
    slug: "sample-dessert",
    name: "Sample Dessert",
    displayOrder: 5,
    verificationStatus: "PROVISIONAL",
  },
  {
    id: "category-beverage",
    slug: "sample-beverage",
    name: "Sample Beverage",
    displayOrder: 6,
    verificationStatus: "PROVISIONAL",
  },
]

const MENU_ITEMS: TemporaryMenuItem[] = [
  {
    id: "item-shared-starter",
    categoryId: "category-shared-plates",
    name: "Sample Garden Starter",
    description:
      "A placeholder shared-plate entry used to preview layout and spacing for this category.",
    price: null,
    availabilityLabel: "Available at Parqal",
    branchSlugs: ["parqal"],
    isFeatured: true,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: "AI_GENERATED_PLACEHOLDER",
  },
  {
    id: "item-shared-board",
    categoryId: "category-shared-plates",
    name: "Sample Bread Board",
    description:
      "A demonstration entry showing how a second shared-plate item reads next to the first.",
    price: null,
    availabilityLabel: null,
    branchSlugs: [],
    isFeatured: false,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: null,
  },
  {
    id: "item-pasta-tomato",
    categoryId: "category-pasta",
    name: "Sample Tomato Pasta",
    description:
      "A generic pasta entry used to demonstrate description length and card wrapping.",
    price: null,
    availabilityLabel: "Available at Capitol Commons",
    branchSlugs: ["capitol-commons"],
    isFeatured: true,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: "AI_GENERATED_PLACEHOLDER",
  },
  {
    id: "item-pasta-cream",
    categoryId: "category-pasta",
    name: "Sample Cream Pasta",
    description:
      "A second pasta placeholder used to preview a denser, text-forward category listing.",
    price: null,
    availabilityLabel: null,
    branchSlugs: [],
    isFeatured: false,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: null,
  },
  {
    id: "item-pizza-classic",
    categoryId: "category-pizza",
    name: "Sample Classic Pizza",
    description:
      "A placeholder pizza entry used to preview the menu's pizza category presentation.",
    price: null,
    availabilityLabel: "Available at Parqal",
    branchSlugs: ["parqal"],
    isFeatured: true,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: "AI_GENERATED_PLACEHOLDER",
  },
  {
    id: "item-pizza-vegetable",
    categoryId: "category-pizza",
    name: "Sample Vegetable Pizza",
    description:
      "A second pizza placeholder demonstrating an item without an availability label.",
    price: null,
    availabilityLabel: null,
    branchSlugs: [],
    isFeatured: false,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: null,
  },
  {
    id: "item-main-grilled",
    categoryId: "category-mains",
    name: "Sample Grilled Main",
    description:
      "A placeholder main-course entry used to preview the mains category on desktop and mobile.",
    price: null,
    availabilityLabel: "Temporarily unavailable",
    branchSlugs: [],
    isFeatured: true,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: "AI_GENERATED_PLACEHOLDER",
  },
  {
    id: "item-main-braised",
    categoryId: "category-mains",
    name: "Sample Braised Main",
    description:
      "A second mains placeholder used to preview a longer item description across two lines of text.",
    price: null,
    availabilityLabel: null,
    branchSlugs: [],
    isFeatured: false,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: null,
  },
  {
    id: "item-dessert-house",
    categoryId: "category-dessert",
    name: "Sample House Dessert",
    description:
      "A placeholder dessert entry used to demonstrate the dessert category layout.",
    price: null,
    availabilityLabel: null,
    branchSlugs: [],
    isFeatured: false,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: null,
  },
  {
    id: "item-beverage-house",
    categoryId: "category-beverage",
    name: "Sample House Beverage",
    description: null,
    price: null,
    availabilityLabel: null,
    branchSlugs: [],
    isFeatured: false,
    verificationStatus: "PROVISIONAL",
    imageOwnershipStatus: null,
  },
]

function getMenuCategories(): TemporaryMenuCategory[] {
  return [...MENU_CATEGORIES].sort((a, b) => a.displayOrder - b.displayOrder)
}

function getMenuItemsByCategory(categoryId: string): TemporaryMenuItem[] {
  return MENU_ITEMS.filter((item) => item.categoryId === categoryId)
}

function getFeaturedMenuItems(limit?: number): TemporaryMenuItem[] {
  const featured = MENU_ITEMS.filter((item) => item.isFeatured)
  return typeof limit === "number" ? featured.slice(0, limit) : featured
}

export {
  getMenuCategories,
  getMenuItemsByCategory,
  getFeaturedMenuItems,
}
