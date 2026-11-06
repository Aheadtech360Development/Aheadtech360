/** Copy and proof for the /reviews page. Screenshots are the same files the review wall uses (shared.ts). */
import { REVIEW_SHOTS } from './shared'
import type { ReviewShotItem } from './types'

export const REVIEWS_HERO = {
  tag: 'Reviews and proof',
  title: 'Don’t take our word for it.',
  lede: 'Store owners on Google, Clutch, GoodFirms, Upwork and Shopify Partner say it better than we can. Every named result links to a live store you can open yourself.',
  facts: [
    { label: 'Brands served', value: '35+ fashion and apparel brands' },
    { label: 'Credentials', value: 'Shopify Certified Partner' },
    { label: 'Listed on', value: 'Clutch and GoodFirms' },
    { label: 'Upwork', value: 'Top Rated' },
  ],
  rating: { label: 'Average rating', value: '4.9/5', sub: 'across Clutch and Google' },
} as const

export const CREDENTIALS = [
  { title: 'Shopify Certified Partner', text: 'Shopify partner program' },
  { title: 'Listed on Clutch', text: 'Client reviews on Clutch' },
  { title: 'Listed on GoodFirms', text: 'Client reviews on GoodFirms' },
  { title: 'Top Rated on Upwork', text: '5.0 rating, 100% job success' },
  { title: '4.9/5 average', text: 'Across Clutch and Google' },
] as const

export interface Quote {
  text: string
  name: string
  role: string
  source: string
}

export const QUOTES: readonly Quote[] = [
  { text: 'Flawless. Dealing with AheadTech360 to rebuild and redesign my website has been an absolute pleasure from start to finish.', name: 'Jason Beevor', role: 'Director, Lofty Creations Apparel Ltd', source: 'GoodFirms, verified review · Apr 2026' },
  { text: 'There are 2 things I look for in any organization: work ethics and quality of work. AheadTech360 excels in both. They created my 2 websites and I highly recommend them.', name: 'Google reviewer', role: 'Two websites built', source: 'Google review' },
  { text: 'Guys, I never imagined having such a great, professional looking website.', name: 'Jason Beevor', role: 'Director, Lofty Creations Apparel Ltd', source: 'Client message' },
  { text: 'You guys are nailing it. Let’s go!', name: 'Donnie Todd', role: 'TrashedPunk', source: 'Client message · Mar 2026' },
  { text: 'Ikrash and his team have helped me grow my business. They are experts in website development and Meta ADS specialists. I have been with them since Jan 2024, I would highly recommend using their services as they are good at what they do.', name: 'Khurram A.', role: 'Owner, Dido’s', source: 'Verified review · Aug 2024' },
  { text: 'Been working with AheadTech360 for 6 months now, they’re managing everything from our website to social media and marketing. It’s rare to find a team that just gets it. They’re responsive, easy to work with, and actually deliver results.', name: 'Grade Lao', role: 'Long-term client', source: 'Google review' },
  { text: 'I had an excellent experience working with Aheadtech360. Their team is professional, knowledgeable, and truly dedicated to providing top-quality service.', name: 'The MACP Store', role: 'Store build', source: 'Shopify Partner review · Oct 2025' },
  { text: 'AheadTech360 team did a really good job. There was transparency throughout the process. They first shared the wireframes and then moved into development after that.', name: 'freshfits', role: 'Store build', source: 'Shopify Partner review · May 2026' },
]

export const STORE_LINKS = [
  { label: 'ezdtfmaker.com', href: 'https://ezdtfmaker.com/' },
  { label: 'eztmart.com', href: 'https://eztmart.com/' },
  { label: 'themacpstore.com', href: 'https://themacpstore.com/' },
  { label: 'trashedpunk.com', href: 'https://trashedpunk.com/' },
] as const

export const PROMISE = {
  tag: 'Our promise',
  title: 'More revenue in 90 days, or we keep working free.',
  text: 'If your conversion rate has not improved after 90 days, we keep working at no charge until it does. The guarantee is written into the agreement, not into a sales page.',
  note: 'It covers conversion rate, not ad return. It assumes access at onboarding, approvals on time, and ad spend held at the agreed minimum for the 90 days.',
  steps: [
    { when: 'Week 1', title: 'Access and baseline', text: 'We get access and record where the store stands today.' },
    { when: 'Week 2', title: 'Build', text: 'Fixes and tracking go in, one variable at a time.' },
    { when: 'Week 3', title: 'Live', text: 'Everything goes live and the numbers start moving.' },
    { when: 'Week 4', title: 'Review', text: 'We review the first real numbers and adjust.' },
  ],
} as const

/** Picks screenshots out of the shared wall by file name; a [file, label] pair replaces the platform caption. */
function pick(files: readonly (string | readonly [string, string])[]): ReviewShotItem[] {
  return files.map((entry) => {
    const [file, label] = typeof entry === 'string' ? [entry, undefined] : entry
    const shot = REVIEW_SHOTS.find((s) => s.image.src.endsWith(`/${file}`))
    if (!shot) throw new Error(`Review screenshot not found: ${file}`)
    return label ? { ...shot, platform: label } : shot
  })
}

export const RECEIPTS = {
  platform: pick([
    'upwork-profile.jpeg',
    'upwork-review.jpeg',
    'upwork-review-dtf.jpeg',
    'clutch-review.jpeg',
    'clutch-review-2.jpeg',
    'goodfirms-review.jpeg',
    'google-review-card.jpeg',
    'google-review-grade.jpeg',
    'google-review-khuram.jpeg',
    'client-review-dido.jpeg',
    'shopify-partner-macp.jpeg',
    'shopify-partner-freshfits.jpeg',
  ]),
  messages: pick(['whatsapp-jason-1.jpeg', 'whatsapp-jason-2.jpeg', 'whatsapp-latchmin.jpeg', 'whatsapp-trashedpunk-1.jpeg', 'whatsapp-trashedpunk-2.jpeg']),
  analytics: pick([
    ['shopify-sales-may-2026.jpeg', 'Total sales, May 2026'],
    ['shopify-cvr-may-2026.jpeg', 'Conversion rate, May 2026'],
    ['shopify-sales-jun-2026.jpeg', 'Total sales, June 2026'],
    ['shopify-cvr-jun-2026.jpeg', 'Conversion rate, June 2026'],
    ['shopify-cvr-aug-2026.jpeg', 'Conversion rate, Aug 2026'],
    ['shopify-bounce-aug-2026.jpeg', 'Bounce rate, Aug 2026'],
  ]),
} as const
