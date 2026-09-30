import type { StatItem } from '@/content/site/types'
import s from './StatStrip.module.css'

/** Row of headline stats divided by thin rules, topped by a navy rule. */
export function StatStrip({ items }: { items: readonly StatItem[] }) {
  return (
    <dl className={s.strip}>
      {items.map((item) => (
        <div key={item.label} className={s.item}>
          {/* DOM order is term → description (valid <dl>); column-reverse shows the value above its label */}
          <dt className={s.label}>{item.label}</dt>
          <dd className={s.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
