'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight, Phone } from 'lucide-react'


  /* Update navLinks to match snippet: no 'Fragen', use /pflegekasse */
  /* Update navLinks: Restore 'Fragen' between 'Über uns' and 'Blog' */
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
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-50">
        {/* Container: max-w-[1440px] px-16 (64px) - Strict 3-Column Layout */}
        <div className="max-w-[1440px] mx-auto px-16 h-28 flex items-center justify-between">

          {/* 1. Säule (Links): Logo - BOOSTED */}
          <Link href="/" className="flex-none flex items-center gap-x-4 group">
            <div className="w-[48px] md:w-[64px] h-[48px] md:h-[64px] flex-shrink-0">
              <img src="/trans_logo.svg" alt="Morgenlicht" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col justify-center items-center">
              {/* MORGENLICHT: Montserrat Bold, 28px */}
              <span className="text-[#1F2937] text-[28px] font-bold font-heading leading-none tracking-tight">MORGENLICHT</span>
              {/* Slogan: Montserrat Medium, Proportional Grow, CENTERED */}
              <span className="text-[#1F2937] text-[11px] font-medium font-heading tracking-[0.15em] mt-1.5 leading-none uppercase text-center w-full">ALLTAGSHILFE BERLIN</span>
            </div>
          </Link>

          {/* 2. Säule (Mitte): Navigation */}
          {/* gap-x-10, Inter Medium 16px (Unchanged) */}
          <nav className="hidden md:flex items-center gap-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[#1F2937] hover:text-[#134E4A] font-medium font-body text-base transition-colors antialiased
                  ${link.label === 'Über uns' ? 'whitespace-nowrap' : ''}
                  ${(link.label === 'Blog' || link.label === 'Fragen') ? 'hidden lg:block' : ''}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 3. Säule (Rechts): Button */}
          <div className="hidden md:flex items-center flex-none">
             {/* Text: "Kontakt", Green (#134E4A), px-10 py-3 (Premium), rounded-[12px] */}
            <Link
              href="/kontakt"
              className="bg-[#134E4A] text-white px-10 py-3 rounded-[12px] font-semibold font-body hover:bg-[#0e3a37] transition-all shadow-sm flex items-center whitespace-nowrap antialiased"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Toggle (Visible on Mobile) */}
          {/* Mobile Menu Toggle (Visible on Mobile) */}
          {/* Mobile Menu Toggle (Visible on Mobile) */}
          <div className="flex items-center md:hidden ml-auto gap-x-4">
             <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#134E4A] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
