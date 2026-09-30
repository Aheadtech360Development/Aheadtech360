import { LegalDocument } from '@/components/site/sections/LegalDocument'
import { PRIVACY_META, PRIVACY_SECTIONS } from '@/content/site/legal/privacy'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'What information AheadTech360 collects through this website and its booking process, how it is used, and the choices you have.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return <LegalDocument meta={PRIVACY_META} sections={PRIVACY_SECTIONS} />
}
