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
              className="flex items-center gap-0 group
                         focus:outline-none focus:ring-4 focus:ring-[#FBBF24] rounded-lg px-2 py-1"
            >
              <img
                src="/trans_logo.svg"
                alt="Morgenlicht Logo"
                className="w-10 h-10 flex-shrink-0"
                width="40"
                height="40"
              />
              <div className="flex flex-col justify-center -ml-2 items-center">
                <span className="text-xl md:text-2xl font-bold font-heading uppercase tracking-wide text-[#134E4A] leading-none mb-0.5" style={{ letterSpacing: '0.05em' }}>
                  MORGENLICHT
                </span>
                <span className="text-xs md:text-sm font-medium font-heading text-[#134E4A] leading-none uppercase" style={{ letterSpacing: '0.15em' }}>
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
                  className="text-[#1F2937] hover:text-[#134E4A] transition-colors text-base font-medium
                             focus:outline-none focus:ring-4 focus:ring-[#FBBF24] rounded-lg px-4 py-2"
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

