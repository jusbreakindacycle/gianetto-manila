import type { Metadata } from "next"

import { Hero } from "@/components/home/hero"
import { RestaurantIntroduction } from "@/components/home/restaurant-introduction"
import { FeaturedDishes } from "@/components/home/featured-dishes"
import { BranchSection } from "@/components/home/branch-section"
import { UpcomingEventsSection } from "@/components/home/upcoming-events-section"
import { DiningExperience } from "@/components/home/dining-experience"
import { PrivateEventsSection } from "@/components/home/private-events-section"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { ReservationCta } from "@/components/home/reservation-cta"

export const metadata: Metadata = {
  title: "Gianetto | Official Website (Preview)",
  description:
    "A working preview of Gianetto's homepage. Menu, branch, and event content shown here is provisional and pending owner verification.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <RestaurantIntroduction />
      <FeaturedDishes />
      <BranchSection />
      <UpcomingEventsSection />
      <DiningExperience />
      <PrivateEventsSection />
      <GalleryPreview />
      <ReservationCta />
    </>
  )
}
