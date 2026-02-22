'use client'

import { ArrowRight, CheckCircle, Euro, Wallet, Users, Percent, Calculator, FileCheck, HeartHandshake } from 'lucide-react'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import Link from 'next/link'

export default function KostenPage() {
  return (
    <>
      {/* Hero - White Background */}
      <ScrollRevealSection className="py-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#F0FDF4] rounded-full text-sm font-medium text-[#134E4A] mb-6 border border-[#134E4A]/20">
            Transparente Preise
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#134E4A] mb-6 leading-tight tracking-tight">
            Kosten & Pflegekasse
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed mb-4">
            „Transparenz ist uns wichtig. Wir erklären Ihnen alles."
          </p>
          <p className="text-base text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
            Gute Hilfe muss nicht teuer sein. Wir zeigen Ihnen, wie Sie Ihr Budget bei der Pflegekasse am besten nutzen.
          </p>
        </div>
      </ScrollRevealSection>

      {/* Information Area – Beige Background */}
      <section className="py-24 px-4 md:px-8 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Stundensatz Banner */}
          <ScrollRevealSection className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <Euro className="w-6 h-6 text-[#144E41]" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-heading text-[#134E4A] mb-2">
                  Unser Stundensatz: 35,50 €
                </h2>
                <p className="text-base font-body text-gray-600 leading-relaxed">
                  In diesem Preis ist bereits alles enthalten: von der Anfahrt über die Administration bis hin zur direkten Abrechnung mit Ihrer Kasse.{' '}
                  <strong className="text-[#134E4A]">Es kommen keine weiteren Gebühren auf Sie zu.</strong>
                </p>
              </div>
            </div>
          </ScrollRevealSection>

          {/* Card 1 – Ab Pflegegrad 1 */}
          <ScrollRevealSection delay={100} className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Wallet className="w-6 h-6 text-[#144E41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-1">
                  Für jeden mit Pflegegrad (1 bis 5): Der Entlastungsbetrag
                </h3>
              </div>
            </div>

            <p className="text-base font-body text-gray-600 mb-5 leading-relaxed">
              Jeder Mensch mit einem Pflegegrad hat Anspruch auf 131 € monatlich.
            </p>

            <div className="mb-5">
              <p className="text-sm font-body font-semibold text-[#134E4A] mb-3">Ihr Vorteil:</p>
              <ul className="space-y-3">
                {[
                  'Wir rechnen diese 131 € direkt mit der Kasse ab',
                  'Wichtig: Ihr monatliches Pflegegeld wird dadurch nicht gekürzt',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base font-body text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#144E41] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Waldgrün Highlight Box */}
            <div className="bg-[#144E41] rounded-[10px] px-5 py-4 text-white">
              <p className="text-sm md:text-base font-body font-semibold leading-relaxed">
                In diesem Rahmen ist unsere Hilfe für Sie völlig kostenlos.
              </p>
            </div>
          </ScrollRevealSection>

          {/* Card 2 – Ab Pflegegrad 2 */}
          <ScrollRevealSection delay={150} className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#144E41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-1">
                  Extra-Hilfe ab Pflegegrad 2: Die Verhinderungspflege
                </h3>
              </div>
            </div>

            <p className="text-base font-body text-gray-600 mb-5 leading-relaxed">
              Ab Pflegegrad 2 stehen Ihnen zusätzliche Mittel zur Verfügung, um Ihre pflegenden Angehörigen zu entlasten.
            </p>

            <div className="bg-[#FFF8E1] rounded-xl p-4">
              <p className="text-[#B8472A] font-medium mb-2">Was ist die Verhinderungspflege?</p>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Wenn Ihre privaten Pflegepersonen eine Pause brauchen oder selbst Termine haben, springen wir ein.
              </p>
              <ul className="space-y-2">
                {[
                  'Vielseitig einsetzbar: Dieses Budget (1.612 € pro Jahr) können Sie auch stundenweise nutzen',
                  'Sorgsame Planung: Wir achten darauf, es verantwortungsbewusst zu nutzen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#144E41] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealSection>

          {/* Card 3 – Privatzahler */}
          <ScrollRevealSection delay={200} className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Percent className="w-6 h-6 text-[#144E41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-1">
                  Privatzahler & Steuervorteil
                </h3>
              </div>
            </div>

            <p className="text-base font-body text-gray-600 mb-5 leading-relaxed">
              Falls Sie keinen Pflegegrad haben oder einfach mehr Stunden wünschen:
            </p>

            <div className="bg-[#FBE9E7] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Euro className="w-5 h-5 text-[#B8472A]" />
                <p className="text-[#B8472A] font-medium">Stundensatz: 35,50 €</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Steuer-Tipp: Sie können 20 % unserer Rechnung von der Steuer absetzen. Das Finanzamt erstattet Ihnen somit einen Teil der Kosten zurück.
              </p>
            </div>
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
              <h2 className="text-2xl md:text-3xl font-bold font-heading">
                Unser Rundum-Sorglos-Service für Sie
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 rounded-[12px] p-5">
                <FileCheck className="w-6 h-6 text-[#FBBF24] mb-3" />
                <h3 className="font-bold font-heading mb-1">Wir übernehmen den Papierkram</h3>
                <p className="text-sm font-body text-white/80 leading-relaxed">Wir rechnen direkt mit der Pflegekasse ab. Sie müssen kein Geld vorstrecken.</p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-5">
                <Calculator className="w-6 h-6 text-[#FBBF24] mb-3" />
                <h3 className="font-bold font-heading mb-1">Budget-Beratung</h3>
                <p className="text-sm font-body text-white/80 leading-relaxed">Wir schauen gemeinsam, wie viel Geld Ihnen zusteht und wie wir das Beste herausholen.</p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-5">
                <CheckCircle className="w-6 h-6 text-[#FBBF24] mb-3" />
                <h3 className="font-bold font-heading mb-1">Hilfe beim Antrag</h3>
                <p className="text-sm font-body text-white/80 leading-relaxed">Sie haben noch keinen Pflegegrad? Wir unterstützen Sie beim Antrag.</p>
              </div>
            </div>
          </ScrollRevealSection>

        </div>
      </section>

      {/* CTA - White */}
      <ScrollRevealSection className="py-24 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
            Fragen zur Kostenübernahme?
          </h2>
          <p className="text-lg font-body text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
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
