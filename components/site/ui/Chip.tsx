import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './Chip.module.css'

interface ChipProps {
  children: ReactNode
  /** Optional leading icon. Without one, a small green square marker is used (uppercase label). */
  icon?: ReactNode
  /** Colour of the icon: navy (default) or green (e.g. a rating star) */
  iconTone?: 'navy' | 'green'
  className?: string
}

/** Outlined fact/trust chip. Renders as a list item — wrap in <ChipList>. */
export function Chip({ children, icon, iconTone = 'navy', className }: ChipProps) {
  return (
    <li className={cx(s.chip, icon ? s.withIcon : s.withMarker, className)}>
      {icon ? <span className={cx(s.icon, iconTone === 'green' && s.iconGreen)}>{icon}</span> : <span className={s.marker} aria-hidden="true" />}
      <span>{children}</span>
    </li>
  )
}

export function ChipList({ children, className, label }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <ul className={cx(s.list, className)} aria-label={label}>
      {children}
    </ul>
  )
}
