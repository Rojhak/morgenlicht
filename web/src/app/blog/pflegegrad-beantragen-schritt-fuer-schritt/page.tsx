import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardList,
  FileCheck,
  HelpCircle,
  Home,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { serializeJsonLd } from '@/lib/security'

export const metadata: Metadata = {
  title: 'Pflegegrad beantragen: Schritt für Schritt zum Erfolg',
  description:
    'Pflegegrad beantragen einfach erklärt: Antrag bei der Pflegekasse, MD-Begutachtung, Unterlagen und nächste Schritte für Angehörige in Berlin.',
  keywords: [
    'Pflegegrad beantragen',
    'Pflegegrad Antrag',
    'Pflegekasse Antrag Pflegegrad',
    'MD Begutachtung Pflegegrad',
    'Pflegegrad Berlin',
    'Pflegegrad Hilfe Angehörige',
  ],
  alternates: {
    canonical: '/blog/pflegegrad-beantragen-schritt-fuer-schritt',
  },
  openGraph: {
    title: 'Pflegegrad beantragen: Schritt für Schritt zum Erfolg',
    description:
      'So bereiten Pflegebedürftige und Angehörige den Pflegegrad-Antrag praktisch vor.',
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-01-05',
  },
}

const steps = [
  {
    title: 'Antrag stellen',
    text: 'Der Antrag wird bei der Pflegekasse gestellt. Ein kurzer Satz reicht oft: Ich beantrage Leistungen der Pflegeversicherung.',
    icon: FileCheck,
  },
  {
    title: 'Alltag vorbereiten',
    text: 'Notieren Sie, wobei Hilfe gebraucht wird: Haushalt, Körperpflege, Medikamente, Termine, Mobilität, Orientierung und Tagesstruktur.',
    icon: ClipboardList,
  },
  {
    title: 'Begutachtung ernst nehmen',
    text: 'Beim Termin zählt der normale Alltag, nicht ein besonders guter Tag. Angehörige sollten konkrete Beispiele nennen.',
    icon: ShieldCheck,
  },
]

const faqItems = [
  {
    question: 'Wo beantrage ich einen Pflegegrad?',
    answer:
      'Der Antrag geht an die Pflegekasse. Sie ist bei der Krankenkasse angesiedelt. Die Antragstellung kann schriftlich, telefonisch oder über Formulare der Kasse erfolgen.',
  },
  {
    question: 'Muss ich den Antrag ausführlich begründen?',
    answer:
      'Nein. Für den Start reicht ein klarer Antrag. Wichtig ist danach die gute Vorbereitung auf die Begutachtung.',
  },
  {
    question: 'Was prüft der Medizinische Dienst?',
    answer:
      'Geprüft wird, wie selbstständig die Person im Alltag ist und in welchen Bereichen regelmäßig Unterstützung nötig ist.',
  },
  {
    question: 'Was mache ich, wenn der Pflegegrad abgelehnt wird?',
    answer:
      'Dann kann innerhalb der Frist Widerspruch eingelegt werden. Der Bescheid sollte genau geprüft werden.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pflegegrad beantragen: Schritt für Schritt zum Erfolg',
  description:
    'Pflegegrad beantragen einfach erklärt: Antrag, Vorbereitung und Begutachtung.',
  datePublished: '2026-01-05',
  dateModified: '2026-05-06',
  author: {
    '@type': 'Organization',
    name: 'Morgenlicht Alltagshilfe Berlin',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Morgenlicht Alltagshilfe Berlin',
  },
  mainEntityOfPage: '/blog/pflegegrad-beantragen-schritt-fuer-schritt',
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
  'space-y-5 text-base md:text-lg leading-relaxed text-[#374151] [&_h2]:pt-5 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:font-heading [&_h2]:text-[#134E4A] [&_h2]:leading-tight [&_a]:text-[#0D6E64] [&_a]:font-semibold [&_a]:underline-offset-4 [&_a:hover]:underline [&_ul]:space-y-3 [&_ul]:pl-6 [&_li]:list-disc'

export default function PflegegradBeantragenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <article className="bg-white">
        <header className="px-4 pt-10 pb-10 md:pt-14 md:pb-12 bg-[#F7F6F3]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center min-h-12 text-sm font-semibold text-[#134E4A] hover:underline focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded"
              >
                Blog
              </Link>
              <div className="inline-flex min-h-10 items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-sm font-semibold text-[#144E41] shadow-sm">
                <Home className="w-4 h-4" aria-hidden="true" />
                Pflegegrad & Alltagshilfe
              </div>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-[44px] font-bold font-heading text-[#134E4A] leading-tight max-w-3xl">
              Pflegegrad beantragen: Schritt für Schritt zum Erfolg
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#455A64] leading-relaxed max-w-3xl">
              Ein Pflegegrad öffnet den Zugang zu Leistungen der Pflegeversicherung. Dazu gehören Pflegegeld, Pflegesachleistungen und der Entlastungsbetrag für Unterstützung im Alltag.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 max-w-3xl">
              <div className="bg-white rounded-xl border border-[#144E41]/10 p-4">
                <p className="text-sm font-bold text-[#134E4A] mb-1">1. Antrag</p>
                <p className="text-sm text-[#455A64] leading-relaxed">Kurz bei der Pflegekasse stellen.</p>
              </div>
              <div className="bg-white rounded-xl border border-[#144E41]/10 p-4">
                <p className="text-sm font-bold text-[#134E4A] mb-1">2. Alltag</p>
                <p className="text-sm text-[#455A64] leading-relaxed">Hilfebedarf konkret notieren.</p>
              </div>
              <div className="bg-white rounded-xl border border-[#144E41]/10 p-4">
                <p className="text-sm font-bold text-[#134E4A] mb-1">3. Bescheid</p>
                <p className="text-sm text-[#455A64] leading-relaxed">Prüfen und Leistungen nutzen.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#455A64]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime="2026-01-05">5. Januar 2026</time>
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
                  alt="Angehörige bereiten mit einer Seniorin den Antrag auf Pflegegrad vor"
                  className="w-full h-56 md:h-80 object-cover opacity-95"
                />
              </div>

              <div className={articleTextClass}>
                <p>
                  Viele Familien warten zu lange, bevor sie einen Pflegegrad beantragen. Dabei ist der Antrag oft der wichtigste erste Schritt, damit Hilfe im Alltag finanziert werden kann.
                </p>
                <p>
                  Wer im Haushalt, bei Terminen, beim Einkaufen, bei der Körperpflege, bei Orientierung oder Tagesstruktur regelmäßig Unterstützung braucht, sollte den Anspruch prüfen lassen.
                </p>

                <h2>1. Antrag bei der Pflegekasse stellen</h2>
                <p>
                  Der Antrag wird bei der Pflegekasse gestellt. Die Pflegekasse gehört zur Krankenkasse. Für den Start reicht ein kurzer Satz: „Ich beantrage Leistungen der Pflegeversicherung.“
                </p>
                <p>
                  Wichtig ist das Datum des Antrags. Leistungen können in der Regel frühestens ab dem Monat der Antragstellung berücksichtigt werden. Deshalb sollte der Antrag nicht unnötig aufgeschoben werden.
                </p>
              </div>

              <section className="my-10 grid md:grid-cols-3 gap-4" aria-label="Drei Schritte zum Pflegegrad">
                {steps.map((item) => {
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
                <h2>2. Hilfebedarf ehrlich sammeln</h2>
                <p>
                  Für die Begutachtung zählt nicht, was an einem besonders guten Tag noch klappt. Entscheidend ist, welche Unterstützung im normalen Alltag regelmäßig nötig ist.
                </p>
                <ul>
                  <li>Fällt das Aufstehen, Waschen, Duschen oder Anziehen schwer?</li>
                  <li>Werden Medikamente, Termine oder Mahlzeiten vergessen?</li>
                  <li>Ist der Einkauf körperlich zu anstrengend?</li>
                  <li>Bleiben Haushalt, Wäsche oder Post liegen?</li>
                  <li>Gibt es Sturzangst, Unsicherheit außer Haus oder Einsamkeit?</li>
                </ul>

                <h2>3. Begutachtung vorbereiten</h2>
                <p>
                  Nach dem Antrag meldet sich der Medizinische Dienst oder bei privat Versicherten Medicproof. Beim Termin sollte eine Person dabei sein, die den Alltag gut kennt.
                </p>
                <p>
                  Hilfreich sind Arztberichte, Medikamentenplan, Krankenhausberichte, vorhandene Vollmachten und eine kurze Liste mit konkreten Alltagssituationen. Je genauer der Hilfebedarf beschrieben wird, desto besser kann die Situation eingeschätzt werden.
                </p>

                <h2>4. Bescheid prüfen</h2>
                <p>
                  Nach der Begutachtung kommt der Bescheid der Pflegekasse. Dort steht, ob ein Pflegegrad anerkannt wurde. Wenn der Bescheid nicht zur tatsächlichen Situation passt, sollte er innerhalb der Frist geprüft werden.
                </p>

                <h2>5. Leistungen sinnvoll nutzen</h2>
                <p>
                  Mit einem anerkannten Pflegegrad können verschiedene Leistungen möglich sein. Für Morgenlicht besonders wichtig ist der <Link href="/blog/alltagshilfe-pflegegrad-entlastungsbetrag">Entlastungsbetrag</Link>. Er kann ab Pflegegrad 1 für anerkannte Unterstützung im Alltag genutzt werden.
                </p>
                <p>
                  Dazu gehören zum Beispiel <Link href="/leistungen">Haushalt, Einkauf, Begleitung, Alltag und soziale Teilhabe</Link>. Auf der Seite <Link href="/kosten">Kosten & Pflegekasse</Link> erklären wir, wie die Abrechnung funktioniert.
                </p>
              </div>

              <section className="my-12 rounded-2xl bg-[#F7F6F3] p-6 md:p-8" aria-labelledby="pflegegrad-faq-heading">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-7 h-7 text-[#134E4A]" aria-hidden="true" />
                  <h2 id="pflegegrad-faq-heading" className="text-2xl md:text-3xl font-bold font-heading text-[#134E4A]">
                    Häufige Fragen zum Pflegegrad-Antrag
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
                  Ein Pflegegrad sollte beantragt werden, sobald regelmäßig Hilfe im Alltag nötig ist. Der Antrag selbst ist meist unkompliziert. Entscheidend ist die gute Vorbereitung auf die Begutachtung.
                </p>
                <p>
                  Wer bereits einen Pflegegrad erhalten hat, sollte danach prüfen, welche Unterstützung sofort genutzt werden kann. Besonders der Entlastungsbetrag bleibt in vielen Familien ungenutzt.
                </p>
              </div>

              <section className="mt-12 rounded-2xl bg-[#134E4A] text-white p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">
                  Hilfe im Alltag nach dem Pflegegrad
                </h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Morgenlicht unterstützt in Berlin bei Haushalt, Einkauf, Begleitung und Alltagsorganisation.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#134E4A] px-6 py-3 rounded-xl font-bold hover:bg-[#FFFBEB] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F]"
                >
                  Beratung anfragen
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit space-y-5">
              <div className="rounded-xl border border-[#144E41]/10 bg-[#F7F6F3] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#134E4A]" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A]">Kurz erklärt</h2>
                </div>
                <ul className="space-y-3 text-sm text-[#455A64]">
                  <li>Pflegegrad bei der Pflegekasse beantragen</li>
                  <li>Alltagssituationen konkret notieren</li>
                  <li>Bescheid prüfen und Leistungen nutzen</li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#144E41]/10 bg-white p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-[#134E4A]" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-bold text-[#134E4A]">Nächster Schritt</h2>
                </div>
                <p className="text-sm text-[#455A64] leading-relaxed mb-4">
                  Wenn ein Pflegegrad vorliegt, kann der Entlastungsbetrag für Alltagshilfe genutzt werden.
                </p>
                <Link
                  href="/blog/alltagshilfe-pflegegrad-entlastungsbetrag"
                  className="text-sm font-semibold text-[#0D6E64] hover:underline"
                >
                  Entlastungsbetrag erklären lassen
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
