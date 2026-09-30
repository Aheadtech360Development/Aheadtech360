// app/contact/page.tsx
export const revalidate = 60

import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/client'

const QUERY = `*[_type == "contactPage"][0]{
  ghlFormUrl,
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

const CONTACT_ITEMS = [
  { icon: '📞', title: 'Call us', detail: '+14695575651' },
  { icon: '📧', title: 'Email us', detail: 'info@aheadtech360.com' },
  { icon: '💬', title: 'WhatsApp', detail: 'Message anytime. We reply fast.' },
  // { icon: '📍', title: 'Office', detail: '30 N Gould St Ste N, Sheridan, WY 82801' },
]

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<any>(QUERY)
  return {
    title: data?.seo?.metaTitle || 'Free Audit — AheadTech360',
    description: data?.seo?.metaDescription || 'Get a free marketing audit. We find what\'s broken and tell you how to fix it. No contracts. 24-hour delivery.',
    keywords: data?.seo?.keywords || '',
    openGraph: {
      title: data?.seo?.metaTitle || 'Free Audit — AheadTech360',
      description: data?.seo?.metaDescription || '',
      url: 'https://aheadtech360.com/contact',
      siteName: 'AheadTech360',
      images: data?.seo?.ogImageUrl ? [{ url: data.seo.ogImageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.seo?.metaTitle || 'Free Audit — AheadTech360',
      description: data?.seo?.metaDescription || '',
    },
  }
}

function DefaultContactForm() {
  return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 20px 50px rgba(8,14,28,.15)', border: '1px solid #DFE5ED' }}>
      <div style={{ background: '#FEF3F2', borderRadius: '7px', padding: '8px 14px', marginBottom: '18px', fontSize: '12px', color: '#F04438', fontWeight: 700, textAlign: 'center', fontFamily: 'var(--font-jakarta)' }}>2 spots left this month</div>
      <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#080E1C', marginBottom: '3px', textAlign: 'center', fontFamily: 'var(--font-bricolage)' }}>Get your free audit</h3>
      <p style={{ fontSize: '13px', color: '#6E8098', marginBottom: '20px', textAlign: 'center', fontFamily: 'var(--font-jakarta)', lineHeight: 1.55 }}>We find problems. You keep the report. No strings.</p>
      {[
        { label: 'Name', type: 'text', placeholder: 'John' },
        { label: 'Email', type: 'email', placeholder: 'john@company.com' },
        { label: 'Website', type: 'url', placeholder: 'yoursite.com' },
      ].map(f => (
        <div key={f.label} style={{ marginBottom: '13px' }}>
          <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>{f.label}</label>
          <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none' }} />
        </div>
      ))}
      <div style={{ marginBottom: '13px' }}>
        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>Monthly ad budget</label>
        <select style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none' }}>
          <option>Pick one...</option>
          <option>Under $1K/mo</option>
          <option>$1K - $3K/mo</option>
          <option>$3K - $10K/mo</option>
          <option>$10K+/mo</option>
          <option>No ads yet</option>
        </select>
      </div>
      <div style={{ marginBottom: '13px' }}>
        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>Biggest problem right now (optional)</label>
        <textarea rows={3} placeholder="E.g. ads aren't profitable, need more leads, site doesn't convert..." style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none', resize: 'vertical' }} />
      </div>
      <button style={{ width: '100%', padding: '13px', background: '#25B472', color: '#fff', border: 'none', borderRadius: '9px', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-jakarta)', cursor: 'pointer' }}>Show Me What&apos;s Broken →</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '13px', paddingTop: '13px', borderTop: '1px solid #DFE5ED', fontSize: '11.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
        {['No contracts', '24hr delivery', '90-day guarantee'].map(b => <span key={b}><span style={{ color: '#25B472', fontWeight: 800 }}>✓</span> {b}</span>)}
      </div>
    </div>
  )
}

export default async function ContactPage() {
  const data = await sanityFetch<any>(QUERY)
  const GHL_FORM_URL = data?.ghlFormUrl || 'https://api.aheadtech360.com/widget/form/xMYBaVwqWJaDPiPICqR4'

  return (
    <>
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="contact-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '44px', alignItems: 'start' }} className="contact-grid">

            {/* LEFT */}
            <div>
              <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(28px,3.5vw,40px)', color: '#080E1C', marginBottom: '14px' }}>
                Tell us about <em style={{ color: '#25B472', fontStyle: 'italic' }}>your business.</em>
              </h1>
              <p style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.65, marginBottom: '28px', fontFamily: 'var(--font-jakarta)' }}>We&apos;ll look at your ads and your site. We&apos;ll find what&apos;s broken. We&apos;ll tell you how to fix it. Takes us 24 hours. Costs you nothing. If you like what you see, we talk. If not, you keep the report.</p>

              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EEF2F9', display: 'grid', placeItems: 'center', fontSize: '18px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#080E1C', marginBottom: '1px', fontFamily: 'var(--font-jakarta)' }}>{item.title}</h4>
                    <p style={{ fontSize: '12px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{item.detail}</p>
                  </div>
                </div>
              ))}

              <div style={{ background: '#EDFBF3', borderRadius: '10px', padding: '16px', marginTop: '24px', borderLeft: '3px solid #25B472' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#1C8F5A', marginBottom: '2px', fontFamily: 'var(--font-jakarta)' }}>How fast do you respond?</h4>
                <p style={{ fontSize: '12px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Audits: 24 hours. Questions: same day. We don&apos;t ghost. Ever.</p>
              </div>
            </div>

            {/* RIGHT — Form */}
            {GHL_FORM_URL
              ? <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(8,14,28,.15)', border: '1px solid #DFE5ED' }}>
                  <iframe src={GHL_FORM_URL} style={{ width: '100%', height: '620px', border: 'none', display: 'block' }} loading="lazy" title="Contact Form" />
                </div>
              : <DefaultContactForm />
            }
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .contact-container { padding: 52px 16px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
