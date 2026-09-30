import { BOOK_CALL_HREF } from '@/content/site/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import s from './FinalCta.module.css'

interface FinalCtaProps {
  title: string
  text: string
  label?: string
  href?: string
}

/** Closing navy CTA band. Every CTA on the site points at the same booking page. */
export function FinalCta({ title, text, label = 'Book A Call', href = BOOK_CALL_HREF }: FinalCtaProps) {
  return (
    <Section tone="navy" pad="cta">
      <Container size="cta">
        <div className={s.stack}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.text}>{text}</p>
          <Button href={href} variant="onNavy">
            {label}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
