import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "Website Terms (Working Draft) | Gianetto",
  description:
    "A working draft of Gianetto's website terms and notice. This is a preview website and has not received final owner review.",
}

export default function TermsPage() {
  return (
    <PageContainer size="reading" className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Working Draft — Not Final"
        title="Website Terms & Notice"
        description="This page is a working draft prepared during development and has not received final owner review or legal review."
      />

      <div className="flex flex-col gap-8 text-body text-muted-foreground">
        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Website-preview status
          </h2>
          <p>
            This website is a working preview built to demonstrate
            Gianetto&apos;s public customer journey. Content, layout, and
            copy are subject to change before any production launch.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Official identity
          </h2>
          <p>
            Gianetto&apos;s official business identity is pending final
            confirmation by the business owner and is not asserted as
            settled by this preview.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Menu, price, and availability changes
          </h2>
          <p>
            Menu items, categories, prices, and availability shown on this
            website — including the sample entries in this preview — may
            change at any time without notice.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Event schedule changes
          </h2>
          <p>
            Event listings, including dates, times, and performers, may
            change or be cancelled at any time. The sample events shown in
            this preview are fictional and do not represent a confirmed
            schedule.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Inquiries are not confirmed reservations
          </h2>
          <p>
            Submitting a reservation or private-event inquiry does not
            create a confirmed booking. A booking is only confirmed
            through direct follow-up from Gianetto.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            External links
          </h2>
          <p>
            This preview does not currently link to external Gianetto
            channels. Any external link added later will first be verified
            as an official Gianetto channel.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Copyright and media ownership
          </h2>
          <p>
            Text and design elements on this website belong to the
            Gianetto project unless otherwise noted. Placeholder visuals
            used throughout this preview are abstract, CSS-based
            placeholders and do not depict Gianetto.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            No online ordering or payments
          </h2>
          <p>
            This website does not process online orders or payments of
            any kind.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Owner review required
          </h2>
          <p>
            This preview, including these terms, requires review and
            approval by the Gianetto owner before any production launch.
          </p>
        </section>
      </div>
    </PageContainer>
  )
}
