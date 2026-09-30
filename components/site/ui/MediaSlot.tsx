import Image from 'next/image'
import type { ImageAsset } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { BrowserIcon, ImageIcon } from './Icons'
import s from './MediaSlot.module.css'

interface MediaSlotProps {
  /** Label shown on the placeholder, and used as the accessible name */
  label: string
  /** Second line on the placeholder (e.g. "Store name & URL blurred") */
  note?: string
  /** When provided the slot shows the real image instead of the placeholder */
  image?: ImageAsset
  /** default: neutral · positive: green "after" state */
  tone?: 'default' | 'positive'
  icon?: 'image' | 'browser' | 'none'
  /** CSS aspect-ratio, e.g. "16 / 10". The parent can also size the slot by className. */
  ratio?: string
  sizes?: string
  priority?: boolean
  className?: string
}

/** Screenshot slot: renders the supplied image, or a labelled dashed placeholder until one exists. */
export function MediaSlot({
  label,
  note,
  image,
  tone = 'default',
  icon = 'image',
  ratio,
  sizes = '(max-width: 767px) 100vw, 540px',
  priority,
  className,
}: MediaSlotProps) {
  const style = ratio ? { aspectRatio: ratio } : undefined

  if (image) {
    return (
      <figure className={cx(s.slot, s.filled, className)} style={style}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className={s.image}
        />
      </figure>
    )
  }

  return (
    <div
      className={cx(s.slot, s.empty, tone === 'positive' && s.positive, className)}
      style={style}
      role="img"
      aria-label={`${label} — image coming soon`}
    >
      {icon === 'image' && <ImageIcon size={28} />}
      {icon === 'browser' && <BrowserIcon size={26} />}
      <span className={s.label}>{label}</span>
      {note && <span className={s.note}>{note}</span>}
    </div>
  )
}
