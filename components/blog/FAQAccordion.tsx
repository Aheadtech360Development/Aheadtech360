'use client'
import { useState } from 'react'

interface FAQ { question: string; answer: string }

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #DFE5ED' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}
      >
        <span style={{ fontSize: '15px', fontWeight: 700, color: '#080E1C', fontFamily: 'var(--font-bricolage)', lineHeight: 1.3 }}>{faq.question}</span>
        <span style={{ color: '#25B472', fontSize: '20px', fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: '14.5px', color: '#6E8098', lineHeight: 1.7, paddingBottom: '18px', fontFamily: 'var(--font-jakarta)' }}>{faq.answer}</p>
      )}
    </div>
  )
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  if (!faqs?.length) return null
  return (
    <div>
      {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
    </div>
  )
}
