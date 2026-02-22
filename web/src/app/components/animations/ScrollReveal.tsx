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
  threshold = 0  // Trigger immediately at viewport edge
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Disable all scroll animations on mobile (< 768px)
    if (window.innerWidth < 768) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.transition = 'none'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
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
        // Ensure initial visibility on mobile (< 768px) to avoid animation flash
        opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0,
        transition: `opacity 250ms ease-out`,
      }}
    >
      {children}
    </section>
  )
}
