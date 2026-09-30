import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseHero } from '@/components/site/case/CaseHero'
import {
  CaseBackground,
  CaseBeforeAfterSection,
  CaseEvidence,
  CaseMetrics,
  CaseMetricsTable,
  CasePhases,
  CaseResultCallout,
  CaseResultPair,
  CaseReview,
  CaseStreams,
} from '@/components/site/case/CaseSections'
import { FinalCta } from '@/components/site/sections/FinalCta'
import { CASE_STUDIES, caseHref, getCaseStudy } from '@/content/site/case-studies'
import { pageMetadata } from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
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
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <>
      {study.layout === 'audit' ? (
        <>
          <CaseHero variant="centered" {...study.hero} />
          <CaseBackground text={study.background} />
          <CaseMetricsTable {...study.table} />
          <CaseStreams {...study.streams} />
          <CaseEvidence {...study.evidence} />
        </>
      ) : (
        <>
          <CaseHero variant="split" {...study.hero} />
          <CaseBackground text={study.background} />
          <CaseBeforeAfterSection data={study.beforeAfter} />
          {study.layout === 'phased' ? (
            <>
              <CasePhases title={study.phasesTitle} phases={study.phases} />
              {study.results.kind === 'metrics' ? (
                <CaseMetrics {...study.results} />
              ) : (
                <CaseResultCallout {...study.results} />
              )}
              {study.review && <CaseReview {...study.review} />}
            </>
          ) : (
            <CaseResultPair {...study.result} />
          )}
        </>
      )}

      <FinalCta title={study.cta.title} text={study.cta.text} />
    </>
  )
}
