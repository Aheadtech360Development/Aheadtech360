import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Industries We Serve — AheadTech360',
  description: 'AheadTech360 serves real estate, fashion, ecommerce, education, healthcare, SaaS, restaurants, and local service businesses with specialist digital marketing.',
  alternates: { canonical: 'https://www.aheadtech360.com/industries' },
  openGraph: {
    title: 'Industries We Serve — AheadTech360',
    description: 'Industry-specific digital marketing for real estate, fashion, ecommerce, education, SaaS, and more.',
    url: 'https://www.aheadtech360.com/industries',
    siteName: 'AheadTech360',
    type: 'website',
  },
}

const QUERY = `*[_type == "industryPage"] | order(order asc) {
  title, "slug": slug.current, emoji, hubCardDescription
}`

export default async function IndustriesHubPage() {
  const industries = await sanityFetch<any[]>(QUERY)
  const list = industries ?? []

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>
            Industry Expertise
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(36px,5vw,56px)', color: '#080E1C', letterSpacing: '-0.3px', marginBottom: '16px' }}>
            Digital marketing that knows <em style={{ color: '#25B472', fontStyle: 'italic' }}>your industry.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#6E8098', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontFamily: 'var(--font-jakarta)' }}>
            Generic agencies run the same playbook for every client. We don't. Pick your industry below and see exactly how we approach your market.
          </p>
        </div>
      </section>

      {/* Card grid */}
      <section style={{ background: '#fff', padding: '56px 32px 80px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {list.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
              <p style={{ fontSize: '16px' }}>Industry pages coming soon. Add them in Sanity Studio → Industry Page.</p>
            </div>
          ) : (
            <div className="ind-hub-grid">
              {list.map((ind: any, i: number) => (
                <Link key={i} href={`/industries/${ind.slug}`} className="ind-hub-link">
                  <div className="ind-hub-card">
                    <div style={{ fontSize: '36px', marginBottom: '12px' }}>{ind.emoji}</div>
                    <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '18px', fontWeight: 800, color: '#080E1C', marginBottom: '8px', lineHeight: 1.2 }}>
                      {ind.title}
                    </h2>
                    {ind.hubCardDescription && (
                      <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.6, fontFamily: 'var(--font-jakarta)', flexGrow: 1 }}>
                        {ind.hubCardDescription}
                      </p>
                    )}
                    <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: '#25B472', fontFamily: 'var(--font-jakarta)' }}>
                      Learn more →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '64px', padding: '48px 32px', background: '#080E1C', borderRadius: '20px' }}>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 800, color: '#fff', marginBottom: '10px', lineHeight: 1.1 }}>
              Don&apos;t see your industry?
            </h2>
            <p style={{ fontSize: '15px', color: '#A0AEBF', marginBottom: '24px', fontFamily: 'var(--font-jakarta)' }}>
              We&apos;ve worked across dozens of verticals. Get a free audit and we&apos;ll tell you exactly what will work in your market.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', padding: '13px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 800, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
              Get My Free Audit →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .ind-hub-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ind-hub-link { text-decoration: none; }
        .ind-hub-card {
          background: #fff;
          border: 1.5px solid #DFE5ED;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all .25s;
          cursor: pointer;
        }
        .ind-hub-card:hover {
          border-color: #25B472;
          box-shadow: 0 12px 32px rgba(8,14,28,.1);
          transform: translateY(-3px);
        }
        @media (max-width: 900px) { .ind-hub-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .ind-hub-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
