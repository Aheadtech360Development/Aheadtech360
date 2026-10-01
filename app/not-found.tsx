// app/not-found.tsx
// Global 404 — new file, matches the mockup's 404 design.
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — AheadTech360',
  robots: { index: false, follow: false },
}

const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGlass: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: 'rgba(255,255,255,.14)', color: '#fff', border: '2px solid rgba(255,255,255,.5)', textDecoration: 'none' }

export default function NotFound() {
  return (
    <>
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', textAlign: 'center', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#8ff0c0', fontWeight: 600, marginBottom: '14px' }}>404</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em' }}>
            This page does not convert. It does not even exist.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', margin: '14px auto 0', maxWidth: '56ch', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            The link is broken or the page moved. Here is where the good stuff lives.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
            <Link href="/" style={ctaGreen}>Home</Link>
            <Link href="/clients" style={ctaGlass}>See Our Clients</Link>
            <Link href="/fgs" style={ctaGlass}>The Program</Link>
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13 }}>
            Or skip the browsing and just tell us about your store.
          </h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
