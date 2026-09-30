import { CALENDAR_EMBED_URL } from '@/content/site/site'
import { Container } from '../ui/Container'
import { CalendarIcon } from '../ui/Icons'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import s from './CalendarEmbed.module.css'

interface CalendarEmbedProps {
  id?: string
  eyebrow?: string
  title: string
  tone?: 'default' | 'soft'
}

/**
 * Booking calendar. Renders the GoHighLevel calendar when NEXT_PUBLIC_GHL_CALENDAR_URL is set;
 * until then it shows the labelled placeholder from the design.
 */
export function CalendarEmbed({ id = 'calendar', eyebrow = 'Pick A Time', title, tone = 'default' }: CalendarEmbedProps) {
  return (
    <Section id={id} tone={tone}>
      <Container size="narrow">
        <div className={s.stack}>
          <SectionHeader eyebrow={eyebrow} title={title} align="center" size="md" />

          {CALENDAR_EMBED_URL ? (
            <iframe src={CALENDAR_EMBED_URL} title="Book a call" className={s.frame} loading="lazy" />
          ) : (
            <div className={s.placeholder} role="img" aria-label="Booking calendar — coming soon">
              <CalendarIcon size={34} />
              <span className={s.phTitle}>Calendar Embed</span>
              <span className={s.phText}>Live GoHighLevel booking calendar loads here</span>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
