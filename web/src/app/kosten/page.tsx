'use client'

import { ArrowRight, CheckCircle, Wallet, Users, Percent, Calculator, FileCheck, HeartHandshake } from 'lucide-react'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import Link from 'next/link'

export default function KostenPage() {
  return (
    <>
      {/* Hero - White Background */}
      <ScrollRevealSection className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0FDF4] rounded-full border border-[#134E4A]/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#134E4A]" />
            <span className="text-sm font-body font-semibold text-[#134E4A]">Transparente Preise</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#134E4A] mb-6 leading-tight tracking-tight">
            Kosten & Pflegekasse
          </h1>

          <p className="text-lg font-body text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
            „Transparenz ist uns wichtig. Wir erklären Ihnen alles."
          </p>
          <p className="text-base font-body text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Gute Hilfe muss nicht teuer sein. Wir zeigen Ihnen, wie Sie Ihr Budget bei der Pflegekasse am besten nutzen.
          </p>
        </div>
      </ScrollRevealSection>

      {/* Information Area - Beige Background */}
      <section className="py-24 px-4 md:px-8 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Stundensatz Banner */}
          <ScrollRevealSection className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <Calculator className="w-7 h-7 text-[#144E41]" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-[#134E4A] mb-2">
                Unser Stundensatz: 35,50 €
              </h2>
              <p className="text-base font-body text-gray-600 leading-relaxed">
                In diesem Preis ist bereits alles enthalten: von der Anfahrt über die Administration bis hin zur direkten Abrechnung mit Ihrer Kasse.{' '}
                <span className="font-semibold text-[#134E4A]">Es kommen keine weiteren Gebühren auf Sie zu.</span>
              </p>
            </div>
          </ScrollRevealSection>

          {/* Card 1 – Ab Pflegegrad 1 */}
          <ScrollRevealSection delay={100} className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Wallet className="w-6 h-6 text-[#144E41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-1">Ab Pflegegrad 1</h3>
                <p className="text-sm font-body text-[#144E41] font-semibold uppercase tracking-wider">Der Entlastungsbetrag</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold font-heading text-[#134E4A]">131 €</span>
              <span className="text-base font-body text-gray-500">/Monat</span>
            </div>

            <p className="text-base font-body text-gray-600 mb-6 leading-relaxed">
              Jeder Mensch mit einem Pflegegrad hat Anspruch auf monatlichen Entlastungsbetrag.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'Wir rechnen direkt mit der Kasse ab',
                'Ihr Pflegegeld wird dadurch nicht gekürzt',
                'Ca. 3,5 bis 4 Stunden Unterstützung pro Monat',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-body text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#144E41] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Waldgrün Highlight */}
            <div className="bg-[#144E41] rounded-[10px] px-5 py-4 text-white">
              <p className="text-sm md:text-base font-body font-semibold leading-relaxed">
                In diesem Rahmen ist unsere Hilfe für Sie völlig kostenlos.
              </p>
            </div>
          </ScrollRevealSection>

          {/* Card 2 – Ab Pflegegrad 2 */}
          <ScrollRevealSection delay={150} className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#144E41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-1">Ab Pflegegrad 2</h3>
                <p className="text-sm font-body text-[#144E41] font-semibold uppercase tracking-wider">Zusätzliche Verhinderungspflege</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold font-heading text-[#134E4A]">bis zu 10 Std.</span>
              <span className="text-base font-body text-gray-500">/Monat</span>
            </div>

            <p className="text-base font-body text-gray-600 mb-6 leading-relaxed">
              Extra-Hilfe ab Pflegegrad 2: Zusätzliche Mittel zur Entlastung Ihrer pflegenden Angehörigen.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                '1.612 € pro Jahr zusätzlich verfügbar',
                'Für Begleitungen oder Hilfe im Haushalt nutzbar',
                'Sorgsame Planung für Notfälle reserviert',
                'Auch stundenweise einsetzbar',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-body text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#144E41] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollRevealSection>

          {/* Card 3 – Privatzahler */}
          <ScrollRevealSection delay={200} className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Percent className="w-6 h-6 text-[#144E41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-1">Privatzahler</h3>
                <p className="text-sm font-body text-[#144E41] font-semibold uppercase tracking-wider">Ohne Pflegegrad</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold font-heading text-[#134E4A]">35,50 €</span>
              <span className="text-base font-body text-gray-500">/Stunde</span>
            </div>

            <p className="text-base font-body text-gray-600 mb-6 leading-relaxed">
              Wenn Sie keinen Pflegegrad haben oder einfach mehr Stunden wünschen.
            </p>

            <ul className="space-y-3">
              {[
                '20 % direkt von der Steuer absetzbar',
                'Kein Pflegegrad erforderlich',
                'Flexible Buchung',
                'Finanzamt erstattet einen Teil der Kosten',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-body text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#144E41] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollRevealSection>

          {/* Rechenbeispiel – Larger Card */}
          <ScrollRevealSection delay={250} className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#134E4A] mb-6 text-center tracking-tight">
              Ein Rechenbeispiel für Sie
            </h2>
            <div className="bg-[#F7F6F3] rounded-[12px] p-6 mb-6">
              <p className="text-lg font-body text-gray-700 leading-relaxed">
                Über den Entlastungsbetrag (131 €):{' '}
                <strong className="text-[#134E4A]">Hiermit können wir Sie etwa 3,5 bis 4 Stunden pro Monat unterstützen</strong>{' '}
                – zum Beispiel für den wöchentlichen Hausputz oder Begleitungen.
                <span className="block mt-3 text-[#144E41] font-semibold">Für Sie entstehen dabei keine Kosten.</span>
              </p>
            </div>
            <p className="text-sm font-body text-gray-500 text-center leading-relaxed">
              Gut zu wissen: Auch bei vorübergehendem Hilfebedarf (z. B. nach einem Krankenhausaufenthalt oder in besonderen Lebenslagen) gibt es oft Möglichkeiten der Kostenübernahme durch die Krankenkasse.
            </p>
          </ScrollRevealSection>

          {/* Services Banner */}
          <ScrollRevealSection delay={300} className="bg-[#144E41] rounded-[16px] p-8 md:p-12 text-white shadow-lg">
            <div className="text-center mb-8">
              <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-[#FBBF24]" />
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                Unser Rundum-Sorglos-Service für Sie
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: FileCheck,
                  title: 'Wir übernehmen den Papierkram',
                  text: 'Wir rechnen direkt mit der Pflegekasse ab. Sie müssen kein Geld vorstrecken.',
                },
                {
                  icon: Calculator,
                  title: 'Budget-Beratung',
                  text: 'Wir schauen gemeinsam, wie viel Geld Ihnen zusteht und wie wir das Beste herausholen.',
                },
                {
                  icon: CheckCircle,
                  title: 'Hilfe beim Antrag',
                  text: 'Sie haben noch keinen Pflegegrad? Wir unterstützen Sie beim Antrag.',
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white/10 rounded-[12px] p-5">
                  <Icon className="w-6 h-6 text-[#FBBF24] mb-3" />
                  <h3 className="font-bold font-heading mb-1">{title}</h3>
                  <p className="text-sm font-body text-white/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </ScrollRevealSection>

        </div>
      </section>

      {/* CTA - White */}
      <ScrollRevealSection className="py-24 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
            Fragen zur Kostenübernahme?
          </h2>
          <p className="text-lg font-body text-gray-600 leading-relaxed mb-10">
            Wir beraten Sie kostenlos und unverbindlich – rufen Sie uns an oder senden Sie eine Anfrage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#134E4A] text-white font-body font-semibold rounded-[12px] hover:bg-[#0f3d39] transition-colors duration-200 shadow-sm"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:06912345678"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#134E4A] font-body font-semibold rounded-[12px] border border-gray-200 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              069 12345678
            </Link>
          </div>
        </div>
      </ScrollRevealSection>
    </>
  )
}
