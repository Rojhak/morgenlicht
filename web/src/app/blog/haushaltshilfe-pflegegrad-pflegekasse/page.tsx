import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle, HelpCircle, Home, ReceiptText, ShieldCheck } from 'lucide-react'
import { serializeJsonLd } from '@/lib/security'

export const metadata: Metadata = {
  title: 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?',
  description:
    'Haushaltshilfe bei Pflegegrad einfach erklärt: Entlastungsbetrag, Pflegekasse, anerkannte Anbieter und Alltagshilfe in Berlin.',
  keywords: [
    'Haushaltshilfe Pflegegrad',
    'Pflegekasse Haushaltshilfe',
    'Entlastungsbetrag Haushaltshilfe',
    'Alltagshilfe Berlin',
    'Haushaltshilfe Senioren Berlin',
  ],
  alternates: {
    canonical: '/blog/haushaltshilfe-pflegegrad-pflegekasse',
  },
  openGraph: {
    title: 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?',
    description:
      'Welche Haushaltshilfe über Pflegeleistungen möglich ist und wie die Abrechnung funktioniert.',
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-05-08',
  },
}

const faqItems = [
  {
    question: 'Zahlt die Pflegekasse eine Haushaltshilfe?',
    answer:
      'Ja, häufig kann Haushaltshilfe über den Entlastungsbetrag genutzt werden. Wichtig ist, dass die Leistung über einen anerkannten Anbieter erfolgt.',
  },
  {
    question: 'Kann ich jede Haushaltshilfe nehmen?',
    answer:
      'Für die Abrechnung mit der Pflegekasse muss der Anbieter nach Landesrecht anerkannt sein. Private Hilfe ohne Anerkennung wird meist nicht erstattet.',
  },
  {
    question: 'Wird mein Pflegegeld dadurch gekürzt?',
    answer:
      'Nein. Der Entlastungsbetrag ist eine zusätzliche Leistung und wird nicht automatisch vom Pflegegeld abgezogen.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?',
  description:
    'Haushaltshilfe bei Pflegegrad einfach erklärt: Entlastungsbetrag, Pflegekasse und anerkannte Anbieter.',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'Morgenlicht Alltagshilfe Berlin' },
  publisher: { '@type': 'Organization', name: 'Morgenlicht Alltagshilfe Berlin' },
  mainEntityOfPage: '/blog/haushaltshilfe-pflegegrad-pflegekasse',
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

export default function HaushaltshilfePflegegradPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />

      <article className="bg-white">
        <header className="px-4 pt-10 pb-10 md:pt-14 md:pb-12 bg-[#F7F6F3]">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex min-h-12 items-center text-sm font-semibold text-[#134E4A] hover:underline focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded">
              Blog
            </Link>
            <div className="mt-4 inline-flex min-h-10 items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-sm font-semibold text-[#144E41] shadow-sm">
              <Home className="w-4 h-4" aria-hidden="true" />
              Haushaltshilfe & Pflegekasse
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-[44px] font-bold font-heading text-[#134E4A] leading-tight max-w-3xl">
              Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#455A64] leading-relaxed max-w-3xl">
              Wenn Haushalt, Einkauf oder Wäsche zu anstrengend werden, kann der Entlastungsbetrag eine wichtige Hilfe sein.
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
                  src="/images/hero_daily_moments.png"
                  alt="Haushaltshilfe für Senioren in Berlin über Pflegekasse"
                  className="w-full h-56 md:h-80 object-cover opacity-95"
                />
              </div>

              <div className={articleTextClass}>
                <p>
                  Viele Menschen mit Pflegegrad brauchen keine umfangreiche Pflege, aber praktische Hilfe im Haushalt. Genau dafür kann Alltagshilfe sinnvoll sein: Reinigung, Wäsche, Einkauf und kleine Erledigungen geben Sicherheit und entlasten Angehörige.
                </p>

                <h2>Welche Leistung kann dafür genutzt werden?</h2>
                <p>
                  Ab Pflegegrad 1 steht der Entlastungsbetrag zur Verfügung. Er kann für anerkannte Unterstützung im Alltag eingesetzt werden. Dazu gehört häufig auch Haushaltshilfe, wenn der Anbieter nach Landesrecht anerkannt ist.
                </p>
                <p>
                  Der Betrag wird nicht frei ausgezahlt. Er wird für konkrete Leistungen genutzt und mit Rechnung oder <Link href="/kosten">direkter Abrechnung mit der Pflegekasse</Link> abgerechnet.
                </p>

                <h2>Was zählt als Haushaltshilfe?</h2>
                <ul>
                  <li>Wohnung reinigen, staubsaugen und wischen</li>
                  <li>Küche und Bad sauber halten</li>
                  <li>Wäsche waschen, aufhängen und zusammenlegen</li>
                  <li>Bettwäsche wechseln</li>
                  <li>einfache Mahlzeiten vorbereiten</li>
                  <li>Einkäufe und Apothekengänge erledigen</li>
                </ul>

                <h2>Warum ist ein anerkannter Anbieter wichtig?</h2>
                <p>
                  Die Pflegekasse erstattet Leistungen nur, wenn die Voraussetzungen erfüllt sind. In Berlin muss der Anbieter entsprechend anerkannt beziehungsweise zertifiziert sein. <Link href="/">Morgenlicht Alltagshilfe Berlin</Link> ist als Angebot nach § 45a SGB XI anerkannt.
                </p>

                <h2>Für wen ist Haushaltshilfe besonders sinnvoll?</h2>
                <p>
                  Haushaltshilfe ist besonders hilfreich, wenn Angehörige berufstätig sind, die Wohnung nicht mehr regelmäßig gepflegt werden kann oder Einkäufe körperlich zu anstrengend werden. Früh genutzt verhindert sie oft, dass die Belastung zu Hause zu groß wird.
                </p>
              </div>

              <section className="my-10 grid md:grid-cols-3 gap-4" aria-label="Vorteile der Haushaltshilfe">
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <ShieldCheck className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">Anerkannt</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Abrechnung nur mit passenden Voraussetzungen und zugelassenem Angebot.</p>
                </div>
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <ReceiptText className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">Planbar</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Regelmäßige Hilfe sorgt für einen stabilen Alltag.</p>
                </div>
                <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                  <CheckCircle className="w-8 h-8 text-[#134E4A] mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-2">Zusätzlich</h2>
                  <p className="text-base text-[#455A64] leading-relaxed">Der Entlastungsbetrag kommt zusätzlich zum Pflegegeld.</p>
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
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">Haushaltshilfe in Berlin organisieren</h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Wir erklären Ihnen, welche Unterstützung passt und wie die Abrechnung über die Pflegekasse laufen kann.
                </p>
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white text-[#134E4A] px-6 py-3 rounded-xl font-bold hover:bg-[#FFFBEB] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F]">
                  Beratung anfragen
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
              <h2 className="font-heading text-lg font-bold text-[#134E4A] mb-3">Kurz erklärt</h2>
              <ul className="space-y-3 text-sm text-[#455A64]">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Hilfe im Haushalt ist über den Entlastungsbetrag möglich.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Der Anbieter muss anerkannt sein.</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#134E4A] flex-shrink-0 mt-0.5" aria-hidden="true" /> Das Pflegegeld wird dadurch nicht gekürzt.</li>
              </ul>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
