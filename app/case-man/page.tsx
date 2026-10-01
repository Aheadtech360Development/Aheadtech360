// app/case-man/page.tsx
// Case study: Maniyas — verified numbers, no arc. New route, hardcoded copy, no Sanity wiring.
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Maniyas Case Study — AheadTech360',
  description: 'An apparel brand with good margins but no average order value strategy. About ten months of work, verified against store data.',
}

const STATS = [
  { value: 'PKR 37M+', label: 'all-time', source: 'Revenue across the engagement. Verified: store data' },
  { value: '7.98x', label: 'ROAS', source: 'Sustained across the window. Verified: ad platform + store' },
  { value: 'Rs.2,999', label: 'anchor', source: 'Pack of 5 tees, the offer anchor' },
  { value: 'Rs.3,499', label: 'free ship', source: 'Threshold set just above the anchor' },
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }
const bodyText: React.CSSProperties = { fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }

export default function CaseManPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Case study &middot; Retail Fashion &amp; D2C &middot; Pakistan</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '24ch' }}>
            Maniyas: PKR 37M and 7.98x ROAS, without discounting.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            An apparel brand with good margins but no average order value strategy. About ten months of work,
            verified against store data.
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
                  {s.value} <b style={{ color: '#1C8F5A', fontWeight: 700 }}>{s.label}</b>
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
            <h2 style={{ ...h2, marginBottom: '12px' }}>Spend worked. The funnel underneath did not.</h2>
            <p style={bodyText}>
              Meta campaigns were running, but the funnel could not convert paid traffic profitably. The economics
              were actually good, 75% product margin with shipping paid by the customer, but average order value
              kept landing below the free shipping threshold, which suppressed cart size and perceived value.
            </p>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', boxShadow: '0 10px 34px rgba(22,41,79,.10)' }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_shopping_cart_stopped_at_a_lowered_navy_gate_barrier_d53afd43-728a-442e-8ea1-cd6d8638f391.png"
              alt="Offer and AOV audit"
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
              src="/images/Iqrar_khoso_A_glossy_3D_stack_of_green_coins_pouring_into_the_top_of_a_funnel_d4569de4-a9da-4ec7-b240-ce96ed46eeb8.png"
              alt="Anchor offer and full funnel"
              fill
              style={{ objectFit: 'contain', background: '#fff' }}
            />
          </figure>
          <div style={{ order: 2 }}>
            <span style={eyebrow}>The fix</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Rebuild the offer around one anchor.</h2>
            <p style={bodyText}>
              We anchored the offer around a Pack of 5 tees at Rs.2,999 and set the free shipping threshold at
              Rs.3,499, close enough that customers would add one more item to clear the line. We ran a full
              Clarity behavioral audit and simplified checkout, restructured Meta into a real full funnel from cold
              to cart abandoners, and tested value, fit, lifestyle, and social proof angles against each other.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link href="/fgs" style={ctaGreen}>See the Program</Link>
              <Link href="/clients" style={ctaGhost}>All Clients</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section style={{ padding: '80px 32px', background: '#162952' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#7fe7b4' }}>The takeaway</span>
          <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>The mechanism travels, not just the number.</h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch' }}>
            PKR 37M and 7.98x ROAS, without lowering price, without paid influencers, and without scaling spend
            recklessly. The transferable lesson is the anchor product and shipping threshold mechanism, not just
            the result.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>If spend works but conversion does not, that is usually an offer problem. Let us look.</h2>
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
