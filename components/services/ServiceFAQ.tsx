'use client'

import { useState } from 'react'

interface FAQItem { q: string; a: string }

function Item({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ background: '#fff', border: `1.5px solid ${open ? '#213D79' : '#DFE5ED'}`, borderRadius: '10px', padding: '20px 22px', cursor: 'pointer', transition: 'border-color 0.2s' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: 700, color: '#080E1C', fontFamily: 'var(--font-jakarta)' }}>{item.q}</span>
        <span style={{ fontSize: '18px', color: '#213D79', fontWeight: 700, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', display: 'block' }}>+</span>
      </div>
      {open && (
        <p style={{ fontSize: '13.5px', color: '#6E8098', lineHeight: 1.65, marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>{item.a}</p>
      )}
    </div>
  )
}

export default function ServiceFAQ({ badge, tag, heading, items }: {
  badge:   string
  tag:     string
  heading: string
  items:   FAQItem[]
}) {
  const parts = heading.split(/(\[em\].*?\[\/em\])/g)
  const parsedHeading = parts.map((p, i) =>
    p.startsWith('[em]')
      ? <em key={i} style={{ color: '#25B472', fontStyle: 'italic' }}>{p.replace('[em]', '').replace('[/em]', '')}</em>
      : <span key={i}>{p}</span>
  )

  return (
    <section style={{ background: '#F2F5F8' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="svc-wrap">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#213D79', fontFamily: 'var(--font-jetbrains)', marginBottom: '10px' }}>{tag}</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,42px)', color: '#1C2A42', lineHeight: 1.1 }}>{parsedHeading}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="faq-grid">
          {items.map((item, i) => <Item key={i} item={item} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .faq-grid { grid-template-columns: 1fr !important; }
          .svc-wrap { padding: 56px 16px !important; }
        }
      `}</style>
    </section>
  )
}
