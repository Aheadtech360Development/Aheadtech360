import { Button } from '@/components/site/ui/Button'
import { Container } from '@/components/site/ui/Container'
import { IconCallout, ActionCallout } from '@/components/site/ui/Callout'
import { CellGrid } from '@/components/site/ui/CellGrid'
import { ShieldCheckIcon } from '@/components/site/ui/Icons'
import { Section } from '@/components/site/ui/Section'
import { SectionHeader } from '@/components/site/ui/SectionHeader'
import { Stack } from '@/components/site/ui/Stack'
import { FaqSection } from '@/components/site/sections/FaqSection'
import { FinalCta } from '@/components/site/sections/FinalCta'
import { FounderCards } from '@/components/site/sections/FounderCards'
import { HeaderCardGrid } from '@/components/site/sections/HeaderCardGrid'
import { PageHero } from '@/components/site/sections/PageHero'
import { Qualifier } from '@/components/site/sections/Qualifier'
import { RatingNote } from '@/components/site/sections/RatingNote'
import { ResultsTable } from '@/components/site/sections/ResultsTable'
import { ReviewsSection } from '@/components/site/sections/ReviewsSection'
import { StatStrip } from '@/components/site/sections/StatStrip'
import { TrustBar } from '@/components/site/sections/TrustBar'
import { VideoShowcase } from '@/components/site/sections/VideoShowcase'
import {
  HOME_FAQ,
  HOME_FINAL_CTA,
  HOME_FOUNDERS,
  HOME_HERO,
  HOME_LEAKS,
  HOME_PROOF,
  HOME_QUALIFIER,
  HOME_REVIEWS,
  HOME_STATS,
  HOME_SYSTEM,
  HOME_TRUST_LABEL,
  HOME_VSL,
} from '@/content/site/home'
import {
  CLIENT_NAMES,
  FOUNDERS_SHORT,
  GUARANTEE,
  PRICING_TEASER,
  REVIEW_SHOTS,
  TRUST_BADGES,
  VIDEO_TESTIMONIALS,
} from '@/content/site/shared'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'AheadTech360 — A Growth System for Fashion & Apparel Stores',
  description:
    'We install conversion, acquisition, and retention into fashion and apparel stores as one system, live in 90 days, or we keep working for free until it converts.',
  path: '/',
  raw: true,
})

export default function HomePage() {
  return (
    <>
      <PageHero
        size="display"
        badge={HOME_HERO.badge}
        title={HOME_HERO.title}
        lead={HOME_HERO.lead}
        actions={
          <>
            <Button href={HOME_HERO.primaryCta.href}>{HOME_HERO.primaryCta.label}</Button>
            <Button href={HOME_HERO.secondaryCta.href} variant="text" arrow="→">
              {HOME_HERO.secondaryCta.label}
            </Button>
          </>
        }
      >
        <StatStrip items={HOME_STATS} />
      </PageHero>

      <TrustBar label={HOME_TRUST_LABEL} badges={TRUST_BADGES} clients={CLIENT_NAMES} />

      <VideoShowcase id="vsl" {...HOME_VSL} />

      <Section tone="soft" id="problem">
        <Container>
          <Stack>
            <SectionHeader eyebrow={HOME_LEAKS.eyebrow} title={HOME_LEAKS.title} lead={HOME_LEAKS.lead} />
            <CellGrid items={HOME_LEAKS.items} columns={3} tabletColumns={2} label="Revenue leaks" />
          </Stack>
        </Container>
      </Section>

      <Section id="system">
        <Container>
          <Stack>
            <SectionHeader eyebrow={HOME_SYSTEM.eyebrow} title={HOME_SYSTEM.title} />
            <HeaderCardGrid items={HOME_SYSTEM.items} columns={3} label="Services" />
          </Stack>
        </Container>
      </Section>

      <Qualifier {...HOME_QUALIFIER} />

      <Section id="proof">
        <Container>
          <Stack>
            <SectionHeader eyebrow={HOME_PROOF.eyebrow} title={HOME_PROOF.title} />
            <ResultsTable rows={HOME_PROOF.rows} />
            <RatingNote>{HOME_PROOF.note}</RatingNote>
          </Stack>
        </Container>
      </Section>

      <ReviewsSection title={HOME_REVIEWS.title} lead={HOME_REVIEWS.lead} videos={VIDEO_TESTIMONIALS} shots={REVIEW_SHOTS} />

      <Section pad="md">
        <Container>
          <IconCallout icon={<ShieldCheckIcon size={24} />} title={GUARANTEE.title} text={GUARANTEE.text} />
        </Container>
      </Section>

      <Section tone="soft" pad="md">
        <Container>
          <Stack>
            <SectionHeader eyebrow={HOME_FOUNDERS.eyebrow} title={HOME_FOUNDERS.title} size="md" />
            <FounderCards founders={FOUNDERS_SHORT} />
          </Stack>
        </Container>
      </Section>

      <Section pad="md">
        <Container>
          <ActionCallout
            eyebrow={PRICING_TEASER.eyebrow}
            title={PRICING_TEASER.title}
            text={PRICING_TEASER.text}
            action={{ label: 'See How Pricing Works', href: '/pricing' }}
          />
        </Container>
      </Section>

      <FaqSection title={HOME_FAQ.title} items={HOME_FAQ.items} action={{ label: 'All FAQs', href: '/faq' }} />

      <FinalCta title={HOME_FINAL_CTA.title} text={HOME_FINAL_CTA.text} />
    </>
  )
}
