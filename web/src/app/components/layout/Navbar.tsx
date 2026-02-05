'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'


const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/kosten', label: 'Kosten & Pflegekasse' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/fragen', label: 'Fragen' },
  { href: '/blog', label: 'Blog' },

]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-0 focus:left-0 focus:p-4 focus:bg-white focus:text-[#134E4A] focus:font-bold focus:shadow-lg focus:ring-4 focus:ring-[#FBBF24]"
      >
        Zum Hauptinhalt springen
      </a>

      <nav aria-label="Hauptnavigation">
        {/* Strict container: max-w-6xl, px-6 */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-24"> {/* Increased height for spacing */}

            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center gap-4 group focus:outline-none focus:ring-4 focus:ring-[#FBBF24] rounded-lg p-1"
            >
              <img
                src="/trans_logo.svg"
                alt="Morgenlicht Logo"
                className="w-12 h-12 flex-shrink-0" // Increased size slightly for balance
                width="48"
                height="48"
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold font-heading uppercase tracking-wide text-[#134E4A] leading-none mb-0.5">
                  MORGENLICHT
                </span>
                <span className="text-sm font-medium font-body text-[#1F2937] leading-none tracking-widest uppercase text-center">
                  Alltagshilfe Berlin
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1F2937] hover:text-[#134E4A] transition-colors text-base font-medium
                             focus:outline-none focus:ring-4 focus:ring-[#FBBF24] rounded-md px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-6">

              <Link
                href="/kontakt"
                className="bg-[#134E4A] text-white hover:bg-[#0F3F3C] transition-all
                           font-bold text-base px-6 py-3 rounded-xl shadow-sm hover:shadow-md
                           flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-[#FBBF24]"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1F2937] hover:text-[#134E4A] hover:bg-gray-50 rounded-lg
                         focus:outline-none focus:ring-4 focus:ring-[#FBBF24]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-24 z-40 bg-white border-t border-gray-100 lg:hidden overflow-y-auto">
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-medium text-[#1F2937] hover:text-[#134E4A] py-3 border-b border-gray-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                {/* Mobile Language Switcher placeholder if needed, or keeping it simple */}
                <Link
                  href="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#134E4A] text-white text-center font-bold text-lg px-6 py-4 rounded-xl shadow-sm"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
