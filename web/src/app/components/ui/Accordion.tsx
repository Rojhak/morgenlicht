'use client'

import { ReactNode, useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const id = useId()
  const contentId = `accordion-content-${id}`
  const buttonId = `accordion-button-${id}`

  return (
    <div className="border-b border-white/20 last:border-b-0">
      <button
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left
                   focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="font-medium text-[#37474F]">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#455A64] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-[#455A64]">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
  className?: string
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return (
    <div className={`divide-y divide-white/20 ${className}`}>
      {children}
    </div>
  )
}
