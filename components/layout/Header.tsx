'use client'
// components/layout/Header.tsx
// Logo: public/logo.png se aata hai — bas file wahan rakhein

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavLink { label: string; href: string }

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Share Your Story', href: '/story' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
]

function ResultsDropdown() {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        style={{ color: '#3E5068', fontSize: '13.5px', fontWeight: 500, fontFamily: 'var(--font-jakarta)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}
        className="hover-blue-link"
      >
        Results
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '8px', zIndex: 9999, minWidth: '164px' }}>
          <div style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '12px', padding: '6px', boxShadow: '0 8px 24px rgba(8,14,28,.12)' }}>
            <Link href="/results" className="dropdown-item"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, color: '#1C2A42', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
              <span style={{ fontSize: '14px' }}>📈</span> Case Studies
            </Link>
            <Link href="/portfolio" className="dropdown-item"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, color: '#1C2A42', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
              <span style={{ fontSize: '14px' }}>🖥️</span> Portfolio
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header({ navLinks = DEFAULT_NAV_LINKS }: { navLinks?: NavLink[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 900) setMobileOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #DFE5ED',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        transition: 'box-shadow 0.2s',
        boxShadow: scrolled ? '0 4px 16px rgba(8,14,28,.08)' : 'none',
      }}>

        {/* ── LOGO ── */}
        <Link href="/" aria-label="AheadTech360 Home">
          <Image
            src="/images/Ahead-Logo-right-balaning.png"
            alt="AheadTech360"
            width={180}
            height={60}
            style={{ objectFit: 'contain', height: '44px', width: 'auto' }}
            priority
          />
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} aria-label="Main navigation">
          <div id="desktop-nav-links" className="hidden-mobile"
            style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {navLinks.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href}
                style={{ color: '#3E5068', fontSize: '13.5px', fontWeight: 500, transition: 'color 0.2s', fontFamily: 'var(--font-jakarta)', whiteSpace: 'nowrap' }}
                className="hover-blue-link">
                {link.label}
              </Link>
            ))}
            <ResultsDropdown />
            {navLinks.slice(3).map((link) => (
              <Link key={link.href} href={link.href}
                style={{ color: '#3E5068', fontSize: '13.5px', fontWeight: 500, transition: 'color 0.2s', fontFamily: 'var(--font-jakarta)', whiteSpace: 'nowrap' }}
                className="hover-blue-link">
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/contact"
            style={{ background: '#25B472', color: '#fff', padding: '9px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '13px', fontFamily: 'var(--font-jakarta)', transition: 'all 0.2s', whiteSpace: 'nowrap', display: 'inline-block', lineHeight: 1.4, marginLeft: '8px' }}
            className="hover-cta">
            Free Audit →
          </Link>

          {/* Hamburger — mobile only */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{ background: 'none', border: '1px solid #DFE5ED', borderRadius: '6px', padding: '6px 8px', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '4px', alignItems: 'center', justifyContent: 'center' }}
            className="hamburger-btn">
            <span style={{ display: 'block', width: '18px', height: '2px', background: '#3E5068', borderRadius: '2px', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
            <span style={{ display: 'block', width: '18px', height: '2px', background: '#3E5068', borderRadius: '2px', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: '18px', height: '2px', background: '#3E5068', borderRadius: '2px', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{ position: 'fixed', top: '34px', left: 0, right: 0, background: '#fff', borderBottom: '1px solid #DFE5ED', zIndex: 98, padding: '16px 20px 20px', boxShadow: '0 8px 24px rgba(8,14,28,.12)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {navLinks.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ color: '#3E5068', fontSize: '15px', fontWeight: 600, padding: '10px 12px', borderRadius: '8px', fontFamily: 'var(--font-jakarta)' }}>
                {link.label}
              </Link>
            ))}
            <Link href="/results" onClick={() => setMobileOpen(false)}
              style={{ color: '#3E5068', fontSize: '15px', fontWeight: 600, padding: '10px 12px', borderRadius: '8px', fontFamily: 'var(--font-jakarta)' }}>
              Case Studies
            </Link>
            <Link href="/portfolio" onClick={() => setMobileOpen(false)}
              style={{ color: '#6E8098', fontSize: '14px', fontWeight: 600, padding: '8px 12px 8px 28px', borderRadius: '8px', fontFamily: 'var(--font-jakarta)' }}>
              ↳ Portfolio
            </Link>
            {navLinks.slice(3).map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ color: '#3E5068', fontSize: '15px', fontWeight: 600, padding: '10px 12px', borderRadius: '8px', fontFamily: 'var(--font-jakarta)' }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              style={{ background: '#25B472', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textAlign: 'center', marginTop: '8px', display: 'block', fontFamily: 'var(--font-jakarta)' }}>
              Get Free Audit →
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #desktop-nav-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          header { top: 34px !important; height: 56px !important; padding: 0 16px !important; }
        }
        .hover-blue-link:hover { color: #213D79 !important; }
        .dropdown-item:hover { background: #F2F5F8 !important; }
        .hover-cta:hover { background: #1C8F5A !important; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(37,180,114,0.25); }
      `}</style>
    </>
  )
}