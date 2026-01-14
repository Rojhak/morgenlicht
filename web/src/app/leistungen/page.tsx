import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, Car, Home, Coffee, Heart, Sparkles } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'
import { Accordion, AccordionItem } from '../components/ui'

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Unsere Leistungen: Einkaufshilfe, Begleitdienste, Haushaltshilfe, Alltagsbegleitung und Entlastung für Angehörige.',
}

const services = [
  {
    id: 'einkaufshilfe',
    icon: ShoppingCart,
    title: 'Einkaufshilfe',
    description: 'Gemeinsam einkaufen oder wir erledigen es für Sie',
    color: 'from-[#FFD54F]/20 to-[#FFE082]/10',
    iconBg: 'bg-[#FFF8E1]',
    iconColor: 'text-[#B8472A]',
    faqs: [
      {
        question: 'Was ist in der Einkaufshilfe enthalten?',
        answer: 'Wir begleiten Sie beim Einkaufen im Supermarkt, helfen beim Tragen der Einkäufe und räumen diese auf Wunsch auch ein. Alternativ erledigen wir den Einkauf nach Ihrer Liste für Sie.',
      },
      {
        question: 'Wie oft kann ich die Einkaufshilfe nutzen?',
        answer: 'So oft Sie möchten – im Rahmen Ihres monatlichen Budgets. Die meisten unserer Kunden nutzen die Einkaufshilfe ein- bis zweimal pro Woche.',
      },
      {
        question: 'Was ist nicht enthalten?',
        answer: 'Die Kosten für die Einkäufe selbst sind nicht enthalten. Wir übernehmen nur die Dienstleistung, nicht die Warenkosten.',
      },
    ],
  },
  {
    id: 'begleitdienste',
    icon: Car,
    title: 'Begleitdienste',
    description: 'Begleitung zu Arztterminen, Behörden oder Ausflügen',
    color: 'from-[#26A69A]/20 to-[#4DB6AC]/10',
    iconBg: 'bg-[#E0F2F1]',
    iconColor: 'text-[#0D6E64]',
    faqs: [
      {
        question: 'Wohin kann ich begleitet werden?',
        answer: 'Wir begleiten Sie zu Arztterminen, Behördengängen, Bankbesuchen, Friedhofsbesuchen, Ausflügen in die Stadt oder in die Natur – wohin Sie möchten.',
      },
      {
        question: 'Ist die Fahrt inbegriffen?',
        answer: 'Wir nutzen öffentliche Verkehrsmittel oder begleiten Sie zu Fuß. Fahrten mit dem eigenen PKW können je nach Verfügbarkeit arrangiert werden.',
      },
      {
        question: 'Wie lange dauert ein Begleitdienst typischerweise?',
        answer: 'Das hängt vom Ziel ab. Ein Arztbesuch dauert oft 2-3 Stunden inklusive Wartezeit. Ausflüge können auch länger sein – wir richten uns nach Ihren Bedürfnissen.',
      },
    ],
  },
  {
    id: 'haushaltshilfe',
    icon: Home,
    title: 'Haushaltshilfe',
    description: 'Unterstützung bei alltäglichen Aufgaben im Haushalt',
    color: 'from-[#FFCCBC]/30 to-[#FFAB91]/10',
    iconBg: 'bg-[#FBE9E7]',
    iconColor: 'text-[#B8472A]',
    faqs: [
      {
        question: 'Welche Haushaltstätigkeiten werden übernommen?',
        answer: 'Wir helfen beim Aufräumen, leichter Reinigung, Wäsche waschen und zusammenlegen, Betten beziehen, Müll entsorgen und ähnlichen alltäglichen Aufgaben.',
      },
      {
        question: 'Was ist nicht in der Haushaltshilfe enthalten?',
        answer: 'Grundreinigung, Fensterputzen oder Renovierungsarbeiten gehören nicht zu unseren Leistungen. Wir bieten Alltagsunterstützung, keine professionelle Gebäudereinigung.',
      },
      {
        question: 'Bringen Sie eigene Reinigungsmittel mit?',
        answer: 'Wir nutzen Ihre vorhandenen Reinigungsmittel und Geräte. So wissen Sie genau, was in Ihrem Zuhause verwendet wird.',
      },
    ],
  },
  {
    id: 'alltagsbegleitung',
    icon: Coffee,
    title: 'Alltagsbegleitung',
    description: 'Gesellschaft und Unterstützung im täglichen Leben',
    color: 'from-[#E8F5E9]/50 to-[#C8E6C9]/20',
    iconBg: 'bg-[#E8F5E9]',
    iconColor: 'text-[#0D6E64]',
    faqs: [
      {
        question: 'Was bedeutet Alltagsbegleitung konkret?',
        answer: 'Wir verbringen Zeit mit Ihnen: Gespräche führen, gemeinsam kochen, spazieren gehen, Gesellschaftsspiele spielen, vorlesen oder einfach Gesellschaft leisten.',
      },
      {
        question: 'Ist das auch etwas für Menschen mit Demenz?',
        answer: 'Ja, unsere Alltagsbegleiter sind im Umgang mit demenzerkrankten Menschen geschult. Wir bieten einfühlsame Betreuung und aktivierende Beschäftigung.',
      },
      {
        question: 'Kann ich immer denselben Begleiter haben?',
        answer: 'Wir bemühen uns, Ihnen einen festen Ansprechpartner zuzuteilen. Kontinuität und Vertrauen sind uns wichtig.',
      },
    ],
  },
  {
    id: 'entlastung',
    icon: Heart,
    title: 'Entlastung für Angehörige',
    description: 'Zeit für sich, während Ihre Liebsten bestens betreut sind',
    color: 'from-[#FFD54F]/15 to-[#FFECB3]/10',
    iconBg: 'bg-[#FFF8E1]',
    iconColor: 'text-[#B8472A]',
    faqs: [
      {
        question: 'Wie funktioniert die Entlastung?',
        answer: 'Wir übernehmen für einige Stunden die Betreuung Ihres Angehörigen, damit Sie Zeit für sich haben – für Termine, Erholung oder einfach eine Pause.',
      },
      {
        question: 'Kann ich die Zeit flexibel einteilen?',
        answer: 'Ja, wir stimmen die Zeiten individuell mit Ihnen ab. Ob regelmäßig einmal pro Woche oder nach Bedarf – wir richten uns nach Ihnen.',
      },
      {
        question: 'Was passiert während der Betreuung?',
        answer: 'Wir kümmern uns liebevoll um Ihren Angehörigen: Gespräche, Spaziergänge, gemeinsame Aktivitäten. Sie können beruhigt Ihre Zeit genießen.',
      },
    ],
  },
  {
    id: 'gedaechtnistraining',
    icon: Sparkles,
    title: 'Gedächtnistraining',
    description: 'Spielerische Übungen für geistige Fitness',
    color: 'from-[#E0F2F1]/60 to-[#B2DFDB]/20',
    iconBg: 'bg-[#E0F2F1]',
    iconColor: 'text-[#0D6E64]',
    faqs: [
      {
        question: 'Was beinhaltet das Gedächtnistraining?',
        answer: 'Wir führen spielerische Übungen durch: Kreuzworträtsel, Gedächtnisspiele, Rechenaufgaben, Wortspiele und vieles mehr – immer angepasst an Ihre Fähigkeiten.',
      },
      {
        question: 'Für wen ist Gedächtnistraining geeignet?',
        answer: 'Für alle, die geistig fit bleiben möchten. Besonders hilfreich bei beginnender Vergesslichkeit oder als Prävention.',
      },
      {
        question: 'Wie oft sollte trainiert werden?',
        answer: 'Idealerweise regelmäßig, z.B. einmal pro Woche. Aber auch gelegentliche Sessions sind wertvoll und machen Spaß.',
      },
    ],
  },
]

export default function LeistungenPage() {
  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#FFD54F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#26A69A]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#E0F2F1] rounded-full text-sm font-medium text-[#0D6E64] mb-4">
            Was wir anbieten
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#37474F] mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-lg text-[#455A64] max-w-2xl mx-auto">
            Individuelle Unterstützung für Ihren Alltag – alle Leistungen können über den Entlastungsbetrag Ihrer Pflegekasse abgerechnet werden.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <GlassCard key={service.id} className={`p-8 bg-gradient-to-br ${service.color}`} id={service.id}>
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-7 h-7 ${service.iconColor}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#37474F] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[#455A64]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <Accordion>
                  {service.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      title={faq.question}
                      defaultOpen={index === 0}
                    >
                      {faq.answer}
                    </AccordionItem>
                  ))}
                </Accordion>
              </GlassCard>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <GlassCard className="p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D6E64]/10 via-transparent to-[#FFD54F]/10" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-[#37474F] mb-4">
                Fragen zu unseren Leistungen?
              </h2>
              <p className="text-lg text-[#455A64] mb-8 max-w-lg mx-auto">
                Wir beraten Sie kostenlos und unverbindlich – rufen Sie uns an oder senden Sie eine Anfrage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton as="link" href="/kontakt" variant="primary" size="lg" className="btn-shadow-orange">
                  Jetzt anfragen
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </GlassButton>
                <GlassButton as="link" href="tel:06912345678" variant="ghost" size="lg">
                  069 12345678
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
