import type { CSSProperties } from 'react'
import type { CellItem } from '@/content/site/types'
import { cx } from '@/lib/cx'
import s from './CellGrid.module.css'

interface CellGridProps {
  items: readonly CellItem[]
  /** Desktop column count */
  columns?: 2 | 3 | 4
  /** Column count at <=1023px. Pick a value that divides the item count so no empty cell shows. */
  tabletColumns?: 1 | 2
  /** Colour of the dividers between cells (the outer frame is always navy) */
  divider?: 'navy' | 'line'
  /** Larger sentence-style titles (used for problem statements) */
  statement?: boolean
  label?: string
  className?: string
}

/**
 * Bordered grid of cells. Dividers are the grid's own 2px gap over a coloured backdrop,
 * so they stay correct at every column count without per-cell border rules.
 */
export function CellGrid({
  items,
  columns = 3,
  tabletColumns,
  divider = 'navy',
  statement = false,
  label,
  className,
}: CellGridProps) {
  const tablet = tabletColumns ?? (columns === 4 ? 2 : 1)
  const style = { '--cols': columns, '--cols-tablet': tablet } as CSSProperties

  return (
    <ul className={cx(s.grid, divider === 'line' && s.line, className)} style={style} aria-label={label}>
      {items.map((item) => (
        <li key={item.title} className={s.cell}>
          {item.lead?.kind === 'tag' && <span className={s.tag}>{item.lead.label}</span>}
          {item.lead?.kind === 'kicker' && <span className={s.kicker}>{item.lead.label}</span>}
          {item.lead?.kind === 'number' && <span className={s.number}>{item.lead.label}</span>}
          <h3 className={cx(s.title, statement && s.statement)}>{item.title}</h3>
          {item.text && <p className={s.text}>{item.text}</p>}
        </li>
      ))}
    </ul>
  )
}
