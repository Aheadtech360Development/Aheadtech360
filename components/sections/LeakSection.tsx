// components/sections/LeakSection.tsx
// "The leak" — problem-mirror split. Home page only, no existing counterpart.
import Image from 'next/image'
import Link from 'next/link'

export default function LeakSection() {
  return (
    <section style={{ padding: '80px 32px', background: '#fff' }}>
      <div
        className="leak-split"
        style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '46px', alignItems: 'start' }}
      >
        <div>
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
            The leak
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
            You are getting traffic. You are not getting enough orders.
          </h2>
          <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
            Meta reports one number. Shopify reports another. If you have hired help before, you have heard big
            promises up front and silence after the invoice. That is not a traffic problem. It is a system problem.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link
              href="/how"
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
              See How This Works
            </Link>
          </div>
        </div>

        <figure
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            minHeight: '260px',
            aspectRatio: '4/3',
            background: '#fff',
            border: '1px solid #DFE5ED',
            boxShadow: '0 10px 34px rgba(22,41,79,.10)',
          }}
        >
          <Image
            src="/images/Iqrar_khoso_A_glossy_3D_funnel_with_a_heavy_stream_of_navy_visitor_spheres_po_2048b448-eb1c-449e-887c-5be0fb07f715.png"
            alt="Traffic in, orders out, with the leak between"
            fill
            style={{ objectFit: 'contain', background: '#fff' }}
          />
        </figure>
      </div>

      <style>{`
        @media(max-width:900px){ .leak-split { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
