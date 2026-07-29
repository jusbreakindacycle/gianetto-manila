import Link from "next/link"

import { PageContainer } from "@/components/layout/page-container"
import {
  PUBLIC_NAVIGATION_ITEMS,
  RESERVATION_NAVIGATION_ITEM,
} from "@/lib/public-navigation"

const LEGAL_NAVIGATION_ITEMS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Website Terms", href: "/terms" },
] as const

function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gianetto-dark-surface text-gianetto-warm-ivory">
      <PageContainer className="flex flex-col gap-10 py-12 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            {/* Provisional text wordmark — not the recovered or official logo. */}
            <span className="font-heading text-card-title text-gianetto-white">
              Gianetto
            </span>
            <p className="text-small text-gianetto-warm-ivory">
              This website is being prepared as Gianetto&apos;s official
              online home. Verified branch and contact information will be
              published before launch.
            </p>
            <p className="text-small text-gianetto-warm-ivory">
              Branch information is pending final owner verification.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1 sm:text-right"
          >
            {PUBLIC_NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm text-gianetto-warm-ivory hover:text-gianetto-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={RESERVATION_NAVIGATION_ITEM.href}
              className="rounded-sm text-sm text-gianetto-warm-ivory hover:text-gianetto-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
            >
              {RESERVATION_NAVIGATION_ITEM.label}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-gianetto-warm-ivory/15 pt-6 text-small text-gianetto-warm-ivory sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Gianetto. All rights reserved.</p>
          <div className="flex gap-4">
            {LEGAL_NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm hover:text-gianetto-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}

export { SiteFooter }
