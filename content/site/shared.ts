/** Content reused across several pages. Page-specific copy lives in the page's own content file. */
import type { Founder, ReviewShotItem, VideoItem } from './types'

export const TRUST_BADGES = [
  'Shopify Certified Partner',
  'Listed On Clutch',
  'Listed On GoodFirms',
  'Top Rated, Upwork',
] as const

export const CLIENT_NAMES = ['EZDTFMaker', 'EZTmart', 'The MACP Store', 'TrashedPunk'] as const

/** Real founder testimonials (files in /public/videos). */
export const VIDEO_TESTIMONIALS: readonly VideoItem[] = [
  { label: 'EZDTFMaker — Founder', src: '/videos/ezt.mp4' },
  { label: 'TrashedPunk — Founder', src: '/videos/at360.mp4' },
]

/**
 * Review screenshots (files in /public/images). To add more, append an entry — for example an Upwork
 * review once the screenshot exists; an entry without `image` renders as a labelled placeholder.
 */
export const REVIEW_SHOTS: readonly ReviewShotItem[] = [
  {
    platform: 'Google Business',
    image: { src: '/images/google/x.jpeg', alt: 'Google review from Ahmed Amin praising AheadTech360’s work ethic and quality', width: 798, height: 171 },
  },
  {
    platform: 'Google Business',
    image: { src: '/images/google/xx.jpeg', alt: 'Five-star Google review of AheadTech360', width: 780, height: 279 },
  },
  {
    platform: 'Clutch Review',
    image: { src: '/images/clutch/cc.jpeg', alt: 'Five-star Clutch review: “I think they are perfect.”', width: 1600, height: 567 },
  },
  {
    platform: 'GoodFirms Review',
    image: { src: '/images/goodfirm/kk.jpeg', alt: 'Five-star GoodFirms review titled “Flawless”', width: 1582, height: 719 },
  },
]

export const GUARANTEE = {
  title: "If conversion doesn't improve in 90 days, we work free until it does.",
  text: 'Written into the agreement. Conditions: onboarding access, on-time approvals, spend held at the tier minimum.',
} as const

export const FOUNDERS_SHORT: readonly Founder[] = [
  {
    name: 'Ikrash Ovais',
    role: 'Founder & CEO',
    badge: 'Top Rated, Upwork',
    bio: 'Started as a freelance designer for fashion brands, built the buyer-psychology fluency this system runs on.',
  },
  {
    name: 'Iqrar Hussain',
    role: 'Co-Founder & COO',
    bio: 'Runs the performance marketing engine and the weekly testing cycle that scales spend safely.',
  },
]

export const FOUNDERS_FULL: readonly Founder[] = [
  {
    name: 'Ikrash Ovais',
    role: 'Founder & CEO',
    badge: 'Top Rated, Upwork',
    bio: 'Started as a freelance designer for fashion brands, built the buyer-psychology fluency this system runs on. The on-camera face of AheadTech360, and still runs sales calls himself end to end, from first call to close.',
  },
  {
    name: 'Iqrar Hussain',
    role: 'Co-Founder & COO',
    bio: "Leads performance marketing end to end, runs the ad accounts and the weekly testing cycle that scales spend safely. The operational backbone that keeps every account's numbers accountable, week over week.",
  },
]

export const PRICING_TEASER = {
  eyebrow: 'Investment',
  title: 'One retainer, sized to your revenue.',
  text: 'Retainers start at $1,000/mo, plus a one-time setup fee. Full breakdown on a call.',
} as const
