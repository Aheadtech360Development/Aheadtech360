import { HeaderCard } from '../ui/HeaderCard'
import s from './CaseSnapshotGrid.module.css'

export interface CaseSnapshotItem {
  href: string
  name: string
  result: string
  blurb: string
}

/** Three case-study teasers: navy header, headline number, one-line story, link prompt. */
export function CaseSnapshotGrid({ items }: { items: readonly CaseSnapshotItem[] }) {
  return (
    <ul className={s.grid}>
      {items.map((item) => (
        <li key={item.href} className={s.item}>
          <HeaderCard kicker="Case Snapshot" title={item.name} href={item.href}>
            <p className={s.result}>{item.result}</p>
            <p className={s.blurb}>{item.blurb}</p>
            <p className={s.more}>Read The Full Case Study &rarr;</p>
          </HeaderCard>
        </li>
      ))}
    </ul>
  )
}
