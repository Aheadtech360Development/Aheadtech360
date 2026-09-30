"use client"
// app/resources/page.tsx
// Icons: public/icons/ folder mein rakhein

import Image from 'next/image'

const RESOURCES = [
  { icon: 'icons8-meta-100.png',  iconBg: '', title: 'Meta Ads Audit Checklist',    description: "47-point checklist. Find what's wasting money in 30 minutes.", download: 'Download (PDF) →' },
  { icon: 'icons8-audit-80.png',       iconBg: '', title: 'CRO Audit Template',           description: 'The 7-driver framework. Audit any website yourself.',           download: 'Download (PDF) →' },
  { icon: 'icons8-flow-chart-64.png',     iconBg: '', title: 'Email Flow Templates',         description: 'Copy-paste sequences for 5 core flows.',                        download: 'Download (Notion) →' },
  { icon: 'icons8-selenium-500.png',  iconBg: '', title: 'Creative Testing Playbook',    description: 'Angle-first system with naming conventions and briefs.',        download: 'Download (PDF) →' },
  { icon: 'icons8-google-plus-100.png',       iconBg: '', title: 'Google Ads Setup Guide',       description: 'Campaign structure for local businesses. Step by step.',       download: 'Download (PDF) →' },
  { icon: 'icons8-content-100.png',    iconBg: '', title: 'Content Calendar Template',    description: 'Our Mon-Fri workflow with briefs and posting schedule.',        download: 'Download (Sheet) →' },
]

export default function ResourcesPage() {
  return (
    <>
      <section style={{ background: '#fff', textAlign: 'center', padding: '60px 32px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#25B472' }}>Free stuff</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42' }}>
            Tools & guides. <em style={{ color: '#25B472', fontStyle: 'italic' }}>All free.</em>
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', margin: '8px auto 0', fontFamily: 'var(--font-jakarta)' }}>Made from real client work. Not generic theory.</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px 80px' }} className="res-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }} className="res-grid">
            {RESOURCES.map((r, i) => (
              <div key={i}
                style={{ background: '#fff', border: '2px solid #DFE5ED', borderRadius: '16px', padding: '24px', transition: 'all 0.2s', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#25B472'; el.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#DFE5ED'; el.style.transform = 'translateY(0)' }}>

                {/* FREE ribbon */}
                <div style={{ position: 'absolute', top: '12px', right: '-20px', background: '#25B472', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '2px 28px', transform: 'rotate(45deg)', letterSpacing: '1px', fontFamily: 'var(--font-jetbrains)' }}>FREE</div>

                {/* Icon */}
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: r.iconBg, display: 'grid', placeItems: 'center', marginBottom: '12px' }}>
                  <Image
                    src={`/icons/${r.icon}`}
                    alt={r.title}
                    width={50}
                    height={50}
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#080E1C', marginBottom: '4px', fontFamily: 'var(--font-bricolage)' }}>{r.title}</h3>
                <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.5, marginBottom: '12px', fontFamily: 'var(--font-jakarta)' }}>{r.description}</p>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1C8F5A', fontFamily: 'var(--font-jakarta)' }}>{r.download}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            Want us to <em style={{ color: '#34D48A', fontStyle: 'italic' }}>do it for you?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>Free audit. We handle everything.</p>
          <a href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)' }}>Get My Free Audit →</a>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .res-container { padding: 0 16px 52px !important; }
          .res-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}