import type { VideoItem } from '@/content/site/types'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { Section } from '../ui/Section'
import { VideoSlot } from '../ui/VideoSlot'
import s from './VideoBand.module.css'

/** Compact soft band: one eyebrow line above a pair of video tiles. */
export function VideoBand({ eyebrow, videos }: { eyebrow: string; videos: readonly VideoItem[] }) {
  return (
    <Section tone="soft" pad="md">
      <Container>
        <div className={s.stack}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <div className={s.videos}>
            {videos.map((v) => (
              <VideoSlot key={v.label} {...v} size="sm" />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
