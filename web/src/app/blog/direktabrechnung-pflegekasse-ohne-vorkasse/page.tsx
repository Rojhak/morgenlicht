import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle, FileText, HelpCircle, ReceiptText, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse',
  description:
    'Direktabrechnung mit der Pflegekasse einfach erklärt: Alltagshilfe nutzen, keine Vorkasse leisten und Papierkram reduzieren.',
  keywords: [
    'Direktabrechnung Pflegekasse',
    'Alltagshilfe ohne Vorkasse',
    'Pflegekasse Abrechnung',
    'Entlastungsbetrag direkt abrechnen',
    'Alltagshilfe Berlin Pflegekasse',
  ],
  alternates: {
    canonical: '/blog/direktabrechnung-pflegekasse-ohne-vorkasse',
  },
  openGraph: {
    title: 'Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse',
    description:
      'So funktioniert die direkte Abrechnung von Alltagshilfe mit der Pflegekasse.',
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-05-08',
  },
}

const faqItems = [
  {
    question: 'Muss ich bei Direktabrechnung Geld vorstrecken?',
    answer:
      'In der Regel nicht, wenn die Abtretungserklärung vorliegt und das Budget bei der Pflegekasse verfügbar ist.',
  },
  {
    question: 'Was ist eine Abtretungserklärung?',
    answer:
      'Damit erlauben Sie dem Anbieter, die anerkannten Leistungen direkt mit der Pflegekasse abzurechnen.',
  },
  {
    question: 'Brauche ich trotzdem einen Pflegegrad?',
    answer:
      'Ja. Für den Entlastungsbetrag muss ein Pflegegrad anerkannt sein.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse',
  description:
    'Direktabrechnung mit der Pflegekasse einfach erklärt: Alltagshilfe nutzen und Papierkram reduzieren.',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'Morgenlicht Alltagshilfe Berlin' },
  publisher: { '@type': 'Organization', name: 'Morgenlicht Alltagshilfe Berlin' },
  mainEntityOfPage: '/blog/direktabrechnung-pflegekasse-ohne-vorkasse',
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

export default function DirektabrechnungPage() {
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
              <ReceiptText className="w-4 h-4" aria-hidden="true" />
              Abrechnung mit der Pflegekasse
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-[44px] font-bold font-heading text-[#134E4A] leading-tight max-w-3xl">
              Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#455A64] leading-relaxed max-w-3xl">
              Viele Angehörige möchten keine Rechnungen sammeln und kein Geld vorstrecken. Direktabrechnung kann den Alltag deutlich einfacher machen.
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
                  src="/images/hero_support.png"
                  alt="Alltagshilfe rechnet Leistungen direkt mit der Pflegekasse ab"
                  className="w-full h-56 md:h-80 object-cover opacity-95"
                />
              </div>

              <div className={articleTextClass}>
                <p>
                  Beim Entlastungsbetrag denken viele Familien zuerst an Rechnungen, Formulare und Erstattung. Das muss nicht immer so kompliziert sein. Bei der Direktabrechnung rechnet der anerkannte Anbieter direkt mit der Pflegekasse ab.
                </p>

                <h2>Was bedeutet Direktabrechnung?</h2>
                <p>
                  Direktabrechnung heißt: Die Alltagshilfe wird erbracht, der Anbieter erstellt die Abrechnung und reicht sie bei der Pflegekasse ein. Die pflegebedürftige Person muss im Rahmen des verfügbaren Budgets normalerweise keine Vorkasse leisten.
                </p>

                <h2>Was braucht man dafür?</h2>
                <ul>
                  <li>einen anerkannten Pflegegrad</li>
                  <li>verfügbares Budget aus dem Entlastungsbetrag</li>
                  <li>einen anerkannten Anbieter für Unterstützung im Alltag</li>
                  <li>meist eine unterschriebene Abtretungserklärung</li>
                </ul>

                <h2>Warum ist das für Angehörige hilfreich?</h2>
                <p>
                  Angehörige haben oft schon genug zu organisieren: Termine, Medikamente, Haushalt, Anträge und Beruf. Direktabrechnung reduziert Papierkram und macht planbare Hilfe leichter.
                </p>

                <h2>Welche Leistungen können so laufen?</h2>
                <p>
                  Typische Leistungen sind Haushaltshilfe, Einkaufshilfe, Apothekengänge, Begleitung zu Terminen und Unterstützung bei Alltagsorganisation. Die genauen Leistungen hängen vom anerkannten Angebot ab.
                </p>
                <p>
                  Bei <Link href="/kosten">Morgenlicht Alltagshilfe Berlin</Link> erklären wir die Abrechnung vor Beginn transparent und prüfen, welche Unterstützung über die Pflegekasse möglich ist.
                </p>

                <h2>Was passiert, wenn das Budget nicht reicht?</h2>
                <p>
                  Wenn mehr Hilfe benötigt wird als über den Entlastungsbetrag abgedeckt ist, sollte gemeinsam geprüft werden, welche zusätzlichen Möglichkeiten bestehen. Wichtig ist eine klare Absprache vor Beginn der Leistung.
                </p>
              </div>

              <section className="my-10 grid md:grid-cols-3 gap-4" aria-label="Ablauf der Direktabrechnung">
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <FileText className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">1. Unterlagen</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Pflegegrad und Budget werden geklärt.</p>
                </div>
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <ShieldCheck className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">2. Zustimmung</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Die Abtretungserklärung erlaubt die direkte Abrechnung.</p>
                </div>
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <ReceiptText className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">3. Abrechnung</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Der Anbieter rechnet mit der Pflegekasse ab.</p>
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
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">Alltagshilfe ohne Vorkasse prüfen</h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Wir erklären Ihnen die nächsten Schritte und welche Unterlagen für die Pflegekasse gebraucht werden.
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
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Weniger Papierkram für Angehörige.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Keine Vorkasse im verfügbaren Budget.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Voraussetzung: Pflegegrad und anerkannter Anbieter.</li>
              </ul>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
