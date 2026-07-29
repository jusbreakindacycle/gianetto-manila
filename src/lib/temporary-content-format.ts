const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const

/**
 * Formats a stored "YYYY-MM-DD" sample date, e.g. "2026-08-15" -> "August 15, 2026".
 * Deliberately avoids Date/timezone conversion so the displayed date can
 * never drift from the stored value regardless of server or browser locale.
 */
function formatSampleEventDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number)
  return `${MONTH_NAMES[month - 1]} ${day}, ${year}`
}

/**
 * Formats a stored 24-hour "HH:MM" sample time, e.g. "19:00" -> "7:00 PM".
 */
function formatSampleEventTime(time: string): string {
  const [hourStr, minuteStr] = time.split(":")
  const hour = Number(hourStr)
  const minute = Number(minuteStr)
  const period = hour >= 12 ? "PM" : "AM"
  const displayHour = hour % 12 === 0 ? 12 : hour % 12
  const displayMinute = minute.toString().padStart(2, "0")
  return `${displayHour}:${displayMinute} ${period}`
}

export { formatSampleEventDate, formatSampleEventTime }
