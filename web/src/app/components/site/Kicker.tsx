import type { ReactNode } from 'react'

/** Half sun rising over a horizon – taken from the Morgenlicht logo. */
export function SunMark({ className = 'h-4 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 16" className={className} aria-hidden="true" focusable="false">
      <path d="M3 14a11 11 0 0 1 22 0Z" fill="#FBBF24" />
      <path d="M0 15h28" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function Kicker({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <p
      className={`flex items-start gap-3 text-base font-bold leading-snug ${
        tone === 'dark' ? 'text-sun-soft' : 'text-forest'
      }`}
    >
      <SunMark className={`mt-[0.2em] h-4 w-7 flex-none ${tone === 'dark' ? 'text-sun-soft' : 'text-forest'}`} />
      <span>{children}</span>
    </p>
  )
}
