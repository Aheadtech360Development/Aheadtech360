import { FinalCta } from '@/components/site/sections/FinalCta'
import { FounderCards } from '@/components/site/sections/FounderCards'
import { PageHero } from '@/components/site/sections/PageHero'
import { VideoBand } from '@/components/site/sections/VideoBand'
import { Chip, ChipList } from '@/components/site/ui/Chip'
import { CellGrid } from '@/components/site/ui/CellGrid'
import { Container } from '@/components/site/ui/Container'
import { Section } from '@/components/site/ui/Section'
import { SectionHeader } from '@/components/site/ui/SectionHeader'
import { Stack } from '@/components/site/ui/Stack'
import {
  ABOUT_FACTS,
  ABOUT_FINAL_CTA,
  ABOUT_FOUNDERS,
  ABOUT_HERO,
  ABOUT_SERVE,
  ABOUT_STORY,
  ABOUT_VIDEOS_EYEBROW,
} from '@/content/site/about'
import { FOUNDERS_FULL, VIDEO_TESTIMONIALS } from '@/content/site/shared'
import { pageMetadata } from '@/lib/seo'
import s from './about.module.css'

export const metadata = pageMetadata({
  title: 'About',
  description:
    'AheadTech360 builds growth systems for fashion and apparel brands: one industry, one system, and two founders who still take the calls.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageHero badge={ABOUT_HERO.badge} title={ABOUT_HERO.title} lead={ABOUT_HERO.lead} />

      <Section tone="soft">
        <Container size="narrow">
          <Stack gap="sm">
            <SectionHeader eyebrow={ABOUT_STORY.eyebrow} title={ABOUT_STORY.title} size="md" />
            <p className={s.story}>{ABOUT_STORY.body}</p>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack>
            <SectionHeader eyebrow={ABOUT_FOUNDERS.eyebrow} title={ABOUT_FOUNDERS.title} size="md" />
            <FounderCards founders={FOUNDERS_FULL} variant="full" />
          </Stack>
        </Container>
      </Section>

      <Section tone="soft" pad="md">
        <Container>
          <div className={s.facts}>
            <p className={s.factsLabel}>{ABOUT_FACTS.label}</p>
            <ChipList label="Company facts">
              {ABOUT_FACTS.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </ChipList>
            <p className={s.factsNote}>{ABOUT_FACTS.note}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack>
            <SectionHeader eyebrow={ABOUT_SERVE.eyebrow} title={ABOUT_SERVE.title} size="md" />
            <CellGrid items={ABOUT_SERVE.items} columns={4} label="Verticals" />
            <p className={s.serveNote}>{ABOUT_SERVE.note}</p>
          </Stack>
        </Container>
      </Section>

      <VideoBand eyebrow={ABOUT_VIDEOS_EYEBROW} videos={VIDEO_TESTIMONIALS} />

      <FinalCta title={ABOUT_FINAL_CTA.title} text={ABOUT_FINAL_CTA.text} />
    </>
  )
}
