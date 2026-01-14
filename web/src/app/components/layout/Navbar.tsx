'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sun } from 'lucide-react'
import { GlassButton } from '../glass'
import { LanguageSwitcher } from './LanguageSwitcher'

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <a
        href="#main-content"
        className="skip-link focus:outline-none focus:ring-4 focus:ring-[#FFD54F]"
      >
        Zum Hauptinhalt springen
      </a>

      <nav
        className="bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-sm"
        aria-label="Hauptnavigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - accessible text color */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-[#0D6E64]
                         focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded-lg px-2 py-1"
            >
              <Sun className="w-6 h-6 text-[#FFD54F]" aria-hidden="true" />
              <span>Morgenlicht</span>
            </Link>

            {/* Desktop Navigation - accessible text colors */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#37474F] hover:text-[#0D6E64] transition-colors
                             underline decoration-transparent hover:decoration-current
                             focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <GlassButton as="link" href="/kontakt" variant="primary" size="sm">
                Jetzt anfragen
              </GlassButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5
                         focus:outline-none focus:ring-4 focus:ring-[#FFD54F]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#37474F]" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-[#37474F]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-200 overflow-hidden
                     ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="px-4 py-4 space-y-2 bg-white/90 backdrop-blur-xl border-t border-white/40">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-[#37474F] hover:text-[#0D6E64]
                           hover:bg-white/50 rounded-lg transition-colors
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/40 flex items-center justify-between">
              <LanguageSwitcher />
              <GlassButton as="link" href="/kontakt" variant="primary" size="sm" onClick={() => setMobileMenuOpen(false)}>
                Jetzt anfragen
              </GlassButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
