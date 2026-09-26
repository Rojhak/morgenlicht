import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ContactBand } from '../components/site/ContactBand'
import { JsonLd } from '../components/site/JsonLd'
import { PageHero } from '../components/site/PageHero'
import { OFFICIAL_SOURCES, SITE_URL } from '@/config/site'
import { BUSINESS_ID, graph } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

const PUBLISHED = '2026-09-26'
const MODIFIED = '2026-09-26'

export const metadata = createPageMetadata({
  title: 'Pflegegrad-Begutachtung: Ablauf & Checkliste | Morgenlicht',
  description:
    'So läuft die Begutachtung für den Pflegegrad: sechs Lebensbereiche, Punktwerte, Fristen und eine Checkliste für den Termin mit dem Medizinischen Dienst.',
  path: '/pflegegrad-guide',
  article: { publishedTime: PUBLISHED, modifiedTime: MODIFIED },
})

const toc = [
  { id: 'pflegegrade', label: 'Die fünf Pflegegrade' },
  { id: 'module', label: 'Was begutachtet wird' },
  { id: 'ablauf', label: 'Ablauf und Fristen' },
  { id: 'checkliste', label: 'Checkliste für den Termin' },
  { id: 'danach', label: 'Nach dem Bescheid' },
  { id: 'morgenlicht', label: 'Wie Morgenlicht unterstützt' },
]

const grades = [
  ['1', '12,5 bis unter 27', 'geringe Beeinträchtigungen der Selbstständigkeit'],
  ['2', '27 bis unter 47,5', 'erhebliche Beeinträchtigungen'],
  ['3', '47,5 bis unter 70', 'schwere Beeinträchtigungen'],
  ['4', '70 bis unter 90', 'schwerste Beeinträchtigungen'],
  ['5', '90 bis 100', 'schwerste Beeinträchtigungen mit besonderen Anforderungen an die pflegerische Versorgung'],
]

const modules = [
  ['Mobilität', '10 %', 'Aufstehen, Treppensteigen, sich in der Wohnung fortbewegen'],
  ['Kognitive und kommunikative Fähigkeiten', '15 %*', 'Orientierung, Erinnern, Gespräche verstehen, Entscheidungen treffen'],
  ['Verhaltensweisen und psychische Problemlagen', '15 %*', 'Unruhe, Ängste, nächtliche Unruhe, Abwehr von Unterstützung'],
  ['Selbstversorgung', '40 %', 'Waschen, Anziehen, Essen, Trinken, Toilettengang'],
  ['Umgang mit krankheitsbedingten Anforderungen', '20 %', 'Medikamente, Arzttermine, Verbände, Therapien'],
  ['Gestaltung des Alltagslebens und sozialer Kontakte', '15 %', 'Tagesablauf planen, sich beschäftigen, Kontakte pflegen'],
]

const checklist = [
  'Aktuelle Arztberichte und Krankenhausentlassungsberichte',
  'Medikamentenplan',
  'Liste der Hilfsmittel, zum Beispiel Rollator oder Hörgerät',
  'Pflegetagebuch über ein bis zwei Wochen: wobei, wie oft und wie lange Hilfe nötig ist',
  'Notizen zu Stürzen, nächtlicher Unruhe oder Orientierungsproblemen',
  'Schwerbehindertenausweis, falls vorhanden',
  'Kontaktdaten von Hausarztpraxis und Pflegedienst, falls vorhanden',
]

const schema = graph({
  '@type': 'Article',
  '@id': `${SITE_URL}/pflegegrad-guide#article`,
  headline: 'Pflegegrad-Begutachtung: Ablauf, sechs Lebensbereiche und Checkliste',
  description:
    'So läuft die Begutachtung für den Pflegegrad: sechs Lebensbereiche, Punktwerte, Fristen und eine Checkliste für den Termin.',
  inLanguage: 'de-DE',
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@id': BUSINESS_ID },
  publisher: { '@id': BUSINESS_ID },
  mainEntityOfPage: `${SITE_URL}/pflegegrad-guide`,
  citation: [OFFICIAL_SOURCES.sgb11Par15.href, OFFICIAL_SOURCES.sgb11Par18c.href, OFFICIAL_SOURCES.bmgEntlastung.href],
})

const h2 = 'scroll-mt-24 font-heading text-2xl font-bold text-forest md:text-3xl'
const para = 'mt-4 text-lg leading-relaxed text-ink'

export default function PflegegradGuidePage() {
  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ name: 'Pflegegrad-Begutachtung', href: '/pflegegrad-guide' }]}
        kicker="Ratgeber Pflegegrad"
        title="Pflegegrad-Begutachtung: Ablauf, sechs Lebensbereiche und Checkliste"
        lead={
          <>
            <p>
              Wer einen Pflegegrad beantragt, wird begutachtet. Hier lesen Sie, was dabei geprüft
              wird, wie die Punkte zustande kommen und wie Sie sich gut vorbereiten.
            </p>
            <p className="text-base">
              Aktualisiert am <time dateTime={MODIFIED}>26. September 2026</time> · Herausgeber: Morgenlicht Alltagshilfe Berlin
            </p>
          </>
        }
      />

      <div className="bg-white px-5 py-12 sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-labelledby="toc-title" className="h-fit lg:sticky lg:top-28">
            <h2 id="toc-title" className="text-base font-bold text-forest">Inhalt</h2>
            <ol className="mt-3 border-l-2 border-line">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="-ml-0.5 flex min-h-11 items-center border-l-2 border-transparent pl-4 text-base text-ink hover:border-sun hover:text-forest">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="min-w-0 max-w-3xl">
            <section aria-labelledby="pflegegrade">
              <h2 id="pflegegrade" className={h2}>Die fünf Pflegegrade</h2>
              <p className={para}>
                Der Pflegegrad beschreibt, wie stark die Selbstständigkeit im Alltag eingeschränkt
                ist – nicht, welche Krankheit jemand hat. Aus der Begutachtung ergeben sich
                Gesamtpunkte zwischen 0 und 100. Ab 12,5 Punkten besteht Pflegegrad 1.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left text-lg">
                  <caption className="sr-only">Pflegegrade und Gesamtpunkte nach § 15 SGB XI</caption>
                  <thead>
                    <tr className="border-b-2 border-forest">
                      <th scope="col" className="py-3 pr-4 font-heading text-base text-forest">Pflegegrad</th>
                      <th scope="col" className="py-3 pr-4 font-heading text-base text-forest">Gesamtpunkte</th>
                      <th scope="col" className="py-3 font-heading text-base text-forest">Bedeutung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map(([grade, points, meaning]) => (
                      <tr key={grade} className="border-b border-line align-top">
                        <th scope="row" className="py-3 pr-4 font-heading font-bold text-forest">{grade}</th>
                        <td className="whitespace-nowrap py-3 pr-4 text-ink">{points}</td>
                        <td className="py-3 text-muted">{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-base text-muted">Quelle: § 15 Abs. 3 SGB XI.</p>
            </section>

            <section aria-labelledby="module" className="mt-14">
              <h2 id="module" className={h2}>Was begutachtet wird: sechs Lebensbereiche</h2>
              <p className={para}>
                Bei gesetzlich Versicherten begutachtet der Medizinische Dienst, bei privat
                Versicherten Medicproof. Geprüft wird, wie selbstständig die Person in sechs
                Bereichen ist. Die Bereiche zählen unterschiedlich stark:
              </p>
              <ul className="mt-6 border-t border-line">
                {modules.map(([title, weight, examples]) => (
                  <li key={title} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[1fr_5rem] sm:gap-4">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-forest">{title}</h3>
                      <p className="mt-1 text-base leading-relaxed text-muted md:text-lg">{examples}</p>
                    </div>
                    <p className="font-heading text-xl font-bold text-ink sm:text-right">{weight}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base text-muted">
                * Von diesen beiden Bereichen zählt nur der höhere Wert, zusammen 15 %. Quelle: § 15 Abs. 2 und 3 SGB XI.
              </p>
            </section>

            <section aria-labelledby="ablauf" className="mt-14">
              <h2 id="ablauf" className={h2}>Ablauf und Fristen</h2>
              <ol className="mt-6 space-y-5">
                {[
                  ['Antrag stellen', 'Bei der Pflegekasse, die zu Ihrer Krankenkasse gehört. Ein formloser Anruf oder Brief reicht für den Start; das Antragsdatum zählt.'],
                  ['Termin abwarten', 'Die Pflegekasse beauftragt die Begutachtung. Der Termin findet meist bei Ihnen zu Hause statt und wird vorher angekündigt.'],
                  ['Begutachtung', 'Die Gutachterin oder der Gutachter fragt nach dem Alltag und lässt sich manches zeigen. Angehörige dürfen dabei sein.'],
                  ['Bescheid', 'Die Pflegekasse muss grundsätzlich spätestens 25 Arbeitstage nach Eingang des Antrags schriftlich entscheiden. Das Gutachten wird mitgeschickt, wenn Sie nicht widersprechen.'],
                ].map(([title, text], index) => (
                  <li key={title} className="flex gap-4">
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
              <p className="mt-4 text-base text-muted">Quelle zur Frist: § 18c Abs. 1 SGB XI. Bei Krankenhausaufenthalt oder Hospiz gelten kürzere Fristen.</p>
              <Link href="/blog/pflegegrad-beantragen-schritt-fuer-schritt" className="mt-5 inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
                Den Antrag Schritt für Schritt stellen
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </section>

            <section aria-labelledby="checkliste" className="mt-14 rounded-2xl border-t-4 border-sun bg-cream p-6 md:p-8">
              <h2 id="checkliste" className={h2}>Checkliste für den Begutachtungstermin</h2>
              <ul className="mt-6 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-snug text-ink">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-heading text-xl font-bold text-forest">Tipps für das Gespräch</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed text-ink marker:text-forest">
                <li>Beschreiben Sie einen normalen Tag – nicht einen besonders guten.</li>
                <li>Spielen Sie Schwierigkeiten nicht herunter, auch wenn es unangenehm ist.</li>
                <li>Bitten Sie eine vertraute Person, beim Termin dabei zu sein und zu ergänzen.</li>
              </ul>
            </section>

            <section aria-labelledby="danach" className="mt-14">
              <h2 id="danach" className={h2}>Nach dem Bescheid</h2>
              <p className={para}>
                Prüfen Sie das mitgeschickte Gutachten in Ruhe. Wenn Sie mit dem Ergebnis nicht
                einverstanden sind, können Sie innerhalb eines Monats nach Erhalt des Bescheids
                schriftlich Widerspruch bei der Pflegekasse einlegen.
              </p>
              <p className={para}>
                Schon ab Pflegegrad 1 gibt es den Entlastungsbetrag von bis zu 131 € im Monat, zum
                Beispiel für anerkannte Alltagshilfe. Ab Pflegegrad 2 kommen Pflegegeld oder
                Pflegesachleistungen hinzu.
              </p>
              <div className="mt-5 flex flex-col items-start">
                <Link href="/blog/pflegegrad-1-hilfe-leistungen" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
                  Pflegegrad 1: Welche Hilfe steht Ihnen zu?
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/kosten" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
                  Entlastungsbetrag für Alltagshilfe nutzen
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </section>

            <section aria-labelledby="morgenlicht" className="mt-14 border-t border-line pt-10">
              <h2 id="morgenlicht" className={h2}>Wie Morgenlicht unterstützt</h2>
              <p className={para}>
                Wir erklären Ihnen den Ablauf, helfen beim Ausfüllen von Formularen und bei der
                Vorbereitung auf den Begutachtungstermin. Nach der Einstufung klären wir, ob eine
                Direktabrechnung mit Ihrer Pflegekasse möglich ist. Eine ausführliche, kostenfreie
                Pflegeberatung bieten außerdem Ihre Pflegekasse und die Pflegestützpunkte Berlin.
              </p>
            </section>

            <section aria-labelledby="quellen" className="mt-14 border-l-4 border-sun bg-cream p-5">
              <h2 id="quellen" className="font-heading text-lg font-bold text-forest">Quellen</h2>
              <ul className="mt-2 space-y-1 text-base">
                {[OFFICIAL_SOURCES.sgb11Par15, OFFICIAL_SOURCES.sgb11Par18c, OFFICIAL_SOURCES.bmgEntlastung].map((source) => (
                  <li key={source.href}>
                    <a href={source.href} rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold text-forest underline underline-offset-4">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>

      <ContactBand title="Unterstützung nach der Einstufung" text="Mit Pflegegrad können Sie den Entlastungsbetrag für Alltagshilfe nutzen. Wir erklären Ihnen, wie das in Ihrem Fall funktioniert." />
    </>
  )
}
