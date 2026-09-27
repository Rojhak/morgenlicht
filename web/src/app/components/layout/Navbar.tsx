'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { SITE } from '@/config/site'

const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/kosten', label: 'Kosten' },
  { href: '/blog', label: 'Ratgeber' },
  { href: '/fragen', label: 'Fragen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
]

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

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  // Solid background on purpose: backdrop-filter would turn the header into the containing
  // block of the fixed mobile menu and collapse it to zero height.
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-h-12 flex-none items-center rounded-lg"
          aria-label={`${SITE.name} – Startseite`}
        >
          <Image
            src="/morgen.png"
            alt=""
            width={229}
            height={80}
            priority
            className="h-auto w-[150px] sm:w-[172px]"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? 'page' : undefined}
              className="inline-flex min-h-12 items-center border-b-[3px] border-transparent px-2.5 pt-[3px] text-base font-semibold text-ink transition hover:border-forest/35 hover:text-forest aria-[current=page]:border-sun aria-[current=page]:text-forest xl:px-3.5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phone.href}
            className="plausible-event-name=Telefonklick hidden min-h-12 items-center gap-2 rounded-xl bg-forest px-4 text-base font-bold text-white transition hover:bg-forest-deep sm:inline-flex lg:hidden xl:inline-flex"
          >
            <Phone className="h-5 w-5 flex-none" aria-hidden="true" />
            <span className="sr-only">Anrufen: </span>
            {SITE.phone.label}
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 text-base font-semibold text-forest transition hover:bg-sand lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-7 w-7" aria-hidden="true" /> : <Menu className="h-7 w-7" aria-hidden="true" />}
            <span>{mobileMenuOpen ? 'Schließen' : 'Menü'}</span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <nav className="mx-auto max-w-2xl p-5 pb-24" aria-label="Mobile Navigation">
            <ul className="divide-y divide-line border-y border-line">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={link.href}
                    aria-current={isCurrent(link.href) ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-14 items-center px-2 text-xl font-semibold text-ink transition hover:bg-sand aria-[current=page]:text-forest aria-[current=page]:underline aria-[current=page]:decoration-sun aria-[current=page]:decoration-[3px] aria-[current=page]:underline-offset-8"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <a
                href={SITE.phone.href}
                className="plausible-event-name=Telefonklick flex min-h-14 items-center justify-center gap-3 rounded-xl bg-forest px-5 text-lg font-bold text-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Anrufen: {SITE.phone.label}
              </a>
              <a
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=WhatsAppklick flex min-h-14 items-center justify-center gap-3 rounded-xl border-2 border-forest/35 px-5 text-lg font-bold text-forest"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp schreiben
              </a>
              <p className="text-center text-base text-muted">Telefonisch erreichbar {SITE.hours.label}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
