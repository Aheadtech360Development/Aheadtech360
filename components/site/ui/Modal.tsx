'use client'

import { useEffect, useRef } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import s from './Modal.module.css'

interface ModalProps {
  open: boolean
  onClose: () => void
  /** Text in the bar above the content */
  title: string
  /** Extra buttons before the close button (e.g. previous / next) */
  actions?: ReactNode
  onKeyDown?: (e: KeyboardEvent<HTMLDialogElement>) => void
  children: ReactNode
}

/**
 * Modal popup on the native <dialog> element: focus is trapped inside, Esc closes it, and focus returns to
 * whatever opened it. The content is only mounted while open, so a video or large image costs nothing until then.
 */
export function Modal({ open, onClose, title, actions, onKeyDown, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (!open) {
      if (dialog.open) dialog.close()
      return
    }
    if (!dialog.open) dialog.showModal()
    // a modal dialog does not stop the page behind it from scrolling
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      aria-label={title}
      onClose={onClose}
      onClick={(e) => {
        // the backdrop belongs to the dialog element: a click on it targets the dialog itself
        if (e.target === e.currentTarget) onClose()
      }}
      onKeyDown={onKeyDown}
    >
      {open && (
        <div className={s.body}>
          <div className={s.bar}>
            <span className={s.title}>{title}</span>
            <div className={s.controls}>
              {actions}
              <ModalButton label="Close" onClick={onClose}>
                &times;
              </ModalButton>
            </div>
          </div>
          {children}
        </div>
      )}
    </dialog>
  )
}

/** Square icon button for the modal's bar. */
export function ModalButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" className={s.control} onClick={onClick} aria-label={label}>
      {children}
    </button>
  )
}
