import Link from 'next/link'
import type { ReactNode } from 'react'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { Tag } from './StudyBlocks'
import s from './StudyHero.module.css'

interface StudyHeroProps {
  tag: string
  title: string
  lede: string
  facts: readonly { label: string; value: string }[]
  /** Link to the client's live store; omitted for anonymised studies. */
  live?: { href: string }
  result: { label: string; big: ReactNode; sub: string }
  /** Show the "All case studies" back link (default). Turn off on pages that are not part of the case studies. */
  back?: boolean
}

/** Case-study header: back link, tag, name, one-line story, fact grid and the headline result card. */
export function StudyHero({ tag, title, lede, facts, live, result, back = true }: StudyHeroProps) {
  return (
    <Section pad="hero" className={s.hero}>
      <Container>
        <div className={s.grid}>
          <div className={s.copy}>
            {back && (
              <Link href="/case-studies" className={s.back}>
                <span aria-hidden="true">&larr;</span> All case studies
              </Link>
            )}
            <Tag>{tag}</Tag>
            <h1 className={s.title}>{title}</h1>
            <p className={s.lede}>{lede}</p>
            <dl className={s.facts}>
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            {live && (
              <a className={s.live} href={live.href} target="_blank" rel="noopener noreferrer">
                View live store <span aria-hidden="true">{'↗'}</span>
              </a>
            )}
          </div>
          <aside className={s.card} aria-label="Headline result">
            <p className={s.cardLabel}>{result.label}</p>
            <p className={s.big}>{result.big}</p>
            <p className={s.sub}>{result.sub}</p>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
