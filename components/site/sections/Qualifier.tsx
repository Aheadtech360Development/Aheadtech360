import type { CheckList } from '@/content/site/types'
import { cx } from '@/lib/cx'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import s from './Qualifier.module.css'

interface QualifierProps {
  eyebrow: string
  title: string
  fit: CheckList
  notFit: CheckList
  footnote: readonly string[]
}

function Column({ list, kind, id }: { list: CheckList; kind: 'fit' | 'nofit'; id: string }) {
  return (
    <section className={cx(s.box, s[kind])} aria-labelledby={id}>
      <h3 id={id} className={s.boxTitle}>
        {list.title}
      </h3>
      <ul className={s.list}>
        {list.items.map((item) => (
          <li key={item} className={s.item}>
            <span className={cx(s.mark, kind === 'fit' ? s.yes : s.no)} aria-hidden="true">
              {kind === 'fit' ? '✓' : '✕'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Navy band with a "this is for you" / "close this tab" pair of lists. */
export function Qualifier({ eyebrow, title, fit, notFit, footnote }: QualifierProps) {
  return (
    <Section tone="navy" id="who">
      <Container>
        <div className={s.stack}>
          <SectionHeader eyebrow={eyebrow} title={title} align="center" size="md" />

          <div className={s.columns}>
            <Column list={fit} kind="fit" id="qualifier-fit" />
            <Column list={notFit} kind="nofit" id="qualifier-nofit" />
          </div>

          <p className={s.footnote}>
            {footnote.map((line, i) => (
              <span key={line}>
                {line}
                {i < footnote.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </Section>
  )
}
