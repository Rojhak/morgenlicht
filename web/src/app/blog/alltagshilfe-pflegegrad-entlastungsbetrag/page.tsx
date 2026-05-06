import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Euro,
  FileText,
  HelpCircle,
  Home,
  Info,
  ShoppingBag,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Alltagshilfe bei Pflegegrad: 131 € Entlastungsbetrag richtig nutzen',
  description:
    'Ab Pflegegrad 1 stehen monatlich 131 € für Alltagshilfe, Haushalt, Einkauf und Begleitung zur Verfügung. Einfach erklärt für Pflegebedürftige und Angehörige.',
  keywords: [
    'Entlastungsbetrag',
    'Alltagshilfe Pflegegrad',
    'Haushaltshilfe Pflegegrad',
    'Pflegekasse Alltagshilfe',
    'Alltagshilfe Berlin',
    '131 Euro Pflegegrad',
    'Unterstützung im Alltag',
  ],
  alternates: {
    canonical: '/blog/alltagshilfe-pflegegrad-entlastungsbetrag',
  },
  openGraph: {
    title: 'Alltagshilfe bei Pflegegrad: 131 € Entlastungsbetrag richtig nutzen',
    description:
      'Wer Anspruch hat, wofür der Entlastungsbetrag genutzt werden kann und wie die Abrechnung mit der Pflegekasse funktioniert.',
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-05-06',
  },
}

const serviceExamples = [
  {
    title: 'Haushalt und Reinigung',
    text: 'Wohnungsreinigung, Staubsaugen, Wischen, Küche und Bad reinigen, Wäsche waschen, Betten beziehen oder einfache Mahlzeiten vorbereiten.',
    icon: Home,
  },
  {
    title: 'Einkauf und Erledigungen',
    text: 'Wocheneinkauf, Apothekengänge, Post, Bank, Drogerie oder andere notwendige Besorgungen.',
    icon: ShoppingBag,
  },
  {
    title: 'Begleitung außer Haus',
    text: 'Begleitung zum Arzt, zur Behörde, zur Krankenkasse, zum Einkauf oder zu Freizeitangeboten.',
    icon: Users,
  },
]

const faqItems = [
  {
    question: 'Bekomme ich die 131 € automatisch ausgezahlt?',
    answer:
      'Nein. Der Entlastungsbetrag wird nicht wie Pflegegeld überwiesen. Er wird für anerkannte Leistungen genutzt und über Rechnung oder Direktabrechnung mit der Pflegekasse abgerechnet.',
  },
  {
    question: 'Gibt es den Entlastungsbetrag schon ab Pflegegrad 1?',
    answer:
      'Ja. Menschen mit Pflegegrad 1 bis 5 haben Anspruch, wenn die Versorgung überwiegend zu Hause stattfindet.',
  },
  {
    question: 'Kann ich damit eine Haushaltshilfe bezahlen?',
    answer:
      'Ja, wenn die Haushaltshilfe über einen nach Landesrecht anerkannten Anbieter erfolgt. Typisch sind Reinigung, Wäsche, Einkauf und andere Hilfen im Alltag.',
  },
  {
    question: 'Verfällt der Entlastungsbetrag?',
    answer:
      'Nicht sofort. Nicht genutzte Beträge können angespart und bis zum 30. Juni des Folgejahres genutzt werden.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alltagshilfe bei Pflegegrad: 131 € Entlastungsbetrag richtig nutzen',
  description:
    'Ab Pflegegrad 1 stehen monatlich 131 € für Alltagshilfe, Haushalt, Einkauf und Begleitung zur Verfügung.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: {
    '@type': 'Organization',
    name: 'Morgenlicht Alltagshilfe Berlin',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Morgenlicht Alltagshilfe Berlin',
  },
  mainEntityOfPage: '/blog/alltagshilfe-pflegegrad-entlastungsbetrag',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const articleTextClass =
  'space-y-6 text-lg leading-relaxed text-[#374151] [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:font-heading [&_h2]:text-[#134E4A] [&_h2]:leading-tight [&_a]:text-[#0D6E64] [&_a]:font-semibold [&_a]:underline-offset-4 [&_a:hover]:underline [&_ul]:space-y-3 [&_ul]:pl-6 [&_li]:list-disc'

export default function EntlastungsbetragBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-white">
        <header className="px-4 pt-16 pb-10 md:pt-24 md:pb-14 bg-[#F7F6F3]">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-[#134E4A] hover:underline focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded"
            >
              Blog
            </Link>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-sm font-semibold text-[#144E41] shadow-sm">
              <Euro className="w-4 h-4" aria-hidden="true" />
              Entlastungsbetrag ab Pflegegrad 1
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#134E4A] leading-tight">
              Alltagshilfe bei Pflegegrad: So nutzen Sie den Entlastungsbetrag richtig
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#455A64] leading-relaxed max-w-3xl">
              Viele pflegebedürftige Menschen und Angehörige wissen nicht, dass ihnen neben Pflegegeld oder Pflegesachleistungen noch eine weitere Unterstützung zusteht: der Entlastungsbetrag.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#455A64]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime="2026-05-06">6. Mai 2026</time>
              </span>
              <span>Lesedauer: ca. 7 Minuten</span>
            </div>
          </div>
        </header>

        <div className="px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_280px] gap-10">
            <div className="min-w-0">
              <div className="rounded-2xl overflow-hidden mb-10 bg-[#134E4A]">
                <img
                  src="/images/hero_daily_moments.png"
                  alt="Seniorin erhält Alltagshilfe im Haushalt über den Entlastungsbetrag bei Pflegegrad"
                  className="w-full h-64 md:h-96 object-cover opacity-95"
                />
              </div>

              <div className={articleTextClass}>
                <p>
                  Im Jahr 2026 beträgt der Entlastungsbetrag <strong>131 € pro Monat</strong>, also bis zu <strong>1.572 € im Jahr</strong>. Er steht bereits ab Pflegegrad 1 zur Verfügung und wird zusätzlich zu anderen Pflegeleistungen gewährt.
                </p>

                <p>
                  Gerade diese Leistung bleibt oft ungenutzt. Viele Familien wissen nicht, dass sie Anspruch haben. Andere denken, das Geld werde automatisch ausgezahlt. Das stimmt nicht: Der Entlastungsbetrag ist zweckgebunden und kann nur für bestimmte anerkannte Unterstützungsangebote verwendet werden.
                </p>

                <h2>Was ist der Entlastungsbetrag?</h2>
                <p>
                  Der Entlastungsbetrag ist eine Leistung der Pflegeversicherung für Menschen, die zu Hause gepflegt oder betreut werden. Er soll pflegebedürftige Menschen im Alltag unterstützen und pflegende Angehörige entlasten.
                </p>
                <p>
                  Das Geld ist nicht als frei verfügbares Pflegegeld gedacht. Es wird also nicht einfach monatlich auf das Konto überwiesen. Stattdessen wird es für konkrete Leistungen eingesetzt, zum Beispiel für eine anerkannte Alltagshilfe, Haushaltshilfe oder Betreuung.
                </p>

                <h2>Wer hat Anspruch auf Alltagshilfe über den Entlastungsbetrag?</h2>
                <p>
                  Anspruch haben Menschen mit Pflegegrad 1 bis 5, wenn sie zu Hause gepflegt oder betreut werden. Dabei spielt es keine Rolle, ob die Pflege durch Angehörige, Freunde oder einen Pflegedienst organisiert wird.
                </p>
                <p>
                  Wichtig ist: Die Leistung muss von einem Anbieter erbracht werden, der nach Landesrecht anerkannt ist. In Berlin bedeutet das, dass der Anbieter entsprechend zugelassen beziehungsweise zertifiziert sein muss.
                </p>
                <p>
                  <Link href="/">Morgenlicht Alltagshilfe Berlin</Link> ist als Angebot nach § 45a SGB XI anerkannt und unterstützt in Bereichen wie <Link href="/leistungen">Haushalt, Einkauf, Begleitung, Alltag und Soziales</Link>.
                </p>

                <h2>Wofür kann der Entlastungsbetrag genutzt werden?</h2>
                <p>
                  Der Entlastungsbetrag kann für praktische Unterstützung im Alltag eingesetzt werden. Dazu gehören vor allem Leistungen, die den Alltag leichter, sicherer und übersichtlicher machen.
                </p>
              </div>

              <section className="my-10 grid md:grid-cols-3 gap-4" aria-label="Beispiele für Alltagshilfe">
                {serviceExamples.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                      <Icon className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                      <h3 className="font-heading text-lg font-bold text-[#134E4A] mb-2">{item.title}</h3>
                      <p className="text-base text-[#455A64] leading-relaxed">{item.text}</p>
                    </div>
                  )
                })}
              </section>

              <div className={articleTextClass}>
                <h2>Alltagsorganisation und soziale Teilhabe</h2>
                <p>
                  Unterstützung beim Sortieren von Post, beim Überblick über Termine, beim Ausfüllen einfacher Formulare oder bei wichtigen Telefonaten kann ebenfalls helfen, den Alltag stabiler zu gestalten.
                </p>
                <p>
                  Auch Gespräche, Spaziergänge, Vorlesen, gemeinsames Zeitungslesen, Begleitung zu Seniorentreffs, Nachbarschaftscafés oder kulturellen Angeboten können unter Alltagshilfe fallen. Gerade bei Einsamkeit im Alter ist diese Unterstützung oft genauso wichtig wie Hilfe im Haushalt.
                </p>

                <h2>Was kann nicht über den Entlastungsbetrag bezahlt werden?</h2>
                <p>
                  Der Entlastungsbetrag darf nicht einfach als zusätzliches Pflegegeld verwendet werden. Auch medizinische Behandlungspflege gehört nicht zur normalen Alltagshilfe.
                </p>
                <ul>
                  <li>medizinische Behandlungspflege, etwa Spritzen, Verbandswechsel oder Medikamentengabe durch Fachpflege</li>
                  <li>größere Renovierungen, Reparaturen oder Sonderreinigungen</li>
                  <li>Leistungen ohne anerkannte Zulassung</li>
                  <li>frei ausgezahlte Geldleistungen ohne Rechnung</li>
                </ul>
                <p>
                  Bei Pflegegrad 2 bis 5 ist außerdem wichtig: Körperbezogene Pflege, also zum Beispiel Waschen, Duschen oder Anziehen, wird grundsätzlich über Pflegesachleistungen und nicht über den Entlastungsbetrag finanziert. Eine Ausnahme besteht bei Pflegegrad 1.
                </p>

                <h2>Wie funktioniert die Abrechnung mit der Pflegekasse?</h2>
                <p>
                  Häufig läuft der Entlastungsbetrag nach dem Kostenerstattungsprinzip: Die Leistung wird erbracht, es gibt eine Rechnung, und diese Rechnung wird bei der Pflegekasse eingereicht.
                </p>
                <p>
                  Viele Familien möchten aber keine Rechnungen sammeln und kein Geld vorstrecken. Deshalb bieten manche anerkannte Anbieter eine <Link href="/kosten">direkte Abrechnung mit der Pflegekasse</Link> an. Dafür wird in der Regel eine Abtretungserklärung unterschrieben.
                </p>

                <h2>Wird das Pflegegeld gekürzt?</h2>
                <p>
                  Nein. Der Entlastungsbetrag kommt zusätzlich zum Pflegegeld. Wer Pflegegeld erhält, verliert dieses Geld nicht automatisch, nur weil Alltagshilfe genutzt wird. Pflegegeld und Entlastungsbetrag haben unterschiedliche Zwecke.
                </p>

                <h2>Kann man ungenutzte Beträge ansparen?</h2>
                <p>
                  Ja. Wenn der monatliche Entlastungsbetrag nicht vollständig genutzt wird, wird der Rest in die nächsten Monate übertragen. Nicht verbrauchte Beträge aus einem Kalenderjahr können bis zum 30. Juni des Folgejahres genutzt werden. Danach verfallen sie.
                </p>

                <h2>Was passiert, wenn 131 € im Monat nicht reichen?</h2>
                <p>
                  Für manche Haushalte reicht der Entlastungsbetrag nicht aus, vor allem wenn regelmäßig Haushaltshilfe, Einkaufshilfe oder Begleitung gebraucht wird. Menschen mit Pflegegrad 2 bis 5 können unter bestimmten Voraussetzungen zusätzlich bis zu 40 Prozent der Pflegesachleistungen für Angebote zur Unterstützung im Alltag umwandeln.
                </p>

                <h2>Warum Alltagshilfe oft zu spät genutzt wird</h2>
                <p>
                  Viele Familien organisieren Unterstützung erst dann, wenn die Belastung schon sehr hoch ist. Dabei ist Alltagshilfe gerade früh sinnvoll. Wenn regelmäßig jemand beim Haushalt, Einkauf oder bei Terminen unterstützt, kann das Überforderung verhindern.
                </p>
                <p>
                  Wer noch keinen Pflegegrad hat, sollte den <Link href="/blog/pflegegrad-beantragen-schritt-fuer-schritt">Pflegegrad beantragen</Link> und den Hilfebedarf gut vorbereiten.
                </p>
                <ul>
                  <li>Angehörige arbeiten und können nicht jede Woche beim Haushalt helfen.</li>
                  <li>Arzttermine, Briefe und Anträge werden unübersichtlich.</li>
                  <li>Einkäufe werden körperlich zu anstrengend.</li>
                  <li>Die pflegebedürftige Person geht kaum noch raus.</li>
                  <li>Nach einem Krankenhausaufenthalt fehlt vorübergehend Unterstützung.</li>
                </ul>

                <h2>Alltagshilfe in Berlin: Was Morgenlicht übernimmt</h2>
                <p>
                  Morgenlicht unterstützt pflegebedürftige Menschen und Angehörige in Berlin bei Haushalt, Einkauf, Apothekengängen, Begleitung zu Arzt, Behörde, Bank oder Freizeitangeboten, Hilfe bei Post und Terminen sowie bei Spaziergängen, Gesprächen und sozialer Teilhabe.
                </p>
              </div>

              <section className="my-12 rounded-2xl bg-[#F7F6F3] p-6 md:p-8" aria-labelledby="faq-heading">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-7 h-7 text-[#134E4A]" aria-hidden="true" />
                  <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold font-heading text-[#134E4A]">
                    Häufige Fragen zum Entlastungsbetrag
                  </h2>
                </div>
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div key={item.question} className="bg-white rounded-xl border border-[#144E41]/10 p-5">
                      <h3 className="font-heading text-lg font-bold text-[#134E4A] mb-2">{item.question}</h3>
                      <p className="text-[#455A64] leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className={articleTextClass}>
                <h2>Fazit</h2>
                <p>
                  Der Entlastungsbetrag ist eine wichtige, aber oft übersehene Leistung der Pflegeversicherung. Ab Pflegegrad 1 stehen monatlich 131 € für Unterstützung im Alltag zur Verfügung. Damit können Haushaltshilfe, Einkauf, Begleitung, Alltagsorganisation und soziale Teilhabe finanziert werden, sofern der Anbieter anerkannt ist.
                </p>
                <p>
                  Für viele Familien bedeutet das: weniger Belastung, mehr Sicherheit und mehr Lebensqualität im Alltag. Wer bereits einen Pflegegrad hat, sollte den Entlastungsbetrag nicht ungenutzt lassen.
                </p>
              </div>

              <section className="mt-12 rounded-2xl bg-[#134E4A] text-white p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">
                  Entlastungsbetrag in Berlin nutzen
                </h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Wir prüfen mit Ihnen, welche Unterstützung passt und wie die Abrechnung mit der Pflegekasse funktioniert.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#134E4A] px-6 py-3 rounded-xl font-bold hover:bg-[#FFFBEB] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F]"
                >
                  Kostenfrei beraten lassen
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit space-y-5">
              <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Info className="w-5 h-5 text-[#134E4A]" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A]">Kurz erklärt</h2>
                </div>
                <ul className="space-y-3 text-sm text-[#455A64]">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    131 € monatlich ab Pflegegrad 1
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    Zusätzlich zu Pflegegeld und anderen Leistungen
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    Für anerkannte Unterstützung im Alltag
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#144E41]/10 bg-white p-5">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-[#134E4A]" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A]">Quellen</h2>
                </div>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a className="text-[#0D6E64] font-semibold hover:underline" href="https://gesund.bund.de/entlastungsbetrag">
                      gesund.bund.de: Entlastungsbetrag
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0D6E64] font-semibold hover:underline" href="https://www.verbraucherzentrale-berlin.de/wissen/gesundheit-pflege/so-nutzen-pflegebeduerftige-den-entlastungsbetrag-richtig-113767">
                      Verbraucherzentrale Berlin
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0D6E64] font-semibold hover:underline" href="https://www.berlin.de/sen/pflege/pflege-und-rehabilitation/pflege-zu-hause/angebote-zur-unterstuetzung-im-alltag/">
                      Berlin.de: Angebote zur Unterstützung im Alltag
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
