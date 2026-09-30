import type { Metadata } from 'next'
import { SITE } from '@/content/site/site'

interface PageMetaInput {
  /** Page title without the brand suffix, or a full title when `raw` is true */
  title: string
  description: string
  /** Path beginning with "/", used for the canonical URL and og:url */
  path: string
  /** Use `title` verbatim instead of appending the brand */
  raw?: boolean
}

/** Consistent title / description / canonical / Open Graph for every page in the (site) group. */
export function pageMetadata({ title, description, path, raw = false }: PageMetaInput): Metadata {
  const fullTitle = raw ? title : `${title} — ${SITE.name}`
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path },
    twitter: { title: fullTitle, description },
  }
}
