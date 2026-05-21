// app/about/page.tsx
export const revalidate = 60

import type { Metadata } from 'next'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/client'

const ABOUT_QUERY = `*[_type == "aboutPage"][0]{
  heroHeading, heroParagraph1, heroParagraph2,
  "heroImage": { "url": heroImage.asset->url, "alt": heroImage.alt, "caption": heroImage.caption },
  "values": values[]{ "iconUrl": icon.asset->url, "iconAlt": icon.alt, title, description },
  seo { metaTitle, metaDescription, keywords, "ogImageUrl": ogImage.asset->url }
}`

const TEAM_QUERY = `*[_type == "teamMember"] | order(order asc) {
  name, role,
  "photo": { "url": photo.asset->url, "alt": photo.alt }
}`

const VALUES_DEFAULT = [
  { icon: 'icons8-outcome-64.png', iconBg: '#EEF2F9', title: 'Outcome-obsessed', description: "We track revenue, not impressions. Every decision is measured against \"Did this make the client more money?\"" },
  { icon: 'icons8-test-tube-100.png', iconBg: '#EDFBF3', title: 'We eat our own cooking', description: "We run ecommerce brands with the same strategies we use for clients. If it doesn't work for us, we don't sell it." },
  { icon: 'icons8-handshake-64.png', iconBg: '#FFFAEB', title: 'Small team, not a factory', description: "You'll know your strategist by name. We take on max 3 new clients/month." },
]

const TEAM_FALLBACK = [
  { name: 'Ikrash Ovais', role: 'CEO & Co-Founder', photo: null },
  { name: 'Iqrar', role: 'COO & Ads Lead', photo: null },
  { name: '[Name]', role: 'Account Manager', photo: null },
  { name: '[Name]', role: 'Developer', photo: null },
  { name: '[Name]', role: 'Designer', photo: null },
  { name: '[Name]', role: 'Video Editor', photo: null },
  { name: '[Name]', role: 'Social Manager', photo: null },
  { name: '[Name]', role: 'Content Writer', photo: null },
]

export async function generateMetadata(): Promise<Metadata> {
  const about = await sanityFetch<any>(ABOUT_QUERY)
  return {
    title: about?.seo?.metaTitle || 'About Us — AheadTech360',
    description: about?.seo?.metaDescription || 'Small team. Big results. We\'re a performance marketing agency based in Karachi, serving US brands.',
    keywords: about?.seo?.keywords || '',
    openGraph: {
      title: about?.seo?.metaTitle || 'About Us — AheadTech360',
      description: about?.seo?.metaDescription || '',
      url: 'https://aheadtech360.com/about',
      siteName: 'AheadTech360',
      images: about?.seo?.ogImageUrl ? [{ url: about.seo.ogImageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: about?.seo?.metaTitle || 'About Us — AheadTech360',
      description: about?.seo?.metaDescription || '',
    },
  }
}

export default async function AboutPage() {
  const [about, team] = await Promise.all([
    sanityFetch<any>(ABOUT_QUERY),
    sanityFetch<any[]>(TEAM_QUERY),
  ])

  const displayTeam = team?.length ? team : TEAM_FALLBACK

  // Use Sanity values if available (they'll have iconUrl), else use local defaults
  const displayValues = about?.values?.length ? about.values : VALUES_DEFAULT

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="about-hero-grid">
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>About us</div>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '16px' }}>
              {about?.heroHeading || <>Small team. <em style={{ color: '#25B472', fontStyle: 'italic' }}>Big results.</em></>}
            </h1>
            <p style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.7, marginBottom: '12px', fontFamily: 'var(--font-jakarta)' }}>
              {about?.heroParagraph1 || "We're a team of 11-50 based in Karachi, serving US brands. We also run our own ecommerce businesses — so every strategy we sell, we've tested with our own money first."}
            </p>
            <p style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.7, marginBottom: '20px', fontFamily: 'var(--font-jakarta)' }}>
              {about?.heroParagraph2 || "You'll know your team by name. We answer the phone. We send real reports with real numbers. No ghosting. Ever."}
            </p>
            <div style={{ fontSize: '13px', color: '#A4B3C4', padding: '12px 16px', background: '#F2F5F8', borderRadius: '8px', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>
              info@aheadtech360.com &nbsp;|&nbsp; +14695575651
            </div>
          </div>
          <div style={{ height: '320px', background: '#DFE5ED', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
            {about?.heroImage?.url ? (
              <>
                <Image src={about.heroImage.url} alt={about.heroImage.alt || 'Our team'} fill style={{ objectFit: 'cover' }} unoptimized />
                {about.heroImage.caption && (
                  <p style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,.5)', color: '#fff', fontSize: '12px', padding: '8px 14px', fontFamily: 'var(--font-jakarta)' }}>
                    {about.heroImage.caption}
                  </p>
                )}
              </>
            ) : (
              <div style={{ display: 'grid', placeItems: 'center', height: '100%', fontSize: '12px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Real team photo</div>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#F2F5F8', padding: '60px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Our Values</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '40px', lineHeight: 1.1 }}>
            What we believe.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="values-grid">
            {displayValues.map((w: any, i: number) => {
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

      {/* Team */}
      <section style={{ background: '#F2F5F8', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>The team</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(24px,3vw,36px)', color: '#1C2A42', marginBottom: '32px', lineHeight: 1.1 }}>
            The people who <em style={{ color: '#25B472', fontStyle: 'italic' }}>do the work.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }} className="team-grid">
            {displayTeam.map((member: any, i: number) => {
              const photoUrl = member.photo?.url || member.photo
              const photoAlt = member.photo?.alt || member.name
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '100%', aspectRatio: '1', background: '#DFE5ED', borderRadius: '16px', display: 'grid', placeItems: 'center', overflow: 'hidden', position: 'relative', marginBottom: '10px' }}>
                    {photoUrl ? (
                      <Image src={photoUrl} alt={photoAlt} fill style={{ objectFit: 'cover' }} unoptimized />
                    ) : (
                      <span style={{ fontSize: '10px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Photo</span>
                    )}
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#080E1C', fontFamily: 'var(--font-bricolage)' }}>{member.name}</h4>
                  <p style={{ fontSize: '12px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{member.role}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            Want to work with <em style={{ color: '#34D48A', fontStyle: 'italic' }}>real people?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>Start with a free audit. Meet the team on the first call.</p>
          <a href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)' }}>Get My Free Audit →</a>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  )
}
