import type { VideoItem } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { PlayIcon } from './Icons'
import { VideoPlayer } from './VideoPlayer'
import s from './VideoSlot.module.css'

type Size = 'lg' | 'md' | 'sm'

interface VideoSlotProps extends VideoItem {
  /** lg: hero/VSL tile · md: testimonial pair · sm: compact testimonial pair */
  size?: Size
  className?: string
}

/**
 * Video tile. With a `src` it becomes a click-to-play player (nothing is downloaded until played);
 * without one it renders the same tile as a non-interactive placeholder.
 */
export function VideoSlot({ label, src, poster, duration, size = 'md', className }: VideoSlotProps) {
  if (src) {
    return <VideoPlayer label={label} src={src} poster={poster} duration={duration} size={size} className={className} />
  }

  return (
    <div className={cx(s.tile, s[size], s.placeholder, className)} role="img" aria-label={`${label} — video coming soon`}>
      <span className={s.play} aria-hidden="true">
        <PlayIcon size={size === 'lg' ? 24 : 18} />
      </span>
      <span className={s.caption}>{label}</span>
      {duration && <span className={s.duration}>{duration}</span>}
    </div>
  )
}
