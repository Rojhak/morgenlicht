import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle, ClipboardList, Euro, HelpCircle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?',
  description:
    'Pflegegrad 1 Leistungen einfach erklärt: Entlastungsbetrag, Beratung, Alltagshilfe, Haushaltshilfe und Unterstützung zu Hause.',
  keywords: [
    'Pflegegrad 1',
    'Pflegegrad 1 Leistungen',
    'Entlastungsbetrag Pflegegrad 1',
    'Alltagshilfe Pflegegrad 1',
    'Haushaltshilfe Pflegegrad 1',
  ],
  alternates: {
    canonical: '/blog/pflegegrad-1-hilfe-leistungen',
  },
  openGraph: {
    title: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?',
    description:
      'Welche Unterstützung bei Pflegegrad 1 möglich ist und wie Alltagshilfe genutzt werden kann.',
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-05-08',
  },
}

const faqItems = [
  {
    question: 'Gibt es bei Pflegegrad 1 schon Geld für Alltagshilfe?',
    answer:
      'Ja. Der Entlastungsbetrag kann schon ab Pflegegrad 1 für anerkannte Unterstützung im Alltag genutzt werden.',
  },
  {
    question: 'Kann Pflegegrad 1 für Haushaltshilfe genutzt werden?',
    answer:
      'Ja, wenn die Haushaltshilfe über ein anerkanntes Angebot zur Unterstützung im Alltag erbracht wird.',
  },
  {
    question: 'Muss ich dafür einen neuen Antrag stellen?',
    answer:
      'Der Pflegegrad muss anerkannt sein. Für die konkrete Abrechnung helfen Anbieter oder die Pflegekasse bei den nötigen Unterlagen.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?',
  description:
    'Pflegegrad 1 Leistungen einfach erklärt: Entlastungsbetrag, Beratung und Alltagshilfe.',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'Morgenlicht Alltagshilfe Berlin' },
  publisher: { '@type': 'Organization', name: 'Morgenlicht Alltagshilfe Berlin' },
  mainEntityOfPage: '/blog/pflegegrad-1-hilfe-leistungen',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const articleTextClass =
  'space-y-5 text-base md:text-lg leading-relaxed text-[#374151] [&_h2]:pt-5 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:font-heading [&_h2]:text-[#134E4A] [&_h2]:leading-tight [&_a]:text-[#0D6E64] [&_a]:font-semibold [&_a]:underline-offset-4 [&_a:hover]:underline [&_ul]:space-y-3 [&_ul]:pl-6 [&_li]:list-disc'

export default function PflegegradEinsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        <header className="px-4 pt-10 pb-10 md:pt-14 md:pb-12 bg-[#F7F6F3]">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex min-h-12 items-center text-sm font-semibold text-[#134E4A] hover:underline focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded">
              Blog
            </Link>
            <div className="mt-4 inline-flex min-h-10 items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-sm font-semibold text-[#144E41] shadow-sm">
              <Euro className="w-4 h-4" aria-hidden="true" />
              Pflegegrad 1
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-[44px] font-bold font-heading text-[#134E4A] leading-tight max-w-3xl">
              Pflegegrad 1: Welche Hilfe steht Ihnen zu?
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#455A64] leading-relaxed max-w-3xl">
              Pflegegrad 1 bedeutet: Es gibt bereits Unterstützungsbedarf. Viele Leistungen werden aber erst genutzt, wenn Familien wissen, was möglich ist.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#455A64]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime="2026-05-08">8. Mai 2026</time>
              </span>
              <span>Lesedauer: ca. 5 Minuten</span>
            </div>
          </div>
        </header>

        <div className="px-4 py-10 md:py-14">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_280px] gap-10">
            <div className="min-w-0">
              <div className="rounded-2xl overflow-hidden mb-8 bg-[#134E4A] shadow-sm">
                <img
                  src="/images/hero_helping_hand.png"
                  alt="Seniorin erhält Unterstützung im Alltag bei Pflegegrad 1"
                  className="w-full h-56 md:h-80 object-cover opacity-95"
                />
              </div>

              <div className={articleTextClass}>
                <p>
                  Pflegegrad 1 wird häufig unterschätzt. Viele Betroffene schaffen noch vieles selbst, brauchen aber regelmäßig Unterstützung, damit der Alltag sicher und geordnet bleibt.
                </p>

                <h2>Was bedeutet Pflegegrad 1?</h2>
                <p>
                  Pflegegrad 1 beschreibt eine geringe Beeinträchtigung der Selbstständigkeit. Das kann bedeuten: Einkaufen fällt schwer, die Wohnung bleibt liegen, Briefe werden unübersichtlich oder Termine sind ohne Begleitung belastend.
                </p>

                <h2>Welche Hilfe ist besonders wichtig?</h2>
                <ul>
                  <li>Hilfe im Haushalt und bei der Wäsche</li>
                  <li>Einkaufshilfe und Apothekengänge</li>
                  <li>Begleitung zu Arzt, Behörde oder Krankenkasse</li>
                  <li>Unterstützung bei Post, Terminen und Alltagsorganisation</li>
                  <li>Spaziergänge, Gespräche und soziale Teilhabe</li>
                </ul>

                <h2>Entlastungsbetrag ab Pflegegrad 1</h2>
                <p>
                  Der Entlastungsbetrag steht bereits ab Pflegegrad 1 zur Verfügung. Er ist für anerkannte Unterstützung im Alltag gedacht und kann zum Beispiel für <Link href="/leistungen">Haushalt, Einkauf, Begleitung, Alltag und Soziales</Link> genutzt werden.
                </p>

                <h2>Warum früh anfangen?</h2>
                <p>
                  Früh genutzte Alltagshilfe verhindert oft, dass Angehörige dauerhaft überlastet werden. Kleine regelmäßige Unterstützung kann reichen, damit eine Person länger sicher zu Hause leben kann.
                </p>

                <h2>Was ist der nächste Schritt?</h2>
                <p>
                  Wenn Pflegegrad 1 schon anerkannt ist, sollte geprüft werden, ob der Entlastungsbetrag ungenutzt ist. Wenn noch kein Pflegegrad besteht, hilft unser Beitrag <Link href="/blog/pflegegrad-beantragen-schritt-fuer-schritt">Pflegegrad beantragen</Link> bei der Vorbereitung.
                </p>
              </div>

              <section className="my-10 grid md:grid-cols-3 gap-4" aria-label="Pflegegrad 1 Vorteile">
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <Euro className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">Budget</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Der Entlastungsbetrag kann für anerkannte Alltagshilfe genutzt werden.</p>
                </div>
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <Home className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">Zuhause</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Hilfe im Haushalt und bei Wegen stabilisiert den Alltag.</p>
                </div>
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <ClipboardList className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">Struktur</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Post, Termine und kleine Aufgaben werden wieder übersichtlicher.</p>
                </div>
              </section>

              <section className="my-10 rounded-2xl bg-[#F7F6F3] p-6 md:p-8" aria-labelledby="faq-heading">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-7 h-7 text-[#134E4A]" aria-hidden="true" />
                  <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold font-heading text-[#134E4A]">Häufige Fragen</h2>
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

              <section className="mt-12 rounded-2xl bg-[#134E4A] text-white p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">Pflegegrad 1 sinnvoll nutzen</h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Wir prüfen mit Ihnen, welche Alltagshilfe möglich ist und wie die Abrechnung funktioniert.
                </p>
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white text-[#134E4A] px-6 py-3 rounded-xl font-bold hover:bg-[#FFFBEB] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F]">
                  Kontakt aufnehmen
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
              <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-3">Kurz erklärt</h2>
              <ul className="space-y-3 text-sm text-[#455A64]">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Pflegegrad 1 reicht für den Entlastungsbetrag.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Besonders sinnvoll für Haushalt, Einkauf und Begleitung.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Früh nutzen, bevor Angehörige überlastet sind.</li>
              </ul>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
