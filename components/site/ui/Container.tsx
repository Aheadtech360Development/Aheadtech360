import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './Container.module.css'

type Size = 'header' | 'content' | 'narrow' | 'prose' | 'cta'

interface ContainerProps {
  /** header 1240 · content 1080 · narrow 900 · prose 800 · cta 700 */
  size?: Size
  className?: string
  children: ReactNode
}

/** Centred, gutter-padded content column. The only place content widths are defined. */
export function Container({ size = 'content', className, children }: ContainerProps) {
  return <div className={cx(s.container, s[size], className)}>{children}</div>
}
