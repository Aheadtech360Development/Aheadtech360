/** Joins class names, skipping falsy values. Keeps CSS Module usage terse. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
