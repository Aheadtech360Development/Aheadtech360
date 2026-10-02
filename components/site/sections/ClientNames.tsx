import type { CSSProperties } from 'react'
import { cx } from '@/lib/cx'
import s from './ClientNames.module.css'

/** Four copies of the list make two identical halves, so the loop is seamless however few names there are. */
const COPIES = 4

/** Seconds per name: keeps the scroll speed (about 60px/s) the same whether there are 4 names or 12. */
const SECONDS_PER_NAME = 5

/**
 * Client names as a news-style ticker. It loops forever inside its container (clipped at the section's
 * content width, edges faded); hover or keyboard focus pauses it, and visitors who prefer reduced motion
 * get the plain wrapped list instead. Only the first copy is exposed to assistive technology.
 */
export function ClientNames({ names }: { names: readonly string[] }) {
  const style = { '--ticker-duration': `${names.length * SECONDS_PER_NAME}s` } as CSSProperties
  return (
    <div className={s.ticker} style={style}>
      <div className={s.track}>
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul
            key={copy}
            className={cx(s.group, copy > 0 && s.copy)}
            aria-label={copy === 0 ? 'Clients' : undefined}
            aria-hidden={copy > 0 ? true : undefined}
          >
            {names.map((name) => (
              <li key={name} className={s.name}>
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
