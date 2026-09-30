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
  /** Local mp4 under /public. When omitted the tile renders as a labelled placeholder. */
  src?: string
  poster?: string
  duration?: string
}

export interface ReviewShotItem {
  platform: string
  /** When omitted the slot renders as a labelled placeholder. */
  image?: ImageAsset
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
}
