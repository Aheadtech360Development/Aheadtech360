// app/results/[slug]/page.tsx
// NO 'use client' here — this must be a server component

export const revalidate = 60

import { sanityFetch } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const QUERY = `*[_type == "caseStudy" && slug.current == $slug][0]{
  badge, title, description,
  "image": image.asset->url,
  client, industry, location, engagementPeriod, servicesRendered,
  heroTitle, heroSubtitle, heroMetrics,
  situation,
  strategyBlocks,
  resultsGrid,
  performanceTable,
  peakBox,
  keyInsight,
  ctaHeading, ctaSubtext
}`

async function getCaseStudy(slug: string) {
  return sanityFetch<any>(QUERY, { slug })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudy(slug)
  return {
    title: cs?.title ? `${cs.title} — AheadTech360` : 'Case Study — AheadTech360',
    description: cs?.description || '',
  }
}

function StratBlock({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ background: '#F2F5F8', borderLeft: '3px solid #213D79', borderRadius: '0 10px 10px 0', padding: '18px 22px', margin: '14px 0' }}>
      <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#213D79', marginBottom: '4px', fontFamily: 'var(--font-bricolage)' }}>{title}</h4>
      <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.65, margin: 0, fontFamily: 'var(--font-jakarta)' }}>{description}</p>
    </div>
  )
}

function ResultCard({ before, after, change, label }: { before?: string; after: string; change?: string; label: string }) {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '12px', padding: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#25B472' }} />
      {before && <div style={{ fontSize: '12px', color: '#6E8098', marginBottom: '2px', fontFamily: 'var(--font-jakarta)' }}>{before}</div>}
      <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#1C8F5A', lineHeight: 1 }}>{after}</div>
      {change && (
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#25B472', background: '#EDFBF3', display: 'inline-block', padding: '2px 8px', borderRadius: '99px', margin: '4px 0' }}>{change}</div>
      )}
      <div style={{ fontSize: '10px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginTop: '6px', fontFamily: 'var(--font-jetbrains)' }}>{label}</div>
    </div>
  )
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = await getCaseStudy(slug)
  if (!cs) notFound()

  return (
    <>
      {/* ── Dark Hero ── */}
      <section style={{ background: '#080E1C', padding: '56px 32px' }}>
        <div className="cs-hero-grid" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div>
            <Link href="/results" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#A4B3C4', fontWeight: 600, marginBottom: '16px', textDecoration: 'none', fontFamily: 'var(--font-jakarta)' }}>
              ← Back to all results
            </Link>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#34D48A', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', fontFamily: 'var(--font-jetbrains)' }}>
              Case Study · {cs.badge}
            </div>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, marginBottom: '10px' }}>
              {cs.heroTitle || cs.title}
            </h1>
            {cs.heroSubtitle && (
              <p style={{ fontSize: '14px', color: '#A4B3C4', lineHeight: 1.65, marginBottom: '20px', fontFamily: 'var(--font-jakarta)' }}>{cs.heroSubtitle}</p>
            )}
            {cs.heroMetrics?.length > 0 && (
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {cs.heroMetrics.map((m: any, i: number) => (
                  <div key={i} style={{ background: '#1A2540', border: '1px solid rgba(255,255,255,.06)', borderRadius: '10px', padding: '14px 20px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '24px', fontWeight: 800, color: '#34D48A', lineHeight: 1 }}>{m.value}</div>
                    <div style={{ fontSize: '9px', color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)', marginTop: '3px', fontWeight: 600 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ background: '#1A2540', borderRadius: '16px', minHeight: '360px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,.04)' }}>
            {cs.image
              ? <Image src={cs.image} alt={cs.title} fill style={{ objectFit: 'cover' }} unoptimized />
              : <div style={{ display: 'grid', placeItems: 'center', height: '360px', fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Client image</div>
            }
          </div>
        </div>
      </section>

      {/* ── Info Bar ── */}
      {(cs.client || cs.industry || cs.location || cs.engagementPeriod || cs.servicesRendered) && (
        <div style={{ background: '#F2F5F8', borderBottom: '1px solid #DFE5ED' }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '14px 32px', display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {[
              { label: 'Client', value: cs.client },
              { label: 'Industry', value: cs.industry },
              { label: 'Location', value: cs.location },
              { label: 'Engagement', value: cs.engagementPeriod },
              { label: 'Services', value: cs.servicesRendered },
            ].filter(item => item.value).map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'center', fontFamily: 'var(--font-jakarta)' }}>
                <span style={{ color: '#6E8098', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '10px', fontFamily: 'var(--font-jetbrains)' }}>{item.label}:</span>
                <span style={{ color: '#1C2A42', fontWeight: 700, fontSize: '12px' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <section style={{ background: '#fff', padding: '60px 32px 80px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ maxWidth: '800px' }}>

            {cs.situation && (
              <>
                <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '26px', fontWeight: 800, color: '#080E1C', margin: '0 0 14px' }}>The situation</h2>
                <p style={{ fontSize: '14.5px', color: '#6E8098', lineHeight: 1.75, marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>{cs.situation}</p>
              </>
            )}

            {cs.strategyBlocks?.length > 0 && (
              <>
                <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '26px', fontWeight: 800, color: '#080E1C', margin: '0 0 6px' }}>What we did</h2>
                {cs.strategyBlocks.map((b: any, i: number) => (
                  <StratBlock key={i} title={b.title} description={b.description} />
                ))}
              </>
            )}

            {cs.resultsGrid?.length > 0 && (
              <>
                <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '26px', fontWeight: 800, color: '#080E1C', margin: '40px 0 14px' }}>The results</h2>
                <div className="results-grid">
                  {cs.resultsGrid.map((r: any, i: number) => (
                    <ResultCard key={i} before={r.before} after={r.after} change={r.change} label={r.label} />
                  ))}
                </div>
              </>
            )}

            {cs.performanceTable?.rows?.length > 0 && (
              <>
                <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '26px', fontWeight: 800, color: '#080E1C', margin: '40px 0 14px' }}>
                  {cs.performanceTable.title || 'Performance'}
                </h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                    <thead>
                      <tr>
                        {cs.performanceTable.headers?.map((h: string, i: number) => (
                          <th key={i} style={{ textAlign: 'left', fontSize: '10px', fontWeight: 800, color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '10px 12px', borderBottom: '2px solid #DFE5ED', background: '#F2F5F8', fontFamily: 'var(--font-jetbrains)' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {cs.performanceTable.rows.map((row: any, i: number) => (
                        <tr key={i}>
                          {[row.col1, row.col2, row.col3, row.col4].filter(Boolean).map((cell: string, j: number) => (
                            <td key={j} style={{ padding: '10px 12px', borderBottom: '1px solid #DFE5ED', color: row.highlight && j > 0 ? '#1C8F5A' : j === 0 ? '#1C2A42' : '#6E8098', fontWeight: row.highlight && j > 0 ? 700 : j === 0 ? 600 : 400, fontFamily: 'var(--font-jakarta)' }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {cs.peakBox?.title && (
              <div style={{ background: 'linear-gradient(135deg,#EDFBF3,#EEF2F9)', border: '1.5px solid #DFE5ED', borderRadius: '16px', padding: '24px', margin: '28px 0', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#25B472', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', fontFamily: 'var(--font-jetbrains)' }}>{cs.peakBox.label}</div>
                <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '20px', fontWeight: 800, color: '#080E1C', marginBottom: '16px' }}>{cs.peakBox.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                  {cs.peakBox.metrics?.map((m: any, i: number) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '24px', fontWeight: 800, color: '#213D79' }}>{m.value}</div>
                      <div style={{ fontSize: '10px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.4px', fontFamily: 'var(--font-jetbrains)' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {cs.keyInsight && (
              <div style={{ background: '#080E1C', borderRadius: '16px', padding: '28px', margin: '32px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  💡 Key Insight
                </h3>
                <p style={{ fontSize: '14px', color: '#A4B3C4', lineHeight: 1.65, margin: 0, fontFamily: 'var(--font-jakarta)' }}>{cs.keyInsight}</p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#080E1C', textAlign: 'center', padding: '72px 32px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
            {cs.ctaHeading || <>Want results <em style={{ color: '#34D48A', fontStyle: 'italic' }}>like these?</em></>}
          </h2>
          {cs.ctaSubtext && (
            <p style={{ fontSize: '14px', color: '#A4B3C4', marginBottom: '24px', fontFamily: 'var(--font-jakarta)' }}>{cs.ctaSubtext}</p>
          )}
          <Link href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', background: '#25B472', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
            Get My Free Audit →
          </Link>
        </div>
      </section>

      <style>{`
        .cs-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }
        @media(max-width: 900px) {
          .cs-hero-grid { grid-template-columns: 1fr !important; }
          .results-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width: 500px) {
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}