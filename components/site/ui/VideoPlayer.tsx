'use client'

import { useState } from 'react'
import { cx } from '@/lib/cx'
import { PlayIcon } from './Icons'
import s from './VideoSlot.module.css'

interface VideoPlayerProps {
  label: string
  src: string
  poster?: string
  duration?: string
  size: 'lg' | 'md' | 'sm'
  className?: string
}

/** Click-to-play: the <video> (tens of MB) is only mounted — and only fetched — after the first click. */
export function VideoPlayer({ label, src, poster, duration, size, className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className={cx(s.tile, s[size], s.playing, className)}>
        <video className={s.video} src={src} poster={poster} controls autoPlay playsInline preload="metadata" aria-label={label} />
      </div>
    )
  }

  return (
    <button type="button" className={cx(s.tile, s[size], s.button, className)} onClick={() => setPlaying(true)} aria-label={`Play video: ${label}`}>
      <span className={s.play} aria-hidden="true">
        <PlayIcon size={size === 'lg' ? 24 : 18} />
      </span>
      <span className={s.caption}>{label}</span>
      {duration && <span className={s.duration}>{duration}</span>}
    </button>
  )
}
