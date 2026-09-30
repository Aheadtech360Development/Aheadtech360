import { Chip, ChipList } from '../ui/Chip'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { ClientNames } from './ClientNames'
import s from './TrustBar.module.css'

interface TrustBarProps {
  label: string
  badges: readonly string[]
  clients: readonly string[]
}

export function TrustBar({ label, badges, clients }: TrustBarProps) {
  return (
    <Section tone="soft" pad="md">
      <Container>
        <div className={s.stack}>
          <p className={s.label}>{label}</p>
          <ChipList label="Credentials">
            {badges.map((b) => (
              <Chip key={b}>{b}</Chip>
            ))}
          </ChipList>
          <ClientNames names={clients} />
        </div>
      </Container>
    </Section>
  )
}
