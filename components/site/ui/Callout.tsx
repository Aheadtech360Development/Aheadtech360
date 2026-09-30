import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import { Button } from './Button'
import { Eyebrow } from './Eyebrow'
import s from './Callout.module.css'

interface IconCalloutProps {
  icon: ReactNode
  title: string
  text?: string
  className?: string
}

/** Outlined box with a green icon tile — used for the guarantee and for headline outcomes. */
export function IconCallout({ icon, title, text, className }: IconCalloutProps) {
  return (
    <div className={cx(s.callout, s.withIcon, className)}>
      <span className={s.iconTile}>{icon}</span>
      <div>
        <p className={s.iconTitle}>{title}</p>
        {text && <p className={s.text}>{text}</p>}
      </div>
    </div>
  )
}

interface ActionCalloutProps {
  eyebrow: string
  title: string
  text?: string
  action: { label: string; href: string }
  className?: string
}

/** Outlined box with copy on the left and a single button on the right. */
export function ActionCallout({ eyebrow, title, text, action, className }: ActionCalloutProps) {
  return (
    <div className={cx(s.callout, s.withAction, className)}>
      <div className={s.actionCopy}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <p className={s.actionTitle}>{title}</p>
        {text && <p className={s.text}>{text}</p>}
      </div>
      <Button href={action.href}>{action.label}</Button>
    </div>
  )
}
