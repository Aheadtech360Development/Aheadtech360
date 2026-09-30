'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// DATA — add your projects here
// platform: 'Shopify' | 'WordPress' | 'Custom' | 'App'
// industry: 'Fashion' | 'Print/Apparel' | 'Education' | 'Finance' | 'B2B' | 'Local Biz'
// workType: 'Redesign' | 'New Build' | 'CRO'
// badge: 'UNDER NDA' | 'LIVE SITE' | null
// link: URL string (null = under NDA, shows "case study on request")
// ─────────────────────────────────────────────────────────────────────────────

interface Project {
  platform:  'Shopify' | 'WordPress' | 'Custom' | 'App'
  industry:  'Fashion' | 'Print/Apparel' | 'Education' | 'Finance' | 'B2B' | 'Local Biz'
  workType:  'Redesign' | 'New Build' | 'CRO'
  badge?:    'UNDER NDA' | 'LIVE SITE'
  image?:    string            // e.g. '/images/portfolio/maniyas.jpg'
  placeholder: string          // shown when no image
  category:  string            // e.g. "ECOMMERCE"
  location:  string            // e.g. "PAKISTAN"
  title:     string
  description: string
  stats:     { value: string; label: string }[]
  link?:     string            // if null/undefined → "Under NDA — case study on request"
}

const PROJECTS: Project[] = [
  // Row 1
  {
    platform: 'Shopify', industry: 'Print/Apparel', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/Ezdtf.png',
    placeholder: 'EZDTFMaker',
    category: 'PRINT / DTF', location: 'USA',
    title: 'EZDTFMaker',
    description: 'Shopify store for a US DTF printing business with custom gang sheet ordering, bulk pricing, and Meta ad campaigns.',
    stats: [{ value: 'DTF', label: 'NICHE' }, { value: 'Shopify', label: 'PLATFORM' }, { value: 'USA', label: 'MARKET' }],
    link: 'https://ezdtfmaker.com',
  },
  {
    platform: 'Custom', industry: 'B2B', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/AF-Apparels.png',
    placeholder: 'AF Apparels',
    category: 'WHOLESALE', location: 'USA',
    title: 'AF Apparels',
    description: 'Login-gated B2B pricing portal with bulk order grid, custom net terms checkout, and inventory sync.',
    stats: [{ value: 'B2B', label: 'PORTAL' }, { value: 'Net 30', label: 'TERMS' }, { value: 'USA', label: 'MARKET' }],
    link: 'https://af-apparel.vercel.app',
  },
  {
    platform: 'Shopify', industry: 'Fashion', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/EZTmart.png',
    placeholder: 'EZTmart',
    category: 'ECOMMERCE', location: 'PAKISTAN',
    title: 'EZTmart',
    description: 'Multi-category Shopify store with COD logistics, app stack setup, and Meta & Google performance campaigns.',
    stats: [{ value: 'Multi-cat', label: 'STORE' }, { value: 'COD', label: 'LOGISTICS' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://eztmart.com',
  },
  // Row 2
  {
    platform: 'Shopify', industry: 'Print/Apparel', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/TrashedPunk.png',
    placeholder: 'TrashedPunk',
    category: 'APPAREL', location: 'USA',
    title: 'TrashedPunk',
    description: 'Shopify apparel store with a bold brand identity, conversion-focused product pages, and Meta ad campaigns.',
    stats: [{ value: 'Shopify', label: 'PLATFORM' }, { value: 'Apparel', label: 'NICHE' }, { value: 'USA', label: 'MARKET' }],
    link: 'https://trashedpunk.com',
  },
  {
    platform: 'Shopify', industry: 'Fashion', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/freshfits.png',
    placeholder: 'Fresh Fits',
    category: 'D2C FASHION', location: 'PAKISTAN',
    title: 'Fresh Fits',
    description: 'Shopify store build with COD checkout flow, custom bundle upsells, and performance Meta ads setup.',
    stats: [{ value: 'Shopify', label: 'PLATFORM' }, { value: 'COD', label: 'CHECKOUT' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://freshfits.co',
  },
  {
    platform: 'Shopify', industry: 'Print/Apparel', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/EZ-print-pros.png',
    placeholder: 'EZ Print Pros',
    category: 'PRINT / DTF', location: 'USA',
    title: 'EZ Print Pros',
    description: 'Shopify build for a US DTF printing business with gang sheet ordering, bulk pricing tiers, and Meta ad campaigns.',
    stats: [{ value: 'DTF', label: 'NICHE' }, { value: 'Shopify', label: 'PLATFORM' }, { value: 'USA', label: 'MARKET' }],
    link: 'https://ezdtfmaker.com/pages/printing-collection-page?pb=0',
  },
  // Row 3
  {
    platform: 'WordPress', industry: 'B2B', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/Piplytics.png',
    placeholder: 'Piplytics',
    category: 'SAAS / ANALYTICS', location: 'USA',
    title: 'Piplytics',
    description: 'WordPress website for a data analytics platform with custom landing pages, integrations, and SEO setup.',
    stats: [{ value: 'WordPress', label: 'PLATFORM' }, { value: 'B2B', label: 'TYPE' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://piplyticscapital.com/',
  },
  {
    platform: 'Shopify', industry: 'Fashion', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/Maniyas.png',
    placeholder: 'Maniyas',
    category: 'D2C FASHION', location: 'PAKISTAN',
    title: 'Maniyas',
    description: 'Shopify store built for a fashion brand with a clean storefront, COD setup, and conversion-focused product pages.',
    stats: [{ value: 'Shopify', label: 'PLATFORM' }, { value: 'COD', label: 'CHECKOUT' }, { value: 'Live', label: 'STATUS' }],
  },
  {
    platform: 'WordPress', industry: 'Education', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/gradelao.png',
    placeholder: 'Gradelao',
    category: 'EDUCATION', location: 'PAKISTAN',
    title: 'Gradelao',
    description: 'WordPress education platform with course listings, enrollment forms, and SEO-optimised content pages.',
    stats: [{ value: 'WordPress', label: 'PLATFORM' }, { value: 'Education', label: 'NICHE' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://gradelao.com/',
  },
  // Row 4
  {
    platform: 'Shopify', industry: 'Local Biz', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/Themacpc.png',
    placeholder: 'The Mac P Store',
    category: 'TECH RETAIL', location: 'PAKISTAN',
    title: 'The Mac P Store',
    description: 'Shopify store for a tech retail business with product listings, service pages, and a clean storefront.',
    stats: [{ value: 'Shopify', label: 'PLATFORM' }, { value: 'Retail', label: 'TYPE' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://themacpstore.com/',
  },
  {
    platform: 'Custom', industry: 'B2B', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/tech4tune.png',
    placeholder: 'Tech4tune',
    category: 'TECH SERVICES', location: 'PAKISTAN',
    title: 'Tech4tune',
    description: 'Custom-built website for a tech services company with service showcases, lead capture, and a clean modern design.',
    stats: [{ value: 'Custom', label: 'PLATFORM' }, { value: 'Marketing', label: 'NICHE' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://tech4tune.com/',
  },
  {
    platform: 'Shopify', industry: 'Fashion', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/Thereal.png',
    placeholder: 'The Real Robe',
    category: 'D2C FASHION', location: 'PAKISTAN',
    title: 'The Real Robe',
    description: 'Shopify store for a fashion brand with a conversion-optimised design, COD checkout, and social media integration.',
    stats: [{ value: 'Shopify', label: 'PLATFORM' }, { value: 'Fashion', label: 'NICHE' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://therealrobe.com',
  },
  // Load More
  {
    platform: 'WordPress', industry: 'Print/Apparel', workType: 'New Build', badge: 'LIVE SITE',
    image: '/images/portfolio/Lofty.png',
    placeholder: 'Lofty',
    category: 'APPAREL', location: 'USA',
    title: 'Lofty',
    description: 'WooCommerce store for an apparel brand with product catalogue, custom checkout flow, and conversion-focused design.',
    stats: [{ value: 'WordPress', label: 'PLATFORM' }, { value: 'Ecommerce', label: 'TYPE' }, { value: 'Live', label: 'STATUS' }],
    link: 'https://weareloftycreations.com/',
  },
]

// ─────────────────────────────────────────────────────────────────────────────

const PLATFORM_FILTERS  = ['All', 'Shopify', 'WordPress', 'Custom', 'App'] as const
const INDUSTRY_FILTERS  = ['Fashion', 'Print/Apparel', 'Education', 'Finance', 'B2B', 'Local Biz'] as const
const WORKTYPE_FILTERS  = ['Redesign', 'New Build', 'CRO'] as const
const PAGE_SIZE = 6

function FilterBtn({ label, count, active, onClick }: { label: string; count?: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', border: 'none',
        fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-jetbrains)',
        background: active ? '#1C2A42' : '#fff',
        color:      active ? '#fff'    : '#3E5068',
        boxShadow: active ? 'none' : '0 0 0 1.5px #DFE5ED',
        transition: 'all 0.15s',
      }}
    >
      {label}
      {count !== undefined && (
        <span style={{ fontSize: '10px', fontWeight: 800, opacity: 0.7 }}>{count}</span>
      )}
    </button>
  )
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [hovered, setHovered] = useState(false)

  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? '#1C2A42' : '#DFE5ED'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        boxShadow: hovered ? '0 10px 32px rgba(8,14,28,.12)' : '0 1px 4px rgba(8,14,28,.04)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: p.link ? 'pointer' : 'default',
      }}
    >
      {/* Tags row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px 0' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, fontFamily: 'var(--font-jetbrains)', padding: '4px 10px', borderRadius: '20px', background: '#F2F5F8', color: '#3E5068', letterSpacing: '0.5px' }}>
            {p.platform.toUpperCase()}
          </span>
          <span style={{ fontSize: '10px', fontWeight: 700, fontFamily: 'var(--font-jetbrains)', padding: '4px 10px', borderRadius: '20px', background: '#080E1C', color: '#fff', letterSpacing: '0.5px' }}>
            {p.industry.toUpperCase()}
          </span>
        </div>
        {p.badge && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontSize: '10px', fontWeight: 700, fontFamily: 'var(--font-jetbrains)',
            padding: '4px 10px', borderRadius: '20px',
            background: '#080E1C', color: '#fff', letterSpacing: '0.5px',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25B472', flexShrink: 0 }} />
            {p.badge}
          </span>
        )}
      </div>

      {/* Image area */}
      <div style={{ height: '210px', background: 'linear-gradient(160deg,#EEF2F9,#DFE5ED)', overflow: 'hidden', position: 'relative', marginTop: '12px' }}>
        {p.image ? (
          <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={80} priority={index < 6} />
        ) : (
          <div style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#9BAABB', fontFamily: 'var(--font-jakarta)', fontStyle: 'italic' }}>[{p.placeholder}]</span>
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to top, rgba(210,218,228,0.85), transparent)' }} />
      </div>

      {/* Body */}
      <div style={{ padding: '16px 18px 0', flex: 1 }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#6E8098', fontFamily: 'var(--font-jetbrains)', marginBottom: '6px' }}>
          {p.category} · {p.location}
        </div>
        <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#080E1C', fontFamily: 'var(--font-bricolage)', lineHeight: 1.25, marginBottom: '8px' }}>
          {p.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.6, fontFamily: 'var(--font-jakarta)', marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {p.description}
        </p>
      </div>

      {/* Stats */}
      <div style={{ padding: '0 18px' }}>
        <div style={{ borderTop: '1px solid #F2F5F8', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          {p.stats.map((s, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#25B472', fontFamily: 'var(--font-bricolage)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '9px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)', marginTop: '3px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '0 18px 16px', borderTop: '1px solid #F2F5F8' }}>
        {p.link ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', fontSize: '13px', fontWeight: 700, color: '#1C2A42', fontFamily: 'var(--font-jakarta)' }}>
            Visit live site
            <span style={{ fontSize: '14px' }}>↗</span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', fontSize: '12.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', fontStyle: 'italic' }}>
            Under NDA — case study on request
            <span style={{ fontSize: '14px' }}>↗</span>
          </div>
        )}
      </div>
    </div>
  )

  if (p.link) {
    return (
      <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        {card}
      </a>
    )
  }
  return card
}

// ─────────────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [platform,  setPlatform]  = useState<string>('All')
  const [industry,  setIndustry]  = useState<string | null>(null)
  const [workType,  setWorkType]  = useState<string | null>(null)
  const [visible,   setVisible]   = useState(PAGE_SIZE)

  const filtered = PROJECTS.filter(p => {
    if (platform !== 'All' && p.platform !== platform) return false
    if (industry  && p.industry  !== industry)          return false
    if (workType  && p.workType  !== workType)           return false
    return true
  })

  const shown = filtered.slice(0, visible)

  // platform counts
  const platformCounts = PLATFORM_FILTERS.reduce<Record<string, number>>((acc, f) => {
    acc[f] = f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.platform === f).length
    return acc
  }, {})

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '64px 32px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>
            OUR PORTFOLIO
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(36px,5vw,54px)', color: '#1C2A42', letterSpacing: '-0.3px', marginBottom: '14px' }}>
            Websites, stores &amp; systems{' '}
            <em style={{ color: '#25B472', fontStyle: 'italic' }}>we&apos;ve built.</em>
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            75+ projects shipped. Shopify, WordPress, custom builds, apps, and full-stack systems. Click any project to visit the live site.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section style={{ background: '#fff', borderBottom: '1.5px solid #DFE5ED', padding: '20px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>

          {/* Platform row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', color: '#6E8098', fontFamily: 'var(--font-jetbrains)', minWidth: '70px' }}>PLATFORM:</span>
            {PLATFORM_FILTERS.map(f => (
              <FilterBtn
                key={f}
                label={f}
                count={platformCounts[f]}
                active={platform === f}
                onClick={() => { setPlatform(f); setVisible(PAGE_SIZE) }}
              />
            ))}
          </div>

          {/* Industry + Work Type row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', color: '#6E8098', fontFamily: 'var(--font-jetbrains)', minWidth: '70px' }}>INDUSTRY:</span>
            {INDUSTRY_FILTERS.map(f => (
              <FilterBtn
                key={f}
                label={f}
                active={industry === f}
                onClick={() => { setIndustry(industry === f ? null : f); setVisible(PAGE_SIZE) }}
              />
            ))}
            <span style={{ width: '1px', height: '20px', background: '#DFE5ED', margin: '0 8px' }} />
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', color: '#6E8098', fontFamily: 'var(--font-jetbrains)' }}>WORK TYPE:</span>
            {WORKTYPE_FILTERS.map(f => (
              <FilterBtn
                key={f}
                label={f}
                active={workType === f}
                onClick={() => { setWorkType(workType === f ? null : f); setVisible(PAGE_SIZE) }}
              />
            ))}
            {(platform !== 'All' || industry !== null || workType !== null) && (
              <button
                onClick={() => { setPlatform('All'); setIndustry(null); setWorkType(null); setVisible(PAGE_SIZE) }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', border: 'none', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-jetbrains)', background: '#FEF3F2', color: '#D92D20', transition: 'all 0.15s' }}
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section style={{ background: '#fff', padding: '40px 32px 80px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

          {/* Count */}
          <p style={{ fontSize: '13px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', marginBottom: '24px' }}>
            Showing <strong style={{ color: '#1C2A42' }}>{filtered.length} project{filtered.length !== 1 ? 's' : ''}</strong> · Sorted by recent
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#6E8098', fontFamily: 'var(--font-jakarta)', fontSize: '15px' }}>
              No projects match these filters.
            </div>
          ) : (
            <div className="port-grid">
              {shown.map((p, i) => <ProjectCard key={i} p={p} index={i} />)}
            </div>
          )}

          {/* Load More — always visible */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => setVisible(v => v + PAGE_SIZE)}
              style={{ padding: '13px 36px', borderRadius: '10px', border: '1.5px solid #DFE5ED', background: '#fff', fontSize: '14px', fontWeight: 700, color: '#1C2A42', fontFamily: 'var(--font-jakarta)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1C2A42' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#DFE5ED' }}
            >
              Load More Projects →
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(34px,4.5vw,50px)', color: '#fff', lineHeight: 1.1, marginBottom: '12px' }}>
            Want yours{' '}
            <em style={{ color: '#34D48A', fontStyle: 'italic' }}>built like this?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7 }}>
            Whether it&apos;s a Shopify rebuild, custom system, or a brand-new app — we&apos;ve shipped it before.
          </p>
          <Link
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '15px 36px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}
          >
            Start Your Project →
          </Link>
        </div>
      </section>

      <style>{`
        .port-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media(max-width: 1024px) { .port-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(max-width: 640px)  { .port-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
