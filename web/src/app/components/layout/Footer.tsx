'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ArrowUp, MapPin, Shield, Printer } from 'lucide-react'

// Optimized Standard WhatsApp Icon (Phone in Bubble)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.545-.087-.174-.787-1.898-1.078-2.601-.284-.685-.575-.591-.791-.602-.206-.011-.442-.013-.679-.013-.237 0-.623.09-1.483.454a8.538 8.538 0 1 1 11.83 11.218H17.5V24l-3.23-1.615C7.94 22.15 3.999 18.069 3.999 12.002c0-5.83 4.908-10.375 10.375-10.375s10.375 4.545 10.375 10.375a10.3 10.3 0 0 1-7.277 2.38zM12.001 2.998c5.158 0 9.375 4.09 9.375 9.004 0 5.159-4.217 9.004-9.375 9.004-1.616 0-3.13-.393-4.469-1.082l-3.376 1.688.892-3.123c-1.282-1.503-2.05-3.418-2.05-5.487 0-4.914 4.095-9.004 9.003-9.004zm0 1.286c-4.326 0-7.717 3.515-7.717 7.718 0 1.956.762 3.733 2.015 5.071l-.547 1.914 2.158-1.079a7.66 7.66 0 0 0 4.091 1.196c4.327 0 7.718-3.515 7.718-7.718 0-4.203-3.39-7.718-7.718-7.718z" fillRule="evenodd" clipRule="evenodd"/>
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

          {/* Column 4: Kontakt (Refined & Aligned) */}
          <div className="pt-1">
             <p
              className="font-heading font-bold text-base mb-4 !text-[#FBBF24] relative z-20"
              style={{ color: '#FBBF24' }}
            >
              Kontakt
            </p>
            <div className="space-y-4">

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-6 flex justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-sm text-white/90">Berlin</span>
              </div>

              {/* Phone */}
              <a
                href="tel:03023593028"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="w-6 flex justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-sm text-white/90">030 235 930 28</span>
              </a>

               {/* Fax (Printer Icon) - Placed under Phone */}
               <div className="flex items-center gap-4 text-white/90">
                <div className="w-6 flex justify-center shrink-0">
                  <Printer className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-sm">030 530 59 389</span>
              </div>

              {/* WhatsApp (Green Icon - #25D366) */}
              <a
                href="https://wa.me/4915156057365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                 <div className="w-6 flex justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <span className="font-medium text-sm text-white/90">0151 560 573 65</span>
              </a>

               {/* Email */}
               <a
                href="mailto:info@morgenlicht-alltagshilfe.de"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="w-6 flex justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-sm text-white/90">info@morgenlicht-alltagshilfe.de</span>
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
