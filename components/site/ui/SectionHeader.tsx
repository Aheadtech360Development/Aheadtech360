import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import { ArrowLink } from './ArrowLink'
import { Eyebrow } from './Eyebrow'
import s from './SectionHeader.module.css'

type Size = 'lg' | 'md' | 'sm'

interface SectionHeaderProps {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  /** lg 40px · md 32px · sm 26px (in-content block headings) */
  size?: Size
  /** Optional right-aligned link, e.g. "All FAQs →" */
  action?: { label: string; href: string }
  as?: 'h1' | 'h2'
  id?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  size = 'lg',
  action,
  as: Heading = 'h2',
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cx(s.header, align === 'center' && s.center, action && s.withAction, className)}>
      <div className={s.text}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading id={id} className={cx(s.title, s[size])}>
          {title}
        </Heading>
        {lead && <p className={s.lead}>{lead}</p>}
      </div>
      {action && <ArrowLink href={action.href}>{action.label}</ArrowLink>}
    </div>
  )
}
