// app/page.tsx
export const revalidate = 60

import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/client'
import HeroSection from '@/components/sections/HeroSection'
import ProofBar from '@/components/sections/ProofBar'
import PainSection from '@/components/sections/PainSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview'
import ProcessSection from '@/components/sections/ProcessSection'
import StoryTeaserSection from '@/components/sections/StoryTeaserSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import GuaranteeBar from '@/components/sections/GuaranteeBar'
import FinalCTA from '@/components/sections/FinalCTA'

const HOME_QUERY = `*[_type == "homePage"][0]{
  heroStats, heroHeading, heroSubheading, heroTags, heroGHLFormUrl,
  proofBarStats,
  painHeading, painCards,
  storyGHLFormUrl,
  ctaHeading, ctaSubtext, ctaScarcity, ctaGHLFormUrl,
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

const FAQS_QUERY = `*[_type == "faqItem"] | order(order asc) { question, answer }`

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt asc) {
  quote, boldPart, clientName, clientRole, resultTag, avatarInitial
}`

const CASES_QUERY = `*[_type == "caseStudy"] | order(_createdAt asc)[0...4] {
  badge, title,
  "slug": slug.current,
  "image": { "url": image.asset->url, "alt": image.alt },
  metrics
}`

export async function generateMetadata(): Promise<Metadata> {
  const home = await sanityFetch<any>(HOME_QUERY)
  return {
    title: home?.seo?.metaTitle || 'AheadTech360 — We make your marketing make money.',
    description: home?.seo?.metaDescription || 'Performance marketing agency for ecommerce and service businesses. Meta Ads, Google Ads, SEO, CRO, Email, Web.',
    keywords: home?.seo?.keywords || '',
    openGraph: {
      title: home?.seo?.metaTitle || 'AheadTech360 — We make your marketing make money.',
      description: home?.seo?.metaDescription || '',
      url: 'https://aheadtech360.com/',
      siteName: 'AheadTech360',
      images: home?.seo?.ogImageUrl ? [{ url: home.seo.ogImageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: home?.seo?.metaTitle || 'AheadTech360 — We make your marketing make money.',
      description: home?.seo?.metaDescription || '',
    },
  }
}

export default async function HomePage() {
  const [home, faqs, testimonials, cases] = await Promise.all([
    sanityFetch<any>(HOME_QUERY),
    sanityFetch<any[]>(FAQS_QUERY),
    sanityFetch<any[]>(TESTIMONIALS_QUERY),
    sanityFetch<any[]>(CASES_QUERY),
  ])

  // Normalise case images: pass url string to CaseStudiesPreview (which handles both string + object)
  const normalisedCases = cases?.map((c: any) => ({
    ...c,
    image: c.image?.url ?? null,
  }))

  return (
    <>
      <HeroSection
        stats={home?.heroStats ?? undefined}
        heading={home?.heroHeading ?? undefined}
        subheading={home?.heroSubheading ?? undefined}
        tags={home?.heroTags ?? undefined}
        ghlFormUrl={home?.heroGHLFormUrl ?? 'https://api.aheadtech360.com/widget/form/2iokn70lrSkwL0q1jp4a'}
      />
      <ProofBar stats={home?.proofBarStats ?? undefined} />
      <PainSection heading={home?.painHeading ?? undefined} cards={home?.painCards ?? undefined} />
      <ServicesSection />
      <CaseStudiesPreview cases={normalisedCases?.length ? normalisedCases : undefined} />
      <ProcessSection />
      <StoryTeaserSection
        ghlFormUrl={home?.storyGHLFormUrl ?? 'https://api.aheadtech360.com/widget/form/UprfaLZ4XlDE5nxsjX16'}
      />
      <TestimonialsSection testimonials={testimonials?.length ? testimonials : undefined} />
      <FAQSection faqs={faqs?.length ? faqs : undefined} />
      <GuaranteeBar />
      <FinalCTA
        heading={home?.ctaHeading ?? undefined}
        subtext={home?.ctaSubtext ?? undefined}
        scarcity={home?.ctaScarcity ?? undefined}
        ghlFormUrl={home?.ctaGHLFormUrl ?? 'https://api.aheadtech360.com/widget/form/2iokn70lrSkwL0q1jp4a'}
      />
    </>
  )
}
