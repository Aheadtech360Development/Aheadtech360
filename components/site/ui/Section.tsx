import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import s from './Section.module.css'

type Tone = 'default' | 'soft' | 'navy'
type Pad = 'lg' | 'md' | 'cta' | 'hero' | 'none'

interface SectionProps {
  /** default: white · soft: grey band with top/bottom rules · navy: dark band */
  tone?: Tone
  /** lg: standard section · md: compact band · cta: closing CTA · hero: page hero */
  pad?: Pad
  id?: string
  className?: string
  'aria-labelledby'?: string
  children: ReactNode
}

/**
 * Full-width band. Owns background, vertical padding and the tone variables
 * (--heading, --lead, --eyebrow, --marker) that Eyebrow and SectionHeader read,
 * so a section never needs per-component colour overrides.
 */
export function Section({ tone = 'default', pad = 'lg', id, className, children, ...aria }: SectionProps) {
  return (
    <section id={id} className={cx(s.section, s[tone], s[`pad-${pad}`], className)} {...aria}>
      {children}
    </section>
  )
}
