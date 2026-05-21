'use client'
// components/sections/ServicesSection.tsx

import Image from 'next/image'
import Link from 'next/link'

interface Service {
  icon?: string     // local filename — e.g. "ads.svg" — public/icons/ (fallback)
  iconUrl?: string  // Sanity CDN URL (preferred when set)
  iconBg: string
  title: string
  description: string
  resultValue: string
  resultLabel: string
  slug?: string     // if set, card links to /services/[slug]
}

interface ServicesSectionProps {
  heading?: string
  subheading?: string
  services?: Service[]
}

const DEFAULT_SERVICES: Service[] = [
  { icon: 'icons8-post-ads-100.png',              iconBg: '#EEF2F9', slug: 'meta-ads',         title: 'We run your ads (Meta + Google)', description: 'Find the right people, show them the right message, send them to a page that converts. Test, kill losers, scale winners.', resultValue: '3.2x', resultLabel: 'Avg return' },
  { icon: 'icons8-google-web-search-100.png',     iconBg: '#EDFBF3', slug: 'seo',              title: 'We get you found on Google (SEO)', description: 'When people search for what you sell, you show up. Free traffic that compounds every month.', resultValue: '2.4x', resultLabel: 'More traffic' },
  { icon: 'icons8-electricity-96.png',            iconBg: '#F3E8FF', slug: 'content-production', title: 'We produce your content', description: 'UGC, video ads, product photos, VSLs, motion graphics — made to convert, not just look good.', resultValue: '7d', resultLabel: 'Turnaround' },
  { icon: 'icons8-email-96.png',                  iconBg: '#FFFAEB', slug: 'email-marketing',  title: 'We email your customers', description: 'Welcome emails. Cart reminders. Win-back campaigns. Makes money while you sleep.', resultValue: '22%', resultLabel: 'Revenue lift' },
  { icon: 'icons8-website-80.png',                iconBg: '#FEF3F2', slug: 'web-design',       title: 'We build your website', description: 'Shopify. WordPress. Custom. Fast, clean, built to sell — not just look pretty.', resultValue: '<2s', resultLabel: 'Load time' },
  { icon: 'icons8-social-media-marketing-96.png', iconBg: '#EEF2F9', slug: 'social-media',     title: 'We handle your social media', description: 'Content that builds trust so your ads work even better. Plan it, make it, post it.', resultValue: '3x', resultLabel: 'Engagement' },
  { icon: 'icons8-flow-chart-64.png',             iconBg: '#EEF2FF', slug: 'app-dev',          title: 'We build your mobile app', description: 'iOS, Android, React Native. MVP to App Store in 12 weeks. Strategy-first — we scope what to cut, then build what ships.', resultValue: '12wk', resultLabel: 'MVP avg' },
]

function parseHeading(text: string) {
  return text.split(/(\[em\].*?\[\/em\])/g).map((part, i) => {
    if (part.startsWith('[em]'))
      return <em key={i} style={{ color: '#25B472', fontStyle: 'italic' }}>{part.replace('[em]', '').replace('[/em]', '')}</em>
    return <span key={i}>{part}</span>
  })
}

function ServiceCard({ service }: { service: Service }) {
  const imgSrc = service.iconUrl || (service.icon ? `/icons/${service.icon}` : null)

  const card = (
    <div
      className="svc-card"
      style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', padding: '28px', display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: '20px', alignItems: 'center', transition: 'all 0.3s' }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#25B472'; el.style.boxShadow = '0 4px 16px rgba(8,14,28,.08)'; el.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = '#DFE5ED'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
    >
      {/* Icon */}
      <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: service.iconBg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={service.title}
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
            unoptimized={!!service.iconUrl}
          />
        ) : (
          <div style={{ width: 40, height: 40 }} />
        )}
      </div>

      {/* Text */}
      <div>
        <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#080E1C', marginBottom: '3px', fontFamily: 'var(--font-bricolage)' }}>{service.title}</h3>
        <p style={{ fontSize: '13.5px', color: '#6E8098', lineHeight: 1.5, fontFamily: 'var(--font-jakarta)' }}>{service.description}</p>
      </div>

      {/* Result Badge */}
      <div className="svc-result" style={{ background: '#EDFBF3', borderRadius: '8px', padding: '12px 18px', textAlign: 'center', whiteSpace: 'nowrap', flexShrink: 0 }}>
        <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '24px', fontWeight: 800, color: '#1C8F5A', lineHeight: 1 }}>{service.resultValue}</div>
        <div style={{ fontSize: '10px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, fontFamily: 'var(--font-jetbrains)', marginTop: '3px' }}>{service.resultLabel}</div>
      </div>
    </div>
  )

  if (service.slug) {
    return (
      <Link href={`/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        {card}
      </Link>
    )
  }
  return card
}

export default function ServicesSection({
  heading = 'Six things. [em]All make you money.[/em]',
  subheading = 'No fluff. No "brand awareness." Every service ties to revenue.',
  services = DEFAULT_SERVICES,
}: ServicesSectionProps) {
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="services-container">
        <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>What we do</div>
        <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.3px', fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '12px' }}>{parseHeading(heading)}</h2>
        <p style={{ fontSize: '15px', color: '#6E8098', marginBottom: '44px', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>{subheading}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="services-list">
          {services.map((svc, i) => <ServiceCard key={i} service={svc} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .services-container { padding: 52px 16px !important; }
          .svc-card { grid-template-columns: 1fr !important; gap: 12px !important; padding: 20px !important; }
          .svc-result { justify-self: start; }
        }
      `}</style>
    </section>
  )
}
