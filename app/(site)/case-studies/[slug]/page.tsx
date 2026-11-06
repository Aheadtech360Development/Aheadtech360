import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import { notFound } from 'next/navigation'
import { EzdtfmakerStudy } from '@/components/site/case/studies/EzdtfmakerStudy'
import { EztmartStudy } from '@/components/site/case/studies/EztmartStudy'
import { MacpStudy } from '@/components/site/case/studies/MacpStudy'
import { TrashedpunkStudy } from '@/components/site/case/studies/TrashedpunkStudy'
import { UsStreetwearStudy } from '@/components/site/case/studies/UsStreetwearStudy'
import { CASE_STUDIES, caseHref, getCaseStudy } from '@/content/site/case-studies'
import { pageMetadata } from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

/** One page component per study (each has its own story and proof). Slugs match content/site/case-studies.ts. */
const STUDY_PAGES: Record<string, ComponentType> = {
  ezdtfmaker: EzdtfmakerStudy,
  eztmart: EztmartStudy,
  'us-streetwear-brand': UsStreetwearStudy,
  'macp-store': MacpStudy,
  trashedpunk: TrashedpunkStudy,
}

// Only the studies defined in content/site/case-studies.ts exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return pageMetadata({ title: study.meta.title, description: study.meta.description, path: caseHref(slug) })
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const Study = STUDY_PAGES[slug]
  if (!Study) notFound()
  return <Study />
}
