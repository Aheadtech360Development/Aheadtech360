'use client'
import Image from 'next/image'
import Link from 'next/link'

const CAT_COLORS: Record<string, string> = {
  'Meta Ads': '#213D79', 'Google Ads': '#25B472', 'CRO': '#7C3AED',
  'Tracking': '#F79009', 'Email': '#F04438', 'Strategy': '#0891B2',
}

interface BlogCardProps {
  slug: string
  category: string
  title: string
  excerpt: string
  image: string | null
}

export default function BlogCard({ slug, category, title, excerpt, image }: BlogCardProps) {
  return (
    <Link href={slug !== '#' ? `/blog/${slug}` : '#'} style={{ textDecoration: 'none' }}>
      <article
        style={{ background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', height: '100%', transition: 'all 0.3s', cursor: 'pointer' }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = '0 12px 40px rgba(8,14,28,.12)'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = 'none'
          el.style.transform = 'translateY(0)'
        }}>
        <div style={{ height: '250px', background: '#DFE5ED', position: 'relative', overflow: 'hidden' }}>
          {image ? (
            <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
          ) : (
            <div style={{ display: 'grid', placeItems: 'center', height: '100%', fontSize: '10px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Blog image</div>
          )}
        </div>
        <div style={{ padding: '20px' }}>``
          <div style={{ fontSize: '10px', fontWeight: 800, color: CAT_COLORS[category] || '#213D79', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontFamily: 'var(--font-jetbrains)' }}>{category}</div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#080E1C', marginBottom: '6px', lineHeight: 1.4, fontFamily: 'var(--font-bricolage)' }}>{title}</h3>
          <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.5, fontFamily: 'var(--font-jakarta)' }}>{excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
