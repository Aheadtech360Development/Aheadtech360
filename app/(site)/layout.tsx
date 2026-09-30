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

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
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
