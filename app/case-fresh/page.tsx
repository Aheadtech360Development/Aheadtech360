// app/case-fresh/page.tsx
// Case study: FreshFits — verified numbers, no arc. New route, hardcoded copy, no Sanity wiring.
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'FreshFits Case Study — AheadTech360',
  description: 'A premium multi-pack basics brand on Shopify, from no recorded sales to roughly PKR 2M in under 90 days, on one hero product.',
}

const STATS = [
  { before: 'PKR 0', after: '1.98M', source: 'Revenue in under 90 days. Verified: Shopify order data' },
  { value: '714', label: 'orders', source: 'AOV PKR 3,347, 694 customers. Verified: Shopify' },
  { value: '65%', label: 'one SKU', source: 'Pack of 5 drove 65% of revenue. Verified: Shopify' },
  { value: '2.82%', label: 'CVR', source: 'Solid for a young DTC brand. Verified: analytics' },
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }
const bodyText: React.CSSProperties = { fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }

export default function CaseFreshPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Case study &middot; Retail Fashion &amp; D2C &middot; Pakistan</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '24ch' }}>
            FreshFits: zero to PKR 2 million in 90 days.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            A premium multi-pack basics brand on Shopify, from no recorded sales to roughly PKR 2M in under 90 days,
            on one hero product.
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
                  {'before' in s ? (
                    <>{s.before} <b style={{ color: '#1C8F5A', fontWeight: 700 }}>&rarr; {s.after}</b></>
                  ) : (
                    <>{s.value} <b style={{ color: '#1C8F5A', fontWeight: 700 }}>{s.label}</b></>
                  )}
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
            <h2 style={{ ...h2, marginBottom: '12px' }}>A simple offer, and a soft launch.</h2>
            <p style={bodyText}>
              FreshFits launched with a clear proposition, premium plain tees in multi-packs of 2, 3, 5, 7, and 10,
              aimed at value conscious buyers who want quality basics in bulk. Before May 2026 the store had no
              recorded sales. May was the soft launch.
            </p>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', boxShadow: '0 10px 34px rgba(22,41,79,.10)' }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_funnel_shown_front-on_At_the_wide_top_many_small_na_555ed1b0-024c-440d-8c2e-480cc71601f5.png"
              alt="Launch and offer setup"
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
              src="/images/Iqrar_khoso_A_glossy_3D_floating_translucent_glass_ads_dashboard_with_a_risin_15d64cec-7a61-40cc-9661-b3afb4e911d6.png"
              alt="Hero product concentration"
              fill
              style={{ objectFit: 'contain', background: '#fff' }}
            />
          </figure>
          <div style={{ order: 2 }}>
            <span style={eyebrow}>The fix</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Find the hero, then pour into it.</h2>
            <p style={bodyText}>
              Month one was a soft start. Month two broke out, revenue jumping 566% month over month on a 520%
              increase in orders. The Pack of 5 emerged as the clear anchor at 65% of revenue and 60% of orders,
              which told us exactly where to concentrate ad spend and homepage real estate. Average order value
              held above PKR 3,300 on almost no discounting, proof that multi-pack bundling lifts AOV without
              cutting price.
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
          <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>Acquisition proven. Retention is the next lever.</h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch' }}>
            Zero to roughly PKR 2 million in 90 days, powered by one hero product, before a single retention flow
            was even built. Strong acquisition with near zero repeat is not a red flag, it is a growth lever
            waiting, compounding on an engine that already works.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>If a bulk or multi-pack offer is untested for you, this is proof the format works.</h2>
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
