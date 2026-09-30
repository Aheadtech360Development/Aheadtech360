import { FinalCta } from '@/components/site/sections/FinalCta'
import { PageHero } from '@/components/site/sections/PageHero'
import { ServiceRow } from '@/components/site/sections/ServiceRow'
import { VideoBand } from '@/components/site/sections/VideoBand'
import { ActionCallout } from '@/components/site/ui/Callout'
import { Container } from '@/components/site/ui/Container'
import { Section } from '@/components/site/ui/Section'
import { VIDEO_TESTIMONIALS, PRICING_TEASER } from '@/content/site/shared'
import { SERVICES, SERVICES_FINAL_CTA, SERVICES_HERO, SERVICES_VIDEOS_EYEBROW } from '@/content/site/services'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Services',
  description:
    'Website development, CRO, performance ads, SEO, email marketing, and custom development for fashion and apparel stores. Buy the whole system, or just what you need.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero badge={SERVICES_HERO.badge} title={SERVICES_HERO.title} lead={SERVICES_HERO.lead} />

      {SERVICES.map((service, i) => (
        <ServiceRow
          key={service.id}
          id={service.id}
          number={String(i + 1).padStart(2, '0')}
          label={service.label}
          title={service.title}
          bullets={service.bullets}
          tone={i % 2 === 0 ? 'soft' : 'default'}
        />
      ))}

      <VideoBand eyebrow={SERVICES_VIDEOS_EYEBROW} videos={VIDEO_TESTIMONIALS} />

      <Section pad="md">
        <Container>
          <ActionCallout
            eyebrow={PRICING_TEASER.eyebrow}
            title={PRICING_TEASER.title}
            text={PRICING_TEASER.text}
            action={{ label: 'Book A Free Call', href: '/book-a-call' }}
          />
        </Container>
      </Section>

      <FinalCta title={SERVICES_FINAL_CTA.title} text={SERVICES_FINAL_CTA.text} />
    </>
  )
}
