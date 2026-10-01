// components/sections/ProofBar.tsx
// ─────────────────────────────────────────────────────────────
// PROOF BAR — Light gray bg, 4 stats in a row with dividers
// Matches wireframe: 3.2x | 47% | 90 days | $0
// ─────────────────────────────────────────────────────────────

interface ProofStat {
    value: string
    label: string
  }
  
  interface ProofBarProps {
    stats?: ProofStat[]
  }
  
  const DEFAULT_STATS: ProofStat[] = [
    { value: '3.2x', label: 'Avg ad return' },
    { value: '47%', label: 'More conversions' },
    { value: '90 days', label: 'To see results' },
    { value: '$0', label: 'Long-term contracts' },
  ]
  
  export default function ProofBar({ stats = DEFAULT_STATS }: ProofBarProps) {
    return (
      <div
        style={{
          background: '#F2F5F8',
          borderTop: '1px solid #DFE5ED',
          borderBottom: '1px solid #DFE5ED',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: '28px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            textAlign: 'center',
          }}
          className="proof-bar-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{ position: 'relative' }}
            >
              {/* Divider */}
              {i < stats.length - 1 && (
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '10%',
                    height: '80%',
                    width: '1px',
                    background: '#DFE5ED',
                  }}
                />
              )}
              <div
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 800,
                  color: '#213D79',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#6E8098',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '4px',
                  fontFamily: 'var(--font-jetbrains)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
  
        <style>{`
          @media (max-width: 900px) {
            .proof-bar-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 14px !important;
              padding: 20px 16px !important;
            }
          }
          @media (max-width: 480px) {
            .proof-bar-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    )
  }
  