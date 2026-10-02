import type { CellItem } from './types'

export const ABOUT_HERO = {
  badge: 'About',
  title: 'We build growth systems for fashion and apparel brands.',
  lead: 'Not another agency chasing every niche. One industry, one system, and two founders who still take the calls.',
} as const

export const ABOUT_STORY = {
  eyebrow: 'How This Started',
  title: 'One industry, learned from the inside out',
  body: "Ikrash started out as a freelance designer working with fashion and apparel clients. He didn't set out to specialize in the niche, it happened organically, one referral leading to the next inside the same industry. Along the way he learned what actually drives a fashion buying decision: sizing and fit anxiety, not just price or design. That's the difference between a product page that just displays a product and one that's built to sell it. Everything AheadTech360 runs today is built on that same buyer psychology.",
} as const

export const ABOUT_FOUNDERS = {
  eyebrow: "Who You'll Work With",
  title: 'Run by two people who answer the phone',
} as const

export const ABOUT_FACTS = {
  label: 'AheadTech360 LLC',
  chips: [
    'Wyoming-Registered LLC',
    'Shopify Certified Partner',
    'Listed On Clutch & GoodFirms',
    '35+ Brands Served',
  ],
  note: "A small senior team sits behind every account. Strategy, execution, and reporting handled by people who've done this before, not a rotating cast of juniors.",
} as const

export const ABOUT_SERVE = {
  eyebrow: 'Who We Serve',
  title: 'Fashion and apparel, four verticals deep',
  items: [
    { title: 'Custom & Print', text: 'DTF, screen print, embroidery, print-on-demand.' },
    { title: 'Retail Fashion & D2C', text: 'Direct-to-consumer apparel brands selling online.' },
    { title: 'Wholesale & Blanks', text: 'Blank apparel and wholesale supply businesses.' },
    { title: 'Accessories & Streetwear', text: 'Niche, accessories, and streetwear brands.' },
  ] satisfies readonly CellItem[],
  note: 'Plus adjacent lifestyle categories, like beauty and skincare, where the same buyer psychology applies.',
} as const

export const ABOUT_VIDEOS_EYEBROW = "Hear It From The Founders We've Worked With"

export const ABOUT_FINAL_CTA = {
  title: 'Talk to the founders, not a rep',
  text: '15 minutes. No account managers, no obligation.',
} as const
