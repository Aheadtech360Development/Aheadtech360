import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './Badge.module.css'

interface BadgeProps {
  children: ReactNode
  /** outlined: navy border + green marker (page hero) · quiet: grey border, no marker */
  variant?: 'outlined' | 'quiet'
  className?: string
}

export function Badge({ children, variant = 'outlined', className }: BadgeProps) {
  return (
    <p className={cx(s.badge, variant === 'quiet' && s.quiet, className)}>
      {variant === 'outlined' && <span className={s.marker} aria-hidden="true" />}
      {children}
    </p>
  )
}
