// app/(legacy)/layout.tsx
// Previous design, rendered exactly as before (Topbar + Header + Footer driven by Sanity siteSettings).
// These pages stay live but are no longer linked from the current site's navigation or footer —
// they are reachable by direct URL only.
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/layout/Topbar'
import { sanityFetch } from '@/sanity/lib/client'

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  topbarText, navLinks, phone, email, address, footerTagline
}`

export default async function LegacyLayout({ children }: { children: React.ReactNode }) {
  let settings: any = null
  try {
    settings = await sanityFetch<any>(SETTINGS_QUERY)
  } catch {
    // Sanity unavailable — fallback to null, components handle undefined props
  }

  return (
    <>
      <Topbar text={settings?.topbarText} />
      <Header navLinks={settings?.navLinks?.length ? settings.navLinks : undefined} />
      {children}
      <Footer
        phone={settings?.phone}
        email={settings?.email}
        address={settings?.address}
        tagline={settings?.footerTagline}
      />
    </>
  )
}
