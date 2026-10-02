'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cx } from '@/lib/cx'
import { PlayIcon } from './Icons'
import s from './VideoSlot.module.css'

interface VideoPlayerProps {
  label: string
  /** Local mp4 under /public */
  src?: string
  /** YouTube video id (privacy-enhanced embed) */
  youtubeId?: string
  poster?: string
  duration?: string
  size: 'lg' | 'md' | 'sm'
  portrait?: boolean
  hideCaption?: boolean
  className?: string
}

function posterSizes(size: VideoPlayerProps['size'], portrait?: boolean) {
  if (portrait) return '(max-width: 767px) 50vw, 340px'
  return size === 'lg' ? '(max-width: 900px) 100vw, 800px' : '(max-width: 767px) 100vw, 600px'
}

/**
 * Click-to-play. Nothing heavy is fetched up front: the <video> (tens of MB) or the YouTube iframe is
 * only mounted after the first click, so the tile costs one optimised poster image until then.
 */
export function VideoPlayer({ label, src, youtubeId, poster, duration, size, portrait, hideCaption, className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const tile = cx(s.tile, s[size], portrait && s.portrait, className)

  if (playing) {
    return (
      <div className={cx(tile, s.playing)}>
        {youtubeId ? (
          <iframe
            className={s.video}
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <video className={s.video} src={src} poster={poster} controls autoPlay playsInline preload="metadata" aria-label={label} />
        )}
      </div>
    )
  }

  return (
    <button type="button" className={cx(tile, s.button)} onClick={() => setPlaying(true)} aria-label={`Play video: ${label}`}>
      {poster && <Image src={poster} alt="" fill sizes={posterSizes(size, portrait)} className={s.poster} />}
      <span className={s.play} aria-hidden="true">
        <PlayIcon size={size === 'lg' ? 24 : 18} />
      </span>
      {!hideCaption && <span className={s.caption}>{label}</span>}
      {duration && <span className={s.duration}>{duration}</span>}
    </button>
  )
}
