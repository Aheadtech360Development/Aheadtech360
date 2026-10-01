// components/layout/Topbar.tsx
// ─────────────────────────────────────────────────────────────
// TOPBAR — "We helped 75+ brands generate $1.56M+ in revenue..."
// Dark background (#0F1729), center-aligned, green bold highlights
// ─────────────────────────────────────────────────────────────

interface TopbarProps {
  text?: string
}

// Default content — in production this data comes from Sanity CMS
const DEFAULT_TEXT = "We helped <b>75+ brands</b> generate <b>$1.56M+ in revenue</b>. Average ROI: <b>240% in Year 1</b>"

export default function Topbar({ text = DEFAULT_TEXT }: TopbarProps) {
  return (
    <div
      style={{ backgroundColor: '#0F1729' }}
      className="text-center px-4 py-[7px] text-[12px]"
    >
      <p
        className="text-[#A4B3C4] leading-snug"
        dangerouslySetInnerHTML={{
          __html: text.replace(
            /<b>(.*?)<\/b>/g,
            '<strong style="color:#34D48A;font-weight:700">$1</strong>'
          ),
        }}
      />
    </div>
  )
}
