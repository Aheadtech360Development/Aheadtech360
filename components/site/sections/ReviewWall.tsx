'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { ReviewShotItem } from '@/content/site/types'
import s from './ReviewWall.module.css'

interface ReviewWallProps {
  shots: readonly ReviewShotItem[]
  /** How many screenshots show before "Show all". The list is in priority order. */
  initial?: number
}

/**
 * Masonry wall of review screenshots. Shows the strongest few, reveals the rest on request, and opens
 * any of them full size in a modal (native <dialog>: focus trap, Esc to close, focus returns to the card).
 */
export function ReviewWall({ shots, initial = 6 }: ReviewWallProps) {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visible = expanded ? shots : shots.slice(0, initial)
  const current = active === null ? null : visible[active]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active === null) {
      if (dialog.open) dialog.close()
      return
    }
    if (!dialog.open) dialog.showModal()
    // a modal dialog does not stop the page behind it from scrolling
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [active])

  const step = (delta: number) =>
    setActive((i) => (i === null ? i : (i + delta + visible.length) % visible.length))

  return (
    <div className={s.wall}>
      <ul className={s.shots}>
        {visible.map((shot, i) => (
          <li key={shot.image.src} className={s.item}>
            <button type="button" className={s.shot} aria-haspopup="dialog" onClick={() => setActive(i)}>
              <Image
                src={shot.image.src}
                alt={shot.image.alt}
                width={shot.image.width}
                height={shot.image.height}
                sizes="(max-width: 599px) 100vw, (max-width: 900px) 50vw, 360px"
                className={s.image}
              />
              <span className={s.footer}>
                <span className={s.marker} aria-hidden="true" />
                <span className={s.platform}>{shot.platform}</span>
                <span className={s.zoom} aria-hidden="true">
                  Enlarge
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {shots.length > initial && (
        <button type="button" className={s.more} aria-expanded={expanded} onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Show fewer reviews' : `Show all ${shots.length} reviews`}
        </button>
      )}

      <dialog
        ref={dialogRef}
        className={s.dialog}
        aria-label={current ? `${current.platform} review, full size` : 'Review'}
        onClose={() => setActive(null)}
        onClick={(e) => {
          // the backdrop is part of the dialog element: a click on it targets the dialog itself
          if (e.target === e.currentTarget) setActive(null)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') step(-1)
          if (e.key === 'ArrowRight') step(1)
        }}
      >
        {current && active !== null && (
          <div className={s.dialogBody}>
            <div className={s.bar}>
              <span className={s.barTitle}>
                {current.platform} · {active + 1} / {visible.length}
              </span>
              <div className={s.controls}>
                <button type="button" className={s.control} onClick={() => step(-1)} aria-label="Previous review">
                  &larr;
                </button>
                <button type="button" className={s.control} onClick={() => step(1)} aria-label="Next review">
                  &rarr;
                </button>
                <button type="button" className={s.control} onClick={() => setActive(null)} aria-label="Close">
                  &times;
                </button>
              </div>
            </div>
            <Image
              key={current.image.src}
              src={current.image.src}
              alt={current.image.alt}
              width={current.image.width}
              height={current.image.height}
              sizes="(max-width: 900px) 94vw, 920px"
              className={s.dialogImage}
            />
          </div>
        )}
      </dialog>
    </div>
  )
}
