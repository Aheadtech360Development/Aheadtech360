/** Site-wide constants: identity, navigation, footer. Edit here, not in components. */

export const SITE = {
  name: 'AheadTech360',
  legalName: 'AheadTech360 LLC',
  url: 'https://www.aheadtech360.com',
  email: 'info@aheadtech360.com',
  address: ['30 N Gould St, STE N', 'Sheridan, WY 82801'],
  tagline:
    'A growth marketing partner for US fashion and apparel brands. Conversion, acquisition, and retention, installed as one system.',
} as const

export const ANNOUNCEMENT = {
  text: 'Booking 4 growth calls this month — free 30-min session, roi in writing',
  href: '/book-a-call',
} as const

export interface NavItem {
  label: string
  href: string
}

export const NAV: readonly NavItem[] = [
  { label: 'The Offer', href: '/offer' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
]

export const HEADER_CTA: NavItem = { label: 'Book A Free Call', href: '/book-a-call' }

export const BOOK_CALL_HREF = '/book-a-call'

/** GoHighLevel booking-calendar embed URL. Set NEXT_PUBLIC_GHL_CALENDAR_URL to replace the placeholder. */
export const CALENDAR_EMBED_URL = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL || ''

export const FOOTER_COLUMNS: readonly { title: string; links: readonly NavItem[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '/services#website-development' },
      { label: 'CRO', href: '/services#cro' },
      { label: 'Ads', href: '/services#performance-ads' },
      { label: 'SEO', href: '/services#seo' },
      { label: 'Email Marketing', href: '/services#email-marketing' },
    ],
  },
]

export const LEGAL_LINKS: readonly NavItem[] = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
]
