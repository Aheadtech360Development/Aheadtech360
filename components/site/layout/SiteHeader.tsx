'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useState } from 'react'
import { HEADER_CTA, NAV, SITE } from '@/content/site/site'
import { cx } from '@/lib/cx'
import { Button } from '../ui/Button'
import { LogoMark } from '../ui/LogoMark'
import s from './SiteHeader.module.css'

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
          <LogoMark />
          <span className={s.wordmark}>{SITE.name}</span>
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

        <Button href={HEADER_CTA.href} size="sm" className={s.cta}>
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
        <nav className={s.drawerNav} aria-label="Mobile">
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
          <Button href={HEADER_CTA.href} className={s.drawerCta}>
            {HEADER_CTA.label}
          </Button>
        </nav>
      </div>
    </header>
  )
}
