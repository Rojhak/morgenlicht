'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { GlassButton } from '../glass'
import { LanguageSwitcher } from './LanguageSwitcher'

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/kosten', label: 'Kosten & Pflegekasse' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/fragen', label: 'Fragen' },
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
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group
                         focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded-lg px-2 py-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD54F]/20 to-[#26A69A]/20 rounded-2xl blur-lg group-hover:blur-md transition-all duration-300" aria-hidden="true" />
                <Image
                  src="/morgen.png"
                  alt="Morgenlicht Logo"
                  width={64}
                  height={64}
                  className="relative w-16 h-16"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display leading-none tracking-tight text-[#0D6E64] group-hover:text-[#0D5D54] transition-colors">
                  Morgenlicht
                </span>
                <span className="text-sm uppercase tracking-wide font-semibold text-[#26A69A] leading-tight mt-1">
                  Alltagshilfe Berlin
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - accessible text colors */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#37474F] hover:text-[#0D6E64] transition-colors text-base font-medium
                             focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded-lg px-4 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-6">
              <LanguageSwitcher />
              <GlassButton as="link" href="/kontakt" variant="primary" size="sm">
                Jetzt anfragen
              </GlassButton>
            </div>

            {/* Mobile Menu Button - 48px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-lg hover:bg-black/5 active:bg-black/10
                         focus:outline-none focus:ring-4 focus:ring-[#FFD54F] min-w-[48px] min-h-[48px]"
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
          className={`md:hidden transition-all duration-300 overflow-hidden
                     ${mobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}
        >
          <div className="px-4 py-6 space-y-1 bg-white/95 backdrop-blur-xl border-t border-white/40 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-4 px-4 text-lg text-[#37474F] hover:text-[#0D6E64]
                           hover:bg-[#E0F2F1] rounded-lg transition-colors min-h-[52px] flex items-center
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 mt-4 border-t border-white/40 space-y-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <GlassButton as="link" href="/kontakt" variant="primary" size="lg" className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                Jetzt anfragen
              </GlassButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

