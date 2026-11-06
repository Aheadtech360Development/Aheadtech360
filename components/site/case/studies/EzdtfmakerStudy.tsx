import { CASE_IMAGES as IMG } from '@/content/site/case-images'
import { FOUNDER_VIDEOS } from '@/content/site/videos'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { VideoSlot } from '../../ui/VideoSlot'
import {
  Bars,
  BulletList,
  Callout,
  DataTable,
  Gap,
  Kicker,
  Note,
  Para,
  Phase,
  ReviewShot,
  SecHead,
  Shot,
  ShotGrid,
  Split,
  StatRow,
} from '../study/StudyBlocks'
import { MoreResults, StudyCta } from '../study/StudyEnd'
import { StudyHero } from '../study/StudyHero'

export function EzdtfmakerStudy() {
  return (
    <>
      <StudyHero
        tag="Custom & Print · DTF transfers"
        title="EZDTFMaker"
        lede="A store that could not convert its own traffic. We fixed that first, then scaled it past $30K a month."
        facts={[
          { label: 'Started', value: 'January 2025' },
          { label: 'Industry', value: 'DTF transfers' },
          { label: 'Services', value: 'CRO, Meta Ads, Google Ads, SEO, Email' },
          { label: 'Status', value: 'Ongoing client' },
        ]}
        live={{ href: 'https://ezdtfmaker.com/' }}
        result={{
          label: 'Annual revenue',
          big: (
            <>
              $35K → <em>$360K+</em>
            </>
          ),
          sub: 'per year, from January 2025 to now',
        }}
      />

      <Section>
        <Container>
          <SecHead
            tag="Starting point"
            title="Traffic was not the problem."
            lead="In January 2025 EZDTFMaker had a live store and steady visitors. People came, looked, and left."
          />
          <Split ratio="wideLeft">
            <Shot image={IMG.ezdtfJan2025} lead="Shopify Analytics, Jan 1 to 31, 2025.">
              The baseline before any work started.
            </Shot>
            <div>
              <StatRow
                items={[
                  { n: '2,568', l: 'Sessions' },
                  { n: '$3,834.57', l: 'Sales' },
                ]}
              />
              <Gap size="sm" />
              <StatRow
                items={[
                  { n: '3.42%', l: 'Conversion rate' },
                  { n: '$36.15', l: 'Avg order value' },
                ]}
              />
              <Gap size="sm" />
              <StatRow items={[{ n: '67.25%', l: 'Bounce rate' }]} />
              <Gap size="md" />
              <Para>
                We did not touch ads or email first. If a store cannot convert the traffic it already has, more traffic only makes the leak bigger. So conversion came first.
              </Para>
            </div>
          </Split>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <Phase first num="01" title="Conversion" note="January to April 2025. No ad or email work yet.">
            <Split>
              <div>
                <Kicker flush>Diagnosis before any build</Kicker>
                <BulletList
                  items={[
                    'Installed **Microsoft Clarity** and collected behavior data for 7 to 10 days: heatmaps, session recordings, scroll maps, rage clicks and dead clicks.',
                    'Documented every drop-off point and built a **CRO roadmap ranked by revenue impact**, not by opinion.',
                  ]}
                />
                <Kicker>What we fixed</Kicker>
                <BulletList
                  items={[
                    'Fixed the funnel **one variable at a time**, with every decision written down before the next one.',
                    'Designed desktop and mobile wireframes straight from the behavior data, not from a template.',
                    'Rebuilt the full Shopify store: **mobile-first, speed-optimized, checkout streamlined**.',
                    'Worked bounce rate down and order value up by removing the specific friction the data flagged.',
                    'Started A/B testing once the new site had enough traffic to read results cleanly.',
                  ]}
                />
              </div>
              <div>
                <Shot image={IMG.ezdtfApr2025} lead="Shopify Analytics, Apr 1 to 30, 2025.">
                  Fewer visitors than January. Nearly three times the sales.
                </Shot>
                <Gap size="md" />
                <DataTable
                  columns={['Metric', 'Jan 2025', 'Apr 2025']}
                  winFrom={1}
                  rows={[
                    { label: 'Sessions', cells: ['2,568', '2,394'] },
                    { label: 'Sales', cells: ['$3,834.57', '$10,585.60'] },
                    { label: 'Conversion rate', cells: ['3.42%', '8.06%'] },
                    { label: 'Avg order value', cells: ['$36.15', '$47.31'] },
                    { label: 'Bounce rate', cells: ['67.25%', '55.09%'] },
                  ]}
                />
              </div>
            </Split>
          </Phase>
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead
            tag="The pause"
            title="Then it plateaued, and the client asked to scale."
            lead="Sales held between $10K and $15K a month for a stretch, then dipped to $11K in December 2025. The client was ready to invest, so we opened acquisition and retention. Conversion was already fixed, so everything we added built on a funnel that converted."
          />
          <Phase first num="02" title="Acquisition" note="From December 2025. Tracking first, ads second.">
            <Split>
              <div>
                <Kicker flush>Tracking before any spend</Kicker>
                <BulletList
                  items={[
                    "Installed and verified **Meta Pixel, Conversions API (server-side), UTMs carried through the whole journey, and GA4**.",
                    "Checked every event in Meta's Event Testing Tool before a dollar went live, so the reporting could be trusted from day one.",
                  ]}
                />
                <Kicker>Meta Ads</Kicker>
                <BulletList
                  items={[
                    'Reviewed and rebuilt the account around **broad and Advantage+ targeting** with consolidated creative sets.',
                    'Ran a **4-phase testing sequence**: angle, then hook, then format, then scale.',
                    'Weekly reviews with documented decisions. Budget scaled **at most 20% every 3 to 4 days**, so nothing was pushed on unproven numbers.',
                  ]}
                />
                <Kicker>Google Ads and SEO</Kicker>
                <BulletList
                  items={[
                    'Layered in Google Ads: branded search, Shopping and Performance Max, with keyword strategy, ad copy, landing page alignment and negative keyword management.',
                    'Started SEO in parallel.',
                  ]}
                />
              </div>
              <div>
                <Kicker flush>Monthly sales, from Shopify Analytics</Kicker>
                <Bars
                  rows={[
                    { label: 'Jan 2025', pct: 12.8, value: '$3,834.57' },
                    { label: 'Apr 2025', pct: 35.3, value: '$10,585.60' },
                    { label: 'Dec 2025', pct: 38.1, value: '$11,435.42' },
                    { label: 'Jan 2026', pct: 44.2, value: '$13,262.30', after: true },
                    { label: 'Mar 2026', pct: 58.1, value: '$17,430.53', after: true },
                    { label: 'May 2026', pct: 97.2, value: '$29,146.59', after: true },
                  ]}
                  note="Green bars are after ads and retention opened. Our monthly reporting has February 2026 at $16K and April 2026 at $22K. The run rate is now $30K+ a month and still climbing."
                />
                <Gap size="lg" />
                <Callout kicker="Read the numbers">
                  <Para>
                    From December to May, sessions went from **4,312 to 4,759**. Sales went from **$11,435.42 to $29,146.59**. Most of the lift came from each visit being worth more, not from buying a lot more visits.
                  </Para>
                </Callout>
              </div>
            </Split>
            <Gap size="lg" />
            <ShotGrid>
              <Shot image={IMG.ezdtfDec2025} lead="Dec 2025:">
                4,312 sessions, $11,435.42 sales, 6.09% conversion, $36.90 AOV, 58.69% bounce.
              </Shot>
              <Shot image={IMG.ezdtfJan2026} lead="Jan 2026:">
                4,043 sessions, $13,262.30 sales, 7.74% conversion.
              </Shot>
              <Shot image={IMG.ezdtfMar2026} lead="Mar 2026:">
                4,277 sessions, $17,430.53 sales, 6.8% conversion.
              </Shot>
              <Shot image={IMG.ezdtfMay2026} lead="May 2026:">
                4,759 sessions, $29,146.59 sales, 10.27% conversion, $52.25 AOV, 53.58% bounce.
              </Shot>
            </ShotGrid>
          </Phase>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <Phase first num="03" title="Retention" note="Running alongside acquisition.">
            <Split>
              <div>
                <Kicker flush>Email and lifecycle</Kicker>
                <BulletList
                  items={[
                    'Full setup on **Klaviyo and Omnisend**.',
                    'Five core flows built and live: **Welcome Series, Abandoned Cart, Post-Purchase, Browse Abandonment and Win-Back**.',
                    'Customer segmentation, so messages match where each customer is in their lifecycle instead of one blast to everyone.',
                  ]}
                />
              </div>
              <div>
                <Kicker flush>Everything else feeding repeat orders and AOV</Kicker>
                <BulletList
                  items={[
                    'Loyalty program built and launched.',
                    'Volume pricing and volume discounts, to lift order value without discounting the core offer.',
                    'Reviews set up, text and video. Live chat added.',
                    'UX improvements across the site, pricing strategy revisited, brand positioning refined.',
                  ]}
                />
              </div>
            </Split>
          </Phase>
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead tag="The full arc" title="Same store. Same product. A different system around it." />
          <DataTable
            columns={['Metric', 'Jan 2025', 'May 2026']}
            winFrom={1}
            rows={[
              { label: 'Sales per month', cells: ['$3,834.57', '$29,146.59 (now $30K+)'] },
              { label: 'Conversion rate', cells: ['3.42%', '10.27%'] },
              { label: 'Avg order value', cells: ['$36.15', '$52.25'] },
              { label: 'Bounce rate', cells: ['67.25%', '53.58%'] },
              { label: 'Revenue per year', cells: ['$35K', '$360K+'] },
            ]}
          />
          <Gap size="md" />
          <Note>
            Every monthly figure above comes from the Shopify Analytics screenshots on this page. The annual figures and the current $30K+ run rate come from our monthly reporting.
          </Note>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead tag="In their own words" title="What clients say." />
          <Split>
            <VideoSlot label="Video Testimonial: EZDTFMaker Founder" {...FOUNDER_VIDEOS.ezdtfmaker} size="md" />
            <ReviewShot image={IMG.ezdtfReview} lead="Google review.">
              Five stars. The client had two websites built.
            </ReviewShot>
          </Split>
        </Container>
      </Section>

      <StudyCta />
      <MoreResults current="ezdtfmaker" />
    </>
  )
}
