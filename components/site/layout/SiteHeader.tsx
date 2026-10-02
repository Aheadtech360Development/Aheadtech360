'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useState } from 'react'
import { HEADER_CTA, NAV, SITE } from '@/content/site/site'
import { cx } from '@/lib/cx'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import s from './SiteHeader.module.css'
import { useBookCallHref } from './useBookCallHref'

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  // Remember *which page* the menu was opened on; it closes automatically on navigation
  // without needing an effect to reset state.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname
  const menuId = useId()
  const bookHref = useBookCallHref()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenOn(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Link href="/" className={s.brand} aria-label={`${SITE.name} home`}>
          <Logo />
        </Link>

        <nav className={s.nav} aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(s.link, isActive(pathname, item.href) && s.active)}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href={bookHref} size="sm" className={s.cta}>
          {HEADER_CTA.label}
        </Button>

        <button
          type="button"
          className={s.toggle}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span className={s.srOnly}>{open ? 'Close menu' : 'Open menu'}</span>
          <span className={cx(s.bars, open && s.barsOpen)} aria-hidden="true" />
        </button>
      </div>

      <div id={menuId} className={s.drawer} hidden={!open}>
        {/* any link tap closes the menu, including in-page anchors (#calendar) where the pathname never changes */}
        <nav
          className={s.drawerNav}
          aria-label="Mobile"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) setOpenOn(null)
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(s.drawerLink, isActive(pathname, item.href) && s.active)}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Button href={bookHref} className={s.drawerCta}>
            {HEADER_CTA.label}
          </Button>
        </nav>
      </div>
    </header>
  )
}
