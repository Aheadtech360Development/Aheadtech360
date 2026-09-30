import type { LegalDocumentMeta, LegalSection } from '@/content/site/legal/types'
import { renderRichText } from '@/lib/rich-text'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { PageHero } from './PageHero'
import s from './LegalDocument.module.css'

interface LegalDocumentProps {
  meta: LegalDocumentMeta
  sections: readonly LegalSection[]
}

/** Legal page: hero with effective date, grey intro band, numbered sections in one outlined box. */
export function LegalDocument({ meta, sections }: LegalDocumentProps) {
  return (
    <>
      <PageHero size="sm" title={meta.title} meta={`Effective ${meta.effective}`} />

      <Section tone="soft" pad="md">
        <Container size="prose">
          <div className={s.intro}>
            {meta.intro.map((p) => (
              <p key={p}>{renderRichText(p)}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="prose">
          <div className={s.box}>
            {sections.map((section) => (
              <section key={section.title} className={s.section}>
                <h2 className={s.title}>{section.title}</h2>
                {section.blocks.map((block, i) => {
                  if (block.type === 'p') {
                    return (
                      <p key={i} className={s.p}>
                        {renderRichText(block.text)}
                      </p>
                    )
                  }
                  const List = block.type === 'ol' ? 'ol' : 'ul'
                  return (
                    <List key={i} className={block.type === 'ol' ? s.ol : s.ul}>
                      {block.items.map((item) => (
                        <li key={item}>{renderRichText(item)}</li>
                      ))}
                    </List>
                  )
                })}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
