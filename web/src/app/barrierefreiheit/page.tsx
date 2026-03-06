'use client'

import { GlassCard } from '../components/glass'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import { Accessibility, Phone, Mail, Heart } from 'lucide-react'

export default function BarrierefreiheitPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-8 px-4 bg-white overflow-hidden border-b border-[#144E41]/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#144E41]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <ScrollRevealSection className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-5 py-2 bg-white border border-[#144E41]/20 rounded-xl text-sm font-bold font-heading text-[#144E41] mb-6 shadow-sm">
            Inklusion
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tight">
            Unsere digitale Barrierefreiheit
          </h1>
          <p className="text-lg md:text-xl text-[#455A64] max-w-2xl mx-auto leading-relaxed font-body">
            Zugänglichkeit ist für uns kein Extra, sondern eine Selbstverständlichkeit – für ein Miteinander ohne Hürden.
          </p>
        </ScrollRevealSection>
      </section>

      {/* Content Section */}
      <section className="pb-24 pt-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollRevealSection delay={100}>
            <GlassCard className="p-8 md:p-12 bg-white/80 backdrop-blur-md border border-[#144E41]/10 shadow-xl">
              <div className="space-y-10 text-[#455A64]">
                <div className="flex items-center gap-3 mb-2">
                  <Accessibility className="w-6 h-6 text-[#144E41]" />
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">Barrierefreier Zugang</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg font-body leading-relaxed">
                    Uns ist es ein Herzensanliegen, dass unsere Website für alle Menschen zugänglich ist – unabhängig von Alter oder körperlichen Einschränkungen. Deshalb haben wir bei der Gestaltung auf klare Kontraste, gut lesbare Schriften und eine einfache Bedienbarkeit geachtet.
                  </p>

                  <p className="text-lg font-body leading-relaxed">
                    Wir arbeiten kontinuierlich daran, unsere digitalen Angebote weiter zu verbessern. Sollten Sie dennoch auf Hürden stoßen oder Schwierigkeiten haben, Informationen auf unserer Website zu finden, sind wir gerne persönlich für Sie da.
                  </p>
                </div>

                {/* Contact Box */}
                <div className="bg-[#FAF9F6] p-8 rounded-xl border border-[#144E41]/10 text-[#144E41] shadow-sm">
                  <h3 className="text-xl font-bold mb-6 font-heading flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#FBBF24]" />
                    Wir helfen Ihnen gerne weiter
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#144E41]/60" />
                        <span className="text-sm font-bold uppercase tracking-wider opacity-60">Rufen Sie uns an</span>
                      </div>
                      <p className="text-xl font-bold">030 235 930 28</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#144E41]/60" />
                        <span className="text-sm font-bold uppercase tracking-wider opacity-60">Schreiben Sie uns</span>
                      </div>
                      <p className="text-lg font-bold break-all">info@morgenlicht-alltagshilfe.de</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#144E41]/10">
                    <p className="text-lg italic font-medium opacity-80">
                      Herzlich, würdevoll und unkompliziert.
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
