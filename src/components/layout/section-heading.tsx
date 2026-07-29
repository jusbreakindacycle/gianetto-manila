import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingLevel = "h1" | "h2" | "h3" | "h4"
type SectionHeadingAlign = "left" | "center"

interface SectionHeadingProps {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  headingLevel?: SectionHeadingLevel
  align?: SectionHeadingAlign
  className?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  headingLevel = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  // headingLevel is a closed union ("h1"–"h4"), never derived from
  // untrusted text, so using it directly as the JSX tag is safe.
  const Heading = headingLevel

  return (
    <div
      data-slot="section-heading"
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-0 flex-col gap-3",
          align === "center" && "items-center text-center"
        )}
      >
        {eyebrow && (
          <p className="text-label font-semibold tracking-[0.14em] text-gianetto-red uppercase">
            {eyebrow}
          </p>
        )}
        <Heading className="text-section-title md:text-section-title-desktop font-heading text-foreground">
          {title}
        </Heading>
        {description && (
          <p className="max-w-prose text-body-large text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export { SectionHeading }
export type { SectionHeadingProps, SectionHeadingLevel, SectionHeadingAlign }
