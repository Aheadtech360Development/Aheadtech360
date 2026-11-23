// app/(site)/layout.tsx
// Current design. Wraps every page in the (site) group with the announcement bar, header and footer.
// All styling is scoped under `.site` (see site.css) so it cannot reach the legacy pages.
import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/site/layout/AnnouncementBar'
import { SiteFooter } from '@/components/site/layout/SiteFooter'
import { SiteHeader } from '@/components/site/layout/SiteHeader'
import { SITE } from '@/content/site/site'
import './site.css'
import s from './layout.module.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  openGraph: { siteName: SITE.name, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St, STE N',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': `${SITE.url}/#organization` },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <a href="#main" className={s.skip}>
        Skip to content
      </a>
      <AnnouncementBar />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  )
}
