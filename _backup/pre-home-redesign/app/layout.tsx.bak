import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/layout/Topbar'
import { sanityFetch } from '@/sanity/lib/client'
import Script from 'next/script'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: false,
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
  preload: false,
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aheadtech360.com'),
  title: 'AheadTech360 — We make your marketing make money.',
  description: 'We help small businesses make more money from their marketing. Meta Ads, Google Ads, SEO, CRO, Email, Web Design.',
}

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  topbarText, navLinks, phone, email, address, footerTagline
}`

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let settings: any = null
  try {
    settings = await sanityFetch<any>(SETTINGS_QUERY)
  } catch {
    // Sanity unavailable — fallback to null, components handle undefined props
  }

  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable} ${jetbrains.variable}`}>
      <body className="font-body text-gray-900 bg-white antialiased leading-relaxed">
        <Topbar text={settings?.topbarText} />
        <Header navLinks={settings?.navLinks?.length ? settings.navLinks : undefined} />
        {children}
        <Footer
          phone={settings?.phone}
          email={settings?.email}
          address={settings?.address}
          tagline={settings?.footerTagline}
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBJBVXBH5F"></script>
        <Script id="google-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TBJBVXBH5F');
            `
          }}
        />
      </body>
    </html>
  )
}
