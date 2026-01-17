'use client'

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
  href?: never
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  as: 'link'
  href: string
}

type GlassButtonProps = (ButtonProps | LinkProps) & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
}

export function GlassButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  ...props
}: GlassButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  // WCAG AA: White text on these backgrounds needs 4.5:1 contrast
  // #D84315 (dark coral): 5.8:1 contrast with white
  // #0D6E64 (dark teal): 6.2:1 contrast with white
  const variants = {
    primary: `
      bg-coral-600 hover:bg-coral-700
      text-white
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-teal-800 hover:bg-teal-900
      text-white
      shadow-md hover:shadow-lg
    `,
    ghost: `
      glass hover:bg-white/70
      text-teal-900
      border border-white/40
    `,
    'outline-white': `
      bg-transparent hover:bg-white/10
      text-white
      border border-white/50
    `
  }

  // Ensure minimum touch target size of 48px (WCAG 2.2 AA)
  const sizes = {
    sm: 'h-12 px-4 text-sm min-w-[48px]',
    md: 'h-12 px-6 text-base min-w-[48px]',
    lg: 'h-14 px-8 text-lg min-w-[56px]'
  }

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

  if (as === 'link') {
    const { href, ...linkProps } = props as LinkProps
    return (
      <Link
        href={href}
        className={combinedClassName}
        {...linkProps}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={combinedClassName}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  )
}
