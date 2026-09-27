import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Printer, ShieldCheck } from 'lucide-react'
import { SITE } from '@/config/site'

const linkClass =
  'inline-flex min-h-11 items-center rounded py-1.5 text-base text-white/90 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-sun'

const pageLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Kosten & Pflegekasse', href: '/kosten' },
  { label: 'Fragen & Antworten', href: '/fragen' },
  { label: 'Ratgeber', href: '/blog' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
]

const topicLinks = [
  { label: 'Haushaltshilfe mit Pflegegrad', href: '/haushaltshilfe-pflegegrad-berlin' },
  { label: 'Begleitung zu Arztterminen', href: '/arztbegleitung-senioren-berlin' },
  { label: 'Soziale Begleitung', href: '/soziale-begleitung-senioren-berlin' },
  { label: 'Türkischsprachige Alltagshilfe', href: '/tuerkischsprachige-alltagshilfe-berlin' },
  { label: 'Pflegegrad-Begutachtung vorbereiten', href: '/pflegegrad-guide' },
  { label: 'Alltagshilfe in Kreuzberg', href: '/berlin-kreuzberg' },
  { label: 'Alltagshilfe in Neukölln', href: '/berlin-neukoelln' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="on-dark relative z-10 bg-forest-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-[1fr_0.9fr_1.1fr_1.1fr]">
        <div>
          <Link
            href="/"
            aria-label={`${SITE.name} – Startseite`}
            className="inline-flex min-h-12 items-center rounded-lg bg-white px-3 py-1"
          >
            <Image src="/morgen.png" alt="" width={180} height={63} className="h-auto w-[160px]" />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-white/90">
            Alltagshilfe für ältere und pflegebedürftige Menschen in Berlin-Kreuzberg und
            Neukölln – auf Deutsch, Türkisch und Englisch.
          </p>
          <p className="mt-4 flex items-start gap-2 text-base font-semibold text-white">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-sun" aria-hidden="true" />
            Anerkanntes Angebot zur Unterstützung im Alltag nach § 45a SGB XI
          </p>
          <p className="mt-4">
            <a
              href={SITE.hilfelotseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Eintrag beim Hilfelotsen Berlin
            </a>
          </p>
        </div>

        <nav aria-labelledby="footer-pages">
          <h2 id="footer-pages" className="font-heading text-base font-bold text-sun">Morgenlicht</h2>
          <ul className="mt-3">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-topics">
          <h2 id="footer-topics" className="font-heading text-base font-bold text-sun">Themen</h2>
          <ul className="mt-3">
            {topicLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li lang="tr">
              <Link href="/tr/berlin-yasli-gunluk-yasam-destegi" className={linkClass}>
                Türkçe bilgi
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-bold text-sun">Kontakt</h2>
          <address className="mt-3 space-y-1 not-italic">
            <a
              href={SITE.phone.href}
              className="plausible-event-name=Telefonklick flex min-h-11 items-center gap-3 rounded text-lg font-bold text-white hover:text-sun"
            >
              <Phone className="h-5 w-5 flex-none" aria-hidden="true" />
              {SITE.phone.label}
            </a>
            <a
              href={SITE.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=WhatsAppklick flex min-h-11 items-center gap-3 rounded text-base font-semibold text-white hover:text-sun"
            >
              <MessageCircle className="h-5 w-5 flex-none" aria-hidden="true" />
              WhatsApp: {SITE.whatsapp.label}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="plausible-event-name=E-Mail-Klick flex min-h-11 items-center gap-3 rounded text-base font-semibold text-white hover:text-sun"
            >
              <Mail className="h-5 w-5 flex-none" aria-hidden="true" />
              <span className="break-all">{SITE.email}</span>
            </a>
            <p className="flex min-h-11 items-center gap-3 text-base text-white/90">
              <Printer className="h-5 w-5 flex-none" aria-hidden="true" />
              Fax: {SITE.fax.label}
            </p>
            <p className="pt-1 text-base text-white/90">Telefonisch erreichbar {SITE.hours.label}</p>
            <p className="flex items-start gap-3 pt-3 text-base leading-relaxed text-white/90">
              <MapPin className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
              <span>
                Geschäftsanschrift: {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
                <span className="mt-1 block font-semibold text-white">
                  Kein Kundenempfang – wir kommen zu Ihnen nach Hause.
                </span>
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 md:flex-row">
          <div className="flex flex-wrap justify-center gap-x-5 text-base text-white/85 md:justify-start">
            <span className="inline-flex min-h-11 items-center">© {currentYear} {SITE.legalName}</span>
            <Link href="/impressum" className={linkClass}>Impressum</Link>
            <Link href="/datenschutz" className={linkClass}>Datenschutz</Link>
            <Link href="/barrierefreiheit" className={linkClass}>Barrierefreiheit</Link>
          </div>
          <a href="#main-content" className="inline-flex min-h-11 items-center gap-2 rounded px-3 text-base font-bold text-white/90 hover:text-sun">
            Nach oben <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
