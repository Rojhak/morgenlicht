'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ArrowUp, MapPin, Shield, Printer } from 'lucide-react'

// Official WhatsApp Icon from Contact Page (Exact Path)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#144E4A] text-white pt-12 pb-0 relative z-10 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow">

        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block mb-4">
               {/* Logo in Original Colors */}
              <Image
                src="/trans_logo.svg"
                alt="Morgenlicht Logo"
                width={0}
                height={0}
                className="h-12 w-auto opacity-100 hover:opacity-95 transition-opacity"
              />
            </Link>

            <div className="flex flex-col mb-4">
               <span className="font-heading font-bold text-lg tracking-wide text-white leading-tight uppercase">
                 MORGENLICHT
               </span>
               <span className="font-body text-xs font-bold text-white tracking-widest uppercase mt-0.5">
                 Alltagshilfe Berlin
               </span>
            </div>

            <p className="font-body text-sm leading-relaxed text-white/70 max-w-xs mb-6">
              Herzlich & Würdevoll:<br />Ihre interkulturelle Alltagshilfe in Berlin.
            </p>

            {/* Seal - Badge Style */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
              <Shield className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span className="text-xs font-medium tracking-wide text-white/90">
                Anerkannt nach § 45a SGB XI
              </span>
            </div>
          </div>

          {/* Column 2: Unternehmen */}
          <div className="pt-1">
            <p
              className="font-heading font-bold text-base mb-4 !text-[#FBBF24] relative z-20"
              style={{ color: '#FBBF24' }}
            >
              Unternehmen
            </p>
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
                    className="text-white/80 hover:text-white hover:pl-1 transition-all duration-200 block text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Rechtliches */}
          <div className="pt-1">
             <p
              className="font-heading font-bold text-base mb-4 !text-[#FBBF24] relative z-20"
              style={{ color: '#FBBF24' }}
            >
              Rechtliches
            </p>
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
                    className="text-white/80 hover:text-white hover:pl-1 transition-all duration-200 block text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontakt (Perfectly Aligned) */}
          <div className="pt-1">
             <p
              className="font-heading font-bold text-base mb-4 !text-[#FBBF24] relative z-20"
              style={{ color: '#FBBF24' }}
            >
              Kontakt
            </p>
            <div className="space-y-4">

              {/* Address */}
              <div className="flex items-center">
                <div className="w-6 flex justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="ml-4 font-medium text-sm text-white/90">Berlin</span>
              </div>

              {/* Phone */}
              <a
                href="tel:03023593028"
                className="flex items-center group hover:opacity-80 transition-opacity"
              >
                <div className="w-6 flex justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="ml-4 font-medium text-sm text-white/90">030 235 930 28</span>
              </a>

               {/* Fax (Printer Icon) - Placed under Phone */}
               <div className="flex items-center text-white/90">
                <div className="w-6 flex justify-center shrink-0">
                  <Printer className="w-5 h-5 text-white" />
                </div>
                <span className="ml-4 font-medium text-sm">030 530 59 389</span>
              </div>

              {/* WhatsApp (Official Icon - White) */}
              <a
                href="https://wa.me/4915156057365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group hover:opacity-80 transition-opacity"
              >
                 <div className="w-6 flex justify-center shrink-0">
                  {/* w-5 h-5, text-white */}
                   <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <span className="ml-4 font-medium text-sm text-white/90">0151 560 573 65</span>
              </a>

               {/* Email */}
               <a
                href="mailto:info@morgenlicht-alltagshilfe.de"
                className="flex items-center group hover:opacity-80 transition-opacity"
              >
                <div className="w-6 flex justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="ml-4 font-medium text-sm text-white/90">info@morgenlicht-alltagshilfe.de</span>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Full Width Border */}
      <div className="w-full border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs font-light tracking-wide">
            © {currentYear} Morgenlicht Alltagshilfe. Alle Rechte vorbehalten.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/50 hover:text-[#FBBF24] transition-colors text-xs font-medium uppercase tracking-wider"
            aria-label="Nach oben scrollen"
          >
            Nach oben
            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FBBF24] group-hover:bg-[#FBBF24] group-hover:text-[#144E4A] transition-all">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>

    </footer>
  )
}
