import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './Button.module.css'
import { SiteLink } from './SiteLink'

type Variant = 'solid' | 'onNavy' | 'text'
type Size = 'md' | 'sm'

interface ButtonProps {
  href: string
  children: ReactNode
  /** solid: navy (light backgrounds) · onNavy: green (navy backgrounds) · text: underlined link */
  variant?: Variant
  size?: Size
  /** Append a trailing arrow */
  arrow?: ReactNode
  className?: string
}

/** Internal paths render a Next <Link>; #anchors and mailto:/tel:/https: render a plain <a> (see SiteLink). */
export function Button({ href, children, variant = 'solid', size = 'md', arrow, className }: ButtonProps) {
  const cls = cx(s.button, s[variant], size === 'sm' && s.sm, className)
  const content = (
    <>
      {children}
      {arrow && (
        <span aria-hidden="true" className={s.arrow}>
          {arrow}
        </span>
      )}
    </>
  )

  return (
    <SiteLink href={href} className={cls}>
      {content}
    </SiteLink>
  )
}
