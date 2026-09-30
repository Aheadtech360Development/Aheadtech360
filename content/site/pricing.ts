import type { CellItem } from './types'

export const PRICING_HERO = {
  badge: 'Pricing',
  title: 'How pricing actually works',
  lead: 'No generic package tiers pulled out of thin air. Your investment is sized to where your store is right now.',
} as const

export const PRICING_MODEL = {
  title: 'Three things decide your number',
  items: [
    {
      lead: { kind: 'number', label: '01' },
      title: 'Where Your Revenue Is Now',
      text: 'We size the engagement to your current monthly revenue, not a one-size package.',
    },
    {
      lead: { kind: 'number', label: '02' },
      title: 'One-Time Setup + Monthly Retainer',
      text: 'A setup fee installs the system. A retainer keeps it running, tested, and improving.',
    },
    {
      lead: { kind: 'number', label: '03' },
      title: 'Scope Grows With The Tier',
      text: 'Higher tiers add depth and services — SEO, custom development — not just a higher bill.',
    },
  ] satisfies readonly CellItem[],
} as const

export const PRICING_TIERS = {
  title: 'The tier ladder',
  tiers: [
    { name: 'Tier 1', description: 'A single one-time build — your choice of CRO or Ads, no retainer.' },
    { name: 'Tier 2', description: 'Setup fee plus retainer, covering Conversion and Acquisition together.' },
    { name: 'Tier 3', description: 'All three pillars — Conversion, Acquisition, Retention — at a basic level.' },
    { name: 'Tier 4', description: 'All three pillars at standard depth, with more testing and iteration.' },
    { name: 'Tier 5', description: 'All three pillars plus SEO and custom development on top.' },
    { name: 'Tier 6', description: 'Fully custom. No fixed formula — scoped and priced live on a call.' },
  ],
} as const

export const PRICING_NUMBER = {
  eyebrow: "The One Number We'll Publish",
  title: 'Retainers start at $1,000/mo, plus a one-time setup fee.',
  action: { label: 'Get Your Number', href: '/book-a-call' },
} as const

export const PRICING_FINAL_CTA = {
  title: 'Get your exact number',
  text: "15 minutes with the founders. We'll tell you your tier and the real numbers, live.",
} as const
