import { CASE_IMAGES as IMG } from '@/content/site/case-images'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import {
  Bars,
  BulletList,
  Callout,
  Gap,
  Kicker,
  MetricCards,
  Note,
  Para,
  Phase,
  ReviewShot,
  SecHead,
  Shot,
  ShotStack,
  Split,
} from '../study/StudyBlocks'
import { MoreResults, StudyCta } from '../study/StudyEnd'
import { StudyHero } from '../study/StudyHero'

export function EztmartStudy() {
  return (
    <>
      <StudyHero
        tag="Wholesale & Blanks"
        title="EZTmart"
        lede="Only loyal customers were buying. We fixed that first, then scaled the store without losing the gain."
        facts={[
          { label: 'Started', value: 'January 2026' },
          { label: 'Industry', value: 'Wholesale and blank apparel' },
          { label: 'Services', value: 'CRO, Meta Ads, pricing, UX' },
          { label: 'Status', value: 'Ongoing client' },
        ]}
        live={{ href: 'https://eztmart.com/' }}
        result={{
          label: 'Sales per month',
          big: (
            <>
              $2.8K → <em>$9.5K</em>
            </>
          ),
          sub: 'January 2026 to August 2026. Conversion rate 0.84% to 2.58%.',
        }}
      />

      <Section>
        <Container>
          <SecHead
            tag="The real problem"
            title="A $128 order value on a 0.84% conversion rate is not a healthy store."
            lead="EZTmart had a strong organic base and good SEO, so getting traffic was not the issue. The issue was that nobody new bought. Only loyal customers who already knew the brand did, which is why the order value looked great."
          />
          <MetricCards
            cards={[
              {
                when: 'Jan 2026',
                big: '$2,788.52',
                rows: [
                  { k: 'Sessions', v: '3,077' },
                  { k: 'Conversion', v: '0.84%' },
                  { k: 'AOV', v: '$128.39' },
                  { k: 'Bounce', v: '67.33%' },
                ],
              },
              {
                when: 'Feb 2026',
                big: '$2,615.76',
                rows: [
                  { k: 'Sessions', v: '1,883' },
                  { k: 'Conversion', v: '2.01%' },
                  { k: 'AOV', v: '$59.00' },
                  { k: 'Bounce', v: '57.51%' },
                ],
              },
              {
                when: 'May 2026',
                big: '$5,017.48',
                rows: [
                  { k: 'Sessions', v: '3,628' },
                  { k: 'Conversion', v: '1.46%' },
                  { k: 'AOV', v: '$88.22' },
                  { k: 'Bounce', v: 'n/a' },
                ],
              },
              {
                when: 'Aug 2026',
                big: '$9,548.58',
                now: true,
                rows: [
                  { k: 'Sessions', v: '3,560' },
                  { k: 'Conversion', v: '2.58%' },
                  { k: 'AOV', v: '$90.22' },
                  { k: 'Bounce', v: '50.95%' },
                ],
              },
            ]}
          />
          <Gap size="sm" />
          <Note>Monthly totals from Shopify Analytics, screenshots below. May bounce rate is not visible in that capture.</Note>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <Phase first num="01" title="Fix conversion first" note="January to February 2026.">
            <Split>
              <div>
                <Para>
                  We raised the conversion rate from **0.84% to 2.01% in one month** and made sure the traffic already coming in would actually buy.
                </Para>
                <Para>
                  That had a cost, and we are showing it. Traffic fell from 3,077 to 1,883 sessions, about 39% lower, because the store depended on search alone and had no reliable paid channel. Order value fell from $128.39 to $59.00 because new customers were now buying, not just loyal ones.
                </Para>
                <Para>Sales held nearly flat on far less traffic. The store had stopped depending on people who already loved it.</Para>
                <Callout kicker="Why we did not rush to ads">
                  <Para>
                    The client was not ready to invest in ads yet. A store at 0.84% would have burned the budget. Fixing conversion first meant that every visitor we bought later landed on a store that could turn them into a customer.
                  </Para>
                </Callout>
              </div>
              <ShotStack>
                <Shot image={IMG.eztJan2026} lead="Shopify Analytics, Jan 1 to 31, 2026.">
                  Before: 0.84% conversion.
                </Shot>
                <Shot image={IMG.eztFeb2026} lead="Shopify Analytics, Feb 1 to 28, 2026.">
                  One month later: 2.01% conversion.
                </Shot>
              </ShotStack>
            </Split>
          </Phase>
        </Container>
      </Section>

      <Section>
        <Container>
          <Phase first num="02" title="Then acquisition" note="April to August 2026.">
            <Split>
              <div>
                <Para>
                  In April the client asked us to take on everything: acquisition, conversion and retention. Conversion was already fixed and we knew the brand, so Meta ads went live in May.
                </Para>
                <Para>
                  May landed at $5,017.48. June and July stayed around $5.5K. Conversion dipped to 1.46% in May as new ad traffic arrived, then reached 2.58% by August. Once tracking, the site and the ads were under control, we scaled, and August closed at **$9,548.58**.
                </Para>
                <Kicker>What we worked on</Kicker>
                <BulletList
                  items={[
                    'Website, order value and **pricing**, so wholesale buyers could see the right price at the right moment.',
                    '**UI and UX** work across the store to cut bounce rate.',
                    'Consumer psychology: how wholesale buyers decide, and what stops them.',
                    'Ads built on verified tracking, broad and Advantage+ structure, and 4-phase testing.',
                    'Budget scaled in controlled steps, at most 20% every 3 to 4 days.',
                  ]}
                />
              </div>
              <ShotStack>
                <Shot image={IMG.eztMay2026} lead="Shopify Analytics, May 1 to 31, 2026.">
                  Ads go live.
                </Shot>
                <Shot image={IMG.eztAug2026} lead="Shopify Analytics, Aug 1 to 31, 2026.">
                  Scaled.
                </Shot>
              </ShotStack>
            </Split>
          </Phase>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead tag="Where it ended up" title="A store stuck at about $2.5K a month, now at $9.5K and growing." />
          <Bars
            rows={[
              { label: 'Jan 2026', pct: 27.9, value: '$2,788.52' },
              { label: 'Feb 2026', pct: 26.2, value: '$2,615.76' },
              { label: 'May 2026', pct: 50.2, value: '$5,017.48', after: true },
              { label: 'Aug 2026', pct: 95.5, value: '$9,548.58', after: true },
            ]}
            note="Green bars are after Meta ads went live."
          />
          <Gap size="lg" />
          <Kicker flush>In their own words</Kicker>
          <ReviewShot image={IMG.eztReview} lead="Upwork review.">
            Five stars, endorsed by the client as collaborative, a clear communicator and reliable.
          </ReviewShot>
        </Container>
      </Section>

      <StudyCta />
      <MoreResults current="eztmart" />
    </>
  )
}
