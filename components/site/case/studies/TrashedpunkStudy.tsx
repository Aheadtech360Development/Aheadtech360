import { CASE_IMAGES as IMG } from '@/content/site/case-images'
import { FOUNDER_VIDEOS } from '@/content/site/videos'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { VideoSlot } from '../../ui/VideoSlot'
import { Gap, PageCapture, Para, SecHead, Shot, ShotGrid, Split, StatRow, Timeline } from '../study/StudyBlocks'
import { MoreResults, StudyCta } from '../study/StudyEnd'
import { StudyHero } from '../study/StudyHero'
import s from './TrashedpunkStudy.module.css'

export function TrashedpunkStudy() {
  return (
    <>
      <StudyHero
        tag="Streetwear · Built from zero"
        title="TrashedPunk"
        lede="A founder with an idea and a neon streetwear look. We built the store, the search foundation and the launch plan around it."
        facts={[
          { label: 'Started', value: 'October 2025' },
          { label: 'Industry', value: 'Streetwear and festival wear' },
          { label: 'Services', value: 'Custom build, SEO, CRO' },
          { label: 'Store', value: 'trashedpunk.com' },
        ]}
        live={{ href: 'https://trashedpunk.com/' }}
        result={{
          label: 'Where it started',
          big: (
            <>
              Etsy and Facebook → <em>a real store</em>
            </>
          ),
          sub: 'Custom build with SEO built in from day one.',
        }}
      />

      <Section>
        <Container>
          <Split ratio="wideRight">
            <div className={s.board}>
              <Shot image={IMG.tpConcept} lead="Concept direction board">
                we made for the founder before the build started.
              </Shot>
            </div>
            <div>
              <SecHead tag="From idea to live store" title="The idea was already strong. The store did not exist yet." />
              <Para>
                The founder came to us with an idea, a neon streetwear aesthetic and nothing built beyond Etsy and Facebook. No store, no search presence, no plan for launch.
              </Para>
              <Para>We started by agreeing what the brand should feel like, so the store would look like the brand and not like a template.</Para>
              <Timeline
                steps={[
                  { when: 'October 8, 2025', title: 'First call', text: 'Founder shares the idea and the look. We start on direction.' },
                  {
                    when: 'Direction',
                    title: 'Concept board',
                    text: 'Black base, glitch and neon as the core. Motion and 3D ideas for the site, so it feels like stepping into the brand.',
                  },
                  {
                    when: 'Build',
                    title: 'Custom Shopify store',
                    text: 'Built to match the concept, with technical and on-page SEO set up during the build instead of bolted on later.',
                  },
                  {
                    when: 'Foundation',
                    title: 'Search and conversion basics',
                    text: 'Page titles and descriptions, heading structure, product markup, image compression, clean URLs, and Search Console and GA4 set up, with Clarity in place to watch behavior.',
                  },
                ]}
              />
            </div>
          </Split>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead
            tag="Why build SEO in from the start"
            title="Fixing search later costs more than building it right."
            lead="Doing it during the build means Google can read and index the store from day one, and the founder starts earning organic traffic sooner. Doing it after launch means rebuilding pages that already exist."
          />
          <StatRow
            items={[
              { n: 'Custom', l: 'Store built to the concept' },
              { n: 'Day one', l: 'SEO set up in the build' },
              { n: 'Live', l: 'trashedpunk.com' },
            ]}
          />
          <Gap size="md" />
          <a className={s.ghost} href="https://trashedpunk.com" target="_blank" rel="noopener noreferrer">
            Visit the live store <span aria-hidden="true">&rarr;</span>
          </a>
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead tag="Before and after" title="The store, then and now." />
          <ShotGrid>
            <PageCapture image={IMG.tpBefore} label="Before · Earlier store" lead="Before:">
              the earlier version of the store. Scroll inside the window to see the whole page.
            </PageCapture>
            <PageCapture after image={IMG.tpAfter} label="After · Current store" lead="After:">
              the store as it is now. Scroll inside the window to see the whole page.
            </PageCapture>
          </ShotGrid>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead tag="In their own words" title="What the founder says." />
          <VideoSlot label="Video Testimonial: TrashedPunk Founder" {...FOUNDER_VIDEOS.trashedpunk} size="md" />
        </Container>
      </Section>

      <StudyCta />
      <MoreResults current="trashedpunk" />
    </>
  )
}
