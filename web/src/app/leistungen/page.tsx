'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Home, ShoppingBag, Footprints, FileText, Handshake, Sparkles, Bath, UtensilsCrossed, Shirt, Wind, Trash2, ShoppingCart, Building2, Pill, Package, Users, Stethoscope, Scissors, Landmark, CalendarCheck, Smartphone, MapPin, Mail, ClipboardList, Clock, Monitor, PhoneCall, Compass, BookOpen, TreePine, Ticket, Coffee, Search } from 'lucide-react'

function ScrollRevealSection({ children, className, id, delay = 0 }: { children: React.ReactNode; className?: string; id?: string; delay?: number }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(16px)',
        transition: `opacity 700ms ease-out, transform 700ms ease-out`,
      }}
    >
      {children}
    </section>
  )
}

const services = [
  {
    id: 'haushalt',
    icon: Home,
    title: '1. Haushalt & Wohlbefinden',
    subtitle: 'Ein sauberes Zuhause zum Wohlfühlen',
    description: 'Wir sorgen für ein gepflegtes Zuhause, in dem Sie sich rundum wohlfühlen. Von der gründlichen Reinigung bis zur Wäschepflege – wir kümmern uns um alles.',
    ctaLabel: 'Haushaltshilfe',
    items: [
      { title: 'Wohnungsreinigung', desc: 'Staubsaugen und Wischen aller Wohnräume sowie Staubwischen auf allen Oberflächen.', icon: Sparkles },
      { title: 'Küche & Bad', desc: 'Gründliche Reinigung der Arbeitsflächen und Sanitäranlagen für optimale Hygiene.', icon: Bath },
      { title: 'Mahlzeiten', desc: 'Zubereitung einfacher Mahlzeiten, Geschirrspülen sowie ein regelmäßiger Kühlschrank-Check.', icon: UtensilsCrossed },
      { title: 'Wäsche & Betten', desc: 'Waschen, Bügeln und Zusammenlegen der Wäsche sowie das frische Beziehen der Betten.', icon: Shirt },
      { title: 'Fenster & Gardinen', desc: 'Fenster putzen sowie das Waschen und Aufhängen der Gardinen.', icon: Wind },
      { title: 'Rund ums Haus', desc: 'Allgemeine Ordnung, Müllentsorgung, Pflanzenpflege sowie Aufräumen von Balkon oder Terrasse.', icon: Trash2 },
    ],
  },
  {
    id: 'einkauf',
    icon: ShoppingBag,
    title: '2. Einkauf & Erledigungen',
    subtitle: 'Wir nehmen Ihnen die schweren Wege ab',
    description: 'Ob Wocheneinkauf, Apothekengang oder Behördenbesuch – wir erledigen das für Sie oder begleiten Sie gerne dabei.',
    ctaLabel: 'Einkaufshilfe',
    items: [
      { title: 'Wocheneinkauf', desc: 'Planung, Einkauf der Lebensmittel und Einräumen der Vorräte.', icon: ShoppingCart },
      { title: 'Botengänge', desc: 'Erledigungen bei der Post, Behörde, Bank oder bei anderen Dienstleistern in Ihrem Kiez.', icon: Building2 },
      { title: 'Apotheken', desc: 'Abholen von Rezepten und Besorgung Ihrer Medikamente.', icon: Pill },
      { title: 'Besorgungen', desc: 'Kauf von Drogeriewaren und Haushaltsartikeln.', icon: Package },
      { title: 'Begleitung beim Einkauf', desc: 'Wir begleiten Sie gerne zum Supermarkt oder zum Wochenmarkt und unterstützen beim Tragen.', icon: Users },
    ],
  },
  {
    id: 'begleitung',
    icon: Footprints,
    title: '3. Begleitung & Mobilität',
    subtitle: 'Sicherheit und Unterstützung außer Haus',
    description: 'Wir begleiten Sie sicher und zuverlässig zu allen wichtigen Terminen – ob Arzt, Behörde oder Freizeit.',
    ctaLabel: 'Begleitung',
    items: [
      { title: 'Begleitung zum Arzt', desc: 'Wir begleiten Sie zu Ihren Terminen beim Arzt, zur Physiotherapie oder zu anderen Behandlungen.', icon: Stethoscope },
      { title: 'Begleitung zu Dienstleistern', desc: 'Wir begleiten Sie zur Bank, zum Friseur, zur Fußpflege oder zu anderen Dienstleistern.', icon: Scissors },
      { title: 'Behördengänge', desc: 'Ob Bürgeramt oder Krankenkasse – wir begleiten Sie zu Ihren Terminen und unterstützen vor Ort.', icon: Landmark },
      { title: 'Termin-Vorbereitung', desc: 'Gemeinsames Heraussuchen wichtiger Unterlagen und Vorbereiten der passenden Kleidung.', icon: CalendarCheck },
      { title: 'Soziale Kontakte & Freizeit', desc: 'Begleitung zu Freizeitangeboten, kulturellen Räumen oder privaten Besuchen bei Familie und Freunden.', icon: Users },
      { title: 'Mobilitäts-Hilfe', desc: 'Unterstützung bei der Orientierung im Straßenverkehr und sichere Begleitung im ÖPNV.', icon: MapPin },
    ],
  },
  {
    id: 'alltag',
    icon: FileText,
    title: '4. Alltag, Überblick & Struktur',
    subtitle: 'Kein Stress mehr mit der Alltags-Organisation',
    description: 'Wir behalten für Sie den Überblick – von der Post über Anträge bis hin zur digitalen Teilhabe.',
    ctaLabel: 'Alltagshilfe',
    items: [
      { title: 'Post- & Dokumente', desc: 'Gemeinsames Öffnen, Sichten und Sortieren der täglichen Post sowie Organisation wichtiger Dokumente.', icon: Mail },
      { title: 'Schriftverkehr', desc: 'Unterstützung beim Verfassen einfacher Briefe oder E-Mails sowie Hilfe beim Haushaltsbuch.', icon: ClipboardList },
      { title: 'Antragshilfe', desc: 'Unterstützung beim Ausfüllen von Formularen und Anträgen für Pflegekassen oder Behörden.', icon: FileText },
      { title: 'Fristen- & Termine', desc: 'Überwachung wichtiger Fristen und Planung von Arzt-, Handwerker- oder Beratungsterminen.', icon: Clock },
      { title: 'Digitale Teilhabe', desc: 'Hilfe bei der Nutzung von Smartphone, Tablet oder PC – von Messengern bis Videoanrufen.', icon: Monitor },
      { title: 'Telefon- & Organisations-Hilfe', desc: 'Unterstützung bei wichtigen Telefonaten und Organisation von Feierlichkeiten oder Reisen.', icon: PhoneCall },
      { title: 'Tagesstruktur', desc: 'Wir helfen, den Tag zu planen, erinnern an Wichtiges und geben Sicherheit im Alltag.', icon: Compass },
      { title: 'Vorbereitung', desc: 'Unterstützung und Vorbereitung für Besuche des Pflegedienstes oder des Medizinischen Dienstes.', icon: CalendarCheck },
      { title: 'Wohnungs-Check', desc: 'Wir schauen nach Ihrer Wohnung während Ihrer Abwesenheit (Blumen gießen, Post leeren).', icon: Home },
    ],
  },
  {
    id: 'soziale',
    icon: Handshake,
    title: '5. Soziale Teilhabe & Freizeit',
    subtitle: 'Gesellschaft & Aktivierung',
    description: 'Gemeinsam gegen Einsamkeit – wir bringen Freude und Abwechslung in Ihren Alltag.',
    ctaLabel: 'Freizeitbegleitung',
    items: [
      { title: 'Gesellschaft', desc: 'Gemeinsames Zeitungslesen, Vorlesen von Büchern oder unterhaltsame Gesellschaftsspiele.', icon: BookOpen },
      { title: 'Raus an die Luft', desc: 'Gemütliche Spaziergänge oder Wanderungen in Ihrem Kiez für Mobilität und Wohlbefinden.', icon: TreePine },
      { title: 'Kultur & Genuss', desc: 'Begleitung zu Theater, Konzerten oder Ausflügen.', icon: Ticket },
      { title: 'Soziale Kontakte', desc: 'Begleitung zu Senioren-Treffs, Nachbarschafts-Cafés oder zu Besuchen bei Freunden und Familie.', icon: Coffee },
      { title: 'Freizeit-Vermittlung', desc: 'Wir helfen, passende Angebote in Ihrem Kiez zu finden und begleiten Sie auf Wunsch dorthin.', icon: Search },
    ],
  },
]

// Navigation icons for the top anchor cards
const navIcons = [Home, ShoppingBag, Footprints, FileText, Handshake]
const navLabels = ['Haushalt', 'Einkauf', 'Begleitung', 'Alltag', 'Soziales']

export default function LeistungenPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden bg-[#FAF9F6] pt-20 pb-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FBBF24]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#134E4A]/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#FFFBEB] rounded-full text-sm font-bold font-body text-[#134E4A] mb-6 border border-[#FBBF24]">
            Alle Leistungen im Überblick
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-[#134E4A] mb-6 leading-tight tracking-tight">
            Unsere 5 Leistungen
          </h1>
          <p className="text-lg md:text-xl font-body text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Individuelle Unterstützung für Ihren Alltag – <span className="font-semibold text-[#134E4A]">100% kostenfrei</span> über Ihre Pflegekasse.
          </p>
        </div>
      </section>

      {/* Navigation - 5 Horizontal Anchor Cards */}
      <section className="py-3 md:py-5 px-4 bg-white/95 backdrop-blur-md border-b border-gray-300/50 sticky top-28 z-30 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-start md:justify-center items-center gap-2 md:gap-5 overflow-x-auto scrollbar-hide bg-[#F8FAFB] rounded-2xl px-4 md:px-6 py-4 border border-gray-100">
            {services.map((service, index) => {
              const NavIcon = navIcons[index]
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className="flex flex-col items-center justify-center gap-1.5 md:gap-2 min-w-[60px] md:min-w-[72px] group cursor-pointer"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#134E4A] flex items-center justify-center shadow-md group-hover:bg-[#FBBF24] group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <NavIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-body font-semibold text-[#134E4A] text-center whitespace-nowrap uppercase tracking-widest group-hover:text-[#FBBF24] transition-colors">
                    {navLabels[index]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections - Zig-Zag Layout with Alternating Backgrounds */}
      {services.map((service, sectionIndex) => {
        const isEven = sectionIndex % 2 === 1
        const SectionIcon = service.icon
        // Sections 1, 3, 5 (index 0, 2, 4) = white; Sections 2, 4 (index 1, 3) = warm light beige
        const sectionBg = isEven ? 'bg-[#F7F6F3]' : 'bg-white'

        return (
          <ScrollRevealSection
            key={service.id}
            id={service.id}
            className={`py-16 md:py-24 px-4 scroll-mt-40 ${sectionBg}`}
            delay={sectionIndex * 100}
          >
            <div className="max-w-6xl mx-auto">
              {/* Zig-Zag Header: Image + Text */}
              <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-16 items-center mb-4 md:mb-14`}>
                {/* Image Placeholder (Icon + Gradient) */}
                <div className="hidden md:block w-full md:w-2/5 flex-shrink-0">
                  <div className="aspect-[16/9] md:aspect-[4/3] rounded-[24px] bg-gradient-to-br from-[#134E4A]/10 to-[#FBBF24]/10 flex items-center justify-center shadow-sm border border-gray-100">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#FFFBEB] flex items-center justify-center shadow-lg border border-[#FBBF24]/20">
                      <SectionIcon className="w-10 h-10 md:w-14 md:h-14 text-[#FBBF24]" />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-3/5">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-9 h-9 md:w-14 md:h-14 rounded-full bg-[#134E4A] flex items-center justify-center flex-shrink-0 shadow-md">
                      <SectionIcon className="w-4.5 h-4.5 md:w-7 md:h-7 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-[#134E4A] leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg font-body text-gray-600 mb-2 md:mb-3 font-medium leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-sm md:text-base font-body text-[#374151] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Sub-Service Cards - 3-Column Grid (always white) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-10">
                {service.items.map((item, index) => {
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-[12px] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFFBEB] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ItemIcon className="w-4.5 h-4.5 text-[#FBBF24]" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-[#134E4A] mb-1 text-base">
                            {item.title}
                          </h3>
                          <p className="text-sm font-body text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Per-Section CTA */}
              <div className="text-center md:text-left">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 md:py-3 bg-[#134E4A] text-white font-heading font-semibold text-sm rounded-xl hover:bg-[#0F3F3C] transition-colors shadow-sm hover:shadow-md"
                >
                  Jetzt für {service.ctaLabel} anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollRevealSection>
        )
      })}

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#134E4A] mb-6 font-heading">
            Fragen zu unseren Leistungen?
          </h2>
          <p className="text-xl font-body text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed">
            Wir beraten Sie kostenlos und unverbindlich – rufen Sie uns an oder senden Sie eine Anfrage.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-heading font-bold rounded-xl bg-[#134E4A] text-white hover:bg-[#0F3F3C] shadow-xl transition-all"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:03023593028"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-heading font-bold rounded-xl bg-white text-[#134E4A] border-2 border-[#134E4A]/20 hover:border-[#134E4A]/40 transition-all shadow-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              030 235 930 28
            </a>
          </div>

          <p className="font-body text-[#6B7280] text-sm mt-8">
            Mo–Fr: 09:00 – 16:00 Uhr
          </p>
        </div>
      </section>
    </>
  )
}
