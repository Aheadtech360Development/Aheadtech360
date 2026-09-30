import type { CSSProperties } from 'react'
import type { HeaderCardItem } from '@/content/site/types'
import { HeaderCard } from '../ui/HeaderCard'
import s from './HeaderCardGrid.module.css'

interface HeaderCardGridProps {
  items: readonly HeaderCardItem[]
  columns?: 2 | 3
  label?: string
}

/** Grid of navy-header cards whose body is either a sentence or a bullet list. */
export function HeaderCardGrid({ items, columns = 3, label }: HeaderCardGridProps) {
  return (
    <ul className={s.grid} style={{ '--cols': columns } as CSSProperties} aria-label={label}>
      {items.map((item) => (
        <li key={item.title} className={s.item}>
          <HeaderCard kicker={item.kicker} title={item.title} href={item.href}>
            {item.text && <p className={s.text}>{item.text}</p>}
            {item.bullets && (
              <ul className={s.bullets}>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </HeaderCard>
        </li>
      ))}
    </ul>
  )
}
