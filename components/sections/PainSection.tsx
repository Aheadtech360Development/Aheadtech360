// components/sections/PainSection.tsx
// ─────────────────────────────────────────────────────────────
// PAIN SECTION — Dark (#080E1C) background
// Section label + heading with red em + 3 dark cards
// Each card: big red number, title, description
// Red top border accent on each card
// ─────────────────────────────────────────────────────────────

interface PainCard {
    number: string
    title: string
    description: string
  }
  
  interface PainSectionProps {
    heading?: string // Use [em]text[/em] for red italic
    cards?: PainCard[]
  }
  
  const DEFAULT_CARDS: PainCard[] = [
    {
      number: '$4.2K',
      title: 'Wasted every month',
      description:
        "That's what the average small business loses on ads that don't work. Money goes out. Nothing comes back.",
    },
    {
      number: '72%',
      title: 'Of ad budgets miss the mark',
      description:
        "Wrong people. Wrong message. Wrong page. The platforms make it easy to spend. They don't make it easy to profit.",
    },
    {
      number: '89%',
      title: 'Of websites lose visitors',
      description:
        "They come. They look. They leave. Your site isn't turning visitors into buyers. That's free money on the table.",
    },
  ]
  
  // Parse [em]...[/em] → red italic span
  function parseHeading(text: string) {
    const parts = text.split(/(\[em\].*?\[\/em\])/g)
    return parts.map((part, i) => {
      if (part.startsWith('[em]')) {
        const content = part.replace('[em]', '').replace('[/em]', '')
        return (
          <em key={i} style={{ color: '#F04438', fontStyle: 'italic' }}>
            {content}
          </em>
        )
      }
      return <span key={i}>{part}</span>
    })
  }
  
  export default function PainSection({
    heading = "You're probably [em]wasting money[/em] on ads right now.",
    cards = DEFAULT_CARDS,
  }: PainSectionProps) {
    return (
      <section style={{ background: '#080E1C' }}>
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: '80px 32px',
          }}
          className="pain-container"
        >
          {/* Section label */}
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '10px',
              fontFamily: 'var(--font-jetbrains)',
              color: '#34D48A',
              textAlign: 'center',
            }}
          >
            The problem
          </div>
  
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.3px',
              fontSize: 'clamp(30px, 4vw, 44px)',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            {parseHeading(heading)}
          </h2>
  
          {/* Pain Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="pain-grid"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#0F1729',
                  border: '1px solid rgba(255,255,255,.05)',
                  borderRadius: '16px',
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Red top accent line */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #F04438, transparent)',
                  }}
                />
  
                {/* Big number */}
                <div
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: '36px',
                    fontWeight: 800,
                    color: '#F04438',
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}
                >
                  {card.number}
                </div>
  
                {/* Title */}
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-jakarta)',
                  }}
                >
                  {card.title}
                </h3>
  
                {/* Description */}
                <p
                  style={{
                    fontSize: '13px',
                    color: '#A4B3C4',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-jakarta)',
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        <style>{`
          @media (max-width: 900px) {
            .pain-container {
              padding: 52px 16px !important;
            }
            .pain-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    )
  }
  