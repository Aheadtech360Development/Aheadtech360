import { caseHref } from './case-studies'
import type { CellItem, CheckList, FaqItem, HeaderCardItem, ResultRow, StatItem } from './types'

export const HOME_HERO = {
  badge: '90 Days. 5 Services. One System.',
  title: "Your store doesn't need more traffic. It needs a system that converts.",
  lead: 'We install conversion, acquisition, and retention into fashion and apparel stores as one system, live in 90 days, or we keep working for free until it converts.',
  primaryCta: { label: 'Book A Free Call', href: '/book-a-call' },
  secondaryCta: { label: 'Watch The 3-Min Overview', href: '#vsl' },
} as const

export const HOME_STATS: readonly StatItem[] = [
  { value: '10X+', label: 'Client Revenue Growth' },
  { value: '35+', label: 'Brands Served' },
  { value: '90 Days', label: 'Guarantee, In Writing' },
  { value: '4.9/5', label: 'Client Rating' },
]

export const HOME_TRUST_LABEL = 'Trusted by 35+ fashion & apparel brands'

export const HOME_VSL = {
  eyebrow: 'See It In Action',
  title: 'Watch how the system works',
  lead: 'Three minutes, straight from the founders. No script, no stock footage.',
  video: {
    label: "Your Ads Aren't the Problem. Your System Is.",
    youtubeId: 'd2iIysJsCsg',
    poster: '/images/video/overview-poster.jpg',
    duration: '3:07',
  },
} as const

export const HOME_LEAKS = {
  eyebrow: 'The Real Cost',
  title: 'Every leak is quietly costing you revenue',
  lead: 'Not a single big miss. Six small, fixable leaks compounding every week your store runs without a system.',
  items: [
    { lead: { kind: 'tag', label: 'Leak 01' }, title: 'Cold Traffic Wasted', text: 'Spend already paid for, wasted on visitors who leave without converting.' },
    { lead: { kind: 'tag', label: 'Leak 02' }, title: 'Checkout Abandonment', text: 'Ready-to-buy customers lost to fixable friction at the last step.' },
    { lead: { kind: 'tag', label: 'Leak 03' }, title: 'AOV Stuck Too Low', text: 'Same traffic and spend, a smaller basket than it should be.' },
    { lead: { kind: 'tag', label: 'Leak 04' }, title: 'No Retention System', text: 'First-time buyers who never get a reason, or a nudge, to return.' },
    { lead: { kind: 'tag', label: 'Leak 05' }, title: 'Unverified Ad Tracking', text: "Budget scaling on numbers that don't match real sales." },
    { lead: { kind: 'tag', label: 'Leak 06' }, title: 'Creative Past Its Life', text: 'ROAS quietly decaying while the same tired ad keeps spending.' },
  ] satisfies readonly CellItem[],
} as const

export const HOME_SYSTEM = {
  eyebrow: 'The System',
  title: 'Six services, one growth system',
  items: [
    { kicker: 'Service 01', title: 'Website Development', text: 'A store that converts cold traffic and increases AOV.', href: '/services#website-development' },
    { kicker: 'Service 02', title: 'CRO', text: 'Turns more of your existing traffic into paying customers.', href: '/services#cro' },
    { kicker: 'Service 03', title: 'Performance Ads', text: 'Ads that build trust, bring the right people in, and scale what works.', href: '/services#performance-ads' },
    { kicker: 'Service 04', title: 'SEO', text: 'Gets found by buyers already searching, without paying for every click.', href: '/services#seo' },
    { kicker: 'Service 05', title: 'Email Marketing', text: 'Keeps customers coming back and grows lifetime value.', href: '/services#email-marketing' },
    { kicker: 'Service 06', title: 'Custom Development', text: "Platform features an off-the-shelf theme just can't touch.", href: '/services#custom-development' },
  ] satisfies readonly HeaderCardItem[],
} as const

export const HOME_QUALIFIER = {
  eyebrow: 'Who This Is For',
  title: 'Is this actually for you?',
  fit: {
    title: 'This is for you if',
    items: [
      'You already have a live store and real traffic.',
      "Your CVR is under 2-3% and you're not sure why.",
      "You're running ads but revenue doesn't match spend.",
      'You want one system, not scattered vendors.',
    ],
  } satisfies CheckList,
  notFit: {
    title: 'Close this tab if',
    items: [
      "You're pre-launch with no store or traffic yet.",
      "You're looking for the cheapest one-off fix.",
      "You're not ready to share store or ad account access.",
      'You expect overnight change, no testing period.',
    ],
  } satisfies CheckList,
  footnote: [
    "If you're in the left column, the call is genuinely free and genuinely useful.",
    "If you're in the right, we'll say so in the first ten minutes.",
  ],
} as const

export const HOME_PROOF = {
  eyebrow: 'Proof',
  title: 'Real stores, real numbers',
  rows: [
    { client: 'EZDTFMaker', problem: 'Store not converting cold traffic', fix: 'Conversion, acquisition, retention', result: '$35K → $360K+/yr', href: caseHref('ezdtfmaker') },
    { client: 'EZTmart', problem: 'Only loyal customers converted', fix: 'Fixed conversion before ad spend', result: '$2.7K → $10K+/mo', href: caseHref('eztmart') },
    { client: 'The MACP Store', problem: 'On Square, barely converting', fix: 'Full CRO-optimized rebuild', result: 'CVR 0.5% → 2.18%', href: caseHref('macp-store') },
    { client: 'TrashedPunk', problem: 'No real store, Etsy/Facebook only', fix: 'Custom build, SEO, CRO', result: 'Live, ranked, optimized', href: caseHref('trashedpunk') },
    { client: 'US Streetwear Brand', problem: 'Meta over-reporting, site friction', fix: 'Attribution rebuild, site fixes', result: '$14.9K → $105.4K/mo', href: caseHref('us-streetwear-brand') },
  ] satisfies readonly ResultRow[],
  note: '4.9/5 average across Clutch and Google · Shopify Certified Partner · Listed on GoodFirms',
} as const

export const HOME_REVIEWS = {
  title: 'What clients say, in their own words',
  lead: "Straight from the store owners we've worked with — on camera and in their reviews.",
} as const

export const HOME_FOUNDERS = {
  eyebrow: "Who You'll Work With",
  title: 'Run by two people who answer the phone',
} as const

export const HOME_FAQ = {
  title: 'Straight answers, no fine print',
  items: [
    {
      question: 'Do you only work with Shopify stores?',
      answer: "No. We're platform-agnostic. Shopify is common, but the system installs on whatever your store already runs.",
    },
    {
      question: 'How fast do we see results?',
      answer: 'Week 1 is access and baseline, week 2 is build, week 3 goes live, week 4 we review the first real numbers and adjust.',
    },
    {
      question: 'Who do I actually work with?',
      answer: 'The founders, Ikrash and Iqrar, directly. No account managers standing between you and the people doing the work.',
    },
  ] satisfies readonly FaqItem[],
} as const

export const HOME_FINAL_CTA = {
  title: "Let's find where your leak is",
  text: '15 minutes with the founders. No account managers, no obligation.',
} as const
