'use client'

import { ANNOUNCEMENT } from '@/content/site/site'
import { SiteLink } from '../ui/SiteLink'
import s from './AnnouncementBar.module.css'
import { useBookCallHref } from './useBookCallHref'

export function AnnouncementBar() {
  const href = useBookCallHref()
  return (
    <div className={s.bar}>
      <SiteLink href={href} className={s.link}>
        <span className={s.marker} aria-hidden="true" />
        <span className={s.text}>{ANNOUNCEMENT.text}</span>
        <span aria-hidden="true" className={s.arrow}>
          &rarr;
        </span>
      </SiteLink>
    </div>
  )
}
