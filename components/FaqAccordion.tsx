'use client'
import { useState } from 'react'

export default function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <div className="faq-acc">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-i${openIndex === i ? ' open' : ''}`}>
          <div className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {faq.question}
            <span className="ico">+</span>
          </div>
          <div className="faq-a">{faq.answer}</div>
        </div>
      ))}
    </div>
  )
}
