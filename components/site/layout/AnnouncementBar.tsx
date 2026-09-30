import Link from 'next/link'
import { ANNOUNCEMENT } from '@/content/site/site'
import s from './AnnouncementBar.module.css'

export function AnnouncementBar() {
  return (
    <div className={s.bar}>
      <Link href={ANNOUNCEMENT.href} className={s.link}>
        <span className={s.marker} aria-hidden="true" />
        <span className={s.text}>{ANNOUNCEMENT.text}</span>
        <span aria-hidden="true" className={s.arrow}>
          &rarr;
        </span>
      </Link>
    </div>
  )
}
