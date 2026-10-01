// components/sections/FAQSection.tsx
'use client'
import { useState } from 'react'

interface FAQItem { question: string; answer: string }

const DEFAULT_FAQS: FAQItem[] = [
  { question: 'How much does it cost?', answer: 'Retainers start at $1,500/mo. Every client gets a custom proposal after their free audit.' },
  { question: 'Are there long-term contracts?', answer: 'No. Month-to-month. If we\'re delivering, you stay. Most clients have been with us 6+ months.' },
  { question: 'How soon will I see results?', answer: 'Paid ads: meaningful results in 60-90 days. SEO: 3-6 months for compound growth.' },
  { question: 'Do you work with my industry?', answer: 'Ecommerce, local services, fitness, home services, fashion. If you sell in the US, we can help.' },
  { question: 'Who works on my account?', answer: 'A dedicated team of 2-3: strategist, creative specialist, media buyer. No junior hand-offs.' },
  { question: "What if my ads aren't working?", answer: "That's exactly who we help. The free audit shows what's wrong — even if you don't hire us." },
  { question: 'How often will I hear from you?', answer: 'Weekly reports + bi-weekly strategy calls + Slack/WhatsApp anytime. No ghosting.' },
  { question: 'What makes you different?', answer: 'Small team, not a factory. We run our own ecommerce brands with the same strategies.' },
]

function FAQItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ background: '#fff', border: `1.5px solid ${open ? '#213D79' : '#DFE5ED'}`, borderRadius: '10px', padding: '22px', transition: 'all 0.2s', cursor: 'pointer' }}
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
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="faq-container">
        <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Common questions</div>
        <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '40px' }}>Everything you need to know.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="faq-grid">
          {faqs.map((f, i) => <FAQItem key={i} item={f} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .faq-container{padding:52px 16px!important}
          .faq-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  )
}
