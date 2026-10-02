import type { VideoItem } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { PlayIcon } from './Icons'
import { VideoPlayer } from './VideoPlayer'
import s from './VideoSlot.module.css'

type Size = 'lg' | 'md' | 'sm'

interface VideoSlotProps extends VideoItem {
  /** lg: hero/VSL tile · md: testimonial pair · sm: compact testimonial pair */
  size?: Size
  /** Drop the caption pill when the surrounding layout already names the video. */
  hideCaption?: boolean
  className?: string
}

/**
 * Video tile. With a `src` or `youtubeId` it becomes a click-to-play player (nothing heavy is
 * downloaded until played); without either it renders the same tile as a non-interactive placeholder.
 */
export function VideoSlot({ label, src, youtubeId, poster, duration, orientation, size = 'md', hideCaption, className }: VideoSlotProps) {
  const portrait = orientation === 'portrait'

  if (src || youtubeId) {
    return (
      <VideoPlayer
        label={label}
        src={src}
        youtubeId={youtubeId}
        poster={poster}
        duration={duration}
        size={size}
        portrait={portrait}
        hideCaption={hideCaption}
        className={className}
      />
    )
  }

  return (
    <div className={cx(s.tile, s[size], portrait && s.portrait, s.placeholder, className)} role="img" aria-label={`${label} — video coming soon`}>
      <span className={s.play} aria-hidden="true">
        <PlayIcon size={size === 'lg' ? 24 : 18} />
      </span>
      {!hideCaption && <span className={s.caption}>{label}</span>}
      {duration && <span className={s.duration}>{duration}</span>}
    </div>
  )
}
