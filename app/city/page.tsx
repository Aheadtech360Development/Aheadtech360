import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Locations We Serve — AheadTech360',
  description: 'AheadTech360 serves businesses in New York, Chicago, Los Angeles, Miami, Dallas, London, Dubai, Karachi, Lahore, and more with results-driven digital marketing.',
  alternates: { canonical: 'https://www.aheadtech360.com/city' },
  openGraph: {
    title: 'Locations We Serve — AheadTech360',
    description: 'Digital marketing agency serving the US, UK, UAE, and Pakistan. Senior team. No junior handoff.',
    url: 'https://www.aheadtech360.com/city',
    siteName: 'AheadTech360',
    type: 'website',
  },
}

const QUERY = `*[_type == "cityPage"] | order(order asc) {
  title, "slug": slug.current, emoji, region, hubCardDescription
}`

export default async function CityHubPage() {
  const cities = await sanityFetch<any[]>(QUERY)
  const list = cities ?? []

  // Group by region
  const regionOrder = ['US', 'UK', 'UAE', 'PK']
  const grouped: Record<string, any[]> = {}
  list.forEach((c: any) => {
    const r = c.region || 'Other'
    if (!grouped[r]) grouped[r] = []
    grouped[r].push(c)
  })

  const regionLabel: Record<string, string> = {
    US: '🇺🇸 United States',
    UK: '🇬🇧 United Kingdom',
    UAE: '🇦🇪 UAE & Gulf',
    PK: '🇵🇰 Pakistan',
  }

  const regions = regionOrder.filter(r => grouped[r]?.length)
  const hasOther = grouped['Other']?.length

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>
            Locations
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(36px,5vw,56px)', color: '#080E1C', letterSpacing: '-0.3px', marginBottom: '16px' }}>
            We serve businesses <em style={{ color: '#25B472', fontStyle: 'italic' }}>across the globe.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#6E8098', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontFamily: 'var(--font-jakarta)' }}>
            Remote-first with timezone alignment. Senior team. No year-long lock-ins. Pick your city to see exactly how we approach your local market.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section style={{ background: '#fff', padding: '48px 32px 80px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {list.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
              <p style={{ fontSize: '16px' }}>City pages coming soon. Add them in Sanity Studio → City Page.</p>
            </div>
          ) : (
            <>
              {regions.map(region => (
                <div key={region} style={{ marginBottom: '48px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#6E8098', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'var(--font-jetbrains)', marginBottom: '16px' }}>
                    {regionLabel[region] || region}
                  </div>
                  <div className="city-hub-grid">
                    {grouped[region].map((city: any, i: number) => (
                      <Link key={i} href={`/city/${city.slug}`} className="city-hub-link">
                        <div className="city-hub-card">
                          <div style={{ fontSize: '32px', marginBottom: '10px' }}>{city.emoji}</div>
                          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '17px', fontWeight: 800, color: '#080E1C', marginBottom: '6px', lineHeight: 1.2 }}>
                            {city.title}
                          </h2>
                          {city.hubCardDescription && (
                            <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.55, fontFamily: 'var(--font-jakarta)', flexGrow: 1 }}>
                              {city.hubCardDescription}
                            </p>
                          )}
                          <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 700, color: '#25B472', fontFamily: 'var(--font-jakarta)' }}>
                            Learn more →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {hasOther && (
                <div style={{ marginBottom: '48px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#6E8098', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'var(--font-jetbrains)', marginBottom: '16px' }}>
                    🌍 Other Locations
                  </div>
                  <div className="city-hub-grid">
                    {grouped['Other'].map((city: any, i: number) => (
                      <Link key={i} href={`/city/${city.slug}`} className="city-hub-link">
                        <div className="city-hub-card">
                          <div style={{ fontSize: '32px', marginBottom: '10px' }}>{city.emoji}</div>
                          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '17px', fontWeight: 800, color: '#080E1C', marginBottom: '6px' }}>
                            {city.title}
                          </h2>
                          {city.hubCardDescription && (
                            <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.55, fontFamily: 'var(--font-jakarta)', flexGrow: 1 }}>
                              {city.hubCardDescription}
                            </p>
                          )}
                          <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 700, color: '#25B472', fontFamily: 'var(--font-jakarta)' }}>
                            Learn more →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '32px', padding: '48px 32px', background: '#080E1C', borderRadius: '20px' }}>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 800, color: '#fff', marginBottom: '10px', lineHeight: 1.1 }}>
              Don&apos;t see your city?
            </h2>
            <p style={{ fontSize: '15px', color: '#A0AEBF', marginBottom: '24px', fontFamily: 'var(--font-jakarta)' }}>
              We work globally. Get a free audit and we&apos;ll show you exactly what will work in your market.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', padding: '13px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 800, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
              Get My Free Audit →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .city-hub-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .city-hub-link { text-decoration: none; }
        .city-hub-card {
          background: #fff;
          border: 1.5px solid #DFE5ED;
          border-radius: 14px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all .25s;
          cursor: pointer;
        }
        .city-hub-card:hover {
          border-color: #25B472;
          box-shadow: 0 10px 28px rgba(8,14,28,.1);
          transform: translateY(-2px);
        }
        @media (max-width: 900px) { .city-hub-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 600px) { .city-hub-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 380px) { .city-hub-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
