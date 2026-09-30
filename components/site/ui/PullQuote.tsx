import type { ReactNode } from 'react'
import s from './PullQuote.module.css'

/** Statement with a navy rule down its left edge. */
export function PullQuote({ children }: { children: ReactNode }) {
  return <blockquote className={s.quote}>{children}</blockquote>
}
