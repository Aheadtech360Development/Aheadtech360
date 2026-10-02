import type { VideoTestimonial } from '@/content/site/types'
import { ArrowLink } from '../ui/ArrowLink'
import { Eyebrow } from '../ui/Eyebrow'
import { ResultBox } from '../ui/ResultBox'
import { VideoSlot } from '../ui/VideoSlot'
import s from './VideoTestimonialCard.module.css'

/** A founder video with who they are, the result they got, and a link to the full case study. */
export function VideoTestimonialCard({ video }: { video: VideoTestimonial }) {
  const { client, role, result, href, ...tile } = video
  return (
    <article className={s.card}>
      <VideoSlot {...tile} size="sm" hideCaption className={s.tile} />
      <div className={s.body}>
        <Eyebrow>Video Testimonial</Eyebrow>
        <h4 className={s.name}>{client}</h4>
        <p className={s.role}>{role}</p>
        <ResultBox value={result} className={s.result} />
        <ArrowLink href={href}>Read the case study</ArrowLink>
      </div>
    </article>
  )
}
