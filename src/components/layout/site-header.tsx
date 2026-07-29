import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/page-container"
import { MobileNavigation } from "@/components/layout/mobile-navigation"
import { cn } from "@/lib/utils"
import {
  PUBLIC_NAVIGATION_ITEMS,
  RESERVATION_NAVIGATION_ITEM,
} from "@/lib/public-navigation"

function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <PageContainer className="flex h-16 items-center justify-between gap-4 sm:h-20">
        {/* Provisional text wordmark — not the recovered or official logo. */}
        <Link
          href="/"
          className="font-heading text-card-title text-gianetto-red rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          Gianetto
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
        >
          {PUBLIC_NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-medium text-foreground hover:text-gianetto-red focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href={RESERVATION_NAVIGATION_ITEM.href}
            className={buttonVariants({ variant: "primary" })}
          >
            {RESERVATION_NAVIGATION_ITEM.label}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={RESERVATION_NAVIGATION_ITEM.href}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            {RESERVATION_NAVIGATION_ITEM.label}
          </Link>
          <MobileNavigation />
        </div>
      </PageContainer>
    </header>
  )
}

export { SiteHeader }
