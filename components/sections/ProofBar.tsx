// components/sections/ProofBar.tsx
// "The proof" — verified single-stat block. Repurposed for the fashion/apparel repositioning
// (previously a 4-stat strip). Home page only.
import Link from 'next/link'

export default function ProofBar() {
  return (
    <section style={{ padding: '80px 32px', background: '#162952', color: '#cdd8ee' }}>
      <div
        className="proof-grid"
        style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '38px', alignItems: 'center' }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '.72rem',
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: '#7fe7b4',
              fontWeight: 600,
              marginBottom: '14px',
            }}
          >
            The proof
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: 'clamp(1.55rem,3.2vw,2.3rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.13,
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            We publish real numbers. And we tell you where they come from.
          </h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
            A Chicago DTF printing brand came to us stuck near $3,835 a month. Seventeen months later it runs at
            $29,147 a month, with conversion up from 3.43% to 8.20%. Same discipline on every account: fix
            conversion first, then scale.
          </p>
          <div style={{ marginTop: '24px' }}>
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
                background: '#25B472',
                color: '#05261a',
                textDecoration: 'none',
              }}
            >
              See Our Clients
            </Link>
          </div>
        </div>

        <div>
          <div style={{ position: 'relative', background: '#fff', border: '1px solid #DFE5ED', borderLeft: '5px solid #25B472', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 34px rgba(22,41,79,.10)' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 600, fontSize: '1.55rem', color: '#1C2A42', lineHeight: 1.1 }}>
              $3,835 <b style={{ color: '#1C8F5A', fontWeight: 700 }}>&rarr; $29,147</b>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: 'var(--font-jetbrains)', fontSize: '.7rem', color: '#6E8098', marginTop: '9px' }}>
              <span style={{ display: 'grid', placeItems: 'center', width: '18px', height: '18px', background: '#25B472', color: '#fff', borderRadius: '50%', flex: 'none' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}>
                  <path d="M5 12l4 4L19 6" />
                </svg>
              </span>
              Monthly revenue, +660%. Verified: Shopify order data
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .proof-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
