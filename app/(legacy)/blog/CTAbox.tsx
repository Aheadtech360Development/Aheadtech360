// ═══════════════════════════════════════════════════════════════
// FILE 1: components/blog/CTABox.tsx
// Reusable CTA box — use in blog body OR at end of post
// ═══════════════════════════════════════════════════════════════

import Link from 'next/link'

interface CTABoxProps {
  heading?: string
  description?: string
  linkText?: string
  linkUrl?: string
  emoji?: string
  variant?: 'blue' | 'green' | 'dark'
}

export default function CTABox({
  heading     = 'Want to know where your website stands right now?',
  description = 'At AheadTech360, we help small businesses build strategies that bring in real leads — not just traffic numbers.',
  linkText    = 'Get your FREE audit at: aheadtech360.com/contact',
  linkUrl     = '/contact',
  emoji       = '👉',
  variant     = 'blue',
}: CTABoxProps) {

  const styles: Record<string, React.CSSProperties> = {
    blue: {
      background: '#EEF2F9',
      border: '1.5px solid #C7D4ED',
      color: '#213D79',
    },
    green: {
      background: '#EDFBF3',
      border: '1.5px solid #A7EACC',
      color: '#1C8F5A',
    },
    dark: {
      background: '#080E1C',
      border: '1.5px solid #1A2540',
      color: '#fff',
    },
  }

  const s = styles[variant]

  return (
    <div style={{
      ...s,
      borderRadius: '14px',
      padding: '24px 28px',
      margin: '32px 0',
      textAlign: 'center',
    }}>
      {/* Heading */}
      <p style={{
        fontFamily: 'var(--font-bricolage)',
        fontSize: '16px',
        fontWeight: 800,
        color: variant === 'dark' ? '#fff' : '#080E1C',
        marginBottom: '8px',
        lineHeight: 1.35,
      }}>
        {heading}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-jakarta)',
        fontSize: '14px',
        color: variant === 'dark' ? '#A4B3C4' : '#374151',
        lineHeight: 1.65,
        marginBottom: '14px',
      }}>
        {description}
      </p>

      {/* CTA Link */}
      <Link href={linkUrl} style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-jakarta)',
          fontSize: '14px',
          fontWeight: 800,
          color: s.color as string,
        }}>
          {emoji} {linkText}
        </span>
      </Link>
    </div>
  )
}

