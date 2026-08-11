'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Printer, Shield } from 'lucide-react'

const focusClass =
  'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134E4A]'

const companyLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Kosten & Pflegekasse', href: '/kosten' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Fragen', href: '/fragen' },
  { label: 'Ratgeber', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

const serviceLinks = [
  { label: 'Haushaltshilfe', href: '/haushaltshilfe-pflegegrad-berlin' },
  { label: 'Türkischsprachige Hilfe', href: '/tuerkischsprachige-alltagshilfe-berlin' },
  { label: 'Arztbegleitung', href: '/arztbegleitung-senioren-berlin' },
  { label: 'Soziale Begleitung', href: '/soziale-begleitung-senioren-berlin' },
  { label: 'Kreuzberg', href: '/berlin-kreuzberg' },
  { label: 'Neukölln', href: '/berlin-neukoelln' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-[#134E4A] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr_1.2fr]">
        <div>
          <Link
            href="/"
            aria-label="Morgenlicht Alltagshilfe – Startseite"
            className={`inline-flex min-h-12 items-center rounded-lg bg-white px-2 ${focusClass}`}
          >
            <Image
              src="/morgen.png"
              alt="Morgenlicht Alltagshilfe Berlin"
              width={180}
              height={63}
              className="h-auto w-[160px]"
            />
          </Link>
          <p className="mb-0 mt-4 max-w-sm text-base leading-relaxed text-white/85">
            Persönliche Alltagshilfe in Berlin-Kreuzberg und Neukölln – auf Deutsch,
            Türkisch und Englisch.
          </p>
          <div className="mt-4 flex items-center gap-2 text-base font-semibold text-white">
            <Shield className="h-5 w-5 flex-none text-[#FFD54F]" aria-hidden="true" />
            Anerkannt nach § 45a SGB XI
          </div>
        </div>

        <nav aria-label="Seiten und Leistungen">
          <h2 className="font-heading text-base font-bold text-[#FFD54F]">Morgenlicht</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex min-h-11 items-center rounded-lg py-2 text-base font-medium text-white/90 transition hover:text-white ${focusClass}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-5 font-heading text-base font-bold text-[#FFD54F]">Direkt zu</h3>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex min-h-11 items-center rounded-lg py-1.5 text-base text-white/85 underline decoration-white/35 underline-offset-4 transition hover:text-white ${focusClass}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-bold text-[#FFD54F]">Kontakt</h2>
          <address className="mt-3 space-y-1 not-italic">
            <a
              href="tel:03023593028"
              className={`plausible-event-name=Telefonklick flex min-h-11 items-center gap-3 rounded-lg text-base font-semibold text-white transition hover:text-[#FFD54F] ${focusClass}`}
            >
              <Phone className="h-5 w-5 flex-none" aria-hidden="true" />
              030 235 930 28
            </a>
            <a
              href="https://wa.me/4915156057365"
              target="_blank"
              rel="noopener noreferrer"
              className={`plausible-event-name=WhatsAppklick flex min-h-11 items-center gap-3 rounded-lg text-base font-semibold text-white transition hover:text-[#FFD54F] ${focusClass}`}
            >
              <MessageCircle className="h-5 w-5 flex-none" aria-hidden="true" />
              WhatsApp: 0151 560 573 65
            </a>
            <a
              href="mailto:info@morgenlicht-alltagshilfe.de"
              className={`plausible-event-name=E-Mail-Klick flex min-h-11 items-center gap-3 rounded-lg text-base font-semibold text-white transition hover:text-[#FFD54F] ${focusClass}`}
            >
              <Mail className="h-5 w-5 flex-none" aria-hidden="true" />
              <span className="break-all">info@morgenlicht-alltagshilfe.de</span>
            </a>
            <p className="mb-0 flex min-h-11 items-center gap-3 text-base text-white/90">
              <Printer className="h-5 w-5 flex-none" aria-hidden="true" />
              Fax: 030 530 59 389
            </p>
            <p className="mb-0 flex items-start gap-3 pt-2 text-base leading-relaxed text-white/90">
              <MapPin className="h-5 w-5 flex-none" aria-hidden="true" />
              <span>
                Geschäftsanschrift: Urbanstraße 71, 10967 Berlin
                <strong className="mt-1 block text-white">Kein Kundenempfang</strong>
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 md:flex-row">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-base text-white/80 md:justify-start">
            <span>© {currentYear} Morgenlicht Alltagshilfe</span>
            <Link href="/impressum" className={`rounded hover:text-white ${focusClass}`}>Impressum</Link>
            <Link href="/datenschutz" className={`rounded hover:text-white ${focusClass}`}>Datenschutz</Link>
            <Link href="/barrierefreiheit" className={`rounded hover:text-white ${focusClass}`}>Barrierefreiheit</Link>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`flex min-h-11 items-center gap-2 rounded-lg px-3 text-base font-bold text-white/85 transition hover:text-[#FFD54F] ${focusClass}`}
            aria-label="Nach oben scrollen"
          >
            Nach oben <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
