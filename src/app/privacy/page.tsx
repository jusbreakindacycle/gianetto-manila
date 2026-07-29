import type { Metadata } from "next"

import { PageContainer } from "@/components/layout/page-container"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "Privacy (Working Draft) | Gianetto",
  description:
    "A working draft of Gianetto's privacy notice. This is not a final, legally reviewed policy.",
}

export default function PrivacyPage() {
  return (
    <PageContainer size="reading" className="flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        headingLevel="h1"
        eyebrow="Working Draft — Not Final"
        title="Privacy"
        description="Effective date: not yet set (Draft). This page is a working draft prepared during development. It has not undergone legal review and is not Gianetto's final privacy policy."
      />

      <div className="flex flex-col gap-8 text-body text-muted-foreground">
        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            No data is currently collected
          </h2>
          <p>
            The reservation and private-event forms on this demo website do
            not currently collect, transmit, or store any information you
            enter. They exist to preview the interface only.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Purpose of future data collection
          </h2>
          <p>
            Once connected, the reservation and private-event forms would
            collect information solely to process reservation and
            private-event inquiries — not for any other purpose unless
            separately disclosed.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Categories of data represented in the provisional forms
          </h2>
          <p>
            Full name, email address, mobile number, preferred branch,
            preferred date and time, party size or estimated guest count,
            and any optional notes you choose to add. This field set is
            provisional and subject to Gianetto&apos;s confirmation.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Intended access
          </h2>
          <p>
            Once connected, inquiry information would be intended for
            access only by authorized Gianetto staff who need it to
            respond to a reservation or private-event inquiry.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Security intent
          </h2>
          <p>
            Reasonable technical and organizational safeguards are
            intended to be put in place before any real inquiry data is
            collected. The specific measures have not yet been finalized.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Third-party processors
          </h2>
          <p>
            Whether any third-party service would process inquiry data on
            Gianetto&apos;s behalf is not yet finalized.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Retention
          </h2>
          <p>
            How long inquiry data would be retained is unresolved and will
            be defined before any real collection begins.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Privacy contact
          </h2>
          <p>
            A dedicated privacy contact channel has not yet been
            established and will be published here before launch.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            Future customer-rights requests
          </h2>
          <p>
            Once connected, customers would be able to request access to,
            correction of, or deletion of their inquiry information. The
            exact process for making such a request has not yet been
            defined.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-subheading font-heading text-foreground">
            No promotional consent assumed
          </h2>
          <p>
            Submitting a reservation or private-event inquiry, once
            connected, would not be treated as consent to receive
            promotional or marketing communications.
          </p>
        </section>
      </div>
    </PageContainer>
  )
}
