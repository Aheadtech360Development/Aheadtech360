// components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  phone?: string
  email?: string
  address?: string
  tagline?: string
}

export default function Footer({
  phone = '+14695575651',
  email = 'info@aheadtech360.com',
  // address = '30 N Gould St Ste N, Sheridan, WY 82801',
  tagline = 'We help small businesses make more money from their marketing. Simple as that.',
}: FooterProps) {
  return (
    <footer style={{ background: '#080E1C', borderTop: '1px solid rgba(255,255,255,.04)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '52px 32px 24px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px' }} className="footer-grid">

        {/* Brand */}
        <div>
          <div style={{ marginBottom: '12px' }}>
            <Image
              src="/images/Ahead-Logo-right-balaning.png"
              alt="AheadTech360"
              width={160}
              height={60}
              style={{ objectFit: 'contain', height: '60px', width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.6, fontFamily: 'var(--font-jakarta)', marginBottom: '8px' }}>
            {tagline}
          </p>
          <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>
            📞 {phone}<br />
            📧 {email}<br />
            {/* 📍 {address} */}
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>Company</h4>
          {[{ label: 'About', href: '/about' }, { label: 'Results', href: '/results' }, { label: 'Share Your Story', href: '/story' }, { label: 'Contact', href: '/contact' }, { label: 'Industries', href: '/industries' }, { label: 'Locations', href: '/city' }].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: '#6E8098', marginBottom: '9px', fontFamily: 'var(--font-jakarta)', transition: 'color 0.2s' }} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>Services</h4>
          {['Ads', 'SEO', 'CRO', 'Web', 'Email', 'Social Media'].map(s => (
            <Link key={s} href="/services" style={{ display: 'block', fontSize: '13px', color: '#6E8098', marginBottom: '9px', fontFamily: 'var(--font-jakarta)', transition: 'color 0.2s' }} className="footer-link">{s}</Link>
          ))}
        </div>

        {/* Free stuff */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>Free stuff</h4>
          {[{ label: 'Blog', href: '/blog' }, { label: 'Guides & Tools', href: '/resources' }, { label: 'Case Studies', href: '/results' }].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: '#6E8098', marginBottom: '9px', fontFamily: 'var(--font-jakarta)', transition: 'color 0.2s' }} className="footer-link">{l.label}</Link>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '16px 32px', borderTop: '1px solid rgba(255,255,255,.04)', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', flexWrap: 'wrap', gap: '8px' }} className="footer-bottom">
        <span>© 2026 AheadTech360 LLC. All rights reserved.</span>
        <div>
          <Link href="/privacy" style={{ color: '#6E8098', marginLeft: '14px' }} className="footer-link">Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#6E8098', marginLeft: '14px' }} className="footer-link">Terms & Conditions</Link>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #fff !important; }
        @media(max-width:900px){
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; padding: 40px 16px 20px !important; }
          .footer-bottom { padding: 16px !important; }
        }
        @media(max-width:480px){ .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
