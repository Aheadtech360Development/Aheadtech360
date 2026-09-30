import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import s from './PageHero.module.css'

type Size = 'display' | 'lg' | 'md' | 'sm'

interface PageHeroProps {
  badge?: string
  title: ReactNode
  lead?: ReactNode
  /** display 58px (home) · lg 48px (offer, book a call) · md 44px (interior) · sm 36px (legal) */
  size?: Size
  /** Buttons/links under the lead */
  actions?: ReactNode
  /** Small line under the title (e.g. "Effective September 10, 2026") */
  meta?: ReactNode
  /** Extra content below (stat strip, trust chips…) */
  children?: ReactNode
}

/** Centred page hero. The page's single <h1>. */
export function PageHero({ badge, title, lead, size = 'md', actions, meta, children }: PageHeroProps) {
  return (
    <Section pad="hero">
      <Container size="narrow">
        <div className={cx(s.hero, s[size])}>
          {badge && <Badge>{badge}</Badge>}
          <h1 className={s.title}>{title}</h1>
          {meta && <p className={s.meta}>{meta}</p>}
          {lead && <p className={s.lead}>{lead}</p>}
          {actions && <div className={s.actions}>{actions}</div>}
          {children}
        </div>
      </Container>
    </Section>
  )
}
