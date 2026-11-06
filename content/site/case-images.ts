/** Screenshots used on the case-study pages (files in /public/images/case-studies). Alt text describes the numbers shown. */
import type { ImageAsset } from './types'

const img = (file: string, width: number, height: number, alt: string): ImageAsset => ({
  src: `/images/case-studies/${file}.webp`,
  alt,
  width,
  height,
})

export const CASE_IMAGES = {
  // EZDTFMaker
  ezdtfJan2025: img('ezdtfmaker-jan-2025', 1600, 531, 'Shopify Analytics for January 2025 showing 2,568 sessions, 3,834.57 dollars in sales, 3.42 percent conversion rate, 36.15 dollar average order value and 67.25 percent bounce rate.'),
  ezdtfApr2025: img('ezdtfmaker-apr-2025', 1600, 529, 'Shopify Analytics for April 2025 showing 2,394 sessions, 10,585.60 dollars in sales, 8.06 percent conversion rate, 47.31 dollar average order value and 55.09 percent bounce rate.'),
  ezdtfDec2025: img('ezdtfmaker-dec-2025', 1600, 485, 'Shopify Analytics for December 2025 showing 4,312 sessions, 11,435.42 dollars in sales and 6.09 percent conversion rate.'),
  ezdtfJan2026: img('ezdtfmaker-jan-2026', 1600, 368, 'Shopify Analytics for January 2026 showing 4,043 sessions, 13,262.30 dollars in sales and 7.74 percent conversion rate.'),
  ezdtfMar2026: img('ezdtfmaker-mar-2026', 1600, 344, 'Shopify Analytics for March 2026 showing 4,277 sessions, 17,430.53 dollars in sales and 6.8 percent conversion rate.'),
  ezdtfMay2026: img('ezdtfmaker-may-2026', 1600, 480, 'Shopify Analytics for May 2026 showing 4,759 sessions, 29,146.59 dollars in sales, 10.27 percent conversion rate, 52.25 dollar average order value and 53.58 percent bounce rate.'),

  // EZTmart
  eztJan2026: img('eztmart-jan-2026', 1600, 499, 'Shopify Analytics for January 2026 showing 3,077 sessions, 2,788.52 dollars in sales, 0.84 percent conversion rate, 128.39 dollar average order value and 67.33 percent bounce rate.'),
  eztFeb2026: img('eztmart-feb-2026', 1600, 500, 'Shopify Analytics for February 2026 showing 1,883 sessions, 2,615.76 dollars in sales, 2.01 percent conversion rate, 59 dollar average order value and 57.51 percent bounce rate.'),
  eztMay2026: img('eztmart-may-2026', 1600, 325, 'Shopify Analytics for May 2026 showing 3,628 sessions, 5,017.48 dollars in sales, 1.46 percent conversion rate and 88.22 dollar average order value.'),
  eztAug2026: img('eztmart-aug-2026', 1600, 531, 'Shopify Analytics for August 2026 showing 3,560 sessions, 9,548.58 dollars in sales, 2.58 percent conversion rate, 90.22 dollar average order value and 50.95 percent bounce rate.'),

  // US Streetwear & Headwear Brand
  swShopifyFeb2025: img('streetwear-shopify-feb-2025', 1230, 96, 'Shopify report for February 2025, all channels: 15.4K sessions, 14.9K dollars in sales, 389 orders, 2.12 percent conversion rate.'),
  swShopifyMay2025: img('streetwear-shopify-may-2025', 1294, 88, 'Shopify report for May 2025, all channels: 34.3K sessions, 51.5K dollars in sales, 1,150 orders, 3.1 percent conversion rate.'),
  swShopifyJun2026: img('streetwear-shopify-jun-2026', 1387, 85, 'Shopify report for June 2026, all channels: 49.6K sessions, 105.4K dollars in sales, 2,319 orders, 3.54 percent conversion rate.'),
  swMetaFeb2025: img('streetwear-meta-feb-2025', 1783, 376, 'Meta Ads Manager account totals for February 2025: 5,839.50 dollars spent, 306 purchases, 12,168.46 dollars purchase conversion value, ROAS 2.08.'),
  swMetaMay2025: img('streetwear-meta-may-2025', 1785, 311, 'Meta Ads Manager account totals for May 2025: 22,656.36 dollars spent, 996 purchases, 46,048.67 dollars purchase conversion value, ROAS 2.03.'),
  swMetaJun2026: img('streetwear-meta-jun-2026', 1792, 342, 'Meta Ads Manager account totals for June 2026: 30,039.49 dollars spent, 1,730 purchases, 78,774.17 dollars purchase conversion value, ROAS 2.62.'),

  // The MACP Store
  macpAdmin: img('macp-shopify-admin', 1315, 120, 'Shopify admin dashboard for The MACP Store showing 1,846 sessions, up 78 percent, 2,898 dollars in total sales, 42 orders and a 2.16 percent conversion rate.'),
  macpBefore: img('macp-store-before', 1280, 2454, 'Full-page capture of The MACP Store on Square before the rebuild: an oversized cropped logo hero, a short text intro, three product photos and a photo carousel.'),
  macpAfter: img('macp-store-after', 1280, 4433, 'Full-page capture of the rebuilt MACP Store homepage: announcement bar, search, category menu, Gear up for combat hero, shop by category, featured products, trust points, social gallery, customer reviews, FAQs and footer.'),

  // Platform reviews shown on the study pages (files in /public/images/reviews)
  macpReview: { src: '/images/reviews/shopify-partner-macp.jpeg', alt: 'Five-star Shopify Partner review from The MACP Store, October 2025, praising quality of work and communication.', width: 1600, height: 751 },
  eztReview: { src: '/images/reviews/upwork-review-dtf.jpeg', alt: 'Five-star Upwork review of a Shopify store for DTF printing apparel: no revisions were needed, endorsed as collaborative, a clear communicator and reliable.', width: 1098, height: 328 },
  ezdtfReview: { src: '/images/reviews/goodfirms-review.jpeg', alt: 'Five-star GoodFirms verified review titled Flawless, from the director of Lofty Creations Apparel.', width: 1547, height: 977 },

  // TrashedPunk
  tpConcept: img('trashedpunk-concept-board', 900, 1350, 'TrashedPunk concept direction board: neon teal, pink and yellow on black, glitch textures, a neon frog and the brush-script logo over a dark alley.'),
} as const
