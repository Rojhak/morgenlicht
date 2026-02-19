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
    <footer className="bg-[#144E4A] text-white pt-20 pb-0 relative z-10 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow">

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

            <div className="flex flex-col mb-6">
               <span className="font-heading font-bold text-xl tracking-wide text-white leading-tight uppercase">
                 MORGENLICHT
               </span>
               <span className="font-body text-sm font-bold text-white tracking-widest uppercase mt-1">
                 Alltagshilfe Berlin
               </span>
            </div>

            <p className="font-body text-sm leading-relaxed text-white/70 max-w-xs mb-8">
              Herzlich & Würdevoll:<br />Ihre interkulturelle Alltagshilfe in Berlin.
            </p>

            {/* Seal - Badge Style */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
              <Shield className="w-4 h-4 text-[#FBBF24]" />
              <span className="text-sm font-medium tracking-wide text-white/90">
                Anerkannt nach § 45a SGB XI
              </span>
            </div>
          </div>

          {/* Column 2: Unternehmen */}
          <div className="pt-2"> {/* Added pt-2 for alignment with logo */}
            {/* Force Visibility: Changed to p tag, added !important class and inline style */}
            <p
              className="font-heading font-bold text-lg mb-6 !text-[#FBBF24] relative z-20"
              style={{ color: '#FBBF24' }}
            >
              Unternehmen
            </p>
            <ul className="space-y-5"> {/* Increased spacing to space-y-5 */}
              {[
                { label: 'Über uns', href: '/ueber-uns' },
                { label: 'Leistungen', href: '/leistungen' },
                { label: 'Kosten & Pflegekasse', href: '/kosten' },
                { label: 'Blog & Ratgeber', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white hover:pl-1 transition-all duration-200 block text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Rechtliches */}
          <div className="pt-2"> {/* Added pt-2 for alignment */}
             <p
              className="font-heading font-bold text-lg mb-6 !text-[#FBBF24] relative z-20"
              style={{ color: '#FBBF24' }}
            >
              Rechtliches
            </p>
            <ul className="space-y-5"> {/* Increased spacing to space-y-5 */}
              {[
                { label: 'Impressum', href: '/impressum' },
                { label: 'Datenschutz', href: '/datenschutz' },
                { label: 'Barrierefreiheit', href: '/barrierefreiheit' },
                { label: 'Cookie-Einstellungen', href: '#' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white hover:pl-1 transition-all duration-200 block text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div className="pt-2"> {/* Added pt-2 for alignment */}
             <p
              className="font-heading font-bold text-lg mb-6 !text-[#FBBF24] relative z-20"
              style={{ color: '#FBBF24' }}
            >
              Kontakt
            </p>
            <div className="space-y-6">

              {/* Address */}
              <div className="flex items-center gap-4"> {/* items-center for vertical centering */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                   <span className="block text-sm font-bold text-[#FBBF24] leading-tight">Standort:</span> {/* Reduced gap by tightening leading/margin */}
                   <span className="font-medium text-sm text-white block">Berlin</span>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:03023593028"
                className="flex items-center gap-4 group hover:opacity-90 transition-opacity"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                   <span className="block text-sm font-bold text-[#FBBF24] leading-tight">Telefon:</span>
                   <span className="font-medium text-sm text-white block">030 235 930 28</span>
                </div>
              </a>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                 <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                   <span className="block text-sm font-bold text-[#FBBF24] leading-tight">WhatsApp:</span>
                   <span className="font-medium text-sm text-white block mb-0.5">0151 560 573 65</span>
                   <a
                    href="https://wa.me/4915156057365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/80 underline hover:text-white transition-colors"
                   >
                     Jetzt Nachricht senden
                   </a>
                </div>
              </div>

               {/* Email */}
               <a
                href="mailto:info@morgenlicht-alltagshilfe.de"
                className="flex items-center gap-4 group hover:opacity-90 transition-opacity"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                   <span className="block text-sm font-bold text-[#FBBF24] leading-tight">E-Mail:</span>
                   <span className="font-medium text-sm text-white block">info@morgenlicht-alltagshilfe.de</span>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Full Width Border */}
      <div className="w-full border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs font-light tracking-wide">
            © {currentYear} Morgenlicht Alltagshilfe. Alle Rechte vorbehalten.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-[#FBBF24] transition-colors text-xs font-medium uppercase tracking-wider"
            aria-label="Nach oben scrollen"
          >
            Nach oben
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FBBF24] group-hover:bg-[#FBBF24] group-hover:text-[#144E4A] transition-all">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>

    </footer>
  )
}
