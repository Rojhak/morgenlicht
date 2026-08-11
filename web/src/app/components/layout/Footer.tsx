'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Shield } from 'lucide-react'

const focusClass =
  'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#144E4A]'

const companyLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Kosten & Pflegekasse', href: '/kosten' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Fragen', href: '/fragen' },
  { label: 'Ratgeber', href: '/blog' },
]

const serviceLinks = [
  { label: 'Haushaltshilfe mit Pflegegrad', href: '/haushaltshilfe-pflegegrad-berlin' },
  { label: 'Türkischsprachige Alltagshilfe', href: '/tuerkischsprachige-alltagshilfe-berlin' },
  { label: 'Arztbegleitung für Senioren', href: '/arztbegleitung-senioren-berlin' },
  { label: 'Soziale Begleitung', href: '/soziale-begleitung-senioren-berlin' },
  { label: 'Alltagshilfe Kreuzberg', href: '/berlin-kreuzberg' },
  { label: 'Alltagshilfe Neukölln', href: '/berlin-neukoelln' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-[#144E4A] pb-0 pt-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            aria-label="Morgenlicht Alltagshilfe – Startseite"
            className={`inline-flex min-h-12 items-center rounded-lg bg-white px-3 ${focusClass}`}
          >
            <Image
              src="/morgen.png"
              alt="Morgenlicht Alltagshilfe Berlin"
              width={200}
              height={70}
              className="h-auto w-[180px]"
            />
          </Link>
          <p className="mt-5 max-w-xs text-base leading-relaxed text-white/80">
            Persönliche Alltagshilfe in Berlin-Kreuzberg und Neukölln – auf Deutsch,
            Türkisch und Englisch.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 text-sm text-white/90">
            <Shield className="h-4 w-4 text-[#FFD54F]" aria-hidden="true" />
            Anerkannt nach § 45a SGB XI
          </div>
        </div>

        <nav aria-label="Unternehmensseiten">
          <h2 className="font-heading text-base font-bold text-[#FFD54F]">Morgenlicht</h2>
          <ul className="mt-4 space-y-1">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block min-h-11 rounded-lg py-2 text-sm font-medium text-white/85 transition hover:text-white ${focusClass}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Häufig gesuchte Leistungen">
          <h2 className="font-heading text-base font-bold text-[#FFD54F]">Häufig gesucht</h2>
          <ul className="mt-4 space-y-1">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block min-h-11 rounded-lg py-2 text-sm font-medium leading-snug text-white/85 transition hover:text-white ${focusClass}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-bold text-[#FFD54F]">Kontakt</h2>
          <address className="mt-4 space-y-2 not-italic">
            <a
              href="tel:03023593028"
              className={`plausible-event-name=Telefonklick flex min-h-12 items-center gap-3 rounded-lg text-sm font-semibold text-white/90 transition hover:text-white ${focusClass}`}
            >
              <Phone className="h-5 w-5 flex-none" aria-hidden="true" />
              030 235 930 28
            </a>
            <a
              href="https://wa.me/4915156057365"
              target="_blank"
              rel="noopener noreferrer"
              className={`plausible-event-name=WhatsAppklick flex min-h-12 items-center gap-3 rounded-lg text-sm font-semibold text-white/90 transition hover:text-white ${focusClass}`}
            >
              <MessageCircle className="h-5 w-5 flex-none" aria-hidden="true" />
              WhatsApp: 0151 560 573 65
            </a>
            <a
              href="mailto:info@morgenlicht-alltagshilfe.de"
              className={`plausible-event-name=E-Mail-Klick flex min-h-12 items-center gap-3 rounded-lg text-sm font-semibold text-white/90 transition hover:text-white ${focusClass}`}
            >
              <Mail className="h-5 w-5 flex-none" aria-hidden="true" />
              <span className="break-all">info@morgenlicht-alltagshilfe.de</span>
            </a>
            <p className="flex min-h-12 items-start gap-3 text-sm text-white/85">
              <MapPin className="h-5 w-5 flex-none" aria-hidden="true" />
              <span>
                Geschäftsanschrift: Urbanstraße 71, 10967 Berlin
                <span className="block text-white/70">Kein Kundenempfang</span>
              </span>
            </p>
          </address>
          <Link
            href="/kontakt#rueckruf"
            className={`plausible-event-name=Rueckrufklick mt-5 inline-flex min-h-12 items-center rounded-xl bg-[#FFD54F] px-5 font-bold text-[#134E4A] transition hover:bg-[#FFE082] ${focusClass}`}
          >
            Rückruf anfragen
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/75 md:justify-start">
            <span>© {currentYear} Morgenlicht Alltagshilfe</span>
            <Link href="/impressum" className={`rounded hover:text-white ${focusClass}`}>Impressum</Link>
            <Link href="/datenschutz" className={`rounded hover:text-white ${focusClass}`}>Datenschutz</Link>
            <Link href="/barrierefreiheit" className={`rounded hover:text-white ${focusClass}`}>Barrierefreiheit</Link>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`flex min-h-12 items-center gap-2 rounded-lg px-3 text-sm font-bold text-white/80 transition hover:text-[#FFD54F] ${focusClass}`}
            aria-label="Nach oben scrollen"
          >
            Nach oben <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
