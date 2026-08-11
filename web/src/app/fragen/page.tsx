'use client'

import { useState, useId } from 'react'
import { ArrowRight, ChevronDown, Phone, HelpCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    id: 'allgemein',
    title: 'Allgemeine Fragen',
    questions: [
      {
        q: 'Was ist Morgenlicht Alltagshilfe?',
        a: 'Morgenlicht ist Ihre herzliche und zuverlässige Alltagshilfe in Berlin. Wir helfen Senioren und Pflegebedürftigen dabei, so lange und selbstbestimmt wie möglich im eigenen Zuhause zu leben. Ob verlässliche Haushaltshilfe, Begleitung zu Terminen oder einfach ein offenes Ohr im Alltag – wir entlasten Sie und Ihre Angehörigen. Wenn Pflegegrad, Budget und Unterlagen vorliegen, kann eine Direktabrechnung mit der Pflegekasse vereinbart werden.',
      },
      {
        q: 'Wie schnell kann ich einen Termin bekommen?',
        a: 'Wir bemühen uns, Ihnen schnell einen Termin zu bieten. In vielen Fällen können wir bereits innerhalb weniger Tage mit der Unterstützung beginnen. Rufen Sie uns einfach an – wir finden eine Lösung.',
      },
      {
        q: 'In welchen Gebieten bietet Morgenlicht Leistungen an?',
        a: 'Wir sind in Berlin tätig, mit einem besonderen Schwerpunkt auf Kreuzberg und Neukölln. Dort unterstützen wir Sie gerne direkt in Ihrem Kiez. Aber auch wenn Sie in einem angrenzenden Bezirk wohnen: Kontaktieren Sie uns einfach – wir besprechen gemeinsam, ob und wie wir Sie an Ihrem Wohnort betreuen können.',
      },
      {
        q: 'In welchen Sprachen bieten Sie die Beratung und Unterstützung an?',
        a: 'Wir bieten unsere Hilfe und die gesamte Beratung neben Deutsch auch auf Türkisch und Englisch an.',
      },
    ],
  },
  {
    id: 'kosten',
    title: 'Kosten & Pflegekasse',
    questions: [
      {
        q: 'Was kostet die Alltagshilfe?',
        a: 'Unser transparenter Stundensatz für die Alltagshilfe beträgt 35,50 €. Mit Pflegegrad 1 bis 5 können anerkannte Leistungen im Rahmen des verfügbaren Entlastungsbetrags ohne Eigenanteil möglich sein. Die Voraussetzungen und mögliche Kosten außerhalb des Budgets klären wir vor Beginn. Im Stundensatz sind Anfahrt und Administration enthalten. Auch Privatzahler ohne Pflegegrad können Leistungen zum selben Stundensatz vereinbaren.',
      },
      {
        q: 'Was ist der Entlastungsbetrag (131 €)?',
        a: 'Pflegebedürftige mit Pflegegrad 1 bis 5 haben Anspruch auf einen Entlastungsbetrag von bis zu 131 € monatlich. Dieser kann für anerkannte Leistungen wie Haushaltshilfe und Alltagsbegleitung eingesetzt werden. Wenn Budget und Unterlagen vorliegen, kann eine Direktabrechnung vereinbart werden. Im verfügbaren Budget kann die Hilfe ohne Eigenanteil genutzt werden. Ihr reguläres Pflegegeld wird durch den Entlastungsbetrag nicht gekürzt.',
      },
      {
        q: 'Was ist, wenn ich mehr Hilfe benötige, als die 131 € abdecken?',
        a: 'Beim Umwandlungsanspruch nach § 45a SGB XI können Pflegebedürftige mit Pflegegrad 2 bis 5 bis zu 40 % des nicht genutzten Anspruchs auf ambulante Pflegesachleistungen nach § 36 SGB XI für nach Landesrecht anerkannte Angebote zur Unterstützung im Alltag einsetzen. Die Pflegekasse rechnet zunächst die tatsächlich genutzten Pflegesachleistungen ab. Die Nutzung des Umwandlungsanspruchs kann sich auf die Höhe des anteiligen Pflegegeldes auswirken. Ob und in welcher Höhe ein Betrag verfügbar ist, muss individuell mit der Pflegekasse geklärt werden.',
      },
      {
        q: 'Gibt es Hilfe, wenn meine pflegenden Angehörigen krank oder im Urlaub sind?',
        a: 'Bei Pflegegrad 2 bis 5 kann Verhinderungspflege in Betracht kommen, wenn die private Pflegeperson wegen Urlaub, Krankheit oder aus einem anderen Grund an der Pflege gehindert ist. Sie ist kein frei verfügbares monatliches Zusatzbudget. Ob die Voraussetzungen erfüllt sind, welcher Betrag verfügbar ist und wie abgerechnet werden kann, ist individuell mit der Pflegekasse zu klären.',
      },
      {
        q: 'Kann ich die Kosten von der Steuer absetzen?',
        a: 'Eine steuerliche Berücksichtigung als haushaltsnahe Dienstleistung kann möglich sein. Ob und in welcher Höhe das für Sie gilt, klären Sie bitte mit Ihrer Steuerberatung oder dem Finanzamt.',
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
        q: 'Wie bekomme ich einen Pflegegrad?',
        a: 'Der Antrag wird bei der Pflegekasse gestellt – telefonisch oder schriftlich. Die Kasse beauftragt dann den Medizinischen Dienst (MD) mit einem Begutachtungstermin. Wir unterstützen Sie gerne beim gesamten Ablauf.',
      },
      {
        q: 'Können Sie mir beim Antrag helfen?',
        a: 'Wir stehen Ihnen bei allgemeinen Fragen zum Ablauf gerne zur Seite und geben Ihnen hilfreiche Tipps aus unserer Praxis, damit Sie wissen, welche Schritte auf Sie zukommen.',
      },
      {
        q: 'Wann lohnt sich ein Antrag?',
        a: 'Ein Antrag kann sinnvoll sein, wenn Sie dauerhaft Unterstützung im Alltag benötigen. Bei Pflegegrad 1 bis 5 besteht in häuslicher Pflege Anspruch auf den Entlastungsbetrag von bis zu 131 € monatlich. Welche weiteren Leistungen ab Pflegegrad 2 möglich sind, hängt von Ihrer persönlichen Pflegesituation und den jeweiligen Voraussetzungen ab.',
      },
      {
        q: 'Wie lange dauert es, bis ich den Bescheid bekomme?',
        a: 'Für die Bearbeitung gilt grundsätzlich eine Frist von 25 Arbeitstagen ab Eingang des Antrags bei der Pflegekasse. Die Frist betrifft die Entscheidung über den Antrag; der Begutachtungstermin wird individuell vereinbart. In bestimmten Fällen gelten kürzere Fristen.',
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
  const id = useId()
  const contentId = `faq-content-${id}`

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#144E41] rounded-lg"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="font-heading font-bold text-[#144E41] text-lg pr-8">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full bg-[#F0FDF4] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#144E41] text-white' : 'text-[#144E41]'}`}>
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </div>
      </button>

      <div
        id={contentId}
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
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-24 px-4 text-center bg-white">
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#144E41] mb-6 shadow-sm h-[34px]">
            <Sparkles className="w-4 h-4 text-[#144E41]" />
            <span>Hilfe & Ratgeber</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tighter">
            Fragen & Antworten
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Leistungen, Kosten und der Abrechnung mit der Pflegekasse.
          </p>
        </div>
      </section>

      {/* FAQ Content Section - Soft Hellbeige */}
      <section className="bg-[#F7F6F3] py-16 md:py-24 px-6 md:px-16">
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

      {/* Bottom CTA - White (Rhythm Alignment) */}
      <section className="py-24 px-4 bg-white">
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
