// components/sections/FinalCTA.tsx

interface FinalCTAProps {
    heading?: string
    subtext?: string
    scarcity?: string
    ghlFormUrl?: string | null
  }
  
  function DefaultCTAForm({ scarcity }: { scarcity: string }) {
    return (
      <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 20px 50px rgba(8,14,28,.15)', border: '1px solid #DFE5ED', maxWidth: '440px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ background: '#FEF3F2', borderRadius: '7px', padding: '8px 14px', marginBottom: '18px', fontSize: '12px', color: '#F04438', fontWeight: 700, textAlign: 'center', fontFamily: 'var(--font-jakarta)' }}>{scarcity}</div>
        <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#080E1C', marginBottom: '3px', textAlign: 'center', fontFamily: 'var(--font-bricolage)' }}>Get your free growth audit</h3>
        <p style={{ fontSize: '13px', color: '#6E8098', marginBottom: '20px', textAlign: 'center', fontFamily: 'var(--font-jakarta)', lineHeight: 1.55 }}>We find the problems. You keep the report. No strings.</p>
        {[
          { label: 'Name', type: 'text', placeholder: 'John Smith' },
          { label: 'Email', type: 'email', placeholder: 'john@company.com' },
          { label: 'Website', type: 'url', placeholder: 'yoursite.com' },
        ].map(f => (
          <div key={f.label} style={{ marginBottom: '13px' }}>
            <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>{f.label}</label>
            <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none' }} />
          </div>
        ))}
        <button style={{ width: '100%', padding: '13px', background: '#25B472', color: '#fff', border: 'none', borderRadius: '9px', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-jakarta)', cursor: 'pointer' }}>Get My Free Growth Audit →</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '13px', paddingTop: '13px', borderTop: '1px solid #DFE5ED', fontSize: '11.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
          {['No contracts', '24hr delivery', '90-day guarantee'].map(b => <span key={b}><span style={{ color: '#25B472', fontWeight: 800 }}>✓</span> {b}</span>)}
        </div>
      </div>
    )
  }
  
  export default function FinalCTA({
    heading = "Ready to stop guessing and start [em]growing?[/em]",
    subtext = 'Join 75+ US brands getting more from every marketing dollar.',
    scarcity = '🔥 We take on max 3 new clients/month',
    ghlFormUrl,
  }: FinalCTAProps) {
    // Parse [em]...[/em] → green italic
    const parts = heading.split(/(\[em\].*?\[\/em\])/g)
    const parsedHeading = parts.map((part, i) => {
      if (part.startsWith('[em]')) {
        return <em key={i} style={{ color: '#34D48A', fontStyle: 'italic' }}>{part.replace('[em]', '').replace('[/em]', '')}</em>
      }
      return <span key={i}>{part}</span>
    })
  
    return (
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '90px 32px', textAlign: 'center' }} className="finalcta-container">
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>{parsedHeading}</h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '36px', fontFamily: 'var(--font-jakarta)' }}>{subtext}</p>
          {ghlFormUrl
            ? <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(8,14,28,.2)', maxWidth: '440px', margin: '0 auto', maxHeight: '520px' }}><iframe src={ghlFormUrl} style={{ width: '100%', height: '515px', border: 'none', display: 'block' }} loading="lazy" title="Final CTA Form" /></div>
            : <DefaultCTAForm scarcity={scarcity} />
          }
        </div>
        <style>{`
          @media(max-width:900px){
            .finalcta-container{padding:60px 16px!important}
          }
        `}</style>
      </section>
    )
  }
  