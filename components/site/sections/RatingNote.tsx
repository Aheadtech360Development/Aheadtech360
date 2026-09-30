import { StarIcon } from '../ui/Icons'
import s from './RatingNote.module.css'

/** One-line social-proof note with a star, shown under a results table. */
export function RatingNote({ children }: { children: string }) {
  return (
    <p className={s.note}>
      <StarIcon size={14} className={s.star} />
      <span>{children}</span>
    </p>
  )
}
