import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './Eyebrow.module.css'

/** Small uppercase label with a square marker. Marker colour comes from the enclosing Section tone. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx(s.eyebrow, className)}>
      <span className={s.marker} aria-hidden="true" />
      {children}
    </p>
  )
}
