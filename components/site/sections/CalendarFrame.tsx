'use client'

import { useEffect } from 'react'
import { CALENDAR_EMBED } from '@/content/site/site'

/**
 * The GoHighLevel booking iframe plus its form_embed.js. That script attaches the auto-resizer to the
 * iframes that exist when it runs, so it has to run again for every new iframe: a normal <Script> runs
 * once per full page load, and after a client-side navigation away and back the fresh iframe was never
 * attached, stayed at its minimum height, and clipped the form. Mounting runs the script, unmounting
 * removes it, so every visit to a calendar page gets a working resizer.
 */
export function CalendarFrame({ className }: { className?: string }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = CALENDAR_EMBED.script
    script.async = true
    document.body.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <iframe
      id={CALENDAR_EMBED.iframeId}
      src={CALENDAR_EMBED.src}
      title="Book a free call with AheadTech360"
      allow="payment"
      scrolling="no"
      className={className}
    />
  )
}
