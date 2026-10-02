/** Content reused across several pages. Page-specific copy lives in the page's own content file. */
import { caseHref, getCaseStudy } from './case-studies'
import type { Founder, ReviewShotItem, VideoTestimonial } from './types'
import { FOUNDER_VIDEOS } from './videos'

export const TRUST_BADGES = [
  'Shopify Certified Partner',
  'Listed On Clutch',
  'Listed On GoodFirms',
  'Top Rated, Upwork',
] as const

export const CLIENT_NAMES = [
  'EZDTFMaker',
  'EZTmart',
  'The MACP Store',
  'TrashedPunk',
  'AF Blanks',
  'Avant Printing',
  'Innterflow',
  'Stellar College',
] as const

/** Client name, headline result and link, read from the case study so the numbers never drift. */
function caseSummary(slug: string) {
  const study = getCaseStudy(slug)
  if (!study) throw new Error(`Unknown case study: ${slug}`)
  return { client: study.listing.name, result: study.listing.result, href: caseHref(slug) }
}

/** Real founder testimonials, shown beside the client name, result and a link to the case study. */
export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [
  {
    label: 'EZDTFMaker — Founder',
    ...FOUNDER_VIDEOS.ezdtfmaker,
    role: 'Founder',
    ...caseSummary('ezdtfmaker'),
  },
  {
    label: 'TrashedPunk — Founder',
    ...FOUNDER_VIDEOS.trashedpunk,
    role: 'Founder',
    ...caseSummary('trashedpunk'),
  },
]

/**
 * Review screenshots (files in /public/images/reviews), in priority order: on phones the wall shows the first few
 * and reveals the rest on "Show all". Every 4th entry is a Shopify analytics graph, so the graphs are spread through the wall. Masonry layout, so mixed aspect ratios are fine.
 */
export const REVIEW_SHOTS: readonly ReviewShotItem[] = [
  {
    platform: 'Upwork Profile',
    image: { src: '/images/reviews/upwork-profile.jpeg', alt: 'Upwork profile of Ikrash O.: Top Rated, 100% job success, 5.0 stars from 7 reviews', width: 1600, height: 1092 },
  },
  {
    platform: 'Clutch Review',
    image: { src: '/images/reviews/clutch-review.jpeg', alt: 'Five-star Clutch review: “I think they are perfect.”', width: 1431, height: 406 },
  },
  {
    platform: 'GoodFirms Review',
    image: { src: '/images/reviews/goodfirms-review.jpeg', alt: 'Five-star GoodFirms review titled “Flawless” from the director of Lofty Creations Apparel', width: 1547, height: 977 },
  },
  {
    platform: 'Shopify Analytics',
    image: { src: '/images/reviews/shopify-sales-jun-2026.jpeg', alt: 'Shopify total sales over time for June 2026: US$105,473.52', width: 535, height: 339 },
  },
  {
    platform: 'Google Review',
    image: { src: '/images/reviews/google-review-card.jpeg', alt: 'Google review: “They created my 2 websites and I highly recommend them.”', width: 553, height: 270 },
  },
  {
    platform: 'Shopify Partner Review',
    image: { src: '/images/reviews/shopify-partner-macp.jpeg', alt: 'Five-star Shopify Partner review from The MACP Store praising communication and quality of work', width: 1600, height: 751 },
  },
  {
    platform: 'WhatsApp',
    image: { src: '/images/reviews/whatsapp-jason-1.jpeg', alt: 'WhatsApp message from Lofty Creations: “I never imagined having such a great, professional looking website.”', width: 1600, height: 738 },
  },
  {
    platform: 'Shopify Analytics',
    image: { src: '/images/reviews/shopify-cvr-jun-2026.jpeg', alt: 'Shopify conversion rate over time for June 2026: 3.54%', width: 538, height: 348 },
  },
  {
    platform: 'Clutch Review',
    image: { src: '/images/reviews/clutch-review-2.jpeg', alt: 'Five-star Clutch review of an e-commerce build for a fashion and apparel company: “Their communication was impressive.”', width: 1393, height: 552 },
  },
  {
    platform: 'Shopify Partner Review',
    image: { src: '/images/reviews/shopify-partner-freshfits.jpeg', alt: 'Five-star Shopify Partner review from freshfits praising the transparent process and communication', width: 1030, height: 369 },
  },
  {
    platform: 'Upwork Review',
    image: { src: '/images/reviews/upwork-review.jpeg', alt: 'Five-star Upwork review of a Shopify store audit: “Delivered an amazing job.”', width: 1349, height: 1029 },
  },
  {
    platform: 'Shopify Analytics',
    image: { src: '/images/reviews/shopify-sales-may-2026.jpeg', alt: 'Shopify total sales over time for May 2026: US$29,146.59', width: 556, height: 366 },
  },
  {
    platform: 'Google Review',
    image: { src: '/images/reviews/google-review-khuram.jpeg', alt: 'Five-star Google review from Khuram Ahmed: “Excellent service from team AheadTech360.”', width: 1600, height: 602 },
  },
  {
    platform: 'Shopify Partner Review',
    image: { src: '/images/reviews/shopify-partner-maniyas.jpeg', alt: 'Five-star Shopify Partner review from Maniyas: “These guys are really good at their work!”', width: 993, height: 322 },
  },
  {
    platform: 'WhatsApp',
    image: { src: '/images/reviews/whatsapp-trashedpunk-1.jpeg', alt: 'WhatsApp message from TrashedPunk: “You guys are nailing it. Let’s go!”', width: 708, height: 777 },
  },
  {
    platform: 'Shopify Analytics',
    image: { src: '/images/reviews/shopify-cvr-may-2026.jpeg', alt: 'Shopify conversion rate over time for May 2026: 10.27%', width: 547, height: 352 },
  },
  {
    platform: 'Google Review',
    image: { src: '/images/reviews/google-review-grade.jpeg', alt: 'Five-star Google review: “Been working with AheadTech360 for 6 months now, they’re managing everything from our website to social media and marketing.”', width: 813, height: 307 },
  },
  {
    platform: 'Upwork Review',
    image: { src: '/images/reviews/upwork-review-dtf.jpeg', alt: 'Five-star Upwork review of a Shopify store for DTF printing apparel: “No revisions were needed.”', width: 1098, height: 328 },
  },
  {
    platform: 'WhatsApp',
    image: { src: '/images/reviews/whatsapp-trashedpunk-2.jpeg', alt: 'WhatsApp message from TrashedPunk thanking the team for the blogs, SEO and CRO work', width: 708, height: 546 },
  },
  {
    platform: 'Shopify Analytics',
    image: { src: '/images/reviews/shopify-cvr-aug-2026.jpeg', alt: 'Shopify conversion rate over time for August 2026: 16.81%', width: 544, height: 352 },
  },
  {
    platform: 'Client Review',
    image: { src: '/images/reviews/client-review-dido.jpeg', alt: 'Verified review from the owner of Dido’s: “Ikrash and his team have helped me grow my business.”', width: 1450, height: 225 },
  },
  {
    platform: 'WhatsApp',
    image: { src: '/images/reviews/whatsapp-jason-2.jpeg', alt: 'WhatsApp message from Lofty Creations: “This was just what I was after, great work guys.”', width: 1600, height: 617 },
  },
  {
    platform: 'WhatsApp',
    image: { src: '/images/reviews/whatsapp-latchmin.jpeg', alt: 'WhatsApp message from a client: “It’s awesome, I love it.”', width: 1600, height: 438 },
  },
  {
    platform: 'Shopify Analytics',
    image: { src: '/images/reviews/shopify-bounce-aug-2026.jpeg', alt: 'Shopify bounce rate over time for August 2026: 38.06%', width: 561, height: 360 },
  },
]

export const GUARANTEE = {
  title: "If conversion doesn't improve in 90 days, we work free until it does.",
  text: 'Written into the agreement. Conditions: onboarding access, on-time approvals, spend held at the tier minimum.',
} as const

/** Square head-and-shoulders crops in /public/images/team. */
const PHOTO_IKRASH = { src: '/images/team/owner-1.webp', alt: 'Portrait of Ikrash Ovais', width: 480, height: 480 } as const
const PHOTO_IQRAR = { src: '/images/team/owner-2.webp', alt: 'Portrait of Iqrar Hussain', width: 480, height: 480 } as const

export const FOUNDERS_SHORT: readonly Founder[] = [
  {
    name: 'Ikrash Ovais',
    role: 'Founder & CEO',
    badge: 'Top Rated, Upwork',
    bio: 'Started as a freelance designer for fashion brands, built the buyer-psychology fluency this system runs on.',
    photo: PHOTO_IKRASH,
  },
  {
    name: 'Iqrar Hussain',
    role: 'Co-Founder & COO',
    bio: 'Runs the performance marketing engine and the weekly testing cycle that scales spend safely.',
    photo: PHOTO_IQRAR,
  },
]

export const FOUNDERS_FULL: readonly Founder[] = [
  {
    name: 'Ikrash Ovais',
    role: 'Founder & CEO',
    badge: 'Top Rated, Upwork',
    bio: 'Started as a freelance designer for fashion brands, built the buyer-psychology fluency this system runs on. The on-camera face of AheadTech360, and still runs sales calls himself end to end, from first call to close.',
    photo: PHOTO_IKRASH,
  },
  {
    name: 'Iqrar Hussain',
    role: 'Co-Founder & COO',
    bio: "Leads performance marketing end to end, runs the ad accounts and the weekly testing cycle that scales spend safely. The operational backbone that keeps every account's numbers accountable, week over week.",
    photo: PHOTO_IQRAR,
  },
]

export const PRICING_TEASER = {
  eyebrow: 'Investment',
  title: 'One retainer, sized to your revenue.',
  text: 'Retainers start at $1,000/mo, plus a one-time setup fee. Full breakdown on a call.',
} as const
