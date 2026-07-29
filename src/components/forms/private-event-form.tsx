"use client"

import Link from "next/link"
import { useId, useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FormStatusMessage } from "@/components/forms/form-status-message"
import { OptionalMark, RequiredMark } from "@/components/forms/field-mark"
import type { TemporaryBranch } from "@/types/temporary-content"

const NATIVE_CONTROL_CLASSES =
  "h-11 w-full rounded-2xl border border-transparent bg-input/50 px-3 text-base outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"

const PROVISIONAL_EVENT_TYPES = [
  "Birthday",
  "Anniversary",
  "Corporate Gathering",
  "Other",
] as const

interface PrivateEventFormProps {
  branches: TemporaryBranch[]
}

/**
 * Interface-only private-event inquiry demo form (TASK-067). Event
 * types listed are a conservative, clearly provisional working set —
 * not a confirmed catalog of what Gianetto offers. No guest limits,
 * deposit rules, or capacities are encoded anywhere in this form.
 */
function PrivateEventForm({ branches }: PrivateEventFormProps) {
  const formId = useId()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <p className="text-small text-muted-foreground">
        Fields marked <RequiredMark /> are required.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-name`}>
            Full name
            <RequiredMark />
          </Label>
          <Input
            id={`${formId}-name`}
            name="fullName"
            autoComplete="name"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-organization`}>
            Organization
            <OptionalMark />
          </Label>
          <Input
            id={`${formId}-organization`}
            name="organization"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-email`}>
            Email
            <RequiredMark />
          </Label>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-mobile`}>
            Mobile number
            <RequiredMark />
          </Label>
          <Input
            id={`${formId}-mobile`}
            name="mobileNumber"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${formId}-event-type`}>
          Event type
          <RequiredMark />
        </Label>
        <select
          id={`${formId}-event-type`}
          name="eventType"
          required
          defaultValue=""
          className={NATIVE_CONTROL_CLASSES}
        >
          <option value="" disabled>
            Select an event type
          </option>
          {PROVISIONAL_EVENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <p className="text-label text-muted-foreground">
          This list is a provisional working set and subject to
          Gianetto&apos;s confirmation.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${formId}-branch`}>
          Preferred branch
          <RequiredMark />
        </Label>
        <select
          id={`${formId}-branch`}
          name="preferredBranch"
          required
          defaultValue=""
          className={NATIVE_CONTROL_CLASSES}
        >
          <option value="" disabled>
            Select a branch
          </option>
          {branches.map((branch) => (
            <option key={branch.slug} value={branch.slug}>
              {branch.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-date`}>
            Preferred date
            <RequiredMark />
          </Label>
          <Input id={`${formId}-date`} name="preferredDate" type="date" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-time`}>
            Preferred time
            <RequiredMark />
          </Label>
          <Input id={`${formId}-time`} name="preferredTime" type="time" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-guest-count`}>
            Estimated guests
            <RequiredMark />
          </Label>
          <Input
            id={`${formId}-guest-count`}
            name="estimatedGuestCount"
            type="number"
            min={1}
            step={1}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${formId}-notes`}>
          Event notes
          <OptionalMark />
        </Label>
        <Textarea
          id={`${formId}-notes`}
          name="eventNotes"
          placeholder="Anything that would help Gianetto understand your event"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={`${formId}-privacy`}
          name="privacyAcknowledged"
          type="checkbox"
          required
          className="mt-1 size-5 shrink-0 rounded-sm border border-border text-primary outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        />
        <Label htmlFor={`${formId}-privacy`} className="font-normal">
          I understand this is a demo inquiry form, and I have read the{" "}
          <Link
            href="/privacy"
            className="text-gianetto-red underline underline-offset-4"
          >
            privacy draft
          </Link>
          .<RequiredMark />
        </Label>
      </div>

      <Button type="submit" className="w-fit">
        Send Private-Event Inquiry
      </Button>

      {submitted && (
        <FormStatusMessage variant="info">
          This is a website-demo form. No inquiry was sent.
        </FormStatusMessage>
      )}
    </form>
  )
}

export { PrivateEventForm }
