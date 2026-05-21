'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// PLATFORM SVG ICONS
// ─────────────────────────────────────────────────────────────────────────────

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.36 18.1 22.56 15.3 22.56 12.25z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A10.99 10.99 0 001 12c0 1.77.43 3.45 1.18 4.93l3.66-2.83z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function ShopifyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15.337 2.14a.4.4 0 00-.37-.05c-.02.007-.48.14-1.22.36-.26-.76-.65-1.46-1.1-1.96C12.07.18 11.54 0 11 0c-.02 0-.05 0-.07.002l-.28.04C10.49.02 10.2 0 9.89 0c-1.1 0-2.16.83-3.03 2.34-.61 1.07-1.07 2.4-1.2 3.44L3.32 6.67c-.7.22-1.12.34-1.14.35a.44.44 0 00-.3.38L.01 23.56A.4.4 0 00.4 24l14.6-2.73-.01-.01 3.6-.67a.4.4 0 00.33-.4l-.96-17.8a.4.4 0 00-.6-.25zm-3.37.8c-.34.104-.72.22-1.13.34-.003-.12-.01-.24-.02-.36-.04-.7-.19-1.34-.43-1.87.54.2.97.72 1.25 1.42.11.27.21.6.33.46z" fill="#95BF47"/>
      <path d="M15.337 2.14l-.04-.01c-.12.36-.26.73-.43 1.1-.61 1.36-1.5 2.08-2.38 2.08-.06 0-.12 0-.18-.01L11.5 6.8l-.5 11.5 7.8-1.46-.96-17.8a.4.4 0 00-.5-.92z" fill="#5E8E3E"/>
      <path d="M11 5.3c-.9 0-1.3.5-1.3.5L9 12l2.5 1 .5-7.7z" fill="white"/>
    </svg>
  )
}

function ClutchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#17313B"/>
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Arial">C</text>
    </svg>
  )
}

function GoodFirmsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#E8392D"/>
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Arial">G</text>
    </svg>
  )
}

function UpworkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#14A800"/>
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="Arial">U</text>
    </svg>
  )
}

function FiverrIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#1DBF73"/>
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Arial">fi</text>
    </svg>
  )
}

function StarIcon() {
  return <span style={{ color: '#F79009', fontSize: '13px' }}>★</span>
}

function Stars() {
  return <span>{[1,2,3,4,5].map(i => <StarIcon key={i} />)}</span>
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

type Platform = 'Google' | 'Shopify Partner' | 'Clutch' | 'GoodFirms' | 'Upwork' | 'Fiverr'

interface Review {
  platform:  Platform
  quote:     string
  bold?:     string
  name:      string
  role:      string
  initials:  string
  badge?:    'Verified' | 'Top Rated'
  image?:    string
}

interface Video {
  featured?:   boolean
  youtubeId?:  string       // YouTube video ID (e.g. 'dQw4w9WgXcQ')
  videoFile?:  string       // local file path e.g. '/videos/maniyas.mp4'
  placeholder: string
  duration:    string
  quote:       string
  person:      string
  company:     string
}

const PLATFORM_RATINGS = [
  { platform: 'Google' as Platform,         rating: '4.9', sub: '42 reviews',   icon: <GoogleIcon size={18}/> },
  { platform: 'Shopify Partner' as Platform, rating: '5.0', sub: 'Expert badge', icon: <ShopifyIcon size={18}/> },
  { platform: 'Clutch' as Platform,          rating: '4.9', sub: '18 reviews',   icon: <ClutchIcon size={18}/> },
  { platform: 'GoodFirms' as Platform,       rating: '4.8', sub: '14 reviews',   icon: <GoodFirmsIcon size={18}/> },
  { platform: 'Upwork' as Platform,          rating: '5.0', sub: 'Top Rated Plus',icon: <UpworkIcon size={18}/> },
]

const VIDEOS: Video[] = [
  { featured: true,  videoFile: '/videos/at360.mp4', placeholder: 'Featured Video — Maniyas Founder', duration: '4:32', quote: '"From 0 to Rs.22.5M in 10 months"', person: 'Maniyas Founder', company: 'Pakistani Fashion D2C' },
  { videoFile: '/videos/ezt.mp4', placeholder: 'Video Testimonial — Lofty', duration: '2:14', quote: '"They saved my UK DTF biz"', person: 'Jason', company: 'Lofty Creations' },
  { placeholder: 'Video Testimonial — Artaboon', duration: '3:08', quote: '"Pixel was broken. Nobody told me."', person: 'Artaboon', company: 'Piplytics' },
  { placeholder: 'Video Testimonial — Maaz Driply', duration: '1:48', quote: '"Built our app in 90 days"',   person: 'Maaz',          company: 'Driply (AI Fashion)' },
  { placeholder: 'Video Testimonial — Stellar',  duration: '2:55', quote: '"1,185 leads at $6.48 CPL"',       person: 'Stellar Career', company: 'Stellar Career College' },
]

const REVIEWS: Review[] = [
  { platform: 'Clutch',         quote: 'AT360 didn\'t just run our ads — they ', bold: 'rebuilt our entire revenue engine.', name: 'M. Asad',       role: 'Founder, Maniyas',        initials: 'MA', badge: 'Verified', image: '/images/clutch/cc.jpeg' },
  { platform: 'Shopify Partner',quote: 'Hired them for a basic Shopify audit. Got a ', bold: 'full revenue diagnostic, CRO wireframe, and an Omnisend flow blueprint', name: 'Jen K.',        role: 'Owner, Coastal Threads',   initials: 'JK', badge: 'Verified', image: '/images/shopify/ff.jpeg' },
  { platform: 'Shopify Partner',quote: 'Shopify build was ', bold: 'pixel-perfect to the wireframe.', name: 'S. Raza',       role: 'Founder, ApparelHub',       initials: 'SR', badge: 'Verified', image: '/images/shopify/tt.jpeg' },
  { platform: 'Shopify Partner',quote: 'App stack was a mess — ', bold: '12 redundant apps removed, site speed doubled overnight.', name: 'H. Kamran',     role: 'Founder, UrbanWear',        initials: 'HK', badge: 'Verified', image: '/images/shopify/gg.jpeg' },
  { platform: 'Shopify Partner',quote: 'Migrated us from WooCommerce to Shopify in 3 weeks. ', bold: 'Zero downtime. All data intact.', name: 'P. Malik',      role: 'Owner, PrintHouse',         initials: 'PM', badge: 'Verified', image: '/images/shopify/pp.jpeg' },
  { platform: 'GoodFirms',      quote: 'Hired AT360 after burning $40K with another agency. ', bold: 'First month with AT360 broke even. Third month profitable.', name: 'Maaz K.',       role: 'Founder, Driply',           initials: 'MK', badge: 'Verified', image: '/images/goodfirm/kk.jpeg' },
  { platform: 'Google',         quote: 'Iqrar walked me through every single change in a weekly Loom. ', bold: 'I actually understand my ad account now.', name: 'Jason M.',      role: 'Lofty Creations · UK',      initials: 'JM', badge: 'Verified', image: '/images/google/x.jpeg' },
  { platform: 'Google',         quote: 'Honest, fast, and they actually pick up the phone. Other agencies treated us like a number. ', bold: 'AT360 treated us like a partner.', name: 'D. Khan',       role: 'CEO, FreshCo',              initials: 'DK', badge: 'Verified', image: '/images/google/xx.jpeg' },
  { platform: 'Google',         quote: 'Their UGC pipeline is legit. ', bold: '10 creators sourced, briefed, and shipped in 12 days.', name: 'TrashedPunk',  role: 'Streetwear Founder',        initials: 'TP', badge: 'Verified', image: '/images/google/xxx.jpeg' },
  { platform: 'Google',         quote: 'Google Shopping campaigns set up from scratch. ', bold: 'ROAS hit 5.2x in the first 45 days.', name: 'F. Ahmed',      role: 'Founder, SportsPK',         initials: 'FA', badge: 'Verified', image: '/images/google/xxxx.jpeg' },
  { platform: 'Google',         quote: 'Email flows were non-existent before AT360. ', bold: 'Now 28% of our revenue is email-attributed.', name: 'S. Khan',       role: 'CEO, LuxeBags',             initials: 'SK', badge: 'Verified', image: '/images/google/xxxxx.jpeg' },
  { platform: 'Google',         quote: 'Issues flagged at night, fixed by morning. ', bold: 'Response time is unlike any agency we\'ve worked with.', name: 'R. Ali',        role: 'Founder, TechHub',          initials: 'RA', badge: 'Verified', image: '/images/google/xxxxxx.jpeg' },
]

const CERTS = [
  { icon: '🛍️', name: 'Shopify Partner',   sub: 'Expert Level',    highlight: false },
  { icon: '📊', name: 'Meta Business',     sub: 'Partner',          highlight: false },
  { icon: '🔵', name: 'Google Partner',    sub: 'Certified',        highlight: false },
  { icon: 'PK', name: 'PSEB Registered',  sub: 'Verified Export',  highlight: true  },
  { icon: '🏆', name: 'Clutch Top',        sub: '2025 Agency',      highlight: false },
  { icon: '⭐', name: 'GoodFirms',         sub: 'Top Marketing',    highlight: false },
]

const REVIEW_FILTERS: (Platform | 'All Reviews')[] = ['All Reviews', 'Shopify Partner', 'Clutch', 'GoodFirms', 'Google']

function platformIcon(p: Platform, size = 14) {
  if (p === 'Google')         return <GoogleIcon size={size} />
  if (p === 'Shopify Partner') return <ShopifyIcon size={size} />
  if (p === 'Clutch')          return <ClutchIcon size={size} />
  if (p === 'GoodFirms')       return <GoodFirmsIcon size={size} />
  if (p === 'Upwork')          return <UpworkIcon size={size} />
  if (p === 'Fiverr')          return <FiverrIcon size={size} />
}

// ─────────────────────────────────────────────────────────────────────────────
// RATING CARD
// ─────────────────────────────────────────────────────────────────────────────

function RatingCard({ pr }: { pr: typeof PLATFORM_RATINGS[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#112040' : '#0D1B35', border: `1px solid ${hovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '14px', padding: '22px 32px', minWidth: '170px', textAlign: 'center', transition: 'all 0.2s', transform: hovered ? 'translateY(-3px)' : 'translateY(0)', boxShadow: hovered ? '0 10px 28px rgba(0,0,0,0.4)' : 'none', flex: '1 1 150px', maxWidth: '220px', cursor: 'default' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', marginBottom: '12px' }}>
        {pr.icon}
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', color: '#A4B3C4', fontFamily: 'var(--font-jetbrains)' }}>{pr.platform.toUpperCase()}</span>
      </div>
      <div style={{ marginBottom: '8px' }}><Stars /></div>
      <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '30px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{pr.rating}</div>
      <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', marginTop: '5px' }}>{pr.sub}</div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'grid', placeItems: 'center', padding: '20px', backdropFilter: 'blur(6px)' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '92vw', maxHeight: '92vh' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '-48px', right: 0, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '18px', cursor: 'pointer', lineHeight: 1, borderRadius: '8px', padding: '8px 16px', fontFamily: 'var(--font-jakarta)', fontWeight: 700 }}
        >
          ✕ Close
        </button>
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: '92vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 24px 80px rgba(0,0,0,0.7)', display: 'block' }}
        />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO MODAL
// ─────────────────────────────────────────────────────────────────────────────

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const isLocal = videoId.startsWith('/')

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'grid', placeItems: 'center', padding: '20px' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '900px', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
        {isLocal ? (
          <video
            src={videoId}
            autoPlay
            controls
            style={{ width: '100%', height: '100%', background: '#000' }}
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        )}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '-44px', right: 0, background: 'transparent', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', lineHeight: 1 }}
        >
          ✕
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO CARD
// ─────────────────────────────────────────────────────────────────────────────

function VideoCard({ v, large, onClick }: { v: Video; large?: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', background: '#0F1729', flex: '1 1 0', aspectRatio: '9/16', minHeight: '300px' }}
    >
      {/* Background — autoplay muted video or dark placeholder */}
      {v.videoFile ? (
        <video
          src={v.videoFile}
          autoPlay
          loop
          muted
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,#0D1B2E,#0A1628)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '11px', color: '#3E5068', fontFamily: 'var(--font-jakarta)', fontStyle: 'italic' }}>[{v.placeholder}]</span>
        </div>
      )}

      {/* Duration badge */}
      <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-jetbrains)', padding: '3px 8px', borderRadius: '6px' }}>
        {v.duration}
      </div>

      {/* Play / Unmute button */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: large ? '72px' : '52px', height: large ? '72px' : '52px', borderRadius: '50%', background: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, background 0.2s', transform: hovered ? 'scale(1.1)' : 'scale(1)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
          {v.videoFile ? (
            /* muted-speaker icon — video is autoplaying silently, click to watch with sound */
            <svg width={large ? 24 : 18} height={large ? 24 : 18} viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#0F1729"/>
              <line x1="16" y1="9" x2="22" y2="15" stroke="#0F1729" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="9" x2="16" y2="15" stroke="#0F1729" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            /* play icon */
            <svg width={large ? 24 : 18} height={large ? 24 : 18} viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v14l11-7-11-7z" fill="#0F1729"/>
            </svg>
          )}
        </div>
      </div>

      {/* Bottom text */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', padding: large ? '40px 24px 20px' : '28px 16px 14px' }}>
        <div style={{ fontSize: large ? '18px' : '13px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-bricolage)', lineHeight: 1.2, marginBottom: '4px' }}>{v.quote}</div>
        <div style={{ fontSize: large ? '13px' : '11px', color: '#A4B3C4', fontFamily: 'var(--font-jakarta)' }}>{v.person} · {v.company}</div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// REVIEW CARD
// ─────────────────────────────────────────────────────────────────────────────

function ReviewCard({ r, onImageClick }: { r: Review; onImageClick?: (src: string) => void }) {
  const [hovered, setHovered] = useState(false)

  if (r.image) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onImageClick && onImageClick(r.image!)}
        style={{ breakInside: 'avoid', marginBottom: '16px', borderRadius: '14px', overflow: 'hidden', border: `1.5px solid ${hovered ? '#213D79' : '#DFE5ED'}`, boxShadow: hovered ? '0 8px 24px rgba(8,14,28,.12)' : '0 2px 8px rgba(8,14,28,.06)', transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s', transform: hovered ? 'translateY(-2px)' : 'translateY(0)', cursor: 'zoom-in', position: 'relative' }}
      >
        <img src={r.image} alt={`${r.platform} review`} style={{ width: '100%', display: 'block' }} />
        {hovered && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,14,28,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>🔍</div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: '#fff', border: `1.5px solid ${hovered ? '#213D79' : '#E8EDF3'}`, borderRadius: '14px', padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '14px', breakInside: 'avoid', marginBottom: '16px', transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s', boxShadow: hovered ? '0 6px 20px rgba(8,14,28,.09)' : 'none', transform: hovered ? 'translateY(-2px)' : 'translateY(0)' }}
    >
      {/* Top */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          {platformIcon(r.platform, 20)}
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1px', color: '#3E5068', fontFamily: 'var(--font-jetbrains)' }}>{r.platform.toUpperCase()}</span>
        </div>
        <Stars />
      </div>

      {/* Quote */}
      <p style={{ fontSize: '14px', color: '#3E5068', lineHeight: 1.65, fontFamily: 'var(--font-jakarta)', margin: 0 }}>
        &ldquo;{r.quote}{r.bold && <strong style={{ color: '#1C2A42' }}>{r.bold}</strong>}&rdquo;
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: '#F2F5F8' }} />

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1C2A42', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-bricolage)' }}>{r.initials}</span>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#080E1C', fontFamily: 'var(--font-jakarta)' }}>{r.name}</div>
            <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{r.role}</div>
          </div>
        </div>
        {r.badge && (
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#25B472', fontFamily: 'var(--font-jakarta)' }}>✓ {r.badge}</span>
        )}
      </div>
    </div>
  )
}

function CertCard({ c }: { c: typeof CERTS[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#EEF2F9' : '#F2F5F8', border: c.highlight ? '2px solid #213D79' : `1.5px solid ${hovered ? '#DFE5ED' : 'transparent'}`, borderRadius: '16px', padding: '28px 24px', minWidth: '150px', textAlign: 'center', flex: '1 1 140px', maxWidth: '180px', transition: 'all 0.2s', transform: hovered ? 'translateY(-3px)' : 'translateY(0)', boxShadow: hovered ? '0 6px 20px rgba(8,14,28,.08)' : 'none', cursor: 'default' }}
    >
      <div style={{ fontSize: c.icon.length > 2 ? '20px' : '36px', fontWeight: c.icon.length > 2 ? 800 : 400, color: c.icon.length > 2 ? '#213D79' : 'inherit', marginBottom: '12px', fontFamily: 'var(--font-bricolage)', lineHeight: 1 }}>
        {c.icon}
      </div>
      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1C2A42', fontFamily: 'var(--font-jakarta)', marginBottom: '4px' }}>{c.name}</div>
      <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{c.sub}</div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function ReviewsPage() {
  const [activeVideo,    setActiveVideo]    = useState<string | null>(null)
  const [activeImage,    setActiveImage]    = useState<string | null>(null)
  const [reviewFilter,   setReviewFilter]   = useState<Platform | 'All Reviews'>('All Reviews')
  const [showAll,        setShowAll]        = useState(false)

  const filteredReviews = reviewFilter === 'All Reviews'
    ? REVIEWS
    : REVIEWS.filter(r => r.platform === reviewFilter)

  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 9)

  return (
    <>
      {/* ── Hero (dark) ── */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C 0%,#0F1E3A 100%)', padding: '80px 32px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#34D48A', fontFamily: 'var(--font-jetbrains)', marginBottom: '16px' }}>
            REVIEWS &amp; TESTIMONIALS
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(36px,5vw,56px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.3px', marginBottom: '20px' }}>
            Don&apos;t take our word for it.{' '}
            <em style={{ color: '#25B472', fontStyle: 'italic' }}>Listen to theirs.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#A4B3C4', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
            4.9 stars across 5 platforms. Real video testimonials. Verified Shopify Partner, Clutch &amp; GoodFirms ratings. Watch what happens when founders actually own their ad accounts again.
          </p>
        </div>
      </section>

      {/* ── Platform Rating Cards (own section) ── */}
      <section style={{ background: '#0A1525', padding: '40px 32px 52px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }} className="rating-row">
            {PLATFORM_RATINGS.map((pr, i) => (
              <RatingCard key={i} pr={pr} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Testimonials ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }} className="vid-layout">

            {/* LEFT — text */}
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#213D79', fontFamily: 'var(--font-jetbrains)', marginBottom: '14px' }}>VIDEO TESTIMONIALS</div>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,44px)', color: '#1C2A42', lineHeight: 1.1, marginBottom: '16px' }}>
                Watch them tell it <em style={{ color: '#25B472', fontStyle: 'italic' }}>their way.</em>
              </h2>
              <p style={{ fontSize: '15px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', lineHeight: 1.75, marginBottom: '28px' }}>
                Real founders. Real screens. No script. They show their ad accounts and dashboards as they talk — unedited.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {VIDEOS.map((v, i) => {
                  const src = v.youtubeId || v.videoFile
                  return (
                    <div key={i} onClick={() => src && setActiveVideo(src)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #EEF2F9', background: '#F9FAFC', cursor: src ? 'pointer' : 'default', transition: 'background 0.15s' }}>
                      <span style={{ fontSize: '18px' }}>▶</span>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#1C2A42', fontFamily: 'var(--font-jakarta)' }}>{v.quote}</div>
                        <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{v.person} · {v.company}</div>
                      </div>
                      <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#A4B3C4', fontFamily: 'var(--font-jetbrains)', flexShrink: 0 }}>{v.duration}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT — 2 portrait video cards side by side */}
            <div style={{ flex: '0 0 480px', display: 'flex', flexDirection: 'row', gap: '14px', alignItems: 'stretch' }} className="vid-cards">
              {VIDEOS.slice(0, 2).map((v, i) => (
                <VideoCard
                  key={i}
                  v={v}
                  onClick={() => { const src = v.youtubeId || v.videoFile; if (src) setActiveVideo(src) }}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Full Review Wall ── */}
      <section style={{ background: '#F2F5F8', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#25B472', fontFamily: 'var(--font-jetbrains)', marginBottom: '10px' }}>THE FULL WALL</div>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.8vw,44px)', color: '#1C2A42', lineHeight: 1.1, marginBottom: '12px' }}>
              Every review. <em style={{ color: '#25B472', fontStyle: 'italic' }}>Every platform.</em>
            </h2>
            <p style={{ fontSize: '15px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Pulled directly from Google, Shopify Partner Reviews, Clutch, GoodFirms, Upwork, and Fiverr. No cherry-picking.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {REVIEW_FILTERS.map(f => {
              const active = reviewFilter === f
              return (
                <button
                  key={f}
                  onClick={() => { setReviewFilter(f as typeof reviewFilter); setShowAll(false) }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '24px', border: active ? 'none' : '1.5px solid #DFE5ED', background: active ? '#1C2A42' : '#fff', color: active ? '#fff' : '#3E5068', fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-jakarta)', cursor: 'pointer', transition: 'all 0.15s' }}
                >
                  {f !== 'All Reviews' && platformIcon(f as Platform, 14)}
                  {f}
                  {f === 'All Reviews' && <span style={{ fontSize: '11px', opacity: 0.7 }}>{REVIEWS.length}</span>}
                </button>
              )
            })}
          </div>

          {/* Masonry grid — 3 columns */}
          <div className="reviews-masonry">
            {visibleReviews.map((r, i) => <ReviewCard key={i} r={r} onImageClick={setActiveImage} />)}
          </div>

          {/* Show All button */}
          {!showAll && filteredReviews.length > 9 && (
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <button
                onClick={() => setShowAll(true)}
                style={{ padding: '14px 40px', borderRadius: '10px', border: '1.5px solid #DFE5ED', background: '#fff', fontSize: '15px', fontWeight: 700, color: '#1C2A42', fontFamily: 'var(--font-jakarta)', cursor: 'pointer' }}
              >
                Show All {filteredReviews.length} Reviews →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#213D79', fontFamily: 'var(--font-jetbrains)', marginBottom: '10px' }}>CERTIFIED &amp; VERIFIED</div>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.8vw,44px)', color: '#1C2A42', lineHeight: 1.1, marginBottom: '12px' }}>
              Real badges. <em style={{ color: '#25B472', fontStyle: 'italic' }}>Real partnerships.</em>
            </h2>
            <p style={{ fontSize: '15px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
              Not bought. Not stock. The actual official partner badges and certifications we&apos;ve earned.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {CERTS.map((c, i) => <CertCard key={i} c={c} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(34px,4.5vw,50px)', color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
            Ready to be our{' '}
            <em style={{ color: '#34D48A', fontStyle: 'italic' }}>next 5-star review?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7 }}>
            Free audit. We&apos;ll tell you exactly what we&apos;d fix first. Then you decide.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 40px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
            Get My Free Audit →
          </Link>
          <p style={{ fontSize: '12px', color: '#3E5068', marginTop: '16px', fontFamily: 'var(--font-jetbrains)' }}>
            No card · No pitch · Just our honest read on your account
          </p>
        </div>
      </section>

      {/* Video modal */}
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}

      {/* Image lightbox */}
      {activeImage && <ImageLightbox src={activeImage} alt="Review screenshot" onClose={() => setActiveImage(null)} />}

      <style>{`
        .rating-row > div { flex: 1 1 140px; }

        .vid-layout { align-items: center; }
        .vid-cards > div { min-height: 220px; }

        .reviews-masonry {
          columns: 3;
          column-gap: 16px;
        }

        @media(max-width: 960px) {
          .vid-layout { flex-direction: column !important; gap: 40px !important; }
          .vid-cards { flex: none !important; width: 100% !important; max-height: 420px; }
          .reviews-masonry { columns: 2; }
        }
        @media(max-width: 600px) {
          .reviews-masonry { columns: 1; }
        }
      `}</style>
    </>
  )
}
