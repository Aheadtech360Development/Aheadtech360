// components/sections/FAQSection.tsx
// "Fair questions" — 3-item home-page FAQ preview (full FAQ page doesn't exist yet).
'use client'
import { useState } from 'react'
import Link from 'next/link'

interface FAQItem { question: string; answer: string }

const DEFAULT_FAQS: FAQItem[] = [
  { question: 'How do I know your numbers are real?', answer: 'Verified against store order data, stated next to each number. If we cannot verify it, we do not publish it.' },
  { question: 'Who actually works on my account?', answer: 'The founders. You will never be handed to someone you did not meet.' },
  { question: 'What if it does not work?', answer: 'We diagnose before we commit and tell you before you pay.' },
]

function FAQItem({ item, defaultOpen }: { item: FAQItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen)
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ background: '#fff', border: `1.5px solid ${open ? '#213D79' : '#DFE5ED'}`, borderRadius: '10px', padding: '22px', transition: 'all 0.2s', cursor: 'pointer', marginBottom: '12px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <div style={{ fontSize: '14px', fontWeight: 700, color: '#080E1C', fontFamily: 'var(--font-jakarta)' }}>{item.question}</div>
        <div style={{ fontSize: '18px', color: '#213D79', fontWeight: 700, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</div>
      </div>
      {open && <div style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.6, marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>{item.answer}</div>}
    </div>
  )
}

export default function FAQSection({ faqs = DEFAULT_FAQS }: { faqs?: FAQItem[] }) {
  return (
    <section style={{ background: '#F2F5F8' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="faq-container">
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
          Fair questions
        </span>
        <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '32px' }}>
          Asked by almost everyone.
        </h2>
        <div>
          {faqs.map((f, i) => (
            <FAQItem key={i} item={f} defaultOpen={i === 0} />
          ))}
        </div>
        <div style={{ marginTop: '12px' }}>
          <Link
            href="/faq"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: '.95rem',
              padding: '.7rem 1.3rem',
              borderRadius: '10px',
              border: '1px solid #DFE5ED',
              color: '#213D79',
              textDecoration: 'none',
            }}
          >
            Read the Full FAQ
          </Link>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .faq-container{padding:52px 16px!important}
        }
      `}</style>
    </section>
  )
}
