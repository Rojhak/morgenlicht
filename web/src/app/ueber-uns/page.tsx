'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Award, ArrowRight, Sparkles, MapPin, Handshake, Quote, Clock, Phone, ShieldCheck, Zap } from 'lucide-react'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import { GlassCard, GlassButton } from '../components/glass'


export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section - Premium */}
      <ScrollRevealSection className="relative min-h-[70vh] flex items-center px-4 overflow-hidden bg-[#FAF9F6]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FBBF24]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#134E4A]/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto py-20">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
              <div className="w-8 h-8 bg-[#FFFBEB] rounded-full flex items-center justify-center border border-[#FBBF24]/20">
                <Heart className="w-4 h-4 text-[#FBBF24]" />
              </div>
              <span className="text-sm font-bold font-body text-[#134E4A]">Das Herz hinter Morgenlicht</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-[#134E4A] mb-6 leading-tight tracking-tight">
              Über uns
            </h1>

            <p className="text-xl sm:text-2xl font-body text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
              Unterstützung auf Augenhöhe – <span className="font-semibold text-[#134E4A]">mit Herz, Hand und Verstand.</span>
            </p>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Founder Story - Premium Design */}
      <ScrollRevealSection className="py-20 px-4 bg-white" delay={100}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#134E4A]/5 via-transparent to-[#FBBF24]/5 rounded-[32px] blur-2xl" />

                {/* Main photo frame */}
                <div className="relative bg-white rounded-[24px] p-2 shadow-xl border border-gray-100">
                  <div className="relative rounded-[16px] overflow-hidden aspect-[4/5]">
                    <Image
                      src="/images/asiye-duman.jpeg"
                      alt="Asiye Duman - Gründerin und Geschäftsführerin von Morgenlicht Alltagshilfe Berlin"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFFBEB] rounded-xl flex items-center justify-center border border-[#FBBF24]/20">
                    <Award className="w-6 h-6 text-[#FBBF24]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Zertifiziert</div>
                    <div className="font-bold font-heading text-[#134E4A]">§ 45a SGB XI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFBEB] rounded-full mb-6 border border-[#FBBF24]/30">
                <Sparkles className="w-4 h-4 text-[#FBBF24]" />
                <span className="text-sm font-bold font-body text-[#134E4A]">Gründerin & Geschäftsführerin</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
                Asiye Duman
              </h2>

              <p className="text-lg font-body text-[#134E4A] font-semibold mb-8">
                Morgenlicht Alltagshilfe Berlin
              </p>

              <div className="space-y-6 text-gray-600 font-body leading-relaxed">
                <p>
                  Hinter der Gründung von Morgenlicht steht meine <strong className="text-[#134E4A]">langjährige Erfahrung im sozialen Bereich</strong>. Über viele Jahre hinweg habe ich Menschen in unterschiedlichsten Lebenslagen beraten und unterstützt.
                </p>

                <p>
                  Dabei habe ich eines gelernt: <strong className="text-[#134E4A]">Der Mensch muss immer im Mittelpunkt stehen.</strong>
                </p>

                <p>
                  Den Impuls für die Gründung gaben Beobachtungen aus meinem eigenen Alltag im Kiez. Ich habe gesehen, wie schwer es für meine Nachbarin war, die schweren Einkaufstaschen allein bis in den 4. Stock zu tragen. Ich habe erlebt, wie hilflos man sich nach einer Operation fühlen kann, wenn man plötzlich Hilfe bei der einfachsten Essenszubereitung braucht.
                </p>

                <p>
                  Oft möchten die Angehörigen helfen, stoßen aber selbst an ihre Grenzen. Genau hier setzen wir an. Mein Ziel war es, eine Unterstützung zu schaffen, die nicht nur eine "Dienstleistung" ist, sondern eine <strong className="text-[#134E4A]">würdevolle Begleitung auf Augenhöhe</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Personal Quote Section */}
      <ScrollRevealSection className="py-20 px-4 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-9xl text-[#C0A080]/10 font-serif" aria-hidden="true">
              "
            </div>
            <div className="p-10 md:p-16 text-center relative bg-white rounded-[24px] shadow-sm border border-gray-100">
              <Quote className="w-12 h-12 text-[#FBBF24] mx-auto mb-6" />
              <blockquote className="mb-8">
                <p className="text-2xl md:text-3xl text-[#134E4A] font-medium font-body leading-relaxed italic">
                  "Jeder Mensch verdient Unterstützung, die Würde und Respekt zeigt – genau das wollen wir jeden Tag bei Morgenlicht leben."
                </p>
              </blockquote>
              <cite className="text-[#134E4A] font-bold font-heading not-italic">
                — Asiye Duman
              </cite>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Unser Versprechen Section - Clean Grid */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <ScrollRevealSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#134E4A] mb-5 tracking-tight">
              Unser Versprechen an Sie
            </h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Individuelle Hilfe',
                text: 'Wir schauen genau hin: Was erleichtert Ihren Alltag wirklich? Bei uns gibt es keine Lösungen von der Stange, sondern Unterstützung, die exakt zu Ihrem Leben passt.'
              },
              {
                icon: ShieldCheck,
                title: 'Würde & Respekt',
                text: 'Unsere Arbeit ist eine Herzensangelegenheit; Würde und Respekt sind unser Fundament. Als zertifizierter Anbieter garantieren wir Ihnen eine würdevolle Begleitung auf Augenhöhe und absolute Zuverlässigkeit.'
              },
              {
                icon: Zap,
                title: 'Einfachheit',
                text: 'Wir nehmen Ihnen die Last ab – auch bei der Bürokratie. Wir rechnen direkt mit der Pflegekasse ab, sodass unsere Hilfe für Sie mit Pflegegrad 100% kostenlos ist.'
              }
            ].map((promise, idx) => {
              const Icon = promise.icon
              return (
                <ScrollRevealSection
                  key={promise.title}
                  delay={idx * 150}
                  className="bg-white rounded-[12px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#144E41]" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-4">
                    {promise.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    {promise.text}
                  </p>
                </ScrollRevealSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlight Card - Restored */}
      <ScrollRevealSection className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 bg-[#134E4A] rounded-[24px] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl md:text-2xl text-white font-body leading-relaxed max-w-3xl mx-auto">
                Bei Morgenlicht kombinieren wir fachliche Erfahrung aus der sozialen Arbeit mit echter, <span className="font-semibold">menschlicher Wärme</span>. Wir verstehen sehr gut, dass es nicht einfach ist, jemanden Fremden in die Wohnung zu lassen und Hilfe anzunehmen. Deshalb gibt es bei uns <span className="text-[#FBBF24] font-semibold">keine Standard-Lösungen von der Stange</span>.
              </p>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Trust Badge - Premium */}
      <ScrollRevealSection className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFFBEB] rounded-[24px] p-10 text-center border border-[#FBBF24]/20 shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md border border-[#FBBF24]/20 mb-6">
              <Award className="w-10 h-10 text-[#FBBF24]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
              Anerkannter Anbieter nach § 45a SGB XI
            </h3>
            <p className="text-lg font-body text-gray-600 max-w-lg mx-auto leading-relaxed">
              Morgenlicht Alltagshilfe ist als anerkannter Anbieter zugelassen. Ihre Pflegekasse übernimmt die Kosten im Rahmen des Entlastungsbetrags – <span className="font-bold text-[#134E4A]">100% für Sie kostenlos</span>.
            </p>
          </div>
        </div>
      </ScrollRevealSection>

      {/* CTA Section - Premium */}
      <section className="py-24 px-4 bg-[#FAF9F6] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#134E4A] mb-6 tracking-tight">
            Lernen Sie uns kennen
          </h2>
          <p className="text-xl font-body text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Wir freuen uns auf ein unverbindliches Gespräch mit Ihnen. Rufen Sie uns einfach an oder schreiben Sie uns eine Nachricht.
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
              <Phone className="w-5 h-5 mr-3" />
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
