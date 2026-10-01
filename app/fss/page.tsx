// app/fss/page.tsx
// Fashion Scale System — coming-soon waitlist page. New route. Waitlist form is a static
// capture UI for now (no backend wired), matching the mockup's own prototype form.
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Fashion Scale System — AheadTech360',
  description: 'Built for brands ready for their next stage. Be the first to know when doors open.',
}

const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }

export default function FSSPage() {
  return (
    <>
      <section style={{ background: '#F2F5F8' }}>
        <div
          className="fss-hero-grid"
          style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '40px', alignItems: 'center', minHeight: '420px' }}
        >
          <div className="fss-hero-text" style={{ padding: '64px 0' }}>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.64rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 600, borderRadius: '99px', padding: '4px 11px', background: '#fff', border: '1px solid #DFE5ED', color: '#6E8098' }}>
              Launching soon
            </span>
            <h1 style={{ marginTop: '16px', fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }}>
              The Fashion Scale System
            </h1>
            <p style={{ fontSize: '1.18rem', color: '#6E8098', margin: '14px 0 0', maxWidth: '56ch', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
              Built for brands ready for their next stage. Be the first to know when doors open.
            </p>
            <div style={{ display: 'flex', gap: '10px', maxWidth: '480px', margin: '24px 0 0', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="you@brand.com"
                aria-label="Email"
                style={{ flex: '1 1 220px', padding: '.7rem .85rem', borderRadius: '9px', border: '1px solid #DFE5ED', background: '#fff', color: '#1C2A42' }}
              />
              <button type="button" style={{ ...ctaGreen, border: 'none', cursor: 'pointer' }}>Join the Waitlist</button>
            </div>
          </div>
          <div style={{ position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_scale_motif_in_the_center_a_bold_green_upward_arrow_204aa0e7-30c6-4af7-961c-9b56f119ee60.png"
              alt="Fashion Scale System"
              width={640}
              height={640}
              style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'contain', borderRadius: '14px' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13 }}>
            Not at scale stage yet? The Fashion Growth System is open now.
          </h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/fgs" style={ctaGreen}>See the Fashion Growth System</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .fss-hero-grid { grid-template-columns: 1fr !important; min-height: 0 !important; gap: 0 !important; }
          .fss-hero-text { padding: 56px 0 28px !important; }
        }
      `}</style>
    </>
  )
}
