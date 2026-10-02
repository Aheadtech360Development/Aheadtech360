'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { ReviewShotItem } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { Modal, ModalButton } from '../ui/Modal'
import s from './ReviewWall.module.css'

interface ReviewWallProps {
  shots: readonly ReviewShotItem[]
  /** On phones only the first few show until "Show all". Desktop and tablet always show every screenshot. */
  initialOnMobile?: number
}

/**
 * Masonry wall of review screenshots that open full size in a modal. Every screenshot is in the page;
 * on phones the ones past `initialOnMobile` are hidden by CSS until the visitor asks for them, which
 * keeps the long wall short there without hiding anything on larger screens. The list is in priority order.
 */
export function ReviewWall({ shots, initialOnMobile = 6 }: ReviewWallProps) {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<number | null>(null)

  const current = active === null ? null : shots[active]
  const step = (delta: number) => setActive((i) => (i === null ? i : (i + delta + shots.length) % shots.length))

  return (
    <div className={s.wall}>
      <ul className={cx(s.shots, expanded && s.expanded)}>
        {shots.map((shot, i) => (
          <li key={shot.image.src} className={cx(s.item, i >= initialOnMobile && s.extra)}>
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

      {shots.length > initialOnMobile && (
        <button type="button" className={s.more} aria-expanded={expanded} onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Show fewer reviews' : `Show all ${shots.length} reviews`}
        </button>
      )}

      <Modal
        open={current !== null}
        onClose={() => setActive(null)}
        title={current && active !== null ? `${current.platform} · ${active + 1} / ${shots.length}` : 'Review'}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') step(-1)
          if (e.key === 'ArrowRight') step(1)
        }}
        actions={
          <>
            <ModalButton label="Previous review" onClick={() => step(-1)}>
              &larr;
            </ModalButton>
            <ModalButton label="Next review" onClick={() => step(1)}>
              &rarr;
            </ModalButton>
          </>
        }
      >
        {current && (
          <Image
            key={current.image.src}
            src={current.image.src}
            alt={current.image.alt}
            width={current.image.width}
            height={current.image.height}
            sizes="(max-width: 900px) 94vw, 920px"
            className={s.dialogImage}
          />
        )}
      </Modal>
    </div>
  )
}
