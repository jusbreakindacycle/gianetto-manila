import type { TemporaryBranch } from "@/types/temporary-content"

/**
 * Temporary branch data for the static prototype (TASK-044).
 *
 * Parqal and Capitol Commons are OBSERVED per CONTENT-INVENTORY.md
 * Section 7 and ADR-026 — visible in supplied material but not yet
 * owner-verified for production. Address, contact, map, and hours
 * fields are intentionally null: inventing any of them is prohibited
 * (see ADR-026, ADR-027, AGENT-RULES.md Section 55.4).
 *
 * Little Baguio is HISTORICAL per CONTENT-INVENTORY.md Section 7.3 and
 * ADR-027, and is omitted entirely from this active-branch data set.
 */
const ACTIVE_BRANCHES: TemporaryBranch[] = [
  {
    id: "branch-parqal",
    slug: "parqal",
    name: "Gianetto Parqal",
    areaLabel: "Parqal, Parañaque City",
    isActiveBranch: true,
    verificationStatus: "OBSERVED",
    addressLine: null,
    contactPhone: null,
    mapUrl: null,
    operatingHoursSummary: null,
    heroImageOwnershipStatus: null,
  },
  {
    id: "branch-capitol-commons",
    slug: "capitol-commons",
    name: "Gianetto Capitol Commons",
    areaLabel: "Capitol Commons, Pasig City",
    isActiveBranch: true,
    verificationStatus: "OBSERVED",
    addressLine: null,
    contactPhone: null,
    mapUrl: null,
    operatingHoursSummary: null,
    heroImageOwnershipStatus: null,
  },
]

function getActiveBranches(): TemporaryBranch[] {
  return ACTIVE_BRANCHES
}

function getBranchBySlug(slug: string): TemporaryBranch | undefined {
  return ACTIVE_BRANCHES.find((branch) => branch.slug === slug)
}

function getActiveBranchSlugs(): string[] {
  return ACTIVE_BRANCHES.map((branch) => branch.slug)
}

export { getActiveBranches, getBranchBySlug, getActiveBranchSlugs }
