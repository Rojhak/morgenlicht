'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Phone, HelpCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    id: 'allgemein',
    title: 'Allgemeine Fragen',
    questions: [
      {
        q: 'Was ist Morgenlicht Alltagshilfe?',
        a: 'Morgenlicht Alltagshilfe ist ein anerkannter Anbieter nach § 45a SGB XI. Wir bieten Alltagsbegleitung und Entlastung für Senioren und ihre Angehörigen in Berlin – von Haushaltshilfe über Begleitung zu Arztterminen bis hin zu Gesellschaft.',
      },
      {
        q: 'Wie schnell kann ich einen Termin bekommen?',
        a: 'Wir bemühen uns, Ihnen schnell einen Termin zu bieten. In vielen Fällen können wir bereits innerhalb weniger Tage mit der Unterstützung beginnen. Rufen Sie uns einfach an – wir finden eine Lösung.',
      },
      {
        q: 'Bekomme ich immer dieselbe Betreuungsperson?',
        a: 'Wir bemühen uns sehr, Ihnen einen festen Ansprechpartner zuzuteilen. Kontinuität und Vertrauen sind uns wichtig. So entsteht mit der Zeit eine persönliche Beziehung.',
      },
      {
        q: 'In welchen Gebieten bietet Morgenlicht Leistungen an?',
        a: 'Wir sind in Berlin tätig, mit einem besonderen Schwerpunkt auf die Bezirke Kreuzberg, Neukölln und Mitte. Dort unterstützen wir Sie gerne direkt in Ihrem Kiez. Aber auch wenn Sie in einem angrenzenden Bezirk wohnen: Kontaktieren Sie uns einfach – wir besprechen gemeinsam, ob und wie wir Sie an Ihrem Wohnort betreuen können.',
      },
    ],
  },
  {
    id: 'kosten',
    title: 'Kosten & Pflegekasse',
    questions: [
      {
        q: 'Was kostet die Alltagsbegleitung bei Morgenlicht?',
        a: 'Unser Stundensatz beträgt 35,50 €. Im Preis sind bereits Anfahrt, Administration und Abrechnung enthalten. Es kommen keine weiteren Gebühren auf Sie zu.',
      },
      {
        q: 'Wie funktioniert die Abrechnung über die Pflegekasse?',
        a: 'Wir rechnen direkt mit Ihrer Pflegekasse ab. Sie müssen kein Geld vorstrecken und keine komplizierten Formulare ausfüllen. Wenn Sie einen Pflegegrad haben, übernimmt die Kasse die Kosten im Rahmen des Entlastungsbetrags (131 €/Monat).',
      },
      {
        q: 'Was ist der Entlastungsbetrag?',
        a: 'Jeder Mensch mit Pflegegrad (1-5) hat Anspruch auf monatlich 131 € Entlastungsbetrag. Dieses Geld können Sie für unsere Alltagsbegleitung nutzen – und das komplett kostenlos für Sie.',
      },
      {
        q: 'Kann ich die Kosten von der Steuer absetzen?',
        a: 'Ja! Als Privatzahler können Sie 20 % unserer Rechnung (maximal 600 € pro Jahr) von der Steuer absetzen. Das Finanzamt erstattet Ihnen somit einen Teil der Kosten zurück.',
      },
      {
        q: 'Was ist, wenn ich keinen Pflegegrad habe?',
        a: 'Auch ohne Pflegegrad können Sie unsere Leistungen in Anspruch nehmen – als Privatzahler zum Stundensatz von 35,50 €. Zusätzlich unterstützen wir Sie gerne beim Antrag auf einen Pflegegrad.',
      },
    ],
  },
  {
    id: 'antrag',
    title: 'Antrag & Pflegegrad',
    questions: [
      {
        q: 'Wie bekomme ich einen pflegegrad?',
        a: 'Der Antrag wird bei der Pflegekasse gestellt – telefonisch oder schriftlich. Die Kasse beauftragt dann den Medizinischen Dienst (MDK) mit einem Begutachtungstermin in Ihrer Wohnung. Wir unterstützen Sie gerne beim gesamten Prozess.',
      },
      {
        q: 'Können Sie mir beim Antrag helfen?',
        a: 'Ja, gerne! Durch meine Erfahrung in der Sozialberatung unterstütze ich Sie beim Antrag, bereite Sie auf den Besuch des Gutachters vor und helfe Ihnen, alle notwendigen Unterlagen zusammenzustellen.',
      },
      {
        q: 'Wann lohnt sich ein Antrag?',
        a: 'Ein Antrag lohnt sich immer bei dauerhaftem Hilfebedarf. Schon bei Pflegegrad 1 erhalten Sie 131 €/Monat Entlastungsbetrag. Höhere Pflegegrade bringen zusätzliches Budget für Verhinderungspflege und weitere Leistungen.',
      },
      {
        q: 'Wie lange dauert es, bis ich den Bescheid bekomme?',
        a: 'In der Regel erhalten Sie innerhalb von 4-6 Wochen nach dem Begutachtungstermin den schriftlichen Bescheid von der Pflegekasse.',
      },
    ],
  },
  {
    id: 'leistungen',
    title: 'Unsere Leistungen',
    questions: [
      {
        q: 'Welche Leistungen bieten Sie genau an?',
        a: 'Wir bieten fünf Hauptbereiche: 1) Haushalt & Wohlbefinden, 2) Einkauf & Erledigungen, 3) Begleitung & Mobilität, 4) Alltag & Organisation, 5) Soziale Teilhabe & Freizeit. Details finden Sie auf unserer Leistungen-Seite.',
      },
      {
        q: 'Wie oft kann ich die Hilfe in Anspruch nehmen?',
        a: 'So oft Sie möchten – im Rahmen Ihres Budgets. Die meisten Kunden nutzen unsere Leistungen 1-3 Mal pro Woche für einige Stunden.',
      },
      {
        q: 'Muss ich bei der Anwesenheit einer Betreuungsperson zu Hause sein?',
        a: 'Nein, Sie müssen nicht immer zu Hause sein. Für bestimmte Aufgaben wie Einkäufe oder Behördengänge kann die Betreuungsperson auch selbstständig tätig werden. Dies besprechen wir individuell mit Ihnen.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors"
      >
        <span className="font-heading font-bold text-[#144E41] text-lg pr-8">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full bg-[#F0FDF4] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#144E41] text-white' : 'text-[#144E41]'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 text-gray-700 leading-relaxed font-body border-t border-gray-50">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FragenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean White */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-sm font-semibold text-[#144E41] mb-6 border border-[#144E41]/10 shadow-sm h-[34px]">
            <Sparkles className="w-4 h-4 text-[#144E41]" />
            <span className="tracking-wider">Hilfe & Ratgeber</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#134E4A] mb-6 font-heading tracking-tighter">
            Fragen & Antworten
          </h1>
          <p className="text-[#134E4A]/80 text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed tracking-tight">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Leistungen, Kosten und der Abrechnung mit der Pflegekasse.
          </p>
        </div>
      </section>

      {/* FAQ Content Section - Soft Hellbeige */}
      <section className="bg-[#F7F6F3] py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-20">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#144E41] mb-10 font-heading">
                  {category.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {category.questions.map((faq, idx) => (
                    <FAQItem
                      key={`${category.id}-${idx}`}
                      question={faq.q}
                      answer={faq.a}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA - Global Standard Section */}
      <section className="py-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#134E4A] mb-6 font-heading tracking-tighter">
            Lernen Sie uns kennen
          </h2>
          <p className="text-xl font-body text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed tracking-tight">
            Wir beraten Sie kostenlos und unverbindlich – rufen Sie uns an oder senden Sie eine Anfrage.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 h-16 text-lg font-heading font-bold rounded-xl bg-[#134E4A] text-white hover:bg-[#0F3F3C] shadow-xl transition-all hover:-translate-y-0.5"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:03023593028"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 h-16 text-lg font-heading font-bold rounded-xl bg-white text-[#134E4A] border-2 border-[#134E4A]/20 hover:border-[#134E4A]/40 transition-all shadow-sm"
            >
              <Phone className="w-5 h-5 mr-3 text-[#144E41]" />
              030 235 930 28
            </a>
          </div>

          <p className="font-body text-[#6B7280] text-sm mt-8">
            Mo–Fr: 09:00 – 16:00 Uhr
          </p>
        </div>
      </section>
    </div>
  )
}
