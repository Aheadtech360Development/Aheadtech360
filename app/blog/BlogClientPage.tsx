'use client'
// components/blog/BlogClientPage.tsx

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <section style={{ background: '#fff', textAlign: 'center', padding: '60px 32px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', placeItems: 'center' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>
            Blog
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42' }}>
            Stuff that <em style={{ color: '#25B472', fontStyle: 'italic' }}>actually helps.</em>
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', margin: '8px auto 0', fontFamily: 'var(--font-jakarta)' }}>
            Same playbook we use for clients. Free.
          </p>
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

      <style>{`
        @media(max-width:900px){
          .blog-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:600px){
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}