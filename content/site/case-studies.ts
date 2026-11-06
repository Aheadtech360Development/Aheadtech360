/**
 * Case studies: the listing data (name, vertical, headline result) and the SEO meta for each study.
 *
 * The listing feeds the case-studies page, the snapshots on the offer page, the proof table on the home
 * page and the "More results" cards, so a headline number only ever lives here. The detail pages
 * themselves are page components (components/site/case/studies), chosen by slug in
 * app/(site)/case-studies/[slug]/page.tsx.
 */

export interface CaseListing {
  vertical: string
  /** Name shown on list cards */
  name: string
  problem: string
  blurb: string
  /** Headline result, e.g. "$35K → $360K+/yr" */
  result: string
  /** Shorter blurb used on the offer page's three snapshot cards */
  snapshot?: string
}

export interface CaseStudy {
  slug: string
  listing: CaseListing
  meta: { title: string; description: string }
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: 'ezdtfmaker',
    listing: {
      vertical: 'Custom & Print',
      name: 'EZDTFMaker',
      problem: 'Store not converting cold traffic',
      blurb: 'Full system installed: conversion first, then acquisition and retention layered on top over 17 months.',
      result: '$35K → $360K+/yr',
      snapshot: 'Store not converting cold traffic. Fixed conversion, then added acquisition and retention.',
    },
    meta: {
      title: 'Case Study: EZDTFMaker',
      description: 'How AheadTech360 took EZDTFMaker from $35K to $360K+ a year: conversion first, then acquisition and retention.',
    },
  },

  {
    slug: 'eztmart',
    listing: {
      vertical: 'Wholesale & Blanks',
      name: 'EZTmart',
      problem: 'Only loyal customers converted',
      blurb: "Strong organic base, but cold traffic wasn't buying. Fixed conversion before spending a dollar on ads.",
      result: '$2.7K → $10K+/mo',
      snapshot: 'Only loyal customers converted. Cold traffic fixed before a dollar of ad spend went out.',
    },
    meta: {
      title: 'Case Study: EZTmart',
      description: 'How AheadTech360 took EZTmart from $2.8K to $9.5K a month: fix conversion first, then scale with ads.',
    },
  },

  {
    slug: 'us-streetwear-brand',
    listing: {
      vertical: 'Streetwear',
      name: 'US Streetwear & Headwear Brand',
      problem: 'Meta over-reporting ROAS by ~20%',
      blurb: "Worked alongside the brand's own media buyer, rebuilt attribution, and fixed the site friction Clarity data exposed.",
      result: '$14.9K → $105.4K/mo',
      snapshot: 'Meta over-reporting ROAS by ~20%, site friction hiding in plain sight. Rebuilt attribution, fixed both.',
    },
    meta: {
      title: 'Case Study: US Streetwear & Headwear Brand',
      description:
        'A US streetwear and headwear brand grew from $14.9K to $105.4K a month. AheadTech360 worked alongside their media buyer on attribution and site conversion.',
    },
  },

  {
    slug: 'macp-store',
    listing: {
      vertical: 'Niche Apparel',
      name: 'The MACP Store',
      problem: 'On Square, barely converting',
      blurb: 'Small, high-intent niche audience. The site itself was the leak — full CRO-optimized rebuild off Square.',
      result: 'CVR 0.5% → 2.18%',
    },
    meta: {
      title: 'Case Study: The MACP Store',
      description: 'How AheadTech360 moved The MACP Store off Square and took its conversion rate from 0.5% to 2.18%.',
    },
  },

  {
    slug: 'trashedpunk',
    listing: {
      vertical: 'Streetwear',
      name: 'TrashedPunk',
      problem: 'No real store, Etsy/Facebook only',
      blurb: 'Came in with an idea and a neon streetwear aesthetic. Custom build, SEO, and CRO installed end to end.',
      result: 'Live, ranked, optimized',
    },
    meta: {
      title: 'Case Study: TrashedPunk',
      description: 'How AheadTech360 took TrashedPunk from an idea and an Etsy page to a custom Shopify store with SEO built in.',
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}

export function caseHref(slug: string): string {
  return `/case-studies/${slug}`
}

/** Order used on the case-studies list page (matches the design). */
export const CASE_LIST_ORDER = ['ezdtfmaker', 'eztmart', 'us-streetwear-brand', 'macp-store', 'trashedpunk'] as const

/** The three studies shown as snapshots on the offer page. */
export const CASE_SNAPSHOT_SLUGS = ['ezdtfmaker', 'eztmart', 'us-streetwear-brand'] as const
