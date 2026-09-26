import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FAQList } from '../components/sections/FAQSection'
import { ContactBand } from '../components/site/ContactBand'
import { JsonLd } from '../components/site/JsonLd'
import { PageHero } from '../components/site/PageHero'
import { SITE, SITE_URL } from '@/config/site'
import { faqSchema, graph, type QA } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Fragen zu Alltagshilfe & Pflegekasse | Morgenlicht',
  description:
    'Antworten zu Pflegegrad, 131 € Entlastungsbetrag, Kosten, Direktabrechnung und Ablauf der Alltagshilfe in Berlin-Kreuzberg und Neukölln.',
  path: '/fragen',
})

interface FaqCategory {
  id: string
  title: string
  items: QA[]
  more?: { href: string; label: string }
}

const categories: FaqCategory[] = [
  {
    id: 'allgemein',
    title: 'Allgemeine Fragen',
    items: [
      {
        question: 'Was ist Morgenlicht Alltagshilfe?',
        answer:
          'Morgenlicht ist ein nach Berliner Landesrecht anerkanntes Angebot zur Unterstützung im Alltag nach § 45a SGB XI. Wir helfen älteren und pflegebedürftigen Menschen in Kreuzberg und Neukölln bei Haushalt, Einkauf, Terminen, Alltagsorganisation und sozialer Teilhabe, damit sie möglichst selbstständig zu Hause leben können.',
      },
      {
        question: 'Wie schnell kann die Unterstützung beginnen?',
        answer:
          'Das hängt von Ihrer Adresse, der gewünschten Zeit und unserer aktuellen Kapazität ab. Im Erstgespräch sagen wir Ihnen offen, ab wann ein Start möglich ist.',
      },
      {
        question: 'In welchen Bezirken ist Morgenlicht tätig?',
        answer:
          'Unser Schwerpunkt liegt auf Kreuzberg und Neukölln. Wenn Sie in einem angrenzenden Bezirk wohnen, fragen Sie gern nach – wir prüfen dann, ob ein Einsatz an Ihrer Adresse möglich ist.',
      },
      {
        question: 'In welchen Sprachen beraten und unterstützen Sie?',
        answer:
          'Auf Deutsch, Türkisch und Englisch. Welche Sprache bei den Einsätzen möglich ist, hängt von der Terminkapazität ab und wird vorher geklärt.',
      },
    ],
  },
  {
    id: 'kosten',
    title: 'Kosten und Pflegekasse',
    more: { href: '/kosten', label: 'Kosten und Abrechnung im Detail' },
    items: [
      {
        question: 'Was kostet die Alltagshilfe?',
        answer: `Der Stundensatz beträgt ${SITE.hourlyRate}, Anfahrt und Verwaltung sind enthalten. Mit Pflegegrad 1 bis 5 kann die Hilfe im Rahmen des verfügbaren Entlastungsbetrags ohne Eigenanteil möglich sein. Ohne Pflegegrad gilt derselbe Stundensatz als Privatleistung.`,
      },
      {
        question: 'Was ist der Entlastungsbetrag von 131 €?',
        answer:
          'Eine Leistung der Pflegeversicherung für Pflegebedürftige mit Pflegegrad 1 bis 5, die zu Hause leben. Sie beträgt bis zu 131 € im Monat und ist zweckgebunden, zum Beispiel für nach Landesrecht anerkannte Angebote zur Unterstützung im Alltag. Das Geld wird nicht ausgezahlt, sondern über Rechnung oder Direktabrechnung verwendet. Das Pflegegeld wird dadurch nicht gekürzt.',
      },
      {
        question: 'Was ist, wenn 131 € im Monat nicht reichen?',
        answer:
          'Ab Pflegegrad 2 können bis zu 40 % der nicht genutzten ambulanten Pflegesachleistungen für anerkannte Angebote eingesetzt werden (Umwandlungsanspruch nach § 45a Abs. 4 SGB XI). Die Pflegekasse rechnet zuerst die genutzten Sachleistungen ab, und ein anteiliges Pflegegeld kann sich verringern. Ob und wie viel verfügbar ist, klären Sie am besten mit Ihrer Pflegekasse. Zusätzliche Stunden können Sie außerdem privat bezahlen.',
      },
      {
        question: 'Gibt es Hilfe, wenn pflegende Angehörige krank oder im Urlaub sind?',
        answer:
          'Ab Pflegegrad 2 kann Verhinderungspflege in Betracht kommen, wenn die private Pflegeperson verhindert ist. Sie ist kein frei verfügbares Zusatzbudget. Ob die Voraussetzungen erfüllt sind und wie abgerechnet wird, ist individuell mit der Pflegekasse zu klären.',
      },
      {
        question: 'Kann ich die Kosten von der Steuer absetzen?',
        answer:
          'Selbst bezahlte Kosten können als haushaltsnahe Dienstleistung steuerlich berücksichtigt werden. Ob und in welcher Höhe das für Sie gilt, klären Sie bitte mit Ihrer Steuerberatung oder dem Finanzamt.',
      },
    ],
  },
  {
    id: 'pflegegrad',
    title: 'Pflegegrad und Antrag',
    more: { href: '/pflegegrad-guide', label: 'Pflegegrad-Begutachtung vorbereiten' },
    items: [
      {
        question: 'Wie bekomme ich einen Pflegegrad?',
        answer:
          'Sie stellen einen Antrag bei Ihrer Pflegekasse, die bei der Krankenkasse angesiedelt ist – telefonisch oder schriftlich. Danach begutachtet der Medizinische Dienst Ihre Selbstständigkeit, meist bei Ihnen zu Hause.',
      },
      {
        question: 'Können Sie beim Antrag helfen?',
        answer:
          'Wir erklären Ihnen den Ablauf und können beim Ausfüllen von Formularen unterstützen. Eine ausführliche Pflegeberatung erhalten Sie kostenfrei bei Ihrer Pflegekasse und bei den Pflegestützpunkten Berlin.',
      },
      {
        question: 'Wie lange dauert es bis zum Bescheid?',
        answer:
          'Die Pflegekasse muss grundsätzlich innerhalb von 25 Arbeitstagen nach Eingang des Antrags entscheiden. In bestimmten Fällen, etwa bei einem Krankenhausaufenthalt, gelten kürzere Fristen.',
      },
      {
        question: 'Wann lohnt sich ein Antrag?',
        answer:
          'Wenn Sie im Alltag dauerhaft, also voraussichtlich mindestens sechs Monate, auf Unterstützung angewiesen sind. Schon ab Pflegegrad 1 gibt es den Entlastungsbetrag von bis zu 131 € im Monat.',
      },
    ],
  },
  {
    id: 'ablauf',
    title: 'Leistungen und Ablauf',
    more: { href: '/leistungen', label: 'Alle Leistungen ansehen' },
    items: [
      {
        question: 'Welche Leistungen bieten Sie an?',
        answer:
          'Fünf Bereiche: Haushalt, Einkauf und Erledigungen, Begleitung und Mobilität, Alltag und Organisation sowie soziale Teilhabe. Medizinische Behandlungspflege gehört nicht dazu.',
      },
      {
        question: 'Wie oft kann die Hilfe kommen?',
        answer: `Das richtet sich nach Ihrem Bedarf und Budget. Mit dem Entlastungsbetrag von 131 € sind bei ${SITE.hourlyRate} pro Stunde etwa 3 Stunden und 41 Minuten im Monat möglich, zum Beispiel ein längerer Einsatz oder mehrere kurze. Mit angespartem Budget, Umwandlungsanspruch oder privat bezahlten Stunden ist mehr möglich.`,
      },
      {
        question: 'Muss ich während des Einsatzes zu Hause sein?',
        answer:
          'Nicht immer. Einkäufe oder Botengänge kann die Alltagshilfe auch allein erledigen. Was ohne Ihre Anwesenheit passieren darf, vereinbaren wir vorher mit Ihnen.',
      },
      {
        question: 'Kommt immer dieselbe Person?',
        answer:
          'Wir planen möglichst mit einer festen Bezugsperson. Bei Krankheit oder Urlaub kann eine Vertretung nötig sein; Änderungen besprechen wir möglichst früh.',
      },
    ],
  },
]

const allItems = categories.flatMap((category) => category.items)

export default function FragenPage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(allItems, `${SITE_URL}/fragen#faq`))} />

      <PageHero
        crumbs={[{ name: 'Fragen', href: '/fragen' }]}
        kicker="Fragen und Antworten"
        title="Häufige Fragen zu Alltagshilfe und Pflegekasse"
        lead={
          <p>
            Kurze, verständliche Antworten zu Kosten, Pflegegrad und Ablauf. Ihre Frage ist nicht
            dabei? Rufen Sie uns an: <a href={SITE.phone.href} className="font-semibold text-forest underline underline-offset-4">{SITE.phone.label}</a>.
          </p>
        }
      >
        <nav aria-labelledby="fragen-themen">
          <h2 id="fragen-themen" className="text-base font-bold text-forest">Fragen nach Thema</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-forest/30 bg-white px-5 text-base font-semibold text-forest transition hover:border-forest hover:bg-sun-soft"
                >
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl space-y-16">
          {categories.map((category) => (
            <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-24">
              <h2 id={`${category.id}-title`} className="font-heading text-2xl font-bold text-forest md:text-3xl">
                {category.title}
              </h2>
              <div className="mt-6">
                <FAQList items={category.items} />
              </div>
              {category.more && (
                <Link
                  href={category.more.href}
                  className="mt-5 inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4"
                >
                  {category.more.label}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              )}
            </section>
          ))}
        </div>
      </div>

      <ContactBand title="Ihre Frage war nicht dabei?" text="Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir beantworten Ihre Frage persönlich und verständlich." />
    </>
  )
}
