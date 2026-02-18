'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Heart, ArrowUp, Clock } from 'lucide-react'

const PHONE = '069 12345678'
const EMAIL = 'info@morgenlicht-alltagshilfe.de'
const SERVICE_AREA = 'Berlin'

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-2 text-white/80 hover:text-[#FBBF24] transition-colors text-sm focus:outline-none focus:ring-4 focus:ring-[#FBBF24] rounded px-2 py-1"
      aria-label="Zum Seitenanfang"
    >
      <ArrowUp className="w-4 h-4" aria-hidden="true" />
      <span>Nach oben</span>
    </button>
  )
}

export function GlassFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative mt-auto bg-[#134E4A] text-white pt-16 pb-8"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-4 mb-6 group focus:outline-none focus:ring-4 focus:ring-[#FBBF24] rounded-lg p-1">
              <img
                src="/trans_logo.svg"
                alt="Morgenlicht Logo"
                className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full p-1"
                width="48"
                height="48"
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold font-heading uppercase tracking-wide text-white leading-none mb-0.5">
                  MORGENLICHT
                </span>
                <span className="text-sm font-medium font-body text-white/80 leading-none tracking-widest uppercase">
                  Alltagshilfe Berlin
                </span>
              </div>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-xs font-body">
              Interkulturelle Alltagsbegleitung und Entlastung für Senioren und ihre Angehörigen in Berlin.
              <br /><br />
              <span className="font-semibold text-[#FBBF24]">Anerkannt nach § 45a SGB XI</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">
              Unternehmen
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link href="/ueber-uns" className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1">Über uns</Link></li>
              <li><Link href="/leistungen" className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1">Leistungen</Link></li>
              <li><Link href="/kosten" className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1">Kosten & Pflegekasse</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1">Blog & Ratgeber</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">
              Rechtliches
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link href="/impressum" className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1">Datenschutz</Link></li>
              <li><Link href="/datenschutz#barrierefreiheit" className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1">Barrierefreiheit</Link></li>
              <li><button className="text-white/80 hover:text-[#FBBF24] transition-colors block py-1 text-left">Cookie-Einstellungen</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">
              Kontakt
            </h4>
            <ul className="space-y-4 font-body text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FBBF24] shrink-0" />
                <span>Berlin & Umgebung</span>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FBBF24] shrink-0" />
                  <a href="tel:03023593028" className="hover:text-[#FBBF24] font-semibold text-white">030 235 930 28</a>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-4 h-4 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                   </div>
                   <a href="https://wa.me/4915156057365" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-[#FBBF24] transition-colors">
                     Mobil & WhatsApp: <span className="text-white font-medium">0151 560 573 65</span>
                   </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FBBF24] shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#FBBF24]">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 font-body">
          <p>© {currentYear} Morgenlicht Alltagshilfe</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
