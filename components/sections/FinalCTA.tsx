// components/sections/FinalCTA.tsx
// Closing CTA band — "Tell us about your store. We will tell you what we see."
import Link from 'next/link'

interface FinalCTAProps {
  heading?: string
}

export default function FinalCTA({
  heading = 'Tell us about your store. We will tell you what we see.',
}: FinalCTAProps) {
  return (
    <section
      style={{
        position: 'relative',
        padding: '74px 32px',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)',
      }}
    >
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13 }}>
          {heading}
        </h2>
        <div style={{ marginTop: '24px' }}>
          <Link
            href="/apply"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '.82rem 1.55rem',
              borderRadius: '12px',
              background: '#25B472',
              color: '#05261a',
              textDecoration: 'none',
            }}
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  )
}
