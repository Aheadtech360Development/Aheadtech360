import Link from 'next/link'
import type { ReactNode } from 'react'

interface SiteLinkProps {
  href: string
  className?: string
  children: ReactNode
}

/**
 * Next <Link> for page routes; a plain <a> for #anchors and external URLs (mailto:, tel:, https:).
 * Anchors stay plain on purpose: the router treats a click on the hash that is already in the URL as
 * "nothing changed", so a second tap on a "Book A Call" button would not scroll. The browser does.
 */
export function SiteLink({ href, className, children }: SiteLinkProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
