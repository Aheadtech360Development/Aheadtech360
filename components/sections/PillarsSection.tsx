// components/sections/PillarsSection.tsx
// "One system. Five ways your revenue grows." — home-page pillars grid.
// Replaces ServicesSection on the home page only; ServicesSection.tsx itself is untouched
// and still used as-is by /services.
import type { ReactNode } from 'react'
import Link from 'next/link'

interface Pillar {
  href: string
  icon: ReactNode
  title: string
  description: string
}

const PILLARS: Pillar[] = [
  {
    href: '/web-design',
    icon: <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />,
    title: 'More buyers from the same traffic',
    description: 'Turn the visitors you already have into paying customers.',
  },
  {
    href: '/web-dev',
    icon: <path d="M4 9l1-5h14l1 5M4 9v10h16V9M4 9h16M9 19v-5h6v5" />,
    title: 'A store built to convert',
    description: 'Fast, mobile first, so cold traffic buys and order value climbs.',
  },
  {
    href: '/paid',
    icon: (
      <>
        <path d="M3 11v2l12 5V6L3 11z" />
        <path d="M15 8a4 4 0 010 8" />
        <path d="M6 13v5h3v-4" />
      </>
    ),
    title: 'Ads that bring the right people',
    description: 'Build trust, bring buyers in, scale what works.',
  },
  {
    href: '/creative',
    icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />,
    title: 'Creative that stops the scroll',
    description: 'Content people watch, made to move them to your store.',
  },
  {
    href: '/email',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    title: 'Customers who come back',
    description: 'Email and SMS that grow lifetime value.',
  },
]

const cardBase: React.CSSProperties = {
  position: 'relative',
  background: '#fff',
  border: '1px solid #DFE5ED',
  borderRadius: '16px',
  padding: '26px',
  boxShadow: '0 2px 12px rgba(8,14,28,.07)',
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '26px', height: '26px' }}>
      {children}
    </svg>
  )
}

function PillarCard({ href, icon, title, description }: Pillar) {
  return (
    <Link href={href} style={{ ...cardBase, display: 'block', textDecoration: 'none' }}>
      <span style={{ display: 'grid', placeItems: 'center', width: '52px', height: '52px', borderRadius: '13px', background: '#EDFBF3', color: '#1C8F5A', marginBottom: '14px' }}>
        <Icon>{icon}</Icon>
      </span>
      <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', marginBottom: '6px' }}>{title}</h3>
      <p style={{ color: '#6E8098', fontSize: '.95rem', lineHeight: 1.6 }}>{description}</p>
    </Link>
  )
}

export default function PillarsSection() {
  return (
    <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '.72rem',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#1C8F5A',
            fontWeight: 600,
            marginBottom: '14px',
          }}
        >
          The system
        </span>
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(1.55rem,3.2vw,2.3rem)',
            fontWeight: 800,
            color: '#1C2A42',
            lineHeight: 1.13,
            letterSpacing: '-0.02em',
          }}
        >
          One system. Five ways your revenue grows.
        </h2>

        <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginTop: '34px' }}>
          {PILLARS.map((p) => (
            <PillarCard key={p.title} {...p} />
          ))}
          <Link
            href="/services"
            style={{ ...cardBase, display: 'block', background: '#213D79', border: '1px solid #213D79', textDecoration: 'none' }}
          >
            <span style={{ display: 'grid', placeItems: 'center', width: '52px', height: '52px', borderRadius: '13px', background: 'rgba(255,255,255,.16)', color: '#fff', marginBottom: '14px' }}>
              <Icon>
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </Icon>
            </span>
            <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#fff', marginBottom: '6px' }}>Explore all services</h3>
            <p style={{ color: '#fff', fontSize: '.95rem', lineHeight: 1.6 }}>Eleven pieces. One machine.</p>
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:1100px) and (min-width:901px){ .pillars-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:900px){ .pillars-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
