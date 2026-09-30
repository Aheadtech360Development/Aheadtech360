// app/apply/page.tsx
// "Talk to Us" — the lead-capture page every CTA across the site points to.
// Reuses the existing contactPage.ghlFormUrl Sanity field (same one /contact reads) so this
// is a real working form, not just a UI shell — no schema changes.
export const revalidate = 60

import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/client'
import Image from 'next/image'

const QUERY = `*[_type == "contactPage"][0]{
  ghlFormUrl,
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<any>(QUERY)
  return {
    title: data?.seo?.metaTitle || 'Talk to Us — AheadTech360',
    description: data?.seo?.metaDescription || 'Tell us about your store. We will tell you what we see.',
  }
}

function DefaultApplyForm() {
  return (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '26px', boxShadow: '0 2px 12px rgba(8,14,28,.07)', border: '1px solid #DFE5ED' }}>
      {[
        { label: 'Name', type: 'text' },
        { label: 'Brand name', type: 'text' },
        { label: 'Store URL', type: 'url', placeholder: 'https://' },
      ].map((f) => (
        <div key={f.label} style={{ marginBottom: '14px' }}>
          <label style={{ display: 'block', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.92rem', color: '#1C2A42', marginBottom: '6px' }}>{f.label}</label>
          <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '.7rem .85rem', border: '1px solid #DFE5ED', borderRadius: '9px', fontFamily: 'var(--font-jakarta)', fontSize: '1rem', background: '#F2F5F8', color: '#1C2A42' }} />
        </div>
      ))}
      <div style={{ marginBottom: '14px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.92rem', color: '#1C2A42', marginBottom: '6px' }}>Which best describes you</label>
        <select style={{ width: '100%', padding: '.7rem .85rem', border: '1px solid #DFE5ED', borderRadius: '9px', fontFamily: 'var(--font-jakarta)', fontSize: '1rem', background: '#F2F5F8', color: '#1C2A42' }}>
          <option>Custom & Print</option>
          <option>Retail Fashion & D2C</option>
          <option>Wholesale & Blank Apparel</option>
          <option>Accessories, Niche & Streetwear</option>
          <option>Other apparel</option>
        </select>
      </div>
      <div style={{ marginBottom: '14px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.92rem', color: '#1C2A42', marginBottom: '6px' }}>Roughly where is your annual revenue</label>
        <select style={{ width: '100%', padding: '.7rem .85rem', border: '1px solid #DFE5ED', borderRadius: '9px', fontFamily: 'var(--font-jakarta)', fontSize: '1rem', background: '#F2F5F8', color: '#1C2A42' }}>
          <option>Under $500K</option>
          <option>$500K to $1M</option>
          <option>$1M to $10M</option>
          <option>Over $10M</option>
        </select>
      </div>
      <div style={{ marginBottom: '14px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.92rem', color: '#1C2A42', marginBottom: '6px' }}>What is the biggest problem right now</label>
        <textarea rows={4} style={{ width: '100%', padding: '.7rem .85rem', border: '1px solid #DFE5ED', borderRadius: '9px', fontFamily: 'var(--font-jakarta)', fontSize: '1rem', background: '#F2F5F8', color: '#1C2A42', resize: 'vertical' }} />
      </div>
      {[{ label: 'Email', type: 'email' }, { label: 'Phone (optional)', type: 'tel' }].map((f) => (
        <div key={f.label} style={{ marginBottom: '14px' }}>
          <label style={{ display: 'block', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.92rem', color: '#1C2A42', marginBottom: '6px' }}>{f.label}</label>
          <input type={f.type} style={{ width: '100%', padding: '.7rem .85rem', border: '1px solid #DFE5ED', borderRadius: '9px', fontFamily: 'var(--font-jakarta)', fontSize: '1rem', background: '#F2F5F8', color: '#1C2A42' }} />
        </div>
      ))}
      <button type="button" style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', border: 'none', cursor: 'pointer' }}>
        Send It
      </button>
    </div>
  )
}

export default async function ApplyPage() {
  const data = await sanityFetch<any>(QUERY)
  const ghlFormUrl = data?.ghlFormUrl || 'https://api.aheadtech360.com/widget/form/xMYBaVwqWJaDPiPICqR4'

  return (
    <>
      <section style={{ background: '#F2F5F8' }}>
        <div
          className="apply-hero-grid"
          style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '40px', alignItems: 'center', minHeight: '420px' }}
        >
          <div className="apply-hero-text" style={{ padding: '64px 0' }}>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }}>
              Talk to us
            </span>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '20ch' }}>
              Tell us about your store.
            </h1>
            <p style={{ fontSize: '1.18rem', color: '#6E8098', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
              Five minutes of questions. Then we look at your store before we ever get on a call, so the first
              conversation is about you, not about us.
            </p>
          </div>
          <div style={{ position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/Iqrar_khoso_A_glossy_3D_circular_badge_in_the_center_made_of_a_navy_and_green_626811c3-b996-4271-b4cb-ae9228888dc8.png"
              alt=""
              width={640}
              height={640}
              style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'contain', borderRadius: '14px' }}
              priority
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div className="apply-wrap" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: '34px', alignItems: 'start' }}>
          {ghlFormUrl ? (
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(8,14,28,.07)', border: '1px solid #DFE5ED' }}>
              <iframe src={ghlFormUrl} style={{ width: '100%', height: '640px', border: 'none', display: 'block' }} loading="lazy" title="Talk to Us form" />
            </div>
          ) : (
            <DefaultApplyForm />
          )}

          <aside style={{ background: '#F2F5F8', border: '1px solid #DFE5ED', borderRadius: '16px', padding: '24px' }}>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }}>
              After you hit send
            </span>
            <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', marginBottom: '8px' }}>What happens next.</h3>
            <p style={{ color: '#6E8098', fontSize: '.95rem', lineHeight: 1.6 }}>
              We review your store. Within two business days you hear back either with a call link and our first
              impressions, or an honest note that we are not the right fit and why.
            </p>
            <div style={{ marginTop: '14px', fontFamily: 'var(--font-jetbrains)', fontSize: '.8rem', color: '#6E8098' }}>
              No obligation. No pressure sequence.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '18px' }}>
              {[
                { src: '/images/reviews/shopify.png', alt: 'Shopify Partner' },
                { src: '/images/reviews/clutch.png', alt: 'Clutch' },
              ].map((b) => (
                <span key={b.alt} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#fff', border: '1px solid #DFE5ED', borderRadius: '9px', padding: '6px 12px' }}>
                  <Image src={b.src} alt={b.alt} width={100} height={40} style={{ objectFit: 'contain', height: '16px', width: 'auto' }} />
                  <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.78rem', color: '#1C2A42' }}>{b.alt}</span>
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .apply-wrap { grid-template-columns: 1fr !important; }
          .apply-hero-grid { grid-template-columns: 1fr !important; min-height: 0 !important; gap: 0 !important; }
          .apply-hero-text { padding: 56px 0 28px !important; }
        }
      `}</style>
    </>
  )
}
