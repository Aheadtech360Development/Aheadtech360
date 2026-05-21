'use client'
// components/LeadConnectorWidget.tsx
import { useEffect } from 'react'

export default function LeadConnectorWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js')
    script.setAttribute('data-widget-id', '69d5455384d87737b38d9ec6')
    document.body.appendChild(script)

    return () => {
      // Script remove karo
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      // Widget iframe/container bhi remove karo
      const widgetEl = document.querySelector('chat-widget')
      if (widgetEl) widgetEl.remove()
    }
  }, [])

  return null
}
