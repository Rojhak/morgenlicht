import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ContactActions } from './components/site/ContactActions'
import { Kicker } from './components/site/Kicker'

// Next.js adds <meta name="robots" content="noindex"> to not-found responses itself.
export const metadata: Metadata = {
  title: { absolute: 'Seite nicht gefunden | Morgenlicht' },
}

const links = [
  { href: '/', label: 'Zur Startseite' },
  { href: '/leistungen', label: 'Unsere Leistungen' },
  { href: '/kosten', label: 'Kosten und Pflegekasse' },
  { href: '/blog', label: 'Ratgeber' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function NotFound() {
  return (
    <div className="sunrise overflow-hidden bg-cream px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Kicker>Fehler 404</Kicker>
        <h1 className="mt-4 font-heading text-4xl font-bold text-forest md:text-5xl">
          Diese Seite gibt es leider nicht.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
          Vielleicht hat sich die Adresse geändert. Hier finden Sie die wichtigsten Seiten – oder
          rufen Sie uns direkt an.
        </p>
        <ul className="mt-8 border-t border-line">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line">
              <Link href={link.href} className="flex min-h-14 items-center justify-between text-lg font-semibold text-forest hover:bg-white">
                {link.label}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <ContactActions className="mt-10" showContactLink={false} />
      </div>
    </div>
  )
}
