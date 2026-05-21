// app/sitemap.ts
import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.aheadtech360.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/services`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/results`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/blog`,               lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${baseUrl}/about`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/story`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    `*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
  )

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const cases = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    `*[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
  )

  const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${baseUrl}/results/${c.slug}`,
    lastModified: new Date(c._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages, ...casePages]
}
