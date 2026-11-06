import { CASE_IMAGES as IMG } from '@/content/site/case-images'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { Bars, Callout, CalloutHeadline, DataTable, Gap, Kicker, Para, SecHead, Shot, ShotStack, Split } from '../study/StudyBlocks'
import { MoreResults, StudyCta } from '../study/StudyEnd'
import { StudyHero } from '../study/StudyHero'

export function UsStreetwearStudy() {
  return (
    <>
      <StudyHero
        tag="Streetwear · Co-credited"
        title="US Streetwear & Headwear Brand"
        lede="Sales grew from $14.9K to $105.4K a month. We worked alongside the brand's own media buyer on attribution and on the site."
        facts={[
          { label: 'Client', value: 'US streetwear and headwear brand (kept anonymous)' },
          { label: 'Type', value: 'Shared result' },
          { label: 'Our part', value: 'Attribution and site conversion' },
          { label: 'Proof', value: 'Shopify and Meta screenshots' },
        ]}
        result={{
          label: 'Sales per month',
          big: (
            <>
              $14.9K → <em>$105.4K</em>
            </>
          ),
          sub: 'February 2025 to June 2026, all channels.',
        }}
      />

      <Section>
        <Container>
          <Split ratio="wideLeft">
            <div>
              <SecHead tag="Read this first" title="This is a shared result, and we are saying so." />
              <Para>This brand had its own media buyer and a strong team. We did not run this alone, and we are not claiming all of it.</Para>
              <Para>
                We worked alongside the media buyer on two things: how sales were being **attributed**, and the **friction on the site** that Microsoft Clarity data exposed.
              </Para>
              <Para>{"The client's name stays private. The numbers below are real, and the screenshots are unedited apart from hiding campaign names."}</Para>
            </div>
            <Callout kicker="The starting problem" tone="navy">
              <CalloutHeadline>Meta was over-reporting ROAS by about 20%.</CalloutHeadline>
              <Para>{"Budget decisions were being made on numbers that looked better than the store's real results. That is expensive to scale on."}</Para>
            </Callout>
          </Split>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead tag="What we did" title="Fix the numbers, then fix the site." />
          <Split>
            <div>
              <Kicker flush>01 · Attribution</Kicker>
              <Para>We rebuilt attribution so reporting matched what the store actually earned. Once the numbers could be trusted, scaling decisions could be too.</Para>
            </div>
            <div>
              <Kicker flush>02 · Site friction</Kicker>
              <Para>
                We used Clarity behavior data to find where visitors got stuck on the site, then fixed those points. Conversion rate moved from **2.12% to 3.54%**.
              </Para>
            </div>
          </Split>
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead
            tag="Proof, store side"
            title="Shopify, all channels."
            lead="Three snapshots from the store's own analytics. Each card is one full month."
          />
          <DataTable
            columns={['Month', 'Sessions', 'Sales', 'Orders', 'Conversion rate']}
            winFrom={0}
            winRows="last"
            rows={[
              { label: 'Feb 2025', cells: ['15.4K', '$14.9K', '389', '2.12%'] },
              { label: 'May 2025', cells: ['34.3K', '$51.5K', '1,150', '3.1%'] },
              { label: 'Jun 2026', cells: ['49.6K', '$105.4K', '2,319', '3.54%'] },
            ]}
          />
          <Gap size="lg" />
          <ShotStack>
            <Shot wide image={IMG.swShopifyFeb2025} lead="Feb 1 to 28, 2025.">
              All channels.
            </Shot>
            <Shot wide image={IMG.swShopifyMay2025} lead="May 1 to 31, 2025.">
              All channels.
            </Shot>
            <Shot wide image={IMG.swShopifyJun2026} lead="Jun 1 to 30, 2026.">
              All channels.
            </Shot>
          </ShotStack>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead
            tag="Proof, ad side"
            title="Meta Ads Manager, account totals."
            lead="Meta's own numbers, shown as reported. Ad spend grew about 5x while Meta-reported ROAS stayed above 2."
          />
          <DataTable
            columns={['Month', 'Ad spend', 'Purchases', 'Purchase value', 'ROAS']}
            winFrom={0}
            winRows="last"
            rows={[
              { label: 'Feb 2025', cells: ['$5,839.50', '306', '$12,168.46', '2.08'] },
              { label: 'May 2025', cells: ['$22,656.36', '996', '$46,048.67', '2.03'] },
              { label: 'Jun 2026', cells: ['$30,039.49', '1,730', '$78,774.17', '2.62'] },
            ]}
          />
          <Gap size="lg" />
          <ShotStack>
            <Shot wide image={IMG.swMetaFeb2025} lead="Feb 1 to 28, 2025.">
              Campaign names hidden for client privacy.
            </Shot>
            <Shot wide image={IMG.swMetaMay2025} lead="May 1 to 31, 2025.">
              Campaign names hidden for client privacy.
            </Shot>
            <Shot wide image={IMG.swMetaJun2026} lead="Jun 1 to 30, 2026.">
              Campaign names hidden for client privacy.
            </Shot>
          </ShotStack>
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead tag="The scale, side by side" title="Sales grew 7x. Ad spend grew about 5x." />
          <Bars
            rows={[
              { label: 'Sales Feb 2025', pct: 14.1, value: '$14.9K' },
              { label: 'Sales Jun 2026', pct: 100, value: '$105.4K', after: true },
              { label: 'Ad spend Feb 2025', pct: 5.5, value: '$5.8K' },
              { label: 'Ad spend Jun 2026', pct: 28.5, value: '$30.0K', after: true },
            ]}
            note="Sales from Shopify, all channels. Ad spend from Meta Ads Manager."
          />
        </Container>
      </Section>

      <StudyCta />
      <MoreResults current="us-streetwear-brand" />
    </>
  )
}
