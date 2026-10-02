import { CALENDAR_EMBED } from './site'
import type { CellItem, FaqItem, HeaderCardItem } from './types'

export const OFFER_HERO = {
  badge: 'The Fashion Growth System',
  title: 'More revenue from your store in 90 days, or we keep working free until you do.',
  lead: 'We install a complete growth system into your store: converting more cold traffic, increasing AOV, building trust through creative, and keeping customers coming back. Live in 90 days.',
  // Scrolls to the "Pick A Time" calendar at the foot of this page instead of leaving it.
  primaryCta: { label: 'Book A Free Call', href: CALENDAR_EMBED.anchor },
  secondaryCta: { label: "See What's Included", href: '#system' },
  tag: '90 Days. 5 Services. One System.',
} as const

export const OFFER_PROBLEM = {
  eyebrow: 'The Problem',
  title: 'Same problem, three ways to see it',
  items: [
    {
      lead: { kind: 'kicker', label: 'Financial' },
      title: "You're spending without matching profit.",
      text: "Ad budget goes out every month. Revenue doesn't follow it at the rate it should.",
    },
    {
      lead: { kind: 'kicker', label: 'Result' },
      title: "Traffic that doesn't buy.",
      text: "Visitors show up. Most of them leave. The store isn't doing its half of the job.",
    },
    {
      lead: { kind: 'kicker', label: 'Unknown' },
      title: 'No clear diagnosis of where the leak is.',
      text: 'Without behavioral data, every fix anyone suggests is a guess dressed up as strategy.',
    },
  ] satisfies readonly CellItem[],
  quote:
    'It usually comes down to the same three things: a template store nobody rebuilt around real behavior, ads running without ever fixing where they send people, and an email program that stopped at the welcome message. Not a product problem. A systems problem.',
} as const

export const OFFER_SYSTEM = {
  eyebrow: "What's Included",
  title: 'Four outcomes, installed as one system',
  items: [
    {
      kicker: '01 · Conversion',
      title: 'A store that converts cold traffic and increases AOV',
      bullets: [
        'Microsoft Clarity installed, 7-10 days of real behavioral data collected',
        'CRO roadmap built and prioritized by revenue impact',
        'Full mobile-first rebuild, speed-optimized, checkout streamlined',
        'A/B testing starts once the new store is live',
      ],
    },
    {
      kicker: '02 · Acquisition',
      title: 'Ads that build trust, bring the right people in, and scale what works',
      bullets: [
        'Tracking verified first: Pixel, Conversions API, GA4, every event tested green',
        'Meta account built or audited on a broad, Advantage+ structure',
        '4-phase testing: angle, hook, format, then scale',
        'Budget scaled a max of 20% every 3-4 days, never blind',
      ],
    },
    {
      kicker: '03 · Creative',
      title: 'Creatives that stop the scroll, build trust, and drive people to the store',
      bullets: [
        'Consumer research log, 20+ data points across 3+ sources',
        'Top 5-7 competitors mapped on Meta Ad Library for gaps',
        '3-5 message angles, each with a transformation statement and hook brief',
        'Produced monthly across Reels, statics, and UGC-style formats',
      ],
    },
    {
      kicker: '04 · Retention',
      title: 'Emails that keep customers coming back and grow lifetime value',
      bullets: [
        'Full setup on Klaviyo or Omnisend',
        'Welcome Series and Abandoned Cart flows, live from day one',
        'Post-Purchase and Browse Abandonment flows built in',
        'Win-Back flow to bring quiet customers back',
      ],
    },
  ] satisfies readonly HeaderCardItem[],
} as const

export const OFFER_TIMELINE = {
  eyebrow: 'The Timeline',
  title: 'From payment to first result',
  items: [
    {
      lead: { kind: 'number', label: '01' },
      title: 'Access & Baseline',
      text: 'Store, ad accounts, and analytics access granted. Starting numbers documented.',
    },
    {
      lead: { kind: 'number', label: '02' },
      title: 'Build',
      text: 'Wireframes for website work, ad creative for paid media, all drafted against the data.',
    },
    {
      lead: { kind: 'number', label: '03' },
      title: 'Live',
      text: 'Everything in scope goes live, across the store and the ad accounts.',
    },
    {
      lead: { kind: 'number', label: '04' },
      title: 'Review & Adjust',
      text: 'First real numbers come in. We adjust and keep testing until the result shows up.',
    },
  ] satisfies readonly CellItem[],
} as const

export const OFFER_SNAPSHOTS = {
  eyebrow: 'Proof, Not Promises',
  title: 'Brands running this exact system',
} as const

export const OFFER_REVIEWS = {
  title: 'What clients say, in their own words',
  lead: 'Straight from the store owners running this system — on camera and in their reviews.',
} as const

export const OFFER_FAQ = {
  title: 'Before you book the call',
  items: [
    {
      question: 'How is this different from other agencies?',
      answer:
        "The guarantee. If your CVR hasn't improved in 90 days of the store and ads being live, we keep working at zero extra charge until it does. It's written into the agreement, not a verbal promise.",
    },
    {
      question: "What's actually included in the 90 days?",
      answer:
        'All three pillars: a store rebuilt on real behavioral data to convert cold traffic, ads and tracking that bring the right people in, and retention systems that keep them coming back. Installed together, not sold as separate one-offs.',
    },
    {
      question: 'How much does this cost?',
      answer: 'Pricing scales with where your store is now, one-time setup plus a monthly retainer.',
      link: { label: 'See how pricing works', href: '/pricing' },
    },
    {
      question: "What if it doesn't work?",
      answer:
        "You don't pay more. We keep working, free, until CVR improves — as long as onboarding access was given, approvals happened on time, and ad spend stayed at the tier minimum.",
    },
  ] satisfies readonly FaqItem[],
} as const

export const OFFER_FINAL_CTA = {
  title: 'Ready to install the system?',
  text: '15 minutes with the founders. No account managers, no obligation.',
} as const

export const OFFER_CALENDAR = { title: 'Or just grab a slot right here' } as const
