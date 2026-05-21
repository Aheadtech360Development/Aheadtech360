// components/sections/StoryTeaserSection.tsx
// Light gradient bg, split layout: benefits left | form right
// GHL iframe or default form

interface StoryTeaserProps {
    ghlFormUrl?: string | null
  }
  
  const BENEFITS = [
    { icon: '🎯', bg: '#EDFBF3', title: 'Get personalized advice', desc: 'We review every story and send back one actionable tip. Free.' },
    { icon: '📖', bg: '#EEF2F9', title: 'Be featured (if you want)', desc: 'Great stories get turned into case studies shared with our community.' },
    { icon: '🤝', bg: '#FFFAEB', title: 'Join a community', desc: 'Connect with other business owners facing the same challenges.' },
  ]
  
  function DefaultStoryForm() {
    return (
      <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 20px 50px rgba(8,14,28,.15)', border: '1px solid #DFE5ED' }}>
        <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#080E1C', marginBottom: '3px', textAlign: 'center', fontFamily: 'var(--font-bricolage)' }}>Tell us your story</h3>
        <p style={{ fontSize: '13px', color: '#6E8098', marginBottom: '20px', textAlign: 'center', fontFamily: 'var(--font-jakarta)', lineHeight: 1.55 }}>Takes 3 minutes. We'll send you a personalized tip back.</p>
        {[
          { label: 'Your name', type: 'text', placeholder: 'John' },
          { label: 'Business name & type', type: 'text', placeholder: "Joe's Gym — Fitness" },
          { label: 'Email (so we can send your free tip)', type: 'email', placeholder: 'john@company.com' },
        ].map((f) => (
          <div key={f.label} style={{ marginBottom: '13px' }}>
            <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>{f.label}</label>
            <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none' }} />
          </div>
        ))}
        <div style={{ marginBottom: '13px' }}>
          <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>What's your biggest marketing challenge?</label>
          <textarea placeholder="E.g., I'm spending $3K/month on ads but only getting 1.2x back..." rows={3} style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none', resize: 'vertical' }} />
        </div>
        <button style={{ width: '100%', padding: '13px', background: '#25B472', color: '#fff', border: 'none', borderRadius: '9px', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-jakarta)', cursor: 'pointer' }}>Share My Story →</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '13px', paddingTop: '13px', borderTop: '1px solid #DFE5ED', fontSize: '11.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
          {['100% private', 'Free tip in 48hrs', 'No spam ever'].map(b => <span key={b}><span style={{ color: '#25B472', fontWeight: 800 }}>✓</span> {b}</span>)}
        </div>
      </div>
    )
  }
  
  export default function StoryTeaserSection({ ghlFormUrl }: StoryTeaserProps) {
    return (
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9 0%,#fff 50%,#EDFBF3 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(33,61,121,.04),transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1 }} className="story-inner">
          {/* LEFT */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#25B472' }}>Share your story</div>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#080E1C', marginBottom: '16px' }}>
              Every business has a story. <em style={{ color: '#25B472', fontStyle: 'italic' }}>What's yours?</em>
            </h2>
            <p style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.7, marginBottom: '24px', fontFamily: 'var(--font-jakarta)' }}>We're collecting stories from business owners across the US — the wins, the struggles, and the "I wish I knew this sooner" moments. Your story helps us (and others) learn what really works.</p>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: b.bg, display: 'grid', placeItems: 'center', fontSize: '18px', flexShrink: 0 }}>{b.icon}</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#080E1C', marginBottom: '2px', fontFamily: 'var(--font-jakarta)' }}>{b.title}</h4>
                  <p style={{ fontSize: '12.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* RIGHT — Form */}
          <div>
            {ghlFormUrl
              ? <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(8,14,28,.15)', border: '1px solid #DFE5ED' }}><iframe src={ghlFormUrl} style={{ width: '100%', height: '560px', border: 'none', display: 'block' }} loading="lazy" title="Story Form" /></div>
              : <DefaultStoryForm />
            }
          </div>
        </div>
        <style>{`
          @media(max-width:900px){
            .story-inner{grid-template-columns:1fr!important;padding:52px 16px!important;gap:32px!important}
          }
        `}</style>
      </section>
    )
  }
  