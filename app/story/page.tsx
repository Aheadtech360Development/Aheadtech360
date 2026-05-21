// app/story/page.tsx
export const revalidate = 60

import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/client'

const QUERY = `*[_type == "storyPage"][0]{
  heading, subheading,
  steps,
  foundersQuote, foundersNames,
  storiesCount,
  formHeading, formSubheading,
  ghlFormUrl,
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<any>(QUERY)
  return {
    title: data?.seo?.metaTitle || 'Share Your Story — AheadTech360',
    description: data?.seo?.metaDescription || "We're collecting real stories from real business owners. Share yours and get a free personalized tip.",
    keywords: data?.seo?.keywords || '',
    openGraph: {
      title: data?.seo?.metaTitle || 'Share Your Story — AheadTech360',
      description: data?.seo?.metaDescription || '',
      url: 'https://aheadtech360.com/story',
      siteName: 'AheadTech360',
      images: data?.seo?.ogImageUrl ? [{ url: data.seo.ogImageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.seo?.metaTitle || 'Share Your Story — AheadTech360',
      description: data?.seo?.metaDescription || '',
    },
  }
}

const DEFAULT_STEPS = [
  { number: '1', title: 'We read it personally',  description: 'Not a bot. Iqrar or Ikrash read every story within 48 hours.',                               color: '#EDFBF3' },
  { number: '2', title: 'We send you a free tip', description: 'One specific, actionable recommendation based on your situation.',                             color: '#EEF2F9' },
  { number: '3', title: 'You might get featured', description: 'Best stories (with your permission) become blog posts or podcast episodes.',                    color: '#FFFAEB' },
  { number: '4', title: 'Patterns become guides', description: 'We analyze every story to find patterns and publish free guides that help everyone.',            color: '#F3E8FF' },
]

export default async function StoryPage() {
  const data = await sanityFetch<any>(QUERY)

  const heading        = data?.heading        || "We're collecting real stories from real business owners."
  const subheading     = data?.subheading     || "Not case studies. Not testimonials. Just real stories from real people — what's working, what's not, and what you wish you knew sooner. We read every single one."
  const steps          = data?.steps?.length  ? data.steps : DEFAULT_STEPS
  const foundersQuote  = data?.foundersQuote  || "We started AheadTech360 because we saw too many good businesses wasting money on bad marketing. We built this story collection to understand what's really happening on the ground — not what marketing Twitter says, but what actual business owners are dealing with every day."
  const foundersNames  = data?.foundersNames  || '— Iqrar & Ikrash, Founders'
  // const storiesCount   = data?.storiesCount   || '47 stories collected so far'
  // const formHeading    = data?.formHeading    || 'Your story matters'
  // const formSubheading = data?.formSubheading || "3 minutes. We'll send you a personalized tip back."
  const ghlFormUrl     = data?.ghlFormUrl     || ''

  return (
    <>
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9 0%,#fff 50%,#EDFBF3 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(33,61,121,.04),transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="story-grid">

          {/* ── LEFT ── */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#34D48A' }}>Share your story</div>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(30px,4vw,44px)', fontWeight: 800, color: '#080E1C', lineHeight: 1.1, marginBottom: '16px' }}>
              We're collecting <em style={{ color: '#25B472', fontStyle: 'italic' }}>real stories</em> from real business owners.
            </h1>
            <p style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.7, marginBottom: '28px', fontFamily: 'var(--font-jakarta)' }}>{subheading}</p>

            {/* What happens box */}
            <div style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#080E1C', marginBottom: '16px', fontFamily: 'var(--font-bricolage)' }}>What happens with your story:</h4>
              {steps.map((step: any, i: number) => (
                <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: i < steps.length - 1 ? '14px' : 0, alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: step.color || '#EDFBF3', display: 'grid', placeItems: 'center', fontSize: '14px', fontWeight: 800, color: '#080E1C', flexShrink: 0, fontFamily: 'var(--font-bricolage)' }}>
                    {step.number}
                  </div>
                  <div>
                    <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#080E1C', marginBottom: '2px', fontFamily: 'var(--font-bricolage)' }}>{step.title}</h5>
                    <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.55, fontFamily: 'var(--font-jakarta)' }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founders quote */}
            <div style={{ background: '#080E1C', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#34D48A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'var(--font-jetbrains)' }}>Why we do this</div>
              <p style={{ fontSize: '14px', color: '#A4B3C4', lineHeight: 1.65, fontFamily: 'var(--font-jakarta)', fontStyle: 'italic' }}>"{foundersQuote}"</p>
              <p style={{ fontSize: '12px', color: '#6E8098', marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>{foundersNames}</p>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div style={{ position: 'sticky', top: '100px' }}>
            {/* <div style={{ background: '#EDFBF3', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px', textAlign: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1C8F5A', fontFamily: 'var(--font-jakarta)' }}>📖 {storiesCount}</span>
            </div> */}

            <div style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '20px', padding: '32px', boxShadow: '0 20px 50px rgba(8,14,28,.12)' }}>
              {/* <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '22px', fontWeight: 800, color: '#080E1C', textAlign: 'center', marginBottom: '6px' }}>{formHeading}</h2>
              <p style={{ fontSize: '13px', color: '#6E8098', textAlign: 'center', marginBottom: '24px', fontFamily: 'var(--font-jakarta)' }}>{formSubheading}</p> */}

              {ghlFormUrl ? (
                <iframe src={ghlFormUrl} style={{ width: '100%', minHeight: '700px', border: 'none' }} loading="lazy" title="Share Your Story Form" />
              ) : (
                <FormPreview />
              )}

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
                {['100% private', 'Free tip in 48hrs', 'No spam ever', 'Unsubscribe anytime'].map((t, i) => (
                  <span key={i} style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
                    <span style={{ color: '#25B472' }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .story-grid { grid-template-columns:1fr!important; padding:52px 16px!important; }
          .story-grid>div:last-child { position:static!important; }
        }
      `}</style>
    </>
  )
}

// Static preview of form fields (shown before GHL URL is set in Sanity)
function FormPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {[
        { label: 'Your name', placeholder: 'John', type: 'input' },
        { label: 'Business name', placeholder: "Joe's Gym", type: 'input' },
        { label: 'Industry', type: 'select', options: ['Pick one...','Ecommerce / DTC','Local Services','Fitness / Health','Food / Restaurant','Fashion / Apparel','SaaS / Tech','Real Estate','Education','Other'] },
        { label: 'Monthly revenue (rough range)', type: 'select', options: ['Pick one...','Pre-revenue','Under $5K/mo','$5K - $20K/mo','$20K - $100K/mo','$100K+/mo'] },
        { label: "What's your biggest marketing challenge right now?", placeholder: 'Be as specific as you can — the more detail, the better tip we can give back.', type: 'textarea' },
        { label: 'What have you already tried to fix it?', placeholder: "E.g., hired a freelancer, tried Facebook ads myself, boosted posts...", type: 'textarea' },
        { label: 'If marketing could fix ONE thing for your business, what would it be?', placeholder: 'E.g., Get my ads profitable, fix my website conversion...', type: 'input' },
        { label: 'Email (for your free tip)', placeholder: 'john@company.com', type: 'input' },
      ].map((f, i) => (
        <div key={i}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '5px', fontFamily: 'var(--font-jakarta)' }}>{f.label}</label>
          {f.type === 'textarea' ? (
            <textarea disabled placeholder={f.placeholder} style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #DFE5ED', borderRadius: '8px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', minHeight: '80px', resize: 'vertical', background: '#FAFBFC' }} />
          ) : f.type === 'select' ? (
            <select disabled style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #DFE5ED', borderRadius: '8px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', background: '#FAFBFC' }}>
              {f.options?.map((o, j) => <option key={j}>{o}</option>)}
            </select>
          ) : (
            <input disabled placeholder={f.placeholder} style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #DFE5ED', borderRadius: '8px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', background: '#FAFBFC' }} />
          )}
        </div>
      ))}

      <div style={{ background: '#FFFAEB', border: '1.5px solid #FCD34D', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', color: '#7A5A00', fontFamily: 'var(--font-jakarta)', lineHeight: 1.6 }}>
        ⚙️ <strong>Form not connected yet.</strong> Go to Sanity Studio → Share Your Story Page → paste your GHL form URL.
      </div>
    </div>
  )
}