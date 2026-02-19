'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ArrowUp, MapPin, Shield } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#144E4A] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block mb-6">
               {/* Logo in Original Colors - Optimized Spacing */}
              <Image
                src="/trans_logo.svg"
                alt="Morgenlicht Logo"
                width={0}
                height={0}
                className="h-14 w-auto opacity-100 hover:opacity-95 transition-opacity"
              />
            </Link>

            <div className="flex flex-col mb-4">
               <span className="font-heading font-bold text-xl tracking-wide text-white leading-tight uppercase">
                 MORGENLICHT
               </span>
               <span className="font-body text-sm font-medium text-white tracking-widest uppercase mt-1">
                 Alltagshilfe Berlin
               </span>
            </div>

            <p className="font-body text-sm leading-relaxed text-white/80 max-w-xs mb-6">
              Herzlich & Würdevoll:<br />Ihre interkulturelle Alltagshilfe in Berlin.
            </p>

            {/* Seal - Badge Style */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-[#FBBF24]" />
              <span className="text-xs font-semibold tracking-wide text-white/90">
                Anerkannt nach § 45a SGB XI
              </span>
            </div>
          </div>

          {/* Column 2: Unternehmen */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-[#FBBF24]">Unternehmen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Über uns', href: '/ueber-uns' },
                { label: 'Leistungen', href: '/leistungen' },
                { label: 'Kosten & Pflegekasse', href: '/kosten' },
                { label: 'Blog & Ratgeber', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#FBBF24] hover:pl-1 transition-all duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Rechtliches */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-[#FBBF24]">Rechtliches</h3>
            <ul className="space-y-3">
              {[
                { label: 'Impressum', href: '/impressum' },
                { label: 'Datenschutz', href: '/datenschutz' },
                { label: 'Barrierefreiheit', href: '/barrierefreiheit' },
                { label: 'Cookie-Einstellungen', href: '#' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#FBBF24] hover:pl-1 transition-all duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-[#FBBF24]">Kontakt</h3>
            <div className="space-y-5">

              {/* Address (Now First) */}
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-6 h-6 mt-1 flex items-center justify-center shrink-0 text-[#FBBF24]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <span className="block text-sm opacity-60 mb-0.5">Standort</span>
                   <span className="font-medium">Berlin</span>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:03023593028"
                className="flex items-start gap-3 group text-white/80 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 mt-1 flex items-center justify-center shrink-0 text-[#FBBF24]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                   <span className="block text-sm opacity-60 mb-0.5">Telefon</span>
                   <span className="font-semibold tracking-wide">030 235 930 28</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/4915156057365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group text-white/80 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 mt-1 flex items-center justify-center shrink-0 text-[#25D366]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                   <span className="block text-sm opacity-60 mb-0.5">WhatsApp</span>
                   <span className="font-semibold tracking-wide">Nachricht senden</span>
                </div>
              </a>

               {/* Email */}
               <a
                href="mailto:info@morgenlicht-alltagshilfe.de"
                className="flex items-start gap-3 group text-white/80 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 mt-1 flex items-center justify-center shrink-0 text-[#FBBF24]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                   <span className="block text-sm opacity-60 mb-0.5">E-Mail</span>
                   <span className="font-medium">info@morgenlicht-alltagshilfe.de</span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-light">
            © {currentYear} Morgenlicht Alltagshilfe. Alle Rechte vorbehalten.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-[#FBBF24] transition-colors text-sm font-medium"
            aria-label="Nach oben scrollen"
          >
            Nach oben
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FBBF24] group-hover:bg-[#FBBF24] group-hover:text-[#144E4A] transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  )
}
