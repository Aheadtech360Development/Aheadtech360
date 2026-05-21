// components/sections/ProcessSection.tsx
// No client needed — no event handlers

interface ProcessStep {
    step: string
    timing: string
    title: string
    description: string
    deliverable: string
  }
  
  const DEFAULT_STEPS: ProcessStep[] = [
    { step: '1', timing: 'Week 1-2', title: 'We look at everything', description: 'Ads, site, tracking, competitors. Full report.', deliverable: '→ Custom audit report' },
    { step: '2', timing: 'Week 3-4', title: 'We build and launch', description: 'Campaigns, tracking, creatives. You approve everything.', deliverable: '→ Live campaigns' },
    { step: '3', timing: 'Month 2', title: 'We improve every week', description: 'Test new ads. Kill bad ones. Scale winners. Weekly reports.', deliverable: '→ Weekly performance reports' },
    { step: '4', timing: 'Month 3+', title: 'We scale what works', description: 'More budget on winners. New channels. Growth compounds.', deliverable: '→ A scalable growth system' },
  ]
  
  export default function ProcessSection({ steps = DEFAULT_STEPS }: { steps?: ProcessStep[] }) {
    return (
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="process-container">
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>How it works</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '12px' }}>
            Audit to results. <em style={{ color: '#25B472', fontStyle: 'italic' }}>90 days.</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#6E8098', marginBottom: '52px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7 }}>What happens after you say "let's go."</p>
  
          {/* Timeline grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, position: 'relative' }} className="process-grid">
            {/* Connecting line */}
            <div aria-hidden style={{ position: 'absolute', top: '30px', left: '55px', right: '55px', height: '2px', background: 'linear-gradient(90deg,#213D79,#25B472)', zIndex: 0 }} className="process-line" />
  
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', padding: '0 14px' }}>
                {/* Circle number */}
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fff', border: '2.5px solid #213D79', display: 'grid', placeItems: 'center', fontSize: '18px', fontWeight: 800, color: '#213D79', margin: '0 auto 14px', position: 'relative', zIndex: 2, fontFamily: 'var(--font-bricolage)' }}>
                  {s.step}
                </div>
                {/* Timing tag */}
                <div style={{ background: '#213D79', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '99px', display: 'inline-block', marginBottom: '8px', fontFamily: 'var(--font-jetbrains)' }}>{s.timing}</div>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#080E1C', marginBottom: '5px', fontFamily: 'var(--font-jakarta)' }}>{s.title}</h3>
                <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.5, fontFamily: 'var(--font-jakarta)' }}>{s.description}</p>
                <div style={{ fontSize: '11px', color: '#1C8F5A', fontWeight: 700, marginTop: '6px', fontFamily: 'var(--font-jakarta)' }}>{s.deliverable}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){
            .process-container{padding:52px 16px!important}
            .process-grid{grid-template-columns:repeat(2,1fr)!important;gap:28px!important}
            .process-line{display:none!important}
          }
        `}</style>
      </section>
    )
  }
  