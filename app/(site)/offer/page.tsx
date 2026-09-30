import { CalendarEmbed } from '@/components/site/sections/CalendarEmbed'
import { CaseSnapshotGrid } from '@/components/site/sections/CaseSnapshotGrid'
import { FaqSection } from '@/components/site/sections/FaqSection'
import { FinalCta } from '@/components/site/sections/FinalCta'
import { HeaderCardGrid } from '@/components/site/sections/HeaderCardGrid'
import { PageHero } from '@/components/site/sections/PageHero'
import { ReviewsSection } from '@/components/site/sections/ReviewsSection'
import { Badge } from '@/components/site/ui/Badge'
import { Button } from '@/components/site/ui/Button'
import { IconCallout } from '@/components/site/ui/Callout'
import { CellGrid } from '@/components/site/ui/CellGrid'
import { Container } from '@/components/site/ui/Container'
import { ShieldCheckIcon } from '@/components/site/ui/Icons'
import { PullQuote } from '@/components/site/ui/PullQuote'
import { Section } from '@/components/site/ui/Section'
import { SectionHeader } from '@/components/site/ui/SectionHeader'
import { Stack } from '@/components/site/ui/Stack'
import { CASE_SNAPSHOT_SLUGS, caseHref, getCaseStudy } from '@/content/site/case-studies'
import {
  OFFER_CALENDAR,
  OFFER_FAQ,
  OFFER_FINAL_CTA,
  OFFER_HERO,
  OFFER_PROBLEM,
  OFFER_REVIEWS,
  OFFER_SNAPSHOTS,
  OFFER_SYSTEM,
  OFFER_TIMELINE,
} from '@/content/site/offer'
import { GUARANTEE, REVIEW_SHOTS, VIDEO_TESTIMONIALS } from '@/content/site/shared'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'The Fashion Growth System',
  description:
    'A complete growth system for your fashion or apparel store: conversion, acquisition, creative, and retention, live in 90 days — or we keep working free until conversion improves.',
  path: '/offer',
})

const snapshots = CASE_SNAPSHOT_SLUGS.flatMap((slug) => {
  const study = getCaseStudy(slug)
  if (!study?.listing.snapshot) return []
  return [
    {
      href: caseHref(slug),
      name: study.listing.name,
      result: study.listing.result,
      blurb: study.listing.snapshot,
    },
  ]
})

export default function OfferPage() {
  return (
    <>
      <PageHero
        size="lg"
        badge={OFFER_HERO.badge}
        title={OFFER_HERO.title}
        lead={OFFER_HERO.lead}
        actions={
          <>
            <Button href={OFFER_HERO.primaryCta.href}>{OFFER_HERO.primaryCta.label}</Button>
            <Button href={OFFER_HERO.secondaryCta.href} variant="text" arrow="↓">
              {OFFER_HERO.secondaryCta.label}
            </Button>
          </>
        }
      >
        <Badge variant="quiet">{OFFER_HERO.tag}</Badge>
      </PageHero>

      <Section tone="soft">
        <Container>
          <Stack>
            <SectionHeader eyebrow={OFFER_PROBLEM.eyebrow} title={OFFER_PROBLEM.title} size="md" />
            <CellGrid items={OFFER_PROBLEM.items} columns={3} statement label="The problem" />
            <PullQuote>{OFFER_PROBLEM.quote}</PullQuote>
          </Stack>
        </Container>
      </Section>

      <Section id="system">
        <Container>
          <Stack>
            <SectionHeader eyebrow={OFFER_SYSTEM.eyebrow} title={OFFER_SYSTEM.title} size="md" />
            <HeaderCardGrid items={OFFER_SYSTEM.items} columns={2} label="What is included" />
          </Stack>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <Stack>
            <SectionHeader eyebrow={OFFER_TIMELINE.eyebrow} title={OFFER_TIMELINE.title} size="md" />
            <CellGrid items={OFFER_TIMELINE.items} columns={4} label="Timeline" />
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack>
            <SectionHeader
              eyebrow={OFFER_SNAPSHOTS.eyebrow}
              title={OFFER_SNAPSHOTS.title}
              size="md"
              action={{ label: 'All Case Studies', href: '/case-studies' }}
            />
            <CaseSnapshotGrid items={snapshots} />
          </Stack>
        </Container>
      </Section>

      <ReviewsSection title={OFFER_REVIEWS.title} lead={OFFER_REVIEWS.lead} videos={VIDEO_TESTIMONIALS} shots={REVIEW_SHOTS} />

      <Section pad="md">
        <Container>
          <IconCallout icon={<ShieldCheckIcon size={24} />} title={GUARANTEE.title} text={GUARANTEE.text} />
        </Container>
      </Section>

      <FaqSection title={OFFER_FAQ.title} items={OFFER_FAQ.items} action={{ label: 'All FAQs', href: '/faq' }} />

      <FinalCta title={OFFER_FINAL_CTA.title} text={OFFER_FINAL_CTA.text} />

      <CalendarEmbed title={OFFER_CALENDAR.title} />
    </>
  )
}
