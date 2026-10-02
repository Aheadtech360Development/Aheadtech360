import type { ReviewShotItem, VideoTestimonial } from '@/content/site/types'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { ReviewWall } from './ReviewWall'
import { VideoTestimonialCard } from './VideoTestimonialCard'
import s from './ReviewsSection.module.css'

interface ReviewsSectionProps {
  tone?: 'default' | 'soft'
  eyebrow?: string
  title: string
  lead?: string
  videos: readonly VideoTestimonial[]
  shots: readonly ReviewShotItem[]
  id?: string
}

/** Founder video cards, then a wall of real review screenshots that open full size. */
export function ReviewsSection({
  tone = 'soft',
  eyebrow = 'Reviews & Testimonials',
  title,
  lead,
  videos,
  shots,
  id = 'reviews',
}: ReviewsSectionProps) {
  return (
    <Section tone={tone} id={id}>
      <Container>
        <div className={s.stack}>
          <SectionHeader eyebrow={eyebrow} title={title} lead={lead} size="md" />

          <div className={s.block}>
            <h3 className={s.blockTitle}>Video Testimonials</h3>
            <div className={s.videos}>
              {videos.map((v) => (
                <VideoTestimonialCard key={v.label} video={v} />
              ))}
            </div>
          </div>

          <div className={s.block}>
            <h3 className={s.blockTitle}>Client Reviews &amp; Results</h3>
            <ReviewWall shots={shots} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
