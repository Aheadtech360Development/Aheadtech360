import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './Stack.module.css'

type Gap = 'xs' | 'sm' | 'md' | 'lg'

interface StackProps {
  /** xs 14px · sm 22px · md 26px · lg 30px */
  gap?: Gap
  className?: string
  children: ReactNode
}

/** Vertical flow with a fixed gap scale — replaces ad-hoc margins between a section's header and body. */
export function Stack({ gap = 'lg', className, children }: StackProps) {
  return <div className={cx(s.stack, s[gap], className)}>{children}</div>
}
