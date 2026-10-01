// app/case-ezt/page.tsx
// Case study: EzTmart — verified numbers, no arc. New route, hardcoded copy, no Sanity wiring.
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'EzTmart Case Study — AheadTech360',
  description: 'An established US wholesale and retail blank apparel store, relaunched from the ground up. Seventeen months since relaunch, verified against store data.',
}

const STATS = [
  { before: '0.58%', after: '1.96%', source: 'Conversion rate, +238%. Verified: Shopify' },
  { before: '21', after: '72', source: 'Monthly orders, +243%. Verified: Shopify' },
  { value: '39.36%', label: 'checkout', source: 'Checkout conversion vs 20-25% industry. Verified: Shopify' },
  { value: '$95.88', label: 'AOV', source: 'Genuine wholesale basket. Verified: Shopify' },
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }
const bodyText: React.CSSProperties = { fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }

export default function CaseEztPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Case study &middot; Wholesale &amp; Blank &middot; United States</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '26ch' }}>
            EzTmart: a 39.36% checkout conversion rate on a catalog we rebuilt.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            An established US wholesale and retail blank apparel store, relaunched from the ground up. Seventeen
            months since relaunch, verified against store data.
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
            <h2 style={{ ...h2, marginBottom: '12px' }}>Years of relationships. A storefront that could not show it.</h2>
            <p style={bodyText}>
              EzTmart was an established wholesaler, not a new business, specializing in blank print-ready apparel
              from brands like Gildan, Bella Canvas, Shaka Wear, and LyfeLyke. The inventory depth was always
              there, around 60 million units valued at over $424 million retail. What it needed was a storefront
              that did that scale justice and could actually convert on it.
            </p>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', boxShadow: '0 10px 34px rgba(22,41,79,.10)' }}>
            <Image
              src="/images/Iqrar_khoso_On_the_left_five_small_disconnected_navy_boxes_scattered_and_tan_4b5d4041-5cbc-41f2-a92e-25b9d0e8b001.png"
              alt="Wholesale catalog audit"
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
              src="/images/Iqrar_khoso_Two_glossy_3D_floating_glass_dashboard_panels_side_by_side_The_l_7d562f11-027f-403f-b7db-dc993bef790f.png"
              alt="Rebuilt wholesale storefront"
              fill
              style={{ objectFit: 'contain', background: '#fff' }}
            />
          </figure>
          <div style={{ order: 2 }}>
            <span style={eyebrow}>The fix</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Rebuild the catalog, then the conversion.</h2>
            <p style={bodyText}>
              We rebuilt the store from the ground up: 720 products reorganized and relisted, 251 collections
              restructured for both wholesale and retail navigation, and 7,574 existing customers carried forward
              cleanly. On the rebuilt store, conversion more than tripled and bounce rate was cut from 79% toward
              the high 50s, on a B2B storefront where catalog credibility and buyer trust matter more than flashy
              creative.
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
          <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>A relaunch done right does not disrupt what works.</h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch' }}>
            Nearly 4 in 10 customers who reach checkout now complete the purchase, and the 32% returning customer
            rate shows existing relationships carried over cleanly. Retention held and conversion improved on top
            of an existing customer base, not a fresh one.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Considering a relaunch or an agency switch? We will show you how to do it without losing what works.</h2>
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
