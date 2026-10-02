import Image from 'next/image'
import { cx } from '@/lib/cx'
import s from './Logo.module.css'

interface LogoProps {
  /** header: sized for the sticky bar · footer: white version for the dark footer */
  variant?: 'header' | 'footer'
  className?: string
}

/**
 * The AheadTech360 logo (public/images/logo-ahead360.png: the original artwork with its empty
 * margins trimmed). Decorative: the surrounding link carries the accessible name.
 */
export function Logo({ variant = 'header', className }: LogoProps) {
  return (
    <Image
      src="/images/logo-ahead360.png"
      alt=""
      width={643}
      height={98}
      loading="eager"
      className={cx(s.logo, s[variant], className)}
    />
  )
}
