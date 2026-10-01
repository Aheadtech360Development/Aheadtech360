'use client'
// components/blog/BlogClientPage.tsx

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }

const FIXED_CATEGORIES = [
  'View All',
  'SEO',
  'Paid Ads',
  'Google Ads',
  'Meta Ads',
  'Development',
  'Email Marketing',
  'Social Media',
]

const CAT_COLORS: Record<string, string> = {
  'SEO': '#213D79',
  'Paid Ads': '#25B472',
  'Google Ads': '#0891B2',
  'Development': '#7C3AED',
  'Email Marketing': '#F04438',
  'Social Media': '#F79009',
  'SEO & Organic Growth': '#213D79',
  'Social Media Marketing': '#F79009',
  'Meta Ads': '#213D79',
  'CRO': '#7C3AED',
  'Tracking': '#F79009',
  'Strategy': '#0891B2',
  'Digital Marketing': '#213D79',
}

function matchesFilter(postCategory: string, filter: string): boolean {
  if (filter === 'View All') return true
  const p = (postCategory || '').toLowerCase()
  const f = filter.toLowerCase()
  return p.includes(f) || f.includes(p)
}

export default function BlogClientPage({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = useState('View All')

  const filtered = posts.filter(p => matchesFilter(p.category, activeCategory))

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', padding: '88px 32px 60px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#8ff0c0' }}>
            Field notes
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#fff' }}>
            What we learn running apparel stores, written down.
          </h1>
          <p style={{ fontSize: '15px', color: '#e6edf9', margin: '8px auto 0', fontFamily: 'var(--font-jakarta)' }}>
            No recycled tips. Field notes from real accounts, published when we have something worth saying.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* ── Category Filter Bar ── */}
      <section style={{ background: '#fff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', placeItems: 'center' }}>
          <div style={{
            display: 'flex',
            gap: '6px',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '6px',
            background: '#F2F5F8',
            borderRadius: '14px',
            width: 'fit-content',
          }}>
            {FIXED_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: isActive ? 800 : 600,
                    fontFamily: 'var(--font-jakarta)',
                    background: isActive ? '#213D79' : 'transparent',
                    color: isActive ? '#fff' : '#6E8098',
                    transition: 'all .15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          <p style={{ fontSize: '12px', color: '#A4B3C4', marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section style={{ background: '#fff', padding: '20px 32px 80px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', placeItems: 'center' }}>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 32px' }}></div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="blog-grid">
              {filtered.map((post: any, i: number) => {
                const catColor = CAT_COLORS[post.category] || '#213D79'
                return (
                  <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article
                      style={{ background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', transition: 'all .25s', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 12px 40px rgba(8,14,28,.1)'; el.style.transform = 'translateY(-3px)' }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
                    >
                      <div style={{ height: '250px', background: '#DFE5ED', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                        {post.image ? (
                          <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} unoptimized />
                        ) : (
                          <div style={{ display: 'grid', placeItems: 'center', height: '100%', fontSize: '10px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
                            Blog image
                          </div>
                        )}
                      </div>
                      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: catColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'var(--font-jetbrains)' }}>
                          {post.category}
                        </div>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#080E1C', marginBottom: '8px', lineHeight: 1.4, fontFamily: 'var(--font-bricolage)', flex: 1 }}>
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.55, fontFamily: 'var(--font-jakarta)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {post.excerpt}
                          </p>
                        )}
                        <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: 700, color: '#213D79', fontFamily: 'var(--font-jakarta)' }}>
                          Read article →
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Lead-magnet band ── */}
      <section style={{ background: '#F2F5F8', padding: '64px 32px' }}>
        <div
          className="opt-card"
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            background: '#fff',
            border: '1px solid #DFE5ED',
            borderRadius: '16px',
            boxShadow: '0 2px 12px rgba(8,14,28,.07)',
            padding: '36px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 320px' }}>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '10px' }}>
              Free checklist
            </span>
            <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '1.4rem', fontWeight: 800, color: '#1C2A42', marginBottom: '6px' }}>
              15 Conversion Killers
            </h3>
            <p style={{ fontSize: '.95rem', color: '#6E8098', fontFamily: 'var(--font-jakarta)', lineHeight: 1.6, margin: 0 }}>
              The mistakes that quietly cost apparel stores orders every day. Opt in and get the PDF.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', flex: '0 1 380px' }}>
            <input
              type="email"
              placeholder="you@brand.com"
              aria-label="Email"
              disabled
              title="Coming soon"
              style={{ flex: '1 1 200px', minWidth: '180px', padding: '.78rem .9rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#1C2A42', fontFamily: 'var(--font-jakarta)' }}
            />
            <span title="Coming soon" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', cursor: 'default' }}>
              Get the PDF
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13 }}>
            Reading is free. So is the first look at your store.
          </h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .blog-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:600px){
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width:640px){
          .opt-card { flex-direction: column !important; align-items: flex-start !important; padding: 28px 24px !important; }
        }
      `}</style>
    </>
  )
}