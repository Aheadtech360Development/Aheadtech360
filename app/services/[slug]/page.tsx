// app/services/[slug]/page.tsx
export const revalidate = 60

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import { SERVICE_CONTENT, PRICING_TIERS, type ServicePageData, type ProseBlock } from './content'

// ── Helpers ───────────────────────────────────────────────────────────────────

function parseEm(text: string) {
  return text.split(/(\[em\].*?\[\/em\])/g).map((p, i) =>
    p.startsWith('[em]')
      ? <em key={i} style={{ color: '#25B472', fontStyle: 'italic' }}>{p.replace('[em]', '').replace('[/em]', '')}</em>
      : <span key={i}>{p}</span>
  )
}

function parseBold(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i}>{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>
  )
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const d = SERVICE_CONTENT[slug]
  const title = d ? `${d.title} — AheadTech360` : 'Service — AheadTech360'
  return { title, description: d?.hero.description || '' }
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_CONTENT).map(slug => ({ slug }))
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function ServiceInnerPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const d = SERVICE_CONTENT[slug]
  if (!d) notFound()

  return (
    <>
      <HeroSection     d={d} />
      <TruthSection    d={d} />
      <ProseSection    d={d} />
      <DeliverablesSection d={d} />
      <ServiceFAQ badge={d.faq.badge} tag={d.faq.tag} heading={d.faq.heading} items={d.faq.items} />
      <PricingSection  />
      <TestimonialsSection d={d} />
      <FinalCTASection />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — Hero
// ─────────────────────────────────────────────────────────────────────────────

function HeroSection({ d }: { d: ServicePageData }) {
  return (
    <section style={{ background: 'linear-gradient(180deg,#EEF2F9 0%,#fff 100%)', borderBottom: '1px solid #DFE5ED' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '72px 32px' }} className="svc-wrap hero-wrap">

        {/* LEFT */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>
          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
            {d.hero.tags.map((tag, i) => (
              <span key={i} style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#3E5068', fontFamily: 'var(--font-jetbrains)' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(36px,5vw,56px)', color: '#1C2A42', lineHeight: 1.05, letterSpacing: '-0.5px', marginBottom: '18px', maxWidth: '560px' }}>
            {parseEm(d.hero.heading)}
          </h1>

          {/* Description */}
          <p style={{ fontSize: '16px', color: '#6E8098', lineHeight: 1.75, maxWidth: '500px', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>
            {d.hero.description}
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', background: '#25B472', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
              {d.hero.ctaPrimary}
            </Link>
            {d.hero.ctaSecondary && (
              <Link href="/results" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 24px', background: '#fff', color: '#1C2A42', border: '1.5px solid #DFE5ED', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
                {d.hero.ctaSecondary}
              </Link>
            )}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {d.hero.stats.map((s, i) => (
              <div key={i} style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '10px', padding: '14px 24px', flex: '1 1 100px', maxWidth: '160px' }}>
                <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '26px', fontWeight: 800, color: i === 0 ? '#25B472' : '#213D79', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600, fontFamily: 'var(--font-jetbrains)', marginTop: '5px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Checklist Card */}
        <div style={{ flex: '0 0 440px', maxWidth: '440px' }} className="hero-card-wrap">
          <div style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 24px rgba(8,14,28,.07)' }}>
            <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#25B472', fontFamily: 'var(--font-jetbrains)', marginBottom: '16px' }}>
              WHAT'S INCLUDED
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {d.hero.checklist.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '11px 0', borderBottom: i < d.hero.checklist.length - 1 ? '1px solid #EEF2F9' : 'none' }}>
                  <span style={{ color: '#25B472', fontWeight: 800, fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{ fontSize: '13.5px', color: '#3E5068', fontFamily: 'var(--font-jakarta)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <style>{`
        .hero-wrap { display: flex; gap: 48px; align-items: center; }
        @media(max-width:900px){
          .svc-wrap   { padding: 56px 16px !important; }
          .hero-wrap  { flex-direction: column; }
          .hero-card-wrap { flex: none !important; max-width: 100% !important; width: 100%; }
        }
      `}</style>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — The Hard Truth
// ─────────────────────────────────────────────────────────────────────────────

function TruthSection({ d }: { d: ServicePageData }) {
  const { truth } = d
  return (
    <section style={{ background: '#F2F5F8' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="svc-wrap">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#213D79', fontFamily: 'var(--font-jetbrains)', marginBottom: '10px' }}>{truth.tag}</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.8vw,44px)', color: '#1C2A42', lineHeight: 1.1, marginBottom: '12px' }}>{parseEm(truth.heading)}</h2>
          <p style={{ fontSize: '15px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', maxWidth: '520px', margin: '0 auto' }}>{truth.subheading}</p>
        </div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="truth-grid">

          {/* Bad */}
          <div style={{ background: '#fff', borderTop: '1.5px solid #DFE5ED', borderRight: '1.5px solid #DFE5ED', borderBottom: '1.5px solid #DFE5ED', borderLeft: '4px solid #F04438', borderRadius: '12px', padding: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', color: '#F04438', fontFamily: 'var(--font-jetbrains)', marginBottom: '12px' }}>{truth.bad.label}</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1C2A42', marginBottom: '20px', fontFamily: 'var(--font-bricolage)' }}>{truth.bad.heading}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {truth.bad.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 0', borderBottom: i < truth.bad.items.length - 1 ? '1px solid #F2F5F8' : 'none' }}>
                  <span style={{ color: '#F04438', fontWeight: 800, flexShrink: 0, fontSize: '14px' }}>✗</span>
                  <span style={{ fontSize: '13.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Good */}
          <div style={{ background: '#fff', borderTop: '1.5px solid #DFE5ED', borderRight: '1.5px solid #DFE5ED', borderBottom: '1.5px solid #DFE5ED', borderLeft: '4px solid #25B472', borderRadius: '12px', padding: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', color: '#25B472', fontFamily: 'var(--font-jetbrains)', marginBottom: '12px' }}>{truth.good.label}</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1C2A42', marginBottom: '20px', fontFamily: 'var(--font-bricolage)' }}>{truth.good.heading}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {truth.good.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 0', borderBottom: i < truth.good.items.length - 1 ? '1px solid #F2F5F8' : 'none' }}>
                  <span style={{ color: '#25B472', fontWeight: 800, flexShrink: 0, fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '13.5px', color: '#3E5068', fontFamily: 'var(--font-jakarta)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`@media(max-width:900px){ .truth-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — Prose
// ─────────────────────────────────────────────────────────────────────────────

function ProseSection({ d }: { d: ServicePageData }) {
  const { prose } = d

  function renderBlock(block: ProseBlock, i: number) {
    if (block.type === 'h3') return (
      <h3 key={i} style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '20px', color: '#1C2A42', margin: '32px 0 10px' }}>{block.text}</h3>
    )
    if (block.type === 'p') return (
      <p key={i} style={{ fontSize: '15px', color: '#3E5068', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)', marginBottom: '16px' }}>{parseBold(block.text)}</p>
    )
    if (block.type === 'ul') return (
      <ul key={i} style={{ margin: '0 0 16px', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {block.items.map((item, j) => (
          <li key={j} style={{ fontSize: '14.5px', color: '#3E5068', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>{parseBold(item)}</li>
        ))}
      </ul>
    )
    return null
  }

  return (
    <section style={{ background: '#fff', borderTop: '1px solid #DFE5ED' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="svc-wrap">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(24px,3vw,36px)', color: '#1C2A42', lineHeight: 1.15, marginBottom: '24px' }}>
            {prose.heading}
          </h2>
          {prose.blocks.map(renderBlock)}

          {/* Related links */}
          {prose.related.length > 0 && (
            <p style={{ fontSize: '13px', color: '#6E8098', marginTop: '32px', fontFamily: 'var(--font-jakarta)', fontStyle: 'italic' }}>
              Related services:{' '}
              {prose.related.map((link, i) => (
                <span key={i}>
                  <Link href={link.href} style={{ color: '#213D79', textDecoration: 'none', fontWeight: 600 }}>{link.text}</Link>
                  {i < prose.related.length - 1 && <span style={{ color: '#DFE5ED', margin: '0 6px' }}>·</span>}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — Deliverables
// ─────────────────────────────────────────────────────────────────────────────

function DeliverablesSection({ d }: { d: ServicePageData }) {
  const { deliverables } = d
  return (
    <section style={{ background: '#F2F5F8' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="svc-wrap">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#213D79', fontFamily: 'var(--font-jetbrains)', marginBottom: '10px' }}>{deliverables.tag}</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,42px)', color: '#1C2A42', lineHeight: 1.1 }}>{parseEm(deliverables.heading)}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }} className="cards-grid">
          {deliverables.items.map((item, i) => (
            <div key={i} style={{ background: '#fff', border: `1.5px solid ${item.highlight ? '#25B472' : '#DFE5ED'}`, borderRadius: '14px', padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#080E1C', marginBottom: '6px', fontFamily: 'var(--font-bricolage)' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.6, fontFamily: 'var(--font-jakarta)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){ .cards-grid { grid-template-columns: 1fr 1fr !important; } } @media(max-width:600px){ .cards-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6 — Pricing  (same on every service page)
// ─────────────────────────────────────────────────────────────────────────────

function PricingSection() {
  return (
    <section style={{ background: '#162952' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="svc-wrap">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#34D48A', fontFamily: 'var(--font-jetbrains)', marginBottom: '10px' }}>HOW ENGAGEMENTS TYPICALLY WORK</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,44px)', color: '#fff', lineHeight: 1.1, marginBottom: '12px' }}>
            Pick the structure that <em style={{ color: '#25B472', fontStyle: 'italic' }}>fits your stage.</em>
          </h2>
          <p style={{ fontSize: '14px', color: '#A4B3C4', fontFamily: 'var(--font-jakarta)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Each service has its own scope and price range. These tiers show the general shape of how we engage. Final pricing comes after a free audit call.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', alignItems: 'start' }} className="pricing-grid">
          {PRICING_TIERS.map((tier, i) => (
            <div key={i} style={{
              background: tier.popular ? '#0F1F3D' : '#111827',
              border: `1.5px solid ${tier.popular ? '#25B472' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '16px',
              padding: '32px 28px',
              position: 'relative',
              boxShadow: tier.popular ? '0 0 0 1px #25B47240, 0 8px 32px rgba(37,180,114,0.15)' : '0 4px 20px rgba(0,0,0,0.3)',
            }}>
              {tier.popular && (
                <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#25B472', color: '#fff', fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', padding: '5px 16px', borderRadius: '20px', fontFamily: 'var(--font-jetbrains)', whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#34D48A', fontFamily: 'var(--font-jetbrains)', marginBottom: '14px' }}>{tier.tag}</div>
              <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(28px,3vw,38px)', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '4px' }}>
                {tier.price}{tier.perMonth && <span style={{ fontSize: '16px', color: '#A4B3C4', fontWeight: 600 }}>/mo</span>}
              </div>
              <p style={{ fontSize: '13.5px', color: '#8EA3B8', lineHeight: 1.65, fontFamily: 'var(--font-jakarta)', margin: '14px 0 0', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{tier.description}</p>
              <div style={{ display: 'flex', flexDirection: 'column', margin: '4px 0 24px' }}>
                {tier.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 0', borderBottom: j < tier.features.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <span style={{ color: '#25B472', fontWeight: 800, flexShrink: 0, fontSize: '13px' }}>✓</span>
                    <span style={{ fontSize: '13.5px', color: '#C8D6E5', fontFamily: 'var(--font-jakarta)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href={tier.href} style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-jakarta)', textDecoration: 'none', background: tier.popular ? '#25B472' : 'transparent', color: tier.popular ? '#fff' : '#8EA3B8', border: tier.popular ? 'none' : '1.5px solid rgba(255,255,255,0.15)', transition: 'all 0.2s' }}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#A4B3C4', marginTop: '28px', fontFamily: 'var(--font-jetbrains)' }}>
          100% advance payment for project work · Retainers billed monthly in advance
        </p>
      </div>
      <style>{`@media(max-width:900px){ .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 7 — Testimonials
// ─────────────────────────────────────────────────────────────────────────────

function TestimonialsSection({ d }: { d: ServicePageData }) {
  const { testimonials } = d
  return (
    <section style={{ background: '#080E1C' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="svc-wrap">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#34D48A', fontFamily: 'var(--font-jetbrains)', marginBottom: '10px' }}>{testimonials.tag}</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,44px)', color: '#fff', lineHeight: 1.1 }}>{parseEm(testimonials.heading)}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }} className="reviews-grid">
          {testimonials.items.map((t, i) => (
            <div key={i} style={{ background: '#0F1729', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#F79009', fontSize: '14px' }}>★</span>)}
              </div>
              <p style={{ fontSize: '14px', color: '#A4B3C4', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', marginBottom: '10px' }}>
                "{t.quote}{t.bold ? <> <strong style={{ color: '#fff' }}>{t.bold}</strong></> : ''}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#213D79', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-bricolage)' }}>{t.initials}</span>
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-jakarta)' }}>{t.name}</div>
                  <div style={{ fontSize: '11.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){ .reviews-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 8 — Final CTA
// ─────────────────────────────────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '90px 32px', textAlign: 'center' }} className="svc-wrap">
        <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(32px,4.5vw,52px)', color: '#fff', lineHeight: 1.1, marginBottom: '12px' }}>
          Not sure which service <em style={{ color: '#34D48A', fontStyle: 'italic' }}>fits?</em>
        </h2>
        <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>
          Free audit call. We'll tell you what to focus on first. No pitch.
        </p>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 36px', background: '#25B472', color: '#fff', borderRadius: '10px', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
          Get My Free Audit →
        </Link>
        <p style={{ fontSize: '12px', color: '#3E5068', marginTop: '16px', fontFamily: 'var(--font-jetbrains)' }}>
          Typical response: a few hours · No 30-min "discovery call" BS
        </p>
      </div>
    </section>
  )
}
