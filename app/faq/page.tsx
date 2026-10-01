// app/faq/page.tsx
// Full FAQ page — new route, hardcoded copy. Each answer stands alone (matches the
// mockup's intent: extractable for search/AI, no cross-references needed).
'use client'
import Link from 'next/link'
import { useState } from 'react'

const FAQS = [
  { q: 'How do I know your case study numbers are real?', a: 'Every published figure is verified against store order data and labeled with its source. Where we cannot verify a number, we publish the work and no number.' },
  { q: 'Who will actually work on my account?', a: 'Iqrar leads strategy and account work directly. Ikrash is the second founder you will see. No bait and switch to a junior team, because there is no separate sales layer.' },
  { q: 'We have been burned by agencies before. Why is this different?', a: 'We diagnose before we pitch, publish verified numbers with sources, and tell you before engagement if we do not think we can help. Ask us for a reference call.' },
  { q: 'Where is your team based?', a: 'Pakistan, serving brands in the US and beyond. We state it plainly because we would rather be judged on response time, communication, and verified results than discovered later.' },
  { q: 'Do you only work with Shopify stores?', a: 'No. Much of our work is on Shopify because that is where apparel lives, but our builds and methods are platform agnostic.' },
  { q: 'Do you work with brands outside fashion and apparel?', a: 'Fashion and apparel is our focus, across four segments. We have taken a small number of other engagements but apparel is where we specialize.' },
  { q: 'What does the Fashion Growth System cost?', a: 'We do not publish pricing. The engagement is 90 days, paid in advance, and we explain why on the program page.' },
  { q: 'Why is payment in advance?', a: 'It caps how many brands we take, keeps senior attention on every account, and means the 90 days go to work, not invoicing.' },
  { q: 'What is the Fashion Scale System?', a: 'Our next program, currently in development. Join the waitlist on its page.' },
  { q: 'What happens on the first call?', a: 'You see our diagnosis of your store. Not a presentation about us. You keep the findings either way.' },
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#8ff0c0', fontWeight: 600, marginBottom: '14px' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }

function FAQRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen)
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ background: '#fff', border: `1.5px solid ${open ? '#213D79' : '#DFE5ED'}`, borderRadius: '10px', padding: '22px', transition: 'all 0.2s', cursor: 'pointer', marginBottom: '12px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#080E1C', fontFamily: 'var(--font-bricolage)' }}>{q}</div>
        <div style={{ fontSize: '18px', color: '#213D79', fontWeight: 700, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</div>
      </div>
      {open && <div style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.65, marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>{a}</div>}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>Fair questions</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '22ch' }}>
            Fair questions, straight answers.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            The things owners ask us before they ever get on a call.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {FAQS.map((f, i) => (
            <FAQRow key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13 }}>
            Your question not here? Ask it directly. We answer fast.
          </h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
