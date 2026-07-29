import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

const PAGE_CONTAINER_SIZE_CLASSES = {
  standard: "max-w-6xl",
  wide: "max-w-[90rem]",
  reading: "max-w-3xl",
  form: "max-w-2xl",
} as const

type PageContainerSize = keyof typeof PAGE_CONTAINER_SIZE_CLASSES

interface PageContainerProps extends ComponentProps<"div"> {
  size?: PageContainerSize
}

function PageContainer({
  size = "standard",
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <div
      data-slot="page-container"
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        PAGE_CONTAINER_SIZE_CLASSES[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { PageContainer }
export type { PageContainerProps, PageContainerSize }
