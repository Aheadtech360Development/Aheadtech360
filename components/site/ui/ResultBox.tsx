import { cx } from '@/lib/cx'
import s from './ResultBox.module.css'

interface ResultBoxProps {
  value: string
  size?: 'md' | 'lg'
  label?: string
  className?: string
}

/** Green "Result" tag carrying a headline number, e.g. "$35K → $360K+/yr". */
export function ResultBox({ value, size = 'md', label = 'Result', className }: ResultBoxProps) {
  return (
    <div className={cx(s.box, size === 'lg' && s.lg, className)}>
      <div className={s.label}>{label}</div>
      <div className={s.value}>{value}</div>
    </div>
  )
}
