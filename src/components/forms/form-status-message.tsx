import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type FormStatusVariant = "info" | "error" | "success"

const FORM_STATUS_CLASSES: Record<FormStatusVariant, string> = {
  info: "border-gianetto-information/30 bg-gianetto-information/10 text-gianetto-information",
  error: "border-destructive/30 bg-destructive/10 text-destructive",
  success: "border-gianetto-success/30 bg-gianetto-success/10 text-gianetto-success",
}

interface FormStatusMessageProps {
  variant: FormStatusVariant
  children: ReactNode
  className?: string
}

/**
 * Shared, reusable form status presentation (info / error / success).
 * Announced via `role="status"` + `aria-live="polite"` so screen-reader
 * users hear the message without color being the only signal. Phase 4
 * only ever renders the "info" variant (the demo-submission notice);
 * "error" and "success" exist for future real-submission wiring.
 */
function FormStatusMessage({ variant, children, className }: FormStatusMessageProps) {
  return (
    <p
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-lg border px-4 py-3 text-small font-medium",
        FORM_STATUS_CLASSES[variant],
        className
      )}
    >
      {children}
    </p>
  )
}

export { FormStatusMessage }
export type { FormStatusVariant }
