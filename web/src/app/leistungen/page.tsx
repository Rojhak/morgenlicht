'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'


const services = [
  {
    id: 'haushalt',
    emoji: '🏠',
    title: '1. Haushalt',
    subtitle: 'Ein sauberes Zuhause zum Wohlfühlen',
    description: 'Wir kümmern uns um Ihre Wohnung, damit Sie sich wohlfühlen.',
    color: 'from-[#FFE0B2] to-[#FFD54F]',
    bgLight: 'bg-[#FFF8E1]',
    iconColor: 'text-[#B8472A]',
    items: [
      { title: 'Wohnungsreinigung', desc: 'Staubsaugen, Wischen und Staubwischen aller Wohnräume.' },
      { title: 'Küche & Bad', desc: 'Gründliche Reinigung der Arbeitsflächen und Sanitäranlagen.' },
      { title: 'Wäsche & Betten', desc: 'Waschen, Bügeln und frisches Beziehen der Betten.' },
      { title: 'Fenster & Gardinen', desc: 'Fenster putzen sowie Waschen und Aufhängen der Gardinen.' },
      { title: 'Müll & Ordnung', desc: 'Müllentsorgung, allgemeine Ordnung und kleine Reparaturen.' },
    ],
  },
  {
    id: 'koerperpflege',
    emoji: '🛁',
    title: '2. Körperpflege',
    subtitle: 'Hilfe bei der täglichen Hygiene',
    description: 'Wir unterstützen Sie bei der Körperpflege mit Respekt und Würde.',
    color: 'from-[#B3E5FC] to-[#64B5F6]',
    bgLight: 'bg-[#E3F2FD]',
    iconColor: 'text-[#1976D2]',
    items: [
      { title: 'Hilfe beim Waschen', desc: 'Unterstützung beim Duschen oder Baden.' },
      { title: 'Kleiderwechsel', desc: 'Hilfe beim An- und Auskleiden.' },
      { title: 'Haarpflege', desc: 'Haarewaschen, Kämmen und einfache Frisurpflege.' },
      { title: 'Nagelpflege', desc: 'Fingernagel schneiden und pflegen.' },
      { title: 'Rasurhilfe', desc: 'Unterstützung bei der täglichen Rasur.' },
    ],
  },
  {
    id: 'begleitung',
    emoji: '🏥',
    title: '3. Begleitung',
    subtitle: 'Sichere Begleitung zu allen Terminen',
    description: 'Wir begleiten Sie sicher zu Ärzten, Behörden und unterwegs.',
    color: 'from-[#C8E6C9] to-[#81C784]',
    bgLight: 'bg-[#E8F5E9]',
    iconColor: 'text-[#0D6E64]',
    items: [
      { title: 'Arztbesuche', desc: 'Begleitung zu Arzt, Physiotherapie und Behandlungen.' },
      { title: 'Behördengänge', desc: 'Begleitung zu Bürgeramt, Krankenkasse und Ämtern.' },
      { title: 'Dienstleistungen', desc: 'Begleitung zu Friseur, Fußpflege und Bank.' },
      { title: 'Öffentliche Verkehrsmittel', desc: 'Hilfe bei Bus, Bahn und Taxifahrten.' },
      { title: 'Familienbesuche', desc: 'Begleitung zu Besuchen bei Familie und Freunden.' },
    ],
  },
  {
    id: 'gesellschaft',
    emoji: '💬',
    title: '4. Gesellschaft',
    subtitle: 'Gespräche und gemeinsame Zeit',
    description: 'Wir sind da für Zweisprache, Gesellschaft und Aktivierung.',
    color: 'from-[#F8BBD0] to-[#F48FB1]',
    bgLight: 'bg-[#FCE4EC]',
    iconColor: 'text-[#C2185B]',
    items: [
      { title: 'Gesprächsführung', desc: 'Zuhören, Plaudern und emotionale Unterstützung.' },
      { title: 'Vorlesen', desc: 'Gemeinsames Lesen von Büchern und Zeitungen.' },
      { title: 'Spiele', desc: 'Gesellschaftsspiele, Quiz und gemeinsame Unterhaltung.' },
      { title: 'Gedächtnistraining', desc: 'Gemeinsames Rätseln, Erinnern und Üben.' },
      { title: 'Abendgesellschaft', desc: 'Gesellschaft am Abend für Sicherheit und Geborgenheit.' },
    ],
  },
  {
    id: 'einkauf',
    emoji: '🛒',
    title: '5. Einkauf',
    subtitle: 'Wir erledigen Ihre Einkäufe',
    description: 'Vom Wocheneinkauf bis zu Besorgungen – wir übernehmen es für Sie.',
    color: 'from-[#FFCC80] to-[#FFA726]',
    bgLight: 'bg-[#FFE0B2]',
    iconColor: 'text-[#E65100]',
    items: [
      { title: 'Wocheneinkauf', desc: 'Planung, Einkauf und Einräumen der Lebensmittel.' },
      { title: 'Drogerie', desc: 'Kauf von Drogeriewaren und Haushaltsartikeln.' },
      { title: 'Apotheken', desc: 'Abholen von Rezepten und Medikamenten.' },
      { title: 'Schweres Tragen', desc: 'Hilfe beim Tragen schwerer Einkaufstaschen.' },
      { title: 'Einkaufsbegleitung', desc: 'Gemeinsamer Einkauf auf dem Wochenmarkt oder Supermarkt.' },
    ],
  },
  {
    id: 'mahlzeiten',
    emoji: '🍲',
    title: '6. Mahlzeiten',
    subtitle: 'Gut essen für mehr Lebensfreude',
    description: 'Wir kochen gemeinsam oder bereiten warme Mahlzeiten für Sie zu.',
    color: 'from-[#FFAB91] to-[#FF8A65]',
    bgLight: 'bg-[#FBE9E7]',
    iconColor: 'text-[#D84315]',
    items: [
      { title: 'Zusammen kochen', desc: 'Gemeinsames Kochen nach Ihren Wünschen und Rezepten.' },
      { title: 'Mahlzeiten vorbereiten', desc: 'Kochen von warmen Mahlzeiten für Sie.' },
      { title: 'Essenseinladungen', desc: 'Einladung zum gemeinsamen Essen und Gesellschaft.' },
      { title: 'Kühlschrank-Check', desc: 'Regelmäßige Kontrolle und Beseitigung von verdorbenen Lebensmitteln.' },
      { title: 'Getränke', desc: 'Für ausreichende Flüssigkeitsaufnahme während des Tages.' },
    ],
  },
  {
    id: 'boten',
    emoji: '📦',
    title: '7. Botengänge',
    subtitle: 'Erledigungen übernehmen',
    description: 'Post, Bank, Behörden – wir erledigen Ihre Botengänge.',
    color: 'from-[#CE93D8] to-[#AB47BC]',
    bgLight: 'bg-[#F3E5F5]',
    iconColor: 'text-[#7B1FA2]',
    items: [
      { title: 'Post & Pakete', desc: 'Abholen und Einordnen der Post und Pakete.' },
      { title: 'Bankgeschäfte', desc: 'Begleitung und Erledigung von Bankgeschäften.' },
      { title: 'Schuhe-Reparatur', desc: 'Abholen und Abgeben von Schuhen zur Reparatur.' },
      { title: 'Kleiner-Reparaturen', desc: 'Abholen und Abgeben von Gegenständen zur Reparatur.' },
      { title: 'Wäscherei', desc: 'Bringen und Abholen von Wäsche zur Wäscherei.' },
    ],
  },
  {
    id: 'nacht',
    emoji: '🌙',
    title: '8. Nachtwache',
    subtitle: 'Sicherheit in der Nacht',
    description: 'Wir sind auch nachts für Sie da – für Sicherheit und Geborgenheit.',
    color: 'from-[#9FA8DA] to-[#7986CB]',
    bgLight: 'bg-[#E8EAF6]',
    iconColor: 'text-[#3949AB]',
    items: [
      { title: 'Nachtwache', desc: 'Sicherheits Checks in der Nacht und Hilfe bei Bedarf.' },
      { title: 'Nachtbetreuung', desc: 'Begleitung und Unterstützung während der Nachtstunden.' },
      { title: 'Nächtliche Mobilität', desc: 'Hilfe beim Aufstehen und Toilettengang in der Nacht.' },
      { title: 'Schlaf-Routine', desc: 'Unterstützung beim Zubettgehen und Aufstehen.' },
      { title: 'Beruhigung', desc: 'Anwesenheit für ein sicheres und ruhiges Schlafumfeld.' },
    ],
  },
  {
    id: 'freizeit',
    emoji: '♟️',
    title: '9. Freizeit & Aktivierung',
    subtitle: 'Gemeinsame Zeit für mehr Lebensfreude',
    description: 'Wir unternehmen gemeinsam Dinge und bringen Freude in Ihren Alltag.',
    color: 'from-[#80CBC4] to-[#26A69A]',
    bgLight: 'bg-[#B2DFDB]',
    iconColor: 'text-[#00695C]',
    items: [
      { title: 'Spaziergänge', desc: 'Gemütliche Spaziergänge im Park oder im Kiez.' },
      { title: 'Ausflüge', desc: 'Tageausflüge zu Sehenswürdigkeiten oder in die Natur.' },
      { title: 'Kultur', desc: 'Besuche von Theater, Kino, Museen oder Konzerten.' },
      { title: 'Senioren-Treffs', desc: 'Begleitung zu Senioren-Treffs und Café-Kränzchen.' },
      { title: 'Feiertage', desc: 'Besondere Gestaltung von Feiertagen und Geburtstagen.' },
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
            Unsere 9 Leistungen
          </h1>
          <p className="text-xl md:text-2xl text-[#546E7A] leading-relaxed max-w-2xl mx-auto">
            Individuelle Unterstützung für Ihren Alltag – <span className="font-semibold text-[#0D6E64]">100% kostenfrei</span> über Ihre Pflegekasse.
          </p>
        </div>
      </section>

      {/* Quick Overview - 9 Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-[#546E7A]">
              Übersicht aller 9 Leistungsbereiche – klicken Sie für Details
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
