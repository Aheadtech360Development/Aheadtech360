import type { SVGProps } from 'react'

/** Decorative icons. All are aria-hidden; pair with visible text. */
type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function base({ size = 24, ...rest }: IconProps) {
  return { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false, ...rest } as const
}

export function PlayIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function StarIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export function ShieldCheckIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="square" strokeLinejoin="miter">
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    </svg>
  )
}

export function CircleCheckIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="square" strokeLinejoin="miter">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

export function WindowIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 9h18" />
    </svg>
  )
}

export function UserIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  )
}

export function CameraIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="6" width="18" height="13" />
      <circle cx="12" cy="12.5" r="3.2" />
      <path d="M8 6l1.4-2h5.2L16 6" />
    </svg>
  )
}

export function ImageIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="4" width="18" height="16" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 15l-5-5L5 20" />
    </svg>
  )
}

export function BrowserIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 9h18" />
    </svg>
  )
}

export function CalendarIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="16" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  )
}
