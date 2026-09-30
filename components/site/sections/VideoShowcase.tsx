import type { VideoItem } from '@/content/site/types'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { VideoSlot } from '../ui/VideoSlot'
import s from './VideoShowcase.module.css'

interface VideoShowcaseProps {
  id?: string
  eyebrow: string
  title: string
  lead?: string
  video: VideoItem
}

/** Centred header over one large video tile (the VSL). */
export function VideoShowcase({ id, eyebrow, title, lead, video }: VideoShowcaseProps) {
  return (
    <Section id={id}>
      <Container size="narrow">
        <div className={s.stack}>
          <SectionHeader eyebrow={eyebrow} title={title} lead={lead} align="center" size="md" />
          <VideoSlot {...video} size="lg" />
        </div>
      </Container>
    </Section>
  )
}
