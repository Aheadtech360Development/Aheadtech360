// app/blog/page.tsx  ← SERVER COMPONENT (no 'use client')
import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Marketing Blog — AheadTech360',
  description: 'Actionable guides on Meta Ads, Google Ads, SEO, CRO, Email Marketing and more for ecommerce and service businesses.',
  keywords: 'meta ads, google ads, facebook ads, ecommerce marketing, SEO, CRO, email marketing',
  alternates: { canonical: 'https://www.aheadtech360.com/blog' },
}
import BlogClientPage from './BlogClientPage'

const QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  "slug": slug.current,
  category, title, excerpt,
  "image": coverImage.asset->url
}`

export default async function BlogPage() {
  const posts = await sanityFetch<any[]>(QUERY)
  return <BlogClientPage posts={posts || []} />
}
