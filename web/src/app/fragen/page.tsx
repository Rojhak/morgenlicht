'use client'

import { ArrowRight, HelpCircle, Clock, Users, FileCheck, Phone } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'
import { Accordion, AccordionItem } from '../components/ui'

const faqCategories = [
  {
    id: 'allgemein',
    title: 'Allgemeine Fragen',
    icon: HelpCircle,
    color: 'from-[#E0F2F1]/60 to-[#B2DFDB]/20',
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
        a: 'Wir sind in Berlin tätig und unterstützen Sie gerne in Ihrem Kiez. Kontaktieren Sie uns – wir besprechen mit Ihnen, ob und wie wir Sie in Ihrem Wohnort betreuen können.',
      },
    ],
  },
  {
    id: 'kosten',
    title: 'Kosten & Pflegekasse',
    icon: FileCheck,
    color: 'from-[#FFF8E1]/60 to-[#FFECB3]/20',
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
    icon: Users,
    color: 'from-[#E8F5E9]/50 to-[#C8E6C9]/20',
    questions: [
      {
        q: 'Wie bekomme ich einen Pflegegrad?',
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
    icon: Clock,
    color: 'from-[#FBE9E7]/50 to-[#FFAB91]/20',
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
        q: 'Können Sie auch am Wochenende kommen?',
        a: 'Nach Absprache und je nach Verfügbarkeit können wir auch am Wochenende oder an Feiertagen Unterstützung anbieten. Sprechen Sie uns einfach an.',
      },
      {
        q: 'Muss ich bei der Anwesenheit einer Betreuungsperson zu Hause sein?',
        a: 'Nein, Sie müssen nicht immer zu Hause sein. Für bestimmte Aufgaben wie Einkäufe oder Behördengänge kann die Betreuungsperson auch selbstständig tätig werden. Dies besprechen wir individuell mit Ihnen.',
      },
    ],
  },
]

export default function FragenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-[#FFD54F]/20 via-[#FFAB91]/10 to-transparent rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-[#26A69A]/15 via-[#4DB6AC]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#E0F2F1] rounded-full text-sm font-medium text-[#0D6E64] mb-6">
            Häufige Fragen
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-teal-900 mb-6 tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900">
              Fragen &
            </span>
            <span className="block mt-2 text-teal-800 italic">
              Antworten
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-700/80 max-w-2xl mx-auto leading-relaxed">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Leistungen, Kosten und mehr.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-[#0D6E64]}" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#37474F]">
                      {category.title}
                    </h2>
                  </div>

                  <GlassCard className="p-6 md:p-8">
                    <Accordion>
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          title={faq.q}
                          defaultOpen={index === 0}
                        >
                          <p className="text-[#455A64] leading-relaxed">{faq.a}</p>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </GlassCard>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 section-warm">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D6E64]/10 via-transparent to-[#FFD54F]/10" />
            <div className="relative text-center">
              <div className="w-16 h-16 bg-[#E0F2F1] rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-[#0D6E64]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#37474F] mb-4">
                Noch Fragen?
              </h2>
              <p className="text-lg text-[#455A64] mb-8 max-w-lg mx-auto">
                Wir beantworten gerne Ihre persönlichen Fragen in einem unverbindlichen Gespräch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton as="link" href="/kontakt" variant="primary" size="lg" className="btn-shadow-orange">
                  Jetzt anfragen
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </GlassButton>
                <GlassButton as="link" href="tel:06912345678" variant="ghost" size="lg">
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  069 12345678
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
