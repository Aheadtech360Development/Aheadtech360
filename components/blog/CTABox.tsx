// components/blog/CTABox.tsx
// Inline CTA box embeddable anywhere in a blog post body (via Sanity ctaBox block).
// Also used automatically at the end of every post.

interface CTABoxProps {
  heading?: string
  subtext?: string
  buttonText?: string
  buttonUrl?: string
  theme?: 'green' | 'dark' | 'blue'
}

const THEMES = {
  green: {
    bg: 'linear-gradient(135deg,#EDFBF3,#D1FAE5)',
    border: '#86EFAC',
    headingColor: '#064E3B',
    subtextColor: '#065F46',
    btnBg: '#25B472',
    btnColor: '#fff',
    btnHoverBg: '#1C8F5A',
    badge: '#25B472',
    badgeText: '#fff',
    badgeLabel: 'Free Audit',
  },
  dark: {
    bg: 'linear-gradient(135deg,#080E1C,#162952)',
    border: 'rgba(255,255,255,.08)',
    headingColor: '#fff',
    subtextColor: '#A4B3C4',
    btnBg: '#25B472',
    btnColor: '#fff',
    btnHoverBg: '#1C8F5A',
    badge: '#34D48A',
    badgeText: '#080E1C',
    badgeLabel: 'Free Audit',
  },
  blue: {
    bg: 'linear-gradient(135deg,#EEF2F9,#DBEAFE)',
    border: '#BFDBFE',
    headingColor: '#1C2A42',
    subtextColor: '#3E5068',
    btnBg: '#213D79',
    btnColor: '#fff',
    btnHoverBg: '#162952',
    badge: '#213D79',
    badgeText: '#fff',
    badgeLabel: 'Free Audit',
  },
}

export default function CTABox({
  heading = 'Want us to look at your ads?',
  subtext = 'Free audit. No contracts. We find what\'s broken and tell you how to fix it in 24 hours.',
  buttonText = 'Get My Free Audit →',
  buttonUrl = '/contact',
  theme = 'green',
}: CTABoxProps) {
  const t = THEMES[theme] ?? THEMES.green

  return (
    <div style={{
      background: t.bg,
      border: `1.5px solid ${t.border}`,
      borderRadius: '16px',
      padding: '32px 36px',
      margin: '40px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blob */}
      <div aria-hidden style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '160px', height: '160px',
        background: theme === 'dark' ? 'rgba(37,180,114,.08)' : 'rgba(37,180,114,.12)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        display: 'inline-block',
        background: t.badge,
        color: t.badgeText,
        fontSize: '10px',
        fontWeight: 800,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        padding: '4px 12px',
        borderRadius: '99px',
        marginBottom: '14px',
        fontFamily: 'var(--font-jetbrains)',
      }}>
        {t.badgeLabel}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-bricolage)',
        fontSize: 'clamp(20px,2.5vw,26px)',
        fontWeight: 800,
        color: t.headingColor,
        lineHeight: 1.15,
        marginBottom: '10px',
      }}>
        {heading}
      </h3>

      <p style={{
        fontSize: '14.5px',
        color: t.subtextColor,
        lineHeight: 1.65,
        marginBottom: '22px',
        fontFamily: 'var(--font-jakarta)',
        maxWidth: '480px',
      }}>
        {subtext}
      </p>

      <a
        href={buttonUrl}
        className="cta-box-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '12px 28px',
          borderRadius: '10px',
          fontSize: '15px',
          fontWeight: 700,
          background: t.btnBg,
          color: t.btnColor,
          fontFamily: 'var(--font-jakarta)',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
      >
        {buttonText}
      </a>

      <style>{`
        .cta-box-btn:hover {
          background: ${t.btnHoverBg} !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37,180,114,.3);
        }
      `}</style>
    </div>
  )
}
