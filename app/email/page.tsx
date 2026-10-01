// app/email/page.tsx
// Email & SMS Retention service page. New route, no Sanity wiring (hardcoded copy matching
// the mockup's reusable service-page template).
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Email & SMS Retention — AheadTech360',
  description: 'The cheapest customer you will ever acquire is the one you already have.',
}

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '2px solid rgba(255,255,255,.5)', color: '#fff', background: 'rgba(255,255,255,.14)', textDecoration: 'none' }

export default function EmailPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Email &amp; SMS Retention</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '22ch' }}>
            Emails that keep customers coming back and grow lifetime value.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            The cheapest customer you will ever acquire is the one you already have.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/how" style={ctaGhost}>See How This Works</Link>
          </div>
        </div>
      </section>

      {/* The leak */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>The leak</span>
          <h2 style={{ ...h2, marginBottom: '12px' }}>If your list only hears from you during sales, you have a discount channel, not a retention channel.</h2>
          <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch' }}>
            First orders are expensive. Profit lives in the second and third order, the reorder of blanks and
            transfers, the next drop.
          </p>
        </div>
      </section>

      {/* The fix */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <div className="svc-fix-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '46px', alignItems: 'start' }}>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', order: 1 }}>
            <Image src="/images/Iqrar_khoso_A_glossy_3D_branching_flow_of_rounded_envelope_message_nodes_lead_459a6368-d832-4622-91b1-73a54d0fa131 (1).png" alt="Email and SMS flows" fill style={{ objectFit: 'contain' }} />
          </figure>
          <div style={{ order: 2 }}>
            <span style={eyebrow}>The fix</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>What a working retention system sends.</h2>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
              A welcome that sells your brand before the first discount. Follow ups timed to how your product is
              used and reordered. Cart and browse recovery that reads like help.
            </p>
          </div>
        </div>
      </section>

      {/* The system */}
      <section style={{ padding: '80px 32px', background: '#162952' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#7fe7b4' }}>The system</span>
          <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>Retention makes your ads affordable.</h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch' }}>
            When customers come back, you can pay more to acquire them and still win. Retention is what makes paid
            growth make sense.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/fgs" style={ctaGreen}>See the Program</Link>
          </div>
        </div>
      </section>

      {/* Proof pointer */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <p style={{ color: '#6E8098', maxWidth: '70ch', marginBottom: '20px' }}>
            Client retention work is on our clients page.
          </p>
          <Link href="/clients" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }}>See Our Clients</Link>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Ask us what your list is worth. The answer usually surprises owners.</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .svc-fix-split { grid-template-columns: 1fr !important; }
          .svc-fix-split figure { order: 1 !important; }
        }
      `}</style>
    </>
  )
}
