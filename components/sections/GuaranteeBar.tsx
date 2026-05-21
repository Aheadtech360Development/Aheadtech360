// components/sections/GuaranteeBar.tsx
// Icons: public/icons/ folder mein rakhein

import Image from 'next/image'

const DEFAULT_PILLS = [
  { icon: 'icons8-contract-60.png', label: 'No contracts' },
  { icon: 'icons8-guarantee-80.png',   label: '90-day guarantee' },
  { icon: 'icons8-cancel-subscription-64.png',      label: 'Cancel anytime' },
]

export default function GuaranteeBar() {
  return (
    <section style={{ background: 'linear-gradient(135deg,#25B472,#1C8F5A)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '44px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '28px', flexWrap: 'wrap' }} className="guar-inner">
        <div>
          <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>Results or we work free.</h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.8)', fontFamily: 'var(--font-jakarta)' }}>If we don't improve your ROAS in 90 days, we keep working at no charge until we do.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {DEFAULT_PILLS.map((p) => (
            <div key={p.label} style={{ background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(4px)', borderRadius: '8px', padding: '12px 20px', textAlign: 'center', minWidth: '90px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
                <Image
                  src={`/icons/${p.icon}`}
                  alt={p.label}
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-jetbrains)' }}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .guar-inner { flex-direction: column !important; text-align: center !important; padding: 32px 16px !important; }
        }
      `}</style>
    </section>
  )
}