import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Script from 'next/script'

// Root layout: document shell, fonts and analytics only.
// Site chrome (header/footer) lives in the route-group layouts:
//   app/(site)/layout.tsx    — current design
//   app/(legacy)/layout.tsx  — previous design, kept reachable by direct URL only

// Fonts are self-hosted (variable woff2, latin subset, from Google Fonts) instead of loaded with
// next/font/google: the Google loader fetches and caches at build time, and a stale or partial cache made
// the Vercel build fail with "next/font/google queries have exactly one entry". The CSS variables are the
// same ones the Tailwind theme and the (site) styles already use.
const jakarta = localFont({
  src: [{ path: './fonts/PlusJakartaSans.woff2', weight: '300 800', style: 'normal' }],
  variable: '--font-jakarta',
  display: 'swap',
  preload: false,
})

const bricolage = localFont({
  src: [{ path: './fonts/BricolageGrotesque.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-bricolage',
  display: 'swap',
  preload: false,
})

const jetbrains = localFont({
  src: [{ path: './fonts/JetBrainsMono.woff2', weight: '400 600', style: 'normal' }],
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
