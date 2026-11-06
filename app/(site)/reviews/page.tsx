import { Gap, Note, Para, SecHead, Split, Timeline } from '@/components/site/case/study/StudyBlocks'
import { ResultGrid, StudyCta } from '@/components/site/case/study/StudyEnd'
import { StudyHero } from '@/components/site/case/study/StudyHero'
import { CredentialStrip, QuoteGrid, ReceiptGroup, StoreLinks, VideoPair } from '@/components/site/reviews/ReviewsBlocks'
import { ReviewWall } from '@/components/site/sections/ReviewWall'
import { VideoTestimonialCard } from '@/components/site/sections/VideoTestimonialCard'
import { Container } from '@/components/site/ui/Container'
import { Section } from '@/components/site/ui/Section'
import { CREDENTIALS, PROMISE, QUOTES, RECEIPTS, REVIEWS_HERO, STORE_LINKS } from '@/content/site/reviews-page'
import { VIDEO_TESTIMONIALS } from '@/content/site/shared'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Client Reviews',
  description:
    'Reviews, video testimonials and results from fashion and apparel store owners who work with AheadTech360. 4.9/5 across Clutch and Google.',
  path: '/reviews',
})

/** Every screenshot is shown: these walls never collapse behind a "Show all" button. */
const ALL = 99

export default function ReviewsPage() {
  return (
    <>
      <StudyHero
        back={false}
        tag={REVIEWS_HERO.tag}
        title={REVIEWS_HERO.title}
        lede={REVIEWS_HERO.lede}
        facts={REVIEWS_HERO.facts}
        result={{
          label: REVIEWS_HERO.rating.label,
          big: <em>{REVIEWS_HERO.rating.value}</em>,
          sub: REVIEWS_HERO.rating.sub,
        }}
      />

      <Section tone="soft" pad="md">
        <Container>
          <CredentialStrip items={CREDENTIALS} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead tag="On camera" title="Founders, in their own words." lead="Two store owners. Two different problems. Same system." />
          <VideoPair>
            {VIDEO_TESTIMONIALS.map((v) => (
              <VideoTestimonialCard key={v.label} video={v} />
            ))}
          </VideoPair>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead
            tag="The receipts"
            title="The screenshots, from where the reviews live."
            lead="Platform reviews, client messages and store analytics. Open any one to read it full size."
          />
          <ReceiptGroup title="Platform reviews">
            <ReviewWall shots={RECEIPTS.platform} initialOnMobile={ALL} />
          </ReceiptGroup>
          <ReceiptGroup title="Client messages">
            <ReviewWall shots={RECEIPTS.messages} initialOnMobile={ALL} />
          </ReceiptGroup>
          <ReceiptGroup
            title="Store analytics"
            note="Shopify Analytics exports. May and June match the EZDTFMaker and US streetwear case studies."
          >
            <ReviewWall shots={RECEIPTS.analytics} initialOnMobile={ALL} />
          </ReceiptGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead
            tag="The results behind the words"
            title="Five brands. Every named one has a live store."
            lead="Click any result to see the full story, the screenshots and the store itself."
          />
          <ResultGrid />
          <StoreLinks links={STORE_LINKS} />
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead
            tag="In writing"
            title="What clients wrote, word for word."
            lead="Taken straight from the review screenshots below. Open any screenshot to read the original."
          />
          <QuoteGrid quotes={QUOTES} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Split ratio="wideLeft">
            <div>
              <SecHead tag={PROMISE.tag} title={PROMISE.title} />
              <Para>{PROMISE.text}</Para>
              <Gap size="sm" />
              <Note>{PROMISE.note}</Note>
            </div>
            <Timeline steps={PROMISE.steps} />
          </Split>
        </Container>
      </Section>

      <StudyCta showReviewsLink={false} />
    </>
  )
}
