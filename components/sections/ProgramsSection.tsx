// components/sections/ProgramsSection.tsx
// "Two ways in. One is open now." — Fashion Growth System / Fashion Scale System twin cards.
// Home page only, no existing counterpart. FGS's page exists (/fgs); FSS is still a
// placeholder until its waitlist page is built.
import Image from 'next/image'
import Link from 'next/link'

export default function ProgramsSection() {
  return (
    <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
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
          Programs
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(1.55rem,3.2vw,2.3rem)',
            fontWeight: 800,
            color: '#1C2A42',
            lineHeight: 1.13,
            letterSpacing: '-0.02em',
            marginBottom: '32px',
          }}
        >
          Two ways in. One is open now.
        </h2>

        <div className="programs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px' }}>
          {/* Fashion Growth System — open now */}
          <div style={{ background: '#fff', border: '1px solid #DFE5ED', borderTop: '5px solid #25B472', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(8,14,28,.07)' }}>
            <figure style={{ position: 'relative', aspectRatio: '16/8', background: '#fff' }}>
              <Image
                src="/images/Iqrar_khoso_A_glossy_3D_rounded_rocket_lifting_gently_off_a_white_launch_pad_ddcece5e-ccde-45de-8163-c3ff112ba6c1.png"
                alt="Fashion Growth System"
                fill
                style={{ objectFit: 'contain' }}
              />
            </figure>
            <div style={{ padding: '22px' }}>
              <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.64rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 600, borderRadius: '99px', padding: '4px 11px', background: '#25B472', color: '#05261a' }}>
                Open now
              </span>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', margin: '10px 0 6px' }}>Fashion Growth System</h3>
              <p style={{ color: '#6E8098', fontSize: '.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                For brands doing $500K to $1M. A 90 day engagement across store, ads, creative, and retention.
              </p>
              <Link
                href="/fgs"
                style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', background: '#213D79', color: '#fff', textDecoration: 'none' }}
              >
                See the Program
              </Link>
            </div>
          </div>

          {/* Fashion Scale System — launching soon */}
          <div style={{ background: '#fff', border: '1px solid #DFE5ED', borderTop: '5px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(8,14,28,.07)' }}>
            <figure style={{ position: 'relative', aspectRatio: '16/8', background: '#fff' }}>
              <Image
                src="/images/Iqrar_khoso_A_glossy_3D_scale_motif_in_the_center_a_bold_green_upward_arrow_204aa0e7-30c6-4af7-961c-9b56f119ee60.png"
                alt="Fashion Scale System"
                fill
                style={{ objectFit: 'contain' }}
              />
            </figure>
            <div style={{ padding: '22px' }}>
              <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.64rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 600, borderRadius: '99px', padding: '4px 11px', background: '#F2F5F8', color: '#6E8098' }}>
                Launching soon
              </span>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', margin: '10px 0 6px' }}>Fashion Scale System</h3>
              <p style={{ color: '#6E8098', fontSize: '.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Built for the next stage. Be the first to know when doors open.
              </p>
              <Link
                href="/fss"
                style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }}
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .programs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
