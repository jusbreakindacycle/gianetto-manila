"use client"

import Link from "next/link"

import { cormorantGaramond, manrope } from "@/lib/fonts"
import "./globals.css"

/**
 * Root-level error boundary (Next.js 16 global-error convention). This
 * replaces the entire document, including <html> and <body>, so it
 * cannot import the root layout or any component tree that assumes one.
 * It never surfaces error.message, error.digest, a stack trace, or any
 * internal detail to customers — only a safe, on-brand recovery screen.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full items-center justify-center bg-background px-4 py-16 text-foreground">
        <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
          <p className="text-label font-semibold tracking-[0.14em] text-gianetto-red uppercase">
            Gianetto
          </p>
          <h1 className="text-page-title font-heading text-foreground">
            Something went wrong
          </h1>
          <p className="max-w-prose text-body-large text-muted-foreground">
            We&apos;re sorry — this page couldn&apos;t load. Please try
            again, or return to the homepage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-gianetto-red-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-all hover:bg-gianetto-soft-border/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
