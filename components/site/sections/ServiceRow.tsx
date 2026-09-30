import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import s from './ServiceRow.module.css'

interface ServiceRowProps {
  id: string
  number: string
  label: string
  title: string
  bullets: readonly string[]
  tone?: 'default' | 'soft'
}

/** One service: big index number on the left, label + outcome headline + bullets on the right. */
export function ServiceRow({ id, number, label, title, bullets, tone = 'default' }: ServiceRowProps) {
  return (
    <Section id={id} tone={tone} aria-labelledby={`${id}-title`}>
      <Container>
        <div className={s.row}>
          <p className={s.number} aria-hidden="true">
            {number}
          </p>
          <div className={s.body}>
            <p className={s.label}>{label}</p>
            <h2 id={`${id}-title`} className={s.title}>
              {title}
            </h2>
            <ul className={s.bullets}>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
