import Link from 'next/link'
import { Sun, Phone, MapPin, Heart, Clock } from 'lucide-react'

const PHONE = '069 12345678'
const SERVICE_AREA = 'Frankfurt'

export function Footer() {
  return (
    <footer className="mt-auto relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E0F2F1] via-[#E8F5E9] to-[#E0F2F1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD54F]/10 via-transparent to-[#FFD54F]/10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#26A69A]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#FFD54F]/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFD54F] to-[#FF8A65] rounded-xl flex items-center justify-center shadow-lg shadow-[#FFD54F]/20">
                <Sun className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-[#37474F]">Morgenlicht</span>
            </div>
            <p className="text-[#455A64] mb-5 leading-relaxed">
              Würdevolle Unterstützung im Alltag für Senioren und Entlastung für pflegende Angehörige.
            </p>
            <div className="flex items-center gap-2 text-[#455A64]">
              <MapPin className="w-4 h-4 text-[#0D6E64]" aria-hidden="true" />
              <span>Raum {SERVICE_AREA}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[#37474F] mb-5">Navigation</h3>
            <nav aria-label="Footer-Navigation">
              <ul className="space-y-3">
                {[
                  { href: '/leistungen', label: 'Leistungen' },
                  { href: '/ueber-uns', label: 'Über uns' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/kontakt', label: 'Kontakt' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#455A64] hover:text-[#0D6E64] underline decoration-transparent hover:decoration-current transition-all
                                 focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded px-1 -ml-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-[#37474F] mb-5">Informationen</h3>
            <ul className="space-y-3">
              {[
                { href: '/pflegegrad-guide', label: 'Pflegegrad-Guide' },
                { href: '/impressum', label: 'Impressum' },
                { href: '/datenschutz', label: 'Datenschutz' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#455A64] hover:text-[#0D6E64] underline decoration-transparent hover:decoration-current transition-all
                               focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded px-1 -ml-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#37474F] mb-5">Kontakt</h3>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-[#455A64] hover:text-[#0D6E64] transition-colors group
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded px-1 -ml-1"
              >
                <div className="w-9 h-9 bg-[#0D6E64]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0D6E64]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#0D6E64]" aria-hidden="true" />
                </div>
                <span className="font-medium underline decoration-transparent group-hover:decoration-current">{PHONE}</span>
              </a>

              <div className="flex items-center gap-3 text-[#455A64]">
                <div className="w-9 h-9 bg-[#B8472A]/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#B8472A]" aria-hidden="true" />
                </div>
                <span>Mo-Fr: 8:00 - 18:00</span>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-[#B8472A]" aria-hidden="true" />
                  <span className="font-semibold text-[#37474F] text-sm">Anerkannter Anbieter</span>
                </div>
                <p className="text-sm text-[#455A64]">
                  nach § 45a SGB XI – 100% Kostenübernahme durch die Pflegekasse
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-[#0D6E64]/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#455A64] text-sm">
              © {new Date().getFullYear()} Morgenlicht Alltagshilfe. Mit Liebe gemacht.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#455A64]">
              <Heart className="w-3.5 h-3.5 text-[#B8472A]" aria-hidden="true" />
              <span>Für ein würdevolles Älterwerden</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
