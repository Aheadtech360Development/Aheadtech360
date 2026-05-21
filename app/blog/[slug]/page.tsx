// app/blog/[slug]/page.tsx
export const revalidate = 60

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/client'
import FAQAccordion from '@/components/blog/FAQAccordion'
import CTABox from '@/components/blog/CTABox'

// ── Queries ────────────────────────────────────────────────────────────

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  title, category, publishedAt, readTime, excerpt,
  tags,
  "image": { "url": coverImage.asset->url, "alt": coverImage.alt },
  body[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      alt,
      caption
    }
  },
  shareLinks,
  faqs,
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{ blogSidebarFormUrl }`

const LATEST_QUERY = `*[_type == "blogPost" && slug.current != $slug] | order(publishedAt desc)[0...3]{
  "slug": slug.current,
  title, category, excerpt,
  "image": { "url": coverImage.asset->url, "alt": coverImage.alt }
}`

// ── Types ──────────────────────────────────────────────────────────────

interface LatestPost {
  slug: string
  title: string
  category: string
  excerpt: string
  image?: { url?: string; alt?: string }
}

const CAT_COLORS: Record<string, string> = {
  'Meta Ads': '#213D79', 'Google Ads': '#25B472', 'CRO': '#7C3AED',
  'Tracking': '#F79009', 'Email': '#F04438', 'Strategy': '#0891B2',
  'Digital Marketing': '#213D79', 'SEO': '#25B472', 'Web Design': '#7C3AED',
}

// ── Helpers ────────────────────────────────────────────────────────────

function formatDate(d: string) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

// ── Portable Text renderer ─────────────────────────────────────────────

function RenderBody({ body }: { body: any[] }) {
  if (!body?.length) return <p style={{ color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Content coming soon.</p>

  return (
    <>
      {body.map((block: any, i: number) => {
        if (block._type === 'image') {
          return (
            <div key={i} style={{ margin: '24px 0' }}>
              <Image
                src={block.url}
                alt={block.alt || ''}
                width={800}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  display: 'block',
                }}
                unoptimized
              />
            </div>
          )
        }

        if (block._type === 'ctaBox') {
          return (
            <CTABox
              key={i}
              heading={block.heading}
              subtext={block.subtext}
              buttonText={block.buttonText}
              buttonUrl={block.buttonUrl}
              theme={block.theme}
            />
          )
        }

        if (block._type === 'infoBox') {
          const renderInfoBodyBlock = (bodyBlock: any, idx: number) => {
            if (bodyBlock._type !== 'block') return null
            const renderChild = (child: any, ci: number) => {
              let content: React.ReactNode = child.text
              const marks = child.marks || []
              const colorMark = marks.find((m: string) =>
                bodyBlock.markDefs?.find((def: any) => def._key === m && def._type === 'textColor')
              )
              const colorDef = colorMark
                ? bodyBlock.markDefs?.find((def: any) => def._key === colorMark)
                : null
              if (colorDef) content = <span key={ci} style={{ color: colorDef.color }}>{content}</span>
              if (marks.includes('strong')) content = <strong key={ci} style={{ fontWeight: 800 }}>{content}</strong>
              if (marks.includes('em')) content = <em key={ci}>{content}</em>
              return <span key={ci}>{content}</span>
            }
            const children = bodyBlock.children?.map(renderChild)
            if (bodyBlock.listItem === 'bullet') {
              return <li key={idx} style={{ fontFamily: 'var(--font-jakarta)', fontSize: '18px', color: '#374151', lineHeight: 1.7, marginBottom: '4px' }}>{children}</li>
            }
            if (bodyBlock.listItem === 'number') {
              return <li key={idx} style={{ fontFamily: 'var(--font-jakarta)', fontSize: '18px', color: '#374151', lineHeight: 1.7, marginBottom: '4px' }}>{children}</li>
            }
            return <p key={idx} style={{ fontFamily: 'var(--font-jakarta)', fontSize: '18px', color: '#374151', lineHeight: 1.7, margin: '0 0 8px 0' }}>{children}</p>
          }

          const renderInfoContent = (item: any, j: number) => {
            if (item._type === 'paragraph') {
              const body = item.body || []
              const rendered: React.ReactNode[] = []
              let i2 = 0
              while (i2 < body.length) {
                const b = body[i2]
                if (b.listItem === 'bullet') {
                  const items = []
                  while (i2 < body.length && body[i2].listItem === 'bullet') {
                    items.push(renderInfoBodyBlock(body[i2], i2)); i2++
                  }
                  rendered.push(<ul key={`ul-${i2}`} style={{ margin: '0 0 8px 0', paddingLeft: '20px' }}>{items}</ul>)
                } else if (b.listItem === 'number') {
                  const items = []
                  while (i2 < body.length && body[i2].listItem === 'number') {
                    items.push(renderInfoBodyBlock(body[i2], i2)); i2++
                  }
                  rendered.push(<ol key={`ol-${i2}`} style={{ margin: '0 0 8px 0', paddingLeft: '20px' }}>{items}</ol>)
                } else {
                  rendered.push(renderInfoBodyBlock(b, i2)); i2++
                }
              }
              return <div key={j}>{rendered}</div>
            }
            if (item._type === 'bulletList') {
              return (
                <ul key={j} style={{ margin: '0 0 8px 0', paddingLeft: '20px' }}>
                  {(item.items || []).map((b: string, k: number) => (
                    <li key={k} style={{ fontFamily: 'var(--font-jakarta)', fontSize: '18px', color: '#374151', lineHeight: 1.7, marginBottom: '4px' }}>{b}</li>
                  ))}
                </ul>
              )
            }
            return null
          }

          return (
            <div key={i} style={{ background: '#FAF5FF', border: '1.5px solid #D8B4FE', borderRadius: '10px', padding: '20px 24px', margin: '24px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                {block.emoji && <span style={{ fontSize: '20px' }}>{block.emoji}</span>}
                <h4 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '20px', fontWeight: 800, color: '#4B0082', margin: 0 }}>
                  {block.heading}
                </h4>
              </div>
              {block.subtitle && (
                <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '18px', color: '#6B21A8', fontWeight: 600, margin: '0 0 12px 0' }}>
                  {block.subtitle}
                </p>
              )}
              {block.content?.length > 0 && (
                <div>{block.content.map(renderInfoContent)}</div>
              )}
            </div>
          )
        }

        if (block._type === 'insightBox') {
          return (
            <div key={i} style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '10px', padding: '20px 24px', margin: '24px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <strong style={{ fontFamily: 'var(--font-jakarta)', fontSize: '20px', fontWeight: 800, color: '#1E40AF' }}>
                  {block.label || ''}
                </strong>
              </div>
              <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '18px', color: '#1E3A5F', lineHeight: 1.7, margin: 0 }}>
                {block.text}
              </p>
            </div>
          )
        }

        if (block._type === 'table') {
          const headers: string[] = block.headers || []
          const rows: any[] = block.rows || []
          return (
            <div key={i} style={{ overflowX: 'auto', margin: '28px 0' }}>
              {block.caption && (
                <p style={{ fontSize: '12px', color: '#6E8098', marginBottom: '8px', fontFamily: 'var(--font-jakarta)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                  {block.caption}
                </p>
              )}
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '18px', fontFamily: 'var(--font-jakarta)' }}>
                <thead>
                  <tr>
                    {headers.map((h: string, j: number) => (
                      <th key={j} style={{
                        background: '#080E1C',
                        color: '#fff',
                        padding: '12px 16px',
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: '13px',
                        borderRight: j < headers.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none',
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row: any, j: number) => {
                    const cells = [row.col1, row.col2, row.col3, row.col4, row.col5].filter(c => c !== undefined && c !== null && c !== '')
                    const isEven = j % 2 === 0
                    return (
                      <tr key={j} style={{ background: isEven ? '#F2F5F8' : '#fff' }}>
                        {cells.map((cell: string, k: number) => (
                          <td key={k} style={{
                            padding: '11px 16px',
                            borderBottom: '1px solid #DFE5ED',
                            borderRight: k < cells.length - 1 ? '1px solid #DFE5ED' : 'none',
                            color: k === 0 && row.firstCellBold !== false ? '#213D79' : '#374151',
                            fontWeight: k === 0 && row.firstCellBold !== false ? 700 : 400,
                            verticalAlign: 'top',
                            lineHeight: 1.5,
                          }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        }

        if (block._type !== 'block') return null

        const html = block.children?.map((child: any) => {
          let t = (child.text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          if (child.marks?.includes('strong')) t = `<strong>${t}</strong>`
          if (child.marks?.includes('em')) t = `<em>${t}</em>`
          return t
        }).join('') || ''

        if (!html.trim()) return <div key={i} style={{ height: '8px' }} />

        const base: React.CSSProperties = { fontFamily: 'var(--font-jakarta)', lineHeight: 1.85 }
        if (block.style === 'h2') return <h2 key={i} style={{ ...base, fontFamily: 'var(--font-bricolage)', fontSize: '26px', fontWeight: 800, color: '#080E1C', margin: '40px 0 12px' }} dangerouslySetInnerHTML={{ __html: html }} />
        if (block.style === 'h3') return <h3 key={i} style={{ ...base, fontFamily: 'var(--font-bricolage)', fontSize: '20px', fontWeight: 700, color: '#080E1C', margin: '28px 0 8px' }} dangerouslySetInnerHTML={{ __html: html }} />
        if (block.style === 'blockquote') return (
          <blockquote key={i} style={{ ...base, borderLeft: '4px solid #25B472', paddingLeft: '20px', margin: '28px 0', fontStyle: 'italic', color: '#6E8098', fontSize: '16px' }}
            dangerouslySetInnerHTML={{ __html: html }} />
        )
        return <p key={i} style={{ ...base, fontSize: '18px', color: '#374151', marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: html }} />
      })}
    </>
  )
}

// ── Metadata ───────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await sanityFetch<any>(POST_QUERY, { slug })
  const title = post?.seo?.metaTitle || post?.title || 'Blog — AheadTech360'
  const description = post?.seo?.metaDescription || post?.excerpt || ''
  // Merge seo.keywords string + tags array into one keywords string
  const keywordParts = [
    post?.seo?.keywords || '',
    ...(post?.tags || []),
  ].filter(Boolean)
  const keywords = keywordParts.join(', ')
  const ogImage = post?.seo?.ogImageUrl || post?.image?.url
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `https://aheadtech360.com/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://aheadtech360.com/blog/${slug}`,
      siteName: 'AheadTech360',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post?.title || '' }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

// ── Main Page ──────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const [post, settings, latestPosts] = await Promise.all([
    sanityFetch<any>(POST_QUERY, { slug }),
    sanityFetch<any>(SETTINGS_QUERY),
    sanityFetch<LatestPost[]>(LATEST_QUERY, { slug }),
  ])

  if (!post) notFound()

  const catColor = CAT_COLORS[post.category] || '#213D79'
  const sidebarFormUrl = settings?.blogSidebarFormUrl || ''

  // Construct share URLs server-side from slug — no window.location needed
  const pageUrl = `https://aheadtech360.com/blog/${slug}`
  const shareUrl = encodeURIComponent(pageUrl)
  const shareTitle = encodeURIComponent(post.title || '')

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          SECTION 1: Main Article
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '60px 32px 80px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'start' }} className="blog-post-grid">

          {/* ── LEFT: Sticky GHL Form ── */}
          {/* <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '20px', padding: '28px', boxShadow: '0 12px 40px rgba(8,14,28,.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '18px', fontWeight: 800, color: '#080E1C', marginBottom: '6px', textAlign: 'center' }}>
                Get a Free Audit
              </h3>
              <p style={{ fontSize: '12.5px', color: '#6E8098', textAlign: 'center', marginBottom: '20px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.5 }}>
                We'll find what's broken. Free. No strings.
              </p>
              {sidebarFormUrl ? (
                <iframe src={sidebarFormUrl} style={{ width: '100%', minHeight: '500px', border: 'none' }} loading="lazy" title="Get Free Audit" />
              ) : (
                <div style={{ background: '#FFFAEB', border: '1.5px solid #FCD34D', borderRadius: '10px', padding: '16px', fontSize: '12px', color: '#7A5A00', fontFamily: 'var(--font-jakarta)', lineHeight: 1.6, textAlign: 'center' }}>
                  ⚙️ <strong>Form not connected yet.</strong><br />
                  Go to Sanity Studio → Site Settings → <em>Blog Sidebar GHL Form URL</em>
                </div>
              )}
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <Link href="/contact" style={{ fontSize: '13px', fontWeight: 700, color: '#25B472', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
                  Or talk to us directly →
                </Link>
              </div>
            </div>
          </div> */}

          {/* ── RIGHT: Article Content ── */}
          <div>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', textDecoration: 'none', marginBottom: '20px', fontWeight: 600 }}>
              ← Back to Blog
            </Link>

            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, color: '#080E1C', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.3px' }}>
              {post.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {post.category && (
                <span style={{ background: catColor, color: '#fff', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '6px', fontFamily: 'var(--font-jetbrains)', letterSpacing: '0.3px' }}>
                  {post.category}
                </span>
              )}
              {post.publishedAt && (
                <span style={{ fontSize: '13px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
                  {formatDate(post.publishedAt)}
                </span>
              )}
              {post.readTime && (
                <span style={{ fontSize: '13px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
                  {post.readTime}
                </span>
              )}
            </div>

            {post.image?.url && (
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', position: 'relative', marginBottom: '32px' }}>
                <Image src={post.image.url} alt={post.image.alt || post.title} fill style={{ objectFit: 'cover' }} unoptimized />
              </div>
            )}

            {/* Share buttons */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#080E1C', fontFamily: 'var(--font-bricolage)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Share this article
              </h4>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {post.shareLinks?.customUrl && (
                  <a href={post.shareLinks.customUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#EEF2F9', fontSize: '12px', fontWeight: 700, color: '#213D79', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
                    🔗 {post.shareLinks.customLabel || 'Link'}
                  </a>
                )}
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#EEF2F9', fontSize: '12px', fontWeight: 700, color: '#213D79', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  Facebook
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#EEF2F9', fontSize: '12px', fontWeight: 700, color: '#213D79', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#080E1C"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  X
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#EEF2F9', fontSize: '12px', fontWeight: 700, color: '#213D79', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1.5px solid #DFE5ED', marginBottom: '32px' }} />

            <div style={{ maxWidth: '950px' }}>
              <RenderBody body={post.body} />

              {/* Auto CTA box — always shown at the end of every post */}
              {/* <CTABox theme="dark" /> */}
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2: FAQ
      ════════════════════════════════════════════════════════ */}
      {post.faqs?.length > 0 && (
        <section style={{ background: '#F2F5F8', padding: '80px 32px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#080E1C', marginBottom: '36px', lineHeight: 1.1 }}>
              Common questions.
            </h2>
            <FAQAccordion faqs={post.faqs} />
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════
          SECTION 3: Latest Articles
      ════════════════════════════════════════════════════════ */}
      {latestPosts && latestPosts.length > 0 && (
        <section style={{ background: '#fff', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#080E1C', lineHeight: 1.1 }}>
                Read our latest Articles
              </h2>
              <Link href="/blog"
                style={{ display: 'inline-flex', padding: '10px 22px', borderRadius: '8px', fontSize: '18px', fontWeight: 700, background: '#213D79', color: '#fff', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
                View All →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="latest-grid">
              {latestPosts.map((p: LatestPost, i: number) => {
                const cc = CAT_COLORS[p.category] || '#213D79'
                return (
                  <Link key={i} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }} className="latest-card">
                    <div style={{ background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden' }}>
                      <div style={{ height: '250px', background: '#DFE5ED', position: 'relative', overflow: 'hidden' }}>
                        {p.image?.url
                          ? <Image src={p.image.url} alt={p.image.alt || p.title} fill style={{ objectFit: 'cover' }} unoptimized />
                          : <div style={{ display: 'grid', placeItems: 'center', height: '100%', fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>No image</div>
                        }
                      </div>
                      <div style={{ padding: '18px' }}>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: cc, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontFamily: 'var(--font-jetbrains)' }}>{p.category}</div>
                        <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#080E1C', marginBottom: '6px', lineHeight: 1.4, fontFamily: 'var(--font-bricolage)' }}>{p.title}</h4>
                        {p.excerpt && <p style={{ fontSize: '12px', color: '#6E8098', lineHeight: 1.5, fontFamily: 'var(--font-jakarta)' }}>{p.excerpt}</p>}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Sticky floating button */}
      <Link href="/contact"
        style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 999, display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '13px 22px', borderRadius: '99px', background: '#25B472', color: '#fff', fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-jakarta)', textDecoration: 'none', boxShadow: '0 8px 28px rgba(37,180,114,.4)' }}>
        Free Audit →
      </Link>

      <style>{`
        .latest-card > div { transition: all .25s; }
        .latest-card:hover > div { box-shadow: 0 12px 40px rgba(8,14,28,.1); transform: translateY(-2px); }
        @media(max-width:900px){
          .blog-post-grid { grid-template-columns: 1fr !important; }
          .blog-post-grid > div:first-child { position: static !important; }
          .latest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
