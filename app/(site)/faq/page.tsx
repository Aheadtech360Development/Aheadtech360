import { JsonLd } from '@/components/site/JsonLd'
import { FaqList } from '@/components/site/sections/FaqList'
import { FinalCta } from '@/components/site/sections/FinalCta'
import { PageHero } from '@/components/site/sections/PageHero'
import { Container } from '@/components/site/ui/Container'
import { Section } from '@/components/site/ui/Section'
import { FAQ_FINAL_CTA, FAQ_HERO, FAQ_ITEMS } from '@/content/site/faq'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'FAQ',
  description:
    'Straight answers about the guarantee, what is included in the 90 days, pricing, contract length, timelines, and who you will work with.',
  path: '/faq',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero badge={FAQ_HERO.badge} title={FAQ_HERO.title} />

      <Section tone="soft">
        <Container size="narrow">
          <FaqList items={FAQ_ITEMS} />
        </Container>
      </Section>

      <FinalCta title={FAQ_FINAL_CTA.title} text={FAQ_FINAL_CTA.text} />
    </>
  )
}
