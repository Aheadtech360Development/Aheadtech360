'use client'

import { usePathname } from 'next/navigation'
import { SITE } from '@/content/site/site'

// Structured data (JSON-LD) by URL path. Rendered on the server with the page HTML.
// Only paths listed in PAGE_NAMES (plus /case-studies/* and /city/*) get schema; everything else
// (blog posts, /faq, ...) renders nothing here and keeps its own markup.

const PAGE_NAMES: Record<string, string> = {
  '/': 'AheadTech360',
  '/services': 'Services',
  '/offer': 'The Offer',
  '/pricing': 'Pricing',
  '/reviews': 'Reviews',
  '/about': 'About',
  '/book-a-call': 'Book A Free Call',
  '/terms': 'Terms',
  '/privacy': 'Privacy',
  '/blog': 'Marketing Blog',
  '/case-studies': 'Case Studies',
  '/city': 'Cities',
}

const SERVICES_DESCRIPTION =
  'Website development, CRO, performance ads, SEO, email marketing, and custom development for fashion and apparel stores.'

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function pageName(path: string): string | null {
  if (PAGE_NAMES[path]) return PAGE_NAMES[path]
  const parts = path.split('/').filter(Boolean)
  if (parts.length === 2 && (parts[0] === 'case-studies' || parts[0] === 'city')) {
    return titleFromSlug(parts[1])
  }
  return null
}

export default function PageSchema() {
  const raw = usePathname() || '/'
  const path = raw.length > 1 && raw.endsWith('/') ? raw.slice(0, -1) : raw
  const name = pageName(path)
  if (!name) return null

  const orgId = `${SITE.url}/#organization`
  const siteId = `${SITE.url}/#website`
  const url = path === '/' ? SITE.url : `${SITE.url}${path}`

  const organization = {
    '@type': 'Organization',
    '@id': orgId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    logo: `${SITE.url}/images/Ahead-Logo-right-balaning.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 N Gould St, STE N',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': siteId,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': orgId },
  }

  const graph: Record<string, unknown>[] = []

  if (path === '/') {
    graph.push(organization, website)
  }

  graph.push({
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    isPartOf: { '@id': siteId },
    publisher: { '@id': orgId },
    inLanguage: 'en-US',
  })

  if (path !== '/') {
    const parts = path.split('/').filter(Boolean)
    const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url }]
    parts.forEach((part, i) => {
      const href = `${SITE.url}/${parts.slice(0, i + 1).join('/')}`
      const label = i === parts.length - 1 ? name : PAGE_NAMES[`/${parts.slice(0, i + 1).join('/')}`] || titleFromSlug(part)
      items.push({ '@type': 'ListItem', position: i + 2, name: label, item: href })
    })
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: items })
    graph.push({ ...organization, '@id': orgId })
  }

  if (path === '/services') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: 'Growth marketing services for fashion and apparel stores',
      description: SERVICES_DESCRIPTION,
      url,
      provider: { '@id': orgId },
      areaServed: { '@type': 'Country', name: 'United States' },
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  )
}
