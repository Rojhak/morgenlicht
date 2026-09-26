import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FAQList } from '../components/sections/FAQSection'
import { ContactBand } from '../components/site/ContactBand'
import { JsonLd } from '../components/site/JsonLd'
import { PageHero } from '../components/site/PageHero'
import { OFFICIAL_SOURCES, SITE, SITE_URL } from '@/config/site'
import { BUSINESS_ID, faqSchema, graph, type QA } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Alltagshilfe Kosten & 131 € Entlastungsbetrag | Morgenlicht',
  description:
    '35,50 € pro Stunde, ab Pflegegrad 1 bis zu 131 € im Monat über die Pflegekasse und Direktabrechnung ohne Vorkasse: So wird Alltagshilfe in Berlin bezahlt.',
  path: '/kosten',
})

const options = [
  {
    label: 'Pflegegrad 1 bis 5',
    title: 'Entlastungsbetrag',
    amount: 'bis 131 €',
    unit: 'pro Monat',
    text: 'Für Pflegebedürftige, die zu Hause leben. Zweckgebunden für anerkannte Angebote wie Morgenlicht.',
    points: [
      'Im verfügbaren Budget ohne Eigenanteil möglich',
      'Direktabrechnung bei erfüllten Voraussetzungen',
      'Pflegegeld wird dadurch nicht gekürzt',
    ],
  },
  {
    label: 'Pflegegrad 2 bis 5',
    title: 'Umwandlungsanspruch',
    amount: 'bis 40 %',
    unit: 'der nicht genutzten Sachleistungen',
    text: 'Nicht genutzte ambulante Pflegesachleistungen können teilweise für Alltagshilfe eingesetzt werden.',
    points: [
      'Die Pflegekasse rechnet zuerst die genutzten Sachleistungen ab',
      'Ein anteiliges Pflegegeld kann sich verringern',
      'Höhe bitte vorab mit der Pflegekasse klären',
    ],
  },
  {
    label: 'Ohne Pflegegrad',
    title: 'Privat bezahlen',
    amount: SITE.hourlyRate,
    unit: 'pro Stunde',
    text: 'Wenn noch kein Pflegegrad vorliegt oder Sie mehr Stunden wünschen, als das Budget abdeckt.',
    points: [
      'Gleicher Stundensatz, Anfahrt inklusive',
      'Umfang und Häufigkeit nach Absprache',
      'Steuerliche Absetzbarkeit bitte mit Steuerberatung klären',
    ],
  },
]

const faqs: QA[] = [
  {
    question: 'Was kostet eine Stunde Alltagshilfe bei Morgenlicht?',
    answer: `Der Stundensatz beträgt ${SITE.hourlyRate}. Anfahrt und Verwaltung sind darin enthalten. Mit Pflegegrad kann die Pflegekasse die Kosten im Rahmen des verfügbaren Budgets übernehmen.`,
  },
  {
    question: 'Wie viele Stunden bezahlt die Pflegekasse mit 131 €?',
    answer: `131 € geteilt durch ${SITE.hourlyRate} ergeben rechnerisch etwa 3 Stunden und 41 Minuten im Monat. Wer den Betrag einige Monate anspart, kann ihn auch für einen größeren Einsatz nutzen.`,
  },
  {
    question: 'Verfällt der Entlastungsbetrag, wenn ich ihn nicht nutze?',
    answer:
      'Nicht sofort. Nicht genutzte Beträge werden in die folgenden Monate übertragen. Was am Jahresende übrig ist, kann bis zum 30. Juni des Folgejahres genutzt werden. Danach verfällt der Rest.',
  },
  {
    question: 'Muss ich in Vorkasse gehen?',
    answer:
      'Nicht, wenn eine Direktabrechnung vereinbart wird. Dafür unterschreiben Sie in der Regel eine Abtretungserklärung, und wir rechnen die anerkannten Leistungen im verfügbaren Budget direkt mit Ihrer Pflegekasse ab. Ohne Direktabrechnung reichen Sie unsere Rechnung selbst bei der Pflegekasse ein.',
  },
  {
    question: 'Was passiert, wenn das Budget aufgebraucht ist?',
    answer:
      'Dann entstehen Kosten zum Stundensatz, die Sie selbst tragen. Stunden außerhalb des Budgets planen wir nur nach Ihrer ausdrücklichen Zustimmung.',
  },
]

const schema = graph(
  {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/kosten#webpage`,
    name: 'Kosten der Alltagshilfe und Finanzierung über die Pflegekasse',
    url: `${SITE_URL}/kosten`,
    inLanguage: 'de-DE',
    about: { '@id': BUSINESS_ID },
    citation: [OFFICIAL_SOURCES.bmgEntlastung.href, OFFICIAL_SOURCES.gesundBund.href],
  },
  faqSchema(faqs),
)

export default function KostenPage() {
  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ name: 'Kosten', href: '/kosten' }]}
        kicker="Kosten und Pflegekasse"
        title="Was kostet Alltagshilfe – und was zahlt die Pflegekasse?"
        lead={
          <p>
            Unser Stundensatz beträgt {SITE.hourlyRate}, Anfahrt und Verwaltung sind enthalten.
            Mit Pflegegrad übernimmt die Pflegekasse bis zu 131 € im Monat. Welche Kosten für Sie
            entstehen, klären wir vor dem ersten Einsatz.
          </p>
        }
        aside={
          <div className="rounded-2xl border-t-4 border-sun bg-white p-6 shadow-[0_10px_40px_rgba(19,78,74,0.08)] md:p-8">
            <h2 className="font-heading text-xl font-bold text-forest">Rechenbeispiel Pflegegrad 1</h2>
            <dl className="mt-5 space-y-3 text-lg">
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">Entlastungsbetrag</dt>
                <dd className="whitespace-nowrap font-semibold text-ink">131 € / Monat</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">Stundensatz</dt>
                <dd className="whitespace-nowrap font-semibold text-ink">{SITE.hourlyRate}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-forest">Hilfe pro Monat</dt>
                <dd className="whitespace-nowrap font-heading text-xl font-bold text-forest">ca. 3 Std. 41 Min.</dd>
              </div>
            </dl>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Bei Direktabrechnung im verfügbaren Budget ohne Eigenanteil. Maßgeblich ist das
              Budget, das bei Ihrer Pflegekasse tatsächlich noch frei ist.
            </p>
          </div>
        }
      />

      <section aria-labelledby="optionen-title" className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 id="optionen-title" className="font-heading text-3xl font-bold text-forest md:text-4xl">
            Drei Wege der Finanzierung
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {options.map((option) => (
              <article key={option.title} className="flex flex-col rounded-2xl border border-line bg-cream p-6 md:p-8">
                <p className="text-base font-bold text-muted">{option.label}</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-forest">{option.title}</h3>
                <p className="mt-4">
                  <span className="font-heading text-3xl font-bold text-ink">{option.amount}</span>{' '}
                  <span className="text-lg text-muted">{option.unit}</span>
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted">{option.text}</p>
                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {option.points.map((point) => (
                    <li key={point} className="flex gap-3 text-lg leading-snug text-ink">
                      <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            Bei vorübergehendem Hilfebedarf, etwa nach einem Krankenhausaufenthalt, kann auch eine
            Haushaltshilfe der Krankenkasse in Betracht kommen. Ob ein Anspruch besteht, entscheidet
            der zuständige Kostenträger im Einzelfall.
          </p>
        </div>
      </section>

      <section aria-labelledby="ablauf-kosten-title" className="bg-mint px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="ablauf-kosten-title" className="font-heading text-3xl font-bold text-forest">
              So läuft die Abrechnung
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Wir helfen Ihnen, das vorhandene Budget zu klären und die nötigen Unterlagen
              zusammenzustellen. Noch kein Pflegegrad? Dann erklären wir Ihnen den Antrag.
            </p>
            <div className="mt-6 flex flex-col items-start">
              <Link href="/blog/direktabrechnung-pflegekasse-ohne-vorkasse" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
                Direktabrechnung ausführlich erklärt
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="/blog/pflegesachleistung-haushaltshilfe-umwandlungsanspruch" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
                Ab Pflegegrad 2: doppelt so viele Stunden Haushaltshilfe
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="/blog/pflegegrad-beantragen-schritt-fuer-schritt" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
                Pflegegrad beantragen: Schritt für Schritt
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ol className="border-b border-line">
            {[
              ['Budget klären', 'Wir besprechen Pflegegrad, Pflegekasse und ob vom Entlastungsbetrag noch etwas verfügbar ist.'],
              ['Direktabrechnung vereinbaren', 'In der Regel mit einer Abtretungserklärung. Dann rechnen wir die anerkannten Leistungen direkt mit der Pflegekasse ab.'],
              ['Abrechnen', 'Die geleisteten Stunden werden mit der Pflegekasse abgerechnet. Kosten außerhalb des Budgets entstehen nur nach Ihrer Zustimmung.'],
            ].map(([title, text], index) => (
              <li key={title} className="flex gap-4 border-t border-line py-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-forest font-bold text-white" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-forest">{title}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="kosten-faq-title" className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 id="kosten-faq-title" className="font-heading text-3xl font-bold text-forest">
            Häufige Fragen zu Kosten und Abrechnung
          </h2>
          <div className="mt-8">
            <FAQList items={faqs} />
          </div>
          <div className="mt-10 border-l-4 border-sun bg-cream p-5">
            <h3 className="font-heading text-lg font-bold text-forest">Quellen und Stand</h3>
            <p className="mt-2 text-base leading-relaxed text-muted">
              Beträge und Regeln nach § 45a und § 45b SGB XI, geprüft am 26. September 2026:
            </p>
            <ul className="mt-2 space-y-1 text-base">
              {[OFFICIAL_SOURCES.bmgEntlastung, OFFICIAL_SOURCES.gesundBund, OFFICIAL_SOURCES.berlinAuA].map((source) => (
                <li key={source.href}>
                  <a href={source.href} className="inline-flex min-h-11 items-center font-semibold text-forest underline underline-offset-4" rel="noopener noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactBand
        title="Fragen zur Kostenübernahme?"
        text="Wir prüfen mit Ihnen, welches Budget vorhanden ist und wie viele Stunden damit realistisch möglich sind – kostenfrei und unverbindlich."
      />
    </>
  )
}
