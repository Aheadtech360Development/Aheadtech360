import { FinalCta } from '@/components/site/sections/FinalCta'
import { PageHero } from '@/components/site/sections/PageHero'
import { TierLadder } from '@/components/site/sections/TierLadder'
import { ActionCallout } from '@/components/site/ui/Callout'
import { CellGrid } from '@/components/site/ui/CellGrid'
import { Container } from '@/components/site/ui/Container'
import { Section } from '@/components/site/ui/Section'
import { SectionHeader } from '@/components/site/ui/SectionHeader'
import { Stack } from '@/components/site/ui/Stack'
import { PRICING_FINAL_CTA, PRICING_HERO, PRICING_MODEL, PRICING_NUMBER, PRICING_TIERS } from '@/content/site/pricing'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Pricing',
  description:
    'How AheadTech360 pricing works: sized to your current revenue, a one-time setup fee plus a monthly retainer. Retainers start at $1,000/mo.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <>
      <PageHero badge={PRICING_HERO.badge} title={PRICING_HERO.title} lead={PRICING_HERO.lead} />

      <Section tone="soft">
        <Container>
          <Stack>
            <SectionHeader title={PRICING_MODEL.title} size="sm" />
            <CellGrid items={PRICING_MODEL.items} columns={3} label="What decides your price" />
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack>
            <SectionHeader title={PRICING_TIERS.title} size="sm" />
            <TierLadder tiers={PRICING_TIERS.tiers} />
          </Stack>
        </Container>
      </Section>

      <Section tone="soft" pad="md">
        <Container size="prose">
          <ActionCallout eyebrow={PRICING_NUMBER.eyebrow} title={PRICING_NUMBER.title} action={PRICING_NUMBER.action} />
        </Container>
      </Section>

      <FinalCta title={PRICING_FINAL_CTA.title} text={PRICING_FINAL_CTA.text} />
    </>
  )
}
