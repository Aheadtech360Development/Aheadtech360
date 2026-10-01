// components/layout/Footer.tsx
// Rebuilt for the fashion/apparel repositioning: Company / Services / Programs & Proof +
// newsletter opt-in. Most "Services" and "Programs & Proof" links point to pages that don't
// exist yet, so they render as non-navigating placeholders (see plan for the full mapping;
// old footer is in _backup/pre-home-redesign for rollback).
import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  phone?: string
  email?: string
  address?: string
  tagline?: string
}

interface FooterLink { label: string; href: string; live?: boolean }

const COMPANY_LINKS: FooterLink[] = [
  { label: 'Home', href: '/', live: true },
  { label: 'About', href: '/about', live: true },
  { label: 'What Working With Us Looks Like', href: '/how', live: true },
  { label: 'Reviews', href: '/reviews', live: true },
  { label: 'FAQ', href: '/faq', live: true },
  { label: 'Talk to Us', href: '/apply', live: true },
]

const SERVICE_LINKS: FooterLink[] = [
  { label: 'Web Design', href: '/web-design', live: true },
  { label: 'Web Development', href: '/web-dev', live: true },
  { label: 'Paid Advertising', href: '/paid', live: true },
  { label: 'Social Media', href: '/social', live: true },
  { label: 'Creative Production', href: '/creative', live: true },
  { label: 'Live Chat', href: '/chat', live: true },
  { label: 'Voice Agent', href: '/voice', live: true },
  { label: 'SEO', href: '/seo', live: true },
  { label: 'Retargeting', href: '/retarget', live: true },
  { label: 'Reporting', href: '/reporting', live: true },
  { label: 'Email & SMS', href: '/email', live: true },
]

const PROGRAM_LINKS: FooterLink[] = [
  { label: 'Fashion Growth System', href: '/fgs', live: true },
  { label: 'Fashion Scale System', href: '/fss', live: true },
  { label: 'Our Clients', href: '/clients', live: true },
  { label: 'EZDTFMaker', href: '/case-ez', live: true },
  { label: 'Maniyas', href: '/case-man', live: true },
  { label: 'FreshFits', href: '/case-fresh', live: true },
  { label: 'EzTmart', href: '/case-ezt', live: true },
  { label: 'AF Blanks', href: '/case-afblanks', live: true },
  { label: 'Blog', href: '/blog', live: true },
]

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.live) {
    return (
      <Link href={link.href} style={{ display: 'block', fontSize: '13px', color: '#6E8098', marginBottom: '9px', fontFamily: 'var(--font-jakarta)', transition: 'color 0.2s' }} className="footer-link">
        {link.label}
      </Link>
    )
  }
  return (
    <span title="Coming soon" style={{ display: 'block', fontSize: '13px', color: '#6E8098', marginBottom: '9px', fontFamily: 'var(--font-jakarta)', cursor: 'default' }}>
      {link.label}
    </span>
  )
}

export default function Footer({
  phone = '+14695575651',
  email = 'info@aheadtech360.com',
  tagline = 'Growth Marketing for $500K-$10M Fashion & Apparel Brands',
}: FooterProps) {
  return (
    <footer style={{ background: '#080E1C', borderTop: '4px solid #25B472' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '52px 32px 24px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr) 1.3fr', gap: '32px' }} className="footer-grid">

        {/* Company */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>Company</h4>
          {COMPANY_LINKS.map(l => <FooterLinkItem key={l.href} link={l} />)}
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>Services</h4>
          {SERVICE_LINKS.map(l => <FooterLinkItem key={l.href} link={l} />)}
        </div>

        {/* Programs & Proof */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>Programs & Proof</h4>
          {PROGRAM_LINKS.map(l => <FooterLinkItem key={l.href} link={l} />)}
        </div>

        {/* Newsletter opt-in */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>15 Conversion Killers</h4>
          <p style={{ fontSize: '13px', color: '#6E8098', marginBottom: '12px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.6 }}>
            The mistakes that quietly cost apparel stores orders every day.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <input type="email" placeholder="you@brand.com" aria-label="Email" disabled title="Coming soon"
              style={{ flex: 1, minWidth: '150px', padding: '.58rem .8rem', borderRadius: '9px', border: '1px solid #33477a', background: '#0f1f44', color: '#fff' }} />
            <span title="Coming soon" style={{ background: '#25B472', color: '#05261a', padding: '.52rem 1rem', borderRadius: '10px', fontWeight: 700, fontSize: '13px', fontFamily: 'var(--font-jakarta)', cursor: 'default', display: 'inline-block' }}>
              Get the PDF
            </span>
          </div>
          <p style={{ fontSize: '12px', color: '#6E8098', marginTop: '14px', fontFamily: 'var(--font-jakarta)' }}>
            📞 {phone}<br />
            📧 {email}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '16px 32px', borderTop: '1px solid rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', flexWrap: 'wrap', gap: '12px' }} className="footer-bottom">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
          <Image
            src="/images/Ahead-Logo-right-balaning.png"
            alt="AheadTech360"
            width={100}
            height={40}
            style={{ objectFit: 'contain', height: '24px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
        </span>
        <span>{tagline}</span>
        <div>
          <Link href="/privacy" style={{ color: '#6E8098', marginLeft: '14px' }} className="footer-link">Privacy</Link>
          <Link href="/terms" style={{ color: '#6E8098', marginLeft: '14px' }} className="footer-link">Terms</Link>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #fff !important; }
        @media(max-width:900px){
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; padding: 40px 16px 20px !important; }
          .footer-bottom { padding: 16px !important; }
        }
        @media(max-width:560px){ .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
