'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Award, ArrowRight, Sparkles, MapPin, Handshake, Quote } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'

const values = [
  {
    icon: Heart,
    title: 'Individuell',
    description: 'Wir schauen uns ganz in Ruhe an: Wo drückt der Schuh? Was würde Ihnen den Tag wirklich erleichtern?',
    color: 'from-[#FFD54F] to-[#FFA726]',
    bgLight: 'bg-[#FFF8E1]'
  },
  {
    icon: Users,
    title: 'Augenhöhe & Würde',
    description: 'Unsere Arbeit ist eine Herzensangelegenheit. Wir möchten, dass Sie sich sicher und gut aufgehoben fühlen.',
    color: 'from-[#26A69A] to-[#00897B]',
    bgLight: 'bg-[#E0F2F1]'
  },
  {
    icon: Sparkles,
    title: 'Mehr als Hilfe',
    description: 'Unser Ziel ist es nicht, einfach nur Aufgaben abzuarbeiten. Wir wollen Ihren Alltag wirklich ein Stück heller machen.',
    color: 'from-[#7B1FA2] to-[#9C27B0]',
    bgLight: 'bg-[#F3E5F5]'
  },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section - Premium */}
      <section className="relative min-h-[70vh] flex items-center px-4 overflow-hidden">
        {/* Sophisticated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F0] to-[#E8F5E9]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFD54F]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#26A69A]/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto py-20">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-100 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-[#26A69A] to-[#00897B] rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#37474F]">Das Herz hinter Morgenlicht</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-[#0D6E64] mb-6 leading-tight">
              Über uns
            </h1>

            <p className="text-2xl sm:text-3xl text-[#546E7A] leading-relaxed mb-6 max-w-3xl mx-auto">
              Unterstützung auf Augenhöhe – <span className="font-semibold text-[#0D6E64]">mit Herz, Hand und Verstand.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story - Premium Design */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#26A69A]/20 via-[#4DB6AC]/10 to-[#FFD54F]/20 rounded-3xl blur-2xl" />

                {/* Main photo frame */}
                <div className="relative bg-gradient-to-br from-[#E0F2F1] to-[#B2DFDB] rounded-3xl p-3 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
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
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#26A69A] to-[#00897B] rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#546E7A]">Zertifiziert</div>
                      <div className="font-bold text-[#0D6E64]">§ 45a SGB XI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF8E1] rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#FFA726]" />
                <span className="text-sm font-medium text-[#B8472A]">Gründerin & Geschäftsführerin</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#37474F] mb-4">
                Asiye Duman
              </h2>

              <p className="text-lg text-[#0D6E64] font-medium mb-8">
                Morgenlicht Alltagshilfe Berlin
              </p>

              <div className="space-y-6 text-[#546E7A] leading-relaxed">
                <p className="text-lg">
                  Hinter der Gründung von Morgenlicht steht meine <strong>langjährige Erfahrung im sozialen Bereich</strong>. Über viele Jahre hinweg habe ich Menschen in unterschiedlichsten Lebenslagen beraten und unterstützt.
                </p>

                <p>
                  Dabei habe ich eines gelernt: <strong className="text-[#0D6E64]">Der Mensch muss immer im Mittelpunkt stehen.</strong>
                </p>

                <p>
                  Den Impuls für die Gründung gaben Beobachtungen aus meinem eigenen Alltag im Kiez. Ich habe gesehen, wie schwer es für meine Nachbarin war, die schweren Einkaufstaschen allein bis in den 4. Stock zu tragen. Ich habe erlebt, wie hilflos man sich nach einer Operation fühlen kann, wenn man plötzlich Hilfe bei der einfachsten Essenszubereitung braucht.
                </p>

                <p>
                  Oft möchten die Angehörigen helfen, stoßen aber selbst an ihre Grenzen. Genau hier setzen wir an. Mein Ziel war es, eine Unterstützung zu schaffen, die nicht nur eine "Dienstleistung" ist, sondern eine <strong className="text-[#0D6E64]">würdevolle Begleitung auf Augenhöhe</strong>.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-10 pt-10 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-[#0D6E64]">500+</div>
                  <div className="text-sm text-[#546E7A]">Zufriedene Kunden</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0D6E64]">5★</div>
                  <div className="text-sm text-[#546E7A]">Durchschnittsbewertung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Premium Cards */}
      <section className="py-20 px-4 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#37474F] mb-5">
              Was uns wichtig ist
            </h2>
            <p className="text-xl text-[#546E7A] max-w-2xl mx-auto">
              Erfahrung und viel Herz – das ist unser Versprechen an Sie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <div key={value.title} className="group">
                  <div className={`h-full rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 ${value.bgLight}`}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#37474F] mb-4">{value.title}</h3>
                    <p className="text-[#546E7A] leading-relaxed text-lg">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Highlight Card */}
          <GlassCard className="p-10 bg-gradient-to-br from-[#0D6E64] to-[#26A69A] border-0 shadow-xl">
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                Bei Morgenlicht kombinieren wir fachliche Erfahrung aus der sozialen Arbeit mit echter, <strong>menschlicher Wärme</strong>. Wir verstehen sehr gut, dass es nicht einfach ist, jemanden Fremden in die Wohnung zu lassen und Hilfe anzunehmen. Deshalb gibt es bei uns <strong className="text-[#FFD54F]">keine Standard-Lösungen von der Stange</strong>.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Berlin Love Section - Premium */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#E0F2F1] to-[#B2DFDB] rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute top-8 left-8 w-4 h-4 bg-[#0D6E64] rounded-full" />
              <div className="absolute top-8 right-8 w-4 h-4 bg-[#0D6E64] rounded-full" />
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-[#0D6E64] rounded-full" />
              <div className="absolute bottom-8 right-8 w-4 h-4 bg-[#0D6E64] rounded-full" />
            </div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <MapPin className="w-10 h-10 text-[#0D6E64]" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#0D6E64] mb-6">
                Ein Herz für Berlin
              </h3>

              <p className="text-xl text-[#37474F] max-w-2xl mx-auto leading-relaxed mb-6">
                Wir lieben die Vielfalt unserer Stadt. Unser Ziel ist es, dass gerade die Menschen, die Berlin zu dem gemacht haben, was es heute ist, <strong className="text-[#0D6E64]">hier gut versorgt und glücklich alt werden können</strong>.
              </p>

              <p className="text-lg text-[#546E7A]">
                Egal ob es um den Haushalt, Begleitung zum Arzt oder gemeinsames Einkaufen geht – wir sind für Sie da.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FAFAFA] to-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-9xl text-[#FFD54F]/20 font-serif" aria-hidden="true">
              "
            </div>
            <GlassCard className="p-10 md:p-16 text-center relative">
              <Quote className="w-12 h-12 text-[#FFD54F] mx-auto mb-6" />
              <blockquote className="mb-8">
                <p className="text-2xl md:text-3xl text-[#37474F] font-medium leading-relaxed italic">
                  "Jeder Mensch verdient Unterstützung, die Würde und Respekt zeigt – genau das wollen wir jeden Tag bei Morgenlicht leben."
                </p>
              </blockquote>
              <cite className="text-[#0D6E64] font-semibold not-italic">
                — Asiye Duman
              </cite>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Trust Badge - Premium */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#FFF8E1] to-[#FFECB3] rounded-3xl p-10 text-center border border-[#FFD54F]/20 shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#B8472A] to-[#FFD54F] rounded-2xl shadow-lg mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#37474F] mb-4">
              Anerkannter Anbieter nach § 45a SGB XI
            </h3>
            <p className="text-lg text-[#546E7A] max-w-lg mx-auto leading-relaxed">
              Morgenlicht Alltagshilfe ist als anerkannter Anbieter zugelassen. Ihre Pflegekasse übernimmt die Kosten im Rahmen des Entlastungsbetrags – <strong className="text-[#0D6E64]">100% für Sie kostenlos</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0D6E64] to-[#26A69A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lernen Sie uns kennen
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Wir freuen uns auf ein unverbindliches Gespräch mit Ihnen. Rufen Sie an oder schreiben Sie uns.
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
