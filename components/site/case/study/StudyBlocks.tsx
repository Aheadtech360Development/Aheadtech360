import Image from 'next/image'
import type { ReactNode } from 'react'
import type { ImageAsset } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { renderRichText } from '@/lib/rich-text'
import s from './StudyBlocks.module.css'

/** Outlined label with the green square marker. */
export function Tag({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <p className={cx(s.tag, muted && s.tagMuted)}>
      <i aria-hidden="true" />
      {children}
    </p>
  )
}

/** Section opener: tag, heading and an optional intro paragraph. */
export function SecHead({ tag, title, lead }: { tag: string; title: string; lead?: string }) {
  return (
    <div className={s.secHead}>
      <Tag>{tag}</Tag>
      <h2 className={s.h2}>{title}</h2>
      {lead && <p className={s.secLead}>{renderRichText(lead)}</p>}
    </div>
  )
}

/** Body paragraph; **double asterisks** make bold text. */
export function Para({ children }: { children: string }) {
  return <p className={s.para}>{renderRichText(children)}</p>
}

/** Small grey footnote under a block. */
export function Note({ children }: { children: string }) {
  return <p className={s.note}>{children}</p>
}

/** Two-column row that stacks on tablet and phone. */
export function Split({ ratio = 'even', children }: { ratio?: 'even' | 'wideLeft' | 'wideRight'; children: ReactNode }) {
  return <div className={cx(s.split, ratio !== 'even' && s[ratio])}>{children}</div>
}

/** Vertical space between blocks inside a column. */
export function Gap({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return <div className={s[`gap-${size}`]} aria-hidden="true" />
}

export interface StatItem {
  n: string
  l: string
}

/** Row of headline numbers in one bordered strip. */
export function StatRow({ items }: { items: readonly StatItem[] }) {
  return (
    <dl className={s.stats}>
      {items.map((it) => (
        <div key={it.l} className={s.stat}>
          <dt className={s.statL}>{it.l}</dt>
          <dd className={s.statN}>{it.n}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Numbered phase: big number, title, one-line note, then the phase body. */
export function Phase({ num, title, note, first, children }: { num: string; title: string; note: string; first?: boolean; children: ReactNode }) {
  return (
    <div className={cx(s.phase, first && s.phaseFirst)}>
      <div className={s.phaseTop}>
        <span className={s.phaseNum}>{num}</span>
        <h2 className={s.h2}>{title}</h2>
        <p className={s.phaseNote}>{note}</p>
      </div>
      {children}
    </div>
  )
}

export function Kicker({ children, flush }: { children: ReactNode; flush?: boolean }) {
  return <h3 className={cx(s.kicker, flush && s.kickerFlush)}>{children}</h3>
}

/** Green-square bullet list; **double asterisks** make bold text. */
export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className={s.list}>
      {items.map((t) => (
        <li key={t}>{renderRichText(t)}</li>
      ))}
    </ul>
  )
}

/** Screenshot that opens full size in a new tab, with a caption (bold lead-in plus text). */
export function Shot({ image, lead, children, wide }: { image: ImageAsset; lead: string; children?: string; wide?: boolean }) {
  return (
    <figure className={s.figure}>
      <a className={s.shot} href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`${lead} (opens full size)`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={wide ? '(max-width: 1120px) 94vw, 1080px' : '(max-width: 960px) 94vw, 540px'}
        />
      </a>
      <figcaption className={s.caption}>
        <b>{lead}</b> {children}
      </figcaption>
    </figure>
  )
}

/**
 * A tall full-page capture shown inside a browser-style window. The window has a fixed height and scrolls,
 * so the whole page can be read without the capture towering over the rest of the case study.
 * The window is keyboard-focusable so it can be scrolled without a mouse.
 */
export function PageCapture({ image, label, lead, children, after }: { image: ImageAsset; label: string; lead: string; children?: string; after?: boolean }) {
  return (
    <figure className={s.figure}>
      <div className={cx(s.browser, after && s.browserAfter)}>
        <div className={s.chrome}>
          <span className={s.dots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className={s.chromeLabel}>{label}</span>
          <a className={s.chromeLink} href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`${lead} Open the full capture in a new tab`}>
            Full size <span aria-hidden="true">{'↗'}</span>
          </a>
        </div>
        <div className={s.viewport} tabIndex={0} role="region" aria-label={`${label}, scrollable full-page capture`}>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 960px) 94vw, 540px" />
        </div>
      </div>
      <figcaption className={s.caption}>
        <b>{lead}</b> {children}
      </figcaption>
    </figure>
  )
}

/** A platform review screenshot, capped at a comfortable reading width. Opens full size in a new tab. */
export function ReviewShot({ image, lead, children }: { image: ImageAsset; lead: string; children?: string }) {
  return (
    <div className={s.reviewShot}>
      <Shot image={image} lead={lead}>
        {children}
      </Shot>
    </div>
  )
}

/** Grid of figures: 2 up on desktop, 1 up on phones. */
export function ShotGrid({ children }: { children: ReactNode }) {
  return <div className={s.shotGrid}>{children}</div>
}

/** Vertical stack of figures with even spacing. */
export function ShotStack({ children }: { children: ReactNode }) {
  return <div className={s.shotStack}>{children}</div>
}

export interface TableRow {
  label: string
  cells: readonly string[]
}

/**
 * Metric table. `winFrom` is the first value column (0-based) given the green "result" treatment,
 * on every row or only the last (`winRows: 'last'`).
 */
export function DataTable({
  columns,
  rows,
  winFrom,
  winRows = 'all',
}: {
  columns: readonly string[]
  rows: readonly TableRow[]
  winFrom?: number
  winRows?: 'last' | 'all'
}) {
  return (
    <div className={s.tableWrap}>
      <table className={s.table}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              {r.cells.map((c, ci) => {
                const win = winFrom !== undefined && ci >= winFrom && (winRows === 'all' || ri === rows.length - 1)
                return (
                  <td key={ci} className={cx(s.num, win && s.win)}>
                    {c}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export interface BarRow {
  label: string
  /** Bar length, 0 to 100 */
  pct: number
  value: string
  /** green marks the "after" period */
  after?: boolean
}

/** Horizontal comparison bars. The values are printed, so the bars themselves are decoration. */
export function Bars({ rows, note }: { rows: readonly BarRow[]; note?: string }) {
  return (
    <>
      <ul className={s.bars}>
        {rows.map((r) => (
          <li key={r.label} className={s.barRow}>
            <span className={s.barLabel}>{r.label}</span>
            <span className={s.track} aria-hidden="true">
              <span className={cx(s.fill, r.after && s.fillAfter)} style={{ width: `${r.pct}%` }} />
            </span>
            <span className={s.barValue}>{r.value}</span>
          </li>
        ))}
      </ul>
      {note && <p className={s.note}>{note}</p>}
    </>
  )
}

/** Highlighted aside: green (default) or navy. */
export function Callout({ kicker, tone = 'green', children }: { kicker: string; tone?: 'green' | 'navy'; children: ReactNode }) {
  return (
    <div className={cx(s.callout, tone === 'navy' && s.calloutNavy)}>
      <h3 className={cx(s.kicker, s.kickerFlush)}>{kicker}</h3>
      {children}
    </div>
  )
}

/** Large statement inside a callout. */
export function CalloutHeadline({ children }: { children: string }) {
  return <p className={s.calloutHeadline}>{children}</p>
}

export interface MetricCard {
  when: string
  big: string
  rows: readonly { k: string; v: string }[]
  now?: boolean
}

/** Month-by-month snapshot cards in one bordered strip. */
export function MetricCards({ cards }: { cards: readonly MetricCard[] }) {
  return (
    <div className={s.cards}>
      {cards.map((c) => (
        <div key={c.when} className={cx(s.card, c.now && s.cardNow)}>
          <p className={s.cardWhen}>{c.when}</p>
          <p className={s.cardBig}>{c.big}</p>
          <dl className={s.cardRows}>
            {c.rows.map((r) => (
              <div key={r.k}>
                <dt>{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  )
}

/** Vertical timeline with a green square per step. */
export function Timeline({ steps }: { steps: readonly { when: string; title: string; text: string }[] }) {
  return (
    <ol className={s.timeline}>
      {steps.map((st) => (
        <li key={st.title}>
          <p className={s.tlWhen}>{st.when}</p>
          <h3 className={s.tlTitle}>{st.title}</h3>
          <p className={s.tlText}>{st.text}</p>
        </li>
      ))}
    </ol>
  )
}

/** Dashed placeholder for proof that has not been supplied yet. */
export function Placeholder({ text, note }: { text: string; note: string }) {
  return (
    <div className={s.placeholder}>
      <Tag muted>Placeholder</Tag>
      <p className={s.phText}>{text}</p>
      <small>{note}</small>
    </div>
  )
}
