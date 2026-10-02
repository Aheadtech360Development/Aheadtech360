'use client'

import { usePathname } from 'next/navigation'
import { BOOK_CALL_HREF, CALENDAR_EMBED, CALENDAR_PAGES } from '@/content/site/site'

/**
 * Target for the site-wide "Book A Call" links (header, mobile menu, announcement bar).
 * On a page that embeds the calendar it is the in-page anchor; everywhere else, the booking page.
 */
export function useBookCallHref(): string {
  const pathname = usePathname()
  return CALENDAR_PAGES.includes(pathname) ? CALENDAR_EMBED.anchor : BOOK_CALL_HREF
}
