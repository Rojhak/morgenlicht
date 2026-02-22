'use client'

import { Wallet, FileCheck, TrendingDown, CheckCircle, ArrowRight } from 'lucide-react'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import Link from 'next/link'

const financingPillars = [
  {
    icon: Wallet,
    title: '131 € monatlich geschenkt',
    subtitle: 'Entlastungsbetrag (Pflegegrad 1–5)',
    text: 'Jeder mit Pflegegrad hat Anspruch darauf. Wir rechnen direkt mit der Pflegekasse ab – Sie müssen kein Geld vorstrecken. Ihr Pflegegeld bleibt dabei vollständig unangetastet.',
  },
  {
    icon: FileCheck,
    title: '1.612 € Bonus pro Jahr',
    subtitle: 'Verhinderungspflege (Ab Pflegegrad 2)',
    text: 'Zusätzliches Budget zur Entlastung pflegender Angehöriger. Ideal für intensive Begleitung, besondere Ausflüge oder wenn Ihre Bezugsperson mal eine Auszeit braucht.',
  },
  {
    icon: TrendingDown,
    title: '20% vom Finanzamt zurück',
    subtitle: 'Steuervorteil (Privatzahler)',
    text: 'Auch ohne Pflegegrad absetzbar. Wir stellen Ihnen eine steuerlich anerkannte Rechnung aus und beraten Sie, wie Sie unsere Hilfe optimal geltend machen können.',
  },
]

export default function KostenPage() {
  return (
    <>
      {/* Hero */}
      <ScrollRevealSection className="py-24 px-4 bg-[#F7F6F3] text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-[#134E4A]" />
            <span className="text-sm font-body font-semibold text-[#134E4A]">Transparente Preise</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#134E4A] mb-6 leading-tight tracking-tight">
            Unsere Unterstützung ist für Sie{' '}
            <span className="italic">oft zu 100% kostenlos.</span>
          </h1>

          <p className="text-lg font-body text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Die Pflegekasse übernimmt einen großen Teil der Kosten. Wir erklären Ihnen genau, was Ihnen zusteht und kümmern uns um den gesamten Papierkram.
          </p>
        </div>
      </ScrollRevealSection>

      {/* 3 Financing Pillars */}
      <section className="py-24 px-4 md:px-8 bg-[#F7F6F3]">
        <div className="max-w-6xl mx-auto">
          <ScrollRevealSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
              Ihre Finanzierungs-Möglichkeiten
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-xl mx-auto leading-relaxed">
              Es gibt drei Wege, wie unsere Hilfe für Sie (teilweise oder vollständig) finanziert wird.
            </p>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {financingPillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <ScrollRevealSection
                  key={pillar.title}
                  delay={idx * 100}
                  className="bg-white rounded-[12px] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#144E41]" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-body text-[#144E41] font-semibold uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-base text-gray-600 font-body leading-relaxed">
                    {pillar.text}
                  </p>
                </ScrollRevealSection>
              )
            })}
          </div>

          {/* Hourly rate note */}
          <ScrollRevealSection delay={350} className="mt-10 text-center">
            <p className="text-base font-body text-gray-500">
              Unser Stundensatz beträgt <span className="font-semibold text-[#134E4A]">35,50 € – alles inklusive.</span>{' '}
              Keine versteckten Gebühren für Anfahrt oder Verwaltung.
            </p>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Highlight Box – Rechenbeispiel */}
      <ScrollRevealSection className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#144E41] rounded-[16px] p-8 md:p-12 text-white text-center shadow-xl">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-7 h-7 text-[#FBBF24]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 leading-snug">
              Das bedeutet für Sie konkret:
            </h2>
            <p className="text-lg font-body leading-relaxed text-white/90 mb-6">
              Mit dem Entlastungsbetrag (131 €) erhalten Sie{' '}
              <span className="font-bold text-white">ca. 3,5 Stunden Hilfe pro Monat</span>{' '}
              – komplett ohne Zuzahlung. Das kann zum Beispiel der wöchentliche Hausputz oder eine Begleitung zum Arzt sein.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-body text-white/80 mt-4">
              {[
                'Wir rechnen direkt ab',
                'Kein Geld vorstrecken',
                'Pflegegeld bleibt erhalten',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FBBF24] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* CTA */}
      <ScrollRevealSection className="py-24 px-4 bg-[#F7F6F3] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
            Fragen zur Kostenübernahme?
          </h2>
          <p className="text-lg font-body text-gray-600 leading-relaxed mb-10">
            Wir beraten Sie kostenlos und unverbindlich. Einfach anrufen oder eine Nachricht schicken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#134E4A] text-white font-body font-semibold rounded-[12px] hover:bg-[#0f3d39] transition-colors duration-200 shadow-sm"
            >
              Jetzt kostenlos anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+4930123456"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#134E4A] font-body font-semibold rounded-[12px] border border-gray-200 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              030 / 123 456
            </Link>
          </div>
        </div>
      </ScrollRevealSection>
    </>
  )
}
