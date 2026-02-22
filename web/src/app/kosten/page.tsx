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
          <span className="inline-block px-5 py-2 bg-white border border-[#144E41]/20 rounded-xl text-sm font-bold font-heading text-[#144E41] mb-6">
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
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-[#0D6E64]/10 via-transparent to-[#FFD54F]/10">
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
          </GlassCard>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 bg-[#F7F6F3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingCards.map((plan) => (
              <GlassCard key={plan.id} className={`p-6 bg-gradient-to-br ${plan.color} relative overflow-hidden`}>
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 ${plan.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Calculator className={`w-7 h-7 ${plan.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#37474F] mb-1">{plan.title}</h3>
                  <p className="text-sm font-medium text-[#0D6E64] mb-3">{plan.subtitle}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold font-heading text-[#0D6E64]">{plan.amount}</span>
                    <span className="text-[#455A64]">{plan.period}</span>
                  </div>
                </div>
                <p className="text-base font-body text-[#455A64] text-center mb-6 leading-relaxed">{plan.description}</p>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0D6E64] flex-shrink-0 mt-0.5" />
                      <span className="text-base font-body text-[#37474F] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Detail Card 1 */}
            <GlassCard className="p-8 border-l-4 border-l-[#0D6E64]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E0F2F1] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-[#0D6E64]">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#37474F] mb-3">
                    Für jeden mit Pflegegrad (1 bis 5): Der Entlastungsbetrag
                  </h3>
                  <p className="text-lg font-body text-[#455A64] mb-3 leading-relaxed">
                    Jeder Mensch mit einem Pflegegrad hat Anspruch auf <span className="font-heading font-semibold text-[#37474F]">131 €</span> monatlich.
                  </p>
                  <div className="bg-[#E8F5E9] rounded-xl p-4">
                    <p className="text-[#0D6E64] font-medium mb-2">Ihr Vorteil:</p>
                    <ul className="space-y-3 font-body">
                      <li className="text-base text-[#37474F] leading-relaxed">• Wir rechnen diese 131 € direkt mit der Kasse ab</li>
                      <li className="text-xl font-heading font-semibold text-white bg-[#144E41] rounded-lg px-3 py-2">• In diesem Rahmen ist unsere Hilfe für Sie völlig kostenlos</li>
                      <li className="text-base text-[#37474F] leading-relaxed">• Wichtig: Ihr monatliches Pflegegeld wird dadurch nicht gekürzt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Detail Card 2 */}
            <GlassCard className="p-8 border-l-4 border-l-[#FFB300]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFF8E1] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-[#B8472A]">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#37474F] mb-3">
                    Extra-Hilfe ab Pflegegrad 2: Die Verhinderungspflege
                  </h3>
                  <p className="text-lg font-body text-[#455A64] mb-3 leading-relaxed">
                    Ab Pflegegrad 2 stehen Ihnen zusätzliche Mittel zur Verfügung, um Ihre pflegenden Angehörigen zu entlasten.
                  </p>
                  <div className="bg-[#FFF8E1] rounded-xl p-4">
                    <p className="text-[#B8472A] font-medium mb-2">Was ist die Verhinderungspflege?</p>
                    <p className="text-base font-body text-[#37474F] mb-3 leading-relaxed">
                      Wenn Ihre privaten Pflegepersonen eine Pause brauchen oder selbst Termine haben, springen wir ein.
                    </p>
                    <ul className="space-y-3 font-body">
                      <li className="text-base text-[#37474F] leading-relaxed">• Vielseitig einsetzbar: Dieses Budget (<span className="font-heading font-semibold">1.612 €</span> pro Jahr) können Sie auch stundenweise nutzen</li>
                      <li className="text-base text-[#37474F] leading-relaxed">• Sorgsame Planung: Wir achten darauf, es verantwortungsbewusst zu nutzen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Detail Card 3 */}
            <GlassCard className="p-8 border-l-4 border-l-[#E65100]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FBE9E7] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-[#B8472A]">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#37474F] mb-3">
                    Privatzahler & Steuervorteil
                  </h3>
                  <p className="text-lg font-body text-[#455A64] mb-3 leading-relaxed">
                    Falls Sie keinen Pflegegrad haben oder einfach mehr Stunden wünschen:
                  </p>
                  <div className="bg-[#FBE9E7] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Euro className="w-5 h-5 text-[#B8472A]" />
                      <p className="text-[#B8472A] font-medium font-heading">Stundensatz: <span className="font-semibold">35,50 €</span></p>
                    </div>
                    <p className="text-base font-body text-[#37474F] leading-relaxed">
                      Steuer-Tipp: Sie können 20 % unserer Rechnung von der Steuer absetzen. Das Finanzamt erstattet Ihnen somit einen Teil der Kosten zurück.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#37474F] mb-6 text-center">
              Ein Rechenbeispiel für Sie
            </h2>
            <div className="bg-white/70 rounded-xl p-6 mb-6">
              <p className="text-lg text-[#37474F] leading-relaxed">
                Über den Entlastungsbetrag (131 €): <strong>Hiermit können wir Sie etwa 3,5 bis 4 Stunden pro Monat unterstützen</strong> – zum Beispiel für den wöchentlichen Hausputz oder Begleitungen.
                <span className="block mt-3 text-[#0D6E64] font-semibold">Für Sie entstehen dabei keine Kosten.</span>
              </p>
            </div>
            <p className="text-sm text-[#455A64] text-center">
              Gut zu wissen: Auch bei vorübergehendem Hilfebedarf (z. B. nach einem Krankenhausaufenthalt oder in besonderen Lebenslagen) gibt es oft Möglichkeiten der Kostenübernahme durch die Krankenkasse.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-[#0D6E64] to-[#0D7D72]">
            <div className="relative text-center text-white">
              <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-[#FFD54F]" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Unser Rundum-Sorglos-Service für Sie
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
                <div className="bg-white/10 rounded-xl p-4">
                  <FileCheck className="w-6 h-6 text-[#FFD54F] mb-2" />
                  <h3 className="font-semibold mb-1">Wir übernehmen den Papierkram</h3>
                  <p className="text-sm text-white/80">Wir rechnen direkt mit der Pflegekasse ab. Sie müssen kein Geld vorstrecken.</p>
                </div>
                                        <div className="bg-white/10 rounded-xl p-4">
                  <Calculator className="w-6 h-6 text-[#FFD54F] mb-2" />
                  <h3 className="font-semibold mb-1">Budget-Beratung</h3>
                  <p className="text-sm text-white/80">Wir schauen gemeinsam, wie viel Geld Ihnen zusteht und wie wir das Beste herausholen.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-[#FFD54F] mb-2" />
                  <h3 className="font-semibold mb-1">Hilfe beim Antrag</h3>
                  <p className="text-sm text-white/80">Sie haben noch keinen Pflegegrad? Wir unterstützen Sie beim Antrag.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA - matching Über uns style */}
      <section className="py-24 px-4 bg-[#FAF9F6] relative overflow-hidden">
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
