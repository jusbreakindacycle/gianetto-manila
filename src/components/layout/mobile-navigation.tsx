"use client"

import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  PUBLIC_NAVIGATION_ITEMS,
  RESERVATION_NAVIGATION_ITEM,
} from "@/lib/public-navigation"

function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" size="icon" />}>
        <MenuIcon aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader className="pr-16">
          <SheetTitle>Gianetto</SheetTitle>
        </SheetHeader>

        <nav aria-label="Primary" className="flex flex-1 flex-col gap-1 px-6">
          {PUBLIC_NAVIGATION_ITEMS.map((item) => (
            <SheetClose
              key={item.href}
              render={
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                />
              }
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>

        <SheetFooter>
          <SheetClose
            render={
              <Button
                className="w-full"
                render={<Link href={RESERVATION_NAVIGATION_ITEM.href} />}
              />
            }
          >
            {RESERVATION_NAVIGATION_ITEM.label}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { MobileNavigation }
