import s from './TierLadder.module.css'

export interface Tier {
  name: string
  description: string
}

/** Ordered list of pricing tiers: name on the left, what it covers on the right. */
export function TierLadder({ tiers }: { tiers: readonly Tier[] }) {
  return (
    <ol className={s.list}>
      {tiers.map((t) => (
        <li key={t.name} className={s.row}>
          <span className={s.name}>{t.name}</span>
          <span className={s.text}>{t.description}</span>
        </li>
      ))}
    </ol>
  )
}
