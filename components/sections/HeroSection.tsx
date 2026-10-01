// components/sections/HeroSection.tsx
// Fashion & Apparel repositioning hero — light split layout: text left, image right.
import Image from 'next/image'
import Link from 'next/link'

interface HeroData {
  eyebrow?: string
  heading?: string // Use [em]text[/em] for green italic
  lead?: string
}

const DEFAULTS: Required<HeroData> = {
  eyebrow: 'Fashion and apparel only',
  heading: 'Growth Marketing for [em]$500K–$10M[/em] Fashion & Apparel Brands',
  lead: 'We turn the traffic you already pay for into more orders, higher order value, and customers who come back.',
}

function parseHeading(text: string) {
  const parts = text.split(/(\[em\].*?\[\/em\])/g)
  return parts.map((part, i) => {
    if (part.startsWith('[em]')) {
      const content = part.replace('[em]', '').replace('[/em]', '')
      return (
        <em key={i} style={{ color: '#1C8F5A', fontStyle: 'italic' }}>
          {content}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

const BADGES = [
  { src: '/images/reviews/shopify.png', alt: 'Shopify Partner' },
  { src: '/images/reviews/goodfirms.png', alt: 'GoodFirms' },
  { src: '/images/reviews/clutch.png', alt: 'Clutch' },
]

export default function HeroSection({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  lead = DEFAULTS.lead,
}: HeroData) {
  return (
    <section style={{ background: '#F2F5F8' }}>
      <div
        className="hero-grid"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.05fr',
          gap: '40px',
          alignItems: 'center',
          minHeight: '520px',
        }}
      >
        <div className="hero-text" style={{ padding: '70px 0' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '.72rem',
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: '#1C8F5A',
              fontWeight: 600,
              marginBottom: '14px',
            }}
          >
            {eyebrow}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: 'clamp(2rem,4.6vw,3.3rem)',
              fontWeight: 800,
              color: '#1C2A42',
              lineHeight: 1.13,
              letterSpacing: '-0.02em',
              maxWidth: '20ch',
            }}
          >
            {parseHeading(heading)}
          </h1>
          <p
            style={{
              fontSize: '1.18rem',
              color: '#6E8098',
              maxWidth: '56ch',
              marginTop: '14px',
              fontFamily: 'var(--font-jakarta)',
              lineHeight: 1.62,
            }}
          >
            {lead}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link
              href="/apply"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-bricolage)',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '.82rem 1.55rem',
                borderRadius: '12px',
                background: '#25B472',
                color: '#05261a',
                boxShadow: '0 6px 18px rgba(37,180,114,.26)',
                textDecoration: 'none',
              }}
            >
              Talk to Us
            </Link>
            <Link
              href="/clients"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-bricolage)',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '.82rem 1.55rem',
                borderRadius: '12px',
                background: '#fff',
                color: '#213D79',
                border: '1px solid #DFE5ED',
                boxShadow: '0 2px 12px rgba(8,14,28,.05)',
                textDecoration: 'none',
              }}
            >
              See Our Clients
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '.7rem',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#6E8098',
              }}
            >
              Verified by
            </span>
            {BADGES.map((b) => (
              <span
                key={b.alt}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  background: '#fff',
                  border: '1px solid #DFE5ED',
                  borderRadius: '9px',
                  padding: '8px 12px',
                  boxShadow: '0 2px 12px rgba(8,14,28,.05)',
                }}
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={100}
                  height={40}
                  style={{ objectFit: 'contain', height: '18px', width: 'auto' }}
                />
                <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.82rem', color: '#1C2A42' }}>
                  {b.alt}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="hero-art" style={{ position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            src="/images/Iqrar_khoso_One_glossy_green_hero_product_box_glowing_under_a_soft_spotlight_f40e760f-2edd-4a04-87ef-ef05df751edd.png"
            alt="AheadTech360 growth marketing for fashion and apparel brands"
            width={720}
            height={720}
            style={{ width: '100%', height: 'auto', maxHeight: '440px', objectFit: 'contain', borderRadius: '14px' }}
            priority
          />
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .hero-grid { grid-template-columns: 1fr !important; min-height: 0 !important; gap: 0 !important; }
          .hero-text { padding: 56px 0 28px !important; }
          .hero-art img { max-height: 320px !important; }
        }
      `}</style>
    </section>
  )
}
