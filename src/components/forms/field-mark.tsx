/** Visual + accessible "required" indicator, paired with a real `required` attribute on the control. */
function RequiredMark() {
  return (
    <>
      <span aria-hidden="true" className="text-gianetto-red">
        {" "}
        *
      </span>
      <span className="sr-only"> (required)</span>
    </>
  )
}

/** Muted "(optional)" label suffix for fields that are not required. */
function OptionalMark() {
  return <span className="text-muted-foreground font-normal"> (optional)</span>
}

export { RequiredMark, OptionalMark }
