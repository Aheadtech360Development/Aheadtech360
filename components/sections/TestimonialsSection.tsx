'use client'
// components/sections/TestimonialsSection.tsx
// Features:
// 1. Quote truncated to 3 lines — "See more" to expand
// 2. Platform logo above stars — links to original review source
// Platform logos: public/platforms/ folder mein rakhein

import { useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  quote: string
  boldPart?: string
  clientName: string
  clientRole: string
  resultTag: string
  avatarInitial: string
  // New fields:
  platformLogo?: string  // filename — e.g. "fiverr.png" — public/platforms/ mein
  platformLink?: string  // URL where the review lives
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote: "These guys are really good at their work! They handled our website development smoothly and even provided valuable consultations to improve our original idea. I'm very satisfied with their service, and all my future websites will definitely be developed by them",
    boldPart: "I'm very satisfied with their service",
    clientName: 'Maniyas',
    clientRole: 'Owner, CEO & Founder',
    resultTag: '📈 0.4x → 7x ROAS',
    avatarInitial: 'R',
    platformLogo: 'Shopify-agency-official-shopify-partner.png',
    platformLink: 'https://www.shopify.com/partners/directory/partner/aheadtech360',
  },
  {
    quote: "Ikrash built TrashedPunk.com from a napkin doodle into a live store that doesn't glitch when it matters. Flux theme, Printful hooks, custom camo uploads-check. SEO bones so Google sees us, CRO heatmaps so customers actually buy, plus every tweak, audit, and 3 a.m. emergency fix without whining. He's got the whole stack: store setup, theme tweaks, SEO, CRO, performance, integrations, troubleshooting-you name it, he shipped it. Fast, no fluff, 100% ownership. If your site needs to crawl out of the code and wear web traffic, this guy's the dev. 10/10-hire him yesterday.",
    boldPart: '10/10-hire him yesterday.',
    clientName: 'Donnie Todd',
    clientRole: 'Owner',
    resultTag: '📈 40 new clients / 90 days',
    avatarInitial: 'M',
    platformLogo: 'Upwork-logo.svg.webp',
    platformLink: 'https://www.upwork.com/freelancers/~01816b7ad92834fee9',
  },
  {
    quote: 'I had an excellent experience working with Aheadtech360. Their team is professional, knowledgeable, and truly dedicated to providing top-quality service. Communication was clear and consistent throughout, and they made the process easy to understand from start to finish. I especially appreciated their attention to detail and their commitment to making sure everything was done the right way. Highly recommend Aheadtech360 to anyone looking for reliable and innovative tech solutions.',
    boldPart: 'Highly recommend Aheadtech360 to anyone',
    clientName: 'The MACP Store',
    clientRole: 'Ecommerce brand',
    resultTag: '📈 1 → 3 locations',
    avatarInitial: 'S',
    platformLogo: 'Shopify-agency-official-shopify-partner.png',
    platformLink: 'https://www.shopify.com/partners/directory/partner/aheadtech360',
  },
]

function TestimonialCard({ t }: { t: Testimonial }) {
  const [expanded, setExpanded] = useState(false)

  const renderQuote = (text: string) => {
    if (!t.boldPart || !text.includes(t.boldPart)) return <span>"{text}"</span>
    const [before, after] = text.split(t.boldPart)
    return (
      <span>
        "{before}
        <strong style={{ color: '#fff', fontWeight: 700 }}>{t.boldPart}</strong>
        {after}"
      </span>
    )
  }

  return (
    <div style={{ background: '#0F1729', border: '1px solid rgba(255,255,255,.05)', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column' }}>

      {/* Platform logo — links to review source */}
      <div style={{ marginBottom: '12px' }}>
        {t.platformLogo && t.platformLink ? (
          <a href={t.platformLink} target="_blank" rel="noopener noreferrer" title="View original review">
            <Image
              src={`/images/${t.platformLogo}`}
              alt="Review platform"
              width={80}
              height={40}
              style={{ objectFit: 'contain', height: '40px', width: 'auto', opacity: 0.8, transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
            />
          </a>
        ) : (
          // Fallback: empty space so cards stay aligned
          <div style={{ height: '22px' }} />
        )}
      </div>

      {/* Stars */}
      <div style={{ color: '#FBBF24', fontSize: '14px', letterSpacing: '2px', marginBottom: '14px' }}>★★★★★</div>

      {/* Quote — 3 line clamp, expand on click */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: '14.5px',
            color: '#A4B3C4',
            lineHeight: 1.7,
            marginBottom: '6px',
            fontFamily: 'var(--font-jakarta)',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: expanded ? 'unset' : 3,
            overflow: expanded ? 'visible' : 'hidden',
          }}
        >
          {renderQuote(t.quote)}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 700, color: '#34D48A', fontFamily: 'var(--font-jakarta)', padding: '0', marginBottom: '18px' }}
        >
          {expanded ? 'See less ↑' : 'See more ↓'}
        </button>
      </div>

      {/* Client info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#213D79', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: '14px', fontFamily: 'var(--font-bricolage)', flexShrink: 0 }}>
          {t.avatarInitial}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-jakarta)' }}>{t.clientName}</div>
          <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{t.clientRole}</div>
        </div>
      </div>

      {/* Result tag */}
      <div style={{ display: 'inline-block', background: 'rgba(37,180,114,.12)', border: '1px solid rgba(37,180,114,.2)', borderRadius: '6px', padding: '5px 10px', marginTop: '12px', fontSize: '12px', color: '#34D48A', fontWeight: 700, fontFamily: 'var(--font-jakarta)' }}>
        {t.resultTag}
      </div>
    </div>
  )
}

export default function TestimonialsSection({ testimonials = DEFAULT_TESTIMONIALS }: { testimonials?: Testimonial[] }) {
  return (
    <section style={{ background: '#080E1C' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="test-container">
        <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#34D48A' }}>What clients say</div>
        <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#fff', marginBottom: '40px' }}>Don't take our word for it.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="test-grid">
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .test-container { padding: 52px 16px !important; }
          .test-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
