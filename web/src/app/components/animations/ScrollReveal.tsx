'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  threshold?: number
}

export function ScrollRevealSection({
  children,
  className,
  id,
  delay = 0,
  threshold = 0.15
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(16px)',
        transition: `opacity 700ms ease-out, transform 700ms ease-out`,
      }}
    >
      {children}
    </section>
  )
}
