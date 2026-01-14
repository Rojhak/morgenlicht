'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
  id?: string
}

export function GlassCard({
  children,
  className = '',
  as: Component = 'div',
  id
}: GlassCardProps) {
  return (
    <Component
      id={id}
      className={`
        glass
        rounded-2xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </Component>
  )
}
