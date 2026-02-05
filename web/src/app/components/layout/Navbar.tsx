'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'


  /* Update navLinks to match snippet: no 'Fragen', use /pflegekasse */
  /* Update navLinks: Restore 'Fragen' between 'Über uns' and 'Blog' */
  const navLinks = [
    { href: '/', label: 'Startseite' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/pflegekasse', label: 'Kosten & Pflegekasse' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/fragen', label: 'Fragen' },
    { href: '/blog', label: 'Blog' },
  ]

  export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-20 h-20 flex-shrink-0">
              <img src="/trans_logo.svg" alt="Morgenlicht" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-[#1F2937] text-2xl font-bold font-heading leading-none block text-center w-full">MORGENLICHT</span>
              <span className="text-[#1F2937] text-xs font-medium font-heading tracking-[0.15em] mt-1.5 leading-none uppercase text-center block w-full">Alltagshilfe Berlin</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#134E4A] font-medium font-body text-base transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
             {/* Mobile Menu Button - Visible on Mobile */}
             <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#134E4A] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link
              href="/kontakt"
              className="hidden md:flex bg-[#134E4A] text-white px-8 py-2.5 rounded-[12px] font-semibold font-body hover:bg-[#0e3a37] transition-all shadow-sm items-center"
            >
              Kontakt
            </Link>
          </div>

        </div>

        {/* Mobile Menu Overlay - Preserving existing mobile menu logic/style but simplifying to match new aesthetic */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-20 z-40 bg-white border-t border-gray-100 md:hidden overflow-y-auto">
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-medium text-[#1F2937] hover:text-[#134E4A] py-3 border-b border-gray-50 font-body"
                >
                  {link.label}
                </Link>
              ))}
               <Link
                  href="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-[#134E4A] text-white text-center font-bold text-lg px-6 py-4 rounded-xl shadow-sm mt-6 font-body"
                >
                  Kontakt
                </Link>
            </div>
          </div>
        )}
      </header>
    )
  }
