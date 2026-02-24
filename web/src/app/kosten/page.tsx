'use client'

import { ArrowRight, CheckCircle, Euro, Calculator, FileCheck, HeartHandshake } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'
import Link from 'next/link'


const pricingCards = [
  {
    id: 'pg1',
    title: 'Ab Pflegegrad 1',
    subtitle: 'Der Entlastungsbetrag',
    amount: '131 €',
    period: '/Monat',
    description: 'Jeder Mensch mit einem Pflegegrad hat Anspruch auf monatlichen Entlastungsbetrag.',
    features: [
      'Wir rechnen direkt mit der Kasse ab',
      'In diesem Rahmen ist unsere Hilfe für Sie völlig kostenlos',
      'Ihr Pflegegeld wird dadurch nicht gekürzt',
      'Ca. 3,5 bis 4 Stunden Unterstützung pro Monat',
    ],
    color: 'from-[#E8F5E9]/50 to-[#C8E6C9]/20',
    iconBg: 'bg-[#E8F5E9]',
    iconColor: 'text-[#0D6E64]',
  },
  {
    id: 'pg2',
    title: 'Ab Pflegegrad 2',
    subtitle: 'Zusätzliche Verhinderungspflege',
    amount: 'bis zu 10 Std.',
    period: '/Monat',
    description: 'Extra-Hilfe ab Pflegegrad 2: Zusätzliche Mittel zur Entlastung Ihrer pflegenden Angehörigen.',
    features: [
      '1.612 € pro Jahr zusätzlich verfügbar',
      'Für Begleitungen oder Hilfe im Haushalt nutzbar',
      'Sorgsame Planung für Notfälle reserviert',
      'Auch stundenweise einsetzbar',
    ],
    color: 'from-[#E0F2F1]/60 to-[#B2DFDB]/20',
    iconBg: 'bg-[#E0F2F1]',
    iconColor: 'text-[#0D6E64]',
  },
  {
    id: 'private',
    title: 'Privatzahler',
    subtitle: 'Ohne Pflegegrad',
    amount: '35,50 €',
    period: '/Stunde',
    description: 'Wenn Sie keinen Pflegegrad haben oder einfach mehr Stunden wünschen.',
    features: [
      '20 % direkt von der Steuer absetzbar',
      'Kein Pflegegrad erforderlich',
      'Flexible Buchung',
      'Finanzamt erstattet einen Teil der Kosten',
    ],
    color: 'from-[#FFF8E1]/60 to-[#FFECB3]/20',
    iconBg: 'bg-[#FFF8E1]',
    iconColor: 'text-[#B8472A]',
  },
]

export default function KostenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-28 px-4 bg-white">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-sm font-semibold tracking-wider text-[#144E41] mb-6">
            Transparente Preise
          </span>
          <h1 className="text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tight">
            Kosten & Pflegekasse
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-6">
            "Transparenz ist uns wichtig. Wir erklären Ihnen alles."
          </p>
          <p className="text-lg font-body text-[#455A64] max-w-2xl mx-auto leading-relaxed">
            Gute Hilfe muss nicht teuer sein. Wir zeigen Ihnen, wie Sie Ihr Budget bei der Pflegekasse am besten nutzen.
          </p>
        </div>
      </section>

      {/* Hourly Rate Banner */}
      <section className="pt-24 pb-0 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-[#0D6E64]" />
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#144E41]">
                  Unser Stundensatz: <span className="font-heading font-semibold">35,50 €</span>
                </h2>
              </div>
              <p className="text-lg font-body text-[#455A64] max-w-2xl mx-auto leading-relaxed">
                In diesem Preis ist bereits alles enthalten: von der Anfahrt über die Administration bis hin zur direkten Abrechnung mit Ihrer Kasse.
                <strong className="text-[#37474F]"> Es kommen keine weiteren Gebühren auf Sie zu.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pt-16 pb-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingCards.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-xl shadow-sm border border-[#144E41]/5 p-8 flex flex-col transition-all hover:shadow-md h-full"
              >
                <div className="text-center mb-8">
                  <div className="inline-block px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-xs font-semibold tracking-wider text-[#144E41] mb-4">
                    {plan.title}
                  </div>
                  <div className="h-14 flex items-center justify-center mb-1">
                    <h3 className="text-xl font-bold font-heading text-[#134E4A] leading-tight">{plan.subtitle}</h3>
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className={`${plan.amount.length > 8 ? 'text-3xl' : 'text-4xl'} font-bold font-heading text-[#144E41] whitespace-nowrap`}>{plan.amount}</span>
                    <span className="text-lg font-body text-[#455A64]">{plan.period}</span>
                  </div>
                </div>

                <p className="text-sm font-body text-gray-600 text-center mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-5 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#144E41] flex-shrink-0 mt-0.5" />
                      <span className="text-base font-body text-[#37474F] leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Link
                    href="/kontakt"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#134E4A] text-white rounded-lg font-bold hover:bg-[#0F3F3C] transition-colors"
                  >
                    Details anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Calculation - Moved and restyled */}
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#144E41] text-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center !text-white">
              Ein Rechenbeispiel für Sie
            </h2>
            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <p className="text-lg text-white leading-relaxed">
                Über den Entlastungsbetrag (131 €): <strong>Hiermit können wir Sie etwa 3,5 bis 4 Stunden pro Monat unterstützen</strong> – zum Beispiel für den wöchentlichen Hausputz oder Begleitungen.
                <span className="block mt-3 text-[#FFD54F] font-semibold">Für Sie entstehen dabei keine Kosten.</span>
              </p>
            </div>
            <p className="text-sm text-white/80 text-center max-w-2xl mx-auto">
              Gut zu wissen: Auch bei vorübergehendem Hilfebedarf (z. B. nach einem Krankenhausaufenthalt oder in besonderen Lebenslagen) gibt es oft Möglichkeiten der Kostenübernahme durch die Krankenkasse.
            </p>
          </div>
        </div>
      </section>

      {/* Services Banner - Restyled as 3 small info cards */}
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-[#144E41]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#134E4A]">
              Unser Rundum-Sorglos-Service für Sie
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 flex flex-col items-center text-center transition-all hover:shadow-md h-full">
              <div className="w-12 h-12 bg-[#144E41]/5 rounded-full flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-[#144E41]" />
              </div>
              <h3 className="text-lg font-bold text-[#134E4A] mb-3">Wir übernehmen den Papierkram</h3>
              <p className="text-sm font-body text-[#455A64] leading-relaxed">Wir rechnen direkt mit der Pflegekasse ab. Sie müssen kein Geld vorstrecken.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 flex flex-col items-center text-center transition-all hover:shadow-md h-full">
              <div className="w-12 h-12 bg-[#144E41]/5 rounded-full flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-[#144E41]" />
              </div>
              <h3 className="text-lg font-bold text-[#134E4A] mb-3">Budget-Beratung</h3>
              <p className="text-sm font-body text-[#455A64] leading-relaxed">Wir schauen gemeinsam, wie viel Geld Ihnen zusteht und wie wir das Beste herausholen.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 flex flex-col items-center text-center transition-all hover:shadow-md h-full">
              <div className="w-12 h-12 bg-[#144E41]/5 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-[#144E41]" />
              </div>
              <h3 className="text-lg font-bold text-[#134E4A] mb-3">Hilfe beim Antrag</h3>
              <p className="text-sm font-body text-[#455A64] leading-relaxed">Sie haben noch keinen Pflegegrad? Wir unterstützen Sie beim Antrag.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - matching Über uns style */}
      <section className="py-24 px-4 bg-[#F7F6F3] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#134E4A] mb-6 tracking-tight">
            Fragen zur Kostenübernahme?
          </h2>
          <p className="text-xl font-body text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Wir beraten Sie kostenlos und unverbindlich – rufen Sie uns an oder schreiben Sie uns eine Nachricht.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#134E4A] hover:bg-[#0F3F3C] text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <a
              href="tel:03023593028"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white text-[#134E4A] text-lg font-bold rounded-xl border-2 border-[#134E4A]/20 hover:border-[#134E4A]/40 transition-all shadow-sm"
            >
              030 235 930 28
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-gray-500 font-body">
            <div className="flex items-center gap-2 text-sm font-medium">
              Mo–Fr: 09:00 – 16:00 Uhr
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
