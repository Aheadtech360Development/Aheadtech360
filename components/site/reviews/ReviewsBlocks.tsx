import type { ReactNode } from 'react'
import type { Quote } from '@/content/site/reviews-page'
import s from './ReviewsBlocks.module.css'

/** Credentials in one bordered strip. */
export function CredentialStrip({ items }: { items: readonly { title: string; text: string }[] }) {
  return (
    <ul className={s.cred}>
      {items.map((it) => (
        <li key={it.title}>
          <b>{it.title}</b>
          <span>{it.text}</span>
        </li>
      ))}
    </ul>
  )
}

/** Written reviews as quote cards, with who said it and where. */
export function QuoteGrid({ quotes }: { quotes: readonly Quote[] }) {
  return (
    <div className={s.quotes}>
      {quotes.map((q) => (
        <figure key={q.text} className={s.quote}>
          <p className={s.stars} role="img" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
          <blockquote>
            <p>{`“${q.text}”`}</p>
          </blockquote>
          <figcaption>
            <b>{q.name}</b>
            <span>{q.role}</span>
            <span className={s.source}>{q.source}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

/** The two founder video cards side by side (stacked on tablet and phone). */
export function VideoPair({ children }: { children: ReactNode }) {
  return <div className={s.videos}>{children}</div>
}

/** Titled group of screenshots on the receipts section. */
export function ReceiptGroup({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <div className={s.group}>
      <h3 className={s.groupTitle}>{title}</h3>
      {note && <p className={s.groupNote}>{note}</p>}
      {children}
    </div>
  )
}

/** "Open the stores:" line of outbound links. */
export function StoreLinks({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <p className={s.live}>
      Open the stores:{' '}
      {links.map((l, i) => (
        <span key={l.href}>
          {i > 0 && ' · '}
          <a href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        </span>
      ))}
    </p>
  )
}
