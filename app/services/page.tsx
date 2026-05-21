// app/services/page.tsx
export const revalidate = 60

import type { Metadata } from 'next'
import Image from 'next/image'
import ServicesSection from '@/components/sections/ServicesSection'
import GuaranteeBar from '@/components/sections/GuaranteeBar'
import { sanityFetch } from '@/sanity/lib/client'
import LeadConnectorWidget from '@/components/LeadConnectorWidget'

const QUERY = `*[_type == "servicesPage"][0]{
  pageHeading, pageSubheading,
  "services": services[]{
    "iconUrl": icon.asset->url,
    "iconAlt": icon.alt,
    iconBg, title, description, resultValue, resultLabel, slug
  },
  "whyUsCards": whyUsCards[]{
    "iconUrl": icon.asset->url,
    "iconAlt": icon.alt,
    title, description
  },
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

const WHY_US_DEFAULT = [
  { icon: 'icons8-outcome-64.png', iconBg: '#EEF2F9', title: 'Outcome-obsessed', description: 'We track revenue, not impressions. Every decision is measured against "Did this make the client more money?"' },
  { icon: 'icons8-test-tube-100.png', iconBg: '#EDFBF3', title: 'We eat our own cooking', description: "We run ecommerce brands with the same strategies we use for clients. If it doesn't work for us, we don't sell it." },
  { icon: 'icons8-handshake-64.png', iconBg: '#FFFAEB', title: 'Small team, not a factory', description: "You'll know your strategist by name. We take on max 3 new clients/month." },
]

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<any>(QUERY)
  return {
    title: data?.seo?.metaTitle || 'Our Services — AheadTech360',
    description: data?.seo?.metaDescription || 'Every service connects to one goal: more revenue per dollar you spend. Meta Ads, Google Ads, SEO, CRO, Email, Web.',
    keywords: data?.seo?.keywords || '',
    openGraph: {
      title: data?.seo?.metaTitle || 'Our Services — AheadTech360',
      description: data?.seo?.metaDescription || '',
      url: 'https://aheadtech360.com/services',
      siteName: 'AheadTech360',
      images: data?.seo?.ogImageUrl ? [{ url: data.seo.ogImageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.seo?.metaTitle || 'Our Services — AheadTech360',
      description: data?.seo?.metaDescription || '',
    },
  }
}

export default async function ServicesPage() {
  const data = await sanityFetch<any>(QUERY)

  const sanityServices = data?.services?.length
    ? data.services.map((s: any) => ({
      iconUrl: s.iconUrl ?? undefined,
      iconBg: s.iconBg || '#EEF2F9',
      title: s.title || '',
      description: s.description || '',
      resultValue: s.resultValue || '',
      resultLabel: s.resultLabel || '',
      slug: s.slug || undefined,
    }))
    : undefined

  const whyUsCards = data?.whyUsCards?.length ? data.whyUsCards : WHY_US_DEFAULT

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Our services</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#1C2A42', marginBottom: '12px', letterSpacing: '-0.3px' }}>
            {data?.pageHeading || <>The full stack to <em style={{ color: '#25B472', fontStyle: 'italic' }}>scale your revenue.</em></>}
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>
            {data?.pageSubheading || 'Every service connects to one goal: more revenue per dollar you spend.'}
          </p>
        </div>
      </section>

      {/* Services list */}
      <ServicesSection
        heading="Everything you need. [em]Nothing you don't.[/em]"
        subheading="Six services. Each one built to grow your revenue."
        services={sanityServices}
      />

      {/* Why Us */}
      <section style={{ background: '#F2F5F8', padding: '60px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Why us</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '40px', lineHeight: 1.1 }}>
            We&apos;re not like <em style={{ color: '#25B472', fontStyle: 'italic' }}>other agencies.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="why-grid">
            {whyUsCards.map((w: any, i: number) => {
              const imgSrc = w.iconUrl || (w.icon ? `/images/${w.icon}` : null)
              return (
                <div key={i} style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', padding: '28px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: w.iconBg || '#EEF2F9', display: 'grid', placeItems: 'center', marginBottom: '14px' }}>
                    {imgSrc && (
                      <Image
                        src={imgSrc}
                        alt={w.iconAlt || w.title || ''}
                        width={50}
                        height={50}
                        style={{ objectFit: 'contain' }}
                        unoptimized={!!w.iconUrl}
                      />
                    )}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#080E1C', marginBottom: '6px', fontFamily: 'var(--font-bricolage)' }}>{w.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.6, fontFamily: 'var(--font-jakarta)' }}>{w.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <GuaranteeBar />

      {/* Final CTA */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            Not sure which service <em style={{ color: '#34D48A', fontStyle: 'italic' }}>fits?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>Free audit. We&apos;ll tell you exactly where to focus first.</p>
          <a href="/contact" className="hover-cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)', transition: 'all 0.2s' }}>
            Get My Free Audit →
          </a>
        </div>
      </section>

      {/* Chat Widget — sirf services page pe, unmount hone per auto remove */}
      <LeadConnectorWidget />

      <style>{`
        @media(max-width:900px){
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}