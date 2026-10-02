import Script from 'next/script'
import { CALENDAR_EMBED } from '@/content/site/site'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import s from './CalendarEmbed.module.css'

interface CalendarEmbedProps {
  /** Anchor id; CALENDAR_EMBED.anchor and the "Book A Call" links on the same page point at it. */
  id?: string
  eyebrow?: string
  title: string
  tone?: 'default' | 'soft'
}

/**
 * "Pick A Time" booking calendar: the GoHighLevel booking widget. GoHighLevel's form_embed.js
 * parks the iframe off-screen until the widget reports it is ready, then reveals it and resizes it
 * to fit each booking step. So the iframe must NOT be loading="lazy": a parked (off-screen) lazy
 * iframe never loads, never reports ready, and the calendar would stay invisible.
 */
export function CalendarEmbed({ id = 'calendar', eyebrow = 'Pick A Time', title, tone = 'default' }: CalendarEmbedProps) {
  return (
    <Section id={id} tone={tone}>
      <Container size="narrow">
        <div className={s.stack}>
          <SectionHeader eyebrow={eyebrow} title={title} align="center" size="md" />
          <iframe
            id={CALENDAR_EMBED.iframeId}
            src={CALENDAR_EMBED.src}
            title="Book a free call with AheadTech360"
            allow="payment"
            scrolling="no"
            className={s.frame}
          />
        </div>
      </Container>
      <Script src={CALENDAR_EMBED.script} strategy="afterInteractive" />
    </Section>
  )
}
