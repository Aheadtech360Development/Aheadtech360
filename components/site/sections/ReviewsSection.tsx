import Image from 'next/image'
import type { ReviewShotItem, VideoItem } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { Container } from '../ui/Container'
import { CameraIcon } from '../ui/Icons'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { VideoSlot } from '../ui/VideoSlot'
import s from './ReviewsSection.module.css'

interface ReviewsSectionProps {
  tone?: 'default' | 'soft'
  eyebrow?: string
  title: string
  lead?: string
  videos: readonly VideoItem[]
  shots: readonly ReviewShotItem[]
  id?: string
}

function ReviewShot({ platform, image }: ReviewShotItem) {
  if (image) {
    return (
      <li className={s.shotItem}>
        <a
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className={s.shot}
          aria-label={`${platform} review screenshot (opens full size)`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 767px) 50vw, 260px"
            className={s.shotImage}
          />
          <span className={s.pill}>{platform}</span>
        </a>
      </li>
    )
  }
  return (
    <li className={s.shotItem}>
      <div className={cx(s.shot, s.shotEmpty)} role="img" aria-label={`${platform} review screenshot — coming soon`}>
        <CameraIcon size={24} />
        <span className={s.shotLabel}>Screenshot</span>
        <span className={s.pill}>{platform}</span>
      </div>
    </li>
  )
}

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
                <VideoSlot key={v.label} {...v} size="md" />
              ))}
            </div>
          </div>

          <div className={s.block}>
            <h3 className={s.blockTitle}>Real Client Reviews</h3>
            <ul className={s.shots}>
              {shots.map((shot, i) => (
                <ReviewShot key={`${shot.platform}-${i}`} {...shot} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
