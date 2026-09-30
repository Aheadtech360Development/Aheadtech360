import { CaseRowList } from '@/components/site/sections/CaseRowList'
import { FinalCta } from '@/components/site/sections/FinalCta'
import { PageHero } from '@/components/site/sections/PageHero'
import { Container } from '@/components/site/ui/Container'
import { Section } from '@/components/site/ui/Section'
import { CASE_LIST_ORDER, caseHref, getCaseStudy } from '@/content/site/case-studies'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Case Studies',
  description:
    'Real fashion and apparel stores, real numbers. Every case study is a real client running a real version of the AheadTech360 growth system.',
  path: '/case-studies',
})

const rows = CASE_LIST_ORDER.flatMap((slug) => {
  const study = getCaseStudy(slug)
  if (!study) return []
  const { vertical, name, problem, blurb, result } = study.listing
  return [{ href: caseHref(slug), vertical, name, problem, blurb, result }]
})

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Real stores. Real numbers."
        lead="Every brand below is a real client, running a real version of this system. No composite case studies, no cherry-picked screenshots."
      />

      <Section tone="soft">
        <Container>
          <CaseRowList items={rows} />
        </Container>
      </Section>

      <FinalCta title="Ready to be the next result?" text="15 minutes with the founders. No account managers, no obligation." />
    </>
  )
}
