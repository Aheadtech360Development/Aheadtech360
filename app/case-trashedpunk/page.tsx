// app/case-trashedpunk/page.tsx
// Case study: TrashedPunk — pending, no verified numbers yet. New route, hardcoded copy, no Sanity wiring.
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'TrashedPunk Case Study — AheadTech360',
  description: 'TrashedPunk is a accessories & streetwear client. We are finalizing the verified numbers for this story before we publish them.',
}

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }
const bodyText: React.CSSProperties = { fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }

export default function CaseTrashedPunkPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Case study &middot; Accessories &amp; Streetwear</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '22ch' }}>
            TrashedPunk: case study in progress.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            TrashedPunk is a accessories &amp; streetwear client. We are finalizing the verified numbers for this
            story before we publish them.
          </p>
        </div>
      </section>

      {/* Notice */}
      <section style={{ padding: '40px 32px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#fff8ec', border: '1px solid #f0dcb4', borderRadius: '12px', padding: '14px 18px', color: '#7a521a', fontSize: '.92rem', maxWidth: '76ch' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', color: '#c98a2b', flex: 'none', marginTop: '2px' }}>
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span>This case study is being finalized. We publish figures only once they are verified against store order data, so no numbers appear here yet.</span>
          </div>
        </div>
      </section>

      {/* The work */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div className="case-work-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '46px', alignItems: 'start' }}>
          <div>
            <span style={eyebrow}>The work</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>What we are doing with TrashedPunk.</h2>
            <p style={bodyText}>
              Engagement summary to be published with verified results. In line with our rule: where we do not yet
              have a verified number, we show the work and no number.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link href="/fgs" style={ctaGreen}>See the Program</Link>
              <Link href="/clients" style={ctaGhost}>All Clients</Link>
            </div>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', boxShadow: '0 10px 34px rgba(22,41,79,.10)' }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_stack_of_green_coins_pouring_into_the_top_of_a_funnel_d4569de4-a9da-4ec7-b240-ce96ed46eeb8.png"
              alt="TrashedPunk work in progress"
              fill
              style={{ objectFit: 'contain', background: '#fff' }}
            />
          </figure>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Want results like the ones we are building for TrashedPunk?</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .case-work-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
