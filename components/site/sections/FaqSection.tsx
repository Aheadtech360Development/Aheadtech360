import type { FaqItem } from '@/content/site/types'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { FaqList } from './FaqList'
import s from './FaqSection.module.css'

interface FaqSectionProps {
  eyebrow?: string
  title: string
  items: readonly FaqItem[]
  /** Link to the full FAQ page; omit on the FAQ page itself */
  action?: { label: string; href: string }
  tone?: 'default' | 'soft'
}

export function FaqSection({ eyebrow = 'Questions', title, items, action, tone = 'soft' }: FaqSectionProps) {
  return (
    <Section tone={tone}>
      <Container size="narrow">
        <div className={s.stack}>
          <SectionHeader eyebrow={eyebrow} title={title} size="md" action={action} />
          <FaqList items={items} />
        </div>
      </Container>
    </Section>
  )
}
