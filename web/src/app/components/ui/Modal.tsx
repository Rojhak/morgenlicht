'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { GlassCard } from '../glass'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <GlassCard
        className="relative z-10 max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
      >
        <div
          ref={modalRef}
          tabIndex={-1}
          className="outline-none"
        >
          <div className="flex items-start justify-between mb-4">
            {title && (
              <h2
                id="modal-title"
                className="text-xl font-semibold text-[#37474F]"
              >
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="ml-auto p-2 rounded-lg hover:bg-black/5 transition-colors
                         focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
              aria-label="Schließen"
            >
              <X className="w-5 h-5 text-[#455A64]" aria-hidden="true" />
            </button>
          </div>
          {children}
        </div>
      </GlassCard>
    </div>
  )
}
