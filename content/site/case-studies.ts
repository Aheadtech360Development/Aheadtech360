/**
 * Case studies. One typed entry per study; pages are rendered by a single template
 * (app/(site)/case-studies/[slug]) that switches on `layout`.
 *
 * Numbers come from the design and must stay consistent between the listing, the snapshots on the
 * offer page, and the detail page — they all read from here.
 */
import type { ImageAsset } from './types'

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

export interface CasePhase {
  title: string
  body: string
  /** Label on the screenshot placeholder beside the phase */
  slot: string
}

export interface CaseBeforeAfter {
  beforeLabel: string
  beforeSlot: string
  beforeCaption: string
  afterLabel: string
  afterSlot: string
  afterCaption: string
}

export interface CaseMetric {
  label: string
  value: string
}

interface CaseBase {
  slug: string
  listing: CaseListing
  meta: { title: string; description: string }
  cta: { title: string; text: string }
}

/** Fix-what's-broken studies told as three installed phases (conversion → acquisition → retention). */
export interface PhasedCase extends CaseBase {
  layout: 'phased'
  hero: { eyebrow: string; title: string; lead: string; headline: string; image?: ImageAsset }
  background: string
  beforeAfter: CaseBeforeAfter
  phasesTitle: string
  phases: readonly CasePhase[]
  results:
    | { kind: 'metrics'; title: string; items: readonly CaseMetric[]; footnote?: string }
    | { kind: 'callout'; title: string; text: string }
  review?: { label: string; video: { label: string; src: string } }
}

/** Single-step rebuild with a before/after and a short result block. */
export interface RebuildCase extends CaseBase {
  layout: 'rebuild'
  hero: { eyebrow: string; title: string; lead: string; headline: string; image?: ImageAsset }
  background: string
  beforeAfter: CaseBeforeAfter
  result: { title: string; items: readonly CaseMetric[]; note: string }
}

/** Analytical engagement alongside an in-house team, told through a metrics table. Brand is anonymised. */
export interface AuditCase extends CaseBase {
  layout: 'audit'
  hero: { eyebrow: string; title: string; lead: string; headline: string }
  background: string
  table: {
    title: string
    columns: readonly string[]
    rows: readonly { metric: string; values: readonly string[] }[]
    note: string
  }
  streams: { title: string; items: readonly { title: string; body: string }[] }
  evidence: { eyebrow: string; slots: readonly { label: string; note: string }[] }
}

export type CaseStudy = PhasedCase | RebuildCase | AuditCase

const SHARED_CTA_TEXT = '15 minutes with the founders. No account managers, no obligation.'

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: 'ezdtfmaker',
    layout: 'phased',
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
      description:
        'How a DTF transfer printer went from $35K to $360K+ a year by fixing conversion first, then layering on acquisition and retention.',
    },
    hero: {
      eyebrow: 'Custom & Print · DTF',
      title: 'EZDTFMaker',
      lead: "From a store that couldn't convert its own traffic to $360K+ a year, in three installed phases.",
      headline: '$35K → $360K+/yr',
      image: { src: '/images/portfolio/Ezdtf.png', alt: 'The EZDTFMaker storefront homepage', width: 1600, height: 1000 },
    },
    background:
      "EZDTFMaker came to AheadTech360 in January 2025 with a live store and real traffic — the problem wasn't getting visitors, it was converting them. Baseline: $3,800/mo revenue on 2,394 monthly visitors, a 3.42% conversion rate, $36 AOV, and a 67% bounce rate. Conversion was fixed first. Once that held, the client asked to scale, which opened acquisition and retention as phases two and three.",
    beforeAfter: {
      beforeLabel: 'Before — Jan 2025',
      beforeSlot: 'Baseline Dashboard',
      beforeCaption: '$3,800/mo · 2,394 visitors/mo · 3.42% CVR · $36 AOV · 67% bounce',
      afterLabel: 'After — Current',
      afterSlot: 'Current Dashboard',
      afterCaption: '$30K+/mo and climbing · 8.06%+ CVR on Phase 1 alone · AOV up from $36 to $47 in Phase 1',
    },
    phasesTitle: 'How it was installed',
    phases: [
      {
        title: 'Conversion',
        slot: 'Clarity / Heatmap Shot',
        body: 'Installed Microsoft Clarity and behavioral tracking, built a CRO roadmap off the data, and rebuilt the site mobile-first, speed-optimized, and checkout-streamlined. Result on less traffic than baseline: revenue to $10K/mo, CVR 3.42% → 8.06%, bounce 67% → 55%, AOV $36 → $47.',
      },
      {
        title: 'Acquisition',
        slot: 'Ads Manager Shot',
        body: "Tracking verified first (Meta Pixel, Conversions API, GA4, every event green in Meta's Event Testing Tool), then Meta and Google Ads launched alongside SEO. Revenue climbed month over month: $13K (Jan) → $16K → $17.5K → $22K → $29.5K, now $30K+/mo and still climbing.",
      },
      {
        title: 'Retention',
        slot: 'Email / Loyalty Shot',
        body: 'Ran alongside acquisition: email marketing, a loyalty program, volume pricing and discounts, customer segmentation, reviews setup (text and video), live chat, UX work, pricing strategy, and brand positioning — the pieces that turn a good acquisition month into a compounding one.',
      },
    ],
    results: {
      kind: 'metrics',
      title: 'The numbers',
      items: [
        { label: 'Revenue', value: '$35K/yr → $360K+/yr' },
        { label: 'Conversion Rate', value: '3.42% → 8.06%+' },
        { label: 'AOV', value: '$36 → $47+' },
        { label: 'Bounce Rate', value: '67% → 55%' },
      ],
    },
    review: {
      label: 'In Their Own Words',
      video: { label: 'Video Testimonial — EZDTFMaker Founder', src: '/videos/ezt.mp4' },
    },
    cta: { title: 'Want a result like this?', text: SHARED_CTA_TEXT },
  },

  {
    slug: 'eztmart',
    layout: 'phased',
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
      description:
        'A wholesale apparel brand with a strong organic base but weak cold-traffic conversion went from $2.7K to $10K+ a month.',
    },
    hero: {
      eyebrow: 'Wholesale & Blanks',
      title: 'EZTmart',
      lead: "A strong organic base wasn't the problem — only loyal customers were buying. Cold traffic was walking away.",
      headline: '$2.7K → $10K+/mo',
      image: { src: '/images/portfolio/EZTmart.png', alt: 'The EZTmart storefront homepage', width: 1600, height: 1000 },
    },
    background:
      "EZTmart, a wholesale apparel and print brand, was unusual: acquisition wasn't the core problem, a strong organic and SEO base already existed. The issue was that only warm, loyal customers converted — cold traffic bounced. Baseline (Jan 2026): $2,700/mo revenue (some months near $0), 3,077 monthly visitors, 0.84% CVR, and a misleadingly high $128 AOV that only reflected repeat buyers.",
    beforeAfter: {
      beforeLabel: 'Before — Jan 2026',
      beforeSlot: 'Baseline Dashboard',
      beforeCaption: '$2.7K/mo (inconsistent) · 3,077 visitors/mo · 0.84% CVR · $128 AOV (loyal buyers only)',
      afterLabel: 'After — Current',
      afterSlot: 'Current Dashboard',
      afterCaption: '$10K/mo and growing · ~$100 AOV · 2.5% CVR · 50% bounce rate',
    },
    phasesTitle: 'How it was installed',
    phases: [
      {
        title: 'Conversion (Jan – Apr 2026)',
        slot: 'Clarity / Heatmap Shot',
        body: 'Installed Microsoft Clarity and behavioral tracking focused on why cold visitors dropped off, then rebuilt site elements mobile-first, speed-optimized, checkout-streamlined. Within a month: CVR 0.84% → 2.01%. Traffic dropped ~40% (3,077 → 1,883/mo), exposing a single-channel SEO dependency with no ads running yet.',
      },
      {
        title: 'Acquisition (Started May 2026)',
        slot: 'Ads Manager Shot',
        body: 'Tracking verified first (Meta Pixel, Conversions API, GA4, Event Testing Tool), then Meta Ads launched with a broad/Advantage+ structure and a 4-phase testing sequence. Revenue held ~$5,500/mo through July, then scaled to $10,000/mo in August once tracking, pricing, UI/UX, and creative were fully dialed in together.',
      },
      {
        title: 'Retention (Alongside Acquisition)',
        slot: 'Email / Loyalty Shot',
        body: 'Email marketing, a loyalty program, customer segmentation, a full UI/UX overhaul, reviews setup, live chat, and pricing strategy with volume discounts — refining brand positioning while acquisition scaled, not after it.',
      },
    ],
    results: {
      kind: 'metrics',
      title: 'The numbers',
      items: [
        { label: 'Revenue', value: '$2.7K/mo → $10K+/mo' },
        { label: 'Conversion Rate', value: '0.84% → 2.5%' },
        { label: 'AOV', value: '$128* → ~$100' },
        { label: 'Bounce Rate', value: '— → 50%' },
      ],
      footnote:
        '*Baseline AOV reflected loyal repeat buyers only; it declined as cold, new customers with smaller baskets started converting alongside them — a healthy sign, not a step back.',
    },
    cta: { title: 'Want a result like this?', text: SHARED_CTA_TEXT },
  },

  {
    slug: 'us-streetwear-brand',
    layout: 'audit',
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
        "An anonymized streetwear brand's Meta ROAS was over-reported by about 20%. Rebuilt attribution and fixed site friction took monthly revenue from $14.9K to $105.4K.",
    },
    hero: {
      eyebrow: "Streetwear · Anonymized At Client's Request",
      title: 'US Streetwear & Headwear Brand',
      lead: "An Upwork engagement, Feb 2025 – Jun 2026, working Meta performance alongside the brand's own in-house media buyer and CRO team. This one's a shared win, not a solo credit — and the brand's name stays private per the engagement terms.",
      headline: '$14.9K → $105.4K/mo',
    },
    background:
      "Shopify store, Meta as the main paid channel. Unlike a full-system build, this engagement sat alongside the brand's own media buyer and CRO team (and later, outside agencies too) — AheadTech360's role was diagnostic and analytical: finding the leaks in attribution, ad delivery, and site performance that an in-house team, close to the day-to-day, can miss.",
    table: {
      title: 'Three snapshots, 16 months apart',
      columns: ['Metric', 'Feb 2025', 'May 2025', 'Jun 2026'],
      rows: [
        { metric: 'Revenue', values: ['$14.9K', '$51.5K', '$105.4K'] },
        { metric: 'CVR', values: ['2.12%', '3.10%', '3.54%'] },
        { metric: 'Meta Spend', values: ['$5,839', '$22,656', '$30,039'] },
        { metric: 'ROAS', values: ['2.08', '2.03', '2.62'] },
        { metric: 'AOV', values: ['$39.77', '$46.23', '$45.53'] },
      ],
      note: 'Monthly revenue held steady in the $40–60K range for roughly a year between the May 2025 and Jun 2026 snapshots.',
    },
    streams: {
      title: 'What we found and fixed',
      items: [
        {
          title: 'Hourly Performance Pattern Analysis',
          body: "6–9PM drove ~30% of clicks and 25–29% of orders. Overnight (12–5AM) took 8–9.5% of spend for only 5–7% of orders and revenue — budget was quietly leaking into hours that don't convert.",
        },
        {
          title: 'Attribution Rebuild',
          body: 'Meta was over-reporting ROAS by roughly 20% against Shopify-traced orders: 1,670 Meta-reported purchases at 1.88x ROAS versus 1,351 Shopify-traced orders at 1.47x ROAS over a 90-day window. Every scaling decision before this was working off an inflated number.',
        },
        {
          title: 'Budget Scheduling & Catalog Ad Test',
          body: "Found that Meta's ad scheduling follows the ad account's time zone, not the viewer's — a real issue for a brand selling across 4 US time zones, requiring separate regional ad sets. Also flagged one catalog ad capturing 22% of spend at $22.16 cost per result against an $18 target, with a recommendation to isolate catalog ads into their own campaign.",
        },
        {
          title: 'Site Friction Fixes',
          body: "Clarity data and speed tests surfaced a 65% December bounce rate, JS errors interrupting the cart flow, hidden discount tiers, a confusing size guide, and a 13-second mobile load time. Shipped fixes to a preview theme: sticky cart quantity selector, larger tap targets, a stickier quick-view button, and one JS error resolved — the rest traced to third-party apps and flagged to the brand's developer.",
        },
      ],
    },
    evidence: {
      eyebrow: 'Evidence, Blurred For Privacy',
      slots: [
        { label: 'Shopify Dashboard', note: 'Store name & URL blurred' },
        { label: 'Ads Manager', note: 'Account details blurred' },
      ],
    },
    cta: { title: 'Want eyes like this on your ad account?', text: SHARED_CTA_TEXT },
  },

  {
    slug: 'macp-store',
    layout: 'rebuild',
    listing: {
      vertical: 'Niche Apparel',
      name: 'The MACP Store',
      problem: 'On Square, barely converting',
      blurb: 'Small, high-intent niche audience. The site itself was the leak — full CRO-optimized rebuild off Square.',
      result: 'CVR 0.5% → 2.18%',
    },
    meta: {
      title: 'Case Study: The MACP Store',
      description:
        'A veteran-owned niche apparel store moved off Square to a CRO-optimized rebuild and lifted conversion from under 0.5% to 2.18%.',
    },
    hero: {
      eyebrow: 'Niche Apparel · Veteran-Owned',
      title: 'The MACP Store',
      lead: "A small, high-intent military and veteran audience was already there. The Square store just wasn't earning their trust before asking them to buy.",
      headline: 'CVR 0.5% → 2.18%',
      image: { src: '/images/portfolio/Themacpc.png', alt: 'The MACP Store homepage', width: 1600, height: 1000 },
    },
    background:
      "The MACP Store, a veteran-owned brand in the Modern Army Combatives Program niche, came to AheadTech360 running on Square with a poorly performing store. The audience wasn't the problem — a niche military and veteran community is small, dedicated, and high-intent. The site itself was the leak: a full CRO-optimized rebuild off Square, built specifically to earn trust with that audience before asking them to buy.",
    beforeAfter: {
      beforeLabel: 'Before — On Square',
      beforeSlot: 'Original Square Store',
      beforeCaption: "Under 0.5% conversion rate. A live, dedicated audience that wasn't converting on the storefront.",
      afterLabel: 'After — Rebuilt Store',
      afterSlot: 'Rebuilt Site',
      afterCaption: '2.18% conversion rate. Online and to its first $10K in sales on the new store.',
    },
    result: {
      title: 'The result',
      items: [
        { label: 'Conversion Rate', value: 'Under 0.5% → 2.18%' },
        { label: 'Milestone', value: 'First $10K In Sales' },
      ],
      note: 'Website screenshots and client review for this case study are being added as they become available.',
    },
    cta: { title: 'Want a result like this?', text: SHARED_CTA_TEXT },
  },

  {
    slug: 'trashedpunk',
    layout: 'phased',
    listing: {
      vertical: 'Streetwear',
      name: 'TrashedPunk',
      problem: 'No real store, Etsy/Facebook only',
      blurb: 'Came in with an idea and a neon streetwear aesthetic. Custom build, SEO, and CRO installed end to end.',
      result: 'Live, ranked, optimized',
    },
    meta: {
      title: 'Case Study: TrashedPunk',
      description:
        'A neon streetwear brand with only Etsy and Facebook listings got a fully custom Shopify store, built, ranked, and optimized end to end.',
    },
    hero: {
      eyebrow: 'Streetwear · Built From Scratch',
      title: 'TrashedPunk',
      lead: 'Founder Donnie Todd came in with a bold neon streetwear idea and Etsy/Facebook listings — no real store at all. We built one.',
      headline: 'No Store → Live, Ranked, Optimized',
      image: { src: '/images/portfolio/TrashedPunk.png', alt: 'The TrashedPunk storefront homepage', width: 1600, height: 1000 },
    },
    background:
      "Donnie Todd came to AheadTech360 on Oct 8, 2025 with only an idea and Etsy/Facebook listings — no real store. The brand: bold, glitchy neon streetwear, built around psychedelic frog and hoodie designs. This wasn't a fix-what's-broken engagement, it was a build-from-zero one, which is why the phases below start with the store itself rather than a conversion audit.",
    beforeAfter: {
      beforeLabel: 'Before — Oct 2025',
      beforeSlot: 'Etsy / Facebook Listings',
      beforeCaption: 'No real store. Just an idea and listings scattered across two marketplaces.',
      afterLabel: 'After — Live Site',
      afterSlot: 'Custom Live Store',
      afterCaption: 'Fully custom Shopify store, built, ranked, and optimized end to end.',
    },
    phasesTitle: 'How it was built',
    phases: [
      {
        title: 'Website Build (Oct – Nov 2025)',
        slot: 'Site Build Shot',
        body: 'A fully custom Shopify store: glitch-effect header animation, a slow-drifting space background, a 3D spinning hoodie centerpiece, and a full neon color system — all built to keep load times fast despite the heavy visuals. Launched early November 2025.',
      },
      {
        title: 'SEO (Alongside Build & Post-Launch)',
        slot: 'Search Console Shot',
        body: 'Keyword research and mapping, on-page optimization, technical SEO (speed, schema, indexing, sitemap), Google Business Profile and Search Console setup, an ongoing blog and backlink program, plus AEO/GEO work for AI search visibility.',
      },
      {
        title: 'CRO (Dec 2025 Onward)',
        slot: 'Clarity / Heatmap Shot',
        body: 'Behavioral tracking installed once there was enough traffic to read meaningfully. From there, the client asked for the full system — acquisition, conversion, and retention together — shifting this from project work into an ongoing growth partnership.',
      },
    ],
    results: {
      kind: 'callout',
      title: 'From no real online presence to a fully custom live store, built, ranked, and optimized end to end.',
      text: 'What started as a website build turned into a full growth partnership once the foundation was live.',
    },
    review: {
      label: 'In Their Own Words',
      video: { label: 'Video Testimonial — Donnie Todd, Founder', src: '/videos/at360.mp4' },
    },
    cta: { title: 'Starting from zero too?', text: SHARED_CTA_TEXT },
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
