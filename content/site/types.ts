/** Plain-data shapes shared by content files and section components (no JSX in content). */

export interface LinkItem {
  label: string
  href: string
}

export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
}

export interface VideoItem {
  /** Caption shown on the tile, e.g. "EZDTFMaker — Founder" */
  label: string
  /** Local mp4 under /public. With neither `src` nor `youtubeId` the tile renders as a labelled placeholder. */
  src?: string
  /** YouTube video id; plays inside a privacy-enhanced embed after the first click. */
  youtubeId?: string
  /** Image under /public shown on the tile until it is played. */
  poster?: string
  duration?: string
  /** Vertical (9:16) footage gets a portrait tile instead of a letterboxed landscape one. */
  orientation?: 'portrait'
}

export interface ReviewShotItem {
  platform: string
  image: ImageAsset
}

/** A founder video plus the client details shown beside it. */
export interface VideoTestimonial extends VideoItem {
  client: string
  role: string
  /** Headline result, taken from the client's case study */
  result: string
  /** The client's case study */
  href: string
}

export interface FaqItem {
  question: string
  answer: string
  link?: LinkItem
}

export interface StatItem {
  value: string
  label: string
}

export interface ResultRow {
  client: string
  problem: string
  fix: string
  result: string
  /** When set, the whole row links here (the client's case study). */
  href?: string
}

export interface CellItem {
  /** Small lead-in above the title */
  lead?: { kind: 'tag' | 'kicker' | 'number'; label: string }
  title: string
  text?: string
}

export interface HeaderCardItem {
  kicker: string
  title: string
  text?: string
  bullets?: readonly string[]
  href?: string
}

export interface CheckList {
  title: string
  items: readonly string[]
}

export interface Founder {
  name: string
  role: string
  bio: string
  badge?: string
  /** Square portrait; without one the card shows a plain navy block. */
  photo?: ImageAsset
}
