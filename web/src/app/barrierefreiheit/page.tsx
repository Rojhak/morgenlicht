import { Check } from 'lucide-react'
import { ContactActions } from '../components/site/ContactActions'
import { PageHero } from '../components/site/PageHero'
import { SITE } from '@/config/site'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Barrierefreiheit der Website | Morgenlicht',
  description:
    'Wie die Website von Morgenlicht für ältere Menschen zugänglich gemacht wird, welche Grenzen bekannt sind und wie Sie uns Barrieren melden.',
  path: '/barrierefreiheit',
})

const measures = [
  'Große Grundschrift (18 Pixel) und kräftige Kontraste für gute Lesbarkeit',
  'Vollständig mit der Tastatur bedienbar, mit deutlich sichtbarem Fokusrahmen',
  '„Zum Hauptinhalt springen“ als erster Link jeder Seite',
  'Klare Überschriftenstruktur und beschreibende Linktexte',
  'Alternativtexte für inhaltliche Bilder',
  'Große Schaltflächen für Anruf und WhatsApp, auf dem Smartphone immer am unteren Rand',
  'Aufklappbare Antworten funktionieren auch ohne JavaScript',
  'Animationen werden reduziert, wenn Ihr Gerät das so eingestellt hat',
]

export default function BarrierefreiheitPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Barrierefreiheit', href: '/barrierefreiheit' }]}
        kicker="Barrierefreiheit"
        title="Eine Website, die sich leicht bedienen lässt"
        lead={
          <p>
            Viele Menschen, die sich über Alltagshilfe informieren, sind älter oder haben
            Einschränkungen beim Sehen, Hören oder Bedienen. Diese Website soll für sie gut nutzbar
            sein. Wir orientieren uns an den Anforderungen der WCAG 2.1 auf Stufe AA.
          </p>
        }
      />

      <section aria-labelledby="massnahmen-title" className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="massnahmen-title" className="font-heading text-3xl font-bold text-forest">
              Was wir umgesetzt haben
            </h2>
            <ul className="mt-6 border-t border-line">
              {measures.map((measure) => (
                <li key={measure} className="flex gap-3 border-b border-line py-4 text-lg leading-snug text-ink">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                  {measure}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10">
            <section aria-labelledby="pruefung-title">
              <h2 id="pruefung-title" className="font-heading text-2xl font-bold text-forest">
                Wie wir prüfen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                Zuletzt geprüft am 26. September 2026: automatisiert mit dem Prüfwerkzeug axe-core
                auf allen Seiten sowie stichprobenartig per Tastatur auf Smartphone- und
                Desktop-Ansicht. Eine vollständige Prüfung durch eine externe Prüfstelle hat bisher
                nicht stattgefunden.
              </p>
            </section>
            <section aria-labelledby="grenzen-title">
              <h2 id="grenzen-title" className="font-heading text-2xl font-bold text-forest">
                Bekannte Einschränkungen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                Die Website ist überwiegend auf Deutsch. Eine Informationsseite gibt es auf
                Türkisch; weitere Seiten in Türkisch, Englisch oder Leichter Sprache sind noch
                nicht verfügbar. Bei Fragen erklären wir alles gern persönlich.
              </p>
            </section>
            <section aria-labelledby="melden-title" className="rounded-2xl border-t-4 border-sun bg-cream p-6">
              <h2 id="melden-title" className="font-heading text-2xl font-bold text-forest">
                Barriere gefunden?
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink">
                Sagen Sie uns Bescheid – telefonisch, per WhatsApp oder per E-Mail an{' '}
                <a href={`mailto:${SITE.email}`} className="break-all font-semibold text-forest underline underline-offset-4">
                  {SITE.email}
                </a>
                .
              </p>
              <ContactActions className="mt-5" showContactLink={false} />
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
