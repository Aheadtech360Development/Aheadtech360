import s from './ClientNames.module.css'

/** Plain-text client "logo" row. */
export function ClientNames({ names }: { names: readonly string[] }) {
  return (
    <ul className={s.list} aria-label="Clients">
      {names.map((n) => (
        <li key={n} className={s.name}>
          {n}
        </li>
      ))}
    </ul>
  )
}
