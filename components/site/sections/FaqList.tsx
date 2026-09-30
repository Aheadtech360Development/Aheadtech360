import Link from 'next/link'
import type { FaqItem } from '@/content/site/types'
import s from './FaqList.module.css'

/** Boxed list of questions with their answers always visible (matches the design; no accordion). */
export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <dl className={s.list}>
      {items.map((item) => (
        <div key={item.question} className={s.row}>
          <dt className={s.question}>{item.question}</dt>
          <dd className={s.answer}>
            {item.answer}
            {item.link && (
              <>
                {' '}
                <Link href={item.link.href} className={s.link}>
                  {item.link.label} &rarr;
                </Link>
              </>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
