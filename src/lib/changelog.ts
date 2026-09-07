/**
 * Formats a Monday–Sunday changelog window as a compact human range.
 * Same month:  "3 – 9 Aug 2026"
 * Cross-month: "27 Jul – 2 Aug 2026"
 * Cross-year:  "28 Dec 2026 – 3 Jan 2027"
 */
export function formatWeekRange(start: Date, end: Date): string {
  const day = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', timeZone: 'UTC' });
  const month = (d: Date) => d.toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' });
  const year = (d: Date) => d.toLocaleDateString('en-GB', { year: 'numeric', timeZone: 'UTC' });

  if (year(start) !== year(end)) {
    return `${day(start)} ${month(start)} ${year(start)} – ${day(end)} ${month(end)} ${year(end)}`;
  }
  if (month(start) !== month(end)) {
    return `${day(start)} ${month(start)} – ${day(end)} ${month(end)} ${year(end)}`;
  }
  return `${day(start)} – ${day(end)} ${month(end)} ${year(end)}`;
}
