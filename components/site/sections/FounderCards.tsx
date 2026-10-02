import Image from 'next/image'
import type { Founder } from '@/content/site/types'
import { cx } from '@/lib/cx'
import s from './FounderCards.module.css'

interface FounderCardsProps {
  founders: readonly Founder[]
  /** compact: horizontal, small avatar · full: stacked, larger avatar */
  variant?: 'compact' | 'full'
}

export function FounderCards({ founders, variant = 'compact' }: FounderCardsProps) {
  return (
    <ul className={s.list}>
      {founders.map((f) => (
        <li key={f.name} className={cx(s.card, s[variant])}>
          {f.photo ? (
            <Image
              src={f.photo.src}
              alt={f.photo.alt}
              width={f.photo.width}
              height={f.photo.height}
              sizes="96px"
              className={s.avatar}
            />
          ) : (
            <span className={s.avatar} aria-hidden="true" />
          )}
          <div className={s.body}>
            <div className={s.nameRow}>
              <h3 className={s.name}>{f.name}</h3>
              {f.badge && <span className={s.badge}>{f.badge}</span>}
            </div>
            <p className={s.role}>{f.role}</p>
            <p className={s.bio}>{f.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
