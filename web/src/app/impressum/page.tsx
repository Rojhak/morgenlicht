'use client'

import { GlassCard } from '../components/glass'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import { Scale, MapPin, Mail, Phone, FileText, ShieldAlert } from 'lucide-react'


export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#144E41]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#144E41]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <ScrollRevealSection className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-5 py-2 bg-white border border-[#144E41]/20 rounded-xl text-sm font-bold font-heading text-[#144E41] mb-6 shadow-sm">
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tight">
            Impressum
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-body">
            Informationen über den Diensteanbieter und die Verantwortlichkeiten dieser Website.
          </p>
        </ScrollRevealSection>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <ScrollRevealSection delay={100}>
            <GlassCard className="p-8 md:p-12 bg-white/80 backdrop-blur-md border border-[#144E41]/10 shadow-xl overflow-hidden">
              <div className="space-y-12 text-[#455A64]">
              {/* 1. Angaben gemäß § 5 TMG */}
              <div className="space-y-10">
                <div className="space-y-8">
                  {/* Main Headline */}
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">
                    Angaben gemäß § 5 TMG
                  </h2>

                  {/* Company Name as Sub-Headline */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">
                      Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)
                    </h3>

                    {/* CEO Row */}
                    <div>
                      <p className="text-lg text-[#333333] font-body">
                        <span className="font-bold text-[#144E41] mr-1">Geschäftsführerin:</span> Asiye Duman
                      </p>
                    </div>

                    {/* Location Row */}
                    <div className="flex items-start">
                      <div className="text-lg text-[#333333] font-body -mt-0.5">
                        <p>Urbanstraße 71, 10967 Berlin</p>
                      </div>
                    </div>

                    {/* Contact Row */}
                    <div className="flex items-start">
                      <div className="text-lg text-[#333333] font-body space-y-2 -mt-0.5">
                        <p>
                          <span className="font-bold text-[#144E41] mr-1">Telefon:</span> 030 235 930 28
                        </p>
                        <p>
                          <span className="font-bold text-[#144E41] mr-1">Fax:</span> 030 544 533 139
                        </p>
                        <p>
                          <span className="font-bold text-[#144E41] mr-1">E-Mail:</span> info@morgenlicht-alltagshilfe.de
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Register & Steuer */}
              <div className="grid md:grid-cols-2 gap-12 border-t border-[#144E41]/10 pt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-[#144E41]">Registereintrag</h3>
                  <div className="text-lg font-body space-y-2">
                    <p>Registergericht: Amtsgericht Charlottenburg</p>
                    <p>Sitz der Gesellschaft: Berlin</p>
                    <p>Registernummer: HRB 283117 B</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-[#144E41]">Steuernummer</h3>
                  <div className="text-lg font-body">
                    <p>Steuernummer: <span className="font-bold">37/447/00936</span></p>
                  </div>
                </div>
              </div>

              {/* 4. Aufsichtsbehörde */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Zuständige Aufsichtsbehörde</h2>
                <div className="">
                  <p className="text-lg font-bold">Senatsverwaltung für Wissenschaft, Gesundheit und Pflege</p>
                  <p className="text-lg font-medium text-[#144E41] mb-2 tracking-tight">Abteilung Pflege</p>
                  <div className="text-base text-[#737373] space-y-1">
                    <p>Oranienstr. 106, 10969 Berlin</p>
                    <p>Website: <a href="https://www.berlin.de/sen/wgp/" target="_blank" rel="noopener noreferrer" className="text-[#144E41] hover:underline transition-all">https://www.berlin.de/sen/wgp/</a></p>
                  </div>
                </div>
              </div>

              {/* 5. Streitschlichtung */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-[#144E41]" />
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">Streitschlichtung</h2>
                </div>
                <p className="text-lg font-body leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#144E41] font-bold underline ml-1 hover:opacity-80 transition-opacity">
                    https://ec.europa.eu/consumers/odr
                  </a>.
                </p>
                <p className="text-lg font-body italic flex gap-4 items-start p-6 bg-orange-50/30 rounded-lg text-orange-950/80 border border-orange-100/50">
                  <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5 opacity-60" />
                  <span>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</span>
                </p>
              </div>

              {/* Haftungshinweise */}
              <div className="space-y-10 border-t border-[#144E41]/10 pt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-[#144E41]">Haftung für Inhalte</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-[#144E41]">Haftung für Links</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-[#144E41]">Urheberrecht</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                  </p>
                </div>
              </div>
              </div>
            </GlassCard>
          </ScrollRevealSection>
        </div>
      </section>
    </main>
  )
}
