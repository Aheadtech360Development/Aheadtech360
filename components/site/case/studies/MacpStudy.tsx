import { CASE_IMAGES as IMG } from '@/content/site/case-images'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { BulletList, Callout, CalloutHeadline, Gap, Kicker, Note, PageCapture, Para, ReviewShot, SecHead, Shot, ShotGrid, Split } from '../study/StudyBlocks'
import { MoreResults, StudyCta } from '../study/StudyEnd'
import { StudyHero } from '../study/StudyHero'

export function MacpStudy() {
  return (
    <>
      <StudyHero
        tag="Niche Apparel"
        title="The MACP Store"
        lede="A small, high-intent audience that wanted to buy, on a store that would not let them. The site was the leak."
        facts={[
          { label: 'Industry', value: 'Niche apparel' },
          { label: 'Starting point', value: 'A new Square store' },
          { label: 'Services', value: 'Website development, CRO' },
          { label: 'Focus', value: 'Trust and conversion' },
        ]}
        live={{ href: 'https://themacpstore.com/' }}
        result={{
          label: 'Conversion rate',
          big: (
            <>
              0.5% → <em>2.18%</em>
            </>
          ),
          sub: 'after a full conversion-focused rebuild.',
        }}
      />

      <Section>
        <Container>
          <Split>
            <div>
              <SecHead tag="The situation" title="He had just bought Square. It was not converting." />
              <Para>
                The founder came to us with a store on Square that was barely converting, at **0.5%**. His products sit in a very narrow niche, so the audience is small but serious. Those buyers know exactly what they want. They also need a reason to trust a store before they hand over money.
              </Para>
              <Para>More traffic was not the answer. With an audience this size, every visitor counts, and the site itself was losing them.</Para>
            </div>
            <Callout kicker="The call">
              <CalloutHeadline>Stop sending a small, high-intent audience to a store that does not earn their trust.</CalloutHeadline>
            </Callout>
          </Split>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SecHead tag="What we built" title="A conversion-optimized store that builds trust." />
          <Split>
            <div>
              <BulletList
                items={[
                  'A **full rebuild off Square**, designed around one job: turn a small, high-intent audience into customers.',
                  'Layout and content built to **build trust** with buyers in this niche before they reach checkout.',
                  'A conversion-first structure, so the store makes it easy to say yes.',
                ]}
              />
              <Para>Result: conversion rate up from **0.5% to 2.18%** on the same kind of audience.</Para>
            </div>
            <Shot image={IMG.macpAdmin} lead="Shopify admin snapshot.">
              1,846 sessions (+78%), $2,898 in sales, 42 orders, 2.16% conversion rate at the time of capture.
            </Shot>
          </Split>
        </Container>
      </Section>

      <Section>
        <Container>
          <SecHead tag="Before and after" title="Same store name. A different first impression." />
          <ShotGrid>
            <PageCapture image={IMG.macpBefore} label="Before · Square store" lead="Before:">
              the Square store. One oversized hero, and only a Shop All link. Scroll inside the window to see the whole page.
            </PageCapture>
            <PageCapture after image={IMG.macpAfter} label="After · Rebuilt store" lead="After:">
              trust bar, search, a clear menu for each customer type, and a hero that tells people where to go. Scroll inside the window to see the whole page.
            </PageCapture>
          </ShotGrid>
          <Gap size="sm" />
          <Note>Live at themacpstore.com. The phone number in the top bar is covered in the screenshot.</Note>
          <Gap size="lg" />
          <Kicker flush>In their own words</Kicker>
          <ReviewShot image={IMG.macpReview} lead="Shopify Partner review, October 2025.">
            Five stars for quality of work and communication.
          </ReviewShot>
        </Container>
      </Section>

      <StudyCta />
      <MoreResults current="macp-store" />
    </>
  )
}
