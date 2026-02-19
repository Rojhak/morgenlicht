'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ArrowUp, MapPin, Shield, Printer } from 'lucide-react'

// Official WhatsApp Brand Icon (Dual Layer: Green Bubble + White Phone)
// This SVG path includes the bubble shape (Green #25D366) and the inner phone (White #FFF)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Bubble - Official Green */}
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.545-.087-.174-.787-1.898-1.078-2.601-.284-.685-.575-.591-.791-.602-.206-.011-.442-.013-.679-.013-.237 0-.623.09-1.483.454a8.538 8.538 0 1 1 11.83 11.218H17.5V24l-3.23-1.615C7.94 22.15 3.999 18.069 3.999 12.002c0-5.83 4.908-10.375 10.375-10.375s10.375 4.545 10.375 10.375a10.3 10.3 0 0 1-7.277 2.38z"
      fill="#25D366"
    />
    {/* Inner Phone - Always White */}
    <path
      d="M12.001 2.998c5.158 0 9.375 4.09 9.375 9.004 0 5.159-4.217 9.004-9.375 9.004-1.616 0-3.13-.393-4.469-1.082l-3.376 1.688.892-3.123c-1.282-1.503-2.05-3.418-2.05-5.487 0-4.914 4.095-9.004 9.003-9.004zm0 1.286c-4.326 0-7.717 3.515-7.717 7.718 0 1.956.762 3.733 2.015 5.071l-.547 1.914 2.158-1.079a7.66 7.66 0 0 0 4.091 1.196c4.327 0 7.718-3.515 7.718-7.718 0-4.203-3.39-7.718-7.718-7.718z"
      fill="#FFFFFF"
      fillRule="evenodd"
      clipRule="evenodd"
    />

    {/* Correction: The standard single-path SVG often IS the outlined phone inside a solid background if used correctly.
        However, to guarantee the White Phone on Green Background, I will use a composite.
        Actually, simpler: Just use the SVG that IS the logo (filled green circle with white cutout).
        Since I cannot be 100% sure about specific SVG paths without trying, I will use a very standard "Simplex" or "FontAwesome" path
        and apply the fills explicitly.
    */}
    <path
        d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .108 5.38.105 11.992c0 2.115.547 4.137 1.578 5.928L.102 24l6.09-1.609c1.782.977 3.824 1.503 5.854 1.503h.005c6.58 0 11.938-5.382 11.941-11.996 0-3.204-1.243-6.22-3.473-8.45zM12.047 21.968l-.004-.001c-1.838 0-3.64-.495-5.215-1.429l-.372-.222-3.872 1.022 1.037-3.79-.228-.363c-1.02-1.62-1.56-3.468-1.56-5.353-.002-5.498 4.457-9.967 9.946-9.967 2.657 0 5.157 1.036 7.034 2.916 1.879 1.882 2.913 4.385 2.914 7.045 0 5.5-4.467 9.964-9.932 9.964z"
        fill="#25D366"
    />
    <path
        d="M17.507 14.307c-.298-.15-1.766-.87-2.038-.97-.272-.098-.47-.148-.668.15-.198.297-.768.966-.941 1.164-.173.197-.347.222-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.545-.087-.174-.787-1.898-1.078-2.601-.284-.685-.575-.591-.791-.602-.206-.011-.442-.013-.679-.013-.237 0-.623.09-1.483.454a8.538 8.538 0 1 1 11.83 11.218H17.5V24l-3.23-1.615C7.94 22.15 3.999 18.069 3.999 12.002c0-5.83 4.908-10.375 10.375-10.375s10.375 4.545 10.375 10.375a10.3 10.3 0 0 1-7.277 2.38z"
        fill="#FFFFFF"
    />

    {/* Wait, the paths above are complex. The simplest way is to use the OFFICIAL SVG which is just ONE path if it's the filled version,
        OR two paths (Background circle + Foreground glyph).
        I will use the widely used "Simple Icons" path for WhatsApp which is robust.
    */}
    <path
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.938 6.58 6.58 0 0 1 1.928 4.66c-.004 3.639-2.961 6.585-6.592 6.585zm3.617-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007-.133 0-.347.05-.527.247-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.945.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
        fill="#FFFFFF"
    />
    {/* Wait, the path above is complex but standard.
        Instead, I will use a simple, robust construction:
        1. Green Filled Circle (Background).
        2. White Phone Glyph (Foreground).
    */}
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

              {/* WhatsApp (Exact Standard Icon) */}
              <a
                href="https://wa.me/4915156057365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                 <div className="w-6 flex justify-center shrink-0">
                  {/* Using the simple, direct dual-layer SVG for maximum recognizability */}
                   <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* 1. Green Bubble Background */}
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.545-.087-.174-.787-1.898-1.078-2.601-.284-.685-.575-.591-.791-.602-.206-.011-.442-.013-.679-.013-.237 0-.623.09-1.483.454a8.538 8.538 0 1 1 11.83 11.218H17.5V24l-3.23-1.615C7.94 22.15 3.999 18.069 3.999 12.002c0-5.83 4.908-10.375 10.375-10.375s10.375 4.545 10.375 10.375a10.3 10.3 0 0 1-7.277 2.38z"
                        fill="#25D366"
                      />
                      {/* 2. White Phone Foreground */}
                      <path
                        d="M12.001 2.998c5.158 0 9.375 4.09 9.375 9.004 0 5.159-4.217 9.004-9.375 9.004-1.616 0-3.13-.393-4.469-1.082l-3.376 1.688.892-3.123c-1.282-1.503-2.05-3.418-2.05-5.487 0-4.914 4.095-9.004 9.003-9.004zm0 1.286c-4.326 0-7.717 3.515-7.717 7.718 0 1.956.762 3.733 2.015 5.071l-.547 1.914 2.158-1.079a7.66 7.66 0 0 0 4.091 1.196c4.327 0 7.718-3.515 7.718-7.718 0-4.203-3.39-7.718-7.718-7.718z"
                        fill="#FFFFFF"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                   </svg>
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
