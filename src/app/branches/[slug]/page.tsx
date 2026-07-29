import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BranchDetailTemplate } from "@/components/public/branch-detail-template"
import { getActiveBranchSlugs, getBranchBySlug } from "@/data/branches"

interface BranchPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getActiveBranchSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BranchPageProps): Promise<Metadata> {
  const { slug } = await params
  const branch = getBranchBySlug(slug)

  if (!branch) {
    return {
      title: "Branch Not Found | Gianetto",
    }
  }

  return {
    title: `${branch.name} (Preview) | Gianetto`,
    description: `A working preview of the ${branch.name} branch page. Address, contact, and hours shown here are provisional and pending owner verification.`,
  }
}

export default async function BranchPage({ params }: BranchPageProps) {
  const { slug } = await params
  const branch = getBranchBySlug(slug)

  if (!branch) {
    notFound()
  }

  return <BranchDetailTemplate branch={branch} />
}
