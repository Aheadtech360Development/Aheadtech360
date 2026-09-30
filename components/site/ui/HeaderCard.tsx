import Link from 'next/link'
import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './HeaderCard.module.css'

interface HeaderCardProps {
  kicker: string
  title: string
  /** Makes the whole card a link */
  href?: string
  children?: ReactNode
  className?: string
}

/** Card with a solid navy header (kicker + title) and a white body. */
export function HeaderCard({ kicker, title, href, children, className }: HeaderCardProps) {
  const inner = (
    <>
      <div className={s.head}>
        <p className={s.kicker}>{kicker}</p>
        <h3 className={s.title}>{title}</h3>
      </div>
      {children && <div className={s.body}>{children}</div>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cx(s.card, s.link, className)}>
        {inner}
      </Link>
    )
  }
  return <div className={cx(s.card, className)}>{inner}</div>
}
