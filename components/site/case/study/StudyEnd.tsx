import Link from 'next/link'
import { CASE_LIST_ORDER, caseHref, getCaseStudy } from '@/content/site/case-studies'
import { BOOK_CALL_HREF } from '@/content/site/site'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { Tag } from './StudyBlocks'
import s from './StudyEnd.module.css'

/** Closing band: the invitation, the booking button, and a pointer to the client reviews (hidden on the reviews page itself). */
export function StudyCta({ showReviewsLink = true }: { showReviewsLink?: boolean }) {
  return (
    <Section tone="navy" pad="cta" className={s.cta}>
      <Container>
        <div className={s.inner}>
          <div>
            <h2 className={s.title}>
              Want a result like <em>this?</em>
            </h2>
            <p className={s.text}>Free call. No pitch deck. We tell you honestly whether we can help.</p>
            {showReviewsLink && (
              <p className={s.text}>
                <Link href="/reviews" className={s.link}>
                  Read what clients say &rarr;
                </Link>
              </p>
            )}
          </div>
          <Link href={BOOK_CALL_HREF} className={s.button}>
            Book A Free Call <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  )
}

/** Case-study cards (vertical, name, headline result). `except` leaves one study out, e.g. the page you are on. */
export function ResultGrid({ except }: { except?: string }) {
  const items = CASE_LIST_ORDER.filter((slug) => slug !== except).flatMap((slug) => {
    const study = getCaseStudy(slug)
    return study ? [{ slug, ...study.listing }] : []
  })
  return (
    <ul className={s.more}>
      {items.map((o) => (
        <li key={o.slug}>
          <Link href={caseHref(o.slug)} className={s.mini}>
            <p className={s.miniVertical}>{o.vertical}</p>
            <p className={s.miniName}>{o.name}</p>
            <p className={s.miniResult}>{o.result}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** The other case studies as compact cards. Names and results come from the case-study listing. */
export function MoreResults({ current }: { current: string }) {
  return (
    <Section tone="soft">
      <Container>
        <div className={s.head}>
          <Tag>More results</Tag>
          <h2 className={s.h2}>Other brands, same system.</h2>
        </div>
        <ResultGrid except={current} />
      </Container>
    </Section>
  )
}
