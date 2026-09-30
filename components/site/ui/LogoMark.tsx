import { cx } from '@/lib/cx'
import s from './LogoMark.module.css'

interface LogoMarkProps {
  /** navy: default, for light backgrounds · light: white tile, for the dark footer */
  tone?: 'navy' | 'light'
  size?: number
  className?: string
}

/** Square brand mark with the rising-arrow glyph. Decorative; pair with the wordmark text. */
export function LogoMark({ tone = 'navy', size = 40, className }: LogoMarkProps) {
  const glyph = Math.round(size * 0.45)
  return (
    <span className={cx(s.mark, tone === 'light' && s.light, className)} style={{ width: size, height: size }} aria-hidden="true">
      <svg width={glyph} height={glyph} viewBox="0 0 24 24" fill="none">
        <path d="M3 17l6-7 4 4 8-9" stroke={tone === 'light' ? '#1D3C73' : '#24B574'} strokeWidth="2.5" strokeLinecap="square" />
        <path d="M15 5h6v6" stroke={tone === 'light' ? '#1D3C73' : '#24B574'} strokeWidth="2.5" strokeLinecap="square" />
      </svg>
    </span>
  )
}
