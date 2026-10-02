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

export const HEADER_CTA = { label: 'Book A Free Call' } as const

/** Where every "Book A Call" CTA goes by default. See CALENDAR_PAGES for the exception. */
export const BOOK_CALL_HREF = '/book-a-call'

/** The booking calendar (GoHighLevel widget) rendered by the "Pick A Time" section. */
export const CALENDAR_EMBED = {
  src: 'https://api.aheadtech360.com/widget/booking/w94nZuLnPWgxB5J31RzW',
  /** Id from GoHighLevel's embed snippet: its form_embed.js finds the iframe by it to auto-resize it. */
  iframeId: 'kbA8tXaM5oazddHn4aHl_1790940450352',
  script: 'https://api.aheadtech360.com/js/form_embed.js',
  /** In-page anchor of the "Pick A Time" section (CalendarEmbed's default id). */
  anchor: '#calendar',
} as const

/** Pages that embed the calendar: "Book A Call" there scrolls to it instead of leaving the page. */
export const CALENDAR_PAGES: readonly string[] = ['/offer']

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
