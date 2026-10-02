import type { CaseBeforeAfter, CaseMetric, CasePhase } from '@/content/site/case-studies'
import { cx } from '@/lib/cx'
import { Container } from '../ui/Container'
import { CircleCheckIcon } from '../ui/Icons'
import { IconCallout } from '../ui/Callout'
import { MediaSlot } from '../ui/MediaSlot'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { Stack } from '../ui/Stack'
import { VideoSlot } from '../ui/VideoSlot'
import s from './CaseSections.module.css'

/** "Background" paragraph in a soft band. */
export function CaseBackground({ text }: { text: string }) {
  return (
    <Section tone="soft">
      <Container size="narrow">
        <h2 className={s.kicker}>Background</h2>
        <p className={s.background}>{text}</p>
      </Container>
    </Section>
  )
}

/** Side-by-side before / after screenshots with a one-line caption each. */
export function CaseBeforeAfterSection({ data }: { data: CaseBeforeAfter }) {
  // 2.4:1 is wider than every real screenshot (about 1.8 to 2.25:1), so a screenshot is only ever trimmed
  // at the bottom (object-position: top) and never loses the logo/nav at its sides
  const ratio = '2.4 / 1'
  return (
    <Section>
      <Container>
        <div className={s.pair}>
          <figure className={s.side}>
            <figcaption className={s.sideLabel}>{data.beforeLabel}</figcaption>
            <MediaSlot label={data.beforeSlot} image={data.beforeImage} icon="browser" ratio={ratio} />
            <p className={s.caption}>{data.beforeCaption}</p>
          </figure>
          <figure className={s.side}>
            <figcaption className={cx(s.sideLabel, s.sideLabelAfter)}>{data.afterLabel}</figcaption>
            <MediaSlot label={data.afterSlot} image={data.afterImage} icon="browser" tone="positive" ratio={ratio} />
            <p className={cx(s.caption, s.captionAfter)}>{data.afterCaption}</p>
          </figure>
        </div>
      </Container>
    </Section>
  )
}

/** Numbered phases, each with a screenshot slot. */
export function CasePhases({ title, phases }: { title: string; phases: readonly CasePhase[] }) {
  return (
    <Section tone="soft">
      <Container>
        <Stack gap="sm">
          <SectionHeader title={title} size="sm" />
          <ol className={s.phases}>
            {phases.map((p, i) => (
              <li key={p.title} className={s.phase}>
                <span className={s.phaseNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={s.phaseBody}>
                  <h3 className={s.phaseTitle}>{p.title}</h3>
                  <p className={s.phaseText}>{p.body}</p>
                </div>
                <MediaSlot label={p.slot} icon="none" className={s.phaseSlot} />
              </li>
            ))}
          </ol>
        </Stack>
      </Container>
    </Section>
  )
}

/** Four headline metrics in a divided grid, with an optional footnote. */
export function CaseMetrics({ title, items, footnote }: { title: string; items: readonly CaseMetric[]; footnote?: string }) {
  return (
    <Section>
      <Container>
        <Stack gap="sm">
          <SectionHeader title={title} size="sm" />
          <dl className={s.metrics}>
            {items.map((m) => (
              <div key={m.label} className={s.metric}>
                <dt className={s.metricLabel}>{m.label}</dt>
                <dd className={s.metricValue}>{m.value}</dd>
              </div>
            ))}
          </dl>
          {footnote && <p className={s.footnote}>{footnote}</p>}
        </Stack>
      </Container>
    </Section>
  )
}

/** A small set of boxed results with a note underneath (used when there are only one or two). */
export function CaseResultPair({ title, items, note }: { title: string; items: readonly CaseMetric[]; note: string }) {
  return (
    <Section tone="soft">
      <Container size="narrow">
        <div className={s.resultStack}>
          <SectionHeader title={title} size="sm" align="center" />
          <dl className={s.resultPair}>
            {items.map((m) => (
              <div key={m.label} className={s.resultBox}>
                <dt className={s.metricLabel}>{m.label}</dt>
                <dd className={s.resultValue}>{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className={s.resultNote}>{note}</p>
        </div>
      </Container>
    </Section>
  )
}

/** Single outcome statement in an outlined box. */
export function CaseResultCallout({ title, text }: { title: string; text: string }) {
  return (
    <Section pad="md">
      <Container size="prose">
        <IconCallout icon={<CircleCheckIcon size={24} />} title={title} text={text} />
      </Container>
    </Section>
  )
}

/** Founder video testimonial. */
export function CaseReview({ label, video }: { label: string; video: { label: string; src: string } }) {
  return (
    <Section tone="soft" pad="md">
      <Container size="cta">
        <div className={s.reviewStack}>
          <h2 className={s.kicker}>{label}</h2>
          <VideoSlot {...video} size="md" />
        </div>
      </Container>
    </Section>
  )
}

/** Metric × snapshot table (scrolls sideways on narrow screens instead of breaking the layout). */
export function CaseMetricsTable({
  title,
  columns,
  rows,
  note,
}: {
  title: string
  columns: readonly string[]
  rows: readonly { metric: string; values: readonly string[] }[]
  note: string
}) {
  const last = columns.length - 1
  return (
    <Section>
      <Container>
        <Stack gap="sm">
          <SectionHeader title={title} size="sm" />
          <div className={s.tableWrap} tabIndex={0} role="region" aria-label={title}>
            <table className={s.table}>
              <thead>
                <tr>
                  {columns.map((c, i) => (
                    <th key={c} scope="col" className={i === last ? s.thLast : undefined}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.metric}>
                    <th scope="row">{r.metric}</th>
                    {r.values.map((v, i) => (
                      <td key={`${r.metric}-${i}`} className={i === r.values.length - 1 ? s.tdLast : undefined}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={s.footnote}>{note}</p>
        </Stack>
      </Container>
    </Section>
  )
}

/** Findings / fixes as stacked outlined cards (no numbering). */
export function CaseStreams({ title, items }: { title: string; items: readonly { title: string; body: string }[] }) {
  return (
    <Section tone="soft">
      <Container>
        <Stack gap="sm">
          <SectionHeader title={title} size="sm" />
          <ul className={s.streams}>
            {items.map((item) => (
              <li key={item.title} className={s.stream}>
                <h3 className={s.streamTitle}>{item.title}</h3>
                <p className={s.streamText}>{item.body}</p>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>
    </Section>
  )
}

/** Blurred-for-privacy evidence screenshots. */
export function CaseEvidence({ eyebrow, slots }: { eyebrow: string; slots: readonly { label: string; note: string }[] }) {
  return (
    <Section>
      <Container>
        <Stack gap="sm">
          <h2 className={s.kicker}>{eyebrow}</h2>
          <div className={s.evidence}>
            {slots.map((slot) => (
              <MediaSlot key={slot.label} label={slot.label} note={slot.note} icon="browser" ratio="2.2 / 1" />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
