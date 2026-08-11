'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/kosten', label: 'Kosten' },
  { href: '/blog', label: 'Ratgeber' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/fragen', label: 'Fragen' },
  { href: '/kontakt', label: 'Kontakt' },
]

const focusClass =
  'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2'

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstMobileLinkRef.current?.focus()

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [mobileMenuOpen])

  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#134E4A]/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`flex min-h-12 flex-none items-center rounded-lg ${focusClass}`}
          aria-label="Morgenlicht Alltagshilfe – Startseite"
        >
          <Image
            src="/morgen.png"
            alt="Morgenlicht Alltagshilfe Berlin"
            width={229}
            height={80}
            priority
            className="h-auto w-[158px] sm:w-[185px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? 'page' : undefined}
              className={`inline-flex min-h-12 items-center border-b-2 border-transparent px-2 py-3 text-sm font-semibold text-[#374151] transition hover:border-[#134E4A]/35 hover:text-[#134E4A] aria-[current=page]:border-[#134E4A] aria-[current=page]:text-[#134E4A] xl:px-3 xl:text-[15px] ${focusClass}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`flex min-h-12 min-w-12 items-center justify-center rounded-lg text-[#134E4A] transition hover:bg-[#F7F6F3] lg:hidden ${focusClass}`}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-[#134E4A]/10 bg-white lg:hidden"
        >
          <nav className="mx-auto max-w-2xl space-y-1 p-5" aria-label="Mobile Navigation">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={link.href}
                aria-current={isCurrent(link.href) ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`block min-h-14 rounded-xl border-b border-[#134E4A]/10 px-4 py-4 text-lg font-semibold text-[#1F2937] transition hover:bg-[#F7F6F3] aria-[current=page]:bg-[#F7F6F3] aria-[current=page]:text-[#134E4A] ${focusClass}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
