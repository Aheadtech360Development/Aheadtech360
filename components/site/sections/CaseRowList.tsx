import Link from 'next/link'
import { ResultBox } from '../ui/ResultBox'
import s from './CaseRowList.module.css'

export interface CaseRowItem {
  href: string
  vertical: string
  name: string
  problem: string
  blurb: string
  result: string
}

/** Stack of case-study link rows: navy identity block, story, and result tag. */
export function CaseRowList({ items }: { items: readonly CaseRowItem[] }) {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={s.row}>
            <div className={s.identity}>
              <p className={s.vertical}>{item.vertical}</p>
              <p className={s.name}>{item.name}</p>
            </div>
            <div className={s.body}>
              <div className={s.story}>
                <h2 className={s.problem}>{item.problem}</h2>
                <p className={s.blurb}>{item.blurb}</p>
              </div>
              <div className={s.end}>
                <ResultBox value={item.result} size="lg" />
                <span className={s.arrow} aria-hidden="true">
                  &rarr;
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
