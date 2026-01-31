import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Heart } from 'lucide-react'

const PHONE = '069 12345678'
const SERVICE_AREA = 'Berlin'

export function Footer() {
  return (
    <footer className="mt-auto bg-[#E0F2F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4">
              <Image
                src="/trans_logo.svg"
                alt="Morgenlicht Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display leading-none tracking-tight text-[#0D6E64]">
                  Morgenlicht
                </span>
                <span className="text-sm uppercase tracking-wide font-semibold text-[#26A69A] leading-tight mt-1">
                  Alltagshilfe Berlin
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-2 text-[#455A64] text-sm mt-4">
              <MapPin className="w-4 h-4 text-[#0D6E64]" aria-hidden="true" />
              <span>Raum {SERVICE_AREA}</span>
            </div>
          </div>

          {/* Navigation & Info combined */}
          <div>
            <h3 className="font-semibold text-[#37474F] mb-4">Website</h3>
            <nav aria-label="Footer-Navigation">
              <ul className="space-y-2">
                {[
                  { href: '/leistungen', label: 'Leistungen' },
                  { href: '/kosten', label: 'Kosten' },
                  { href: '/ueber-uns', label: 'Über uns' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/kontakt', label: 'Kontakt' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#455A64] hover:text-[#0D6E64] transition-colors
                                 focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded px-2 py-1 -ml-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#37474F] mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-[#455A64] hover:text-[#0D6E64] transition-colors font-medium
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded px-2 py-1 -ml-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {PHONE}
              </a>

              <p className="text-sm text-[#455A64]">
                Mo-Fr: 8:00 - 18:00
              </p>

              <div className="flex items-center gap-2 text-sm text-[#0D6E64] pt-2">
                <Heart className="w-4 h-4 text-[#B8472A]" aria-hidden="true" />
                <span>Anerkannt nach § 45a SGB XI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[#0D6E64]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#455A64] text-sm">
            © {new Date().getFullYear()} Morgenlicht Alltagshilfe
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/impressum"
              className="text-[#455A64] hover:text-[#0D6E64] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-[#455A64] hover:text-[#0D6E64] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
