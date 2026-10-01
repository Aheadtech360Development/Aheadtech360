// components/sections/VerticalsSection.tsx
// "Who we work with" — the four apparel verticals. Home page only, no existing counterpart.
import Image from 'next/image'

interface Vertical {
  image: string
  title: string
  description: string
}

const VERTICALS: Vertical[] = [
  {
    image: '/images/Iqrar_khoso_A_glossy_3D_heat_press_pressing_a_printed_t-shirt_a_peeled_DTF_t_3bc05d53-a57c-421a-ad81-18443bc62d08.png',
    title: 'Custom & Print',
    description: 'DTF, screen print, embroidery, and POD shops that need orders, not quote chaos.',
  },
  {
    image: '/images/Iqrar_khoso_A_glossy_3D_product_page_mockup_with_a_clear_green_add-to-cart_bu_b00a9ded-b0c0-4302-9fdd-d7632c5824de.png',
    title: 'Retail Fashion & D2C',
    description: 'Clothing brands that need traffic to turn into sales.',
  },
  {
    image: '/images/Iqrar_khoso_A_glossy_3D_thick_catalog_binder_open_beside_a_small_navy_wholesa_bfc89bea-2605-4a3a-8420-db3c6b793612.png',
    title: 'Wholesale & Blank Apparel',
    description: 'B2B suppliers whose buyers stall at minimums and bulk pricing.',
  },
  {
    image: '/images/Streetwear-brand.webp',
    title: 'Accessories, Niche & Streetwear',
    description: 'Drop driven brands that need momentum between releases.',
  },
]

export default function VerticalsSection() {
  return (
    <section style={{ padding: '80px 32px', background: '#fff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '.72rem',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#1C8F5A',
            fontWeight: 600,
            marginBottom: '14px',
          }}
        >
          Who we work with
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(1.55rem,3.2vw,2.3rem)',
            fontWeight: 800,
            color: '#1C2A42',
            lineHeight: 1.13,
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          Fashion and apparel. Nothing else.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#6E8098', maxWidth: '60ch', marginTop: '8px', marginBottom: '32px' }}>
          Different apparel businesses leak revenue in different places. We work in four, and only four.
        </p>

        <div className="verticals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '22px' }}>
          {VERTICALS.map((v) => (
            <div
              key={v.title}
              title="Coming soon"
              style={{ background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(8,14,28,.07)' }}
            >
              <figure style={{ position: 'relative', aspectRatio: '16/10', background: '#fff' }}>
                <Image src={v.image} alt={v.title} fill style={{ objectFit: 'contain' }} />
              </figure>
              <div style={{ padding: '20px 22px' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.64rem', letterSpacing: '.13em', textTransform: 'uppercase', color: '#1C8F5A' }}>Vertical</span>
                <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', margin: '6px 0' }}>{v.title}</h3>
                <p style={{ color: '#6E8098', fontSize: '.94rem', lineHeight: 1.6 }}>{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .verticals-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
