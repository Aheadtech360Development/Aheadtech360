import type { ReactNode } from 'react'

const EMAIL = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g

/** Turns plain email addresses into mailto links. */
function linkEmails(text: string, keyPrefix: string): ReactNode[] {
  return text.split(EMAIL).map((part, i) =>
    i % 2 === 1 ? (
      <a key={`${keyPrefix}-${i}`} href={`mailto:${part}`}>
        {part}
      </a>
    ) : (
      part
    )
  )
}

/**
 * Minimal inline formatting for content strings:
 *  - **double asterisks** → <strong>
 *  - plain email addresses → mailto links
 * Content stays plain data; no HTML is ever injected.
 */
export function renderRichText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).flatMap<ReactNode>((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return [<strong key={`b-${i}`}>{linkEmails(part.slice(2, -2), `b${i}`)}</strong>]
    }
    return linkEmails(part, `t${i}`)
  })
}
