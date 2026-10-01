// components/sections/ServicesSection.tsx
// Full 11-service directory for the /services hub — fashion/apparel repositioning.
// Individual service pages (/web-design, /paid, etc.) now exist, so all cards are live.
import Link from 'next/link'

interface Service {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  live?: boolean
}

const DEFAULT_SERVICES: Service[] = [
  { href: '/web-design', title: 'Web Design', description: 'A store people trust the second it loads.', icon: <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />, live: true },
  { href: '/web-dev', title: 'Web Development', description: 'Fast, mobile first, built to convert on any platform.', icon: <path d="M4 9l1-5h14l1 5M4 9v10h16V9M4 9h16M9 19v-5h6v5" />, live: true },
  { href: '/paid', title: 'Paid Advertising', description: 'Ads that bring the right people and scale what works.', icon: <><path d="M3 11v2l12 5V6L3 11z" /><path d="M15 8a4 4 0 010 8" /><path d="M6 13v5h3v-4" /></>, live: true },
  { href: '/social', title: 'Social Media', description: 'A presence that builds trust before the click.', icon: <path d="M4 5h16v11H9l-5 4V5z" />, live: true },
  { href: '/creative', title: 'Creative Production', description: 'Scroll stopping ads and content that move people to your store.', icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />, live: true },
  { href: '/chat', title: 'Human Live Chat (AI)', description: 'Every visitor question answered instantly, day and night.', icon: <path d="M4 5h16v11H9l-5 4V5z" />, live: true },
  { href: '/voice', title: 'Human Voice Agent (AI)', description: 'Calls answered and orders assisted around the clock.', icon: <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" />, live: true },
  { href: '/seo', title: 'SEO', description: 'Buyers finding you when they search, without paying for every click.', icon: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4-4" /></>, live: true },
  { href: '/retarget', title: 'Retargeting & Remarketing', description: 'The visitors who left, brought back to buy.', icon: <><path d="M4 12a8 8 0 0114-5l2 2" /><path d="M20 12a8 8 0 01-14 5l-2-2" /><path d="M18 4v5h-5M6 20v-5h5" /></>, live: true },
  { href: '/reporting', title: 'Reporting', description: 'Plain language answers to what is working and what it earned.', icon: <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7" />, live: true },
  { href: '/email', title: 'Email & SMS Retention', description: 'Customers who come back and grow in value.', icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>, live: true },
]

function ServiceCard({ href, icon, title, description, live }: Service) {
  const content = (
    <>
      <span style={{ display: 'grid', placeItems: 'center', width: '44px', height: '44px', borderRadius: '11px', background: '#EDFBF3', color: '#1C8F5A', marginBottom: '14px' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>{icon}</svg>
      </span>
      <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', marginBottom: '6px' }}>{title}</h3>
      <p style={{ color: '#6E8098', fontSize: '.95rem', lineHeight: 1.6 }}>{description}</p>
    </>
  )
  const cardStyle: React.CSSProperties = { display: 'block', background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', padding: '26px', boxShadow: '0 2px 12px rgba(8,14,28,.07)', textDecoration: 'none' }

  if (live) {
    return <Link href={href} style={cardStyle}>{content}</Link>
  }
  return <div title="Coming soon" style={cardStyle}>{content}</div>
}

export default function ServicesSection({ services = DEFAULT_SERVICES }: { services?: Service[] }) {
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="services-container">
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {services.map((svc) => <ServiceCard key={svc.href} {...svc} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) and (min-width: 901px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 900px) {
          .services-container { padding: 52px 16px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
