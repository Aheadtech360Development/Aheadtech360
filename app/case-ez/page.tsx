// app/case-ez/page.tsx
// Case study: EZDTFMaker — verified numbers, four-phase arc. New route, hardcoded copy,
// no Sanity wiring (same approach as the other rebuilt pages).
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'EZDTFMaker Case Study — AheadTech360',
  description: 'A Chicago DTF transfer printing brand. Seventeen months. Every number is verified against Shopify and ad-platform data.',
}

const STATS = [
  { before: '$3,835', after: '$29,147', source: 'Monthly revenue, +660%. Verified: Shopify order data' },
  { before: '98', after: '516', source: 'Monthly orders, +427%. Verified: Shopify order data' },
  { before: '3.43%', after: '8.20%', source: 'Conversion rate, +4.77pp. Verified: Shopify' },
  { before: '2,568', after: '6,040', source: 'Sessions, +135%. Verified: analytics' },
]

const ARC = [
  { title: 'Conversion first, no new traffic', desc: 'Revenue doubled purely from fixing conversion, before touching ad spend.' },
  { title: 'Traffic scale', desc: 'Revenue nearly doubled again in one month, conversion holding near 8%, once accurate purchase data let the algorithm optimize toward real buyers.' },
  { title: 'Plateau and dip', desc: 'Conversion pressure returned while sessions held, a conversion problem not a reach problem. The keyword restructure earned its keep.' },
  { title: 'Second climb', desc: 'Revenue, sessions, and conversion climbed together for the first time, the compounding payoff of the earlier work.' },
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }
const bodyText: React.CSSProperties = { fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }

export default function CaseEZPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Case study &middot; Custom &amp; Print &middot; Chicago, US</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '24ch' }}>
            EZDTFMaker: we do not scale traffic into a broken store.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            A Chicago DTF transfer printing brand. Seventeen months. Every number is verified against Shopify and
            ad-platform data.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>The proof</span>
          <h2 style={{ ...h2, marginBottom: '32px' }}>The numbers, with the source.</h2>
          <div className="case-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
            {STATS.map((s) => (
              <div key={s.source} style={{ position: 'relative', background: '#fff', border: '1px solid #DFE5ED', borderLeft: '5px solid #25B472', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 34px rgba(22,41,79,.10)' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 600, fontSize: '1.55rem', color: '#1C2A42', lineHeight: 1.1 }}>
                  {s.before} <b style={{ color: '#1C8F5A', fontWeight: 700 }}>&rarr; {s.after}</b>
                </div>
                <div style={{ fontSize: '.7rem', fontFamily: 'var(--font-jetbrains)', color: '#6E8098', marginTop: '9px' }}>{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situation */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div className="case-situation-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '46px', alignItems: 'start' }}>
          <div>
            <span style={eyebrow}>The situation</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Traffic came in. The store could not convert it.</h2>
            <p style={bodyText}>
              Traffic was flowing but the store was not converting it, and the ad accounts could not tell what was
              working. Two problems were stacked. Tracking was broken: the gang sheet builder lived on a third party
              app, so the click ID was lost in the handoff and the algorithm optimized on incomplete data. And the
              store itself leaked, stuck near $3,835 a month at a 3.43% conversion rate.
            </p>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', boxShadow: '0 10px 34px rgba(22,41,79,.10)' }}>
            <Image
              src="/images/Iqrar_khoso_On_the_left_five_small_disconnected_navy_boxes_scattered_and_tan_4b5d4041-5cbc-41f2-a92e-25b9d0e8b001.png"
              alt="Session and tracking audit"
              fill
              style={{ objectFit: 'contain', background: '#fff' }}
            />
          </figure>
        </div>
      </section>

      {/* Fix */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <div className="case-fix-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '46px', alignItems: 'start' }}>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', boxShadow: '0 10px 34px rgba(22,41,79,.10)', order: 1 }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_grid_sheet_packed_with_small_emerald_and_navy_transfe_bbc22690-2e2a-4b47-90dc-396bcba27866.png"
              alt="Rebuilt gang sheet flow"
              fill
              style={{ objectFit: 'contain', background: '#fff' }}
            />
          </figure>
          <div style={{ order: 2 }}>
            <span style={eyebrow}>The fix</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Fix conversion first. Then scale.</h2>
            <p style={bodyText}>
              A Microsoft Clarity behavioral audit found exactly where DTF buyers were bailing. We rebuilt the gang
              sheet flow, then built a persistence layer so the click ID survived the third party handoff and added
              server side tracking with deduplication, moving match quality from low to great. We tightened
              thousands of scattergun keywords into a high intent set across Search, Shopping, and PMax, and
              anchored average order value with larger gang sheet pricing and free shipping thresholds.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link href="/fgs" style={ctaGreen}>See the Program</Link>
              <Link href="/clients" style={ctaGhost}>All Clients</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Arc */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>The arc</span>
          <h2 style={{ ...h2, marginBottom: '32px' }}>How it actually played out.</h2>
          <div style={{ display: 'grid', gap: '14px' }}>
            {ARC.map((s, i) => (
              <div key={s.title} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', padding: '20px 22px', boxShadow: '0 2px 12px rgba(8,14,28,.07)' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 600, fontSize: '1.05rem', color: '#1C8F5A', border: '1px solid #DFE5ED', borderRadius: '10px', padding: '6px 12px', background: '#F2F5F8', flex: 'none' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, color: '#1C2A42' }}>{s.title}</h3>
                  <p style={{ color: '#6E8098', marginTop: '2px' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section style={{ padding: '80px 32px', background: '#162952' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#7fe7b4' }}>The takeaway</span>
          <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>We do not scale traffic into a broken store.</h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch' }}>
            The first four months were entirely about fixing conversion, doubling revenue with zero new traffic.
            Only once the store could convert did the growth lever get pulled.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>We will tell you whether your store is ready to scale, before you spend more.</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .case-situation-split, .case-fix-split { grid-template-columns: 1fr !important; }
          .case-fix-split figure { order: 1 !important; }
          .case-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  )
}
