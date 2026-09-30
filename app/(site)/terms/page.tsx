import { LegalDocument } from '@/components/site/sections/LegalDocument'
import { TERMS_META, TERMS_SECTIONS } from '@/content/site/legal/terms'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Terms & Conditions',
  description:
    'The terms governing all AheadTech360 services, proposals, invoices, and communications — payment, refunds, timelines, liability, and dispute resolution.',
  path: '/terms',
})

export default function TermsPage() {
  return <LegalDocument meta={TERMS_META} sections={TERMS_SECTIONS} />
}
