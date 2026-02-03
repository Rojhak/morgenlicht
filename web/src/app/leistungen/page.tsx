'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'

const services = [
  {
    id: 'haushalt',
    emoji: '🏠',
    title: '1. Haushalt & Wohlbefinden',
    subtitle: 'Ein sauberes Zuhause zum Wohlfühlen',
    description: 'Ein sauberes Zuhause zum Wohlfühlen',
    color: 'from-[#FFE0B2] to-[#FFD54F]',
    bgLight: 'bg-[#FFF8E1]',
    iconColor: 'text-[#B8472A]',
    items: [
      { title: 'Wohnungsreinigung', desc: 'Staubsaugen und Wischen aller Wohnräume sowie Staubwischen auf allen Oberflächen.' },
      { title: 'Küche & Bad', desc: 'Gründliche Reinigung der Arbeitsflächen und Sanitäranlagen für optimale Hygiene.' },
      { title: 'Mahlzeiten', desc: 'Zubereitung einfacher Mahlzeiten, Geschirrspülen sowie ein regelmäßiger Kühlschrank-Check.' },
      { title: 'Wäsche & Betten', desc: 'Waschen, Bügeln und Zusammenlegen der Wäsche sowie das frische Beziehen der Betten.' },
      { title: 'Fenster & Gardinen', desc: 'Fenster putzen sowie das Waschen und Aufhängen der Gardinen.' },
      { title: 'Rund ums Haus', desc: 'Allgemeine Ordnung, Müllentsorgung, Pflanzenpflege sowie Aufräumen von Balkon oder Terrasse und kleine Reparaturen im Haushalt.' },
    ],
  },
  {
    id: 'einkauf',
    emoji: '🛒',
    title: '2. Einkauf & Erledigungen',
    subtitle: 'Wir nehmen Ihnen die schweren Wege ab',
    description: 'Wir nehmen Ihnen die schweren Wege ab.',
    color: 'from-[#FFCC80] to-[#FFA726]',
    bgLight: 'bg-[#FFE0B2]',
    iconColor: 'text-[#E65100]',
    items: [
      { title: 'Wocheneinkauf', desc: 'Planung, Einkauf der Lebensmittel und Einräumen der Vorräte.' },
      { title: 'Botengänge', desc: 'Erledigungen bei der Post, Behörde, Bank oder bei anderen Dienstleistern in Ihrem Kiez.' },
      { title: 'Apotheken', desc: 'Abholen von Rezepten und Besorgung Ihrer Medikamente.' },
      { title: 'Besorgungen', desc: 'Kauf von Drogeriewaren und Haushaltsartikeln.' },
      { title: 'Begleitung beim Einkauf', desc: 'Wenn Sie möchten, begleiten wir Sie gerne zum Supermarkt oder zum Wochenmarkt und unterstützen Sie beim Tragen.' },
    ],
  },
  {
    id: 'begleitung',
    emoji: '🚶',
    title: '3. Begleitung & Mobilität',
    subtitle: 'Sicherheit und Unterstützung außer Haus',
    description: 'Sicherheit und Unterstützung außer Haus.',
    color: 'from-[#C8E6C9] to-[#81C784]',
    bgLight: 'bg-[#E8F5E9]',
    iconColor: 'text-[#0D6E64]',
    items: [
      { title: 'Begleitung zum Arzt', desc: 'Wir begleiten Sie zu Ihren Terminen beim Arzt, zur Physiotherapie oder zu anderen medizinischen Behandlungen.' },
      { title: 'Begleitung zu Dienstleistern', desc: 'Wir begleiten Sie zur Bank, zum Friseur, zur Fußpflege oder zu anderen Dienstleistern.' },
      { title: 'Behördengänge', desc: 'Ob Bürgeramt oder Krankenkasse – wir begleiten Sie zu Ihren Terminen und unterstützen Sie vor Ort.' },
      { title: 'Termin-Vorbereitung', desc: 'Gemeinsames Heraussuchen wichtiger Unterlagen und Vorbereiten der passenden Kleidung.' },
      { title: 'Soziale Kontakte & Freizeit', desc: 'Begleitung zu Freizeitangeboten, kulturellen Räumen oder privaten Besuchen bei Familie und Freunden zur Aufrechterhaltung Ihrer sozialen Kontakte.' },
      { title: 'Mobilitäts-Hilfe', desc: 'Unterstützung bei der Orientierung im Straßenverkehr sowie sichere Begleitung bei der Nutzung von Bus, Bahn oder Taxis.' },
    ],
  },
  {
    id: 'alltag',
    emoji: '📑',
    title: '4. Alltag & Überblick & Struktur',
    subtitle: 'Kein Stress mehr mit der Alltags-Organisation',
    description: 'Kein Stress mehr mit der Alltags-Organisation – wir behalten für Sie den Überblick.',
    color: 'from-[#B3E5FC] to-[#64B5F6]',
    bgLight: 'bg-[#E3F2FD]',
    iconColor: 'text-[#1976D2]',
    items: [
      { title: 'Post- & Dokumente', desc: 'Gemeinsames Öffnen, Sichten und Sortieren der täglichen Post sowie die strukturierte Organisation wichtiger Dokumente.' },
      { title: 'Schriftverkehr & Korrespondenz', desc: 'Unterstützung beim Verfassen einfacher Briefe oder E-Mails sowie Hilfe beim Führen eines Haushaltsbuchs.' },
      { title: 'Antragshilfe', desc: 'Unterstützung beim Ausfüllen von Formularen und Anträgen für Pflegekassen, Versicherungen oder Behörden.' },
      { title: 'Fristen- & Termin-Management', desc: 'Überwachung wichtiger Termine und Fristen sowie die Planung von Arzt-, Handwerker- oder Beratungsterminen.' },
      { title: 'Digitale Teilhabe', desc: 'Hilfe bei der Nutzung von Smartphone, Tablet oder PC – vom Einrichten von Messengern bis hin zu Videoanrufen mit der Familie.' },
      { title: 'Telefon- & Organisations-Hilfe', desc: 'Unterstützung bei wichtigen Telefonaten sowie die Organisation von Feierlichkeiten, Reisen oder Krankenhausaufenthalten.' },
      { title: 'Tagesstruktur & Orientierung', desc: 'Wir helfen Ihnen, den Tag gut zu planen, erinnern Sie an Wichtiges und geben Ihnen Sicherheit im Alltag.' },
      { title: 'Vorbereitung', desc: 'Unterstützung und Vorbereitung für Besuche des Pflegedienstes oder des Medizinischen Dienstes.' },
      { title: 'Wohnungs-Check bei Abwesenheit', desc: 'Wir schauen nach Ihrer Wohnung während Ihrer Abwesenheit (z. B. Blumen gießen, Post leeren).' },
    ],
  },
  {
    id: 'soziale',
    emoji: '🤝',
    title: '5. Soziale Teilhabe & Freizeit',
    subtitle: 'Gesellschaft & Aktivierung',
    description: 'Gesellschaft & Aktivierung.',
    color: 'from-[#F8BBD0] to-[#F48FB1]',
    bgLight: 'bg-[#FCE4EC]',
    iconColor: 'text-[#C2185B]',
    items: [
      { title: 'Gesellschaft', desc: 'Gemeinsames Zeitungslesen, Vorlesen von Büchern oder unterhaltsame Gesellschaftsspiele.' },
      { title: 'Raus an die Luft', desc: 'Gemütliche Spaziergänge oder kleine Wanderungen in Ihrem Kiez für Mobilität und Wohlbefinden.' },
      { title: 'Kultur & Genuss', desc: 'Begleitung zu kulturellen Veranstaltungen (Theater, Konzerte), Ausflüge.' },
      { title: 'Soziale Kontakte', desc: 'Begleitung zu Senioren-Treffs, Nachbarschafts-Cafés oder zu Besuchen bei Freunden und Familie.' },
      { title: 'Freizeit-Vermittlung', desc: 'Wir helfen Ihnen dabei, passende Angebote in Ihrem Kiez zu finden und begleiten Sie auf Wunsch dorthin.' },
    ],
  },
]

export default function LeistungenPage() {
  return (
    <>
      {/* Hero Section - Premium */}
      <section className="relative min-h-[60vh] flex items-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F0] to-[#E8F5E9]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFD54F]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#26A69A]/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-[#0D6E64] mb-6 leading-tight">
            Unsere 5 Leistungen
          </h1>
          <p className="text-xl md:text-2xl text-[#546E7A] leading-relaxed max-w-2xl mx-auto">
            Individuelle Unterstützung für Ihren Alltag – <span className="font-semibold text-[#0D6E64]">100% kostenfrei</span> über Ihre Pflegekasse.
          </p>
        </div>
      </section>

      {/* Quick Overview - 5 Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-[#546E7A]">
              Übersicht aller 5 Leistungsbereiche – klicken Sie für Details
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group block"
              >
                <div className={`h-full rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 ${service.bgLight}`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    {service.emoji}
                  </div>
                  <h3 className="font-bold text-[#37474F] mb-2 text-lg">{service.title}</h3>
                  <p className="text-sm text-[#546E7A] line-clamp-2">{service.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-4 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {services.map((service) => (
              <GlassCard key={service.id} id={service.id} className={`p-8 md:p-12 border-0 shadow-xl ${service.bgLight}`}>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center text-4xl shadow-xl flex-shrink-0`}>
                    {service.emoji}
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#37474F] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[#0D6E64] font-medium mb-2">{service.subtitle}</p>
                    <p className="text-[#546E7A]">{service.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {service.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-5 rounded-xl bg-white/80 hover:bg-white transition-colors shadow-sm"
                    >
                      <div className={`w-10 h-10 ${service.bgLight} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <div className={`w-2 h-2 rounded-full ${service.iconColor.replace('text', 'bg')}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#37474F] mb-1">{item.title}</h3>
                        <p className="text-sm text-[#546E7A]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Premium */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0D6E64] to-[#26A69A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fragen zu unseren Leistungen?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Wir beraten Sie kostenlos und unverbindlich – rufen Sie uns an oder senden Sie eine Anfrage.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <GlassButton
              as="link"
              href="/kontakt"
              variant="primary"
              size="lg"
              className="!bg-white !text-[#0D6E64] hover:!bg-gray-50 shadow-xl font-bold px-10"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </GlassButton>
            <a
              href="tel:06912345678"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              069 12345678
            </a>
          </div>

          <p className="text-white/70 text-sm mt-8">
            Mo–Fr: 8:00 – 18:00 Uhr • Kostenlos aus dem deutschen Festnetz
          </p>
        </div>
      </section>
    </>
  )
}
