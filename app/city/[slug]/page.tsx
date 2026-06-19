import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import FaqAccordion from '@/components/FaqAccordion'
import '../city.css'

// ── Queries ──────────────────────────────────────────────────────────────

const CITY_QUERY = `*[_type == "cityPage" && slug.current == $slug][0]{
  title, emoji, region, breadcrumbLabel, heroTag, heroHeading, heroDescription,
  heroSignals[] { emoji, title, description },
  proofCard { title, stats[] { value, label, sublabel }, pills },
  statsStrip[] { value, label },
  marketSection { label, heading, paragraphs, cards[] { emoji, title, description } },
  servicesSection { label, heading, cards[] { emoji, title, description, badge } },
  seoBody,
  sidebar { servicesTitle, servicesList, industriesTitle, industriesList, ctaHeading, ctaText },
  faqs[] { question, answer },
  finalCta { heading, text, buttonText, smallText },
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

const OTHER_CITIES_QUERY = `*[_type == "cityPage" && slug.current != $slug] | order(order asc) [0...6]{
  title, "slug": slug.current, emoji, hubCardDescription
}`

// ── Portable Text renderer ────────────────────────────────────────────────

function RenderSeoBody({ body }: { body: any[] }) {
  if (!body?.length) return null
  const nodes: React.ReactNode[] = []
  let bulletBuf: React.ReactNode[] = []

  const flushBullets = () => {
    if (bulletBuf.length) {
      nodes.push(<ul key={`ul-${nodes.length}`}>{bulletBuf}</ul>)
      bulletBuf = []
    }
  }

  body.forEach((block: any, i: number) => {
    if (block._type !== 'block') return
    const html = (block.children || []).map((c: any) => {
      let t = (c.text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      if (c.marks?.includes('strong')) t = `<strong>${t}</strong>`
      if (c.marks?.includes('em')) t = `<em>${t}</em>`
      return t
    }).join('')
    if (!html.trim()) return

    if (block.listItem === 'bullet') {
      bulletBuf.push(<li key={i} dangerouslySetInnerHTML={{ __html: html }} />)
      return
    }
    flushBullets()
    if (block.style === 'h2') nodes.push(<h2 key={i} dangerouslySetInnerHTML={{ __html: html }} />)
    else if (block.style === 'h3') nodes.push(<h3 key={i} dangerouslySetInnerHTML={{ __html: html }} />)
    else nodes.push(<p key={i} dangerouslySetInnerHTML={{ __html: html }} />)
  })
  flushBullets()
  return <>{nodes}</>
}

// ── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = await client.fetch(CITY_QUERY, { slug }, { next: { revalidate: 60 } })
  const title = page?.seo?.metaTitle || (page?.title ? `Digital Marketing Agency in ${page.title} — AheadTech360` : 'City Page — AheadTech360')
  const description = page?.seo?.metaDescription || page?.heroDescription || ''
  const ogImage = page?.seo?.ogImageUrl
  return {
    title,
    description,
    keywords: page?.seo?.keywords || '',
    alternates: { canonical: `https://www.aheadtech360.com/city/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.aheadtech360.com/city/${slug}`,
      siteName: 'AheadTech360',
      type: 'website',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────

export default async function CityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const [page, otherCities] = await Promise.all([
    client.fetch<any>(CITY_QUERY, { slug }, { next: { revalidate: 60 } }),
    client.fetch<any[]>(OTHER_CITIES_QUERY, { slug }, { next: { revalidate: 60 } }),
  ])

  if (!page) notFound()

  const ctaHref = '/contact'
  const breadcrumb = page.breadcrumbLabel || `Digital Marketing Agency in ${page.title}`

  return (
    <div className="city-page">

      {/* ── 1. Hero ── */}
      <section className="ch">
        <div className="ch-in">
          <div>
            <div className="ch-bc">Home <span>{breadcrumb}</span></div>
            {page.heroTag && <div className="tag tag-blue">{page.heroTag}</div>}
            <h1>
              Digital Marketing Agency<br />
              in <em>{page.heroHeading || `${page.title}.`}</em>
            </h1>
            {page.heroDescription && <p className="ch-desc">{page.heroDescription}</p>}
            <div className="ch-ctas">
              <Link href={ctaHref} className="btn btn-g">Get My Free Audit →</Link>
              <Link href="/results" className="btn btn-o">See Client Work</Link>
            </div>
            {page.heroSignals?.length > 0 && (
              <div className="ch-sigs">
                {page.heroSignals.map((sig: any, i: number) => (
                  <div key={i} className="ch-sig">
                    <span className="em">{sig.emoji}</span>
                    <div>
                      <h5>{sig.title}</h5>
                      {sig.description && <p>{sig.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Proof card */}
          {page.proofCard && (
            <div className="ch-proof">
              <h4>{page.proofCard.title || 'Results from our portfolio'}</h4>
              {page.proofCard.stats?.map((stat: any, i: number) => (
                <div key={i} className="ch-pstat">
                  <div className="v">{stat.value}</div>
                  <div className="l">
                    {stat.label && <b>{stat.label}</b>}
                    {stat.sublabel}
                  </div>
                </div>
              ))}
              {page.proofCard.pills?.length > 0 && (
                <div className="ch-pills">
                  {page.proofCard.pills.map((pill: string, i: number) => (
                    <span key={i} className="ch-pill">{pill}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── 2. Stats strip ── */}
      {page.statsStrip?.length > 0 && (
        <div className="stats-strip">
          <div className="stats-strip-in">
            {page.statsStrip.map((stat: any, i: number) => (
              <div key={i} className="ss-c">
                <div className="v">{stat.value}</div>
                <div className="l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── 3. Market section (dark) ── */}
      {page.marketSection && (
        <section className="mkt">
          <div className="mkt-in">
            <div>
              {page.marketSection.label && <div className="sl sl-wh">{page.marketSection.label}</div>}
              {page.marketSection.heading && (
                <h2 dangerouslySetInnerHTML={{ __html: page.marketSection.heading.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
              )}
              <div className="mkt-text">
                {page.marketSection.paragraphs?.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            {page.marketSection.cards?.length > 0 && (
              <div className="mkt-grid">
                {page.marketSection.cards.map((card: any, i: number) => (
                  <div key={i} className="mkt-c">
                    {card.emoji && <div className="em">{card.emoji}</div>}
                    <h5>{card.title}</h5>
                    {card.description && <p>{card.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 4. Services grid ── */}
      {page.servicesSection?.cards?.length > 0 && (
        <section className="city-svcs">
          <div className="city-svcs-in">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              {page.servicesSection.label && <div className="sl sl-bl">{page.servicesSection.label}</div>}
              {page.servicesSection.heading && (
                <h2 className="sh" style={{ fontSize: 'clamp(26px,3vw,36px)' }}
                  dangerouslySetInnerHTML={{ __html: page.servicesSection.heading.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
              )}
            </div>
            <div className="svc-grid">
              {page.servicesSection.cards.map((card: any, i: number) => (
                <div key={i} className="svc-c">
                  {card.emoji && <div className="ic">{card.emoji}</div>}
                  <h4>{card.title}</h4>
                  {card.description && <p>{card.description}</p>}
                  {card.badge && <span className="badge">{card.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. SEO body + Sidebar ── */}
      <section className="seo-s">
        <div className="seo-in">
          <div className="seo-body">
            <RenderSeoBody body={page.seoBody} />
            <p style={{ marginTop: '32px' }}>
              <Link href="/city" style={{ color: '#213D79', fontWeight: 600 }}>← All locations we serve</Link>
            </p>
          </div>
          <div className="sidebar">
            {page.sidebar?.servicesList?.length > 0 && (
              <div className="sb-card">
                <h5>{page.sidebar.servicesTitle || `Services in ${page.title}`}</h5>
                <ul>
                  {page.sidebar.servicesList.map((s: string, i: number) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            {page.sidebar?.industriesList?.length > 0 && (
              <div className="sb-card">
                <h5>{page.sidebar.industriesTitle || `Industries We Serve in ${page.title}`}</h5>
                <ul>
                  {page.sidebar.industriesList.map((s: string, i: number) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="sb-cta">
              <h5>{page.sidebar?.ctaHeading || `Free Audit for ${page.title} Brands`}</h5>
              {page.sidebar?.ctaText && <p>{page.sidebar.ctaText}</p>}
              <Link href={ctaHref} className="btn btn-wh">Get My Free Audit →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      {page.faqs?.length > 0 && (
        <section className="faq-s">
          <div className="faq-in">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <div className="sl sl-bl">Frequently asked questions</div>
              <h2 className="sh" style={{ fontSize: 'clamp(26px,3vw,34px)' }}>
                Questions {page.title} businesses <em>ask us.</em>
              </h2>
            </div>
            <FaqAccordion faqs={page.faqs} />
          </div>
        </section>
      )}

      {/* ── 7. Nearby cities ── */}
      {otherCities?.length > 0 && (
        <section className="nearby">
          <div className="nearby-in">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <div className="sl sl-bl">Also serving</div>
              <h2 className="sh" style={{ fontSize: 'clamp(22px,2.5vw,30px)' }}>
                Digital marketing agencies <em>near {page.title}.</em>
              </h2>
            </div>
            <div className="nearby-grid">
              {otherCities.map((city: any, i: number) => (
                <Link key={i} href={`/city/${city.slug}`} className="nearby-c">
                  <div className="em">{city.emoji}</div>
                  <h4>{city.title}</h4>
                  {city.hubCardDescription && <p>{city.hubCardDescription}</p>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. Final CTA ── */}
      <div className="final">
        <div className="final-in">
          <h2 dangerouslySetInnerHTML={{
            __html: page.finalCta?.heading || `Ready to grow your<br><em>${page.title} business?</em>`
          }} />
          {page.finalCta?.text && <p>{page.finalCta.text}</p>}
          <Link href={ctaHref} className="btn btn-g" style={{ fontSize: '15px', padding: '14px 30px' }}>
            {page.finalCta?.buttonText || 'Get My Free Audit →'}
          </Link>
          {page.finalCta?.smallText && <small>{page.finalCta.smallText}</small>}
        </div>
      </div>

    </div>
  )
}
