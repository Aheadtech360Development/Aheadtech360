// app/page.tsx
// Home page — fashion & apparel repositioning. Sections are hardcoded to match the new
// mockup copy for now (content model doesn't match the old Sanity homePage schema, which
// is left untouched); Sanity wiring can come back once the new fields exist.
import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import LeakSection from '@/components/sections/LeakSection'
import PillarsSection from '@/components/sections/PillarsSection'
import VerticalsSection from '@/components/sections/VerticalsSection'
import ProofBar from '@/components/sections/ProofBar'
import ProgramsSection from '@/components/sections/ProgramsSection'
import FoundersSection from '@/components/sections/FoundersSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'AheadTech360 | Growth Marketing for $500K-$10M Fashion & Apparel Brands',
  description: 'Growth marketing for fashion and apparel brands. CRO, store builds, paid ads, creative, and retention run as one system.',
  openGraph: {
    title: 'AheadTech360 | Growth Marketing for $500K-$10M Fashion & Apparel Brands',
    description: 'Growth marketing for fashion and apparel brands. CRO, store builds, paid ads, creative, and retention run as one system.',
    url: 'https://aheadtech360.com/',
    siteName: 'AheadTech360',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AheadTech360 | Growth Marketing for $500K-$10M Fashion & Apparel Brands',
    description: 'Growth marketing for fashion and apparel brands. CRO, store builds, paid ads, creative, and retention run as one system.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LeakSection />
      <PillarsSection />
      <VerticalsSection />
      <ProofBar />
      <ProgramsSection />
      <FoundersSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
