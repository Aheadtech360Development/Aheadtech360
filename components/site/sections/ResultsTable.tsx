import Link from 'next/link'
import type { ResultRow } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { ResultBox } from '../ui/ResultBox'
import s from './ResultsTable.module.css'

/**
 * Client / Problem / Fix / Result table. Built from ARIA table roles (not <table>) so each row can be a
 * CSS grid on desktop and a stacked card on mobile while keeping table semantics.
 * A row with an `href` is one big link (stretched from the client name) to that client's case study.
 */
export function ResultsTable({ rows, label = 'Client results' }: { rows: readonly ResultRow[]; label?: string }) {
  return (
    <div role="table" aria-label={label} className={s.table}>
      <div role="row" className={cx(s.row, s.head)}>
        <div role="columnheader">Client</div>
        <div role="columnheader">Problem</div>
        <div role="columnheader">Fix</div>
        <div role="columnheader" className={s.right}>
          Result
        </div>
      </div>

      {rows.map((row) => (
        <div role="row" key={row.client} className={cx(s.row, row.href && s.linked)}>
          <div role="rowheader" className={s.client}>
            {row.href ? (
              <Link href={row.href} className={s.clientLink}>
                {row.client}
                <span aria-hidden="true" className={s.arrow}>
                  →
                </span>
              </Link>
            ) : (
              row.client
            )}
          </div>
          <div role="cell" data-label="Problem" className={s.problem}>
            {row.problem}
          </div>
          <div role="cell" data-label="Fix" className={s.fix}>
            {row.fix}
          </div>
          <div role="cell" data-label="Result" className={s.result}>
            <ResultBox value={row.result} />
          </div>
        </div>
      ))}
    </div>
  )
}
