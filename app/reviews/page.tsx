'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

function MetaIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0866FF"/>
      <path d="M7 22c0-5.5 2.8-9 6.5-9 2.2 0 3.8 1.3 5.5 4.5 1.2-2 2.8-4.5 5.5-4.5 4 0 8.5 5.5 8.5 9 0 3-1.5 5-4 5-2 0-3.5-1.8-5.5-5-1.2 2.2-2.8 5-5.5 5C10.5 27 7 25 7 22z" fill="white"/>
    </svg>
  )
}

function PashaIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0D3B1E"/>
      <rect x="6" y="6" width="28" height="28" rx="6" fill="none" stroke="#34D48A" strokeWidth="1.2"/>
      <text x="20" y="18" textAnchor="middle" fill="#34D48A" fontSize="7.5" fontWeight="800" fontFamily="Arial" letterSpacing="0.5">P@SHA</text>
      <text x="20" y="29" textAnchor="middle" fill="white" fontSize="6" fontFamily="Arial" letterSpacing="0.3">Pakistan</text>
    </svg>
  )
}

function PsebIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#01411C"/>
      <path d="M20 6L32 11V22C32 28 26.5 33 20 34C13.5 33 8 28 8 22V11L20 6Z" fill="#006B2C" stroke="#4ADE80" strokeWidth="1.2"/>
      <text x="20" y="23" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="800" fontFamily="Arial" letterSpacing="0.5">PSEB</text>
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

type Platform = 'Google' | 'Shopify Partner' | 'Clutch' | 'GoodFirms' | 'Upwork'

interface Review {
  platform:  Platform
  quote:     string
  bold?:     string
  name:      string
  role:      string
  initials:  string
  badge?:    'Verified' | 'Top Rated'
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

const PLATFORM_LINKS: Record<Platform, string> = {
  'Google':          'https://www.google.com/search?q=AheadTech360&sca_esv=525e608177515078&sxsrf=ANbL-n7qG-4TMtfXjp0ERL2qxL18KRNaRg%3A1779441939350&source=hp&ei=EyEQaoa0EI-jhbIPrt-x0Ao&iflsig=AFdpzrgAAAAAahAvIyBluPCY1aJ8KzFsbk7JW3VzCHlv&ved=0ahUKEwjGicHlycyUAxWPUUEAHa5vDKoQ4dUDCCg&uact=5&oq=AheadTech360&gs_lp=Egdnd3Mtd2l6IgxBaGVhZFRlY2gzNjAyCxAuGIAEGMcBGK8BMgQQABgeMgIQJjIFEAAY7wUyBRAAGO8FMgUQABjvBTIFEAAY7wVI8ocBUABY2oUBcAR4AJABAZgB8QOgAZgNqgEHMi0yLjIuMbgBA8gBAPgBAfgBApgCCKACpgqoAgrCAgoQIxiABBiKBRgnwgILEC4YgAQYsQMYgwHCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgILEC4YgAQYxwEY0QPCAgUQABiABMICCBAuGIAEGLEDwgIFEC4YgATCAg4QLhiABBixAxjHARivAcICERAuGIAEGLEDGIMBGMcBGNEDwgIIEC4YsQMYgATCAg0QLhiABBixAxiDARgKwgIHECMY6gIYJ5gDCfEF0InMpiPOtRiSBwk0LjAuMi4xLjGgB-o6sgcHMi0yLjEuMbgHgQrCBwcyLTMuMy4yyAdsgAgB&sclient=gws-wiz&zx=1779441959994#lrd=0x6021eed3c31a0421:0x392a11a8ce26a9ca,1,,,,',
  'GoodFirms':       'https://www.goodfirms.co/company/aheadtech360',
  'Upwork':          'https://www.upwork.com/freelancers/ikrash',
  'Clutch':          'https://clutch.co/profile/aheadtech360#reviews',
  'Shopify Partner': 'https://www.shopify.com/partners/directory/partner/aheadtech360',
}

const PLATFORM_RATINGS = [
  { platform: 'Google' as Platform,         rating: '5.0', sub: '6 reviews',    icon: <GoogleIcon size={18}/> },
  { platform: 'Shopify Partner' as Platform, rating: '5.0', sub: '4 reviews',   icon: <ShopifyIcon size={18}/> },
  { platform: 'Clutch' as Platform,          rating: '5.0', sub: '1 review',    icon: <ClutchIcon size={18}/> },
  { platform: 'GoodFirms' as Platform,       rating: '5.0', sub: '1 review',    icon: <GoodFirmsIcon size={18}/> },
  { platform: 'Upwork' as Platform,          rating: '5.0', sub: 'Top Rated',   icon: <UpworkIcon size={18}/> },
]

const VIDEOS: Video[] = [
  { featured: true, videoFile: '/videos/at360.mp4', placeholder: 'TrashedPunk', duration: '4:32', quote: '"The speed, the communication was on point"', person: 'TrashedPunk', company: '' },
  { videoFile: '/videos/ezt.mp4', placeholder: 'EZDTFMaker', duration: '2:14', quote: '"We have no Regrets"', person: 'EZDTFMaker', company: '' },
]

const REVIEWS: Review[] = [
  // ── Clutch ──────────────────────────────────────────────────────────────────
  { platform: 'Clutch', quote: 'AheadTech360 delivered an excellent website with a clean design and smooth functionality. The team was highly communicative, professional, and punctual throughout. ', bold: 'The client was extremely pleased with the project\'s results.', name: 'Syed Artaboon Shah', role: 'Clutch Review', initials: 'SA', badge: 'Verified' },

  // ── Shopify Partner ─────────────────────────────────────────────────────────
  { platform: 'Shopify Partner', quote: 'There was transparency throughout the process. They first shared wireframes then moved into development. Khaleel was always supportive. ', bold: 'Overall the communication was good and we are satisfied with the work done.', name: 'Freshfits', role: 'Shopify Store Owner', initials: 'FF', badge: 'Verified' },
  { platform: 'Shopify Partner', quote: 'Ikrash built TrashedPunk.com from a napkin doodle into a live store. He\'s got the whole stack — store setup, theme tweaks, SEO, CRO, performance, integrations, troubleshooting. Fast, no fluff, 100% ownership. ', bold: '10/10 — hire him yesterday.', name: 'TrashedPunk', role: 'Streetwear Brand', initials: 'TP', badge: 'Verified' },
  { platform: 'Shopify Partner', quote: 'I had an excellent experience working with AheadTech360. Their team is professional, knowledgeable, and truly dedicated. Communication was clear and consistent throughout. ', bold: 'Highly recommend AheadTech360 to anyone looking for reliable and innovative tech solutions.', name: 'MACP Store', role: 'Shopify Store Owner', initials: 'MC', badge: 'Verified' },
  { platform: 'Shopify Partner', quote: 'These guys are really good at their work! They handled our website development smoothly and even provided valuable consultations to improve our original idea. ', bold: 'All my future websites will definitely be developed by them.', name: 'Maniyas', role: 'Pakistani Fashion Brand', initials: 'MN', badge: 'Verified' },

  // ── GoodFirms ───────────────────────────────────────────────────────────────
  { platform: 'GoodFirms', quote: 'Dealing with AheadTech360 to rebuild and redesign my website has been an absolute pleasure. They already had experience within the garment printing sector. ', bold: 'Communication has been flawless and nothing is too much for the AT360 team.', name: 'Jason Beevor', role: 'GoodFirms Review', initials: 'JB', badge: 'Verified' },

  // ── Upwork ──────────────────────────────────────────────────────────────────
  { platform: 'Upwork', quote: 'Ikrash absolutely crushed it with his SEO and conversion rate tweaks — he got my site ranking higher faster than I expected, and those blog posts? ', bold: 'Pure gold for engagement. Totally recommend!', name: 'Upwork Client', role: 'Upwork Review', initials: 'UC', badge: 'Top Rated' },
  { platform: 'Upwork', quote: 'Ikrash built TrashedPunk.com from a napkin doodle into a live store that doesn\'t glitch when it matters. Flux theme, Printful hooks, custom camo uploads — check. SEO bones so Google sees us, CRO heatmaps so customers actually buy, plus every tweak, audit, and 3 a.m. emergency fix without whining. He\'s got the whole stack: store setup, theme tweaks, SEO, CRO, performance, integrations, troubleshooting — you name it, he shipped it. Fast, no fluff, 100% ownership. If your site needs to crawl out of the code and wear web traffic, this guy\'s the dev. ', bold: '10/10 — hire him yesterday.', name: 'TrashedPunk', role: 'Streetwear Brand · Upwork', initials: 'TP', badge: 'Top Rated' },

  // ── Google ──────────────────────────────────────────────────────────────────
  { platform: 'Google', quote: 'Excellent website development service! Clean design, smooth functionality with great ease of communication from start to finish. Very happy with the results. Special thanks to Ikrash. ', bold: 'Great guy. Will definitely work again.', name: 'Syed Artaboon Shah', role: 'Google Review', initials: 'SA', badge: 'Verified' },
  { platform: 'Google', quote: 'Been working with AheadTech360 for 6 months now — managing our website, social media, and marketing. It\'s rare to find a team that just gets it. ', bold: 'They\'re responsive, easy to work with, and actually deliver results.', name: 'Gradelao', role: 'Google Review', initials: 'GR', badge: 'Verified' },
  { platform: 'Google', quote: 'AT360\'s creative ideas and graphic design ensured our successful online launch. They expertly developed our Shopify website and managed our social pages. ', bold: 'Their services boosted our followers and revenue significantly.', name: 'Muhammad Omar', role: 'Google Review', initials: 'MO', badge: 'Verified' },
  { platform: 'Google', quote: 'There are 2 things I look for in any organization: work ethics and quality of work. ', bold: 'AheadTech360 excels in both. They created my 2 websites and I highly recommend them.', name: 'Ahmed Amin', role: 'Google Review', initials: 'AA', badge: 'Verified' },
  { platform: 'Google', quote: 'Excellent service from team AheadTech360 — these guys are really clued on and know their stuff. ', bold: 'If I could give more than 5 stars I would. These guys deserve at least 10 stars.', name: 'Khurram Ahmed', role: 'Google Review', initials: 'KA', badge: 'Verified' },
  { platform: 'Google', quote: 'Dealing with AheadTech360 to rebuild and redesign my website has been an absolute pleasure from start to finish. They had experience in the garment printing sector. ', bold: 'Communication has been flawless and nothing is too much for the AT360 team.', name: 'Jason Beevor', role: 'Google Review', initials: 'JB', badge: 'Verified' },
]

interface Cert { icon: React.ReactNode; name: string; sub: string; highlight?: boolean; iconBg?: string }

const imgContain = { objectFit: 'contain' as const }

const CERTS: Cert[] = [
  { icon: <Image src="/images/reviews/pasha.png"    alt="P@SHA"          width={120} height={44} style={imgContain} unoptimized />, name: 'P@SHA',          sub: 'Member',            highlight: false },
  { icon: <Image src="/images/reviews/psb.png"      alt="PSEB"            width={130} height={56} style={imgContain} unoptimized />, name: 'PSEB',           sub: 'Registered Export', highlight: true  },
  { icon: <Image src="/images/reviews/shopify.png" alt="Shopify Partner" width={120} height={44} style={imgContain} unoptimized />, name: 'Shopify Partner', sub: 'Expert Level',      highlight: false },
  { icon: <Image src="/images/reviews/meta.png"     alt="Meta Expert"    width={52}  height={52} style={imgContain} unoptimized />, name: 'Meta Expert',    sub: 'Certified',         highlight: false },
  { icon: <GoogleIcon size={52} />,                                                                                                 name: 'Google Expert',  sub: 'Certified',         highlight: false },
  { icon: <Image src="/images/reviews/goodfirms.png" alt="GoodFirms"    width={150} height={58} style={imgContain} unoptimized />, name: 'GoodFirms',      sub: 'Top Agency',        highlight: false },
  { icon: <Image src="/images/reviews/clutch.png"   alt="Clutch"         width={100} height={44} style={imgContain} unoptimized />, name: 'Clutch',         sub: 'Top Agency',        highlight: false },
]

const REVIEW_FILTERS: (Platform | 'All Reviews')[] = ['All Reviews', 'Shopify Partner', 'Clutch', 'GoodFirms', 'Google', 'Upwork']

function platformIcon(p: Platform, size = 14) {
  if (p === 'Google')          return <GoogleIcon size={size} />
  if (p === 'Shopify Partner') return <ShopifyIcon size={size} />
  if (p === 'Clutch')          return <ClutchIcon size={size} />
  if (p === 'GoodFirms')       return <GoodFirmsIcon size={size} />
  if (p === 'Upwork')          return <UpworkIcon size={size} />
}

// ─────────────────────────────────────────────────────────────────────────────
// RATING CARD
// ─────────────────────────────────────────────────────────────────────────────

function RatingCard({ pr }: { pr: typeof PLATFORM_RATINGS[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={PLATFORM_LINKS[pr.platform]}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: 'none', flex: '1 1 150px', maxWidth: '220px', display: 'block', background: hovered ? '#112040' : '#0D1B35', border: `1px solid ${hovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '14px', padding: '22px 32px', minWidth: '170px', textAlign: 'center', transition: 'all 0.2s', transform: hovered ? 'translateY(-3px)' : 'translateY(0)', boxShadow: hovered ? '0 10px 28px rgba(0,0,0,0.4)' : 'none', cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', marginBottom: '12px' }}>
        {pr.icon}
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', color: '#A4B3C4', fontFamily: 'var(--font-jetbrains)' }}>{pr.platform.toUpperCase()}</span>
      </div>
      <div style={{ marginBottom: '8px' }}><Stars /></div>
      <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '30px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{pr.rating}</div>
      <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', marginTop: '5px' }}>{pr.sub}</div>
    </a>
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
        <div style={{ fontSize: large ? '13px' : '11px', color: '#A4B3C4', fontFamily: 'var(--font-jakarta)' }}>{v.person}{v.company ? ` · ${v.company}` : ''}</div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// REVIEW CARD
// ─────────────────────────────────────────────────────────────────────────────

function ReviewCard({ r }: { r: Review }) {
  const [hovered,   setHovered]   = useState(false)
  const [expanded,  setExpanded]  = useState(false)
  const link    = PLATFORM_LINKS[r.platform]
  const isLong  = (r.quote + (r.bold ?? '')).length > 160

  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: '#fff', border: `1.5px solid ${hovered ? '#213D79' : '#E8EDF3'}`, borderRadius: '14px', padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '14px', transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s', boxShadow: hovered ? '0 6px 20px rgba(8,14,28,.09)' : 'none', transform: hovered ? 'translateY(-2px)' : 'translateY(0)', cursor: 'pointer' }}
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
      <div>
        <p style={{ fontSize: '14px', color: '#3E5068', lineHeight: 1.65, fontFamily: 'var(--font-jakarta)', margin: 0, ...(isLong && !expanded ? { display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' } : {}) }}>
          &ldquo;{r.quote}{r.bold && <strong style={{ color: '#1C2A42' }}>{r.bold}</strong>}&rdquo;
        </p>
        {isLong && (
          <button
            onClick={e => { e.preventDefault(); e.stopPropagation(); setExpanded(v => !v) }}
            style={{ background: 'none', border: 'none', padding: '6px 0 0', color: '#213D79', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-jakarta)', cursor: 'pointer', display: 'block' }}
          >
            {expanded ? 'Read Less ↑' : 'Read More ↓'}
          </button>
        )}
      </div>

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

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      {inner}
    </a>
  )
}

function CertCard({ c }: { c: Cert }) {
  const [hovered, setHovered] = useState(false)
  const border = c.highlight
    ? '2px solid #213D79'
    : hovered
      ? '1.5px solid #25B472'
      : '1.5px solid rgba(37,180,114,0.25)'
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#EDFBF3' : '#F2F5F8', border, borderRadius: '16px', padding: '28px 24px', minWidth: '150px', textAlign: 'center', flex: '1 1 140px', maxWidth: '180px', transition: 'all 0.2s', transform: hovered ? 'translateY(-3px)' : 'translateY(0)', boxShadow: hovered ? '0 6px 20px rgba(37,180,114,.12)' : 'none', cursor: 'default', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', background: c.iconBg || 'transparent', borderRadius: c.iconBg ? '10px' : '0', padding: c.iconBg ? '8px 12px' : '0' }}>
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
                Hear it from <em style={{ color: '#25B472', fontStyle: 'italic' }}>our clients.</em>
              </h2>
              <p style={{ fontSize: '15px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', lineHeight: 1.75, marginBottom: '28px' }}>
                Short clips from clients sharing their experience working with AheadTech360.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {VIDEOS.map((v, i) => {
                  const src = v.youtubeId || v.videoFile
                  return (
                    <div key={i} onClick={() => src && setActiveVideo(src)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #EEF2F9', background: '#F9FAFC', cursor: src ? 'pointer' : 'default', transition: 'background 0.15s' }}>
                      <span style={{ fontSize: '18px' }}>▶</span>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#1C2A42', fontFamily: 'var(--font-jakarta)' }}>{v.quote}</div>
                        <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{v.person}{v.company ? ` · ${v.company}` : ''}</div>
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
              Pulled directly from Google, Shopify Partner Reviews, Clutch, GoodFirms, and Upwork. No cherry-picking.
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
            {visibleReviews.map((r, i) => <ReviewCard key={i} r={r} />)}
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

      <style>{`
        .rating-row > div { flex: 1 1 140px; }

        .vid-layout { align-items: center; }
        .vid-cards > div { min-height: 220px; }

        .reviews-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: start;
        }

        @media(max-width: 960px) {
          .vid-layout { flex-direction: column !important; gap: 40px !important; }
          .vid-cards { flex: none !important; width: 100% !important; max-height: 420px; }
          .reviews-masonry { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 600px) {
          .reviews-masonry { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
