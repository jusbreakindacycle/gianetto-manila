import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

const PLACEHOLDER_ASPECT_CLASSES = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
} as const

type PlaceholderVisualAspect = keyof typeof PLACEHOLDER_ASPECT_CLASSES

interface PlaceholderVisualProps extends ComponentProps<"div"> {
  aspect?: PlaceholderVisualAspect
  /** Context label rendered for sighted users, e.g. a dish or branch name. Never claims to depict Gianetto. */
  label?: string
}

/**
 * Abstract, CSS-only visual placeholder used wherever no owner-approved
 * photograph exists yet (menu items, branches, events, gallery). Never
 * a downloaded or generated image file, and never captioned in a way
 * that implies it depicts an actual Gianetto dish, interior, or event.
 */
function PlaceholderVisual({
  aspect = "4/3",
  label,
  className,
  ...props
}: PlaceholderVisualProps) {
  return (
    <div
      data-slot="placeholder-visual"
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-gianetto-soft-border bg-gradient-to-br from-gianetto-cream via-gianetto-warm-ivory to-gianetto-olive-soft",
        PLACEHOLDER_ASPECT_CLASSES[aspect],
        className
      )}
      {...props}
    >
      <span className="px-3 text-center text-label font-medium tracking-[0.08em] text-gianetto-warm-gray uppercase">
        Image pending
      </span>
      {label ? <span className="sr-only">{`Placeholder visual for ${label}. No confirmed photograph is available yet.`}</span> : null}
    </div>
  )
}

export { PlaceholderVisual }
export type { PlaceholderVisualAspect }
