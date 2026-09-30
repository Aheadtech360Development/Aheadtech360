import Link from 'next/link'
import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './ArrowLink.module.css'

/** Small uppercase text link with a trailing arrow ("All Case Studies →"). */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cx(s.link, className)}>
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  )
}
