'use client'
// components/sections/HeroSection.tsx
import { useState } from 'react'

interface HeroStat {
  number: string
  label: string
}

interface HeroData {
  stats?: HeroStat[]
  heading?: string // Use [em]text[/em] for green italic. e.g. "We make your marketing [em]make money.[/em]"
  subheading?: string
  subheadingBoldPart?: string // The part that's bold inside subheading
  tags?: string[]
  formScarcity?: string
  formTitle?: string
  formSubtitle?: string
  ghlFormUrl?: string | null // If set, shows GHL iframe instead of default form
}

// ── Default content (matches wireframe exactly) ──────────────
const DEFAULTS: Required<Omit<HeroData, 'ghlFormUrl' | 'subheadingBoldPart'>> = {
  stats: [
    { number: '75+', label: 'Brands served' },
    { number: '$1.56M', label: 'Revenue generated' },
    { number: '7.05x', label: 'Best ROAS' },
  ],
  heading: 'We make your marketing [em]make money.[/em]',
  subheading: 'You spend money on ads. We make sure you get more back. If we can\'t improve your results in 90 days, we work for free.',
  tags: ['🛒 Ecommerce', '🏠 Local Business', '💪 Fitness', '🔧 Home Services', '👗 Fashion'],
  formScarcity: '🔥 3 spots left this month',
  formTitle: 'Free growth audit',
  formSubtitle: 'We look at your ads and site. Tell you what\'s broken. Takes 24 hours. Costs nothing.',
}

// ── Helper: parse [em]...[/em] → <em> with green color ───────
function parseHeading(text: string) {
  const parts = text.split(/(\[em\].*?\[\/em\])/g)
  return parts.map((part, i) => {
    if (part.startsWith('[em]')) {
      const content = part.replace('[em]', '').replace('[/em]', '')
      return (
        <em key={i} style={{ color: '#34D48A', fontStyle: 'italic' }}>
          {content}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

// ── Default Audit Form (shows when no GHL URL) ────────────────
function DefaultAuditForm({
  scarcity,
  title,
  subtitle,
}: {
  scarcity: string
  title: string
  subtitle: string
}) {
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // TODO: Wire to your backend / GHL webhook
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '24px',
        padding: '30px',
        boxShadow: '0 20px 50px rgba(8,14,28,.15)',
        border: '1px solid #DFE5ED',
        width: '100%',
      }}
    >
      {/* Scarcity */}
      <div
        style={{
          background: '#FEF3F2',
          borderRadius: '7px',
          padding: '8px 14px',
          marginBottom: '18px',
          fontSize: '12px',
          color: '#F04438',
          fontWeight: 700,
          textAlign: 'center',
          fontFamily: 'var(--font-jakarta)',
        }}
      >
        {scarcity}
      </div>

      <h2
        style={{
          fontSize: '19px',
          fontWeight: 800,
          color: '#080E1C',
          marginBottom: '3px',
          textAlign: 'center',
          fontFamily: 'var(--font-bricolage)',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: '13px',
          color: '#6E8098',
          marginBottom: '20px',
          textAlign: 'center',
          fontFamily: 'var(--font-jakarta)',
          lineHeight: 1.55,
        }}
      >
        {subtitle}
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <FormField label="Name" type="text" placeholder="John" required />
        {/* Email */}
        <FormField label="Email" type="email" placeholder="john@company.com" required />
        {/* Website */}
        <FormField label="Website" type="url" placeholder="yoursite.com" />

        {/* CTA */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '13px',
            background: '#25B472',
            color: '#fff',
            border: 'none',
            borderRadius: '9px',
            fontSize: '15px',
            fontWeight: 800,
            fontFamily: 'var(--font-jakarta)',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
            opacity: loading ? 0.75 : 1,
            marginTop: '4px',
          }}
          onMouseEnter={(e) => {
            if (!loading) (e.target as HTMLButtonElement).style.background = '#1C8F5A'
          }}
          onMouseLeave={(e) => {
            if (!loading) (e.target as HTMLButtonElement).style.background = '#25B472'
          }}
        >
          {loading ? 'Submitting...' : 'Show Me What\'s Broken →'}
        </button>

        {/* Trust badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            marginTop: '13px',
            paddingTop: '13px',
            borderTop: '1px solid #DFE5ED',
            fontSize: '11.5px',
            color: '#6E8098',
            fontFamily: 'var(--font-jakarta)',
          }}
        >
          {['No contracts', '24hr delivery', '100% free'].map((badge) => (
            <span key={badge}>
              <span style={{ color: '#25B472', fontWeight: 800 }}>✓</span> {badge}
            </span>
          ))}
        </div>
      </form>
    </div>
  )
}

// ── Form Field Helper ─────────────────────────────────────────
function FormField({
  label,
  type,
  placeholder,
  required,
}: {
  label: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div style={{ marginBottom: '13px' }}>
      <label
        style={{
          display: 'block',
          fontSize: '11.5px',
          fontWeight: 700,
          color: '#3E5068',
          marginBottom: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          fontFamily: 'var(--font-jetbrains)',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '11px 14px',
          border: '1.5px solid #DFE5ED',
          borderRadius: '9px',
          fontSize: '14px',
          fontFamily: 'var(--font-jakarta)',
          color: '#080E1C',
          background: '#F2F5F8',
          transition: 'all 0.2s',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#25B472'
          e.target.style.background = '#fff'
          e.target.style.boxShadow = '0 0 0 3px rgba(37,180,114,.1)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#DFE5ED'
          e.target.style.background = '#F2F5F8'
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}

// ── GHL iframe Form ───────────────────────────────────────────
function GHLForm({ url, height = '520px' }: { url: string; height?: string }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(8,14,28,.15)',
        border: '1px solid #DFE5ED',
        width: '100%',
      }}
    >
      <iframe
        src={url}
        style={{ width: '100%', height, border: 'none', display: 'block' }}
        loading="lazy"
        title="Free Audit Form"
      />
    </div>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function HeroSection({
  stats = DEFAULTS.stats,
  heading = DEFAULTS.heading,
  subheading = DEFAULTS.subheading,
  subheadingBoldPart,
  tags = DEFAULTS.tags,
  formScarcity = DEFAULTS.formScarcity,
  formTitle = DEFAULTS.formTitle,
  formSubtitle = DEFAULTS.formSubtitle,
  ghlFormUrl,
}: HeroData) {
  // Parse subheading — bold the specified part
  function renderSubheading() {
    if (!subheadingBoldPart || !subheading.includes(subheadingBoldPart)) {
      return subheading
    }
    const [before, after] = subheading.split(subheadingBoldPart)
    return (
      <>
        {before}
        <strong style={{ color: '#fff', fontWeight: 600 }}>{subheadingBoldPart}</strong>
        {after}
      </>
    )
  }

  return (
    <section
      className="hero-section"
      style={{
        background: 'linear-gradient(160deg,#080E1C 0%,#0F1729 40%,#1A2540 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative green glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle,rgba(37,180,114,.08),transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="hero-inner"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '64px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 390px',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── LEFT: Text content ── */}
        <div>
          {/* Stats row */}
          <div
            className="hero-stats"
            style={{
              display: 'flex',
              gap: '28px',
              marginBottom: '24px',
              flexWrap: 'wrap',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Divider after each stat except last */}
                {i < stats.length - 1 && (
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      right: '-14px',
                      top: '20%',
                      height: '60%',
                      width: '1px',
                      background: 'rgba(255,255,255,.1)',
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: '34px',
                    fontWeight: 800,
                    color: '#34D48A',
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#A4B3C4',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: 600,
                    marginTop: '4px',
                    fontFamily: 'var(--font-jetbrains)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: 'clamp(40px, 5.5vw, 60px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.06,
              marginBottom: '18px',
              letterSpacing: '-0.5px',
            }}
          >
            {parseHeading(heading)}
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: '16.5px',
              color: '#A4B3C4',
              lineHeight: 1.65,
              marginBottom: '28px',
              fontFamily: 'var(--font-jakarta)',
            }}
          >
            {renderSubheading()}
          </p>

          {/* Industry tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '7px',
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: '#1A2540',
                  border: '1px solid rgba(255,255,255,.06)',
                  padding: '5px 13px',
                  borderRadius: '99px',
                  fontSize: '12px',
                  color: '#A4B3C4',
                  fontWeight: 500,
                  fontFamily: 'var(--font-jakarta)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="hero-form-wrap">
          {ghlFormUrl ? (
            <GHLForm url={ghlFormUrl} />
          ) : (
            <DefaultAuditForm
              scarcity={formScarcity}
              title={formTitle}
              subtitle={formSubtitle}
            />
          )}
        </div>
      </div>

    </section>
  )
}
