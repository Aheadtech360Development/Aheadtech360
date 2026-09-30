import { CalendarEmbed } from '@/components/site/sections/CalendarEmbed'
import { ClientNames } from '@/components/site/sections/ClientNames'
import { FaqSection } from '@/components/site/sections/FaqSection'
import { PageHero } from '@/components/site/sections/PageHero'
import { ReviewsSection } from '@/components/site/sections/ReviewsSection'
import { Chip, ChipList } from '@/components/site/ui/Chip'
import { BrowserIcon, ShieldIcon, StarIcon, UserIcon } from '@/components/site/ui/Icons'
import { BOOK_CALENDAR, BOOK_FAQ, BOOK_HERO, BOOK_REVIEWS } from '@/content/site/book-a-call'
import { CLIENT_NAMES, REVIEW_SHOTS, VIDEO_TESTIMONIALS } from '@/content/site/shared'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Book A Call',
  description:
    'Book a free 15-minute growth call with the founders. We look at your store, tell you where the leak is, and show you what fixing it is worth.',
  path: '/book-a-call',
})

const ICONS = {
  star: <StarIcon size={14} />,
  shield: <ShieldIcon size={14} />,
  browser: <BrowserIcon size={14} />,
  user: <UserIcon size={14} />,
} as const

export default function BookACallPage() {
  return (
    <>
      <PageHero size="lg" badge={BOOK_HERO.badge} title={BOOK_HERO.title} lead={BOOK_HERO.lead}>
        <ChipList label="Why book">
          {BOOK_HERO.chips.map((chip) => (
            <Chip key={chip.label} icon={ICONS[chip.icon]} iconTone={chip.icon === 'star' ? 'green' : 'navy'}>
              {chip.label}
            </Chip>
          ))}
        </ChipList>
        <ClientNames names={CLIENT_NAMES} />
      </PageHero>

      <CalendarEmbed tone="soft" title={BOOK_CALENDAR.title} />

      <ReviewsSection
        tone="default"
        title={BOOK_REVIEWS.title}
        lead={BOOK_REVIEWS.lead}
        videos={VIDEO_TESTIMONIALS}
        shots={REVIEW_SHOTS}
      />

      <FaqSection title={BOOK_FAQ.title} items={BOOK_FAQ.items} action={{ label: 'All FAQs', href: '/faq' }} />
    </>
  )
}
