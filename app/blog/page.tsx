// // app/blog/page.tsx
// export const revalidate = 60

// import { sanityFetch } from '@/sanity/lib/client'
// import BlogCard from '@/components/sections/BlogCard'

// const QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
//   "slug": slug.current,
//   category, title, excerpt,
//   "image": coverImage.asset->url
// }`

// const FALLBACK_POSTS = [
//   { slug: '#', category: 'Meta Ads', title: 'How to test ad creatives without wasting money', excerpt: 'The angle-first testing system we use for every client.', image: null },
//   { slug: '#', category: 'Google Ads', title: 'Exact match vs broad match: the real answer', excerpt: 'When to use each. With our campaign structure template.', image: null },
//   { slug: '#', category: 'CRO', title: '7 things killing your website conversion rate', excerpt: 'The most common problems we find in every audit.', image: null },
//   { slug: '#', category: 'Tracking', title: 'Fix your Meta CAPI in 30 minutes', excerpt: 'Step-by-step. We took a client from 4/10 to 9.3/10.', image: null },
//   { slug: '#', category: 'Email', title: '5 email flows every store needs (with templates)', excerpt: 'Copy-paste flows for welcome, cart, post-purchase.', image: null },
//   { slug: '#', category: 'Strategy', title: 'How to split a $5K/month ad budget', excerpt: 'The exact allocation we use for clients spending $3-10K.', image: null },
// ]

// export default async function BlogPage() {
//   const posts = await sanityFetch<any[]>(QUERY)
//   const displayPosts = posts?.length ? posts : FALLBACK_POSTS

//   return (
//     <>
//       <section style={{ background: '#fff', textAlign: 'center', padding: '60px 32px 32px' }}>
//         <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
//           <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Blog</div>
//           <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42' }}>
//             Stuff that <em style={{ color: '#25B472', fontStyle: 'italic' }}>actually helps.</em>
//           </h1>
//           <p style={{ fontSize: '15px', color: '#6E8098', margin: '8px auto 0', fontFamily: 'var(--font-jakarta)' }}>Same playbook we use for clients. Free.</p>
//         </div>
//       </section>

//       <section style={{ background: '#fff' }}>
//         <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px 80px' }} className="blog-container">
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="blog-grid">
//             {displayPosts.map((post: any, i: number) => (
//               <BlogCard
//                 key={i}
//                 slug={post.slug}
//                 category={post.category}
//                 title={post.title}
//                 excerpt={post.excerpt}
//                 image={post.image}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @media(max-width:900px){
//           .blog-container { padding: 0 16px 52px !important; }
//           .blog-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </>
//   )
// }


// app/blog/page.tsx  ← SERVER COMPONENT (no 'use client')
import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Marketing Blog — AheadTech360',
  description: 'Actionable guides on Meta Ads, Google Ads, SEO, CRO, Email Marketing and more for ecommerce and service businesses.',
  keywords: 'meta ads, google ads, facebook ads, ecommerce marketing, SEO, CRO, email marketing',
  alternates: { canonical: 'https://aheadtech360.com/blog' },
}
import BlogClientPage from '@/app/blog/BlogClientPage'

const QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  "slug": slug.current,
  category, title, excerpt,
  "image": coverImage.asset->url
}`

export default async function BlogPage() {
  const posts = await sanityFetch<any[]>(QUERY)
  return <BlogClientPage posts={posts || []} />
}