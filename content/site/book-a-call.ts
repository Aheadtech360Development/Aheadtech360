import type { FaqItem } from './types'

export const BOOK_HERO = {
  badge: '15 Minutes. Founders Only. No Pitch Deck.',
  title: 'Book your free growth call',
  lead: "We'll look at your store, tell you exactly where the leak is, and show you what fixing it is worth in writing. No obligation.",
  chips: [
    { icon: 'star', label: '4.9/5 across Clutch & Google' },
    { icon: 'shield', label: 'Shopify Certified Partner' },
    { icon: 'browser', label: 'Listed on Clutch & GoodFirms' },
    { icon: 'user', label: '35+ Brands Served' },
  ],
} as const

export const BOOK_CALENDAR = { title: 'Grab a slot that works for you' } as const

export const BOOK_REVIEWS = {
  title: 'Before you get on the call',
  lead: 'What clients say about actually working with us, on camera and in their reviews.',
} as const

export const BOOK_FAQ = {
  title: 'What to expect on the call',
  items: [
    {
      question: 'Is this a sales pitch?',
      answer:
        "No. We look at your store live, tell you where the leak is, and give you a rough sense of what fixing it is worth. If it's not a fit for either of us, we'll say so.",
    },
    {
      question: 'Who will I be talking to?',
      answer: 'Ikrash or Iqrar, the founders, directly. No account managers or sales reps standing in between.',
    },
    {
      question: 'What should I have ready?',
      answer:
        "Just your store URL. If you have Shopify or Meta Ads access handy that helps, but it's not required to have a useful conversation.",
    },
    {
      question: 'What happens after the call?',
      answer:
        'If it’s a fit, we’ll send over a proposal scoped to your revenue tier. No pressure, no expiring “today only” discount.',
    },
  ] satisfies readonly FaqItem[],
} as const
