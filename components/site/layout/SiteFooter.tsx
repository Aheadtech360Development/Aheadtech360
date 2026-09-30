import Link from 'next/link'
import { FOOTER_COLUMNS, LEGAL_LINKS, SITE } from '@/content/site/site'
import { LogoMark } from '../ui/LogoMark'
import s from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.columns}>
          <div className={s.brandCol}>
            <Link href="/" className={s.brand} aria-label={`${SITE.name} home`}>
              <LogoMark tone="light" size={28} />
              <span className={s.wordmark}>{SITE.name}</span>
            </Link>
            <p className={s.tagline}>{SITE.tagline}</p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} className={s.col} aria-label={col.title}>
              <h2 className={s.colTitle}>{col.title}</h2>
              <ul className={s.list}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={s.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={s.col}>
            <h2 className={s.colTitle}>Contact</h2>
            <ul className={s.list}>
              <li>
                <a href={`mailto:${SITE.email}`} className={s.link}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <address className={s.address}>
                  {SITE.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copy}>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <ul className={s.legal}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={s.legalLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
