export const SERVICES_HERO = {
  badge: 'Services',
  title: 'Six services. Buy the whole system, or just what you need.',
  lead: 'Every service on this list works standalone. Most clients start with one and add the rest as it proves out.',
} as const

export interface ServiceEntry {
  /** Anchor id; the footer and homepage link to /services#<id> */
  id: string
  label: string
  title: string
  bullets: readonly string[]
}

export const SERVICES: readonly ServiceEntry[] = [
  {
    id: 'website-development',
    label: 'Website Development',
    title: 'A store that converts cold traffic and increases AOV',
    bullets: [
      'Built off real behavioral data, not a theme template',
      'Mobile-first, speed-optimized, checkout streamlined',
      '2 rounds of revisions built into scope',
    ],
  },
  {
    id: 'cro',
    label: 'CRO',
    title: 'Turn more of your existing traffic into paying customers',
    bullets: [
      'Microsoft Clarity installed: heatmaps, session recordings, scroll maps',
      'CRO roadmap built and prioritized by revenue impact',
      'One variable fixed at a time, every decision documented',
    ],
  },
  {
    id: 'performance-ads',
    label: 'Performance Ads',
    title: 'Ads that build trust, bring the right people in, and scale what works',
    bullets: [
      'Tracking verified first: Pixel, Conversions API, GA4, every event tested green',
      'Meta account on a broad, Advantage+ structure',
      'Budget scaled a max of 20% every 3-4 days, reviewed weekly',
      'Google Ads added for fuller scopes: search, Shopping, Performance Max',
    ],
  },
  {
    id: 'seo',
    label: 'SEO',
    title: 'Gets found by buyers already searching, without paying for every click',
    bullets: [
      'Technical audit: speed, schema, indexing, sitemap',
      'Keyword strategy mapped to real buyer intent, not vanity volume',
      'On-page optimization plus an ongoing content and backlink program',
      'Rankings and organic traffic tracked monthly',
    ],
  },
  {
    id: 'email-marketing',
    label: 'Email Marketing',
    title: 'Keeps customers coming back and grows lifetime value',
    bullets: [
      'Full setup on Klaviyo or Omnisend',
      'Welcome Series and Abandoned Cart flows live from day one',
      'Post-Purchase and Browse Abandonment flows built in',
      'Win-Back flow to bring quiet customers back',
    ],
  },
  {
    id: 'custom-development',
    label: 'Custom Development',
    title: "Platform features an off-the-shelf theme just can't touch",
    bullets: [
      'Custom app and feature builds scoped to what the store actually needs',
      'Integrations with the tools already running the business',
      "Platform work that isn't boxed in by what the theme allows",
    ],
  },
]

export const SERVICES_VIDEOS_EYEBROW = 'Hear It From Clients Running These Services'

export const SERVICES_FINAL_CTA = {
  title: 'Not sure which service you need?',
  text: "15 minutes with the founders. We'll tell you straight where the leak is.",
} as const
