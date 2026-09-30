import Link from 'next/link'
import type { ImageAsset } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { MediaSlot } from '../ui/MediaSlot'
import { Section } from '../ui/Section'
import s from './CaseHero.module.css'

interface CaseHeroProps {
  eyebrow: string
  title: string
  lead: string
  headline: string
  /** split: text + screenshot · centered: text only (anonymised studies) */
  variant?: 'split' | 'centered'
  image?: ImageAsset
}

function Copy({ eyebrow, title, lead, headline }: Omit<CaseHeroProps, 'variant' | 'image'>) {
  return (
    <>
      <Link href="/case-studies" className={s.back}>
        <span aria-hidden="true">&larr;</span> All Case Studies
      </Link>
      <Eyebrow className={s.eyebrow}>{eyebrow}</Eyebrow>
      <h1 className={s.title}>{title}</h1>
      <p className={s.lead}>{lead}</p>
      <p className={s.headline}>{headline}</p>
    </>
  )
}

/** Case-study header: back link, eyebrow, name, one-line story and the headline number. */
export function CaseHero({ variant = 'split', image, ...copy }: CaseHeroProps) {
  return (
    <Section pad="hero">
      <Container>
        {variant === 'split' ? (
          <div className={s.split}>
            <div className={s.copy}>
              <Copy {...copy} />
            </div>
            <MediaSlot
              label="Site / Brand Shot"
              image={image}
              ratio="16 / 10"
              sizes="(max-width: 767px) 100vw, 540px"
              priority
              className={s.media}
            />
          </div>
        ) : (
          <div className={cx(s.copy, s.centered)}>
            <Copy {...copy} />
          </div>
        )}
      </Container>
    </Section>
  )
}
