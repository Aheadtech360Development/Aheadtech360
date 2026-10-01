// app/fgs/page.tsx
// Fashion Growth System — the open program page. New route, no Sanity wiring (hardcoded
// copy matching the mockup, same approach as the home page redesign).
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Fashion Growth System — AheadTech360',
  description: 'A 90 day engagement for apparel brands doing $500K to $1M that turns your store, ads, creative, and email into one revenue machine.',
}

const OUTCOMES = [
  'More of your existing traffic will buy.',
  'Your store will convert cold traffic and lift order value, mobile first, any platform.',
  'Your ads will bring the right people in and scale only what verifiably works.',
  'Your creative will stop the scroll and move people to your store.',
  'Your email and SMS will bring customers back and grow what each is worth.',
]

const STEPS = [
  { title: 'You tell us about your store.', desc: 'Five minutes.' },
  { title: 'We review it before we speak.', desc: 'If we are not confident we can help, we say so and that is the end of it.' },
  { title: 'We talk.', desc: 'You see our diagnosis of your store on the call, not a slide deck about us.' },
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', cursor: 'default' }

export default function FGSPage() {
  return (
    <>
      {/* Hero (split): text left, illustration right, on light panel */}
      <section style={{ background: '#F2F5F8' }}>
        <div
          className="fgs-hero-grid"
          style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '40px', alignItems: 'center', minHeight: '460px' }}
        >
          <div className="fgs-hero-text" style={{ padding: '64px 0' }}>
            <span style={eyebrow}>The program, open now</span>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '20ch' }}>
              The Fashion Growth System
            </h1>
            <p style={{ fontSize: '1.18rem', color: '#6E8098', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
              A 90 day engagement for apparel brands doing $500K to $1M that turns your store, ads, creative, and email
              into one revenue machine.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/apply" style={ctaGreen}>Apply Now</Link>
            </div>
          </div>
          <div style={{ position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/Iqrar_khoso_One_large_glossy_green_anchor-offer_box_in_the_center_labeled_AN_d9a722bf-6887-4952-853f-a2b72e7f4580.png"
              alt="Apparel brand launch in motion"
              width={640}
              height={640}
              style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain', borderRadius: '14px' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div className="fgs-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '46px', alignItems: 'start' }}>
          <div>
            <span style={eyebrow}>Who this is for</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Built for the brand stuck between working and scaling.</h2>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
              You have real revenue and traffic. What you do not have is a system that turns that traffic into
              predictable growth. Ads run but you cannot tell what they earn. The store gets visitors who leave.
              Email exists but does not sell.
            </p>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED' }}>
            <Image
              src="/images/Iqrar_khoso_On_the_left_five_small_disconnected_navy_boxes_scattered_and_tan_4b5d4041-5cbc-41f2-a92e-25b9d0e8b001.png"
              alt="Apparel founder at work"
              fill
              style={{ objectFit: 'contain' }}
            />
          </figure>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>The outcome</span>
          <h2 style={{ ...h2, textAlign: 'center', marginBottom: '32px' }}>Five things will be different by day 90.</h2>
          <div className="fgs-ogrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
            {OUTCOMES.map((o) => (
              <div key={o} style={{ background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 12px rgba(8,14,28,.07)' }}>
                <p style={{ fontSize: '.9rem', color: '#1C2A42', marginTop: '6px' }}>{o}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/how" style={{ ...ctaGhost, cursor: 'pointer' }}>See How This Works</Link>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div className="fgs-split-rev" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '46px', alignItems: 'start' }}>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', background: '#fff', border: '1px solid #DFE5ED', order: 1 }}>
            <Image
              src="/images/Iqrar_khoso_A_single_glossy_3D_floating_translucent_glass_report_panel_with_t_1313d59d-9a1c-4e8d-95bb-918641134b32 (1).png"
              alt="Weekly reporting"
              fill
              style={{ objectFit: 'contain' }}
            />
          </figure>
          <div style={{ order: 2 }}>
            <span style={eyebrow}>The structure</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>How the 90 days are structured.</h2>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch', marginBottom: '14px' }}>
              We start with a full diagnosis. You see what we see before any work begins. Then we fix in order of
              impact. You get a weekly report in plain language.
            </p>
            <p style={{ fontSize: '1rem', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
              The engagement is paid in full in advance. That is deliberate. It lets us cap how many brands we take,
              staff every account with senior attention, and spend the 90 days working instead of invoicing.
            </p>
          </div>
        </div>
      </section>

      {/* Why different */}
      <section style={{ padding: '80px 32px', background: '#162952' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#7fe7b4' }}>Why this is different</span>
          <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>What makes this different from the last agency.</h2>
          <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '70ch', marginBottom: '24px' }}>
            Three things. We only work with fashion and apparel, so nothing about your market needs explaining. We
            publish verified numbers with their source named. And the people who diagnose your store do the work.
          </p>
          <Link href="/clients" style={ctaGreen}>See Our Clients</Link>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>Next step</span>
          <h2 style={{ ...h2, marginBottom: '32px' }}>What happens when you apply.</h2>
          <div style={{ display: 'grid', gap: '14px' }}>
            {STEPS.map((s, i) => (
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
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Apply Now</Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Ninety days. One system. Your numbers, verified.</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .fgs-split, .fgs-split-rev { grid-template-columns: 1fr !important; }
          .fgs-split-rev figure { order: 1 !important; }
          .fgs-ogrid { grid-template-columns: 1fr 1fr !important; }
          .fgs-hero-grid { grid-template-columns: 1fr !important; min-height: 0 !important; gap: 0 !important; }
          .fgs-hero-text { padding: 56px 0 28px !important; }
        }
      `}</style>
    </>
  )
}
