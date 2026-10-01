// app/about/page.tsx
// About — fashion/apparel repositioning. Hardcoded copy (no Sanity wiring), matching the
// mockup: hero, origin split, location transparency, five commitments, CTA band.
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — AheadTech360',
  description: 'AheadTech360 is run by Iqrar and Ikrash, and every brand we take is worked on by the people whose names are on this page.',
}

const COMMITMENTS = [
  'Verified numbers or no numbers.',
  'Diagnosis before pitch.',
  'Fix the biggest leak first.',
  'Report in money, not metrics.',
  'Never publish a claim we cannot back at the source.',
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', cursor: 'default' }

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Our story</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '20ch' }}>
            Two operators. One industry. Every account.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            AheadTech360 is run by Iqrar and Ikrash, and every brand we take is worked on by the people whose names
            are on this page.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div className="about-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '46px', alignItems: 'start' }}>
          <div>
            <span style={eyebrow}>How we got here</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Built inside real stores, not slide decks.</h2>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch', marginBottom: '14px' }}>
              Running apparel accounts taught us the pattern we fix everywhere: brands buying more traffic while
              their store loses the traffic they have. So we narrowed everything. One industry. One standard. One
              promise.
            </p>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
              We have helped a small number of businesses outside apparel too, including Stellar Career College,
              VIFHE, but apparel is home and it is where we stay.
            </p>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #DFE5ED', boxShadow: '0 2px 12px rgba(8,14,28,.07)', padding: '24px' }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_circular_badge_in_the_center_made_of_a_navy_and_green_626811c3-b996-4271-b4cb-ae9228888dc8.png"
              alt="Verified, accountable work"
              width={520}
              height={390}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
            <figcaption style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.74rem', color: '#6E8098' }}>Built on verified results</figcaption>
          </figure>
        </div>
      </section>

      {/* Location transparency */}
      <section style={{ padding: '80px 32px', background: '#162952' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#7fe7b4' }}>Where we are</span>
          <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>Where we work from, and why we say so.</h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch' }}>
            Our team works from Pakistan and serves brands in the US and beyond. We put that in writing because
            trust built on vagueness is not trust. Judge us on response time, communication, and verified results.
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>The rules we run on</span>
          <h2 style={{ ...h2, marginBottom: '20px' }}>Five commitments.</h2>
          <ul style={{ listStyle: 'none', marginTop: '20px', padding: 0 }}>
            {COMMITMENTS.map((c) => (
              <li key={c} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '12px', maxWidth: '62ch', color: '#6E8098' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: '#1C8F5A', fontWeight: 800, fontFamily: 'var(--font-jetbrains)' }}>✓</span>
                {c}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '24px' }}>
            <Link href="/how" style={ctaGhost}>See How This Works</Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>You have read our rules. Hold us to them.</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){ .about-split { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
