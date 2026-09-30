import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import FaqAccordion from '@/components/FaqAccordion'
import '../industry.css'

// ── Queries ──────────────────────────────────────────────────────────────

const INDUSTRY_QUERY = `*[_type == "industryPage" && slug.current == $slug][0]{
  title, emoji, heroTag, heroHeading, heroDescription, heroCtaText, heroCta2Text, nichePills,
  painCard { heading, items[] { boldPart, description } },
  whySection { label, heading, cards[] { emoji, title, description, note } },
  processSection { label, heading, steps[] { stepNumber, tag, title, description } },
  caseStudySection { label, heading, caseTitle, quote, attribution, stats[] { value, label } },
  seoBody,
  sidebar { servicesTitle, servicesList, ctaHeading, ctaText },
  faqs[] { question, answer },
  finalCta { heading, text, buttonText },
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

const OTHER_INDUSTRIES_QUERY = `*[_type == "industryPage" && slug.current != $slug] | order(order asc) [0...6]{
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
  const page = await client.fetch(INDUSTRY_QUERY, { slug }, { next: { revalidate: 60 } })
  const title = page?.seo?.metaTitle || (page?.title ? `${page.title} Marketing Agency — AheadTech360` : 'Industry Page — AheadTech360')
  const description = page?.seo?.metaDescription || page?.heroDescription || ''
  const ogImage = page?.seo?.ogImageUrl
  return {
    title,
    description,
    keywords: page?.seo?.keywords || '',
    alternates: { canonical: `https://www.aheadtech360.com/industries/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.aheadtech360.com/industries/${slug}`,
      siteName: 'AheadTech360',
      type: 'website',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const [page, otherIndustries] = await Promise.all([
    client.fetch<any>(INDUSTRY_QUERY, { slug }, { next: { revalidate: 60 } }),
    client.fetch<any[]>(OTHER_INDUSTRIES_QUERY, { slug }, { next: { revalidate: 60 } }),
  ])

  if (!page) notFound()

  const ctaHref = '/contact'

  return (
    <div className="industry-page">

      {/* ── 1. Hero ── */}
      <section className="ind-hero">
        <div className="ind-hero-in">
          <div>
            {page.heroTag && <div className="tag tag-green">{page.emoji} {page.heroTag}</div>}
            <h1>
              Digital Marketing Agency<br />
              for <em>{page.heroHeading || page.title}.</em>
            </h1>
            {page.heroDescription && <p className="ind-hero-desc">{page.heroDescription}</p>}
            <div className="ind-hero-ctas">
              <Link href={ctaHref} className="btn btn-g">{page.heroCtaText || 'Get My Free Audit →'}</Link>
              {page.heroCta2Text && <Link href="/results" className="btn btn-wh">{page.heroCta2Text}</Link>}
            </div>
            {page.nichePills?.length > 0 && (
              <div className="niche-pills">
                {page.nichePills.map((pill: string, i: number) => (
                  <span key={i} className="niche-pill">{pill}</span>
                ))}
              </div>
            )}
          </div>

          {/* Pain card */}
          {page.painCard && (
            <div className="pain-card">
              {page.painCard.heading && <h4>{page.painCard.heading}</h4>}
              {page.painCard.items?.map((item: any, i: number) => (
                <div key={i} className="pain-item">
                  <div className="dot">✓</div>
                  <p><b>{item.boldPart}</b>{item.description ? ` — ${item.description}` : ''}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 2. Why Different ── */}
      {page.whySection?.cards?.length > 0 && (
        <section className="why-s">
          <div className="why-in">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <div className="sl sl-bl">{page.whySection.label || 'Why this industry is different'}</div>
              <h2 className="sh" style={{ fontSize: 'clamp(26px,3vw,36px)' }}
                dangerouslySetInnerHTML={{ __html: (page.whySection.heading || '').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
            </div>
            <div className="why-grid">
              {page.whySection.cards.map((card: any, i: number) => (
                <div key={i} className="why-c">
                  {card.emoji && <div className="ic">{card.emoji}</div>}
                  <h4>{card.title}</h4>
                  {card.description && <p>{card.description}</p>}
                  {card.note && <span className="note">{card.note}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Process ── */}
      {page.processSection?.steps?.length > 0 && (
        <section className="proc-s">
          <div className="proc-in">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <div className="sl sl-bl">{page.processSection.label || 'How we work'}</div>
              <h2 className="sh" style={{ fontSize: 'clamp(24px,2.5vw,32px)' }}
                dangerouslySetInnerHTML={{ __html: (page.processSection.heading || '').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
            </div>
            <div className="proc-grid">
              {page.processSection.steps.map((step: any, i: number) => (
                <div key={i} className="proc-step">
                  <div className="proc-n">{step.stepNumber || i + 1}</div>
                  {step.tag && <div className="proc-tag">{step.tag}</div>}
                  <h4>{step.title}</h4>
                  {step.description && <p>{step.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Case Study / Proof ── */}
      {page.caseStudySection && (
        <section className="cs-s">
          <div className="cs-in">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <div className="sl sl-wh">{page.caseStudySection.label || 'Proof'}</div>
              {page.caseStudySection.heading && (
                <h2 className="sh wh" style={{ fontSize: 'clamp(24px,2.5vw,32px)' }}
                  dangerouslySetInnerHTML={{ __html: page.caseStudySection.heading.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
              )}
            </div>
            {(page.caseStudySection.caseTitle || page.caseStudySection.quote) && (
              <div className="cs-card">
                <div>
                  {page.caseStudySection.caseTitle && <h3>{page.caseStudySection.caseTitle}</h3>}
                  {page.caseStudySection.quote && <div className="quote">{page.caseStudySection.quote}</div>}
                  {page.caseStudySection.attribution && <div className="attrib">{page.caseStudySection.attribution}</div>}
                </div>
                {page.caseStudySection.stats?.length > 0 && (
                  <div className="cs-stats">
                    {page.caseStudySection.stats.map((stat: any, i: number) => (
                      <div key={i} className="cs-stat">
                        <div className="v">{stat.value}</div>
                        <div className="l">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 5. SEO body + Sidebar ── */}
      <section className="seo-s">
        <div className="seo-in">
          <div className="seo-body">
            <RenderSeoBody body={page.seoBody} />
            <p style={{ marginTop: '32px' }}>
              <Link href="/industries" style={{ color: '#213D79', fontWeight: 600 }}>← All industries we serve</Link>
            </p>
          </div>
          <div className="ind-sidebar">
            {page.sidebar?.servicesList?.length > 0 && (
              <div className="ind-sb-card">
                <h5>{page.sidebar.servicesTitle || 'Services'}</h5>
                <ul>
                  {page.sidebar.servicesList.map((s: string, i: number) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="ind-sb-cta">
              <h5>{page.sidebar?.ctaHeading || 'Free Industry Audit'}</h5>
              {page.sidebar?.ctaText && <p>{page.sidebar.ctaText}</p>}
              <Link href={ctaHref} className="btn btn-g" style={{ width: '100%', justifyContent: 'center' }}>
                Get My Free Audit →
              </Link>
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
              <h2 className="sh" style={{ fontSize: 'clamp(24px,3vw,32px)' }}>
                Questions {page.title} businesses <em>ask us.</em>
              </h2>
            </div>
            <FaqAccordion faqs={page.faqs} />
          </div>
        </section>
      )}

      {/* ── 7. Other industries ── */}
      {otherIndustries?.length > 0 && (
        <section className="nearby">
          <div className="nearby-in">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <div className="sl sl-bl">Other industries we serve</div>
              <h2 className="sh" style={{ fontSize: 'clamp(22px,2.5vw,30px)' }}>
                Not in {page.title}? <em>We work across many industries.</em>
              </h2>
            </div>
            <div className="nearby-grid">
              {otherIndustries.map((ind: any, i: number) => (
                <Link key={i} href={`/industries/${ind.slug}`} className="nearby-c">
                  <div className="em">{ind.emoji}</div>
                  <h4>{ind.title}</h4>
                  {ind.hubCardDescription && <p>{ind.hubCardDescription}</p>}
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
            __html: (page.finalCta?.heading || `Ready to grow your<br><em>${page.title} business?</em>`)
          }} />
          {page.finalCta?.text && <p>{page.finalCta.text}</p>}
          <Link href={ctaHref} className="btn btn-g" style={{ fontSize: '15px', padding: '14px 30px' }}>
            {page.finalCta?.buttonText || 'Get My Free Audit →'}
          </Link>
        </div>
      </div>

    </div>
  )
}
