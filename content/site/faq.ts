import type { FaqItem } from './types'

export const FAQ_HERO = {
  badge: 'FAQ',
  title: 'Questions, answered straight',
} as const

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'How is this different from other agencies?',
    answer:
      "The guarantee. If your CVR hasn't improved within 90 days of the store and ads being live, we keep working at zero extra charge until it does. It's written into the agreement, not a verbal promise.",
  },
  {
    question: "What's actually included in the 90 days?",
    answer:
      'All three pillars: a store rebuilt on real behavioral data to convert cold traffic, ads and tracking that bring the right people in, and retention systems that keep them coming back — installed together, not sold as separate one-offs.',
  },
  {
    question: 'Do you only work with Shopify stores?',
    answer:
      "No. We're platform-agnostic. Shopify is common among our clients, but the system installs on whatever your store already runs.",
  },
  {
    question: 'How much does this cost?',
    answer:
      'Pricing is revenue-tiered: a one-time setup fee plus a monthly retainer that scales with where your store is now. Retainers start at $1,000/mo.',
    link: { label: 'See how pricing works', href: '/pricing' },
  },
  {
    question: "What if it doesn't work?",
    answer:
      "You don't pay more. We keep working, free, until CVR improves — as long as onboarding access was given, approvals happened on time, and ad spend stayed at the tier minimum throughout.",
  },
  {
    question: 'How long is the contract?',
    answer: "No long-term lock-in. Either side can end the engagement with 30 days' written notice.",
  },
  {
    question: 'How fast do we see results?',
    answer:
      "Week 1 is access and baseline, week 2 is build, week 3 goes live, week 4 we review the first real numbers and adjust. After that, it's ongoing testing until the promised result shows up.",
  },
  {
    question: 'Do I need existing traffic to start?',
    answer:
      'No. Most clients already have a live store and traffic and just aren’t converting it. Some start from nothing but an idea — the system adapts either way.',
  },
  {
    question: 'Who will I actually work with?',
    answer:
      'The founders, Ikrash and Iqrar, directly. No account managers or sales reps standing between you and the people doing the work.',
  },
]

export const FAQ_FINAL_CTA = {
  title: 'Still have questions?',
  text: 'Ask them directly on a 15-minute call with the founders.',
} as const
