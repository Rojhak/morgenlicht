'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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
      className={cn(
        'glass',
        'rounded-2xl',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </Component>
  )
}
