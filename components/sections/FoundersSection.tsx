// components/sections/FoundersSection.tsx
// Founders split ("who you work with") + founder quote. Home page only, no existing counterpart.
import Link from 'next/link'

export default function FoundersSection() {
  return (
    <>
      {/* Team split */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div
          className="founders-split"
          style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '46px', alignItems: 'start' }}
        >
          <figure
            className="founders-fig"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              minHeight: '260px',
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'center',
              color: '#fff',
              padding: '24px',
              background: 'linear-gradient(135deg,#1c8f75 0%,#25B472 70%,#57c98f 100%)',
              boxShadow: '0 10px 34px rgba(22,41,79,.10)',
              order: 1,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '44px', height: '44px', opacity: 0.9 }}>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1-5 5-7 8-7s7 2 8 7" />
            </svg>
            <figcaption style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.74rem', letterSpacing: '.06em', maxWidth: '24ch', color: '#eef4ff' }}>
              Founders Iqrar and Ikrash
            </figcaption>
          </figure>

          <div style={{ order: 2 }}>
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
              Who you work with
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(1.55rem,3.2vw,2.3rem)',
                fontWeight: 800,
                color: '#1C2A42',
                lineHeight: 1.13,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}
            >
              A team of 10 to 15, built to get you the best results.
            </h2>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
              AheadTech360 was founded by Iqrar and Ikrash on one idea: apparel brands deserve a partner that treats
              their store like its own. That idea is now a full team of specialists across store, ads, creative, and
              retention, all pointed at the same outcome for every brand we take.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 700,
                  fontSize: '.95rem',
                  padding: '.7rem 1.3rem',
                  borderRadius: '10px',
                  border: '1px solid #DFE5ED',
                  color: '#213D79',
                  textDecoration: 'none',
                }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <blockquote style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 800,
              fontSize: 'clamp(1.3rem,2.6vw,1.9rem)',
              lineHeight: 1.25,
              color: '#1C2A42',
            }}
          >
            <span style={{ color: '#1C8F5A' }}>&ldquo;</span>
            We only win when your numbers move. That is the whole business.
            <span style={{ color: '#1C8F5A' }}>&rdquo;</span>
          </p>
          <cite
            style={{
              display: 'block',
              marginTop: '18px',
              fontFamily: 'var(--font-jetbrains)',
              fontWeight: 400,
              fontSize: '.8rem',
              letterSpacing: '.06em',
              textTransform: 'uppercase',
              color: '#1C8F5A',
              fontStyle: 'normal',
            }}
          >
            Iqrar and Ikrash, Founders
          </cite>
        </blockquote>
      </section>

      <style>{`
        @media(max-width:900px){
          .founders-split { grid-template-columns: 1fr !important; }
          .founders-fig { order: 1 !important; }
        }
      `}</style>
    </>
  )
}
