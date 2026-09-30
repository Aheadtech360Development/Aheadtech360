import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

// Root layout: document shell, fonts and analytics only.
// Site chrome (header/footer) lives in the route-group layouts:
//   app/(site)/layout.tsx    — current design
//   app/(legacy)/layout.tsx  — previous design, kept reachable by direct URL only

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable} ${jetbrains.variable}`}>
      <body className="font-body text-gray-900 bg-white antialiased leading-relaxed">
        {children}
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
