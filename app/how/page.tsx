// app/how/page.tsx
// "What working with us looks like" — the full process page. New route, hardcoded copy.
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How This Works — AheadTech360',
  description: 'No mystery. Here is exactly what happens, from first message to week twelve.',
}

const STEPS = [
  'You reach out. You tell us about your store and your numbers. Five minutes.',
  'We look before we talk. If we do not think we can move your numbers, we tell you and part as friends.',
  'The first call is a diagnosis, not a pitch. You see what we found. You keep the findings either way.',
  'Engagement begins with a full audit. Store, ads, tracking, email. Biggest leaks first.',
  'We fix in order of impact. One change at a time, so results stay readable.',
  'You hear from us every week. What we did, what moved, what is next.',
  'Day 90: the review. What changed, proven at the source, and what the next stage looks like.',
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }

export default function HowPage() {
  return (
    <>
      {/* Hero (split): text left, illustration right, on light panel */}
      <section style={{ background: '#F2F5F8' }}>
        <div
          className="how-hero-grid"
          style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '40px', alignItems: 'center', minHeight: '460px' }}
        >
          <div className="how-hero-text" style={{ padding: '64px 0' }}>
            <span style={eyebrow}>The process</span>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '22ch' }}>
              No mystery. Here is exactly what happens.
            </h1>
            <p style={{ fontSize: '1.18rem', color: '#6E8098', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
              From first message to week twelve, this is the process, in order.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
            </div>
          </div>
          <div style={{ position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_milestone_path_of_four_navy_spheres_stepping_upward_a_2cd242bc-fa51-4d97-9050-7efe0a41c814.png"
              alt="The engagement process"
              width={640}
              height={640}
              style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain', borderRadius: '14px' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>Step by step</span>
          <h2 style={{ ...h2, marginBottom: '32px' }}>The whole engagement, in order.</h2>
          <div style={{ display: 'grid', gap: '14px' }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', padding: '20px 22px', boxShadow: '0 2px 12px rgba(8,14,28,.07)' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 600, fontSize: '1.05rem', color: '#1C8F5A', border: '1px solid #DFE5ED', borderRadius: '10px', padding: '6px 12px', background: '#F2F5F8', flex: 'none' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ color: '#6E8098', margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your side of it */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <div className="how-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '46px', alignItems: 'start' }}>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', textAlign: 'center', color: '#fff', padding: '24px', background: 'linear-gradient(135deg,#2a4d92 0%,#3a63ad 60%,#6f8fc9 100%)', order: 1 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '44px', height: '44px', opacity: 0.9 }}>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1-5 5-7 8-7s7 2 8 7" />
            </svg>
            <figcaption style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.74rem', color: '#eef4ff' }}>Working together</figcaption>
          </figure>
          <div style={{ order: 2 }}>
            <span style={eyebrow}>Your side of it</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>What we ask of you.</h2>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
              Access to your store data, honest numbers, and decisions made on evidence. We do our best work for
              owners who want the truth more than they want compliments.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/fgs" style={ctaGreen}>See the Program</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Step one takes five minutes. Start it now.</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .how-split { grid-template-columns: 1fr !important; }
          .how-split figure { order: 1 !important; }
          .how-hero-grid { grid-template-columns: 1fr !important; min-height: 0 !important; gap: 0 !important; }
          .how-hero-text { padding: 56px 0 28px !important; }
        }
      `}</style>
    </>
  )
}
